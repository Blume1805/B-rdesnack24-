create or replace function app.has_subscription(p_customer uuid)
returns boolean
language sql
stable
set search_path = public, app
as $$
  select
    -- Zweig 1: echtes bezahltes Store-Abo. Endet von selbst zum bezahlten
    -- Zeitraumsende und hat deshalb Vorrang vor der Kündigungsanfrage.
    public.has_paid_subscription(p_customer)
    or
    -- Zweig 2: in der App gewähltes Modell ohne spätere Kündigung.
    exists (
      select 1
      from public.customer_subscriptions s
      where s.customer_id = p_customer
        and s.seq = (
          select max(s2.seq)
          from public.customer_subscriptions s2
          where s2.customer_id = p_customer
        )
        and not exists (
          select 1
          from public.cancellation_requests r
          where r.customer_id = p_customer
            and r.requested_at > s.chosen_at
        )
    );
$$;

comment on function app.has_subscription(uuid) is
  'True, wenn der Kunde Anspruch auf die Abo-Vorteile hat: entweder ein '
  'laufendes bezahltes Store-Abo, oder ein in der App gewähltes Modell, zu '
  'dem keine spätere Kündigung vorliegt. Bewacht activate_offer, '
  'activate_personal_offer und grant_loyalty_bonuses.';
