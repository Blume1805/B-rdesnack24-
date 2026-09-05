// Formatierer für den E-Mail-Export — bewusst ohne Netz- und Datenbankzugriff,
// damit sie sich ohne laufendes Projekt testen lassen (siehe format_test.ts).

import { mailConfig } from "../_shared/email/config.ts";

export interface LogZeile {
  id: string;
  direction: string;
  tag: string | null;
  from_address: string | null;
  to_addresses: string[] | null;
  subject: string | null;
  status: string;
  provider_id: string | null;
  error: string | null;
  occurred_at: string;
}

export interface MailDetail extends LogZeile {
  html: string | null;
  text_body: string | null;
}

// ---------------------------------------------------------------------------
// CSV
// ---------------------------------------------------------------------------

/// Zeichen, mit denen eine Tabellenkalkulation eine Formel beginnen lässt.
/// Tabulator und Wagenrücklauf gehören dazu, weil Excel führenden
/// Leerraum überspringt und erst danach entscheidet.
const FORMELSTART = /^[=+\-@\t\r]/;

/// Eine Zelle so einpacken, dass kein Inhalt die Tabelle sprengen kann.
///
/// Zwei getrennte Dinge passieren hier:
///
/// 1. **Aufbau schützen.** Anführungszeichen werden verdoppelt,
///    Zeilenumbrüche zu Leerzeichen — ein Fehlertext von Resend enthält
///    gern beides, und ein einzelnes Semikolon im Betreff würde die
///    Spalten sonst verschieben.
///
/// 2. **Formeln entschärfen.** Beginnt der Wert mit `=`, `+`, `-`, `@`,
///    Tabulator oder Wagenrücklauf, wird ein Apostroph vorangestellt.
///    Excel liest das als „das ist Text" und zeigt den Apostroph nicht an.
///
/// Warum Punkt 2 nötig ist, obwohl doch alles in Anführungszeichen steht:
/// Die Anführungszeichen gehören zum CSV-Format, nicht zum Zellinhalt.
/// Excel entfernt sie beim Einlesen und wertet aus, was übrig bleibt — aus
/// `"=HYPERLINK(...)"` wird also sehr wohl eine Formel. Der Export ist
/// ausdrücklich fürs Öffnen in Excel gebaut (BOM und CRLF weiter unten),
/// damit ist das kein theoretischer Fall.
///
/// Wie ein solcher Wert überhaupt hierher kommt: `subscription-cancel`
/// läuft ohne Anmeldung — § 312k BGB verlangt das — und prüft die
/// Adresse nur gegen ein weites Muster. Eine „Adresse", die mit `=`
/// beginnt, kommt durch und steht danach in `email_log.to_addresses`.
/// Wer später exportiert und die Datei in Excel öffnet, führt sie aus.
///
/// Bewusst hier und nicht beim Schreiben in die Datenbank: `email_log` ist
/// ein Nachweis. Dort muss stehen, was tatsächlich zugestellt wurde — bis
/// aufs Zeichen. Entschärft wird erst bei der Ausgabe.
export function zelle(wert: unknown): string {
  const s = wert === null || wert === undefined ? "" : String(wert);
  const sicher = FORMELSTART.test(s) ? `'${s}` : s;
  return `"${sicher.replace(/"/g, '""').replace(/[\r\n]+/g, " ")}"`;
}

export function richtungKlartext(d: string): string {
  return d === "in" ? "eingehend" : "ausgehend";
}

export function statusKlartext(s: string): string {
  switch (s) {
    case "sent": return "versendet";
    case "received": return "empfangen";
    case "failed": return "fehlgeschlagen";
    case "dev": return "simuliert (kein Versand)";
    default: return s;
  }
}

