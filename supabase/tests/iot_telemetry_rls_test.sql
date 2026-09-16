-- ============================================================================
-- pgTAP: Isolation des IoT-/Telemetrie-Layers (Migration 0064).
-- Ausführung: supabase test db
-- Hintergrund: Die Tabellen aus 0031 waren bis 2026-09-16 ohne RLS; jedes
-- authentifizierte Konto konnte sie lesen, inklusive telemetry_providers.hmac_secret.
-- ============================================================================
begin;
select plan(9);

-- Zwei Konten: ein Kunde ohne Rechte, ein Gesellschafter mit inventory.*
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values
  ('f1111111-1111-1111-1111-111111111111','00000000-0000-0000-0000-000000000000','authenticated','authenticated','iot-kunde@test.de','x', now(), now()),
  ('f2222222-2222-2222-2222-222222222222','00000000-0000-0000-0000-000000000000','authenticated','authenticated','iot-gesellschafter@test.de','x', now(), now());

update public.profiles set role = 'shareholder' where id = 'f2222222-2222-2222-2222-222222222222';

insert into public.machines(id, code, name)
values ('fa000000-0000-0000-0000-000000000001','T-IOT','Testautomat Telemetrie');
insert into public.telemetry_providers(id, name, hmac_secret)
values ('fb000000-0000-0000-0000-000000000001','pgTAP-Provider','GEHEIM');
insert into public.machine_devices(machine_id, provider_id, external_device_id)
values ('fa000000-0000-0000-0000-000000000001','fb000000-0000-0000-0000-000000000001','PGTAP-DEV');
insert into public.machine_slots(machine_id, slot_code) values ('fa000000-0000-0000-0000-000000000001','A1');
insert into public.machine_health(machine_id, temperature_c) values ('fa000000-0000-0000-0000-000000000001', 5.5);

-- ── Kunde sieht nichts ──────────────────────────────────────────────────────
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"f1111111-1111-1111-1111-111111111111"}';

select is((select count(*)::int from public.telemetry_providers), 0,
  'Kunde sieht keine Telemetrie-Provider');
select is((select count(*)::int from public.machine_devices), 0,
  'Kunde sieht keine Automatengeraete');
select is((select count(*)::int from public.machine_slots), 0,
  'Kunde sieht keine Fachbelegung');
select is((select count(*)::int from public.machine_telemetry_events), 0,
  'Kunde sieht keine Telemetrieereignisse');
select is((select count(*)::int from public.machine_health), 0,
  'Kunde sieht keinen Automatenzustand');

-- Das Webhook-Geheimnis ist fuer keine Clientrolle lesbar (Spaltenrecht).
select throws_ok(
  'select hmac_secret from public.telemetry_providers',
  '42501',
  null,
  'hmac_secret ist fuer authenticated nicht lesbar');

-- Schreibversuch des Kunden scheitert an der Policy.
select throws_ok(
  $$insert into public.machine_devices(machine_id, provider_id, external_device_id)
    values ('fa000000-0000-0000-0000-000000000001','fb000000-0000-0000-0000-000000000001','HACK')$$,
  '42501',
  null,
  'Kunde darf kein Geraet anlegen');
reset role;

-- ── Gesellschafter sieht die Betriebsdaten ──────────────────────────────────
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"f2222222-2222-2222-2222-222222222222"}';

select is((select count(*)::int from public.machine_devices), 1,
  'Gesellschafter sieht Automatengeraete (inventory.view)');

-- Genau die Abfrage, die der Telemetrie-Hub stellt (ohne hmac_secret).
select is(
  (select count(*)::int from (
     select id, name, adapter, is_active, time_skew_max_s, notes, created_at, updated_at
     from public.telemetry_providers) q),
  1, 'Telemetrie-Hub kann Provider weiterhin lesen (Regression)');
reset role;

select * from finish();
rollback;
