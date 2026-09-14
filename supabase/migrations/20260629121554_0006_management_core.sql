do $$ begin
  create type app.machine_type as enum ('snack', 'drink', 'combi', 'cooled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.entity_status as enum ('active', 'inactive', 'archived');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.movement_type as enum ('refill', 'sale', 'disposal', 'correction', 'audit');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.movement_source as enum ('manual', 'nayax', 'inventory', 'disposal');
exception when duplicate_object then null; end $$;

create table if not exists public.machines (
  id            uuid primary key default gen_random_uuid(),
  code          text not null unique,
  name          text not null,
  type          app.machine_type not null default 'snack',
  is_cooled     boolean not null default false,
  location_name text,
  street        text, zip text, city text,
  lat           double precision, lng double precision,
  nayax_terminal_id text unique,
  status        app.entity_status not null default 'active',
  created_at    timestamptz not null default now(),
  created_by    uuid,
  updated_at    timestamptz not null default now(),
  updated_by    uuid,
  archived_at   timestamptz, deleted_at timestamptz
);
create index if not exists idx_machines_status on public.machines(status) where deleted_at is null;
drop trigger if exists trg_machines_updated_at on public.machines;
create trigger trg_machines_updated_at before update on public.machines
  for each row execute function app.set_updated_at();

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  sku text unique, name text not null, category text, ean text,
  tax_rate numeric(4,1) not null default 19.0,
  status app.entity_status not null default 'active',
  created_at timestamptz not null default now(), created_by uuid,
  updated_at timestamptz not null default now(), updated_by uuid,
  deleted_at timestamptz
);
drop trigger if exists trg_products_updated_at on public.products;
create trigger trg_products_updated_at before update on public.products
  for each row execute function app.set_updated_at();

create table if not exists public.inventory (
  id uuid primary key default gen_random_uuid(),
  machine_id uuid not null references public.machines(id) on delete restrict,
  product_id uuid not null references public.products(id) on delete restrict,
  slot_code text,
  quantity integer not null default 0 check (quantity >= 0),
  capacity integer, par_level integer not null default 2,
  updated_at timestamptz not null default now(), updated_by uuid,
  unique (machine_id, product_id)
);
create index if not exists idx_inventory_machine on public.inventory(machine_id);
drop trigger if exists trg_inventory_updated_at on public.inventory;
create trigger trg_inventory_updated_at before update on public.inventory
  for each row execute function app.set_updated_at();

create table if not exists public.inventory_movements (
  id uuid primary key default gen_random_uuid(),
  machine_id uuid not null references public.machines(id) on delete restrict,
  product_id uuid not null references public.products(id) on delete restrict,
  type app.movement_type not null,
  quantity_delta integer not null, reason text,
  source app.movement_source not null default 'manual', source_ref text,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now(), created_by uuid
);
create index if not exists idx_moves_machine on public.inventory_movements(machine_id, occurred_at desc);
create unique index if not exists uq_moves_source on public.inventory_movements(source, source_ref)
  where source_ref is not null;

create or replace function app.apply_inventory_movement()
returns trigger language plpgsql security definer
set search_path = public, app
as $$
begin
  insert into public.inventory (machine_id, product_id, quantity)
  values (new.machine_id, new.product_id, greatest(0, new.quantity_delta))
  on conflict (machine_id, product_id) do update
    set quantity = greatest(0, inventory.quantity + new.quantity_delta),
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_apply_movement on public.inventory_movements;
create trigger trg_apply_movement after insert on public.inventory_movements
  for each row execute function app.apply_inventory_movement();

create table if not exists public.nayax_sales (
  id uuid primary key default gen_random_uuid(),
  terminal_id text, machine_id uuid references public.machines(id),
  product_id uuid references public.products(id), product_ref text,
  quantity integer not null default 1, amount_gross numeric(12,2),
  sold_at timestamptz not null, source_ref text unique, raw jsonb,
  created_at timestamptz not null default now()
);
create index if not exists idx_nayax_sold_at on public.nayax_sales(sold_at desc);

create or replace view public.machine_stock as
select i.machine_id, m.code as machine_code, m.name as machine_name,
       i.product_id, p.name as product_name, i.quantity, i.par_level,
       case when i.quantity <= 0 then 'out'
            when i.quantity <= i.par_level then 'low'
            else 'available' end as availability
from public.inventory i
join public.machines m on m.id = i.machine_id
join public.products p on p.id = i.product_id
where m.deleted_at is null and p.deleted_at is null;

select app.enable_audit('public.machines');
select app.enable_audit('public.products');
select app.enable_audit('public.inventory_movements');

alter table public.machines            enable row level security;
alter table public.products            enable row level security;
alter table public.inventory           enable row level security;
alter table public.inventory_movements enable row level security;
alter table public.nayax_sales         enable row level security;

drop policy if exists machines_read on public.machines;
create policy machines_read on public.machines for select to authenticated using (deleted_at is null);
drop policy if exists machines_write on public.machines;
create policy machines_write on public.machines for all to authenticated
  using (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

drop policy if exists products_read on public.products;
create policy products_read on public.products for select to authenticated using (deleted_at is null);
drop policy if exists products_write on public.products;
create policy products_write on public.products for all to authenticated
  using (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

drop policy if exists inventory_read on public.inventory;
create policy inventory_read on public.inventory for select to authenticated using (true);
drop policy if exists inventory_write on public.inventory;
create policy inventory_write on public.inventory for all to authenticated
  using (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

drop policy if exists moves_read on public.inventory_movements;
create policy moves_read on public.inventory_movements for select to authenticated
  using (public.is_admin() or public.auth_has_permission('inventory.view') or public.auth_has_permission('inventory.edit'));
drop policy if exists moves_insert on public.inventory_movements;
create policy moves_insert on public.inventory_movements for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

drop policy if exists nayax_read on public.nayax_sales;
create policy nayax_read on public.nayax_sales for select to authenticated
  using (public.is_admin() or public.auth_has_permission('inventory.view'));
