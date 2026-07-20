import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, PDFPage, StandardFonts, rgb, type PDFFont } from "https://esm.sh/pdf-lib@1.17.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

// Helpers shared between PDF builders.

export const ISSUER = {
  name: "Bördesnack24 GbR (Pia & Philipp Blume)",
  street: "Sülldorfer Str. 3A",
  cityLine: "39171 Sülzetal OT Osterweddingen",
  taxNumber: "102/178/01635",
  vatId: "DE 458804058",
};

export const INK   = rgb(0.08, 0.07, 0.05);
export const GOLD  = rgb(0.99, 0.76, 0.01);
export const MUTED = rgb(0.44, 0.42, 0.35);
export const DARK_BG = rgb(0.08, 0.07, 0.05);
export const CREAM = rgb(0.98, 0.96, 0.92);

export type Ctx = { pdf: PDFDocument; font: PDFFont; bold: PDFFont; italic: PDFFont };

// Kopf im One-Pager-Look: Gold-Topbar, Wortmarke links, Stammdaten rechts,
// Titel gold, darunter goldene Sektionslinie — identisch zu
// finance-export-pdf / protocol-export-pdf.
export function drawStandardHeader(
  page: PDFPage,
  ctx: Ctx,
  title: string,
  subtitle = "Dokument",
): number {
  page.drawRectangle({ x: 0, y: 842 - 6, width: 595, height: 6, color: GOLD });
  page.drawText("BÖRDESNACK24", { x: 40, y: 842 - 30, size: 11, font: ctx.bold, color: INK });
  page.drawText(subtitle, { x: 40, y: 842 - 43, size: 8, font: ctx.font, color: MUTED });
  const hy = 842 - 22;
  page.drawText(ISSUER.name, { x: 320, y: hy, size: 8, font: ctx.bold, color: INK });
  page.drawText(ISSUER.street, { x: 320, y: hy - 10, size: 7.5, font: ctx.font, color: MUTED });
  page.drawText(ISSUER.cityLine, { x: 320, y: hy - 20, size: 7.5, font: ctx.font, color: MUTED });
  page.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 30, size: 7.5, font: ctx.font, color: MUTED });
  page.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 40, size: 7.5, font: ctx.font, color: MUTED });
  page.drawLine({ start: { x: 40, y: 842 - 82 }, end: { x: 555, y: 842 - 82 }, thickness: 0.7, color: INK });
  let y = 842 - 104;
  page.drawText(title, { x: 40, y, size: 15, font: ctx.bold, color: GOLD });
  y -= 10;
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 1.4, color: GOLD });
  y -= 18;
  return y;
}

export function wrapLines(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const tentative = current.length === 0 ? w : current + " " + w;
    if (font.widthOfTextAtSize(tentative, size) > maxWidth) {
      if (current.length > 0) lines.push(current);
      current = w;
    } else {
      current = tentative;
    }
  }
  if (current.length > 0) lines.push(current);
  return lines;
}

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "li"; text: string; indent?: number }
  | { type: "sub-li"; text: string }
  | { type: "space"; height?: number }
  | { type: "line" }
  | { type: "italic-note"; text: string }
  | { type: "signature-line"; label: string }
  | { type: "placeholder"; label: string; value: string }
  // Tabelle im One-Pager-Look: Ink-Kopfband mit Cream-Text, Zebra-Zeilen.
  // `widths` sind relative Spaltengewichte (Summe egal, wird normiert);
  // fehlt es, werden alle Spalten gleich breit. `emptyRows` fügt N leere
  // Ausfüll-Zeilen unter den Datenzeilen an (für Protokoll-Formulare).
  | {
      type: "table";
      columns: string[];
      rows?: string[][];
      widths?: number[];
      emptyRows?: number;
    };

