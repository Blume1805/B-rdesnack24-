delete from pruef.ergebnis where gruppe='Vertikal-RPC';
do $$
declare f record; call text; w text;
  A uuid := '11111111-1111-1111-1111-111111111111';
  liste text[] := array['advertising_campaign_report','advertising_campaign_set','advertising_campaign_status',
    'advertising_contract_set','advertising_contract_status','advertising_coupon_sponsorship_set',
    'advertising_coupon_sponsorship_status','advertising_creative_review','advertising_creative_upload',
    'advertising_motif_approve','advertising_overview','advertising_redirect_count','advertising_space_remove',
    'advertising_space_set','business_budget_set','business_create','business_customers_csv','business_dashboard',
    'business_invitation_accept','business_invitation_revoke','business_invite','business_invoice_release',
    'business_invoice_request','business_invoice_runs_list','business_location_set','business_locations_list',
    'business_member_set','business_statement','business_update','finance_balance_kpis','finance_bookings_list',
    'finance_kpis','finance_summary','inventory_fifo_lots','inventory_fifo_movements','inventory_report',
    'inventory_summary_by_product','invite_employee_signature','lead_activity_add','lead_create','lead_status_set',
    'leads_list','list_employees_for_signature','my_advertising_campaigns','my_advertising_contracts','my_businesses',
    'submit_employee_signature','upsert_finance_balance'];
begin
  for f in
    select p.proname,
           coalesce(string_agg('null::'||format_type(t.oid, null), ',' order by o.ord), '') as argliste
    from pg_proc p
    join pg_namespace n on n.oid=p.pronamespace
    left join lateral unnest(p.proargtypes) with ordinality as o(typ, ord) on true
    left join pg_type t on t.oid = o.typ
    where n.nspname='public' and p.proname = any(liste)
    group by p.oid, p.proname
    order by p.proname
  loop
    call := format('select public.%I(%s)', f.proname, f.argliste);
    w := pruef.schreibe(call, A);
    insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
    values ('Vertikal-RPC', f.proname, 'Kunde A', 'Verwaltungsfunktion',
            'Abweisung (42501/P0001) oder leere Menge', w,
            (w like 'ERR:42501%' or w like 'ERR:P0001%' or w like 'ERR:P0002%'), call);
  end loop;
end $$;
