// ============================================================================
// Edge Function: finance-export-pdf
// ----------------------------------------------------------------------------
// Erzeugt eine mehrseitige PDF-Auswertung des Finanzdashboards:
//   Seite 1: Rentabilität — KPI-Kacheln, Zielwerte in Rot (Korridore)
//   Seite 2: Vergleichs-Chart, Cashflow-Trend (12 Monate), Konten-Tabelle
//   Seite 3: Automaten-Umsatz, App-Kunden-Kennzahlen, Top-Produkte
//
// Jede Seite: Stammdaten-Header (Name, Anschrift, Steuernummer, USt-IdNr.)
// wie bei allen übrigen Bördesnack24-PDFs; letzte Seite trägt den
// Unterschriftenblock der Gesellschafter (partner_signatures).
//
// Datenquelle: public.finance_kpis(p_from, p_to). Aufrufer braucht
// 'finance.export' (Prüfung serverseitig).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import {
  PDFDocument, PDFFont, PDFPage, StandardFonts, rgb,
} from "https://esm.sh/pdf-lib@1.17.1";
import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

const ISSUER = {
  name: "Bördesnack24 GbR (Pia & Philipp Blume)",
  street: "Sülldorfer Str. 3A",
  cityLine: "39171 Sülzetal OT Osterweddingen",
  taxNumber: "102/178/01635",
  vatId: "DE 458804058",
};

const GOLD  = rgb(0.99, 0.76, 0.01);
const INK   = rgb(0.08, 0.07, 0.05);
const MUTED = rgb(0.44, 0.42, 0.35);
const CREAM = rgb(0.98, 0.96, 0.92);
const OK    = rgb(0.25, 0.63, 0.30);
const RED   = rgb(0.78, 0.15, 0.15);
const TRACK = rgb(0.90, 0.88, 0.83);

const eur = (n: unknown) =>
  `${Number(n ?? 0).toLocaleString("de-DE", {
    minimumFractionDigits: 2, maximumFractionDigits: 2,
  })} EUR`;

const pct = (n: unknown, digits = 1) =>
  n === null || n === undefined
    ? "—"
    : `${Number(n).toLocaleString("de-DE", {
        minimumFractionDigits: digits, maximumFractionDigits: digits,
      })} %`;

// Kompakte EUR-Beschriftung für Achsen-Ticks (begrenzter Platz):
// ab 1.000 EUR als "x,xk EUR", darunter ganzzahlig.
const shortEur = (n: number) =>
  Math.abs(n) >= 1000
    ? `${(n / 1000).toLocaleString("de-DE", {
        minimumFractionDigits: 1, maximumFractionDigits: 1,
      })}k EUR`
    : `${Math.round(n).toLocaleString("de-DE")} EUR`;

const dateStr = (v: unknown) => (v ?? "").toString();

const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN_X = 40;
const CONTENT_W = PAGE_W - 2 * MARGIN_X;
// Unter dieser Marke beginnt der Seiten-Footer — Inhalte müssen darüber bleiben.
const FOOT_LIMIT = 70;

// pdf-lib WinAnsi kann Umlaute (ä/ö/ü/Ä/Ö/Ü/ß/Ø). Nur Zeichen außerhalb
// ISO-8859-1 (Emoji, CJK, …) werden entfernt; typografische Sonderzeichen
// werden vorher auf ASCII-Äquivalente normalisiert.
const safe = (s: string) =>
  s
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/ /g, " ")
    .replace(/€/g, "EUR")
    .replace(/[^\x00-\xFF]/g, "?");

type Ctx = {
  pdf: PDFDocument;
  page: PDFPage;
  y: number;
  font: PDFFont;
  bold: PDFFont;
  italic: PDFFont;
};

