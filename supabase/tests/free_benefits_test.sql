-- ============================================================================
-- pgTAP: Kostenlose App — Vorteile für alle registrierten Kunden (0065).
-- Ausführung: supabase test db
--
-- Hintergrund: Migration 0048 verlangte für Coupons, persönliche Angebote und
-- Treue-Meilensteine eine Zeile in customer_subscriptions. Seit dem Beschluss
-- vom 2026-09-16 bewirbt die App diese Vorteile für jedes Konto. Ohne 0065
-- würde der Server verweigern, was die App verspricht — dieser Test hält den
-- Zusammenhang fest, damit er nicht unbemerkt zurückfällt.
-- ============================================================================
begin;
select plan(7);

-- Ein Kunde OHNE Abo.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values ('e1111111-1111-1111-1111-111111111111','00000000-0000-0000-0000-000000000000',
        'authenticated','authenticated','frei@test.de','x', now(), now());

-- Produkt und ein persönliches Angebot für diesen Kunden.
insert into public.products(id, name, status, list_price_net)
values ('e2222222-2222-2222-2222-222222222222','Testriegel','active', 2.00)
on conflict (id) do nothing;

insert into public.personal_offers(
  id, customer_id, product_id, title, regular_price_net, offer_price_net,
  discount_percent, redemption_code, valid_from, valid_to, source)
values ('e3333333-3333-3333-3333-333333333333',
        'e1111111-1111-1111-1111-111111111111',
        'e2222222-2222-2222-2222-222222222222', 'Testangebot',
        2.00, 1.90, 5.0, '123456', now(), now() + interval '14 days', 'base');

-- Umsatz über der ersten Meilensteinschwelle (500 Punkte = 5,00 €).
insert into public.purchases(customer_id, total_gross, purchased_at)
values ('e1111111-1111-1111-1111-111111111111', 25.00, now());

-- ── 1) Der Schalter steht auf „frei" ─────────────────────────────────────
select is(app.benefits_free_for_all(), true,
  'benefits_free_for_all() ist gesetzt (Beschluss 2026-09-16)');

-- ── 2) Das Gate greift ohne Abo ──────────────────────────────────────────
select is(app.has_app_benefits('e1111111-1111-1111-1111-111111111111'), true,
  'Kunde ohne Abo hat Anspruch auf die App-Vorteile');

-- ── 3) has_subscription bleibt ehrlich ───────────────────────────────────
-- Sie darf NICHT mitverbogen werden: Sie beantwortet weiterhin die Frage,
-- ob ein Abo gewählt wurde — nur hängen die Vorteile nicht mehr daran.
select is(app.has_subscription('e1111111-1111-1111-1111-111111111111'), false,
  'has_subscription() meldet weiterhin wahrheitsgemäß „kein Abo"');

set local role authenticated;
set local request.jwt.claim.sub = 'e1111111-1111-1111-1111-111111111111';

-- ── 4) Persönliches Angebot lässt sich aktivieren ────────────────────────
select isnt(
  (select activated_at from public.activate_personal_offer(
     'e3333333-3333-3333-3333-333333333333')),
  null,
  'persönliches Angebot ist ohne Abo aktivierbar');

-- ── 5) Treue-Meilensteine werden vergeben ────────────────────────────────
-- Meilensteine haengen am Monatsumsatz (1 Punkt = 1 Cent); die erste Stufe
-- liegt bei 500 Punkten = 5,00 EUR. Vergeben werden sie vom Trigger
-- trg_purchase_loyalty beim Einbuchen eines Kaufs, nicht durch einen Aufruf
-- aus der App.
--
-- Bis zum 17.09.2026 pruefte dieser Test den Rueckgabewert eines zweiten,
-- eigenen Aufrufs von app.grant_loyalty_bonuses() — der ist nach dem Trigger
-- korrekterweise 0, weil die Stufe bereits vergeben ist. Der Test lief nie
-- (pgTAP war nirgends eingerichtet), deshalb fiel es nicht auf. Geprueft wird
-- jetzt das Ergebnis statt des Rueckgabewerts: Hat der Kunde ohne Abo einen
-- Meilenstein erhalten?
reset role;
insert into public.purchases(customer_id, total_gross, purchased_at, source, payment_method)
values ('e1111111-1111-1111-1111-111111111111', 9.90,
        date_trunc('month', current_date) + interval '1 day', 'manual', 'card_ec');

select cmp_ok(
  (select count(*)::int from public.loyalty_bonus_grants
    where customer_id = 'e1111111-1111-1111-1111-111111111111'
      and month_start = date_trunc('month', current_date)::date),
  '>', 0,
  'Treue-Meilensteine werden ohne Abo vergeben');

-- ── 6) Kein Fremdzugriff: fremdes Angebot bleibt unberührt ───────────────
set local role authenticated;
set local request.jwt.claim.sub = 'e9999999-9999-9999-9999-999999999999';
select is(
  (select id from public.activate_personal_offer(
     'e3333333-3333-3333-3333-333333333333')),
  null,
  'fremdes Angebot lässt sich nicht aktivieren (keine IDOR-Regression)');

-- ── 7) Kein Umsatz, keine Boni ───────────────────────────────────────────
reset role;
select is(
  app.grant_loyalty_bonuses('e9999999-9999-9999-9999-999999999999'), 0,
  'ohne eigene Käufe gibt es keine Meilenstein-Coupons');

select * from finish();
rollback;
