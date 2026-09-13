insert into public.roles(key, name, description) values
  ('system_admin', 'Systemadministrator', 'Vollzugriff auf das gesamte System'),
  ('shareholder',  'Gesellschafter',      'Finanzen, Verwaltung, Doku, Inventur, Preise, Angebote'),
  ('employee',     'Mitarbeiter',         'Nur individuell freigegebene Einzelberechtigungen'),
  ('customer',     'Kunde',               'Nur eigener Kundenbereich')
on conflict (key) do update set name = excluded.name, description = excluded.description;

insert into public.permissions(key, area, description) values
  ('finance.view',        'finance',   'Finanzdashboard ansehen'),
  ('finance.export',      'finance',   'Finanzauswertungen als PDF exportieren'),
  ('inventory.view',      'inventory', 'Inventur/Bestände ansehen'),
  ('inventory.edit',      'inventory', 'Inventur/Bestände bearbeiten'),
  ('haccp.fill',          'haccp',     'Befüllungsprotokoll führen'),
  ('haccp.temperature',   'haccp',     'Temperaturkontrolle erfassen'),
  ('haccp.cleaning',      'haccp',     'Reinigungsprotokoll führen'),
  ('haccp.disposal',      'haccp',     'Vernichtungsprotokoll führen'),
  ('haccp.maintenance',   'haccp',     'Wartungsprotokoll führen'),
  ('documents.view',      'documents', 'Dokumente ansehen'),
  ('documents.edit',      'documents', 'Dokumente bearbeiten/versionieren'),
  ('employees.manage',    'admin',     'Mitarbeiter einladen/verwalten/archivieren'),
  ('customers.manage',    'crm',       'Kunden verwalten'),
  ('prices.manage',       'crm',       'Individuelle Preise verwalten'),
  ('offers.manage',       'crm',       'Angebote verwalten'),
  ('users.manage',        'admin',     'Benutzer verwalten'),
  ('roles.manage',        'admin',     'Rollen/Berechtigungen verwalten'),
  ('system.settings',     'admin',     'Systemeinstellungen ändern'),
  ('system.logs',         'admin',     'Audit-Logs einsehen'),
  ('system.backups',      'admin',     'Backups verwalten')
on conflict (key) do update set area = excluded.area, description = excluded.description;

insert into public.role_permissions(role_key, permission_key)
  select 'system_admin', key from public.permissions
on conflict do nothing;

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
