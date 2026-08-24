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
import { headerProblem, sendMail } from "./send.ts";

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

Deno.test("headerProblem findet genau die Zeichen, an denen fetch wirft", () => {
  assertEquals(headerProblem("re_abc123"), null);
  // Latin-1 ist als Header-Wert zulässig — hier darf nichts gemeldet werden.
  assertEquals(headerProblem("re_abcä"), null);

  /// Verlangt einen Befund und gibt ihn zurück.
  const befund = (wert: string): string => {
    const p = headerProblem(wert);
    if (p === null) throw new Error(`erwarteter Befund blieb aus`);
    return p;
  };

  // Das unsichtbare Zeichen, das ein verunglücktes Einfügen hinterlässt.
  const zwsp = befund("re_ab​c");
  assertStringIncludes(zwsp, "Stelle 6 von 7");
  assertStringIncludes(zwsp, "U+200B");

  assertStringIncludes(befund("re_a\nb"), "Steuerzeichen");

  // Das Geheimnis selbst darf in keiner Meldung auftauchen.
  assert(!zwsp.includes("re_ab"));
});

Deno.test("sendMail schickt einen unbrauchbaren Schlüssel gar nicht erst los", async () => {
  Deno.env.set("RESEND_API_KEY", "re_ab​c");
  Deno.env.delete("SUPABASE_URL");

  let gerufen = false;
  await mitFetch(
    () => {
      gerufen = true;
      return Promise.resolve(new Response("{}", { status: 200 }));
    },
    async () => {
      assertEquals(await sendMail(mail), "failed");
    },
  );
  assert(!gerufen, "unbrauchbarer Schlüssel darf keinen Aufruf ausloesen");
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

// ---------------------------------------------------------------------------
// Auth-Mails: Betreff ja, Körper nein.
//
// Anlass (23.08.2026, Sicherheitsdurchsicht): `logMail` schrieb den
// vollständigen Körper jeder Mail nach `email_log`. Seit die Auth-Mails
// durch denselben Sammelpunkt laufen, stand damit der Bestätigungslink
// samt `token_hash` und der Einmalcode in einer Tabelle, die interne
// Rollen lesen dürfen — ein gültiger Zugang zu jedem Konto, für das
// jemand eine Zurücksetzung auslöst.
//
// Der Schutz ist ein einzelnes Feld am Aufruf. Genau deshalb gehört er
// getestet: Ein vergessenes `logBody: false` sieht aus wie nichts.
// ---------------------------------------------------------------------------

/// Fängt die Zeile ab, die `logMail` nach `email_log` schreiben will.
async function protokollzeile(
  opts: Parameters<typeof sendMail>[0],
): Promise<Record<string, unknown>> {
  Deno.env.set("SUPABASE_URL", "https://projekt.example");
  Deno.env.set("SUPABASE_SERVICE_ROLE_KEY", "service_test");
  // Ohne Resend-Schlüssel nimmt sendMail den Dev-Zweig — protokolliert
  // wird trotzdem, und genau darum geht es hier.
  Deno.env.delete("RESEND_API_KEY");

  let zeile: Record<string, unknown> = {};
  await mitFetch(
    (_url, init) => {
      zeile = JSON.parse(String(init?.body)) as Record<string, unknown>;
      return Promise.resolve(new Response("", { status: 201 }));
    },
    async () => {
      await sendMail(opts);
    },
  );
  return zeile;
}

const authMail = {
  to: "kundin@example.org",
  subject: "Passwort zurücksetzen",
  html: '<a href="https://projekt.example/auth/v1/verify?token=GEHEIM&type=recovery">Neu setzen</a>',
  text: "Code: 123456",
  tag: "auth-email-hook/recovery",
};

Deno.test("logBody: false lässt den Körper weg, behält aber die Nachweiskette", async () => {
  const zeile = await protokollzeile({ ...authMail, logBody: false });

  assertEquals(zeile.html, null);
  assertEquals(zeile.text_body, null);

  // Gegenprobe im selben Test: Der Wert darf auch nicht anderswo in der
  // Zeile auftauchen. Ein Protokoll, das den Token im Betreff führt, wäre
  // genauso offen wie vorher.
  assert(
    !JSON.stringify(zeile).includes("GEHEIM"),
    "token_hash steht weiterhin in der Protokollzeile",
  );
  assert(
    !JSON.stringify(zeile).includes("123456"),
    "Einmalcode steht weiterhin in der Protokollzeile",
  );

  // Was das Protokoll leisten soll, leistet es weiterhin.
  assertEquals(zeile.subject, "Passwort zurücksetzen");
  assertEquals(zeile.to_addresses, ["kundin@example.org"]);
  assertEquals(zeile.tag, "auth-email-hook/recovery");
  assertEquals(zeile.status, "dev");
});

Deno.test("ohne logBody bleibt der Körper im Protokoll", async () => {
  // Die Voreinstellung ändert sich nicht: Eine Kündigungsbestätigung soll
  // im Wortlaut belegbar bleiben.
  const zeile = await protokollzeile({
    to: "kundin@example.org",
    subject: "Kündigung bestätigt",
    html: "<p>Ihre Kündigung ist eingegangen.</p>",
    text: "Ihre Kündigung ist eingegangen.",
    tag: "subscription-cancel",
  });

  assertStringIncludes(String(zeile.html), "Kündigung ist eingegangen");
  assertEquals(zeile.text_body, "Ihre Kündigung ist eingegangen.");
});

// ---------------------------------------------------------------------------
// Antwortadresse: `noreply@` darf keine Sackgasse sein.
// ---------------------------------------------------------------------------

/// Fängt die Anfrage ab, die an Resend gehen soll.
async function resendAnfrage(
  opts: Parameters<typeof sendMail>[0],
): Promise<Record<string, unknown>> {
  Deno.env.set("RESEND_API_KEY", "re_test");
  Deno.env.delete("SUPABASE_URL");

  let körper: Record<string, unknown> = {};
  await mitFetch(
    (_url, init) => {
      körper = JSON.parse(String(init?.body)) as Record<string, unknown>;
      return Promise.resolve(
        new Response(JSON.stringify({ id: "test" }), { status: 200 }),
      );
    },
    async () => {
      await sendMail(opts);
    },
  );
  return körper;
}

Deno.test("jede Mail trägt eine Antwortadresse", async () => {
  const anfrage = await resendAnfrage(mail);
  // Schlangenschrift, weil die REST-Schnittstelle sie so erwartet — die
  // Kamelschrift gehört dem MCP-Werkzeug. Der Test hält den Unterschied
  // fest, damit ihn niemand „korrigiert".
  assertEquals(anfrage.reply_to, "boerdesnack24@gmail.com");
});

Deno.test("eine eigene Antwortadresse sticht die Voreinstellung", async () => {
  const anfrage = await resendAnfrage({
    ...mail,
    replyTo: "kontakt@boerdesnack24.de",
  });
  assertEquals(anfrage.reply_to, "kontakt@boerdesnack24.de");
});
