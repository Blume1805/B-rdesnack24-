create or replace function app.purchase_business_pruefen()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
declare
  v_treffer int;
begin
  if new.business_id is null and new.machine_id is not null then
    select count(*), min(bl.business_id)
      into v_treffer, new.business_id
    from public.machines m
    join public.locations l           on l.id = m.location_id
    join public.business_locations bl on bl.location_id = l.id
    join public.business_members bm
      on bm.business_id = bl.business_id
     and bm.profile_id  = new.customer_id
     and bm.status      = 'active'
    where m.id = new.machine_id
      and l.kind = 'business'
      and l.deleted_at is null;

    if v_treffer > 1 then
      raise exception
        'Kauf lässt sich nicht eindeutig zuordnen: % Firmen teilen sich den Standort dieses Automaten, und % ist in mehreren aktives Mitglied.',
        v_treffer, new.customer_id
        using errcode = 'check_violation';
    end if;
  end if;

  if new.business_id is null then
    return new;
  end if;

  if tg_op = 'UPDATE' and new.business_id is not distinct from old.business_id then
    return new;
  end if;

  if not exists (
    select 1 from public.business_members m
    where m.business_id = new.business_id
      and m.profile_id  = new.customer_id
      and m.status      = 'active'
  ) then
    raise exception
      'Kauf % kann der Firma % nicht zugeordnet werden: % ist dort kein aktives Mitglied.',
      new.id, new.business_id, new.customer_id
      using errcode = 'check_violation';
  end if;

  return new;
end;
$fn$;

comment on function app.purchase_business_pruefen() is
  'Leitet die Firma aus dem Standort des Automaten her (Firmengelände + Freigabe + aktive Mitgliedschaft) und prüft anschliessend jede Firmenzuordnung. Greift auch bei service_role, wo keine Zugriffsregel greift.';

create or replace function app.challenge_progress(p_customer uuid)
returns table(code text, target int, progress int, done boolean, reward_points int)
language sql
stable
set search_path = public, app
as $fn$
  select
    c.code,
    c.target,
    v.wert::int,
    v.wert >= c.target,
    c.reward_points
  from public.challenges c
  cross join lateral (
    select case c.metric
      when 'purchase_count' then (
        select count(*) from public.purchases p
         where p.customer_id = p_customer
           and p.business_id is null
           and p.purchased_at >= now() - make_interval(days => c.window_days))
      when 'distinct_machines' then (
        select count(distinct p.machine_id) from public.purchases p
         where p.customer_id = p_customer
           and p.business_id is null
           and p.machine_id is not null
           and p.purchased_at >= now() - make_interval(days => c.window_days))
      when 'distinct_products' then (
        select count(distinct pi.product_id)
          from public.purchase_items pi
          join public.purchases p on p.id = pi.purchase_id
         where p.customer_id = p_customer
           and p.business_id is null
           and pi.product_id is not null
           and p.purchased_at >= now() - make_interval(days => c.window_days))
      when 'morning_count' then (
        select count(*) from public.purchases p
         where p.customer_id = p_customer
           and p.business_id is null
           and p.purchased_at >= now() - make_interval(days => c.window_days)
           and extract(hour from p.purchased_at) between 7 and 8)
      else 0 end as wert
  ) v
  where c.active;
$fn$;

create or replace function public.my_loyalty_status()
returns table(points integer, next_tier integer, points_to_next integer,
              reached_tiers integer[], month_start date, next_reset date)
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_month_start date := date_trunc('month', app.heute())::date;
  v_next_reset  date := (date_trunc('month', app.heute()) + interval '1 month')::date;
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
    and business_id is null
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int
         + app.login_points(auth.uid(), v_month_start)
         + app.challenge_points(auth.uid(), v_month_start);

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
$function$;

create or replace function app.grant_loyalty_bonuses(p_customer_id uuid)
returns integer
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_month_start date := date_trunc('month', app.heute())::date;
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
    and business_id is null
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int
         + app.login_points(p_customer_id, v_month_start)
         + app.challenge_points(p_customer_id, v_month_start);

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
      and pu.business_id is null
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
$function$;

create or replace function public.my_gamification_status()
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid       uuid := auth.uid();
  v_gross     numeric := 0;
  v_count     int := 0;
  v_machines  int := 0;
  v_products  int := 0;
  v_early     boolean := false;
  v_night     boolean := false;
  v_tier      record;
  v_next      record;
  v_prev_min  numeric := 0;
  v_progress  numeric := 1;
  v_base_pct  numeric := 5;
  v_badges    jsonb;
  v_challenges jsonb;
