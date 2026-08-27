# Verzeichnis von Verarbeitungstätigkeiten (Art. 30 Abs. 1 DSGVO)

**Stand: 27.08.2026 · Fassung 14**

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

Seit dem 25.08.2026 stehen dort zwei weitere Schlüssel:
`doppelte_zahlungen_unterdrueckt` und `doppelte_zahlungen_verdacht`. Sie
halten fest, welche Buchung als zweite Erfassung desselben Geldflusses nicht
übernommen wurde und welche Belegpaare zur Prüfung in sevDesk anstehen —
jeweils nur über **Belegkennungen** (`voucherId-posId`) und einen festen
Begründungstext. Lieferantennamen und Belegnummern stehen dort nicht;
dieselbe Zurückhaltung wie bei der Strukturprobe.

Seit derselben Änderung stehen dort ausserdem `richtung_abweichungen`
(Belegkennung, Kontonummer und die beiden widersprüchlichen Richtungen) und
`gutschrift_ohne_gegenbuchung` (Belegkennung, Kontonummer und ein fester
Begründungstext). Auch sie führen **keine Freitexte**: keine
Lieferantennamen, keine Belegnummern, keine Beträge. Am Code nachgesehen;
anders als bei der Strukturprobe sichert das kein Test ab, weil die beiden
Listen im Ablauf selbst entstehen und nicht in einer prüfbaren Funktion.

Eine so unterdrückte Buchung wird **weich** gelöscht (`deleted_at`), nicht
entfernt. Sie zählt nicht mehr in die Auswertung, bleibt aber unter der
Aufbewahrungsfrist des § 147 AO lesbar — eine Buchung, die spurlos
verschwindet, wäre nach GoBD gerade das Falsche.

Seit dem 26.08.2026 gilt dasselbe für Belege, die **in sevDesk gelöscht**
wurden. Bis dahin schrieb der Connector nur und löschte nie; was in sevDesk
verschwand, blieb hier dauerhaft stehen. Fünf Telefonbelege standen dadurch
doppelt in der Auswertung. Jetzt wird im synchronisierten Zeitraum weich
gelöscht, was der Lauf nicht mehr geliefert hat; der Schlüssel
`in_sevdesk_geloescht` hält die betroffenen **Belegkennungen** fest — wie bei
den Nachbarschlüsseln ohne Lieferantennamen, Belegnummern und Beträge.
`aufraeumen_ausgesetzt` nennt den Grund, wenn nicht aufgeräumt wurde.

Das ist zugleich eine **Datenminimierung** nach Art. 5 Abs. 1 lit. c: Ein
Beleg, den das führende System nicht mehr führt, gehört nicht in die
Auswertung. Die Zeile selbst bleibt für die Frist des § 147 AO lesbar.

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

### V13 — Fahrtenaufzeichnung für die Nutzungseinlage

| | |
|---|---|
| Zweck | Ermittlung der individuellen Kilometersätze der privaten PKW der Gesellschafter und Bewertung der betrieblich gefahrenen Strecken als Nutzungseinlage, Anlage zum Jahresabschluss |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. c (§ 140 ff. AO, § 4 Abs. 4 EStG, GoBD) |
| Betroffene | die beiden Gesellschafter |
| Datenkategorien | `pkw` (**Kfz-Kennzeichen**), `pkw_jahr` (Kilometerstände zum 01.01. und 31.12.), `pkw_kosten` (Kostenart, Belegdatum, Bezeichnung, Bruttobetrag — **private Ausgaben der Gesellschafter**), `pkw_fahrten` (**Datum, Anlass und Strecke jeder betrieblichen Fahrt**) |
| Empfänger | S; die Anlage geht als PDF an die Steuerberatung |
| Drittland | nein |
| Löschfrist | 10 Jahre (§ 147 AO), wie die übrigen Buchhaltungsunterlagen |

Diese Verarbeitung ist heikler als ihr Umfang vermuten lässt, und das soll
hier stehen statt beschönigt zu werden: `pkw_fahrten` hält Datum, Anlass und
Strecke jeder einzelnen Fahrt fest. In der Summe ist das ein
**Bewegungsprofil** der beiden Gesellschafter. Es entsteht freiwillig und in
eigener Sache — die Aufzeichnung ist die Voraussetzung dafür, die Fahrten
steuerlich geltend zu machen —, aber es bleibt eines.

Zugriff nur mit `finance.view`, also den beiden Rollen `system_admin` und
`shareholder`; kein eigenes Recht, damit keines gepflegt werden muss und
beim nächsten Rollenwechsel vergessen wird. Serverseitig über RLS auf allen
vier Tabellen und in der Auswertung `anlage_pkw` erzwungen, nachgestellt am
25.08.2026: Der Aufruf ohne passende Identität scheitert mit „Keine
Berechtigung für Finanzdaten".

