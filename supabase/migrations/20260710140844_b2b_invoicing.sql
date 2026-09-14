-- 1) Enums
do $$ begin
  create type app.customer_type as enum ('private', 'business');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.payment_method as enum ('cash', 'card_ec', 'card_credit', 'card_contactless', 'other');
exception when duplicate_object then null; end $$;

-- 2) customers erweitern
alter table public.customers
  add column if not exists customer_type app.customer_type not null default 'private',
  add column if not exists company_name text,
  add column if not exists billing_country text default 'DE',
  add column if not exists tax_number text,
  add column if not exists vat_id text;

-- 3) Zweite Sequence für Business-Kunden ab 20001
create sequence if not exists public.business_customer_number_seq
  start with 20001 increment by 1 minvalue 20001 no cycle;

-- assign_customer_number Trigger anpassen: prefix 2 für business
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

-- 4) products.tax_rate + Seed
alter table public.products
  add column if not exists tax_rate numeric(4,2) not null default 0.07;

-- Getränke: 19 %, Snacks/Süßwaren/Eis: 7 % (bereits Default)
update public.products
   set tax_rate = 0.19
 where lower(coalesce(category, '')) in ('getränke', 'getraenke', 'drinks', 'beverages')
    or sku like 'DR-%';
update public.products
   set tax_rate = 0.07
 where lower(coalesce(category, '')) in ('snacks', 'süßwaren', 'suessware', 'suesswaren', 'eis', 'süsswaren')
    or sku like 'SN-%'
    or sku like 'SU-%'
    or sku like 'EIS-%';

-- 5) purchases.payment_method
alter table public.purchases
  add column if not exists payment_method app.payment_method not null default 'cash';

-- 6) invoices
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

-- Rechnungsnummern-Sequence: Format R-YYYY-NNNNNN
create sequence if not exists public.invoice_number_seq
  start with 1 increment by 1 no cycle;

create or replace function public.next_invoice_number()
returns text
language plpgsql
security definer
set search_path = public, app
as $$
declare v_num bigint;
begin
  v_num := nextval('public.invoice_number_seq');
  return 'R-' || to_char(now(), 'YYYY') || '-' || lpad(v_num::text, 6, '0');
end;
$$;

-- 7) RPC: create_invoice_for_purchase (idempotent per unique constraint)
create or replace function public.create_invoice_for_purchase(p_purchase_id uuid)
returns public.invoices
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_purchase public.purchases;
  v_customer public.customers;
  v_profile  public.profiles;
  v_existing public.invoices;
  v_net_7    numeric(12,2) := 0;
  v_vat_7    numeric(12,2) := 0;
  v_net_19   numeric(12,2) := 0;
  v_vat_19   numeric(12,2) := 0;
  v_gross    numeric(12,2) := 0;
  v_snapshot jsonb;
begin
  select * into v_existing from public.invoices where purchase_id = p_purchase_id;
  if found then return v_existing; end if;

  select * into v_purchase from public.purchases where id = p_purchase_id;
  if not found then raise exception 'Kauf nicht gefunden'; end if;
  select * into v_customer from public.customers where id = v_purchase.customer_id;
  select * into v_profile  from public.profiles  where id = v_purchase.customer_id;

  if v_customer.customer_type <> 'business' then
    raise exception 'Rechnung nur für Unternehmer-Kunden erlaubt';
  end if;
  if coalesce(v_customer.billing_street,'') = ''
     or coalesce(v_customer.billing_zip,'') = ''
     or coalesce(v_customer.billing_city,'') = ''
     or coalesce(v_customer.tax_number,'') = '' then
    raise exception 'Stammdaten unvollständig (Anschrift + Steuernummer erforderlich)';
  end if;

  -- Positionen aggregieren nach Steuersatz
  select
    coalesce(sum(case when p.tax_rate = 0.07 then pi.quantity * pi.unit_price end), 0),
    coalesce(sum(case when p.tax_rate = 0.19 then pi.quantity * pi.unit_price end), 0)
  into v_net_7, v_net_19
  from public.purchase_items pi
  left join public.products p on p.id = pi.product_id
  where pi.purchase_id = p_purchase_id;

  -- Fallback: keine purchase_items → alles als 7 % annehmen
  if v_net_7 + v_net_19 = 0 then
    v_net_7 := round(v_purchase.total_gross / 1.07, 2);
  end if;

  v_vat_7  := round(v_net_7  * 0.07, 2);
  v_vat_19 := round(v_net_19 * 0.19, 2);
  v_gross  := v_net_7 + v_vat_7 + v_net_19 + v_vat_19;

  v_snapshot := jsonb_build_object(
    'company_name', v_customer.company_name,
    'full_name',    v_profile.full_name,
    'email',        v_profile.email,
    'street',       v_customer.billing_street,
    'zip',          v_customer.billing_zip,
    'city',         v_customer.billing_city,
    'country',      coalesce(v_customer.billing_country, 'DE'),
    'tax_number',   v_customer.tax_number,
    'vat_id',       v_customer.vat_id,
    'issuer', jsonb_build_object(
      'name',       'Bördesnack24 GbR (Pia & Philipp Blume)',
      'street',     'Sülldorfer Str. 3A',
      'zip',        '39171',
      'city',       'Sülzetal OT Osterweddingen',
      'country',    'DE',
      'tax_number', '102/178/01635',
      'email',      'boerdesnack24@gmail.com'
    )
  );

  insert into public.invoices(
    purchase_id, customer_id, invoice_number,
    total_net_7, total_vat_7, total_net_19, total_vat_19, total_gross,
    payment_method, billing_snapshot, email_sent_at
  ) values (
    p_purchase_id, v_purchase.customer_id, public.next_invoice_number(),
    v_net_7, v_vat_7, v_net_19, v_vat_19, v_gross,
    v_purchase.payment_method, v_snapshot, now()
  )
  returning * into v_existing;
  return v_existing;