// ── Header: Gold-Linie, Wortmarke, Stammdaten-Block rechts ──────────────
function drawHeader(ctx: Ctx) {
  ctx.page.drawRectangle({
    x: 0, y: PAGE_H - 6, width: PAGE_W, height: 6, color: GOLD,
  });
  ctx.page.drawText(safe("BÖRDESNACK24"), {
    x: MARGIN_X, y: PAGE_H - 30, size: 11, font: ctx.bold, color: INK,
  });
  ctx.page.drawText("Finanzauswertung", {
    x: MARGIN_X, y: PAGE_H - 43, size: 8, font: ctx.font, color: MUTED,
  });
  // Stammdaten rechts — identisch zu protocol-export-pdf/documents-*.
  const hx = 350;
  let hy = PAGE_H - 22;
  ctx.page.drawText(safe(ISSUER.name), { x: hx, y: hy, size: 8, font: ctx.bold, color: INK });
  hy -= 10;
  ctx.page.drawText(safe(ISSUER.street), { x: hx, y: hy, size: 7.5, font: ctx.font, color: MUTED });
  hy -= 10;
  ctx.page.drawText(safe(ISSUER.cityLine), { x: hx, y: hy, size: 7.5, font: ctx.font, color: MUTED });
  hy -= 10;
  ctx.page.drawText(safe(`Steuernummer: ${ISSUER.taxNumber}`), { x: hx, y: hy, size: 7.5, font: ctx.font, color: MUTED });
  hy -= 10;
  ctx.page.drawText(safe(`USt-IdNr.: ${ISSUER.vatId}`), { x: hx, y: hy, size: 7.5, font: ctx.font, color: MUTED });
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: PAGE_H - 82 }, end: { x: PAGE_W - MARGIN_X, y: PAGE_H - 82 },
    thickness: 0.7, color: INK,
  });
  ctx.y = PAGE_H - 100;
}

function newPage(ctx: Ctx) {
  ctx.page = ctx.pdf.addPage([PAGE_W, PAGE_H]);
  drawHeader(ctx);
}

function ensureSpace(ctx: Ctx, needed: number) {
  if (ctx.y - needed < FOOT_LIMIT) newPage(ctx);
}

function h1(ctx: Ctx, text: string) {
  ensureSpace(ctx, 40);
  ctx.page.drawText(safe(text), {
    x: MARGIN_X, y: ctx.y, size: 19, font: ctx.bold, color: GOLD,
  });
  ctx.y -= 26;
}

function h2(ctx: Ctx, text: string) {
  ensureSpace(ctx, 30);
  ctx.page.drawText(safe(text), {
    x: MARGIN_X, y: ctx.y, size: 13, font: ctx.bold, color: INK,
  });
  ctx.y -= 8;
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: ctx.y }, end: { x: MARGIN_X + CONTENT_W, y: ctx.y },
    thickness: 0.7, color: GOLD,
  });
  ctx.y -= 14;
}

function p(ctx: Ctx, text: string, opts?: { size?: number; color?: unknown; bold?: boolean }) {
  const size = opts?.size ?? 10;
  ensureSpace(ctx, size + 6);
  ctx.page.drawText(safe(text), {
    x: MARGIN_X, y: ctx.y, size,
    font: opts?.bold ? ctx.bold : ctx.font,
    // deno-lint-ignore no-explicit-any
    color: (opts?.color as any) ?? INK,
  });
  ctx.y -= size + 5;
}

function kv(ctx: Ctx, label: string, value: string, opts?: { bold?: boolean; color?: unknown }) {
  ensureSpace(ctx, 18);
  const f = opts?.bold ? ctx.bold : ctx.font;
  // deno-lint-ignore no-explicit-any
  const c = (opts?.color as any) ?? INK;
  ctx.page.drawText(safe(label), { x: MARGIN_X, y: ctx.y, size: 10, font: f, color: c });
  const w = f.widthOfTextAtSize(safe(value), 10);
  ctx.page.drawText(safe(value), {
    x: PAGE_W - MARGIN_X - w, y: ctx.y, size: 10, font: f, color: c,
  });
  ctx.y -= 16;
}

