-- Selbstbedienung der Rechnungsdaten durch Firmenkunden.
--
-- Der Schwerpunkt liegt auf den Gegenproben: eine Funktion, die einem
-- Aussenstehenden Schreibrechte auf Stammdaten gibt, ist genau so viel wert
-- wie das, was sie verweigert. Läuft ausschließlich gegen die Replik.
\set ON_ERROR_STOP on
\pset pager off

begin;

-- Ausgangslage festhalten, um am Ende dagegen zu prüfen.
create temporary table vorher on commit drop as
  select id, name, legal_form, tax_number, vat_id, status,
         billing_street, billing_zip, billing_city, billing_country, billing_email
    from public.businesses
   where id = 'b1000000-0000-0000-0000-0000000000f1';

\echo '=== T1  Firmen-Admin darf seine Rechnungsanschrift ändern ==='
select pruef.wahrheit($$
  select pruef.lies($sql$
    select public.business_rechnungsdaten_update(
      'b1000000-0000-0000-0000-0000000000f1',
      '{"billing_street":"Bahnhofstraße 4","billing_zip":"39164",
        "billing_city":"Wanzleben","billing_country":"de",
        "billing_email":"  Rechnung@Firma-Eins.Invalid  "}'::jsonb
    ) ->> 'billing_city'
  $sql$, 'f1a00000-0000-0000-0000-000000000001'::uuid)
$$) as t1_ort;

\echo '=== T2  Land wird normalisiert, E-Mail kleingeschrieben und getrimmt ==='
select pruef.wahrheit($$
  select (billing_country = 'DE'
      and billing_email = 'rechnung@firma-eins.invalid'
      and billing_street = 'Bahnhofstraße 4')::text
    from public.businesses where id = 'b1000000-0000-0000-0000-0000000000f1'
$$) as t2_normalisiert;

\echo '=== T3  Identitäts-, Steuer- und Statusfelder sind unverändert ==='
select pruef.wahrheit($$
  select (b.name is not distinct from v.name
      and b.legal_form is not distinct from v.legal_form
      and b.tax_number is not distinct from v.tax_number
      and b.vat_id is not distinct from v.vat_id
      and b.status is not distinct from v.status)::text
    from public.businesses b join vorher v on v.id = b.id
$$) as t3_identitaet_unberuehrt;

\echo '=== T4  Gegenprobe: Firmierung lässt sich nicht selbst ändern ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"name":"Sparkasse Magdeburg"}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t4_name_abgewiesen;

\echo '=== T5  Gegenprobe: Status lässt sich nicht selbst setzen ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"status":"active"}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t5_status_abgewiesen;

\echo '=== T6  Gegenprobe: USt-IdNr. lässt sich nicht selbst ändern ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"vat_id":"DE999999999"}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t6_ustid_abgewiesen;

\echo '=== T7  Gegenprobe: interne Buchhaltungskennung lässt sich nicht setzen ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"sevdesk_contact_id":"999"}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t7_sevdesk_abgewiesen;

\echo '=== T8  Gegenprobe: fremde Firma bleibt unerreichbar ==='
-- Der Admin von Firma Eins versucht, Firma Zwei zu ändern.
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b2000000-0000-0000-0000-0000000000f2',
    '{"billing_city":"Fremdstadt"}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t8_fremde_firma;

\echo '=== T9  Gegenprobe: Firma Zwei ist tatsächlich unverändert ==='
select pruef.wahrheit($$
  select (billing_city is distinct from 'Fremdstadt')::text
    from public.businesses where id = 'b2000000-0000-0000-0000-0000000000f2'
$$) as t9_firma_zwei_unberuehrt;

\echo '=== T10 Gegenprobe: einfaches Mitglied darf nicht schreiben ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"billing_city":"Mitgliedstadt"}'::jsonb)::text
$$, 'f1c00000-0000-0000-0000-000000000003'::uuid) as t10_mitglied_abgewiesen;

\echo '=== T11 Gegenprobe: ohne Anmeldung gesperrt (echte Rolle anon) ==='
select pruef.zaehle($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"billing_city":"Anonstadt"}'::jsonb)
$$, null, 'anon') as t11_anon_erwartet_minus1;

\echo '=== T12 Gegenprobe: unsinnige Postleitzahl wird abgewiesen ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"billing_zip":"!"}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t12_plz;