end;
$$;

-- Automatisch Rechnung erzeugen, wenn ein Business-Kunde einkauft.
create or replace function app.trg_auto_invoice()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
declare v_ctype app.customer_type;
begin
  select customer_type into v_ctype from public.customers where id = new.customer_id;
  if v_ctype = 'business' then
    begin
      perform public.create_invoice_for_purchase(new.id);
    exception when others then
      -- Stammdaten unvollständig o.ä.: Rechnung wird später manuell nachgezogen.
      null;
    end;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_purchase_auto_invoice on public.purchases;
create trigger trg_purchase_auto_invoice
  after insert on public.purchases
  for each row execute function app.trg_auto_invoice();

-- 8) RPC: my_invoices — Rechnungen des angemeldeten Kunden
create or replace function public.my_invoices()
returns setof public.invoices
language sql
security definer
set search_path = public, app
as $$
  select * from public.invoices
   where customer_id = auth.uid()
   order by issued_at desc
$$;

-- 9) RPC: business_customers_csv — CSV im sevDesk-Import-Format
-- Spalten laut sevDesk-CSV (Kunden-Import): Name, Zusatzname/Adresszusatz,
-- Anrede, Titel, Vorname, Nachname, E-Mail, Telefon, Steuernummer, USt-IdNr,
-- Straße, PLZ, Ort, Land, Kundennummer, Kategorie.
create or replace function public.business_customers_csv()
returns text
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_header text := 'customer_number;company_name;full_name;email;street;zip;city;country;tax_number;vat_id';
  v_rows text;
  v_role app.role_key;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('shareholder','system_admin') then
    raise exception 'Nicht autorisiert';
  end if;

  select string_agg(
    format('%s;%s;%s;%s;%s;%s;%s;%s;%s;%s',
      c.customer_number,
      coalesce(c.company_name,''),
      coalesce(p.full_name,''),
      coalesce(p.email,''),
      coalesce(c.billing_street,''),
      coalesce(c.billing_zip,''),
      coalesce(c.billing_city,''),
      coalesce(c.billing_country,'DE'),
      coalesce(c.tax_number,''),
      coalesce(c.vat_id,'')
    ), E'\n')
    into v_rows
  from public.customers c
  join public.profiles p on p.id = c.id
  where c.customer_type = 'business';

  return v_header || E'\n' || coalesce(v_rows, '');
end;
$$;

-- 10) handle_new_user erweitern: customer_type + business Felder
create or replace function app.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_meta jsonb := new.raw_user_meta_data;
  v_type app.customer_type := coalesce((v_meta->>'customer_type')::app.customer_type, 'private');
begin
  insert into public.profiles (id, email, full_name, birth_date, role, status, activated_at)
  values (
    new.id,
    new.email,
    coalesce(v_meta->>'full_name', null),
    case when v_meta ? 'birth_date' and length(v_meta->>'birth_date') = 10
         then (v_meta->>'birth_date')::date else null end,
    coalesce((v_meta->>'role')::app.role_key, 'customer'),
    (case when coalesce(v_meta->>'role','customer') = 'customer'
         then 'active' else 'invited' end)::app.profile_status,
    case when coalesce(v_meta->>'role','customer') = 'customer'
         then now() else null end
  )
  on conflict (id) do nothing;

  -- Bei Kunden zusätzlich customers-Felder aus Metadata befüllen
  if coalesce(v_meta->>'role','customer') = 'customer' then
    insert into public.customers (
      id, customer_type, company_name,
      billing_street, billing_zip, billing_city, billing_country,
      tax_number, vat_id
    ) values (
      new.id, v_type,
      nullif(v_meta->>'company_name',''),
      nullif(v_meta->>'billing_street',''),
      nullif(v_meta->>'billing_zip',''),
      nullif(v_meta->>'billing_city',''),
      coalesce(nullif(v_meta->>'billing_country',''), 'DE'),
      nullif(v_meta->>'tax_number',''),
      nullif(v_meta->>'vat_id','')
    )
    on conflict (id) do update
      set customer_type   = excluded.customer_type,
          company_name    = excluded.company_name,
          billing_street  = excluded.billing_street,
          billing_zip     = excluded.billing_zip,
          billing_city    = excluded.billing_city,
          billing_country = excluded.billing_country,
          tax_number      = excluded.tax_number,
          vat_id          = excluded.vat_id;
  end if;

  return new;
end;
$$;

grant execute on function public.my_invoices() to authenticated;
grant execute on function public.create_invoice_for_purchase(uuid) to authenticated;
grant execute on function public.business_customers_csv() to authenticated;
grant execute on function public.next_invoice_number() to authenticated;
