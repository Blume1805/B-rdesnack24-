-- ============================================================================
-- 0114 · Der Standort wird eine eigene Sache
-- ----------------------------------------------------------------------------
-- Schritt 1 des Fahrplans zum Vier-Säulen-Modell. Freigabe vom 21.08.2026.
--
-- Bisher IST ein Automat sein Standort: `machines` trägt Adresse, Koordinaten
-- und Zugangszeiten selbst. Das trägt, solange es nur Automaten gibt und an
-- jedem Ort genau einer steht.
--
-- Es trägt nicht mehr, sobald:
--
--   * an einem Ort zwei Geräte stehen (Automat plus Kühlschrank),
--   * ein Verein am Umsatz DIESES ORTES beteiligt wird,
--   * ein Werbekunde DIESEN ORT bucht,
--   * ein Unternehmen seinen Mitgliedern DIESEN ORT freigibt.
--
-- Alle vier brauchen den Ort als eigenständige Sache, an der Geräte, Verträge
-- und Kampagnen hängen. Ohne ihn müsste jede dieser Beziehungen auf `machines`
-- zeigen — und stünde beim zweiten Gerät am selben Ort sofort falsch.
--
-- ----------------------------------------------------------------------------
-- Warum jetzt und nicht später
--
-- Betroffen sind heute VIER Zeilen. Es gibt keine Kampagne, keinen Vertrag und
-- keinen Abrechnungslauf, der bereits auf einen Standort zeigt. Dieselbe
-- Umstellung in einem Jahr berührt jede dieser Beziehungen.
--
-- ----------------------------------------------------------------------------
-- Was diese Migration NICHT tut
--
-- Die Adressspalten auf `machines` bleiben stehen. Beide Oberflächen lesen sie
-- heute; sie zu entfernen, bevor App und Web umgestellt sind, wäre ein Bruch
-- ohne Not. Sie sind ab jetzt die Zweitschrift — führend ist `locations`.
-- Entfernt werden sie in einer eigenen Migration, wenn kein Aufrufer mehr
-- darauf zugreift.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Art des Ortes
-- ----------------------------------------------------------------------------
-- Steuert später, wer ihn sehen und buchen darf: Ein Firmenstandort taucht in
-- der öffentlichen Karte nicht auf, ein Vereinsstandort schon.
-- Liegt in `app`, nicht in `public`: dort liegen auch `entity_status`,
-- `machine_type` und `role_key`. Aufzählungstypen gehören in diesem Projekt
-- nicht ins öffentlich exponierte Schema.
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
  'Art des Standorts. public = frei zugänglich, business = Firmengelände, '
  'club = Vereinsgelände, partner = Fremdfläche mit Vertrag.';

