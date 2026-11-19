// Erzeugt das Schlüsselpaar für Web-Push (VAPID, P-256).
// Aufruf: deno run scripts/vapid_schluessel_erzeugen.ts > datei.json
// Ausgabe: {"VAPID_PUBLIC_KEY": "...", "VAPID_PRIVATE_D": "..."}
// Beide Werte gehören als Geheimnisse an die Server-Funktionen (Supabase →
// Edge Functions → Secrets). Der private Teil darf nie in Chat, Repository
// oder App gelangen; die Datei danach löschen.
const p = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
const roh = new Uint8Array(await crypto.subtle.exportKey("raw", p.publicKey));
const jwk = await crypto.subtle.exportKey("jwk", p.privateKey);
const b64u = (b: Uint8Array) => btoa(String.fromCharCode(...b)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
console.log(JSON.stringify({ VAPID_PUBLIC_KEY: b64u(roh), VAPID_PRIVATE_D: jwk.d }));
