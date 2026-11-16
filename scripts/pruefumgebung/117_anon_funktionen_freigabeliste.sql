-- Wächter: Welche Funktionen darf ein nicht angemeldeter Besucher (anon)
-- aufrufen? Genau die freigegebenen, keine weitere.
--
-- Ersetzt beim Stilllegen der main-Linie (16.11.2026) deren pgTAP-Test
-- execute_privileges_test.sql. Der verlangte „keine einzige Funktion für
-- anon"; die Produktionslinie gibt bewusst acht öffentliche Endpunkte frei
-- (Abo-Übersicht, Werbekatalog und -anfrage, Abmeldung, geteilter Bericht,
-- KI-Schalter). Gemessen in der Produktion am 16.11.2026: genau diese acht; dazu kommen
-- die zwei Funktionen der Zwei-Faktor-Prüfung.
-- Kommt eine neue Funktion für anon hinzu, schlägt diese Probe an, bis sie
-- hier bewusst eingetragen ist.
truncate pruef.ergebnis restart identity;
with erlaubt(f) as (values
  ('public.abo_angebote'), ('public.advertising_catalog'),
  ('public.advertising_inquiry_submit'), ('public.advertising_locations'),
  ('public.email_unsubscribe'), ('public.fetch_email_report_share'),
  ('public.ki_funktion_freigegeben'), ('public.subscription_plans'),
  -- Zwei-Faktor-Prüfung vor jeder Anfrage (20261116090000): läuft auch bei
  -- nicht angemeldeten Anfragen und muss deshalb für anon aufrufbar sein.
  -- Sie gibt nichts preis außer „erfüllt / nicht erfüllt".
  ('public.mfa_erfuellt'), ('public.pruefe_anfrage')
),
ist as (
  select distinct n.nspname || '.' || p.proname as f
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'public'
     and has_function_privilege('anon', p.oid, 'execute')
     and not exists (select 1 from pg_depend d where d.objid = p.oid and d.deptype = 'e')
),
zu_viel as (select f from ist except select f from erlaubt),
fehlt   as (select f from erlaubt except select f from ist)
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'anon-Funktionen', 'nicht freigegebene Funktion für anon', 'anon', 'keine',
       coalesce((select string_agg(f, ', ' order by f) from zu_viel), 'keine'),
       not exists (select 1 from zu_viel)
union all
select 'anon-Funktionen', 'freigegebene Funktion fehlt (Gegenprobe)', 'anon', 'keine',
       coalesce((select string_agg(f, ', ' order by f) from fehlt), 'keine'),
       not exists (select 1 from fehlt)
union all
select 'anon-Funktionen', 'anon hat kein USAGE auf app', 'anon', 'false',
       has_schema_privilege('anon', 'app', 'USAGE')::text,
       not has_schema_privilege('anon', 'app', 'USAGE');
select gruppe, test, erwartet, gemessen, ok from pruef.ergebnis order by id;
