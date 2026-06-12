
const crypto = require("crypto");
function makeToken(password){
  const payload = { role:"admin", exp: Date.now() + 1000*60*60*24 };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", password).update(body).digest("base64url");
  return `${body}.${sig}`;
}
function verifyToken(event){
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return { ok:false, message:"ADMIN_PASSWORD Environment variables ichida yo‘q." };
  const auth = event.headers.authorization || event.headers.Authorization || "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (!token || !token.includes(".")) return { ok:false, message:"Admin token topilmadi. Qayta login qiling." };
  const [body, sig] = token.split(".");
  const expected = crypto.createHmac("sha256", password).update(body).digest("base64url");
  if (sig !== expected) return { ok:false, message:"Admin token noto‘g‘ri." };
  try{
    const payload = JSON.parse(Buffer.from(body,"base64url").toString("utf8"));
    if (Date.now() > payload.exp) return { ok:false, message:"Sessiya muddati tugagan. Qayta login qiling." };
    return { ok:true, payload };
  }catch(e){ return { ok:false, message:"Token o‘qilmadi." }; }
}
function json(statusCode, data){
  return { statusCode, headers: {
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Headers":"Content-Type, Authorization",
    "Access-Control-Allow-Methods":"GET, POST, OPTIONS",
    "Content-Type":"application/json; charset=utf-8"
  }, body: JSON.stringify(data) };
}
module.exports = { makeToken, verifyToken, json };
