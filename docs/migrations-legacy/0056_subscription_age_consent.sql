-- ============================================================================
-- 0056 · Abo-Altersgating (§§ 106 ff. BGB)
-- ----------------------------------------------------------------------------
-- Kostenpflichtige Abos dürfen nur mit bestätigter Volljährigkeit bzw.
-- Zustimmung der gesetzlichen Vertreter abgeschlossen werden. Der
-- Taschengeldparagraph (§ 110 BGB) trägt Dauerschuldverhältnisse nicht.
-- Die Bestätigung wird — wie withdrawal_consent — revisionssicher an der
-- append-only Abo-Historie gespeichert (Nachweis je Vertragsschluss).
-- ============================================================================

alter table public.customer_subscriptions
  add column if not exists age_consent boolean not null default false;

-- Alte 2-Parameter-Signatur entfernen, damit PostgREST nur EINE Funktion
-- auflösen muss (Default für p_age_consent hält alte Aufrufer lauffähig,
-- die laufen dann aber in die neue Pflichtprüfung).
drop function if exists public.choose_subscription_plan(text, boolean);

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

  -- §§ 106 ff. BGB: ohne Alters-/Zustimmungsbestätigung kein Abschluss —
  -- gilt für JEDEN Plan (auch Wechsel = neuer Vertragsschluss).
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
