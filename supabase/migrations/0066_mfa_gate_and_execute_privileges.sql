-- ============================================================================
-- 0066 — Ausführungsrechte reparieren + Zwei-Faktor-Pflicht für interne Rollen
-- ----------------------------------------------------------------------------
-- Zwei Befunde vom 17.09.2026 (docs/ARCHITECTURE.md, A-9 und A-10):
--
-- A-10: Die Migrationen 0045/0046 entziehen `anon` und `PUBLIC` das Ausführungs-
--       recht auf alle Funktionen in `public` und `app` und setzen dasselbe als
--       Standard für künftige Funktionen. Der Standardteil wirkt nicht:
--       `alter default privileges ... revoke execute on functions from public`
--       entfernt das eingebaute PUBLIC-Recht in PostgreSQL 16 nicht. Nachgewiesen
--       am 17.09.2026 gegen PostgreSQL 16.13: eine frisch angelegte Funktion trug
--       weiterhin `=X/postgres` in der ACL. Folge: Jede seit 0047 angelegte
--       Funktion ist ohne Anmeldung aufrufbar — zehn Stück, darunter
--       `public.lifetime_founders_status()`, die einer nicht angemeldeten
--       Aufruferin die Zahl der vergebenen Lifetime-Plätze preisgibt
--       (nachgewiesen: "taken" wechselte von 0 auf 1, nachdem ein Abo angelegt
--       wurde). Kein Personenbezug, aber eine Lücke in der Rechteschicht.
--
-- A-9:  Die Zwei-Faktor-Anmeldung war bisher nur eine Erinnerung im Client
--       (`home_shell.dart`). Ein entwendetes Passwort eines Gesellschafters
--       genügte für den vollständigen Innenbereich.
--
-- Der Schalter steht bewusst auf `false`. Er wird erst eingeschaltet, wenn alle
-- internen Konten einen bestätigten TOTP-Faktor haben — sonst sperrt sich der
-- Betrieb selbst aus. Anleitung: docs/OPERATIONS.md, Runbook H.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Teil A — Ausführungsrechte: Ist-Zustand bereinigen
-- ----------------------------------------------------------------------------
-- Wiederholbar. Fängt alle Funktionen ein, die seit 0046 hinzugekommen sind.
revoke execute on all functions in schema public from public, anon;
revoke execute on all functions in schema app    from public, anon;
grant  execute on all functions in schema public to authenticated, service_role;
grant  execute on all functions in schema app    to authenticated, service_role;

-- Die Standardrechte bleiben gesetzt (schaden nicht), tragen aber nachweislich
-- nicht. Gegen erneutes Abdriften sichert der pgTAP-Test
-- supabase/tests/execute_privileges_test.sql, der in der CI läuft: Er schlägt
-- fehl, sobald eine Funktion in `public` oder `app` für `anon` oder `PUBLIC`
-- ausführbar ist. Eine neue Funktion braucht also künftig eine Zeile hier
-- oder in ihrer eigenen Migration — sonst bricht die CI.
alter default privileges in schema public grant execute on functions to authenticated, service_role;
alter default privileges in schema app    grant execute on functions to authenticated, service_role;

-- ----------------------------------------------------------------------------
-- Teil B — Schalter für die Zwei-Faktor-Pflicht
-- ----------------------------------------------------------------------------
create table if not exists app.security_settings (
  key        text primary key,
  enabled    boolean     not null default false,
  note       text,
  updated_at timestamptz not null default now()
);

comment on table app.security_settings is
  'Serverseitige Sicherheitsschalter. Liegt in app (nicht über PostgREST erreichbar) '
  'und wird ausschließlich über den SQL-Editor bzw. service_role geändert.';

insert into app.security_settings(key, enabled, note) values (
  'require_mfa_internal',
  false,
  'Zwei-Faktor-Pflicht für system_admin, shareholder und employee. '
  'Erst einschalten, wenn alle internen Konten einen bestätigten TOTP-Faktor '
  'haben — siehe docs/OPERATIONS.md, Runbook H. Rückweg: enabled = false.'
) on conflict (key) do nothing;

revoke all on app.security_settings from public, anon, authenticated;
grant select on app.security_settings to service_role;

-- Steht die Pflicht?
create or replace function app.require_mfa_internal()
returns boolean
language sql
stable
security definer
set search_path = app, public
as $$
  select coalesce(
    (select enabled from app.security_settings where key = 'require_mfa_internal'),
    false
  );
