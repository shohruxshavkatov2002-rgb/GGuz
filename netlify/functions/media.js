const { getStore } = require("@netlify/blobs");
const { json, isAuthed, parseBody } = require("./_shared");

const STORE_NAME = "bitu-media";

function safeName(name) {
  return String(name || "file")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, { ok: true });

  const store = getStore(STORE_NAME);

  if (event.httpMethod === "GET") {
    const key = event.queryStringParameters && event.queryStringParameters.key;
    if (!key) return { statusCode: 404, body: "Not found" };

    const file = await store.get(key, { type: "json" }).catch(() => null);
    if (!file || !file.base64) return { statusCode: 404, body: "Not found" };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": file.contentType || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      body: file.base64,
      isBase64Encoded: true
    };
  }

  if (event.httpMethod === "POST") {
    if (!isAuthed(event)) return json(401, { ok: false, error: "Unauthorized" });

    const body = parseBody(event);
    const dataUrl = String(body.dataUrl || "");
    const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!match) return json(400, { ok: false, error: "Invalid file data" });

    const contentType = body.contentType || match[1] || "application/octet-stream";
    const base64 = match[2];
    const key = Date.now() + "-" + Math.random().toString(36).slice(2, 8) + "-" + safeName(body.filename);
    await store.setJSON(key, { contentType, base64 });

    return json(200, {
      ok: true,
      key,
      url: `/.netlify/functions/media?key=${encodeURIComponent(key)}`
    });
  }

  return json(405, { ok: false, error: "Method not allowed" });
};
