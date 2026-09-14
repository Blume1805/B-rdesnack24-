-- ============================================================================
-- 0007 — HACCP-/Betriebsprotokolle (revisionssicher, append-only)
-- ----------------------------------------------------------------------------
-- Temperatur, Reinigung, Vernichtung, Befüllung, Wartung, Geldentnahme,
-- digitale Unterschriften. Keine UPDATE/DELETE-Policies (Unveränderlichkeit).
-- Befüllung/Vernichtung schreiben automatisch Inventur-Bewegungen fort.
-- ============================================================================

-- Zusätzliche Permission für Geldentnahme.
insert into public.permissions(key, area, description) values
  ('cash.collect', 'haccp', 'Geldentnahme erfassen')
on conflict (key) do nothing;
insert into public.role_permissions(role_key, permission_key)
  values ('shareholder','cash.collect') on conflict do nothing;

do $$ begin
  create type app.disposal_reason as enum ('mhd', 'damage', 'hygiene', 'other');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.cleaning_type as enum ('exterior', 'interior', 'full');
exception when duplicate_object then null; end $$;

-- Hilfsmakro-artige Standardspalten werden je Tabelle ausgeschrieben.

-- ── Temperaturkontrolle (CCP 2: ≤ 7 °C) ─────────────────────────────────────
create table if not exists public.temperature_logs (
  id            uuid primary key default gen_random_uuid(),
  machine_id    uuid not null references public.machines(id) on delete restrict,
  measured_at   timestamptz not null default now(),
  temperature_c numeric(4,1) not null,
  within_limit  boolean generated always as (temperature_c <= 7.0) stored,
  corrective_action text,
  photo_path    text,
  recorded_by   uuid,
  created_at    timestamptz not null default now()
);
create index if not exists idx_temp_machine on public.temperature_logs(machine_id, measured_at desc);

-- ── Reinigungsprotokoll (Anlage E) ──────────────────────────────────────────
create table if not exists public.cleaning_logs (
  id           uuid primary key default gen_random_uuid(),
  machine_id   uuid not null references public.machines(id) on delete restrict,
  cleaned_at   timestamptz not null default now(),
  cleaning_type app.cleaning_type not null,
  agent        text,                       -- Reinigungs-/Desinfektionsmittel
  notes        text,
  photo_path   text,
  signature_path text,
  recorded_by  uuid,
  created_at   timestamptz not null default now()
);
create index if not exists idx_clean_machine on public.cleaning_logs(machine_id, cleaned_at desc);

-- ── Vernichtungsprotokoll (Anlage I, § 3 Abs. 1b UStG) ──────────────────────
create table if not exists public.disposal_logs (
  id            uuid primary key default gen_random_uuid(),
  machine_id    uuid references public.machines(id) on delete restrict,
  product_id    uuid references public.products(id) on delete restrict,
  product_label text,                       -- Freitext, falls kein Stammprodukt
  quantity      integer not null check (quantity > 0),
  reason        app.disposal_reason not null,
  mhd_date      date,
  disposed_at   timestamptz not null default now(),
  photo_path    text,
  recorded_by   uuid,
  created_at    timestamptz not null default now()
);
create index if not exists idx_disp_machine on public.disposal_logs(machine_id, disposed_at desc);

-- ── Befüllungsprotokoll (Anlage D) ──────────────────────────────────────────
create table if not exists public.filling_logs (
  id            uuid primary key default gen_random_uuid(),
  machine_id    uuid not null references public.machines(id) on delete restrict,
  product_id    uuid not null references public.products(id) on delete restrict,
  quantity      integer not null check (quantity > 0),
  mhd_checked   boolean not null default true,
  removed_spoiled integer not null default 0,
  filled_at     timestamptz not null default now(),
  recorded_by   uuid,
  created_at    timestamptz not null default now()
);
create index if not exists idx_fill_machine on public.filling_logs(machine_id, filled_at desc);

-- ── Wartungsprotokoll (Anlage H) ────────────────────────────────────────────
create table if not exists public.maintenance_logs (
  id            uuid primary key default gen_random_uuid(),
  machine_id    uuid not null references public.machines(id) on delete restrict,
  reported_at   timestamptz not null default now(),
  issue         text not null,
  action        text,
  performed_by  text,                       -- Fachbetrieb / Name
  cost_amount   numeric(12,2),
  resolved      boolean not null default false,
  recorded_by   uuid,
  created_at    timestamptz not null default now()
);
create index if not exists idx_maint_machine on public.maintenance_logs(machine_id, reported_at desc);

