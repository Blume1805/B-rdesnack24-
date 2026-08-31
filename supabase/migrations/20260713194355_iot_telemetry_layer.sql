-- 0031 — IoT / Telemetrie-Ingestion-Layer
-- anbieterunabhängige Datenlandung mit vollständigem Audit-Trail.

-- Enums --------------------------------------------------------------
do $$ begin
  create type app.telemetry_event_type as enum (
    'sale',              -- Kaufvorgang (mit Payment)
    'dispense_ok',       -- Ware wurde ausgeworfen (bestätigt)
    'dispense_fail',     -- Kartenzahlung ok, Auswurf fehlgeschlagen
    'refill',            -- Nachfüllung (Menge+ je Slot)
    'disposal',          -- Vernichtung / Entnahme
    'price_change',      -- Preisänderung im Slot
    'slot_config',       -- Slot bekommt anderes Produkt
    'heartbeat',         -- Lebenszeichen (kein Business-Effekt)
    'temperature',       -- Kühlung / Temp-Messwert
    'door',              -- Türe geöffnet/geschlossen
    'alarm',             -- Fehler / Wartungshinweis
    'cash_collection'    -- Geldentnahme (§146 AO)
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.telemetry_event_status as enum (
    'received',    -- Roh eingegangen, noch nicht verarbeitet
    'processed',   -- Regelverarbeitung erfolgreich (Bestand/Alarm gebucht)
    'duplicate',   -- Idempotenz: Event-ID kam schon
    'rejected'     -- Payload ungültig oder fachliche Ablehnung
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.telemetry_adapter as enum (
    'generic',      -- Bereits im kanonischen Format (unser Schema)
    'clevermetrics',
    'nayax',
    'custom'
  );
exception when duplicate_object then null; end $$;


-- Telemetrie-Anbieter --------------------------------------------------
create table if not exists public.telemetry_providers (
  id              uuid primary key default gen_random_uuid(),
  name            text not null unique,           -- z. B. "CleverMetrics-Prod"
  adapter         app.telemetry_adapter not null default 'generic',
  hmac_secret     text not null,                  -- Shared Secret für Webhook
  time_skew_max_s int not null default 300,       -- Uhr-Drift-Toleranz (5 Min)
  is_active       boolean not null default true,
  notes           text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
alter table public.telemetry_providers enable row level security;
drop policy if exists tp_ro on public.telemetry_providers;
create policy tp_ro on public.telemetry_providers
  for select to authenticated using (
    exists (select 1 from public.profiles p where p.id = auth.uid()
              and p.role in ('system_admin','shareholder')));
drop policy if exists tp_rw on public.telemetry_providers;
create policy tp_rw on public.telemetry_providers
  for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid()
                   and p.role = 'system_admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid()
                   and p.role = 'system_admin'));


-- Physisches IoT-Gerät im Automaten ---------------------------------
create table if not exists public.machine_devices (
  id                  uuid primary key default gen_random_uuid(),
  machine_id          uuid not null references public.machines(id) on delete cascade,
  provider_id         uuid not null references public.telemetry_providers(id) on delete restrict,
  external_device_id  text not null,   -- Gateway-Serien-Nr. beim Anbieter
  firmware_version    text,
  last_seen_at        timestamptz,
  last_heartbeat_at   timestamptz,
  is_active           boolean not null default true,
  installed_at        timestamptz not null default now(),
  notes               text,
  unique (provider_id, external_device_id)
);
create index if not exists idx_md_machine on public.machine_devices(machine_id);
alter table public.machine_devices enable row level security;
drop policy if exists md_ro on public.machine_devices;
create policy md_ro on public.machine_devices
  for select to authenticated using (
    exists (select 1 from public.profiles p where p.id = auth.uid()
              and p.role in ('system_admin','shareholder','employee')));
drop policy if exists md_rw on public.machine_devices;
create policy md_rw on public.machine_devices
  for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid()
                   and p.role in ('system_admin','shareholder')))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid()
                   and p.role in ('system_admin','shareholder')));


