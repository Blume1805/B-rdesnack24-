import {
  assert,
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  parseHookSecret,
  verifyWebhookSignature,
  WebhookError,
} from "./webhook.ts";
import {
  authActionEmail,
  authNotificationEmail,
  buildVerifyUrl,
} from "./templates/auth.ts";
import { remainingPlaceholders } from "./render.ts";

const SECRET_B64 = "c3VwZXItZ2VoZWltZXMtdGVzdC1zZWNyZXQ=";
const SECRET = `v1,whsec_${SECRET_B64}`;
const NOW = 1_785_650_000;

async function sign(payload: string, id: string, ts: number): Promise<string> {
  const raw = parseHookSecret(SECRET);
  const key = await crypto.subtle.importKey(
    "raw",
    raw as unknown as ArrayBuffer,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${id}.${ts}.${payload}`) as unknown as ArrayBuffer,
  );
  const view = new Uint8Array(mac);
  let bin = "";
  for (let i = 0; i < view.length; i++) bin += String.fromCharCode(view[i]);
  return `v1,${btoa(bin)}`;
}

function headers(id: string, ts: number, sig: string): Headers {
  return new Headers({
    "webhook-id": id,
    "webhook-timestamp": String(ts),
    "webhook-signature": sig,
  });
}

Deno.test("parseHookSecret akzeptiert das Supabase-Format und nacktes Base64", () => {
  assertEquals(parseHookSecret(SECRET), parseHookSecret(SECRET_B64));
});

Deno.test("parseHookSecret lehnt leeres Secret ab", () => {
  let threw = false;
  try {
    parseHookSecret("v1,whsec_");
  } catch (e) {
    threw = e instanceof WebhookError;
  }
  assert(threw, "leeres Secret wurde akzeptiert");
});

Deno.test("gültige Signatur wird angenommen", async () => {
  const payload = '{"user":{"email":"a@b.de"}}';
  const sig = await sign(payload, "msg_1", NOW);
  await verifyWebhookSignature({
    payload,
    headers: headers("msg_1", NOW, sig),
    secret: SECRET,
    nowSeconds: NOW,
  });
});

Deno.test("verändertes Payload fliegt auf", async () => {
  const sig = await sign('{"a":1}', "msg_1", NOW);
  await assertRejects(
    () =>
      verifyWebhookSignature({
        payload: '{"a":2}',
        headers: headers("msg_1", NOW, sig),
        secret: SECRET,
        nowSeconds: NOW,
      }),
    WebhookError,
  );
});

Deno.test("fremdes Secret fliegt auf", async () => {
  const payload = '{"a":1}';
  const sig = await sign(payload, "msg_1", NOW);
  await assertRejects(
    () =>
      verifyWebhookSignature({
        payload,
        headers: headers("msg_1", NOW, sig),
        secret: "v1,whsec_ZmFsc2NoZXMtc2VjcmV0",
        nowSeconds: NOW,
      }),
    WebhookError,
  );
});

Deno.test("alter Zeitstempel wird abgewiesen (Replay-Schutz)", async () => {
  const payload = '{"a":1}';
  const old = NOW - 3600;
  const sig = await sign(payload, "msg_1", old);
  await assertRejects(
    () =>
      verifyWebhookSignature({
        payload,
        headers: headers("msg_1", old, sig),
        secret: SECRET,
        nowSeconds: NOW,
      }),
    WebhookError,
  );
});

Deno.test("fehlende Header werden abgewiesen", async () => {
  await assertRejects(
    () =>
      verifyWebhookSignature({
        payload: "{}",
        headers: new Headers(),
        secret: SECRET,
        nowSeconds: NOW,
      }),
    WebhookError,
  );
});

Deno.test("mehrere Signaturen im Header: eine passende genügt", async () => {
  const payload = '{"a":1}';
  const good = await sign(payload, "msg_1", NOW);
  await verifyWebhookSignature({
    payload,
    headers: headers("msg_1", NOW, `v1,ZmFsc2No ${good}`),
    secret: SECRET,
    nowSeconds: NOW,
  });
});

Deno.test("buildVerifyUrl setzt Token, Typ und Rücksprungziel", () => {
  const url = buildVerifyUrl({
    supabaseUrl: "https://proj.supabase.co/",
    tokenHash: "abc123",
    action: "signup",
    redirectTo: "https://app.example/#/home",
  });
  assert(url.startsWith("https://proj.supabase.co/auth/v1/verify?"), url);
  const q = new URL(url).searchParams;
  assertEquals(q.get("token"), "abc123");
  assertEquals(q.get("type"), "signup");
  assertEquals(q.get("redirect_to"), "https://app.example/#/home");
});

Deno.test("buildVerifyUrl lässt redirect_to weg, wenn keins da ist", () => {
  const url = buildVerifyUrl({
    supabaseUrl: "https://proj.supabase.co",
    tokenHash: "t",
    action: "recovery",
    redirectTo: "",
  });
  assert(!url.includes("redirect_to"), url);
});

Deno.test("Aktionsmail: Registrierung trägt Link, Code und Absicherung", () => {
  const mail = authActionEmail({
    action: "signup",
    verifyUrl: "https://proj.supabase.co/auth/v1/verify?token=t&type=signup",
    code: "123456",
  })!;
  assert(mail !== null);
  assertEquals(mail.subject, "Bördesnack24: Bitte bestätige deine E-Mail-Adresse");
  assert(mail.html.includes("E-Mail-Adresse bestätigen"));
  assert(mail.html.includes("123456"), "Zifferncode fehlt");
  assert(mail.text.includes("123456"), "Zifferncode fehlt im Text");
  // Wer die Mail nicht angefordert hat, muss das lesen können.
  assert(mail.html.includes("nicht angefordert"));
  assertEquals(remainingPlaceholders(mail.html), []);
  assertEquals(remainingPlaceholders(mail.text), []);
});

Deno.test("Aktionsmail: Reauthentication kommt ohne Button aus", () => {
  const mail = authActionEmail({ action: "reauthentication", verifyUrl: "x", code: "999888" })!;
  assert(!mail.html.includes("<a href=\"x\""), "Button trotz reiner Code-Mail");
  assert(mail.html.includes("999888"));
});

Deno.test("Aktionsmail: unbekannter Typ liefert null statt zu werfen", () => {
  assertEquals(authActionEmail({ action: "voellig_neu", verifyUrl: "x", code: "1" }), null);
});

Deno.test("Aktionsmail: Verify-URL wird escaped in den Fließtext gesetzt", () => {
  const mail = authActionEmail({
    action: "recovery",
    verifyUrl: "https://x/auth/v1/verify?token=a&type=recovery",
    code: "1",
  })!;
  // Das & aus der Query darf nicht roh im HTML landen.
  assert(mail.html.includes("token=a&amp;type=recovery"), "URL nicht escaped");
});

Deno.test("Benachrichtigung: Passwortwechsel nennt den Weg zum Support", () => {
  const mail = authNotificationEmail({ action: "password_changed_notification" })!;
  assertEquals(mail.subject, "Bördesnack24: Dein Passwort wurde geändert");
  assert(mail.html.includes("boerdesnack24@gmail.com"));
  assert(mail.html.includes("Warst du das nicht"));
  assertEquals(remainingPlaceholders(mail.html), []);
});

Deno.test("Benachrichtigung: unbekannter Typ liefert null", () => {
  assertEquals(authNotificationEmail({ action: "signup" }), null);
});
