do $$
declare A uuid := '11111111-1111-1111-1111-111111111111';
        Bb uuid := '22222222-2222-2222-2222-222222222222';
        G uuid := '33333333-3333-3333-3333-333333333333';
        w text; r text; n int;
begin
  -- Loyalty: Punkte selbst gutschreiben (korrekte Spalten)
  w := pruef.schreibe(format('insert into public.customer_challenge_awards(customer_id,challenge_code,points) values (%L,''fake'',99999)', A), A);
  r := pruef.wahrheit(format('select count(*)::text from public.customer_challenge_awards where customer_id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Finanzintegritaet','Punkte selbst gutschreiben','Kunde A','customer_challenge_awards','Fehler; keine Zeile', w||' / vorhanden='||r, r='0');

  w := pruef.schreibe(format('insert into public.loyalty_bonus_grants(customer_id,month_start,tier) values (%L,date_trunc(''month'',now())::date,''gold'')', A), A);
  r := pruef.wahrheit(format('select count(*)::text from public.loyalty_bonus_grants where customer_id=%L', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Finanzintegritaet','Bonusstufe selbst setzen','Kunde A','loyalty_bonus_grants','Fehler; keine Zeile', w||' / vorhanden='||r, r='0');

  -- Kaufhistorie faelschen (Punkte entstehen aus Kaeufen)
  w := pruef.schreibe(format('insert into public.purchases(customer_id,total_gross,purchased_at) values (%L,999.00,now())', A), A);
  r := pruef.wahrheit(format('select count(*)::text from public.purchases where customer_id=%L and total_gross=999.00', A));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Finanzintegritaet','Kauf selbst buchen','Kunde A','purchases','Fehler; keine Zeile', w||' / vorhanden='||r, r='0');

  -- Vertikale Rechteausweitung: Kunde gegen Gesellschafterdaten
  n := pruef.zaehle('select 1 from public.finance_bookings', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Vertikal','finance_bookings lesen','Kunde A','Buchhaltung','0 oder Fehler', n::text, n<=0);

  -- Korrektur 26.09.2026: Ohne Rechnung im Pruefbestand war „0" kein
  -- Nachweis (ok = null). Jetzt je eine Rechnung fuer A und B in einer
  -- Untertransaktion, die zurueckgerollt wird; gemessen wird, dass A genau
  -- die eigene sieht und der Gesellschafter beide.
  declare na int; nb int; ng int;
  begin
    insert into public.invoices(purchase_id, customer_id, invoice_number, total_gross)
    values ('a1000000-0000-0000-0000-000000000001', A,  'PRUEF-70-A', 3.50),
           ('b1000000-0000-0000-0000-000000000001', Bb, 'PRUEF-70-B', 4.50);
    na := pruef.zaehle('select 1 from public.invoices where invoice_number like ''PRUEF-70-%''', A);
    nb := pruef.zaehle('select 1 from public.invoices where invoice_number = ''PRUEF-70-B''', A);
    ng := pruef.zaehle('select 1 from public.invoices where invoice_number like ''PRUEF-70-%''', G);
    raise exception using errcode = 'P0070', message = 'zurueckrollen';
  exception when sqlstate 'P0070' then
    insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
     values ('Vertikal','invoices lesen (alle)','Kunde A','Rechnungen',
             'nur eigene: 1 von 2, fremde 0, Gesellschafter 2',
             format('A sieht %s, davon fremd %s; G sieht %s', na, nb, ng),
             na = 1 and nb = 0 and ng = 2);
  end;

  n := pruef.zaehle('select 1 from public.inventory_movements', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Vertikal','inventory_movements (EK je Bewegung)','Kunde A','Warenwirtschaft','0 oder Fehler', n::text, n<=0);

  n := pruef.zaehle('select 1 from public.pkw_kosten', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Vertikal','pkw_kosten lesen','Kunde A','Fahrzeugkosten','0 oder Fehler', n::text, n<=0);

  n := pruef.zaehle('select 1 from public.audit_log', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Vertikal','audit_log lesen','Kunde A','Aenderungsprotokoll','0 oder Fehler', n::text, n<=0);

  -- Kunde ruft Verwaltungs-RPCs
  w := pruef.schreibe('select public.finance_summary(current_date - 30, current_date)', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Vertikal','RPC finance_summary','Kunde A','Finanzauswertung','Fehler 42501', w, w like 'ERR%');

  w := pruef.schreibe('select public.inventory_report()', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Vertikal','RPC inventory_report','Kunde A','Bestandsbericht','Fehler 42501', w, w like 'ERR%');

  -- Gegenprobe: Gesellschafter darf, was er darf
  n := pruef.zaehle('select 1 from public.finance_accounts', G);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','finance_accounts als Gesellschafter','Gesellschafter G','Kontenplan','>0', n::text, n>0);

  -- Datenminimierung: was liefert die Kunden-RPC?
  r := pruef.lies('select public.product_detail(''e0000000-0000-0000-0000-00000000000a'')::text', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Datenminimierung','RPC product_detail','Kunde A','Produktdetails','kein EK-Preis in der Antwort', left(r,300), r not ilike '%cost%');
end $$;
