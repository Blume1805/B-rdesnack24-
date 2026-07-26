// ============================================================================
// Edge Function: send-push  (Firebase Cloud Messaging, HTTP v1)
// ----------------------------------------------------------------------------
// Sendet eine Push-Nachricht an alle Geräte eines Nutzers und protokolliert sie.
// - Aufrufer muss interner Nutzer sein (RPC is_internal).
// - Authentifizierung gegenüber FCM via Service-Account (OAuth2, RS256-JWT).
// - Secrets: FCM_SERVICE_ACCOUNT (vollständiges JSON), SUPABASE_SERVICE_ROLE_KEY.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";

function pemToBinary(pem: string): Uint8Array {
  const body = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");
  const bin = atob(body);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function b64url(input: string | Uint8Array): string {
  const str = typeof input === "string"
    ? input
    : String.fromCharCode(...input);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function getAccessToken(sa: Record<string, string>): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/firebase.messaging",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${claim}`;

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToBinary(sa.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned),
  );
  const jwt = `${unsigned}.${b64url(new Uint8Array(sig))}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error(`OAuth fehlgeschlagen: ${JSON.stringify(json)}`);
  return json.access_token as string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const saRaw = Deno.env.get("FCM_SERVICE_ACCOUNT");
  if (!saRaw) return jsonResponse({ error: "FCM nicht konfiguriert" }, 500);

  // Aufrufer muss interner Nutzer sein.
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: internal } = await caller.rpc("is_internal");
  if (internal !== true) return jsonResponse({ error: "Forbidden" }, 403);

  let userId: string, title: string, body: string, data: Record<string, string>;
  try {
    const payload = await req.json();
    userId = String(payload.user_id);
    title = String(payload.title);
    body = String(payload.body ?? "");
    data = (payload.data ?? {}) as Record<string, string>;
    if (!userId || !title) throw new Error("invalid");
  } catch {
    return jsonResponse({ error: "user_id und title erforderlich" }, 400);
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: tokens } = await admin
    .from("device_tokens")
    .select("token")
    .eq("user_id", userId);

  // Benachrichtigung protokollieren (auch ohne Gerät sinnvoll für In-App-Liste).
  await admin.from("notifications").insert({ user_id: userId, title, body, data });

  if (!tokens || tokens.length === 0) {
    return jsonResponse({ ok: true, delivered: 0, note: "keine Geräte registriert" });
  }

  const sa = JSON.parse(saRaw) as Record<string, string>;
  const accessToken = await getAccessToken(sa);
  const endpoint =
    `https://fcm.googleapis.com/v1/projects/${sa.project_id}/messages:send`;

  let delivered = 0;
  for (const t of tokens) {
    const r = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          token: t.token,
          notification: { title, body },
          data,
        },
      }),
    });
    if (r.ok) delivered++;
  }

  return jsonResponse({ ok: true, delivered });
});
