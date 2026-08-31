drop function if exists app.grant_loyalty_bonus(uuid);

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
      and p.proname <> 'is_business_member'
  loop
    execute format('revoke execute on function %s from anon, authenticated', r.sig);
    v_anzahl := v_anzahl + 1;
  end loop;
  raise notice 'EXECUTE auf % Funktionen in app entzogen.', v_anzahl;
end;
$$;

alter default privileges in schema app
  revoke execute on functions from anon, authenticated;
