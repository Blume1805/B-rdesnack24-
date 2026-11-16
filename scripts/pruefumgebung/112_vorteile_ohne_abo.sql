-- Nachweis: Vorteile ohne Abo (Migration 20261103100000_vorteile_ohne_abo,
-- COMPLIANCE V-018-a).
--
-- Geprüft am gespeicherten Zustand und an den Rechten, nicht an der Absicht:
--   A  Gate: registriertes Konto ja, kein Konto nein, Abo-Auskunft bleibt wahr
--   B  die fünf Vorteile für ein Konto ohne Abo: Coupon, Preis, Kundenkarte,
--      Anzeige, Treuebonus
--   C  Abo ist nicht mehr abschließbar
--   D  Gegenprobe: Schalter aus → Abo-Gating wieder da
--   E  Isolation und Rechte bleiben
--   F  Kontolöschung mit Treuebonus scheitert nicht mehr am Fremdschlüssel
--
-- Läuft gegen die lokale Prüfumgebung, nie gegen die Produktion. Wiederholbar.
\set ON_ERROR_STOP on
\pset pager off

\set ohneabo '\'66666666-6666-4666-8666-666666666112\''
\set fremd   '\'22222222-2222-2222-2222-222222222222\''
\set maschine '\'cccc0000-0000-4000-8000-000000000112\''

create temporary table vorteil_ergebnis (fall text, gemessen text, erwartet text, ok boolean);

insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values (:ohneabo, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
        'ohne-abo-112@test.invalid', 'x', now(), now())
on conflict (id) do nothing;
update public.profiles set birth_date = '1990-01-01' where id = :ohneabo and birth_date is null;

insert into public.machines (id, code, name) values (:maschine, 'VORTEIL-M1', 'Vorteil-Prüfautomat')
on conflict (id) do nothing;
select id as cola from public.products where sku = 'BS-004' \gset
insert into public.machine_slots (machine_id, slot_code, product_id, unit_price_net, capacity)
select :maschine, 'V1', :'cola', 1.7227, 10
 where not exists (select 1 from public.machine_slots where machine_id = :maschine and slot_code = 'V1');

insert into public.offers (title, kind, valid_from, valid_to, status)
values ('Vorteil-Prüfcoupon', 'special', current_date, current_date + 7, 'active')
returning id as coupon \gset
insert into public.offers (title, kind, valid_from, valid_to, status)
values ('Vorteil-Prüfcoupon 2', 'special', current_date, current_date + 7, 'active')
returning id as coupon2 \gset

-- ── A Gate ──────────────────────────────────────────────────────────────
insert into vorteil_ergebnis
select 'A1 Schalter an', app.benefits_free_for_all()::text, 'true', app.benefits_free_for_all();
insert into vorteil_ergebnis
select 'A2 Konto ohne Abo hat Vorteile', app.has_app_benefits(:ohneabo)::text, 'true', app.has_app_benefits(:ohneabo);
insert into vorteil_ergebnis
select 'A3 Abo-Auskunft bleibt wahr', app.has_subscription(:ohneabo)::text, 'false', not app.has_subscription(:ohneabo);
insert into vorteil_ergebnis
select 'A4 ohne Anmeldung keine Vorteile', coalesce(app.has_app_benefits(null)::text, '<null>'), 'false',
       app.has_app_benefits(null) is false;
insert into vorteil_ergebnis
select 'A5 unbekannte Kennung keine Vorteile', app.has_app_benefits(gen_random_uuid())::text, 'false',
       not app.has_app_benefits(gen_random_uuid());

-- ── B Die fünf Vorteile, Konto ohne Abo ─────────────────────────────────
insert into vorteil_ergebnis
select 'B1 Coupon aktivieren', r || ' / gespeichert ' || n, 'ROWS:1 / gespeichert 1',
       r = 'ROWS:1' and n = '1'
  from (select pruef.schreibe(format('select public.activate_offer(%L::uuid)', :'coupon'), :ohneabo) as r) a,
       lateral (select pruef.wahrheit(format(
         'select count(*)::text from public.offer_activations where customer_id = %L and offer_id = %L',
         :ohneabo, :'coupon')) as n) b;

insert into vorteil_ergebnis
select 'B2 Dauerrabatt im Kundenpreis', r, '5', r = '5'
  from (select pruef.lies(format(
          'select dauerrabatt_prozent::int::text from public.kundenpreis(%L::uuid, %L::uuid, %L::uuid)',
          :maschine, :'cola', :ohneabo), :ohneabo) as r) x;

select pruef.lies('select public.my_customer_card()', :ohneabo) as karte \gset
insert into vorteil_ergebnis
select 'B3 Kundenkarte am Automaten', coalesce(discount_percent::text, '<keine Zeile>'), '5', discount_percent = 5
  from (select 1) d left join public.card_entitlements(:'karte') on true;

insert into vorteil_ergebnis
select 'B4 Anzeige: Vorteil ja, Abo nein', r, '{"active": false, "benefits": true, "discount_percent": 5}',
       r::jsonb @> '{"active": false, "benefits": true, "discount_percent": 5}'
  from (select pruef.lies('select public.my_subscription_benefits()::text', :ohneabo) as r) x;

insert into public.purchases (customer_id, total_gross, source)
values (:ohneabo, 25.00, 'manual');
-- Der Kauf löst die Vergabe selbst aus (Trigger). Ein zweiter Aufruf darf
-- nichts doppelt vergeben.
insert into vorteil_ergebnis
select 'B5 Treuebonus ohne Abo, nicht doppelt', g || ' Nachweise / zweiter Lauf ' || n, 'mindestens 1 / zweiter Lauf 0',
       g::int >= 1 and n = 0
  from (select pruef.wahrheit(format(
         'select count(*)::text from public.loyalty_bonus_grants where customer_id = %L', :ohneabo)) as g) b,
       lateral (select app.grant_loyalty_bonuses(:ohneabo) as n) a;

