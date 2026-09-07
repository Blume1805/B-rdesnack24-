-- Nachweis: die Spende ist 5 % vom Nettopreis des jeweiligen Produkts.
--
-- WARUM ES DIESE DATEI GIBT. Bis zum 07.09.2026 rechnete die Datenbank mit
-- purchase_donation(total_gross) -- also aus dem Bruttobetrag des ganzen
-- Kaufs und mit fest unterstellten 7 % Umsatzsteuer. Bei Getraenken (19 %)
-- ergab das einen zu hohen Nettobetrag und damit eine zu hohe Spende.
-- Auffallen konnte das niemandem: es gab keinen Test, der zwei Steuersaetze
-- in einem Kauf zusammengebracht haette. Jetzt gibt es einen.
--
-- Laeuft ausschliesslich gegen die Replik.
\set ON_ERROR_STOP on
\pset pager off

begin;

-- Pruefdaten. Ein Snack zu 7 % und ein Getraenk zu 19 % in EINEM Kauf --
-- genau die Mischung, an der die alte Rechnung auseinanderfiel.
create temporary table pruef_ids (schluessel text primary key, wert uuid);

do $$
declare
  v_kunde   uuid := gen_random_uuid();
  v_snack   uuid;
  v_drink   uuid;
  v_kauf    uuid;
  v_kauf2   uuid;
begin
  insert into auth.users (id, instance_id, aud, role, email,
                          encrypted_password, created_at, updated_at)
       values (v_kunde, '00000000-0000-0000-0000-000000000000',
               'authenticated', 'authenticated',
               'spendenprobe@example.invalid', 'x', now(), now());

  -- Profil und Kundensatz legt der Trigger an auth.users selbst an; hier
  -- wird nur nachgezogen, was der Test braucht. Der Wachhund-Trigger auf
  -- profiles weist ein Rollen-Update von Hand ab, deshalb kurz aus.
  alter table public.profiles disable trigger user;
  update public.profiles set role = 'customer', status = 'active'
   where id = v_kunde;
  alter table public.profiles enable trigger user;
  insert into public.customers (id) values (v_kunde) on conflict do nothing;

  insert into public.products (sku, name, category, tax_rate, status, list_price_net)
       values ('PRUEF-SN-1', 'Pruef-Snack', 'Snacks', 7.0, 'active', 1.00)
    returning id into v_snack;
  -- Getraenke brauchen eine Unterkategorie (products_subcategory_only_drinks).
  insert into public.products (sku, name, category, subcategory, tax_rate,
                               status, list_price_net)
       values ('PRUEF-DR-1', 'Pruef-Getraenk', 'Getränke', 'Kaltgetränke',
               19.0, 'active', 2.00)
    returning id into v_drink;

  -- Kauf A: 1 x Snack 2,00 brutto (7 %) + 1 x Getraenk 2,50 brutto (19 %)
  insert into public.purchases (customer_id, total_gross, purchased_at)
       values (v_kunde, 4.50, now()) returning id into v_kauf;
  insert into public.purchase_items (purchase_id, product_id, product_label, quantity, unit_price)
       values (v_kauf, v_snack, 'Pruef-Snack', 1, 2.00),
              (v_kauf, v_drink, 'Pruef-Getraenk', 1, 2.50);

  -- Kauf B: derselbe Bruttobetrag, aber OHNE Positionen (Automatenimport).
  insert into public.purchases (customer_id, total_gross, purchased_at)
       values (v_kunde, 4.50, now()) returning id into v_kauf2;

  insert into pruef_ids values
    ('kunde', v_kunde), ('kauf_gemischt', v_kauf), ('kauf_ohne_posten', v_kauf2);
end $$;

\echo '=== T1  Nettobetrag je Position: 2,00/1,07 + 2,50/1,19 = 1,87 + 2,10 = 3,97 ==='
select pruef.wahrheit($$
  select public.purchase_net_items(
           (select wert from pruef_ids where schluessel='kauf_gemischt'), 4.50)::text
$$) as t1_erwartet_3_97;

\echo '=== T2  Spende = 5 % davon = 0,20 ==='
select pruef.wahrheit($$
  select public.purchase_donation_for(
           (select wert from pruef_ids where schluessel='kauf_gemischt'), 4.50)::text
$$) as t2_erwartet_0_20;

\echo '=== T3  Die alte Rechnung kam auf mehr: 4,50/1,07 * 5 % = 0,21 ==='
select pruef.wahrheit($$
  select public.purchase_donation(4.50)::text
$$) as t3_erwartet_0_21;

\echo '=== T4  GEGENPROBE Kauf ohne Positionen faellt auf die alte Rechnung zurueck ==='
select pruef.wahrheit($$
  select (public.purchase_donation_for(
            (select wert from pruef_ids where schluessel='kauf_ohne_posten'), 4.50)
          = public.purchase_donation(4.50))::text
$$) as t4_erwartet_true;

\echo '=== T5  GEGENPROBE reiner 7-%-Kauf aendert sich nicht ==='
-- Die Umstellung darf nicht pauschal alles verschieben. Bei einem Kauf, der
-- nur 7-%-Ware enthaelt, muss dasselbe herauskommen wie vorher.
select pruef.wahrheit($$
  with k as (
    insert into public.purchases (customer_id, total_gross, purchased_at)
    select wert, 2.00, now() from pruef_ids where schluessel='kunde'
    returning id
  ), p as (
    insert into public.purchase_items (purchase_id, product_id, quantity, unit_price)
    select k.id, (select id from public.products where sku='PRUEF-SN-1'), 1, 2.00
    from k returning purchase_id
  )
  select (public.purchase_donation_for((select purchase_id from p), 2.00)
          = public.purchase_donation(2.00))::text
$$) as t5_erwartet_true;

\echo '=== T6  GEGENPROBE unbekanntes Produkt: Rueckfall auf 7 %, nicht auf 0 ==='
select pruef.wahrheit($$
  with k as (
    insert into public.purchases (customer_id, total_gross, purchased_at)
    select wert, 2.00, now() from pruef_ids where schluessel='kunde'
    returning id
  ), p as (
    insert into public.purchase_items (purchase_id, product_id, product_label, quantity, unit_price)
    select k.id, null, 'Import ohne Produktbezug', 1, 2.00 from k
    returning purchase_id
  )
  select public.purchase_donation_for((select purchase_id from p), 2.00)::text
$$) as t6_erwartet_0_09;

\echo '=== T7  Die drei Spendenzwecke aus dem Seed sind weg (erwartet: 0) ==='
select pruef.wahrheit($$
  select count(*)::text from public.donation_causes
   where deleted_at is null
     and title in ('Tafel Magdeburg','Kinderhospiz Magdeburger Elbland','Feuerwehr Sülzetal')
$$) as t7_erwartet_0;

\echo '=== T8  GEGENPROBE archiviert, nicht geloescht -- die Zeilen sind noch da ==='
select pruef.wahrheit($$
  select count(*)::text from public.donation_causes
   where title in ('Tafel Magdeburg','Kinderhospiz Magdeburger Elbland','Feuerwehr Sülzetal')
$$) as t8_erwartet_3;

\echo '=== T9  Keine Nachricht behauptet mehr einen laufenden Betrieb (erwartet: 0) ==='
select pruef.wahrheit($$
  select count(*)::text from public.news_articles
   where is_published
     and title in ('Neuer Automat am Bahnhof Osterweddingen',
                   '5 % für den guten Zweck',
                   'Sommer-Sortiment ist da')
$$) as t9_erwartet_0;

rollback;