-- Slot ↔ Produkt-Zuordnung (aktueller Stand) -------------------------
create table if not exists public.machine_slots (
  id                uuid primary key default gen_random_uuid(),
  machine_id        uuid not null references public.machines(id) on delete cascade,
  slot_code         text not null,      -- z. B. "A3"
  product_id        uuid references public.products(id) on delete restrict,
  unit_price_net    numeric(12,2),      -- Verkaufspreis im Slot
  capacity          integer not null default 12,
  updated_at        timestamptz not null default now(),
  unique (machine_id, slot_code)
);
alter table public.machine_slots enable row level security;
drop policy if exists ms_ro on public.machine_slots;
create policy ms_ro on public.machine_slots
  for select to authenticated using (
    exists (select 1 from public.profiles p where p.id = auth.uid()
              and p.role in ('system_admin','shareholder','employee')));
drop policy if exists ms_rw on public.machine_slots;
create policy ms_rw on public.machine_slots
  for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid()
                   and p.role in ('system_admin','shareholder')))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid()
                   and p.role in ('system_admin','shareholder')));


-- Historie: welcher Slot hatte wann welches Produkt/welchen Preis --
-- (append-only, wichtig für die zeitrichtige Zuordnung von Verkäufen).
create table if not exists public.machine_slots_history (
  id                uuid primary key default gen_random_uuid(),
  machine_id        uuid not null references public.machines(id) on delete cascade,
  slot_code         text not null,
  product_id        uuid references public.products(id),
  unit_price_net    numeric(12,2),
  valid_from        timestamptz not null default now(),
  valid_to          timestamptz,
  reason            text,
  created_at        timestamptz not null default now()
);
create index if not exists idx_msh_lookup on public.machine_slots_history(
  machine_id, slot_code, valid_from);
alter table public.machine_slots_history enable row level security;
drop policy if exists msh_ro on public.machine_slots_history;
create policy msh_ro on public.machine_slots_history
  for select to authenticated using (
    exists (select 1 from public.profiles p where p.id = auth.uid()
              and p.role in ('system_admin','shareholder','employee')));

-- Trigger: jede Änderung an machine_slots wird in History gespiegelt
create or replace function app.snapshot_slot_history()
returns trigger language plpgsql as $$
begin
  -- alte Zeile schließen
  update public.machine_slots_history
     set valid_to = now()
   where machine_id = old.machine_id
     and slot_code  = old.slot_code
     and valid_to is null;
  -- neue Zeile öffnen (falls Update)
  insert into public.machine_slots_history
    (machine_id, slot_code, product_id, unit_price_net, valid_from, reason)
  values
    (new.machine_id, new.slot_code, new.product_id, new.unit_price_net,
     now(), 'update');
  return new;
end $$;
drop trigger if exists trg_ms_history on public.machine_slots;
create trigger trg_ms_history
  after update of product_id, unit_price_net on public.machine_slots
  for each row when (old.product_id is distinct from new.product_id
                  or old.unit_price_net is distinct from new.unit_price_net)
  execute function app.snapshot_slot_history();

create or replace function app.snapshot_slot_insert()
returns trigger language plpgsql as $$
begin
  insert into public.machine_slots_history
    (machine_id, slot_code, product_id, unit_price_net, valid_from, reason)
  values (new.machine_id, new.slot_code, new.product_id, new.unit_price_net,
          now(), 'initial');
  return new;
end $$;
drop trigger if exists trg_ms_history_ins on public.machine_slots;
create trigger trg_ms_history_ins
  after insert on public.machine_slots
  for each row execute function app.snapshot_slot_insert();


