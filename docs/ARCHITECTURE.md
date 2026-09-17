# Architektur — Bördesnack24

## Leitprinzipien

Clean Architecture · Feature-First · Domain Driven Design · SOLID · DRY · KISS ·
Repository-Pattern · Dependency Injection · Test Driven Development.

Der **Domain-Layer ist frei von Infrastruktur** (kein Supabase-Import in `domain/`). Dadurch
bleibt ein späterer Wechsel des Backends/Hostings (Stichwort Hostinger) ohne Bruch der
Geschäftslogik möglich.

## Schichten (je Feature)

```
features/<feature>/
  domain/        Entities, Value Objects, Repository-Interfaces, UseCases  (rein, testbar)
  data/          DTOs, DataSources (Supabase/REST), Repository-Implementierungen, Mapper
  presentation/  Riverpod-Controller (State), Screens, Widgets
```

Abhängigkeitsrichtung: `presentation → domain ← data`. Die Domain kennt weder Presentation
noch Data; Data implementiert Domain-Interfaces; Presentation nutzt UseCases.

## Monorepo-Layout

```
apps/mobile/                Flutter-App (Android/iOS/Web)
  lib/
    core/                   billing · config · di · error · pricing · router ·
                            security · services · theme · utils · widgets
    l10n/                   ARB-Dateien und generierte Lokalisierung
    features/<feature>/     domain · data · presentation
supabase/
  migrations/               versionierte SQL (Schema, RLS, Trigger, Funktionen)
  functions/                Edge Functions (Deno/TS): sevdesk-sync, nayax-webhook, pdf-export …
  seed/                     Referenzdaten (Rollen, Permissions, SKR03-Konten)
docs/                       Architektur, ADRs, Berechtigungskonzept, Compliance,
                            Strategie, Deployment
scripts/                    Hilfsskripte
.github/workflows/          CI/CD — ci, deploy-functions, deploy-web, release
```

Drei Punkte, die früher anders dokumentiert waren und hier an den Code
angeglichen wurden (Stand 2026-09-16):

* **Kein `packages/`-Verzeichnis.** Geteilte Dart-Packages existieren nicht;
  das Design-System liegt als `core/widgets/design_system/`.
* **Kein `core/network`.** Der Backend-Zugriff läuft über `core/services` und
  die Repository-Implementierungen im `data`-Layer der Features.
* **`l10n` liegt nicht unter `core/`,** sondern als `lib/l10n/` mit
  generiertem Unterordner.

## State-Management & DI

- **Riverpod** als State- und DI-Container. Provider liefern UseCases/Repositories; Tests
  überschreiben Provider mit Fakes/Mocks.
- **go_router** für deklaratives Routing inkl. rollenbasierter Redirects (Auth-Guards).
- **equatable** für Wertgleichheit in Entities und DTOs (17 Dateien). Es wird
  **keine Codegenerierung** eingesetzt — weder `freezed` noch `json_serializable`;
  Mapper sind von Hand geschrieben.
- **Offline-Outbox** für Protokoll-Schreibvorgänge in der Feldarbeit:
  `core/services/outbox_service.dart`, persistiert über **shared_preferences**
  und ausgelöst über **connectivity_plus**. Eine SQLite-Schicht (drift o. ä.)
  existiert nicht.

## Backend (Supabase)

- **PostgreSQL** als normalisierte, historisierte Quelle der Wahrheit.
- **Row Level Security (RLS)** auf den fachlichen Tabellen — Autorisierung primär in der DB.
  Stand 2026-09-16: 63 Tabellen in `public`, davon 51 mit ausdrücklicher Aktivierung und
  6 weitere über die dynamische Schleife in `0007_haccp_protocols.sql`.
  **Offen:** die sechs Tabellen aus `0031_iot_telemetry.sql` (`telemetry_providers`,
  `machine_devices`, `machine_slots`, `machine_slots_history`,
  `machine_telemetry_events`, `machine_health`) haben weder RLS noch Policy —
  siehe „Bekannte Abweichungen" am Ende.
