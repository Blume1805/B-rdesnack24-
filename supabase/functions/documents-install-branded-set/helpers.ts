// Helpers shared between PDF builders.
import { PDFDocument, PDFPage, StandardFonts, rgb, type PDFFont } from "https://esm.sh/pdf-lib@1.17.1";

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
// Der volle Stammdaten-Block erscheint NUR auf Seite 1 (isFirstPage=true).
// Auf Folgeseiten wird nur die goldene Topbar-Leiste gezeichnet, damit nicht
// bei jedem Seitenumbruch Wortmarke/Anschrift/Titel erneut aufgebaut werden.
export function drawStandardHeader(
  page: PDFPage,
  ctx: Ctx,
  title: string,
  isFirstPage = true,
): number {
  if (!isFirstPage) {
    page.drawRectangle({ x: 0, y: 842 - 6, width: 595, height: 6, color: GOLD });
    return 842 - 40;
  }
  page.drawRectangle({ x: 0, y: 842 - 6, width: 595, height: 6, color: GOLD });
  page.drawText("BÖRDESNACK24", { x: 40, y: 842 - 30, size: 11, font: ctx.bold, color: INK });
  page.drawText("Dokument", { x: 40, y: 842 - 43, size: 8, font: ctx.font, color: MUTED });
  const hy = 842 - 22;
  page.drawText(ISSUER.name, { x: 320, y: hy, size: 8, font: ctx.bold, color: INK });
  page.drawText(ISSUER.street, { x: 320, y: hy - 10, size: 7.5, font: ctx.font, color: MUTED });
  page.drawText(ISSUER.cityLine, { x: 320, y: hy - 20, size: 7.5, font: ctx.font, color: MUTED });
  page.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 30, size: 7.5, font: ctx.font, color: MUTED });
  page.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 40, size: 7.5, font: ctx.font, color: MUTED });
  page.drawLine({ start: { x: 40, y: 842 - 82 }, end: { x: 555, y: 842 - 82 }, thickness: 0.7, color: GOLD });
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
  | { type: "placeholder"; label: string; value: string };

export async function drawFlow(
  ctx: Ctx,
  headerTitle: string,
  contentPage: () => Promise<PDFPage>,
  blocks: Block[],
  opts?: { showLegend?: boolean },
): Promise<void> {
  const marginLeft = 40;
  const marginRight = 40;
  const pageWidth = 595;
  const contentWidth = pageWidth - marginLeft - marginRight;
  const footerY = 60;

  let page = await contentPage();
  let y = drawStandardHeader(page, ctx, headerTitle);
  if (opts?.showLegend) y = drawPlaceholderLegend(page, ctx, y);

  const newPage = async () => {
    page = await contentPage();
    y = drawStandardHeader(page, ctx, headerTitle, false);
  };
  const ensure = async (h: number) => {
    if (y - h < footerY) await newPage();
  };

  for (const b of blocks) {
    switch (b.type) {
      // Skill-Vorgabe (boerdesnack24-pdf): Fließtext 11 pt, Zeilenabstand 1,2
      // (-> 14 pt Leading), Hinweise/Bildunterschriften 9 pt grau kursiv,
      // vor Überschriften „doppelte Zeile + Zusatzluft".
      case "h2": {
        await ensure(46);
        y -= 26;
        page.drawText(b.text, { x: marginLeft, y, size: 12, font: ctx.bold, color: INK });
        y -= 6;
        page.drawLine({ start: { x: marginLeft, y }, end: { x: 555, y }, thickness: 0.7, color: GOLD });
        y -= 12;
        break;
      }
      case "h3": {
        await ensure(38);
        y -= 20;
        page.drawText(b.text, { x: marginLeft, y, size: 11, font: ctx.bold, color: INK });
        y -= 5;
        const h3Width = ctx.bold.widthOfTextAtSize(b.text, 11);
        page.drawLine({ start: { x: marginLeft, y }, end: { x: marginLeft + h3Width, y }, thickness: 0.6, color: GOLD });
        y -= 10;
        break;
      }
      case "p": {
        const lines = wrapLines(b.text, ctx.font, 11, contentWidth);
        for (const line of lines) {
          await ensure(15);
          page.drawText(line, { x: marginLeft, y, size: 11, font: ctx.font, color: INK });
          y -= 14;
        }
        y -= 5;
        break;
      }
      case "italic-note": {
        const lines = wrapLines(b.text, ctx.italic, 9, contentWidth);
        for (const line of lines) {
          await ensure(15);
          page.drawText(line, { x: marginLeft, y, size: 9, font: ctx.italic, color: MUTED });
          y -= 14;
        }
        y -= 5;
        break;
      }
      case "li": {
        const indent = (b.indent ?? 0) * 12 + 14;
        const lines = wrapLines(b.text, ctx.font, 11, contentWidth - indent);
        for (let i = 0; i < lines.length; i++) {
          await ensure(15);
          if (i === 0) {
            page.drawText("•", { x: marginLeft + indent - 12, y, size: 11, font: ctx.bold, color: INK });
          }
          page.drawText(lines[i], { x: marginLeft + indent, y, size: 11, font: ctx.font, color: INK });
          y -= 14;
        }
        break;
      }
      case "sub-li": {
        const indent = 28;
        const lines = wrapLines(b.text, ctx.font, 11, contentWidth - indent);
        for (let i = 0; i < lines.length; i++) {
          await ensure(15);
          if (i === 0) {
            page.drawText("·", { x: marginLeft + indent - 12, y, size: 12, font: ctx.bold, color: MUTED });
          }
          page.drawText(lines[i], { x: marginLeft + indent, y, size: 11, font: ctx.font, color: INK });
          y -= 14;
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
    }
  }

  // Footer auf jeder Seite — Trennlinie + Aussteller-Adresse + Steuernummer/
  // USt-IdNr. + "Seite X von Y", analog zu finance-export-pdf. Belehrung und
  // NDA können mehrseitig sein, daher auf allen erzeugten Seiten anwenden.
  const allPages = ctx.pdf.getPages();
  for (let i = 0; i < allPages.length; i++) {
    const pg = allPages[i];
    pg.drawLine({
      start: { x: marginLeft, y: 46 }, end: { x: pageWidth - marginRight, y: 46 },
      thickness: 0.4, color: MUTED,
    });
    pg.drawText(
      `${ISSUER.name} · ${ISSUER.street}, ${ISSUER.cityLine} · St-Nr. ${ISSUER.taxNumber} · USt-IdNr. ${ISSUER.vatId}`,
      { x: marginLeft, y: 34, size: 6.5, font: ctx.font, color: MUTED },
    );
    pg.drawText(`Seite ${i + 1} / ${allPages.length}`, {
      x: pageWidth - marginRight - 45, y: 34, size: 8, font: ctx.font, color: MUTED,
    });
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
