// ============================================================================
// Edge Function: finance-export-pdf
// ----------------------------------------------------------------------------
// Erzeugt eine mehrseitige PDF-Auswertung des Finanzdashboards:
//   Seite 1: Rentabilität — Umsatz, Ergebnis, Margen, Cashflow, Vergleich
//   Seite 2: Cashflow-Trend (12 Monate) + Konten-Aufstellung SKR03
//   Seite 3: Automaten-Umsatz, App-Kunden-Kennzahlen, Top-Produkte
//
// Datenquelle: public.finance_kpis(p_from, p_to) — führt Kennzahlen aus
// GuV + App-Käufen zusammen und liefert Trend + Vorjahres-/Vormonatsvergleich.
// Aufrufer muss 'finance.export' besitzen (RLS-Prüfung serverseitig).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import {
  PDFDocument, PDFFont, PDFPage, StandardFonts, rgb,
} from "https://esm.sh/pdf-lib@1.17.1";
import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

// ── Design-Tokens (in sync mit dem App-Design-System) ───────────────────
const GOLD  = rgb(0.99, 0.76, 0.01);
const INK   = rgb(0.08, 0.07, 0.05);
const MUTED = rgb(0.44, 0.42, 0.35);
const CREAM = rgb(0.98, 0.96, 0.92);
const OK    = rgb(0.25, 0.63, 0.30);
const RED   = rgb(0.78, 0.15, 0.15);

// ── Locale-Helpers ──────────────────────────────────────────────────────
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

const dateStr = (v: unknown) => (v ?? "").toString();

// ── Layout-Konstanten ───────────────────────────────────────────────────
const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN_X = 40;
const CONTENT_W = PAGE_W - 2 * MARGIN_X;

// pdf-lib erlaubt nur WinAnsi in StandardFonts. Wir codieren notfalls
// nicht-latinierbare Zeichen weg (Euro-Zeichen kommt via "EUR"-Suffix).
const asciiSafe = (s: string) =>
  s
    // typografische Zeichen aus DE-Locale
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/ /g, " ")
    .replace(/€/g, "EUR")
    // fallback: alles außerhalb ISO-8859-1 raus (WinAnsi)
    .replace(/[^\x00-\xFF]/g, "?");

// ── kleiner Zeichnungs-Helper (Kontext-Objekt) ──────────────────────────
type Ctx = {
  pdf: PDFDocument;
  page: PDFPage;
  y: number;
  font: PDFFont;
  bold: PDFFont;
  italic: PDFFont;
};

function newPage(ctx: Ctx) {
  ctx.page = ctx.pdf.addPage([PAGE_W, PAGE_H]);
  ctx.y = PAGE_H - 60;
  drawHeader(ctx);
}

function drawHeader(ctx: Ctx) {
  // schmale Gold-Linie oben + Wortmarke
  ctx.page.drawRectangle({
    x: 0, y: PAGE_H - 6, width: PAGE_W, height: 6, color: GOLD,
  });
  ctx.page.drawText(asciiSafe("BÖRDESNACK24"), {
    x: MARGIN_X, y: PAGE_H - 30, size: 10, font: ctx.bold, color: INK,
  });
  ctx.page.drawText("Finanzauswertung", {
    x: PAGE_W - MARGIN_X - 100, y: PAGE_H - 30, size: 10, font: ctx.font, color: MUTED,
  });
  ctx.y = PAGE_H - 60;
}

function drawFooter(ctx: Ctx, i: number, total: number) {
  ctx.page.drawText(
    asciiSafe("Datenquelle: sevDesk-Buchungen + App-Käufe (Bördesnack24). "
      + "Vor externer/steuerlicher Nutzung gegen sevDesk gegenprüfen."),
    { x: MARGIN_X, y: 30, size: 7, font: ctx.italic, color: MUTED },
  );
  ctx.page.drawText(`Seite ${i} / ${total}`, {
    x: PAGE_W - MARGIN_X - 45, y: 30, size: 8, font: ctx.font, color: MUTED,
  });
}

function ensureSpace(ctx: Ctx, needed: number) {
  if (ctx.y - needed < 70) newPage(ctx);
}

function h1(ctx: Ctx, text: string) {
  ensureSpace(ctx, 40);
  ctx.page.drawText(asciiSafe(text), {
    x: MARGIN_X, y: ctx.y, size: 20, font: ctx.bold, color: GOLD,
  });
  ctx.y -= 26;
}

function h2(ctx: Ctx, text: string) {
  ensureSpace(ctx, 30);
  ctx.page.drawText(asciiSafe(text), {
    x: MARGIN_X, y: ctx.y, size: 13, font: ctx.bold, color: INK,
  });
  ctx.y -= 8;
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: ctx.y }, end: { x: MARGIN_X + CONTENT_W, y: ctx.y },
    thickness: 0.7, color: GOLD,
  });
  ctx.y -= 14;
}

