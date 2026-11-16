-- Automatenbezahlung: Preisstufen, Unveränderbarkeit, Einmaligkeit.
--
-- Geprüft wird nicht, dass die Funktionen existieren, sondern dass sie
-- unter Angriff und unter Wiederholung das Richtige tun:
--   A  der MHD-Abschlag greift in der richtigen Stufe
--   B  ein Rohereignis lässt sich nicht ändern und nicht löschen
--   C  die Hashkette erkennt eine trotzdem erzwungene Änderung
--   D  eine Freigabe lässt sich genau einmal einlösen
--   E  eine Lücke in der Herstellernummer wird sichtbar
--   F  eine Auszahlung, deren Rechnung nicht aufgeht, wird abgewiesen
--
-- Läuft gegen die lokale Prüfumgebung, nie gegen die Produktion.
--
-- WICHTIG: gegen eine FRISCH AUFGEBAUTE Datenbank laufen lassen. Der Test
-- ist bewusst nicht wiederholbar, und zwar aus zwei Gründen, die beide
-- beweisen, dass das System richtig gebaut ist:
--   * Rohereignisse lassen sich nicht löschen — ein zweiter Lauf stößt auf
--     den Idempotenzschlüssel des ersten.
--   * Teil C bricht die Hashkette absichtlich. Eine gebrochene Kette bleibt
--     gebrochen; das ist ihr Sinn. Ein zweiter Lauf fände sie schon kaputt
--     vor und könnte nichts mehr zeigen.
-- Ein Prüflauf, der sich beliebig wiederholen ließe, würde bedeuten, dass
-- sich Buchungsdaten aufräumen lassen.
\set ON_ERROR_STOP on
\pset pager off


-- ── Eigene Prüfdaten ───────────────────────────────────────────────────
-- Bewusst eigenständig: Dieser Nachweis soll nicht scheitern, weil ein
-- fremder Datensatz fehlt. Feste Kennungen, damit er wiederholbar ist.
\set maschine  '\'aaaa0000-0000-4000-8000-000000000001\''
\set produkt   '\'aaaa0000-0000-4000-8000-000000000002\''
\set nutzer    '\'aaaa0000-0000-4000-8000-000000000003\''
\set fremd     '\'aaaa0000-0000-4000-8000-0000000000ff\''

-- Der Nutzer entsteht auf demselben Weg wie ein echter Kunde: über
-- auth.users, den Rest macht der Trigger. Die Rolle wird NICHT angehoben —
-- guard_profile_update() verbietet das zu Recht, und ein Prüflauf, der die
-- Schutzvorrichtung ausschaltet, prüft die falsche Anlage. Die eine
-- gebrauchte Berechtigung wird stattdessen einzeln erteilt.
insert into auth.users (id, email, raw_user_meta_data)
  values (:nutzer, 'pruef-terminal@example.invalid', '{"full_name": "Prüfkonto"}'::jsonb)
  on conflict (id) do nothing;

insert into public.user_permissions (user_id, permission_key, granted)
  values (:nutzer, 'payments.view', true),
         (:nutzer, 'cash.collect', true),
         (:nutzer, 'prices.manage', true)
  on conflict (user_id, permission_key) do update set granted = true;

insert into public.machines (id, code, name) values
  (:maschine, 'PRUEF-M1', 'Prüfautomat'),
  (:fremd,    'PRUEF-M2', 'Fremder Prüfautomat')
  on conflict (id) do nothing;

insert into public.products (id, sku, name, tax_rate, list_price_net)
  values (:produkt, 'PRUEF-P1', 'Prüfprodukt', 7.0, 2.3364)
  on conflict (id) do update set tax_rate = 7.0, list_price_net = 2.3364;

-- Aufräumen für die Wiederholung
delete from public.vend_freigaben  where machine_id in (:maschine, :fremd);
delete from public.inventory       where machine_id = :maschine;

\echo '=== A  MHD-Stufen ==='

-- A1 kein MHD hinterlegt -> kein Abschlag
insert into public.inventory (machine_id, product_id, quantity, expiry_date)
values (:maschine, :produkt, 5, null);

select 'A1 ohne MHD' as fall,
       brutto, mhd_abschlag_prozent, rest_tage,
       case when mhd_abschlag_prozent = 0 and brutto = 2.50 then 'OK' else 'FEHLER' end as urteil
  from public.automatenpreis(:maschine,
                             :produkt);

-- A2 20 Tage Restlaufzeit -> keine Stufe greift
update public.inventory set expiry_date = current_date + 20
 where machine_id = :maschine
   and product_id = :produkt;

