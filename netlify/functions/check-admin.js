const { json, parseBody } = require("./_shared");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, { ok: true });
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "Method not allowed" });

  const body = parseBody(event);
  const expected = process.env.ADMIN_PASSWORD || "12345678";

  if (String(body.password || "") !== String(expected)) {
    return json(401, { ok: false, error: "Wrong password" });
  }

  return json(200, { ok: true });
};