// ── Tabelle mit Kopfzeile + Zebra-Streifen ──────────────────────────────
function table(
  ctx: Ctx,
  headers: string[],
  colX: number[],
  rows: string[][],
  opts?: { alignRightCols?: number[] },
) {
  ensureSpace(ctx, 40);
  const drawHeadRow = () => {
    ctx.page.drawRectangle({
      x: MARGIN_X, y: ctx.y - 4, width: CONTENT_W, height: 16, color: INK,
    });
    headers.forEach((h, i) => {
      const rightAlign = opts?.alignRightCols?.includes(i);
      const tx = rightAlign
        ? (colX[i + 1] ?? PAGE_W - MARGIN_X) - 6 - ctx.bold.widthOfTextAtSize(safe(h), 8.5)
        : colX[i];
      ctx.page.drawText(safe(h), { x: tx, y: ctx.y, size: 8.5, font: ctx.bold, color: CREAM });
    });
    ctx.y -= 18;
  };
  drawHeadRow();
  let zebra = false;
  for (const r of rows) {
    if (ctx.y - 14 < FOOT_LIMIT) {
      newPage(ctx);
      drawHeadRow();
      zebra = false;
    }
    if (zebra) {
      ctx.page.drawRectangle({
        x: MARGIN_X, y: ctx.y - 3.5, width: CONTENT_W, height: 13.5, color: CREAM,
      });
    }
    r.forEach((cell, i) => {
      const rightAlign = opts?.alignRightCols?.includes(i);
      const tx = rightAlign
        ? (colX[i + 1] ?? PAGE_W - MARGIN_X) - 6 - ctx.font.widthOfTextAtSize(safe(cell), 8.5)
        : colX[i];
      ctx.page.drawText(safe(cell), { x: tx, y: ctx.y, size: 8.5, font: ctx.font, color: INK });
    });
    ctx.y -= 14;
    zebra = !zebra;
  }
  ctx.y -= 6;
}

// ── KPI-Kachel-Raster mit Vergleichs-Deltas + rotem Zielwert ────────────
function kpiGrid(ctx: Ctx, tiles: Array<{
  label: string; value: string;
  deltaMom?: number | null; deltaYoy?: number | null;
  target?: string;
}>) {
  const cols = 3;
  const rows = Math.ceil(tiles.length / cols);
  const gap = 8;
  const w = (CONTENT_W - (cols - 1) * gap) / cols;
  const h = 62;
  ensureSpace(ctx, rows * (h + gap));
  const startY = ctx.y;
  for (let i = 0; i < tiles.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = MARGIN_X + col * (w + gap);
    const y = startY - row * (h + gap);
    const t = tiles[i];
    ctx.page.drawRectangle({
      x, y: y - h, width: w, height: h,
      color: CREAM, borderColor: MUTED, borderWidth: 0.6,
    });
    ctx.page.drawText(safe(t.label.toUpperCase()), {
      x: x + 8, y: y - 13, size: 7, font: ctx.bold, color: MUTED,
    });
    ctx.page.drawText(safe(t.value), {
      x: x + 8, y: y - 33, size: 15, font: ctx.bold, color: INK,
    });
    if (t.target) {
      ctx.page.drawText(safe(`Ziel: ${t.target}`), {
        x: x + 8, y: y - 45, size: 7, font: ctx.bold, color: RED,
      });
    }
    const drawDelta = (labelTxt: string, d: number | null | undefined, dx: number) => {
      if (d === null || d === undefined) {
        ctx.page.drawText(safe(`${labelTxt} -`), {
          x: x + 8 + dx, y: y - h + 7, size: 6.5, font: ctx.font, color: MUTED,
        });
        return;
      }
      const positive = d >= 0;
      ctx.page.drawText(
        safe(`${labelTxt} ${positive ? "+" : ""}${d.toLocaleString("de-DE", {
          minimumFractionDigits: 1, maximumFractionDigits: 1,
        })} %`),
        { x: x + 8 + dx, y: y - h + 7, size: 6.5, font: ctx.bold, color: positive ? OK : RED },
      );
    };
    drawDelta("Vormonat", t.deltaMom, 0);
    drawDelta("Vorjahr", t.deltaYoy, 78);
  }
  ctx.y = startY - rows * (h + gap) - 6;
}

