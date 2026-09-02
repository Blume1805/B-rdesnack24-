truncate pruef.ergebnis restart identity;
do $$
declare
  Bb uuid := '22222222-2222-2222-2222-222222222222';
  A  uuid := '11111111-1111-1111-1111-111111111111';
  w text; r text; n int;
begin
  -- Kunde B stellt einen Loeschantrag und wird als geloescht markiert
  perform pruef.schreibe('select public.request_account_deletion(''Test'')', Bb);
  alter table public.profiles disable trigger trg_profiles_guard;
  update public.profiles set deleted_at = now() where id = Bb;
  alter table public.profiles enable trigger trg_profiles_guard;

  r := pruef.wahrheit(format('select (deleted_at is not null)::text from public.profiles where id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Kennzeichen gesetzt','System','Kunde B','true', r, r='true');

  -- 1) Kann das geloeschte Konto weiterhin seine Daten lesen?
  n := pruef.zaehle(format('select 1 from public.profiles where id=%L', Bb), Bb);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','geloeschtes Konto liest eigenes Profil','Kunde B (geloescht)','profiles','0 Zeilen', n::text, n=0);
  n := pruef.zaehle('select 1 from public.purchases', Bb);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','geloeschtes Konto liest Kaufhistorie','Kunde B (geloescht)','purchases','0 Zeilen', n::text, n=0);

  -- 2) Bekommt das geloeschte Konto weiterhin Post?
  w := pruef.wahrheit(format('select public.email_enqueue(''abo_bestaetigung'', %L)::text', Bb));
  r := pruef.wahrheit(format('select count(*)::text from public.email_outbox where profile_id=%L and status=''queued''', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Post an ein geloeschtes Konto','System','email_enqueue','keine Zeile in der Warteschlange', 'ergebnis='||left(w,20)||' / queued='||r, r='0');

  -- 3) Erzeugt das System weiterhin Angebote fuer das geloeschte Konto?
  w := pruef.wahrheit(format('select public.grant_birthday_offer(%L)::text', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Geburtstagsangebot fuer ein geloeschtes Konto','System','grant_birthday_offer','keine Erzeugung', left(coalesce(w,'<null>'),40), w is null or w like 'ERR%' or w='<null>');

  -- 4) Taucht es weiterhin in internen Listen auf?
  n := pruef.zaehle(format('select 1 from public.profiles where id=%L', Bb), '33333333-3333-3333-3333-333333333333');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','geloeschtes Konto in der internen Nutzerliste','Gesellschafter','profiles','sichtbar bleibt zulaessig (Aufbewahrung)', n::text, null);

  -- 5) Gibt es ueberhaupt eine Ausfuehrung der Loeschung?
  select count(*) into n from pg_proc p join pg_namespace nn on nn.oid=p.pronamespace
   where nn.nspname in ('public','app') and p.prokind='f'
     and (p.proname ~ 'execute_account_deletion|anonymisier|konto_loeschen|delete_account');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Funktion, die den Loeschantrag ausfuehrt','System','Datenbank','mindestens eine', n::text, n>0);

  -- 6) Gibt es Aufbewahrungsfristen fuer Belege?
  select count(*) into n from cron.job where command ~ 'purge';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','geplante Loeschlaeufe','System','cron.job','Anzahl', n::text, null);
  select count(*) into n from pg_proc p join pg_namespace nn on nn.oid=p.pronamespace
   where nn.nspname='app' and p.proname ~ 'purge' and pg_get_functiondef(p.oid) ~ 'purchases|invoices';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Frist fuer Kaeufe und Rechnungen','System','purge-Funktionen','mindestens eine', n::text, n>0);
end $$;
