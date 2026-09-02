# Verification-Matrix Bördesnack24

Stand: **02.09.2026**. Eine Zeile je geprüfter Funktion, ein Status je
Spalte. Die Matrix berichtet über durchgeführte Prüfungen.

Status: 🔴 ROT (neu, geändert, ungeprüft, nicht testbar, Test
fehlgeschlagen) · 🟡 GELB (nur Zwischenstatus, mit Verantwortlichem und
Frist) · 🟢 GRÜN (Test, Negativtest, Regression, Security, Datenbank,
Legal und Doku nachgewiesen).

`GRÜN verfällt`, sobald eine Abhängigkeit der Funktion geändert wird.

Nachweise: `/docs/SECURITY.md`, Skripte: `scripts/pruefumgebung/`.

---

## 1. Datenisolation Kundenbereich

| ID | Funktion | Datenklasse | Test | Negativ | Regression | Security | DB/RLS | Legal | Doku | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CUST-001 | Eigenes Profil lesen/ändern | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-002 | Profil-E-Mail ändern | D3/D4 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-5 behoben) |
| CUST-003 | Einwilligungen (`consents`) | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-004 | Kaufhistorie lesen | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-005 | Push-Token verwalten | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-006 | Benachrichtigungen lesen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-007 | Kontaktnachrichten | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-008 | Löschantrag stellen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | offen¹ | ✓ | 🔴 |
| CUST-009 | Individuelle Preise lesen | D2/D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-010 | Produktbewertung abgeben/lesen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-4 behoben) |
| CUST-011 | Produktdetails (`product_detail`) | D0 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-012 | Produktkatalog über Tabelle `products` | D2 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-2 behoben) |
| CUST-013 | Rechnungssicht | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |

¹ Löschung gegen Aufbewahrung (Art. 17 vs. § 147 AO) ist als Ablauf
nicht nachgewiesen — siehe Legal-Abschnitt in `AUDIT-2026-08`.

## 2. Zahlung, Abo, Jugendschutz

| ID | Funktion | Datenklasse | Test | Negativ | Security | Finanz | Legal | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PAY-001 | `choose_subscription_plan` — Preisbildung | D5 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| PAY-002 | `choose_subscription_plan` — Altersschranke | D5 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-6 behoben) |
| PAY-003 | Abo selbst hochstufen (Missbrauch) | D5 | ✓ | ✓ | ✓ | ✓ | — | 🟢 |
| PAY-004 | Punkte-/Bonusgutschrift durch Client | D5 | ✓ | ✓ | ✓ | ✓ | — | 🟢 |
| PAY-005 | `store_subscription_claim` | D5 | ✗³ | ✗³ | ✗³ | — | — | 🔴 |
| PAY-006 | Geburtsdatum einmalig nachtragen (App + Trigger) | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |

³ Nicht ausgeführt: erfordert einen Store-Beleg. Fehlendes Mittel
namentlich: Sandbox-Konto App Store / Play Billing.

## 3. Verwaltung und Gesellschafterbereich

| ID | Funktion | Datenklasse | Test | Negativ | Security | Status |
| --- | --- | --- | --- | --- | --- | --- |
| GES-001 | 48 Verwaltungs-RPCs gegen Kundenkonto | D2 | ✓ | ✓ | 48/48 ✓ | 🟢 (S-12 behoben) |
| GES-002 | `finance_*` (Buchhaltung) | D6 | ✓ | ✓ | ✓ | 🟢 |
| GES-003 | `inventory_*` (Bestand, FIFO, EK) | D2 | ✓ | ✓ | ✓ | 🟢 |
| GES-004 | `pkw_*`, `audit_log` | D2 | ✓ | ✓ | ✓ | 🟢 |
| GES-005 | `machine_sales_daily` (Tagesumsatz) | D2 | ✓ | ✓ | ✓ | 🟢 (S-3 behoben) |
| GES-006 | `inventory` (Fachbestand, MHD) | D2 | ✓ | ✓ | ✓ | 🟢 (S-9 behoben) |
| GES-007 | Rollen- und Rechtekatalog lesbar | D1 | ✓ | ✓ | ✓ | 🟢 (S-8 behoben) |
| GES-008 | `auth_has_permission(perm, fremde uid)` | D1 | ✓ | ✓ | ✓ | 🟢 (S-11 behoben) |
| GES-009 | Verwaltungsoberflächen Flutter (R-12) | D2 | ✓ | ✓ | ✓ | 🟢 |

## 4. B2B / Firmenkunden

