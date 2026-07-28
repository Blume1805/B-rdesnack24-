-- ============================================================================
-- DEMO-BESTAND — nicht für den Produktivbetrieb
-- ----------------------------------------------------------------------------
-- Beim Katalog-Reset (0065) wurde public.inventory mit geleert. Ohne Bestand
-- kann die Produktsuche nicht anzeigen, an welchem Automaten es einen Artikel
-- gibt — die Funktion wäre da, aber ohne Daten unsichtbar.
--
-- Dieses Skript legt einen plausiblen Bestand an, damit die Verfügbarkeits-
-- anzeige vorführbar ist. Es ist BEWUSST kein Migrationsschritt: Migrationen
-- laufen in jeder Umgebung, Demo-Bestände haben dort nichts zu suchen.
--
-- Sobald die Automaten real befüllt werden (Befüllungsprotokoll bzw.
-- Nayax-Sync), ersetzt der echte Bestand diese Zeilen. Vorher aufräumen mit:
--     delete from public.inventory;
--
-- Zuordnung nach Automatentyp:
--   A1  Snack, ungekühlt  → Süßwaren + Snacks
--   A2  Kombi, gekühlt    → Eis, Kaltgetränke, Energy, Süßwaren
--   A3  Getränke, gekühlt → Kaltgetränke + Energy Drinks
--   A4  Heißgetränke      → Heißgetränke
--
-- Die Stückzahl ist aus Automatencode und SKU abgeleitet (deterministisch,
-- 0–12). Dadurch entstehen reproduzierbar auch „bald leer"- und
-- „ausverkauft"-Fälle, an denen sich die Anzeige prüfen lässt.
-- ============================================================================

delete from public.inventory;

insert into public.inventory (machine_id, product_id, quantity, capacity, par_level)
select m.id,
       p.id,
       (abs(('x' || substr(md5(m.code || p.sku), 1, 8))::bit(32)::int) % 13),
       12,
       3
  from public.machines m
  join public.products p
    on case m.code
         when 'A1' then p.category in ('Süßwaren', 'Snacks')
         when 'A2' then p.category in ('Eis', 'Süßwaren')
                      or (p.category = 'Getränke'
                          and p.subcategory in ('Kaltgetränke', 'Energy Drinks'))
         when 'A3' then p.category = 'Getränke'
                      and p.subcategory in ('Kaltgetränke', 'Energy Drinks')
         when 'A4' then p.subcategory = 'Heißgetränke'
         else false
       end
 where m.deleted_at is null
   and m.status = 'active'
   and p.status = 'active';
