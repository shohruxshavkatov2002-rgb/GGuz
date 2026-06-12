
const { getStore } = require("@netlify/blobs");
const { verifyToken, json } = require("./_auth");
exports.handler = async function(event){
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod === "GET") {
    const auth = verifyToken(event);
    if (!auth.ok) return json(401, { ok:false, message: auth.message });
    const store = getStore("bitu-leads");
    const leads = await store.get("leads.json", { type:"json" }).catch(() => []);
    return json(200, { ok:true, leads:Array.isArray(leads) ? leads : [] });
  }
  return json(405, { ok:false, message:"Method not allowed." });
};
