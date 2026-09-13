-- ============================================================================
-- 0016 — Rabatt-Punktesystem + MHD-basierte Wochenangebote
-- ----------------------------------------------------------------------------
-- 1 Punkt je Cent Umsatz.  Meilensteine 400/800/1300/2000 lösen zusätzliche
-- individuelle Bonus-Angebote aus (personal_offers mit source='loyalty').
-- Monatsreset: die Punkte gelten NUR im laufenden Kalendermonat; ab dem 1.
-- eines Monats zählt der neue Monat.  Wir summieren daher über
-- purchases.purchased_at im aktuellen Monat — kein Bulk-Delete nötig, aber
-- eine Materialisierung (loyalty_bonus_grants) hält fest, welche Meilensteine
-- pro Kunde und Monat bereits ausgezahlt wurden, damit keine Bonus-Angebote
-- doppelt erzeugt werden.
--
-- MHD: inventory bekommt `expiry_date`.  Der Wochenangebots-Generator
-- priorisiert Produkte, deren Bestand innerhalb der nächsten 10 Tage
-- ausläuft — die App zeigt sie automatisch als App-Angebote.
-- ============================================================================

-- 1) MHD auf inventory ------------------------------------------------------
alter table public.inventory
  add column if not exists expiry_date date;

comment on column public.inventory.expiry_date is
  'Mindesthaltbarkeit dieses Bestandslos. Wird vom Wochenangebots-Generator '
  'genutzt, um bevorzugt kurz vor MHD-Ablauf zu rabattieren.';

-- 2) Loyalty-Bonus-Auszahlungen ---------------------------------------------
-- Merkt sich, welche Meilensteine ein Kunde in einem Monat bereits erhalten
-- hat.  Ein Datensatz je (customer_id, month_start, tier).
create table if not exists public.loyalty_bonus_grants (
  id          uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  month_start date not null,          -- 1. des Monats
  tier        int  not null,          -- 400 | 800 | 1300 | 2000
  offer_id    uuid references public.personal_offers(id),
  granted_at  timestamptz not null default now(),
  unique (customer_id, month_start, tier)
);

create index if not exists idx_loyalty_grants_customer
  on public.loyalty_bonus_grants(customer_id, month_start desc);

alter table public.loyalty_bonus_grants enable row level security;

drop policy if exists loyalty_grants_read on public.loyalty_bonus_grants;
create policy loyalty_grants_read on public.loyalty_bonus_grants for select to authenticated
  using (customer_id = auth.uid()
         or public.is_admin()
         or public.auth_has_permission('offers.manage'));

-- 3) personal_offers: Quelle des Angebots (weekly bonus / manual …) ---------
alter table public.personal_offers
  add column if not exists source text not null default 'auto';

-- 4) Meilensteine als Konstanten-Funktion -----------------------------------
create or replace function app.loyalty_milestones()
returns int[]
language sql
immutable
as $$ select array[400, 800, 1300, 2000]::int[]; $$;

-- 5) Punkte-Status des aktuellen Nutzers ------------------------------------
-- Summiert die Umsätze des laufenden Monats (Cent = Punkt) und liefert
-- Meilenstein-Fortschritt.
create or replace function public.my_loyalty_status()
returns table (
  points          int,
  next_tier       int,
  points_to_next  int,
  reached_tiers   int[],
  month_start     date,
  next_reset      date
)
language plpgsql
security definer
set search_path = public, app
stable
as $$
declare
  v_month_start date := date_trunc('month', current_date)::date;
  v_next_reset  date := (date_trunc('month', current_date) + interval '1 month')::date;
  v_gross       numeric(12,2);
  v_pts         int;
  v_tiers       int[] := app.loyalty_milestones();
  v_reached     int[] := array[]::int[];
  v_next        int;
  v_to_next     int;
  t             int;
begin
  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = auth.uid()
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int;

  foreach t in array v_tiers loop
    if v_pts >= t then
      v_reached := v_reached || t;
    end if;
  end loop;

  v_next := null;
  foreach t in array v_tiers loop
    if v_pts < t then
      v_next := t;
      exit;
    end if;
  end loop;

  if v_next is null then
    v_to_next := 0;
  else
    v_to_next := v_next - v_pts;
  end if;

  return query select
    v_pts, v_next, v_to_next, v_reached, v_month_start, v_next_reset;
end;
$$;

