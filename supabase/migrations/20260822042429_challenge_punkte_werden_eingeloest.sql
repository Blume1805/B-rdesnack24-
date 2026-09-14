alter table public.challenges
  add column if not exists reward_points int
    check (reward_points is null or reward_points > 0);

comment on column public.challenges.reward_points is
  'Punkte, die das erstmalige Erfüllen der Aufgabe gutschreibt. NULL = die '
  'Aufgabe belohnt mit einem Abzeichen statt mit Punkten.';

update public.challenges set reward_points = 300 where code = 'weekly_3';
update public.challenges set reward_points = 200 where code = 'morning_3';

create table if not exists public.customer_challenge_awards (
  customer_id    uuid not null
                 references public.customers(id)  on delete cascade,
  challenge_code text not null
                 references public.challenges(code) on delete cascade,
  points         int  not null check (points > 0),
  awarded_at     timestamptz not null default now(),
  primary key (customer_id, challenge_code)
);

comment on table public.customer_challenge_awards is
  'Einmalige Punktgutschrift je Kunde und Aufgabe. Der Primärschlüssel ist '
  'die Einmaligkeitsgarantie — eine doppelte Gutschrift ist nicht möglich.';

alter table public.customer_challenge_awards enable row level security;
revoke all on public.customer_challenge_awards from anon, authenticated;

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
           and p.purchased_at >= now() - make_interval(days => c.window_days))
      when 'distinct_machines' then (
        select count(distinct p.machine_id) from public.purchases p
         where p.customer_id = p_customer
           and p.machine_id is not null
           and p.purchased_at >= now() - make_interval(days => c.window_days))
      when 'distinct_products' then (
        select count(distinct pi.product_id)
          from public.purchase_items pi
          join public.purchases p on p.id = pi.purchase_id
         where p.customer_id = p_customer
           and pi.product_id is not null
           and p.purchased_at >= now() - make_interval(days => c.window_days))
      when 'morning_count' then (
        select count(*) from public.purchases p
         where p.customer_id = p_customer
           and p.purchased_at >= now() - make_interval(days => c.window_days)
           and extract(hour from p.purchased_at) between 7 and 8)
      else 0 end as wert
  ) v
  where c.active;
$fn$;

comment on function app.challenge_progress(uuid) is
  'Fortschritt des Kunden bei allen aktiven Aufgaben. Einzige Stelle, an der '
  'die Messregeln stehen — Anzeige und Vergabe lesen beide von hier.';

create or replace function app.grant_challenge_rewards(p_customer uuid)
returns int
language plpgsql
security definer
set search_path = public, app
as $fn$
declare
  v_punkte int := 0;
begin
  if p_customer is null then
    return 0;
  end if;

  if not exists (select 1 from public.customers c where c.id = p_customer) then
    return 0;
  end if;

  with neu as (
    insert into public.customer_challenge_awards (customer_id, challenge_code, points)
    select p_customer, cp.code, cp.reward_points
      from app.challenge_progress(p_customer) cp
     where cp.done and cp.reward_points is not null
    on conflict (customer_id, challenge_code) do nothing
    returning points
  )
  select coalesce(sum(points), 0)::int into v_punkte from neu;

  return v_punkte;
end;
$fn$;

comment on function app.grant_challenge_rewards(uuid) is
  'Schreibt fällige Aufgaben-Prämien gut und liefert die Summe der NEU '
  'vergebenen Punkte. Mehrfachaufruf vergibt nichts doppelt.';

create or replace function app.challenge_points(p_customer uuid, p_month_start date)
returns int
language sql
stable
set search_path = public, app
as $fn$
  select coalesce(sum(a.points), 0)::int
  from public.customer_challenge_awards a
  where a.customer_id = p_customer
    and (a.awarded_at at time zone 'Europe/Berlin')::date >= p_month_start
    and (a.awarded_at at time zone 'Europe/Berlin')::date
        <  (p_month_start + interval '1 month')::date;
