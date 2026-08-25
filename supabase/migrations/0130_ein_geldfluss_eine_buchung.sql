-- ============================================================================
-- 0130 — Ein Geldfluss, eine Buchung
-- ----------------------------------------------------------------------------
-- Hausregel des Auftraggebers vom 25.08.2026, wörtlich: „Merke dir das, dass
-- immer nur eine Ein- oder Auszahlung da stehen darf. Das Konto 1780 ist
-- richtig."
--
-- Anlass: sevDesk führt zu jeder Umsatzsteuer-Voranmeldung ZWEI Belege — die
-- Anmeldung und die Zahlung bzw. Erstattung. Beide tragen denselben Betrag,
-- denselben Partner und liegen wenige Tage auseinander:
--
--   09.01.2026  1780  Finanzamt · UStVA-Q4.2025       35,43 €
--   13.01.2026  1790  Finanzamt Magdeburg · USt IV/25 35,43 €
--   02.04.2026  1780  Finanzamt · UStVA-Q1.2026       74,27 €
--   08.04.2026  1780  Finanzamt Magdeburg · I/2026    74,27 €
--   02.07.2026  1780  Finanzamt · UStVA-Q2.2026       36,96 €
--   06.07.2026  1780  Finanzamt Magdeburg · USt II/26 36,96 €
--
-- In der Auswertung stand derselbe Geldeingang dadurch zweimal; die Einnahmen
-- waren um 146,66 € zu hoch.
--
-- WAS DIESE MIGRATION NICHT TUT
-- Sie löscht nicht hart. `deleted_at` wird gesetzt: Die Zeile bleibt lesbar,
-- der Vorgang bleibt nachvollziehbar, und niemand muss sich darauf verlassen,
-- dass diese Datei die ganze Geschichte erzählt.
--
-- Sie fasst auch nur Umsatzsteuer-Zahlkonten (1700–1799) an. Eine allgemeine
-- Regel „gleicher Betrag, gleicher Partner, nahes Datum" hätte im selben
-- Bestand echte Vorgänge geschluckt:
--
--   * zwei Bescheide der Gemeinde Sülzetal über je 25,00 € am 25.11.2025 —
--     verschiedene Belegnummern, zwei Gebühren.
--   * eine Privateinlage (1890) und eine Privatentnahme (1800) über je
--     215,00 € am 15.06.2026 — gleicher Betrag, entgegengesetzte Richtung.
--
-- Dieselbe Regel steckt in supabase/functions/sevdesk-sync/mapping.ts
-- (`doppelteZahlungenFinden`), damit der nächste Sync sie nicht wieder
-- einträgt. Diese Migration räumt nur den Bestand auf, der schon da ist.
-- ============================================================================

update public.finance_bookings a
set deleted_at = now(),
    updated_at = now()
where a.deleted_at is null
  and a.source = 'sevdesk'
  and a.account_code between '1700' and '1799'
  and exists (
    select 1
    from public.finance_bookings b
    where b.id <> a.id
      and b.deleted_at is null
      and b.source = 'sevdesk'
      and b.account_code between '1700' and '1799'
      and b.direction = a.direction
      and round(b.amount_net + b.amount_tax, 2)
        = round(a.amount_net + a.amount_tax, 2)
      and abs(b.booking_date - a.booking_date) <= 14
      -- Erstes Wort des Geschäftspartners: „Finanzamt" trifft „Finanzamt
      -- Magdeburg". `description` ist „Lieferant · Belegnummer".
      and lower(split_part(btrim(split_part(b.description, '·', 1)), ' ', 1))
        = lower(split_part(btrim(split_part(a.description, '·', 1)), ' ', 1))
      -- b gewinnt gegen a: erst 1780 („Das Konto 1780 ist richtig"), dann das
      -- frühere Datum, dann die kleinere Belegkennung. Damit ist genau eine
      -- der beiden Zeilen der Verlierer — unabhängig von der Reihenfolge, in
      -- der Postgres die Zeilen ansieht.
      and (
        (b.account_code = '1780') > (a.account_code = '1780')
        or (
          (b.account_code = '1780') = (a.account_code = '1780')
          and (b.booking_date, b.source_ref) < (a.booking_date, a.source_ref)
        )
      )
  );
