
const { makeToken, json } = require("./_auth");
exports.handler = async function(event){
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod === "GET") return json(200, { ok:true, message:"Admin login function ishlayapti.", hasAdminPassword:Boolean(process.env.ADMIN_PASSWORD) });
  if (event.httpMethod !== "POST") return json(405, { ok:false, message:"Faqat POST." });
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return json(500, { ok:false, message:"ADMIN_PASSWORD Netlify Environment variables ichida yo‘q." });
  let data = {};
  try { data = JSON.parse(event.body || "{}"); } catch(e){}
  if (data.password !== password) return json(401, { ok:false, message:"Parol noto‘g‘ri." });
  return json(200, { ok:true, token: makeToken(password) });
};
