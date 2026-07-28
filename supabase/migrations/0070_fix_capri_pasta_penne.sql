-- ============================================================================
-- 0070 · Zwei falsch eingeordnete Artikel korrigieren
-- ----------------------------------------------------------------------------
-- Beide standen in der Preisliste nur mit einem Kurznamen, den der Import zu
-- optimistisch gedeutet hat:
--
--   „Capri"             → KEIN Capri-Sonne-Trinkpäckchen, sondern das
--                         Wassereis am Stiel. Gehört zu Eis.
--   „Pasta Penne Sauer" → KEIN warmer Nudelbecher, sondern saures Fruchtgummi
--                         in Nudelform. Gehört zu Süßwaren.
--
-- USt-Folge nur bei Capri: als Getränk 19 %, als Speiseeis 7 %.
-- Der Kundenpreis bleibt unverändert 1,20 € — der Nettopreis wandert mit
-- (1,20 / 1,07 = 1,1215). Ohne das würde der angezeigte Preis auf 1,08 €
-- fallen. Pasta Penne lag schon bei 7 %, dort ändert sich preislich nichts.
--
-- serve_temp: Pasta Penne war als Heißgetränk-naher Artikel auf 'hot' gesetzt
-- und wäre damit als „Aufwärm-Deal" an kalten Tagen beworben worden —
-- Fruchtgummi ist ganzjährig, also 'neutral'.
-- ============================================================================

update public.products
   set name           = 'Capri Eis',
       category       = 'Eis',
       subcategory    = null,      -- Pflicht: nur Getränke tragen eine
       tax_rate       = 7.0,
       list_price_net = 1.1215,    -- ergibt exakt 1,20 € brutto bei 7 %
       serve_temp     = 'cold'
 where sku = 'BS-003';

update public.products
   set name        = 'Saure Pasta Penne',
       category    = 'Süßwaren',
       serve_temp  = 'neutral'
 where sku = 'BS-060';

-- Absicherung: die Kundenpreise dürfen sich durch die Umbuchung nicht
-- verschieben.
do $$
declare
  v_capri numeric;
  v_pasta numeric;
begin
  select round(list_price_net * (1 + tax_rate / 100), 2)
    into v_capri from public.products where sku = 'BS-003';
  select round(list_price_net * (1 + tax_rate / 100), 2)
    into v_pasta from public.products where sku = 'BS-060';

  if v_capri is distinct from 1.20 then
    raise exception 'Capri Eis: Bruttopreis wäre %, erwartet 1,20 €', v_capri;
  end if;
  if v_pasta is distinct from 1.70 then
    raise exception 'Saure Pasta Penne: Bruttopreis wäre %, erwartet 1,70 €',
      v_pasta;
  end if;
end $$;
