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

const FROM = Deno.env.get("EMAIL_FROM") ?? "Bördesnack24 <noreply@boerdesnack24.de>";
const RESEND_KEY = Deno.env.get("RESEND_API_KEY");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function confirmationHtml(opts: {
  email: string;
  kind: string;
  cancelAt: string;
  receivedAt: string;
}): string {
  return `<!doctype html>
<html lang="de"><body style="margin:0;padding:0;background:#F9F5EC;font-family:Helvetica,Arial,sans-serif;color:#14110E;">
  <div style="max-width:560px;margin:0 auto;padding:24px 16px;">
    <div style="background:#14110E;border-radius:12px 12px 0 0;padding:18px 24px;">
      <span style="color:#FDC102;font-size:18px;font-weight:800;letter-spacing:1px;">B&Ouml;RDESNACK24</span>
    </div>
    <div style="background:#FFFFFF;border:1px solid #E8E2D6;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
      <h1 style="font-size:18px;margin:0 0 12px;">Best&auml;tigung des Zugangs Ihrer K&uuml;ndigung</h1>
      <p style="font-size:14px;line-height:1.5;margin:0 0 16px;">
        Ihre K&uuml;ndigungserkl&auml;rung ist bei uns eingegangen
        (Best&auml;tigung gem&auml;&szlig; &sect; 312k Abs. 2 BGB).
      </p>
      <div style="background:#F9F5EC;border-left:4px solid #FDC102;padding:12px 16px;margin:0 0 16px;">
        <p style="font-size:13px;margin:0 0 4px;"><strong>Eingegangen am:</strong> ${opts.receivedAt} Uhr</p>
        <p style="font-size:13px;margin:0 0 4px;"><strong>Art:</strong> ${opts.kind === "ausserordentlich" ? "Au&szlig;erordentliche K&uuml;ndigung" : "Ordentliche K&uuml;ndigung"}</p>
        <p style="font-size:13px;margin:0 0 4px;"><strong>Beendigung:</strong> ${opts.cancelAt}</p>
        <p style="font-size:13px;margin:0;"><strong>E-Mail:</strong> ${opts.email}</p>
      </div>
      <p style="font-size:13px;line-height:1.5;margin:0;color:#6F6A5E;">
        Wir pr&uuml;fen Ihre K&uuml;ndigung und melden uns, falls R&uuml;ckfragen bestehen.
        Bitte bewahren Sie diese E-Mail als Nachweis auf.
      </p>
    </div>
    <p style="font-size:11px;color:#9B958A;margin:16px 8px;">
      B&ouml;rdesnack24 GbR (Pia &amp; Philipp Blume) &middot; S&uuml;lldorfer Str. 3A &middot; 39171 S&uuml;lzetal OT Osterweddingen<br>
      Steuernummer: 102/178/01635 &middot; USt-IdNr.: DE 458804058
    </p>
  </div>
</body></html>`;
}

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
    let emailStatus = "sent";
    const subject = "Bördesnack24: Bestätigung des Zugangs Ihrer Kündigung";
    const html = confirmationHtml({ email, kind, cancelAt, receivedAt });
    if (!RESEND_KEY) {
      console.log("[subscription-cancel] RESEND_API_KEY fehlt — Simulation:",
        { from: FROM, to: email, subject });
      emailStatus = "dev";
    } else {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from: FROM, to: [email], subject, html }),
      });
      if (!res.ok) {
        console.error("[subscription-cancel] resend_error", await res.text());
        emailStatus = "failed";
      }
    }

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
