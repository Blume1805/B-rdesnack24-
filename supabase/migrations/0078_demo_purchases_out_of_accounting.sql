-- ============================================================================
-- 0078 · Demo-Käufe aus der Buchhaltungsgrundlage nehmen
-- ----------------------------------------------------------------------------
-- BEFUND
-- `dev_add_demo_purchase()` legt einen simulierten Kauf an. Die Funktion ist
-- kein vergessenes Entwicklerwerkzeug, sondern ein sichtbares Feature: im
-- Belege-Screen steht ein Kasten „Demo-Testkauf" mit vier Zahlungsart-Chips,
-- unbeschränkt für jedes Kundenkonto (receipts_screen.dart). Gedacht ist er
-- für die Zeit, bis der Nayax-Webhook echte Käufe liefert.
--
-- Geschrieben wurde bisher `source = 'manual'`. Das ist derselbe Wert, den
-- `purchases.source` als DEFAULT trägt (0010) — simulierte und echte Käufe
-- waren also nicht unterscheidbar. Und `datev_export_rows`, `finance_kpis`
-- und `finance_summary` lesen `public.purchases` ohne jeden Filter auf die
-- Herkunft.
--
-- In der Summe: Jedes Kundenkonto konnte über einen Knopf in der App Zeilen
-- erzeugen, die anschließend in den DATEV-Export und in die BWA einflossen.
-- Bei einem Export, der in die Buchführung geht, ist das keine Kosmetik.
--
-- Zur Einordnung, ohne Dramatik: Es gibt derzeit keinen echten Zahlungsweg,
-- alle acht Käufe in der Datenbank stammen aus diesem Knopf. Das ist also
-- kein laufender Schaden, sondern etwas, das vor dem Start dicht sein muss —
-- sobald echte und simulierte Umsätze nebeneinanderliegen, lässt sich beides
-- nachträglich nicht mehr trennen.
--
-- ENTSCHEIDUNG
-- Der Demo-Knopf bleibt, er wird nur kenntlich: neue Herkunft 'demo' (0077).
-- Ausgeschlossen wird sie dort, wo es um Geld geht, das die Firma verlässt
-- oder als Zahl nach außen wirkt — nicht dort, wo der Demo-Knopf gerade
-- seinen Zweck erfüllt:
--
--   ausgeschlossen   datev_export_rows, finance_kpis, finance_summary
--   unverändert      my_receipts, my_loyalty_status, my_gamification_status,
--                    Spenden-Ansichten, export_my_data (Art. 15 DSGVO —
--                    dort gehört alles hinein, was zur Person gespeichert ist)
--
-- Bestehende Zeilen werden NICHT umgeschrieben. Alle acht tragen 'manual'
-- und stammen aus dem Demo-Knopf; sie umzuwidmen wäre eine Änderung an
-- vorhandenen Zahlen und damit eine Entscheidung des Betriebs, nicht dieser
-- Migration. Solange sie stehen, zeigen BWA und DATEV-Export sie weiter an.
--
-- ZUR FORM
-- Die drei Leserfunktionen werden nicht neu abgetippt, sondern über
-- `pg_get_functiondef` gelesen, gezielt ergänzt und zurückgeschrieben. Das
-- vermeidet Abschreibfehler in 12 KB Finanz-SQL. Der Preis ist, dass die
-- Migration auf dem Bestand aufsetzt — deshalb prüft sie jeden Treffer vorher
-- ab und bricht mit einer Meldung ab, statt still das Falsche zu tun. Bei
-- einem erneuten Lauf gegen eine abweichende Fassung schlägt sie also fehl,
-- statt sie zu beschädigen.
-- ============================================================================
do $$
declare
  d text;
  n_alt int;
  n_neu int;
begin
  -- 1) Demo-Käufe bekommen eine eigene Quelle statt 'manual'.
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'dev_add_demo_purchase';

  n_alt := (length(d) - length(replace(d, '''manual'', v_valid)', '')))
           / length('''manual'', v_valid)');
  if n_alt <> 1 then
    raise exception 'dev_add_demo_purchase: % Treffer statt 1 — abgebrochen', n_alt;
  end if;
  d := replace(d, '''manual'', v_valid)', '''demo'', v_valid)');
  execute d;

  -- 2) finance_kpis (3 Fundstellen) und finance_summary (2) nutzen wortgleich
  --    dieselbe Zeitraum-Bedingung mit dem Alias `pu`.
  for d in
    select pg_get_functiondef(p.oid)
      from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
     where ns.nspname = 'public' and p.proname in ('finance_kpis', 'finance_summary')
  loop
    n_alt := (length(d) - length(replace(d, 'where pu.purchased_at::date between p_from and p_to', '')))
             / length('where pu.purchased_at::date between p_from and p_to');
    if n_alt = 0 then
      raise exception 'Zeitraum-Bedingung nicht gefunden — abgebrochen';
    end if;
    d := replace(d,
      'where pu.purchased_at::date between p_from and p_to',
      'where pu.purchased_at::date between p_from and p_to and pu.source <> ''demo''');
    execute d;
  end loop;

  -- 3) datev_export_rows rechnet in Europe/Berlin und hat deshalb eine eigene
  --    Schreibweise derselben Bedingung.
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'datev_export_rows';

  n_alt := (length(d) - length(replace(d, 'between p_from and p_to', '')))
           / length('between p_from and p_to');
  if n_alt <> 1 then
    raise exception 'datev_export_rows: % Treffer statt 1 — abgebrochen', n_alt;
  end if;
  d := replace(d,
    'between p_from and p_to',
    'between p_from and p_to and pu.source <> ''demo''');
  execute d;

  -- 4) Gegenprobe: alle drei Leser tragen den Ausschluss.
  select count(*) into n_neu
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public'
     and p.proname in ('finance_kpis', 'finance_summary', 'datev_export_rows')
     and p.prosrc like '%source <> ''demo''%';
  if n_neu <> 3 then
    raise exception 'Nur % von 3 Funktionen gepatcht — abgebrochen', n_neu;
  end if;
end $$;

-- ----------------------------------------------------------------------------
-- OFFEN — gehört dem Betrieb, nicht dieser Migration
-- ----------------------------------------------------------------------------
-- 1. Der Demo-Knopf steht jedem Kundenkonto offen. Vor dem Start ist zu
--    entscheiden, ob er bleibt (Beta), auf interne Rollen begrenzt wird oder
--    verschwindet. Technisch ist er ab jetzt harmlos für die Buchhaltung,
--    aber er lässt weiterhin Treuepunkte und Spendenstände wachsen.
-- 2. Die acht bestehenden Käufe mit `source = 'manual'` sind sämtlich Demo-
--    Daten. Ob sie auf 'demo' umgestellt oder gelöscht werden, ist eine
--    Entscheidung über vorhandene Zahlen.
