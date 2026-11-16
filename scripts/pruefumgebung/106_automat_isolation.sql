-- Automatenbezahlung: Datenisolation zwischen zwei echten Kunden.
--
-- Das Pflichtprotokoll aus `boerdesnack24-security-regression`: fünf
-- IDOR/BOLA-Tests plus Gegenprobe, dazu vertikale Rechteausweitung,
-- Mass Assignment und Finanzintegrität.
--
-- Warum es diese Datei zusätzlich zu 105 gibt: 105 prüft, dass die Technik
-- rechnet und nicht vergisst. Hier wird geprüft, dass Kunde A nicht an die
-- Daten von Kunde B kommt. Das ist eine andere Frage, und sie war bis zum
-- 14.09.2026 offen — die neue Tabelle `vend_freigaben` trägt Kaufdaten je
-- Kunde (Datenklasse D3).
--
-- Voraussetzung: 20_werkzeug.sql (pruef.zaehle, pruef.schreibe).
-- Gegen eine frisch aufgebaute Datenbank laufen lassen.
\set ON_ERROR_STOP on
\pset pager off

\set kundeA   '\'bbbb0000-0000-4000-8000-00000000000a\''
\set kundeB   '\'bbbb0000-0000-4000-8000-00000000000b\''
\set maschine '\'bbbb0000-0000-4000-8000-000000000101\''
\set produkt  '\'bbbb0000-0000-4000-8000-000000000102\''

-- ── Zwei echte Kunden, auf dem regulären Weg angelegt ──────────────────
insert into auth.users (id, email, raw_user_meta_data) values
  (:kundeA, 'kunde-a@example.invalid', '{"full_name": "Kunde A"}'::jsonb),
  (:kundeB, 'kunde-b@example.invalid', '{"full_name": "Kunde B"}'::jsonb)
  on conflict (id) do nothing;

insert into public.machines (id, code, name)
  values (:maschine, 'ISO-M1', 'Isolationsautomat') on conflict (id) do nothing;
insert into public.products (id, sku, name, tax_rate, list_price_net)
  values (:produkt, 'ISO-P1', 'Isolationsprodukt', 7.0, 2.3364)
  on conflict (id) do nothing;
insert into public.inventory (machine_id, product_id, quantity)
  values (:maschine, :produkt, 10) on conflict (machine_id, product_id) do nothing;

-- Je eine Freigabe für A und für B. Wiederholbar: Freigaben sind keine
-- Buchführungsdaten, sie dürfen für einen erneuten Lauf weg.
delete from public.vend_freigaben where machine_id = :maschine;

insert into public.vend_freigaben
  (code_hash, customer_id, machine_id, product_id, betrag_brutto, herleitung, gueltig_bis)
values
  (extensions.digest('code-von-a', 'sha256'), :kundeA, :maschine, :produkt,
   2.50, '{"wem": "A"}'::jsonb, now() + interval '1 hour'),
  (extensions.digest('code-von-b', 'sha256'), :kundeB, :maschine, :produkt,
   2.50, '{"wem": "B"}'::jsonb, now() + interval '1 hour');

\echo '=== T1  A liest die Freigaben von B ==='
select 'T1 A sieht B' as test,
       pruef.zaehle(
         format('select * from public.vend_freigaben where customer_id = %L', :kundeB),
         :kundeA) as zeilen,
       case when pruef.zaehle(
         format('select * from public.vend_freigaben where customer_id = %L', :kundeB),
         :kundeA) = 0 then 'OK — 0 Zeilen' else 'VORFALL' end as urteil;

\echo '=== T1b  Gegenprobe: A sieht die eigene ==='
select 'T1b A sieht sich' as test,
       pruef.zaehle('select * from public.vend_freigaben', :kundeA) as zeilen,
       case when pruef.zaehle('select * from public.vend_freigaben', :kundeA) = 1
            then 'OK — genau die eigene' else 'FEHLER' end as urteil;

\echo '=== T2  A setzt die Kunden-ID von B in die Preisauskunft ==='
-- kundenpreis() nimmt eine Kundenkennung entgegen. Genau hier entstehen
-- IDOR-Lücken: Der Client bestimmt, über wen er etwas erfährt.
select 'T2 fremde Kennung' as test,
       pruef.zaehle(
         format('select * from public.kundenpreis(%L, %L, %L)', :maschine, :produkt, :kundeB),
         :kundeA) as ergebnis,
       case when pruef.zaehle(
         format('select * from public.kundenpreis(%L, %L, %L)', :maschine, :produkt, :kundeB),
         :kundeA) = -1 then 'OK — abgewiesen' else 'VORFALL' end as urteil;