\echo '=== T13 Gegenprobe: ungültige Rechnungs-E-Mail wird abgewiesen ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"billing_email":"keine-adresse"}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t13_email;

\echo '=== T14 Gegenprobe: Rechnungs-E-Mail lässt sich nicht leeren ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{"billing_email":""}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t14_email_leeren;

\echo '=== T15 Gegenprobe: leere Übergabe wird abgewiesen ==='
select pruef.lies($$
  select public.business_rechnungsdaten_update(
    'b1000000-0000-0000-0000-0000000000f1', '{}'::jsonb)::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t15_leer;

\echo '=== T16 KERNGEGENPROBE: das Kennzeichen allein öffnet nichts ==='
-- Wer das Kennzeichen von Hand setzt und dann die Firmierung ändern will,
-- muss trotzdem am Trigger scheitern. Sonst waere die Funktion die einzige
-- Sicherung, und eine einzelne Sicherung ist keine.
do $$
declare v_alt text; v_neu text;
begin
  select name into v_alt from public.businesses
   where id = 'b1000000-0000-0000-0000-0000000000f1';
  begin
    perform set_config('request.jwt.claims',
      json_build_object('sub','f1a00000-0000-0000-0000-000000000001',
                        'role','authenticated')::text, true);
    perform set_config('app.rechnungsdaten_selbstbedienung', '1', true);
    execute 'set local role authenticated';
    update public.businesses set name = 'Untergeschoben'
     where id = 'b1000000-0000-0000-0000-0000000000f1';
    reset role;
    raise exception 'T16 FEHLGESCHLAGEN: Firmierung liess sich mit gesetztem Kennzeichen aendern';
  exception when insufficient_privilege then
    reset role;
    raise notice 'T16 ok: Trigger haelt trotz gesetztem Kennzeichen (%)', sqlstate;
  end;
  perform set_config('app.rechnungsdaten_selbstbedienung', '0', true);
  perform set_config('request.jwt.claims', '', true);
  select name into v_neu from public.businesses
   where id = 'b1000000-0000-0000-0000-0000000000f1';
  if v_alt is distinct from v_neu then
    raise exception 'T16 FEHLGESCHLAGEN: Firmierung wurde doch geaendert';
  end if;
  raise notice 'T16 ok: Firmierung unveraendert (%)', v_neu;
end $$;

\echo '=== T17 Die Leseansicht nennt genau die selbst änderbaren Felder ==='
select pruef.lies($$
  select (public.business_rechnungsdaten('b1000000-0000-0000-0000-0000000000f1')
          -> 'selbst_aenderbar')::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t17_felderliste;

\echo '=== T18 Gegenprobe: die Leseansicht gibt die interne Kennung nicht heraus ==='
-- Polaritaet bewusst so gedreht, dass true das Bestehen bedeutet -- wie in
-- allen anderen Pruefungen. Ein Ergebnis, das man erst gegen die Fragestellung
-- lesen muss, wird beim Ueberfliegen falsch gelesen.
select pruef.lies($$
  select (not (public.business_rechnungsdaten('b1000000-0000-0000-0000-0000000000f1')
               ? 'sevdesk_contact_id'))::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t18_kein_sevdesk;

\echo '=== T19 Gegenprobe: die Leseansicht einer fremden Firma ist gesperrt ==='
select pruef.lies($$
  select public.business_rechnungsdaten('b2000000-0000-0000-0000-0000000000f2')::text
$$, 'f1a00000-0000-0000-0000-000000000001'::uuid) as t19_fremde_leseansicht;

\echo '=== T20 Die Änderung ist protokolliert ==='
select pruef.wahrheit($$
  select (count(*) > 0)::text from public.audit_log
   where table_name = 'businesses'
     and record_id  = 'b1000000-0000-0000-0000-0000000000f1'
     and action     = 'UPDATE'
     and actor_id   = 'f1a00000-0000-0000-0000-000000000001'
     and new_data ->> 'billing_city' = 'Wanzleben'
$$) as t20_protokolliert;

\echo '=== T21 Gegenprobe: der Firmenkunde kommt selbst nicht ans Protokoll ==='
select pruef.zaehle('select * from public.audit_log',
                    'f1a00000-0000-0000-0000-000000000001'::uuid) as t21_protokoll_zu;

rollback;
