-- ============================================================================
-- 0002 — Identity & Access (RBAC + ABAC, Dual-Control)
-- ----------------------------------------------------------------------------
-- profiles, roles, permissions, role_permissions, user_permissions,
-- shareholder_approvals + serverseitige Berechtigungsfunktionen.
-- RLS-Policies hierzu siehe 0004.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Enums
-- ----------------------------------------------------------------------------
do $$ begin
  create type app.role_key as enum ('system_admin', 'shareholder', 'employee', 'customer');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.profile_status as enum ('invited', 'active', 'deactivated', 'archived');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.approval_status as enum ('pending', 'approved', 'rejected');
exception when duplicate_object then null; end $$;

-- ----------------------------------------------------------------------------
-- profiles — 1:1 zu auth.users
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete restrict,
  email        extensions.citext not null unique,
  full_name    text,
  phone        text,
  role         app.role_key not null default 'customer',
  status       app.profile_status not null default 'invited',
  -- Mitarbeiter werden eingeladen; Kunden registrieren sich selbst (status via Trigger/Funktion).
  invited_by   uuid references public.profiles(id),
  activated_at timestamptz,
  created_at   timestamptz not null default now(),
  created_by   uuid,
  updated_at   timestamptz not null default now(),
  updated_by   uuid,
  archived_at  timestamptz,
  deleted_at   timestamptz
);

comment on table public.profiles is
  'Anwendungsprofil je Auth-Nutzer. Kein Hard-Delete: status/archived_at/deleted_at statt DELETE.';

create index if not exists idx_profiles_role   on public.profiles(role)   where deleted_at is null;
create index if not exists idx_profiles_status on public.profiles(status) where deleted_at is null;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at before update on public.profiles
  for each row execute function app.set_updated_at();

-- ----------------------------------------------------------------------------
-- roles / permissions / role_permissions  (RBAC)
-- ----------------------------------------------------------------------------
create table if not exists public.roles (
  key         app.role_key primary key,
  name        text not null,
  description text
);

create table if not exists public.permissions (
  key         text primary key,           -- z. B. 'finance.view'
  area        text not null,              -- 'finance' | 'inventory' | 'haccp' | 'documents' | 'admin' | ...
  description text
);

create table if not exists public.role_permissions (
  role_key       app.role_key not null references public.roles(key) on delete cascade,
  permission_key text         not null references public.permissions(key) on delete cascade,
  primary key (role_key, permission_key)
);

-- ----------------------------------------------------------------------------
-- user_permissions  (ABAC-Overrides, v. a. für Mitarbeiter)
-- ----------------------------------------------------------------------------
create table if not exists public.user_permissions (
  user_id        uuid not null references public.profiles(id) on delete cascade,
  permission_key text not null references public.permissions(key) on delete cascade,
  granted        boolean not null default true,   -- true=zusätzlich erlaubt, false=explizit entzogen
  granted_by     uuid references public.profiles(id),
  created_at     timestamptz not null default now(),
  primary key (user_id, permission_key)
);

comment on table public.user_permissions is
  'Feingranulare ABAC-Overrides. Mitarbeiter erhalten ausschließlich hier freigegebene Rechte.';

-- ----------------------------------------------------------------------------
-- shareholder_approvals  (Dual-Control: neue Gesellschafter)
-- ----------------------------------------------------------------------------
create table if not exists public.shareholder_approvals (
  id            uuid primary key default gen_random_uuid(),
  requested_for uuid not null references public.profiles(id) on delete restrict,
  requested_by  uuid not null references public.profiles(id) on delete restrict,
  status        app.approval_status not null default 'pending',
  approved_by   uuid references public.profiles(id),
  decided_at    timestamptz,
  reason        text,
  created_at    timestamptz not null default now(),
  -- Selbstfreigabe ausgeschlossen
  constraint chk_no_self_approval check (approved_by is null or approved_by <> requested_for)
);

create index if not exists idx_shapprovals_status on public.shareholder_approvals(status);

-- ============================================================================
-- Serverseitige Berechtigungsfunktionen (in RLS-Policies verwendet)
-- ============================================================================

-- Rolle des aktuellen (oder angegebenen) aktiven Nutzers.
create or replace function public.current_role(uid uuid default auth.uid())
returns app.role_key
language sql
stable
security definer
set search_path = public, app
as $$
  select p.role
  from public.profiles p
  where p.id = uid
    and p.status = 'active'
    and p.deleted_at is null;
$$;

-- Ist der aktuelle Nutzer Systemadministrator?
create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  select public.current_role(uid) = 'system_admin';
$$;

-- Ist der aktuelle Nutzer aktiver Gesellschafter (Rechte nur nach Freigabe)?
create or replace function public.is_shareholder(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  select exists (
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
  -- Admins gelten implizit ebenfalls als berechtigt.
  or public.is_admin(uid);
$$;

-- Kern: hat der Nutzer eine konkrete Permission? RBAC ODER ABAC, abzüglich expliziter Entzüge.
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
  'Serverseitige Autorisierung für RLS: true wenn Rolle (RBAC) oder Override (ABAC) die Permission gewährt und nicht explizit entzogen wurde.';

-- ----------------------------------------------------------------------------
-- Neuer Auth-Nutzer -> Profil anlegen (Self-Signup = Kunde)
-- ----------------------------------------------------------------------------
create or replace function app.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.profiles (id, email, full_name, role, status, activated_at)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', null),
    -- Rolle aus Einladungs-Metadaten, sonst Self-Signup = customer
    coalesce((new.raw_user_meta_data->>'role')::app.role_key, 'customer'),
    -- Kunden sind nach E-Mail-Bestätigung sofort aktiv; eingeladene interne Nutzer bleiben 'invited'
    case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then 'active' else 'invited' end,
    case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then now() else null end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function app.handle_new_user();

-- ----------------------------------------------------------------------------
-- Freigabe eines Gesellschafters (Dual-Control) — als RPC aufrufbar
-- ----------------------------------------------------------------------------
create or replace function public.approve_shareholder(approval_id uuid, decision app.approval_status, note text default null)
returns public.shareholder_approvals
language plpgsql
security definer
set search_path = public, app
as $$
declare
  rec public.shareholder_approvals;
begin
  if not public.is_shareholder() then
    raise exception 'Nur aktive Gesellschafter dürfen Freigaben erteilen' using errcode = '42501';
  end if;

  select * into rec from public.shareholder_approvals where id = approval_id for update;
  if not found then
    raise exception 'Freigabeantrag nicht gefunden';
  end if;
  if rec.status <> 'pending' then
    raise exception 'Antrag wurde bereits entschieden';
  end if;
  if rec.requested_for = auth.uid() then
    raise exception 'Selbstfreigabe ist nicht zulässig' using errcode = '42501';
  end if;
  if decision not in ('approved','rejected') then
    raise exception 'Ungültige Entscheidung';
  end if;

  update public.shareholder_approvals
     set status = decision, approved_by = auth.uid(), decided_at = now(), reason = note
   where id = approval_id
   returning * into rec;

  -- Bei Freigabe Rolle wirksam setzen
  if decision = 'approved' then
    update public.profiles
       set role = 'shareholder', status = 'active', activated_at = coalesce(activated_at, now())
     where id = rec.requested_for;
  end if;

  return rec;
end;
$$;

comment on function public.approve_shareholder(uuid, app.approval_status, text) is
  'Dual-Control: ein aktiver Gesellschafter (≠ Antragsteller) gibt einen neuen Gesellschafter frei.';
