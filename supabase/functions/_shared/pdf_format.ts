// Formatierung von Tabellenwerten in PDFs (Befund 19.11.2026).
//
// Vorher galt jeder Text, der länger als 19 Zeichen war und ein großes „T"
// enthielt, als Zeitstempel: Das erste „T" wurde durch ein Leerzeichen
// ersetzt und nach 16 Zeichen abgeschnitten. Aus „Tür geschlossen, nach 30
// Minuten erneut gemessen" wurde „ür geschlossen,". Betroffen waren gerade
// die Freitexte der HACCP-Protokolle (Korrekturmaßnahmen, Bemerkungen).
// Außerdem standen Uhrzeiten in UTC (eine bis zwei Stunden neben der
// deutschen Zeit) und Zahlen mit Dezimalpunkt.

const ZEITSTEMPEL = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
const DATUM = /^\d{4}-\d{2}-\d{2}$/;

const ZEIT_DE = new Intl.DateTimeFormat("de-DE", {
  timeZone: "Europe/Berlin",
  day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
});

/** „2026-10-01T00:15:00+00:00" → „01.10.2026, 02:15" (deutsche Zeit). */
export function zeitDe(iso: string): string {
  // Postgres liefert die Zone teils als „+00"; JavaScript braucht „+00:00".
  const d = new Date(iso.replace(" ", "T").replace(/([+-]\d{2})$/, "$1:00"));
  if (isNaN(d.getTime())) return iso;
  return ZEIT_DE.format(d).replace(",", "");
}

/** „2026-10-31" → „31.10.2026". */
export function datumDe(iso: string): string {
  const [j, m, t] = iso.split("-");
  return `${t}.${m}.${j}`;
}

/** Zahl mit deutschem Komma; Beträge mit zwei Nachkommastellen. */
export function zahlDe(n: number, betrag = false): string {
  return n.toLocaleString("de-DE", betrag
    ? { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    : { maximumFractionDigits: 2 });
}

/** Zelleninhalt: Ja/Nein, Zeitstempel und Datum deutsch, Zahlen mit Komma,
 *  alles andere unverändert. `betrag` für Geldspalten. */
export function zelle(v: unknown, betrag = false): string {
  if (v === null || v === undefined) return "";
  if (typeof v === "boolean") return v ? "Ja" : "Nein";
  if (typeof v === "number") return zahlDe(v, betrag);
  const s = String(v);
  if (ZEITSTEMPEL.test(s)) return zeitDe(s);
  if (DATUM.test(s)) return datumDe(s);
  if (betrag && /^-?\d+(\.\d+)?$/.test(s)) return zahlDe(Number(s), true);
  return s;
}

/** Schrift, wie pdf-lib sie liefert (nur die Breitenmessung). */
export interface Messbar { widthOfTextAtSize(text: string, size: number): number }

/** Bricht Text in Zeilen um, die in `breite` passen: an Leerzeichen, ein
 *  einzelnes überlanges Wort hart. Nichts wird abgeschnitten. */
export function umbrechen(text: string, breite: number, schrift: Messbar, groesse: number): string[] {
  if (text === "") return [""];
  const zeilen: string[] = [];
  let aktuell = "";
  for (let wort of text.split(/\s+/)) {
    while (schrift.widthOfTextAtSize(wort, groesse) > breite && wort.length > 1) {
      let schnitt = wort.length;
      while (schnitt > 1 && schrift.widthOfTextAtSize(wort.substring(0, schnitt), groesse) > breite) schnitt--;
      if (aktuell) { zeilen.push(aktuell); aktuell = ""; }
      zeilen.push(wort.substring(0, schnitt));
      wort = wort.substring(schnitt);
    }
    const kandidat = aktuell ? `${aktuell} ${wort}` : wort;
    if (aktuell && schrift.widthOfTextAtSize(kandidat, groesse) > breite) {
      zeilen.push(aktuell);
      aktuell = wort;
    } else {
      aktuell = kandidat;
    }
  }
  if (aktuell) zeilen.push(aktuell);
  return zeilen.length ? zeilen : [""];
}
