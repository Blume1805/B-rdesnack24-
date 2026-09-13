-- Drossel je Absenderadresse.
--
-- Die Kopfzeilen setzt sonst PostgREST. Hier werden sie mit set_config
-- nachgestellt, weil app.request_ip() genau dieselbe Einstellung liest.
\set ON_ERROR_STOP on
\pset pager off

begin;

delete from app.anfrage_drossel;
delete from app.drossel_tagesschluessel;
delete from app.betriebsparameter where schluessel like 'anfrage.ip_kopfzeile%';
delete from public.advertising_inquiry_items
 where lead_id in (select id from public.leads where source = 'website_werbung');
delete from public.leads where source = 'website_werbung';
delete from public.email_outbox where template_key like 'werbeanfrage%';

\echo '=== T1  x-forwarded-for: der LETZTE Eintrag zaehlt, nicht der erste ==='
-- Der Absender behauptet 9.9.9.9, der Proxy haengt die echte 203.0.113.7 an.
select pruef.wahrheit($$
  select app.request_ip() = 'x-forwarded-for=203.0.113.7'
  from (select set_config('request.headers',
    '{"x-forwarded-for": "9.9.9.9, 10.0.0.1, 203.0.113.7"}', true)) s
$$) as t1_letzter_eintrag;

\echo '=== T2  Die vertrauenswuerdigen Kopfzeilen haben Vorrang ==='
select pruef.wahrheit($$
  select app.request_ip() = 'cf-connecting-ip=203.0.113.9'
  from (select set_config('request.headers',
    '{"x-forwarded-for": "9.9.9.9", "cf-connecting-ip": "203.0.113.9"}', true)) s
$$) as t2_vorrang;

\echo '=== T3  Ohne Kopfzeilen kein Ergebnis, aber auch kein Fehler ==='
select pruef.wahrheit($$
  select app.request_ip() is null
  from (select set_config('request.headers', '', true)) s
$$) as t3_ohne_kopfzeilen;

\echo '=== T4  Der Schluessel ist unumkehrbar und enthaelt die Adresse nicht ==='
do $$
declare v_s text;
begin
  perform set_config('request.headers', '{"x-real-ip": "203.0.113.42"}', true);
  v_s := app.absender_schluessel();
  if v_s is null then raise exception 'FEHLER: kein Schluessel erzeugt'; end if;
  if v_s like '%203.0.113.42%' then
    raise exception 'FEHLER: die Adresse steht im Schluessel';
  end if;
  if length(v_s) <> 64 then
    raise exception 'FEHLER: Schluessel hat Laenge % statt 64', length(v_s);
  end if;
  raise notice 't4_schluessel_unumkehrbar = t';
end $$;

\echo '=== T5  Gleiche Adresse, gleicher Schluessel — sonst zaehlt die Drossel nicht ==='
do $$
declare a text; b text;
begin
  perform set_config('request.headers', '{"x-real-ip": "203.0.113.42"}', true);
  a := app.absender_schluessel();
  b := app.absender_schluessel();
  if a <> b then raise exception 'FEHLER: derselbe Absender ergibt zwei Schluessel'; end if;
  raise notice 't5_stabil_innerhalb_eines_tages = t';
end $$;

\echo '=== T6  Verschiedene Adressen, verschiedene Schluessel ==='
do $$
declare a text; b text;
begin
  perform set_config('request.headers', '{"x-real-ip": "203.0.113.42"}', true);
  a := app.absender_schluessel();
  perform set_config('request.headers', '{"x-real-ip": "203.0.113.43"}', true);
  b := app.absender_schluessel();
  if a = b then raise exception 'FEHLER: zwei Adressen ergeben denselben Schluessel'; end if;
  raise notice 't6_trennscharf = t';
end $$;

\echo '=== T7  Morgen ist derselbe Absender nicht mehr wiederzuerkennen ==='
do $$
declare a text; b text;
begin
  perform set_config('request.headers', '{"x-real-ip": "203.0.113.42"}', true);
  a := app.absender_schluessel();
  -- Tagesgeheimnis austauschen, als waere ein Tag vergangen.
  update app.drossel_tagesschluessel
     set geheimnis = encode(extensions.gen_random_bytes(32), 'hex')
   where tag = app.heute();
  b := app.absender_schluessel();
  if a = b then
    raise exception 'FEHLER: der Schluessel ueberlebt den Geheimniswechsel';
  end if;
  raise notice 't7_kein_dauerhafter_wiedererkennungswert = t';
end $$;

