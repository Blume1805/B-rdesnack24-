-- Werbeplatz auf der Kundenkarte.
--
-- Geprüft wird, was die Fläche verspricht: sie ist nicht personalisiert, sie
-- zeigt nur freigegebene und laufende Motive, sie liefert die
-- Werbekennzeichnung mit, sie gibt keine Kundendaten aus, und der Weg über
-- die Tabellen bleibt für Kunden zu. Läuft ausschließlich gegen die Replik.
\set ON_ERROR_STOP on
\pset pager off

begin;

-- Ausgangslage
delete from public.advertising_creatives where campaign_id in
  (select id from public.advertising_campaigns where name like 'Prüf-Karte%');
delete from public.advertising_campaigns where name like 'Prüf-Karte%';

insert into public.advertising_campaigns (id, business_id, name, welt, status, von, bis, ziel_url)
values
  ('ca110000-0000-0000-0000-000000000001','bb000000-0000-0000-0000-000000000001',
   'Prüf-Karte laufend','digital','active', current_date - 10, current_date + 10,
   'https://beispiel.invalid/laufend'),
  ('ca110000-0000-0000-0000-000000000002','bb000000-0000-0000-0000-000000000001',
   'Prüf-Karte abgelaufen','digital','active', current_date - 60, current_date - 1, null),
  ('ca110000-0000-0000-0000-000000000003','bb000000-0000-0000-0000-000000000001',
   'Prüf-Karte pausiert','digital','paused', current_date - 10, null, null),
  ('ca110000-0000-0000-0000-000000000004','bb000000-0000-0000-0000-000000000001',
   'Prüf-Karte nur analog','analog','active', current_date - 10, null, null);

insert into public.advertising_creatives (id, campaign_id, kind, status, file_url, alt_text, anzeigename)
values
  ('ce110000-0000-0000-0000-000000000001','ca110000-0000-0000-0000-000000000001',
   'kundenkarte_logo','active','https://cdn.invalid/logo-a.png','Logo der Bäckerei Beispiel','Bäckerei Beispiel'),
  ('ce110000-0000-0000-0000-000000000002','ca110000-0000-0000-0000-000000000002',
   'kundenkarte_logo','active','https://cdn.invalid/logo-b.png','Logo Abgelaufen','Abgelaufen GmbH'),
  ('ce110000-0000-0000-0000-000000000003','ca110000-0000-0000-0000-000000000003',
   'kundenkarte_logo','active','https://cdn.invalid/logo-c.png','Logo Pausiert','Pausiert GmbH'),
  ('ce110000-0000-0000-0000-000000000004','ca110000-0000-0000-0000-000000000001',
   'kundenkarte_logo','pending_review','https://cdn.invalid/logo-d.png','Logo Ungeprüft','Ungeprüft GmbH'),
  ('ce110000-0000-0000-0000-000000000005','ca110000-0000-0000-0000-000000000001',
   'coupon_logo','active','https://cdn.invalid/logo-e.png',null,'Gutscheinlogo GmbH'),
  ('ce110000-0000-0000-0000-000000000006','ca110000-0000-0000-0000-000000000004',
   'kundenkarte_logo','active','https://cdn.invalid/logo-f.png','Logo Nur Analog','Nur Analog GmbH');

\echo '=== T1  Nur das laufende, freigegebene Kundenkarten-Motiv wird ausgespielt ==='
select pruef.wahrheit($$
  select (select count(*)::text from public.kundenkarte_werbeplatz())
$$) as t1_anzahl_erwartet_1;

\echo '=== T2  Es ist genau das erwartete Motiv, mit Name und Alternativtext ==='
select pruef.wahrheit($$
  select (creative_id::text = 'ce110000-0000-0000-0000-000000000001'
      and werbetreibender = 'Bäckerei Beispiel'
      and alt_text = 'Logo der Bäckerei Beispiel'
      and ziel_url = 'https://beispiel.invalid/laufend')::text
  from public.kundenkarte_werbeplatz()
$$) as t2_inhalt_stimmt;

