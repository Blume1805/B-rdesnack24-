-- Fingerabdruck des Schemas: Zeilenschutz-Regeln (mit Bedingungen), Funktionen
-- (ohne Kommentare, mit Aufrufrechten), Spalten, Auslöser, Produktkatalog,
-- Aufzählungen und (seit 16.11.2026) Tabellen- und Spaltenrechte von anon und
-- authenticated in public und app. TRUNCATE, REFERENCES und TRIGGER bleiben
-- außen vor, weil Supabase sie je nach Projektalter anders vergibt. Sortierung unabhängig von der Spracheinstellung der Datenbank.
-- Nach JEDER Änderung an der Produktion einmal dort und einmal im frischen
-- Nachbau ausführen; alle Werte müssen gleich sein. Liest nur den Katalog und
-- den Produktstamm, keine Kundendaten.
select
 (select count(*)||':'||md5(string_agg(schemaname||'.'||tablename||'.'||policyname||':'||cmd||':'||array_to_string(roles,',')||':'||md5(coalesce(qual,''))||md5(coalesce(with_check,'')), '|' order by (schemaname||'.'||tablename||'.'||policyname) collate "C")) from pg_policies where schemaname in ('public','app','storage')) as policies,
 (select count(*)||':'||md5(string_agg(n.nspname||'.'||p.proname||'('||pg_get_function_identity_arguments(p.oid)||')='||md5(regexp_replace(regexp_replace(p.prosrc,'--[^\n]*','','g'),'\s+','','g'))||p.prosecdef::text||has_function_privilege('authenticated',p.oid,'execute')::text||has_function_privilege('anon',p.oid,'execute')::text, '|' order by (n.nspname||'.'||p.proname||'('||pg_get_function_identity_arguments(p.oid)||')') collate "C")) from pg_proc p join pg_namespace n on n.oid=p.pronamespace where n.nspname in ('public','app')) as funktionen,
 (select count(*)||':'||md5(string_agg(table_schema||'.'||table_name||'.'||column_name||':'||udt_name||':'||is_nullable, '|' order by (table_schema||'.'||table_name||'.'||column_name) collate "C")) from information_schema.columns where table_schema in ('public','app')) as spalten,
 (select count(*)||':'||md5(string_agg(c.relname||'.'||t.tgname, '|' order by (c.relname||'.'||t.tgname) collate "C")) from pg_trigger t join pg_class c on c.oid=t.tgrelid join pg_namespace n on n.oid=c.relnamespace where n.nspname in ('public','app') and not t.tgisinternal) as ausloeser,
 (select count(*)||':'||md5(string_agg(sku||':'||list_price_net::text||':'||tax_rate::text||':'||coalesce(cost_price_net::text,'-')||':'||coupon_eligibility||':'||coalesce(array_to_string(allergens,','),'-'), '|' order by sku collate "C")) from public.products where sku is not null) as katalog,
 (select count(*)||':'||md5(string_agg(t.typname||':'||e.enumlabel, '|' order by (t.typname||':'||e.enumlabel) collate "C")) from pg_enum e join pg_type t on t.oid=e.enumtypid join pg_namespace n on n.oid=t.typnamespace where n.nspname in ('public','app')) as enums,
 (select count(*)||':'||md5(string_agg(z, '|' order by z collate "C")) from (
    select regexp_replace(regexp_replace(regexp_replace(regexp_replace(o||' '||w||' '||r, ',?REFERENCES', ''), ',?TRIGGER', ''), ',?TRUNCATE', ''), ' ,', ' ') as z from (
      select table_schema||'.'||table_name as o, grantee as w, string_agg(privilege_type, ',' order by privilege_type) as r
        from information_schema.role_table_grants
       where table_schema in ('public','app') and grantee in ('anon','authenticated') group by 1,2
      union all
      select c.table_schema||'.'||c.table_name||'('||c.column_name||')', c.grantee, string_agg(c.privilege_type, ',' order by c.privilege_type)
        from information_schema.column_privileges c
       where c.table_schema in ('public','app') and c.grantee in ('anon','authenticated')
         and not exists (select 1 from information_schema.role_table_grants t where t.table_schema=c.table_schema and t.table_name=c.table_name and t.grantee=c.grantee and t.privilege_type=c.privilege_type)
       group by 1,2) x) y) as rechte;
