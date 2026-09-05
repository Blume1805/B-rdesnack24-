-- Unternehmensbereich: Anfrageprozess.
--
-- Prüft die öffentliche Anfrage, die Preis-Einfrierung, die Drossel, den
-- Honigtopf, die Pflichtangaben und die Abschottung gegen Fremdzugriff.
-- Läuft ausschließlich gegen die lokale Replik.
\set ON_ERROR_STOP on
\pset pager off

begin;

-- Ausgangslage: aufräumen, damit das Skript wiederholbar ist.
delete from public.advertising_inquiry_items
 where lead_id in (select id from public.leads where source = 'website_werbung');
delete from public.advertising_inquiry_locations
 where lead_id in (select id from public.leads where source = 'website_werbung');
delete from public.email_outbox where template_key like 'werbeanfrage%';
delete from public.leads where source = 'website_werbung';
delete from public.advertising_products where schluessel like 'pruef_%';
delete from app.anfrage_drossel;

-- Zwei Katalogeinträge: einer mit festem Preis, einer auf Anfrage.
insert into public.advertising_products
  (schluessel, name, kategorie, kurzbeschreibung, preis, preis_art, ab_preis, sortierung)
values
  ('pruef_flaeche', 'Automaten-Werbefläche', 'werbung_analog',
   'Ihre Marke direkt am Automaten.', 199.00, 'monatlich', true, 10),
  ('pruef_branding', 'Komplettbranding', 'werbung_analog',
   'Der ganze Automat in Ihrem Design.', null, 'individuell', false, 20);

\echo '=== T1  Katalog ist ohne Konto lesbar und enthält keine Datenbankkennung ==='
-- Bewusst keine absolute Zahl: der Katalog traegt seit dem Startbestand
-- echte Eintraege, und ein Test, der bei jedem neuen Katalogeintrag rot wird,
-- misst den Katalogumfang statt der Sicherheitsaussage. Geprueft wird, dass
-- die beiden Pruefeintraege ankommen und dass keine Datenbankkennung in der
-- oeffentlichen Antwort steht.
select pruef.wahrheit($$
  select ((select count(*) from jsonb_array_elements(public.advertising_catalog()) e
            where e ->> 'schluessel' in ('pruef_flaeche','pruef_branding')) = 2
     and not (public.advertising_catalog()::text like '%"id"%'))::text
$$) as t1_katalog_ohne_id;

\echo '=== T2  Anfrage ohne Konto wird angenommen ==='
select pruef.wahrheit($$
  select (public.advertising_inquiry_submit(
            'advertising', 'Musterfirma GmbH', 'Max Mustermann',
            'max@musterfirma.example', p_produkte := array['pruef_flaeche','pruef_branding'],
            p_datenschutz := true) ->> 'gespeichert') = 'true'
$$) as t2_anfrage_angenommen;

\echo '=== T3  Anfragenummer hat das vereinbarte Format und ist eindeutig ==='
select pruef.wahrheit($$
  select count(*) = 1 and bool_and(inquiry_number ~ '^BS24-[23456789ABCDEFGHJKLMNPQRSTUVWXYZ]{6}$')
  from public.leads where source = 'website_werbung'
$$) as t3_nummernformat;

\echo '=== T4  Der Preis wurde eingefroren, nicht verlinkt ==='
select pruef.wahrheit($$
  select count(*) = 2
     and count(*) filter (where preis = 199.00 and preis_art = 'monatlich' and ab_preis) = 1
     and count(*) filter (where preis is null and preis_art = 'individuell') = 1
  from public.advertising_inquiry_items
$$) as t4_preis_eingefroren;

\echo '=== T5  Katalogpreis ändern lässt die bestehende Anfrage unberührt ==='
update public.advertising_products set preis = 249.00 where schluessel = 'pruef_flaeche';
select pruef.wahrheit($$
  select preis = 199.00 from public.advertising_inquiry_items
  where produkt_schluessel = 'pruef_flaeche'
$$) as t5_preis_historie;

\echo '=== T6  Gegenprobe: Produkt aus dem Katalog nehmen, Position bleibt lesbar ==='
delete from public.advertising_products where schluessel = 'pruef_branding';
select pruef.wahrheit($$
  select produkt_name = 'Komplettbranding' and product_id is null
  from public.advertising_inquiry_items where produkt_schluessel = 'pruef_branding'
$$) as t6_position_ueberlebt;

