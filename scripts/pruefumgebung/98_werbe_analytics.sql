-- Werbe-Analytics: aggregierte Auswertung ohne Personenbezug.
--
-- Der Kern dieser Prüfung ist nicht, ob Zahlen herauskommen, sondern ob
-- eine kleine Gruppe wirklich nicht sichtbar wird — auch nicht über den
-- Umweg „Summe minus die anderen".
\set ON_ERROR_STOP on
\pset pager off

begin;

delete from public.advertising_daily_metrics;
delete from public.advertising_events;

-- Eine Kampagne für eine Firma, die es im Prüfbestand gibt.
do $$
declare v_biz uuid; v_camp uuid;
begin
  select id into v_biz from public.businesses order by created_at limit 1;
  insert into public.advertising_campaigns (business_id, name, welt, status, von, bis, ziel_url)
  values (v_biz, 'Prüfkampagne', 'digital', 'active', app.heute() - 10, app.heute() + 10,
          'https://example.org')
  returning id into v_camp;
  perform set_config('pruef.campaign', v_camp::text, false);
  perform set_config('pruef.business', v_biz::text, false);
end $$;

-- Akteure: ein Firmen-Administrator und ein reiner Betrachter derselben
-- Firma, dazu ein fremder Kunde als Gegenprobe.
do $$
declare v_biz uuid := current_setting('pruef.business')::uuid; v_a uuid; v_v uuid;
begin
  select id into v_a from public.profiles
   where role = 'customer' and deleted_at is null order by created_at limit 1;
  select id into v_v from public.profiles
   where role = 'customer' and deleted_at is null and id <> v_a order by created_at limit 1;
  insert into public.business_members (business_id, profile_id, role, status, activated_at)
  values (v_biz, v_a, 'admin', 'active', now()),
         (v_biz, v_v, 'viewer', 'active', now())
  on conflict (business_id, profile_id) do update
    set role = excluded.role, status = 'active';
  perform set_config('pruef.firmen_admin', v_a::text, false);
  perform set_config('pruef.firmen_viewer', v_v::text, false);
  perform set_config('pruef.fremder', (select id::text from public.profiles
    where role = 'customer' and deleted_at is null and id not in (v_a, v_v) limit 1), false);
end $$;

-- Verdichtete Zahlen von Hand setzen: zwei große Zellen, eine kleine.
insert into public.advertising_daily_metrics
  (campaign_id, tag, kanal, creative_id, location_id,
   impressions, views, views_3s, clicks, kontakte)
select current_setting('pruef.campaign')::uuid, app.heute() - v.tage, 'app',
       app.werbe_nil(), app.werbe_nil(),
       v.imp, v.vie, v.v3, v.cli, v.kon
from (values (1, 1000, 900, 400, 50, 300),
             (2,  800, 700, 300, 40, 250),
             (3,    7,   6,   3,  2,   5)) as v(tage, imp, vie, v3, cli, kon);

\echo '=== T1  Die kleine Zelle wird nicht ausgewiesen ==='
select pruef.lies($$
  with a as (select public.advertising_campaign_analytics(
               current_setting('pruef.campaign')::uuid,
               current_date - 5, current_date, 'tag') as j)
  select bool_or((z ->> 'impressions') is null
                 and (z ->> 'impressions_unter_mindestzahl')::boolean)::text
  from a, jsonb_array_elements(a.j -> 'zeilen') z
$$, current_setting('pruef.firmen_admin')::uuid) as t1_kleine_zelle_unterdrueckt;

\echo '=== T2  Sekundäre Unterdrückung: die kleine Zelle ist nicht zurückrechenbar ==='
-- Mit drei Zeilen und einer unterdrückten wäre die Rechnung
-- Summe minus die beiden sichtbaren = die versteckte Zahl. Deshalb muss eine
-- zweite Zeile mitverschwinden.
select pruef.lies($$
  with a as (select public.advertising_campaign_analytics(
               current_setting('pruef.campaign')::uuid,
               current_date - 5, current_date, 'tag') as j),
       z as (select jsonb_array_elements(a.j -> 'zeilen') e from a)
  select (count(*) filter (where (e ->> 'impressions') is null) >= 2)::text from z
$$, current_setting('pruef.firmen_admin')::uuid) as t2_sekundaere_unterdrueckung;

\echo '=== T3  Gegenprobe: bei ausreichend großen Zellen wird nichts unterdrückt ==='
update public.advertising_daily_metrics set impressions = 500, views = 400,
       views_3s = 200, clicks = 30, kontakte = 150
 where impressions = 7;
