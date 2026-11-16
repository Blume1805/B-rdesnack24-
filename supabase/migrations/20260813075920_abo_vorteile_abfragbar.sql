create or replace function public.my_subscription_benefits()
returns jsonb
language sql
stable
security definer
set search_path = public, app
as $$
  select jsonb_build_object(
    'active',           app.has_subscription(auth.uid()),
    'discount_percent', case when app.has_subscription(auth.uid()) then 5 else 0 end,
    'period_end',       app.subscription_period_end(auth.uid()),
    'plan',             (select s.plan::text
                         from public.customer_subscriptions s
                         where s.customer_id = auth.uid()
                         order by s.seq desc
                         limit 1)
  );
$$;

comment on function public.my_subscription_benefits() is
  'Abo-Vorteile des angemeldeten Kunden: active, discount_percent, '
  'period_end, plan. Einzige Quelle für die Anzeige des Dauerrabatts — '
  'damit die Regel nicht im Frontend nachgebaut wird.';

revoke all on function public.my_subscription_benefits() from public, anon;
grant execute on function public.my_subscription_benefits() to authenticated;
