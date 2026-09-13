-- ============================================================================
-- 0021 — B2B (Unternehmer) + Rechnungen + Zahlungsmethode
-- ----------------------------------------------------------------------------
-- Kunden können sich als Privatperson oder Unternehmer registrieren.
-- Für Unternehmer werden Firmenanschrift, Steuernummer und ggf. USt-IdNr.
-- erfasst; Kundennummer beginnt bei Unternehmern mit 2 (statt 1).
-- Käufe von Unternehmern erzeugen automatisch eine §14 UStG-Rechnung
-- (Aufteilung Netto/USt je 7 % und 19 %). purchases.payment_method wird
-- erfasst; die Kaufhistorie zeigt das entsprechende Icon.
-- ============================================================================

do $$ begin
  create type app.customer_type as enum ('private', 'business');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.payment_method as enum ('cash', 'card_ec', 'card_credit', 'card_contactless', 'other');
exception when duplicate_object then null; end $$;

alter table public.customers
  add column if not exists customer_type app.customer_type not null default 'private',
  add column if not exists company_name text,
  add column if not exists billing_country text default 'DE',
  add column if not exists tax_number text,
  add column if not exists vat_id text;

create sequence if not exists public.business_customer_number_seq
  start with 20001 increment by 1 minvalue 20001 no cycle;

create or replace function app.assign_customer_number()
returns trigger
language plpgsql
as $$
begin
  if new.customer_number is null or trim(new.customer_number) = '' then
    if new.customer_type = 'business' then
      new.customer_number := nextval('public.business_customer_number_seq')::text;
    else
      new.customer_number := nextval('public.customer_number_seq')::text;
    end if;
  end if;
  return new;
end;
$$;

alter table public.products
  add column if not exists tax_rate numeric(4,2) not null default 0.07;

update public.products
   set tax_rate = 0.19
 where lower(coalesce(category, '')) in ('getränke', 'getraenke', 'drinks', 'beverages')
    or sku like 'DR-%';
update public.products
   set tax_rate = 0.07
 where lower(coalesce(category, '')) in ('snacks', 'süßwaren', 'eis', 'süsswaren')
    or sku like 'SN-%'
    or sku like 'SU-%'
    or sku like 'EIS-%';

alter table public.purchases
  add column if not exists payment_method app.payment_method not null default 'cash';

create table if not exists public.invoices (
  id                uuid primary key default gen_random_uuid(),
  purchase_id       uuid not null unique references public.purchases(id) on delete restrict,
  customer_id       uuid not null references public.customers(id) on delete restrict,
  invoice_number    text not null unique,
  issued_at         timestamptz not null default now(),
  total_net_7       numeric(12,2) not null default 0,
  total_vat_7       numeric(12,2) not null default 0,
  total_net_19      numeric(12,2) not null default 0,
  total_vat_19      numeric(12,2) not null default 0,
  total_gross       numeric(12,2) not null default 0,
  payment_method    app.payment_method not null default 'cash',
  billing_snapshot  jsonb not null default '{}'::jsonb,
  pdf_generated_at  timestamptz,
  email_sent_at     timestamptz,
  created_at        timestamptz not null default now()
);
create index if not exists idx_invoices_customer on public.invoices(customer_id, issued_at desc);

alter table public.invoices enable row level security;
drop policy if exists invoices_read on public.invoices;
create policy invoices_read on public.invoices
  for select to authenticated
  using (customer_id = auth.uid()
         or exists (select 1 from public.profiles p
                     where p.id = auth.uid()
                       and p.role in ('shareholder','system_admin')));

create sequence if not exists public.invoice_number_seq
  start with 1 increment by 1 no cycle;

-- Weitere RPCs: siehe DB-Migration 0021 (vollständige Definition im Backend).
