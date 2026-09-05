update app.subscription_plans
   set billing_label = '79,99 EUR einmalig (Lifetime · Founders Edition)'
 where plan = 'lifetime';

do $$
declare
  d text;
  alt_preis constant text :=
    E'  v_price := case v_plan\n'
    '    when ''monthly''  then 99\n'
    '    when ''yearly''   then 999\n'
    '    when ''lifetime'' then 7999\n'
    '  end;\n'
    '  v_label := case v_plan\n'
    '    when ''monthly''  then ''0,99 EUR / Monat''\n'
    '    when ''yearly''   then ''9,99 EUR / Jahr''\n'
    '    when ''lifetime'' then ''79,99 EUR einmalig (Lifetime · Founders Edition)''\n'
    '  end;';
  neu constant text :=
    E'  -- Preise stehen seit 0080 in app.subscription_plans, damit Web-App,\n'
    '  -- native App und diese RPC dieselbe Quelle lesen.\n'
    '  select sp.price_cents, sp.billing_label\n'
    '    into v_price, v_label\n'
    '    from app.subscription_plans sp\n'
    '   where sp.plan::text = v_plan::text;\n'
    '  if v_price is null then\n'
    '    raise exception ''Unbekanntes Abo-Modell: %'', v_plan;\n'
    '  end if;';
begin
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'choose_subscription_plan';

  if position(alt_preis in d) = 0 then
    raise exception 'Preisblock nicht wortgleich gefunden — abgebrochen';
  end if;

  d := replace(d, alt_preis, neu);
  execute d;

  if (select count(*) from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
       where ns.nspname = 'public' and p.proname = 'choose_subscription_plan'
         and p.prosrc like '%app.subscription_plans%') <> 1 then
    raise exception 'Umstellung nicht wirksam — abgebrochen';
  end if;
end $$;

revoke execute on function public.choose_subscription_plan(text, boolean, boolean)
  from public, anon;
grant execute on function public.choose_subscription_plan(text, boolean, boolean)
  to authenticated, service_role;
