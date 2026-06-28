// ============================================================================
// Edge Function: finance-export-pdf
// ----------------------------------------------------------------------------
// Erzeugt eine PDF-Auswertung des Finanzdashboards für einen Zeitraum.
// - Aufrufer muss 'finance.export' besitzen.
// - Kennzahlen kommen aus der RPC finance_summary (prüft zusätzlich finance.view).
// - Reines serverseitiges Rendering via pdf-lib (kein Headless-Browser).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts, rgb } from "https://esm.sh/pdf-lib@1.17.1";
import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

const eur = (n: unknown) =>
  `${Number(n ?? 0).toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} EUR`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });

  const { data: userData, error: userErr } = await caller.auth.getUser();
  if (userErr || !userData.user) return jsonResponse({ error: "Unauthorized" }, 401);

  const { data: canExport } = await caller.rpc("auth_has_permission", {
    perm: "finance.export",
  });
  if (canExport !== true) return jsonResponse({ error: "Forbidden" }, 403);

  let from: string, to: string;
  try {
    const body = await req.json();
    from = String(body.from);
    to = String(body.to);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) {
      throw new Error("invalid");
    }
  } catch {
    return jsonResponse({ error: "from/to (YYYY-MM-DD) erforderlich" }, 400);
  }

  // Kennzahlen serverseitig holen (prüft finance.view erneut).
  const { data: summary, error: sumErr } = await caller.rpc("finance_summary", {
    p_from: from,
    p_to: to,
  });
  if (sumErr || !summary) {
    return jsonResponse({ error: sumErr?.message ?? "Keine Daten" }, 400);
  }
  const s = summary as Record<string, unknown>;

  // PDF aufbauen ------------------------------------------------------------
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]); // A4 hochkant
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const gold = rgb(0.99, 0.76, 0.01);
  const ink = rgb(0.08, 0.07, 0.05);
  let y = 800;

  const line = (text: string, opts?: { size?: number; bold?: boolean; color?: typeof ink }) => {
    page.drawText(text, {
      x: 50,
      y,
      size: opts?.size ?? 11,
      font: opts?.bold ? bold : font,
      color: opts?.color ?? ink,
    });
    y -= (opts?.size ?? 11) + 8;
  };
  const kv = (label: string, value: string, isBold = false) => {
    page.drawText(label, { x: 50, y, size: 11, font: isBold ? bold : font, color: ink });
    page.drawText(value, { x: 360, y, size: 11, font: isBold ? bold : font, color: ink });
    y -= 19;
  };

  line("Bordesnack24 - Finanzauswertung", { size: 18, bold: true, color: gold });
  line(`Zeitraum: ${from} bis ${to}`, { size: 11 });
  line(`Erstellt am: ${new Date().toISOString().substring(0, 10)}`, { size: 9 });
  y -= 8;

  line("Kennzahlen", { size: 13, bold: true });
  kv("Umsatz netto (7 %)", eur(s.revenue_net_7));
  kv("Umsatz netto (19 %)", eur(s.revenue_net_19));
  kv("Umsatz netto gesamt", eur(s.revenue_net), true);
  kv("Aufwand netto gesamt", eur(s.expense_net));
  kv("Ergebnis (netto)", eur(s.result_net), true);
  kv("Vereinnahmte USt", eur(s.vat_collected));
  kv("Gezahlte Vorsteuer", eur(s.vat_paid));
  y -= 10;

  line("Konten (SKR 03)", { size: 13, bold: true });
  kv("Konto / Bezeichnung", "Netto", true);
  const accounts = (s.accounts as Array<Record<string, unknown>>) ?? [];
  for (const a of accounts) {
    if (y < 60) break; // einfache Seitenbegrenzung
    kv(`${a.code}  ${a.name}`, eur(a.net));
  }

  page.drawText(
    "Hinweis: Kennzahlen aus sevDesk. Vor oeffentlicher/steuerlicher Nutzung gegen sevDesk pruefen.",
    { x: 50, y: 40, size: 7, font, color: ink },
  );

  const bytes = await pdf.save();
  // Base64-JSON für plattformübergreifenden Transport (functions.invoke).
  return jsonResponse({
    filename: `finanzauswertung_${from}_${to}.pdf`,
    mime: "application/pdf",
    base64: encodeBase64(bytes),
  });
});
