-- 0043 — Abo-Modelle für den Kundenbereich.
--
-- Drei Varianten: monatlich 1 €, jährlich 10 €, Lifetime 60 € (einmalig).
-- Regeln:
--   * Kunde wählt/wechselt selbst in der App (RPC choose_subscription_plan).
--   * Nach Lifetime ist kein Wechsel mehr möglich (RPC + Trigger, doppelt
--     abgesichert).
--   * Historie ist append-only (GoBD-Stil): jede Wahl erzeugt eine neue
--     Zeile; der aktive Plan ist die jüngste Zeile.
--   * Preise liegen serverseitig fest — der Client sendet nur den Plan-Key.
--
-- Die Bestätigungs-E-Mail versendet die Edge Function subscription-choose
-- nach erfolgreichem RPC-Aufruf (Resend; Dev-Fallback loggt nur).

do $$ begin
  create type app.subscription_plan as enum ('monthly', 'yearly', 'lifetime');
exception when duplicate_object then null; end $$;

create table if not exists public.customer_subscriptions (
  id            uuid primary key default gen_random_uuid(),
  customer_id   uuid not null references public.customers(id) on delete restrict,
  plan          app.subscription_plan not null,
  price_cents   int  not null,
  billing_label text not null,          -- "1 EUR / Monat" etc. (Snapshot)
  previous_plan app.subscription_plan,  -- null bei Erstwahl
  chosen_at     timestamptz not null default now(),
  source        text not null default 'app'
);

create index if not exists idx_customer_subscriptions_customer
  on public.customer_subscriptions(customer_id, chosen_at desc);

select app.enable_audit('public.customer_subscriptions');

alter table public.customer_subscriptions enable row level security;

-- Kunde liest nur die eigene Historie; Gesellschafter/Admin alles.
drop policy if exists subs_read on public.customer_subscriptions;
create policy subs_read on public.customer_subscriptions for select to authenticated
  using (
    customer_id = auth.uid()
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
    )
  );
-- Keine Insert/Update/Delete-Policies: Schreiben nur über die
-- security-definer-RPC. Append-only bleibt so garantiert.

-- Defense in depth: nach Lifetime sind weitere Zeilen hart verboten.
create or replace function app.trg_subscriptions_lifetime_lock()
returns trigger
language plpgsql
as $$
begin
  if exists (
    select 1 from public.customer_subscriptions
    where customer_id = new.customer_id and plan = 'lifetime'
  ) then
    raise exception 'Lifetime-Abo ist endgültig — kein Wechsel mehr möglich'
      using errcode = 'P0001';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_subscriptions_lifetime_lock on public.customer_subscriptions;
create trigger trg_subscriptions_lifetime_lock
  before insert on public.customer_subscriptions
  for each row execute function app.trg_subscriptions_lifetime_lock();

-- ── RPC: Plan wählen/wechseln ───────────────────────────────────────────
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
  order by chosen_at desc
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

comment on function public.choose_subscription_plan(text) is
  'Wählt/wechselt das Abo-Modell des angemeldeten Kunden. Lifetime ist endgültig. Preise serverseitig.';

grant execute on function public.choose_subscription_plan(text) to authenticated;

-- ── RPC: aktuellen Plan lesen ───────────────────────────────────────────
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
     order by s.chosen_at desc
     limit 1),
    jsonb_build_object('plan', null)
  );
$$;

grant execute on function public.my_subscription() to authenticated;
