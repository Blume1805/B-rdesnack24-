-- ============================================================================
-- 0133 — Die Homeoffice-Pauschale ist eine Betriebsausgabe
-- ----------------------------------------------------------------------------
-- Rücknahme von Teil 2 der Migration 0132. Der Auftraggeber hat den Fehler
-- am selben Tag korrigiert:
--
--   „Die 132 € sind die Homeoffice-Pauschale. Also doch eine Betriebsausgabe
--    (keine Cashflowposition)."
--
-- Mein Denkfehler: Der Beleg vom 31.12.2025 trägt als Geschäftspartner die
-- Zeichenfolge `1890`, und daraus hatte ich geschlossen, die Buchung gehöre
-- auf das Konto „Privateinlagen". Sie gehört dort nicht hin — `1890` ist das
-- GEGENKONTO. Die Homeoffice-Pauschale wird als Aufwand gegen das
-- Kapitalkonto gebucht; es fliesst kein Geld, und 4651 war von Anfang an
-- richtig.
--
-- Damit ist auch die Regel `privatkontoAusPartner` hinfällig und ersatzlos
-- entfallen. Sie war aus EINEM Beleg hergeleitet, ohne die Bedeutung des
-- Feldes zu prüfen — genau der Fehler, den die Hausregel „Behauptungen
-- vorher prüfen" verhindern soll.
--
-- Die Erstattung (Teil 1 der 0132) bleibt bestehen; sie war richtig und ist
-- ein anderer Fall.
--
-- Wirkung: 4651 wieder 132,00 € Aufwand, 1890 Privateinlagen zurück auf
-- 215,00 €. Aufwand 1.550,57 € → 1.682,57 €, Privat/Kapital 562,00 € →
-- 430,00 €.
-- ============================================================================

update public.finance_bookings
set account_code = '4651',
    direction = 'expense',
    updated_at = now()
where source = 'sevdesk'
  and deleted_at is null
  and source_ref = '135038921-187708471';
