# Verzeichnis von Verarbeitungstätigkeiten (Art. 30 Abs. 1 DSGVO)

**Stand: 25.08.2026 · Fassung 2**

Dieses Verzeichnis ist bis heute nicht vorhanden gewesen. Es stand seit dem
24.08.2026 als offener Punkt in `CLAUDE.md`, und die Datenschutzerklärung
ersetzt es nicht: Sie richtet sich an betroffene Personen (Art. 12/13), das
Verzeichnis an die Aufsichtsbehörde (Art. 30 Abs. 4).

**Wie dieses Verzeichnis entstanden ist:** Jede Angabe unten ist am laufenden
System abgefragt worden — Tabellen und Spalten aus dem
`information_schema`, Rollen und Berechtigungen aus `public.roles`
und `public.permissions`, Löschfristen aus `cron.job` und dem Quelltext der
dort aufgerufenen Funktionen, Empfänger aus den Edge Functions im
Repository. Nichts davon ist aus einer Vorlage übernommen. Wo etwas ungeprüft
oder offen ist, steht das ausdrücklich dabei — siehe Abschnitt 5.

---

## 1. Verantwortlicher

| | |
|---|---|
| Verantwortlicher | Bördesnack24 GbR |
| Anschrift | Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen, Deutschland |
| Vertretungsberechtigt | Philipp Blume, Pia Blume |
| Kontakt | boerdesnack24@gmail.com · 0157 30065762 · 0151 21076771 |
| Rechtsform | Gesellschaft bürgerlichen Rechts, nicht im Handelsregister eingetragen |
| USt-IdNr. | DE 458804058 |

**Datenschutzbeauftragter: keiner benannt.** Nach § 38 Abs. 1 BDSG ist eine
Benennung erst ab 20 ständig mit automatisierter Verarbeitung beschäftigten
Personen Pflicht; die GbR hat keine Beschäftigten. Nachgeprüft: Das
Rollenmodell (`app.role_key`) kennt vier Rollen — `system_admin`,
`shareholder`, `employee`, `customer` —, aber **kein einziges Konto trägt
`employee`**; vergeben sind nur die übrigen drei. Auch Art. 37 Abs. 1 lit. b und c
greifen nicht: Kerntätigkeit ist der Automatenverkauf, nicht die umfangreiche
Überwachung oder die Verarbeitung besonderer Kategorien.

**Gemeinsam Verantwortliche (Art. 26): keine.**

---

## 2. Verarbeitungstätigkeiten

Abkürzungen für die Empfänger stehen in Abschnitt 3.

### V1 — Kundenkonto und Anmeldung

| | |
|---|---|
| Zweck | Registrierung, Anmeldung, Verwaltung des Kundenkontos |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b (Vertrag) |
| Betroffene | Kundinnen und Kunden, Gesellschafter |
| Datenkategorien | `profiles`: E-Mail, voller Name, Telefon, **Geburtsdatum**; `auth.users`: E-Mail, Kennwort-Hash, Anmeldezeitpunkte, Sitzungen; `customers`: Rechnungsanschrift, Benachrichtigungsadresse, Firmenname |
| Empfänger | S, R |
| Drittland | nein |
| Löschfrist | bis zur Kontolöschung; danach nur, soweit Aufbewahrungspflichten bestehen |

Das Geburtsdatum dient dem Jugendschutz beim Abo und der Geburtstagsaktion.

### V2 — Kauf, Kassenbon, Rechnung

| | |
|---|---|
| Zweck | Abwicklung des Kaufs, digitaler Kassenbon, Rechnungstellung |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b; für die Aufbewahrung Art. 6 Abs. 1 lit. c i. V. m. § 147 AO, § 257 HGB |
| Betroffene | Kundinnen und Kunden |
| Datenkategorien | `purchases`, `purchase_items`: Kunden-ID, Automat, Zeitpunkt, Artikel, Beträge; `invoices`; `purchase_complaints` |
| Empfänger | S, R, sevD |
| Drittland | nein |
| Löschfrist | 10 Jahre |

