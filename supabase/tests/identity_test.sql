-- ============================================================================
-- pgTAP-Tests: Identity & Access (RBAC/ABAC, RLS, Revisionssicherheit)
-- Ausführung:  supabase test db
-- Selbst-enthaltend (legt benötigte Rollen/Permissions im Transaktionsrahmen an),
-- damit der Test unabhängig vom Seed läuft. Alles wird per ROLLBACK verworfen.
-- ============================================================================
begin;
select plan(8);

-- Stammdaten (idempotent) ----------------------------------------------------
insert into public.roles(key, name) values
  ('system_admin','Admin'), ('shareholder','GS'), ('employee','MA'), ('customer','Kunde')
on conflict (key) do nothing;

insert into public.permissions(key, area) values
  ('test.perm','test'), ('test.other','test')
on conflict (key) do nothing;

insert into public.role_permissions(role_key, permission_key) values
  ('shareholder','test.perm'),
  ('system_admin','test.perm'),
  ('system_admin','test.other')
on conflict do nothing;

-- Test-Nutzer in auth.users; Trigger handle_new_user legt Profile an ----------
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values
  ('11111111-1111-1111-1111-111111111111','00000000-0000-0000-0000-000000000000','authenticated','authenticated','sh@test.de','x', now(), now()),
  ('22222222-2222-2222-2222-222222222222','00000000-0000-0000-0000-000000000000','authenticated','authenticated','ma@test.de','x', now(), now()),
  ('33333333-3333-3333-3333-333333333333','00000000-0000-0000-0000-000000000000','authenticated','authenticated','ad@test.de','x', now(), now());

-- Rollen/Status setzen
update public.profiles set role='shareholder', status='active' where id='11111111-1111-1111-1111-111111111111';
update public.profiles set role='employee',    status='active' where id='22222222-2222-2222-2222-222222222222';
update public.profiles set role='system_admin', status='active' where id='33333333-3333-3333-3333-333333333333';

-- 1) Gesellschafter besitzt RBAC-Permission
select ok(
  public.auth_has_permission('test.perm','11111111-1111-1111-1111-111111111111'),
  'Gesellschafter hat test.perm via Rolle'
);

-- 2) Mitarbeiter ohne Override hat KEINE Permission
select ok(
  not public.auth_has_permission('test.perm','22222222-2222-2222-2222-222222222222'),
  'Mitarbeiter ohne Freigabe hat test.perm NICHT'
);

-- 3) Mitarbeiter mit ABAC-Override erhält Permission
insert into public.user_permissions(user_id, permission_key, granted)
values ('22222222-2222-2222-2222-222222222222','test.perm', true);
select ok(
  public.auth_has_permission('test.perm','22222222-2222-2222-2222-222222222222'),
  'Mitarbeiter mit ABAC-Override hat test.perm'
);

-- 4) Expliziter Entzug schlägt Rollenrecht (Admin) — Precedence
insert into public.user_permissions(user_id, permission_key, granted)
values ('33333333-3333-3333-3333-333333333333','test.other', false);
select ok(
  not public.auth_has_permission('test.other','33333333-3333-3333-3333-333333333333'),
  'Expliziter Entzug überstimmt Admin-Rollenrecht'
);

-- 5) is_shareholder ohne Freigabe = false
select ok(
  not public.is_shareholder('11111111-1111-1111-1111-111111111111'),
  'Gesellschafter ohne Dual-Control-Freigabe gilt nicht als berechtigt'
);

-- 6) is_shareholder mit Freigabe = true
insert into public.shareholder_approvals(requested_for, requested_by, status, approved_by, decided_at)
values ('11111111-1111-1111-1111-111111111111','33333333-3333-3333-3333-333333333333','approved','33333333-3333-3333-3333-333333333333', now());
select ok(
  public.is_shareholder('11111111-1111-1111-1111-111111111111'),
  'Gesellschafter mit Freigabe ist berechtigt'
);

-- 7) RLS: Mitarbeiter darf fremdes Profil NICHT lesen
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"22222222-2222-2222-2222-222222222222"}';
select is(
  (select count(*)::int from public.profiles where id='11111111-1111-1111-1111-111111111111'),
  0,
  'Mitarbeiter sieht fremdes Profil nicht (RLS)'
);
reset role;

-- 8) Revisionssicherheit: DELETE auf profiles wirkt nicht (kein DELETE-Policy)
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"33333333-3333-3333-3333-333333333333"}';
delete from public.profiles where id='11111111-1111-1111-1111-111111111111';
reset role;
select is(
  (select count(*)::int from public.profiles where id='11111111-1111-1111-1111-111111111111'),
  1,
  'Profil bleibt trotz DELETE-Versuch erhalten (kein Hard-Delete)'
);

select * from finish();
rollback;
