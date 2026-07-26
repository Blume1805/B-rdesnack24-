-- ============================================================================
-- 0058 · Gamification: Status-Stufen, Cashback, Challenges, Badges
-- ----------------------------------------------------------------------------
-- Baut auf der bestehenden Kaufhistorie auf (keine separate Event-Pipeline):
--   * Status-Stufen (Bronze/Silber/Gold/Platin) nach KUMULATIVEM Umsatz
--     (persistent, anders als die monatlichen Loyalty-Meilensteine).
--   * Cashback als Stufen-Vorteil (0/1/2/3 %), pro Kauf zum jeweils
--     gültigen Stufen-Satz akkumuliert; Auszahlung/Einlösung am Automaten
--     folgt mit der Nayax-Anbindung.
--   * Challenges (zeitlich begrenzt) + Badges (Sammel-Erfolge) — alles
--     serverseitig aus purchases/purchase_items berechnet (kein Drift).
-- Kataloge (badges, challenges) sind für alle lesbar; die Auswertung je
-- Kunde liefert my_gamification_status() (SECURITY DEFINER, nur eigene).
-- ============================================================================

-- ── Badge-Katalog ───────────────────────────────────────────────────────────
create table if not exists public.badges (
  code        text primary key,
  title       text not null,
  description text not null,
  icon_key    text not null default 'star',
  sort_order  int  not null default 0
);

insert into public.badges (code, title, description, icon_key, sort_order) values
  ('first_purchase', 'Erster Snack',        'Dein erster Kauf bei Bördesnack24.',              'bolt',       10),
  ('loyal_10',       'Stammkunde',          '10 Käufe getätigt — schön, dass du wiederkommst!','favorite',   20),
  ('tier_silber',    'Silber-Status',       'Silber-Stufe erreicht.',                          'workspace',  30),
  ('tier_gold',      'Gold-Status',         'Gold-Stufe erreicht.',                            'workspace',  40),
  ('tier_platin',    'Platin-Status',       'Platin-Stufe erreicht — Spitzenreiter!',          'diamond',    50),
  ('explorer',       'Automaten-Entdecker', 'An 3 verschiedenen Automaten gekauft.',           'explore',    60),
  ('taster',         'Probierfreudig',      '5 verschiedene Produkte gekauft.',                'restaurant', 70),
  ('early_bird',     'Frühaufsteher',       'Vor 9 Uhr morgens gekauft.',                      'wb_sunny',   80),
  ('night_owl',      'Nachteule',           'Nach 20 Uhr abends gekauft.',                     'nightlight', 90)
on conflict (code) do update
  set title = excluded.title, description = excluded.description,
      icon_key = excluded.icon_key, sort_order = excluded.sort_order;

-- ── Challenge-Katalog ───────────────────────────────────────────────────────
-- metric: was gezählt wird · target: Zielwert · window_days: Zeitfenster ·
-- reward_badge: Badge, das bei Abschluss hervorgehoben wird (optional).
create table if not exists public.challenges (
  code         text primary key,
  title        text not null,
  description  text not null,
  metric       text not null,           -- purchase_count | distinct_machines | distinct_products | morning_count
  target       int  not null,
  window_days  int  not null,
  reward_text  text not null,
  reward_badge text references public.badges(code),
  sort_order   int  not null default 0,
  active       boolean not null default true
);

insert into public.challenges
  (code, title, description, metric, target, window_days, reward_text, reward_badge, sort_order) values
  ('weekly_3',   'Wochen-Snacker',   'Kaufe diese Woche 3-mal.',                   'purchase_count',    3,  7,  '+300 Bonuspunkte', null,       10),
  ('explorer_3', 'Tour de Automat',  'Kaufe in 30 Tagen an 3 verschiedenen Automaten.', 'distinct_machines', 3, 30, 'Badge „Automaten-Entdecker“', 'explorer', 20),
  ('taster_5',   'Geschmackstest',   'Probiere in 30 Tagen 5 verschiedene Produkte.',   'distinct_products', 5, 30, 'Badge „Probierfreudig“',      'taster',   30),
  ('morning_3',  'Morgenmuffel-Kur', 'Kaufe 3-mal zwischen 7 und 9 Uhr (30 Tage).',    'morning_count',     3, 30, '+200 Bonuspunkte', null,       40)
