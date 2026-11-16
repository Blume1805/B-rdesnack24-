-- Nachweis: Verfügbarkeit für Kunden (Migration 20260929100000, V-016-d).
--
-- Kunden sehen je Produkt eines aktiven Automaten nur „verfügbar", „bald
-- leer" oder „ausverkauft", dazu Preis und Pfand — nie Stückzahlen. Die
-- Tabelle inventory bleibt für Kunden gesperrt. Geprüft am Ergebnis und an
-- den Rechten, nicht an der Absicht.
--
-- Läuft gegen die lokale Prüfumgebung, nie gegen die Produktion. Wiederholbar.
\set ON_ERROR_STOP on
\pset pager off

\set aktiv   '\'cccc0000-0000-4000-8000-000000000111\''
\set inaktiv '\'cccc0000-0000-4000-8000-000000000112\''
\set kunde   '\'55555555-5555-5555-5555-555555555555\''
\set intern  '\'33333333-3333-3333-3333-333333333333\''

create temporary table verf_ergebnis (fall text, gemessen text, erwartet text, ok boolean);

insert into public.machines (id, code, name, status) values
  (:aktiv,   'VERF-M1', 'Verfügbarkeit aktiv',   'active'),
  (:inaktiv, 'VERF-M2', 'Verfügbarkeit inaktiv', 'inactive')
on conflict (id) do update set status = excluded.status, deleted_at = null;

select id as cola  from public.products where sku = 'BS-004' \gset
select id as durst from public.products where sku = 'BS-006' \gset
select id as bifi  from public.products where sku = 'BS-047' \gset

delete from public.inventory where machine_id in (:aktiv, :inaktiv);
insert into public.inventory (machine_id, product_id, quantity, par_level) values
  (:aktiv, :'cola', 10, 2),
  (:aktiv, :'durst', 1, 2),
  (:aktiv, :'bifi', 0, 2),
  (:inaktiv, :'cola', 10, 2);

-- ── Zustände und Preis ────────────────────────────────────────────────
insert into verf_ergebnis
select 'V1 drei Zustände', r, 'BiFi Carazza=out|Coca-Cola 0,5 l=available|Durstlöscher=low', r = 'BiFi Carazza=out|Coca-Cola 0,5 l=available|Durstlöscher=low'
  from (select pruef.lies(format(
          'select string_agg(product_name || ''='' || availability, ''|'' order by product_name) from public.machine_availability(%L::uuid)',
          :aktiv), :kunde) as r) x;

insert into verf_ergebnis
select 'V2 Preis ohne Pfand, Pfand daneben', r, '2.05/0.25', r = '2.05/0.25'
  from (select pruef.lies(format(
          'select price_gross || ''/'' || deposit from public.machine_availability(%L::uuid) where product_id = %L::uuid',
          :aktiv, :'cola'), :kunde) as r) x;

-- ── Datenminimierung ──────────────────────────────────────────────────
insert into verf_ergebnis
select 'V3 keine Stückzahlen in der Rückgabe', string_agg(a, ','), '(keine)', count(*) = 0
  from (select unnest(proargnames) as a
          from pg_proc where oid = 'public.machine_availability(uuid)'::regprocedure) n
 where a in ('quantity', 'capacity', 'par_level', 'menge', 'bestand');

-- ── Abgrenzung ────────────────────────────────────────────────────────
insert into verf_ergebnis
select 'V4 inaktiver Automat', r, '0', r = '0'
  from (select pruef.lies(format(
          'select count(*)::text from public.machine_availability(%L::uuid)', :inaktiv), :kunde) as r) x;

update public.products set status = 'inactive' where id = :'bifi';
insert into verf_ergebnis
select 'V5 inaktives Produkt fällt heraus', r, '2', r = '2'
  from (select pruef.lies(format(
          'select count(*)::text from public.machine_availability(%L::uuid)', :aktiv), :kunde) as r) x;
update public.products set status = 'active' where id = :'bifi';

-- ── Rechte ────────────────────────────────────────────────────────────
insert into verf_ergebnis
select 'V6 anon darf nicht aufrufen', r, 'ERR:42501', r = 'ERR:42501'
  from (select pruef.lies(format(
          'select count(*)::text from public.machine_availability(%L::uuid)', :aktiv), null, 'anon') as r) x;

insert into verf_ergebnis
select 'V7 ohne Anmeldung keine Zeile', count(*)::text, '0', count(*) = 0
  from public.machine_availability(:aktiv);

insert into verf_ergebnis
select 'V8 Kunde liest inventory weiterhin nicht', r, '0', r = '0'
  from (select pruef.zaehle(format(
          'select * from public.inventory where machine_id = %L::uuid', :aktiv), :kunde)::text as r) x;

insert into verf_ergebnis
select 'V9 Kunde liest machine_stock weiterhin nicht', r, '0', r = '0'
  from (select pruef.zaehle(format(
          'select * from public.machine_stock where machine_id = %L::uuid', :aktiv), :kunde)::text as r) x;

insert into verf_ergebnis
select 'V10 Gegenprobe intern: machine_stock mit Stückzahl', r, '10', r = '10'
  from (select pruef.lies(format(
          'select quantity::text from public.machine_stock where machine_id = %L::uuid and product_id = %L::uuid',
          :aktiv, :'cola'), :intern) as r) x;

insert into verf_ergebnis
select 'V11 Kunde kann Bestand nicht ändern', r, 'ERR oder ROWS:0', r like 'ERR:%' or r = 'ROWS:0'
  from (select pruef.schreibe(format(
          'update public.inventory set quantity = 99 where machine_id = %L::uuid', :aktiv), :kunde) as r) x;

insert into verf_ergebnis
select 'V11b Wahrheit danach', quantity::text, '10', quantity = 10
  from public.inventory where machine_id = :aktiv and product_id = :'cola';

-- ── Ergebnis ──────────────────────────────────────────────────────────
select fall, gemessen, erwartet, case when ok then 'OK' else 'FEHLER' end as urteil
  from verf_ergebnis order by fall;

do $$
declare n integer;
begin
  select count(*) into n from verf_ergebnis where ok is not true;
  if n > 0 then
    raise exception '111_verfuegbarkeit: % Fälle FEHLER', n;
  end if;
  raise notice '111_verfuegbarkeit: alle % Fälle OK', (select count(*) from verf_ergebnis);
end $$;
