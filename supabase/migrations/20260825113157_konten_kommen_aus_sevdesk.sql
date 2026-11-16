delete from public.finance_bookings where source = 'sevdesk';

do $$
declare v_kann boolean;
begin
  select has_table_privilege('service_role', 'public.finance_accounts', 'INSERT')
     and has_table_privilege('service_role', 'public.finance_accounts', 'UPDATE')
    into v_kann;
  if not v_kann then
    raise exception 'service_role darf finance_accounts nicht pflegen — der Connector koennte keine Konten anlegen.';
  end if;
  raise notice 'Kontenpflege durch den Connector ist moeglich.';
end $$;
