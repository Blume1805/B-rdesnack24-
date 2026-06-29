-- ============================================================================
-- 0010 — Kundenbereich (Kategorie 3)
-- ----------------------------------------------------------------------------
-- customers (1:1 zu profiles), individuelle Preise, Angebote, Kaufhistorie,
-- Empfehlungen, Kontaktnachrichten, Einwilligungen (DSGVO, append-only).
-- RLS: Kunden sehen/ändern nur eigene Daten; Pflege durch Gesellschafter.
-- ============================================================================

do $$ begin
  create type app.consent_type as enum ('privacy', 'analytics', 'marketing', 'maps');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.contact_category as enum ('problem', 'question', 'praise', 'criticism', 'suggestion');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.purchase_source as enum ('nayax', 'manual', 'import');
exception when duplicate_object then null; end $$;

-- ── customers (Profilerweiterung für Kunden) ────────────────────────────────
create table if not exists public.customers (
  id              uuid primary key references public.profiles(id) on delete restrict,
  customer_number text unique,
  billing_street  text,
  billing_zip     text,
  billing_city    text,
  notify_email    boolean not null default true,
  notify_push     boolean not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  updated_by      uuid
);

drop trigger if exists trg_customers_updated_at on public.customers;
create trigger trg_customers_updated_at before update on public.customers
  for each row execute function app.set_updated_at();

-- Beim Anlegen eines Kundenprofils automatisch customers-Zeile erzeugen.
create or replace function app.handle_new_customer()
returns trigger
language plpgsql security definer
set search_path = public, app
as $$
begin
  if new.role = 'customer' then
    insert into public.customers (id) values (new.id) on conflict (id) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_new_customer on public.profiles;
create trigger trg_new_customer after insert on public.profiles
  for each row execute function app.handle_new_customer();

-- ── Individuelle Preise (zentral verwaltet) ─────────────────────────────────
create table if not exists public.customer_prices (
  id          uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete restrict,
  product_id  uuid not null references public.products(id) on delete restrict,
  price_net   numeric(12,2) not null,
  valid_from  date not null default current_date,
  valid_to    date,
  created_at  timestamptz not null default now(),
  created_by  uuid,
  unique (customer_id, product_id, valid_from)
);
create index if not exists idx_cprices_customer on public.customer_prices(customer_id);

-- ── Angebote ────────────────────────────────────────────────────────────────
create table if not exists public.offers (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  kind        text not null default 'special',   -- daily | weekly | special
  valid_from  date not null default current_date,
  valid_to    date,
  image_path  text,
  status      app.entity_status not null default 'active',
  created_at  timestamptz not null default now(),
  created_by  uuid,
  updated_at  timestamptz not null default now(),
  updated_by  uuid
);
create index if not exists idx_offers_validity on public.offers(valid_from, valid_to);

drop trigger if exists trg_offers_updated_at on public.offers;
create trigger trg_offers_updated_at before update on public.offers
  for each row execute function app.set_updated_at();

-- ── Kaufhistorie (Vorbereitung KI-Auswertung) ───────────────────────────────
create table if not exists public.purchases (
  id           uuid primary key default gen_random_uuid(),
  customer_id  uuid not null references public.customers(id) on delete restrict,
  machine_id   uuid references public.machines(id),
  total_gross  numeric(12,2) not null default 0,
  purchased_at timestamptz not null default now(),
  source       app.purchase_source not null default 'manual',
  source_ref   text,
  created_at   timestamptz not null default now()
);
create index if not exists idx_purchases_customer on public.purchases(customer_id, purchased_at desc);

create table if not exists public.purchase_items (
  id          uuid primary key default gen_random_uuid(),
  purchase_id uuid not null references public.purchases(id) on delete cascade,
  product_id  uuid references public.products(id),
  product_label text,
  quantity    integer not null default 1,
  unit_price  numeric(12,2) not null default 0
);
create index if not exists idx_pitems_purchase on public.purchase_items(purchase_id);

-- ── Empfehlungen (personalisiert) ───────────────────────────────────────────
create table if not exists public.recommendations (
  id          uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete restrict,
  product_id  uuid not null references public.products(id) on delete restrict,
  score       numeric(5,2) not null default 0,
  reason      text,
  created_at  timestamptz not null default now()
);
create index if not exists idx_recos_customer on public.recommendations(customer_id);

-- ── Kontaktnachrichten ──────────────────────────────────────────────────────
create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  customer_id uuid references public.profiles(id),
  category    app.contact_category not null,
  subject     text,
  body        text not null,
  status      text not null default 'new',       -- new | in_progress | done
  created_at  timestamptz not null default now()
);
create index if not exists idx_contact_status on public.contact_messages(status, created_at desc);

