do $$
declare
  r record;
  v_anzahl int := 0;
begin
  for r in
    select tablename from pg_tables where schemaname = 'public' order by tablename
  loop
    execute format(
      'revoke truncate, trigger, references on public.%I from anon, authenticated',
      r.tablename
    );
    v_anzahl := v_anzahl + 1;
  end loop;
  raise notice 'TRUNCATE/TRIGGER/REFERENCES auf % Tabellen entzogen.', v_anzahl;
end;
$$;

alter default privileges in schema public
  revoke truncate, trigger, references on tables from anon, authenticated;