\echo '=== T8  Die Drossel greift ab der sechsten Anfrage vom selben Anschluss ==='
do $$
declare v_ok int := 0; v_blockiert int := 0;
begin
  delete from app.anfrage_drossel;
  perform set_config('request.headers', '{"x-real-ip": "203.0.113.99"}', true);
  for i in 1..7 loop
    begin
      -- jede Anfrage mit EIGENER E-Mail-Adresse, damit nur die IP-Grenze wirkt
      perform public.advertising_inquiry_submit(
        'advertising', 'Firma ' || i, 'Person ' || i,
        'p' || i || '@beispiel.example', p_datenschutz := true);
      v_ok := v_ok + 1;
    exception when sqlstate '53400' then v_blockiert := v_blockiert + 1;
    end;
  end loop;
  if v_ok <> 5 or v_blockiert <> 2 then
    raise exception 'FEHLER: % durchgelassen, % blockiert — erwartet 5 und 2', v_ok, v_blockiert;
  end if;
  raise notice 't8_ip_drossel_greift = t';
end $$;

\echo '=== T9  Gegenprobe: von einem anderen Anschluss geht es weiter ==='
do $$
begin
  perform set_config('request.headers', '{"x-real-ip": "198.51.100.5"}', true);
  perform public.advertising_inquiry_submit(
    'advertising', 'Andere Firma', 'Andere Person',
    'andere@beispiel.example', p_datenschutz := true);
  raise notice 't9_andere_adresse_geht_durch = t';
end $$;

\echo '=== T10  Der Adresswechsel allein hebelt die E-Mail-Grenze nicht aus ==='
do $$
declare v_ok int := 0; v_blockiert int := 0;
begin
  delete from app.anfrage_drossel;
  for i in 1..5 loop
    -- jedes Mal ein anderer Anschluss, aber immer dieselbe E-Mail-Adresse
    perform set_config('request.headers',
      format('{"x-real-ip": "198.51.100.%s"}', 100 + i), true);
    begin
      perform public.advertising_inquiry_submit(
        'advertising', 'Hartnaeckig GmbH', 'Immer Derselbe',
        'immer@derselbe.example', p_datenschutz := true);
      v_ok := v_ok + 1;
    exception when sqlstate '53400' then v_blockiert := v_blockiert + 1;
    end;
  end loop;
  if v_ok <> 3 or v_blockiert <> 2 then
    raise exception 'FEHLER: % durchgelassen, % blockiert — erwartet 3 und 2', v_ok, v_blockiert;
  end if;
  raise notice 't10_mailgrenze_bleibt_wirksam = t';
end $$;

\echo '=== T11  Der Nachweisvermerk wird gesetzt und enthaelt keine Adresse ==='
select pruef.wahrheit($$
  select wert like 'x-real-ip zuletzt am %' and wert not like '%198.51.100%'
  from app.betriebsparameter where schluessel = 'anfrage.ip_kopfzeile_erkannt'
$$) as t11_nachweisvermerk;

\echo '=== T12  Fehlt die Kopfzeile, wird die Anfrage angenommen UND vermerkt ==='
do $$
declare v_vorher int; v_nachher int;
begin
  delete from app.anfrage_drossel;
  delete from app.betriebsparameter where schluessel = 'anfrage.ip_kopfzeile_fehlt';
  perform set_config('request.headers', '', true);
  select count(*) into v_vorher from public.leads where source = 'website_werbung';
  perform public.advertising_inquiry_submit(
    'advertising', 'Ohne Kopfzeile GmbH', 'Jemand',
    'ohne@kopfzeile.example', p_datenschutz := true);
  select count(*) into v_nachher from public.leads where source = 'website_werbung';
  if v_nachher <> v_vorher + 1 then
    raise exception 'FEHLER: Anfrage ohne Kopfzeile wurde abgewiesen';
  end if;
  if not exists (select 1 from app.betriebsparameter
                 where schluessel = 'anfrage.ip_kopfzeile_fehlt') then
    raise exception 'FEHLER: fehlende Kopfzeile wurde nicht vermerkt';
  end if;
  raise notice 't12_fehlende_kopfzeile_vermerkt = t';
end $$;

\echo '=== T13  Aufraeumen entfernt alte Zaehler und alte Geheimnisse ==='
do $$
declare v_z int; v_g int;
begin
  insert into app.anfrage_drossel (schluessel, tag, anzahl)
  values ('ip:alt', app.heute() - 30, 3) on conflict do nothing;
  insert into app.drossel_tagesschluessel (tag, geheimnis)
  values (app.heute() - 30, 'alt') on conflict do nothing;
  perform app.drossel_aufraeumen();
  select count(*) into v_z from app.anfrage_drossel where tag < app.heute() - 7;
  select count(*) into v_g from app.drossel_tagesschluessel where tag < app.heute() - 7;
  if v_z <> 0 or v_g <> 0 then
    raise exception 'FEHLER: % Zaehler und % Geheimnisse ueberlebt', v_z, v_g;
  end if;
  raise notice 't13_aufraeumen = t';
end $$;

\echo '=== T14  Die Tabellen sind fuer angemeldete Konten nicht lesbar ==='
select pruef.zaehle($$select * from app.drossel_tagesschluessel$$,
  (select id from public.profiles where role = 'system_admin' and deleted_at is null limit 1))
  as t14_geheimnisse_fuer_verwaltung;

rollback;
