-- Sortiment: drei Popcorn-Sorten aufnehmen (Vorgabe Philipp, 10.09.2026).
--
-- Quelle der Sortennamen sind zwei Bildschirmfotos von kreutzers.eu. Was
-- dort ausserdem steht, wird BEWUSST NICHT uebernommen:
--
--   * Der Preis 2,99 EUR ist der Ladenpreis eines fremden Shops, nicht
--     unser Automatenpreis. `list_price_net` bleibt deshalb leer, bis
--     Philipp den Verkaufspreis festlegt.
--   * Die Gewichtsangaben widersprechen sich: 100 g und 80 g stehen dort
--     beide bei 11,96 EUR/kg. Rechnerisch ergaebe 2,99 EUR bei
--     11,96 EUR/kg 250 g. Eine der beiden Angaben je Produkt ist falsch,
--     also wird keine uebernommen. Das Gewicht kommt von der Packung
--     oder aus der Lieferantenliste.
--   * Naehrwerte und Allergene stehen dort nicht und werden nicht
--     geschaetzt. Sie fehlen bei allen 62 bisherigen Produkten ebenso;
--     der offene LMIV-Punkt waechst damit auf 65.
--
-- `cost_price_net` bleibt leer, weil es keinen Einkaufspreis gibt. Ein
-- geschaetzter Einkaufspreis wuerde Wareneinsatzquote und
-- Rohertragsmarge verfaelschen -- die beiden Kennzahlen, an denen die
-- Kalkulation haengt.
--
-- Steuersatz 7 %: Zubereitungen aus Getreide, Anlage 2 Nr. 32 UStG
-- (Kapitel 19 des Zolltarifs). Gleiche Einstufung wie die uebrigen
-- Snacks und Suesswaren im Sortiment.
--
-- Kategorie `Snacks`: die Darreichung entspricht den Tueten
-- (Chipsfrisch), nicht den Riegeln. Eine Unterkategorie `Popcorn` waere
-- naheliegend gewesen, ist aber ausgeschlossen: `products_subcategory_check`
-- und `products_subcategory_only_drinks` reservieren das Feld fuer
-- Getraenke. Diese Einschraenkung wird fuer drei Produkte nicht gelockert.

insert into public.products
  (sku, name, category, tax_rate, serve_temp, status)
select v.sku, v.name, 'Snacks', 7.0, 'neutral', 'active'
from (values
  ('BS-063', 'Popcrn Caramel Biscuit'),
  ('BS-064', 'Popcrn Caramel & Seasalt'),
  ('BS-065', 'Popcrn Cookies & Cream')
) as v(sku, name)
where not exists (
  select 1 from public.products p where p.sku = v.sku
);
