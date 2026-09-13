-- 0023 — Loyalty-Stufen, Automaten-Kapazität, Spenden-Pool aller Kunden

-- ── 1) Loyalty-Milestones ändern: 500 / 1200 / 2000 / 3000 ─────────────
create or replace function app.loyalty_milestones()
returns int[]
language sql immutable
as $$ select array[500, 1200, 2000, 3000]::int[]; $$;

-- Rabatt-Zuordnung an neue Stufen anpassen
create or replace function app.grant_loyalty_bonus(p_customer_id uuid)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_month_start date := date_trunc('month', current_date)::date;
  v_gross       numeric(12,2);
  v_pts         int;
  v_granted     int := 0;
  v_tier        int;
  v_offer       public.personal_offers;
  v_product     public.products%rowtype;
  v_regular     numeric(12,2);
  v_discount    numeric(5,2);
begin
  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = p_customer_id
    and purchased_at >= v_month_start;
  v_pts := floor(v_gross * 100)::int;
  foreach v_tier in array app.loyalty_milestones() loop
    exit when v_pts < v_tier;
    if exists (
      select 1 from public.loyalty_bonus_grants
      where customer_id = p_customer_id
        and month_start = v_month_start
        and tier = v_tier
    ) then continue; end if;
    v_discount := case v_tier
      when 500  then 5.0
      when 1200 then 10.0
      when 2000 then 15.0
      when 3000 then 25.0
      else 5.0
    end;
    select p.* into v_product
    from public.products p
    join public.purchase_items pi on pi.product_id = p.id
    join public.purchases pu       on pu.id = pi.purchase_id
    where pu.customer_id = p_customer_id
      and pu.purchased_at > now() - interval '90 days'
      and p.status = 'active' and p.list_price_net is not null
    group by p.id
    order by sum(pi.quantity) desc, random()
    limit 1;
    if not found then
      select * into v_product
      from public.products
      where status = 'active' and list_price_net is not null and list_price_net > 0
      order by random()
      limit 1;
    end if;
    if not found then return; end if;
    v_regular := v_product.list_price_net;
    insert into public.personal_offers(
      customer_id, title, regular_price_net, offer_price_net,
      discount_percent, redemption_code, valid_from, valid_to, source
    ) values (
      p_customer_id,
      v_discount::int || ' % auf ' || v_product.name,
      v_regular,
      round(v_regular * (1 - v_discount/100), 2),
      v_discount,
      lpad(floor(random()*1000000)::int::text, 6, '0'),
      current_date, current_date + interval '3 days',
      'loyalty'
    ) returning * into v_offer;
    insert into public.loyalty_bonus_grants(customer_id, month_start, tier, offer_id)
      values (p_customer_id, v_month_start, v_tier, v_offer.id);
    v_granted := v_granted + 1;
    exit when v_granted >= 4;
  end loop;
end;
$$;

-- ── 2) Automaten-Kapazität + Bestand plausibel setzen ─────────────────
-- capacity = maximale Kapazität eines Slots. Default 12 Stück; wenn der
-- aktuelle Bestand höher ist, wird die Kapazität hochgesetzt, damit die
-- Anzeige „X von Y" konsistent bleibt.
update public.inventory
   set capacity = greatest(12, quantity)
 where capacity is null;

-- ── 3) machine_sales_daily — Tages-Umsatz je Automat (auch Nicht-App) ─
-- Feed kommt zukünftig aus Nayax; für die Demo mit Seed-Werten befüllt.
create table if not exists public.machine_sales_daily (
  machine_id uuid not null references public.machines(id) on delete cascade,
  day        date not null,
  gross_total numeric(12,2) not null default 0,
  primary key (machine_id, day)
);
create index if not exists idx_msales_day on public.machine_sales_daily(day desc);

alter table public.machine_sales_daily enable row level security;
drop policy if exists msales_read on public.machine_sales_daily;
create policy msales_read on public.machine_sales_daily
  for select to authenticated using (true);

-- Seed: für die letzten 30 Tage je Automat ca. 15–45 € Umsatz/Tag.
insert into public.machine_sales_daily(machine_id, day, gross_total)
select m.id,
       d::date,
       round((15 + random() * 30)::numeric, 2)
from public.machines m,
     generate_series(current_date - interval '30 days', current_date, interval '1 day') d
on conflict do nothing;

-- ── 4) donation_pool_summary — Gesamt-Spendenpool + eigener Anteil ────
-- Berücksichtigt sowohl App-Käufe (public.purchases) als auch die
-- Automaten-Gesamtumsätze aus machine_sales_daily (deckt Nicht-App-Kunden
-- ab). Der eigene Anteil wird nur aus den App-Käufen des Nutzers berechnet.
create or replace function public.donation_pool_summary()
returns table(
  my_donated       numeric,
  total_pool       numeric,
  my_share_pct     numeric,
  non_app_gross    numeric
)
language sql
security definer
set search_path = public, app
as $$
  with mine as (
    select coalesce(sum(public.purchase_donation(total_gross)),0) as v
    from public.purchases
    where customer_id = auth.uid()
  ),
  app_total as (
    select coalesce(sum(public.purchase_donation(total_gross)),0) as v
    from public.purchases
  ),
  automat as (
    -- Automaten-Gesamtumsatz minus App-Käufe (damit App-Käufe nicht
    -- doppelt gezählt werden). Nur letzten 90 Tage betrachten für die
    -- Demo, damit die Zahlen zeitlich stabil bleiben.
    select
      greatest(
        coalesce((select sum(gross_total) from public.machine_sales_daily
                  where day >= current_date - interval '90 days'),0)
        - coalesce((select sum(total_gross) from public.purchases
                    where purchased_at >= current_date - interval '90 days'),0),
        0
      ) as v
  ),
  automat_donation as (
    select round(public.purchase_donation((select v from automat)),2) as v
  )
  select
    (select v from mine),
    (select v from app_total) + (select v from automat_donation),
    case when ((select v from app_total) + (select v from automat_donation)) = 0 then 0
         else round((select v from mine) /
                    ((select v from app_total) + (select v from automat_donation)) * 100, 2)
    end,
    (select v from automat)
$$;

grant execute on function public.donation_pool_summary() to authenticated;