| ID | Funktion | Test | Negativ | Security | Status |
| --- | --- | --- | --- | --- | --- |
| API-001 | `business_locations_list` — Firma A gegen B | ✓ | ✓ | ✓ | 🟢 (R-11) |
| API-002 | übrige 20 B2B-RPCs gegen zweiten Firmenkunden | ✗ | ✗ | ✗ | 🔴 |
| API-003 | `my_businesses` / `my_advertising_*` — Mitgliedschaftsbindung | ✓ | ✓ | ✓ | 🟢 |

## 5. Auth

| ID | Funktion | Test | Status |
| --- | --- | --- | --- |
| AUTH-001 | Rollenvergabe nur bei Einladung (`handle_new_user`) | ✓ Code + Trigger, Verhalten belegt | 🟢 |
| AUTH-002 | Rate Limiting `/auth/v1` | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-003 | Passwort-Reset: Einmaligkeit, Ablauf, Session-Invalidierung | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-004 | Benutzerenumeration `/auth/v1/recover` | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-005 | Schutz vor kompromittierten Passwörtern | ✗ im Dashboard aus, per SQL nicht setzbar | 🔴 S-13 ⏸ EXTERN (Dashboard, Philipp) |

## 6. Speicher, E-Mail, Protokollierung

| ID | Funktion | Test | Status |
| --- | --- | --- | --- |
| DB-001 | Storage-Buckets privat mit eigener Policy | ✓ | 🟢 |
| DB-002 | Bucket-Grenzen (Größe, MIME) | ✓ gesetzt, Upload-Pfad angepasst und getestet | 🟢 (S-10 behoben) |
| MAIL-001 | Webhook-Signaturen ohne Rückfallwert | ✓ Code | 🟢 |
| MAIL-002 | `email_enqueue` Empfängerbestimmung | ✓ | 🟢 (S-5 behoben) |
| MAIL-003 | `email_report_share` / `fetch_email_report_share` | ✓ | 🟢 (S-1 behoben) |
| MAIL-004 | Zustellung über Resend an Testpostfach | ✗ kein Testpostfach | 🔴 |
| DOC-001 | Änderungsprotokoll buchführungsrelevanter Tabellen | ✓ | 🟢 (S-7 behoben) |
| DB-003 | Migrationen von Null wiederholbar | ✓ 179/185 | 🔴 S-14 |

---

## Zählstand

Stand nach dem Ausrollen der Korrekturen am 02.09.2026:

```
🔴 ROT: 9   🟡 GELB: 0   🟢 GRÜN: 35
```

**Das System Green Gate ist nicht erreicht.** Abschluss nur bei ROT = 0
und GELB = 0. Formulierungen wie „erfolgreich implementiert",
„abgeschlossen" oder „keine weiteren Maßnahmen erforderlich" sind bis
dahin unzulässig.

Von den neun roten Zeilen ist **keine ein offener Sicherheitsbefund**.
Acht sind Prüfungen, die aus dieser Umgebung nicht durchführbar sind,
eine ist eine offene Rechtsfrage:

| ID | Warum rot | Fehlendes Mittel | Verantwortlich |
| --- | --- | --- | --- |
| CUST-008 | Löschung gegen Aufbewahrung (Art. 17 DSGVO vs. § 147 AO) als Ablauf nicht nachgewiesen | Löschkonzept je Dokumentart, dann Test | Philipp |
| AUTH-002 | Rate Limiting `/auth/v1` nicht messbar | Zugriff auf `*.supabase.co` (Egress `403`) | Philipp |
| AUTH-003 | Passwort-Reset nicht durchspielbar | dito + Testpostfach | Philipp |
| AUTH-004 | Enumeration nicht prüfbar | dito | Philipp |
| AUTH-005 | Leaked-Password-Schutz aus | Supabase-Dashboard, per SQL nicht setzbar | Philipp |
| API-002 | 20 B2B-RPCs gegen zweiten Firmenkunden | zweiter Firmenkunde mit Mitgliedschaft in den Prüfdaten | offen |
| MAIL-004 | Resend-Zustellung nicht belegt | Testpostfach in `projekt-konfig.md` | Philipp |
| PAY-005 | `store_subscription_claim` | Sandbox-Konto App Store / Play Billing | Philipp |
| DB-003 | Migrationen nicht von Null wiederholbar | — (Befund S-14, bewusst offen geführt) | offen |

Kein Eintrag steht auf 🟡: Wo ein Nachweis fehlt, steht ROT mit
benanntem fehlendem Mittel und Verantwortlichem — nicht Gelb.
