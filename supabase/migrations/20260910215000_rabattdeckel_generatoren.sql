-- ===========================================================================
-- Rabattdeckel: die vier Angebotsgeneratoren respektieren
-- `products.coupon_eligibility`.
--
-- Auftrag Philipp, 10.09.2026: „Popcorn soll nur selten ueber Coupons
-- angeboten werden, wenn nur im Bundle."
--
-- Betroffen sind alle vier Wege, auf denen ein Produkt heute automatisch in
-- ein Rabattangebot geraet:
--
--   public.generate_daily_offers(int)      Tages-Deal, naechtlich per Cron
--   public.generate_weekly_offers(int)     Wochenangebote, MHD-gesteuert
--   app.grant_loyalty_bonuses(uuid)        Meilenstein-Coupons 5 bis 25 %
--   public.generate_personal_offer(uuid)   persoenliches Angebot, 10 %
--
-- Der Geburtstagsgutschein bleibt aussen vor: er haengt am Platzhalter
-- WILDCARD und waehlt kein Sortimentsprodukt aus.
--
-- Die Funktionen sind unveraendert uebernommen und nur um die Bedingung
-- `coupon_eligibility = 'normal'` ergaenzt. Ein Bundle prueft das Feld
-- NICHT -- es ist der Weg, den `bundle_only` ausdruecklich offenlaesst.
--
-- FOLGE, DIE PHILIPP KENNEN MUSS: `generate_weekly_offers` ist zugleich die
-- MHD-Abschrift. Ein Produkt auf `bundle_only` wird damit auch dann nicht
-- mehr automatisch heruntergesetzt, wenn sein Mindesthaltbarkeitsdatum
-- naeher rueckt. Beim Popcorn heisst das: Ware, die abzulaufen droht, muss
-- von Hand in ein Bundle oder in ein Einzelangebot -- sonst wird sie
-- Schwund. Steht in `docs/betrieb/AUFGABEN-PHILIPP.md`.
-- ===========================================================================

create or replace function public.generate_daily_offers(p_count int default 2)
returns setof public.offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_bias  text := app.weather_bias(current_date);
  v_title text;
  v_note  text;
  rec     record;
  v_reg   numeric(12,4);
  v_off   numeric(12,4);
begin
  -- SECURITY DEFINER + EXECUTE für 'authenticated' hieße sonst: jeder
  -- eingeloggte Kunde könnte den Tages-Deal per REST beliebig neu würfeln,
  -- bis ihm der Preis passt. auth.uid() is null = Aufruf aus dem Cron
  -- (kein JWT) und damit erlaubt.
  if auth.uid() is not null
     and not (public.is_admin() or public.auth_has_permission('offers.manage'))
  then
    raise exception 'Keine Berechtigung für generate_daily_offers';
  end if;

  delete from public.offers
   where kind = 'daily' and valid_from = current_date;

  v_title := case v_bias
    when 'cold' then 'Hitze-Deal'
    when 'hot'  then 'Aufwärm-Deal'
    else 'Tages-Deal'
  end;
  v_note := case v_bias
    when 'cold' then 'Heute wird''s warm — 10 % auf die Abkühlung.'
    when 'hot'  then 'Heute wird''s frisch — 10 % auf was Warmes.'
    else 'Heute 10 % Rabatt.'
  end;

  for rec in (
    select p.id, p.name, p.list_price_net, p.image_url
      from public.products p
     where p.status = 'active'
       and p.list_price_net is not null
       and p.list_price_net > 0
       and p.coupon_eligibility = 'normal'
     order by
       case
         when v_bias <> 'neutral' and p.serve_temp = v_bias then 0
         when p.serve_temp = 'neutral'                      then 1
         else 2
       end,
       random()
     limit greatest(p_count, 1)
  ) loop
    v_reg := rec.list_price_net;
    v_off := round(v_reg * 0.90, 4);
    return query
      insert into public.offers(
        title, description, kind, valid_from, valid_to,
        product_id, regular_price_net, offer_price_net, discount_percent, image_url
      ) values (
        format('%s: %s', v_title, rec.name),
        v_note,
        'daily',
        current_date, current_date,
        rec.id, v_reg, v_off, 10.0, rec.image_url
      )
      returning *;
  end loop;
end;
$$;

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
      and p.coupon_eligibility = 'normal'
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
      and p.coupon_eligibility = 'normal'
    group by p.id
    order by sum(pi.quantity) desc, random()
    limit 1;

    if not found then
      select * into v_product
      from public.products
      where status = 'active' and list_price_net is not null and list_price_net > 0
        and coupon_eligibility = 'normal'
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
      and p.coupon_eligibility = 'normal'
  group by p.id
  order by sum(pi.quantity) desc, random()
  limit 1;

  if not found then
    select * into v_product
    from public.products
    where status = 'active' and list_price_net is not null and list_price_net > 0
      and coupon_eligibility = 'normal'
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