- **Edge Functions (Deno/TS)** für alle privilegierten Operationen: sevDesk-Sync,
  Nayax-Webhooks/Polling, PDF-Erzeugung, Freigabe-Workflows, Einladungen. Secrets bleiben
  ausschließlich serverseitig.
- **Realtime** für Live-Bestände/Verfügbarkeit. **Storage** mit Signed URLs für Uploads.

## Sicherheit (Querschnitt)

Siehe [BERECHTIGUNGSKONZEPT.md](BERECHTIGUNGSKONZEPT.md) und ADRs. Kernpunkte: Auth mit
MFA-Vorbereitung (`mfa_enroll_screen.dart` und Auth-Repository vorhanden), serverseitige
RBAC+ABAC-Prüfung, unveränderlicher Audit-Trail, Soft-Delete (`deleted_at` in 16 Migrationen),
TLS erzwungen. **Nicht umgesetzt:** Feldverschlüsselung. `pgcrypto` ist als Extension
aktiviert, wird aber nur für `gen_random_uuid()` genutzt; `pgp_sym_encrypt` kommt nirgends
vor, Supabase Vault ist nicht im Einsatz.

## Observability

**Geplant, derzeit nicht aktiv:** `sentry_flutter` und `posthog_flutter` stehen in
`pubspec.yaml` auskommentiert. Produktiv existieren nur die Server-Logs der Edge Functions.
Bei Aktivierung gilt: PostHog erst nach Einwilligung, keine personenbezogenen Rohdaten in Logs.

## Teststrategie

Ziel: Unit (Domain/UseCases) → Widget → Integration → E2E.
**Stand 2026-09-16:** 20 Testdateien unter `apps/mobile/test/` (Unit und Widget),
zwei Deno-Tests (`nayax-webhook/parse_test.ts`, `sevdesk-sync/mapping_test.ts`).
Ein Verzeichnis `integration_test/` existiert nicht, E2E-Tests gibt es also nicht.

CI (`ci.yaml`) erzwingt **`dart format` und `flutter analyze`** — beide brechen den Lauf ab.
`flutter test --coverage` läuft und lädt ein Coverage-Artefakt hoch, **eine Schwelle wird
nicht geprüft**. `deno lint`, `deno test` und `supabase test db` (pgTAP) enden jeweils auf
`|| true` und können den Lauf **nicht** zum Scheitern bringen.

## Bekannte Abweichungen (Stand 2026-09-17)

Ergebnis der Gegenprüfung dieses Dokuments gegen den Code. Die ersten drei Punkte
wurden im Text bereits korrigiert; dieser Abschnitt hält fest, was **im Code** offen ist.

