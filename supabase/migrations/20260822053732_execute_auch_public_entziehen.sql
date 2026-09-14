do $$
declare
  r record;
  v_anzahl int := 0;
begin
  for r in
    select p.oid::regprocedure as sig
    from pg_proc p
    where p.pronamespace = 'app'::regnamespace
      and p.prokind = 'f'
  loop
    execute format('revoke execute on function %s from public, anon, authenticated', r.sig);
    v_anzahl := v_anzahl + 1;
  end loop;
  raise notice 'EXECUTE (inkl. PUBLIC) auf % Funktionen in app entzogen.', v_anzahl;
end;
$$;

grant execute on function app.is_business_member(uuid, app.business_role)
  to authenticated;

do $$
begin
  if not has_function_privilege(
       'authenticated',
       'app.is_business_member(uuid, app.business_role)',
       'EXECUTE') then
    raise exception
      'app.is_business_member hat das Ausführungsrecht für authenticated verloren. Sechs Zugriffsregeln auf businesses, business_members, business_locations und payments werten sie unter dem aufrufenden Konto aus — ohne das Recht schlägt jeder Firmenzugriff fehl.';
  end if;
end;
$$;

alter default privileges in schema app
  revoke execute on functions from public, anon, authenticated;