\echo '=== T7  Ohne Datenschutz-Zustimmung wird abgelehnt ==='
do $$
begin
  perform public.advertising_inquiry_submit(
    'advertising', 'Ohne Zustimmung GmbH', 'Erika Muster',
    'erika@ohne.example', p_datenschutz := false);
  raise exception 'FEHLER: Anfrage ohne Zustimmung wurde angenommen';
exception when sqlstate '22023' then
  raise notice 't7_ohne_zustimmung_abgelehnt = t';
end $$;

\echo '=== T8  Unbrauchbare E-Mail wird abgelehnt ==='
do $$
declare v_fehler int := 0;
begin
  begin perform public.advertising_inquiry_submit('advertising','A GmbH','B','keine-mail', p_datenschutz := true);
  exception when sqlstate '22023' then v_fehler := v_fehler + 1; end;
  begin perform public.advertising_inquiry_submit('advertising','A GmbH','B','a@b', p_datenschutz := true);
  exception when sqlstate '22023' then v_fehler := v_fehler + 1; end;
  begin perform public.advertising_inquiry_submit('advertising','A GmbH','B','a b@c.de', p_datenschutz := true);
  exception when sqlstate '22023' then v_fehler := v_fehler + 1; end;
  if v_fehler <> 3 then
    raise exception 'FEHLER: nur % von 3 unbrauchbaren Adressen abgelehnt', v_fehler;
  end if;
  raise notice 't8_mailpruefung = t';
end $$;

\echo '=== T9  Der Honigtopf speichert nichts ==='
select pruef.wahrheit($$
  with vorher as (select count(*) n from public.leads),
       ruf as (select public.advertising_inquiry_submit(
                 'advertising', 'Spam GmbH', 'Bot', 'bot@spam.example',
                 p_datenschutz := true, p_hp := 'ausgefuellt') as a),
       nachher as (select count(*) n from public.leads)
  select (select (a ->> 'gespeichert') = 'false' from ruf)
     and (select n from vorher) = (select n from nachher)
$$) as t9_honigtopf;

\echo '=== T10  Die Drossel greift ab der vierten Anfrage derselben Adresse ==='
do $$
declare v_ok int := 0; v_blockiert int := 0;
begin
  delete from app.anfrage_drossel;
  for i in 1..5 loop
    begin
      perform public.advertising_inquiry_submit(
        'advertising', 'Vielfach GmbH', 'Viel Schreiber',
        'viel@schreiber.example', p_datenschutz := true);
      v_ok := v_ok + 1;
    exception when sqlstate '53400' then v_blockiert := v_blockiert + 1;
    end;
  end loop;
  if v_ok <> 3 or v_blockiert <> 2 then
    raise exception 'FEHLER: % durchgelassen, % blockiert — erwartet 3 und 2', v_ok, v_blockiert;
  end if;
  raise notice 't10_drossel = t';
end $$;

\echo '=== T11  Beide E-Mails liegen in der Warteschlange, keine als Werbung unterdrückt ==='
select pruef.wahrheit($$
  select count(*) filter (where template_key = 'werbeanfrage_kunde')  >= 1
     and count(*) filter (where template_key = 'werbeanfrage_intern') >= 1
     and count(*) filter (where suppressed_reason is not null) = 0
  from public.email_outbox where template_key like 'werbeanfrage%'
$$) as t11_mailversand;

\echo '=== T12  Eine Anfrage allein ist keine Werbeeinwilligung ==='
select pruef.wahrheit($$
  select bool_and(not marketing_einwilligung) from public.leads where source = 'website_werbung'
$$) as t12_keine_stille_einwilligung;

\echo '=== T13  Ein angemeldeter Fremder kommt an keine Anfrage heran ==='
select pruef.zaehle($$select * from public.leads$$,
  (select id from public.profiles where role = 'customer' and deleted_at is null limit 1))
  as t13_leads_fuer_kunden;
select pruef.zaehle($$select * from public.advertising_inquiry_items$$,
  (select id from public.profiles where role = 'customer' and deleted_at is null limit 1))
  as t13_positionen_fuer_kunden;

\echo '=== T14  Gegenprobe: die Verwaltung sieht die Anfragen sehr wohl ==='
select pruef.zaehle($$select * from public.leads$$,
  (select id from public.profiles where role = 'system_admin' and deleted_at is null limit 1))
  as t14_leads_fuer_verwaltung;

\echo '=== T15  Fremder darf die Detailansicht nicht aufrufen ==='
select pruef.lies(
  format($$select public.advertising_inquiry_detail(%L)$$,
         (select id from public.leads where source = 'website_werbung' limit 1)),
  (select id from public.profiles where role = 'customer' and deleted_at is null limit 1))
  as t15_detail_fuer_kunden;

