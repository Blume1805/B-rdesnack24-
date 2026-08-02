// ============================================================================
// Edge Function: subscription-cancel
// ----------------------------------------------------------------------------
// Nimmt Kündigungserklärungen für Abo-Verträge entgegen — § 312k BGB
// verlangt, dass der Kündigungsbutton OHNE Login nutzbar ist, deshalb ist
// diese Function öffentlich (verify_jwt=false). Ist der Aufrufer dennoch
// angemeldet (Authorization-Header vorhanden), wird die Kündigung seinem
// Kundenkonto zugeordnet.
//
// § 312k Abs. 2 S. 3 BGB: Der Zugang der Kündigung wird sofort elektronisch
// in Textform bestätigt (E-Mail mit Datum + Uhrzeit). Ohne RESEND_API_KEY
// wird der Versand nur geloggt (Dev) — die App zeigt die Bestätigung mit
// Zeitstempel zusätzlich direkt an.
//
// Missbrauchsschutz: max. 3 Kündigungen pro E-Mail-Adresse pro Stunde.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import { sendMail } from "../_shared/email/send.ts";
import { subscriptionCancelConfirmation } from "../_shared/email/templates/subscription_cancel.ts";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey     = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey  = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(supabaseUrl, serviceKey);

    let email = "", customerNumber = "", kind = "ordentlich", reason = "";
    try {
      const body = await req.json();
      email = String(body.email ?? "").trim().toLowerCase();
      customerNumber = String(body.customer_number ?? "").trim();
      kind = String(body.kind ?? "ordentlich");
      reason = String(body.reason ?? "").trim();
    } catch {
      return jsonResponse({ error: "Ungültige Anfrage" }, 400);
    }
    if (!EMAIL_RE.test(email)) {
      return jsonResponse({ error: "Bitte eine gültige E-Mail-Adresse angeben" }, 400);
    }
    if (!["ordentlich", "ausserordentlich"].includes(kind)) {
      return jsonResponse({ error: "Ungültige Kündigungsart" }, 400);
    }
    if (kind === "ausserordentlich" && reason.length < 3) {
      return jsonResponse(
        { error: "Bei außerordentlicher Kündigung bitte den Grund angeben" }, 400);
    }

    // Rate-Limit: max. 3 Erklärungen je E-Mail und Stunde.
    const { count } = await admin
      .from("cancellation_requests")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("requested_at", new Date(Date.now() - 3600_000).toISOString());
    if ((count ?? 0) >= 3) {
      return jsonResponse(
        { error: "Zu viele Anfragen — bitte später erneut versuchen." }, 429);
    }

    // Falls angemeldet: Kundenkonto zuordnen (optional, kein Zwang).
    let customerId: string | null = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const caller = createClient(supabaseUrl, anonKey, {
        global: { headers: { Authorization: authHeader } },
      });
      const { data: userData } = await caller.auth.getUser();
      customerId = userData?.user?.id ?? null;
    }

    const cancelAt = "zum nächstmöglichen Zeitpunkt";
    const { data: row, error: insErr } = await admin
      .from("cancellation_requests")
      .insert({
        email,
        customer_number: customerNumber || null,
        customer_id: customerId,
        kind,
        reason: reason || null,
        cancel_at: cancelAt,
      })
      .select("id, requested_at")
      .single();
    if (insErr || !row) {
      return jsonResponse({ error: insErr?.message ?? "Speichern fehlgeschlagen" }, 500);
    }

    const receivedAt = new Date(row.requested_at as string).toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

    // Zugangsbestätigung in Textform (§ 312k Abs. 2 S. 3 BGB).
    const mail = subscriptionCancelConfirmation({
      email,
      kind,
      cancelAt,
      receivedAt,
    });
    const emailStatus = await sendMail({
      to: email,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
      tag: "subscription-cancel",
    });

    return jsonResponse({
      ok: true,
      received_at: receivedAt,
      cancel_at: cancelAt,
      email_to: email,
      email_status: emailStatus,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return jsonResponse({ error: msg }, 500);
  }
});
