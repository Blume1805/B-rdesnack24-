-- 0061 · Neue Abo-Preise + Lifetime „Founders Edition" (limitiert auf 20)
create or replace function app.lifetime_founders_limit()
returns int language sql immutable as $$ select 20 $$;

create or replace function public.lifetime_founders_status()
returns jsonb
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select jsonb_build_object(
    'limit',     app.lifetime_founders_limit(),
    'taken',     coalesce(c.taken, 0),
    'remaining', greatest(0, app.lifetime_founders_limit() - coalesce(c.taken, 0)),
    'sold_out',  coalesce(c.taken, 0) >= app.lifetime_founders_limit()
  )
  from (
    select count(distinct customer_id) as taken
    from public.customer_subscriptions
    where plan = 'lifetime'
  ) c;
$$;

grant execute on function public.lifetime_founders_status() to authenticated, anon;

create or replace function public.choose_subscription_plan(
  p_plan text,
  p_withdrawal_consent boolean default false,
  p_age_consent boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid      uuid := auth.uid();
  v_plan     app.subscription_plan;
  v_current  app.subscription_plan;
  v_price    int;
  v_label    text;
  v_taken    int;
  v_limit    int := app.lifetime_founders_limit();
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet' using errcode = '42501';
  end if;
  if not exists (select 1 from public.customers c where c.id = v_uid) then
    raise exception 'Nur Kundenkonten können ein Abo wählen' using errcode = '42501';
  end if;

  begin
    v_plan := p_plan::app.subscription_plan;
  exception when others then
    raise exception 'Unbekanntes Abo-Modell: %', p_plan;
  end;

  if not coalesce(p_age_consent, false) then
    raise exception 'Bitte bestätige, dass du volljährig bist oder mit Zustimmung deiner gesetzlichen Vertreter handelst.';
  end if;

  if v_plan = 'lifetime' and not coalesce(p_withdrawal_consent, false) then
    raise exception 'Für das Lifetime-Abo ist die Zustimmung zum Erlöschen des Widerrufsrechts erforderlich.';
  end if;

  select plan into v_current
  from public.customer_subscriptions
  where customer_id = v_uid
  order by seq desc
  limit 1;

  if v_current = 'lifetime' then
    raise exception 'Lifetime-Abo ist endgültig — kein Wechsel mehr möglich';
  end if;
  if v_current = v_plan then
    raise exception 'Dieses Abo-Modell ist bereits aktiv';
  end if;

  if v_plan = 'lifetime' then
    select count(distinct customer_id) into v_taken
    from public.customer_subscriptions
    where plan = 'lifetime';
    if v_taken >= v_limit then
      raise exception 'Die Lifetime Founders Edition ist ausverkauft (% von % Plätzen vergeben).',
        v_taken, v_limit;
    end if;
  end if;

  v_price := case v_plan
    when 'monthly'  then 99
    when 'yearly'   then 999
    when 'lifetime' then 7999
  end;
  v_label := case v_plan
    when 'monthly'  then '0,99 EUR / Monat'
    when 'yearly'   then '9,99 EUR / Jahr'
    when 'lifetime' then '79,99 EUR einmalig (Lifetime · Founders Edition)'
  end;

  insert into public.customer_subscriptions
    (customer_id, plan, price_cents, billing_label, previous_plan,
     withdrawal_consent, age_consent)
  values (v_uid, v_plan, v_price, v_label, v_current,
          coalesce(p_withdrawal_consent, false),
          coalesce(p_age_consent, false));

  return jsonb_build_object(
    'plan',          v_plan,
    'price_cents',   v_price,
    'billing_label', v_label,
    'previous_plan', v_current,
    'chosen_at',     now()
  );
end;
$function$;

grant execute on function public.choose_subscription_plan(text, boolean, boolean)
  to authenticated;
