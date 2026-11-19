-- Probe zu 20261119100000 (Push-Schlüssel erzeugt der Server selbst).
-- Erwartung: Nur service_role liest und legt an; anon und authenticated
-- haben weder auf die Tabelle noch auf die Funktionen Rechte und scheitern
-- auch beim tatsächlichen Aufruf. Der erste Anleger gewinnt, ein zweiter
-- Aufruf überschreibt nichts. Falsche Längen werden abgewiesen.
truncate pruef.ergebnis restart identity;
delete from app.web_push_schluessel;

do $$
declare
  t text; v jsonb; w jsonb; ok boolean;
  P1 text := repeat('A', 87); D1 text := repeat('d', 43);
  P2 text := repeat('B', 87); D2 text := repeat('e', 43);
begin
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
  select 'push', 'Zeilenschutz an', 'postgres', 'true', c.relrowsecurity::text, c.relrowsecurity
    from pg_class c where c.oid = 'app.web_push_schluessel'::regclass;

  for t in select unnest(array['anon', 'authenticated']) loop
    insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('push', 'keine Rechte (Tabelle, Funktionen)', t, 'false/false/false',
      has_table_privilege(t, 'app.web_push_schluessel', 'select')::text || '/' ||
      has_function_privilege(t, 'public.web_push_schluessel()', 'execute')::text || '/' ||
      has_function_privilege(t, 'public.web_push_schluessel_anlegen(text,text)', 'execute')::text,
      not has_table_privilege(t, 'app.web_push_schluessel', 'select')
      and not has_function_privilege(t, 'public.web_push_schluessel()', 'execute')
      and not has_function_privilege(t, 'public.web_push_schluessel_anlegen(text,text)', 'execute'));
  end loop;
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('push', 'Dienstschlüssel darf', 'service_role', 'true/true',
    has_function_privilege('service_role', 'public.web_push_schluessel()', 'execute')::text || '/' ||
    has_function_privilege('service_role', 'public.web_push_schluessel_anlegen(text,text)', 'execute')::text,
    has_function_privilege('service_role', 'public.web_push_schluessel()', 'execute')
    and has_function_privilege('service_role', 'public.web_push_schluessel_anlegen(text,text)', 'execute'));

  v := public.web_push_schluessel();
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('push', 'vor dem Anlegen leer', 'postgres', 'null', coalesce(v::text, 'null'), v is null);

  v := public.web_push_schluessel_anlegen(P1, D1);
  w := public.web_push_schluessel_anlegen(P2, D2);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('push', 'erster gewinnt, zweiter überschreibt nicht', 'postgres',
    'beide Antworten = erstes Paar', (v = w and v->>'oeffentlich' = P1 and v->>'privat_d' = D1)::text,
    v = w and v->>'oeffentlich' = P1 and v->>'privat_d' = D1);

  delete from app.web_push_schluessel;
  begin
    perform public.web_push_schluessel_anlegen('zu kurz', D1);
    ok := false;
  exception when check_violation then ok := true;
  end;
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('push', 'falsche Länge abgewiesen', 'postgres', 'check_violation', ok::text, ok);
  perform public.web_push_schluessel_anlegen(P1, D1);
end $$;

-- Tatsächlicher Aufruf mit den Rollen der App (nicht nur Rechte-Abfrage).
create temp table if not exists push_aufruf (rolle text, art text, abgewiesen boolean);
grant all on push_aufruf to anon, authenticated;
do $$
declare r text; a text; abgewiesen boolean;
begin
  for r, a in select x, y from unnest(array['anon', 'authenticated']) x
                 cross join unnest(array['lesen', 'anlegen', 'tabelle']) y loop
    begin
      execute format('set local role %I', r);
      if a = 'lesen' then perform public.web_push_schluessel();
      elsif a = 'anlegen' then perform public.web_push_schluessel_anlegen(repeat('X', 87), repeat('y', 43));
      else perform 1 from app.web_push_schluessel;
      end if;
      abgewiesen := false;
    exception when insufficient_privilege then abgewiesen := true;
    end;
    reset role;
    insert into push_aufruf values (r, a, abgewiesen);
  end loop;
end $$;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'push', 'Aufruf abgewiesen: ' || art, rolle, 'abgewiesen', case when abgewiesen then 'abgewiesen' else 'DURCHGELASSEN' end, abgewiesen
  from push_aufruf;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'push', 'Paar nach Fremdversuchen unverändert', 'postgres', repeat('A', 87), k.oeffentlich, k.oeffentlich = repeat('A', 87)
  from app.web_push_schluessel k;
delete from app.web_push_schluessel;

select gruppe, test, akteur, erwartet, gemessen, ok from pruef.ergebnis order by id;