begin
  if v_uid is null then
    raise exception 'Anmeldung erforderlich' using errcode = '42501';
  end if;

  select coalesce(sum(total_gross), 0), count(*),
         count(distinct machine_id) filter (where machine_id is not null),
         bool_or(extract(hour from purchased_at) < 9),
         bool_or(extract(hour from purchased_at) >= 20)
    into v_gross, v_count, v_machines, v_early, v_night
  from public.purchases
  where customer_id = v_uid
    and business_id is null;

  select count(distinct pi.product_id) into v_products
  from public.purchase_items pi
  join public.purchases p on p.id = pi.purchase_id
  where p.customer_id = v_uid
    and p.business_id is null
    and pi.product_id is not null;

  select code, label, min_eur, discount_pct into v_tier
  from app.status_tiers()
  where min_eur <= v_gross
  order by min_eur desc limit 1;

  select code, label, min_eur, discount_pct into v_next
  from app.status_tiers()
  where min_eur > v_gross
  order by min_eur asc limit 1;

  if v_next.code is null then
    v_progress := 1;
  else
    v_prev_min := v_tier.min_eur;
    if v_next.min_eur - v_prev_min <= 0 then
      v_progress := 1;
    else
      v_progress := least(1, greatest(0,
        (v_gross - v_prev_min) / (v_next.min_eur - v_prev_min)));
    end if;
  end if;

  select jsonb_agg(jsonb_build_object(
      'code', b.code, 'title', b.title, 'description', b.description,
      'icon_key', b.icon_key,
      'earned', case b.code
        when 'first_purchase' then v_count >= 1
        when 'loyal_10'       then v_count >= 10
        when 'tier_bronze'    then v_gross >= 150
        when 'tier_silber'    then v_gross >= 500
        when 'tier_gold'      then v_gross >= 1000
        when 'explorer'       then v_machines >= 3
        when 'taster'         then v_products >= 5
        when 'early_bird'     then coalesce(v_early, false)
        when 'night_owl'      then coalesce(v_night, false)
        else false end
    ) order by b.sort_order)
    into v_badges
  from public.badges b;

  select jsonb_agg(jsonb_build_object(
      'code', c.code, 'title', c.title, 'description', c.description,
      'target', c.target, 'window_days', c.window_days,
      'reward_text', c.reward_text,
      'reward_points', cp.reward_points,
      'progress', cp.progress,
      'done', cp.done,
      'awarded', (a.customer_id is not null)
    ) order by c.sort_order)
    into v_challenges
  from public.challenges c
  join app.challenge_progress(v_uid) cp on cp.code = c.code
  left join public.customer_challenge_awards a
         on a.customer_id = v_uid and a.challenge_code = c.code
  where c.active;

  return jsonb_build_object(
    'lifetime_gross',   v_gross,
    'purchase_count',   v_count,
    'base_discount_pct', v_base_pct,
    'tier', jsonb_build_object(
      'code', v_tier.code, 'label', v_tier.label,
      'discount_pct', v_tier.discount_pct,
      'total_discount_pct', v_base_pct + v_tier.discount_pct,
      'next_code', v_next.code, 'next_label', v_next.label,
      'next_min_eur', v_next.min_eur,
      'next_discount_pct', v_next.discount_pct,
      'progress', round(v_progress, 4)
    ),
    'badges', coalesce(v_badges, '[]'::jsonb),
    'challenges', coalesce(v_challenges, '[]'::jsonb)
  );
end;
$function$;

create or replace function public.generate_personal_offer(p_customer_id uuid)
returns personal_offers
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_existing public.personal_offers;
  v_product public.products%rowtype;
  v_new public.personal_offers;
  v_regular numeric(12,2);
  v_offer   numeric(12,2);
begin
  if p_customer_id is distinct from auth.uid()
     and not public.is_internal(auth.uid()) then
    raise exception 'Nicht autorisiert' using errcode = '42501';
  end if;

  if not exists (select 1 from public.customers where id = p_customer_id) then
    raise exception 'Kunde nicht gefunden';
  end if;

  select * into v_existing
  from public.personal_offers
  where customer_id = p_customer_id and redeemed_at is null
  limit 1;
  if found then
    return v_existing;
  end if;

  select p.* into v_product
  from public.products p
  join public.purchase_items pi on pi.product_id = p.id
  join public.purchases pu       on pu.id = pi.purchase_id
  where pu.customer_id = p_customer_id
    and pu.business_id is null
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

  if not found then
    raise exception 'Kein Produkt für individuelles Angebot gefunden';
  end if;

  v_regular := v_product.list_price_net;
  v_offer   := round(v_regular * 0.90, 2);

  insert into public.personal_offers(
    customer_id, product_id, title,
    regular_price_net, offer_price_net, discount_percent,
    redemption_code, valid_from, valid_to, image_url
  ) values (
    p_customer_id, v_product.id, v_product.name,
    v_regular, v_offer, 10.0,
    app.generate_redemption_code(),
    now(), now() + interval '3 days', v_product.image_url
  )
  returning * into v_new;

  return v_new;
end;
$function$;

create or replace function public.my_donation_summary()
returns table(total_donated numeric, purchase_count bigint)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  select
    coalesce(sum(public.purchase_donation(total_gross)), 0)::numeric,
    count(*)::bigint
  from public.purchases
  where customer_id = auth.uid()
    and business_id is null
$function$;

create or replace function public.my_donations_by_purchase()
returns table(purchase_id uuid, purchased_at timestamp with time zone,
              total_gross numeric, total_net numeric, donation numeric,
              share_pct numeric, payment_method text,
              invoice_id uuid, invoice_number text)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  with mine as (
    select id, purchased_at, total_gross, payment_method
    from public.purchases
    where customer_id = auth.uid()
      and business_id is null
  ),
  agg as (
    select coalesce(sum(public.purchase_donation(total_gross)), 0) as total_don
    from mine
  )
  select
    m.id,
    m.purchased_at,
    m.total_gross,
    public.purchase_net(m.total_gross),
    public.purchase_donation(m.total_gross),
    case when a.total_don = 0 then 0
         else round(public.purchase_donation(m.total_gross) / a.total_don * 100, 1)
    end,
    m.payment_method::text,
    i.id,
    i.invoice_number
  from mine m
  cross join agg a
  left join public.invoices i on i.purchase_id = m.id
  order by m.purchased_at desc
$function$;

create or replace function public.donation_pool_summary()
returns table(my_donated numeric, total_pool numeric,
              my_share_pct numeric, non_app_gross numeric)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  with mine as (
    select coalesce(sum(public.purchase_donation(total_gross)),0) as v
    from public.purchases
    where customer_id = auth.uid()
      and business_id is null
  ),
  app_total as (
    select coalesce(sum(public.purchase_donation(total_gross)),0) as v
    from public.purchases
  ),
  automat as (
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
$function$;