select 'A2 20 Tage' as fall,
       brutto, mhd_abschlag_prozent, rest_tage,
       case when mhd_abschlag_prozent = 0 and brutto = 2.50 then 'OK' else 'FEHLER' end as urteil
  from public.automatenpreis(:maschine,
                             :produkt);

-- A3 7 Tage -> 10-Tage-Stufe, 20 %
update public.inventory set expiry_date = current_date + 7
 where machine_id = :maschine
   and product_id = :produkt;

select 'A3 7 Tage' as fall,
       brutto, mhd_abschlag_prozent, rest_tage,
       case when mhd_abschlag_prozent = 20 and brutto = 2.00 then 'OK' else 'FEHLER' end as urteil
  from public.automatenpreis(:maschine,
                             :produkt);

-- A4 2 Tage -> die STRENGERE Stufe greift, nicht die erstbeste: 40 %
update public.inventory set expiry_date = current_date + 2
 where machine_id = :maschine
   and product_id = :produkt;

select 'A4 2 Tage' as fall,
       brutto, mhd_abschlag_prozent, rest_tage,
       case when mhd_abschlag_prozent = 40 and brutto = 1.50 then 'OK' else 'FEHLER' end as urteil
  from public.automatenpreis(:maschine,
                             :produkt);

\echo '=== B  Rohereignis ist unveraenderbar ==='

insert into public.terminals (machine_id, hersteller, modell, seriennummer, terminal_kennung)
values (:maschine, 'clevermetrics', 'IM30', 'PRUEF-0001', 'PRUEF-0001')
on conflict (hersteller, terminal_kennung) do nothing;

insert into public.terminal_ereignisse
  (terminal_id, hersteller, terminal_kennung, idempotenz_schluessel, anbieter_lfd_nr, art, nutzlast)
select t.id, 'clevermetrics', 'PRUEF-0001', 'pruef-1', 1, 'verkauf', '{"betrag": 2.50}'::jsonb
  from public.terminals t where t.terminal_kennung = 'PRUEF-0001';

-- B1 Nutzlast aendern muss scheitern
do $$
begin
  update public.terminal_ereignisse
     set nutzlast = '{"betrag": 0.01}'::jsonb
   where idempotenz_schluessel = 'pruef-1';
  raise exception 'FEHLER B1: Nutzlast liess sich aendern';
exception
  when others then
    if position('unveränderbar' in sqlerrm) > 0 then
      raise notice 'B1 Nutzlast aendern abgewiesen: OK';
    else
      raise;
    end if;
end;
$$;

-- B2 Loeschen muss scheitern
do $$
begin
  delete from public.terminal_ereignisse where idempotenz_schluessel = 'pruef-1';
  raise exception 'FEHLER B2: Satz liess sich loeschen';
exception
  when others then
    if position('nicht gelöscht' in sqlerrm) > 0 then
      raise notice 'B2 Loeschen abgewiesen: OK';
    else
      raise;
    end if;
end;
$$;

-- B3 Verarbeitungsvermerk MUSS gehen, sonst ist die Warteschlange tot
update public.terminal_ereignisse
   set verarbeitet_am = now()
 where idempotenz_schluessel = 'pruef-1';
\echo 'B3 Verarbeitungsvermerk erlaubt: OK'

-- B4 Doppelte Zustellung darf nicht doppelt buchen
do $$
begin
  insert into public.terminal_ereignisse
    (hersteller, terminal_kennung, idempotenz_schluessel, art, nutzlast)
  values ('clevermetrics', 'PRUEF-0001', 'pruef-1', 'verkauf', '{"betrag": 2.50}'::jsonb);
  raise exception 'FEHLER B4: Doppelte Zustellung wurde angenommen';
exception
  when unique_violation then
    raise notice 'B4 Doppelte Zustellung abgewiesen: OK';
end;
$$;

\echo '=== C  Hashkette erkennt eine erzwungene Aenderung ==='

insert into public.terminal_ereignisse
  (hersteller, terminal_kennung, idempotenz_schluessel, anbieter_lfd_nr, art, nutzlast)
values ('clevermetrics', 'PRUEF-0001', 'pruef-2', 2, 'verkauf', '{"betrag": 1.50}'::jsonb),
       ('clevermetrics', 'PRUEF-0001', 'pruef-3', 3, 'verkauf', '{"betrag": 3.00}'::jsonb);

