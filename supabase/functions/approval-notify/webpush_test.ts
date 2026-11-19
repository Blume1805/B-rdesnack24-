// deno-lint-ignore-file no-explicit-any
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { b64u, importiere, leseAbo, vapidKopf, verschluessele, vonB64u } from "./webpush.ts";

// RFC 8291, Anhang A
const rfc = {
  klar: "When I grow up, I want to be a watermelon",
  asPublic: "BP4z9KsN6nGRTbVYI_c7VJSPQTBtkgcy27mlmlMoZIIgDll6e3vCYLocInmYWAmS6TlzAC8wEqKK6PBru3jl7A8",
  asPrivate: "yfWPiYE-n46HLnH0KqZOF1fJJU3MYrct3AELtAQ-oRw",
  uaPublic: "BCVxsr7N_eNgVRqvHtD0zTZsEc6-VV-JvLexhqUzORcxaOzi6-AYWXvTBHm4bjyPjs7Vd8pZGH6SRpkNtoIAiw4",
  auth: "BTBZMqHH6r4Tts7J_aSIgg",
  salz: "DGv6ra1nlYgDCS1FRnbzlw",
  ergebnis:
    "DGv6ra1nlYgDCS1FRnbzlwAAEABBBP4z9KsN6nGRTbVYI_c7VJSPQTBtkgcy27mlmlMoZIIgDll6e3vCYLocInmYWAmS6TlzAC8wEqKK6PBru3jl7A_yl95bQpu6cVPTpK4Mqgkf1CXztLVBSt2Ks3oZwbuwXPXLWyouBWLVWGNWQexSgSxsj_Qulcy4a-fN",
};

Deno.test("RFC 8291 Anhang A: Verschlüsselung stimmt Byte für Byte", async () => {
  const server = await importiere(vonB64u(rfc.asPublic), rfc.asPrivate, "ecdh");
  const out = await verschluessele(
    new TextEncoder().encode(rfc.klar),
    vonB64u(rfc.uaPublic),
    vonB64u(rfc.auth),
    { salz: vonB64u(rfc.salz), server },
  );
  assertEquals(b64u(out), rfc.ergebnis);
});

Deno.test("VAPID-Kopf: gültige ES256-Signatur, Zielgruppe = Ursprung des Endpunkts", async () => {
  const p = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const pub = new Uint8Array(await crypto.subtle.exportKey("raw", p.publicKey));
  const jwk: any = await crypto.subtle.exportKey("jwk", p.privateKey);
  const vapid = await importiere(pub, jwk.d, "ecdsa");
  const kopf = await vapidKopf("https://web.push.apple.com/abc?x=1", vapid, "mailto:info@example.invalid");
  const m = /^vapid t=([^,]+), k=(.+)$/.exec(kopf)!;
  const [h, n, s] = m[1].split(".");
  assertEquals(m[2], b64u(pub));
  assertEquals(JSON.parse(new TextDecoder().decode(vonB64u(n))).aud, "https://web.push.apple.com");
  const ok = await crypto.subtle.verify(
    { name: "ECDSA", hash: "SHA-256" },
    p.publicKey,
    vonB64u(s),
    new TextEncoder().encode(`${h}.${n}`),
  );
  assertEquals(ok, true);
});

Deno.test("leseAbo: nur https-Endpunkt mit beiden Schlüsseln", () => {
  assertEquals(leseAbo("kein json"), null);
  assertEquals(leseAbo(JSON.stringify({ endpoint: "http://x", keys: { p256dh: "a", auth: "b" } })), null);
  assertEquals(leseAbo(JSON.stringify({ endpoint: "https://x" })), null);
  assertEquals(leseAbo(JSON.stringify({ endpoint: "https://x", keys: { p256dh: "a", auth: "b" } }))?.endpoint, "https://x");
});
