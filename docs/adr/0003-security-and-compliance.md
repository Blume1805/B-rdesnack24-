# ADR 0003 — Sicherheits- & Compliance-Architektur

- **Status:** Akzeptiert
- **Datum:** 2026-06-28

## Kontext

Die Plattform verarbeitet steuerlich relevante (GoBD), lebensmittelrechtliche (HACCP) und
personenbezogene (DSGVO) Daten. Anforderungen: serverseitige Autorisierung, Revisionssicherheit,
Verschlüsselung, Audit, OWASP Top 10.

## Entscheidung

1. **Autorisierung serverseitig:** Row Level Security auf allen fachlichen Tabellen; zusätzlich
   Edge-Function-Guards. Client-Checks dienen nur der UX, nie der Sicherheit.
2. **RBAC + ABAC:** Rollen (`system_admin`, `shareholder`, `employee`, `customer`) plus
   feingranulare Permissions; Mitarbeiter erhalten ausschließlich explizit zugewiesene
   Einzelberechtigungen (ABAC-Overrides in `user_permissions`).
3. **Dual-Control für Gesellschafter:** Neue Gesellschafter erhalten Rechte erst nach Freigabe
   eines aktiven Gesellschafters (`shareholder_approvals`); nie automatisch.
4. **Revisionssicherheit (GoBD):** Keine `DELETE`-Rechte via RLS. Soft-Delete (`deleted_at`) +
   Versionierung; Korrekturen erzeugen neue Versionen. Append-only `audit_log` per Trigger.
5. **Verschlüsselung:** TLS erzwungen; sensible Felder mit pgcrypto/Vault (AES); Passwörter über
   Supabase Auth (bcrypt/scrypt). MFA (TOTP) wird vorbereitet.
6. **Härtung:** Rate-Limiting & Brute-Force-Schutz auf Auth/sensiblen Endpunkten; sichere Uploads
   (Signed URLs, MIME-/Größenprüfung); Secrets nur serverseitig; OWASP-Top-10-Review je Modul.

## Konsequenzen

- Höhere Anfangskomplexität (RLS-Policies, Trigger), dafür durchsetzbare Sicherheit & Auditierbarkeit.
- RLS-Negativtests sind Pflichtbestandteil der Definition of Done.
