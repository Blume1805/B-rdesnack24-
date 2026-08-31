-- ============================================================================
-- 0114 · Der Standort wird eine eigene Sache
-- ============================================================================

do $$
begin
  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'location_kind'
  ) then
    create type app.location_kind as enum ('public', 'business', 'club', 'partner');
  end if;
end;
$$;

comment on type app.location_kind is
  'Art des Standorts. public = frei zugaenglich, business = Firmengelaende, '
  'club = Vereinsgelaende, partner = Fremdflaeche mit Vertrag.';

create table if not exists public.locations (
  id            uuid primary key default gen_random_uuid(),
  code          text not null unique,
  name          text not null,
  kind          app.location_kind not null default 'public',
  street        text,
  zip           text,
  city          text,
  country       text not null default 'DE',
  lat           double precision,
  lng           double precision,
  access_hours  text,
  status        app.entity_status not null default 'active',
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  archived_at   timestamptz,
  deleted_at    timestamptz
);

comment on table public.locations is
  'Physischer Ort, an dem Boerdesnack24 verkauft. Traeger fuer Geraete, '
  'Vereinsbeteiligung, Werbekampagnen und B2B-Standortfreigaben. Vorher lag '
  'die Adresse auf machines - das trug nur, solange ein Ort genau ein Geraet hat.';

comment on column public.locations.code is
  'Sprechende, stabile Kennung fuer Abrechnungen und Berichte.';

alter table public.locations enable row level security;

drop policy if exists locations_read on public.locations;
create policy locations_read on public.locations
  for select to authenticated
  using (deleted_at is null);

drop policy if exists locations_write on public.locations;
create policy locations_write on public.locations
  for all to authenticated
  using      (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

grant select on public.locations to authenticated;
grant insert, update, delete on public.locations to authenticated;

drop trigger if exists trg_audit on public.locations;
create trigger trg_audit
  after insert or update or delete on public.locations
  for each row execute function app.audit_row();

drop trigger if exists trg_locations_updated_at on public.locations;
create trigger trg_locations_updated_at
  before update on public.locations
  for each row execute function app.set_updated_at();

alter table public.machines
  add column if not exists location_id uuid references public.locations(id);

create index if not exists idx_machines_location on public.machines(location_id);

with nummeriert as (
  select m.id,
         m.code,
         m.name,
         m.location_name,
         m.street, m.zip, m.city, m.lat, m.lng, m.access_hours, m.status,
         row_number() over (order by m.code nulls last, m.name) as nr
  from public.machines m
  where m.deleted_at is null
    and m.location_id is null
),
angelegt as (
  insert into public.locations
    (code, name, kind, street, zip, city, lat, lng, access_hours, status)
  select
    'STO-' || lpad(n.nr::text, 3, '0'),
    coalesce(nullif(trim(n.location_name), ''), n.name),
    'public',
    nullif(trim(n.street), ''),
    nullif(trim(n.zip), ''),
    nullif(trim(n.city), ''),
    n.lat,
    n.lng,
    nullif(trim(n.access_hours), ''),
    n.status
  from nummeriert n
  returning id, code
)
update public.machines m
   set location_id = a.id
  from nummeriert n
  join angelegt a on a.code = 'STO-' || lpad(n.nr::text, 3, '0')
 where m.id = n.id;

do $$
declare
  v_offen int;
begin
  select count(*) into v_offen
  from public.machines
  where location_id is null and deleted_at is null;

  if v_offen > 0 then
    raise exception
      'Umzug unvollstaendig: % aktive Automaten ohne Standort. Migration bricht ab, '
      'statt eine halbe Zuordnung zu hinterlassen.', v_offen;
  end if;
end;
$$;

insert into public.permissions (key, area, description)
values ('locations.manage', 'inventory', 'Standorte anlegen und pflegen')
on conflict (key) do nothing;

insert into public.role_permissions (role_key, permission_key)
values ('system_admin', 'locations.manage'),
       ('shareholder',  'locations.manage')
on conflict do nothing;
