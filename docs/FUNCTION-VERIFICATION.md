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
| CUST-008 | Löschantrag stellen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-014 | Werbung und Gutscheine für ein gelöschtes Konto | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-015 | Geburtstags-/Jubiläumsgutschein erzeugbar | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-21 behoben) |
| CUST-016 | Löschverlangen wird ausgeführt | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (13 Prüfungen) |
| CUST-018 | Löschregeln für die restlichen 15 Tabellen festgelegt | D3/D6 | ✓ gemessen: 15 ohne Entscheidung | — | — | — | — | offen | ✓ | 🔴 |
| CUST-019 | Fristlauf je Dokumentart, mit Ablaufhemmung | D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-017 | Auskunft nach Art. 15 erreichbar (`export_my_data`) | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (R-13, 38 statt 9 Bereiche) |
| CUST-009 | Individuelle Preise lesen | D2/D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-010 | Produktbewertung abgeben/lesen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-4 behoben) |
| CUST-011 | Produktdetails (`product_detail`) | D0 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-012 | Produktkatalog über Tabelle `products` | D2 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-2 behoben) |
| CUST-013 | Rechnungssicht | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |

¹ Der Ablauf steht seit dem 02.09.2026 (Kapitel 32 freigegeben, Kapitel 33
umgesetzt). Offen ist nur noch die Festlegung für 15 Tabellen, die in der
Vorlage nicht genannt waren — sie werden vom Löschlauf **nicht angefasst**
und in seinem Bericht namentlich ausgewiesen (CUST-018).

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
| AUTH-006 | Mindestpasswortlänge | Philipp hat am 02.09.2026 auf 10 gestellt; aus dieser Umgebung nicht messbar | 🔴 S-15 ⏸ EXTERN (Nachweis: Screenshot) |
| AUTH-007 | Passwortwechsel nur nach kürzlicher Anmeldung | Philipp hat am 02.09.2026 eingeschaltet; aus dieser Umgebung nicht messbar | 🔴 S-16 ⏸ EXTERN (Nachweis: Screenshot) |
| AUTH-008 | Aktuelles Passwort beim Ändern verlangen | Philipp hat am 02.09.2026 eingeschaltet; aus dieser Umgebung nicht messbar | 🔴 S-17 ⏸ EXTERN (Nachweis: Screenshot) |
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
| DB-003 | Migrationen von Null wiederholbar | ✓ 197/197, Ergebnis in neun Merkmalen deckungsgleich mit der Produktion | 🟢 (S-14 behoben) |
| DB-004 | PUBLIC hat kein Ausführungsrecht auf Funktionen | ✓ 0 von 156 | 🟢 (S-19 behoben) |
| DB-005 | `authenticated` führt nur die vorgesehenen 138 Funktionen aus | ✓ Fingerabdruck `c5f00ccb…` | 🟢 (S-20 behoben) |

---

## Zählstand

Stand nach dem Ausrollen der Korrekturen am 02.09.2026:

```
🔴 ROT: 11   🟡 GELB: 0   🟢 GRÜN: 47
```

**Das System Green Gate ist nicht erreicht.** Abschluss nur bei ROT = 0
und GELB = 0. Formulierungen wie „erfolgreich implementiert",
„abgeschlossen" oder „keine weiteren Maßnahmen erforderlich" sind bis
dahin unzulässig.

Stand am Abend des 02.09.2026: Alle elf roten Zeilen sind entweder eine
**Entscheidung**, ein **fehlendes Mittel** oder ein **Nachweis, den ich
aus dieser Umgebung nicht führen kann** — keine ist ein offener
Sicherheitsbefund im Code.

| ID | Warum rot | Was es braucht | Verantwortlich |
| --- | --- | --- | --- |
| AUTH-006 / S-15 | Mindestpasswortlänge — von Philipp am 02.09. auf 10 gestellt | ein Screenshot als Nachweis, dann grün | Philipp |
| AUTH-007 / S-16 | Passwortwechsel nur nach kürzlicher Anmeldung — eingeschaltet | dito | Philipp |
| AUTH-008 / S-17 | Aktuelles Passwort beim Ändern — eingeschaltet | dito | Philipp |
| AUTH-005 / S-13 | Leaked-Password-Schutz | Supabase Pro; kommt vor der Live-Schaltung | Philipp |
| AUTH-009 / S-18 | `config.toml` beschreibt die gehosteten Auth-Einstellungen nicht | Entscheidung: dokumentieren oder per CLI verwalten | offen |
| CUST-018 | 15 Tabellen ohne Löschregel — der Löschlauf fasst sie nicht an und nennt sie im Bericht | eine Festlegung je Tabelle | Philipp |
| AUTH-002/003/004 | Rate Limiting, Passwort-Reset, Enumeration | Zugriff auf `*.supabase.co` (Egress `403`) | fehlendes Mittel |
| MAIL-004 | Zustellung über Resend | ein Testpostfach | Philipp |
| PAY-005 | `store_subscription_claim` | Sandbox-Konto App Store / Play Billing | Philipp |

Kein Eintrag steht auf 🟡: Wo ein Nachweis fehlt, steht ROT mit
benanntem fehlendem Mittel und Verantwortlichem — nicht Gelb.
