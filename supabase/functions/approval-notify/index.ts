// ============================================================================
// approval-notify: E-Mail-Kanal für Freigabe-Workflow
// ----------------------------------------------------------------------------
// Anforderungen gehen an die offizielle Firmen-Adresse
// (boerdesnack24@gmail.com). Entscheidungen (approved/rejected) gehen an
// den Ersteller der Anfrage plus eine Kopie ins Archiv.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
// Die Adresse der App steht an genau einer Stelle: `APP_PUBLIC_URL`.
// Vorher stand sie hier fest verdrahtet — beim Domainwechsel wäre diese
// Mail die eine gewesen, die man übersieht.
import { mailConfig } from "../_shared/email/config.ts";

const OFFICIAL_EMAIL = "boerdesnack24@gmail.com";

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

  let body: { approval_id: string; phase: "requested" | "approved" | "rejected" };
  try { body = await req.json(); }
  catch { return jsonResponse({ error: "Invalid JSON" }, 400); }

  const { data: approval, error: aErr } = await caller
    .from("document_approvals")
    .select("id, title, document_kind, period_from, period_to, requested_by, status")
    .eq("id", body.approval_id)
    .maybeSingle();
  if (aErr || !approval) return jsonResponse({ error: "Approval nicht gefunden" }, 404);

  let recipients: string[] = [];
  if (body.phase === "requested") {
    recipients = [OFFICIAL_EMAIL];
  } else {
    const { data: prof } = await caller.from("profiles")
      .select("email").eq("id", approval.requested_by).maybeSingle();
    if (prof?.email) recipients = [prof.email as string];
    recipients.push(OFFICIAL_EMAIL);
  }
  if (recipients.length === 0) return jsonResponse({ ok: true, sent: 0 });

  const subject = body.phase === "requested"
    ? `Freigabe angefragt: ${approval.title}`
    : body.phase === "approved"
    ? `Freigabe erteilt: ${approval.title}`
    : `Freigabe abgelehnt: ${approval.title}`;

  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#14110E;max-width:600px;">
      <div style="background:#FDC102;padding:12px 20px;color:#14110E;font-weight:800;font-size:15px;letter-spacing:0.4px;">
        BÖRDESNACK24 · FREIGABE
      </div>
      <div style="padding:20px 24px;">
        <p><b>${esc(approval.title)}</b></p>
        <p>Zeitraum: ${approval.period_from} – ${approval.period_to}</p>
        <p>Status: <b>${approval.status}</b></p>
        ${body.phase === "requested"
          ? `<p>Bitte in der App prüfen und freigeben. Die Anfrage geht an die offizielle Firmen-Adresse und wird von beiden Gesellschaftern in der App eingesehen.</p>`
          : body.phase === "approved"
          ? `<p>Beide Gesellschafter haben signiert. Das finale, signierte PDF liegt im Archiv.</p>`
          : `<p>Ein Gesellschafter hat abgelehnt. Kommentar in der App einsehen.</p>`}
        <p style="margin-top:16px">
          <a href="${mailConfig.links.app}"
             style="background:#FDC102;color:#14110E;text-decoration:none;
                    padding:10px 16px;border-radius:999px;font-weight:800;">
            In App öffnen
          </a>
        </p>
        <p style="color:#6f6a5b;font-size:11px;margin-top:20px">
          Bördesnack24 GbR · Sülldorfer Str. 3A · 39171 Sülzetal<br>
          Approval-ID: ${approval.id}
        </p>
      </div>
    </div>
  `;

  const res = await fetch(`${supabaseUrl}/functions/v1/email-send`, {
    method: "POST",
    headers: {
      "Authorization": authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to: recipients, subject, html }),
  });
  const payload = await res.json();
  return jsonResponse({ ok: res.ok, recipients, payload });
});
