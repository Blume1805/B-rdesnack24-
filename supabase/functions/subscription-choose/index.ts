// ============================================================================
// Edge Function: subscription-choose
// ----------------------------------------------------------------------------
// Wählt/wechselt das Abo-Modell des angemeldeten Kunden über die RPC
// choose_subscription_plan (Preise, Lifetime-Sperre und das auf 20 Konten
// limitierte Founders-Kontingent liegen serverseitig in der DB) und
// versendet anschließend die Bestätigungs-E-Mail an die hinterlegte
// Adresse des Kontos.
//
// E-Mail-Versand: Resend (RESEND_API_KEY). Ohne Key wird der Versand nur
// geloggt (Dev-Modus), der Planwechsel gilt trotzdem — die App zeigt dem
// Kunden die Bestätigung zusätzlich in der UI.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import { sendMail } from "../_shared/email/send.ts";
import { subscriptionChooseConfirmation } from "../_shared/email/templates/subscription_choose.ts";

const PLAN_NAMES: Record<string, string> = {
  monthly: "Monats-Abo",
  yearly: "Jahres-Abo",
  lifetime: "Lifetime-Abo (Founders Edition)",
};

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
    let ageConsent = false;
    try {
      const body = await req.json();
      plan = String(body.plan);
      withdrawalConsent = body.withdrawal_consent === true;
      ageConsent = body.age_consent === true;
      if (!["monthly", "yearly", "lifetime"].includes(plan)) throw new Error("invalid");
    } catch {
      return jsonResponse({ error: "plan (monthly|yearly|lifetime) erforderlich" }, 400);
    }

    // §§ 106 ff. BGB: ohne bestätigte Volljährigkeit bzw. Zustimmung der
    // gesetzlichen Vertreter kein Vertragsschluss (Prüfung zusätzlich in
    // der RPC, dort mit revisionssicherer Speicherung an der Historie).
    if (!ageConsent) {
      return jsonResponse({
        error: "Bitte bestätige, dass du volljährig bist oder mit " +
               "Zustimmung deiner gesetzlichen Vertreter handelst.",
      }, 400);
    }

    // Planwechsel — sämtliche Geschäftsregeln (Lifetime-Sperre, Founders-
    // Kontingent, Doppelwahl, Preise) liegen in der RPC; Fehlermeldungen
    // gehen 1:1 an die App.
    const { data: result, error: rpcErr } =
      await caller.rpc("choose_subscription_plan",
        { p_plan: plan, p_withdrawal_consent: withdrawalConsent,
          p_age_consent: ageConsent });
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

    const mail = subscriptionChooseConfirmation({
      firstName, planName, billingLabel, previousPlanName,
      lifetime: plan === "lifetime",
    });

    // Planwechsel ist bereits gültig — sendMail wirft deshalb nicht, ein
    // Mailproblem wird nur transparent zurückgemeldet.
    const emailStatus = await sendMail({
      to: email,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
      tag: "subscription-choose",
    });

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
