-- 0030 — FIFO-Inventur mit echten Rechnungs-Lots
--
-- Ausgangslage: inventory_report bewertete den Endbestand mit dem
-- aktuellen Stammpreis (products.cost_price_net) und einer flachen
-- MHD-Regel. Für einen sauberen HGB-Bewertungsansatz muss die
-- Verbrauchsfolge (§256 HGB: FIFO) mit historischen Einkaufspreisen aus
-- den Lieferantenrechnungen abgebildet werden.
--
-- Änderungen in dieser Migration:
--  • inventory_movements: unit_cost + Rechnungsnummer + Rechnungsdatum +
--    Lot-MHD als eigene Spalten (nur für type=refill / type=disposal
--    relevant, sonst NULL)
--  • filling_logs / disposal_logs: gleiche Felder, damit das Formular
--    beim Zugang / bei der Vernichtung EK-Preis + Rechnung + MHD erfasst
--  • Trigger filling_to_movement / disposal_to_movement reichen die
--    Werte 1:1 in inventory_movements durch
--  • Seed: bestehende historische Zugänge bekommen den aktuellen
--    cost_price_net + eine synthetische Rechnungsnummer (nur Demo)
--  • zwei neue RPCs für den FIFO-Report:
--      inventory_fifo_movements(from,to)  — alle Bewegungen je Produkt
--      inventory_fifo_lots(to)            — verbliebene FIFO-Lots am
--                                            Stichtag mit MHD-Abschlag

alter table public.inventory_movements
  add column if not exists unit_cost      numeric(12,2),
  add column if not exists invoice_number text,
  add column if not exists invoice_date   date,
  add column if not exists lot_expiry     date;

alter table public.filling_logs
  add column if not exists unit_cost      numeric(12,2),
  add column if not exists invoice_number text,
  add column if not exists invoice_date   date,
  add column if not exists lot_expiry     date;

alter table public.disposal_logs
  add column if not exists lot_expiry     date;

-- Historische refill-Bewegungen mit Stammpreis initialisieren (Demo).
update public.inventory_movements m
   set unit_cost = coalesce(p.cost_price_net, 0)
  from public.products p
 where m.product_id = p.id
   and m.type = 'refill'
   and m.unit_cost is null;

update public.inventory_movements
   set invoice_date = occurred_at::date
 where type = 'refill' and invoice_date is null;

update public.inventory_movements
   set invoice_number = 'RE-' || to_char(occurred_at, 'YYYYMMDD') || '-'
                        || substring(md5(id::text) from 1 for 4)
 where type = 'refill' and invoice_number is null;

-- Trigger neu: filling_to_movement + disposal_to_movement reichen die
-- Rechnungs- und MHD-Daten in inventory_movements durch.
create or replace function app.filling_to_movement()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.inventory_movements
    (machine_id, product_id, type, quantity_delta, reason,
     source, source_ref, occurred_at, created_by,
     unit_cost, invoice_number, invoice_date, lot_expiry)
  values
    (new.machine_id, new.product_id, 'refill', new.quantity, 'Befüllung',
     'inventory', 'fill:'||new.id::text, new.filled_at, new.recorded_by,
     new.unit_cost, new.invoice_number,
     coalesce(new.invoice_date, new.filled_at::date), new.lot_expiry);
  return new;
end;
$$;

create or replace function app.disposal_to_movement()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.inventory_movements
    (machine_id, product_id, type, quantity_delta, reason,
     source, source_ref, occurred_at, created_by, lot_expiry)
  values
    (new.machine_id, new.product_id, 'disposal', -abs(new.quantity),
     new.reason, 'inventory', 'disp:'||new.id::text, new.disposed_at,
     new.recorded_by, new.lot_expiry);
  return new;
end;
$$;

