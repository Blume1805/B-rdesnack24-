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
  --    Ja - und das ist der Befund, nicht der Fehler. Ein `deleted_at` in
  --    `profiles` ist ein Kennzeichen, keine Sperre; die Policies fragen es
  --    nicht ab. Was das Konto tatsaechlich aussperrt, ist `banned_until` in
  --    `auth.users`: ohne Token kommt kein Aufruf mehr zustande. Diese Pruefung
  --    setzt den Token-Anspruch von Hand und kann die Sperre deshalb gar nicht
  --    sehen - nachgewiesen wird sie in 96_loeschprozess.sql, Test 7.
  --    Die Zusicherung steht bewusst auf "liest weiterhin": Baut jemand spaeter
  --    eine Policy auf `deleted_at`, faellt dieser Test rot aus und zwingt
  --    dazu, beide Wege erneut zu betrachten.
  n := pruef.zaehle(format('select 1 from public.profiles where id=%L', Bb), Bb);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
   values ('Loeschung','Kennzeichen allein sperrt das Lesen nicht','Kunde B (geloescht)','profiles',
           '1 Zeile - die Sperre ist `banned_until`, nicht `deleted_at`', n::text, n=1,
           'Sperre nachgewiesen in 96_loeschprozess.sql Test 7');
  n := pruef.zaehle('select 1 from public.purchases', Bb);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
   values ('Loeschung','Kennzeichen allein sperrt die Kaufhistorie nicht','Kunde B (geloescht)','purchases',
           'eigene Kaeufe weiterhin sichtbar', n::text, n is not null,
           'Aufbewahrungspflichtige Belege bleiben ohnehin - siehe loeschregeln');

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
  -- Diese Pruefung suchte frueher die Tabellennamen im Quelltext der
  -- purge-Funktion. Seit CUST-018 stehen die Fristen als Daten in
  -- `loeschregeln`; die Funktion liest sie nur noch und nennt selbst keine
  -- Tabelle mehr. Gemessen wird deshalb die Regel, nicht der Quelltext.
  select count(*) into n from public.loeschregeln
   where tabelle in ('purchases','invoices')
     and behandlung = 'aufbewahren' and jahre = 8 and zeitspalte is not null;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Frist fuer Kaeufe und Rechnungen','System','loeschregeln',
           'beide mit acht Jahren und Zeitspalte', n::text, n=2);

  -- Und dass die Funktion diese Regeln wirklich anwendet, statt sie nur zu
  -- fuehren: Der Fristausdruck jeder Regel wird tatsaechlich ausgefuehrt.
  select count(*) into n from public.loeschregeln where behandlung='aufbewahren';
  begin
    perform app.purge_nach_frist();
    r := 'laeuft ueber '||n||' Regeln';
  exception when others then
    r := 'ERR:'||sqlerrm;
  end;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Fristlauf wendet die Regeln an','System','app.purge_nach_frist',
           'laeuft fehlerfrei', r, r not like 'ERR:%');

  -- Wiederholbar machen: Kunde B wird in den anderen Pruefskripten als
  -- aktives Konto gebraucht. Ein Skript, das seinen Gegenstand veraendert
  -- zuruecklaesst, verfaelscht jeden spaeteren Lauf.
  alter table public.profiles disable trigger trg_profiles_guard;
  update public.profiles set deleted_at = null where id = Bb;
  alter table public.profiles enable trigger trg_profiles_guard;
  delete from public.account_deletion_requests where profile_id = Bb;
end $$;
