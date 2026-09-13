create or replace function app.assert_offer_product_in_catalog()
returns trigger
language plpgsql
set search_path = public, app
as $$
declare
  v_sku    text;
  v_status app.entity_status;
  v_del    timestamptz;
begin
  if new.product_id is null then
    return new;
  end if;

  select sku, status, deleted_at
    into v_sku, v_status, v_del
    from public.products
   where id = new.product_id;

  if not found then
    raise exception 'Angebot verweist auf ein unbekanntes Produkt (%)',
      new.product_id;
  end if;

  if coalesce(v_sku, '') = 'WILDCARD' then
    return new;
  end if;

  if v_status <> 'active' or v_del is not null then
    raise exception
      'Angebot nur auf Produkte im Sortiment — % ist % (gelöscht: %)',
      coalesce(v_sku, new.product_id::text), v_status, v_del is not null;
  end if;

  return new;
end;
$$;

comment on function app.assert_offer_product_in_catalog() is
  'Verhindert Angebote auf inaktive/gelöschte Produkte. WILDCARD erlaubt.';

drop trigger if exists trg_offers_product_in_catalog on public.offers;
create trigger trg_offers_product_in_catalog
  before insert or update of product_id on public.offers
  for each row execute function app.assert_offer_product_in_catalog();

drop trigger if exists trg_personal_offers_product_in_catalog
  on public.personal_offers;
create trigger trg_personal_offers_product_in_catalog
  before insert or update of product_id on public.personal_offers
  for each row execute function app.assert_offer_product_in_catalog();

delete from public.personal_offers po
 where po.product_id is not null
   and not exists (
     select 1 from public.products p
      where p.id = po.product_id
        and p.deleted_at is null
        and (p.status = 'active' or coalesce(p.sku, '') = 'WILDCARD')
   );

delete from public.offers o
 where o.product_id is not null
   and not exists (
     select 1 from public.products p
      where p.id = o.product_id
        and p.deleted_at is null
        and (p.status = 'active' or coalesce(p.sku, '') = 'WILDCARD')
   );
