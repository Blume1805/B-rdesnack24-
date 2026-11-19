-- ============================================================================
-- Automaten in der App verwalten (Wunsch Philipp 19.11.2026): bearbeiten,
-- umbenennen, Standort ändern, neu anlegen, stilllegen.
--
-- Die Schreibrechte selbst gab es schon (machines_write, locations_write:
-- Admin oder Recht `inventory.edit`). Diese Migration räumt drei Dinge auf,
-- die der neuen Funktion im Weg stehen:
--
-- 1) Testvorlagen geben ihre Kennungen frei.
--    Die vier Automaten aus dem Seed vom Sommer (A1–A4, „Automat 1/2/3",
--    „Heißgetränkeautomat") sind seit 10.09.2026 archiviert und als gelöscht
--    markiert (20260910120000), belegen aber die eindeutigen Kennungen
--    A1–A4. Ein echter Automat könnte sie sonst nicht bekommen. Sie heißen
--    jetzt VORLAGE-A1 … VORLAGE-A4; Bestand und das eine Temperaturprotokoll
--    hängen weiter an ihnen. Rückweg: Kennung zurückbenennen.
--
-- 2) Platzhalter-Standorte ausblenden.
--    „Standort 1 (ANPASSEN)" … „Standort Heißgetränke (ANPASSEN)" sind aktiv
--    und stünden sonst in der Standortauswahl. Sie werden wie die Automaten
--    archiviert (kein DELETE, die Vorlagen verweisen darauf). Nur Standorte
--    mit „(ANPASSEN)" im Namen und ohne nicht gelöschten Automaten.
--
-- 3) Kein Löschen von Automaten und Standorten über die App-Rollen.
--    `for all` schloss DELETE ein. Ein Automat ist Stammdatum, an dem
--    Protokolle, Bestände und Verkäufe hängen; einige Tabellen löschen
--    kaskadierend mit (Tagesumsätze, Fächer, Werbeflächen). Aufbewahrung nach
--    § 147 AO verlangt, dass das nicht aus der App heraus geht. Stilllegen
--    ist ein Statuswechsel (status = 'inactive'), kein Löschen.
--    Nebenwirkung, gewollt: Admins sehen gelöschte Zeilen nicht mehr über die
--    Schreibregel (vorher zeigte die Inventur die vier Testvorlagen).
-- ============================================================================

-- 1) Kennungen der Testvorlagen freigeben ---------------------------------
update public.machines
   set code = 'VORLAGE-' || code
 where name in ('Automat 1', 'Automat 2', 'Automat 3', 'Heißgetränkeautomat')
   and deleted_at is not null
   and status = 'archived'
   and code not like 'VORLAGE-%';

-- 2) Platzhalter-Standorte archivieren --------------------------------------
update public.locations l
   set status      = 'archived',
       archived_at = coalesce(l.archived_at, now()),
       deleted_at  = coalesce(l.deleted_at, now())
 where l.name like '%(ANPASSEN)%'
   and l.deleted_at is null
   and not exists (select 1 from public.machines m
                    where m.location_id = l.id and m.deleted_at is null);

-- 3) Schreibregeln ohne DELETE ----------------------------------------------
drop policy if exists machines_write on public.machines;
drop policy if exists machines_insert on public.machines;
drop policy if exists machines_update on public.machines;
create policy machines_insert on public.machines
  for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));
create policy machines_update on public.machines
  for update to authenticated
  using      (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

drop policy if exists locations_write on public.locations;
drop policy if exists locations_insert on public.locations;
drop policy if exists locations_update on public.locations;
create policy locations_insert on public.locations
  for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));
create policy locations_update on public.locations
  for update to authenticated
  using      (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

revoke delete on public.machines, public.locations from anon, authenticated;