**Hinweis zur Sensibilität:** Aus Kauf + Automat + Uhrzeit entsteht faktisch ein
Bewegungsprofil, obwohl nie ein Gerätestandort abgefragt wird. Die
Datenschutzerklärung benennt das ausdrücklich; hier steht es, weil es die
Risikobewertung nach Art. 32 Abs. 1 prägt.

### V3 — Abonnement, Kündigung, Widerruf

| | |
|---|---|
| Zweck | Abschluss, Änderung und Kündigung des Abos; Nachweis nach § 312k BGB |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b; lit. c für den Kündigungsnachweis |
| Betroffene | Kundinnen und Kunden |
| Datenkategorien | `customer_subscriptions`; `cancellation_requests`: E-Mail, Kunden-ID, Zeitpunkt |
| Empfänger | S, R |
| Drittland | nein |
| Löschfrist | bis zum Ablauf möglicher Nachweispflichten |

Der Kündigungsweg nach § 312k BGB läuft **ohne Anmeldung**. Die eingegebene
Adresse ist damit unvalidierter Fremdeingang; sie wird beim CSV-Export gegen
Formelinjektion neutralisiert (`email-export/format.ts`).

### V4 — Individuelle Angebote (Profiling)

| | |
|---|---|
| Zweck | Auswahl eines vergünstigten Produkts je Kundin/Kunde |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. f (berechtigtes Interesse: Kundenbindung) |
| Betroffene | Kundinnen und Kunden |
| Datenkategorien | Kaufhistorie der letzten 90 Tage aus `purchases`/`purchase_items`; Geburtsdatum aus `profiles`; Ergebnis in `personal_offers`, `offers`, `offer_activations` |
| Empfänger | S |
| Drittland | nein |
| Löschfrist | Angebot 3 Tage gültig; Datensatz bleibt zur Missbrauchsvermeidung bestehen |

**Profiling nach Art. 4 Nr. 4 — ja.** Keine automatisierte Entscheidung im Sinne
von Art. 22: Der Rabattsatz ist im Code fest auf 10 % gesetzt und für alle
gleich; es entscheidet sich nur, *welches* Produkt vergünstigt wird.
**Widerspruchsrecht nach Art. 21 Abs. 1** besteht und ist in der
Datenschutzerklärung sowie in den Nutzungsbedingungen benannt. Die eingesetzten
Verfahren sind in `public.ki_register` einzeln eingestuft und im
`AiInfoScreen` beschrieben.

### V5 — Treueprogramm, Kundenkarte, Empfehlungen