export async function drawFlow(
  ctx: Ctx,
  headerTitle: string,
  contentPage: () => Promise<PDFPage>,
  blocks: Block[],
  opts?: { showLegend?: boolean; subtitle?: string },
): Promise<void> {
  const marginLeft = 40;
  const marginRight = 40;
  const pageWidth = 595;
  const contentWidth = pageWidth - marginLeft - marginRight;
  const footerY = 60;
  const subtitle = opts?.subtitle ?? "Dokument";

  let page = await contentPage();
  let y = drawStandardHeader(page, ctx, headerTitle, subtitle);
  if (opts?.showLegend) y = drawPlaceholderLegend(page, ctx, y);

  const newPage = async () => {
    page = await contentPage();
    y = drawStandardHeader(page, ctx, headerTitle, subtitle);
  };
  const ensure = async (h: number) => {
    if (y - h < footerY) await newPage();
  };

  for (const b of blocks) {
    switch (b.type) {
      case "h2": {
        await ensure(22);
        y -= 6;
        page.drawText(b.text, { x: marginLeft, y, size: 12, font: ctx.bold, color: INK });
        y -= 16;
        break;
      }
      case "h3": {
        await ensure(18);
        y -= 4;
        page.drawText(b.text, { x: marginLeft, y, size: 10, font: ctx.bold, color: INK });
        y -= 13;
        break;
      }
      case "p": {
        const lines = wrapLines(b.text, ctx.font, 10, contentWidth);
        for (const line of lines) {
          await ensure(14);
          page.drawText(line, { x: marginLeft, y, size: 10, font: ctx.font, color: INK });
          y -= 13;
        }
        y -= 4;
        break;
      }
      case "italic-note": {
        const lines = wrapLines(b.text, ctx.italic, 9, contentWidth);
        for (const line of lines) {
          await ensure(13);
          page.drawText(line, { x: marginLeft, y, size: 9, font: ctx.italic, color: MUTED });
          y -= 12;
        }
        y -= 4;
        break;
      }
      case "li": {
        const indent = (b.indent ?? 0) * 12 + 14;
        const lines = wrapLines(b.text, ctx.font, 10, contentWidth - indent);
        for (let i = 0; i < lines.length; i++) {
          await ensure(14);
          if (i === 0) {
            page.drawText("•", { x: marginLeft + indent - 12, y, size: 10, font: ctx.bold, color: INK });
          }
          page.drawText(lines[i], { x: marginLeft + indent, y, size: 10, font: ctx.font, color: INK });
          y -= 13;
        }
        break;
      }
      case "sub-li": {
        const indent = 28;
        const lines = wrapLines(b.text, ctx.font, 10, contentWidth - indent);
        for (let i = 0; i < lines.length; i++) {
          await ensure(14);
          if (i === 0) {
            page.drawText("·", { x: marginLeft + indent - 12, y, size: 12, font: ctx.bold, color: MUTED });
          }
          page.drawText(lines[i], { x: marginLeft + indent, y, size: 10, font: ctx.font, color: INK });
          y -= 13;
        }
        break;
      }
      case "space": {
        y -= b.height ?? 8;
        break;
      }
      case "line": {
        await ensure(20);
        page.drawLine({ start: { x: marginLeft, y: y - 4 }, end: { x: 555, y: y - 4 }, thickness: 0.5, color: MUTED });
        y -= 12;
        break;
      }
      case "signature-line": {
        await ensure(50);
        y -= 20;
        page.drawLine({
          start: { x: marginLeft, y }, end: { x: marginLeft + 260, y },
          thickness: 0.6, color: INK,
        });
        page.drawText(b.label, { x: marginLeft, y: y - 12, size: 9, font: ctx.font, color: MUTED });
        y -= 22;
        break;
      }
      case "placeholder": {
        await ensure(28);
        page.drawText(b.label + ":", { x: marginLeft, y, size: 9, font: ctx.bold, color: INK });
        page.drawText(b.value, { x: marginLeft + 160, y, size: 10, font: ctx.font, color: MUTED });
        y -= 22;
        break;
      }
      case "table": {
        const cols = b.columns;
        const n = cols.length;
        const weights = b.widths && b.widths.length === n
          ? b.widths
          : cols.map(() => 1);
        const wsum = weights.reduce((a, c) => a + c, 0);
        const colW = weights.map((w) => (w / wsum) * contentWidth);
        const colX: number[] = [];
        {
          let acc = marginLeft;
          for (const w of colW) { colX.push(acc); acc += w; }
        }
        const pad = 4;
        const cellSize = 8.5;
        const lineH = 11;

        const wrapCells = (cells: string[], font: PDFFont) =>
          cells.map((c, i) =>
            wrapLines(c ?? "", font, cellSize, colW[i] - 2 * pad));
        const rowH = (cells: string[]) => {
          const w = wrapCells(cells, ctx.font);
          const maxLines = Math.max(1, ...w.map((l) => Math.max(1, l.length)));
          return maxLines * lineH + 6;
        };
        const drawHead = () => {
          const hLines = wrapCells(cols, ctx.bold);
          const hRows = Math.max(1, ...hLines.map((l) => l.length));
          const hH = hRows * lineH + 5;
          page.drawRectangle({
            x: marginLeft, y: y - hH, width: contentWidth, height: hH, color: INK,
          });
          for (let i = 0; i < n; i++) {
            let ty = y - lineH + 1.5;
            for (const line of hLines[i]) {
              page.drawText(line, {
                x: colX[i] + pad, y: ty, size: cellSize, font: ctx.bold, color: CREAM,
              });
              ty -= lineH;
            }
          }
          y -= hH;
        };
        const drawRow = (cells: string[], zebra: boolean) => {
          const cLines = wrapCells(cells, ctx.font);
          const rows = Math.max(1, ...cLines.map((l) => Math.max(1, l.length)));
          const h = rows * lineH + 6;
          if (zebra) {
            page.drawRectangle({
              x: marginLeft, y: y - h, width: contentWidth, height: h, color: CREAM,
            });
          }
          for (let i = 0; i < n; i++) {
            let ty = y - lineH + 1;
            for (const line of (cLines[i].length ? cLines[i] : [""])) {
              page.drawText(line, {
                x: colX[i] + pad, y: ty, size: cellSize, font: ctx.font, color: INK,
              });
              ty -= lineH;
            }
          }
          // dünne Spaltentrenner + Bodenlinie
          page.drawLine({
            start: { x: marginLeft, y: y - h }, end: { x: marginLeft + contentWidth, y: y - h },
            thickness: 0.3, color: MUTED,
          });
          y -= h;
        };

        y -= 2;
        await ensure(40);
        drawHead();
        const dataRows = b.rows ?? [];
        const emptyRows = b.emptyRows ?? 0;
        let z = 0;
        for (const r of dataRows) {
          const h = rowH(r);
          if (y - h < footerY) { await newPage(); drawHead(); z = 0; }
          drawRow(r, z % 2 === 0);
          z++;
        }
        const emptyCells = cols.map(() => "");
        for (let e = 0; e < emptyRows; e++) {
          if (y - 18 < footerY) { await newPage(); drawHead(); z = 0; }
          drawRow(emptyCells, z % 2 === 0);
          z++;
        }
        y -= 6;
        break;
      }
    }
  }
}

// Renders eine kleine gelbe Legende am oberen Rand aller Vorlagen.
export function drawPlaceholderLegend(
  page: import("https://esm.sh/pdf-lib@1.17.1").PDFPage,
  ctx: Ctx,
  y: number,
): number {
  const text = "Felder in eckigen Klammern […] durch die tatsächlichen Werte ersetzen.";
  page.drawRectangle({
    x: 40, y: y - 14, width: 515, height: 18,
    color: rgb(1.0, 0.94, 0.72),
    borderColor: GOLD,
    borderWidth: 0.4,
  });
  page.drawText(text, { x: 46, y: y - 8, size: 8, font: ctx.italic, color: INK });
  return y - 22;
}

