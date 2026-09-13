-- Ein Kundenkauf schreibt den Bestand fort.
--
-- Der Kern ist nicht, dass gebucht wird, sondern dass RICHTIG und GENAU
-- EINMAL gebucht wird und dass eine nicht buchbare Position sichtbar bleibt.
-- Läuft ausschließlich gegen die Replik.
\set ON_ERROR_STOP on
\pset pager off

begin;

-- Ausgangslage
delete from public.bestandsabgang_luecken;
delete from public.inventory_movements where source_ref like 'pi-pruef%' or reason like 'Verkauf aus Kauf%';
delete from public.purchase_items where purchase_id in (select id from public.purchases where source_ref like 'pruef-%');
delete from public.purchases where source_ref like 'pruef-%';

-- Vorhandener Automat und vorhandenes Produkt aus den Pruefdaten. Bewusst
-- keine eigenen anlegen: die Tabellen tragen Pflichtspalten, die sich
-- aendern koennen, und ein Test soll nicht am Stammdatenschema scheitern,
-- wenn er den Bestandsabgang prueft.
delete from public.inventory
 where machine_id = '3b9ac0eb-3ca7-44c1-885e-db0a678f3549' and product_id = 'e0000000-0000-0000-0000-00000000000a';
delete from public.inventory_movements
 where machine_id = '3b9ac0eb-3ca7-44c1-885e-db0a678f3549' and product_id = 'e0000000-0000-0000-0000-00000000000a';

-- Anfangsbestand über eine Zugangsbewegung.
insert into public.inventory_movements
  (machine_id, product_id, type, quantity_delta, source, occurred_at, unit_cost)
values
  ('3b9ac0eb-3ca7-44c1-885e-db0a678f3549','e0000000-0000-0000-0000-00000000000a',
   'refill', 20, 'manual', now() - interval '1 day', 0.55);

\echo '=== T1  Ausgangsbestand steht bei 20 ==='
select pruef.wahrheit($$
  select quantity::text from public.inventory
   where machine_id='3b9ac0eb-3ca7-44c1-885e-db0a678f3549'
     and product_id='e0000000-0000-0000-0000-00000000000a'
$$) as t1_bestand;

-- Ein Kauf mit drei Stück.
insert into public.purchases (id, customer_id, machine_id, total_gross, purchased_at, source, source_ref)
values ('cc000000-0000-0000-0000-0000000000c1','11111111-1111-1111-1111-111111111111',
        '3b9ac0eb-3ca7-44c1-885e-db0a678f3549', 3.21, now(), 'nayax', 'pruef-1');
insert into public.purchase_items (id, purchase_id, product_id, product_label, quantity, unit_price)
values ('dd000000-0000-0000-0000-0000000000d1','cc000000-0000-0000-0000-0000000000c1',
        'e0000000-0000-0000-0000-00000000000a','Prüfriegel', 3, 1.07);

\echo '=== T2  Der Kauf hat eine Verkaufsbewegung erzeugt ==='
select pruef.wahrheit($$
  select (type::text || ' ' || quantity_delta::text || ' ' || source::text)
    from public.inventory_movements
   where source_ref = 'dd000000-0000-0000-0000-0000000000d1'
$$) as t2_bewegung;

\echo '=== T3  Der Bestand ist um genau drei gesunken ==='
select pruef.wahrheit($$
  select quantity::text from public.inventory
   where machine_id='3b9ac0eb-3ca7-44c1-885e-db0a678f3549'
     and product_id='e0000000-0000-0000-0000-00000000000a'
$$) as t3_bestand_17;

\echo '=== T4  Die Bewegung trägt den Kaufzeitpunkt, nicht den Buchungszeitpunkt ==='
select pruef.wahrheit($$
  select (m.occurred_at = p.purchased_at)::text
    from public.inventory_movements m
    join public.purchases p on p.id = 'cc000000-0000-0000-0000-0000000000c1'
   where m.source_ref = 'dd000000-0000-0000-0000-0000000000d1'
$$) as t4_zeitpunkt;

\echo '=== T5  Bei Verkauf kein Einkaufspreis an der Bewegung ==='
select pruef.wahrheit($$
  select (unit_cost is null)::text from public.inventory_movements
   where source_ref = 'dd000000-0000-0000-0000-0000000000d1'
$$) as t5_kein_ek;

\echo '=== T6  KERNGEGENPROBE: dieselbe Position lässt sich nicht zweimal buchen ==='
do $$
begin
  insert into public.inventory_movements
    (machine_id, product_id, type, quantity_delta, source, source_ref, occurred_at)
  values ('3b9ac0eb-3ca7-44c1-885e-db0a678f3549','e0000000-0000-0000-0000-00000000000a',
          'sale', -3, 'verkauf', 'dd000000-0000-0000-0000-0000000000d1', now());
  raise exception 'T6 FEHLGESCHLAGEN: Doppelbuchung wurde angenommen';
exception when unique_violation then
  raise notice 'T6 ok: Doppelbuchung abgewiesen (%)', sqlstate;
end $$;

\echo '=== T7  Der Bestand ist nach dem Doppelversuch unverändert ==='
select pruef.wahrheit($$
  select quantity::text from public.inventory
   where machine_id='3b9ac0eb-3ca7-44c1-885e-db0a678f3549'
     and product_id='e0000000-0000-0000-0000-00000000000a'
$$) as t7_immer_noch_17;

