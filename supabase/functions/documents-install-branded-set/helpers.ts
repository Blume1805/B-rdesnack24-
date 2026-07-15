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

export function drawStandardHeader(page: PDFPage, ctx: Ctx, title: string): number {
  const hy = 800;
  page.drawText(ISSUER.name, { x: 320, y: hy, size: 9, font: ctx.bold, color: INK });
  page.drawText(ISSUER.street, { x: 320, y: hy - 11, size: 8, font: ctx.font, color: MUTED });
  page.drawText(ISSUER.cityLine, { x: 320, y: hy - 22, size: 8, font: ctx.font, color: MUTED });
  page.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 34, size: 8, font: ctx.font, color: MUTED });
  page.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 45, size: 8, font: ctx.font, color: MUTED });
  let y = hy - 70;
  page.drawText(title, { x: 40, y, size: 15, font: ctx.bold, color: GOLD });
  y -= 20;
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 0.8, color: INK });
  y -= 16;
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
  | { type: "signature-line"; label: string };

export async function drawFlow(
  ctx: Ctx,
  headerTitle: string,
  contentPage: () => Promise<PDFPage>,
  blocks: Block[],
): Promise<void> {
  const marginLeft = 40;
  const marginRight = 40;
  const pageWidth = 595;
  const contentWidth = pageWidth - marginLeft - marginRight;
  const footerY = 60;

  let page = await contentPage();
  let y = drawStandardHeader(page, ctx, headerTitle);

  const newPage = async () => {
    page = await contentPage();
    y = drawStandardHeader(page, ctx, headerTitle);
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
    }
  }
}
