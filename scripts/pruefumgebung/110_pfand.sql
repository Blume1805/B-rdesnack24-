-- Nachweis: Pfand getrennt vom Preis (Migration 20260927200000_pfand_getrennt,
-- COMPLIANCE V-016).
--
-- Geprüft wird, was der Kunde bezahlt, was er angezeigt bekommt, worauf der
-- Rabatt gewährt wird und was in die Spendenbasis eingeht — jeweils am
-- gespeicherten Zustand, nicht an der Rückgabe allein:
--   A  Preis am Automaten: Rabatte nur auf die Ware, Zahlbetrag = Ware + Pfand
--   B  Freigabe und Automatenkauf: Pfand wird serverseitig mitgeführt
--   C  Kaufpositionen: Pfand aus den Stammdaten, nie vom Aufrufer
--   D  Anzeige: Pfand neben dem Preis in allen Katalog-Schnittstellen
--   E  Sicherheit: kein Kunde kann den Pfand setzen oder Fremdes sehen
--
-- Läuft gegen die lokale Prüfumgebung, nie gegen die Produktion.
-- Wiederholbar: Rohereignisse bekommen je Lauf einen neuen Schlüssel.
\set ON_ERROR_STOP on
\pset pager off

\set maschine '\'cccc0000-0000-4000-8000-000000000108\''
\set abo      '\'11111111-1111-1111-1111-111111111111\''
\set fremd    '\'22222222-2222-2222-2222-222222222222\''
\set ohne     '\'55555555-5555-5555-5555-555555555555\''

create temporary table pfand_ergebnis (fall text, gemessen text, erwartet text,
                                       ok boolean);

insert into public.machines (id, code, name)
values (:maschine, 'PFAND-M1', 'Pfand-Prüfautomat')
on conflict (id) do nothing;

select id as cola from public.products where sku = 'BS-004' \gset
select id as durst from public.products where sku = 'BS-006' \gset
select id as bifi from public.products where sku = 'BS-047' \gset

delete from public.vend_freigaben where machine_id = :maschine;
delete from public.inventory where machine_id = :maschine;
insert into public.inventory (machine_id, product_id, quantity, expiry_date)
values (:maschine, :'cola', 5, null), (:maschine, :'durst', 5, null);

-- ── A  Preis am Automaten ──────────────────────────────────────────────
insert into pfand_ergebnis
select 'A1 Stammdaten Cola', deposit || ' / ' || round(list_price_net * (1 + tax_rate / 100), 2),
       '0.25 / 2.05', deposit = 0.25 and round(list_price_net * (1 + tax_rate / 100), 2) = 2.05
  from public.products where id = :'cola';

-- kundenpreis prüft auth.uid(): Die Abfrage läuft mit der Kennung des
-- jeweiligen Kunden, wie aus der App.
select set_config('request.jwt.claims', json_build_object('sub', :ohne)::text, false);
insert into pfand_ergebnis
select 'A2 ohne Abo', endpreis || ' = ' || warenpreis || ' + ' || pfand, '2.30 = 2.05 + 0.25',
       endpreis = 2.30 and warenpreis = 2.05 and pfand = 0.25 and dauerrabatt_betrag = 0
  from public.kundenpreis(:maschine, :'cola', :ohne);

-- Dauerrabatt 5 % auf 2,05 € = 0,10 €. Auf 2,30 € (mit Pfand) wären es
-- 0,12 € gewesen: genau die zwei Cent Rabatt auf den Pfand, die wegfallen.
select set_config('request.jwt.claims', json_build_object('sub', :abo)::text, false);
insert into pfand_ergebnis
select 'A3 mit Abo: Rabatt nur auf Ware', dauerrabatt_betrag || ' / ' || endpreis,
       '0.10 / 2.20', dauerrabatt_betrag = 0.10 and endpreis = 2.20 and pfand = 0.25
  from public.kundenpreis(:maschine, :'cola', :abo);
select set_config('request.jwt.claims', '', false);

update public.inventory set expiry_date = current_date + 7
 where machine_id = :maschine and product_id = :'cola';
insert into pfand_ergebnis
select 'A4 MHD-Abschlag nur auf Ware', brutto || ' + ' || pfand || ' = ' || zahlbetrag,
       '1.64 + 0.25 = 1.89', brutto = 1.64 and pfand = 0.25 and zahlbetrag = 1.89
  from public.automatenpreis(:maschine, :'cola');
update public.inventory set expiry_date = null
 where machine_id = :maschine and product_id = :'cola';

insert into pfand_ergebnis
select 'A5 Karton ohne Pfand', pfand || ' / ' || zahlbetrag, '0.00 / 1.50',
       pfand = 0 and zahlbetrag = brutto and zahlbetrag = 1.50
  from public.automatenpreis(:maschine, :'durst');

-- ── B  Freigabe und Automatenkauf ──────────────────────────────────────
select pruef.lies(format(
  'select code from public.vend_freigabe_anlegen(%L::uuid, %L::uuid)', :maschine, :'cola'),
  :abo) as code \gset

