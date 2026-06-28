// ============================================================================
// Edge Function: invite-user
// ----------------------------------------------------------------------------
// Lädt interne Nutzer (Mitarbeiter/Gesellschafter) per E-Mail ein.
// - Self-Signup ist Kunden vorbehalten; interne Nutzer werden ausschließlich
//   hierüber angelegt.
// - Autorisierung serverseitig: der Aufrufer muss 'users.manage' oder
//   'employees.manage' besitzen (geprüft via RPC auth_has_permission unter der
//   Identität des Aufrufers — RLS-konform).
// - Anlage erfolgt mit Service-Role; neue Gesellschafter werden NICHT sofort
//   aktiv, sondern durchlaufen die Dual-Control (shareholder_approvals).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";

type Role = "system_admin" | "shareholder" | "employee";

interface InvitePayload {
  email: string;
  role: Role;
  full_name?: string;
  /** Optionale ABAC-Einzelberechtigungen (v. a. für Mitarbeiter). */
  permissions?: string[];
}

const ALLOWED_ROLES: Role[] = ["system_admin", "shareholder", "employee"];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return jsonResponse({ error: "Missing Authorization" }, 401);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  // Client unter der Identität des Aufrufers (für RLS-konforme Permission-Prüfung).
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });

  // 1) Aufrufer authentifiziert?
  const { data: userData, error: userErr } = await caller.auth.getUser();
  if (userErr || !userData.user) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  // 2) Berechtigung prüfen (serverseitig).
  const { data: canManage } = await caller.rpc("auth_has_permission", {
    perm: "users.manage",
  });
  const { data: canEmployees } = await caller.rpc("auth_has_permission", {
    perm: "employees.manage",
  });
  if (canManage !== true && canEmployees !== true) {
    return jsonResponse({ error: "Forbidden" }, 403);
  }

  // 3) Eingabe validieren.
  let payload: InvitePayload;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }
  const email = (payload.email ?? "").trim().toLowerCase();
  const role = payload.role;
  if (!email || !email.includes("@")) {
    return jsonResponse({ error: "Invalid email" }, 400);
  }
  if (!ALLOWED_ROLES.includes(role)) {
    return jsonResponse({ error: "Invalid role" }, 400);
  }
  // Nur Gesellschafter/Admin dürfen Gesellschafter/Admins einladen.
  if ((role === "shareholder" || role === "system_admin") && canManage !== true) {
    return jsonResponse({ error: "Only admins may invite this role" }, 403);
  }

  // 4) Service-Role-Client für privilegierte Anlage.
  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // Einladung mit Rollen-Metadaten; Trigger handle_new_user legt das Profil an
  // (interne Rollen => status 'invited').
  const { data: invited, error: inviteErr } = await admin.auth.admin
    .inviteUserByEmail(email, {
      data: {
        role,
        full_name: payload.full_name ?? null,
        invited_by: userData.user.id,
      },
    });
  if (inviteErr || !invited.user) {
    return jsonResponse({ error: inviteErr?.message ?? "Invite failed" }, 400);
  }

  const newUserId = invited.user.id;

  // 5) Optionale ABAC-Berechtigungen setzen (für Mitarbeiter).
  if (payload.permissions && payload.permissions.length > 0) {
    const rows = payload.permissions.map((p) => ({
      user_id: newUserId,
      permission_key: p,
      granted: true,
      granted_by: userData.user.id,
    }));
    await admin.from("user_permissions").upsert(rows);
  }

  // 6) Für Gesellschafter Dual-Control-Antrag anlegen (Aktivierung erst nach Freigabe).
  if (role === "shareholder") {
    await admin.from("shareholder_approvals").insert({
      requested_for: newUserId,
      requested_by: userData.user.id,
      status: "pending",
    });
  }

  return jsonResponse({ ok: true, user_id: newUserId, role }, 201);
});
