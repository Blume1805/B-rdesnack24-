do $$
declare
  r record;
  d text;
  v_q text; v_c text; v_sql text;
  n_pol int := 0;
  n_rest int;
  pat  constant text := 'FROM profiles p\s+WHERE \(\(p\.id = ';
  repl constant text := 'FROM profiles p WHERE ((p.status = ''active''::app.profile_status) '
                        || 'AND (p.deleted_at IS NULL) AND (p.id = ';
begin
  ------------------------------------------------------------------
  -- 1) RLS-Policies: Rollenprüfung nur für aktive, nicht gelöschte Profile
  ------------------------------------------------------------------
  for r in
    select tablename, policyname, qual, with_check
      from pg_policies
     where schemaname = 'public'
       and (coalesce(qual, '') || coalesce(with_check, '')) ~ 'FROM profiles p'
       and (coalesce(qual, '') || coalesce(with_check, '')) !~ 'p\.status'
     order by tablename, policyname
  loop
    v_q := case when r.qual is null then null
                else regexp_replace(r.qual, pat, repl, 'g') end;
    v_c := case when r.with_check is null then null
                else regexp_replace(r.with_check, pat, repl, 'g') end;

    v_sql := format('alter policy %I on public.%I', r.policyname, r.tablename);
    if v_q is not null then v_sql := v_sql || format(' using (%s)', v_q); end if;
    if v_c is not null then v_sql := v_sql || format(' with check (%s)', v_c); end if;
    execute v_sql;
    n_pol := n_pol + 1;
  end loop;

  ------------------------------------------------------------------
  -- 2) Funktionen mit gleichlautender Inline-Prüfung
  ------------------------------------------------------------------
  for d in
    select pg_get_functiondef(p.oid)
      from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
     where ns.nspname = 'public'
       and p.proname in ('datev_export_rows', 'finance_balance_kpis', 'upsert_finance_balance')
  loop
    if position('where p.id = auth.uid() and p.role in' in d) = 0 then
      raise exception 'Erwartete Prüfstelle nicht gefunden — abgebrochen';
    end if;
    d := replace(d,
      'where p.id = auth.uid() and p.role in',
      'where p.id = auth.uid() and p.status = ''active'' and p.deleted_at is null and p.role in');
    execute d;
  end loop;

  ------------------------------------------------------------------
  -- 3) Die beiden Funktionen, die die Rolle in eine Variable lesen.
  --    Dort steckt zusätzlich eine NULL-Falle: `v_role not in (...)`
  --    ergibt bei NULL weder true noch false — die IF greift nicht und
  --    der Aufruf läuft an der Prüfung vorbei. Ohne Profilzeile war die
  --    Funktion also offen.
  ------------------------------------------------------------------
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'business_customers_csv';
  d := replace(d,
    'from public.profiles where id = auth.uid()',
    'from public.profiles where id = auth.uid() and status = ''active'' and deleted_at is null');
  d := replace(d,
    'if v_role not in (',
    'if v_role is null or v_role not in (');
  execute d;

  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'list_employees_for_signature';
  d := replace(d,
    'from public.profiles where profiles.id = auth.uid()',
    'from public.profiles where profiles.id = auth.uid()'
    || ' and profiles.status = ''active'' and profiles.deleted_at is null');
  d := replace(d,
    'if v_role not in (',
    'if v_role is null or v_role not in (');
  execute d;

  ------------------------------------------------------------------
  -- 4) Gegenprobe
  ------------------------------------------------------------------
  select count(*) into n_rest
    from pg_policies
   where schemaname = 'public'
     and (coalesce(qual, '') || coalesce(with_check, '')) ~ 'FROM profiles p'
     and (coalesce(qual, '') || coalesce(with_check, '')) !~ 'p\.status';
  if n_rest <> 0 then
    raise exception 'Noch % Policy(s) ohne Statusprüfung — abgebrochen', n_rest;
  end if;

  select count(*) into n_rest
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public'
     and p.proname in ('datev_export_rows', 'finance_balance_kpis',
                       'upsert_finance_balance', 'business_customers_csv',
                       'list_employees_for_signature')
     and p.prosrc !~ 'status';
  if n_rest <> 0 then
    raise exception 'Noch % Funktion(en) ohne Statusprüfung — abgebrochen', n_rest;
  end if;

  raise notice 'Policies angepasst: %', n_pol;
end $$;
