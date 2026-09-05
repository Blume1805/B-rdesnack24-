truncate pruef.ergebnis restart identity;
do $$
declare
  A uuid := '11111111-1111-1111-1111-111111111111';
  Bb uuid := '22222222-2222-2222-2222-222222222222';
  G uuid := '33333333-3333-3333-3333-333333333333';
  M uuid := '44444444-4444-4444-4444-444444444444';
  w text; r text; n int;
begin
  -- S-2 -------------------------------------------------------------------
  r := pruef.lies('select count(*)::text from (select cost_price_net from products) x', A);
  insert into pruef.ergebnis values (default,'S-2','EK-Preis als Kunde lesen','Kunde A','products.cost_price_net','Abweisung',r, r like 'ERR:42501%');
  -- Gegen die WAHRHEIT vergleichen, nicht gegen eine feste Zahl: Der
  -- Katalog waechst, und eine Zusicherung, die bei jeder neuen Zeile
  -- bricht, wird irgendwann ignoriert statt geglaubt.
  r := pruef.lies('select count(*)::text from (select id,name,list_price_net,allergens from products) x', A);
  insert into pruef.ergebnis values (default,'S-2','Katalog bleibt lesbar (Gegenprobe)','Kunde A','products','so viele wie vorhanden',r,
    r = (select count(*)::text from public.products));
  r := pruef.lies('select count(*)::text from public.inventory_summary_by_product()', G);
  insert into pruef.ergebnis values (default,'S-2','EK ueber Auswertung (Gegenprobe)','Gesellschafter','inventory_summary_by_product','>0',r, r <> '0' and r not like 'ERR%');

  -- S-6 -------------------------------------------------------------------
  delete from public.customer_subscriptions where customer_id = M;
  w := pruef.schreibe('select public.choose_subscription_plan(''monthly'', true, true)', M);
  r := pruef.wahrheit(format('select count(*)::text from public.customer_subscriptions where customer_id=%L', M));
  insert into pruef.ergebnis values (default,'S-6','Minderjaehriger mit Haekchen','Minderjaehrig M (2012)','choose_subscription_plan','Abweisung, kein Abo', w||' / Abos='||r, w like 'ERR%' and r='0');
  -- Gegenprobe: Volljaehriger mit Geburtsdatum darf
  update public.profiles set birth_date='1990-01-01' where id=Bb and birth_date is null;
  delete from public.customer_subscriptions where customer_id = Bb;
  w := pruef.schreibe('select public.choose_subscription_plan(''monthly'', true, true)', Bb);
  r := pruef.wahrheit(format('select plan::text from public.customer_subscriptions where customer_id=%L order by seq desc limit 1', Bb));
  insert into pruef.ergebnis values (default,'S-6','Volljaehriger schliesst ab (Gegenprobe)','Kunde B (1990)','choose_subscription_plan','Abo entsteht', w||' / '||r, r='monthly');
  -- Negativtest: Konto ohne Geburtsdatum (eigenes Konto, weil das Datum
  -- nach der ersten Setzung unveraenderlich ist — der Trigger hat den
  -- ersten Anlauf dieses Tests zu Recht abgewiesen).
  insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
  values ('55555555-5555-5555-5555-555555555555','00000000-0000-0000-0000-000000000000','authenticated','authenticated','ohne-datum@test.invalid','x',now(),now())
  on conflict (id) do nothing;
  w := pruef.schreibe('select public.choose_subscription_plan(''monthly'', true, true)', '55555555-5555-5555-5555-555555555555');
  r := pruef.wahrheit('select count(*)::text from public.customer_subscriptions where customer_id=''55555555-5555-5555-5555-555555555555''');
  insert into pruef.ergebnis values (default,'S-6','ohne Geburtsdatum','Konto ohne Datum','choose_subscription_plan','Abweisung mit Hinweis', w||' / Abos='||r, w like 'ERR%' and r='0');

  -- S-3 / S-9 / S-8 --------------------------------------------------------
  n := pruef.zaehle('select 1 from public.machine_sales_daily', A);
  insert into pruef.ergebnis values (default,'S-3','Tagesumsaetze','Kunde A','machine_sales_daily','0 Zeilen', n::text, n=0);
  n := pruef.zaehle('select 1 from public.machine_sales_daily', G);
  insert into pruef.ergebnis values (default,'S-3','Tagesumsaetze (Gegenprobe)','Gesellschafter','machine_sales_daily','>0', n::text, n>0);
  n := pruef.zaehle('select 1 from public.inventory', A);
  insert into pruef.ergebnis values (default,'S-9','Fachbestand','Kunde A','inventory','0 Zeilen', n::text, n<=0);
  n := pruef.zaehle('select 1 from public.permissions', A);
  insert into pruef.ergebnis values (default,'S-8','Rechtekatalog','Kunde A','permissions','0 Zeilen', n::text, n=0);
  n := pruef.zaehle('select 1 from public.role_permissions', A);
  insert into pruef.ergebnis values (default,'S-8','Rollenzuordnung','Kunde A','role_permissions','0 Zeilen', n::text, n=0);
  n := pruef.zaehle('select 1 from public.permissions', G);
  insert into pruef.ergebnis values (default,'S-8','Rechtekatalog (Gegenprobe)','Gesellschafter','permissions','>0', n::text, n>0);
  n := pruef.zaehle('select * from public.my_permissions()', A);
  insert into pruef.ergebnis values (default,'S-8','eigene Rechte weiterhin abrufbar','Kunde A','my_permissions()','kein Fehler', n::text, n>=0);

  -- S-4 --------------------------------------------------------------------
  n := pruef.zaehle(format('select 1 from public.product_ratings where customer_id <> %L', A), A);
  insert into pruef.ergebnis values (default,'S-4','fremde Bewertungen','Kunde A','product_ratings','0 Zeilen', n::text, n=0);
  n := pruef.zaehle(format('select 1 from public.product_ratings where customer_id = %L', A), A);
  insert into pruef.ergebnis values (default,'S-4','eigene Bewertung (Gegenprobe)','Kunde A','product_ratings','>0', n::text, n>0);
  -- Ebenfalls gegen die Wahrheit: Das Aggregat muss ALLE Bewertungen
  -- zaehlen, egal wie viele es gerade gibt.
  r := pruef.lies('select sum(review_count)::text from public.product_rating_summary', A);
  insert into pruef.ergebnis values (default,'S-4','Aggregat rechnet ueber alle','Kunde A','product_rating_summary','alle Bewertungen', r,
    r = (select count(*)::text from public.product_ratings));
  r := pruef.lies('select (avg_rating)::text from public.product_detail(''e0000000-0000-0000-0000-00000000000b'')', A);
  insert into pruef.ergebnis values (default,'S-4','product_detail zeigt fremden Schnitt','Kunde A','product_detail','Schnitt vorhanden', r, r not like 'ERR%' and r <> '0');

  -- S-5 --------------------------------------------------------------------
  w := pruef.schreibe(format('update public.profiles set email=''neu@test.invalid'' where id=%L', A), A);
  r := pruef.wahrheit(format('select email::text from public.profiles where id=%L', A));
  insert into pruef.ergebnis values (default,'S-5','E-Mail selbst setzen','Kunde A','profiles.email','Abweisung', w||' / '||r, w like 'ERR%' and r <> 'neu@test.invalid');
  w := pruef.schreibe(format('update public.profiles set full_name=''Weiter aenderbar'' where id=%L', A), A);
  r := pruef.wahrheit(format('select full_name from public.profiles where id=%L', A));
  insert into pruef.ergebnis values (default,'S-5','Name weiterhin aenderbar (Gegenprobe)','Kunde A','profiles.full_name','geaendert', w||' / '||r, r='Weiter aenderbar');
  -- Nachlauf aus auth.users
  update auth.users set email='a-neu@test.invalid' where id=A;
  r := pruef.wahrheit(format('select email::text from public.profiles where id=%L', A));
  insert into pruef.ergebnis values (default,'S-5','Nachlauf aus auth.users (Gegenprobe)','System','profiles.email','a-neu@test.invalid', r, r='a-neu@test.invalid');

  -- S-12 -------------------------------------------------------------------
  delete from public.advertising_redirect_actors;
  delete from public.advertising_redirect_counts;
  insert into public.businesses(id, name)
  select 'bb000000-0000-0000-0000-000000000001', 'Testfirma Werbung'
  where not exists (select 1 from public.businesses where id='bb000000-0000-0000-0000-000000000001');
  insert into public.advertising_campaigns(id,business_id,name,welt,status,von,bis)
  select 'cc000000-0000-0000-0000-000000000001', 'bb000000-0000-0000-0000-000000000001', 'Testkampagne','analog','active',current_date,current_date+30
  where not exists (select 1 from public.advertising_campaigns where id='cc000000-0000-0000-0000-000000000001');
  for n in 1..10 loop
    perform pruef.schreibe('select public.advertising_redirect_count(''cc000000-0000-0000-0000-000000000001'')', A);
  end loop;
  r := pruef.wahrheit('select count::text from public.advertising_redirect_counts where campaign_id=''cc000000-0000-0000-0000-000000000001'' and day=current_date');
  insert into pruef.ergebnis values (default,'S-12','10 Klicks eines Kontos','Kunde A','advertising_redirect_count','hoechstens 3 gezaehlt', 'berichtet='||r, r='3');
  r := pruef.wahrheit('select count::text from public.advertising_redirect_actors where profile_id='''||A||''' and campaign_id=''cc000000-0000-0000-0000-000000000001''');
  insert into pruef.ergebnis values (default,'S-12','Missbrauch bleibt sichtbar','Kunde A','advertising_redirect_actors','10 Aufrufe vermerkt', r, r='10');
  perform pruef.schreibe('select public.advertising_redirect_count(''cc000000-0000-0000-0000-000000000001'')', Bb);
  r := pruef.wahrheit('select count::text from public.advertising_redirect_counts where campaign_id=''cc000000-0000-0000-0000-000000000001'' and day=current_date');
  insert into pruef.ergebnis values (default,'S-12','zweites Konto zaehlt weiter (Gegenprobe)','Kunde B','advertising_redirect_count','4', r, r='4');

  -- S-7 --------------------------------------------------------------------
  select count(*) into n from pg_trigger t join pg_class c on c.oid=t.tgrelid
   where t.tgname='trg_audit' and c.relname in ('purchases','purchase_items','invoices','business_invoice_runs','store_subscription');
  insert into pruef.ergebnis values (default,'S-7','Aenderungsprotokoll','System','5 Belegtabellen','5 Trigger', n::text, n=5);

  -- S-11 -------------------------------------------------------------------
  r := pruef.lies(format('select public.auth_has_permission(''finance.view'', %L)::text', G), A);
  insert into pruef.ergebnis values (default,'S-11','fremde Rechte abfragen','Kunde A','auth_has_permission','false', r, r='false');
  r := pruef.lies('select public.auth_has_permission(''finance.view'')::text', G);
  insert into pruef.ergebnis values (default,'S-11','eigene Rechte (Gegenprobe)','Gesellschafter','auth_has_permission','true', r, r='true');
  r := pruef.lies(format('select coalesce(public.app_role(%L)::text,''<null>'')', G), A);
  insert into pruef.ergebnis values (default,'S-11','fremde Rolle abfragen','Kunde A','app_role','<null>', r, r='<null>');
  r := pruef.lies(format('select public.is_internal(%L)::text', A), G);
  insert into pruef.ergebnis values (default,'S-11','intern darf fremdes Konto beurteilen (Gegenprobe)','Gesellschafter','is_internal','false, ohne Fehler', r, r='false');

  -- S-1 --------------------------------------------------------------------
  r := pruef.lies('select public.fetch_email_report_share(''1'')::text', null, 'anon');
  insert into pruef.ergebnis values (default,'S-1','Kurz-Token','anon','fetch_email_report_share','not_found ohne Protokolleintrag', r, r like '%not_found%');
  r := pruef.wahrheit('select count(*)::text from public.email_report_share_access');
  insert into pruef.ergebnis values (default,'S-1','kein Protokollmuell durch Raten','anon','email_report_share_access','0 Zeilen', r, r='0');
  w := pruef.schreibe(format('insert into public.email_report_share(token,payload,expires_at,created_by) values (''kurz'',''{}''::jsonb, now()+interval ''1 day'', %L)', A), A);
  insert into pruef.ergebnis values (default,'S-1','Freigabe mit Kurz-Token anlegen','Kunde A','email_report_share','Abweisung', w, w like 'ERR%');
  w := pruef.schreibe(format('insert into public.email_report_share(payload,expires_at,created_by) values (''{}''::jsonb, now()+interval ''365 days'', %L)', A), A);
  insert into pruef.ergebnis values (default,'S-1','Laufzeit ueber 90 Tage','Kunde A','email_report_share','Abweisung', w, w like 'ERR%');
  w := pruef.schreibe(format('insert into public.email_report_share(payload,expires_at,created_by) values (''{}''::jsonb, now()+interval ''30 days'', %L)', A), A);
  r := pruef.wahrheit('select length(token)::text from public.email_report_share limit 1');
  insert into pruef.ergebnis values (default,'S-1','gueltige Freigabe (Gegenprobe)','Kunde A','email_report_share','48 Zeichen Token', w||' / Laenge='||r, r='48');

  -- S-10 -------------------------------------------------------------------
  select count(*) into n from storage.buckets where file_size_limit is null or allowed_mime_types is null;
  insert into pruef.ergebnis values (default,'S-10','Bucket-Grenzen','System','storage.buckets','0 ohne Grenze', n::text, n=0);
end $$;
