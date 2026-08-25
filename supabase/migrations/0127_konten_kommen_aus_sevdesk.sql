-- ============================================================================
-- 0127 — Buchungen je Belegposition; der Kontenstamm wächst aus sevDesk
-- ----------------------------------------------------------------------------
-- ANLASS (25.08.2026)
--
-- Nach dem zweiten echten Lauf standen alle Kostenpositionen auf 3300/3400
-- „Wareneingang". Zwei Ursachen:
--
-- 1) Die Belegposition verweist auf ein AccountDatev-OBJEKT ({id, objectName}),
--    nennt die Kontonummer also nicht selbst. Der Connector löst sie jetzt
--    über /AccountDatev auf.
-- 2) Der Kontenstamm kannte 50 Konten. Selbst mit aufgelöster Nummer wäre
--    jedes Konto ausserhalb dieser 50 verworfen worden — und damit auf dem
--    Sammelkonto gelandet.
--
-- ----------------------------------------------------------------------------
-- WARUM DER SKR 03 NICHT AUS DEM PDF EINGESPIELT WIRD
--
-- Naheliegend wäre, den vollständigen Kontenrahmen aus dem bereitgestellten
-- DATEV-PDF zu laden. Der Versuch ist gemacht und VERWORFEN: Das PDF ist ein
-- Layout-Dokument mit mehreren Spalten, und eine maschinelle Lesung liefert
-- Namen, die man niemandem zeigen kann. Aus 517 gelesenen Konten der Klassen
-- 3, 4 und 8 zum Beispiel:
--
--   3410 | R 3620                                   (Querverweis, kein Name)
--   4304 | G K                                      (Spaltenmarker)
--   4099 | Löhne und                                (am Umbruch abgeschnitten)
--   3000, 3010, 3029, 3030, 3060 …                  alle „Einkauf Roh-,
--                                                   Hilfs- und Betriebs"
--
-- Solche Bezeichnungen in die App zu schreiben hiesse, Daten zu erfinden —
-- und zwar an genau der Stelle, an der es um Nachvollziehbarkeit geht.
--
-- Die Kontonummer UND ihr Name kommen deshalb aus sevDesk selbst. Das ist
-- derselbe SKR 03, nur in der Fassung, die der Auftraggeber tatsächlich
-- führt: Was in sevDesk auf 4930 „Bürobedarf" gebucht ist, steht danach in
-- der App als 4930 „Bürobedarf". Der Connector legt fehlende Konten an und
-- gleicht den Namen bestehender an sevDesk an.
--
-- Die 50 handgeprüften Konten aus Migration 0125 bleiben als Grundstock; sie
-- decken den Fall ab, dass ein Beleg ohne Kontierung ankommt.
-- ============================================================================

-- Ab jetzt wird JE POSITION gebucht: Ein Beleg mit Wareneinkauf und
-- Verpackung gehört auf zwei Konten. Der Schlüssel lautet deshalb
-- „Beleg-Position" statt „Beleg" — ohne dieses Aufräumen stünde jeder Beleg
-- des vorigen Laufs zusätzlich zu seinen Positionen in der Auswertung.
delete from public.finance_bookings where source = 'sevdesk';

-- Nachweis statt Vertrauen: Der Connector legt Konten selbst an. Diese
-- Prüfung stellt sicher, dass er es darf — fehlt das Recht, landet wieder
-- alles auf dem Sammelkonto, und zwar still.
do $$
declare v_kann boolean;
begin
  select has_table_privilege('service_role', 'public.finance_accounts', 'INSERT')
     and has_table_privilege('service_role', 'public.finance_accounts', 'UPDATE')
    into v_kann;
  if not v_kann then
    raise exception 'service_role darf finance_accounts nicht pflegen — der Connector koennte keine Konten anlegen.';
  end if;
  raise notice 'Kontenpflege durch den Connector ist moeglich.';
end $$;
