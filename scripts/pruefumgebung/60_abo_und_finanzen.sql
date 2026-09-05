do $$
declare M uuid := '44444444-4444-4444-4444-444444444444';
        A uuid := '11111111-1111-1111-1111-111111111111';
        w text; r text;
begin
  -- Negativtest: ohne Häkchen muss es scheitern
  w := pruef.schreibe('select public.choose_subscription_plan(''monthly'', false, false)', M);
  r := pruef.wahrheit(format('select count(*)::text from public.customer_subscriptions where customer_id=%L', M));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Abo/Jugendschutz','ohne Alters-Haekchen','Minderjaehriger M (geb. 2012)','choose_subscription_plan','Fehler; kein Abo', w||' / Abos='||r, r='0');

  -- Der eigentliche Test: Minderjähriger setzt das Häkchen selbst
  w := pruef.schreibe('select public.choose_subscription_plan(''monthly'', true, true)', M);
  r := pruef.wahrheit(format('select plan::text||'' zu ''||price_cents||'' Cent'' from public.customer_subscriptions where customer_id=%L order by seq desc limit 1', M));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Abo/Jugendschutz','mit selbst gesetztem Alters-Haekchen','Minderjaehriger M (geb. 2012)','choose_subscription_plan','SOLL scheitern (Geburtsdatum liegt vor)', w||' / gespeichert='||r, w like 'ERR%');

  -- Finanzintegrität: Preis direkt in die Tabelle schreiben
  w := pruef.schreibe(format('insert into public.customer_subscriptions(customer_id,plan,price_cents,billing_label,age_consent) values (%L,''yearly'',1,''1 Cent'',true)', A), A);
  r := pruef.wahrheit(format('select count(*)::text from public.customer_subscriptions where customer_id=%L and price_cents=1', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Finanzintegritaet','Preis selbst setzen','Kunde A','customer_subscriptions','Fehler; keine Zeile', w||' / vorhanden='||r, r='0');

  -- Finanzintegrität: bestehendes Abo auf Lifetime hochschreiben
  w := pruef.schreibe(format('update public.customer_subscriptions set plan=''lifetime'', price_cents=0 where customer_id=%L', M), M);
  r := pruef.wahrheit(format('select count(*)::text from public.customer_subscriptions where customer_id=%L and plan=''lifetime''', M));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Finanzintegritaet','Abo selbst hochstufen','Minderjaehriger M','customer_subscriptions','Fehler; kein Lifetime', w||' / lifetime='||r, r='0');

  -- Loyalty/Punkte: gibt es eine Punktetabelle, die der Client schreiben kann?
  w := pruef.schreibe(format('insert into public.loyalty_bonus_grants(customer_id,kind,points) values (%L,''test'',99999)', A), A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Finanzintegritaet','Punkte selbst gutschreiben','Kunde A','loyalty_bonus_grants','Fehler', w, w like 'ERR%');
end $$;