$fn$;

comment on function app.challenge_points(uuid, date) is
  'Aufgaben-Prämien des Kunden im angegebenen Monat, in Berliner Zeit '
  'gerechnet wie app.heute().';

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
  where customer_id = v_uid;

  select count(distinct pi.product_id) into v_products
  from public.purchase_items pi
  join public.purchases p on p.id = pi.purchase_id
  where p.customer_id = v_uid and pi.product_id is not null;

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

create or replace function public.record_daily_login()
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid        uuid := auth.uid();
  v_heute      date := app.heute();
  v_monat      date := date_trunc('month', app.heute())::date;
  v_zeilen     int;
  v_vorher     int;
  v_nachher    int;
  v_praemien   int := 0;
  v_woche      jsonb;
begin
  if v_uid is null then
    raise exception 'Anmeldung erforderlich' using errcode = 'P0001';
  end if;

  if not exists (select 1 from public.customers c where c.id = v_uid) then
    return jsonb_build_object('participates', false);
  end if;

  v_vorher := app.login_points(v_uid, v_monat);

  insert into public.customer_login_days(customer_id, day)
  values (v_uid, v_heute)
  on conflict (customer_id, day) do nothing;
  get diagnostics v_zeilen = row_count;

  v_nachher := app.login_points(v_uid, v_monat);

  v_praemien := app.grant_challenge_rewards(v_uid);

  if v_zeilen > 0 or v_praemien > 0 then
    perform app.grant_loyalty_bonuses(v_uid);
  end if;

  v_woche := app.login_week(v_uid);

  return v_woche || jsonb_build_object(
    'participates',  true,
    'counted_today', v_zeilen > 0,
    'awarded',       v_nachher - v_vorher,
    'challenge_awarded', v_praemien,
    'benefits_active', app.has_subscription(v_uid)
  );
end;
$function$;

comment on function public.record_daily_login() is
  'Hält den heutigen Login fest, vergibt fällige Aufgaben-Prämien, prüft die '
  'Meilensteine und liefert die Wochenübersicht. Mehrfachaufruf am selben Tag '
  'bucht nichts doppelt und meldet awarded = 0 und challenge_awarded = 0.';

insert into public.ki_register (
  key, bezeichnung, system, anbieter, rolle, zweck,
  datenkategorien, personenbezug, profiling, ist_ki_system,
  ai_act_kategorie, dsgvo_risiko, rechtsgrundlage,
  kennzeichnung_noetig, kennzeichnung_umgesetzt, freigabe_noetig,
  minderjaehrige, manipulationsrisiko, deepfake_risiko,
  ampel, aktiv, begruendung, geprueft_am, geprueft_von
) values (
  'challenge_rewards',
  'Punkte für erfüllte Aufgaben',
  'Bördesnack24 App und Web',
  null,
  'keine',
  'Wer eine Aufgabe erstmalig erfüllt (drei Käufe je Woche, drei Käufe '
  'zwischen 7 und 9 Uhr), bekommt einmalig die zugesagten Punkte auf '
  'dieselben Meilensteine wie beim Einkauf gutgeschrieben.',
  array['kaufzeitpunkt', 'kaufanzahl', 'automat', 'produkt'],
  true,
  true,
  false,
  'kein_ki_system',
  'niedrig',
  'Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)',
  true,
  true,
  false,
  false,
  false,
  false,
  'gruen',
  true,
  'Feste Rechenregel ohne Lernen, Schliessen oder Modellieren — kein '
  'KI-System nach Art. 3 EU AI Act, wie schon bei den Login-Punkten. Die '
  'Kennzeichnung bleibt Hauspflicht, weil der Kunde sonst nicht erkennt, '
  'warum ihm Punkte gutgeschrieben wurden.',
  '2026-08-22',
  'Bördesnack24'
)
on conflict (key) do nothing;
