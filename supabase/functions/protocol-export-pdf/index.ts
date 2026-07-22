// ============================================================================
// Edge Function: protocol-export-pdf
// ----------------------------------------------------------------------------
// Erzeugt VLÜA-/GoBD-taugliche PDF-Nachweise für ein Protokoll über einen
// Zeitraum. RLS des Aufrufers gilt; Rendering serverseitig via pdf-lib.
// Header: Aussteller-Block (Anschrift, Steuernummer, USt-IdNr.).
// Footer: Freigabe-Signaturzeilen der Gesellschafter.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts, rgb } from "https://esm.sh/pdf-lib@1.17.1";
import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

interface ProtocolDef {
  table: string;
  dateCol: string;
  title: string;
  columns: { key: string; label: string }[];
}

const ISSUER = {
  name: "Bördesnack24 GbR (Pia & Philipp Blume)",
  street: "Sülldorfer Str. 3A",
  cityLine: "39171 Sülzetal OT Osterweddingen",
  taxNumber: "102/178/01635",
  vatId: "DE 458804058",
};

const PROTOCOLS: Record<string, ProtocolDef> = {
  temperature: { table: "temperature_logs", dateCol: "measured_at", title: "Temperaturkontrolle (CCP 2: <= 7 °C)",
    columns: [{ key: "measured_at", label: "Zeitpunkt" },{ key: "temperature_c", label: "Ist °C" },{ key: "within_limit", label: "i.O." },{ key: "corrective_action", label: "Korrektur" }] },
  cleaning: { table: "cleaning_logs", dateCol: "cleaned_at", title: "Reinigungsprotokoll",
    columns: [{ key: "cleaned_at", label: "Zeitpunkt" },{ key: "cleaning_type", label: "Art" },{ key: "agent", label: "Mittel" },{ key: "notes", label: "Bemerkung" }] },
  disposal: { table: "disposal_logs", dateCol: "disposed_at", title: "Vernichtungsprotokoll",
    columns: [{ key: "disposed_at", label: "Zeitpunkt" },{ key: "product_label", label: "Produkt" },{ key: "quantity", label: "Menge" },{ key: "reason", label: "Grund" },{ key: "mhd_date", label: "MHD" }] },
  training: { table: "employee_trainings", dateCol: "training_date", title: "Schulungs-/Unterweisungsnachweis",
    columns: [{ key: "training_date", label: "Datum" },{ key: "topic", label: "Thema" }] },
  filling: { table: "filling_logs", dateCol: "filled_at", title: "Befüllungsprotokoll",
    columns: [{ key: "filled_at", label: "Zeitpunkt" },{ key: "machine_id", label: "Automat" },{ key: "product_id", label: "Produkt" },{ key: "quantity", label: "Menge" },{ key: "removed_spoiled", label: "Verderb" }] },
  maintenance: { table: "maintenance_logs", dateCol: "reported_at", title: "Wartungsprotokoll",
    columns: [{ key: "reported_at", label: "Zeitpunkt" },{ key: "machine_id", label: "Automat" },{ key: "issue", label: "Meldung" },{ key: "action", label: "Maßnahme" },{ key: "resolved", label: "Erledigt" }] },
  cash: { table: "cash_collection_logs", dateCol: "collected_at", title: "Geldentnahmeprotokoll (§146 AO)",
    columns: [{ key: "collected_at", label: "Zeitpunkt" },{ key: "machine_id", label: "Automat" },{ key: "amount_gross", label: "Brutto EUR" },{ key: "change_amount", label: "Wechselgeld" },{ key: "net_amount", label: "Netto EUR" }] },
};