// HACCP-Eigenkontrollkonzept der Bördesnack24 GbR — gebrandete Fassung des
// hochgeladenen Word-Dokuments (Version 1.0, Juni 2026), inhaltlich um die
// vollständigen Stammdaten ergänzt. Die ausfüllbaren Protokoll-Vorlagen
// (Befüllung, Temperatur, Reinigung, Vernichtung) liegen separat im Ordner
// „Betriebsprotokolle“ — hier wird nur darauf verwiesen, damit es eine
// einzige Quelle je Formular gibt (keine widersprüchlichen Dubletten).
export async function buildHaccpPdf(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "italic-note", text: "Hygienekonzept & lebensmittelrechtliche Dokumentation · Version 1.0 · Stand: Juni 2026 · Nächste Überprüfung: März 2027" },
    { type: "p", text: "Dieses Dokument dient als HACCP-Eigenkontrollkonzept gemäß Art. 5 VO (EG) 852/2004 und ist bei Lebensmittelkontrollen durch das Veterinär- und Lebensmittelüberwachungsamt (VLÜA) vorzulegen. Geltungsbereich: alle Snack- und Getränkeautomaten der Bördesnack24 GbR." },
    { type: "space" },

    { type: "h2", text: "1. Rechtliche Grundlagen" },
    { type: "p", text: "Das Eigenkontrollkonzept beruht auf den folgenden lebensmittelrechtlichen Vorschriften:" },
    {
      type: "table",
      columns: ["Rechtsquelle", "Regelungsgegenstand"],
      widths: [3, 7],
      rows: [
        ["VO (EG) 852/2004", "Allgemeine Lebensmittelhygiene – HACCP-Pflicht für alle Lebensmittelunternehmer (Art. 5)"],
        ["VO (EG) 178/2002", "Allgemeines Lebensmittelrecht, Rückverfolgbarkeit, Informationspflichten (Art. 18)"],
        ["LMHV", "Nationale Umsetzung – Hygienepflichten für Lebensmittelbetriebe (§ 4 LMHV)"],
        ["VO (EU) 1169/2011 (LMIV)", "Kennzeichnungspflichten, Allergeninformationen"],
        ["§§ 42, 43 IfSG", "Belehrungs- und Bescheinigungspflicht für Personen, die Lebensmittel behandeln"],
      ],
    },

    { type: "h2", text: "2. Betriebsdaten & Verantwortlichkeiten" },
    {
      type: "table",
      columns: ["Merkmal", "Angabe"],
      widths: [3, 7],
      rows: [
        ["Firma", "Bördesnack24 GbR (Pia & Philipp Blume)"],
        ["Anschrift", "Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen"],
        ["Steuernummer", "102/178/01635"],
        ["USt-IdNr.", "DE 458804058"],
        ["Gesellschafter", "Pia Blume · Philipp Blume"],
        ["HACCP-Beauftragte", "Pia Blume"],
        ["Tätigkeit", "Betrieb von Snack- und Getränkeautomaten (vorverpackte Lebensmittel, Getränke, Genussmittel)"],
        ["Anzahl Automaten", "3 Stück (siehe Standortliste, Anlage C der Verfahrensdokumentation)"],
        ["Zuständige Behörde", "Veterinär- und Lebensmittelüberwachungsamt (VLÜA) Salzlandkreis"],
        ["Steuerliche Beratung", "Steuerkanzlei Uwe Most, Schönebeck (Elbe)"],
      ],
    },

    { type: "h2", text: "3. HACCP-Gefahrenanalyse" },
    { type: "p", text: "Gemäß Art. 5 VO (EG) 852/2004 werden alle relevanten Gefährdungen identifiziert, bewertet und mit Gegenmaßnahmen versehen." },
    { type: "h3", text: "3.1 Identifizierte Gefahren" },
    {
      type: "table",
      columns: ["Gefahrenkategorie", "Beispiele", "Risikobewertung"],
      widths: [3, 5, 4],
      rows: [
        ["Biologisch", "Schimmelbildung, Bakterien bei abgelaufener Ware, Schädlingsbefall", "Mittel – regelmäßige MHD-Kontrolle erforderlich"],
        ["Chemisch", "Reinigungsmittelrückstände in Ausgabeschächten", "Gering – lebensmittelgeeignete Reiniger verwenden"],
        ["Physikalisch", "Glasbruch, Fremdkörper in Produkten, Verpackungsreste", "Gering – Sichtkontrolle bei Befüllung"],
        ["Temperatur (Kühlware)", "Unterbrechung der Kühlkette bei Kühlautomaten", "Hoch – tägliche Temperaturkontrolle (<= 7 °C)"],
      ],
    },
    { type: "h3", text: "3.2 Kritische Kontrollpunkte (CCP)" },
    {
      type: "table",
      columns: ["CCP", "Kontrollpunkt", "Grenzwert / Anforderung", "Korrekturmaßnahme"],
      widths: [1.2, 3, 3.4, 3.4],
      rows: [
        ["CCP 1", "Wareneingang – MHD-Prüfung", "Nur Ware mit ausreichendem MHD einlagern (mind. 7 Tage Restlaufzeit)", "Ware mit abgelaufenem MHD sofort aussondern und entsorgen"],
        ["CCP 2", "Temperatur Kühlautomat", "<= 7 °C (Soll), täglich kontrollieren", "Bei Überschreitung: Kühlautomat außer Betrieb setzen, Ware prüfen"],
        ["CCP 3", "Befüllung – Sichtkontrolle Verpackung", "Nur unversehrte, hygienisch einwandfreie Verpackungen einlegen", "Beschädigte Ware aussondern, nicht einlegen"],
        ["CCP 4", "Reinigung Ausgabeschacht", "Wöchentliche Reinigung mit lebensmittelgeeignetem Desinfektionsmittel", "Bei sichtbaren Rückständen: sofortige Reinigung und Dokumentation"],
      ],
    },

    { type: "h2", text: "4. Reinigungs- und Desinfektionsplan" },
    { type: "p", text: "Alle Reinigungsmaßnahmen sind im Reinigungsprotokoll (Ordner „Betriebsprotokolle“) zu dokumentieren." },
    {
      type: "table",
      columns: ["Bereich", "Häufigkeit", "Reinigungsmittel", "Methode", "Verantwortlich"],
      widths: [2.6, 1.8, 2.6, 2.4, 1.8],
      rows: [
        ["Ausgabeschacht", "Wöchentlich", "Lebensmittelgeeignetes Desinfektionsmittel", "Tuch, feucht auswischen", "Gesellschafter A"],
        ["Glasscheibe innen", "Wöchentlich", "Glasreiniger (rückstandsfrei)", "Tuch, streifenfrei", "Gesellschafter A"],
        ["Münzeinwurf / Tastatur", "Wöchentlich", "Desinfektionstuch (70 % Alkohol)", "Abwischen", "Gesellschafter B"],
        ["Automateninnenraum", "Monatlich", "Desinfektion komplett, lebensmittelgeeignet", "Vollständige Auswischung, trocknen lassen", "Beide Gesellschafter"],
        ["Kühleinheit – Temperatur", "Täglich (Sichtkontrolle)", "—", "Thermometeranzeige ablesen, dokumentieren", "Zuständiger vor Ort"],
        ["Außengehäuse / Aufstellbereich", "Monatlich", "Universalreiniger", "Abwischen, Boden reinigen", "Gesellschafter B"],
      ],
    },

    { type: "h2", text: "5. Eigenkontroll-Protokolle" },
    { type: "p", text: "Für die laufende Dokumentation stehen im Ordner „Betriebsprotokolle“ gebrandete PDF-Vorlagen bereit. Für jeden Automaten ist je Formular ein eigenes Blatt zu führen (Standort und Automaten-ID vermerken):" },
    { type: "li", text: "Befüllungsprotokoll (monatlich je Automat) – Datum, Uhrzeit, eingelegte Produkte, MHD geprüft, entnommene Ware, Kürzel." },
    { type: "li", text: "Temperaturprotokoll Kühlautomaten – Soll <= 7 °C; bei Abweichung sofort Korrekturmaßnahme einleiten und dokumentieren." },
    { type: "li", text: "Reinigungsprotokoll – Datum, Standort, Art der Reinigung, Reinigungsmittel, Durchführender, Unterschrift." },
    { type: "li", text: "Vernichtungs-/Entsorgungsprotokoll – abgelaufene oder beschädigte Ware mit Grund und Kürzel." },
    { type: "italic-note", text: "Damit es keine widersprüchlichen Fassungen gibt, sind die ausfüllbaren Formulare ausschließlich als separate Vorlagen hinterlegt; dieses Konzept legt nur die inhaltlichen Vorgaben fest." },

    { type: "h2", text: "6. Belehrung & Gesundheitszeugnis (§§ 42, 43 IfSG)" },
    { type: "p", text: "Alle Personen, die Lebensmittel herstellen, behandeln oder in Verkehr bringen, benötigen eine Erstbelehrung durch das Gesundheitsamt und müssen die Bescheinigung aufbewahren. Die Belehrung ist nach Aufnahme der Tätigkeit alle zwei Jahre zu wiederholen (§ 43 Abs. 4 IfSG). Der ausfüllbare Belehrungsbogen liegt im Ordner „IfSG-Belehrungen“." },

    { type: "h2", text: "7. Rückverfolgbarkeit (Art. 18 VO (EG) 178/2002)" },
    { type: "p", text: "Im Rückruffall muss innerhalb kurzer Zeit nachvollziehbar sein, welche Waren von welchem Lieferanten wann bezogen und in welchem Automaten eingesetzt wurden." },
    { type: "li", text: "Lieferantenrechnungen vollständig aufbewahren (auch GoBD-Pflicht, § 147 AO)." },
    { type: "li", text: "Wareneingangsdatum und Charge auf dem Befüllungsprotokoll vermerken." },
    { type: "li", text: "Bei Rückruf: unverzüglich betroffene Ware aus allen Automaten entfernen." },
    { type: "li", text: "Rückverfolgungsnachweise auf Verlangen der Behörde (RASFF-Meldung) dem VLÜA vorlegen." },

    { type: "h2", text: "8. Kennzeichnungspflichten (VO (EU) 1169/2011 – LMIV)" },
    { type: "p", text: "Da ausschließlich vorverpackte Lebensmittel vertrieben werden, gelten die werksseitigen Kennzeichnungen der Originalverpackung. Sicherzustellen ist:" },
    { type: "li", text: "Nur Ware mit vollständiger, gut lesbarer Originaletikettierung einlegen." },
    { type: "li", text: "Allergene nach Anhang II LMIV sind auf der Verpackung ausgewiesen – kein Umetikettieren." },
    { type: "li", text: "MHD muss zum Zeitpunkt der Entnahme durch den Kunden noch gültig sein." },
    { type: "li", text: "Name und Anschrift der Bördesnack24 GbR sowie eine Kontaktnummer für Beschwerden / Notfälle gut sichtbar am Automaten anbringen." },

    { type: "h2", text: "9. Schulungs- und Unterweisungsnachweis" },
    { type: "p", text: "Alle mit Lebensmitteln in Berührung kommenden Personen werden jährlich zu HACCP und Lebensmittelhygiene unterwiesen. Die Nachweise sind aufzubewahren (Vorlage im Ordner „IfSG-Belehrungen“)." },

    { type: "space" },
    { type: "line" },
    { type: "p", text: "Dieses Eigenkontrollkonzept wurde erstellt und tritt mit Unterzeichnung durch die Gesellschafter in Kraft. Es ist bei jeder wesentlichen Änderung zu aktualisieren und versioniert aufzubewahren." },
    { type: "signature-line", label: "Pia Blume (Gesellschafterin / HACCP-Beauftragte) · Sülzetal, den" },
    { type: "signature-line", label: "Philipp Blume (Gesellschafter) · Sülzetal, den" },
  ];

  await drawFlow(
    ctx,
    "Eigenkontrollkonzept (HACCP)",
    async () => ctx.pdf.addPage([595, 842]),
    blocks,
    { subtitle: "Hygienekonzept · v1.0" },
  );
  return await ctx.pdf.save();
}

