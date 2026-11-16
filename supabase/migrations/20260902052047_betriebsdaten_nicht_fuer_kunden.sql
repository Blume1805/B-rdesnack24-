-- ===========================================================================
-- S-3, S-9, S-8: Betriebsdaten sind nicht mehr für jedes angemeldete
--                Konto lesbar.
--
-- Drei Policies standen auf `using (true)` und galten für die Rolle
-- `authenticated`. „Angemeldet" ist aber keine Berechtigung — die
-- Registrierung steht jedem offen.
--
--   machine_sales_daily  Tagesumsatz je Automat. Als Kunde A gelesen:
--                        93 Zeilen, 2.945,23 €, 03.08.–02.09. Das ist die
--                        Umsatzentwicklung des Betriebs, Zeile für Zeile.
--   inventory            Bestand, Kapazität und MHD je Automatenfach.
--                        Dieselben Daten liegen in `warehouse_stock`, und
--                        dort waren sie längst auf interne Rollen
--                        beschränkt. Eine der beiden Regeln war falsch.
--   permissions,         Das Berechtigungsmodell vollständig auslesbar
--   roles,               (29 + 4 + 52 Zeilen). Kein Schaden für sich
--   role_permissions     genommen, aber eine Landkarte für den, der einen
--                        Angriffspunkt sucht.
--
-- Kein Aufrufer im Kundenbereich verliert etwas: Die Flutter-App liest
-- keine dieser fünf Tabellen direkt (geprüft über alle `.from('…')`),
-- ihre Rechte holt sie über `my_permissions()`, und die Auswertungen der
-- Verwaltung laufen als SECURITY DEFINER an RLS vorbei.
-- ===========================================================================

drop policy if exists "msales_read" on public.machine_sales_daily;
create policy "msales_read"
  on public.machine_sales_daily for select
  to authenticated
  using (public.is_internal());

drop policy if exists "inventory_read" on public.inventory;
create policy "inventory_read"
  on public.inventory for select
  to authenticated
  using (public.is_internal());

drop policy if exists "perms_read" on public.permissions;
create policy "perms_read"
  on public.permissions for select
  to authenticated
  using (public.is_internal());

drop policy if exists "roles_read" on public.roles;
create policy "roles_read"
  on public.roles for select
  to authenticated
  using (public.is_internal());

drop policy if exists "rp_read" on public.role_permissions;
create policy "rp_read"
  on public.role_permissions for select
  to authenticated
  using (public.is_internal());

comment on table public.machine_sales_daily is
  'Tagesumsatz je Automat. Lesen nur für interne Rollen (S-3, 02.09.2026).';
comment on table public.inventory is
  'Fachbestand je Automat. Lesen nur für interne Rollen (S-9, 02.09.2026) — '
  'gleiche Schutzhöhe wie warehouse_stock.';
