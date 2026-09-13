-- 0031 — IoT / Telemetrie-Ingestion-Layer
-- Anbieterunabhängige Datenlandung mit vollständigem Audit-Trail.
-- Vollständige Definition siehe Backend-Migration; hier kompakt gespiegelt.

do $$ begin
  create type app.telemetry_event_type as enum (
    'sale','dispense_ok','dispense_fail','refill','disposal',
    'price_change','slot_config','heartbeat','temperature','door','alarm',
    'cash_collection'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.telemetry_event_status as enum (
    'received','processed','duplicate','rejected'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.telemetry_adapter as enum
    ('generic','clevermetrics','nayax','custom');
exception when duplicate_object then null; end $$;

create table if not exists public.telemetry_providers (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  adapter app.telemetry_adapter not null default 'generic',
  hmac_secret text not null,
  time_skew_max_s int not null default 300,
  is_active boolean not null default true,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.machine_devices (
  id uuid primary key default gen_random_uuid(),
  machine_id uuid not null references public.machines(id) on delete cascade,
  provider_id uuid not null references public.telemetry_providers(id) on delete restrict,
  external_device_id text not null,
  firmware_version text,
  last_seen_at timestamptz,
  last_heartbeat_at timestamptz,
  is_active boolean not null default true,
  installed_at timestamptz not null default now(),
  notes text,
  unique (provider_id, external_device_id)
);

create table if not exists public.machine_slots (
  id uuid primary key default gen_random_uuid(),
  machine_id uuid not null references public.machines(id) on delete cascade,
  slot_code text not null,
  product_id uuid references public.products(id) on delete restrict,
  unit_price_net numeric(12,2),
  capacity integer not null default 12,
  updated_at timestamptz not null default now(),
  unique (machine_id, slot_code)
);

create table if not exists public.machine_slots_history (
  id uuid primary key default gen_random_uuid(),
  machine_id uuid not null references public.machines(id) on delete cascade,
  slot_code text not null,
  product_id uuid references public.products(id),
  unit_price_net numeric(12,2),
  valid_from timestamptz not null default now(),
  valid_to timestamptz,
  reason text,
  created_at timestamptz not null default now()
);

create table if not exists public.machine_telemetry_events (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid not null references public.telemetry_providers(id) on delete restrict,
  device_id uuid references public.machine_devices(id) on delete set null,
  machine_id uuid references public.machines(id) on delete set null,
  slot_code text,
  event_type app.telemetry_event_type not null,
  status app.telemetry_event_status not null default 'received',
  event_uid text not null,
  occurred_at timestamptz not null,
  received_at timestamptz not null default now(),
  processed_at timestamptz,
  quantity integer,
  unit_price_net numeric(12,2),
  product_id_hint uuid references public.products(id),
  dispense_confirmed boolean,
  temperature_c numeric(5,2),
  payload_raw jsonb not null,
  payload_norm jsonb,
  error_reason text,
  unique (provider_id, event_uid)
);

create table if not exists public.machine_health (
  machine_id uuid primary key references public.machines(id) on delete cascade,
  last_seen_at timestamptz,
  last_heartbeat_at timestamptz,
  temperature_c numeric(5,2),
  door_state text,
  cash_balance_net numeric(12,2),
  active_alarms jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

-- RLS + Trigger + RPCs: siehe Backend-Migration.
