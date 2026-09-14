truncate pruef.ergebnis restart identity;
do $$
declare
  A1 uuid := 'f1a00000-0000-0000-0000-000000000001';  -- Admin Firma 1 (Angreifer)
  M1 uuid := 'f1c00000-0000-0000-0000-000000000003';  -- einfaches Mitglied Firma 1
  A2 uuid := 'f2a00000-0000-0000-0000-000000000002';  -- Admin Firma 2 (Opfer)
  F1 uuid := 'b1000000-0000-0000-0000-0000000000f1';
  F2 uuid := 'b2000000-0000-0000-0000-0000000000f2';
  C2 uuid := 'c2000000-0000-0000-0000-0000000000f2';  -- Kampagne Firma 2
  D2 uuid := 'd2000000-0000-0000-0000-0000000000f2';  -- Werbemittel Firma 2
  V2 uuid := 'a1000000-0000-0000-0000-0000000000f2';  -- Werbevertrag Firma 2
  R2 uuid := '91000000-0000-0000-0000-0000000000f2';  -- Abrechnungslauf Firma 2
  I2 uuid := '93000000-0000-0000-0000-0000000000f2';  -- Einladung Firma 2
  L2 uuid := '20000000-0000-0000-0000-0000000000f2';  -- Standort Firma 2
  w text; r text; n int;
  j int := extract(year from current_date)::int;
  m int := extract(month from current_date)::int;

  procedure_ergebnis text;