\echo '=== T3  Die Werbekennzeichnung wird immer mitgeliefert ==='
select pruef.wahrheit($$
  select (kennzeichnung = 'Anzeige')::text from public.kundenkarte_werbeplatz()
$$) as t3_kennzeichnung;

\echo '=== T4  Abgelaufene Kampagne wird nicht ausgespielt (Gegenprobe) ==='
select pruef.wahrheit($$
  select (not exists (select 1 from public.kundenkarte_werbeplatz()
                       where campaign_id = 'ca110000-0000-0000-0000-000000000002'))::text
$$) as t4_abgelaufen_raus;

\echo '=== T5  Pausierte Kampagne wird nicht ausgespielt (Gegenprobe) ==='
select pruef.wahrheit($$
  select (not exists (select 1 from public.kundenkarte_werbeplatz()
                       where campaign_id = 'ca110000-0000-0000-0000-000000000003'))::text
$$) as t5_pausiert_raus;

\echo '=== T6  Nicht freigegebenes Motiv wird nicht ausgespielt (Gegenprobe) ==='
select pruef.wahrheit($$
  select (not exists (select 1 from public.kundenkarte_werbeplatz()
                       where creative_id = 'ce110000-0000-0000-0000-000000000004'))::text
$$) as t6_ungeprueft_raus;

\echo '=== T7  Gutscheinlogo landet nicht auf der Kundenkarte (Flächentrennung) ==='
select pruef.wahrheit($$
  select (not exists (select 1 from public.kundenkarte_werbeplatz()
                       where creative_id = 'ce110000-0000-0000-0000-000000000005'))::text
$$) as t7_flaechentrennung;

\echo '=== T7b Rein analoge Buchung erscheint nicht in der App (Gegenprobe) ==='
select pruef.wahrheit($$
  select (not exists (select 1 from public.kundenkarte_werbeplatz()
                       where creative_id = 'ce110000-0000-0000-0000-000000000006'))::text
$$) as t7b_analog_raus;

\echo '=== T8  Zwei verschiedene Kunden sehen dasselbe: die Auswahl ist nicht personalisiert ==='
-- Beide Kunden rufen dieselbe Funktion in ihrer eigenen Rolle auf. Verglichen
-- wird die vollständige Ausgabe, nicht nur die Zeilenzahl.
select pruef.wahrheit($$
  with a as (select pruef.lies(
      'select string_agg(creative_id::text, '','' order by creative_id) from public.kundenkarte_werbeplatz()',
      '11111111-1111-1111-1111-111111111111'::uuid)),
       b as (select pruef.lies(
      'select string_agg(creative_id::text, '','' order by creative_id) from public.kundenkarte_werbeplatz()',
      '22222222-2222-2222-2222-222222222222'::uuid))
  select ((select * from a) = (select * from b) and (select * from a) is not null)::text
$$) as t8_nicht_personalisiert;

\echo '=== T9  Ein angemeldeter Kunde darf die Funktion aufrufen ==='
select pruef.zaehle('select * from public.kundenkarte_werbeplatz()',
                    '11111111-1111-1111-1111-111111111111'::uuid) as t9_kunde_darf;

\echo '=== T10 Ohne Anmeldung ist die Funktion gesperrt (Gegenprobe, echte Rolle anon) ==='
select pruef.zaehle('select * from public.kundenkarte_werbeplatz()',
                    null, 'anon') as t10_anon_gesperrt_erwartet_minus1;

\echo '=== T11 Der Kunde kommt nicht an die Motivtabelle selbst (Gegenprobe) ==='
select pruef.zaehle('select * from public.advertising_creatives',
                    '11111111-1111-1111-1111-111111111111'::uuid) as t11_tabelle_zu_erwartet_0_oder_minus1;