insert into pfand_ergebnis
select 'B1 Freigabe hält Pfand', betrag_brutto || ' / ' || pfand_brutto, '2.20 / 0.25',
       betrag_brutto = 2.20 and pfand_brutto = 0.25
  from public.vend_freigaben
 where machine_id = :maschine and customer_id = :abo and storniert_am is null;

insert into public.terminals (machine_id, hersteller, modell, seriennummer, terminal_kennung)
values (:maschine, 'clevermetrics', 'IM30', 'PFAND-0001', 'PFAND-0001')
on conflict (hersteller, terminal_kennung) do nothing;

select 'pfand-108-' || gen_random_uuid() as schluessel \gset
insert into public.terminal_ereignisse
  (terminal_id, hersteller, terminal_kennung, idempotenz_schluessel, anbieter_lfd_nr, art, nutzlast)
select t.id, 'clevermetrics', 'PFAND-0001', :'schluessel',
       coalesce((select max(anbieter_lfd_nr) from public.terminal_ereignisse
                  where terminal_kennung = 'PFAND-0001'), 0) + 1,
       'verkauf', '{"betrag": 2.20}'::jsonb
  from public.terminals t where t.terminal_kennung = 'PFAND-0001';
select lfd_nr from public.terminal_ereignisse where idempotenz_schluessel = :'schluessel' \gset

-- Wie terminal-webhook: erst einlösen, dann den Kauf anlegen. Der Aufrufer
-- versucht, einen falschen Pfand mitzugeben; gespeichert werden muss der
-- Pfand der Freigabe.
select betrag_brutto as betrag
  from app.vend_freigabe_einloesen(:'code', :maschine, :lfd_nr) \gset
insert into public.purchases (customer_id, machine_id, total_gross, source, source_ref, deposit_gross)
values (:abo, :maschine, :betrag, 'machine', :'schluessel', 9.99)
returning id as kauf \gset

insert into pfand_ergebnis
select 'B2 Kauf: Pfand vom Server, nicht vom Aufrufer', deposit_gross::text, '0.25',
       deposit_gross = 0.25
  from public.purchases where id = :'kauf';

-- Spendenbasis: (2,20 − 0,25) / 1,19 = 1,64. Vorher: 2,20 / 1,07 = 2,06
-- (Pfand drin, und pauschal 7 % statt 19 %).
insert into pfand_ergebnis
select 'B3 Spendenbasis ohne Pfand, Steuersatz des Produkts',
       public.purchase_net_items(:'kauf', 2.20) || ' / ' || public.purchase_donation_for(:'kauf', 2.20),
       '1.64 / 0.08',
       public.purchase_net_items(:'kauf', 2.20) = 1.64
       and public.purchase_donation_for(:'kauf', 2.20) = 0.08;

insert into public.purchases (customer_id, total_gross, source, deposit_gross)
values (:ohne, 3.00, 'manual', 5.00)
returning id as kauf_manuell \gset
insert into pfand_ergebnis
select 'B4 anderer Kauf: kein Pfand erfindbar', deposit_gross::text, '0.00', deposit_gross = 0
  from public.purchases where id = :'kauf_manuell';

-- ── C  Kaufpositionen ─────────────────────────────────────────────────
insert into public.purchases (id, customer_id, total_gross, source)
values (gen_random_uuid(), :abo, 6.25, 'manual')
returning id as kauf_pos \gset
insert into public.purchase_items (purchase_id, product_id, product_label, quantity, unit_price, unit_deposit)
values (:'kauf_pos', :'cola',  'Coca-Cola 0,5 l', 2, 2.30, 0),
       (:'kauf_pos', :'bifi',  'BiFi Carazza',    1, 1.65, 0.25),
       (:'kauf_pos', :'cola',  'Gutschrift-Rest', 1, 0.10, null);

insert into pfand_ergebnis
select 'C1 Position: Pfand aus Stammdaten', string_agg(unit_deposit::text, ' / ' order by unit_price desc),
       '0.25 / 0.00 / 0.10',
       string_agg(unit_deposit::text, ' / ' order by unit_price desc) = '0.25 / 0.00 / 0.10'
  from public.purchase_items where purchase_id = :'kauf_pos';

-- 2 × 2,05 / 1,19 = 3,45; 1,65 / 1,07 = 1,54; (0,10 − 0,10) = 0
insert into pfand_ergebnis
select 'C2 Spendenbasis je Position ohne Pfand', public.purchase_net_items(:'kauf_pos', 6.25)::text,
       (3.45 + round(1.65 / (1 + (select tax_rate from public.products where id = :'bifi') / 100), 2))::text,
       public.purchase_net_items(:'kauf_pos', 6.25)
         = 3.45 + round(1.65 / (1 + (select tax_rate from public.products where id = :'bifi') / 100), 2);

-- ── D  Anzeige ────────────────────────────────────────────────────────
insert into pfand_ergebnis
select 'D1 product_detail', pruef.lies(format(
         'select deposit::text from public.product_detail(%L::uuid)', :'cola'), :ohne),
       '0.25', pruef.lies(format(
         'select deposit::text from public.product_detail(%L::uuid)', :'cola'), :ohne) = '0.25';

