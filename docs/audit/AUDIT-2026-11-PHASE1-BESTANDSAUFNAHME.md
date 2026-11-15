# Backend-Audit Bördesnack24, Phase 1: Bestandsaufnahme (15.11.2026)

Auftrag: Master-Prompt „Ganzheitliches Backend-Audit" vom 14.11.2026, zunächst
**nur Phase 1**. In dieser Phase wurde kein Code und keine Datenbank geändert.
Dieses Dokument ist die Grundlage für Phase 2 (Audit) und das zentrale
Audit-Protokoll.

**Wie gemessen wurde.** Alle Zahlen stammen aus Abfragen und Suchläufen vom
15.11.2026, nicht aus älteren Berichten:

* Datenbank: lokaler Nachbau der Produktionslinie in PostgreSQL 16 (236
  Migrationen des Zweigs `claude/bordesnack24-audit-architecture-7xd3d6`, Stand
  `437dadb`, plus die drei vorbereiteten, noch nicht ausgerollten Migrationen
  Pfand, Verfügbarkeit, Vorteile ohne Abo).
* Code: Repository-Stand `8efcfce` (Zweig `claude/bordesnack24-app-strategy-sf5yzy`,
  enthält `main`) und der Produktionszweig über `git show`.
* Landingpage: Lovable-Commit `5b26574` (03.11.2026, 21:48 Uhr).

**Was nicht gemessen werden konnte.** Die echte Produktion (Supabase-Projekt)
wurde weder gelesen noch verändert; Tests gegen die Produktion sind untersagt.
Alles, was nur dort steht (welche Migrationen ausgerollt sind, Auth-Einstellungen,
Secrets, Backups, ausgelieferte Funktionen), ist unten als **offen** geführt.

---

## 1. Technische Bestandsaufnahme

### 1.1 Technologien

