-- ===========================================================================
-- Popcorn: Einkaufspreis, Zutaten, Naehrwerte und Allergene.
--
-- Vorgabe Philipp vom 10.09.2026, Quelle sind vier Bildschirmfotos der
-- Produktseiten von kreutzers.eu.
--
-- BEFUND, DER DIE ZUORDNUNG BEGRENZT: Die vier Seiten zeigen nur ZWEI
-- verschiedene Datensaetze, jeder davon auf zwei Produkten.
--
--   Datensatz A  1738 kJ / 412 kcal, Salz 2,0 g, Meersalz in der Zutaten-
--                liste  ->  steht auf "Caramel & Seasalt" UND auf
--                "Premium Caramel"
--   Datensatz B  1933 kJ / 461 kcal, Kakaomasse + Weizenmehl + Zimt
--                ->  steht auf "Cookies & Cream" UND auf "Caramel Biscuit",
--                dort Wort fuer Wort identisch
--
-- Zwei Produkte tragen also die Angaben ihres Nachbarn. Welches jeweils das
-- richtige ist, laesst sich aus den Fotos nicht entscheiden:
--
--   * Datensatz A nennt Meersalz und weist 2,0 g Salz je 100 g aus. Das
--     passt zu "Caramel & Seasalt". Fuer ein ungesalzenes "Premium
--     Caramel" waeren 2,0 g Salz sehr viel.
--   * Datensatz B enthaelt gleichzeitig Kakaomasse, fettarmes Kakaopulver
--     und 13 % Vollmilchpulver (Signatur "Cookies & Cream") UND Weizenmehl,
--     Kandisirup und Zimt (Signatur "Caramel Biscuit"). Beide Handschriften
--     in einer Liste ergeben fuer keines der beiden Produkte ein
--     stimmiges Zutatenverzeichnis.
--
-- DARAUS FOLGT DIE AUFTEILUNG DIESER MIGRATION:
--
--   Naehrwerte und Zutatenverzeichnis  ->  nur BS-064 (Caramel & Seasalt).
--       Ein falsches Zutatenverzeichnis ist eine Falschangabe nach LMIV;
--       ein fehlendes ist eine Luecke. Die Luecke ist das kleinere Uebel.
--
--   Allergene  ->  alle vier. Das ist die Angabe, an der Gesundheit haengt,
--       und sie ist gegen die Verwechslung robust: In beiden Datensaetzen
--       stehen Sojaoel und Butter, in Datensatz B zusaetzlich Weizenmehl.
--       Auch wenn die Datensaetze vertauscht sind, aendert sich am
--       Allergenbild der einzelnen Sorte nichts: die beiden Karamell-Sorten
--       tragen Soja und Milch, die beiden Keks-Sorten zusaetzlich Gluten.
--
--   Spurenhinweise ("Kann Spuren von Schalenfruechten enthalten") gehoeren
--       NICHT in `allergens`. Das Feld fuehrt deklarationspflichtige
--       Zutaten; ein freiwilliger Spurenhinweis nach Art. 36 LMIV ist keine
--       Zutat. Er steht im Zutatentext, wo er hingehoert.
--
-- EINKAUFSPREIS: 2,99 EUR laut Philipp. Das ist ein Bruttopreis, das Feld
-- fuehrt netto -> 2,99 / 1,07. Der Wert wird berechnet und nicht als Zahl
-- hineingeschrieben, damit die Herleitung sichtbar bleibt.
-- ===========================================================================

alter table public.products
  add column if not exists ingredients text;

comment on column public.products.ingredients is
  'Zutatenverzeichnis im Wortlaut der Verpackung, einschliesslich '
  'freiwilliger Spurenhinweise. Pflichtangabe nach Art. 9 Abs. 1 lit. b '
  'LMIV; `allergens` fuehrt daraus nur die deklarationspflichtigen '
  'Allergene als Schlagworte.';

-- ── Einkaufspreis fuer alle vier Sorten ────────────────────────────────
update public.products
   set cost_price_net = round(2.99 / 1.07, 4),
       updated_at = now()
 where sku in ('BS-063', 'BS-064', 'BS-065', 'BS-066');

-- ── Allergene fuer alle vier Sorten ────────────────────────────────────
-- Karamell-Sorten: Sojaoel (Karamellzucker), Butter.
update public.products
   set allergens = array['Milch', 'Soja']::text[],
       updated_at = now()
 where sku in ('BS-064', 'BS-066');

-- Keks-Sorten: zusaetzlich Weizenmehl.
update public.products
   set allergens = array['Gluten', 'Milch', 'Soja']::text[],
       updated_at = now()
 where sku in ('BS-063', 'BS-065');

-- ── Naehrwerte und Zutaten: nur die eindeutige Sorte ───────────────────
update public.products
   set energy_kcal      = 412,
       fat_g            = 10.9,
       saturated_fat_g  = 7.9,
       carbs_g          = 76.1,
       sugars_g         = 29.7,
       protein_g        = 2.4,
       salt_g           = 2.0,
       ingredients      =
         'Karamellzucker (enthält Sojaöl), Mais, Zucker, Karamellsirup, '
         'Butter, Backtriebmittel: Natriumhydrogencarbonat, Meersalz, '
         'Salz, Aroma. Kann Spuren von Schalenfrüchten enthalten.',
       updated_at = now()
 where sku = 'BS-064';

-- ── product_detail um das Zutatenverzeichnis erweitern ─────────────────
-- Rueckgabetyp aendert sich, deshalb drop + create. Die Rechte werden
-- danach ausdruecklich neu gesetzt: `create` gibt PUBLIC sonst wieder das
-- Ausfuehrungsrecht, das Migration 20260902060051 entzogen hat.
drop function if exists public.product_detail(uuid);
create function public.product_detail(p_product_id uuid)
returns table(
  id uuid, name text, category text, image_url text,
  list_price_net numeric, tax_rate numeric,
  energy_kcal numeric, fat_g numeric, saturated_fat_g numeric,
  carbs_g numeric, sugars_g numeric, protein_g numeric, salt_g numeric,
  allergens text[], ingredients text,
  avg_rating numeric, review_count integer,
  my_rating integer)
language sql
stable
security definer
set search_path = public, app
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net, p.tax_rate,
         p.energy_kcal, p.fat_g, p.saturated_fat_g,
         p.carbs_g, p.sugars_g, p.protein_g, p.salt_g,
         p.allergens, p.ingredients,
         coalesce(prs.avg_rating, 0),
         coalesce(prs.review_count, 0),
         (select rating from public.product_ratings
           where product_id = p.id and customer_id = auth.uid())
    from public.products p
    left join public.product_rating_summary prs on prs.product_id = p.id
   where p.id = p_product_id;
$$;

revoke execute on function public.product_detail(uuid) from public;
revoke execute on function public.product_detail(uuid) from anon;
grant  execute on function public.product_detail(uuid) to authenticated, service_role;
