-- Probe zu A2-02: weather-sync nur mit Einmalmarke.
-- Prüft die Datenbankseite: Marke wird angelegt, genau einmal einlösbar,
-- abgelaufene und erfundene Marken werden abgelehnt, und nur der
-- Dienstschlüssel darf einlösen. Die Funktion selbst prüft marke_test.ts.
truncate pruef.ergebnis restart identity;
delete from app.wetter_abruf_marken;
do $$
declare
  K uuid := '11111111-1111-1111-1111-111111111111';
  S uuid := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
  m uuid; alt uuid; n int; b boolean;
begin
  perform app.wetter_abruf_ausloesen();
  select marke into m from app.wetter_abruf_marken order by angelegt desc limit 1;
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','Auslösen legt Marke an','cron','1',(select count(*) from app.wetter_abruf_marken)::text,(select count(*) from app.wetter_abruf_marken)=1);

  b := public.wetter_marke_einloesen(gen_random_uuid());
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','erfundene Marke','service_role','false',b::text,b=false);
  b := public.wetter_marke_einloesen(m);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','gültige Marke, erstes Einlösen','service_role','true',b::text,b=true);
  b := public.wetter_marke_einloesen(m);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','dieselbe Marke zweimal','service_role','false',b::text,b=false);

  insert into app.wetter_abruf_marken(angelegt) values (now() - interval '11 minutes') returning marke into alt;
  b := public.wetter_marke_einloesen(alt);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','abgelaufene Marke (11 min)','service_role','false',b::text,b=false);

  perform app.wetter_abruf_ausloesen();
  select marke into m from app.wetter_abruf_marken order by angelegt desc limit 1;
  n := pruef.zaehle(format('select * from public.wetter_marke_einloesen(%L::uuid) x', m), null, 'anon');
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','anon löst ein','anon','-1',n::text,n=-1);
  n := pruef.zaehle(format('select * from public.wetter_marke_einloesen(%L::uuid) x', m), S);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','Admin löst ein','admin','-1',n::text,n=-1);
  n := pruef.zaehle('select * from app.wetter_abruf_ausloesen() x', K);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','Kunde löst Abruf aus','kunde','-1',n::text,n=-1);
  n := pruef.zaehle('select * from app.wetter_abruf_marken', S);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','Admin liest Marken','admin','-1',n::text,n=-1);
  b := exists (select 1 from app.wetter_abruf_marken where marke = m);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-02','Marke nach abgewiesenen Versuchen noch da','postgres','true',b::text,b);
end $$;
select gruppe, test, erwartet, gemessen, ok from pruef.ergebnis order by id;
select 'geplante Aufgabe: ' || jobname || ' ' || schedule || ' ' || command from cron.job where jobname = 'weather-sync';