$$;

-- Ist die laufende Sitzung mit zweitem Faktor angemeldet?
--
-- Supabase setzt im JWT den Anspruch `aal`: 'aal1' = nur Passwort,
-- 'aal2' = zweiter Faktor bestätigt. Serverseitige Aufrufe (service_role,
-- Edge Functions, Cron) tragen keinen `aal`-Anspruch und bleiben ausgenommen,
-- damit Hintergrundläufe nicht am Schalter scheitern.
create or replace function app.session_is_aal2()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() ->> 'aal', '')  = 'aal2'
      or coalesce(auth.jwt() ->> 'role', '') = 'service_role';
$$;

comment on function app.session_is_aal2() is
  'true, wenn die Sitzung einen zweiten Faktor bestätigt hat (JWT-Anspruch aal=aal2) '
  'oder serverseitig mit service_role läuft.';

-- ----------------------------------------------------------------------------
-- Teil C — Die Pflicht in die drei zentralen Prüffunktionen einhängen
-- ----------------------------------------------------------------------------
-- Kunden sind nicht betroffen: Ihr Zugriff läuft in allen Policies über den
-- Zweig `... = auth.uid()`, nicht über diese Funktionen. Betroffen ist nur der
-- Zweig, der interne Rechte gewährt.

create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  select public.app_role(uid) = 'system_admin'
     and (not app.require_mfa_internal() or app.session_is_aal2());
$$;

create or replace function public.is_shareholder(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  select (
    exists (
      select 1
      from public.profiles p
      where p.id = uid
        and p.status = 'active'
        and p.deleted_at is null
        and p.role = 'shareholder'
        and exists (
          select 1 from public.shareholder_approvals a
          where a.requested_for = p.id and a.status = 'approved'
        )
    )
    and (not app.require_mfa_internal() or app.session_is_aal2())
  )
  -- Admins gelten implizit ebenfalls als berechtigt (dort bereits geprüft).
  or public.is_admin(uid);
$$;

create or replace function public.auth_has_permission(perm text, uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  with me as (
    select p.id, p.role
    from public.profiles p
    where p.id = uid and p.status = 'active' and p.deleted_at is null
  )
  select
    case when not exists (select 1 from me) then false
    -- Zwei-Faktor-Pflicht für interne Rollen (0066). Steht der Schalter nicht,
    -- ändert sich nichts.
    when (select role from me) in ('system_admin', 'shareholder', 'employee')
         and app.require_mfa_internal()
         and not app.session_is_aal2() then false
    -- explizit entzogen?
    when exists (
      select 1 from public.user_permissions up, me
      where up.user_id = me.id and up.permission_key = perm and up.granted = false
    ) then false
    -- Admin darf alles
    when (select role from me) = 'system_admin' then true
    -- RBAC: Rolle besitzt Permission
    when exists (
      select 1 from public.role_permissions rp, me
      where rp.role_key = me.role and rp.permission_key = perm
    ) then true
    -- ABAC: explizit gewährt
    when exists (
      select 1 from public.user_permissions up, me
      where up.user_id = me.id and up.permission_key = perm and up.granted = true
    ) then true
    else false
    end;
$$;

comment on function public.auth_has_permission(text, uuid) is
  'Serverseitige Autorisierung für RLS: true wenn Rolle (RBAC) oder Override (ABAC) '
  'die Permission gewährt, nicht explizit entzogen wurde und — sofern der Schalter '
  'require_mfa_internal steht — die Sitzung einen zweiten Faktor trägt.';

-- Rechte der geänderten Funktionen wiederherstellen (create or replace behält
-- sie zwar, aber Teil A läuft davor; das hier ist die belastbare Reihenfolge).
revoke execute on function public.is_admin(uuid)                  from public, anon;
revoke execute on function public.is_shareholder(uuid)            from public, anon;
revoke execute on function public.auth_has_permission(text, uuid) from public, anon;
revoke execute on function app.require_mfa_internal()             from public, anon;
revoke execute on function app.session_is_aal2()                  from public, anon;
grant  execute on function public.is_admin(uuid)                  to authenticated, service_role;
grant  execute on function public.is_shareholder(uuid)            to authenticated, service_role;
grant  execute on function public.auth_has_permission(text, uuid) to authenticated, service_role;
grant  execute on function app.require_mfa_internal()             to authenticated, service_role;
grant  execute on function app.session_is_aal2()                  to authenticated, service_role;
