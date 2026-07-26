// ============================================================================
// Edge Function: docusign-fetch-signature
// ----------------------------------------------------------------------------
// Holt die hinterlegte Signatur eines DocuSign-Users und legt sie als PNG
// in den privaten Storage-Bucket `partner-signatures` ab.  Anschließend
// wird partner_signatures.image_url gesetzt, damit `document-finalize`
// beim nächsten Approval das echte Bild statt des Platzhalters einbettet.
//
// Aufruf:  POST { signature_id }
//
// Voraussetzungen (als Function-Secrets im Supabase Dashboard):
//   DOCUSIGN_INTEGRATION_KEY  — Integration-Key (Client-ID)
//   DOCUSIGN_USER_ID          — Impersonation-User-ID
//   DOCUSIGN_PRIVATE_KEY      — RSA-Private-Key (PEM, inkl. Header/Footer)
//   DOCUSIGN_BASE_URL         — https://demo.docusign.net oder https://www.docusign.net
//                               (nur Base — Function hängt selbst /restapi/… an)
//   DOCUSIGN_ACCOUNT_ID       — Konto-ID (wird aus partner_signatures gelesen,
//                               dieses Env ist Fallback für Test-Konten)
//
// Wenn Secrets fehlen, gibt die Function eine klare Fehlermeldung zurück
// und der User kann den manuellen Upload-Weg nutzen (Storage-Upload +
// set_partner_signature_image-RPC).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { create as jwtCreate, getNumericDate } from "https://deno.land/x/djwt@v3.0.2/mod.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const admin = createClient(supabaseUrl, serviceKey);

  // Nur Admin/Gesellschafter dürfen Signaturen kapern.
  const { data: profile } = await caller.from("profiles").select("role").maybeSingle();
  if (!profile || !["system_admin", "shareholder"].includes(profile.role)) {
    return jsonResponse({ error: "Nicht autorisiert" }, 403);
  }

  let body: { signature_id: string };
  try { body = await req.json(); }
  catch { return jsonResponse({ error: "Invalid JSON" }, 400); }

  const { data: sig, error: sigErr } = await caller
    .from("partner_signatures")
    .select("id, full_name, docusign_user_id, docusign_account_id, docusign_signature_uri")
    .eq("id", body.signature_id)
    .maybeSingle();
  if (sigErr || !sig) return jsonResponse({ error: "Signatur nicht gefunden" }, 404);

  // Env-Vars prüfen
  const integrationKey = Deno.env.get("DOCUSIGN_INTEGRATION_KEY");
  const impersonatedUser = Deno.env.get("DOCUSIGN_USER_ID");
  const privateKey = Deno.env.get("DOCUSIGN_PRIVATE_KEY");
  const baseUrl = Deno.env.get("DOCUSIGN_BASE_URL");
  const accountId = sig.docusign_account_id ?? Deno.env.get("DOCUSIGN_ACCOUNT_ID");

  if (!integrationKey || !impersonatedUser || !privateKey || !baseUrl || !accountId) {
    return jsonResponse({
      error: "DocuSign nicht konfiguriert",
      hint: "Function-Secrets DOCUSIGN_INTEGRATION_KEY, DOCUSIGN_USER_ID, DOCUSIGN_PRIVATE_KEY, DOCUSIGN_BASE_URL und DOCUSIGN_ACCOUNT_ID setzen. Alternativ Signatur manuell hochladen.",
      missing: {
        DOCUSIGN_INTEGRATION_KEY: !integrationKey,
        DOCUSIGN_USER_ID: !impersonatedUser,
        DOCUSIGN_PRIVATE_KEY: !privateKey,
        DOCUSIGN_BASE_URL: !baseUrl,
        DOCUSIGN_ACCOUNT_ID: !accountId,
      },
    }, 400);
  }

  // 1) JWT-Assertion für DocuSign bauen
  let accessToken: string;
  try {
    const key = await crypto.subtle.importKey(
      "pkcs8",
      pemToDer(privateKey),
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false, ["sign"],
    );
    const audUrl = new URL(baseUrl).hostname === "demo.docusign.net"
      ? "account-d.docusign.com"
      : "account.docusign.com";
    const assertion = await jwtCreate(
      { alg: "RS256", typ: "JWT" },
      {
        iss: integrationKey,
        sub: impersonatedUser,
        aud: audUrl,
        iat: getNumericDate(0),
        exp: getNumericDate(3600),
        scope: "signature impersonation",
      },
      key,
    );
    // 2) Access-Token vom OAuth-Endpoint holen
    const tokenRes = await fetch(`https://${audUrl}/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion,
      }),
    });
    const tokenPayload = await tokenRes.json();
    if (!tokenRes.ok) {
      return jsonResponse({ error: "DocuSign-Token-Fehler", details: tokenPayload }, 401);
    }
    accessToken = tokenPayload.access_token as string;
  } catch (e) {
    return jsonResponse({ error: "JWT/Signatur-Fehler", details: String(e) }, 500);
  }

  // 3) Signatur-Bild vom DocuSign-Konto abrufen
  //    URI-Beispiel: /users/{userId}/signatures/{signatureId}
  const sigUri = sig.docusign_signature_uri;
  if (!sigUri) return jsonResponse({ error: "Kein docusign_signature_uri hinterlegt" }, 400);
  const imgUrl = `${baseUrl}/restapi/v2.1/accounts/${accountId}${sigUri}/signature_image?include_chrome=false`;
  const imgRes = await fetch(imgUrl, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Accept": "image/png",
    },
  });
  if (!imgRes.ok) {
    return jsonResponse({
      error: "DocuSign-Bild-Fehler",
      status: imgRes.status,
      details: await imgRes.text(),
    }, imgRes.status);
  }
  const bytes = new Uint8Array(await imgRes.arrayBuffer());

  // 4) In Storage ablegen
  const storagePath = `${sig.id}.png`;
  const uploadRes = await admin.storage.from("partner-signatures").upload(
    storagePath, bytes,
    { contentType: "image/png", upsert: true },
  );
  if (uploadRes.error) {
    return jsonResponse({ error: uploadRes.error.message }, 500);
  }

  // 5) Signed-URL erzeugen und in partner_signatures.image_url speichern
  const { data: signed } = await admin.storage
    .from("partner-signatures")
    .createSignedUrl(storagePath, 3600 * 24 * 365);
  const publicRef = signed?.signedUrl ?? null;

  await admin.from("partner_signatures").update({
    image_url: publicRef,
    captured_at: new Date().toISOString(),
    captured_via: "docusign",
  }).eq("id", sig.id);

  return jsonResponse({ ok: true, path: storagePath, signed_url: publicRef });
});

// PEM (Base64 mit Header/Footer) → DER (ArrayBuffer) für WebCrypto
function pemToDer(pem: string): ArrayBuffer {
  const stripped = pem
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
  const binary = atob(stripped);
  const buf = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) buf[i] = binary.charCodeAt(i);
  return buf.buffer;
}