-- ----------------------------------------------------------------------------
-- Die Standorte
-- ----------------------------------------------------------------------------
create table if not exists public.locations (
  id            uuid primary key default gen_random_uuid(),

  -- Sprechende Kennung. Taucht später auf Abrechnungen und in
  -- Kampagnenberichten auf, deshalb stabil und nicht aus dem Namen abgeleitet.
  code          text not null unique,

  -- Der Name, den ein Kunde liest.
  name          text not null,
  kind          app.location_kind not null default 'public',

  street        text,
  zip           text,
  city          text,
  country       text not null default 'DE',
  lat           double precision,
  lng           double precision,

  -- Zugänglichkeit des ORTES, nicht des Geräts. Ein Automat kann laufen,
  -- während das Gelände abgeschlossen ist.
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
  'Physischer Ort, an dem Bördesnack24 verkauft. Träger für Geräte, '
  'Vereinsbeteiligung, Werbekampagnen und B2B-Standortfreigaben. Vorher lag '
  'die Adresse auf machines — das trug nur, solange ein Ort genau ein Gerät hat.';

comment on column public.locations.code is
  'Sprechende, stabile Kennung für Abrechnungen und Berichte.';

-- ----------------------------------------------------------------------------
-- Zugriff: exakt das Muster von `machines`
-- ----------------------------------------------------------------------------
-- Lesen darf jeder Angemeldete — Standorte sind öffentliche Information, die
-- Karte in der App lebt davon. Schreiben darf, wer Bestände pflegen darf;
-- Standort und Automat werden in derselben Arbeit angelegt.
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

-- Diese beiden Zeilen ändern faktisch nichts: In diesem Projekt vergeben
-- Supabase-Standardrechte auf jede neue Tabelle in `public` ohnehin alles an
-- `anon`, `authenticated` und `service_role` — nachgeprüft am 21.08.2026 in
-- `information_schema.role_table_grants`, für `locations` wie für `machines`.
-- Der Schutz liegt also NICHT an diesen GRANTs, sondern allein an RLS: `anon`
-- hat keine Policy und sieht deshalb null Zeilen. Die Zeilen bleiben trotzdem
-- stehen, damit die Absicht im Code steht, falls die Standardrechte einmal
-- enger werden.
grant select on public.locations to authenticated;
grant insert, update, delete on public.locations to authenticated;

-- Protokoll und Zeitstempel wie bei jeder Stammdatentabelle.
drop trigger if exists trg_audit on public.locations;
create trigger trg_audit
  after insert or update or delete on public.locations
  for each row execute function app.audit_row();

drop trigger if exists trg_locations_updated_at on public.locations;
create trigger trg_locations_updated_at
  before update on public.locations
  for each row execute function app.set_updated_at();

-- ----------------------------------------------------------------------------
-- Der Automat bekommt seinen Ort
-- ----------------------------------------------------------------------------
alter table public.machines
  add column if not exists location_id uuid references public.locations(id);

create index if not exists idx_machines_location on public.machines(location_id);

-- ----------------------------------------------------------------------------
-- Umzug der vorhandenen vier Automaten
-- ----------------------------------------------------------------------------
-- Je Automat entsteht ein Standort. Das ist heute richtig, weil an jedem Ort
-- genau ein Gerät steht. Wer später zwei Geräte an einen Ort hängt, verknüpft
-- sie einfach mit derselben Zeile.
--
-- Der Name wird NICHT geschönt: Wo in der Datenbank „Standort 1 (ANPASSEN)"
-- steht, steht es danach auch im Standort. Der Hinweis ist echt und soll
-- sichtbar bleiben, bis jemand die richtigen Namen einträgt.
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

-- ----------------------------------------------------------------------------
-- Ab jetzt Pflicht
-- ----------------------------------------------------------------------------
-- Bewusst erst nach dem Umzug. Wäre die Spalte von Anfang an `not null`,
-- liefe die Migration auf einer Datenbank mit Bestand sofort in einen Fehler.
--
-- Gelöschte Automaten bleiben ausgenommen: Sie tragen keinen Standort und
-- sollen auch keinen bekommen — sonst entstünden Standorte für Geräte, die
-- es nicht mehr gibt.
do $$
declare
  v_offen int;
begin
  select count(*) into v_offen
  from public.machines
  where location_id is null and deleted_at is null;

  if v_offen > 0 then
    raise exception
      'Umzug unvollständig: % aktive Automaten ohne Standort. Migration bricht ab, '
      'statt eine halbe Zuordnung zu hinterlassen.', v_offen;
  end if;
end;
$$;

-- ----------------------------------------------------------------------------
-- Recht zum Pflegen von Standorten
-- ----------------------------------------------------------------------------
-- Eigenes Recht, obwohl heute `inventory.edit` schreiben darf: Standorte sind
-- Vertragsgegenstand (Verein, Werbung, B2B), Bestände sind Tagesgeschäft. Wer
-- später Bestände pflegen, aber keine Verträge berühren soll, braucht die
-- Trennung — und sie nachträglich einzuziehen ist teurer als jetzt.
insert into public.permissions (key, area, description)
values ('locations.manage', 'inventory', 'Standorte anlegen und pflegen')
on conflict (key) do nothing;

insert into public.role_permissions (role_key, permission_key)
values ('system_admin', 'locations.manage'),
       ('shareholder',  'locations.manage')
on conflict do nothing;