function p(ctx: Ctx, text: string, opts?: { size?: number; color?: any; bold?: boolean }) {
  const size = opts?.size ?? 10;
  ensureSpace(ctx, size + 6);
  ctx.page.drawText(asciiSafe(text), {
    x: MARGIN_X, y: ctx.y, size,
    font: opts?.bold ? ctx.bold : ctx.font,
    color: opts?.color ?? INK,
  });
  ctx.y -= size + 5;
}

/** Zwei-Spalten-Zeile: Label links, Wert rechts. */
function kv(ctx: Ctx, label: string, value: string, opts?: { bold?: boolean; color?: any }) {
  ensureSpace(ctx, 18);
  const f = opts?.bold ? ctx.bold : ctx.font;
  ctx.page.drawText(asciiSafe(label),
    { x: MARGIN_X, y: ctx.y, size: 10, font: f, color: opts?.color ?? INK });
  const w = f.widthOfTextAtSize(asciiSafe(value), 10);
  ctx.page.drawText(asciiSafe(value),
    { x: PAGE_W - MARGIN_X - w, y: ctx.y, size: 10, font: f,
      color: opts?.color ?? INK });
  ctx.y -= 16;
}

/**
 * Kachel für eine Kennzahl. Layout:
 *   ┌──────────────────────────┐
 *   │ LABEL                    │
 *   │ Wert (groß)              │
 *   │ Vormonat: Δ · Vorjahr: Δ │
 *   └──────────────────────────┘
 */
function kpiTile(
  ctx: Ctx, x: number, y: number, w: number, h: number,
  label: string, value: string,
  deltaMom?: number | null, deltaYoy?: number | null,
) {
  ctx.page.drawRectangle({
    x, y: y - h, width: w, height: h,
    color: CREAM, borderColor: MUTED, borderWidth: 0.6,
  });
  ctx.page.drawText(asciiSafe(label.toUpperCase()), {
    x: x + 8, y: y - 14, size: 7, font: ctx.bold, color: MUTED,
  });
  ctx.page.drawText(asciiSafe(value), {
    x: x + 8, y: y - 36, size: 16, font: ctx.bold, color: INK,
  });
  // Delta-Chips
  const drawDelta = (labelTxt: string, d: number | null | undefined, dx: number) => {
    if (d === null || d === undefined) {
      ctx.page.drawText(asciiSafe(`${labelTxt} -`), {
        x: x + 8 + dx, y: y - h + 8, size: 7, font: ctx.font, color: MUTED,
      });
      return;
    }
    const positive = d >= 0;
    const color = positive ? OK : RED;
    ctx.page.drawText(
      asciiSafe(`${labelTxt} ${positive ? "+" : ""}${d.toLocaleString("de-DE", {
        minimumFractionDigits: 1, maximumFractionDigits: 1,
      })} %`),
      { x: x + 8 + dx, y: y - h + 8, size: 7, font: ctx.bold, color },
    );
  };
  drawDelta("Vormonat", deltaMom, 0);
  drawDelta("Vorjahr", deltaYoy, 78);
}

/** 6 KPI-Kacheln, 2×3 Raster über die volle Content-Breite. */
function kpiGrid(ctx: Ctx, tiles: Array<{
  label: string; value: string;
  deltaMom?: number | null; deltaYoy?: number | null;
}>) {
  const cols = 3;
  const rows = Math.ceil(tiles.length / cols);
  const gap = 8;
  const w = (CONTENT_W - (cols - 1) * gap) / cols;
  const h = 60;
  ensureSpace(ctx, rows * (h + gap));
  const startY = ctx.y;
  for (let i = 0; i < tiles.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = MARGIN_X + col * (w + gap);
    const y = startY - row * (h + gap);
    const t = tiles[i];
    kpiTile(ctx, x, y, w, h, t.label, t.value, t.deltaMom, t.deltaYoy);
  }
  ctx.y = startY - rows * (h + gap) - 6;
}

/** Horizontale Balken je Zeile — Label + Wert + Bar (max wird auf 1.0 skaliert). */
function barList(ctx: Ctx, rows: Array<{ label: string; value: number; text: string }>) {
  if (rows.length === 0) return;
  const max = rows.reduce((a, r) => Math.max(a, r.value), 0);
  for (const r of rows) {
    ensureSpace(ctx, 26);
    ctx.page.drawText(asciiSafe(r.label), {
      x: MARGIN_X, y: ctx.y, size: 10, font: ctx.bold, color: INK,
    });
    const tw = ctx.bold.widthOfTextAtSize(asciiSafe(r.text), 10);
    ctx.page.drawText(asciiSafe(r.text), {
      x: PAGE_W - MARGIN_X - tw, y: ctx.y, size: 10, font: ctx.bold, color: INK,
    });
    ctx.y -= 12;
    const barW = CONTENT_W;
    ctx.page.drawRectangle({
      x: MARGIN_X, y: ctx.y - 6, width: barW, height: 6,
      color: rgb(0.90, 0.88, 0.83),
    });
    const wFrac = max > 0 ? (r.value / max) : 0;
    ctx.page.drawRectangle({
      x: MARGIN_X, y: ctx.y - 6, width: barW * wFrac, height: 6, color: GOLD,
    });
    ctx.y -= 14;
  }
}