Die Kosten werden von Hand erfasst und stammen nicht aus sevDesk. Es sind
private Fahrzeuge; ihre Kosten sind keine Betriebsausgaben und stehen
deshalb in keiner Buchung.

Korrekturen sind möglich, solange die Anlage des Jahres nicht freigegeben
ist. Gestrichen wird **weich** (`deleted_at`): Eine Buchhaltungsunterlage,
aus der Zeilen spurlos verschwinden, wäre nach GoBD gerade das Falsche.
Sobald beide Gesellschafter signiert und freigegeben haben, ist das Jahr
unveränderlich; durchgesetzt in der Datenbank über den Trigger
`app.anlage_pkw_sperre` auf allen drei Tabellen, nicht in der Oberfläche.
Nachgestellt am 26.08.2026: sechs Schreibversuche im freigegebenen Jahr,
darunter ein Umdatieren einer Fahrt in ein offenes Jahr, alle mit 42501
abgewiesen; das offene Jahr blieb schreibbar.

### V14 — Bildregister der Produktfotos

| | |
|---|---|
| Zweck | Nachweis der eigenen Urheberschaft an Produktfotos, markenrechtliche Abgrenzung gegenüber den abgebildeten Herstellern, Prüfung der Kennzeichnungspflicht nach Art. 50 Abs. 4 EU AI Act |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. f (berechtigtes Interesse an der Beweisbarkeit der eigenen Rechtsposition); für die Freigabe zusätzlich Art. 6 Abs. 1 lit. b |
| Betroffene | Gesellschafter und künftige Beschäftigte, soweit sie fotografieren oder freigeben |
| Datenkategorien | `produktbilder`: **Name des Fotografen**, **Name der freigebenden Person** samt Freigabedatum, dazu Produktbezeichnung, Dateiname der Aufnahme, Aufnahmedatum, eingesetztes KI-System, Beschreibung der Bearbeitung |
| Empfänger | S |
| Drittland | nein |
| Löschfrist | solange das Bild verwendet wird, danach 3 Jahre (Verjährung urheber- und wettbewerbsrechtlicher Ansprüche, §§ 195, 199 BGB) |

Der Personenbezug ist gering, aber vorhanden und deshalb hier geführt: Zwei
Freitextfelder tragen Klarnamen. Genau darin liegt ihr Zweck — ein Nachweis
„die Aufnahme stammt von uns" ohne die Person, die sie gemacht hat, wäre
keiner. Weitere Personendaten enthält die Tabelle nicht; abgebildet sind
Waren, keine Menschen.

Das Feld `kennzeichnung_noetig` ist eine **generierte Spalte**, kein
Ankreuzfeld: Es steht auf wahr, wenn ein KI-System eingesetzt wurde UND dabei
das Produkt verändert, ein Produkt neu erzeugt oder eine Umgebung erzeugt
wurde. Damit ist die Einstufung für jedes Bild dieselbe und nicht von der
Tagesform dessen abhängig, der das Formular ausfüllt.

Vier Prüfregeln der Tabelle sichern die Aussagekraft ab, alle am 26.08.2026
mit echten Schreibversuchen nachgestellt und mit 23514 abgewiesen: „KI
verwendet" ohne genanntes System; ein System ohne KI-Einsatz; eine Freigabe
ohne vorherige Prüfung nach Art. 50; eine halbe Freigabe (Person ohne Datum
oder umgekehrt). Ein gültiger Eintrag ging im selben Lauf durch.

Gestrichen wird weich (`deleted_at`). Ein Register, aus dem Zeilen spurlos
verschwinden, taugt als Nachweis nichts — gerade dann, wenn jemand behauptet,
ein Bild sei nie dokumentiert worden.

Stand 26.08.2026: 62 Produkte im Katalog, davon 0 mit hinterlegtem Bild, und
0 Einträge im Register. Es ist noch kein Produktfoto im Kundenbereich.

### V15 — Firmenkunden: Mitgliedschaft, Einladung, Budget, Abrechnung

| | |
|---|---|
| Zweck | Abwicklung des Vertrages mit einem Firmenkunden: Mitgliedschaft im Firmenkonto, Einladung, Budgetgrenzen, Monatsabrechnung der auf Firmenrechnung getätigten Käufe |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b (Vertrag mit dem Firmenkunden, den die beschäftigte Person am Automaten in Anspruch nimmt); für die Abrechnung zusätzlich Art. 6 Abs. 1 lit. f (nachvollziehbare Rechnung) |
| Betroffene | Beschäftigte von Firmenkunden; eingeladene Personen, die noch kein Konto haben |
| Datenkategorien | `business_members` (Profil-Zuordnung, Rolle, Status, Einladungs- und Aktivierungszeitpunkt); `business_invitations` (**E-Mail-Adresse**, Rolle, Ablauf, Token als SHA-256); `business_budgets` (Monats- und Tagesgrenze, Zuschussanteil je Person); `purchases.business_id` |
| Empfänger | S, **AG** |
| Drittland | nein |
| Löschfrist | Mitgliedschaft und Budget: bis Vertragsende, danach 3 Jahre; Käufe und Abrechnung: 10 Jahre (§ 147 AO); erledigte Einladungen: 12 Monate |

