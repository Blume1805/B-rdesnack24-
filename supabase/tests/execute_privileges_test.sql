-- ============================================================================
-- pgTAP: Keine Funktion in public oder app darf ohne Anmeldung aufrufbar sein.
-- Ausführung: supabase test db
--
-- Hintergrund (Befund A-10, 17.09.2026): Die Migrationen 0045/0046 entziehen
-- anon und PUBLIC das Ausführungsrecht — aber nur für die zu diesem Zeitpunkt
-- vorhandenen Funktionen. Der Standardteil
-- (`alter default privileges ... revoke execute ... from public`) wirkt in
-- PostgreSQL 16 nachweislich nicht: Eine frisch angelegte Funktion trägt
-- weiterhin `=X` in der ACL. Dadurch war jede seit 0047 hinzugekommene
-- Funktion ohne Anmeldung aufrufbar; `public.lifetime_founders_status()` gab
-- die Zahl der vergebenen Lifetime-Plätze preis.
--
-- Dieser Test ist die Absicherung gegen ein erneutes Abdriften: Wer eine neue
-- Funktion anlegt, muss ihr das PUBLIC-Recht in derselben Migration entziehen,
-- sonst schlägt die CI fehl.
-- ============================================================================
-- Erweiterungen (pgTAP selbst, pgcrypto, citext) sind ausgenommen: Ihre
-- Funktionen gehoeren nicht uns, und pgTAP bringt allein rund 1.000 davon mit.
-- Erkennungsmerkmal: ein pg_depend-Eintrag mit deptype = 'e'.
begin;
select plan(4);

select is(
  (select count(*)::int from pg_proc p
     join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and has_function_privilege('anon', p.oid, 'EXECUTE')
      and not exists (select 1 from pg_depend d
                       where d.objid = p.oid and d.deptype = 'e')),
  0,
  'Keine eigene Funktion in public ist fuer anon ausfuehrbar'
);

select is(
  (select count(*)::int from pg_proc p
     join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'app'
      and has_function_privilege('anon', p.oid, 'EXECUTE')
      and not exists (select 1 from pg_depend d
                       where d.objid = p.oid and d.deptype = 'e')),
  0,
  'Keine eigene Funktion in app ist fuer anon ausfuehrbar'
);

-- PUBLIC getrennt pruefen: anon erbt das Recht ueber PUBLIC, aber eine
-- Funktion kann auch nur PUBLIC tragen, ohne dass anon existiert.
-- grantee = 0 ist in aclexplode() die Kennung fuer PUBLIC.
select is(
  (select count(*)::int
     from pg_proc p
     join pg_namespace n on n.oid = p.pronamespace
     cross join lateral aclexplode(p.proacl) a
    where n.nspname in ('public','app')
      and a.grantee = 0
      and a.privilege_type = 'EXECUTE'
      and not exists (select 1 from pg_depend d
                       where d.objid = p.oid and d.deptype = 'e')),
  0,
  'Keine eigene Funktion in public oder app traegt ein PUBLIC-Ausfuehrungsrecht'
);

-- Gegenprobe: angemeldete Konten duerfen weiterhin alles aufrufen, sonst
-- wuerde ein zu breiter revoke die App lahmlegen und der Test es nicht merken.
select cmp_ok(
  (select count(*)::int from pg_proc p
     join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and has_function_privilege('authenticated', p.oid, 'EXECUTE')
      and not exists (select 1 from pg_depend d
                       where d.objid = p.oid and d.deptype = 'e')),
  '>', 40,
  'Angemeldete Konten duerfen die Funktionen in public weiterhin aufrufen'
);

select * from finish();
rollback;
