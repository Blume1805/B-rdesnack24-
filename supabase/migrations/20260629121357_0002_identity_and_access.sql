do $$ begin
  create type app.role_key as enum ('system_admin', 'shareholder', 'employee', 'customer');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.profile_status as enum ('invited', 'active', 'deactivated', 'archived');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.approval_status as enum ('pending', 'approved', 'rejected');
exception when duplicate_object then null; end $$;

create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete restrict,
  email        extensions.citext not null unique,
  full_name    text,
  phone        text,
  role         app.role_key not null default 'customer',
  status       app.profile_status not null default 'invited',
  invited_by   uuid references public.profiles(id),
  activated_at timestamptz,
  created_at   timestamptz not null default now(),
  created_by   uuid,
  updated_at   timestamptz not null default now(),
  updated_by   uuid,
  archived_at  timestamptz,
  deleted_at   timestamptz
);

create index if not exists idx_profiles_role   on public.profiles(role)   where deleted_at is null;
create index if not exists idx_profiles_status on public.profiles(status) where deleted_at is null;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at before update on public.profiles
  for each row execute function app.set_updated_at();

create table if not exists public.roles (
  key         app.role_key primary key,
  name        text not null,
  description text
);

create table if not exists public.permissions (
  key         text primary key,
  area        text not null,
  description text
);

create table if not exists public.role_permissions (
  role_key       app.role_key not null references public.roles(key) on delete cascade,
  permission_key text         not null references public.permissions(key) on delete cascade,
  primary key (role_key, permission_key)
);

create table if not exists public.user_permissions (
  user_id        uuid not null references public.profiles(id) on delete cascade,
  permission_key text not null references public.permissions(key) on delete cascade,
  granted        boolean not null default true,
  granted_by     uuid references public.profiles(id),
  created_at     timestamptz not null default now(),
  primary key (user_id, permission_key)
);

create table if not exists public.shareholder_approvals (
  id            uuid primary key default gen_random_uuid(),
  requested_for uuid not null references public.profiles(id) on delete restrict,
  requested_by  uuid not null references public.profiles(id) on delete restrict,
  status        app.approval_status not null default 'pending',
  approved_by   uuid references public.profiles(id),
  decided_at    timestamptz,
  reason        text,
  created_at    timestamptz not null default now(),
  constraint chk_no_self_approval check (approved_by is null or approved_by <> requested_for)
);

create index if not exists idx_shapprovals_status on public.shareholder_approvals(status);

create or replace function public.app_role(uid uuid default auth.uid())
returns app.role_key
language sql stable security definer
set search_path = public, app
as $$
  select p.role from public.profiles p
  where p.id = uid and p.status = 'active' and p.deleted_at is null;
$$;

create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql stable security definer
set search_path = public, app
as $$ select public.app_role(uid) = 'system_admin'; $$;

create or replace function public.is_shareholder(uid uuid default auth.uid())
returns boolean
language sql stable security definer
set search_path = public, app
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = uid and p.status = 'active' and p.deleted_at is null
      and p.role = 'shareholder'
      and exists (select 1 from public.shareholder_approvals a
                  where a.requested_for = p.id and a.status = 'approved')
  ) or public.is_admin(uid);
$$;

create or replace function public.auth_has_permission(perm text, uid uuid default auth.uid())
returns boolean
language sql stable security definer
set search_path = public, app
as $$
  with me as (
    select p.id, p.role from public.profiles p
    where p.id = uid and p.status = 'active' and p.deleted_at is null
  )
  select
    case when not exists (select 1 from me) then false
    when exists (select 1 from public.user_permissions up, me
      where up.user_id = me.id and up.permission_key = perm and up.granted = false) then false
    when (select role from me) = 'system_admin' then true
    when exists (select 1 from public.role_permissions rp, me
      where rp.role_key = me.role and rp.permission_key = perm) then true
    when exists (select 1 from public.user_permissions up, me
      where up.user_id = me.id and up.permission_key = perm and up.granted = true) then true
    else false end;
$$;

create or replace function app.handle_new_user()
returns trigger
language plpgsql security definer
set search_path = public, app
as $$
begin
  insert into public.profiles (id, email, full_name, role, status, activated_at)
  values (
    new.id, new.email,
    coalesce(new.raw_user_meta_data->>'full_name', null),
    coalesce((new.raw_user_meta_data->>'role')::app.role_key, 'customer'),
    case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then 'active' else 'invited' end,
    case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then now() else null end
  ) on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function app.handle_new_user();

create or replace function public.approve_shareholder(approval_id uuid, decision app.approval_status, note text default null)
returns public.shareholder_approvals
language plpgsql security definer
set search_path = public, app
as $$
declare rec public.shareholder_approvals;
begin
  if not public.is_shareholder() then
    raise exception 'Nur aktive Gesellschafter dürfen Freigaben erteilen' using errcode = '42501';
  end if;
  select * into rec from public.shareholder_approvals where id = approval_id for update;
  if not found then raise exception 'Freigabeantrag nicht gefunden'; end if;
  if rec.status <> 'pending' then raise exception 'Antrag wurde bereits entschieden'; end if;
  if rec.requested_for = auth.uid() then
    raise exception 'Selbstfreigabe ist nicht zulässig' using errcode = '42501';
  end if;
  if decision not in ('approved','rejected') then raise exception 'Ungültige Entscheidung'; end if;
  update public.shareholder_approvals
     set status = decision, approved_by = auth.uid(), decided_at = now(), reason = note
   where id = approval_id returning * into rec;
  if decision = 'approved' then
    update public.profiles
       set role = 'shareholder', status = 'active', activated_at = coalesce(activated_at, now())
     where id = rec.requested_for;
  end if;
  return rec;
end;
$$;
