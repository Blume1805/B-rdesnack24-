// ============================================================================
// Edge Function: documents-init-templates
// ----------------------------------------------------------------------------
// Legt für jeden Ordner in document_folders eine Blanko-Vorlage an, sofern
// noch keine existiert. Idempotent — mehrfach aufrufbar.
// Die Vorlage ist ein PDF mit Bördesnack24-Briefkopf, Platzhaltern für
// Stammdaten und Unterschriftsfeldern.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts, rgb } from "https://esm.sh/pdf-lib@1.17.1";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

const ISSUER = {
  name: "Bördesnack24 GbR (Pia & Philipp Blume)",
  street: "Sülldorfer Str. 3A",
  cityLine: "39171 Sülzetal OT Osterweddingen",
  taxNumber: "102/178/01635",
  vatId: "DE 458804058",
};

const INK = rgb(0.08, 0.07, 0.05);
const GOLD = rgb(0.99, 0.76, 0.01);
const MUTED = rgb(0.44, 0.42, 0.35);

async function buildBlankPdf(folderLabel: string): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const page = pdf.addPage([595, 842]);

  // Kopf: Aussteller rechts oben
  {
    const hy = 800;
    page.drawText(ISSUER.name, { x: 320, y: hy, size: 9, font: bold, color: INK });
    page.drawText(ISSUER.street, { x: 320, y: hy - 11, size: 8, font, color: MUTED });
    page.drawText(ISSUER.cityLine, { x: 320, y: hy - 22, size: 8, font, color: MUTED });
    page.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 34, size: 8, font, color: MUTED });
    page.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 45, size: 8, font, color: MUTED });
  }

  // Titel + Ordner-Label
  let y = 800 - 70;
  page.drawText("Bördesnack24 – Blanko-Vorlage", { x: 40, y, size: 15, font: bold, color: GOLD });
  y -= 20;
  page.drawText(folderLabel, { x: 40, y, size: 12, font: bold, color: INK });
  y -= 16;
  page.drawText("Diese Vorlage dient als Grundgerüst. Ausfüllen, unterschreiben,",
    { x: 40, y, size: 10, font, color: MUTED });
  y -= 12;
  page.drawText("dann als neue Version desselben Dokuments in der App hochladen.",
    { x: 40, y, size: 10, font, color: MUTED });
  y -= 14;
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 0.8, color: INK });
  y -= 22;

  // Stammdaten-Block: leere Felder
  page.drawText("Stammdaten", { x: 40, y, size: 12, font: bold, color: INK });
  y -= 16;

  const fields: Array<[string, string]> = [
    ["Titel des Dokuments",   ""],
    ["Datum",                 ""],
    ["Vertragsart / Betreff", ""],
    ["Beteiligte Partei 1",   ""],
    ["Anschrift Partei 1",    ""],
    ["Beteiligte Partei 2",   ""],
    ["Anschrift Partei 2",    ""],
    ["Gegenstand / Inhalt",   ""],
    ["Gültig ab",             ""],
    ["Gültig bis",            ""],
    ["Bemerkungen",           ""],
  ];
  for (const [k, _v] of fields) {
    page.drawText(k, { x: 40, y, size: 9, font: bold, color: INK });
    page.drawLine({
      start: { x: 200, y: y - 2 }, end: { x: 555, y: y - 2 },
      thickness: 0.4, color: MUTED,
    });
    y -= 22;
  }
  y -= 8;

  // Unterschriftsblock
  page.drawText("Unterschriften", { x: 40, y, size: 12, font: bold, color: INK });
  y -= 20;
  const slotW = 240;
  const gap = 30;
  for (let col = 0; col < 2; col++) {
    const sx = 40 + col * (slotW + gap);
    page.drawRectangle({
      x: sx, y: y - 90, width: slotW, height: 90,
      borderColor: MUTED, borderWidth: 0.5,
      color: rgb(0.98, 0.96, 0.92),
    });
    page.drawLine({
      start: { x: sx + 10, y: y - 66 },
      end:   { x: sx + slotW - 10, y: y - 66 },
      thickness: 0.5, color: INK,
    });
    page.drawText(col === 0 ? "Partei 1 – Unterschrift" : "Partei 2 – Unterschrift",
      { x: sx + 10, y: y - 80, size: 9, font: bold, color: INK });
    page.drawText("Name in Druckschrift / Datum",
      { x: sx + 10, y: y - 92 + 4, size: 8, font, color: MUTED });
  }
  y -= 110;

  page.drawText(`Vorlagen-Version 1 · Erstellt am ${new Date().toISOString().substring(0,10)}`,
    { x: 40, y: 40, size: 8, font, color: MUTED });

  return await pdf.save();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey     = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey  = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const caller = createClient(supabaseUrl, anonKey,
    { global: { headers: { Authorization: authHeader } } });
  const admin  = createClient(supabaseUrl, serviceKey);

  // Rolle prüfen
  const uid = (await caller.auth.getUser()).data.user?.id;
  if (!uid) return jsonResponse({ error: "Nicht angemeldet" }, 401);
  const { data: prof } = await admin.from("profiles").select("role").eq("id", uid).maybeSingle();
  const role = (prof as { role?: string } | null)?.role;
  if (role !== "system_admin" && role !== "shareholder") {
    return jsonResponse({ error: "Nicht autorisiert" }, 403);
  }

  const { data: folders } = await admin.from("document_folders")
    .select("slug, label").order("sort_order");
  const results: Array<Record<string, unknown>> = [];

  for (const f of (folders ?? [])) {
    const slug = f.slug as string;
    const label = f.label as string;

    // existiert schon eine Blanko-Vorlage in diesem Ordner?
    const { data: existing } = await admin.from("documents")
      .select("id")
      .eq("is_template", true)
      .eq("category", slug)
      .is("archived_at", null)
      .maybeSingle();
    if (existing) {
      results.push({ folder: slug, action: "skip (already exists)" });
      continue;
    }

    // PDF erzeugen und hochladen
    const bytes = await buildBlankPdf(label);
    const now = Date.now();
    const filePath = `templates/${slug}/${now}_blanko.pdf`;
    const up = await admin.storage.from("documents").upload(
      filePath, bytes,
      { contentType: "application/pdf", upsert: true },
    );
    if (up.error) {
      results.push({ folder: slug, error: up.error.message });
      continue;
    }

    // documents-Row + version anlegen
    const { data: doc, error: dErr } = await admin.from("documents")
      .insert({
        title: `Blanko-Vorlage – ${label}`,
        category: slug,
        status: "active",
        is_template: true,
        current_version: 1,
      })
      .select("id").maybeSingle();
    if (dErr || !doc) {
      results.push({ folder: slug, error: dErr?.message ?? "insert failed" });
      continue;
    }
    await admin.from("document_versions").insert({
      document_id: doc.id,
      version: 1,
      file_path: filePath,
      notes: "Initiale Blanko-Vorlage",
    });

    results.push({ folder: slug, action: "created", document_id: doc.id });
  }

  return jsonResponse({ ok: true, results });
});
