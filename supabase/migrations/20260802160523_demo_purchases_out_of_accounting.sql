do $$
declare
  d text;
  n_alt int;
  n_neu int;
begin
  -- 1) Demo-Käufe bekommen eine eigene Quelle statt 'manual'.
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'dev_add_demo_purchase';

  n_alt := (length(d) - length(replace(d, '''manual'', v_valid)', ''))) 
           / length('''manual'', v_valid)');
  if n_alt <> 1 then
    raise exception 'dev_add_demo_purchase: % Treffer statt 1 — abgebrochen', n_alt;
  end if;
  d := replace(d, '''manual'', v_valid)', '''demo'', v_valid)');
  execute d;

  -- 2) Buchhaltungsrelevante Leser schließen Demo-Käufe aus.
  --    finance_kpis (3x) und finance_summary (2x) nutzen wortgleich
  --    dieselbe Zeitraum-Bedingung.
  for d in
    select pg_get_functiondef(p.oid)
      from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
     where ns.nspname = 'public' and p.proname in ('finance_kpis', 'finance_summary')
  loop
    n_alt := (length(d) - length(replace(d, 'where pu.purchased_at::date between p_from and p_to', '')))
             / length('where pu.purchased_at::date between p_from and p_to');
    if n_alt = 0 then
      raise exception 'Zeitraum-Bedingung nicht gefunden — abgebrochen';
    end if;
    d := replace(d,
      'where pu.purchased_at::date between p_from and p_to',
      'where pu.purchased_at::date between p_from and p_to and pu.source <> ''demo''');
    execute d;
  end loop;

  -- 3) DATEV-Export: eigene Zeitzonen-Variante der Bedingung.
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'datev_export_rows';

  n_alt := (length(d) - length(replace(d, 'between p_from and p_to', '')))
           / length('between p_from and p_to');
  if n_alt <> 1 then
    raise exception 'datev_export_rows: % Treffer statt 1 — abgebrochen', n_alt;
  end if;
  d := replace(d,
    'between p_from and p_to',
    'between p_from and p_to and pu.source <> ''demo''');
  execute d;

  -- 4) Gegenprobe: jede der drei Funktionen trägt den Ausschluss.
  select count(*) into n_neu
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public'
     and p.proname in ('finance_kpis', 'finance_summary', 'datev_export_rows')
     and p.prosrc like '%source <> ''demo''%';
  if n_neu <> 3 then
    raise exception 'Nur % von 3 Funktionen gepatcht — abgebrochen', n_neu;
  end if;
end $$;
