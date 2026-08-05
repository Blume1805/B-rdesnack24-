// Prüft die eine Zusage, auf die sich sechs Aufrufer verlassen:
// `sendMail` wirft nicht.
//
// Anlass (05.08.2026): Sie stand als Kommentar über der Funktion, galt aber
// nicht. Der `fetch`-Aufruf an Resend war ungefangen, und ein Wurf dort
// riss den Aufrufer mit — beim Passwort-Reset ein 500 ohne jede Spur:
// `email_log` leer, bei Resend nichts angekommen. `subscription-cancel`
// hätte im selben Fall eine bereits gespeicherte Kündigung mit einem
// Fehler quittiert.
//
// Ein Kommentar ist keine Zusicherung. Ein Test ist eine.
import { assert, assertEquals, assertStringIncludes } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { sendMail } from "./send.ts";

/// Tauscht `fetch` und stellt es danach wieder her.
async function mitFetch(
  ersatz: typeof globalThis.fetch,
  fn: () => Promise<void>,
): Promise<void> {
  const original = globalThis.fetch;
  globalThis.fetch = ersatz;
  try {
    await fn();
  } finally {
    globalThis.fetch = original;
  }
}

const mail = {
  to: "kundin@example.org",
  subject: "Test",
  html: "<p>Test</p>",
  text: "Test",
  tag: "test",
};

Deno.test("sendMail wirft nicht, wenn der Aufruf an Resend wirft", async () => {
  Deno.env.set("RESEND_API_KEY", "re_test");
  // Ohne SUPABASE_URL/SERVICE_ROLE_KEY überspringt logMail sich selbst —
  // hier geht es allein darum, dass nichts nach aussen dringt.
  Deno.env.delete("SUPABASE_URL");

  await mitFetch(
    () => Promise.reject(new TypeError("error sending request")),
    async () => {
      const status = await sendMail(mail);
      assertEquals(status, "failed");
    },
  );
});

Deno.test("sendMail schneidet Leerraum um den Schlüssel weg", async () => {
  // Nur Hygiene, ausdrücklich kein Schutz: Umschliessenden Leerraum
  // entfernt die Header-Verarbeitung ohnehin. Ein Umbruch MITTEN im Wert
  // lässt `fetch` werfen — das fängt der Test darüber ab, nicht dieser.
  Deno.env.set("RESEND_API_KEY", "re_test\n");
  Deno.env.delete("SUPABASE_URL");

  let gesehen = "";
  await mitFetch(
    (_url, init) => {
      gesehen = new Headers(init?.headers).get("Authorization") ?? "";
      return Promise.resolve(new Response("{}", { status: 200 }));
    },
    async () => {
      const status = await sendMail(mail);
      assertEquals(status, "sent");
    },
  );
  // `trim()` greift, sonst wäre der Header gar nicht erst zustande gekommen.
  assertEquals(gesehen, "Bearer re_test");
});

Deno.test("sendMail meldet eine Absage von Resend als failed", async () => {
  Deno.env.set("RESEND_API_KEY", "re_test");
  Deno.env.delete("SUPABASE_URL");

  await mitFetch(
    () => Promise.resolve(new Response(`{"message":"domain not verified"}`, { status: 403 })),
    async () => {
      assertEquals(await sendMail(mail), "failed");
    },
  );
});

Deno.test("sendMail ohne Schlüssel: dev statt Versand", async () => {
  Deno.env.delete("RESEND_API_KEY");
  Deno.env.delete("SUPABASE_URL");

  let gerufen = false;
  await mitFetch(
    () => {
      gerufen = true;
      return Promise.resolve(new Response("{}", { status: 200 }));
    },
    async () => {
      assertEquals(await sendMail(mail), "dev");
    },
  );
  assert(!gerufen, "ohne Schlüssel darf Resend nicht gerufen werden");
});

Deno.test("sendMail reicht die Resend-Id weiter", async () => {
  Deno.env.set("RESEND_API_KEY", "re_test");
  Deno.env.delete("SUPABASE_URL");

  let körper = "";
  await mitFetch(
    (_url, init) => {
      körper = String(init?.body ?? "");
      return Promise.resolve(new Response(`{"id":"abc-123"}`, { status: 200 }));
    },
    async () => {
      assertEquals(await sendMail(mail), "sent");
    },
  );
  assertStringIncludes(körper, `"subject":"Test"`);
});
