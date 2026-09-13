-- 0044 — Robuste Ordnung der Abo-Historie.
--
-- chosen_at ist innerhalb einer Transaktion konstant (now()); bei schnellen
-- aufeinanderfolgenden Wahlen wäre die "jüngste Zeile" damit mehrdeutig.
-- Eine Identity-Spalte macht die Reihenfolge eindeutig; beide RPCs
-- sortieren jetzt nach seq statt chosen_at.

alter table public.customer_subscriptions
  add column if not exists seq bigint generated always as identity;

create index if not exists idx_customer_subscriptions_seq
  on public.customer_subscriptions(customer_id, seq desc);

create or replace function public.choose_subscription_plan(p_plan text)
returns jsonb
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_uid      uuid := auth.uid();
  v_plan     app.subscription_plan;
  v_current  app.subscription_plan;
  v_price    int;
  v_label    text;
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

  v_price := case v_plan
    when 'monthly'  then 100
    when 'yearly'   then 1000
    when 'lifetime' then 6000
  end;
  v_label := case v_plan
    when 'monthly'  then '1 EUR / Monat'
    when 'yearly'   then '10 EUR / Jahr'
    when 'lifetime' then '60 EUR einmalig (Lifetime)'
  end;

  insert into public.customer_subscriptions
    (customer_id, plan, price_cents, billing_label, previous_plan)
  values (v_uid, v_plan, v_price, v_label, v_current);

  return jsonb_build_object(
    'plan',          v_plan,
    'price_cents',   v_price,
    'billing_label', v_label,
    'previous_plan', v_current,
    'chosen_at',     now()
  );
end;
$$;

create or replace function public.my_subscription()
returns jsonb
language sql
stable
security definer
set search_path = public, app
as $$
  select coalesce(
    (select jsonb_build_object(
       'plan',          s.plan,
       'price_cents',   s.price_cents,
       'billing_label', s.billing_label,
       'chosen_at',     s.chosen_at,
       'locked',        s.plan = 'lifetime'
     )
     from public.customer_subscriptions s
     where s.customer_id = auth.uid()
     order by s.seq desc
     limit 1),
    jsonb_build_object('plan', null)
  );
$$;