| Schicht | Technik | Fundstelle |
|---|---|---|
| Datenbank, Anmeldung, Dateien | Supabase (PostgreSQL, Auth, Storage, Zeilenschutz „RLS") | `supabase/` |
| Server-Funktionen | Supabase Edge Functions (Deno, TypeScript) | `supabase/functions/` |
| Geplante Aufgaben | `pg_cron` in der Datenbank, `pg_net` für Aufrufe nach außen | Migrationen |
| App | Flutter (Dart ≥ 3.4), Riverpod, go_router, `supabase_flutter` | `apps/mobile` (main) |
| Landingpage | Lovable (TanStack Start, React) | Lovable-Projekt `0c068d85…` |
| Auslieferung | GitHub Actions: `ci`, `deploy-functions`, `deploy-web` (GitHub Pages), `release` (Android, iOS) | `.github/workflows/` |

### 1.2 Zwei Datenbank-Stände, zwei App-Stände

Das ist der wichtigste Befund der Bestandsaufnahme und gilt weiter:

| | main-Linie | Produktionslinie |
|---|---|---|
| Ort | `supabase/migrations/0001…0070` | Zweig `…audit-architecture-7xd3d6`, `supabase/migrations/2026…` |
| Migrationen | 67 Dateien | 236 Dateien, dazu 3 vorbereitet |
| Edge Functions | 21 | 30 |
| Tests | 10 pgTAP-Dateien (`supabase/tests`) | 32 Dateien in `scripts/pruefumgebung` |
| Apps im Verzeichnis | `apps/mobile` (eine Flutter-App) | `apps/kunden-app`, `apps/gesellschafter-app` (zwei Flutter-Apps), `apps/landing` (statische Referenzseite), `packages/bs24_kern`, `packages/api-types` |
| Rolle | baut die CI-Testdatenbank | laut `AUDIT-2026-09-BACKEND.md` am 02.09.2026 als identisch mit der Produktion nachgewiesen |

Die GitHub-Abläufe (`ci`, `deploy-web`) laufen auf `main`. **Die automatischen
Tests prüfen also die Linie, die nicht die Produktion ist.**

### 1.3 Datenbank (Produktionslinie, gemessen)

| Kennzahl | Wert |
|---|---|
| Tabellen in `public` | 128, alle mit Zeilenschutz (0 ohne) |
| Tabellen in `app` (nicht nach außen freigegeben) | 5 |
| Zeilenschutz-Regeln (Policies) | 209 |
| Funktionen | 192 in `public`, 86 in `app` |
| davon mit Eigentümerrechten (`security definer`) | 228, alle mit festem `search_path` (0 ohne) |
| Funktionen, die ohne Anmeldung aufrufbar sind | 8: `abo_angebote`, `advertising_catalog`, `advertising_inquiry_submit`, `advertising_locations`, `email_unsubscribe`, `fetch_email_report_share`, `ki_funktion_freigegeben`, `subscription_plans` |
| Funktionen, die jedes angemeldete Konto aufrufen darf | 170 |
| Tabellen/Sichten mit Leserecht ohne Anmeldung (vor Zeilenschutz) | 102 |
| Auslöser (Trigger) | 103 |
| Fremdschlüssel | 204 |
| Aufzählungstypen | 49 |
| Speicher-Bereiche (Buckets) | `documents`, `signed-documents`, `haccp`, `partner-signatures` (privat), `werbelogos` (öffentlich) |
| Geplante Aufgaben | 4: `referral-settle` (04:20), `purge_audit_log` (03:25), `purge_email_log` (03:30), `purge_nach_frist` (03:40) |

Fachliche Bereiche der Tabellen: Identität und Rollen (`profiles`, `roles`,
`permissions`, `user_permissions`), Kunden und Treue (`customers`,
`customer_card`, `loyalty_bonus_grants`, `offers`, `personal_offers`,
`referrals`), Kauf und Zahlung (`purchases`, `purchase_items`, `payments`,
`vend_freigaben`, `terminals`, `nayax_sales`), Automaten und Lager (`machines`,
`machine_slots`, `inventory`, `warehouse_stock`, `filling_logs`), Hygiene und
Nachweise (`cleaning_logs`, `temperature_logs`, `ifsg_briefings`), Finanzen
(`finance_*`, `invoices`, `sevdesk_sync_runs`), Dokumente und Unterschriften
(`documents`, `document_*`, `signatures`, `partner_signatures`), Werbung und
Firmenkunden (`advertising_*`, `businesses`, `business_*`, `leads`), Spende
(`donation_causes`, `donation_votes`), E-Mail (`email_*`), Datenschutz
(`consents`, `account_deletion_requests`, `loeschregeln`, `audit_log`,
`aufbewahrung_hemmung`), KI-Register (`ki_register`), Fahrtenbuch (`pkw*`).

### 1.4 Server-Funktionen (Produktionslinie, 30 Stück)

| Gruppe | Funktionen | Zugang laut Code |
|---|---|---|
| Eingänge von außen (Webhooks) | `terminal-webhook`, `nayax-webhook`, `iot-webhook`, `email-inbound`, `auth-email-hook` | gemeinsames Geheimnis bzw. Signaturprüfung (`*_WEBHOOK_SECRET`, HMAC) |
| Konto und Abo | `account-deletion-request`, `subscription-choose`, `subscription-cancel`, `invite-user` | Anmeldung, zum Teil Dienstschlüssel |
| E-Mail | `email-send`, `email-export`, `approval-notify` | Resend |
| Dokumente und Unterschriften | `document-finalize`, `documents-init-templates`, `documents-install-branded-set`, `documents-install-haccp-set`, `documents-zip-export`, `docusign-fetch-signature`, `install-signature`, `merge-employee-signature`, `signature-retouch` | Anmeldung, DocuSign |
| Finanzen und Belege | `finance-balance-sync`, `finance-export-pdf`, `sevdesk-invoice`, `sevdesk-sync`, `receipt-pdf`, `protocol-export-pdf` | Anmeldung, sevDesk |
| Sonstiges | `send-push` (Firebase), `weather-sync` (Bright Sky) | Dienstschlüssel |

Gemeinsame Bausteine: `_shared/auth.ts` (Rollenprüfung `istBerechtigt`, mit
Test `auth_test.ts`), `_shared/cors.ts`.

### 1.5 App (main, `apps/mobile`)

160 Dart-Dateien, 27 Testdateien (166 Tests, am 03.11.2026 alle bestanden).
Die App spricht die Datenbank direkt an: 32 verschiedene Datenbankfunktionen,
24 Tabellen im Direktzugriff, dazu Aufrufe von Server-Funktionen (u. a.
`documents-init-templates`, `finance-balance-sync`, `receipt-pdf`).

### 1.6 Externe Schnittstellen (laut Code)

Resend (E-Mail), sevDesk (Buchhaltung), DocuSign (Unterschriften), Nayax und
ein eigener Terminal-Webhook (Automatenkäufe), Firebase Cloud Messaging (Push),
Bright Sky (Wetter), GitHub Pages (App-Auslieferung), Hostinger (Domain).
In `.env.example` der Produktionslinie stehen außerdem Sentry, PostHog, Google
Maps und eine Google-Bewertungsadresse.

### 1.7 Tests und Auslieferung

| Ablauf | Was er tut | Auffällig |
|---|---|---|
| `ci` | Flutter: Format, Analyse, Tests. Deno: Lint und Tests. Datenbank: `supabase test db` | Deno-Lint und Deno-Tests enden mit `|| true`: Ein Fehlschlag bricht den Lauf nicht ab. Die Datenbanktests laufen gegen die main-Linie |
| `deploy-functions` | liefert Server-Funktionen aus | Ziel und Zweig sind in Phase 2 zu prüfen |
| `deploy-web` | baut die Flutter-Web-App von `main` nach GitHub Pages | liefert `apps/mobile` aus, nicht `apps/kunden-app` |
| `release` | Android- und iOS-Build | Nutzungsbedingungen: App ohne Store (ADR 0005). Zu klären, ob der Ablauf noch gebraucht wird |

---

## 2. Erste Einschätzung der Architektur

Keine Bewertung mit Punktzahl; die folgt in Phase 3.

**Tragfähig:**

* Die Berechtigungen liegen in der Datenbank (Zeilenschutz auf allen 128
  Tabellen, feste Suchpfade bei allen Funktionen mit Eigentümerrechten), nicht
  in der App. Das ist die richtige Stelle.
* Geld- und Preislogik (Kundenpreis, Pfand, Rabatt, Spende) wird in
  Datenbankfunktionen gerechnet, nicht im Client.
* Es gibt eine wiederholbare lokale Prüfumgebung mit Angriff und Gegenprobe
  für die Produktionslinie.
* Löschfristen laufen als geplante Aufgaben in der Datenbank.

**Risiken, die schon die Bestandsaufnahme zeigt** (Belege oben, Bewertung in
Phase 2):

| Nr. | Beobachtung | Art |
|---|---|---|
| P1-1 | Zwei Datenbank-Stände und zwei App-Stände. Die automatischen Tests prüfen nicht die Produktion. Zweimal ist dadurch eine Änderung nur in der Testlinie angekommen (zuletzt die Freischaltung der Vorteile, V-018) | bestätigt |
| P1-2 | Vorbereitete Migrationen sind nicht ausgerollt (Runbooks K, L, M, N). Welche in der Produktion stehen, ist von hier nicht messbar | nicht überprüfbar |
| P1-3 | CORS in `_shared/cors.ts` erlaubt jede Herkunft (`*`) | bestätigt im Code, Auswirkung in Phase 2 zu bewerten |
| P1-4 | `send-push` (Firebase) und `device_tokens` sind vorhanden, die Nutzungsbedingungen sagen „keine Push-Benachrichtigungen" | Widerspruch Code/Rechtstext, zu klären |
| P1-5 | Sentry und PostHog stehen in `.env.example` und `app_config.dart`. Ob sie in der ausgelieferten App aktiv sind, entscheidet über § 25 TDDDG und die Datenschutzerklärung | zu prüfen |
| P1-6 | 170 Funktionen sind für jedes angemeldete Konto aufrufbar. Jede braucht eine eigene Berechtigungsprüfung im Rumpf. Die Prüfung vom September hat genau hier drei Lücken gefunden (B-1 bis B-3) | Prüfschwerpunkt Phase 2 |
| P1-7 | CI lässt fehlgeschlagene Deno-Tests durch (`|| true`) | bestätigt |
| P1-8 | Die lokale `config.toml` sagt nichts über die echten Auth-Einstellungen (Passwortregeln, Schutz vor Massenanmeldungen, zweiter Faktor für interne Rollen ist dort nur „vorbereitet") | nicht überprüfbar |
| P1-9 | GitHub-Zugriff der Arbeitsumgebung ist seit dem 14.11.2026 entzogen; ein Commit liegt nur lokal | Betriebsrisiko für die Auditarbeit |

---

## 3. Abgleich Backend und Landingpage (Lovable), Stand 15.11.2026

Geprüft: Lovable `5b26574` gegen Produktionslinie, App und Dokumentation.
Seit dem letzten Abgleich (`2c98578`, 03.11.2026) hat Philipp in Lovable fünf
Änderungen beauftragt. Sie betreffen **nur Gestaltung** (Kartenstapel,
Abschnittsabstände) und die Länge des Films (jetzt 23 Sekunden, Datei
`business-teaser-v4`). Keine Aussage, kein Preis, kein Schalter und kein
Rechtstext wurde geändert.

| Nr. | Unterschied | Wer gleicht an |
|---|---|---|
| A-1 🔴 | Seite verspricht Vorteile für jedes kostenlose Konto; in der Produktion gilt das erst nach Runbook M und N (V-018-a). Die Migration ist fertig und getestet | Philipp (Runbooks), ich habe keinen Zugang zur Produktion und darf sie nicht ändern |
| A-2 🔴 | **Hosting-Absatz der Datenschutzerklärung ist nicht belegt.** Am 03.11.2026 habe ich „Diese Website wird bei der Hostinger International Ltd. betrieben" einsetzen lassen, gestützt auf den DNS-Eintrag (`docs/OPERATIONS.md`, A-Eintrag → `2.57.91.91`). `apps/landing/README.md` (07.09.2026) sagt dagegen, die Domain zeige auf Lovable und Hostinger liefere nur die Domain. Das Lovable-Projekt ist nicht veröffentlicht. Wird die Seite über Lovable veröffentlicht, ist der Absatz falsch (anderer Auftragsverarbeiter) | Entscheidung Philipp: Wie kommt die Seite online? Danach Text anpassen. Bis dahin nicht veröffentlichen |
| A-3 🟡 | Schalter `pfandGetrennt = false` und `bestandLive = false` passen zum nicht ausgerollten Stand. Nach Runbook M umlegen | ich, nach Meldung „Runbook M ist durch" |
| A-4 🟡 | Nacharbeit aus der Abnahme vom 03.11.2026 (Screenreader-Angabe am Pause-Knopf, Lage der Knöpfe, „du" klein im Datenschutz) | Entwurf liegt vor, nicht gesendet (kostet Credits) |
| A-5 ⚪ | Dokumentation nannte den Film mit 20 Sekunden | erledigt in diesem Dokument und im Runway-Auftrag |

Ergebnis: Backend und Landingpage sind **nicht identisch**. Die Abweichungen
A-1 und A-2 lassen sich nicht von hier aus angleichen: A-1 braucht den
Datenbankzugang, A-2 eine Entscheidung.

---

## 4. Für das Audit fehlende Informationen

Siehe Rückfragen im Bericht an Philipp vom 15.11.2026. Kurzfassung:

1. Stand der Produktion: Liste der eingespielten Migrationen, Status der
   Runbooks K, L, M, N.
2. Auth-Einstellungen im Supabase-Dashboard (Passwort, Massenanmeldung,
   zweiter Faktor, E-Mail-Bestätigung, erlaubte Rücksprungadressen).
3. Liste der ausgelieferten Server-Funktionen und der Namen der Secrets (ohne
   Werte).
4. Tarif, Region, Backups und Wiederherstellung bei Supabase.
5. Welche App unter `app.boerdesnack24.de` läuft und was aus der Zweiteilung
   Kunden-App/Gesellschafter-App wird.
6. Wie die Landingpage veröffentlicht wird (A-2).
7. Welche externen Dienste wirklich genutzt werden und welche Verträge zur
   Auftragsverarbeitung vorliegen.
8. Ob in der Produktion schon echte Kundendaten liegen.
9. GitHub-Zugriff wiederherstellen.
