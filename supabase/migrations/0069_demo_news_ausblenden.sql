-- ============================================================================
-- 0069 — Beispiel-Nachrichten aus 0020 ausblenden
--
-- Migration 0020 hat drei Nachrichten als Beispieldaten angelegt, und zwar
-- nicht über seed.sql, sondern als Teil der Migration. Sie stehen damit in
-- JEDER Datenbank, auch im Produktivprojekt, und sind über den News-Bereich
-- der App für jedes Konto sichtbar (Policy news_read: is_published = true).
--
-- Alle drei sind inhaltlich falsch (geprüft am 26.09.2026):
--
--   * „Neuer Automat am Bahnhof Osterweddingen" behauptet einen dritten
--     Automaten in Betrieb. Es ist kein einziger Automat in Betrieb
--     (COMPLIANCE V-010).
--   * „5 % für den guten Zweck" sagt „ab sofort" und beschreibt eine
--     vierteljährliche Auszahlung an den meistgewählten Zweck. Die
--     festgelegte Regel ist eine jährliche Auszahlung zu gleichen Teilen an
--     die drei Zwecke mit den meisten Stimmen (ADR 0007, Nachtrag
--     26.09.2026; COMPLIANCE V-012, Befund D-1).
--   * „Sommer-Sortiment ist da" beschreibt ein Sortiment, das es nicht gibt.
--
-- Eine unzutreffende Tatsachenbehauptung über den eigenen Geschäftsbetrieb
-- ist eine irreführende geschäftliche Handlung (§ 5 UWG).
--
-- Bewusst AUSBLENDEN statt LÖSCHEN: umkehrbar, und der Datenbestand bleibt
-- nachvollziehbar. Getroffen werden nur genau diese drei Titel mit genau dem
-- Text aus 0020 — spätere, echte Beiträge mit gleichem Titel bleiben unberührt.
-- ============================================================================

update public.news_articles
   set is_published = false
 where is_published
   and (
         (title = 'Neuer Automat am Bahnhof Osterweddingen'
          and body like 'Ab sofort findet ihr am Nordausgang des Bahnhofs Osterweddingen%')
      or (title = '5 % für den guten Zweck'
          and body like 'Ihr habt uns oft gefragt, ob wir uns sozial engagieren.%')
      or (title = 'Sommer-Sortiment ist da'
          and body like 'Wir haben unser Kühlautomaten-Sortiment für den Sommer erweitert%')
       );