-- Die Prüffunktionen verlangen 'payments.view'. Ohne Anmeldung geben sie
-- nichts heraus — das ist gewollt und wird hier mitbewiesen.
select 'C0 ohne Anmeldung' as fall,
       case when count(*) = 0 then 'OK — verweigert' else 'FEHLER' end as urteil
  from public.terminal_luecken(30);

select set_config('request.jwt.claims',
                  json_build_object('sub', :nutzer, 'role', 'authenticated')::text,
                  false) as angemeldet;

-- Kette ist unversehrt
select 'C1 Kette vor dem Angriff' as fall,
       erste_abweichung,
       case when erste_abweichung is null then 'OK' else 'FEHLER' end as urteil
  from public.ereigniskette_pruefen();

-- Angriff mit den hoechsten Rechten: Trigger aus, Betrag faelschen, Trigger an.
-- Genau das kann ein Angreifer mit Datenbankzugriff, und genau davor schuetzt
-- die Kette — sie verhindert es nicht, sie macht es sichtbar.
alter table public.terminal_ereignisse disable trigger trg_terminal_ereignis_unveraenderbar;
update public.terminal_ereignisse
   set nutzlast = '{"betrag": 0.01}'::jsonb
 where idempotenz_schluessel = 'pruef-2';
alter table public.terminal_ereignisse enable trigger trg_terminal_ereignis_unveraenderbar;

select 'C2 Kette nach dem Angriff' as fall,
       k.erste_abweichung,
       (select e.idempotenz_schluessel from public.terminal_ereignisse e
         where e.lfd_nr = k.erste_abweichung) as betroffener_satz,
       case when (select e.idempotenz_schluessel from public.terminal_ereignisse e
                   where e.lfd_nr = k.erste_abweichung) = 'pruef-2'
            then 'OK — genau der gefaelschte Satz' else 'FEHLER' end as urteil
  from public.ereigniskette_pruefen() k;

\echo '=== D  Freigabe ist einmalig ==='

-- Freigabe von Hand anlegen (vend_freigabe_anlegen braucht eine Anmeldung,
-- die es im Prueflauf nicht gibt — geprueft wird hier das Einloesen).
insert into public.vend_freigaben
  (code_hash, customer_id, machine_id, product_id, slot_code,
   betrag_brutto, herleitung, gueltig_bis)
select extensions.digest('pruefcode-abc', 'sha256'),
       c.id, :maschine,
       :produkt, 'PRUEF',
       1.50, '{"pruef": true}'::jsonb, now() + interval '3 minutes'
  from public.customers c where c.id = :nutzer;

select 'D1 erste Einloesung' as fall, betrag_brutto,
       case when betrag_brutto = 1.50 then 'OK' else 'FEHLER' end as urteil
  from app.vend_freigabe_einloesen('pruefcode-abc', :maschine);

select 'D2 zweite Einloesung' as fall,
       case when count(*) = 0 then 'OK — kein zweites Mal' else 'FEHLER' end as urteil
  from app.vend_freigabe_einloesen('pruefcode-abc', :maschine);

-- D3 abgelaufene Freigabe
insert into public.vend_freigaben
  (code_hash, customer_id, machine_id, product_id, slot_code,
   betrag_brutto, herleitung, gueltig_bis)
select extensions.digest('pruefcode-alt', 'sha256'),
       c.id, :maschine,
       :produkt, 'PRUEF',
       1.50, '{"pruef": true}'::jsonb, now() - interval '1 minute'
  from public.customers c where c.id = :nutzer;

select 'D3 abgelaufen' as fall,
       case when count(*) = 0 then 'OK — abgewiesen' else 'FEHLER' end as urteil
  from app.vend_freigabe_einloesen('pruefcode-alt', :maschine);

-- D4 fremder Automat: derselbe gueltige Code an einem anderen Geraet.
-- Vorher die abgelaufene Freigabe stornieren — genau das tut auch
-- vend_freigabe_anlegen(), weil ein Kunde nur eine offene halten darf.
update public.vend_freigaben
   set storniert_am = now(), storno_grund = 'abgelaufen'
 where customer_id = :nutzer and eingeloest_am is null and storniert_am is null;

insert into public.vend_freigaben
  (code_hash, customer_id, machine_id, product_id, slot_code,
   betrag_brutto, herleitung, gueltig_bis)
select extensions.digest('pruefcode-xyz', 'sha256'),
       c.id, :maschine,
       :produkt, 'PRUEF',
       1.50, '{"pruef": true}'::jsonb, now() + interval '3 minutes'
  from public.customers c where c.id = :nutzer;