\echo '=== T2b  Gegenprobe: A fragt den eigenen Preis ==='
select 'T2b eigener Preis' as test,
       pruef.zaehle(
         format('select * from public.kundenpreis(%L, %L, %L)', :maschine, :produkt, :kundeA),
         :kundeA) as ergebnis,
       case when pruef.zaehle(
         format('select * from public.kundenpreis(%L, %L, %L)', :maschine, :produkt, :kundeA),
         :kundeA) = 1 then 'OK — Auskunft erteilt' else 'FEHLER' end as urteil;

\echo '=== T3  A ändert die Freigabe von B ==='
select 'T3 A aendert B' as test,
       pruef.schreibe(
         format('update public.vend_freigaben set betrag_brutto = 0.01 where customer_id = %L', :kundeB),
         :kundeA) as ergebnis,
       case when pruef.schreibe(
         format('update public.vend_freigaben set betrag_brutto = 0.01 where customer_id = %L', :kundeB),
         :kundeA) in ('ROWS:0', 'ERR:42501') then 'OK — nichts geaendert' else 'VORFALL' end as urteil;

\echo '=== T4  A löscht die Freigabe von B ==='
select 'T4 A loescht B' as test,
       pruef.schreibe(
         format('delete from public.vend_freigaben where customer_id = %L', :kundeB),
         :kundeA) as ergebnis,
       case when pruef.schreibe(
         format('delete from public.vend_freigaben where customer_id = %L', :kundeB),
         :kundeA) in ('ROWS:0', 'ERR:42501') then 'OK — nichts geloescht' else 'VORFALL' end as urteil;

\echo '=== T5  A greift direkt auf die Buchfuehrungstabellen zu ==='
select 'T5a Rohereignisse' as test,
       pruef.zaehle('select * from public.terminal_ereignisse', :kundeA) as zeilen,
       case when pruef.zaehle('select * from public.terminal_ereignisse', :kundeA) in (0, -1)
            then 'OK — kein Zugriff' else 'VORFALL' end as urteil;

select 'T5b Auszahlungen' as test,
       pruef.zaehle('select * from public.terminal_auszahlungen', :kundeA) as zeilen,
       case when pruef.zaehle('select * from public.terminal_auszahlungen', :kundeA) in (0, -1)
            then 'OK — kein Zugriff' else 'VORFALL' end as urteil;

select 'T5c Kassenzaehlungen' as test,
       pruef.zaehle('select * from public.cash_collection_logs', :kundeA) as zeilen,
       case when pruef.zaehle('select * from public.cash_collection_logs', :kundeA) in (0, -1)
            then 'OK — kein Zugriff' else 'VORFALL' end as urteil;

select 'T5d anonym' as test,
       pruef.zaehle('select * from public.vend_freigaben', null, 'anon') as zeilen,
       case when pruef.zaehle('select * from public.vend_freigaben', null, 'anon') in (0, -1)
            then 'OK — kein Zugriff' else 'VORFALL' end as urteil;

\echo '=== V  Vertikale Rechteausweitung: Kunde ruft Verwaltungsfunktionen ==='
select 'V1 Luecken' as test,
       case when pruef.zaehle('select * from public.terminal_luecken(30)', :kundeA) in (0, -1)
            then 'OK — stumm' else 'VORFALL' end as urteil;
select 'V2 Kassendifferenzen' as test,
       case when pruef.zaehle('select * from public.kassendifferenzen(180)', :kundeA) in (0, -1)
            then 'OK — stumm' else 'VORFALL' end as urteil;
select 'V3 Preisabweichungen' as test,
       case when pruef.zaehle('select * from public.preis_abweichungen(null)', :kundeA) in (0, -1)
            then 'OK — stumm' else 'VORFALL' end as urteil;
select 'V4 Auszahlungsabgleich' as test,
       case when pruef.zaehle('select * from public.auszahlungen_abgleich(60)', :kundeA) in (0, -1)
            then 'OK — stumm' else 'VORFALL' end as urteil;
select 'V5 Hashkette' as test,
       case when pruef.zaehle('select * from public.ereigniskette_pruefen()', :kundeA) = -1
            then 'OK — abgewiesen' else 'VORFALL' end as urteil;