// Verfahrensdokumentation der Bördesnack24 GbR (GoBD) — gebrandete Fassung
// des hochgeladenen Word-Dokuments (Version 1.0, Juni 2026), inhaltlich um
// die vollständigen Stammdaten ergänzt. Die ausfüllbaren Protokoll-Muster
// liegen als separate Vorlagen im Ordner „Betriebsprotokolle“; hier steht
// die verbindliche Prozessbeschreibung inkl. SKR-03-Kontierung.
export async function buildVerfahrensdokuPdf(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "italic-note", text: "Betrieb von Snack- und Getränkeautomaten · Version 1.0 · Stand: Juni 2026 · Nächste Prüfung: März 2027 · Erstellt unter Mitwirkung der Steuerkanzlei Uwe Most, Schönebeck (Elbe)" },
    {
      type: "table",
      columns: ["Merkmal", "Inhalt"],
      widths: [3, 7],
      rows: [
        ["Firma", "Bördesnack24 GbR (Pia & Philipp Blume)"],
        ["Rechtsform", "GbR (§§ 705 ff. BGB / MoPeG)"],
        ["Sitz", "Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen"],
        ["Tätigkeitsbereich", "Betrieb von Snack- und Getränkeautomaten (3 Standorte)"],
        ["Steuernummer", "102/178/01635"],
        ["USt-IdNr.", "DE 458804058"],
      ],
    },

    { type: "h2", text: "1. Allgemeines und Grundlagen" },
    { type: "h3", text: "1.1 Zweck der Verfahrensdokumentation" },
    { type: "p", text: "Die Verfahrensdokumentation erfüllt die Anforderungen der GoBD (BMF-Schreiben v. 28.11.2019, BStBl. I 2019, 1269, Rn. 151 ff.) an die Nachvollziehbarkeit und Nachprüfbarkeit der Buchführung. Sie beschreibt alle betrieblichen Prozesse, die steuerlich relevante Daten erzeugen oder verarbeiten, und stellt deren Ordnungsmäßigkeit sicher." },
    { type: "italic-note", text: "Rechtsgrundlage: GoBD, § 146 AO, § 147 AO, § 238 HGB. Gemäß GoBD Rn. 32 ist die Verfahrensdokumentation bei jeder wesentlichen Änderung zu aktualisieren und versioniert aufzubewahren (Aufbewahrungsfrist 10 Jahre, § 147 Abs. 3 AO)." },
    { type: "h3", text: "1.2 Aufbewahrung und Versionierung" },
    { type: "li", text: "Aufbewahrungsort: digital (sevDesk) sowie in Papierform." },
    { type: "li", text: "Unveränderlichkeit nach Freigabe (§ 146 Abs. 4 AO)." },
    { type: "li", text: "Lesbarkeit während der gesamten Aufbewahrungsfrist sicherstellen (§ 147 AO)." },
    { type: "li", text: "Versionsnummer und Änderungsdatum bei jeder Aktualisierung dokumentieren." },
    { type: "h3", text: "1.3 Verantwortlichkeiten" },
    {
      type: "table",
      columns: ["Aufgabe", "Verantwortlich"],
      widths: [5, 5],
      rows: [
        ["Pflege und Aktualisierung", "Gesellschafter Bördesnack24 GbR"],
        ["Freigabe neuer Versionen", "Gesellschafter Bördesnack24 GbR (2-of-2)"],
        ["Steuerliche Beratung", "Steuerkanzlei Uwe Most, Schönebeck (Elbe)"],
        ["Archivierung (digital)", "sevDesk"],
      ],
    },

    { type: "h2", text: "2. Prozess: Wareneinkauf" },
    { type: "p", text: "Ablauf: Bedarfsermittlung -> Lieferantenauswahl -> Bestellung -> Wareneingang -> Rechnungsprüfung -> Buchung in sevDesk." },
    { type: "h3", text: "2.1 Bedarfsermittlung & Bestellung" },
    { type: "li", text: "Regelmäßige Sichtung des Lagerbestands (mind. 1× wöchentlich); Mindestbestand je Artikel definiert (Anlage A: Lagerliste)." },
    { type: "li", text: "Großhändler / Cash & Carry (z. B. Selgros, Metro) und Direktlieferanten; Lieferantenliste wird gepflegt (Anlage B)." },
    { type: "li", text: "Barzahlungen: Quittung / Kassenbon = Buchungsbeleg. Kartenzahlungen: Kontoauszug + Kassenbon." },
    { type: "h3", text: "2.2 Wareneingang und Prüfung" },
    { type: "li", text: "Prüfung: Menge, Mindesthaltbarkeitsdatum (MHD), Unversehrtheit der Verpackung; Abzeichnung auf Lieferschein." },
    { type: "li", text: "Lagerung bei zulässigen Temperaturen gemäß LMHV; FIFO-Prinzip (First In – First Out) zur Sicherstellung der MHD-Einhaltung." },
    { type: "h3", text: "2.3 Steuerliche Zuordnung (USt-Sätze / SKR 03)" },
    {
      type: "table",
      columns: ["Warengruppe", "USt-Satz", "SKR 03", "Rechtsgrundlage"],
      widths: [4, 1.6, 1.6, 2.8],
      rows: [
        ["Lebensmittel (Riegel, Chips, Nüsse)", "7 %", "3300", "§ 12 Abs. 2 Nr. 1 UStG"],
        ["Säfte, Milch, Trinkwasser", "7 %", "3300", "Anlage 2 UStG"],
        ["Energy Drinks, Softdrinks", "19 %", "3400", "§ 12 Abs. 1 UStG"],
        ["Nichtlebensmittel (Hygieneartikel etc.)", "19 %", "3400", "§ 12 Abs. 1 UStG"],
      ],
    },
    { type: "italic-note", text: "Abgrenzungsfragen bei Mischsortimenten sind mit dem steuerlichen Berater abzustimmen (§ 12 Abs. 2 Nr. 1 UStG i. V. m. Anlage 2 UStG)." },

    { type: "h2", text: "3. Prozess: Auffüllen der Automaten" },
    { type: "p", text: "Ablauf: Tourplanung -> Warenentnahme Lager -> Fahrt zum Standort -> Befüllung -> Bestandsdokumentation." },
    { type: "li", text: "Festgelegte Befüllungsintervalle je Standort (Anlage C: Standortliste); flexibler Einsatz bei App-Benachrichtigung über Füllstand." },
    { type: "li", text: "Prüfung der aktuellen Belegung vor dem Nachfüllen; Eintrag in das Befüllungsprotokoll (Datum, Uhrzeit, Standort, Artikel, Menge)." },
    { type: "li", text: "Sichtkontrolle MHD aller im Automaten befindlichen Waren; abgelaufene oder beschädigte Ware entnehmen und in das Vernichtungsprotokoll eintragen." },
    { type: "italic-note", text: "GoBD-Anforderung: lückenlose Bestandsdokumentation (Rn. 100 ff. GoBD); zugleich HACCP-Nachweis gemäß § 4 LMHV i. V. m. Art. 5 VO (EG) 852/2004." },

    { type: "h2", text: "4. Prozess: Reinigung der Automaten" },
    {
      type: "table",
      columns: ["Reinigungsart", "Intervall", "Zuständig", "Rechtsgrundlage"],
      widths: [3.6, 2, 2.4, 2],
      rows: [
        ["Äußere Reinigung (Gehäuse, Display)", "Wöchentlich", "Gesellschafter", "§ 4 LMHV"],
        ["Innere Reinigung (Schächte, Fächer)", "Monatlich", "Gesellschafter", "Art. 5 VO 852/2004"],
        ["Vollreinigung inkl. Desinfektion", "Quartalsweise", "Gesellschafter / Fachbetrieb", "HACCP-Plan"],
        ["Sichtprüfung MHD / Zustand", "Bei jeder Befüllung", "Gesellschafter", "§ 4 LMHV"],
      ],
    },
    { type: "p", text: "Lebensmittelgeeignete Reinigungsmittel gemäß Liste (Anlage F). Jede Reinigung ist im Reinigungsprotokoll zu dokumentieren." },

    { type: "h2", text: "5. Prozess: Geldhandling und Kassenführung" },
    { type: "p", text: "Ablauf: Geldentnahme Automat -> Zählung -> Kassenprotokoll -> Bankeinzahlung -> Buchung in sevDesk." },
    { type: "li", text: "Geldentnahme durch Gesellschafter (Vier-Augen-Prinzip empfohlen); Zählung am Automaten oder im Büro." },
    { type: "li", text: "Geldentnahmeprotokoll: Datum, Uhrzeit, Standort, Betrag, Unterzeichner." },
    { type: "li", text: "Automaten sind keine Registrierkassen i. S. der AEAO zu § 146; gleichwohl gilt die Einzelaufzeichnungspflicht (§ 146 Abs. 1 AO). Einnahmen werden als Kassenprotokoll täglich je Standort erfasst." },
    {
      type: "table",
      columns: ["Erlösart", "USt-Satz", "SKR 03"],
      widths: [6, 2, 2],
      rows: [
        ["Verkäufe ermäßigt besteuerter Waren", "7 %", "8300"],
        ["Verkäufe regelbesteuerter Waren", "19 %", "8400"],
      ],
    },
    { type: "italic-note", text: "Bei gemischtem Sortiment (7 % / 19 %) ist eine sortimentsbezogene Erlöstrennung erforderlich (§ 22 UStG, § 63 UStDV). Fehlt die technische Trennung, ist eine dokumentierte Schätzung auf Basis der Wareneinsatzquoten zulässig." },

    { type: "h2", text: "6. Prozess: Wartung und technischer Service" },
    { type: "p", text: "Ablauf: Störungsmeldung -> Beauftragung -> Durchführung -> Abnahme -> Rechnung / Buchung. Routinewartung mindestens 1× jährlich je Automat." },
    { type: "h3", text: "6.1 Wartungscheckliste" },
    { type: "li", text: "Münzprüfer und Geldscheinleser: Funktion und Kalibrierung." },
    { type: "li", text: "Kühlsystem: Temperatur und Kondensatablauf." },
    { type: "li", text: "Ausgabemechanismus: Funktion aller Spiralen / Schiebesysteme." },
    { type: "li", text: "Beleuchtung: alle LEDs / Lampen funktionsfähig." },
    { type: "li", text: "Sicherheitsschlösser (Tapkey): App-Verbindung und NFC-Funktion; Münzwechsler / Rückgabemechanismus prüfen." },
    { type: "h3", text: "6.2 Kostenbuchung (SKR 03)" },
    {
      type: "table",
      columns: ["Kostenart", "SKR 03", "Bemerkung"],
      widths: [4, 2, 4],
      rows: [
        ["Reparaturkosten (Fachbetrieb)", "4805", "Reparatur und Instandhaltung BGA"],
        ["Ersatzteile / Kleinmaterial", "4980", "Sonstige betriebliche Aufwendungen"],
        ["Wartungsvertrag (laufend)", "4805", "Periodengerechte Abgrenzung beachten"],
      ],
    },
    { type: "italic-note", text: "Vorsteuerabzug gemäß § 15 UStG bei unternehmerischer Verwendung; Rechnungen unverzüglich in sevDesk erfassen." },

    { type: "h2", text: "7. Prozess: Schwund, Verderb und Warenvernichtung" },
    { type: "li", text: "MHD-überschrittene oder beschädigte Waren bei jeder Befüllung entnehmen." },
    { type: "li", text: "Vernichtungsprotokoll: Datum, Artikel, Menge, MHD, Grund, Unterzeichner; Fotos zur Dokumentation empfohlen." },
    {
      type: "table",
      columns: ["Sachverhalt", "Ertragsteuerlich", "Umsatzsteuerlich", "Rechtsgrundlage"],
      widths: [2.8, 2.8, 2.8, 2.4],
      rows: [
        ["Verderb / Ablauf MHD (nachgewiesen)", "Betriebsausgabe (kein Entnahmetatbestand)", "Keine Eigenverbrauchsbesteuerung", "Abschn. 3.3 Abs. 1 UStAE"],
        ["Eigenverbrauch ohne Nachweis", "Ggf. Entnahme § 4 Abs. 1 S. 2 EStG", "Ggf. unentgeltliche Wertabgabe § 3 Abs. 1b UStG", "§ 3 Abs. 1b UStG, § 4 EStG"],
      ],
    },
    { type: "italic-note", text: "Der Vernichtungsnachweis ist Voraussetzung für den Ansatz als Betriebsausgabe und den Ausschluss der Eigenverbrauchsbesteuerung (§ 3 Abs. 1b UStG)." },

    { type: "h2", text: "8. Prozess: Buchführung und Belegwesen" },
    { type: "p", text: "Ablauf: Belegerzeugung -> sevDesk -> Buchung -> Monatsabschluss." },
    {
      type: "table",
      columns: ["Belegart", "Quelle", "Erfassungsweg", "Aufbewahrung"],
      widths: [3, 2.4, 2.6, 2],
      rows: [
        ["Eingangsrechnungen Lieferanten", "E-Mail / Papier", "sevDesk", "GoBD, 10 Jahre"],
        ["Kassenbons Einkauf", "Kassenbon", "Foto / Scan -> sevDesk", "GoBD, 10 Jahre"],
        ["Geldentnahmeprotokolle", "Eigenbeleg", "Manuell -> sevDesk", "GoBD, 10 Jahre"],
        ["Befüllungsprotokolle", "Eigenbeleg", "Papier / digital", "HACCP + GoBD, 10 Jahre"],
        ["Reinigungsprotokolle", "Eigenbeleg", "Papier / digital", "HACCP + GoBD, 10 Jahre"],
        ["Wartungsrechnungen", "E-Mail / Papier", "sevDesk", "GoBD, 10 Jahre"],
        ["Kontoauszüge", "Onlinebanking", "sevDesk", "GoBD, 10 Jahre"],
        ["Vernichtungsprotokolle", "Eigenbeleg", "Papier / digital", "GoBD, 10 Jahre"],
      ],
    },
    { type: "italic-note", text: "Hinweis: Nach § 147 Abs. 3 AO gilt einheitlich die zehnjährige Aufbewahrungsfrist für buchungsrelevante Unterlagen; alle Eigenbelege werden entsprechend geführt." },
    { type: "h3", text: "8.1 GoBD-Anforderungen" },
    { type: "li", text: "Unveränderlichkeit der Belege nach Erfassung (§ 146 Abs. 4 AO)." },
    { type: "li", text: "Lesbarkeit während der gesamten Aufbewahrungsfrist (§ 147 AO)." },
    { type: "li", text: "Zeitnahe Erfassung: Kassenbons und Eigenbelege innerhalb von 10 Tagen." },
    { type: "li", text: "Die Verfahrensdokumentation selbst ist aufbewahrungspflichtig (GoBD Rn. 155)." },

    { type: "h2", text: "9. Kontenrahmen SKR 03 – Übersicht" },
    {
      type: "table",
      columns: ["Konto", "Bezeichnung", "Verwendung Bördesnack24"],
      widths: [1.6, 4, 4.4],
      rows: [
        ["1000", "Kasse", "Bargeldbestand"],
        ["1200", "Bank", "GbR-Geschäftskonto"],
        ["3300", "Wareneinkauf 7 %", "Einkauf ermäßigt besteuerter Waren"],
        ["3400", "Wareneinkauf 19 %", "Einkauf regelbesteuerter Waren"],
        ["4805", "Reparatur/Instandhaltung BGA", "Wartung und Reparatur Automaten"],
        ["4980", "Sonstige betriebliche Aufwendungen", "Kleinmaterial, Reinigungsmittel"],
        ["8300", "Erlöse 7 %", "Verkäufe ermäßigt besteuerter Waren"],
        ["8400", "Erlöse 19 %", "Verkäufe regelbesteuerter Waren"],
      ],
    },

    { type: "h2", text: "10. Anlagenverzeichnis" },
    {
      type: "table",
      columns: ["Anlage", "Titel", "Inhalt / Zweck", "Aktualisierung"],
      widths: [1.2, 2.8, 4, 2],
      rows: [
        ["A", "Lagerliste", "Mindestbestände je Artikel, aktueller Lagerbestand", "Laufend"],
        ["B", "Lieferantenliste", "Name, Kontakt, Sortiment, Konditionen", "Bei Änderung"],
        ["C", "Standortliste", "Automaten-Nr., Adresse, Aufstellvertrag, Intervall", "Bei Änderung"],
        ["D", "Befüllungsprotokoll", "Vorlage im Ordner Betriebsprotokolle", "Monatlich je Automat"],
        ["E", "Reinigungsprotokoll", "Intervalle, Zuständigkeiten, HACCP-Nachweis", "Bei jeder Reinigung"],
        ["F", "Reinigungsmittelliste", "HACCP-konforme Mittel, Sicherheitsdatenblätter", "Bei Änderung"],
        ["G", "Geldentnahmeprotokoll", "Vorlage im Ordner Betriebsprotokolle", "Bei jeder Entnahme"],
        ["H", "Wartungsprotokoll", "Vorlage im Ordner Betriebsprotokolle", "Bei Bedarf"],
        ["I", "Vernichtungsprotokoll", "Vorlage im Ordner Betriebsprotokolle", "Bei Bedarf"],
        ["J", "HACCP-Eigenkontrollkonzept", "Gefahrenanalyse und kritische Kontrollpunkte", "Jährlich"],
        ["K", "VLÜA-Anmeldenachweis", "Bestätigung der Anmeldung (Salzlandkreis)", "Einmalig"],
      ],
    },

    { type: "space" },
    { type: "line" },
    { type: "h2", text: "11. Freigabe und Unterschriften" },
    { type: "p", text: "Erstellt durch Philipp Blume; geprüft und freigegeben durch die Gesellschafter (2-of-2). Version 1.0, Stand Juni 2026, nächste planmäßige Überprüfung März 2027." },
    { type: "signature-line", label: "Pia Blume (Gesellschafterin) · Sülzetal, den" },
    { type: "signature-line", label: "Philipp Blume (Gesellschafter) · Sülzetal, den" },
    { type: "italic-note", text: "Diese Verfahrensdokumentation ist integraler Bestandteil der ordnungsgemäßen Buchführung gemäß § 238 HGB, § 145 AO und den GoBD. Änderungen sind versioniert zu dokumentieren und dem steuerlichen Berater mitzuteilen." },
  ];

  await drawFlow(
    ctx,
    "Verfahrensdokumentation (GoBD)",
    async () => ctx.pdf.addPage([595, 842]),
    blocks,
    { subtitle: "GoBD · v1.0" },
  );
  return await ctx.pdf.save();
}

