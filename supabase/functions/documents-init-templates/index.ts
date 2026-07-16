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
  const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
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
  page.drawText("Bördesnack24 – Vorlage", { x: 40, y, size: 15, font: bold, color: GOLD });
  y -= 20;
  page.drawText(folderLabel, { x: 40, y, size: 12, font: bold, color: INK });
  y -= 18;
  page.drawText("Felder in eckigen Klammern ausfüllen, danach unterschreiben und als",
    { x: 40, y, size: 9, font: italic, color: MUTED });
  y -= 11;
  page.drawText("neue Version desselben Dokuments in der App hochladen.",
    { x: 40, y, size: 9, font: italic, color: MUTED });
  y -= 12;
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 0.8, color: INK });
  y -= 22;

  // Stammdaten-Block mit Platzhaltern
  page.drawText("Stammdaten", { x: 40, y, size: 12, font: bold, color: INK });
  y -= 18;

  const fields: Array<[string, string]> = [
    ["Titel des Dokuments",   "[Titel]"],
    ["Datum",                 "[TT.MM.JJJJ]"],
    ["Vertragsart / Betreff", "[Vertragsart]"],
    ["Beteiligte Partei 1",   "[Name / Firma]"],
    ["Anschrift Partei 1",    "[Straße Nr., PLZ Ort]"],
    ["Beteiligte Partei 2",   "[Name / Firma]"],
    ["Anschrift Partei 2",    "[Straße Nr., PLZ Ort]"],
    ["Gegenstand / Inhalt",   "[Kurze Beschreibung]"],
    ["Gültig ab",             "[TT.MM.JJJJ]"],
    ["Gültig bis",            "[TT.MM.JJJJ oder \"unbefristet\"]"],
    ["Bemerkungen",           "[Optionale Notizen]"],
  ];
  for (const [k, placeholder] of fields) {
    page.drawText(k, { x: 40, y, size: 9, font: bold, color: INK });
    page.drawText(placeholder, { x: 200, y, size: 9, font, color: MUTED });
    y -= 18;
  }
  y -= 10;

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
    page.drawText(col === 0 ? "Partei 1" : "Partei 2",
      { x: sx + 10, y: y - 16, size: 9, font: bold, color: INK });
    page.drawText("[Ort, Datum]",
      { x: sx + 10, y: y - 34, size: 9, font, color: MUTED });
    page.drawText("[Unterschrift]",
      { x: sx + 10, y: y - 52, size: 9, font, color: MUTED });
    page.drawText("[Name in Druckschrift]",
      { x: sx + 10, y: y - 70, size: 9, font, color: MUTED });
  }
  y -= 110;

  page.drawText(`Vorlage · Bördesnack24 GbR · Version 1 · Erstellt am ${new Date().toISOString().substring(0,10)}`,
    { x: 40, y: 40, size: 8, font: italic, color: MUTED });

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

  // Optional: ?refresh=1 → PDFs auch für bestehende Vorlagen neu erzeugen
  // und in-place ersetzen (gleicher Storage-Pfad → Client sieht sofort neu).
  const url = new URL(req.url);
  const refresh = url.searchParams.get("refresh") === "1"
    || (typeof (await req.clone().json().catch(() => ({}))) === "object"
        && ((await req.clone().json().catch(() => ({} as Record<string, unknown>))) as Record<string, unknown>)["refresh"] === true);

  const { data: folders } = await admin.from("document_folders")
    .select("slug, label").order("sort_order");
  const results: Array<Record<string, unknown>> = [];

  for (const f of (folders ?? [])) {
    const slug = f.slug as string;
    const label = f.label as string;

    // existiert schon eine Vorlage in diesem Ordner?
    const { data: existing } = await admin.from("documents")
      .select("id")
      .eq("is_template", true)
      .eq("category", slug)
      .is("archived_at", null)
      .maybeSingle();

    if (existing && !refresh) {
      results.push({ folder: slug, action: "skip (already exists)" });
      continue;
    }

    // PDF erzeugen und hochladen
    const bytes = await buildBlankPdf(label);
    const now = Date.now();
    const filePath = `templates/${slug}/${now}_vorlage.pdf`;
    const up = await admin.storage.from("documents").upload(
      filePath, bytes,
      { contentType: "application/pdf", upsert: true },
    );
    if (up.error) {
      results.push({ folder: slug, error: up.error.message });
      continue;
    }

    if (existing && refresh) {
      // Neuen Datei-Pfad für Version 1 setzen, Titel refresh, keine neue Version.
      const docId = (existing as { id: string }).id;
      await admin.from("document_versions")
        .update({ file_path: filePath, notes: "Vorlage aktualisiert" })
        .eq("document_id", docId)
        .eq("version", 1);
      await admin.from("documents")
        .update({ title: label, updated_at: new Date().toISOString() })
        .eq("id", docId);
      results.push({ folder: slug, action: "refreshed", document_id: docId });
      continue;
    }

    // documents-Row + version anlegen
    const { data: doc, error: dErr } = await admin.from("documents")
      .insert({
        title: label,
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
      notes: "Initiale Vorlage",
    });

    results.push({ folder: slug, action: "created", document_id: doc.id });
  }

  return jsonResponse({ ok: true, results });
});
