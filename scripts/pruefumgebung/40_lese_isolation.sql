-- Lese-Isolation über ALLE Tabellen des Schemas public.
-- Gemessen wird die Zeilenzahl je Rolle gegen die Wahrheit (postgres).
truncate pruef.ergebnis restart identity;

do $$
declare t record; n_truth int; n_anon int; n_a int; n_b int; n_g int;
  A uuid := '11111111-1111-1111-1111-111111111111';
  Bb uuid := '22222222-2222-2222-2222-222222222222';
  G uuid := '33333333-3333-3333-3333-333333333333';
begin
  for t in select tablename from pg_tables where schemaname='public' order by tablename loop
    execute format('select count(*) from public.%I', t.tablename) into n_truth;
    n_anon := pruef.zaehle(format('select 1 from public.%I', t.tablename), null, 'anon');
    n_a    := pruef.zaehle(format('select 1 from public.%I', t.tablename), A);
    n_b    := pruef.zaehle(format('select 1 from public.%I', t.tablename), Bb);
    n_g    := pruef.zaehle(format('select 1 from public.%I', t.tablename), G);
    insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
    values ('T1-Lesen', t.tablename, 'anon/A/B/G', 'ganze Tabelle',
            'Wahrheit='||n_truth,
            format('anon=%s A=%s B=%s G=%s', n_anon, n_a, n_b, n_g),
            null, null);
  end loop;
end $$;