// Helvetica (StandardFonts) kann nur WinAnsi kodieren. Zeichen außerhalb
// (z. B. -> ≤ ≥ ≈ • aus freien Textfeldern) lassen pdf-lib beim drawText
// werfen -> 500. Deshalb JEDEN gezeichneten String zuerst WinAnsi-sicher
// machen: bekannte Sonderzeichen ersetzen, alles andere > 0xFF, das nicht
// im WinAnsi-Hochbereich liegt, auf '?' abbilden.
const WINANSI_MAP: Record<string, string> = {
  "→": "->", "←": "<-", "↔": "<->", "⇒": "=>", "≤": "<=", "≥": ">=",
  "≠": "!=", "≈": "~", "×": "x", "÷": "/", "∅": "-", "™": "(TM)", "℃": "°C",
};
// Zeichen aus U+2000..U+20FF, die WinAnsi direkt abbildet, bleiben erhalten.
const WINANSI_SAFE_HIGH = new Set([
  "–", "—", "‘", "’", "‚", "“", "”", "„", "•", "…", "†", "‡", "‰",
  "‹", "›", "€", "ƒ", "ˆ", "˜", "Š", "š", "Ž", "ž", "Œ", "œ", "Ÿ",
]);
const winAnsiSafe = (s: string): string => {
  let out = "";
  for (const ch of s) {
    if (WINANSI_MAP[ch] !== undefined) { out += WINANSI_MAP[ch]; continue; }
    const cp = ch.codePointAt(0)!;
    if (cp <= 0xff || WINANSI_SAFE_HIGH.has(ch)) out += ch;
    else out += "?";
  }
  return out;
};