-- ── Einwilligungen (DSGVO, append-only) ─────────────────────────────────────
create table if not exists public.consents (
  id          uuid primary key default gen_random_uuid(),
  profile_id  uuid not null references public.profiles(id) on delete restrict,
  type        app.consent_type not null,
  granted     boolean not null,
  version     text not null default 'v1',
  created_at  timestamptz not null default now()
);
create index if not exists idx_consents_profile on public.consents(profile_id, type, created_at desc);

-- Audit
select app.enable_audit('public.customers');
select app.enable_audit('public.customer_prices');
select app.enable_audit('public.offers');
select app.enable_audit('public.contact_messages');
select app.enable_audit('public.consents');

-- ============================================================================
-- RLS
-- ============================================================================
alter table public.customers        enable row level security;
alter table public.customer_prices  enable row level security;
alter table public.offers           enable row level security;
alter table public.purchases        enable row level security;
alter table public.purchase_items   enable row level security;
alter table public.recommendations  enable row level security;
alter table public.contact_messages enable row level security;
alter table public.consents         enable row level security;

-- customers: Eigenzugriff; Pflege via customers.manage/Admin.
drop policy if exists cust_self_read on public.customers;
create policy cust_self_read on public.customers for select to authenticated
  using (id = auth.uid() or public.is_admin() or public.auth_has_permission('customers.manage'));
drop policy if exists cust_self_update on public.customers;
create policy cust_self_update on public.customers for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());
drop policy if exists cust_manage on public.customers;
create policy cust_manage on public.customers for all to authenticated
  using (public.is_admin() or public.auth_has_permission('customers.manage'))
  with check (public.is_admin() or public.auth_has_permission('customers.manage'));

-- customer_prices: Kunde liest eigene; Pflege via prices.manage/Admin.
drop policy if exists cprice_read on public.customer_prices;
create policy cprice_read on public.customer_prices for select to authenticated
  using (customer_id = auth.uid() or public.is_admin() or public.auth_has_permission('prices.manage'));
drop policy if exists cprice_write on public.customer_prices;
create policy cprice_write on public.customer_prices for all to authenticated
  using (public.is_admin() or public.auth_has_permission('prices.manage'))
  with check (public.is_admin() or public.auth_has_permission('prices.manage'));

-- offers: alle Angemeldeten lesen; Pflege via offers.manage/Admin.
drop policy if exists offers_read on public.offers;
create policy offers_read on public.offers for select to authenticated using (true);
drop policy if exists offers_write on public.offers;
create policy offers_write on public.offers for all to authenticated
  using (public.is_admin() or public.auth_has_permission('offers.manage'))
  with check (public.is_admin() or public.auth_has_permission('offers.manage'));

-- purchases / items: Kunde liest eigene; Pflege via customers.manage/Admin.
drop policy if exists purch_read on public.purchases;
create policy purch_read on public.purchases for select to authenticated
  using (customer_id = auth.uid() or public.is_admin() or public.auth_has_permission('customers.manage'));
drop policy if exists purch_write on public.purchases;
create policy purch_write on public.purchases for all to authenticated
  using (public.is_admin() or public.auth_has_permission('customers.manage'))
  with check (public.is_admin() or public.auth_has_permission('customers.manage'));

drop policy if exists pitems_read on public.purchase_items;
create policy pitems_read on public.purchase_items for select to authenticated
  using (
    public.is_admin() or public.auth_has_permission('customers.manage')
    or exists (select 1 from public.purchases p
               where p.id = purchase_id and p.customer_id = auth.uid())
  );

-- recommendations: Kunde liest eigene.
drop policy if exists recos_read on public.recommendations;
create policy recos_read on public.recommendations for select to authenticated
  using (customer_id = auth.uid() or public.is_admin() or public.auth_has_permission('customers.manage'));
drop policy if exists recos_write on public.recommendations;
create policy recos_write on public.recommendations for all to authenticated
  using (public.is_admin() or public.auth_has_permission('customers.manage'))
  with check (public.is_admin() or public.auth_has_permission('customers.manage'));

-- contact_messages: Kunde erstellt + liest eigene; Bearbeitung via customers.manage.
drop policy if exists contact_insert on public.contact_messages;
create policy contact_insert on public.contact_messages for insert to authenticated
  with check (customer_id = auth.uid() or customer_id is null);
drop policy if exists contact_read on public.contact_messages;
create policy contact_read on public.contact_messages for select to authenticated
  using (customer_id = auth.uid() or public.is_admin() or public.auth_has_permission('customers.manage'));
drop policy if exists contact_update on public.contact_messages;
create policy contact_update on public.contact_messages for update to authenticated
  using (public.is_admin() or public.auth_has_permission('customers.manage'))
  with check (public.is_admin() or public.auth_has_permission('customers.manage'));

-- consents: Eigenzugriff (append-only: nur insert/select).
drop policy if exists consent_insert on public.consents;
create policy consent_insert on public.consents for insert to authenticated
  with check (profile_id = auth.uid());
drop policy if exists consent_read on public.consents;
create policy consent_read on public.consents for select to authenticated
  using (profile_id = auth.uid() or public.is_admin());
