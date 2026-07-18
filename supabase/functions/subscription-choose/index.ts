// ============================================================================
// Edge Function: subscription-choose
// ----------------------------------------------------------------------------
// Wählt/wechselt das Abo-Modell des angemeldeten Kunden über die RPC
// choose_subscription_plan (Preise + Lifetime-Sperre liegen serverseitig
// in der DB) und versendet anschließend die Bestätigungs-E-Mail an die
// hinterlegte Adresse des Kontos.
//
// E-Mail-Versand: Resend (RESEND_API_KEY). Ohne Key wird der Versand nur
// geloggt (Dev-Modus), der Planwechsel gilt trotzdem — die App zeigt dem
// Kunden die Bestätigung zusätzlich in der UI.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

const FROM = Deno.env.get("EMAIL_FROM") ?? "Bördesnack24 <noreply@boerdesnack24.de>";
const RESEND_KEY = Deno.env.get("RESEND_API_KEY");

const PLAN_NAMES: Record<string, string> = {
  monthly: "Monats-Abo",
  yearly: "Jahres-Abo",
  lifetime: "Lifetime-Abo",
};

function confirmationHtml(opts: {
  firstName: string;
  planName: string;
  billingLabel: string;
  previousPlanName: string | null;
  lifetime: boolean;
}): string {
  const switched = opts.previousPlanName !== null;
  return `<!doctype html>
<html lang="de"><body style="margin:0;padding:0;background:#F9F5EC;font-family:Helvetica,Arial,sans-serif;color:#14110E;">
  <div style="max-width:560px;margin:0 auto;padding:24px 16px;">
    <div style="background:#14110E;border-radius:12px 12px 0 0;padding:18px 24px;">
      <span style="color:#FDC102;font-size:18px;font-weight:800;letter-spacing:1px;">B&Ouml;RDESNACK24</span>
    </div>
    <div style="background:#FFFFFF;border:1px solid #E8E2D6;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
      <h1 style="font-size:18px;margin:0 0 12px;">${switched ? "Abo-Wechsel bestätigt" : "Abo-Auswahl bestätigt"}</h1>
      <p style="font-size:14px;line-height:1.5;margin:0 0 16px;">
        Hallo ${opts.firstName},<br><br>
        ${switched
          ? `dein Abo wurde vom <strong>${opts.previousPlanName}</strong> auf das <strong>${opts.planName}</strong> umgestellt.`
          : `du hast das <strong>${opts.planName}</strong> gewählt.`}
      </p>
      <div style="background:#F9F5EC;border-left:4px solid #FDC102;padding:12px 16px;margin:0 0 16px;">
        <p style="font-size:14px;margin:0;"><strong>${opts.planName}</strong> &middot; ${opts.billingLabel}</p>
      </div>
      ${opts.lifetime
        ? `<p style="font-size:13px;line-height:1.5;margin:0 0 16px;color:#6F6A5E;">
             Hinweis: Das Lifetime-Abo ist endgültig — ein späterer Wechsel in ein anderes Modell ist nicht mehr möglich.
             Du hast der sofortigen Bereitstellung ausdrücklich zugestimmt und bestätigt, dass dein Widerrufsrecht mit
             vollständiger Bereitstellung erlischt (§ 356 Abs. 5 BGB).</p>`
        : `<p style="font-size:13px;line-height:1.5;margin:0 0 16px;color:#6F6A5E;">
             Du kannst dein Abo-Modell jederzeit im Kundenbereich unter &bdquo;Mein Abo&ldquo; wechseln.</p>`}
      <p style="font-size:13px;line-height:1.5;margin:0;color:#6F6A5E;">
        Die Abrechnung erfolgt über den App Store bzw. Google Play, sobald die App dort veröffentlicht ist.
      </p>
    </div>
    <p style="font-size:11px;color:#9B958A;margin:16px 8px;">
      Bördesnack24 GbR (Pia &amp; Philipp Blume) &middot; Sülldorfer Str. 3A &middot; 39171 Sülzetal OT Osterweddingen<br>
      Steuernummer: 102/178/01635 &middot; USt-IdNr.: DE 458804058
    </p>
  </div>
</body></html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const caller = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: userData, error: userErr } = await caller.auth.getUser();
    if (userErr || !userData.user) return jsonResponse({ error: "Unauthorized" }, 401);
    const email = userData.user.email;
    if (!email) return jsonResponse({ error: "Konto hat keine E-Mail-Adresse" }, 400);

    let plan = "";
    let withdrawalConsent = false;
    try {
      const body = await req.json();
      plan = String(body.plan);
      withdrawalConsent = body.withdrawal_consent === true;
      if (!["monthly", "yearly", "lifetime"].includes(plan)) throw new Error("invalid");
    } catch {
      return jsonResponse({ error: "plan (monthly|yearly|lifetime) erforderlich" }, 400);
    }

    // Planwechsel — sämtliche Geschäftsregeln (Lifetime-Sperre, Doppelwahl,
    // Preise) liegen in der RPC; Fehlermeldungen gehen 1:1 an die App.
    const { data: result, error: rpcErr } =
      await caller.rpc("choose_subscription_plan",
        { p_plan: plan, p_withdrawal_consent: withdrawalConsent });
    if (rpcErr) {
      return jsonResponse({ error: rpcErr.message }, 400);
    }
    const r = result as Record<string, unknown>;

    // Vorname für die Anrede (Fallback: "Kundin/Kunde").
    const { data: profile } = await caller
      .from("profiles").select("first_name").maybeSingle();
    const firstName =
      String((profile as { first_name?: unknown } | null)?.first_name ?? "").trim()
      || "Kundin/Kunde";

    const planName = PLAN_NAMES[plan] ?? plan;
    const prevPlan = r.previous_plan ? String(r.previous_plan) : null;
    const previousPlanName = prevPlan ? (PLAN_NAMES[prevPlan] ?? prevPlan) : null;
    const billingLabel = String(r.billing_label ?? "");

    const subject = previousPlanName
      ? `Bördesnack24: Wechsel zum ${planName} bestätigt`
      : `Bördesnack24: Dein ${planName} ist aktiv`;
    const html = confirmationHtml({
      firstName, planName, billingLabel, previousPlanName,
      lifetime: plan === "lifetime",
    });

    let emailStatus = "sent";
    if (!RESEND_KEY) {
      console.log("[subscription-choose] RESEND_API_KEY fehlt — Simulation:",
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
        // Planwechsel ist bereits gültig — E-Mail-Fehler nicht zum Abbruch
        // machen, aber transparent zurückmelden.
        console.error("[subscription-choose] resend_error", await res.text());
        emailStatus = "failed";
      }
    }

    return jsonResponse({
      ok: true,
      plan: r.plan,
      billing_label: billingLabel,
      previous_plan: prevPlan,
      email_to: email,
      email_status: emailStatus,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return jsonResponse({ error: msg }, 500);
  }
});
