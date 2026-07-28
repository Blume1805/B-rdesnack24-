-- ============================================================================
-- 0067 · USt-Split: Latte Macchiato auf 7 %
-- ----------------------------------------------------------------------------
-- Vorgabe des Auftraggebers: Getränke 19 %, Latte Macchiato 7 %, Snacks und
-- Süßwaren (inkl. Speiseeis) 7 %.
--
-- Sachlicher Hintergrund: der Latte Macchiato besteht zu über 75 % aus Milch
-- und gilt damit als Milchmischgetränk — dafür greift der ermäßigte Satz
-- (Anlage 2 Nr. 35 UStG). Die übrigen Heißgetränke (Kaffee, Espresso,
-- Cappuccino, Kakao, Tee) bleiben bei 19 %.
--
-- Alle anderen Warengruppen entsprechen der Vorgabe bereits seit 0065:
--   Getränke 19 % · Eis 7 % · Snacks & Süßes 7 %
--
-- WICHTIG — der Kundenpreis darf sich NICHT ändern.
-- Die App rechnet brutto = netto × (1 + USt). Sinkt der Steuersatz bei
-- gleichem Nettopreis, fiele der angezeigte Preis von 2,20 € auf 1,97 €.
-- Deshalb wandert der Nettopreis mit: 2,20 / 1,07 = 2,0561.
-- Wirtschaftlich bedeutet das mehr Erlös statt weniger Umsatz — die
-- abzuführende USt sinkt von 0,35 € auf 0,14 € je Tasse.
-- ============================================================================

update public.products
   set tax_rate       = 7.0,
       list_price_net = 2.0561   -- ergibt exakt 2,20 € brutto bei 7 %
 where sku = 'BS-025' and name = 'Latte Macchiato';

-- Absicherung: der Bruttopreis muss unverändert 2,20 € bleiben.
do $$
declare v_brutto numeric;
begin
  select round(list_price_net * (1 + tax_rate / 100), 2)
    into v_brutto
    from public.products where sku = 'BS-025';

  if v_brutto is distinct from 2.20 then
    raise exception 'Latte Macchiato: Bruttopreis wäre %, erwartet 2,20 €', v_brutto;
  end if;
end $$;