// ── Zielwert-Zeile: Skala mit rot gestricheltem Zielkorridor ────────────
// Spanne → gestrichelter roter Korridor; Einzelwert → rote Linie;
// Ist-Wert = goldene Marke auf der Skala.
function targetRow(
  ctx: Ctx,
  label: string,
  currentText: string,
  current: number | null,
  lo: number | null,
  hi: number | null,
  scaleMax: number,
  targetText: string,
) {
  ensureSpace(ctx, 34);
  ctx.page.drawText(safe(label), {
    x: MARGIN_X, y: ctx.y, size: 9.5, font: ctx.bold, color: INK,
  });
  const vw = ctx.font.widthOfTextAtSize(safe(currentText), 9.5);
  ctx.page.drawText(safe(currentText), {
    x: MARGIN_X + 250 - vw, y: ctx.y, size: 9.5, font: ctx.font, color: INK,
  });
  ctx.page.drawText(safe(targetText), {
    x: PAGE_W - MARGIN_X - ctx.bold.widthOfTextAtSize(safe(targetText), 9), y: ctx.y,
    size: 9, font: ctx.bold, color: RED,
  });
  ctx.y -= 12;

  const trackX = MARGIN_X;
  const trackW = CONTENT_W;
  const trackH = 7;
  const yTrack = ctx.y - trackH;
  ctx.page.drawRectangle({
    x: trackX, y: yTrack, width: trackW, height: trackH, color: TRACK,
  });
  const toX = (v: number) => trackX + Math.min(Math.max(v / scaleMax, 0), 1) * trackW;
  const dash = { dashArray: [3, 2] as number[] };
  if (lo !== null && hi !== null) {
    // Zielkorridor als gestricheltes rotes Rechteck (4 Linien)
    const x1 = toX(lo), x2 = toX(hi);
    ctx.page.drawLine({ start: { x: x1, y: yTrack - 2 }, end: { x: x2, y: yTrack - 2 }, thickness: 1.2, color: RED, ...dash });
    ctx.page.drawLine({ start: { x: x1, y: yTrack + trackH + 2 }, end: { x: x2, y: yTrack + trackH + 2 }, thickness: 1.2, color: RED, ...dash });
    ctx.page.drawLine({ start: { x: x1, y: yTrack - 2 }, end: { x: x1, y: yTrack + trackH + 2 }, thickness: 1.2, color: RED, ...dash });
    ctx.page.drawLine({ start: { x: x2, y: yTrack - 2 }, end: { x: x2, y: yTrack + trackH + 2 }, thickness: 1.2, color: RED, ...dash });
  } else if (lo !== null || hi !== null) {
    // Einzel-Zielwert: durchgezogene senkrechte rote Linie
    const x1 = toX((lo ?? hi)!);
    ctx.page.drawLine({ start: { x: x1, y: yTrack - 3 }, end: { x: x1, y: yTrack + trackH + 3 }, thickness: 1.6, color: RED });
  }
  if (current !== null) {
    const cx = toX(current);
    ctx.page.drawRectangle({ x: cx - 2, y: yTrack - 1, width: 4, height: trackH + 2, color: GOLD });
  }
  ctx.y -= trackH + 14;
}

// ── Horizontale Balken (Automaten) ──────────────────────────────────────
function barList(ctx: Ctx, rows: Array<{ label: string; value: number; text: string }>) {
  if (rows.length === 0) return;
  const max = rows.reduce((a, r) => Math.max(a, r.value), 0);
  for (const r of rows) {
    ensureSpace(ctx, 28);
    ctx.page.drawText(safe(r.label), {
      x: MARGIN_X, y: ctx.y, size: 10, font: ctx.bold, color: INK,
    });
    const tw = ctx.bold.widthOfTextAtSize(safe(r.text), 10);
    ctx.page.drawText(safe(r.text), {
      x: PAGE_W - MARGIN_X - tw, y: ctx.y, size: 10, font: ctx.bold, color: INK,
    });
    ctx.y -= 12;
    ctx.page.drawRectangle({
      x: MARGIN_X, y: ctx.y - 6, width: CONTENT_W, height: 6, color: TRACK,
    });
    const wFrac = max > 0 ? (r.value / max) : 0;
    ctx.page.drawRectangle({
      x: MARGIN_X, y: ctx.y - 6, width: CONTENT_W * wFrac, height: 6, color: GOLD,
    });
    ctx.y -= 14;
  }
}

