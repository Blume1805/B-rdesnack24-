# Berechtigungskonzept — Bördesnack24

Serverseitig durchgesetzt über PostgreSQL **Row Level Security (RLS)** + Edge-Function-Guards.
Modell: **RBAC** (Rollen) erweitert um **ABAC** (feingranulare Einzelberechtigungen je Nutzer).

## Rollen

| Rolle (`roles.key`) | Beschreibung | Zugriff |
|---|---|---|
| `system_admin` | Systemadministrator | Vollzugriff: Benutzer/Rollen, Systemeinstellungen, Logs, Backups. |
| `shareholder`  | Gesellschafter | Finanzdaten, Mitarbeiter-/Kundenverwaltung, Doku, Inventur, Angebote, Preise. |
| `employee`     | Mitarbeiter | **Nur explizit freigegebene** Einzelberechtigungen. Keine Finanz-/Systemrechte. |
| `customer`     | Kunde | Nur eigener Kundenbereich. |

## Permissions (Auszug, `permissions.key`)

| Permission | Bereich |
|---|---|
| `finance.view`, `finance.export` | Kategorie 1 |
| `inventory.view`, `inventory.edit` | Kategorie 2 |
| `haccp.fill`, `haccp.temperature`, `haccp.cleaning`, `haccp.disposal`, `haccp.maintenance` | Kategorie 2 |
| `documents.view`, `documents.edit` | Kategorie 2 |
| `employees.manage` | Kategorie 2 |
| `customers.manage`, `prices.manage`, `offers.manage` | Kategorie 1/3 |
| `system.settings`, `system.logs`, `system.backups`, `users.manage`, `roles.manage` | Admin |

## Auflösung einer Berechtigung

Eine Aktion ist erlaubt, wenn:

```
permission ∈ role_permissions[ rolle(user) ]      (RBAC)
  ODER
permission ∈ user_permissions[ user ] mit granted = true   (ABAC-Override, v. a. Mitarbeiter)
```

und der Nutzer **aktiv** ist (`profiles.status = 'active'`, nicht deaktiviert/archiviert) und —
bei Gesellschaftern — die Freigabe vorliegt (siehe Dual-Control).

Implementiert als SQL-Funktion `auth_has_permission(perm text) returns boolean` (SECURITY DEFINER,
ausgewertet gegen `auth.uid()`), die in RLS-Policies verwendet wird.

## Dual-Control für Gesellschafter

Neue Gesellschafter erhalten ihre Rechte **nie automatisch**. Ablauf:

1. Ein aktiver Gesellschafter oder Admin legt einen Antrag in `shareholder_approvals` an
   (`status = 'pending'`).
2. Ein **anderer** aktiver Gesellschafter gibt frei (`status = 'approved'`, `approved_by`).
   Selbstfreigabe ist ausgeschlossen (Constraint `requested_for <> approved_by`).
3. Erst nach Freigabe wird die Rolle `shareholder` wirksam.

## Mitarbeiterstatus (kein Hard-Delete)

`profiles.status ∈ { invited, active, deactivated, archived }`. Deaktivierte/archivierte Konten
verlieren jeglichen Datenzugriff (RLS prüft `status = 'active'`), bleiben aber für Audit/GoBD
erhalten. Physisches Löschen ist nicht vorgesehen.

## Revisionssicherheit

- RLS gewährt **kein** `DELETE` auf fachlichen Tabellen.
- Änderungen werden versioniert; Korrekturen erzeugen neue Versionen.
- `audit_log` ist append-only (Trigger), kein UPDATE/DELETE.

## Verifikation

Pro Modul **RLS-Negativtests**: „Rolle X darf NICHT auf Y" muss fehlschlagen. Ergänzt durch
Supabase Advisors (Security/Performance) in der CI.
