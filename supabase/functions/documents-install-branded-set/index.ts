// ============================================================================
// Edge Function: documents-install-branded-set
// Erzeugt drei gebrandete PDFs (Belehrung + Briefvorlage + NDA) im
// Bördesnack24-Design und legt sie als Dokumente an. Idempotent.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts } from "https://esm.sh/pdf-lib@1.17.1";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import { Ctx } from "./helpers.ts";
import { buildBelehrungPdf } from "./belehrung.ts";
import { buildBriefvorlagePdf } from "./brief.ts";
import { buildNdaPdf } from "./nda.ts";

const HERO_URL = "https://blume1805.github.io/B-rdesnack24-/brand-hero.jpg";

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

  let heroBytes: Uint8Array | null = null;
  try {
    const res = await fetch(HERO_URL);
    if (res.ok) heroBytes = new Uint8Array(await res.arrayBuffer());
  } catch (_) { /* optional */ }

  const results: Array<Record<string, unknown>> = [];

  const jobs: Array<{ title: string; category: string; build: (ctx: Ctx) => Promise<Uint8Array> }> = [
    { title: "Belehrung nach § 43 IfSG (Lebensmittelbereich)", category: "ifsg", build: (ctx) => buildBelehrungPdf(ctx) },
    { title: "Bördesnack24 – Briefvorlage (DIN 5008)", category: "sonstiges", build: (ctx) => buildBriefvorlagePdf(ctx, heroBytes) },
    { title: "Geheimhaltungsvereinbarung (NDA)", category: "sonstiges", build: (ctx) => buildNdaPdf(ctx) },
  ];

  for (const job of jobs) {
    const { data: existing } = await admin.from("documents")
      .select("id").eq("title", job.title).is("archived_at", null).maybeSingle();
    if (existing) { results.push({ title: job.title, action: "skip (already exists)" }); continue; }
    const pdf = await PDFDocument.create();
    const font   = await pdf.embedFont(StandardFonts.Helvetica);
    const bold   = await pdf.embedFont(StandardFonts.HelveticaBold);
    const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
    const bytes = await job.build({ pdf, font, bold, italic });

    const fp = `branded/${job.category}/${Date.now()}_${job.title.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}.pdf`;
    const up = await admin.storage.from("documents").upload(
      fp, bytes, { contentType: "application/pdf", upsert: true });
    if (up.error) { results.push({ title: job.title, error: up.error.message }); continue; }

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
