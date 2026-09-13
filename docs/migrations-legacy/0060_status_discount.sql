-- ============================================================================
-- 0060 · Status-Rabatt statt Cashback-Stufen
-- ----------------------------------------------------------------------------
-- Der Statusvorteil ist jetzt ein DAUERRABATT zusätzlich zum 5 % Abo-Rabatt
-- (nicht mehr Cashback-%). Kumulativer Lebenszeit-Umsatz, kein Reset:
--   Bronze ab  150 € → +1,0 %  (gesamt 6,0 %)
--   Silber ab  500 € → +2,5 %  (gesamt 7,5 %)
--   Gold   ab 1000 € → +5,0 %  (gesamt 10,0 %)
-- Unter 150 € gilt „Basis" (nur der 5 % Abo-Rabatt). Kein Platin mehr.
-- „Cashback-Aktionen" bleiben als gelegentliche Promo (Marketing), nicht als
-- stehender Prozentsatz.
-- ============================================================================

-- Badge-Katalog: Platin raus, Bronze rein (Schwelle 150 €).
delete from public.badges where code = 'tier_platin';
insert into public.badges (code, title, description, icon_key, sort_order) values
  ('tier_bronze', 'Bronze-Status', 'Bronze-Stufe erreicht (ab 150 € Umsatz).', 'workspace', 25)
on conflict (code) do update
  set title = excluded.title, description = excluded.description,
      icon_key = excluded.icon_key, sort_order = excluded.sort_order;
update public.badges set description = 'Silber-Stufe erreicht (ab 500 € Umsatz).' where code = 'tier_silber';
update public.badges set description = 'Gold-Stufe erreicht (ab 1000 € Umsatz).'  where code = 'tier_gold';

-- Stufen inkl. Basis; discount_pct = ZUSÄTZLICHER Rabatt zum 5 % Abo.
-- OUT-Parameter ändert sich (cashback_pct -> discount_pct) -> erst droppen.
drop function if exists app.status_tiers();
create or replace function app.status_tiers()
returns table(code text, label text, min_eur numeric, discount_pct numeric)
language sql immutable
set search_path to 'public', 'app'
as $$
  select * from (values
    ('basis',  'Basis',   0::numeric,    0::numeric),
    ('bronze', 'Bronze',  150::numeric,  1::numeric),
    ('silber', 'Silber',  500::numeric,  2.5::numeric),
    ('gold',   'Gold',    1000::numeric, 5::numeric)
  ) as t(code, label, min_eur, discount_pct);
$$;

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
  v_tier      record;
  v_next      record;
  v_prev_min  numeric := 0;
  v_progress  numeric := 1;
  v_base_pct  numeric := 5;   -- Abo-Grundrabatt
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
    'base_discount_pct', v_base_pct,
    'tier', jsonb_build_object(
      'code', v_tier.code, 'label', v_tier.label,
      'discount_pct', v_tier.discount_pct,             -- Zusatzrabatt
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

grant execute on function public.my_gamification_status() to authenticated;
