import "@tanstack/react-start/server-entry";

export default {
  async fetch(request:Request, env:unknown, ctx:unknown) {
    const mod = await import("@tanstack/react-start/server-entry");
    const handler = (mod.default ?? mod) as {fetch:(request:Request,env:unknown,ctx:unknown)=>Promise<Response>|Response};
    return handler.fetch(request,env,ctx);
  },
};