-- ============================================================================
-- pgTAP: Zwei-Faktor-Pflicht für interne Rollen (Migration 0066).
-- Ausführung: supabase test db
--
-- Hintergrund (Befund A-9, 17.09.2026): Die Zwei-Faktor-Anmeldung war nur eine
-- Erinnerung im Client. Ein entwendetes Passwort eines Gesellschafters genügte
-- für den vollständigen Innenbereich. 0066 zieht die Prüfung in die drei
-- zentralen Berechtigungsfunktionen — hinter einem Schalter, der standardmäßig
-- aus ist, damit sich der Betrieb nicht aussperrt.
--
-- Der Test hält beide Zustände fest: Ausgeschaltet darf sich nichts ändern
-- (sonst wäre es eine stille Regression), eingeschaltet muss der zweite Faktor
-- zwingend sein.
-- ============================================================================
begin;
select plan(10);

insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values
  ('b1111111-1111-1111-1111-111111111111','00000000-0000-0000-0000-000000000000','authenticated','authenticated','mfa-gesellschafter@test.de','x', now(), now()),
  ('b2222222-2222-2222-2222-222222222222','00000000-0000-0000-0000-000000000000','authenticated','authenticated','mfa-admin@test.de','x', now(), now()),
  ('b3333333-3333-3333-3333-333333333333','00000000-0000-0000-0000-000000000000','authenticated','authenticated','mfa-kunde@test.de','x', now(), now());

-- Der Waechter trg_profiles_guard laesst Rollenwechsel nur durch einen
-- Administrator zu; fuer die Einrichtung wird er kurz abgeschaltet.
alter table public.profiles disable trigger trg_profiles_guard;
update public.profiles set role='shareholder',  status='active' where id='b1111111-1111-1111-1111-111111111111';
update public.profiles set role='system_admin', status='active' where id='b2222222-2222-2222-2222-222222222222';
alter table public.profiles enable trigger trg_profiles_guard;

insert into public.shareholder_approvals(requested_for, requested_by, status)
values ('b1111111-1111-1111-1111-111111111111','b2222222-2222-2222-2222-222222222222','approved');

-- Rollenrechte nicht aus der Seed-Datei voraussetzen: Ein Test, der nur mit
-- Beispieldaten besteht, prueft die Beispieldaten mit. Die benoetigte
-- Permission wird deshalb hier selbst angelegt (idempotent).
insert into public.permissions(key, area, description)
values ('inventory.view', 'inventory', 'Inventur/Bestaende ansehen')
on conflict (key) do nothing;
insert into public.role_permissions(role_key, permission_key)
values ('shareholder', 'inventory.view')
on conflict do nothing;

-- ── Schalter AUS: alles bleibt, wie es war ──────────────────────────────────
update app.security_settings set enabled = false where key = 'require_mfa_internal';

set local "request.jwt.claims" = '{"sub":"b1111111-1111-1111-1111-111111111111","aal":"aal1","role":"authenticated"}';
select ok(public.is_shareholder('b1111111-1111-1111-1111-111111111111'),
  'Schalter aus: Gesellschafter ohne zweiten Faktor behaelt seine Rechte');
select ok(public.auth_has_permission('inventory.view','b1111111-1111-1111-1111-111111111111'),
  'Schalter aus: inventory.view bleibt ohne zweiten Faktor bestehen');

-- ── Schalter AN ─────────────────────────────────────────────────────────────
update app.security_settings set enabled = true where key = 'require_mfa_internal';

set local "request.jwt.claims" = '{"sub":"b1111111-1111-1111-1111-111111111111","aal":"aal1","role":"authenticated"}';
select ok(not public.is_shareholder('b1111111-1111-1111-1111-111111111111'),
  'Schalter an: Gesellschafter mit nur Passwort wird abgewiesen');
select ok(not public.auth_has_permission('inventory.view','b1111111-1111-1111-1111-111111111111'),
  'Schalter an: inventory.view faellt ohne zweiten Faktor weg');

set local "request.jwt.claims" = '{"sub":"b1111111-1111-1111-1111-111111111111","aal":"aal2","role":"authenticated"}';
select ok(public.is_shareholder('b1111111-1111-1111-1111-111111111111'),
  'Schalter an: Gesellschafter mit zweitem Faktor kommt durch');
select ok(public.auth_has_permission('inventory.view','b1111111-1111-1111-1111-111111111111'),
  'Schalter an: inventory.view besteht mit zweitem Faktor');

-- Administrator: dieselbe Pflicht, kein Sonderweg.
set local "request.jwt.claims" = '{"sub":"b2222222-2222-2222-2222-222222222222","aal":"aal1","role":"authenticated"}';
select ok(not public.is_admin('b2222222-2222-2222-2222-222222222222'),
  'Schalter an: Administrator mit nur Passwort wird abgewiesen');
set local "request.jwt.claims" = '{"sub":"b2222222-2222-2222-2222-222222222222","aal":"aal2","role":"authenticated"}';
select ok(public.is_admin('b2222222-2222-2222-2222-222222222222'),
  'Schalter an: Administrator mit zweitem Faktor kommt durch');

-- Serverseitige Laeufe (Edge Functions, Cron) tragen keinen aal-Anspruch und
-- duerfen am Schalter nicht scheitern.
set local "request.jwt.claims" = '{"sub":"b2222222-2222-2222-2222-222222222222","role":"service_role"}';
select ok(public.is_admin('b2222222-2222-2222-2222-222222222222'),
  'Schalter an: serverseitiger Lauf (service_role) bleibt ausgenommen');

-- Kunden sind nicht betroffen: Ihr Zugriff laeuft ueber den Zweig
-- `... = auth.uid()`, nicht ueber die drei Berechtigungsfunktionen.
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"b3333333-3333-3333-3333-333333333333","aal":"aal1","role":"authenticated"}';
select isnt(public.my_receipts(), null,
  'Schalter an: Kunde ohne zweiten Faktor sieht weiterhin seine eigenen Belege');
reset role;

update app.security_settings set enabled = false where key = 'require_mfa_internal';
select * from finish();
rollback;