-- Rohes Event-Log (append-only, mit Idempotenz-Key) -----------------
create table if not exists public.machine_telemetry_events (
  id                 uuid primary key default gen_random_uuid(),
  provider_id        uuid not null references public.telemetry_providers(id) on delete restrict,
  device_id          uuid references public.machine_devices(id) on delete set null,
  machine_id         uuid references public.machines(id) on delete set null,
  slot_code          text,
  event_type         app.telemetry_event_type not null,
  status             app.telemetry_event_status not null default 'received',
  event_uid          text not null,     -- Anbieter-Event-ID (Idempotenz)
  occurred_at        timestamptz not null,   -- Automat/Anbieter-Uhr
  received_at        timestamptz not null default now(),  -- Server-Uhr
  processed_at       timestamptz,
  quantity           integer,
  unit_price_net     numeric(12,2),
  product_id_hint    uuid references public.products(id),
  dispense_confirmed boolean,           -- nur bei sale/dispense_* relevant
  temperature_c      numeric(5,2),
  payload_raw        jsonb not null,    -- Original 1:1 (Audit)
  payload_norm       jsonb,             -- Kanonisch normalisiert
  error_reason       text,
  unique (provider_id, event_uid)
);
create index if not exists idx_mte_machine on public.machine_telemetry_events(machine_id, occurred_at desc);
create index if not exists idx_mte_status on public.machine_telemetry_events(status, received_at desc);
create index if not exists idx_mte_type on public.machine_telemetry_events(event_type, occurred_at desc);
alter table public.machine_telemetry_events enable row level security;
drop policy if exists mte_ro on public.machine_telemetry_events;
create policy mte_ro on public.machine_telemetry_events
  for select to authenticated using (
    exists (select 1 from public.profiles p where p.id = auth.uid()
              and p.role in ('system_admin','shareholder')));


-- Automat-Gesundheitszustand (aktueller Snapshot) --------------------
create table if not exists public.machine_health (
  machine_id         uuid primary key references public.machines(id) on delete cascade,
  last_seen_at       timestamptz,
  last_heartbeat_at  timestamptz,
  temperature_c      numeric(5,2),
  door_state         text,             -- 'open' / 'closed' / 'unknown'
  cash_balance_net   numeric(12,2),
  active_alarms      jsonb not null default '[]'::jsonb,
  updated_at         timestamptz not null default now()
);
alter table public.machine_health enable row level security;
drop policy if exists mh_ro on public.machine_health;
create policy mh_ro on public.machine_health
  for select to authenticated using (
    exists (select 1 from public.profiles p where p.id = auth.uid()
              and p.role in ('system_admin','shareholder','employee')));


-- Regel-Trigger: verarbeitetes Event → passende Inventur-Bewegung ---
-- (nur wenn status='processed' und Business-relevant).
create or replace function app.telemetry_to_inventory()
returns trigger language plpgsql
security definer set search_path=public,app as $$
declare v_prod uuid;
begin
  -- Nur verarbeitete Events → Buchung
  if new.status <> 'processed' then return new; end if;

  -- Slot→Produkt-Auflösung: erst hint, dann history zum occurred_at
  v_prod := new.product_id_hint;
  if v_prod is null and new.machine_id is not null and new.slot_code is not null then
    select h.product_id
      into v_prod
      from public.machine_slots_history h
     where h.machine_id = new.machine_id
       and h.slot_code  = new.slot_code
       and h.valid_from <= new.occurred_at
       and (h.valid_to is null or h.valid_to > new.occurred_at)
     order by h.valid_from desc
     limit 1;
  end if;

  if v_prod is null or new.machine_id is null then
    return new;  -- ohne Produktzuordnung nichts buchen
  end if;

  -- Sale/Dispense: NUR wenn Auswurf bestätigt → Bestand mindern
  if new.event_type in ('sale','dispense_ok')
     and coalesce(new.dispense_confirmed, false) = true
     and coalesce(new.quantity, 1) > 0 then
    insert into public.inventory_movements
      (machine_id, product_id, type, quantity_delta, reason,
       source, source_ref, occurred_at, created_by)
    values
      (new.machine_id, v_prod, 'sale', -coalesce(new.quantity,1),
       'IoT-Verkauf', 'iot', 'telemetry:'||new.id::text,
       new.occurred_at, null);

  elsif new.event_type = 'refill' and coalesce(new.quantity,0) > 0 then
    insert into public.inventory_movements
      (machine_id, product_id, type, quantity_delta, reason,
       source, source_ref, occurred_at, created_by,
       unit_cost, invoice_date, lot_expiry)
    values
      (new.machine_id, v_prod, 'refill', new.quantity,
       'IoT-Nachfüllung', 'iot', 'telemetry:'||new.id::text,
       new.occurred_at, null,
       new.unit_price_net, new.occurred_at::date, null);

  elsif new.event_type = 'disposal' and coalesce(new.quantity,0) > 0 then
    insert into public.inventory_movements
      (machine_id, product_id, type, quantity_delta, reason,
       source, source_ref, occurred_at, created_by)
    values
      (new.machine_id, v_prod, 'disposal', -new.quantity,
       coalesce(new.error_reason,'IoT-Vernichtung'),
       'iot', 'telemetry:'||new.id::text,
       new.occurred_at, null);
  end if;

  return new;