on conflict (code) do update
  set title = excluded.title, description = excluded.description, metric = excluded.metric,
      target = excluded.target, window_days = excluded.window_days,
      reward_text = excluded.reward_text, reward_badge = excluded.reward_badge,
      sort_order = excluded.sort_order;

alter table public.badges     enable row level security;
alter table public.challenges enable row level security;

drop policy if exists badges_read on public.badges;
create policy badges_read on public.badges
  for select to authenticated using (true);

drop policy if exists challenges_read on public.challenges;
create policy challenges_read on public.challenges
  for select to authenticated using (active);

grant select on public.badges, public.challenges to authenticated;

-- ── Status-Stufen (kumulativer Umsatz in EUR) ───────────────────────────────
-- Rückgabe: code, label, min_eur, cashback_pct — aufsteigend.
create or replace function app.status_tiers()
returns table(code text, label text, min_eur numeric, cashback_pct numeric)
language sql immutable
set search_path to 'public', 'app'
as $$
  select * from (values
    ('bronze', 'Bronze',  0::numeric,   0::numeric),
    ('silber', 'Silber',  50::numeric,  1::numeric),
    ('gold',   'Gold',    150::numeric, 2::numeric),
    ('platin', 'Platin',  400::numeric, 3::numeric)
  ) as t(code, label, min_eur, cashback_pct);
$$;

-- ── Haupt-RPC: Gamification-Status des angemeldeten Kunden ──────────────────
create or replace function public.my_gamification_status()
returns jsonb
language plpgsql
stable security definer
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
  v_cashback  numeric := 0;
  v_tier      record;
  v_next      record;
  v_prev_min  numeric := 0;
  v_progress  numeric := 1;
  -- Challenge-Fortschritt
  v_c_week    int := 0;
  v_c_mach30  int := 0;
  v_c_prod30  int := 0;
  v_c_morn30  int := 0;
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

  -- Cashback: pro Kauf zum Satz der bei diesem Kauf gültigen Stufe
  -- (laufende Summe -> Stufe -> Satz).
  with ordered as (
    select total_gross,
           sum(total_gross) over (
             order by purchased_at
             rows between unbounded preceding and current row
           ) as run
    from public.purchases
    where customer_id = v_uid
  )
  select coalesce(sum(total_gross * (
    case when run >= 400 then 0.03
         when run >= 150 then 0.02
         when run >= 50  then 0.01
         else 0 end)), 0)
    into v_cashback
  from ordered;

  -- Aktuelle Stufe = höchste erreichte; nächste Stufe + Fortschritt.
  select code, label, min_eur, cashback_pct into v_tier
  from app.status_tiers()
  where min_eur <= v_gross
  order by min_eur desc limit 1;

  select code, label, min_eur into v_next
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

  -- Challenge-Fenster
  select count(*) into v_c_week from public.purchases
    where customer_id = v_uid and purchased_at >= now() - interval '7 days';
  select count(distinct machine_id) filter (where machine_id is not null)
    into v_c_mach30 from public.purchases
    where customer_id = v_uid and purchased_at >= now() - interval '30 days';
  select count(distinct pi.product_id) into v_c_prod30
    from public.purchase_items pi
    join public.purchases p on p.id = pi.purchase_id
    where p.customer_id = v_uid and pi.product_id is not null
      and p.purchased_at >= now() - interval '30 days';
  select count(*) into v_c_morn30 from public.purchases
    where customer_id = v_uid and purchased_at >= now() - interval '30 days'
      and extract(hour from purchased_at) between 7 and 8;

  -- Badges mit earned-Flag (Reihenfolge aus Katalog).
  select jsonb_agg(jsonb_build_object(
      'code', b.code, 'title', b.title, 'description', b.description,
      'icon_key', b.icon_key,
      'earned', case b.code
        when 'first_purchase' then v_count >= 1
        when 'loyal_10'       then v_count >= 10
        when 'tier_silber'    then v_gross >= 50
        when 'tier_gold'      then v_gross >= 150
        when 'tier_platin'    then v_gross >= 400
        when 'explorer'       then v_machines >= 3
        when 'taster'         then v_products >= 5
        when 'early_bird'     then coalesce(v_early, false)
        when 'night_owl'      then coalesce(v_night, false)
        else false end
    ) order by b.sort_order)
    into v_badges
  from public.badges b;

  -- Challenges mit Fortschritt.
  select jsonb_agg(jsonb_build_object(
      'code', c.code, 'title', c.title, 'description', c.description,
      'target', c.target, 'window_days', c.window_days,
      'reward_text', c.reward_text,
      'progress', case c.metric
        when 'purchase_count'    then v_c_week
        when 'distinct_machines' then v_c_mach30
        when 'distinct_products' then v_c_prod30
        when 'morning_count'     then v_c_morn30
        else 0 end,
      'done', (case c.metric
        when 'purchase_count'    then v_c_week
        when 'distinct_machines' then v_c_mach30
        when 'distinct_products' then v_c_prod30
        when 'morning_count'     then v_c_morn30
        else 0 end) >= c.target
    ) order by c.sort_order)
    into v_challenges
  from public.challenges c
  where c.active;

  return jsonb_build_object(
    'lifetime_gross',   v_gross,
    'purchase_count',   v_count,
    'cashback_eur',     round(v_cashback, 2),
    'tier', jsonb_build_object(
      'code', v_tier.code, 'label', v_tier.label,
      'cashback_pct', v_tier.cashback_pct,
      'next_code', v_next.code, 'next_label', v_next.label,
      'next_min_eur', v_next.min_eur,
      'progress', round(v_progress, 4)
    ),
    'badges', coalesce(v_badges, '[]'::jsonb),
    'challenges', coalesce(v_challenges, '[]'::jsonb)
  );
