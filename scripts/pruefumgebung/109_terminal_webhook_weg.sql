-- ============================================================================
-- 109 — Der Weg des Terminal-Webhooks durch die Datenbank (B-4, B-5)
--
-- Backend-Prüfung 26.09.2026. Voraussetzung: 105 ist gelaufen (Automat,
-- Produkt und Kunde `aaaa…0001/0002/0003`).
--
-- 105 prüft `app.vend_freigabe_einloesen` als Datenbank-Eigentümer. Die Edge
-- Function ruft aber über die Schnittstelle als `service_role` und findet
-- nur, was in `public` liegt. Dieses Skript geht denselben Weg wie
-- `terminal-webhook/index.ts`: RPC mit benannten Argumenten, dann Kauf mit
-- `source = 'machine'` — beides als service_role.
--
-- Wiederholbar: Alles läuft in einer Untertransaktion, die zurückgerollt wird.
-- ============================================================================
truncate pruef.ergebnis restart identity;

do $$
declare
  M  uuid := 'aaaa0000-0000-4000-8000-000000000001';
  PR uuid := 'aaaa0000-0000-4000-8000-000000000002';
  K  uuid := 'aaaa0000-0000-4000-8000-000000000003';
  w1 text; w2 text; w3 text; wk text; wa text; kunde text; n_kauf int;
begin
  begin
    -- Höchstens eine offene Freigabe je Kunde (uq_vend_freigabe_offen_je_kunde):
    -- Reste aus 105 werden so storniert, wie vend_freigabe_anlegen es tut.
    update public.vend_freigaben
       set storniert_am = now(), storno_grund = 'ersetzt'
     where customer_id = K and eingeloest_am is null and storniert_am is null;

    insert into public.vend_freigaben
      (code_hash, customer_id, machine_id, product_id, slot_code,
       betrag_brutto, herleitung, gueltig_bis)
    values (extensions.digest('pruef-109-code', 'sha256'), K, M, PR, 'PRUEF',
            1.50, '{"pruef": 109}'::jsonb, now() + interval '3 minutes');

    -- Negativ zuerst: Kunde und anon dürfen nicht einlösen. Sonst könnte
    -- ein Kunde fremde Käufe auf sich umbuchen.
    wk := pruef.lies('select count(*)::text from public.vend_freigabe_einloesen(p_code => ''pruef-109-code'', p_machine => ''aaaa0000-0000-4000-8000-000000000001'', p_ereignis_lfd_nr => null)',
                     '11111111-1111-1111-1111-111111111111');
    wa := pruef.lies('select count(*)::text from public.vend_freigabe_einloesen(p_code => ''pruef-109-code'', p_machine => ''aaaa0000-0000-4000-8000-000000000001'', p_ereignis_lfd_nr => null)',
                     null, 'anon');

    -- Weg des Webhooks: RPC als service_role.
    kunde := pruef.lies('select customer_id::text from public.vend_freigabe_einloesen(p_code => ''pruef-109-code'', p_machine => ''aaaa0000-0000-4000-8000-000000000001'', p_ereignis_lfd_nr => null)',
                        null, 'service_role');
    -- Zweites Einlösen desselben Codes: leer.
    w2 := pruef.lies('select count(*)::text from public.vend_freigabe_einloesen(p_code => ''pruef-109-code'', p_machine => ''aaaa0000-0000-4000-8000-000000000001'', p_ereignis_lfd_nr => null)',
                     null, 'service_role');

    -- Kauf verbuchen wie der Webhook.
    w3 := pruef.schreibe(format(
      'insert into public.purchases(customer_id, machine_id, total_gross, source, source_ref) values (%L, %L, 1.50, ''machine'', ''pruef-109'')',
      K, M), null, 'service_role');
    select count(*) into n_kauf from public.purchases
     where source_ref = 'pruef-109' and customer_id = K;

    raise exception using errcode = 'P0109', message = 'zurückrollen';
  exception when sqlstate 'P0109' then null;
  end;

  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok) values
   ('B-5','Freigabe einlösen über public','service_role (Webhook)','vend_freigabe_einloesen',
    'Kunde '||K, kunde, kunde = K::text),
   ('B-5','zweites Einlösen','service_role (Webhook)','vend_freigabe_einloesen',
    '0 Zeilen', w2, w2 = '0'),
   ('B-5','Einlösen als Kunde','Kunde A','vend_freigabe_einloesen','42501', wk, wk like 'ERR:42501%'),
   ('B-5','Einlösen ohne Anmeldung','anon','vend_freigabe_einloesen','42501', wa, wa like 'ERR:42501%'),
   ('B-4','Kauf mit Herkunft machine','service_role (Webhook)','purchases',
    'ROWS:1 und Kauf gespeichert', w3||' / gespeichert='||n_kauf, w3 = 'ROWS:1' and n_kauf = 1);
end $$;

select gruppe, test, akteur, erwartet, gemessen,
       case when ok then 'OK' else 'ROT' end as urteil
  from pruef.ergebnis order by id;
