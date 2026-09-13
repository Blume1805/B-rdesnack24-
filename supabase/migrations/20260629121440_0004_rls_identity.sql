create or replace function app.guard_profile_update()
returns trigger
language plpgsql security definer
set search_path = public, app
as $$
begin
  if public.is_admin() then return new; end if;
  if new.role <> old.role
     or new.status <> old.status
     or new.id <> old.id
     or coalesce(new.archived_at, 'epoch'::timestamptz) <> coalesce(old.archived_at, 'epoch'::timestamptz)
     or coalesce(new.deleted_at,  'epoch'::timestamptz) <> coalesce(old.deleted_at,  'epoch'::timestamptz)
  then
    raise exception 'Rolle/Status/Identität dürfen nur durch einen Administrator geändert werden'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_profiles_guard on public.profiles;
create trigger trg_profiles_guard before update on public.profiles
  for each row execute function app.guard_profile_update();

alter table public.profiles enable row level security;
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_admin()
    or public.auth_has_permission('users.manage')
    or public.auth_has_permission('employees.manage'));

drop policy if exists profiles_update_self on public.profiles;
create policy profiles_update_self on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists profiles_update_admin on public.profiles;
create policy profiles_update_admin on public.profiles for update to authenticated
  using (public.is_admin() or public.auth_has_permission('users.manage'))
  with check (public.is_admin() or public.auth_has_permission('users.manage'));

drop policy if exists profiles_insert_admin on public.profiles;
create policy profiles_insert_admin on public.profiles for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('users.manage'));

alter table public.roles enable row level security;
alter table public.permissions enable row level security;
drop policy if exists roles_read on public.roles;
create policy roles_read on public.roles for select to authenticated using (true);
drop policy if exists roles_write on public.roles;
create policy roles_write on public.roles for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
drop policy if exists perms_read on public.permissions;
create policy perms_read on public.permissions for select to authenticated using (true);
drop policy if exists perms_write on public.permissions;
create policy perms_write on public.permissions for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

alter table public.role_permissions enable row level security;
drop policy if exists rp_read on public.role_permissions;
create policy rp_read on public.role_permissions for select to authenticated using (true);
drop policy if exists rp_write on public.role_permissions;
create policy rp_write on public.role_permissions for all to authenticated
  using (public.is_admin() or public.auth_has_permission('roles.manage'))
  with check (public.is_admin() or public.auth_has_permission('roles.manage'));

alter table public.user_permissions enable row level security;
drop policy if exists up_read on public.user_permissions;
create policy up_read on public.user_permissions for select to authenticated
  using (user_id = auth.uid() or public.is_admin()
    or public.auth_has_permission('employees.manage')
    or public.auth_has_permission('users.manage'));
drop policy if exists up_write on public.user_permissions;
create policy up_write on public.user_permissions for all to authenticated
  using (public.is_admin() or public.auth_has_permission('employees.manage') or public.auth_has_permission('users.manage'))
  with check (public.is_admin() or public.auth_has_permission('employees.manage') or public.auth_has_permission('users.manage'));

alter table public.shareholder_approvals enable row level security;
drop policy if exists sha_read on public.shareholder_approvals;
create policy sha_read on public.shareholder_approvals for select to authenticated
  using (public.is_admin() or public.is_shareholder()
    or requested_for = auth.uid() or requested_by = auth.uid());
drop policy if exists sha_insert on public.shareholder_approvals;
create policy sha_insert on public.shareholder_approvals for insert to authenticated
  with check ((public.is_shareholder() or public.is_admin()) and requested_by = auth.uid());

alter table public.audit_log enable row level security;
drop policy if exists audit_read on public.audit_log;
create policy audit_read on public.audit_log for select to authenticated
  using (public.is_admin() or public.auth_has_permission('system.logs'));