-- ── C Abo nicht mehr abschließbar ───────────────────────────────────────
insert into vorteil_ergebnis
select 'C1 Monat und Jahr nicht angeboten',
       app.abo_wird_angeboten('monthly')::text || ' / ' || app.abo_wird_angeboten('yearly')::text,
       'false / false',
       not app.abo_wird_angeboten('monthly') and not app.abo_wird_angeboten('yearly');
insert into vorteil_ergebnis
select 'C2 Monat und Jahr nicht wählbar', coalesce(string_agg(plan, ','), '(keins)'), '(keins)', count(*) = 0
  from public.abo_angebote() where waehlbar and plan in ('monthly', 'yearly');
insert into vorteil_ergebnis
select 'C3 Abschluss abgewiesen', r || ' / Abos ' || n, 'ERR / Abos 0', r like 'ERR:%' and n = '0'
  from (select pruef.schreibe('select public.choose_subscription_plan(''monthly'', true, true)', :ohneabo) as r) a,
       lateral (select pruef.wahrheit(format(
         'select count(*)::text from public.customer_subscriptions where customer_id = %L', :ohneabo)) as n) b;

-- ── D Gegenprobe: Schalter aus ──────────────────────────────────────────
begin;
create or replace function app.benefits_free_for_all() returns boolean language sql immutable as $$ select false $$;
select app.has_app_benefits(:ohneabo) as aus_vorteil,
       pruef.schreibe(format('select public.activate_offer(%L::uuid)', :'coupon2'), :ohneabo) as aus_coupon,
       pruef.lies(format(
         'select dauerrabatt_prozent::int::text from public.kundenpreis(%L::uuid, %L::uuid, %L::uuid)',
         :maschine, :'cola', :ohneabo), :ohneabo) as aus_rabatt
\gset
rollback;
insert into vorteil_ergebnis
select 'D1 Schalter aus: Gating wieder da', :'aus_vorteil' || ' / ' || :'aus_coupon' || ' / Rabatt ' || :'aus_rabatt',
       'f / ERR:P0001 / Rabatt 0',
       :'aus_vorteil' = 'f' and :'aus_coupon' = 'ERR:P0001' and :'aus_rabatt' = '0';
insert into vorteil_ergebnis
select 'D2 nach Rollback wieder an', app.benefits_free_for_all()::text, 'true', app.benefits_free_for_all();

-- ── E Isolation und Rechte ──────────────────────────────────────────────
insert into vorteil_ergebnis
select 'E1 fremder Kundenpreis gesperrt', r, 'ERR:42501', r = 'ERR:42501'
  from (select pruef.lies(format(
          'select endpreis::text from public.kundenpreis(%L::uuid, %L::uuid, %L::uuid)',
          :maschine, :'cola', :ohneabo), :fremd) as r) x;
insert into vorteil_ergebnis
select 'E2 Gate nicht direkt aufrufbar (authenticated)', r, 'ERR:42501', r = 'ERR:42501'
  from (select pruef.lies(format('select app.has_app_benefits(%L::uuid)::text', :ohneabo), :ohneabo) as r) x;
insert into vorteil_ergebnis
select 'E3 Kundenkarte nur für den Automaten', r, 'ERR:42501', r = 'ERR:42501'
  from (select pruef.lies(format('select discount_percent::text from public.card_entitlements(%L)', :'karte'), :ohneabo) as r) x;
insert into vorteil_ergebnis
select 'E4 Coupon nur für sich selbst', n, '0', n = '0'
  from (select pruef.wahrheit(format(
          'select count(*)::text from public.offer_activations where customer_id = %L and offer_id = %L',
          :fremd, :'coupon')) as n) x;

-- ── F Löschung mit Treuebonus ───────────────────────────────────────────
insert into vorteil_ergebnis
select 'F1 Verweis auf Angebot wird beim Löschen geleert', confdeltype::text, 'n', confdeltype = 'n'
  from pg_constraint where conname = 'loyalty_bonus_grants_offer_id_fkey';
select pruef.wahrheit(format(
  'select offer_id::text from public.loyalty_bonus_grants where customer_id = %L and offer_id is not null limit 1',
  :ohneabo)) as bonus_angebot \gset
begin;
delete from public.personal_offers where id = :'bonus_angebot';
select pruef.wahrheit(format(
  'select count(*)::text from public.loyalty_bonus_grants where customer_id = %L and offer_id is null', :ohneabo)) as nachweis_bleibt \gset
rollback;
insert into vorteil_ergebnis
select 'F2 Angebot löschbar, Nachweis bleibt', :'nachweis_bleibt', 'mindestens 1', :'nachweis_bleibt'::int >= 1;

-- ── Ergebnis ────────────────────────────────────────────────────────────
select fall, gemessen, erwartet, case when ok then 'OK' else 'FEHLER' end as urteil
  from vorteil_ergebnis order by fall;

do $$
declare n integer;
begin
  select count(*) into n from vorteil_ergebnis where ok is not true;
  if n > 0 then
    raise exception '112_vorteile_ohne_abo: % Fälle FEHLER', n;
  end if;
  raise notice '112_vorteile_ohne_abo: alle % Fälle OK', (select count(*) from vorteil_ergebnis);
end $$;