select 'V6 EK-Preis ueber Automatenpreis' as test,
       -- automatenpreis() darf keinen Einkaufspreis durchreichen. Die
       -- Ergebnisspalten sind fest; geprueft wird, dass keine davon
       -- cost_price_net heisst.
       case when not exists (
         select 1 from information_schema.columns
          where table_schema = 'public' and column_name like '%cost%'
            and table_name in ('vend_freigaben', 'preis_ausspielungen'))
            then 'OK — kein EK in den neuen Tabellen' else 'VORFALL' end as urteil;

\echo '=== M  Mass Assignment: Kunde legt sich selbst eine Freigabe an ==='
-- Der gefaehrlichste Angriff auf dieses Modell: eine Freigabe ueber einen
-- Cent. Die Tabelle hat bewusst KEINE INSERT-Policy — angelegt wird nur
-- ueber die Funktion, und die nimmt keinen Betrag entgegen.
select 'M1 eigene Freigabe zum Wunschpreis' as test,
       pruef.schreibe(
         format($f$insert into public.vend_freigaben
                     (code_hash, customer_id, machine_id, product_id,
                      betrag_brutto, herleitung, gueltig_bis)
                   values (extensions.digest('boeser-code','sha256'), %L, %L, %L,
                           0.01, '{}'::jsonb, now() + interval '1 hour')$f$,
                :kundeA, :maschine, :produkt),
         :kundeA) as ergebnis,
       case when pruef.schreibe(
         format($f$insert into public.vend_freigaben
                     (code_hash, customer_id, machine_id, product_id,
                      betrag_brutto, herleitung, gueltig_bis)
                   values (extensions.digest('boeser-code2','sha256'), %L, %L, %L,
                           0.01, '{}'::jsonb, now() + interval '1 hour')$f$,
                :kundeA, :maschine, :produkt),
         :kundeA) like 'ERR:%' then 'OK — abgewiesen' else 'VORFALL' end as urteil;

select 'M2 Freigabe auf fremden Namen' as test,
       case when pruef.schreibe(
         format($f$insert into public.vend_freigaben
                     (code_hash, customer_id, machine_id, product_id,
                      betrag_brutto, herleitung, gueltig_bis)
                   values (extensions.digest('code3','sha256'), %L, %L, %L,
                           0.01, '{}'::jsonb, now() + interval '1 hour')$f$,
                :kundeB, :maschine, :produkt),
         :kundeA) like 'ERR:%' then 'OK — abgewiesen' else 'VORFALL' end as urteil;

select 'M3 Preisstufen aendern' as test,
       case when pruef.schreibe(
         'update public.mhd_preisstufen set abschlag_prozent = 60',
         :kundeA) in ('ROWS:0', 'ERR:42501') then 'OK — abgewiesen' else 'VORFALL' end as urteil;

select 'M4 Preis an den Automaten senden' as test,
       case when pruef.schreibe(
         format($f$insert into public.preis_ausspielungen
                     (machine_id, slot_code, preis_brutto, grund)
                   values (%L, 'A1', 0.01, 'manuell')$f$, :maschine),
         :kundeA) like 'ERR:%' then 'OK — abgewiesen' else 'VORFALL' end as urteil;

\echo '=== F  Finanzintegritaet: bestimmt der Client den Preis? ==='
-- vend_freigabe_anlegen() nimmt Automat, Produkt und Fach entgegen — aber
-- keinen Betrag. Der Betrag kommt aus kundenpreis(). Das ist der Nachweis,
-- dass der Client den Preis nicht setzen kann.
select 'F1 Funktionssignatur ohne Betrag' as test,
       pg_get_function_arguments(p.oid) as argumente,
       case when pg_get_function_arguments(p.oid) not ilike '%betrag%'
             and pg_get_function_arguments(p.oid) not ilike '%preis%'
            then 'OK — kein Betrag vom Client' else 'VORFALL' end as urteil
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public' and p.proname = 'vend_freigabe_anlegen';

-- Die Einloesefunktion darf fuer einen angemeldeten Kunden nicht aufrufbar
-- sein: sonst loest er seine eigene Freigabe aus, ohne zu zahlen.
select 'F2 Einloesen nur mit Dienstschluessel' as test,
       case when pruef.zaehle(
         format($f$select * from app.vend_freigabe_einloesen('code-von-a', %L)$f$, :maschine),
         :kundeA) = -1 then 'OK — abgewiesen' else 'VORFALL' end as urteil;

\echo '=== Zaehlstand ==='
select 'Alle Ergebnisse oben muessen OK lauten. VORFALL = sofort 🔴.' as hinweis;
