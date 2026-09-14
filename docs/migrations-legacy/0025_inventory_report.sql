-- 0025 — Inventur-Report (permanente Inventur, PDF-Download für Admin)
--
-- Liefert je Automat/Produkt für einen individuellen Zeitraum:
--   start_qty  — Bestand am Anfang des Zeitraums (rekonstruiert aus
--                aktuellem Bestand minus Bewegungen im Zeitraum minus
--                Bewegungen nach dem Zeitraum)
--   refill     — Zugänge (manuelle Nachfüllungen bzw. Lieferschein-Ingest)
--   sales      — Verkäufe (Nayax-Ingest)
--   disposal   — Vernichtungen (MHD, Verderb)
--   correction — manuelle Korrekturen
--   end_qty    — Bestand am Ende des Zeitraums
--   capacity   — Fach-Kapazität (100 %)
--
-- Nur system_admin oder shareholder (Mitarbeiter mit Vollzugriff) dürfen
-- den Report ziehen.

create or replace function public.inventory_report(
  p_from timestamptz,
  p_to   timestamptz default now()
)
returns table(
  machine_id    uuid,
  machine_code  text,
  machine_name  text,
  product_id    uuid,
  product_name  text,
  sku           text,
  start_qty     integer,
  refill        integer,
  sales         integer,
  disposal      integer,
  correction    integer,
  end_qty       integer,
  capacity      integer
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
  )
  select m.id, m.code, m.name, p.id, p.name, p.sku,
    greatest(0, i.quantity
      - coalesce(ir.refill,0)
      + coalesce(ir.sales,0)
      + coalesce(ir.disposal,0)
      - coalesce(ir.correction,0)
      - coalesce(da.v,0))::int as start_qty,
    coalesce(ir.refill,0)::int,
    coalesce(ir.sales,0)::int,
    coalesce(ir.disposal,0)::int,
    coalesce(ir.correction,0)::int,
    greatest(0, i.quantity - coalesce(da.v,0))::int as end_qty,
    coalesce(i.capacity, greatest(12, i.quantity))::int as capacity
  from public.inventory i
  join public.machines m on m.id = i.machine_id
  join public.products p on p.id = i.product_id
  left join in_range   ir on ir.machine_id = i.machine_id and ir.product_id = i.product_id
  left join delta_after da on da.machine_id = i.machine_id and da.product_id = i.product_id
  where m.deleted_at is null and p.deleted_at is null
  order by m.code, p.name;
end;
$$;

grant execute on function public.inventory_report(timestamptz, timestamptz) to authenticated;