// Sechs ausfüllbare Betriebsprotokoll-Vorlagen im Bördesnack24-Design.
// Jede Vorlage trägt im Kopf die vollständigen Stammdaten (drawStandardHeader
// via drawFlow) und ist inhaltlich deckungsgleich mit HACCP-Eigenkontroll-
// konzept und Verfahrensdokumentation — gleiche Spalten, Intervalle,
// Grenzwerte und Aufbewahrungsfristen, damit keine Widersprüche entstehen.

const EMPTY_ROWS = 16;

// Kleiner Kopfblock je Protokoll: Standort/Automat + Zeitraum zum Ausfüllen.
function formHeaderBlocks(intervall: string): Block[] {
  return [
    { type: "placeholder", label: "Standort / Automat-ID", value: "[z. B. A1 · Osterweddingen]" },
    { type: "placeholder", label: "Zeitraum / Monat", value: "[MM.JJJJ]" },
    { type: "placeholder", label: "Führt das Protokoll", value: "[Name Gesellschafter/in]" },
    { type: "italic-note", text: `Führungsintervall: ${intervall}. Für jeden Automaten ist ein eigenes Blatt zu führen.` },
    { type: "space", height: 4 },
  ];
}

function signatureBlocks(aufbewahrung: string): Block[] {
  return [
    { type: "space", height: 6 },
    { type: "signature-line", label: "Datum, Unterschrift verantwortliche/r Gesellschafter/in" },
    { type: "italic-note", text: `Aufbewahrung: ${aufbewahrung}. Revisionssicher, keine nachträglichen Änderungen — Korrekturen nur als neue, gekennzeichnete Zeile.` },
  ];
}

