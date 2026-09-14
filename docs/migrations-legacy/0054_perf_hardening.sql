-- 0054 — Performance- & Least-Privilege-Härtung (Audit Juli 2026, Kap. 12)
--
-- H1: anon darf keine SECURITY-DEFINER-RPCs ausführen. Alle vier Funktionen
--     guarden intern (auth.uid()/Rollenprüfung), der Grant verletzt aber das
--     Least-Privilege-Prinzip (Supabase-Advisor:
--     anon_security_definer_function_executable).
-- H2: RLS-Policies re-evaluieren auth.uid()/auth.jwt() pro Zeile
--     (Advisor: auth_rls_initplan). Rewrite auf (select auth.uid()) macht
--     den Wert zum InitPlan (einmal pro Statement statt einmal pro Zeile).
--     Generisch aus pg_policies generiert, idempotent: bereits optimierte
--     Ausdrücke (enthalten "select auth.") werden übersprungen.
-- H3: Foreign Keys ohne Covering-Index (Advisor: unindexed_foreign_keys)
--     erhalten generierte Indexe — wichtig für Join-/Cascade-Pfade auf
--     wachsenden Tabellen (nayax_sales, purchases, inventory, ...).

-- ---------------------------------------------------------------------------
-- H1 — Least Privilege: anon-EXECUTE entziehen
-- ---------------------------------------------------------------------------
-- WICHTIG: Der EXECUTE-Grant lief über PUBLIC (Default bei CREATE FUNCTION);
-- ein "revoke ... from anon" allein greift dann nicht. Deshalb von PUBLIC
-- revoken und gezielt an authenticated + service_role granten.
revoke execute on function public.choose_subscription_plan(text, boolean) from public, anon;
revoke execute on function public.finance_balance_kpis() from public, anon;
revoke execute on function public.product_detail(uuid) from public, anon;
revoke execute on function public.upsert_finance_balance(
  date, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric
) from public, anon;
grant execute on function public.choose_subscription_plan(text, boolean) to authenticated, service_role;
grant execute on function public.finance_balance_kpis() to authenticated, service_role;
grant execute on function public.product_detail(uuid) to authenticated, service_role;
grant execute on function public.upsert_finance_balance(
  date, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric
) to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- H2 — RLS-initplan-Rewrite (generisch, idempotent)
-- ---------------------------------------------------------------------------
do $$
declare
  r record;
  new_qual text;
  new_check text;
  stmt text;
begin
  for r in
    select schemaname, tablename, policyname, qual, with_check
    from pg_policies
    where schemaname = 'public'
      and (
        (qual is not null and qual like '%auth.uid()%' and qual not ilike '%select auth.%')
        or (with_check is not null and with_check like '%auth.uid()%' and with_check not ilike '%select auth.%')
        or (qual is not null and qual like '%auth.jwt()%' and qual not ilike '%select auth.%')
        or (with_check is not null and with_check like '%auth.jwt()%' and with_check not ilike '%select auth.%')
      )
  loop
    new_qual := case
      when r.qual is null then null
      when r.qual ilike '%select auth.%' then r.qual
      else replace(replace(r.qual,
             'auth.uid()', '(select auth.uid())'),
             'auth.jwt()', '(select auth.jwt())')
    end;
    new_check := case
      when r.with_check is null then null
      when r.with_check ilike '%select auth.%' then r.with_check
      else replace(replace(r.with_check,
             'auth.uid()', '(select auth.uid())'),
             'auth.jwt()', '(select auth.jwt())')
    end;

    stmt := format('alter policy %I on %I.%I',
                   r.policyname, r.schemaname, r.tablename);
    if new_qual is not null then
      stmt := stmt || format(' using (%s)', new_qual);
    end if;
    if new_check is not null then
      stmt := stmt || format(' with check (%s)', new_check);
    end if;
    execute stmt;
  end loop;
end $$;

-- ---------------------------------------------------------------------------
-- H3 — Covering-Indexe für alle unindizierten Single-Column-FKs
-- ---------------------------------------------------------------------------
do $$
declare
  r record;
begin
  for r in
    select c.conrelid::regclass::text as tbl,
           a.attname as col
    from pg_constraint c
    join pg_attribute a
      on a.attrelid = c.conrelid and a.attnum = c.conkey[1]
    where c.contype = 'f'
      and c.connamespace = 'public'::regnamespace
      and array_length(c.conkey, 1) = 1
      and not exists (
        select 1 from pg_index i
        where i.indrelid = c.conrelid
          and i.indkey[0] = c.conkey[1]
      )
  loop
    execute format(
      'create index if not exists %I on %s (%I)',
      'idx_' || replace(replace(r.tbl, 'public.', ''), '"', '') || '_' || r.col,
      r.tbl, r.col
    );
  end loop;
end $$;
