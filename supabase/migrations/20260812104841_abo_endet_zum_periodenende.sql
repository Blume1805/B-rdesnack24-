create or replace function app.subscription_period_end(p_customer uuid)
returns date
language plpgsql
stable
set search_path = public, app
as $$
declare
  v_store_end   date;
  v_store_found boolean := false;
  v_plan        text;
  v_chosen      timestamptz;
  v_cancelled   timestamptz;
  v_perioden    int;
begin
  select s.expires_at::date, true
    into v_store_end, v_store_found
  from public.store_subscription s
  where s.profile_id = p_customer
    and s.environment = 'production'
    and s.revoked_at is null
  order by s.expires_at desc nulls first
  limit 1;

  if v_store_found then
    return v_store_end;
  end if;

  select s.plan::text, s.chosen_at
    into v_plan, v_chosen
  from public.customer_subscriptions s
  where s.customer_id = p_customer
  order by s.seq desc
  limit 1;

  if v_plan is null then
    return null;
  end if;

  if v_plan = 'lifetime' then
    return null;
  end if;

  select min(r.requested_at)
    into v_cancelled
  from public.cancellation_requests r
  where r.customer_id = p_customer
    and r.requested_at > v_chosen;

  if v_cancelled is null then
    return null;
  end if;

  if v_plan = 'monthly' then
    v_perioden := extract(year  from age(v_cancelled, v_chosen))::int * 12
                + extract(month from age(v_cancelled, v_chosen))::int;
    return (v_chosen + ((v_perioden + 1) * interval '1 month'))::date;
  end if;

  v_perioden := extract(year from age(v_cancelled, v_chosen))::int;
  return (v_chosen + ((v_perioden + 1) * interval '1 year'))::date;
end;
$$;

comment on function app.subscription_period_end(uuid) is
  'Letzter Tag mit Abo-Vorteilen. NULL = kein Ende (nicht gekündigt, '
  'Lifetime oder kein Abo). Store-Abo hat Vorrang vor der Berechnung.';

create or replace function app.has_subscription(p_customer uuid)
returns boolean
language sql
stable
set search_path = public, app
as $$
  select
    public.has_paid_subscription(p_customer)
    or (
      exists (
        select 1 from public.customer_subscriptions s
        where s.customer_id = p_customer
      )
      and coalesce(
            current_date <= app.subscription_period_end(p_customer),
            true
          )
    );
$$;

comment on function app.has_subscription(uuid) is
  'True, solange der bezahlte Zeitraum läuft. Nach einer Kündigung endet '
  'der Anspruch mit dem Periodenende, nicht mit dem Kündigungseingang. '
  'Bewacht activate_offer, grant_loyalty_bonuses und den Rabattsatz in '
  'card_entitlements.';

create or replace function public.activate_personal_offer(p_offer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.personal_offers;
begin
  update public.personal_offers
    set activated_at = coalesce(activated_at, now())
    where id = p_offer_id and customer_id = auth.uid()
    returning * into v_row;
  return v_row;
end;
$$;

comment on function public.activate_personal_offer(uuid) is
  'Aktiviert einen bereits gewährten persönlichen Gutschein. BEWUSST ohne '
  'Abo-Prüfung: Wer den Gutschein im Abo erhalten hat, darf ihn auch nach '
  'Aboende einlösen, solange valid_to läuft. Die Bedingung '
  'customer_id = auth.uid() bleibt die Absicherung.';
