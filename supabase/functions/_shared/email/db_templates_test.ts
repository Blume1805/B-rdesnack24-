// Ohne Fremdabhängigkeit, damit die Tests auch ohne Netz laufen.
function assert(bedingung: boolean, hinweis = "Bedingung nicht erfüllt"): void {
  if (!bedingung) throw new Error(hinweis);
}
function assertEquals<T>(ist: T, soll: T, hinweis?: string): void {
  const a = JSON.stringify(ist), b = JSON.stringify(soll);
  if (a !== b) throw new Error(hinweis ?? `erwartet ${b}, war ${a}`);
}

import { ausVorlage, istVerwendbar, type VorlagenZeile } from "./db_templates.ts";
import { remainingPlaceholders } from "./render.ts";

const voll: VorlagenZeile = {
  subject: "Bördesnack24: Hallo {{firstName}}",
  body_html: "<p>Guten Tag {{firstName}}, Ihr Tarif: {{planName}}.</p>",
  body_text: "Guten Tag {{firstName}}, Ihr Tarif: {{planName}}.",
  preheader: "Ihr Tarif {{planName}}",
  is_active: true,
};

const codeFassung = () => ({ subject: "AUS DEM CODE", html: "<p>code</p>", text: "code" });

// --- Wann gilt die Datenbank? ---------------------------------------------

Deno.test("istVerwendbar: vollständige aktive Zeile zählt", () => {
  assert(istVerwendbar(voll));
});

Deno.test("istVerwendbar: keine Zeile -> Code gilt", () => {
  assert(!istVerwendbar(null));
});

Deno.test("istVerwendbar: Katalogeintrag ohne Inhalt -> Code gilt", () => {
  // Das ist der wichtigste Fall: Die Migration legt für jede Mail eine
  // Zeile ohne Inhalt an. Zählte sie, würden leere Mails rausgehen.
  assert(!istVerwendbar({ ...voll, subject: null, body_html: null }));
  assert(!istVerwendbar({ ...voll, body_html: null }));
  assert(!istVerwendbar({ ...voll, subject: null }));
});

Deno.test("istVerwendbar: nur Leerzeichen zählt nicht als Inhalt", () => {
  assert(!istVerwendbar({ ...voll, subject: "   " }));
  assert(!istVerwendbar({ ...voll, body_html: "\n\t " }));
});

Deno.test("istVerwendbar: abgeschaltete Zeile -> Code gilt", () => {
  // Der Rückweg, wenn sich eine Änderung als schlecht erweist.
  assert(!istVerwendbar({ ...voll, is_active: false }));
});

// --- Bauen ------------------------------------------------------------------

Deno.test("ausVorlage: Platzhalter werden gefüllt", () => {
  const m = ausVorlage(voll, { firstName: "Pia", planName: "Jahresabo" });
  assertEquals(m.subject, "Bördesnack24: Hallo Pia");
  assert(m.html.includes("Guten Tag Pia, Ihr Tarif: Jahresabo."));
  assertEquals(m.text, "Guten Tag Pia, Ihr Tarif: Jahresabo.");
});

Deno.test("ausVorlage: nichts bleibt unersetzt stehen", () => {
  const m = ausVorlage(voll, { firstName: "Pia", planName: "Jahresabo" });
  assertEquals(remainingPlaceholders(m.subject), []);
  assertEquals(remainingPlaceholders(m.text), []);
});

Deno.test("ausVorlage: der Fuss aus dem Code ist dabei", () => {
  // Der eigentliche Grund für den geteilten Rahmen: Die Pflichtangaben
  // dürfen nicht davon abhängen, dass jemand sie in die Vorlage schreibt.
  const m = ausVorlage(voll, { firstName: "Pia", planName: "Jahresabo" });
  assert(m.html.includes("Bördesnack24 GbR"), "Firmenname fehlt im Fuss");
  assert(m.html.includes("Sülldorfer Str. 3A"), "Anschrift fehlt im Fuss");
  assert(m.html.includes("<!doctype html>"), "Rahmen fehlt");
});

Deno.test("ausVorlage: HTML in Werten wird maskiert", () => {
  // Ein Name aus dem Anmeldeformular darf kein Markup einschleusen.
  const m = ausVorlage(
    { ...voll, body_html: "<p>Hallo {{firstName}}</p>" },
    { firstName: "<script>alert(1)</script>", planName: "x" },
  );
  assert(!m.html.includes("<script>"), "Markup wurde nicht maskiert");
  assert(m.html.includes("&lt;script&gt;"));
});

Deno.test("ausVorlage: ohne Vorschauzeile dient der Betreff als Ersatz", () => {
  const m = ausVorlage({ ...voll, preheader: null }, { firstName: "Pia", planName: "J" });
  assert(m.html.includes("Bördesnack24: Hallo Pia"));
});

Deno.test("ausVorlage: fehlende Textfassung ergibt leeren Text, keinen Absturz", () => {
  const m = ausVorlage({ ...voll, body_text: null }, { firstName: "Pia", planName: "J" });
  assertEquals(m.text, "");
});

// --- Zusammenspiel ----------------------------------------------------------

Deno.test("Katalogeintrag lässt die Code-Fassung unangetastet", () => {
  const zeile: VorlagenZeile = {
    subject: null, body_html: null, body_text: null, preheader: null, is_active: true,
  };
  const ergebnis = istVerwendbar(zeile) ? ausVorlage(zeile, {}) : codeFassung();
  assertEquals(ergebnis.subject, "AUS DEM CODE");
});
