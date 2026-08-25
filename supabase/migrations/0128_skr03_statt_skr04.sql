-- ============================================================================
-- 0128 — Die Konten kamen aus dem SKR 04. Aufräumen.
-- ----------------------------------------------------------------------------
-- ANLASS (25.08.2026)
--
-- Der Auftraggeber hat gemeldet, dass die Aufwandskonten nach SKR 04 gebucht
-- waren. Er hat recht, und die Strukturprobe des AccountDatev-Objekts sagt
-- auch warum: Es führt BEIDE Kontenrahmen nebeneinander.
--
--   number,   name     → SKR 04
--   number03, name03   → SKR 03
--
-- Der Connector nahm `number`. Damit standen in der App Konten, die es im
-- SKR 03 gar nicht gibt:
--
--   6805 Telefon                        statt 4920
--   6810 Telefax und Internetkosten     statt 4925
--   6815 Bürobedarf                     statt 4930
--   6300 sonstige betr. Aufwendungen    statt 4900
--   0670 Geringwertige Wirtschaftsgüter statt 0480
--
-- Ein Folgefehler steckte darin gleich mit: `richtungAusKonto` liest die
-- erste Ziffer nach SKR 03 (3/4 Aufwand, 8 Erlös). Im SKR 04 bedeutet die
-- 4 aber ERTRAG — deshalb trug „4839 Sonstige Erträge unregelmäßig" bei uns
-- die Richtung „Aufwand". Mit SKR-03-Nummern stimmt die Ableitung wieder.
--
-- Diese Migration räumt beides weg: die acht Konten aus dem falschen Rahmen
-- und die Buchungen, die darauf zeigen. Der nächste Sync baut sie mit
-- `number03` neu auf.
-- ============================================================================

delete from public.finance_bookings where source = 'sevdesk';

-- Nur Konten aus dem SKR 04 entfernen, die der Connector selbst angelegt
-- hat — der handgeprüfte Grundstock aus Migration 0125 bleibt unberührt.
delete from public.finance_accounts
where code in ('0670','4839','6300','6805','6810','6815','6837','6845');

do $$
declare v_offen int;
begin
  select count(*) into v_offen
  from public.finance_accounts
  where code in ('0670','4839','6300','6805','6810','6815','6837','6845');
  if v_offen > 0 then
    raise exception 'Es stehen noch % SKR-04-Konten im Stamm.', v_offen;
  end if;
  raise notice 'SKR-04-Konten entfernt, Stamm bei % Konten.',
    (select count(*) from public.finance_accounts);
end $$;