| | |
|---|---|
| Zweck | Punkte für Öffnungstage, digitale Kundenkarte, Challenges, Empfehlungsprogramm, Spendenabstimmung |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b (Bestandteil der Leistung) |
| Betroffene | Kundinnen und Kunden |
| Datenkategorien | `customer_login_days`, `customer_card` (Kunden-ID + Token), `customer_challenge_awards`, `loyalty_bonus_grants`, `referrals`, `referral_codes`, `referral_rewards`, `donation_votes`, `product_ratings` |
| Empfänger | S |
| Drittland | nein |
| Löschfrist | **Öffnungstage: 90 Tage, täglich automatisch gelöscht** (`cron.job` „purge_login_days", 03:15 Uhr, ruft `app.purge_login_days()`; die Funktion löscht `where day < heute() - 90`). Übrige: bis zur Kontolöschung |

Bis zum 25.08.2026 war dies die **einzige** Verarbeitung mit einer technisch
durchgesetzten Löschfrist. Seither gilt sie auch für V6 und V12; damit sind
alle drei Protokolle begrenzt.

### V6 — E-Mail-Versand und Versandprotokoll

| | |
|---|---|
| Zweck | Anmelde- und Systemmails (Registrierung, Kennwort, Einladung), Benachrichtigungen, Nachweis der Zustellung |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b; lit. f für den Zustellnachweis; lit. a bei einwilligungspflichtigen Themen (`email_topic`, `email_consent_event`) |
| Betroffene | Kundinnen und Kunden, Beschäftigte, Gesellschafter |
| Datenkategorien | `email_log`: Absender, Empfänger, Betreff, Status, Zeitpunkt, Provider-ID, Fehlertext — **Inhalt nur bei Nicht-Auth-Mails**; `email_outbox`; `email_consent_event` (inkl. User-Agent); `email_unsubscribe_token` |
| Empfänger | S, R, **G** |
| Drittland | nein für R (EU-Region Irland); **USA für G** |
| Löschfrist | **12 Monate**, täglich automatisch (`cron.job` „purge_email_log", 03:30 Uhr, ruft `app.purge_email_log()`). Ausgenommen und damit **10 Jahre**: Vertrags-, Kündigungs-, Löschantrags- sowie Rechnungs- und Belegmails |

**Auth-Mails werden ohne Inhalt protokolliert** (Migration 0124): Vorher standen
Bestätigungs-URL samt `token_hash` und Einmalcode im Klartext in `email_log`.

**Offene Lücke:** `reply_to` jeder Systemmail zeigt auf
`boerdesnack24@gmail.com`. Damit ist Google Empfänger jeder Antwort. Ein
AV-Vertrag nach Art. 28 existiert dafür nicht — den bietet Google nur für
Workspace. Entscheidung vom 24.08.2026: Die Adresse zieht auf die eigene
Domain, siehe `docs/POSTEINGANG_AKTIVIEREN.md`. Bis dahin bleibt die Lücke
bestehen und ist hier dokumentiert, nicht beschönigt.

### V7 — Kontaktanfragen und Beschwerden

| | |
|---|---|
| Zweck | Bearbeitung von Anfragen und Reklamationen |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b bzw. lit. f |
| Betroffene | Kundinnen und Kunden, Interessenten |
| Datenkategorien | `contact_messages`, `purchase_complaints` |
| Empfänger | S, **G** (solange der Rückkanal auf Gmail zeigt) |
| Drittland | USA für G |
| Löschfrist | nach Erledigung, soweit keine Nachweispflicht entgegensteht |

### V8 — Buchhaltung und Finanzauswertung

| | |
|---|---|
| Zweck | Buchführung, Umsatzsteuer, betriebswirtschaftliche Auswertung, DATEV-Buchungsstapel |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. c (§ 140 ff. AO, GoBD) |
| Betroffene | Lieferanten und Dienstleister, mittelbar Kundinnen und Kunden über Kaufdaten |
| Datenkategorien | `finance_bookings` (Buchungsdatum, SKR-03-Konto, **Bezeichnung des Belegs — kann Lieferantennamen enthalten**, Beträge, Steuersatz, Herkunftskonto), `finance_accounts`, `finance_balance_snapshots`, `sevdesk_sync_runs`, `payments`, `invoices` |
| Empfänger | S, **sevD** |
| Drittland | nein (sevDesk: Deutschland) |
| Löschfrist | 10 Jahre (§ 147 AO) |

Die Belege werden **aus** sevDesk gelesen, nicht dorthin übertragen.
`sevdesk_sync_runs.diagnostics` hält eine Strukturprobe des ersten Belegs
fest — bewusst nur Feldnamen und Buchungswerte, **keine Freitexte**; ein Test
sichert das ab (`belegProbe: nennt Feldnamen, aber keine Freitexte`).
Zugriff nur mit der Berechtigung `finance.view`, serverseitig geprüft.

### V9 — Beschäftigten-, Gesellschafter- und Betriebsunterlagen

| | |
|---|---|
| Zweck | HACCP-/IfSG-Nachweise, Schulungen, Reinigungs-, Temperatur-, Füll- und Entsorgungsprotokolle, Gesellschafterfreigaben (2-of-2), elektronische Unterschriften |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. c (LFGB, IfSG, VO (EG) 852/2004); Art. 6 Abs. 1 lit. b für Gesellschafterunterlagen |
| Betroffene | Beschäftigte (derzeit keine), Gesellschafter, Partner |
| Datenkategorien | `employee_trainings`, `ifsg_briefings`, `document_employee_signatures` (**Unterschriftsbild, IP-Hash**), `document_approvals`, `document_approval_decisions` (Unterschrift-URL), `partner_signatures` (Name, DocuSign-ID), `signatures`, `cleaning_logs`, `temperature_logs`, `filling_logs`, `disposal_logs`, `maintenance_logs`, `cash_collection_logs`; Storage-Buckets `documents`, `employee-signatures`, `haccp`, `partner-signatures`, `signed-documents` — **alle fünf privat** |
| Empfänger | S, **DS** |
| Drittland | **USA für DS** |
| Löschfrist | nach den jeweiligen gesetzlichen Vorgaben |

Eine Unterschrift ist ein biometrieähnliches Merkmal, aber **keine** besondere
Kategorie nach Art. 9: Sie wird als Bild aufbewahrt, nicht zur eindeutigen
Identifizierung technisch verarbeitet. Die IP-Adresse wird nur als Hash
abgelegt (`ip_hash`), nicht im Klartext.

### V10 — Betrieb der Web-Fassung

| | |
|---|---|
| Zweck | Auslieferung der Web-App |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. f (Bereitstellung des Dienstes) |
| Betroffene | alle Aufrufenden |
| Datenkategorien | IP-Adresse, technisch bedingt beim Abruf |
| Empfänger | **GH** |
| Drittland | **USA für GH** |
| Löschfrist | liegt bei GitHub; wir speichern keine Server-Logs |

Kein Tracking, keine Analyse-SDKs, kein Einwilligungsbanner erforderlich
(§ 25 Abs. 2 Nr. 2 TDDDG). `SENTRY_DSN` und `POSTHOG_API_KEY` sind in der
Demo-Konfiguration leer; die Pakete sind nicht eingebunden.

### V11 — Betroffenenrechte und Kontolöschung

| | |
|---|---|
| Zweck | Bearbeitung von Auskunfts- und Löschanträgen (Art. 15–21) |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. c |
| Betroffene | Kundinnen und Kunden |
| Datenkategorien | `account_deletion_requests`, `consents` |
| Empfänger | S, R, **G** |
| Drittland | USA für G |
| Löschfrist | nach Erledigung, Nachweis der Bearbeitung bleibt |

`account-deletion-request` schickt die interne Benachrichtigung an die
Support-Adresse. Dieser Kanal darf keine Sekunde ins Leere zeigen — deshalb
wird `mailConfig.supportEmail` beim Domainwechsel **zuletzt** umgestellt.

### V12 — Änderungsprotokoll und Sicherheitsdiagnose

| | |
|---|---|
| Zweck | Nachvollziehbarkeit von Änderungen (GoBD), Fehlersuche an der Anmeldung |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. c und lit. f |
| Betroffene | alle angemeldeten Personen |
| Datenkategorien | `audit_log`: handelnde Person, Zeitpunkt, Tabelle, Datensatz, Alt- und Neuwert; `auth_hook_diagnose`: Ausgang und Grund eines Hook-Aufrufs, **ohne Geheimnisse und ohne Signaturen** |
| Empfänger | S |
| Drittland | nein |
| Löschfrist | **10 Jahre**, täglich automatisch (`cron.job` „purge_audit_log", 03:25 Uhr, ruft `app.purge_audit_log()`); Frist nach § 147 Abs. 3 AO, weil das Protokoll auch Änderungen an steuerlich relevanten Daten enthält |

### Nicht personenbezogen — der Vollständigkeit halber

* **Automatentelemetrie** (`machine_telemetry_events`, `machine_health`,
  `machine_slots`, `nayax_sales`, `machine_sales_daily`): Gerätedaten und
  Verkaufsereignisse ohne Personenbezug. Siehe aber Abschnitt 5.
* **Wetterdaten** (`weather_daily`) über Bright Sky auf Basis von Daten des
  Deutschen Wetterdienstes: keine personenbezogenen Daten übermittelt.

---

## 3. Empfänger und Auftragsverarbeiter (Art. 30 Abs. 1 lit. d, e)

| Kürzel | Empfänger | Zweck | Ort | Grundlage |
|---|---|---|---|---|
| S | Supabase | Datenbank, Anmeldung, Serverfunktionen, Dateiablage | EU, Region Frankfurt am Main | AV-Vertrag nach Art. 28 |
| R | Resend | E-Mail-Versand | EU, Region Irland | AV-Vertrag nach Art. 28 |
| GH | GitHub Pages | Auslieferung der Web-Fassung | **USA** | Art. 46: Standardvertragsklauseln |
| sevD | sevDesk | Buchhaltung | Deutschland | AV-Vertrag nach Art. 28 |
| DS | DocuSign | elektronische Unterschriften (nur intern) | **USA** | Art. 46: Standardvertragsklauseln |
| **G** | **Google (Gmail)** | **Rückkanal jeder Systemmail, Support-Postfach** | **USA** | **kein AV-Vertrag — offene Lücke, Abschnitt 5** |

Externe Links (Google Maps im Automatenfinder) sind keine Übermittlung durch
uns: Der Aufruf erfolgt erst, wenn die Nutzerin oder der Nutzer den Link
antippt, und verlässt dabei die App.

---

## 4. Technische und organisatorische Maßnahmen (Art. 30 Abs. 1 lit. g, Art. 32)

**Zugriffskontrolle.** Alle **94 Tabellen** im Schema `public` haben
Row-Level-Security aktiviert — nachgezählt über `pg_class.relrowsecurity`:
94 mit, 0 ohne. Vier Tabellen (`customer_card`, `customer_challenge_awards`,
`customer_login_days`, `email_unsubscribe_token`) haben RLS **ohne jede
Policy**: Das ist Absicht und die fehlerverzeihende Richtung — ohne Policy
lehnt RLS ab. Der Zugang läuft dort ausschließlich über geprüfte
`SECURITY DEFINER`-Funktionen; die App greift auf keine der vier direkt zu
(nachgeprüft: 0 Treffer in `apps/mobile/lib`).

**Rollen und Rechte.** Vier definierte Rollen, drei davon vergeben (siehe
Abschnitt 1), und 25 einzelne Berechtigungen in `public.permissions`;
Finanzdaten hängen an `finance.view`.
`EXECUTE` ist im Schema `app` von PUBLIC, `anon` und `authenticated` entzogen
(Migration 0120) — bei Funktionen genügt ein Entzug von `anon`/`authenticated`
allein nicht, weil PostgreSQL jeder neuen Funktion automatisch PUBLIC-Rechte
gibt.

**Trennung der Firmenkunden.** Tabellen mit `business_id` prüfen die
Mitgliedschaft über `app.is_business_member`; ein Wächter im Bauablauf
(`check_mandantentrennung.py`) blockiert eine neue Tabelle ohne diese Prüfung.

**Geheimnisse.** Sämtliche Zugangsdaten zu Fremdsystemen liegen serverseitig
als Edge-Function-Secrets. Im ausgelieferten Bundle stehen nur Supabase-URL
und der öffentliche `anon`-Schlüssel; der Schutz liegt vollständig in den
RLS-Regeln. Seit dem 25.08.2026 enthält der Anmeldebildschirm **keine
Zugangsdaten mehr im Quelltext**.

**Verschlüsselung.** Transport durchgehend über TLS. Kennwörter als bcrypt-Hash
in `auth.users`. IP-Adressen bei Unterschriften nur als Hash.

**Prüfungen im Bauablauf.** Sieben blockierende Wächter, darunter die Suche
nach der NULL-Falle in Rollenprüfungen, der Abgleich aufgerufener
Datenbankfunktionen gegen die Migrationen und die datenschutzrechtliche
Einordnung jeder neuen Abhängigkeit.

**Belastbarkeit.** Tägliche Sicherungen und Point-in-Time-Recovery liegen bei
Supabase. **Ungeprüft:** Ein Wiederherstellungsversuch ist nie durchgeführt
worden. Eine Sicherung, die nie zurückgespielt wurde, ist eine Annahme.

---

## 5. Offene Punkte — was dieses Verzeichnis nicht behauptet

Ein Verzeichnis, das nur das Erledigte nennt, taugt nichts. Diese Punkte sind
offen und gehören dem Verantwortlichen vorgelegt:

1. **Google als Empfänger ohne AV-Vertrag (V6, V7, V11).** Jede Systemmail
   trägt `reply_to: boerdesnack24@gmail.com`; Antworten und Löschanträge
   landen in einem privaten Gmail-Postfach. Für privates Gmail gibt es keinen
   AV-Vertrag nach Art. 28. Abschnitt 4 der Datenschutzerklärung nennt Google
   nicht, Abschnitt 5 spricht von *zwei* US-Empfängern statt drei. Beschlossen
   ist der Umzug auf die eigene Domain; die Reihenfolge steht in
   `docs/POSTEINGANG_AKTIVIEREN.md`. Bis dahin besteht die Lücke.
2. ~~Keine Löschfrist für `audit_log` und `email_log`.~~ **Erledigt am
   25.08.2026** (Migration 0126, Entscheidung des Auftraggebers): `audit_log`
   einheitlich 10 Jahre, `email_log` 12 Monate mit Ausnahme der
   aufbewahrungspflichtigen Nachrichten. Die E-Mail-Regel ist bewusst als
   **Erlaubnisliste** gebaut: Gelöscht wird nur, was ausdrücklich als
   kurzlebig eingetragen ist — ein unbekannter oder neuer Tag bleibt liegen.
   Wer später einen Rechnungsversand ergänzt und den Tag vergisst, verliert
   damit keinen Nachweis. Nachgeprüft: beide `cron.job`-Einträge aktiv,
   beide Funktionen einmal ausgeführt (0 gelöscht, nichts ist alt genug),
   und die Tag-Regel gegen zehn Beispiel-Tags durchgespielt — `invoice`,
   `subscription-cancel`, `account-deletion-request` und ein leerer Tag
   bleiben, die vier kurzlebigen werden erfasst.
3. **`nayax_sales.raw` speichert die vollständige Nutzlast des
   Telemetrie-Webhooks.** Die Tabelle ist derzeit leer, es ist also nichts
   passiert. **Bevor der erste echte Verkauf einläuft, ist zu prüfen, was
   Nayax tatsächlich sendet** — enthält die Nutzlast Kartendaten oder
   Terminal-Kennungen mit Personenbezug, ist dieses Verzeichnis um eine
   Verarbeitung zu ergänzen und `raw` zu beschneiden.
4. **Kein Wiederherstellungstest der Sicherungen** (Abschnitt 4).
5. **Verifikationspflicht sevDesk (V8).** Die Feld- und Kontozuordnung des
   Connectors ist noch nicht einmalig gegen das echte sevDesk-Konto geprüft.
6. **Keine anwaltliche Freigabe.** Dieses Verzeichnis beschreibt die Technik
   belastbar; es ersetzt keine Rechtsberatung.

---

## 6. Pflege

Dieses Verzeichnis ist nach jeder Änderung mitzuziehen, die die Prüfliste in
`CLAUDE.md` auslöst — namentlich: neue Tabelle oder Spalte mit
Personenbezug, neuer externer Dienst, neue automatische E-Mail, neue
Auswahllogik, entfernte Funktion. Es ist damit der achte Bereich der
Rechtsprüfung. Die Fassung oben ist bei jeder Änderung hochzuziehen.