insert into pfand_ergebnis
select 'D2 search_products', pruef.lies(
         'select deposit::text from public.search_products(''Coca-Cola 0,5'') limit 1', :ohne),
       '0.25', pruef.lies(
         'select deposit::text from public.search_products(''Coca-Cola 0,5'') limit 1', :ohne) = '0.25';

insert into pfand_ergebnis
select 'D3 top_products_by_category', pruef.lies(
         'select count(*)::text from public.top_products_by_category(''Getränke'', 50) where deposit = 0.25',
         :ohne), '18', pruef.lies(
         'select count(*)::text from public.top_products_by_category(''Getränke'', 50) where deposit = 0.25',
         :ohne) = '18';

insert into pfand_ergebnis
select 'D4 my_receipts: Pfand je Kauf', pruef.lies(format(
         'select e->>''deposit_total'' from jsonb_array_elements(public.my_receipts()) e where e->>''id'' = %L',
         :'kauf'), :abo),
       '0.25', pruef.lies(format(
         'select e->>''deposit_total'' from jsonb_array_elements(public.my_receipts()) e where e->>''id'' = %L',
         :'kauf'), :abo) = '0.25';

-- machine_stock liest inventory mit den Rechten des Aufrufers; inventory ist
-- nur intern lesbar (inventory_read: is_internal()). Geprüft wird deshalb
-- als Gesellschafter.
\set intern '\'33333333-3333-3333-3333-333333333333\''
insert into pfand_ergebnis
select 'D5 machine_stock (security_invoker, intern)', r, '0.25', r = '0.25'
  from (select pruef.lies(format(
          'select deposit::text from public.machine_stock where machine_id = %L::uuid and product_id = %L::uuid',
          :maschine, :'cola'), :intern) as r) x;

-- ── E  Sicherheit ─────────────────────────────────────────────────────
insert into pfand_ergebnis
select 'E1 Kunde setzt Pfand am Produkt', r, 'ERR oder ROWS:0', r like 'ERR:%' or r = 'ROWS:0'
  from (select pruef.schreibe(format(
          'update public.products set deposit = 0 where id = %L::uuid', :'cola'), :abo) as r) x;
insert into pfand_ergebnis
select 'E1b Wahrheit danach', deposit::text, '0.25', deposit = 0.25
  from public.products where id = :'cola';

insert into pfand_ergebnis
select 'E2 Kunde legt Kaufposition an', r, 'ERR oder ROWS:0', r like 'ERR:%' or r = 'ROWS:0'
  from (select pruef.schreibe(format(
          'insert into public.purchase_items (purchase_id, product_id, quantity, unit_price) values (%L::uuid, %L::uuid, 1, 2.30)',
          :'kauf_pos', :'cola'), :abo) as r) x;

insert into pfand_ergebnis
select 'E3 fremder Kundenpreis', r, 'ERR:42501', r = 'ERR:42501'
  from (select pruef.lies(format(
          'select endpreis::text from public.kundenpreis(%L::uuid, %L::uuid, %L::uuid)',
          :maschine, :'cola', :abo), :fremd) as r) x;

insert into pfand_ergebnis
select 'E4 fremde Belege', r, '0', r = '0'
  from (select pruef.lies(format(
          'select count(*)::text from jsonb_array_elements(public.my_receipts()) e where e->>''id'' = %L',
          :'kauf'), :fremd) as r) x;

insert into pfand_ergebnis
select 'E5 anon ohne Ausführungsrecht', string_agg(f, ', '), '(keine)', count(*) = 0
  from unnest(array['public.automatenpreis(uuid,uuid)', 'public.kundenpreis(uuid,uuid,uuid)',
                    'public.product_detail(uuid)', 'public.search_products(text,integer,text,text)',
                    'public.top_products_by_category(text,integer)', 'public.active_bundles()',
                    'app.pfand_je_kauf()', 'app.pfand_je_position()']) f
 where has_function_privilege('anon', f, 'EXECUTE')
    or has_function_privilege('public', f, 'EXECUTE');

insert into pfand_ergebnis
select 'E6 Kunde ruft Pfand-Trigger nicht direkt', string_agg(f, ', '), '(keine)', count(*) = 0
  from unnest(array['app.pfand_je_kauf()', 'app.pfand_je_position()']) f
 where has_function_privilege('authenticated', f, 'EXECUTE');

-- ── Ergebnis ──────────────────────────────────────────────────────────
select fall, gemessen, erwartet, case when ok then 'OK' else 'FEHLER' end as urteil
  from pfand_ergebnis order by fall;

do $$
declare n integer;
begin
  select count(*) into n from pfand_ergebnis where ok is not true;
  if n > 0 then
    raise exception '110_pfand: % Fälle FEHLER', n;
  end if;
  raise notice '110_pfand: alle % Fälle OK', (select count(*) from pfand_ergebnis);
end $$;
