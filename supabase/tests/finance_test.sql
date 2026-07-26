-- ============================================================================
-- pgTAP-Tests: Finanz-Aggregation (finance_summary) + Zugriffsschutz
-- Selbst-enthaltend, per ROLLBACK verworfen.  Ausführung: supabase test db
-- ============================================================================
begin;
select plan(6);

-- Konten (falls Seed nicht geladen) -----------------------------------------
insert into public.finance_accounts(code, name, direction, default_tax) values
  ('8300','Erlöse 7 %','revenue',7.0),
  ('8400','Erlöse 19 %','revenue',19.0),
  ('3300','Wareneinkauf 7 %','expense',7.0)
on conflict (code) do nothing;

-- Admin-Nutzer (für berechtigten Zugriff) -----------------------------------
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa','00000000-0000-0000-0000-000000000000','authenticated','authenticated','admin@test.de','x', now(), now());
update public.profiles set role='system_admin', status='active'
  where id='aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';

-- Kunde (ohne finance.view) -------------------------------------------------
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values ('cccccccc-cccc-cccc-cccc-cccccccccccc','00000000-0000-0000-0000-000000000000','authenticated','authenticated','kunde@test.de','x', now(), now());

-- Buchungen im Juni 2026 ----------------------------------------------------
insert into public.finance_bookings(booking_date, account_code, amount_net, amount_tax, tax_rate, direction, source, source_ref) values
  ('2026-06-05','8300',100,7,7,'revenue','manual','t1'),
  ('2026-06-10','8400',200,38,19,'revenue','manual','t2'),
  ('2026-06-12','3300',50,3.5,7,'expense','manual','t3'),
  ('2026-07-01','8300',999,69.93,7,'revenue','manual','t4'); -- außerhalb Zeitraum

-- Als Admin auswerten -------------------------------------------------------
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"}';

select is(
  (public.finance_summary('2026-06-01','2026-06-30')->>'revenue_net')::numeric,
  300::numeric, 'Umsatz netto gesamt = 300');
select is(
  (public.finance_summary('2026-06-01','2026-06-30')->>'revenue_net_7')::numeric,
  100::numeric, 'Umsatz netto 7% = 100');
select is(
  (public.finance_summary('2026-06-01','2026-06-30')->>'revenue_net_19')::numeric,
  200::numeric, 'Umsatz netto 19% = 200');
select is(
  (public.finance_summary('2026-06-01','2026-06-30')->>'expense_net')::numeric,
  50::numeric, 'Aufwand netto = 50');
select is(
  (public.finance_summary('2026-06-01','2026-06-30')->>'result_net')::numeric,
  250::numeric, 'Ergebnis netto = 250 (Juli ausgeschlossen)');

reset role;

-- Kunde darf finance_summary NICHT aufrufen ---------------------------------
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"cccccccc-cccc-cccc-cccc-cccccccccccc"}';
select throws_ok(
  $$ select public.finance_summary('2026-06-01','2026-06-30') $$,
  '42501',
  'Keine Berechtigung für Finanzdaten',
  'Kunde ohne finance.view wird abgewiesen');
reset role;

select * from finish();
rollback;
