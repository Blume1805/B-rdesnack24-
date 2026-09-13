-- 0023 — Loyalty-Stufen, Automaten-Kapazität, Spenden-Pool aller Kunden.
-- Vollständige Definition der RPCs siehe Backend-Migration.

-- Loyalty-Stufen: 500 / 1200 / 2000 / 3000 → 5 / 10 / 15 / 25 %
create or replace function app.loyalty_milestones()
returns int[] language sql immutable
as $$ select array[500, 1200, 2000, 3000]::int[]; $$;

-- Automaten-Kapazität nachziehen (Default 12, mindestens aktuellem Bestand)
update public.inventory
   set capacity = greatest(12, quantity)
 where capacity is null;

-- Tages-Umsatz je Automat (Nayax-Feed) — für die Demo mit Seed befüllt
create table if not exists public.machine_sales_daily (
  machine_id uuid not null references public.machines(id) on delete cascade,
  day        date not null,
  gross_total numeric(12,2) not null default 0,
  primary key (machine_id, day)
);
create index if not exists idx_msales_day on public.machine_sales_daily(day desc);

alter table public.machine_sales_daily enable row level security;
drop policy if exists msales_read on public.machine_sales_daily;
create policy msales_read on public.machine_sales_daily
  for select to authenticated using (true);

-- RPC donation_pool_summary: eigener Beitrag, Gesamtpool aller Kunden,
-- Anteil-in-% und Umsatz von Nicht-App-Nutzern (Nayax → machine_sales_daily).
-- Rest: siehe Backend-Migration