const fmt = (v: unknown): string => {
  if (v === null || v === undefined) return "";
  if (typeof v === "boolean") return v ? "Ja" : "Nein";
  if (typeof v === "string" && v.length > 19 && v.includes("T")) return winAnsiSafe(v.replace("T", " ").substring(0, 16));
  return winAnsiSafe(String(v));
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const caller = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } } });
  let kind: string, from: string, to: string;
  try {
    const body = await req.json();
    kind = String(body.protocol); from = String(body.from); to = String(body.to);
    if (!PROTOCOLS[kind]) throw new Error("unknown protocol");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) throw new Error("invalid range");
  } catch (e) { return jsonResponse({ error: `Ungültige Anfrage: ${e}` }, 400); }
  const def = PROTOCOLS[kind];
  const { data: rows, error } = await caller.from(def.table).select("*").gte(def.dateCol, from).lte(def.dateCol, `${to}T23:59:59`).order(def.dateCol, { ascending: true });
  if (error) return jsonResponse({ error: error.message }, 403);
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
  // Design-System-Palette — identisch zu finance-export-pdf / One-Pager.
  const ink = rgb(0.08, 0.07, 0.05);
  const gold = rgb(0.99, 0.76, 0.01);
  const muted = rgb(0.44, 0.42, 0.35);
  const cream = rgb(0.98, 0.96, 0.92);

  // Spaltenbreiten je Protokolltyp: statt fixer 5-Slot-Aufteilung wird die
  // 515pt Tabellenbreite nach Feld-Gewicht verteilt (Datums-/Freitext-
  // Spalten breiter, kurze Kennzeichner-/Zahlenspalten schmaler). Damit
  // passen auch die breitesten Protokolle (5 Spalten, z. B. disposal/cash)
  // ohne harte Zeichen-Kürzung; nur extrem lange Einzelwerte brechen um.
  const COL_WEIGHTS: Record<string, number> = {
    measured_at: 1.3, cleaned_at: 1.3, disposed_at: 1.3, filled_at: 1.3,
    reported_at: 1.3, collected_at: 1.3, training_date: 1.2, mhd_date: 1.0,
    temperature_c: 0.75, within_limit: 0.75, resolved: 0.75, removed_spoiled: 0.85,
    quantity: 0.8, amount_gross: 1.0, change_amount: 1.0, net_amount: 1.0,
    machine_id: 1.0, product_id: 1.0,
    corrective_action: 1.6, notes: 1.6, reason: 1.4, issue: 1.5, action: 1.5,
    topic: 2.2, cleaning_type: 1.1, agent: 1.0, product_label: 1.3,
  };
  // Erkennbare Zahlen-/Betragsspalten -> rechtsbündig.
  const NUMERIC_KEYS = new Set(["temperature_c", "quantity", "amount_gross", "change_amount", "net_amount"]);

  const TABLE_X = 40;
  const TABLE_W = 515;
  const colWidths: number[] = (() => {
    const weights = def.columns.map((c) => COL_WEIGHTS[c.key] ?? 1.2);
    const sum = weights.reduce((a, b) => a + b, 0);
    const widths = weights.map((w) => Math.floor((TABLE_W * w) / sum));
    const used = widths.reduce((a, b) => a + b, 0);
    widths[widths.length - 1] += TABLE_W - used; // Rundungsrest der letzten Spalte zuschlagen.
    return widths;
  })();
  const colX: number[] = (() => {
    const xs: number[] = [];
    let x = TABLE_X;
    for (const w of colWidths) { xs.push(x); x += w; }
    return xs;
  })();

  // Einfacher Wortumbruch mit Hart-Trennung für einzelne überlange Tokens.
  // Fallback für den (seltenen) Fall, dass ein Wert trotz neu verteilter
  // Spaltenbreite nicht in eine Zeile passt — statt harter Kürzung.
  const wrapText = (text: string, maxWidth: number, fnt: typeof font, size: number): string[] => {
    if (text === "") return [""];
    const words = text.split(" ");
    const lines: string[] = [];
    let current = "";
    for (let word of words) {
      while (fnt.widthOfTextAtSize(word, size) > maxWidth && word.length > 1) {
        let cut = word.length;
        while (cut > 1 && fnt.widthOfTextAtSize(word.substring(0, cut), size) > maxWidth) cut--;
        if (current) { lines.push(current); current = ""; }
        lines.push(word.substring(0, cut));
        word = word.substring(cut);
      }
      const candidate = current ? `${current} ${word}` : word;
      if (current && fnt.widthOfTextAtSize(candidate, size) > maxWidth) {
        lines.push(current);
        current = word;
      } else {
        current = candidate;
      }
    }
    if (current) lines.push(current);
    return lines.length ? lines : [""];
  };

  // Räume auf jeder Seite: Header (Aussteller + Titel + Zeitraum +
  // Spaltenköpfe) 800 -> ~720; Fußraum für "Eintraege" + Signatur-Block:
  // Signaturen ab y=170, "Eintraege" bei y=40. Ab y < FOOT_Y_LIMIT muss
  // eine neue Seite beginnen, damit die letzte Zeile nicht im Signatur-
  // Bereich landet.
  const FOOT_Y_LIMIT = 220;

  // Tabellenkopf als Ink-Band mit Cream-Text (wie im One-Pager). Wird auf
  // jeder Seite (auch Folgeseiten) wiederholt, damit der Spaltenbezug beim
  // Umblättern erhalten bleibt.
  const drawTableHead = (p: ReturnType<typeof pdf.addPage>, ty: number): number => {
    p.drawRectangle({ x: TABLE_X, y: ty - 4, width: TABLE_W, height: 16, color: ink });
    def.columns.forEach((c, i) => {
      const numeric = NUMERIC_KEYS.has(c.key);
      const tx = numeric
        ? colX[i] + colWidths[i] - 6 - bold.widthOfTextAtSize(c.label, 8.5)
        : colX[i] + 4;
      p.drawText(c.label, { x: tx, y: ty, size: 8.5, font: bold, color: cream });
    });
    return ty - 20;
  };

  // Voller Stammdaten-Header (Wortmarke, Aussteller-Block, Titel, Zeitraum)
  // erscheint NUR auf Seite 1.
  const drawFirstPageHeader = (p: ReturnType<typeof pdf.addPage>): number => {
    // Gold-Topbar + Wortmarke (One-Pager-Look).
    p.drawRectangle({ x: 0, y: 842 - 6, width: 595, height: 6, color: gold });
    p.drawText("BÖRDESNACK24", { x: 40, y: 842 - 30, size: 11, font: bold, color: ink });
    p.drawText("Protokoll-Nachweis", { x: 40, y: 842 - 43, size: 8, font, color: muted });

    // Aussteller-Block rechts (Stammdaten, 5 Zeilen).
    const hy = 842 - 22;
    p.drawText(ISSUER.name, { x: 320, y: hy, size: 8, font: bold, color: ink });
    p.drawText(ISSUER.street, { x: 320, y: hy - 10, size: 7.5, font, color: muted });
    p.drawText(ISSUER.cityLine, { x: 320, y: hy - 20, size: 7.5, font, color: muted });
    p.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 30, size: 7.5, font, color: muted });
    p.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 40, size: 7.5, font, color: muted });
    p.drawLine({
      start: { x: 40, y: 842 - 82 }, end: { x: 555, y: 842 - 82 },
      thickness: 0.7, color: gold,
    });

    // Titel + Zeitraum, dann gold unterstrichene Sektionslinie.
    let ty = 842 - 104;
    p.drawText(winAnsiSafe(def.title), { x: 40, y: ty, size: 15, font: bold, color: gold });
    ty -= 18;
    p.drawText(`Zeitraum: ${from} bis ${to}`, { x: 40, y: ty, size: 10, font, color: ink });
    ty -= 10;
    p.drawLine({
      start: { x: 40, y: ty }, end: { x: 555, y: ty },
      thickness: 1.4, color: gold,
    });
    ty -= 18;
    return drawTableHead(p, ty);
  };

  // Folgeseiten: nur die goldene Topbar-Leiste, KEIN Stammdaten-/Titel-
  // Textblock — direkt darunter der wiederholte Tabellenkopf.
  const drawContinuationHeader = (p: ReturnType<typeof pdf.addPage>): number => {
    p.drawRectangle({ x: 0, y: 842 - 6, width: 595, height: 6, color: gold });
    return drawTableHead(p, 842 - 34);
  };

  // Zebra-Zeilen wie im One-Pager: jede zweite Zeile cream hinterlegen.
  let zebra = false;

  let page = pdf.addPage([595, 842]);
  let y = drawFirstPageHeader(page);

  const ROW_SIZE = 7.5;
  const ROW_LINE_H = 11;

  for (const row of (rows ?? [])) {
    const cells = def.columns.map((c) => fmt((row as Record<string, unknown>)[c.key]));
    const cellLines = cells.map((text, i) => {
      const availWidth = colWidths[i] - 8;
      return font.widthOfTextAtSize(text, ROW_SIZE) <= availWidth
        ? [text]
        : wrapText(text, availWidth, font, ROW_SIZE);
    });
    const lineCount = Math.max(1, ...cellLines.map((l) => l.length));
    const rowHeight = 13 + (lineCount - 1) * ROW_LINE_H;

    // Vor jeder Zeile prüfen: reicht der Platz oberhalb des Footer-Bereichs?
    // Wenn nicht, neue Seite + Folgeseiten-Header wiederholen. Damit steht
    // nie eine einzelne Zeile am Seitenanfang und der Signatur-Block wird
    // nie überschrieben.
    if (y - rowHeight < FOOT_Y_LIMIT) {
      page = pdf.addPage([595, 842]);
      y = drawContinuationHeader(page);
      zebra = false;
    }
    if (zebra) {
      page.drawRectangle({
        x: TABLE_X, y: y - 3.5 - (lineCount - 1) * ROW_LINE_H, width: TABLE_W, height: rowHeight, color: cream,
      });
    }
    zebra = !zebra;
    cellLines.forEach((lines, i) => {
      const numeric = NUMERIC_KEYS.has(def.columns[i].key);
      lines.forEach((line, li) => {
        const tx = numeric
          ? colX[i] + colWidths[i] - 6 - font.widthOfTextAtSize(line, ROW_SIZE)
          : colX[i] + 4;
        page.drawText(line, { x: tx, y: y - li * ROW_LINE_H, size: ROW_SIZE, font, color: ink });
      });
    });
    y -= rowHeight;
  }

  // Signatur-Block: braucht ca. 100 pt Höhe (Überschrift + Linie + Name +
  // Datum). Wenn nicht mehr genug Platz auf der aktuellen Seite ist,
  // wird eine neue Seite mit Folgeseiten-Header angelegt — die letzte
  // Datenzeile bleibt aber auf ihrer Ursprungs-Seite.
  const { data: sigs } = await caller.from("partner_signatures").select("full_name,role_label,image_url").order("sort_order", { ascending: true });
  if (y < FOOT_Y_LIMIT) {
    page = pdf.addPage([595, 842]);
    y = drawContinuationHeader(page);
  }
  const sigY = 120;
  const slotW = 260;
  let sx = 40;
  // Klare Abgrenzung vom Tabellenbereich: mehr Abstand + goldene
  // Unterstreichung des Abschnitts-Labels (Überschriften-Hierarchie).
  const sigLabelY = sigY + 58;
  page.drawText("Freigabe / Unterschriften:", { x: 40, y: sigLabelY, size: 10, font: bold, color: ink });
  page.drawLine({
    start: { x: 40, y: sigLabelY - 6 }, end: { x: 190, y: sigLabelY - 6 },
    thickness: 1, color: gold,
  });
  const today = new Date().toISOString().substring(0, 10);
  for (const s of (sigs ?? [])) {
    page.drawLine({ start: { x: sx, y: sigY + 22 }, end: { x: sx + slotW - 30, y: sigY + 22 }, thickness: 0.5, color: ink });
    const nm = winAnsiSafe(String((s as { full_name?: unknown }).full_name ?? ""));
    const rl = winAnsiSafe(String((s as { role_label?: unknown }).role_label ?? ""));
    const hasImage = Boolean((s as { image_url?: unknown }).image_url);
    page.drawText(nm, { x: sx, y: sigY + 8, size: 9, font: bold, color: ink });
    page.drawText(`${rl} - Datum: ${today}`, { x: sx, y: sigY - 4, size: 7, font, color: ink });
    // Referenziert das abgefragte image_url-Feld (hinterlegtes Signaturbild)
    // als kleiner Hinweis, ohne das Bild selbst einzubetten (siehe Zusammenfassung).
    if (hasImage) {
      page.drawText("Signaturbild hinterlegt", { x: sx, y: sigY - 14, size: 6.5, font: italic, color: muted });
    }
    sx += slotW;
  }

  // Footer auf JEDER Seite: Trennlinie + Stammdaten + Eintragszahl + Seitenzahl.
  const totalEntries = (rows ?? []).length;
  const createdOn = new Date().toISOString().substring(0, 10);
  const pages = pdf.getPages();
  pages.forEach((pg, i) => {
    pg.drawLine({ start: { x: 40, y: 52 }, end: { x: 555, y: 52 }, thickness: 0.5, color: muted });
    pg.drawText(
      `${ISSUER.name} · ${ISSUER.street}, ${ISSUER.cityLine} · St-Nr. ${ISSUER.taxNumber} · USt-IdNr. ${ISSUER.vatId}`,
      { x: 40, y: 42, size: 7, font, color: muted },
    );
    pg.drawText(`Einträge: ${totalEntries} · Erstellt am ${createdOn}`,
      { x: 40, y: 32, size: 7, font, color: muted });
    const pageLabel = `Seite ${i + 1} / ${pages.length}`;
    pg.drawText(pageLabel, {
      x: 555 - font.widthOfTextAtSize(pageLabel, 7), y: 42, size: 7, font, color: muted,
    });
  });

  const bytes = await pdf.save();
  return jsonResponse({ filename: `${kind}_${from}_${to}.pdf`, mime: "application/pdf", base64: encodeBase64(bytes) });
});
