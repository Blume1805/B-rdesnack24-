-- ============================================================================
-- 0132 — Eine Erstattung ist kein zweiter Aufwand, eine Einlage kein Aufwand
-- ----------------------------------------------------------------------------
-- Zwei Befunde des Auftraggebers vom 25.08.2026, beide am Bildschirm
-- entdeckt, beide mit derselben Ursache im Connector: `richtungAusKonto`
-- hatte Vorrang vor `creditDebit`, und damit ging die Information verloren,
-- in welche Richtung das Geld tatsächlich läuft.
--
-- 1) „Amazon ist eine Rückerstattung."
--    Zwei Belege, dieselbe Rechnungsnummer DE62YC8JABEI, je 22,71 € netto
--    auf 4930 Bürobedarf — 06.05. und 15.05.2026. Beide standen als Aufwand.
--    Bürobedarf war dadurch 137,85 € statt 92,43 €, also 45,42 € zu hoch:
--    Die Erstattung wurde nicht nur nicht abgezogen, sie wurde addiert.
--
--    Welcher der beiden Belege die Erstattung ist, entscheidet hier die
--    Reihenfolge: Eine Rückerstattung kann der Rechnung, die sie erstattet,
--    nicht vorausgehen. Also der spätere, 15.05.2026. Der Connector nimmt ab
--    jetzt nicht diese Herleitung, sondern `creditDebit` aus dem Beleg —
--    und `richtung_abweichungen` im Sync-Protokoll nennt beim nächsten Lauf
--    die Belegkennung, sodass es überprüfbar wird statt hergeleitet.
--
--    Die Erstattung bleibt auf 4930 und im Aufwand, nur mit negativem
--    Betrag. Sie zum Erlös zu machen wäre falsch: Zurückgezahltes Geld ist
--    kein Umsatz, es mindert die Kosten.
--
-- 2) „Die 132 € sind auch eine Privateinlage von Philipp."
--    Der Beleg vom 31.12.2025 trägt als Geschäftspartner die Zeichenfolge
--    `1890` — die Nummer des Kontos „Privateinlagen", kein Firmenname. In
--    sevDesk ist er auf 4651 „Sonstige eingeschränkt abziehbare
--    Betriebsausgaben" kontiert; die App hat das getreu übernommen und damit
--    eine Einlage als Betriebsausgabe gezeigt.
--
--    Hier weicht die App bewusst von sevDesk ab. Sonst gilt „was sevDesk
--    kontiert, gilt" — deshalb steht die Abweichung im Sync-Protokoll
--    (`partner_ist_privatkonto`). Sauber wäre, den Beleg in sevDesk auf 1890
--    umzukontieren; dann läuft die Regel leer und beide Systeme sagen
--    wieder dasselbe.
--
-- Wirkung auf die Auswertung: Aufwand 1.727,99 € → 1.550,57 €
-- (−45,42 € Erstattung, −132,00 € Einlage), Privat/Kapital 430,00 € →
-- 562,00 €. Erlöse unverändert 148,61 €.
-- ============================================================================

-- 1) Die spätere der beiden Amazon-Buchungen ist die Erstattung.
update public.finance_bookings
set amount_net = -abs(amount_net),
    amount_tax = -abs(amount_tax),
    updated_at = now()
where source = 'sevdesk'
  and source_ref = '145210124-199804949'
  and deleted_at is null
  and amount_net > 0;

-- 2) Der Beleg, dessen Geschäftspartner „1890" heisst, gehört auf 1890.
update public.finance_bookings
set account_code = btrim(split_part(description, '·', 1)),
    direction = 'liability',
    updated_at = now()
where source = 'sevdesk'
  and deleted_at is null
  and account_code <> btrim(split_part(description, '·', 1))
  and btrim(split_part(description, '·', 1)) ~ '^1[89][0-9]{2}$';