// ── 12-Monats-Trendchart (Umsatz Gold, Aufwand Ink) ─────────────────────
// Y-Achse: 4 Hilfslinien (0/25/50/75/100 % von max) mit EUR-Beschriftung,
// damit die Balkenhöhen ablesbar sind statt nur relativ zueinander zu
// wirken (Root Cause des gemeldeten Bugs: die Achse hatte nur Linien,
// aber nie Werte).
function trendChart(ctx: Ctx, trend: Array<{ month: string; revenue_net: number; expense_net: number }>) {
  if (trend.length === 0) {
    p(ctx, "Noch keine Trend-Daten für den Zeitraum.", { color: MUTED, size: 10 });
    return;
  }
  ensureSpace(ctx, 185);
  const chartH = 125;
  const yTop = ctx.y;
  const yBase = yTop - chartH;
  const max = trend.reduce((a, t) => Math.max(a, t.revenue_net, t.expense_net), 0);

  const TICKS = 4;
  const labelSize = 6.5;
  const tickLabels = Array.from({ length: TICKS + 1 }, (_, i) =>
    safe(shortEur((max * i) / TICKS)));
  const axisLabelW = Math.max(
    ...tickLabels.map((t) => ctx.font.widthOfTextAtSize(t, labelSize)),
  ) + 6;

  const chartX = MARGIN_X + axisLabelW;
  const chartW = CONTENT_W - axisLabelW;
  const cellW = chartW / trend.length;
  const barW = Math.max(6, cellW * 0.35);

  for (let i = 0; i <= TICKS; i++) {
    const ty = yBase + (i / TICKS) * chartH;
    ctx.page.drawLine({
      start: { x: chartX, y: ty }, end: { x: chartX + chartW, y: ty },
      thickness: i === 0 ? 0.6 : 0.35, color: i === 0 ? MUTED : TRACK,
    });
    const label = tickLabels[i];
    const lw = ctx.font.widthOfTextAtSize(label, labelSize);
    ctx.page.drawText(label, {
      x: chartX - lw - 4, y: ty - labelSize / 2 + 1, size: labelSize, font: ctx.font, color: MUTED,
    });
  }
  ctx.page.drawLine({
    start: { x: chartX, y: yTop }, end: { x: chartX, y: yBase },
    thickness: 0.5, color: MUTED,
  });

  for (let i = 0; i < trend.length; i++) {
    const t = trend[i];
    const cx = chartX + i * cellW + cellW * 0.15;
    const hRev = max > 0 ? (t.revenue_net / max) * chartH : 0;
    const hExp = max > 0 ? (t.expense_net / max) * chartH : 0;
    ctx.page.drawRectangle({ x: cx, y: yBase, width: barW, height: hRev, color: GOLD });
    ctx.page.drawRectangle({ x: cx + barW + 2, y: yBase, width: barW, height: hExp, color: INK });
    ctx.page.drawText(safe((t.month || "").substring(5)), {
      x: cx, y: yBase - 12, size: 7, font: ctx.font, color: MUTED,
    });
  }
  const lx = MARGIN_X;
  const ly = yBase - 30;
  ctx.page.drawRectangle({ x: lx, y: ly, width: 10, height: 8, color: GOLD });
  ctx.page.drawText("Umsatz netto", { x: lx + 14, y: ly, size: 8, font: ctx.font, color: INK });
  ctx.page.drawRectangle({ x: lx + 90, y: ly, width: 10, height: 8, color: INK });
  ctx.page.drawText("Aufwand netto", { x: lx + 104, y: ly, size: 8, font: ctx.font, color: INK });
  ctx.y = yBase - 46;
}

// ── Gruppen-Balken: Aktuell / Vormonat / Vorjahr ────────────────────────
function comparisonChart(
  ctx: Ctx,
  groups: Array<{ label: string; revenue: number; result: number }>,
) {
  ensureSpace(ctx, 175);
  const chartH = 110;
  const yBase = ctx.y - chartH;
  const max = groups.reduce((a, g) => Math.max(a, Math.abs(g.revenue), Math.abs(g.result)), 0);
  const cellW = CONTENT_W / groups.length;
  const barW = Math.min(46, cellW * 0.28);
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: yBase }, end: { x: MARGIN_X + CONTENT_W, y: yBase },
    thickness: 0.5, color: MUTED,
  });
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    const gx = MARGIN_X + i * cellW + cellW / 2;
    const hRev = max > 0 ? (Math.max(g.revenue, 0) / max) * chartH : 0;
    const hRes = max > 0 ? (Math.max(g.result, 0) / max) * chartH : 0;
    ctx.page.drawRectangle({ x: gx - barW - 3, y: yBase, width: barW, height: hRev, color: GOLD });
    ctx.page.drawRectangle({ x: gx + 3, y: yBase, width: barW, height: hRes, color: OK });
    ctx.page.drawText(safe(eur(g.revenue)), {
      x: gx - barW - 3, y: yBase + hRev + 4, size: 7, font: ctx.bold, color: INK,
    });
    const lw = ctx.bold.widthOfTextAtSize(safe(g.label), 9);
    ctx.page.drawText(safe(g.label), {
      x: gx - lw / 2, y: yBase - 14, size: 9, font: ctx.bold, color: INK,
    });
  }
  const lx = MARGIN_X;
  const ly = yBase - 32;
  ctx.page.drawRectangle({ x: lx, y: ly, width: 10, height: 8, color: GOLD });
  ctx.page.drawText("Umsatz netto", { x: lx + 14, y: ly, size: 8, font: ctx.font, color: INK });
  ctx.page.drawRectangle({ x: lx + 90, y: ly, width: 10, height: 8, color: OK });
  ctx.page.drawText("Ergebnis netto", { x: lx + 104, y: ly, size: 8, font: ctx.font, color: INK });
  ctx.y = yBase - 48;
}

