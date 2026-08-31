create or replace function app.has_subscription(p_customer uuid)
returns boolean
language sql
stable
set search_path = public, app
as $$
  select exists (
    select 1 from public.customer_subscriptions s
    where s.customer_id = p_customer
  );
$$;

comment on function app.has_subscription(uuid) is
  'True, wenn der Kunde ein Abo-Modell gewählt hat (Gating der Abo-Vorteile).';

create or replace function public.activate_offer(p_offer_id uuid)
returns public.offer_activations
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.offer_activations;
begin
  if not app.has_subscription(auth.uid()) then
    raise exception 'Abo erforderlich: Coupons lassen sich nur mit aktivem Bördesnack24-Abo aktivieren.'
      using errcode = 'P0001';
  end if;
  insert into public.offer_activations(customer_id, offer_id)
  values (auth.uid(), p_offer_id)
  on conflict (customer_id, offer_id) do nothing;
  select * into v_row from public.offer_activations
    where customer_id = auth.uid() and offer_id = p_offer_id;
  return v_row;
end;
$$;

create or replace function public.activate_personal_offer(p_offer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.personal_offers;
begin
  if not app.has_subscription(auth.uid()) then
    raise exception 'Abo erforderlich: Persönliche Angebote lassen sich nur mit aktivem Bördesnack24-Abo aktivieren.'
      using errcode = 'P0001';
  end if;
  update public.personal_offers
    set activated_at = coalesce(activated_at, now())
    where id = p_offer_id and customer_id = auth.uid()
    returning * into v_row;
  return v_row;
end;
$$;

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
  if not app.has_subscription(p_customer_id) then
    return 0;
  end if;

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
    ) then
      continue;
    end if;

    v_discount := case v_tier
      when 500  then  5.0
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
      now(),
      now() + interval '14 days',
      v_product.image_url,
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