begin
  -- ---- Lesende Funktionen mit fremder Firmen-ID ------------------------
  w := pruef.schreibe(format('select public.business_dashboard(%L)', F2), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B lesen','business_dashboard','Admin Firma 1','Firma 2','Abweisung', w, w like 'ERR%');

  w := pruef.schreibe(format('select * from public.business_locations_list(%L)', F2), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B lesen','business_locations_list','Admin Firma 1','Firma 2','Abweisung', w, w like 'ERR%');

  w := pruef.schreibe(format('select public.business_statement(%L,%s,%s)', F2, j, m), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B lesen','business_statement','Admin Firma 1','Firma 2','Abweisung', w, w like 'ERR%');

  w := pruef.schreibe(format('select * from public.business_invoice_runs_list(%L)', F2), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B lesen','business_invoice_runs_list','Admin Firma 1','Firma 2','Abweisung', w, w like 'ERR%');

  w := pruef.schreibe(format('select public.advertising_campaign_report(%L)', C2), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B lesen','advertising_campaign_report','Admin Firma 1','Kampagne Firma 2','Abweisung', w, w like 'ERR%');

  -- ---- Schreibende Funktionen, danach gespeicherten Zustand pruefen -----
  w := pruef.schreibe(format('select public.business_update(%L, ''{"name":"GEKAPERT"}''::jsonb)', F2), A1);
  r := pruef.wahrheit(format('select name from public.businesses where id=%L', F2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_update','Admin Firma 1','Firma 2','Abweisung, Name unveraendert', w||' / '||r, r='Firma Zwei GmbH');

  w := pruef.schreibe(format('select public.business_invite(%L, ''eindringling@test.invalid'')', F2), A1);
  r := pruef.wahrheit(format('select count(*)::text from public.business_invitations where business_id=%L', F2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_invite','Admin Firma 1','Firma 2','Abweisung, 1 Einladung bleibt', w||' / Einladungen='||r, r='1');

  w := pruef.schreibe(format('select public.business_member_set(%L,%L,''member'',''removed'')', F2, A2), A1);
  r := pruef.wahrheit(format('select role::text||''/''||status::text from public.business_members where business_id=%L and profile_id=%L', F2, A2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_member_set (Admin absetzen)','Admin Firma 1','Firma 2','Abweisung, admin/active bleibt', w||' / '||r, r='admin/active');

  w := pruef.schreibe(format('select public.business_budget_set(%L,%L,999999)', F2, A2), A1);
  r := pruef.wahrheit(format('select max(monatslimit_brutto)::text from public.business_budgets where business_id=%L', F2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_budget_set','Admin Firma 1','Firma 2','Abweisung, Limit 200 bleibt', w||' / Limit='||r, r='200.00' or r='200');

  w := pruef.schreibe(format('select public.business_location_set(%L,%L,false)', F2, L2), A1);
  r := pruef.wahrheit(format('select count(*)::text from public.business_locations where business_id=%L', F2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_location_set (Standort entziehen)','Admin Firma 1','Firma 2','Abweisung, Zuordnung bleibt', w||' / Standorte='||r, r='1');

  w := pruef.schreibe(format('select public.business_invitation_revoke(%L)', I2), A1);
  r := pruef.wahrheit(format('select coalesce(revoked_at::text,''offen'') from public.business_invitations where id=%L', I2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_invitation_revoke','Admin Firma 1','Firma 2','Abweisung, Einladung bleibt offen', w||' / '||r, r='offen');

  w := pruef.schreibe(format('select public.business_invoice_request(%L,%s,%s)', F2, j, m), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_invoice_request','Admin Firma 1','Firma 2','Abweisung', w, w like 'ERR%');

  w := pruef.schreibe(format('select public.business_invoice_release(%L)', R2), A1);
  r := pruef.wahrheit(format('select status::text from public.business_invoice_runs where id=%L', R2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('B2B schreiben','business_invoice_release','Admin Firma 1','Firma 2','Abweisung, Status unveraendert', w||' / '||r, r='angefordert');

  -- ---- Werbegeschaeft mit fremden IDs ----------------------------------
  w := pruef.schreibe(format('select public.advertising_campaign_set(%L,''Untergeschoben'',''analog'',current_date)', F2), A1);
  r := pruef.wahrheit(format('select count(*)::text from public.advertising_campaigns where business_id=%L', F2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Werbung','advertising_campaign_set (fremde Firma)','Admin Firma 1','Firma 2','Abweisung, 1 Kampagne bleibt', w||' / Kampagnen='||r, r='1');

  w := pruef.schreibe(format('select public.advertising_campaign_status(%L,''cancelled'')', C2), A1);
  r := pruef.wahrheit(format('select status::text from public.advertising_campaigns where id=%L', C2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Werbung','advertising_campaign_status (fremde Kampagne stoppen)','Admin Firma 1','Kampagne Firma 2','Abweisung, active bleibt', w||' / '||r, r='active');

  w := pruef.schreibe(format('select public.advertising_creative_upload(%L,''aushang'',''https://boese.invalid/x.png'')', C2), A1);
  r := pruef.wahrheit(format('select count(*)::text from public.advertising_creatives where campaign_id=%L', C2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Werbung','advertising_creative_upload (fremde Kampagne)','Admin Firma 1','Kampagne Firma 2','Abweisung, 1 Werbemittel bleibt', w||' / '||r, r='1');

  w := pruef.schreibe(format('select public.advertising_creative_review(%L,''approved'')', D2), A1);
  r := pruef.wahrheit(format('select status::text from public.advertising_creatives where id=%L', D2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Werbung','advertising_creative_review (sich selbst freigeben)','Admin Firma 1','Werbemittel Firma 2','Abweisung, pending bleibt', w||' / '||r, r='pending_review');

  w := pruef.schreibe(format('select public.advertising_contract_status(%L,''gekuendigt'')', V2), A1);
  r := pruef.wahrheit(format('select status::text from public.advertising_space_contracts where id=%L', V2));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Werbung','advertising_contract_status (fremden Vertrag kuendigen)','Admin Firma 1','Vertrag Firma 2','Abweisung, aktiv bleibt', w||' / '||r, r='aktiv');

  w := pruef.schreibe(format('select public.advertising_motif_approve(%L,''Angreifer'')', V2), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Werbung','advertising_motif_approve (fremder Vertrag)','Admin Firma 1','Vertrag Firma 2','Abweisung', w, w like 'ERR%');

  w := pruef.schreibe(format('select public.advertising_coupon_sponsorship_set(%L,''geburtstag'',current_date,current_date+30)', C2), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Werbung','advertising_coupon_sponsorship_set (fremde Kampagne)','Admin Firma 1','Kampagne Firma 2','Abweisung', w, w like 'ERR%');

  -- ---- Mitgliedschaftsgebundene Listen ---------------------------------
  r := pruef.lies('select public.my_businesses()::text', A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Sichtbarkeit','my_businesses','Admin Firma 1','eigene Mitgliedschaft','nur Firma Eins', left(r,120),
           r like '%Firma Eins%' and r not like '%Firma Zwei%');

  r := pruef.lies('select public.my_advertising_campaigns()::text', A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Sichtbarkeit','my_advertising_campaigns','Admin Firma 1','eigene Kampagnen','nur Kampagne Eins', left(r,120),
           r like '%Kampagne Eins%' and r not like '%Kampagne Zwei%');

  r := pruef.lies('select public.my_advertising_contracts()::text', A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Sichtbarkeit','my_advertising_contracts','Admin Firma 1','eigene Vertraege','leer — Vertrag gehoert Firma 2', left(r,160), r = '[]');

  -- ---- Einladung eines Fremden mit dem Rohtoken -------------------------
  w := pruef.schreibe('select public.business_invitation_accept(''geheim-f2'')', A1);
  r := pruef.wahrheit(format('select count(*)::text from public.business_members where business_id=%L and profile_id=%L', F2, A1));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Einladung','business_invitation_accept mit fremdem Token','Admin Firma 1','Einladung an neu@firma-zwei.invalid','keine Mitgliedschaft', w||' / Mitglied='||r, r='0');

  -- ---- Rechteausweitung INNERHALB der eigenen Firma ---------------------
  w := pruef.schreibe(format('select public.business_member_set(%L,%L,''admin'',''active'')', F1, M1), M1);
  r := pruef.wahrheit(format('select role::text from public.business_members where business_id=%L and profile_id=%L', F1, M1));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Rechteausweitung','Mitglied macht sich selbst zum Admin','Mitglied Firma 1','eigene Firma','Abweisung, member bleibt', w||' / '||r, r='member');

  w := pruef.schreibe(format('select public.business_invite(%L,''kumpel@test.invalid'')', F1), M1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Rechteausweitung','Mitglied laedt ein','Mitglied Firma 1','eigene Firma','Abweisung', w, w like 'ERR%');

  -- ---- Gegenprobe: die eigene Firma darf --------------------------------
  w := pruef.schreibe(format('select public.business_dashboard(%L)', F1), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','business_dashboard eigene Firma','Admin Firma 1','Firma 1','kein Fehler', w, w not like 'ERR%');

  n := pruef.zaehle(format('select * from public.business_locations_list(%L)', F1), A1);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','business_locations_list eigene Firma','Admin Firma 1','Firma 1','>0 Zeilen', n::text, n>0);

  w := pruef.schreibe(format('select public.business_update(%L, ''{"billing_city":"Wanzleben"}''::jsonb)', F1), A1);
  r := pruef.wahrheit(format('select coalesce(billing_city,''-'') from public.businesses where id=%L', F1));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','business_update eigene Firma','Admin Firma 1','Firma 1','uebernommen', w||' / '||r, r='Wanzleben');

  w := pruef.schreibe(format('select public.advertising_campaign_status(%L,''paused'')', 'c1000000-0000-0000-0000-0000000000f1'::uuid), A1);
  r := pruef.wahrheit('select status::text from public.advertising_campaigns where id=''c1000000-0000-0000-0000-0000000000f1''');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','eigene Kampagne pausieren','Admin Firma 1','Kampagne Firma 1','paused', w||' / '||r, r='paused');
end $$;
