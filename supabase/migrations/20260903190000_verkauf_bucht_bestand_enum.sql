-- Eigene Migration, weil ein mit ALTER TYPE ADD VALUE angelegter Wert in
-- derselben Transaktion nicht verwendet werden darf.
--
-- movement_source bekommt 'verkauf'. Die vorhandenen Werte passen nicht:
-- 'manual' waere gelogen (niemand hat die Hand angelegt), 'nayax' beschreibt
-- den Automatenhersteller und nicht jeden Verkaufsweg, 'inventory' meint die
-- Zaehlung und 'disposal' den Verwurf. Ein eigener Wert macht die Herkunft
-- einer Bewegung im Bestandsjournal ohne Nachschlagen lesbar -- und genau
-- das braucht eine Verfahrensdokumentation.
--
-- Geprueft, bevor der Wert angelegt wird: keine Policy und kein CHECK auf
-- inventory_movements wertet source aus. Ein neuer Wert erweitert hier also
-- keine bestehende Filterung stillschweigend.

alter type app.movement_source add value if not exists 'verkauf';
