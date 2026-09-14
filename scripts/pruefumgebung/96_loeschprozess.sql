truncate pruef.ergebnis restart identity;
do $$
declare
  L uuid := '88888888-8888-8888-8888-888888888888';  -- Konto, das geloescht wird
  U uuid := '99999999-9999-9999-9999-999999999999';  -- unbeteiligtes Konto (Gegenprobe)
  G uuid := '33333333-3333-3333-3333-333333333333';  -- Gesellschafter
  S uuid := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';  -- Systemadministrator
  A uuid := '11111111-1111-1111-1111-111111111111';  -- Kunde
  w text; r text; v_bericht jsonb; n int;
begin
  -- Wiederholbar machen: Der erste Lauf hinterlaesst zwei Konten, eines
  -- davon anonymisiert und gesperrt. Ein Test, der nur einmal laeuft, ist
  -- als Regressionstest wertlos - deshalb wird hier zuerst aufgeraeumt.
  delete from public.product_ratings where customer_id in (L,U);
  delete from public.notifications where user_id in (L,U);
  delete from public.device_tokens where user_id in (L,U);
  delete from public.consents where profile_id in (L,U);
  delete from public.account_deletion_requests where profile_id in (L,U);
  delete from public.purchases where customer_id in (L,U);
  alter table public.profiles disable trigger trg_profiles_guard;
  alter table public.profiles disable trigger trg_profiles_birth_date_immutable;
  update public.profiles set full_name = case when id = L then 'Zu Loeschen' else 'Unbeteiligt' end,
         email = case when id = L then 'loeschkandidat@test.invalid' else 'unbeteiligt@test.invalid' end,
         deleted_at = null, status = 'active'
   where id in (L,U);
  alter table public.profiles enable trigger trg_profiles_birth_date_immutable;
  alter table public.profiles enable trigger trg_profiles_guard;
  update auth.users set banned_until = null where id in (L,U);

  -- Zwei Konten mit gleichem Datenbestand
  insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at, raw_user_meta_data)
  values (L,'00000000-0000-0000-0000-000000000000','authenticated','authenticated','loeschkandidat@test.invalid','x',now(),now(),'{"full_name":"Zu Loeschen"}'),
         (U,'00000000-0000-0000-0000-000000000000','authenticated','authenticated','unbeteiligt@test.invalid','x',now(),now(),'{"full_name":"Unbeteiligt"}')
  on conflict (id) do nothing;

  -- Systemadministrator anlegen: Nur diese Rolle traegt `users.manage`.
  insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at, invited_at, raw_user_meta_data)
  values (S,'00000000-0000-0000-0000-000000000000','authenticated','authenticated','sysadmin@test.invalid','x',now(),now(),now(),'{"full_name":"Systemadmin","role":"system_admin"}')
  on conflict (id) do nothing;
  alter table public.profiles disable trigger trg_profiles_guard;
  update public.profiles set role='system_admin', status='active', activated_at=now() where id=S;
  alter table public.profiles enable trigger trg_profiles_guard;

  insert into public.product_ratings(customer_id, product_id, rating) values
   (L,'e0000000-0000-0000-0000-00000000000a',5),(U,'e0000000-0000-0000-0000-00000000000a',5)
  on conflict do nothing;
  insert into public.notifications(user_id,title,body) values (L,'Hinweis','x'),(U,'Hinweis','x');
  insert into public.device_tokens(user_id,token,platform) values (L,'tok-l','android'),(U,'tok-u','ios');
  insert into public.purchases(id,customer_id,total_gross,purchased_at) values
   ('c0000000-0000-0000-0000-00000000000c'::uuid, L, 5.00, now())
  on conflict do nothing;
  insert into public.consents(profile_id,type,granted) values (L,'analytics',true),(U,'analytics',true);
  insert into public.account_deletion_requests(profile_id, reason) values (L,'Testlauf');

  -- 1) Ein Kunde darf das nicht
  w := pruef.schreibe(format('select public.execute_account_deletion(%L)', L), A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Kunde loescht ein Konto','Kunde A','fremdes Konto','Abweisung', w, w like 'ERR:42501%');

  -- 2) Ein Kunde darf auch das eigene nicht selbst ausfuehren
  w := pruef.schreibe(format('select public.execute_account_deletion(%L)', A), A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Kunde loescht sich selbst','Kunde A','eigenes Konto','Abweisung — Antrag ja, Ausfuehrung nein', w, w like 'ERR:42501%');

  -- 3a) Auch der Gesellschafter darf nicht: `users.manage` traegt nur
  --     system_admin. Eine Kontoloeschung ist kein Tagesgeschaeft.
  w := pruef.schreibe(format('select public.execute_account_deletion(%L)', L), G);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Gesellschafter loescht ein Konto','Gesellschafter','Konto L','Abweisung — nur users.manage', w, w like 'ERR:42501%');

  -- 3b) Der Systemadministrator fuehrt aus
  perform set_config('request.jwt.claims', json_build_object('sub',S,'role','authenticated')::text, true);
  v_bericht := public.execute_account_deletion(L);
  perform set_config('request.jwt.claims','',true);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Systemadministrator fuehrt aus','Systemadmin','Konto L','Bericht mit Inhalt', left(v_bericht::text,90), v_bericht ? 'geloescht');

  -- 4) Was ohne Frist ist, ist weg
  select (select count(*) from public.product_ratings where customer_id=L)
       + (select count(*) from public.notifications where user_id=L)
       + (select count(*) from public.device_tokens where user_id=L) into n;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Daten ohne Frist','System','Bewertungen/Hinweise/Geraete','0 Zeilen', n::text, n=0);

  -- 5) Was eine Frist hat, bleibt
  select (select count(*) from public.purchases where customer_id=L)
       + (select count(*) from public.consents where profile_id=L) into n;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Belege und Einwilligungen','System','Kaeufe/Einwilligungen','bleiben erhalten', n::text, n>0);

  -- 6) Der Personenbezug ist weg
  r := pruef.wahrheit(format('select full_name||'' | ''||email::text||'' | ''||coalesce(phone,''-'')||'' | ''||coalesce(birth_date::text,''-'') from public.profiles where id=%L', L));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Profil anonymisiert','System','profiles','kein Name, keine echte Adresse', r,
           r like 'Gelöschtes Konto%' and r like '%@invalid%');

  -- 7) Die Anmeldung ist gesperrt
  r := pruef.wahrheit(format('select coalesce(banned_until::text,''nicht gesperrt'') from auth.users where id=%L', L));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Anmeldung gesperrt','System','auth.users','gesperrt', r, r <> 'nicht gesperrt');

  -- 8) Der Antrag ist als ausgefuehrt vermerkt
  r := pruef.wahrheit(format('select status from public.account_deletion_requests where profile_id=%L order by requested_at desc limit 1', L));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Vorgang festgehalten','System','account_deletion_requests','ausgefuehrt', r, r='ausgefuehrt');

  -- 9) Der Bericht nennt keine offene Tabelle mehr (CUST-018, 02.09.2026) und
  --    weist die beiden Beschaeftigtentabellen als eigenen Vorgang aus.
  n := jsonb_array_length(v_bericht->'ohne_entscheidung');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Keine offene Tabelle im Bericht','System','Bericht','0', n::text, n=0);
  n := jsonb_array_length(v_bericht->'nicht_zustaendig');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Beschaeftigtendaten im Bericht benannt','System','Bericht','2',
           coalesce(n::text,'kein Feld'), n=2);

  -- 10) GEGENPROBE: Das unbeteiligte Konto ist unberuehrt
  select (select count(*) from public.product_ratings where customer_id=U)
       + (select count(*) from public.notifications where user_id=U)
       + (select count(*) from public.device_tokens where user_id=U) into n;
  r := pruef.wahrheit(format('select full_name from public.profiles where id=%L', U));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Unbeteiligtes Konto unberuehrt','System','Konto U','3 Zeilen, Name unveraendert', n::text||' / '||r, n=3 and r='Unbeteiligt');

  -- 11) Der Fristlauf haelt an, wenn die Hemmung gesetzt ist
  update public.aufbewahrung_hemmung set gehemmt = true, grund = 'Testlauf' where id;
  r := (app.purge_nach_frist()->>'uebersprungen');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Fristlauf bei Ablaufhemmung','System','purge_nach_frist','uebersprungen', r, r='true');

  -- 12) Ohne Hemmung laeuft er - und loescht heute nichts
  update public.aufbewahrung_hemmung set gehemmt = false, grund = null where id;
  v_bericht := app.purge_nach_frist();
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Fristlauf ohne Hemmung','System','purge_nach_frist','laeuft, loescht heute nichts',
           left(v_bericht::text,80), (v_bericht->>'uebersprungen')='false' and v_bericht->'geloescht' = '{}'::jsonb);