**Der Arbeitgeber ist eigener Verantwortlicher, nicht Auftragsverarbeiter.**
Er erhält die Daten für seinen eigenen Zweck — Verpflegungszuschuss und
Abrechnung —, nicht weisungsgebunden für uns. Übermittelt werden je Kauf
Zeitpunkt, Betrag, Automat, Artikel und **der Name der kaufenden Person**;
Letzteres, weil eine Abrechnung ohne Zuordnung keine ist und ein Budget je
Person sonst nicht möglich wäre. Die Datenschutzerklärung nennt seit Fassung
v16 alle fünf Angaben ausdrücklich — bis dahin fehlte der Name in der
Aufzählung, obwohl er fachlich nötig ist.

Was der Arbeitgeber **nicht** erhält: alles Übrige aus dem Kundenkonto.
Insbesondere keine Privatkäufe an öffentlichen Automaten — die Zuordnung
entsteht ausschliesslich aus dem **Standort des Automaten**
(`app.purchase_business_pruefen`), nicht aus der Person.

**Kein Guthaben.** `business_budgets` deckelt nur, was der Arbeitgeber trägt;
es wird nichts aufgeladen und nichts ausgezahlt. Der Anteil wird bei der
Abrechnung gerechnet (`app.business_split`) und nicht gespeichert.

**Der Einladungs-Token** steht als SHA-256 in der Tabelle, nie im Klartext;
der Klartext wird einmalig an den Aufrufer zurückgegeben. Angenommen werden
kann eine Einladung nur von der Person, deren Profil-E-Mail zur Einladung
passt — am 26.08.2026 mit einer weitergeleiteten Einladung nachgestellt und
mit 42501 abgewiesen.

**Offen (Art. 14 DSGVO):** Eine Einladung geht an jemanden, dessen E-Mail wir
nicht von ihm selbst haben, sondern von seinem Arbeitgeber. Die Information
nach Art. 14 muss deshalb **in der Einladungsmail** stehen. Die Mailvorlage
gibt es noch nicht — die RPC gibt den Token zurück und verschickt nichts. Vor
dem ersten Versand nachzuholen.

### V16 — Werbeflächen und Werbeverträge

| | |
|---|---|
| Zweck | Vermietung physischer Werbeflächen an unseren Automaten: Inventar, Verträge, Freigabe des Motivs, Auslastung |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. b (Vertrag mit dem Werbekunden); für die Motivfreigabe Art. 6 Abs. 1 lit. f (Nachweis, wer eine Gestaltung an unserem Automaten freigegeben hat) |
| Betroffene | Ansprechpersonen des Werbekunden über die Mitgliedschaft (siehe V15); die eigene Person, die ein Motiv freigibt |
| Datenkategorien | `advertising_spaces` (**keine personenbezogenen Daten** — Automat, Position, Maße, Preis, Zustand); `advertising_space_contracts` (Firma, Laufzeit, Preis, Motivbeschreibung, **Name der freigebenden Person**, Bearbeiterkennungen) |
| Empfänger | S |
| Drittland | nein |
| Löschfrist | 10 Jahre nach Vertragsende (§ 147 AO, § 257 HGB) |

**Der Personenbezug ist dünn und wird hier trotzdem geführt.** Der
Vertragspartner ist eine juristische Person; personenbezogen sind nur der
Name der freigebenden Person und die Bearbeiterkennungen. Genau diese
Freigabe ist aber der Punkt: Was an unserem Automaten klebt, verantworten
wir mit, und ohne Namen ist der Nachweis keiner.

**Wer sieht was.** Der Werbekunde sieht ausschliesslich seine eigenen
Verträge (`app.is_business_member`) und nur die Flächen, auf die sich einer
davon bezieht. Einen Marktplatz mit allen freien Flächen gibt es bewusst
noch nicht.

**Keine Ausspielung, kein Tracking.** Diese Tätigkeit betrifft ausschliesslich
physische Flächen. Es wird nichts in der App eingeblendet, nichts gemessen
und nichts über Kundinnen und Kunden an Werbekunden übermittelt. Reichweiten
werden zurzeit nicht ausgewiesen — dafür gibt es zu wenige Verkaufsdaten,
und eine geschätzte Reichweite zu bewerben wäre nach § 5 UWG angreifbar.

### V17 — Rechnungsstellung an Firmenkunden über sevDesk

