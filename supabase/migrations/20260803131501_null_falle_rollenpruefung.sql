do $$
declare
  r            record;
  v_def        text;
  v_neu        text;
  v_anzahl     int := 0;
  v_erwartet   int := 9;
  v_offen      int;
begin
  for r in
    select p.oid, p.proname
      from pg_proc p
      join pg_namespace n on n.oid = p.pronamespace
     where n.nspname = 'public'
       and p.prokind = 'f'
       and p.prosrc ~* 'v_role\s+(not in|<>|!=)'
       and p.prosrc !~* 'v_role is null'
     order by p.proname
  loop
    v_def := pg_get_functiondef(r.oid);
    v_neu := v_def;

    v_neu := regexp_replace(
      v_neu,
      'from public\.profiles\s+where\s+id\s*=\s*auth\.uid\(\)\s*;',
      'from public.profiles where id = auth.uid() and status = ''active'' and deleted_at is null;',
      'gi');
    v_neu := regexp_replace(
      v_neu,
      'from public\.profiles\s+where\s+profiles\.id\s*=\s*auth\.uid\(\)\s*;',
      'from public.profiles where profiles.id = auth.uid() and profiles.status = ''active'' and profiles.deleted_at is null;',
      'gi');

    v_neu := regexp_replace(v_neu, 'if\s+v_role\s+not\s+in\s*\(',
                            'if v_role is null or v_role not in (', 'gi');
    v_neu := regexp_replace(v_neu, 'if\s+v_role\s*(<>|!=)\s*',
                            'if v_role is null or v_role <> ', 'gi');

    if v_neu = v_def then
      raise exception 'Keine Ersetzung bei % — Muster passt nicht mehr', r.proname;
    end if;
    if v_neu !~* 'v_role is null' then
      raise exception 'NULL-Abfangung fehlt nach der Ersetzung bei %', r.proname;
    end if;

    execute v_neu;
    v_anzahl := v_anzahl + 1;
    raise notice 'repariert: %', r.proname;
  end loop;

  if v_anzahl <> v_erwartet then
    raise exception 'Erwartet waren % Funktionen, bearbeitet wurden %', v_erwartet, v_anzahl;
  end if;

  select count(*) into v_offen
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'public' and p.prokind = 'f'
     and p.prosrc ~* 'v_role\s+(not in|<>|!=)'
     and p.prosrc !~* 'v_role is null';
  if v_offen > 0 then
    raise exception 'Es sind noch % Funktionen mit offener NULL-Falle übrig', v_offen;
  end if;

  raise notice 'Fertig: % Funktionen repariert, keine offene NULL-Falle mehr', v_anzahl;
end $$;
