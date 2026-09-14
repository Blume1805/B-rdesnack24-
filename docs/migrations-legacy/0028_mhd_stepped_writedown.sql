-- 0028 — MHD-Bewertungsabschläge gestuft nach Rest-Laufzeit
--
-- Bisher: pauschal 50 % Abschlag bei Restlaufzeit < 7 Tage.
-- Neu: fünf-stufige Bewertungsmatrix (Handelsübliches „lower of cost or
-- market" für Snacks/Getränke, orientiert an branchentypischen
-- Bewertungsansätzen für Verbrauchsgüter mit MHD):
--
--   Rest-MHD am Stichtag  |  Abschlag  |  Begründung
--   ────────────────────────────────────────────────────────────────
--   > 4 Wochen (> 28 T.)    0 %         normale Verwertbarkeit
--   2–4 Wochen (14–28 T.)   20 %        eingeschränkte Verkaufszeit
--   1–2 Wochen (7–13 T.)    40 %        erheblicher Verkaufsdruck
--   < 1 Woche  (1–6 T.)     65 %        Risiko Nichtverkauf erhöht
--   MHD überschritten       100 %       keine wirtschaftl. Verwertbarkeit
--
-- Die Prozentsätze sind Mittelwerte der jeweiligen Branchen-Bandbreiten
-- (10–30 % → 20 %, 30–50 % → 40 %, 50–80 % → 65 %) und werden im UI und
-- PDF-Export transparent als Übersicht ausgewiesen, damit Dritte die
-- Bewertung nachvollziehen können.

-- Alte Signatur (ohne die neuen Bewertungs-Spalten) muss vor dem create
-- weichen, sonst kollidiert der neue Rückgabe-Typ mit dem alten Row-Type.
drop function if exists public.inventory_report(timestamptz, timestamptz);

-- Helper: Prozent-Satz für einen konkreten Rest-Laufzeit-Wert (Tage).
create or replace function app.mhd_writedown_pct(days_left integer)
returns integer
language sql
immutable
as $$
  select case
    when days_left is null then 0
    when days_left <= 0     then 100
    when days_left <= 6     then 65
    when days_left <= 13    then 40
    when days_left <= 28    then 20
    else                        0
  end;
$$;

-- Neue Definition von inventory_report inkl. gestuftem Abschlag.
create or replace function public.inventory_report(
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
  unit_price       numeric,
  gross_value      numeric,
  expiry_date      date,
  mhd_days_left    integer,
  mhd_pct          integer,
  mhd_discount     numeric,
  net_value        numeric
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
      coalesce(p.list_price_net, 0)::numeric as unit_price,
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
    b.unit_price,
    round(b.end_qty * b.unit_price, 2) as gross_value,
    b.expiry_date,
    case when b.expiry_date is null then null
         else (b.expiry_date - (p_to at time zone 'UTC')::date) end
       as mhd_days_left,
    app.mhd_writedown_pct(
      case when b.expiry_date is null then null
           else (b.expiry_date - (p_to at time zone 'UTC')::date) end
    ) as mhd_pct,
    round(
      b.end_qty * b.unit_price
      * app.mhd_writedown_pct(
          case when b.expiry_date is null then null
               else (b.expiry_date - (p_to at time zone 'UTC')::date) end
        ) / 100.0
    , 2) as mhd_discount,
    round(
      b.end_qty * b.unit_price
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