\echo '=== T8  Kauf ohne Automat: keine Bewegung, aber ein Lückeneintrag ==='
insert into public.purchases (id, customer_id, machine_id, total_gross, purchased_at, source, source_ref)
values ('cc000000-0000-0000-0000-0000000000c2','11111111-1111-1111-1111-111111111111',
        null, 1.07, now(), 'import', 'pruef-2');
insert into public.purchase_items (id, purchase_id, product_id, product_label, quantity, unit_price)
values ('dd000000-0000-0000-0000-0000000000d2','cc000000-0000-0000-0000-0000000000c2',
        'e0000000-0000-0000-0000-00000000000a','Prüfriegel', 1, 1.07);

select pruef.wahrheit($$
  select ((select count(*) from public.inventory_movements
            where source_ref = 'dd000000-0000-0000-0000-0000000000d2') = 0
      and (select grund from public.bestandsabgang_luecken
            where purchase_item_id = 'dd000000-0000-0000-0000-0000000000d2')
          = 'Kauf ohne Automat')::text
$$) as t8_luecke_automat;

\echo '=== T9  Position ohne Produktbezug: ebenfalls Lücke, eigener Grund ==='
insert into public.purchase_items (id, purchase_id, product_id, product_label, quantity, unit_price)
values ('dd000000-0000-0000-0000-0000000000d3','cc000000-0000-0000-0000-0000000000c1',
        null, 'Unbekannter Artikel', 2, 1.50);

select pruef.wahrheit($$
  select (grund = 'Position ohne Produktbezug')::text
    from public.bestandsabgang_luecken
   where purchase_item_id = 'dd000000-0000-0000-0000-0000000000d3'
$$) as t9_luecke_produkt;

\echo '=== T10 Der Bestand blieb durch die Lücken unberührt ==='
select pruef.wahrheit($$
  select quantity::text from public.inventory
   where machine_id='3b9ac0eb-3ca7-44c1-885e-db0a678f3549'
     and product_id='e0000000-0000-0000-0000-00000000000a'
$$) as t10_immer_noch_17;

\echo '=== T11 Menge null oder negativ erzeugt keine Bewegung und keine Lücke ==='
insert into public.purchase_items (id, purchase_id, product_id, product_label, quantity, unit_price)
values ('dd000000-0000-0000-0000-0000000000d4','cc000000-0000-0000-0000-0000000000c1',
        'e0000000-0000-0000-0000-00000000000a','Gutschriftzeile', 0, 0.00);

select pruef.wahrheit($$
  select ((select count(*) from public.inventory_movements
            where source_ref = 'dd000000-0000-0000-0000-0000000000d4') = 0
      and (select count(*) from public.bestandsabgang_luecken
            where purchase_item_id = 'dd000000-0000-0000-0000-0000000000d4') = 0)::text
$$) as t11_nullmenge;

\echo '=== T12 Der Verkauf erscheint in der Bestandsauswertung der Gesellschafter ==='
select pruef.lies($$
  select (count(*) > 0)::text from public.inventory_fifo_movements(
    (now() - interval '2 days')::timestamptz, now()::timestamptz)
   where type = 'sale'
$$, '33333333-3333-3333-3333-333333333333'::uuid) as t12_gesellschafter_sieht_verkauf;

\echo '=== T13 Gegenprobe: ein Kunde sieht die Bestandsauswertung nicht ==='
select pruef.lies($$
  select public.inventory_fifo_movements(
    (now() - interval '2 days')::timestamptz, now()::timestamptz)::text
$$, '11111111-1111-1111-1111-111111111111'::uuid) as t13_kunde_abgewiesen;

\echo '=== T14 Die offenen Lücken sind für Gesellschafter abrufbar ==='
select pruef.lies($$
  select jsonb_array_length(public.bestandsluecken_offen())::text
$$, '33333333-3333-3333-3333-333333333333'::uuid) as t14_zwei_luecken;

\echo '=== T15 Gegenprobe: ein Kunde kommt nicht an die Lücken ==='
select pruef.lies($$
  select public.bestandsluecken_offen()::text
$$, '11111111-1111-1111-1111-111111111111'::uuid) as t15_kunde_keine_luecken;

\echo '=== T16 Gegenprobe: ohne Anmeldung gesperrt (echte Rolle anon) ==='
-- Bewusst pruef.lies und nicht pruef.zaehle: bei einer STABLE-Funktion ohne
-- Zeilenmenge darf der Planer den Aufruf unter count(*) weglassen. lies gibt
-- den Wert zurueck und erzwingt damit die Auswertung.
select pruef.lies('select public.bestandsluecken_offen()::text', null, 'anon')
  as t16_anon_abgewiesen;

\echo '=== T17 Gegenprobe: ein Kunde kommt nicht an die Lückentabelle selbst ==='
select pruef.zaehle('select * from public.bestandsabgang_luecken',
                    '11111111-1111-1111-1111-111111111111'::uuid) as t17_tabelle_zu;

\echo '=== T18 Der Kauf ist auch in den Finanzzahlen angekommen ==='
-- Die andere Haelfte der Kopplung, die es schon gab: dieselbe Buchung muss
-- in beiden Auswertungen auftauchen, sonst stimmt eine von beiden nicht.
select pruef.lies($$
  select ((public.finance_summary((current_date - 1), (current_date + 1))
           ->> 'revenue_net')::numeric > 0)::text
$$, '33333333-3333-3333-3333-333333333333'::uuid) as t18_finanzen_sehen_kauf;

rollback;
