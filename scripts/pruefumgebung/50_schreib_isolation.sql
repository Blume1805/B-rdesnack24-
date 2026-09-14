truncate pruef.ergebnis restart identity;
do $$
declare
  A uuid := '11111111-1111-1111-1111-111111111111';
  Bb uuid := '22222222-2222-2222-2222-222222222222';
  r text; w text;
begin
  -- T3: A ändert Daten von B ------------------------------------------------
  w := pruef.schreibe(format('update public.profiles set full_name=''GEKAPERT'' where id=%L', Bb), A);
  r := pruef.wahrheit(format('select full_name from public.profiles where id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T3-Aendern','profiles.full_name','Kunde A','Kunde B','0 Zeilen oder Fehler; Name unveraendert', w||' / gespeichert='||r, r <> 'GEKAPERT');

  w := pruef.schreibe(format('update public.consents set granted=false where profile_id=%L', Bb), A);
  r := pruef.wahrheit(format('select bool_and(granted)::text from public.consents where profile_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T3-Aendern','consents.granted','Kunde A','Kunde B','0 Zeilen; weiterhin true', w||' / gespeichert='||r, r = 'true');

  w := pruef.schreibe(format('update public.device_tokens set token=''gekapert'' where user_id=%L', Bb), A);
  r := pruef.wahrheit(format('select token from public.device_tokens where user_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T3-Aendern','device_tokens.token','Kunde A','Kunde B','0 Zeilen; Token unveraendert', w||' / gespeichert='||r, r = 'tok-b');

  w := pruef.schreibe(format('update public.product_ratings set rating=1 where customer_id=%L', Bb), A);
  r := pruef.wahrheit(format('select min(rating)::text from public.product_ratings where customer_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T3-Aendern','product_ratings.rating','Kunde A','Kunde B','0 Zeilen; Bewertung 4', w||' / gespeichert='||r, r = '4');

  w := pruef.schreibe(format('update public.customer_prices set price_net=0.01 where customer_id=%L', Bb), A);
  r := pruef.wahrheit(format('select min(price_net)::text from public.customer_prices where customer_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T3-Aendern','customer_prices.price_net','Kunde A','Kunde B','0 Zeilen; Preis 1.99', w||' / gespeichert='||r, r = '1.99');

  -- T4: A löscht Daten von B ------------------------------------------------
  w := pruef.schreibe(format('delete from public.notifications where user_id=%L', Bb), A);
  r := pruef.wahrheit(format('select count(*)::text from public.notifications where user_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T4-Loeschen','notifications','Kunde A','Kunde B','0 geloescht; Zeilen bleiben', w||' / verbleibend='||r, r <> '0');

  w := pruef.schreibe(format('delete from public.device_tokens where user_id=%L', Bb), A);
  r := pruef.wahrheit(format('select count(*)::text from public.device_tokens where user_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T4-Loeschen','device_tokens','Kunde A','Kunde B','0 geloescht; Zeile bleibt', w||' / verbleibend='||r, r <> '0');

  -- Voraussetzung selbst herstellen. Diese Zeile stammte bisher aus einem
  -- anderen Pruefskript; raeumt das auf, misst dieser Negativtest nichts mehr
  -- und faellt rot aus, obwohl der Schutz greift.
  insert into public.account_deletion_requests(profile_id, reason)
  select Bb, 'Voraussetzung fuer T4'
   where not exists (select 1 from public.account_deletion_requests where profile_id = Bb);

  w := pruef.schreibe(format('delete from public.account_deletion_requests where profile_id=%L', Bb), A);
  r := pruef.wahrheit(format('select count(*)::text from public.account_deletion_requests where profile_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T4-Loeschen','account_deletion_requests','Kunde A','Kunde B','0 geloescht; Zeile bleibt', w||' / verbleibend='||r, r <> '0');

  w := pruef.schreibe(format('delete from public.consents where profile_id=%L', Bb), A);
  r := pruef.wahrheit(format('select count(*)::text from public.consents where profile_id=%L', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T4-Loeschen','consents','Kunde A','Kunde B','0 geloescht; Zeilen bleiben', w||' / verbleibend='||r, r <> '0');

  -- T2: A schreibt Daten UNTER FREMDER ID ----------------------------------
  w := pruef.schreibe(format('insert into public.product_ratings(customer_id,product_id,rating) values (%L,''e0000000-0000-0000-0000-00000000000a'',1)', Bb), A);
  r := pruef.wahrheit(format('select count(*)::text from public.product_ratings where customer_id=%L and rating=1', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T2-ID-Tausch','product_ratings','Kunde A','Kunde B','Fehler; keine Zeile', w||' / vorhanden='||r, r = '0');

  w := pruef.schreibe(format('insert into public.consents(profile_id,type,granted) values (%L,''marketing'',true)', Bb), A);
  r := pruef.wahrheit(format('select count(*)::text from public.consents where profile_id=%L and type=''marketing''', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T2-ID-Tausch','consents (Einwilligung fuer Fremden)','Kunde A','Kunde B','Fehler; keine Zeile', w||' / vorhanden='||r, r = '0');

  w := pruef.schreibe(format('insert into public.device_tokens(user_id,token,platform) values (%L,''untergeschoben'',''android'')', Bb), A);
  r := pruef.wahrheit(format('select count(*)::text from public.device_tokens where user_id=%L and token=''untergeschoben''', Bb));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('T2-ID-Tausch','device_tokens (Push an Fremden)','Kunde A','Kunde B','Fehler; keine Zeile', w||' / vorhanden='||r, r = '0');

  -- Gegenprobe: eigene Daten dürfen ----------------------------------------
  w := pruef.schreibe(format('update public.profiles set full_name=''Kunde A neu'' where id=%L', A), A);
  r := pruef.wahrheit(format('select full_name from public.profiles where id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','profiles.full_name (eigenes)','Kunde A','Kunde A','1 Zeile; Name geaendert', w||' / gespeichert='||r, r = 'Kunde A neu');

  w := pruef.schreibe(format('update public.product_ratings set rating=2 where customer_id=%L', A), A);
  r := pruef.wahrheit(format('select min(rating)::text from public.product_ratings where customer_id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','product_ratings (eigene)','Kunde A','Kunde A','1 Zeile; Bewertung 2', w||' / gespeichert='||r, r = '2');

  -- Mass Assignment auf dem eigenen Profil ----------------------------------
  w := pruef.schreibe(format('update public.profiles set role=''system_admin'' where id=%L', A), A);
  r := pruef.wahrheit(format('select role::text from public.profiles where id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Mass Assignment','profiles.role','Kunde A','eigenes Profil','Fehler; Rolle bleibt customer', w||' / gespeichert='||r, r = 'customer');

  w := pruef.schreibe(format('update public.profiles set status=''active'', deleted_at=null, archived_at=null, id=%L where id=%L', Bb, A), A);
  r := pruef.wahrheit(format('select count(*)::text from public.profiles where id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Mass Assignment','profiles.id (Identitaetstausch)','Kunde A','eigenes Profil','Fehler; Zeile bleibt', w||' / eigene Zeile='||r, r = '1');

  w := pruef.schreibe(format('update public.profiles set email=''opfer@example.invalid'' where id=%L', A), A);
  r := pruef.wahrheit(format('select email::text from public.profiles where id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Mass Assignment','profiles.email (frei setzbar?)','Kunde A','eigenes Profil','soll scheitern', w||' / gespeichert='||r, r <> 'opfer@example.invalid');

  w := pruef.schreibe(format('update public.profiles set birth_date=''2000-01-01'' where id=%L', A), A);
  r := pruef.wahrheit(format('select coalesce(birth_date::text,''<null>'') from public.profiles where id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Mass Assignment','profiles.birth_date','Kunde A','eigenes Profil','Erstsetzung erlaubt, spaetere Aenderung nicht', w||' / gespeichert='||r, null);
end $$;