-- ── Geldentnahmeprotokoll (Anlage G, § 146 AO) ──────────────────────────────
create table if not exists public.cash_collection_logs (
  id            uuid primary key default gen_random_uuid(),
  machine_id    uuid not null references public.machines(id) on delete restrict,
  collected_at  timestamptz not null default now(),
  amount_gross  numeric(12,2) not null,
  change_amount numeric(12,2) not null default 0,
  net_amount    numeric(12,2) generated always as (amount_gross - change_amount) stored,
  recorded_by   uuid,
  created_at    timestamptz not null default now()
);
create index if not exists idx_cash_machine on public.cash_collection_logs(machine_id, collected_at desc);

-- ── Digitale Unterschriften (generisch) ─────────────────────────────────────
create table if not exists public.signatures (
  id           uuid primary key default gen_random_uuid(),
  entity_type  text not null,               -- z. B. 'cleaning_logs'
  entity_id    uuid not null,
  signer_id    uuid,
  signer_name  text,
  image_path   text not null,               -- Storage-Pfad der Signatur
  signed_at    timestamptz not null default now()
);
create index if not exists idx_sig_entity on public.signatures(entity_type, entity_id);

-- ============================================================================
-- Inventur-Kopplung: Befüllung (+) und Vernichtung (−) schreiben Bewegungen
-- ============================================================================
create or replace function app.filling_to_movement()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.inventory_movements
    (machine_id, product_id, type, quantity_delta, reason, source, source_ref, occurred_at, created_by)
  values
    (new.machine_id, new.product_id, 'refill', new.quantity, 'Befüllung',
     'inventory', 'fill:'||new.id::text, new.filled_at, new.recorded_by);
  return new;
end;
$$;

drop trigger if exists trg_filling_movement on public.filling_logs;
create trigger trg_filling_movement after insert on public.filling_logs
  for each row execute function app.filling_to_movement();

create or replace function app.disposal_to_movement()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  if new.product_id is not null then
    insert into public.inventory_movements
      (machine_id, product_id, type, quantity_delta, reason, source, source_ref, occurred_at, created_by)
    values
      (new.machine_id, new.product_id, 'disposal', -new.quantity, new.reason::text,
       'disposal', 'disp:'||new.id::text, new.disposed_at, new.recorded_by);
  end if;
  return new;
end;
$$;

drop trigger if exists trg_disposal_movement on public.disposal_logs;
create trigger trg_disposal_movement after insert on public.disposal_logs
  for each row execute function app.disposal_to_movement();

-- Audit für alle Protokolle
select app.enable_audit('public.temperature_logs');
select app.enable_audit('public.cleaning_logs');
select app.enable_audit('public.disposal_logs');
select app.enable_audit('public.filling_logs');
select app.enable_audit('public.maintenance_logs');
select app.enable_audit('public.cash_collection_logs');
select app.enable_audit('public.signatures');

-- ============================================================================
-- RLS — Lesen mit passender Permission; Einfügen mit passender Permission;
--        KEIN Update/Delete (Revisionssicherheit).
-- ============================================================================
do $$
declare
  t record;
begin
  for t in
    select * from (values
      ('temperature_logs','haccp.temperature'),
      ('cleaning_logs','haccp.cleaning'),
      ('disposal_logs','haccp.disposal'),
      ('filling_logs','haccp.fill'),
      ('maintenance_logs','haccp.maintenance'),
      ('cash_collection_logs','cash.collect')
    ) as x(tbl, perm)
  loop
    execute format('alter table public.%I enable row level security', t.tbl);
    execute format('drop policy if exists %I_read on public.%I', t.tbl, t.tbl);
    execute format(
      'create policy %I_read on public.%I for select to authenticated
         using (public.is_admin() or public.auth_has_permission(%L))',
      t.tbl, t.tbl, t.perm);
    execute format('drop policy if exists %I_insert on public.%I', t.tbl, t.tbl);
    execute format(
      'create policy %I_insert on public.%I for insert to authenticated
         with check (public.is_admin() or public.auth_has_permission(%L))',
      t.tbl, t.tbl, t.perm);
  end loop;
end $$;

-- signatures: lesen/schreiben für interne Nutzer mit irgendeinem HACCP-Recht.
alter table public.signatures enable row level security;
drop policy if exists sig_read on public.signatures;
create policy sig_read on public.signatures for select to authenticated
  using (
    public.is_admin()
    or public.auth_has_permission('haccp.cleaning')
    or public.auth_has_permission('documents.view')
  );
drop policy if exists sig_insert on public.signatures;
create policy sig_insert on public.signatures for insert to authenticated
  with check (
    public.is_admin()
    or public.auth_has_permission('haccp.cleaning')
    or public.auth_has_permission('documents.edit')
  );