-- ─── FIFO-Report RPCs ─────────────────────────────────────────────
drop function if exists public.inventory_fifo_movements(timestamptz, timestamptz);
create function public.inventory_fifo_movements(
  p_from timestamptz,
  p_to   timestamptz default now()
)
returns table(
  product_id     uuid,
  product_name   text,
  sku            text,
  occurred_at    timestamptz,
  machine_code   text,
  machine_name   text,
  type           text,
  quantity_delta integer,
  unit_cost      numeric,
  invoice_number text,
  invoice_date   date,
  lot_expiry     date,
  reason         text
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
           m.occurred_at,
           mc.code, mc.name,
           m.type::text,
           m.quantity_delta,
           m.unit_cost,
           m.invoice_number,
           m.invoice_date,
           m.lot_expiry,
           m.reason
      from public.inventory_movements m
      join public.products p on p.id = m.product_id
      left join public.machines mc on mc.id = m.machine_id
     where m.occurred_at >= p_from
       and m.occurred_at <= p_to
       and p.deleted_at is null
     order by p.name, p.sku, m.occurred_at;
end;
$$;
grant execute on function public.inventory_fifo_movements(timestamptz, timestamptz) to authenticated;

drop function if exists public.inventory_fifo_lots(timestamptz);
create function public.inventory_fifo_lots(
  p_to timestamptz default now()
)
returns table(
  product_id     uuid,
  product_name   text,
  sku            text,
  invoice_date   date,
  invoice_number text,
  unit_cost      numeric,
  lot_expiry     date,
  received_qty   integer,
  remaining_qty  integer,
  mhd_days_left  integer,
  mhd_pct        integer,
  lot_gross      numeric,
  lot_discount   numeric,
  lot_net        numeric
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
  with refills as (
    select m.product_id,
           coalesce(m.invoice_date, m.occurred_at::date) as invoice_date,
           m.invoice_number,
           coalesce(m.unit_cost, 0)::numeric as unit_cost,
           m.lot_expiry,
           m.quantity_delta as qty,
           m.occurred_at,
           row_number() over (partition by m.product_id
                              order by m.occurred_at, m.id) as rn
      from public.inventory_movements m
     where m.type = 'refill'
       and m.occurred_at <= p_to
       and m.quantity_delta > 0
  ),
  consumed_per_product as (
    select m.product_id,
           sum(case
                 when m.type = 'sale'     then -m.quantity_delta
                 when m.type = 'disposal' then -m.quantity_delta
                 else 0
               end)::int as consumed
      from public.inventory_movements m
     where m.occurred_at <= p_to
       and m.type in ('sale','disposal')
     group by m.product_id
  ),
  refills_cum as (
    select r.*,
           coalesce(sum(r.qty) over (partition by r.product_id
                                     order by r.rn
                                     rows between unbounded preceding and current row), 0)::int as cum_after,
           coalesce(sum(r.qty) over (partition by r.product_id
                                     order by r.rn
                                     rows between unbounded preceding and 1 preceding), 0)::int as cum_before
      from refills r
  ),
  lots_valued as (
    select r.product_id, r.invoice_date, r.invoice_number, r.unit_cost,
           r.lot_expiry, r.qty as received_qty,
           greatest(0,
             least(r.qty, r.cum_after - coalesce(c.consumed, 0))
           )::int as remaining_qty
      from refills_cum r
      left join consumed_per_product c on c.product_id = r.product_id
  )
  select lv.product_id, p.name, p.sku,
         lv.invoice_date, lv.invoice_number, lv.unit_cost,
         lv.lot_expiry, lv.received_qty, lv.remaining_qty,
         case when lv.lot_expiry is null then null
              else (lv.lot_expiry - (p_to at time zone 'UTC')::date) end as mhd_days_left,
         app.mhd_writedown_pct(
           case when lv.lot_expiry is null then null
                else (lv.lot_expiry - (p_to at time zone 'UTC')::date) end
         ) as mhd_pct,
         round(lv.remaining_qty * lv.unit_cost, 2) as lot_gross,
         round(lv.remaining_qty * lv.unit_cost
               * app.mhd_writedown_pct(
                   case when lv.lot_expiry is null then null
                        else (lv.lot_expiry - (p_to at time zone 'UTC')::date) end
                 ) / 100.0, 2) as lot_discount,
         round(lv.remaining_qty * lv.unit_cost
               * (1 - app.mhd_writedown_pct(
                   case when lv.lot_expiry is null then null
                        else (lv.lot_expiry - (p_to at time zone 'UTC')::date) end
                 ) / 100.0), 2) as lot_net
    from lots_valued lv
    join public.products p on p.id = lv.product_id
   where p.deleted_at is null
     and lv.remaining_qty > 0
   order by p.name, p.sku, lv.invoice_date desc;
end;
$$;
grant execute on function public.inventory_fifo_lots(timestamptz) to authenticated;
