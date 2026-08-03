// Ohne Fremdabhängigkeit, damit die Tests auch ohne Netz laufen.
function assert(bedingung: boolean, hinweis = "Bedingung nicht erfüllt"): void {
  if (!bedingung) throw new Error(hinweis);
}
function assertEquals<T>(ist: T, soll: T, hinweis?: string): void {
  const a = JSON.stringify(ist), b = JSON.stringify(soll);
  if (a !== b) throw new Error(hinweis ?? `erwartet ${b}, war ${a}`);
}

import { adresse, adressListe, eingangLesen, zeitpunkt } from "./parse.ts";

const JETZT = new Date("2026-08-03T12:00:00.000Z");

// --- Adressen --------------------------------------------------------------

Deno.test("adresse: reine Zeichenkette", () => {
  assertEquals(adresse("kunde@example.invalid"), "kunde@example.invalid");
});

Deno.test("adresse: als Objekt mit address/email/value", () => {
  assertEquals(adresse({ address: "a@x.invalid", name: "A" }), "a@x.invalid");
  assertEquals(adresse({ email: "b@x.invalid" }), "b@x.invalid");
  assertEquals(adresse({ value: "c@x.invalid" }), "c@x.invalid");
});

Deno.test("adresse: Unbrauchbares wird zu null, nicht zu 'undefined'", () => {
  assertEquals(adresse(null), null);
  assertEquals(adresse(""), null);
  assertEquals(adresse("   "), null);
  assertEquals(adresse({}), null);
  assertEquals(adresse(42), null);
});

Deno.test("adressListe: einzeln, Liste und Objektliste", () => {
  assertEquals(adressListe("a@x.invalid"), ["a@x.invalid"]);
  assertEquals(adressListe(["a@x.invalid", "b@x.invalid"]), ["a@x.invalid", "b@x.invalid"]);
  assertEquals(adressListe([{ address: "a@x.invalid" }, "b@x.invalid"]), ["a@x.invalid", "b@x.invalid"]);
});

Deno.test("adressListe: leere Einträge fallen raus statt null zu werden", () => {
  assertEquals(adressListe([null, "a@x.invalid", {}, ""]), ["a@x.invalid"]);
  assertEquals(adressListe(undefined), []);
});

// --- Zeitpunkt -------------------------------------------------------------

Deno.test("zeitpunkt: brauchbares Datum wird übernommen", () => {
  assertEquals(zeitpunkt("2026-07-01T10:30:00Z", JETZT), "2026-07-01T10:30:00.000Z");
});

Deno.test("zeitpunkt: Unlesbares fällt auf jetzt zurück", () => {
  assertEquals(zeitpunkt("gestern", JETZT), JETZT.toISOString());
  assertEquals(zeitpunkt(null, JETZT), JETZT.toISOString());
});

Deno.test("zeitpunkt: die 1970-Falle", () => {
  // Eine 0 oder ein leerer Wert ergäbe sonst den 01.01.1970 — im Protokoll
  // sähe der Eingang dann aus, als läge er 56 Jahre zurück.
  assertEquals(zeitpunkt(0, JETZT), JETZT.toISOString());
});

// --- Zuordnung -------------------------------------------------------------

Deno.test("eingangLesen: übliche Hülle mit data-Teil", () => {
  const e = eingangLesen({
    type: "email.received",
    created_at: "2026-08-01T09:00:00Z",
    data: {
      email_id: "abc-123",
      from: "kunde@example.invalid",
      to: ["info@boerdesnack24.de"],
      subject: "Frage zum Abo",
      html: "<p>Hallo</p>",
      text: "Hallo",
      created_at: "2026-08-01T09:00:00Z",
    },
  }, null, JETZT);

  assertEquals(e.from_address, "kunde@example.invalid");
  assertEquals(e.to_addresses, ["info@boerdesnack24.de"]);
  assertEquals(e.subject, "Frage zum Abo");
  assertEquals(e.html, "<p>Hallo</p>");
  assertEquals(e.text_body, "Hallo");
  assertEquals(e.provider_id, "abc-123");
  assertEquals(e.occurred_at, "2026-08-01T09:00:00.000Z");
});

Deno.test("eingangLesen: ohne Hülle — Nutzlast ist selbst der Datenteil", () => {
  const e = eingangLesen({
    from: { address: "kunde@example.invalid", name: "Kundin" },
    to: "info@boerdesnack24.de",
    subject: "Direkt",
  }, null, JETZT);
  assertEquals(e.from_address, "kunde@example.invalid");
  assertEquals(e.to_addresses, ["info@boerdesnack24.de"]);
  assertEquals(e.subject, "Direkt");
});

Deno.test("eingangLesen: alternative Feldnamen werden gefunden", () => {
  const e = eingangLesen({
    data: {
      sender: "kunde@example.invalid",
      recipient: ["info@boerdesnack24.de"],
      body_html: "<p>x</p>",
      body_plain: "x",
      message_id: "mid-1",
    },
  }, null, JETZT);
  assertEquals(e.from_address, "kunde@example.invalid");
  assertEquals(e.to_addresses, ["info@boerdesnack24.de"]);
  assertEquals(e.html, "<p>x</p>");
  assertEquals(e.text_body, "x");
  assertEquals(e.provider_id, "mid-1");
});

Deno.test("eingangLesen: ohne eigene Kennung greift die Webhook-Id", () => {
  // Ohne Kennung läuft die Doppelerkennung ins Leere und eine wiederholte
  // Zustellung stünde zweimal im Protokoll.
  const e = eingangLesen({ data: { subject: "x" } }, "wh-42", JETZT);
  assertEquals(e.provider_id, "wh-42");
});

Deno.test("eingangLesen: völlig unerwartete Nutzlast stürzt nicht ab", () => {
  // Der Anbieter darf schicken was er will — verloren geht nichts, weil
  // die Rohnutzlast ohnehin in email_log.raw landet (0091).
  for (const murks of [null, undefined, 42, "text", [], { a: { b: 1 } }]) {
    const e = eingangLesen(murks, "wh-1", JETZT);
    assertEquals(e.to_addresses, []);
    assertEquals(e.provider_id, "wh-1");
    assertEquals(e.occurred_at, JETZT.toISOString());
  }
});

Deno.test("eingangLesen: leere Zeichenketten werden zu null", () => {
  const e = eingangLesen({ data: { subject: "", html: "", from: "" } }, null, JETZT);
  assertEquals(e.subject, null);
  assertEquals(e.html, null);
  assertEquals(e.from_address, null);
});

Deno.test("eingangLesen: liefert immer einen gültigen Zeitstempel", () => {
  const e = eingangLesen({}, null, JETZT);
  assert(!Number.isNaN(new Date(e.occurred_at).getTime()));
});