// 1 — Befüllungsprotokoll (Anlage D / HACCP Abschnitt 5)
export async function buildBefuellungProtokoll(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "p", text: "Bei jeder Befüllung sind eingelagerte Produkte, MHD-Sichtkontrolle und entnommener Verderb zu dokumentieren (§ 4 LMHV i. V. m. Art. 5 VO (EG) 852/2004; GoBD Rn. 100 ff.)." },
    ...formHeaderBlocks("monatlich je Automat, zusätzlich bei jeder Nachfüllung"),
    {
      type: "table",
      columns: ["Datum", "Uhrzeit", "Artikel", "Menge eingelegt", "MHD geprüft", "Verderb entnommen", "Kürzel"],
      widths: [1.6, 1.3, 2.6, 1.7, 1.4, 1.9, 1.1],
      emptyRows: EMPTY_ROWS,
    },
    ...signatureBlocks("HACCP + GoBD, 10 Jahre (§ 147 Abs. 3 AO)"),
  ];
  await drawFlow(ctx, "Befüllungsprotokoll", async () => ctx.pdf.addPage([595, 842]), blocks, { subtitle: "Betriebsprotokoll · HACCP/GoBD" });
  return await ctx.pdf.save();
}

// 2 — Temperaturprotokoll Kühlautomaten (HACCP Abschnitt 5, CCP 2)
export async function buildTemperaturProtokoll(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "p", text: "Soll-Temperatur Kühlautomat: <= 7 °C (CCP 2). Bei Überschreitung sofort Korrekturmaßnahme einleiten, Kühlautomat prüfen bzw. außer Betrieb setzen und die Ware bewerten." },
    ...formHeaderBlocks("täglich (Sichtkontrolle) je Kühlautomat"),
    {
      type: "table",
      columns: ["Datum", "Uhrzeit", "Ist-Temperatur °C", "Korrekturmaßnahme (bei > 7 °C)", "Kürzel"],
      widths: [1.6, 1.4, 2, 4, 1],
      emptyRows: EMPTY_ROWS,
    },
    ...signatureBlocks("HACCP + GoBD, 10 Jahre"),
  ];
  await drawFlow(ctx, "Temperaturprotokoll Kühlautomaten", async () => ctx.pdf.addPage([595, 842]), blocks, { subtitle: "Betriebsprotokoll · HACCP" });
  return await ctx.pdf.save();
}

