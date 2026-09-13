do $$ begin
  create type app.gender as enum ('m', 'w', 'd');
exception when duplicate_object then null; end $$;

alter table public.profiles
  add column if not exists gender app.gender;

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
    if exists (
      select 1 from public.loyalty_bonus_grants
      where customer_id = p_customer_id
        and month_start = v_month_start
        and tier = v_tier
    ) then continue; end if;
    v_discount := case v_tier
      when 400  then 5.0
      when 800  then 10.0
      when 1300 then 15.0
      when 2000 then 25.0
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

drop index if exists public.uq_personal_offers_active;
create unique index if not exists uq_personal_offers_active_auto
  on public.personal_offers(customer_id)
  where redeemed_at is null and source = 'auto';

create or replace function app.wildcard_product()
returns public.products
language plpgsql
security definer
set search_path = public, app
as $$
declare
  p public.products;
begin
  select * into p from public.products where sku = 'WILDCARD' limit 1;
  if not found then
    insert into public.products(sku, name, category, tax_rate, list_price_net, status)
    values ('WILDCARD', 'Produkt deiner Wahl', 'Aktion', 7.0, 0, 'archived')
    returning * into p;
  end if;
  return p;
end;
$$;

create or replace function public.grant_birthday_offer(p_customer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_birth   date;
  v_offer   public.personal_offers;
  v_wild    public.products;
begin
  select bp.birth_date into v_birth
  from public.profiles bp
  where bp.id = p_customer_id;
  if v_birth is null then return null; end if;

  if extract(month from v_birth) <> extract(month from current_date)
     or extract(day from v_birth) <> extract(day from current_date) then
    return null;
  end if;

  if exists (
    select 1 from public.personal_offers
    where customer_id = p_customer_id
      and source = 'birthday'
      and valid_from >= date_trunc('year', current_date)
  ) then return null; end if;

  v_wild := app.wildcard_product();

  insert into public.personal_offers(
    customer_id, product_id, title,
    regular_price_net, offer_price_net, discount_percent,
    redemption_code, valid_from, valid_to, image_url, source
  ) values (
    p_customer_id, v_wild.id, 'Alles Gute zum Geburtstag!',
    0, 0, 50.0,
    app.generate_redemption_code(),
    now(), now() + interval '14 days', v_wild.image_url,
    'birthday'
  )
  returning * into v_offer;
  return v_offer;
end;
$$;

create or replace function public.grant_anniversary_offer(p_customer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_reg     date;
  v_offer   public.personal_offers;
  v_wild    public.products;
begin
  select bp.created_at::date into v_reg
  from public.profiles bp
  where bp.id = p_customer_id;
  if v_reg is null then return null; end if;

  if extract(month from v_reg) <> extract(month from current_date)
     or extract(day from v_reg) <> extract(day from current_date) then
    return null;
  end if;

  if exists (
    select 1 from public.personal_offers
    where customer_id = p_customer_id
      and source = 'anniversary'
      and valid_from >= date_trunc('year', current_date)
  ) then return null; end if;

  v_wild := app.wildcard_product();

  insert into public.personal_offers(
    customer_id, product_id, title,
    regular_price_net, offer_price_net, discount_percent,
    redemption_code, valid_from, valid_to, image_url, source
  ) values (
    p_customer_id, v_wild.id, 'Danke für deine Treue!',
    0, 0, 30.0,
    app.generate_redemption_code(),
    now(), now() + interval '14 days', v_wild.image_url,
    'anniversary'
  )
  returning * into v_offer;
  return v_offer;
end;
$$;

create or replace function public.run_daily_special_offers()
returns int
language plpgsql
security definer
set search_path = public, app
as $$
declare
  c record;
  v_count int := 0;
begin
  for c in select id from public.customers loop
    if public.grant_birthday_offer(c.id) is not null then v_count := v_count + 1; end if;
    if public.grant_anniversary_offer(c.id) is not null then v_count := v_count + 1; end if;
  end loop;
  return v_count;
end;
$$;

create or replace function public.ensure_my_special_offers()
returns setof public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  b public.personal_offers;
  a public.personal_offers;
begin
  b := public.grant_birthday_offer(auth.uid());
  if b.id is not null then return next b; end if;
  a := public.grant_anniversary_offer(auth.uid());
  if a.id is not null then return next a; end if;
  return;
end;
$$;
