create or replace function public.inventory_summary_by_product()
returns table(
  product_id       uuid,
  product_name     text,
  sku              text,
  in_machines_qty  integer,
  in_warehouse_qty integer,
  total_qty        integer,
  unit_cost        numeric,
  total_value      numeric
)
language plpgsql
security definer
set search_path = public, app
as $$
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  return query
  select p.id, p.name, p.sku,
    coalesce((select sum(i.quantity)::int from public.inventory i
              where i.product_id = p.id), 0)  as in_machines_qty,
    coalesce((select sum(w.quantity)::int from public.warehouse_stock w
              where w.product_id = p.id), 0)  as in_warehouse_qty,
    (coalesce((select sum(i.quantity)::int from public.inventory i
                where i.product_id = p.id), 0)
     + coalesce((select sum(w.quantity)::int from public.warehouse_stock w
                  where w.product_id = p.id), 0))::int as total_qty,
    coalesce(p.cost_price_net, 0) as unit_cost,
    round(
      (coalesce((select sum(i.quantity) from public.inventory i where i.product_id = p.id), 0)
       + coalesce((select sum(w.quantity) from public.warehouse_stock w where w.product_id = p.id), 0))
       * coalesce(p.cost_price_net, 0), 2) as total_value
  from public.products p
  where p.deleted_at is null
  order by p.sku, p.name;
end;
$$;

grant execute on function public.inventory_summary_by_product() to authenticated;
