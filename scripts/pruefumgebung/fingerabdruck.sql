-- Fingerabdruck des Schemas: Zeilenschutz-Regeln (mit Bedingungen), Funktionen
-- (ohne Kommentare, mit Aufrufrechten), Spalten, Auslöser, Produktkatalog,
-- Aufzählungen. Sortierung unabhängig von der Spracheinstellung der Datenbank.
-- Nach JEDER Änderung an der Produktion einmal dort und einmal im frischen
-- Nachbau ausführen; alle Werte müssen gleich sein. Liest nur den Katalog und
-- den Produktstamm, keine Kundendaten.
select
 (select count(*)||':'||md5(string_agg(schemaname||'.'||tablename||'.'||policyname||':'||cmd||':'||array_to_string(roles,',')||':'||md5(coalesce(qual,''))||md5(coalesce(with_check,'')), '|' order by (schemaname||'.'||tablename||'.'||policyname) collate "C")) from pg_policies where schemaname in ('public','app','storage')) as policies,
 (select count(*)||':'||md5(string_agg(n.nspname||'.'||p.proname||'('||pg_get_function_identity_arguments(p.oid)||')='||md5(regexp_replace(regexp_replace(p.prosrc,'--[^\n]*','','g'),'\s+','','g'))||p.prosecdef::text||has_function_privilege('authenticated',p.oid,'execute')::text||has_function_privilege('anon',p.oid,'execute')::text, '|' order by (n.nspname||'.'||p.proname||'('||pg_get_function_identity_arguments(p.oid)||')') collate "C")) from pg_proc p join pg_namespace n on n.oid=p.pronamespace where n.nspname in ('public','app')) as funktionen,
 (select count(*)||':'||md5(string_agg(table_schema||'.'||table_name||'.'||column_name||':'||udt_name||':'||is_nullable, '|' order by (table_schema||'.'||table_name||'.'||column_name) collate "C")) from information_schema.columns where table_schema in ('public','app')) as spalten,
 (select count(*)||':'||md5(string_agg(c.relname||'.'||t.tgname, '|' order by (c.relname||'.'||t.tgname) collate "C")) from pg_trigger t join pg_class c on c.oid=t.tgrelid join pg_namespace n on n.oid=c.relnamespace where n.nspname in ('public','app') and not t.tgisinternal) as ausloeser,
 (select count(*)||':'||md5(string_agg(sku||':'||list_price_net::text||':'||tax_rate::text||':'||coalesce(cost_price_net::text,'-')||':'||coupon_eligibility||':'||coalesce(array_to_string(allergens,','),'-'), '|' order by sku collate "C")) from public.products where sku is not null) as katalog,
 (select count(*)||':'||md5(string_agg(t.typname||':'||e.enumlabel, '|' order by (t.typname||':'||e.enumlabel) collate "C")) from pg_enum e join pg_type t on t.oid=e.enumtypid join pg_namespace n on n.oid=t.typnamespace where n.nspname in ('public','app')) as enums;
