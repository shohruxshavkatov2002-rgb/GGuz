
const { getStore } = require("@netlify/blobs");
const { json } = require("./_auth");

exports.handler = async function(event){
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { ok:false, message:"Faqat POST." });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return json(500, { ok:false, message:"TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan." });

  let data = {};
  try { data = JSON.parse(event.body || "{}"); } catch(e){ return json(400, { ok:false, message:"JSON noto‘g‘ri." }); }
  const clean = v => String(v || "").trim().slice(0, 900);
  const lead = {
    id: Date.now() + "-" + Math.random().toString(36).slice(2,9),
    createdAt: new Date().toISOString(),
    name: clean(data.name || data.fullName || data.full_name),
    phone: clean(data.phone || data.tel),
    stage: clean(data.stage || data.level || data.mode || data.studyMode || data.formMode),
    program: clean(data.program || data.direction || data.yonalish),
    message: clean(data.message || data.comment || data.note),
    source: "BITU landing page"
  };
  if (!lead.name || !lead.phone) return json(400, { ok:false, message:"Ism va telefon majburiy." });

  const store = getStore("bitu-leads");
  const old = await store.get("leads.json", { type:"json" }).catch(() => []);
  const leads = Array.isArray(old) ? old : [];
  leads.unshift(lead);
  await store.setJSON("leads.json", leads.slice(0, 2000));

  const text = `🩺 <b>BITU saytidan yangi ariza</b>\n\n👤 <b>Ism:</b> ${esc(lead.name)}\n📞 <b>Telefon:</b> ${esc(lead.phone)}\n🎓 <b>Bosqich:</b> ${esc(lead.stage || "Ko‘rsatilmagan")}\n📚 <b>Yo‘nalish:</b> ${esc(lead.program || "Ko‘rsatilmagan")}\n💬 <b>Izoh:</b> ${esc(lead.message || "Yo‘q")}\n\n🕒 <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ",{timeZone:"Asia/Tashkent"})}`;

  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode:"HTML" })
  });
  const tgData = await tg.json().catch(()=>({}));
  if (!tg.ok || tgData.ok === false) return json(502, { ok:false, message:"Ariza bazaga yozildi, lekin Telegramga bormadi.", details: tgData.description });
  return json(200, { ok:true, message:"Ariza yuborildi." });
};
function esc(v){ return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"); }
