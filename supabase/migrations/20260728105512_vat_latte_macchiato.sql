update public.products
   set tax_rate       = 7.0,
       list_price_net = 2.0561
 where sku = 'BS-025' and name = 'Latte Macchiato';

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