end $$;

-- ===========================================================================
-- S-23 und S-24: die beiden Fehler, die beim Ausrollen von CUST-018 auffielen
-- ===========================================================================
do $$
declare
  L uuid := '88888888-8888-8888-8888-888888888888';  -- geloeschtes Konto
  U uuid := '99999999-9999-9999-9999-999999999999';  -- unbeteiligtes Konto
  A uuid := '11111111-1111-1111-1111-111111111111';  -- Kunde A
  n int; m int; r text; v_bericht jsonb;
begin
  -- ---------------------------------------------------------------------
  -- S-23: Steht das Geloeschte noch im Aenderungsprotokoll?
  -- Der Loeschlauf ist im Block darueber bereits erfolgt.
  -- ---------------------------------------------------------------------

  select count(*) into n from public.audit_log
   where (record_id = L::text
          or old_data->>'user_id' = L::text or old_data->>'profile_id' = L::text
          or old_data->>'customer_id' = L::text)
     and table_name in (select tabelle from public.loeschregeln
                         where behandlung in ('loeschen','anonymisieren'))
     and (old_data::text ilike '%loeschkandidat@test.invalid%'
          or old_data::text ilike '%Zu Loeschen%'
          or new_data::text ilike '%loeschkandidat@test.invalid%'
          or new_data::text ilike '%Zu Loeschen%');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Klarname im Aenderungsprotokoll','System','audit_log',
           '0 Zeilen', n::text, n=0);

  -- Die Zeilen selbst bleiben: Wer wann welchen Datensatz geaendert hat, ist
  -- die Protokollierung, die die GoBD verlangt. Nur der Inhalt faellt weg.
  select count(*) into n from public.audit_log
   where record_id = L::text and table_name = 'profiles'
     and old_data->>'entfernt' is not null;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Protokollzeile bleibt, Inhalt geht','System','audit_log',
           'mehr als 0 bereinigte Zeilen', n::text, n>0);

  -- GEGENPROBE 1: Protokollzeilen ueber aufbewahrungspflichtige Tabellen
  -- behalten ihren Inhalt. Sie sind Teil des Belegs, nicht des Geloeschten.
  select count(*) into n from public.audit_log
   where old_data->>'customer_id' = L::text and table_name = 'purchases'
     and old_data->>'total_gross' is not null;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Beleg-Protokoll bleibt inhaltlich','System','audit_log/purchases',
           'mehr als 0 Zeilen mit Betrag', n::text, n>0);

  -- GEGENPROBE 2: Das unbeteiligte Konto steht unveraendert im Protokoll.
  select count(*) into n from public.audit_log
   where record_id = U::text and new_data::text ilike '%Unbeteiligt%';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Fremdes Protokoll unberuehrt','System','audit_log',
           'mehr als 0 Zeilen mit Namen', n::text, n>0);

  -- ---------------------------------------------------------------------
  -- S-24: Laeuft die Frist ab Anlage oder ab Ende des Vorgangs?
  -- Aufbau: je ein abgeloester und ein noch laufender Vorgang, beide neun
  -- Jahre alt. Bei acht Jahren Frist muss genau einer von beiden fallen.
  -- ---------------------------------------------------------------------

  delete from public.consents where version = 'pruef-s24';
  delete from public.customer_subscriptions where source = 'pruef-s24';

  -- Kunde A: Einwilligung von vor neun Jahren, heute durch eine neue abgeloest
  insert into public.consents(profile_id,type,granted,version,created_at) values
    (A,'marketing',true,'pruef-s24', now() - interval '9 years'),
    (A,'marketing',false,'pruef-s24', now());
  -- Kunde U: Einwilligung von vor neun Jahren, bis heute die geltende
  insert into public.consents(profile_id,type,granted,version,created_at) values
    (U,'marketing',true,'pruef-s24', now() - interval '9 years');

  -- Dasselbe beim Abo
  insert into public.customer_subscriptions
    (id,customer_id,plan,price_cents,billing_label,chosen_at,source,withdrawal_consent,age_consent)
  values
    (gen_random_uuid(),A,'monthly',499,'mtl.', now() - interval '9 years','pruef-s24',true,true),
    (gen_random_uuid(),A,'yearly',4990,'jaehrl.', now(),'pruef-s24',true,true),
    (gen_random_uuid(),U,'monthly',499,'mtl.', now() - interval '9 years','pruef-s24',true,true);

  v_bericht := app.purge_nach_frist();

  -- Abgeloest und ueber der Frist: weg
  select count(*) into n from public.consents
   where profile_id = A and version = 'pruef-s24' and created_at < now() - interval '8 years';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Abgeloeste Einwilligung nach Frist','System','consents',
           '0 Zeilen', n::text, n=0);

  -- GEGENPROBE: Noch geltend, gleich alt: bleibt
  select count(*) into n from public.consents
   where profile_id = U and version = 'pruef-s24';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Geltende Einwilligung bleibt','System','consents',
           '1 Zeile — die Frist hat nicht begonnen', n::text, n=1);

  select count(*) into n from public.customer_subscriptions
   where customer_id = A and source = 'pruef-s24' and chosen_at < now() - interval '8 years';
  select count(*) into m from public.customer_subscriptions
   where customer_id = U and source = 'pruef-s24';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Abgeloestes Abo nach Frist','System','customer_subscriptions',
           '0 Zeilen', n::text, n=0);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Laufendes Abo bleibt','System','customer_subscriptions',
           '1 Zeile — laufender Vertrag, keine Frist', m::text, m=1);

  -- Der Bericht nennt, was er geloescht hat
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Aufbewahrung','Fristlauf berichtet die Loeschung','System','purge_nach_frist',
           'consents und customer_subscriptions genannt',
           left(v_bericht->>'geloescht',120),
           (v_bericht->'geloescht') ? 'consents'
           and (v_bericht->'geloescht') ? 'customer_subscriptions');

  -- Aufraeumen, damit der naechste Lauf wieder von vorn beginnt und der Test
  -- oben ("loescht heute nichts") nicht auf Resten dieses Blocks anschlaegt.
  delete from public.consents where version = 'pruef-s24';
  delete from public.customer_subscriptions where source = 'pruef-s24';

  -- ---------------------------------------------------------------------
  -- Der Bericht der Loeschung nach CUST-018
  -- ---------------------------------------------------------------------
  select count(*) into n from public.loeschregeln where behandlung = 'offen';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Keine Tabelle mehr ohne Entscheidung','System','loeschregeln',
           '0 offen', n::text, n=0);

  select string_agg(tabelle,', ' order by tabelle) into r
    from public.loeschregeln where behandlung = 'ausserhalb';
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschprozess','Beschaeftigtendaten als eigener Vorgang','System','loeschregeln',
           'employee_trainings, ifsg_briefings', coalesce(r,'-'),
           r = 'employee_trainings, ifsg_briefings');
end $$;

select gruppe, test, erwartet, gemessen, case when ok then 'GRUEN' else 'ROT' end as ergebnis
from pruef.ergebnis order by id;
select count(*) filter (where ok) as gruen, count(*) filter (where not ok) as rot
from pruef.ergebnis;
