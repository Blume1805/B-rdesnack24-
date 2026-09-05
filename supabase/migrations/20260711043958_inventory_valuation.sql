-- MHD auf Bestandsposten
alter table public.inventory
  add column if not exists expiry_date date;

-- Lagerbestand
create table if not exists public.warehouse_stock (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid not null references public.products(id) on delete restrict,
  quantity    integer not null default 0 check (quantity >= 0),
  expiry_date date,
  updated_at  timestamptz not null default now()
);
create index if not exists idx_warehouse_product on public.warehouse_stock(product_id);

alter table public.warehouse_stock enable row level security;
drop policy if exists ws_read on public.warehouse_stock;
create policy ws_read on public.warehouse_stock
  for select to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid()
                    and p.role in ('system_admin','shareholder','employee')));

-- Seed: Zufalls-MHDs für die aktuellen inventory-Zeilen (3-90 Tage).
update public.inventory
   set expiry_date = current_date + ((3 + floor(random()*88))::int)
 where expiry_date is null;

-- Ein paar der Positionen bewusst mit MHD < 7 Tage, damit im Report der
-- 50-%-Abschlag sofort sichtbar ist.
with pick as (
  select machine_id, product_id from public.inventory
  order by random() limit 4
)
update public.inventory i
   set expiry_date = current_date + ((1 + floor(random()*5))::int)
  from pick where pick.machine_id = i.machine_id and pick.product_id = i.product_id;

-- Seed Lagerbestand: je Produkt 6-30 Stk, MHD 30-180 Tage
insert into public.warehouse_stock(product_id, quantity, expiry_date)
select p.id,
       (6 + floor(random()*24))::int,
       current_date + ((30 + floor(random()*150))::int)
from public.products p
where p.deleted_at is null
  and not exists (select 1 from public.warehouse_stock w where w.product_id = p.id);

-- Erweiterte Inventur-RPC mit Verkaufspreis, Wert, MHD-Abschlag, Zeilensumme
drop function if exists public.inventory_report(timestamptz, timestamptz);
create or replace function public.inventory_report(
  p_from timestamptz,
  p_to   timestamptz default now()
)
returns table(
  machine_id     uuid,
  machine_code   text,
  machine_name   text,
  product_id     uuid,
  product_name   text,
  sku            text,
  start_qty      integer,
  refill         integer,
  sales          integer,
  disposal       integer,
  correction     integer,
  end_qty        integer,
  capacity       integer,
  unit_price     numeric,
  gross_value    numeric,
  expiry_date    date,
  mhd_discount   numeric,
  net_value      numeric
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
  with delta_after as (
    select im.machine_id, im.product_id, coalesce(sum(im.quantity_delta),0)::int as v
    from public.inventory_movements im where im.occurred_at > p_to
    group by im.machine_id, im.product_id
  ),
  in_range as (
    select im.machine_id, im.product_id,
      sum(case when im.type='refill'     then im.quantity_delta else 0 end)::int as refill,
      sum(case when im.type='sale'       then -im.quantity_delta else 0 end)::int as sales,
      sum(case when im.type='disposal'   then -im.quantity_delta else 0 end)::int as disposal,
      sum(case when im.type='correction' then im.quantity_delta else 0 end)::int as correction
    from public.inventory_movements im
    where im.occurred_at >= p_from and im.occurred_at <= p_to
    group by im.machine_id, im.product_id
  ),
  calc as (
    select m.id as machine_id, m.code as machine_code, m.name as machine_name,
      p.id as product_id, p.name as product_name, p.sku,
      greatest(0, i.quantity
        - coalesce(ir.refill,0)
        + coalesce(ir.sales,0)
        + coalesce(ir.disposal,0)
        - coalesce(ir.correction,0)
        - coalesce(da.v,0))::int as start_qty,
      coalesce(ir.refill,0)::int as refill,
      coalesce(ir.sales,0)::int as sales,
      coalesce(ir.disposal,0)::int as disposal,
      coalesce(ir.correction,0)::int as correction,
      greatest(0, i.quantity - coalesce(da.v,0))::int as end_qty,
      coalesce(i.capacity, greatest(12, i.quantity))::int as capacity,
      -- Verkaufspreis (netto) je Stück
      coalesce(p.list_price_net, 0) as unit_price,
      i.expiry_date
    from public.inventory i
    join public.machines m on m.id = i.machine_id
    join public.products p on p.id = i.product_id
    left join in_range   ir on ir.machine_id = i.machine_id and ir.product_id = i.product_id
    left join delta_after da on da.machine_id = i.machine_id and da.product_id = i.product_id
    where m.deleted_at is null and p.deleted_at is null
  )
  select
    c.machine_id, c.machine_code, c.machine_name,
    c.product_id, c.product_name, c.sku,
    c.start_qty, c.refill, c.sales, c.disposal, c.correction,
    c.end_qty, c.capacity,
    c.unit_price,
    round(c.end_qty * c.unit_price, 2) as gross_value,
    c.expiry_date,
    case when c.expiry_date is not null
              and c.expiry_date - current_date < 7
              and c.expiry_date - current_date >= 0
              and c.end_qty > 0
         then round(c.end_qty * c.unit_price * 0.5, 2)
         else 0::numeric
    end as mhd_discount,
    round(c.end_qty * c.unit_price
      - case when c.expiry_date is not null
                  and c.expiry_date - current_date < 7
                  and c.expiry_date - current_date >= 0
                  and c.end_qty > 0
             then c.end_qty * c.unit_price * 0.5
             else 0 end, 2) as net_value
  from calc c
  order by c.machine_code, c.product_name;
end;
$$;

grant execute on function public.inventory_report(timestamptz, timestamptz) to authenticated;

-- Zusammenfassung pro Produkt (Automat + Lager)
create or replace function public.inventory_summary_by_product()
returns table(
  product_id       uuid,
  product_name     text,
  sku              text,
  in_machines_qty  integer,
  in_warehouse_qty integer,
  total_qty        integer,
  unit_price       numeric,
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
    coalesce((select sum(quantity)::int from public.inventory
              where product_id = p.id), 0)  as in_machines_qty,
    coalesce((select sum(quantity)::int from public.warehouse_stock
              where product_id = p.id), 0)  as in_warehouse_qty,
    (coalesce((select sum(quantity)::int from public.inventory
                where product_id = p.id), 0)
     + coalesce((select sum(quantity)::int from public.warehouse_stock
                  where product_id = p.id), 0))::int as total_qty,
    coalesce(p.list_price_net, 0) as unit_price,
    round(
      (coalesce((select sum(quantity) from public.inventory where product_id = p.id), 0)
       + coalesce((select sum(quantity) from public.warehouse_stock where product_id = p.id), 0))
       * coalesce(p.list_price_net, 0), 2) as total_value
  from public.products p
  where p.deleted_at is null
  order by p.sku, p.name;
end;
$$;

grant execute on function public.inventory_summary_by_product() to authenticated;
