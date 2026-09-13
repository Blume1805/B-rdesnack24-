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

do $$
declare
  v_id uuid;
  v_tier int;
  v_new_pct numeric(5,2);
  v_reg numeric(12,2);
begin
  for v_id, v_tier, v_reg in
    select po.id, lbg.tier, po.regular_price_net
    from public.personal_offers po
    join public.loyalty_bonus_grants lbg on lbg.offer_id = po.id
    where po.source = 'loyalty'
      and po.redeemed_at is null
  loop
    v_new_pct := case v_tier
      when 500  then  5.0
      when 1200 then 10.0
      when 2000 then 15.0
      when 3000 then 25.0
      else 5.0
    end;
    update public.personal_offers
       set discount_percent = v_new_pct,
           offer_price_net  = round(v_reg * (1 - v_new_pct/100.0), 2),
           valid_to = greatest(valid_to, valid_from + interval '14 days')
     where id = v_id;
  end loop;
end;
$$;