// 3 — Reinigungsprotokoll (Anlage E / HACCP Abschnitt 4)
export async function buildReinigungProtokoll(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "p", text: "Reinigungsintervalle laut Hygieneplan: Ausgabeschacht/Glas/Tastatur wöchentlich, Innenraum monatlich, Vollreinigung inkl. Desinfektion quartalsweise. Nur lebensmittelgeeignete Reinigungsmittel gemäß Reinigungsmittelliste (Anlage F) verwenden." },
    ...formHeaderBlocks("wöchentlich / monatlich / quartalsweise (je Reinigungsart)"),
    {
      type: "table",
      columns: ["Datum", "Art der Reinigung", "Reinigungsmittel", "Durchführender", "Besonderheiten", "Kürzel"],
      widths: [1.6, 2.4, 2.2, 1.8, 2, 1],
      emptyRows: EMPTY_ROWS,
    },
    ...signatureBlocks("HACCP + GoBD, 10 Jahre"),
  ];
  await drawFlow(ctx, "Reinigungsprotokoll", async () => ctx.pdf.addPage([595, 842]), blocks, { subtitle: "Betriebsprotokoll · HACCP" });
  return await ctx.pdf.save();
}

// 4 — Vernichtungs-/Entsorgungsprotokoll (Anlage I / Verfahrensdoku Abschnitt 7)
export async function buildVernichtungProtokoll(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "p", text: "Jede Entnahme wegen abgelaufenem MHD, Beschädigung oder Hygienemangel ist zu dokumentieren. Der Vernichtungsnachweis ist Voraussetzung für den Betriebsausgabenabzug und den Ausschluss der Eigenverbrauchsbesteuerung (§ 3 Abs. 1b UStG). Fotos bei größeren Mengen empfohlen." },
    ...formHeaderBlocks("bei Bedarf, mindestens bei jeder Befüllung"),
    {
      type: "table",
      columns: ["Datum", "Standort / Lager", "Artikel", "Menge", "MHD", "Vernichtungsgrund", "Kürzel"],
      widths: [1.5, 1.8, 2.2, 1, 1.4, 2.1, 1],
      emptyRows: EMPTY_ROWS,
    },
    ...signatureBlocks("GoBD, 10 Jahre"),
  ];
  await drawFlow(ctx, "Vernichtungsprotokoll", async () => ctx.pdf.addPage([595, 842]), blocks, { subtitle: "Betriebsprotokoll · GoBD" });
  return await ctx.pdf.save();
}

// 5 — Wartungsprotokoll (Anlage H / Verfahrensdoku Abschnitt 6)
export async function buildWartungProtokoll(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "p", text: "Routinewartung mindestens 1× jährlich je Automat sowie bei Störungen. Geprüft werden u. a. Münzprüfer/Geldscheinleser, Kühlsystem und Kondensatablauf, Ausgabemechanismus, Beleuchtung sowie Sicherheitsschlösser (Tapkey). Reparaturkosten SKR 03 Konto 4805, Kleinmaterial 4980." },
    ...formHeaderBlocks("jährlich je Automat + bei Störung"),
    {
      type: "table",
      columns: ["Datum", "Automat / Standort", "Fehlerbeschreibung", "Maßnahme", "Erledigt durch", "Kosten €", "Kürzel"],
      widths: [1.5, 1.8, 2.2, 2, 1.6, 1.2, 0.9],
      emptyRows: EMPTY_ROWS,
    },
    ...signatureBlocks("GoBD, 10 Jahre; Rechnungen zusätzlich in sevDesk erfassen"),
  ];
  await drawFlow(ctx, "Wartungsprotokoll", async () => ctx.pdf.addPage([595, 842]), blocks, { subtitle: "Betriebsprotokoll · GoBD" });
  return await ctx.pdf.save();
}

