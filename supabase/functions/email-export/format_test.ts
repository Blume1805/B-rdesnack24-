// Bewusst ohne `deno.land/std` — anders als die älteren Testdateien im
// Projekt. Diese hier soll auch dann laufen, wenn kein Netz zur Verfügung
// steht (in abgeschotteten Umgebungen sind deno.land und jsr.io nicht
// erreichbar). Die drei Helfer unten sind alles, was gebraucht wird.
function assert(bedingung: boolean, hinweis = "Bedingung nicht erfüllt"): void {
  if (!bedingung) throw new Error(hinweis);
}
function assertEquals<T>(ist: T, soll: T, hinweis?: string): void {
  const a = JSON.stringify(ist), b = JSON.stringify(soll);
  if (a !== b) throw new Error(hinweis ?? `erwartet ${b}, war ${a}`);
}
function assertStringIncludes(haystack: string, needle: string): void {
  if (!haystack.includes(needle)) {
    throw new Error(`"${needle}" fehlt in: ${haystack.slice(0, 300)}`);
  }
}

import {
  base64, csvBauen, dateiname, emlBauen, kopfWert, umbrechen, zelle,
  type LogZeile, type MailDetail,
} from "./format.ts";

const zeile: LogZeile = {
  id: "11111111-1111-1111-1111-111111111111",
  direction: "out",
  tag: "subscription-cancel",
  from_address: "noreply@boerdesnack24.de",
  to_addresses: ["kunde@example.invalid"],
  subject: "Kündigung bestätigt",
  status: "sent",
  provider_id: "resend-abc",
  error: null,
  occurred_at: "2026-08-03T08:00:00.000Z",
};

// --- CSV -------------------------------------------------------------------

Deno.test("zelle: Anführungszeichen werden verdoppelt", () => {
  assertEquals(zelle('Er sagte "hallo"'), '"Er sagte ""hallo"""');
});

Deno.test("zelle: Zeilenumbrüche zerstören die Tabelle nicht", () => {
  assertEquals(zelle("Zeile1\r\nZeile2"), '"Zeile1 Zeile2"');
});

Deno.test("zelle: ein Semikolon im Betreff verschiebt keine Spalten", () => {
  // Der Trenner ist ';' — steht er im Inhalt, muss er in Anführungszeichen
  // stehen bleiben, sonst wandert der Rest des Betreffs in die nächste Spalte.
  const csv = csvBauen([{ ...zeile, subject: "Rabatt; jetzt sichern" }]);
  const datenzeile = csv.split("\r\n")[1];
  assertEquals(datenzeile.split('";"').length, 9, "es müssen 9 Spalten bleiben");
  assertStringIncludes(datenzeile, '"Rabatt; jetzt sichern"');
});

Deno.test("zelle: ein führendes = wird zu Text entschärft", () => {
  // Ohne den Apostroph wertet Excel das als Formel aus. Die
  // Anführungszeichen helfen nicht — die gehören zum CSV-Format und sind
  // beim Einlesen längst weg.
  assertEquals(
    zelle('=HYPERLINK("https://boese.invalid","Rechnung")'),
    `"'=HYPERLINK(""https://boese.invalid"",""Rechnung"")"`,
  );
});

Deno.test("zelle: auch + - @ Tabulator und Wagenrücklauf starten Formeln", () => {
  assertEquals(zelle("+1+1"), `"'+1+1"`);
  assertEquals(zelle("-2+3"), `"'-2+3"`);
  assertEquals(zelle("@SUM(A1:A9)"), `"'@SUM(A1:A9)"`);
  assertEquals(zelle("\t=1+1"), `"'\t=1+1"`);
  // Der Wagenrücklauf wird zusätzlich zum Leerzeichen — beide Regeln
  // greifen, in dieser Reihenfolge.
  assertEquals(zelle("\r=1+1"), `"' =1+1"`);
});

Deno.test("zelle: harmlose Werte bekommen keinen Apostroph", () => {
  assertEquals(zelle("Kündigung bestätigt"), '"Kündigung bestätigt"');
  assertEquals(zelle("kunde@example.invalid"), '"kunde@example.invalid"');
  assertEquals(zelle("2+2 im Betreff"), '"2+2 im Betreff"');
  assertEquals(zelle(""), '""');
});

Deno.test("csvBauen: eine untergeschobene Adresse wird nicht zur Formel", () => {
  // Der reale Weg dorthin: `subscription-cancel` läuft nach § 312k BGB
  // ohne Anmeldung und prüft die Adresse nur gegen ein weites Muster.
  // Eine „Adresse", die mit = beginnt, kommt durch und landet in
  // email_log.to_addresses.
  const csv = csvBauen([{
    ...zeile,
    to_addresses: ['=HYPERLINK("https://boese.invalid","Klicken")@x.invalid'],
  }]);
  assertStringIncludes(csv, `"'=HYPERLINK(`);
  assert(
    !csv.includes(';"=HYPERLINK('),
    "unentschärfte Formel steht weiterhin am Zellenanfang",
  );
});

Deno.test("zelle: null wird zur leeren Zelle, nicht zu 'null'", () => {
  assertEquals(zelle(null), '""');
  assertEquals(zelle(undefined), '""');
});

Deno.test("csvBauen: BOM voran, damit Excel Umlaute nicht zerlegt", () => {
  const csv = csvBauen([zeile]);
  assertEquals(csv.charCodeAt(0), 0xfeff);
});

Deno.test("csvBauen: Kopfzeile und eine Datenzeile", () => {
  const zeilen = csvBauen([zeile]).trimEnd().split("\r\n");
  assertEquals(zeilen.length, 2);
  assertStringIncludes(zeilen[0], "Zeitpunkt");
  assertStringIncludes(zeilen[1], "Kündigung bestätigt");
});

