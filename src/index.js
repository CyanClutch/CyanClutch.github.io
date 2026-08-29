export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/clutch-check") {
      const origin = request.headers.get("Origin");
      if (origin && origin !== url.origin) return json({ok:false},403);
      if (!env.CLUTCH_SERVER_KEY) return json({ok:false},503);
      return json({ok:true,server:"clutch",checkedAt:new Date().toISOString()});
    }
    return env.ASSETS.fetch(request);
  }
};
function json(body,status=200){
  return new Response(JSON.stringify(body),{status,headers:{
    "content-type":"application/json; charset=utf-8",
    "cache-control":"no-store, no-cache, must-revalidate"
  }});
}
