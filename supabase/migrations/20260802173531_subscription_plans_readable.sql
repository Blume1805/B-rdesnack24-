create table if not exists app.subscription_plans (
  plan          app.subscription_plan primary key,
  price_cents   integer not null check (price_cents >= 0),
  billing_label text    not null,
  sort_order    integer not null default 0,
  updated_at    timestamptz not null default now()
);

insert into app.subscription_plans (plan, price_cents, billing_label, sort_order) values
  ('monthly',   99, '0,99 EUR / Monat',                            1),
  ('yearly',   999, '9,99 EUR / Jahr',                             2),
  ('lifetime', 7999, '79,99 EUR einmalig (Lifetime Founders Edition)', 3)
on conflict (plan) do nothing;

create or replace function public.subscription_plans()
returns table (plan text, price_cents integer, billing_label text, sort_order integer)
language sql
stable
security definer
set search_path = public, app
as $$
  select p.plan::text, p.price_cents, p.billing_label, p.sort_order
    from app.subscription_plans p
   order by p.sort_order;
$$;

revoke execute on function public.subscription_plans() from public;
grant execute on function public.subscription_plans() to anon, authenticated, service_role;

comment on function public.subscription_plans() is
  'Aktuell angebotene Abo-Modelle mit Preis in Cent. Bewusst auch für anon '
  'freigegeben: die Preise stehen ohnehin auf der öffentlichen Landing Page, '
  'und die Marketingseite muss sie zeigen können, bevor jemand angemeldet ist. '
  'Kein Personenbezug. Nicht zu verwechseln mit customer_subscriptions.price_cents '
  '— das ist der historisch vereinbarte Preis des jeweiligen Kunden.';