select pruef.lies($$
  with a as (select public.advertising_campaign_analytics(
               current_setting('pruef.campaign')::uuid,
               current_date - 5, current_date, 'tag') as j),
       z as (select jsonb_array_elements(a.j -> 'zeilen') e from a)
  select (count(*) = 3 and count(*) filter (where (e ->> 'impressions') is null) = 0)::text from z
$$, current_setting('pruef.firmen_admin')::uuid) as t3_gegenprobe_alles_sichtbar;

\echo '=== T4  Null bleibt Null — eine leere Zelle verrät niemanden ==='
select pruef.wahrheit($$
  with a as (select app.analytics_maskieren(
               jsonb_build_array(jsonb_build_object('gruppe','x','clicks',0),
                                 jsonb_build_object('gruppe','y','clicks',900)),
               array['clicks']) as j)
  select (j -> 0 ->> 'clicks') = '0' from a
$$) as t4_null_bleibt_sichtbar;

\echo '=== T5  Die Antwort enthält keinerlei Personenbezug ==='
select pruef.lies($$
  with a as (select public.advertising_campaign_analytics(
               current_setting('pruef.campaign')::uuid,
               current_date - 30, current_date, 'tag')::text as t)
  select (t !~* '(profile_id|user_id|kundenkarte|e-mail|@|session|geraet|ip_adresse)')::text
  from a
$$, current_setting('pruef.firmen_admin')::uuid) as t5_keine_personendaten_in_der_antwort;

\echo '=== T6  Rohdaten sind über die Tabelle für niemanden lesbar ==='
insert into public.advertising_events (campaign_id, kanal, art, profile_id)
select current_setting('pruef.campaign')::uuid, 'app', 'impression', p.id
from public.profiles p where p.deleted_at is null limit 3;

select pruef.zaehle($$select * from public.advertising_events$$,
  (select id from public.profiles where role = 'customer' and deleted_at is null limit 1))
  as t6_rohdaten_fuer_kunden;
select pruef.zaehle($$select * from public.advertising_events$$,
  (select id from public.profiles where role = 'system_admin' and deleted_at is null limit 1))
  as t6_rohdaten_fuer_verwaltung;
select pruef.zaehle($$select * from public.advertising_daily_metrics$$,
  (select id from public.profiles where role = 'system_admin' and deleted_at is null limit 1))
  as t6_verdichtung_ueber_tabelle;

\echo '=== T7  Gegenprobe: die Zeilen sind wirklich da ==='
select count(*) = 3 as t7_rohdaten_existieren from public.advertising_events;

\echo '=== T8  Fremde Firma kommt nicht an die Auswertung ==='
select pruef.lies(
  format($$select public.advertising_campaign_analytics(%L)$$, current_setting('pruef.campaign')),
  current_setting('pruef.fremder')::uuid) as t8_fremdzugriff;

\echo '--- Gegenprobe: der viewer derselben Firma darf die Zahlen sehen ---'
select pruef.lies(
  format($$select (public.advertising_campaign_analytics(%L) -> 'summe' ->> 'impressions')$$,
         current_setting('pruef.campaign')),
  current_setting('pruef.firmen_viewer')::uuid) as t8b_viewer_darf;

\echo '--- und kommt trotzdem nicht an die Stammdaten der Firma ---'
select pruef.zaehle($$select tax_number from public.businesses$$,
  current_setting('pruef.firmen_viewer')::uuid) as t8c_viewer_stammdaten;
select pruef.zaehle($$select tax_number from public.businesses$$,
  current_setting('pruef.firmen_admin')::uuid) as t8d_gegenprobe_admin_stammdaten;

\echo '=== T9  Nur die fünf vorgesehenen Auswertungsebenen ==='
select pruef.lies($$
  select (public.advertising_campaign_analytics(
    current_setting('pruef.campaign')::uuid, null, null, 'kanal') is not null)::text
$$, current_setting('pruef.firmen_admin')::uuid) as t9_kanal_erlaubt;

select pruef.lies($$
  select public.advertising_campaign_analytics(
    current_setting('pruef.campaign')::uuid, null, null, 'geraet; drop table')::text
$$, current_setting('pruef.firmen_admin')::uuid) as t9_freie_ebene_abgelehnt;

\echo '=== T10  Zeitraum wird begrenzt ==='
select pruef.lies($$
  select public.advertising_campaign_analytics(
    current_setting('pruef.campaign')::uuid, current_date, current_date - 5, 'tag')::text
$$, current_setting('pruef.firmen_admin')::uuid) as t10a_verdrehter_zeitraum;
select pruef.lies($$
  select public.advertising_campaign_analytics(
    current_setting('pruef.campaign')::uuid, current_date - 500, current_date, 'tag')::text
$$, current_setting('pruef.firmen_admin')::uuid) as t10b_zu_langer_zeitraum;