\echo '=== T16  Erstkontakt wird nur einmal gesetzt ==='
do $$
declare v_lead uuid; v_erst timestamptz; v_zweit timestamptz;
begin
  select id into v_lead from public.leads where source = 'website_werbung' limit 1;
  update public.leads set erstkontakt_am = now() - interval '1 hour' where id = v_lead;
  select erstkontakt_am into v_erst from public.leads where id = v_lead;
  perform set_config('request.jwt.claims',
    json_build_object('sub', (select id::text from public.profiles where role='system_admin' limit 1))::text, true);
  perform public.advertising_inquiry_contacted(v_lead, 'Rückruf erledigt');
  select erstkontakt_am into v_zweit from public.leads where id = v_lead;
  perform set_config('request.jwt.claims', null, true);
  if v_erst <> v_zweit then
    raise exception 'FEHLER: Erstkontakt wurde überschrieben (% -> %)', v_erst, v_zweit;
  end if;
  raise notice 't16_erstkontakt_nicht_ueberschrieben = t';
end $$;

\echo '=== T17  Preisangabe bleibt widerspruchsfrei ==='
do $$
declare v int := 0;
begin
  begin
    insert into public.advertising_products (schluessel,name,kategorie,kurzbeschreibung,preis,preis_art)
    values ('pruef_widerspruch','X','werbung_analog','X',99,'individuell');
  exception when check_violation then v := v + 1; end;
  begin
    insert into public.advertising_products (schluessel,name,kategorie,kurzbeschreibung,preis,preis_art)
    values ('pruef_leer','X','werbung_analog','X',null,'monatlich');
  exception when check_violation then v := v + 1; end;
  begin
    insert into public.advertising_products (schluessel,name,kategorie,kurzbeschreibung,preis,preis_art,ab_preis)
    values ('pruef_ab_ohne','X','werbung_analog','X',null,'individuell',true);
  exception when check_violation then v := v + 1; end;
  if v <> 3 then raise exception 'FEHLER: nur % von 3 Preiswidersprüchen abgewiesen', v; end if;
  raise notice 't17_preisangabe_stimmig = t';
end $$;

\echo '=== T18  viewer erbt keinen Lesezugriff auf Stammdaten und Preise ==='
select pruef.wahrheit($$
  select not app.is_business_member('00000000-0000-0000-0000-000000000000'::uuid)
$$) as t18_kein_treffer_ohne_mitgliedschaft;

\echo '=== T19  Der oeffentliche Weg funktioniert in der Haut von anon ==='
-- Dieser Test fehlte und deshalb blieb ein Fehler unentdeckt: Die Funktion
-- hatte einen Parameter vom Typ app.lead_kind, und ein Aufruf mit einem Typ
-- aus Schema app verlangt USAGE auf dieses Schema — das anon bewusst nicht
-- hat. Geprueft wurde aber nur ueber pruef.wahrheit, und das laeuft als
-- Superuser. Ein Aufruf, der nie in der Haut der Rolle stattfindet, die ihn
-- im Betrieb ausfuehrt, prueft die Berechtigung nicht mit.
delete from app.anfrage_drossel;
select pruef.lies($$
  select public.advertising_inquiry_submit(
    'advertising', 'Anonyme GmbH', 'Ohne Konto',
    'anon@beispiel.example', p_datenschutz := true) ->> 'gespeichert'
$$, null, 'anon') as t19_anon_darf_absenden;

\echo '=== T20  Gegenprobe: anon kommt weiterhin nicht an Schema app ==='
select pruef.lies($$select app.heute()::text$$, null, 'anon') as t20_anon_ohne_schema_app;
select pruef.lies($$select count(*)::text from public.leads$$, null, 'anon') as t20_anon_ohne_leads;

\echo '=== T21  Eine erfundene Anfrageart wird verstaendlich abgewiesen ==='
select pruef.lies($$
  select public.advertising_inquiry_submit(
    'gibtesnicht', 'X GmbH', 'Y Z', 'x@y.example', p_datenschutz := true)::text
$$, null, 'anon') as t21_unbekannte_art;

\echo '=== T22  Auch der Katalog und die Standortliste gehen ohne Konto ==='
select pruef.lies($$select jsonb_array_length(public.advertising_catalog())::text$$,
  null, 'anon') as t22_katalog_fuer_anon;
select pruef.lies($$select jsonb_array_length(public.advertising_locations())::text$$,
  null, 'anon') as t22_standorte_fuer_anon;

rollback;