\echo '=== T12 Der Kunde kommt nicht an die Kampagnentabelle (Gegenprobe) ==='
select pruef.zaehle('select * from public.advertising_campaigns',
                    '11111111-1111-1111-1111-111111111111'::uuid) as t12_kampagnen_zu;

\echo '=== T13 Die Rückgabe führt keine Unternehmens- oder Kundenkennung ==='
select pruef.wahrheit($$
  select (pg_get_function_result(p.oid) not like '%business%'
      and pg_get_function_result(p.oid) not like '%profile%'
      and pg_get_function_result(p.oid) not like '%customer%')::text
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'public' and p.proname = 'kundenkarte_werbeplatz'
$$) as t13_keine_fremdkennung;

\echo '=== T13b Der Rumpf kennt den Aufrufer nicht: kein auth.uid, kein Profilbezug ==='
-- Stärker als eine Verhaltensprobe: die Funktion KANN nicht personalisieren,
-- weil sie den Aufrufer nirgends liest.
select pruef.wahrheit($$
  select (pg_get_functiondef(p.oid) not like '%auth.uid%'
      and pg_get_functiondef(p.oid) not like '%request.jwt%'
      and pg_get_functiondef(p.oid) not like '%profiles%'
      and pg_get_functiondef(p.oid) not like '%customers%')::text
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'public' and p.proname = 'kundenkarte_werbeplatz'
$$) as t13b_kein_aufruferbezug;

\echo '=== T14 Ein Kundenkarten-Motiv ohne Alternativtext lässt sich nicht anlegen ==='
select pruef.wahrheit($$
  select case when (select count(*) from (
    select 1 from public.advertising_creatives
     where id = 'ce110000-0000-0000-0000-0000000000ff') x) = 0
    then 'true' else 'false' end
$$) as t14_vorbedingung;

do $$
begin
  insert into public.advertising_creatives (id, campaign_id, kind, status, file_url, alt_text)
  values ('ce110000-0000-0000-0000-0000000000ff','ca110000-0000-0000-0000-000000000001',
          'kundenkarte_logo','active','https://cdn.invalid/ohne-alt.png', null);
  raise exception 'T14 FEHLGESCHLAGEN: Motiv ohne Alternativtext wurde angenommen';
exception when check_violation then
  raise notice 'T14 ok: ohne Alternativtext abgewiesen (%)', sqlstate;
end $$;

\echo '=== T15 Ein Ziel ohne https lässt sich nicht hinterlegen (Gegenprobe) ==='
do $$
begin
  update public.advertising_creatives
     set ziel_url = 'http://unsicher.invalid'
   where id = 'ce110000-0000-0000-0000-000000000001';
  raise exception 'T15 FEHLGESCHLAGEN: http-Ziel wurde angenommen';
exception when check_violation then
  raise notice 'T15 ok: http-Ziel abgewiesen (%)', sqlstate;
end $$;

\echo '=== T16 Das Logo-Bucket ist lesbar, aber nur die Verwaltung darf schreiben ==='
select pruef.wahrheit($$
  select (
    (select public from storage.buckets where id = 'werbelogos') = true
    and (select count(*) from pg_policies
          where schemaname = 'storage' and tablename = 'objects'
            and policyname = 'werbelogos_lesen') = 1
    and (select count(*) from pg_policies
          where schemaname = 'storage' and tablename = 'objects'
            and policyname in ('werbelogos_anlegen','werbelogos_aendern','werbelogos_loeschen')) = 3
  )::text
$$) as t16_bucket_regeln;

\echo '=== T17 Kein SVG im Logo-Bucket (Gegenprobe gegen Skript im Bild) ==='
select pruef.wahrheit($$
  select (not ('image/svg+xml' = any (
    select unnest(allowed_mime_types) from storage.buckets where id = 'werbelogos')))::text
$$) as t17_kein_svg;

rollback;
