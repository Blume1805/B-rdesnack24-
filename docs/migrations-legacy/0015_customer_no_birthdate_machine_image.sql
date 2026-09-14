-- ============================================================================
-- 0015 — Fortlaufende Kundennummer ab 10001, Geburtsdatum, Automaten-Bild
-- ============================================================================

-- 1) Kundennummer — Sequence + Trigger --------------------------------------
-- Alle Kunden bekommen eine fortlaufende, fünfstellig lesbare Nummer
-- (10001, 10002, …).  Beim Anlegen eines Kundenprofils vergibt ein Trigger
-- automatisch die nächste freie Nummer; bestehende Kunden werden einmalig
-- nachträglich befüllt.  Die Spalte `customer_number` existiert bereits
-- (siehe 0010_customer.sql) — wir bauen jetzt die Vergabelogik dazu.
create sequence if not exists public.customer_number_seq
  start with 10001 increment by 1 minvalue 10001 no cycle;

create or replace function app.assign_customer_number()
returns trigger
language plpgsql
as $$
begin
  if new.customer_number is null or trim(new.customer_number) = '' then
    new.customer_number := nextval('public.customer_number_seq')::text;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_customers_assign_number on public.customers;
create trigger trg_customers_assign_number
  before insert on public.customers
  for each row execute function app.assign_customer_number();

-- Backfill: bestehende Kunden ohne Nummer nachträglich versorgen.
do $$
declare c record;
begin
  for c in
    select id from public.customers
    where customer_number is null or trim(customer_number) = ''
    order by created_at asc
  loop
    update public.customers
       set customer_number = nextval('public.customer_number_seq')::text
     where id = c.id;
  end loop;
end $$;

-- 2) Geburtsdatum auf Profile (optional, wird bei Registrierung erfasst) ---
alter table public.profiles
  add column if not exists birth_date date;

-- handle_new_user erweitern: birth_date aus den Metadaten der Anmeldung
-- übernehmen (das Frontend legt bei der Registrierung `birth_date` in
-- raw_user_meta_data ab).
create or replace function app.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.profiles (id, email, full_name, birth_date, role, status, activated_at)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', null),
    case when new.raw_user_meta_data ? 'birth_date'
              and length(new.raw_user_meta_data->>'birth_date') = 10
         then (new.raw_user_meta_data->>'birth_date')::date
         else null end,
    coalesce((new.raw_user_meta_data->>'role')::app.role_key, 'customer'),
    (case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then 'active' else 'invited' end)::app.profile_status,
    case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then now() else null end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- 3) Automaten-Bild ---------------------------------------------------------
-- Analog zu products.image_url: solange kein Bild gepflegt ist, zeigt die
-- App einen Platzhalter (Icon + Automatenname).  Sobald ein Foto hinterlegt
-- ist, wird es via Image.network geladen — kein Frontend-Change nötig.
alter table public.machines
  add column if not exists image_url text;