Deno.test("csvBauen: Status und Richtung stehen auf Deutsch da", () => {
  const csv = csvBauen([
    { ...zeile, status: "failed" },
    { ...zeile, direction: "in", status: "received" },
    { ...zeile, status: "dev" },
  ]);
  assertStringIncludes(csv, "fehlgeschlagen");
  assertStringIncludes(csv, "eingehend");
  assertStringIncludes(csv, "empfangen");
  assertStringIncludes(csv, "simuliert (kein Versand)");
});

Deno.test("csvBauen: leeres Protokoll liefert trotzdem eine Kopfzeile", () => {
  const zeilen = csvBauen([]).trimEnd().split("\r\n");
  assertEquals(zeilen.length, 1);
});

Deno.test("csvBauen: mehrere Empfänger landen in einer Zelle", () => {
  const csv = csvBauen([{ ...zeile, to_addresses: ["a@x.invalid", "b@x.invalid"] }]);
  assertStringIncludes(csv, '"a@x.invalid, b@x.invalid"');
});

// --- EML -------------------------------------------------------------------

const mail: MailDetail = {
  ...zeile,
  html: "<p>Hallo Welt</p>",
  text_body: "Hallo Welt",
};

Deno.test("base64: Umlaute werden als UTF-8 kodiert", () => {
  // 'ä' ist in UTF-8 zwei Bytes — btoa auf dem rohen String würde scheitern.
  assertEquals(atob(base64("ä")), "\xc3\xa4");
});

Deno.test("kopfWert: reines ASCII bleibt unangetastet", () => {
  assertEquals(kopfWert("Order confirmed"), "Order confirmed");
});

Deno.test("kopfWert: Umlaute werden als encoded-word kodiert", () => {
  const k = kopfWert("Kündigung bestätigt");
  assert(k.startsWith("=?UTF-8?B?"), `unerwartet: ${k}`);
  assert(k.endsWith("?="));
  assertEquals(new TextDecoder().decode(
    Uint8Array.from(atob(k.slice(10, -2)), (c) => c.charCodeAt(0)),
  ), "Kündigung bestätigt");
});

Deno.test("umbrechen: keine Zeile länger als 76 Zeichen", () => {
  const lang = umbrechen(base64("x".repeat(500)));
  for (const z of lang.split("\r\n")) {
    assert(z.length <= 76, `Zeile zu lang: ${z.length}`);
  }
});

Deno.test("emlBauen: Pflichtkopfzeilen sind gesetzt", () => {
  const eml = emlBauen(mail);
  assertStringIncludes(eml, "From: noreply@boerdesnack24.de");
  assertStringIncludes(eml, "To: kunde@example.invalid");
  assertStringIncludes(eml, "MIME-Version: 1.0");
  assertStringIncludes(eml, "Message-ID: <resend-abc@boerdesnack24.de>");
  assertStringIncludes(eml, "Date: ");
});

Deno.test("emlBauen: beide Fassungen ergeben multipart/alternative", () => {
  const eml = emlBauen(mail);
  assertStringIncludes(eml, "multipart/alternative");
  assertStringIncludes(eml, "text/plain; charset=UTF-8");
  assertStringIncludes(eml, "text/html; charset=UTF-8");
  // Der Abschluss-Marker gehört dazu, sonst gilt die Mail als abgeschnitten.
  assert(eml.includes(`----boerdesnack24-${mail.id}--`));
});

Deno.test("emlBauen: nur HTML -> kein leerer Textteil", () => {
  const eml = emlBauen({ ...mail, text_body: null });
  assertStringIncludes(eml, "Content-Type: text/html");
  assert(!eml.includes("multipart"), "ohne Textfassung ist multipart unnötig");
});

Deno.test("emlBauen: nur Text -> kein leerer HTML-Teil", () => {
  const eml = emlBauen({ ...mail, html: null });
  assertStringIncludes(eml, "Content-Type: text/plain");
  assert(!eml.includes("multipart"));
});

Deno.test("emlBauen: Inhalt ist wiederherstellbar", () => {
  // Der eigentliche Zweck des Exports: Was rauskam, muss auch wieder
  // lesbar reingehen.
  const eml = emlBauen({ ...mail, html: null, text_body: "Grüße aus Sülzetal" });
  const koerper = eml.split("\r\n\r\n")[1].replace(/\r\n/g, "");
  assertEquals(new TextDecoder().decode(
    Uint8Array.from(atob(koerper), (c) => c.charCodeAt(0)),
  ), "Grüße aus Sülzetal");
});

Deno.test("emlBauen: ohne Betreff bleibt die Kopfzeile gültig", () => {
  assertStringIncludes(emlBauen({ ...mail, subject: null }), "Subject: (ohne Betreff)");
});

// --- Dateiname -------------------------------------------------------------

Deno.test("dateiname: Umlaute werden umschrieben", () => {
  assertEquals(dateiname("Kündigung bestätigt"), "Kuendigung_bestaetigt");
});

Deno.test("dateiname: Pfadtrenner können nicht ausbrechen", () => {
  const n = dateiname("../../etc/passwd");
  assert(!n.includes("/"), n);
  assert(!n.includes(".."), n);
});

Deno.test("dateiname: leerer Rest fällt auf 'mail' zurück", () => {
  assertEquals(dateiname("///"), "mail");
  assertEquals(dateiname(""), "mail");
});

Deno.test("dateiname: bleibt kurz genug für jedes Dateisystem", () => {
  assert(dateiname("A".repeat(300)).length <= 80);
});
