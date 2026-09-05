// ============================================================================
// Edge Function: documents-install-branded-set
// Erzeugt drei gebrandete Dokumente (Belehrung + Briefvorlage + NDA) im
// Bördesnack24-Design und legt sie als Dokumente an. Idempotent.
// - Belehrung und NDA sind PDFs mit sichtbaren [Platzhalter]-Feldern.
// - Briefvorlage ist eine editierbare .docx-Datei (DIN 5008).
// Mit ?refresh=1 oder body {"refresh":true} werden auch bereits vorhandene
// Dokumente aktualisiert (Version 1 wird ersetzt, kein neuer Datensatz).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts } from "https://esm.sh/pdf-lib@1.17.1";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import { istBerechtigt, NUR_GESELLSCHAFTER } from "../_shared/auth.ts";
import { Ctx } from "./helpers.ts";
import { buildBelehrungPdf } from "./belehrung.ts";
import { buildNdaPdf } from "./nda.ts";
import { buildBriefvorlageDocx } from "./brief_docx.ts";

const DOCX_MIME =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

type Job = {
  title: string;
  category: string;
  ext: "pdf" | "docx";
  contentType: string;
  build: (ctx: Ctx | null) => Promise<Uint8Array>;
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
      // Rolle allein genuegt nicht: sie stammt bei Selbstregistrierung aus
      // clientseitigen Metadaten. Siehe _shared/auth.ts.
      if (!await istBerechtigt(admin, NUR_GESELLSCHAFTER, uid)) {
        return jsonResponse({ error: "Nicht autorisiert" }, 403);
      }
    }

    const reqUrl = new URL(req.url);
    const bodyRefresh = await req.clone().json().catch(() => ({} as Record<string, unknown>));
    const refresh = reqUrl.searchParams.get("refresh") === "1"
      || (bodyRefresh as { refresh?: unknown }).refresh === true;

    const results: Array<Record<string, unknown>> = [];

    const jobs: Job[] = [
      {
        title: "Belehrung nach § 43 IfSG (Lebensmittelbereich)",
        category: "ifsg",
        ext: "pdf",
        contentType: "application/pdf",
        build: (ctx) => buildBelehrungPdf(ctx!),
      },
      {
        title: "Bördesnack24 – Briefvorlage (DIN 5008)",
        category: "sonstiges",
        ext: "docx",
        contentType: DOCX_MIME,
        build: () => buildBriefvorlageDocx(),
      },
      {
        title: "Geheimhaltungsvereinbarung (NDA)",
        category: "sonstiges",
        ext: "pdf",
        contentType: "application/pdf",
        build: (ctx) => buildNdaPdf(ctx!),
      },
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

      // Content-Bytes bauen. PDFs teilen sich das pdf-lib-Ctx-Objekt.
      let bytes: Uint8Array;
      if (job.ext === "pdf") {
        const pdf = await PDFDocument.create();
        const font = await pdf.embedFont(StandardFonts.Helvetica);
        const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
        const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
        bytes = await job.build({ pdf, font, bold, italic });
      } else {
        bytes = await job.build(null);
      }

      const slug = job.title.replace(/[^a-z0-9]+/gi, "_").toLowerCase();
      const fp = `branded/${job.category}/${Date.now()}_${slug}.${job.ext}`;
      const up = await admin.storage.from("documents").upload(
        fp, bytes, { contentType: job.contentType, upsert: true });
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