export function csvBauen(zeilen: LogZeile[]): string {
  const kopf = [
    "Zeitpunkt", "Richtung", "Status", "Anlass", "Von", "An",
    "Betreff", "Anbieter-Id", "Fehler",
  ];
  const koerper = zeilen.map((z) =>
    [
      zelle(new Date(z.occurred_at).toLocaleString("de-DE", { timeZone: "Europe/Berlin" })),
      zelle(richtungKlartext(z.direction)),
      zelle(statusKlartext(z.status)),
      zelle(z.tag),
      zelle(z.from_address),
      zelle((z.to_addresses ?? []).join(", ")),
      zelle(z.subject),
      zelle(z.provider_id),
      zelle(z.error),
    ].join(";")
  );

  // BOM voran, CRLF als Zeilenende — beides, damit deutsches Excel die
  // Datei ohne Import-Dialog öffnet und Umlaute nicht zerlegt.
  return "﻿" + [kopf.map(zelle).join(";"), ...koerper].join("\r\n") + "\r\n";
}

// ---------------------------------------------------------------------------
// EML (RFC 5322)
// ---------------------------------------------------------------------------

export function base64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binaer = "";
  for (const b of bytes) binaer += String.fromCharCode(b);
  return btoa(binaer);
}

/// Base64 in 76 Zeichen breite Zeilen brechen — RFC 2045 verlangt das,
/// und manche Mailprogramme zeigen sonst gar nichts an.
export function umbrechen(b64: string): string {
  return (b64.match(/.{1,76}/g) ?? []).join("\r\n");
}

/// Kopfzeilen dürfen nur ASCII enthalten. Ein Betreff mit Umlauten wird
/// deshalb als encoded-word kodiert (RFC 2047) — sonst steht im
/// Mailprogramm Kauderwelsch.
export function kopfWert(wert: string): string {
  return /^[\x20-\x7E]*$/.test(wert) ? wert : `=?UTF-8?B?${base64(wert)}?=`;
}

export function emlBauen(m: MailDetail): string {
  const grenze = `----boerdesnack24-${m.id}`;
  const text = m.text_body ?? "";
  const html = m.html ?? "";

  const kopf = [
    `Date: ${new Date(m.occurred_at).toUTCString()}`,
    `From: ${m.from_address ?? mailConfig.from}`,
    `To: ${(m.to_addresses ?? []).join(", ")}`,
    `Subject: ${kopfWert(m.subject ?? "(ohne Betreff)")}`,
    `Message-ID: <${m.provider_id ?? m.id}@boerdesnack24.de>`,
    // Eigene Kopfzeilen, damit ein Ausdruck später selbst erklärt, woher er
    // kommt und in welchem Zustand die Mail protokolliert wurde.
    `X-Boerdesnack24-Log-Id: ${m.id}`,
    `X-Boerdesnack24-Richtung: ${m.direction}`,
    `X-Boerdesnack24-Status: ${m.status}`,
    "MIME-Version: 1.0",
  ];

  // Nur eine Fassung vorhanden? Dann kein multipart — das erspart
  // Mailprogrammen eine leere Alternative.
  if (!html) {
    return [
      ...kopf,
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      umbrechen(base64(text)),
      "",
    ].join("\r\n");
  }
  if (!text) {
    return [
      ...kopf,
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      umbrechen(base64(html)),
      "",
    ].join("\r\n");
  }

  return [
    ...kopf,
    `Content-Type: multipart/alternative; boundary="${grenze}"`,
    "",
    `--${grenze}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    umbrechen(base64(text)),
    `--${grenze}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    umbrechen(base64(html)),
    `--${grenze}--`,
    "",
  ].join("\r\n");
}

/// Dateinamen entschärfen: keine Pfadtrenner, keine Umlaute, nicht endlos.
/// Ein Betreff darf alles enthalten — ein Dateiname nicht.
export function dateiname(roh: string): string {
  const ersetzt = roh
    .replace(/[äÄ]/g, "ae").replace(/[öÖ]/g, "oe").replace(/[üÜ]/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-zA-Z0-9._-]+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 80)
    .replace(/^[._-]+|[._-]+$/g, "");
  return ersetzt === "" ? "mail" : ersetzt;
}