-- 6) Loyalty-Meilensteine prüfen und ggf. Bonus-Angebot erzeugen ------------
-- Wird nach jedem Kauf getriggert.  Für jeden im laufenden Monat neu
-- erreichten Meilenstein wird ein personal_offer angelegt (mit source
-- 'loyalty') und in loyalty_bonus_grants festgehalten.  Bereits vergebene
-- Bonus-Angebote werden nicht doppelt erzeugt (unique index).
create or replace function app.grant_loyalty_bonuses(p_customer_id uuid)
returns int
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
    -- Bereits ausgezahlt?
    if exists (
      select 1 from public.loyalty_bonus_grants
      where customer_id = p_customer_id
        and month_start = v_month_start
        and tier = v_tier
    ) then
      continue;
    end if;

    -- Rabatthöhe steigt mit dem Meilenstein.
    v_discount := case v_tier
      when 400  then 15.0
      when 800  then 20.0
      when 1300 then 25.0
      when 2000 then 30.0
      else 10.0
    end;

    -- Produktauswahl: Konsumverhalten der letzten 90 Tage; sonst zufällig.
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
    if not found then continue; end if;

    v_regular := v_product.list_price_net;

    insert into public.personal_offers(
      customer_id, product_id, title,
      regular_price_net, offer_price_net, discount_percent,
      redemption_code, valid_from, valid_to, image_url, source
    ) values (
      p_customer_id, v_product.id, v_product.name,
      v_regular,
      round(v_regular * (1 - v_discount/100.0), 2),
      v_discount,
      app.generate_redemption_code(),
      now(), now() + interval '3 days', v_product.image_url,
      'loyalty'
    )
    returning * into v_offer;

    insert into public.loyalty_bonus_grants(customer_id, month_start, tier, offer_id)
    values (p_customer_id, v_month_start, v_tier, v_offer.id)
    on conflict do nothing;

    v_granted := v_granted + 1;
  end loop;

  return v_granted;
end;
$$;

create or replace function app.trg_purchase_loyalty()
returns trigger
language plpgsql
as $$
begin
  perform app.grant_loyalty_bonuses(new.customer_id);
  return new;
end;
$$;

drop trigger if exists trg_purchase_loyalty on public.purchases;
create trigger trg_purchase_loyalty
  after insert on public.purchases
  for each row execute function app.trg_purchase_loyalty();

-- 7) Meine aktiven Angebote (regulär + Loyalty-Bonus) -----------------------
-- Der Client möchte sowohl das reguläre 10%-Angebot als auch etwaige
-- Bonus-Angebote sehen — Loyalty-Bonus hebt die 1-aktives-Regel auf.
create or replace function public.my_active_personal_offers()
returns setof public.personal_offers
language sql
security definer
set search_path = public, app
stable
as $$
  select *
  from public.personal_offers
  where customer_id = auth.uid()
    and redeemed_at is null
    and valid_to > now()
  order by
    case source when 'loyalty' then 0 else 1 end,
    valid_from desc;
$$;

-- 8) generate_weekly_offers — MHD-Priorisierung ------------------------------
-- Wählt Produkte primär nach Nähe des MHD-Ablaufs (aggregate MIN(expiry_date)
-- über den Bestand); Produkte ohne MHD oder mit weit entferntem MHD landen
-- am Ende und werden per random() aufgefüllt.
create or replace function public.generate_weekly_offers(p_count int default 5)
returns setof public.offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_start date := (date_trunc('week', current_date) + interval '7 days')::date;
  v_end   date := v_start + 6;
  rec record;
  v_regular numeric(12,2);
  v_offer   numeric(12,2);
begin
  delete from public.offers
    where kind = 'weekly'
      and coalesce(valid_from, current_date) >= v_start
      and coalesce(valid_to, current_date) <= v_end;

  for rec in (
    with mhd as (
      select i.product_id, min(i.expiry_date) as min_expiry
      from public.inventory i
      where i.expiry_date is not null
      group by i.product_id
    )
    select p.id, p.name, p.list_price_net, p.image_url,
           m.min_expiry,
           -- Sortier-Score: MHD in den nächsten 10 Tagen sehr wichtig,
           -- dann jüngste MHDs zuerst; Produkte ohne MHD kommen am Ende.
           case
             when m.min_expiry is null then 3
             when m.min_expiry <= current_date + 3  then 0
             when m.min_expiry <= current_date + 10 then 1
             else 2
           end as urgency
    from public.products p
    left join mhd m on m.product_id = p.id
    where p.status = 'active'
      and p.list_price_net is not null
      and p.list_price_net > 0
    order by urgency asc,
             m.min_expiry asc nulls last,
             random()
    limit greatest(p_count, 1)
  ) loop
    v_regular := rec.list_price_net;
    v_offer   := round(v_regular * 0.90, 2);
    return query
      insert into public.offers(
        title, description, kind, valid_from, valid_to,
        product_id, regular_price_net, offer_price_net, discount_percent, image_url
      ) values (
        rec.name,
        case
          when rec.min_expiry is not null and rec.min_expiry <= current_date + 10
            then 'Reduziert wegen kurzem MHD — 10 % Rabatt.'
          else '10 % Rabatt für die ganze Woche.'
        end,
        'weekly',
        v_start, v_end,
        rec.id, v_regular, v_offer, 10.0, rec.image_url
      )
      returning *;
  end loop;
end;
$$;