/** Trend-Balken: für jede Monatsspalte Umsatz (Gold) + Aufwand (Ink). */
function trendChart(ctx: Ctx, trend: Array<{ month: string; revenue_net: number; expense_net: number }>) {
  if (trend.length === 0) {
    p(ctx, "Noch keine Trend-Daten für den Zeitraum.", { color: MUTED, size: 10 });
    return;
  }
  ensureSpace(ctx, 180);
  const chartH = 130;
  const yBase = ctx.y - chartH;
  const max = trend.reduce(
    (a, t) => Math.max(a, t.revenue_net, t.expense_net), 0,
  );
  const cellW = CONTENT_W / trend.length;
  const barW = Math.max(6, cellW * 0.35);
  // Y-Achse
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: ctx.y }, end: { x: MARGIN_X, y: yBase },
    thickness: 0.5, color: MUTED,
  });
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: yBase }, end: { x: MARGIN_X + CONTENT_W, y: yBase },
    thickness: 0.5, color: MUTED,
  });
  for (let i = 0; i < trend.length; i++) {
    const t = trend[i];
    const cx = MARGIN_X + i * cellW + cellW * 0.15;
    const hRev = max > 0 ? (t.revenue_net / max) * chartH : 0;
    const hExp = max > 0 ? (t.expense_net / max) * chartH : 0;
    ctx.page.drawRectangle({
      x: cx, y: yBase, width: barW, height: hRev, color: GOLD,
    });
    ctx.page.drawRectangle({
      x: cx + barW + 2, y: yBase, width: barW, height: hExp, color: INK,
    });
    ctx.page.drawText(asciiSafe((t.month || "").substring(5)), {
      x: cx, y: yBase - 12, size: 7, font: ctx.font, color: MUTED,
    });
  }
  // Legende
  const lx = MARGIN_X;
  const ly = yBase - 30;
  ctx.page.drawRectangle({ x: lx, y: ly, width: 10, height: 8, color: GOLD });
  ctx.page.drawText("Umsatz netto", { x: lx + 14, y: ly, size: 8, font: ctx.font, color: INK });
  ctx.page.drawRectangle({ x: lx + 90, y: ly, width: 10, height: 8, color: INK });
  ctx.page.drawText("Aufwand netto", { x: lx + 104, y: ly, size: 8, font: ctx.font, color: INK });
  ctx.y = yBase - 46;
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

    // Volles KPI-Paket holen (Trend + Vergleich + Automaten + Produkte)
    const { data: kpisData, error: kpErr } =
      await caller.rpc("finance_kpis", { p_from: from, p_to: to });
    if (kpErr || !kpisData) {
      return jsonResponse({ error: kpErr?.message ?? "Keine Daten" }, 400);
    }
    const k = kpisData as Record<string, any>;
    const cur  = k.current       ?? {};
    const py   = k.prior_year    ?? {};
    const pp   = k.prior_period  ?? {};
    const der  = k.derived       ?? {};
    const cust = k.customer      ?? {};
    const trend = (k.trend as Array<any>) ?? [];
    const machines = (k.machines as Array<any>) ?? [];
    const products = (k.top_products as Array<any>) ?? [];

    // PDF-Setup
    const pdf = await PDFDocument.create();
    const font   = await pdf.embedFont(StandardFonts.Helvetica);
    const bold   = await pdf.embedFont(StandardFonts.HelveticaBold);
    const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);

    const ctx: Ctx = {
      pdf, page: pdf.addPage([PAGE_W, PAGE_H]),
      y: PAGE_H - 60, font, bold, italic,
    };
    drawHeader(ctx);

    // ── Deckblatt / Rentabilität ────────────────────────────────────
    h1(ctx, "Finanzauswertung");
    p(ctx, `Zeitraum: ${dateStr(from)} bis ${dateStr(to)}`, { size: 11, bold: true });
    p(ctx, `Aussteller: Bördesnack24 GbR - Pia & Philipp Blume`, { size: 9, color: MUTED });
    p(ctx, `Erstellt am ${new Date().toISOString().substring(0, 10)}`, { size: 9, color: MUTED });
    ctx.y -= 6;

    h2(ctx, "Rentabilität");
    kpiGrid(ctx, [
      { label: "Umsatz netto", value: eur(cur.revenue_net),
        deltaMom: der.revenue_growth_mom_pct, deltaYoy: der.revenue_growth_yoy_pct },
      { label: "Ergebnis netto", value: eur(cur.result_net),
        deltaMom: der.result_growth_mom_pct,  deltaYoy: der.result_growth_yoy_pct },
      { label: "Umsatzrendite", value: pct(der.net_margin_pct) },
      { label: "Rohertragsmarge", value: pct(der.gross_margin_pct) },
      { label: "EBITDA-Marge*", value: pct(der.ebitda_margin_pct) },
      { label: "Op. Cashflow", value: eur(der.cashflow_operating) },
    ]);

    ctx.y -= 4;
    h2(ctx, "Vergleich Aktuell / Vormonat / Vorjahr");
    kv(ctx, "Umsatz netto - Aktuell",  eur(cur.revenue_net), { bold: true });
    kv(ctx, "Umsatz netto - Vormonat", eur(pp.revenue_net));
    kv(ctx, "Umsatz netto - Vorjahr",  eur(py.revenue_net));
    ctx.y -= 4;
    kv(ctx, "Ergebnis netto - Aktuell",  eur(cur.result_net), { bold: true });
    kv(ctx, "Ergebnis netto - Vormonat", eur(pp.result_net));
    kv(ctx, "Ergebnis netto - Vorjahr",  eur(py.result_net));

    p(ctx, "* EBITDA wird in Etappe 1 als Betriebsergebnis approximiert. "
      + "Sobald der Bilanz-Sync aktiv ist, kommen Liquidität 1/2/3, EK-Quote, "
      + "ROI und die saubere EBITDA-Berechnung dazu.",
      { size: 8, color: MUTED });

    // ── Seite 2: Trend + Konten ─────────────────────────────────────
    newPage(ctx);
    h1(ctx, "Cashflow-Entwicklung (letzte 12 Monate)");
    trendChart(ctx, trend);

    ctx.y -= 6;
    h2(ctx, "Konten (SKR 03)");
    kv(ctx, "Konto / Bezeichnung", "Netto", { bold: true });
    const accounts = (cur.accounts as Array<any>) ?? [];
    if (accounts.length === 0) {
      p(ctx, "Für den Zeitraum sind keine Konten-Zeilen aggregiert.", { color: MUTED });
    } else {
      for (const a of accounts) {
        kv(ctx, `${a.code}  ${a.name}`, eur(a.net));
      }
    }

    // ── Seite 3: Automaten-Business ─────────────────────────────────
    newPage(ctx);
    h1(ctx, "Automaten-Business");

    h2(ctx, "Umsatz je Automat");
    if (machines.length === 0) {
      p(ctx, "Im Zeitraum wurden keine Umsätze je Automat erfasst.", { color: MUTED });
    } else {
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
    kv(ctx, "Aktive Kunden",      String(cust.active_customers ?? 0));
    kv(ctx, "Kaufanzahl",         String(cust.purchases_count  ?? 0));
    kv(ctx, "Umsatz (App brutto)", eur(cust.app_gross));
    kv(ctx, "Ø-Warenkorb",         eur(cust.avg_basket));

    if (products.length > 0) {
      ctx.y -= 4;
      h2(ctx, "Top-Produkte nach Umsatz");
      barList(ctx, products.map((tp: any) => ({
        label: `${tp.name ?? "unbekannt"} - ${tp.quantity ?? 0} Stück`,
        value: Number(tp.gross ?? 0),
        text: eur(tp.gross),
      })));
    }

    // ── Footer auf jeder Seite ──────────────────────────────────────
    const pages = pdf.getPages();
    for (let i = 0; i < pages.length; i++) {
      const p = pages[i];
      // Manuell Footer zeichnen (drawFooter nutzt ctx.page — hier direkt)
      p.drawText(
        asciiSafe("Datenquelle: sevDesk-Buchungen + App-Käufe (Bördesnack24). "
          + "Vor externer/steuerlicher Nutzung gegen sevDesk gegenprüfen."),
        { x: MARGIN_X, y: 30, size: 7, font: italic, color: MUTED },
      );
      p.drawText(`Seite ${i + 1} / ${pages.length}`, {
        x: PAGE_W - MARGIN_X - 45, y: 30, size: 8, font, color: MUTED,
      });
    }

    const bytes = await pdf.save();
    return jsonResponse({
      filename: `finanzauswertung_${from}_${to}.pdf`,
      mime: "application/pdf",
      base64: encodeBase64(bytes),
    });
  } catch (e) {
    // Sichtbare Fehlermeldung ans Frontend
    const msg = e instanceof Error
      ? (e.message + (e.stack ? ` | ${e.stack.substring(0, 400)}` : ""))
      : String(e);
    return jsonResponse({ error: msg }, 500);
  }
});
