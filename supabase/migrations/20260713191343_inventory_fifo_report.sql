-- inventory_fifo_report — Bestandsbewertung nach dem FIFO-Prinzip
-- (§256 HGB, Verbrauchsfolgeverfahren). Gibt zwei Sets zurück:
--
--   1) inventory_fifo_movements: alle einzelnen Bewegungen im Zeitraum
--      chronologisch je Produkt (Zugänge/Abgänge/Vernichtungen/
--      Korrekturen), mit unit_cost + Rechnungsdatum/-nummer für Zugänge
--      und MHD für Vernichtungen.
--
--   2) inventory_fifo_lots: die am Stichtag noch verbliebenen Zugangs-
--      Lots pro Produkt (jüngste zuerst — FIFO würde die ältesten zuerst
--      verbrauchen, also bleiben die jüngsten). Je Lot: Restmenge,
--      unit_cost, MHD, Restlaufzeit, Abschlags-%, Bilanzwert.
--
-- Der Client rendert das PDF-Layout aus diesen beiden Datensätzen.

-- (1) Bewegungen ------------------------------------------------------
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

-- (2) Verbliebene FIFO-Lots am Stichtag ------------------------------
--
-- Idee: pro Produkt alle refill-Zugänge in aufsteigender Zeit anordnen.
-- FIFO-Verbrauch = Summe aller Verkäufe/Vernichtungen bis p_to. Wir
-- verbrauchen zuerst den ältesten Zugang, dann den zweitältesten, usw.
-- Was übrig bleibt, sind die jüngsten Lots — genau die bewerten wir mit
-- ihrem Original-EK-Preis und ggf. dem MHD-Abschlag.

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
    -- alle Zugänge chronologisch pro Produkt, nummeriert
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
    -- alles was bis p_to abging (Verkäufe + Vernichtungen)
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
    -- kumulierter Zugang bis inkl. Lot rn; Vorgänger-Kumsumme dient
    -- als „bereits konsumierbare Menge davor"
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
    select r.product_id,
           r.invoice_date,
           r.invoice_number,
           r.unit_cost,
           r.lot_expiry,
           r.qty as received_qty,
           -- FIFO-Restmenge dieses Lots: max(0, min(qty, cum_after - consumed))
           greatest(0,
             least(r.qty,
                   r.cum_after - coalesce(c.consumed, 0))
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