end $$;

drop trigger if exists trg_telemetry_book on public.machine_telemetry_events;
create trigger trg_telemetry_book
  after insert or update of status on public.machine_telemetry_events
  for each row execute function app.telemetry_to_inventory();


-- Regel-Trigger: heartbeat/temperature aktualisieren machine_health --
create or replace function app.telemetry_to_health()
returns trigger language plpgsql
security definer set search_path=public,app as $$
begin
  if new.status <> 'processed' or new.machine_id is null then return new; end if;

  insert into public.machine_health (machine_id, last_seen_at, updated_at)
       values (new.machine_id, new.occurred_at, now())
  on conflict (machine_id) do update
     set last_seen_at = greatest(machine_health.last_seen_at, excluded.last_seen_at),
         updated_at = now();

  if new.event_type = 'heartbeat' then
    update public.machine_health
       set last_heartbeat_at = new.occurred_at,
           updated_at = now()
     where machine_id = new.machine_id;
  elsif new.event_type = 'temperature' and new.temperature_c is not null then
    update public.machine_health
       set temperature_c = new.temperature_c,
           updated_at = now()
     where machine_id = new.machine_id;
  elsif new.event_type = 'door' then
    update public.machine_health
       set door_state = coalesce(new.payload_norm->>'door_state','unknown'),
           updated_at = now()
     where machine_id = new.machine_id;
  elsif new.event_type = 'alarm' then
    update public.machine_health
       set active_alarms = coalesce(active_alarms,'[]'::jsonb)
                           || jsonb_build_object(
                                'ts', new.occurred_at,
                                'reason', coalesce(new.error_reason,'unbekannt'),
                                'event_id', new.id
                              ),
           updated_at = now()
     where machine_id = new.machine_id;
  end if;

  return new;
end $$;

drop trigger if exists trg_telemetry_health on public.machine_telemetry_events;
create trigger trg_telemetry_health
  after insert or update of status on public.machine_telemetry_events
  for each row execute function app.telemetry_to_health();


-- Verwaltungs-RPCs: Provider anlegen + Secret rotieren ---------------
create or replace function public.register_telemetry_provider(
  p_name text,
  p_adapter app.telemetry_adapter,
  p_hmac_secret text,
  p_notes text default null
) returns uuid
language plpgsql security definer set search_path=public,app as $$
declare v_role app.role_key; v_id uuid;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role <> 'system_admin' then raise exception 'Nicht autorisiert'; end if;
  insert into public.telemetry_providers (name, adapter, hmac_secret, notes)
       values (p_name, p_adapter, p_hmac_secret, p_notes)
       returning id into v_id;
  return v_id;
end $$;
grant execute on function public.register_telemetry_provider(text, app.telemetry_adapter, text, text)
   to authenticated;

create or replace function public.rotate_provider_secret(
  p_provider_id uuid, p_new_secret text
) returns void
language plpgsql security definer set search_path=public,app as $$
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role <> 'system_admin' then raise exception 'Nicht autorisiert'; end if;
  update public.telemetry_providers
     set hmac_secret = p_new_secret,
         updated_at = now()
   where id = p_provider_id;
end $$;
grant execute on function public.rotate_provider_secret(uuid, text) to authenticated;


-- Slot-Konfiguration setzen (mit automatischer History) -------------
create or replace function public.set_machine_slot(
  p_machine_id uuid,
  p_slot_code  text,
  p_product_id uuid,
  p_unit_price_net numeric,
  p_capacity   int default 12
) returns void
language plpgsql security definer set search_path=public,app as $$
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  insert into public.machine_slots (machine_id, slot_code, product_id,
                                    unit_price_net, capacity, updated_at)
       values (p_machine_id, p_slot_code, p_product_id,
               p_unit_price_net, p_capacity, now())
  on conflict (machine_id, slot_code) do update
     set product_id     = excluded.product_id,
         unit_price_net = excluded.unit_price_net,
         capacity       = excluded.capacity,
         updated_at     = now();
end $$;
grant execute on function public.set_machine_slot(uuid, text, uuid, numeric, int)
   to authenticated;
