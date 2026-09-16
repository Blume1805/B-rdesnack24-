-- 0065 — Kostenlose App: Vorteile für alle registrierten Kunden.
--
-- Beschluss vom 2026-09-16: Die App wird nicht mehr kostenpflichtig
-- angeboten. Dauerrabatt, Coupons, Treue-Meilensteine und Statusstufen
-- stehen jedem angemeldeten Konto offen.
--
-- Migration 0048 setzte das Gegenteil durch: activate_offer,
-- activate_personal_offer und grant_loyalty_bonuses verlangen eine Zeile in
-- customer_subscriptions. Ohne diese Migration würde die App einen Vorteil
-- bewerben, den der Server verweigert — ein Kunde bekäme beim Aktivieren
-- eines Coupons die Fehlermeldung "Abo erforderlich". Das wäre nicht nur
-- kaputt, sondern nach § 5 UWG irreführend.
--
-- Vorgehen (spiegelt Pricing.benefitsFreeForAll im Client):
--   * app.has_subscription() bleibt UNVERÄNDERT. Sie beantwortet weiterhin
--     wahrheitsgemäß, ob ein Abo gewählt wurde — die Frage ist nur nicht
--     mehr die, an der die Vorteile hängen.
--   * app.benefits_free_for_all() ist der eine Schalter. Ein einziges
--     "create or replace" mit false stellt den Abo-Zustand wieder her.
--   * app.has_app_benefits() ist das neue Gate der drei Funktionen.
--
-- Keine Tabelle, keine Spalte, keine Zeile wird geändert oder gelöscht.
-- Änderungsklasse K3, keine destruktive Operation.

-- ── Der Schalter ────────────────────────────────────────────────────────
create or replace function app.benefits_free_for_all()
returns boolean
language sql
immutable
as $$ select true $$;

comment on function app.benefits_free_for_all() is
  'Beschluss 2026-09-16: App-Vorteile ohne Abo. Spiegel von '
  'Pricing.benefitsFreeForAll im Flutter-Client. Auf false setzen stellt '
  'das Abo-Gating aus Migration 0048 wieder her.';

-- ── Das neue Gate ───────────────────────────────────────────────────────
create or replace function app.has_app_benefits(p_customer uuid)
returns boolean
language sql
stable
set search_path = public, app
as $$
  select app.benefits_free_for_all()
      or app.has_subscription(p_customer);
$$;

comment on function app.has_app_benefits(uuid) is
  'True, wenn dem Kunden die App-Vorteile zustehen: entweder weil sie allen '
  'offenstehen (Beschluss 2026-09-16) oder weil ein Abo gewählt wurde.';

-- ── Coupon-Aktivierung (Wochen-/Aktionsangebote) ────────────────────────
create or replace function public.activate_offer(p_offer_id uuid)
returns public.offer_activations
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.offer_activations;
begin
  if not app.has_app_benefits(auth.uid()) then
    raise exception 'Anmeldung erforderlich: Coupons lassen sich nur mit einem Bördesnack24-Konto aktivieren.'
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

-- ── Aktivierung persönlicher Angebote ───────────────────────────────────
create or replace function public.activate_personal_offer(p_offer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.personal_offers;
begin
  if not app.has_app_benefits(auth.uid()) then
    raise exception 'Anmeldung erforderlich: Persönliche Angebote lassen sich nur mit einem Bördesnack24-Konto aktivieren.'
      using errcode = 'P0001';
  end if;
  update public.personal_offers
    set activated_at = coalesce(activated_at, now())
    where id = p_offer_id and customer_id = auth.uid()
    returning * into v_row;
  return v_row;
end;
$$;

-- ── Loyalty-Boni für alle registrierten Kunden ──────────────────────────
-- Volle Neudefinition (Stand 0048) mit ausgetauschtem Gate.
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
  -- Vorteils-Gating: Loyalty steht allen registrierten Kunden offen.
  if not app.has_app_benefits(p_customer_id) then
    return 0;
  end if;

  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = p_customer_id
    and purchased_at >= v_month_start;
  -- 1 Punkt = 1 Cent Umsatz.
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
