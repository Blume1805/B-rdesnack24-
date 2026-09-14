-- 0029 — Inventurbewertung zu Anschaffungskosten
--
-- Bestände in der Inventur werden nach §252 Abs. 1 Nr. 4 HGB („Grundsatz
-- der Vorsicht") und der Bewertungsvorschrift des §253 Abs. 3 HGB
-- („niederster Wert") mit den fortgeführten Anschaffungskosten (Einkaufs-
-- preis netto) angesetzt.  Bisher wurde fälschlicherweise mit dem
-- Verkaufspreis (list_price_net) bewertet — das wäre eine unzulässige
-- Vorwegnahme des Umsatzes.
--
-- Der MHD-Abschlag wird nun ebenfalls vom Anschaffungskostenwert
-- abgezogen, nicht vom Verkaufswert.
--
-- 1) Neues Feld cost_price_net am Produkt
-- 2) Seed: falls leer, mit 55 % vom Listenpreis initialisieren
--    (branchenüblicher Wareneinsatz-Ansatz für Vending; kann in der
--    Produktverwaltung überschrieben werden)
-- 3) inventory_report + inventory_summary_by_product bewerten mit
--    cost_price_net

alter table public.products
  add column if not exists cost_price_net numeric(12,2);

update public.products
   set cost_price_net = round(coalesce(list_price_net, 0) * 0.55, 2)
 where cost_price_net is null
   and list_price_net is not null;

-- ── inventory_report neu: Bewertung zu Anschaffungskosten ──────────────
drop function if exists public.inventory_report(timestamptz, timestamptz);

create function public.inventory_report(
  p_from timestamptz,
  p_to   timestamptz default now()
)
returns table(
  machine_id       uuid,
  machine_code     text,
  machine_name     text,
  product_id       uuid,
  product_name     text,
  sku              text,
  start_qty        integer,
  refill           integer,
  sales            integer,
  disposal         integer,
  correction       integer,
  end_qty          integer,
  capacity         integer,
  unit_cost        numeric,   -- Einkaufspreis netto je Stück
  gross_value      numeric,   -- Anschaffungskosten × Endbestand
  expiry_date      date,
  mhd_days_left    integer,
  mhd_pct          integer,
  mhd_discount     numeric,   -- Abschlag auf die Anschaffungskosten
  net_value        numeric    -- Bilanzwert nach MHD-Abschlag
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
    select im.machine_id, im.product_id,
           coalesce(sum(im.quantity_delta),0)::int as v
    from public.inventory_movements im
    where im.occurred_at > p_to
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
  base as (
    select
      m.id  as machine_id,
      m.code as machine_code,
      m.name as machine_name,
      p.id  as product_id,
      p.name as product_name,
      p.sku,
      greatest(0, i.quantity
        - coalesce(ir.refill,0)
        + coalesce(ir.sales,0)
        + coalesce(ir.disposal,0)
        - coalesce(ir.correction,0)
        - coalesce(da.v,0))::int as start_qty,
      coalesce(ir.refill,0)::int    as refill,
      coalesce(ir.sales,0)::int     as sales,
      coalesce(ir.disposal,0)::int  as disposal,
      coalesce(ir.correction,0)::int as correction,
      greatest(0, i.quantity - coalesce(da.v,0))::int as end_qty,
      coalesce(i.capacity, greatest(12, i.quantity))::int as capacity,
      coalesce(p.cost_price_net, 0)::numeric as unit_cost,
      i.expiry_date
    from public.inventory i
    join public.machines m on m.id = i.machine_id
    join public.products p on p.id = i.product_id
    left join in_range    ir on ir.machine_id = i.machine_id and ir.product_id = i.product_id
    left join delta_after da on da.machine_id = i.machine_id and da.product_id = i.product_id
    where m.deleted_at is null and p.deleted_at is null
  )
  select
    b.machine_id, b.machine_code, b.machine_name,
    b.product_id, b.product_name, b.sku,
    b.start_qty, b.refill, b.sales, b.disposal, b.correction,
    b.end_qty, b.capacity,
    b.unit_cost,
    round(b.end_qty * b.unit_cost, 2) as gross_value,
    b.expiry_date,
    case when b.expiry_date is null then null
         else (b.expiry_date - (p_to at time zone 'UTC')::date) end
       as mhd_days_left,
    app.mhd_writedown_pct(
      case when b.expiry_date is null then null
           else (b.expiry_date - (p_to at time zone 'UTC')::date) end
    ) as mhd_pct,
    round(
      b.end_qty * b.unit_cost
      * app.mhd_writedown_pct(
          case when b.expiry_date is null then null
               else (b.expiry_date - (p_to at time zone 'UTC')::date) end
        ) / 100.0
    , 2) as mhd_discount,
    round(
      b.end_qty * b.unit_cost
      * (1 - app.mhd_writedown_pct(
              case when b.expiry_date is null then null
                   else (b.expiry_date - (p_to at time zone 'UTC')::date) end
            ) / 100.0)
    , 2) as net_value
  from base b
  order by b.machine_code, b.product_name;
end;
$$;

grant execute on function public.inventory_report(timestamptz, timestamptz) to authenticated;

-- ── inventory_summary_by_product ebenfalls zu Anschaffungskosten ────────
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
