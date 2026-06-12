const { getStore } = require("@netlify/blobs");
const { json, isAuthed, loadDefaultData, parseBody } = require("./_shared");

const STORE_NAME = "bitu-cms";
const DATA_KEY = "site-data";

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, { ok: true });

  const store = getStore(STORE_NAME);

  if (event.httpMethod === "GET") {
    const saved = await store.get(DATA_KEY, { type: "json" }).catch(() => null);
    return json(200, saved || loadDefaultData());
  }

  if (event.httpMethod === "POST") {
    if (!isAuthed(event)) return json(401, { ok: false, error: "Unauthorized" });
    const body = parseBody(event);
    if (!body || typeof body !== "object" || !body.i18n || !body.common) {
      return json(400, { ok: false, error: "Invalid site data" });
    }
    await store.setJSON(DATA_KEY, body);
    return json(200, { ok: true, savedAt: new Date().toISOString() });
  }

  return json(405, { ok: false, error: "Method not allowed" });
};