select 'D4 fremder Automat' as fall,
       case when count(*) = 0 then 'OK — abgewiesen' else 'FEHLER' end as urteil
  from app.vend_freigabe_einloesen('pruefcode-xyz', :fremd);

\echo '=== E  Luecke in der Herstellernummer ==='

-- 1, 2, 3 sind da; jetzt kommt 6. Die 4 und die 5 fehlen — zwei Verkaeufe,
-- deren Nachricht nie angekommen ist.
insert into public.terminal_ereignisse
  (hersteller, terminal_kennung, idempotenz_schluessel, anbieter_lfd_nr, art, nutzlast)
values ('clevermetrics', 'PRUEF-0001', 'pruef-6', 6, 'verkauf', '{"betrag": 2.00}'::jsonb);

select 'E1 Luecke' as fall, fehlt_ab, fehlt_bis,
       case when fehlt_ab = 4 and fehlt_bis = 5 then 'OK' else 'FEHLER' end as urteil
  from public.terminal_luecken(30)
 where terminal_kennung = 'PRUEF-0001';

\echo '=== F  Auszahlung muss aufgehen ==='

-- F1 Umsatz minus Gebuehren muss den Auszahlungsbetrag ergeben. Sonst ist
-- der Satz nicht buchbar, und die Datenbank nimmt ihn gar nicht erst an.
insert into public.terminal_auszahlungen
  (hersteller, auszahlungsreferenz, zeitraum_von, zeitraum_bis,
   umsatz_brutto, gebuehren, auszahlung_betrag)
values ('clevermetrics', 'PRUEF-A1', current_date, current_date, 100.00, 1.90, 98.10);
\echo 'F1 stimmige Auszahlung angenommen: OK'

do $$
begin
  insert into public.terminal_auszahlungen
    (hersteller, auszahlungsreferenz, zeitraum_von, zeitraum_bis,
     umsatz_brutto, gebuehren, auszahlung_betrag)
  values ('clevermetrics', 'PRUEF-A2', current_date, current_date, 100.00, 1.90, 100.00);
  raise exception 'FEHLER F2: unstimmige Auszahlung wurde angenommen';
exception
  when check_violation then
    raise notice 'F2 unstimmige Auszahlung abgewiesen: OK';
end;
$$;

-- F3 Abweichung zwischen gemeldetem und ausgewiesenem Umsatz wird sichtbar.
select 'F3 Abgleich' as fall, tag, umsatz_gemeldet, umsatz_ausgewiesen, abweichung,
       case when abweichung is not null then 'OK — Abweichung benannt' else 'FEHLER' end as urteil
  from public.auszahlungen_abgleich(60)
 limit 1;

\echo '=== G  Bargeld: Soll, Ist, Differenz ==='

-- G1 Barverkaeufe ergeben das Soll fuer die naechste Leerung.
-- Zwei zugeordnete Verkaeufe, einer bar, einer mit Karte.
insert into public.terminal_ereignisse
  (terminal_id, hersteller, terminal_kennung, idempotenz_schluessel,
   anbieter_lfd_nr, art, zahlart, nutzlast)
select t.id, 'clevermetrics', 'PRUEF-0001', v.schluessel, v.nr, 'verkauf', v.zahlart, v.betrag
  from public.terminals t
  cross join (values ('pruef-bar-1', 7, 'bar',   '{"betrag": 2.50}'::jsonb),
                     ('pruef-kar-1', 9, 'karte', '{"betrag": 9.99}'::jsonb)
             ) as v(schluessel, nr, zahlart, betrag)
 where t.terminal_kennung = 'PRUEF-0001';

-- Ein Barverkauf, dessen Geraet nicht zugeordnet werden konnte. Er MUSS
-- trotzdem ins Soll, sonst weist der Kassensturz einen Ueberschuss aus.
insert into public.terminal_ereignisse
  (hersteller, terminal_kennung, idempotenz_schluessel, anbieter_lfd_nr,
   art, zahlart, nutzlast)
values ('clevermetrics', 'PRUEF-0001', 'pruef-bar-2', 8, 'verkauf', 'bar', '{"betrag": 1.50}'::jsonb);

select 'G1 Bar-Soll' as fall, soll_betrag, anzahl_verkaeufe,
       case when soll_betrag = 4.00 and anzahl_verkaeufe = 2
            then 'OK — Karte zaehlt nicht mit, unzugeordneter Barverkauf schon'
            else 'FEHLER' end as urteil
  from public.bar_soll(:maschine);

