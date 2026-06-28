-- ============================================================================
-- Seed — Rollen, Permissions, Rollen-Zuordnung
-- Idempotent (on conflict do nothing/update). Wird von `supabase db reset` geladen.
-- ============================================================================

-- Rollen ---------------------------------------------------------------------
insert into public.roles(key, name, description) values
  ('system_admin', 'Systemadministrator', 'Vollzugriff auf das gesamte System'),
  ('shareholder',  'Gesellschafter',      'Finanzen, Verwaltung, Doku, Inventur, Preise, Angebote'),
  ('employee',     'Mitarbeiter',         'Nur individuell freigegebene Einzelberechtigungen'),
  ('customer',     'Kunde',               'Nur eigener Kundenbereich')
on conflict (key) do update set name = excluded.name, description = excluded.description;

-- Permissions ----------------------------------------------------------------
insert into public.permissions(key, area, description) values
  -- Finanzen (Kategorie 1)
  ('finance.view',        'finance',   'Finanzdashboard ansehen'),
  ('finance.export',      'finance',   'Finanzauswertungen als PDF exportieren'),
  -- Inventur / HACCP (Kategorie 2)
  ('inventory.view',      'inventory', 'Inventur/Bestände ansehen'),
  ('inventory.edit',      'inventory', 'Inventur/Bestände bearbeiten'),
  ('haccp.fill',          'haccp',     'Befüllungsprotokoll führen'),
  ('haccp.temperature',   'haccp',     'Temperaturkontrolle erfassen'),
  ('haccp.cleaning',      'haccp',     'Reinigungsprotokoll führen'),
  ('haccp.disposal',      'haccp',     'Vernichtungsprotokoll führen'),
  ('haccp.maintenance',   'haccp',     'Wartungsprotokoll führen'),
  -- Dokumente (Kategorie 2)
  ('documents.view',      'documents', 'Dokumente ansehen'),
  ('documents.edit',      'documents', 'Dokumente bearbeiten/versionieren'),
  -- Verwaltung
  ('employees.manage',    'admin',     'Mitarbeiter einladen/verwalten/archivieren'),
  ('customers.manage',    'crm',       'Kunden verwalten'),
  ('prices.manage',       'crm',       'Individuelle Preise verwalten'),
  ('offers.manage',       'crm',       'Angebote verwalten'),
  -- System (Admin)
  ('users.manage',        'admin',     'Benutzer verwalten'),
  ('roles.manage',        'admin',     'Rollen/Berechtigungen verwalten'),
  ('system.settings',     'admin',     'Systemeinstellungen ändern'),
  ('system.logs',         'admin',     'Audit-Logs einsehen'),
  ('system.backups',      'admin',     'Backups verwalten')
on conflict (key) do update set area = excluded.area, description = excluded.description;

-- Rollen-Zuordnung -----------------------------------------------------------
-- Admin: alle Permissions
insert into public.role_permissions(role_key, permission_key)
  select 'system_admin', key from public.permissions
on conflict do nothing;

-- Gesellschafter: voller Fachzugriff (ohne reine System-Admin-Rechte)
insert into public.role_permissions(role_key, permission_key) values
  ('shareholder','finance.view'),
  ('shareholder','finance.export'),
  ('shareholder','inventory.view'),
  ('shareholder','inventory.edit'),
  ('shareholder','haccp.fill'),
  ('shareholder','haccp.temperature'),
  ('shareholder','haccp.cleaning'),
  ('shareholder','haccp.disposal'),
  ('shareholder','haccp.maintenance'),
  ('shareholder','documents.view'),
  ('shareholder','documents.edit'),
  ('shareholder','employees.manage'),
  ('shareholder','customers.manage'),
  ('shareholder','prices.manage'),
  ('shareholder','offers.manage')
on conflict do nothing;

-- Mitarbeiter & Kunde: KEINE pauschalen Rollenrechte.
-- Mitarbeiter erhalten Rechte ausschließlich über user_permissions (ABAC).
-- Kunden-Zugriff wird über kundenspezifische RLS-Policies (Kategorie 3) geregelt.