end;
$function$;

grant execute on function public.my_gamification_status() to authenticated;

-- ── Demo-Kauf realistischer machen (für Challenges/Badges testbar) ──────────
-- Weist einen zufälligen aktiven Automaten zu und legt eine Position mit
-- einem zufälligen aktiven Produkt an. Bleibt reines Demo-Werkzeug; im
-- Live-Betrieb liefert der Nayax-Webhook echte Automaten/Produkte.
create or replace function public.dev_add_demo_purchase(
  p_payment_method text default 'card_ec',
  p_total_gross numeric default 4.99
)
returns public.purchases
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_row     public.purchases;
  v_valid   app.payment_method;
  v_machine uuid;
  v_prod    record;
begin
  if auth.uid() is null then raise exception 'Anmeldung erforderlich'; end if;
  begin
    v_valid := p_payment_method::app.payment_method;
  exception when others then
    v_valid := 'card_ec';
  end;

  select id into v_machine from public.machines
   where status = 'active' and deleted_at is null
   order by random() limit 1;

  insert into public.purchases(
    customer_id, machine_id, total_gross, purchased_at, source, payment_method
  )
  values (auth.uid(), v_machine, coalesce(p_total_gross, 4.99), now(),
          'manual', v_valid)
  returning * into v_row;

  select id, name, tax_rate into v_prod from public.products
   where status = 'active' and deleted_at is null
   order by random() limit 1;

  if v_prod.id is not null then
    insert into public.purchase_items(
      purchase_id, product_id, product_label, quantity, unit_price
    )
    values (v_row.id, v_prod.id, v_prod.name, 1, coalesce(p_total_gross, 4.99));
  end if;

  return v_row;
end;
$function$;

grant execute on function public.dev_add_demo_purchase(text, numeric) to authenticated;
