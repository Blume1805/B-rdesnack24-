-- Sortiment: vierte Popcorn-Sorte (Vorgabe Philipp, 10.09.2026).
--
-- Gleiche Behandlung wie BS-063 bis BS-065 einen Auftrag zuvor:
-- Verkaufspreis, Einkaufspreis, Gewicht, Naehrwerte und Allergene
-- bleiben leer, weil das Bildschirmfoto sie nicht zeigt. Auf dieser
-- Produktseite steht diesmal ueberhaupt kein Preis und kein Gewicht,
-- also gibt es auch nichts, was uebernommen werden koennte.
--
-- Steuersatz 7 %: Zubereitungen aus Getreide, Anlage 2 Nr. 32 UStG.
-- Kategorie `Snacks`, keine Unterkategorie (Feld ist per
-- Check-Constraint fuer Getraenke reserviert).

insert into public.products
  (sku, name, category, tax_rate, serve_temp, status)
select v.sku, v.name, 'Snacks', 7.0, 'neutral', 'active'
from (values
  ('BS-066', 'Popcrn Premium Caramel')
) as v(sku, name)
where not exists (
  select 1 from public.products p where p.sku = v.sku
);
