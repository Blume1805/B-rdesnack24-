-- 0049 — Widerrufs-Zustimmung beim Lifetime-Abo (§ 356 Abs. 5 BGB).
--
-- Beim Lifetime-Abo erlischt das Widerrufsrecht mit vollständiger
-- Bereitstellung nur, wenn die Kundin/der Kunde vorher (1) ausdrücklich
-- zugestimmt hat, dass vor Ablauf der Widerrufsfrist geleistet wird, und
-- (2) die Kenntnis vom Erlöschen bestätigt hat. Diese Zustimmung wird
-- jetzt als Pflicht-Flag beim Abschluss erfasst und revisionssicher in
-- der Abo-Historie gespeichert (die AGB versprechen das bereits).

alter table public.customer_subscriptions
  add column if not exists withdrawal_consent boolean not null default false;

create or replace function public.choose_subscription_plan(
  p_plan text,
  p_withdrawal_consent boolean default false
)
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

  -- § 356 Abs. 5 BGB: Lifetime nur mit ausdrücklicher Zustimmung +
  -- bestätigter Kenntnis vom Erlöschen des Widerrufsrechts.
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
    (customer_id, plan, price_cents, billing_label, previous_plan, withdrawal_consent)
  values (v_uid, v_plan, v_price, v_label, v_current,
          coalesce(p_withdrawal_consent, false));

  return jsonb_build_object(
    'plan',          v_plan,
    'price_cents',   v_price,
    'billing_label', v_label,
    'previous_plan', v_current,
    'chosen_at',     now()
  );
end;
$$;

-- Alte 1-Parameter-Signatur entfernen, damit PostgREST eindeutig auflöst.
drop function if exists public.choose_subscription_plan(text);

grant execute on function public.choose_subscription_plan(text, boolean) to authenticated;
