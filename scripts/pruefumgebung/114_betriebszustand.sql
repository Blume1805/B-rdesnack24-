-- Probe der täglichen Betriebsprüfung (Audit A2-15).
-- Hinweis: Skalare Funktionsaufrufe stehen hier im FROM-Teil, weil der Planer
-- einen Aufruf in der Select-Liste unter count(*) weglässt und eine fehlende
-- Berechtigung dann nicht bemerkt wird (am 16.11.2026 beim Schreiben gesehen).
-- Erwartung: Die Prüfung läuft, schreibt einen Eintrag, und nur interne
-- Konten mit Berechtigung lesen den letzten Stand. Kunden sehen nichts,
-- anon und authenticated erreichen die Prüffunktion und das Protokoll nicht.
truncate pruef.ergebnis restart identity;
-- Grundzustand: jede geplante Aufgabe ist zuletzt erfolgreich gelaufen
-- (der Nachbau kennt seit 17.11.2026 das Laufprotokoll).
delete from cron.job_run_details;
insert into cron.job_run_details(jobid, status, start_time)
select jobid, 'succeeded', now() - interval '1 hour' from cron.job;
select app.betriebszustand_festhalten();
do $$
declare
  K uuid := '11111111-1111-1111-1111-111111111111';  -- Kunde
  G uuid := '33333333-3333-3333-3333-333333333333';  -- Gesellschafter
  S uuid := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';  -- Systemadministrator
  n int; v jsonb;
begin
  v := app.betriebszustand();
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values
   ('betrieb','Prüfung liefert gesund-Feld','postgres','boolean', jsonb_typeof(v->'gesund'), jsonb_typeof(v->'gesund') = 'boolean'),
   ('betrieb','Prüfung meldet frischen Nachbau gesund','postgres','true', v->>'gesund', (v->>'gesund')::boolean);

  n := pruef.zaehle('select * from public.betriebszustand_letzter()', K);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('betrieb','Kunde liest Betriebsstand','kunde','0',n::text,n=0);
  n := pruef.zaehle('select * from public.betriebszustand_letzter()', G);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('betrieb','Gesellschafter liest Betriebsstand','gesellschafter','1',n::text,n=1);
  n := pruef.zaehle('select * from public.betriebszustand_letzter()', S);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('betrieb','Admin liest Betriebsstand','admin','1',n::text,n=1);
  n := pruef.zaehle('select * from public.betriebszustand_letzter()', null, 'anon');
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('betrieb','anon liest Betriebsstand','anon','-1',n::text,n=-1);
  n := pruef.zaehle('select * from app.betriebszustand() as x(v)', G);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('betrieb','Gesellschafter ruft Prüffunktion direkt','gesellschafter','-1',n::text,n=-1);
  n := pruef.zaehle('select * from app.betriebsprotokoll', S);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('betrieb','Admin liest Protokolltabelle direkt','admin','-1',n::text,n=-1);

  -- Korrektur 17.11.2026 (20261117090000):
  -- (a) Die Prüfung meldet ihren eigenen laufenden Lauf nicht als Fehler.
  delete from cron.job_run_details;
  insert into cron.job_run_details(jobid, status, start_time)
  select jobid, 'running', now() from cron.job where jobname = 'betriebszustand';
  insert into cron.job_run_details(jobid, status, start_time)
  select jobid, 'succeeded', now() - interval '1 hour' from cron.job where jobname <> 'betriebszustand';
  v := app.betriebszustand();
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values
   ('betrieb','eigener laufender Lauf zählt nicht als Fehler','postgres','[]', v->>'aufgaben_auffaellig', jsonb_array_length(v->'aufgaben_auffaellig') = 0);
  -- (b) Gegenprobe: eine fehlgeschlagene andere Aufgabe wird gemeldet.
  update cron.job_run_details set status = 'failed'
   where jobid = (select jobid from cron.job where jobname <> 'betriebszustand' order by jobid limit 1);
  v := app.betriebszustand();
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values
   ('betrieb','fehlgeschlagene Aufgabe wird gemeldet','postgres','1', jsonb_array_length(v->'aufgaben_auffaellig')::text, jsonb_array_length(v->'aufgaben_auffaellig') = 1 and (v->>'gesund')::boolean = false);
  delete from cron.job_run_details;
  -- (c) Gesperrte interne Konten zählen nicht mit.
  n := (app.betriebszustand()->>'interne_konten')::int;
  update auth.users set banned_until = 'infinity' where id = G;
  v := app.betriebszustand();
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values
   ('betrieb','gesperrtes internes Konto zählt nicht','postgres',(n-1)::text, v->>'interne_konten', (v->>'interne_konten')::int = n - 1);
  update auth.users set banned_until = null where id = G;
end $$;
select gruppe, test, erwartet, gemessen, ok from pruef.ergebnis order by id;