\echo '=== T11  view_3s ohne belegte Dauer wird zu view herabgestuft ==='
do $$
declare v_uid uuid; v_drei int; v_view int;
begin
  select id into v_uid from public.profiles where role = 'customer' and deleted_at is null limit 1;
  perform set_config('request.jwt.claims', json_build_object('sub', v_uid::text)::text, true);
  perform public.advertising_event_record(
    current_setting('pruef.campaign')::uuid, 'view_3s', 'app', null, null, 800);
  perform public.advertising_event_record(
    current_setting('pruef.campaign')::uuid, 'view_3s', 'app', null, null, 4200);
  perform set_config('request.jwt.claims', null, true);
  select count(*) filter (where art = 'view_3s'), count(*) filter (where art = 'view')
    into v_drei, v_view from public.advertising_events where dauer_ms is not null;
  if v_drei <> 1 or v_view <> 1 then
    raise exception 'FEHLER: % als view_3s, % als view — erwartet 1 und 1', v_drei, v_view;
  end if;
  raise notice 't11_drei_sekunden_heisst_drei_sekunden = t';
end $$;

\echo '=== T12  Ohne Anmeldung wird nichts gezählt ==='
do $$
declare v_vorher int; v_nachher int;
begin
  select count(*) into v_vorher from public.advertising_events;
  perform public.advertising_event_record(current_setting('pruef.campaign')::uuid, 'impression');
  select count(*) into v_nachher from public.advertising_events;
  if v_vorher <> v_nachher then
    raise exception 'FEHLER: anonymer Kontakt wurde gezaehlt';
  end if;
  raise notice 't12_anonym_wird_nicht_gezaehlt = t';
end $$;

\echo '=== T13  Verdichtung ist wiederholbar und erfindet nichts ==='
do $$
declare v1 int; v2 int; v_summe int;
begin
  update public.advertising_events set occurred_at = now();
  v1 := app.werbe_events_verdichten(app.heute());
  v2 := app.werbe_events_verdichten(app.heute());
  if v1 <> v2 then raise exception 'FEHLER: zweiter Lauf ergab % statt %', v2, v1; end if;
  select sum(impressions) into v_summe from public.advertising_daily_metrics
   where tag = app.heute();
  if v_summe <> (select count(*) from public.advertising_events where art = 'impression') then
    raise exception 'FEHLER: Verdichtung passt nicht zu den Rohdaten';
  end if;
  raise notice 't13_verdichtung_wiederholbar = t';
end $$;

\echo '=== T14  views enthält views_3s, sonst wäre die Teilmenge größer als die Menge ==='
select pruef.wahrheit($$
  select bool_and(views >= views_3s) from public.advertising_daily_metrics
$$) as t14_views_konsistent;

\echo '=== T15  Die Mindestgruppengröße steht an einer Stelle ==='
do $$
declare v_alt int; v_neu int;
begin
  select app.analytics_schwelle() into v_alt;
  update app.betriebsparameter set wert = '999' where schluessel = 'analytics.mindestgruppe';
  select app.analytics_schwelle() into v_neu;
  if v_neu <> 999 then raise exception 'FEHLER: Parameter wirkt nicht'; end if;
  -- und der alte Bericht zieht mit
  perform set_config('request.jwt.claims',
    json_build_object('sub', current_setting('pruef.firmen_admin'))::text, true);
  if (public.advertising_campaign_report(current_setting('pruef.campaign')::uuid)
      ->> 'mindestzahl')::int <> 999 then
    raise exception 'FEHLER: advertising_campaign_report haelt eine eigene Zahl';
  end if;
  perform set_config('request.jwt.claims', '', true);
  update app.betriebsparameter set wert = v_alt::text where schluessel = 'analytics.mindestgruppe';
  raise notice 't15_eine_stelle_fuer_die_schwelle = t';
end $$;

\echo '=== T16  Aufräumen entfernt die Rohdaten, nicht die Verdichtung ==='
do $$
declare v_metriken_vorher int; v_metriken_nachher int; v_roh int;
begin
  select count(*) into v_metriken_vorher from public.advertising_daily_metrics;
  update public.advertising_events set occurred_at = now() - interval '200 days';
  perform app.werbe_events_aufraeumen();
  select count(*) into v_roh from public.advertising_events;
  select count(*) into v_metriken_nachher from public.advertising_daily_metrics;
  if v_roh <> 0 then raise exception 'FEHLER: % Rohdatenzeilen ueberlebt', v_roh; end if;
  if v_metriken_nachher <> v_metriken_vorher then
    raise exception 'FEHLER: Verdichtung wurde mitgeloescht';
  end if;
  raise notice 't16_aufraeumen_trifft_nur_rohdaten = t';
end $$;

rollback;