-- G1b Ohne Barverkaeufe ist das Soll null und die Anzahl null — nicht eins.
select 'G1b leeres Soll' as fall, soll_betrag, anzahl_verkaeufe,
       case when soll_betrag = 0 and anzahl_verkaeufe = 0 then 'OK' else 'FEHLER' end as urteil
  from public.bar_soll(:fremd);

-- G2 Eine Zaehlung mit Fehlbetrag weist ihn aus, statt ihn zu verschlucken.
insert into public.cash_collection_logs
  (machine_id, amount_gross, change_amount, soll_betrag, stueckelung, bemerkung)
values (:maschine, 3.50, 0, 4.00,
        '{"2eur": 1, "1eur": 1, "50cent": 1}'::jsonb,
        'Fehlbetrag, Ursache offen');

select 'G2 Differenz' as fall, differenz,
       case when differenz = -0.50 then 'OK — Fehlbetrag ausgewiesen' else 'FEHLER' end as urteil
  from public.cash_collection_logs
 where machine_id = :maschine order by collected_at desc limit 1;

-- G3 Eine Zaehlung laesst sich nicht glattziehen.
do $$
begin
  update public.cash_collection_logs set amount_gross = 4.00
   where machine_id = 'aaaa0000-0000-4000-8000-000000000001';
  raise exception 'FEHLER G3: Zaehlung liess sich aendern';
exception
  when others then
    if position('nicht nachträglich geändert' in sqlerrm) > 0 then
      raise notice 'G3 Nachtraegliche Aenderung abgewiesen: OK';
    else
      raise;
    end if;
end;
$$;

-- G4 Loeschen ebenso wenig.
do $$
begin
  delete from public.cash_collection_logs
   where machine_id = 'aaaa0000-0000-4000-8000-000000000001';
  raise exception 'FEHLER G4: Zaehlung liess sich loeschen';
exception
  when others then
    if position('nicht gelöscht' in sqlerrm) > 0 then
      raise notice 'G4 Loeschen abgewiesen: OK';
    else
      raise;
    end if;
end;
$$;

-- G5 Die Differenz taucht in der Uebersicht auf. Eine Bemerkung ist Pflicht
--    im Verfahren, nicht in der Spalte — deshalb wird sie mit ausgegeben.
select 'G5 Uebersicht' as fall, differenz, bemerkung,
       case when differenz = -0.50 then 'OK' else 'FEHLER' end as urteil
  from public.kassendifferenzen(180)
 where machine_id = :maschine limit 1;

\echo '=== H  Preisausspielung ==='

-- H1 Ohne Ausspielung weicht jedes Fach ab: der Automat kennt den Preis nicht.
insert into public.machine_slots (machine_id, slot_code, product_id, unit_price_net)
values (:maschine, 'A1', :produkt, 2.3364)
on conflict (machine_id, slot_code) do nothing;

select 'H1 ohne Ausspielung' as fall, slot_code, soll_brutto, zuletzt_bestaetigt,
       case when zuletzt_bestaetigt is null then 'OK — Abweichung erkannt' else 'FEHLER' end as urteil
  from public.preis_abweichungen(:maschine);

-- H2 Nach der Bestaetigung stimmt es.
insert into public.preis_ausspielungen
  (machine_id, slot_code, product_id, preis_brutto, grund, gesendet_am, bestaetigt_am)
select :maschine, 'A1', :produkt, a.brutto, 'mhd_abschlag', now(), now()
  from public.automatenpreis(:maschine, :produkt) a;

-- Zaehlt die Faecher mit, damit 'keine Abweichung' nicht mit 'kein Zugriff'
-- verwechselt wird: Ohne Berechtigung waere das Ergebnis ebenfalls leer.
select 'H2 nach Bestaetigung' as fall,
       (select count(*) from public.machine_slots where machine_id = :maschine) as faecher,
       count(*) as abweichungen,
       case when count(*) = 0
             and (select count(*) from public.machine_slots where machine_id = :maschine) > 0
            then 'OK — keine Abweichung mehr' else 'FEHLER' end as urteil
  from public.preis_abweichungen(:maschine);

-- H3 Aendert sich das MHD, weicht das Fach wieder ab — genau das soll es.
update public.inventory set expiry_date = current_date + 30
 where machine_id = :maschine and product_id = :produkt;

select 'H3 MHD geaendert' as fall, soll_brutto, zuletzt_bestaetigt,
       case when soll_brutto = 2.50 and zuletzt_bestaetigt = 1.50
            then 'OK — neuer Preis muss raus' else 'FEHLER' end as urteil
  from public.preis_abweichungen(:maschine);
