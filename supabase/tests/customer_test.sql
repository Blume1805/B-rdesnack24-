-- ============================================================================
-- pgTAP: Kundenbereich-Isolation (RLS). Ausführung: supabase test db
-- ============================================================================
begin;
select plan(4);

-- Zwei Kunden (Trigger legen profiles + customers automatisch an).
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values
  ('d1111111-1111-1111-1111-111111111111','00000000-0000-0000-0000-000000000000','authenticated','authenticated','k1@test.de','x', now(), now()),
  ('d2222222-2222-2222-2222-222222222222','00000000-0000-0000-0000-000000000000','authenticated','authenticated','k2@test.de','x', now(), now());

-- Produkt + individueller Preis für Kunde 1.
insert into public.products(id, name, tax_rate)
values ('e0000000-0000-0000-0000-000000000001','Testprodukt',19.0);
insert into public.customer_prices(customer_id, product_id, price_net)
values ('d1111111-1111-1111-1111-111111111111','e0000000-0000-0000-0000-000000000001', 1.49);

-- Aktives Angebot.
insert into public.offers(title, kind, status) values ('Testaktion','special','active');

-- Kunde 1 sieht eigenen Preis ---------------------------------------------
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"d1111111-1111-1111-1111-111111111111"}';
select is(
  (select count(*)::int from public.customer_prices),
  1, 'Kunde 1 sieht eigenen Preis');
select is(
  (select count(*)::int from public.offers),
  1, 'Kunde 1 sieht aktives Angebot');
-- Consent für sich selbst eintragen
insert into public.consents(profile_id, type, granted)
  values ('d1111111-1111-1111-1111-111111111111','analytics', true);
select is(
  (select count(*)::int from public.consents),
  1, 'Kunde 1 sieht eigene Einwilligung');
reset role;

-- Kunde 2 sieht KEINEN Preis von Kunde 1 ----------------------------------
set local role authenticated;
set local "request.jwt.claims" = '{"sub":"d2222222-2222-2222-2222-222222222222"}';
select is(
  (select count(*)::int from public.customer_prices),
  0, 'Kunde 2 sieht fremde Preise NICHT (RLS)');
reset role;

select * from finish();
rollback;
