const { getStore } = require("@netlify/blobs");
const { json, isAuthed, parseBody } = require("./_shared");

const STORE_NAME = "bitu-cms";
const LEADS_KEY = "leads";

async function getLeads(store) {
  const leads = await store.get(LEADS_KEY, { type: "json" }).catch(() => []);
  return Array.isArray(leads) ? leads : [];
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, { ok: true });

  const store = getStore(STORE_NAME);

  if (event.httpMethod === "GET") {
    if (!isAuthed(event)) return json(401, { ok: false, error: "Unauthorized" });
    return json(200, await getLeads(store));
  }

  if (event.httpMethod === "POST") {
    const body = parseBody(event);
    const lead = {
      id: body.id || (Date.now() + "-" + Math.random().toString(36).slice(2, 9)),
      createdAt: body.createdAt || new Date().toISOString(),
      name: String(body.name || "").trim(),
      phone: String(body.phone || "").trim(),
      stage: String(body.stage || "").trim(),
      program: String(body.program || "").trim(),
      message: String(body.message || "").trim(),
      page: String(body.page || "").trim()
    };

    if (!lead.name || !lead.phone) {
      return json(400, { ok: false, error: "Name and phone are required" });
    }

    const leads = await getLeads(store);
    leads.unshift(lead);
    await store.setJSON(LEADS_KEY, leads.slice(0, 1000));
    return json(200, { ok: true, lead });
  }

  return json(405, { ok: false, error: "Method not allowed" });
};