| Nr. | Befund | Bewertung |
|---|---|---|
| A-1 | `0031_iot_telemetry.sql` legte sechs Tabellen ohne RLS und ohne Policy an: `telemetry_providers`, `machine_devices`, `machine_slots`, `machine_slots_history`, `machine_telemetry_events`, `machine_health`. Jedes authentifizierte Konto konnte sie lesen, einschließlich `telemetry_providers.hmac_secret` im Klartext. | **behoben durch `0064_iot_telemetry_rls.sql`** (2026-09-16). Lesen nur mit `inventory.view` oder Adminrolle, Schreiben nur auf `machine_devices` mit `inventory.edit`, `hmac_secret` für keine Clientrolle lesbar. Verhalten in einer lokalen PostgreSQL-16-Instanz nachgewiesen (Lücke reproduziert, danach geschlossen, Hub-Abfragen ohne Regression). **Am 16.09.2026 im Produktivprojekt eingespielt und verifiziert**: alle sechs Tabellen melden `relrowsecurity = true`. Betroffenheitsprüfung am 16.09.2026: `telemetry_providers` enthielt **null Zeilen**, es existierte also zu keiner Zeit ein Geheimnis, das hätte auslaufen können. **Eine Rotation ist nicht erforderlich; der Punkt ist geschlossen.** |
| A-2 | Feldverschlüsselung sensibler Felder ist dokumentiert, aber nicht implementiert. | 🟡 — als Ziel führen oder streichen, nicht als Ist behaupten. |
| A-3 | Observability (Sentry, PostHog) ist auskommentiert. | 🟡 — vor Produktivstart entscheiden. |
| A-4 | Keine E2E-Tests. Der pgTAP-Lauf war nicht blockierend — deshalb blieb A-1 unentdeckt. | teilweise behoben: `supabase test db` ist seit 2026-09-16 blockierend, neuer Test `supabase/tests/iot_telemetry_rls_test.sql`. **am 2026-09-17 deutlich weiter:** `scripts/lokale_testdatenbank.sh` baut die Datenbank ohne Docker und Supabase-CLI aus den Migrationen auf und führt pgTAP aus. Damit liefen die Tests zum ersten Mal — und **fünf von sieben Dateien waren defekt**: Rollenwechsel scheiterten am Wächtertrigger `trg_profiles_guard` (drei Dateien), `free_benefits_test` rief `app.*` als Client auf, legte keinen Kauf an und prüfte den Rückgabewert eines zweiten Aufrufs statt das Ergebnis des Triggers. Alle acht Dateien bestehen jetzt, 58 Zusicherungen. 🟡 **offen:** `deno lint` und `deno test` enden weiterhin auf `|| true`; E2E-Tests fehlen weiterhin. |
| A-5 | **Die Migrationskette ließ sich nicht von null wiederherstellen.** Vier Abbruchstellen beim Einspielen von `0001`–`0065` in eine leere PostgreSQL-16-Datenbank: (1) `0007` setzte Rollen voraus, die nur `supabase/seed/seed.sql` anlegt — das aber erst nach den Migrationen läuft; (2) `0029` benannte in `inventory_summary_by_product()` die Ausgabespalte `unit_price` (aus `0027`) in `unit_cost` um, was PostgreSQL als Änderung des Rückgabetyps wertet und ohne vorheriges `drop function` ablehnt; (3) `0032` erweiterte `public.partner_signatures`, die **keine** Migration anlegt; (4) `0045` pinnte `search_path` auf `app.snapshot_slot_history()` und `app.snapshot_slot_insert()` und kommentierte `app._sig_upload`/`app._pia_sig` — alle vier entstehen in keiner Migration. Ursache von (3) und (4): Mehrere Migrationen sind im Repository bewusst gekürzt und vermerken „Vollständige Definition siehe Backend-Migration" (`0026`, `0033`). Das Repository ist damit **nicht** die vollständige Quelle des Datenbankschemas. | **teilweise behoben am 2026-09-16.** (1) Die vier Rollen stehen jetzt in `0002`, wo die Tabelle entsteht (idempotent, `seed.sql` pflegt sie weiter). (2) `0029` droppt die Funktion vor dem Neuanlegen; sie hat außerhalb der Migrationen keinen Aufrufer. (3) und (4) sind **bewusst nicht nachgebaut**: Die echte Struktur steht nur im Produktivprojekt, eine geratene Fassung würde stillschweigend abweichen. Stattdessen überspringen die Anweisungen das fehlende Objekt und geben eine `warning` aus, die es benennt. **Nachgewiesen:** Die Kette läuft seither aus einer leeren Datenbank vollständig durch (`0001`–`0065`, drei benannte Warnungen); die vier geänderten Dateien wurden zusätzlich ein zweites Mal ausgeführt und liefen fehlerfrei. In `ci.yaml` ist `supabase db reset` seit dem 2026-09-16 blockierend — das `\|\| true` hatte den Abbruch verschluckt. **Am 17.09.2026 auch für (3) und (4) geschlossen.** Der Gesellschafter hat die drei Objekte über Runbook D aus dem Produktivprojekt exportiert; `0068_partner_signatures_and_slot_snapshots.sql` legt sie an — abgeschrieben, nicht rekonstruiert. **Nachgewiesen durch Rückvergleich:** Dieselbe Abfrage gegen die neu aufgebaute Datenbank liefert für alle sechs Teilobjekte (Spalten, Constraints, Indizes, RLS-Policy, beide Funktionsrümpfe) genau den Text des Produktivexports; PostgreSQL rendert die selbst geschriebene Policy identisch zur produktiven. Die Warnungen in `0032` und `0045` bleiben als Hinweis stehen, sind aber gegenstandslos und sagen das jetzt auch. 🟡 **verbleibend, kleiner Rest:** Zwei Punkte hat der Export nicht abgedeckt und sie sind noch offen — ob RLS auf `partner_signatures` produktiv tatsächlich aktiv ist (ohne sie wäre die Policy `ps_read` wirkungslos), und ob die Trigger auf `public.machine_slots`, die die beiden Funktionen aufrufen, ebenfalls nur produktiv existieren. Beides klärt eine Abfrage von 30 Sekunden — `docs/OPERATIONS.md`, Runbook D, Teil 2. Verantwortlich: Philipp Blume, fällig vor Go-Live. |
| A-6 | `0065_free_benefits_for_all.sql` öffnet die App-Vorteile für alle registrierten Konten (Beschluss vom 2026-09-16). Die pgTAP-Tests `supabase/tests/free_benefits_test.sql` und `supabase/tests/status_tiers_test.sql` wurden **nicht ausgeführt** — pgTAP steht in der Arbeitsumgebung nicht bereit. | 🟡 — beide Verhaltensweisen sind durch manuelle SQL-Durchläufe gegen PostgreSQL 16 belegt (`docs/COMPLIANCE.md`, V-007, sowie die elf Zusicherungen der Statusstaffel). **Am 2026-09-17 erledigt:** Beide Dateien wurden ausgeführt (pgTAP lokal eingerichtet, siehe A-4). `free_benefits_test.sql` besteht mit sieben Zusicherungen, `status_tiers_test.sql` mit elf. `free_benefits_test.sql` musste dafür korrigiert werden — sie prüfte eine Zusicherung, die nie haltbar war. |
| A-7 | **„Befund P-1" war falsch und ist zurückgezogen.** Eine Analyse vom 2026-09-16 meldete zwei widersprüchliche Statussysteme (Server angeblich: silber ab 50 €, platin ab 400 €, Cashback statt Rabatt). Gelesen worden war Migration `0058`, die von `0060` abgelöst wird — `0060` droppt die alte Funktion ausdrücklich und ersetzt Cashback durch Rabatt. | **geschlossen am 2026-09-16.** Durch Ausführen geprüft: `0058` eingespielt (alte Staffel sichtbar), danach `0060` (neue Staffel). Server und Client stimmen überein und entsprechen der vom Gesellschafter bestätigten Staffel: bis 149,99 € → 5 %, ab 150 € → 6 %, ab 500 € → 7,5 %, ab 1.000 € → 10 %. Elf Zusicherungen inklusive aller Grenzwerte bestanden. Festgehalten in `pricing_test.dart` und `supabase/tests/status_tiers_test.sql`. **Lehre:** Eine Migration ist keine Quelle — nur die zuletzt angewandte ist es.
| A-8 | **Die App ist ohne Konto vollständig verschlossen — beworben wurde das Gegenteil.** Der Auth-Guard in `app_router.dart` leitet jede Route außer Impressum, Datenschutz, AGB und Kündigungsseite auf `/signin` um. Wer über den QR-Code am Automaten oder über die Landingpage kommt, sieht als Erstes ein Anmeldeformular. Gleichzeitig behaupteten das Store-Listing („AUCH OHNE ANMELDUNG: Automatenfinder, Bestände, Produktinfos, News"), die Chatbot-Antwort, die Vergleichskarte im Kundenbereich und zwei Marketing-Blätter, diese Funktionen stünden ohne Anmeldung offen. | **Texte korrigiert am 2026-09-17**, damit keine Funktion beworben wird, die es nicht gibt (§ 5 UWG). Die Vergleichskarte ist keine Gegenüberstellung mehr, sondern eine Leistungsliste: Eine Spalte, die nichts enthält, vergleicht nichts. Anzumerken ist, dass die Umbenennung vom 2026-09-16 („Kostenlos vs. App" → „Ohne Konto vs. mit Konto") den Fehler verschärft hatte, weil die linke Spalte seither „Kundenkarte & Kaufhistorie" ohne Konto versprach. 🔴 **offen und wichtiger als die Textkorrektur:** Der Einstieg selbst bleibt verschlossen. Beide Einstiegswege enden an einer Anmeldemaske, bevor der Kunde einen Grund gesehen hat, sich anzumelden. Die dafür vorgesehene Lösung ist die öffentliche Automatenseite aus Phase 1 des Umsetzungsplans, die es noch nicht gibt. Bis dahin sollte der Aufkleber nicht in Auflage gehen. |
| A-9 | **Kundenbereich und Gesellschafterbereich liegen in einem Web-Bundle unter einer Adresse — und die Zwei-Faktor-Anmeldung ist nur eine Erinnerung.** `scripts/deploy_web.sh` baut ein einziges Flutter-Web-Bundle; `home_shell.dart` lädt Finanzen und Verwaltung zwar erst bei Bedarf nach (`deferred`, Zeilen 20–21), aber aus derselben Herkunft und unter derselben URL. Wer `app.boerdesnack24.de` aufruft, steht vor derselben Anmeldemaske wie ein Gesellschafter. Die Daten selbst sind serverseitig geschützt (35 Tabellen mit RLS, 98 Policies, 124 Rollenprüfungen, 149 `auth.uid()`-Bezüge) — ein Kundenkonto sieht auch nach Erreichen des Verwaltungsbildschirms keine Verwaltungsdaten. Offen ist die davorliegende Schicht: **MFA wird nirgends erzwungen.** `mfaEnrolledProvider` speist ausschließlich ein Erinnerungsbanner in `home_shell.dart:209`; in keiner der 63 Migrationen kommt `aal2`, `amr` oder eine MFA-Bedingung vor. Ein entwendetes Gesellschafter-Passwort genügt damit allein für den vollen Innenbereich. | **teilweise behoben am 2026-09-17 durch `0066_mfa_gate_and_execute_privileges.sql`.** Die Prüfung sitzt jetzt in `public.is_admin()`, `public.is_shareholder()` und `public.auth_has_permission()` — hinter dem Schalter `app.security_settings.require_mfa_internal`, der bewusst auf `false` steht, damit sich der Betrieb nicht aussperrt. Kunden sind nicht betroffen (ihr Zweig läuft über `auth.uid()`), serverseitige Läufe mit `service_role` bleiben ausgenommen. **Nachgewiesen** gegen PostgreSQL 16.13 in zehn Zusicherungen (`supabase/tests/mfa_gate_test.sql`, ausgeführt): Schalter aus = unverändert, Schalter an = Gesellschafter und Administrator nur mit `aal2`, Kunde unberührt. 🔴 **offen:** Der Schalter ist noch nicht umgelegt. Das setzt voraus, dass Pia und Philipp je einen TOTP-Faktor bestätigt haben — `docs/OPERATIONS.md`, Runbook H. Verantwortlich: Philipp Blume, fällig vor Go-Live. |
| A-10 | **Jede seit Migration 0047 angelegte Datenbankfunktion war ohne Anmeldung aufrufbar.** `0045`/`0046` entziehen `anon` und `PUBLIC` das Ausführungsrecht und setzen dasselbe als Standard für künftige Funktionen. Der Standardteil wirkt nicht: `alter default privileges ... revoke execute on functions from public` entfernt das eingebaute PUBLIC-Recht in PostgreSQL 16 nicht. **Nachgewiesen am 2026-09-17** gegen PostgreSQL 16.13 — eine frisch angelegte Funktion trug weiterhin `=X` in der ACL; drei Varianten der Anweisung (Reihenfolge getauscht, `revoke all`, `for role postgres`) änderten daran nichts. Betroffen waren zehn Funktionen, darunter `public.lifetime_founders_status()`: Eine nicht angemeldete Aufruferin las die Zahl der vergebenen Lifetime-Plätze (der Wert wechselte von 0 auf 1, nachdem ein Abo angelegt wurde). Kein Personenbezug — die übrigen Funktionen filtern über `auth.uid()` und gaben nichts heraus —, aber eine Lücke in der Rechteschicht statt in der Fachlogik. | **behoben am 2026-09-17 durch `0066`.** Der Entzug wird wiederholt und erfasst alle bestehenden Funktionen; gezählt: 10 anon-ausführbare Funktionen vorher, 0 nachher, während `authenticated` unverändert 61 behält. Gegen erneutes Abdriften sichert `supabase/tests/execute_privileges_test.sql`: Der Test schlägt gegen eine Datenbank ohne `0066` fehl (5/5/10) und besteht mit ihr (0/0/0) — beides ausgeführt, der Test ist also nicht leerlaufend. **Lehre:** `alter default privileges` ist kein Schutz, solange nicht geprüft wurde, dass es wirkt. |
| A-11 | **Die CI war seit dem 16.09.2026 durchgehend rot, und niemand hat es gemerkt.** Zwei Migrationsdateien trugen dieselbe Nummer: `0033_documents_expansion.sql` und `0033_partner_signatures_management.sql`. Die Supabase-CLI leitet die Version aus dem Zahlenpraefix ab; beim Neuaufbau bricht sie mit `duplicate key value violates unique constraint schema_migrations_pkey, Key (version)=(0033) already exists` ab. Solange `supabase db reset` auf `|| true` endete, blieb das verborgen — mit dem Scharfstellen im Zuge von A-5 wurde daraus ein roter Lauf, und zwar in **allen** Laeufen seither (geprueft: Laeufe 796 bis 801). Der nachgelagerte Schritt RLS-/Permission-Tests (pgTAP) wurde dadurch jedes Mal uebersprungen. Die pgTAP-Tests sind also nicht nur lokal nie gelaufen (A-6), sondern auch in der CI nicht. Flutter- und Deno-Job waren unauffaellig gruen, was den Eindruck einer funktionierenden CI erzeugte. | **behoben am 2026-09-17.** Die Datei heisst jetzt `0067_partner_signatures_bucket.sql`. Eine freie Nummer am Ende statt einer der Luecken (38, 40, 42), damit sie in einem bereits eingespielten Produktivprojekt nicht ausser der Reihe laeuft; ihr Inhalt ist wiederholbar (`on conflict do nothing`), ein erneuter Lauf aendert nichts. Nachgewiesen: keine doppelten Nummern mehr, vollstaendiger Neuaufbau aus leerer Datenbank, alle acht pgTAP-Dateien bestanden. **Nachtrag vom selben Tag:** Mit der Reparatur lief der pgTAP-Schritt erstmals in der CI durch — und meldete vier Fehlschlaege (iot_telemetry_rls 8/9, mfa_gate 2/6). Ursache: `supabase/seed/seed.sql` liegt nicht am Standardpfad `supabase/seed.sql`, und `config.toml` nannte keinen Seed-Pfad. `supabase db reset` hat die Datei also **nie** geladen — obwohl ihr eigener Kopf seit jeher behauptet, sie werde geladen. Ein frisch aufgebautes Projekt hatte damit keinerlei Rollenrechte: `shareholder` ohne `inventory.view`, ohne `finance.view`. Behoben doppelt: `[db.seed]` in `config.toml` eingetragen, und beide Testdateien legen die von ihnen benoetigten Permissions jetzt selbst an. Nachgewiesen, dass Letzteres traegt: `MIT_SEED=0 scripts/lokale_testdatenbank.sh` baut ohne Seed-Datei auf, alle acht Dateien bestehen weiterhin. **Lehre:** Ein gruener Haken neben zwei von drei Jobs ist kein gruener Haken — und eine Datei, die von sich behauptet, geladen zu werden, wird darum noch nicht geladen. |

Bestätigt und unverändert: Clean-Architecture-Schichtung je Feature, Riverpod, go_router,
Realtime für Bestände (`availability_screen.dart`, `machine_stock_screen.dart`), Storage mit
Signed URLs, Audit-Trail, Soft-Delete.
