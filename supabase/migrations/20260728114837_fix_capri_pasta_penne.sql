update public.products
   set name           = 'Capri Eis',
       category       = 'Eis',
       subcategory    = null,
       tax_rate       = 7.0,
       list_price_net = 1.1215,
       serve_temp     = 'cold'
 where sku = 'BS-003';

update public.products
   set name        = 'Saure Pasta Penne',
       category    = 'Süßwaren',
       serve_temp  = 'neutral'
 where sku = 'BS-060';

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
