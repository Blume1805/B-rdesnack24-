// ============================================================================
// Edge Function: email-send
// ----------------------------------------------------------------------------
// Generischer E-Mail-Versand über Resend (https://resend.com). Erwartet die
// Umgebungsvariable RESEND_API_KEY. Wenn nicht gesetzt, wird der Versand
// nur ins Log geschrieben (Dev-Modus).
//
// Aufruf durch andere Edge Functions oder RPCs — kein direkter Client-Zugriff
// erlaubt (verify_jwt=true, RLS-Rolle wird zusätzlich geprüft).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

const FROM = Deno.env.get("EMAIL_FROM") ?? "Bördesnack24 <noreply@boerdesnack24.de>";
const RESEND_KEY = Deno.env.get("RESEND_API_KEY");

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

  // Nur Admin/Gesellschafter dürfen ausserhalb von system-Kontext senden
  const { data: profile } = await caller.from("profiles").select("role").maybeSingle();
  if (!profile || !["system_admin", "shareholder"].includes(profile.role)) {
    return jsonResponse({ error: "Nicht autorisiert" }, 403);
  }

  let body: {
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
  };
  try { body = await req.json(); }
  catch { return jsonResponse({ error: "Invalid JSON" }, 400); }

  if (!body.to || !body.subject || !(body.html || body.text)) {
    return jsonResponse({ error: "to/subject/html-or-text sind Pflicht" }, 400);
  }

  const to = Array.isArray(body.to) ? body.to : [body.to];

  if (!RESEND_KEY) {
    console.log("[email-send] RESEND_API_KEY fehlt — Simulation:",
      { from: FROM, to, subject: body.subject });
    return jsonResponse({ ok: true, mode: "dev", to });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to,
      subject: body.subject,
      html: body.html,
      text: body.text,
    }),
  });
  const payload = await res.json();
  if (!res.ok) return jsonResponse({ error: "resend_error", details: payload }, res.status);
  return jsonResponse({ ok: true, id: payload.id });
});
