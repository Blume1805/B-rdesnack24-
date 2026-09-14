-- Wachhund gegen unbeabsichtigte Rechte an anon und authenticated.
--
-- WARUM ES DIESE DATEI GIBT. Der Gesamtaudit vom 05.09.2026 hat zwei Grants
-- gefunden, die niemand bewusst vergeben hatte: app.purge_nach_frist() -- der
-- Loeschjob -- und app.kauf_bucht_bestandsabgang() waren fuer jeden
-- angemeldeten Nutzer ausfuehrbar. Sie entstanden nicht durch einen falschen
-- GRANT, sondern durch den Postgres-Standard: EXECUTE geht bei jeder neuen
-- Funktion automatisch an PUBLIC. Es gab keinen Test, der das gemeldet
-- haette. Jetzt gibt es einen.
--
-- Laeuft ausschliesslich gegen die Replik.
\set ON_ERROR_STOP on
\pset pager off

\echo '=== T1  Im Schema app ist nur is_business_member fuer authenticated aufrufbar ==='
select pruef.wahrheit($$
  select coalesce(string_agg(p.proname, ', ' order by p.proname), '(keine)')
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'app'
     and has_function_privilege('authenticated', p.oid, 'EXECUTE')
$$) as t1_erwartet_is_business_member;

\echo '=== T2  anon hat kein USAGE auf dem Schema app  (erwartet: false) ==='
select pruef.wahrheit($$
  select has_schema_privilege('anon', 'app', 'USAGE')::text
$$) as t2_erwartet_false;

\echo '=== T3  GEGENPROBE service_role kommt weiterhin an die app-Funktionen ==='
select pruef.wahrheit($$
  select (has_schema_privilege('service_role', 'app', 'USAGE')
          and has_function_privilege('service_role','app.purge_nach_frist()','EXECUTE'))::text
$$) as t3_erwartet_true;

\echo '=== T4  GEGENPROBE is_business_member bleibt aufrufbar (sonst faellt B2B) ==='
select pruef.wahrheit($$
  select has_function_privilege(
    'authenticated','app.is_business_member(uuid,app.business_role)','EXECUTE')::text
$$) as t4_erwartet_true;

\echo '=== T5  Kein SECURITY DEFINER ohne festgelegten search_path (erwartet: 0) ==='
select pruef.wahrheit($$
  select count(*)::text from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname in ('public','app') and p.prosecdef
     and coalesce(array_to_string(p.proconfig, ','), '') not like '%search_path%'
$$) as t5_erwartet_0;

\echo '=== T6  Jede Tabelle im Schema public traegt RLS (erwartet: 0 ohne) ==='
select pruef.wahrheit($$
  select count(*)::text from pg_class c join pg_namespace n on n.oid = c.relnamespace
   where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity
$$) as t6_erwartet_0;

\echo '=== T7  GEGENPROBE der Kundenart-Guard haengt an customers ==='
select pruef.wahrheit($$
  select (exists(select 1 from pg_trigger
                  where tgname='trg_customers_guard' and not tgisinternal))::text
$$) as t7_erwartet_true;
