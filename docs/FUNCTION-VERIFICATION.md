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
| API-002 | übrige B2B- und Werbe-RPCs gegen zweiten Firmenkunden | ✓ | ✓ | ✓ | 🟢 (33 Prüfungen, `docs/SECURITY.md` Abschnitt 12) |
| API-004 | Rechteausweitung innerhalb eines Mandanten (Mitglied → Admin) | ✓ | ✓ | ✓ | 🟢 |
| API-005 | Einladung mit fremdem Rohtoken annehmen | ✓ | ✓ | ✓ | 🟢 |
| API-003 | `my_businesses` / `my_advertising_*` — Mitgliedschaftsbindung | ✓ | ✓ | ✓ | 🟢 |

## 5. Auth

| ID | Funktion | Test | Status |
| --- | --- | --- | --- |
| AUTH-001 | Rollenvergabe nur bei Einladung (`handle_new_user`) | ✓ Code + Trigger, Verhalten belegt | 🟢 |
| AUTH-002 | Rate Limiting `/auth/v1` | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-003 | Passwort-Reset: Einmaligkeit, Ablauf, Session-Invalidierung | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-004 | Benutzerenumeration `/auth/v1/recover` | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-005 | Schutz vor kompromittierten Passwörtern | ✗ Schalter nicht bedienbar — Feature ab Pro, Organisation auf `free` | 🔴 S-13 ⏸ EXTERN (Tarifentscheidung) |
| AUTH-006 | Mindestpasswortlänge | ✓ live 6, `config.toml` sagt 10 | 🔴 S-15 |
| AUTH-007 | Passwortwechsel nur nach kürzlicher Anmeldung | ✓ aus | 🔴 S-16 |
| AUTH-008 | Aktuelles Passwort beim Ändern verlangen | ✓ aus | 🔴 S-17 |
| AUTH-009 | `config.toml` beschreibt die gehosteten Auth-Einstellungen | ✓ widerlegt (10 gegen 6) | 🔴 S-18 |

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
🔴 ROT: 13   🟡 GELB: 0   🟢 GRÜN: 38
```

**Das System Green Gate ist nicht erreicht.** Abschluss nur bei ROT = 0
und GELB = 0. Formulierungen wie „erfolgreich implementiert",
„abgeschlossen" oder „keine weiteren Maßnahmen erforderlich" sind bis
dahin unzulässig.

Neu am 02.09.2026, nachmittags: Der Versuch, S-13 zu schließen, hat vier
weitere Befunde sichtbar gemacht (S-15 bis S-18, siehe
`docs/SECURITY.md` Abschnitt 11). **Drei davon sind offene
Sicherheitsbefunde, die ohne Tarifwechsel sofort behebbar sind** —
anders als die übrigen roten Zeilen:

| ID | Befund | Behebbar durch | Verantwortlich |
| --- | --- | --- | --- |
| AUTH-006 / S-15 | Mindestpasswortlänge 6 statt 10 | ein Feld im Dashboard | Philipp |
| AUTH-007 / S-16 | Passwortwechsel ohne kürzliche Anmeldung möglich | ein Schalter im Dashboard | Philipp |
| AUTH-008 / S-17 | Aktuelles Passwort wird beim Ändern nicht verlangt | ein Schalter im Dashboard | Philipp |
| AUTH-009 / S-18 | `config.toml` beschreibt die gehosteten Auth-Einstellungen nicht | Entscheidung: Einstellungen dokumentieren oder per CLI verwalten | offen |

Die übrigen roten Zeilen sind **keine offenen Sicherheitsbefunde**:
Prüfungen, die aus dieser Umgebung nicht durchführbar sind, eine
Tarifentscheidung und eine offene Rechtsfrage:

| ID | Warum rot | Fehlendes Mittel | Verantwortlich |
| --- | --- | --- | --- |
| CUST-008 | Löschung gegen Aufbewahrung (Art. 17 DSGVO vs. § 147 AO) als Ablauf nicht nachgewiesen | Löschkonzept je Dokumentart, dann Test | Philipp |
| AUTH-002 | Rate Limiting `/auth/v1` nicht messbar | Zugriff auf `*.supabase.co` (Egress `403`) | Philipp |
| AUTH-003 | Passwort-Reset nicht durchspielbar | dito + Testpostfach | Philipp |
| AUTH-004 | Enumeration nicht prüfbar | dito | Philipp |
| AUTH-005 | Leaked-Password-Schutz nicht aktivierbar | Supabase Pro (Organisation auf `free`) — Tarifentscheidung | Philipp |
| MAIL-004 | Resend-Zustellung nicht belegt | Testpostfach in `projekt-konfig.md` | Philipp |
| PAY-005 | `store_subscription_claim` | Sandbox-Konto App Store / Play Billing | Philipp |
| DB-003 | Migrationen nicht von Null wiederholbar | — (Befund S-14, bewusst offen geführt) | offen |

Kein Eintrag steht auf 🟡: Wo ein Nachweis fehlt, steht ROT mit
benanntem fehlendem Mittel und Verantwortlichem — nicht Gelb.