// ── Unterschriftenblock der Gesellschafter (letzte Seite) ───────────────
function signatureBlock(
  ctx: Ctx,
  sigs: Array<{ full_name?: string; role_label?: string }>,
) {
  const needed = 92;
  if (ctx.y - needed < FOOT_LIMIT) newPage(ctx);
  ctx.y -= 14;
  ctx.page.drawText("Freigabe / Unterschriften der Gesellschafter:", {
    x: MARGIN_X, y: ctx.y, size: 10, font: ctx.bold, color: INK,
  });
  ctx.y -= 46;
  const today = new Date().toISOString().substring(0, 10);
  const slots = sigs.length > 0
    ? sigs
    : [
        { full_name: "Pia Blume", role_label: "Gesellschafterin" },
        { full_name: "Philipp Blume", role_label: "Gesellschafter" },
      ];
  const slotW = 250;
  let sx = MARGIN_X;
  for (const s of slots) {
    ctx.page.drawLine({
      start: { x: sx, y: ctx.y }, end: { x: sx + slotW - 40, y: ctx.y },
      thickness: 0.6, color: INK,
    });
    ctx.page.drawText(safe(String(s.full_name ?? "")), {
      x: sx, y: ctx.y - 13, size: 9, font: ctx.bold, color: INK,
    });
    ctx.page.drawText(safe(`${String(s.role_label ?? "Gesellschafter:in")} - Datum: ${today}`), {
      x: sx, y: ctx.y - 25, size: 7.5, font: ctx.font, color: MUTED,
    });
    sx += slotW;
  }
  ctx.y -= 40;
}

