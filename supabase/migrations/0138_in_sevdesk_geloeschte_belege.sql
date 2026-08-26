-- ===========================================================================
-- 0138 — Telefon stand doppelt: fünf Belege, die es in sevDesk nicht mehr gibt
-- ---------------------------------------------------------------------------
-- Gemeldet am 26.08.2026: „Es sieht so aus, als wenn Daten beim Internet,
-- Telefon doppelt in der App sind. Es müssten monatlich 4,99 € Telefon und
-- 12,18 € Internet sein."
--
-- BEFUND (abgefragt, nicht angenommen):
--
--   * Internet (4925, Mddsl GmbH) ist NICHT doppelt — genau ein Beleg je
--     Monat, Dez 2025 bis Aug 2026, jeweils 12,18 € brutto.
--   * Telefon (4920) stand Feb–Jun 2026 zweimal: einmal „Freenet" mit
--     4,99 € (Feb 3,71 €) und einmal „Freenet Dls Gmbh" mit 24,95 €
--     (Feb 18,58 €) — beide unter derselben Rechnungsnummer.
--   * Die zweite Reihe stammt aus dem Lauf vom 25.08.2026, 18:34 Uhr
--     (44 Belege). Die beiden Läufe danach (20:42 Uhr und 26.08. 12:30 Uhr)
--     lieferten sie nicht mehr: 41 Belege, dieselben Rechnungsnummern nur
--     noch einmal. Sie wurden also in sevDesk gelöscht.
--   * `finance_bookings.sync_run_id` beweist es zeilengenau: Genau diese
--     fünf Zeilen — und im ganzen Bestand sonst keine — tragen noch den
--     Lauf von 18:34 Uhr. Alle übrigen 37 sevDesk-Zeilen wurden vom
--     jüngsten Lauf neu geschrieben.
--
-- URSACHE: Der Sync schrieb nur (upsert) und löschte nie. Was in sevDesk
-- verschwand, blieb in der App stehen — dauerhaft. Behoben ist das in
-- `supabase/functions/sevdesk-sync/index.ts` (Schritt 6a): Was der Lauf
-- nicht geliefert hat, wird im gebuchten Zeitraum weich gelöscht, mit drei
-- Sicherungen gegen einen unvollständigen Abruf.
--
-- Diese Migration räumt den Altbestand auf, den der Fix erst beim nächsten
-- Lauf erwischen würde. Weich (`deleted_at`), wie bei den doppelten
-- Zahlungen aus 0130 — die Zeile bleibt nachvollziehbar.
--
-- Wirkung: Telefon (4920) sinkt von 133,14 € auf 33,65 € netto,
-- Aufwand gesamt um 118,38 € brutto.
-- ===========================================================================

update public.finance_bookings
   set deleted_at = now()
 where source = 'sevdesk'
   and deleted_at is null
   and source_ref in (
     '153209946-209405904',  -- 17.02.2026, Freenet Dls Gmbh · M26012655351, 18,58 €
     '153209957-209405916',  -- 19.03.2026, Freenet Dls Gmbh · M26019720362, 24,95 €
     '153209964-209405923',  -- 20.04.2026, Freenet Dls Gmbh · M26026827994, 24,95 €
     '153209970-209405930',  -- 19.05.2026, Freenet Dls Gmbh · M26033882169, 24,95 €
     '153209974-209405935'   -- 18.06.2026, Freenet Dls Gmbh · M26041020593, 24,95 €
   );