// 6 — Geldentnahmeprotokoll (Anlage G / Verfahrensdoku Abschnitt 5)
export async function buildGeldentnahmeProtokoll(ctx: Ctx): Promise<Uint8Array> {
  const blocks: Block[] = [
    { type: "p", text: "Geldentnahme durch Gesellschafter (Vier-Augen-Prinzip empfohlen). Einzelaufzeichnungspflicht gemäß § 146 Abs. 1 AO; Erfassung als tägliches Kassenprotokoll je Standort. Erlöse SKR 03: 8300 (7 %) / 8400 (19 %); bei Mischsortiment dokumentierte Erlöstrennung (§ 22 UStG)." },
    ...formHeaderBlocks("bei jeder Entnahme, mindestens je Leerung"),
    {
      type: "table",
      columns: ["Datum", "Uhrzeit", "Entnommener Betrag €", "Wechselgeld €", "Nettobetrag €", "Unterzeichner"],
      widths: [1.6, 1.3, 2.2, 1.8, 1.8, 1.8],
      emptyRows: EMPTY_ROWS,
    },
    ...signatureBlocks("GoBD, 10 Jahre; Buchung in sevDesk"),
  ];
  await drawFlow(ctx, "Geldentnahmeprotokoll", async () => ctx.pdf.addPage([595, 842]), blocks, { subtitle: "Betriebsprotokoll · GoBD" });
  return await ctx.pdf.save();
}

// ============================================================================
// Edge Function: documents-install-haccp-set
// Erzeugt die beiden Kern-Dokumente (HACCP-Eigenkontrollkonzept &
// Verfahrensdokumentation) sowie sechs ausfüllbare Betriebsprotokoll-
// Vorlagen im Bördesnack24-Design und legt sie als Dokumente an. Idempotent.
// Alle PDFs tragen die Stammdaten im Kopf (drawStandardHeader). Mit
// ?refresh=1 oder body {"refresh":true} werden vorhandene Dokumente
// aktualisiert (Version 1 wird ersetzt, kein neuer Datensatz).
// Bewusst getrennt von documents-install-branded-set, damit die drei
// bestehenden gebrandeten Dokumente unberührt bleiben.
// ============================================================================

type Job = {
  title: string;
  category: string;
  build: (ctx: Ctx) => Promise<Uint8Array>;
};

Deno.serve(async (req) => {
  try {
    if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
    if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);
    const url = Deno.env.get("SUPABASE_URL")!;
    const ak = Deno.env.get("SUPABASE_ANON_KEY")!;
    const sk = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const caller = createClient(url, ak, { global: { headers: { Authorization: authHeader } } });
    const admin = createClient(url, sk);
    const bearer = authHeader.replace(/^Bearer\s+/i, "").trim();
    const isServiceRole = bearer === sk;
    if (!isServiceRole) {
      const uid = (await caller.auth.getUser()).data.user?.id;
      if (!uid) return jsonResponse({ error: "Nicht angemeldet" }, 401);
      const { data: prof } = await admin.from("profiles").select("role").eq("id", uid).maybeSingle();
      const role = (prof as { role?: string } | null)?.role;
      if (role !== "system_admin" && role !== "shareholder") {
        return jsonResponse({ error: "Nicht autorisiert" }, 403);
      }
    }

    const reqUrl = new URL(req.url);
    const bodyRefresh = await req.clone().json().catch(() => ({} as Record<string, unknown>));
    const refresh = reqUrl.searchParams.get("refresh") === "1"
      || (bodyRefresh as { refresh?: unknown }).refresh === true;

    const results: Array<Record<string, unknown>> = [];

    const jobs: Job[] = [
      { title: "HACCP-Eigenkontrollkonzept & Hygieneplan", category: "haccp_konzept", build: (c) => buildHaccpPdf(c) },
      { title: "Verfahrensdokumentation (GoBD)", category: "verfahrensdoku", build: (c) => buildVerfahrensdokuPdf(c) },
      { title: "Befüllungsprotokoll (Vorlage)", category: "protokolle", build: (c) => buildBefuellungProtokoll(c) },
      { title: "Temperaturprotokoll Kühlautomaten (Vorlage)", category: "protokolle", build: (c) => buildTemperaturProtokoll(c) },
      { title: "Reinigungsprotokoll (Vorlage)", category: "protokolle", build: (c) => buildReinigungProtokoll(c) },
      { title: "Vernichtungsprotokoll (Vorlage)", category: "protokolle", build: (c) => buildVernichtungProtokoll(c) },
      { title: "Wartungsprotokoll (Vorlage)", category: "protokolle", build: (c) => buildWartungProtokoll(c) },
      { title: "Geldentnahmeprotokoll (Vorlage)", category: "protokolle", build: (c) => buildGeldentnahmeProtokoll(c) },
    ];

    for (const job of jobs) {
      const { data: existing } = await admin.from("documents")
        .select("id, current_version")
        .eq("title", job.title)
        .is("archived_at", null)
        .maybeSingle();

      if (existing && !refresh) {
        results.push({ title: job.title, action: "skip (already exists)" });
        continue;
      }

      const pdf = await PDFDocument.create();
      const font = await pdf.embedFont(StandardFonts.Helvetica);
      const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
      const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
      const bytes = await job.build({ pdf, font, bold, italic });

      const slug = job.title.replace(/[^a-z0-9]+/gi, "_").toLowerCase();
      const fp = `branded/${job.category}/${Date.now()}_${slug}.pdf`;
      const up = await admin.storage.from("documents").upload(
        fp, bytes, { contentType: "application/pdf", upsert: true });
      if (up.error) {
        results.push({ title: job.title, error: up.error.message });
        continue;
      }

      if (existing && refresh) {
        const docId = (existing as { id: string }).id;
        await admin.from("document_versions")
          .update({ file_path: fp, notes: "Aktualisierte Fassung" })
          .eq("document_id", docId)
          .eq("version", 1);
        await admin.from("documents")
          .update({ updated_at: new Date().toISOString() })
          .eq("id", docId);
        results.push({ title: job.title, action: "refreshed", document_id: docId, bytes: bytes.length });
        continue;
      }

      const { data: doc, error: dErr } = await admin.from("documents").insert({
        title: job.title, category: job.category, status: "active",
        is_template: false, current_version: 1,
      }).select("id").maybeSingle();
      if (dErr || !doc) { results.push({ title: job.title, error: dErr?.message ?? "insert failed" }); continue; }
      await admin.from("document_versions").insert({
        document_id: doc.id, version: 1, file_path: fp, notes: "Initial-Version (gebrandet)",
      });
      results.push({ title: job.title, action: "created", document_id: doc.id, bytes: bytes.length });
    }

    return jsonResponse({ ok: true, results });
  } catch (e) {
    const msg = (e instanceof Error) ? (e.message + " | " + (e.stack ?? "")) : String(e);
    return jsonResponse({ error: msg }, 500);
  }
});