// ── HTTP-Handler ────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey     = Deno.env.get("SUPABASE_ANON_KEY")!;
    const caller = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: userData, error: userErr } = await caller.auth.getUser();
    if (userErr || !userData.user) return jsonResponse({ error: "Unauthorized" }, 401);

    const { data: canExport } = await caller.rpc("auth_has_permission",
      { perm: "finance.export" });
    if (canExport !== true) return jsonResponse({ error: "Forbidden" }, 403);

    let from = "", to = "";
    try {
      const body = await req.json();
      from = String(body.from);
      to   = String(body.to);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) {
        throw new Error("invalid");
      }
    } catch {
      return jsonResponse({ error: "from/to (YYYY-MM-DD) erforderlich" }, 400);
    }

    const { data: kpisData, error: kpErr } =
      await caller.rpc("finance_kpis", { p_from: from, p_to: to });
    if (kpErr || !kpisData) {
      return jsonResponse({ error: kpErr?.message ?? "Keine Daten" }, 400);
    }
    // deno-lint-ignore no-explicit-any
    const k = kpisData as Record<string, any>;
    const cur  = k.current       ?? {};
    const py   = k.prior_year    ?? {};
    const pp   = k.prior_period  ?? {};
    const der  = k.derived       ?? {};
    const cust = k.customer      ?? {};
    // deno-lint-ignore no-explicit-any
    const trend = (k.trend as Array<any>) ?? [];
    // deno-lint-ignore no-explicit-any
    const machines = (k.machines as Array<any>) ?? [];
    // deno-lint-ignore no-explicit-any
    const products = (k.top_products as Array<any>) ?? [];
    const periodDays = Number(k.period?.days ?? 1) || 1;

    // Gesellschafter-Signaturen (Platzhalter-Zeilen, falls leer)
    const { data: sigs } = await caller
      .from("partner_signatures")
      .select("full_name, role_label")
      .order("sort_order", { ascending: true });

    const pdf = await PDFDocument.create();
    const font   = await pdf.embedFont(StandardFonts.Helvetica);
    const bold   = await pdf.embedFont(StandardFonts.HelveticaBold);
    const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);

    const ctx: Ctx = {
      pdf, page: pdf.addPage([PAGE_W, PAGE_H]),
      y: PAGE_H - 100, font, bold, italic,
    };
    drawHeader(ctx);

    // ── Seite 1: Rentabilität + Zielwerte ───────────────────────────
    h1(ctx, "Finanzauswertung");
    p(ctx, `Zeitraum: ${dateStr(from)} bis ${dateStr(to)} (${periodDays} Tage)`, { size: 11, bold: true });
    p(ctx, `Erstellt am ${new Date().toISOString().substring(0, 10)}`, { size: 9, color: MUTED });
    ctx.y -= 4;

    h2(ctx, "Rentabilität");
    const revenue = Number(cur.revenue_net ?? 0);
    const grossMargin = Number(der.gross_margin_pct ?? 0);
    const netMargin = Number(der.net_margin_pct ?? 0);
    const wareneinsatz = 100 - grossMargin;
    const revenuePerDay = revenue / periodDays;
    const salesPerDay = Number(cust.purchases_count ?? 0) / periodDays;
    const avgBasket = Number(cust.avg_basket ?? 0);

    kpiGrid(ctx, [
      { label: "Umsatz netto", value: eur(revenue),
        deltaMom: der.revenue_growth_mom_pct, deltaYoy: der.revenue_growth_yoy_pct },
      { label: "Ergebnis netto", value: eur(cur.result_net),
        deltaMom: der.result_growth_mom_pct,  deltaYoy: der.result_growth_yoy_pct },
      { label: "Umsatzrendite", value: pct(netMargin), target: "25 - 35 %" },
      { label: "Rohertragsmarge", value: pct(grossMargin), target: "50 - 70 %" },
      { label: "Wareneinsatzquote", value: pct(wareneinsatz), target: "30 - 40 %" },
      { label: "Op. Cashflow", value: eur(der.cashflow_operating) },
    ]);

    ctx.y -= 4;
    h2(ctx, "Zielwerte (Benchmarks Automaten-Business)");
    p(ctx, "Rot gestrichelt = Zielkorridor, rote Linie = Einzel-Zielwert, goldene Marke = Ist-Wert.",
      { size: 8, color: MUTED });
    ctx.y -= 2;
    targetRow(ctx, "Ø Umsatz / Tag (je Automat)", eur(revenuePerDay), revenuePerDay, 15, 50, 80, "Ziel 15 - 50 EUR");
    targetRow(ctx, "Wareneinsatzquote", pct(wareneinsatz), wareneinsatz, 30, 40, 100, "Ziel 30 - 40 %");
    targetRow(ctx, "Rohertragsmarge", pct(grossMargin), grossMargin, 50, 70, 100, "Ziel 50 - 70 %");
    targetRow(ctx, "Umsatzrendite", pct(netMargin), netMargin, 25, 35, 100, "Ziel 25 - 35 %");
    targetRow(ctx, "Ø Warenkorb (App)", eur(avgBasket), avgBasket, 1, 3, 6, "Ziel 1 - 3 EUR");
    targetRow(ctx, "Ø Verkäufe / Tag", salesPerDay.toFixed(1), salesPerDay, 10, 50, 80, "Ziel 10 - 50");
    targetRow(ctx, "ROI (nach Bilanz-Sync)", "—", null, 33, null, 100, "Ziel 33 %");
    targetRow(ctx, "Amortisation (Monate)", "—", null, 12, 24, 36, "Ziel 12 - 24");
    targetRow(ctx, "Schwundquote", "—", null, null, 1, 5, "Ziel < 1 %");
    targetRow(ctx, "Lagerdauer (Tage)", "—", null, null, 7, 21, "Ziel < 7");

    // ── Seite 2: Vergleich + Trend + Konten ─────────────────────────
    newPage(ctx);
    h1(ctx, "Vergleich & Cashflow-Entwicklung");
    h2(ctx, "Aktuell / Vormonat / Vorjahr");
    comparisonChart(ctx, [
      { label: "Aktuell",  revenue: Number(cur.revenue_net ?? 0), result: Number(cur.result_net ?? 0) },
      { label: "Vormonat", revenue: Number(pp.revenue_net ?? 0),  result: Number(pp.result_net ?? 0) },
      { label: "Vorjahr",  revenue: Number(py.revenue_net ?? 0),  result: Number(py.result_net ?? 0) },
    ]);

    ctx.y -= 4;
    h2(ctx, "Cashflow-Entwicklung (letzte 12 Monate)");
    trendChart(ctx, trend);

    ctx.y -= 4;
    h2(ctx, "Konten (SKR 03)");
    // deno-lint-ignore no-explicit-any
    const accounts = (cur.accounts as Array<any>) ?? [];
    if (accounts.length === 0) {
      p(ctx, "Für den Zeitraum sind keine Konten-Zeilen aggregiert.", { color: MUTED });
    } else {
      table(
        ctx,
        ["Konto", "Bezeichnung", "Netto", "Steuer", "Brutto"],
        [MARGIN_X + 4, MARGIN_X + 64, MARGIN_X + 275, MARGIN_X + 360, MARGIN_X + 440],
        accounts.map((a) => [
          String(a.code ?? ""),
          String(a.name ?? "").substring(0, 40),
          eur(a.net), eur(a.tax), eur(a.gross),
        ]),
        { alignRightCols: [2, 3, 4] },
      );
    }

    // ── Seite 3: Automaten-Business ─────────────────────────────────
    newPage(ctx);
    h1(ctx, "Automaten-Business");
    h2(ctx, "Umsatz je Automat");
    if (machines.length === 0) {
      p(ctx, "Im Zeitraum wurden keine Umsätze je Automat erfasst.", { color: MUTED });
    } else {
      // deno-lint-ignore no-explicit-any
      barList(ctx, machines.map((m: any) => ({
        label: `${m.label ?? "unbekannt"}${m.code ? ` (${m.code})` : ""}`
             + ` - ${m.purchases_count ?? 0} Verkäufe`
             + `, Ø ${eur(m.avg_basket)}`,
        value: Number(m.gross ?? 0),
        text: eur(m.gross),
      })));
    }

    ctx.y -= 4;
    h2(ctx, "App-Kunden im Zeitraum");
    kv(ctx, "Aktive Kunden",       String(cust.active_customers ?? 0));
    kv(ctx, "Kaufanzahl",          String(cust.purchases_count  ?? 0));
    kv(ctx, "Umsatz (App brutto)", eur(cust.app_gross));
    kv(ctx, "Ø-Warenkorb",         eur(cust.avg_basket));

    if (products.length > 0) {
      ctx.y -= 4;
      h2(ctx, "Top-Produkte nach Umsatz");
      table(
        ctx,
        ["Produkt", "Menge", "Umsatz brutto"],
        [MARGIN_X + 4, MARGIN_X + 330, MARGIN_X + 420],
        // deno-lint-ignore no-explicit-any
        products.map((tp: any) => [
          String(tp.name ?? "unbekannt").substring(0, 52),
          `${tp.quantity ?? 0} Stück`,
          eur(tp.gross),
        ]),
        { alignRightCols: [1, 2] },
      );
    }

    // Unterschriften der Gesellschafter ans Ende
    signatureBlock(ctx, (sigs ?? []) as Array<{ full_name?: string; role_label?: string }>);

    // ── Footer auf jeder Seite ──────────────────────────────────────
    const pages = pdf.getPages();
    for (let i = 0; i < pages.length; i++) {
      const pg = pages[i];
      pg.drawLine({
        start: { x: MARGIN_X, y: 46 }, end: { x: PAGE_W - MARGIN_X, y: 46 },
        thickness: 0.4, color: MUTED,
      });
      pg.drawText(
        safe(`${ISSUER.name} · ${ISSUER.street}, ${ISSUER.cityLine} · St-Nr. ${ISSUER.taxNumber} · USt-IdNr. ${ISSUER.vatId}`),
        { x: MARGIN_X, y: 34, size: 6.5, font, color: MUTED },
      );
      pg.drawText(
        safe("Datenquelle: sevDesk-Buchungen + App-Käufe (Bördesnack24). Vor externer/steuerlicher Nutzung gegen sevDesk gegenprüfen."),
        { x: MARGIN_X, y: 24, size: 6.5, font: italic, color: MUTED },
      );
      pg.drawText(`Seite ${i + 1} / ${pages.length}`, {
        x: PAGE_W - MARGIN_X - 45, y: 34, size: 8, font, color: MUTED,
      });
    }

    const bytes = await pdf.save();
    return jsonResponse({
      filename: `finanzauswertung_${from}_${to}.pdf`,
      mime: "application/pdf",
      base64: encodeBase64(bytes),
    });
  } catch (e) {
    const msg = e instanceof Error
      ? (e.message + (e.stack ? ` | ${e.stack.substring(0, 400)}` : ""))
      : String(e);
    return jsonResponse({ error: msg }, 500);
  }
});
