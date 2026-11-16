// Startet den Handler mit einem Ersatz für Deno.serve und createClient und prüft:
// ohne Marke 401 ohne Fremdabruf; mit abgelehnter Marke 401; mit gültiger Marke Abruf.
let handler: (r: Request) => Promise<Response>;
(Deno as any).serve = (h: any) => { handler = h; };
Deno.env.set('SUPABASE_URL', 'http://x'); Deno.env.set('SUPABASE_SERVICE_ROLE_KEY', 'dummy');
const calls: string[] = [];
let gueltig = false;
(globalThis as any).__sb = {
  rpc: (n: string, a: any) => { calls.push('rpc:' + n + ':' + a.p_marke); return Promise.resolve({ data: gueltig, error: null }); },
  from: (t: string) => { calls.push('from:' + t); return {
    select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: { lat: 52, lng: 11, enabled: true }, error: null }) }) }),
    upsert: () => Promise.resolve({ error: null }) }; },
};
globalThis.fetch = (u: any) => { calls.push('fetch'); return Promise.resolve(new Response(JSON.stringify({ weather: [{ timestamp: '2026-11-16T10:00', temperature: 5, condition: 'dry' }] }))); };
await import('../wt-audit/supabase/functions/weather-sync/index.ts');
const M = '123e4567-e89b-12d3-a456-426614174000';
const fall = async (name: string, req: Request, soll: number) => {
  calls.length = 0; const r = await handler(req); const b = await r.text();
  console.log(`${r.status === soll ? 'OK  ' : 'FEHL'} ${name}: ${r.status} ${b} | ${calls.join(',')}`);
};
await fall('GET', new Request('http://f', { method: 'GET' }), 405);
await fall('ohne Marke', new Request('http://f', { method: 'POST' }), 401);
await fall('Unsinn-Marke', new Request('http://f', { method: 'POST', headers: { 'x-bs24-marke': "x' or 1=1" } }), 401);
gueltig = false;
await fall('abgelehnte Marke', new Request('http://f', { method: 'POST', headers: { 'x-bs24-marke': M } }), 401);
gueltig = true;
await fall('gültige Marke', new Request('http://f', { method: 'POST', headers: { 'x-bs24-marke': M } }), 200);