| | |
|---|---|
| Zweck | Ordnungsgemässe Rechnung nach § 14 UStG über den Warenbezug der Beschäftigten eines Firmenkunden; Freigabe durch einen Gesellschafter |
| Rechtsgrundlage | Art. 6 Abs. 1 lit. c (§ 14 UStG, § 147 AO, § 257 HGB); Art. 6 Abs. 1 lit. b für die Vertragsabwicklung |
| Betroffene | Beschäftigte des Firmenkunden (im beigefügten Einzelnachweis), Ansprechpersonen des Firmenkunden |
| Datenkategorien | `business_invoice_runs`: Zeitraum, Beträge, Steueraufteilung, **eingefrorene Grundlage** samt Einzelnachweis (Name der kaufenden Person, Zeitpunkt, Automat, Artikel), Empfängerdaten, wer angefordert und wer freigegeben hat; `businesses.sevdesk_contact_id` |
| Empfänger | S, **sevD**, **AG** |
| Drittland | nein (sevDesk: Deutschland) |
| Löschfrist | 10 Jahre (§ 147 AO) |

**Die Rechnung entsteht nicht bei uns, sondern in sevDesk.** Von hier geht
nur der Auftrag hin: Zeitraum, Beträge nach Steuersätzen und der
Empfängerkontakt. Fortlaufende Nummer, Steuerausweis, Aufbewahrung und das
E-Rechnungsformat leistet sevDesk — es hier ein zweites Mal zu führen wäre
dieselbe Rechnung an zwei Orten.

**Die Grundlage wird eingefroren** (`business_invoice_runs.grundlage`). Die
Aufteilung zwischen Arbeitgeber- und Beschäftigtenanteil rechnet
`app.business_split` sonst bei jedem Abruf neu; eine Rechnung darf sich nicht
mehr bewegen. Damit steht dort auch der vollständige Einzelnachweis
dauerhaft — das ist der Grund für die 10-Jahres-Frist und zugleich die
Datenkategorie mit dem stärksten Personenbezug in diesem Bereich.

**Freigabe als eigener Akt.** Anfordern darf, wer Firmenkunden verwaltet;
freigeben nur ein Gesellschafter (`app_role() = 'shareholder'`) oder der
Systemadministrator — und erst, wenn die Rechnung in sevDesk tatsächlich
entstanden ist. Beides mit echten Identitäten nachgestellt und abgewiesen,
wo es abzuweisen war.

**Ein laufender Monat kann nicht abgerechnet werden**, und eine Rechnung, die
nicht aufgeht, wird verweigert statt gestellt: fehlende Einzelposten,
unbekannter Steuersatz oder eine Abweichung zwischen Postensumme und
Kaufbetrag über zwei Cent brechen den Vorgang ab.

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
| AG | Arbeitgeber des Kunden (Firmenkunde) | Verpflegungszuschuss und Abrechnung der Käufe an seinem Standort | Deutschland | **eigener Verantwortlicher**, kein AV-Vertrag — Art. 6 Abs. 1 lit. b |

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

**Zuordnung eines Standortes zu einer Firma.** Ein Ort gehört zu höchstens
einem Firmenkunden (`business_location_set`, 0153). Das ist keine
Bequemlichkeit, sondern Datenschutz: Wären zwei Betriebe an einem Ort
zugeordnet und jemand in beiden Mitglied, liesse sich nicht entscheiden, wem
sein Einkauf zu melden ist. Die Herleitung bräche in diesem Fall ab (0123);
die Zuordnung wird deshalb schon vorher abgewiesen.

**Stammdaten der Firmenkunden.** Row-Level-Security wirkt je Zeile, nicht je
Spalte. Die Schreibregel auf `public.businesses` liess deshalb dem
Firmen-Administrator des Kunden die ganze Zeile offen — einschliesslich
`sevdesk_contact_id`, an der die Rechnungsstellung hängt (V17). Am 27.08.2026
nachgestellt und mit Migration 0151 geschlossen: Ein Trigger lässt eine
Änderung nur zu, wenn der Aufrufer `businesses.manage` hat oder ohne
Nutzerkontext arbeitet (Wartung, Dienstschlüssel); der einzige Weg für die
Verwaltung ist `public.business_update`. **Kein Vorfall nach Art. 33:** Zum
Zeitpunkt der Entdeckung standen 0 Firmenkunden, 0 Firmenmitglieder,
0 Einladungen und 0 Rechnungsläufe in der Datenbank — abgefragt, nicht
geschätzt; sämtliche 16 Einträge in `audit_log` zu dieser Tabelle stammen aus
den eigenen Prüfläufen vom 26./27.08.2026. Es gab niemanden, der die Lücke
hätte nutzen können, und keine personenbezogenen Daten, die sie berührt hätte.

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
