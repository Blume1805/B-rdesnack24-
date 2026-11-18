# Zielbild 4,5 von 5: was dafür nötig ist und wo es steht (16.11.2026)

Bezug: `AUDIT-2026-11-PHASE2-3-BERICHT.md` (Bewertung vom 15.11.2026:
Sicherheit 3, Funktion 3, Architektur 3, Recht nicht bewertbar, Betrieb 2).

Philipp hat am 16.11.2026 gefragt, was geschehen muss, damit jeder Bereich
mindestens 4,5 von 5 erreicht, und die Umsetzung beauftragt. Dieses Dokument
legt für jeden Bereich fest, **woran** 4,5 gemessen wird, und führt jeden
Punkt mit Stand und Nachweis.

## 1. Sachverhalt

Die Datenbankschicht ist geprüft und belegt (29 Prüfskripte, Fingerabdruck,
Produktion gleich Repository seit 15.11.2026). Was die Bewertung bei 3 hält,
liegt fast vollständig **außerhalb** der Datenbanklogik: Anmeldung (zweiter
Faktor, Rücksprungadressen), eine ungeschützte Server-Funktion, ein
öffentliches Repository, Tests auf der falschen Datenbank-Linie, fehlende
Überwachung und ein Tarif ohne zurückspielbare Sicherung.

## 2. Bewertung: was 4,5 bedeutet

Eine 4,5 heißt hier: **jede** der unten genannten Bedingungen ist erfüllt und
nachgemessen, und es gibt keinen offenen Befund mit Risiko „Mittel" oder
höher. Eine 5 bliebe einem extern geprüften System vorbehalten
(Penetrationstest, Wiederanlauf geübt).

Legende: ✅ erledigt und nachgewiesen · 🟦 fertig vorbereitet, wartet auf
einen Klick oder eine Freigabe · 🟡 Philipp muss etwas tun · ⏸ bewusst
verschoben · 🔴 offen

### 2.1 IT-Sicherheit und Datenschutz (Technik) — heute 3

| # | Bedingung für 4,5 | Befund | Stand | Nachweis / nächster Schritt |
|---|---|---|---|---|
| S1 | Interne Konten nur mit zweitem Faktor | A2-01 | 🟦 + 🟡 | App fragt den Code nach der Anmeldung ab (live seit 16.11., `mfa_verify_screen.dart`, 4 Tests). Datenbank-Pflicht als Schalter vorbereitet (`20261116090000`, `…090100`, Probe 113). Einspielen braucht Deine Bestätigung im Chat, dann Runbook O (alle vier Konten richten ein, dann Schalter an) |
| S2 | Keine Server-Funktion ohne Zugangsprüfung | A2-02 | ✅ | `weather-sync` nur noch mit Einmalmarke aus der Datenbank (`20261116120000`, Probe 116 10/10, Handler-Probe 5/5). Ausrollen: Migration, dann Funktion — beides braucht Deine Freigabe |
| S3 | Repository nicht öffentlich | A2-03 | 🟡 | Entschieden: privat. Vorher muss die App einen anderen Auslieferungsweg haben (Runbook Q, Empfehlung Weg C: Hostinger) |
| S4 | Rücksprungadressen nur eigene Domains, E-Mail-Bestätigung an | A2-09 | 🟡 | Runbook P (5 Minuten im Dashboard) |
| S5 | Server-Funktionen nur für eigene Herkunft | A2-10 | 🔴 | Herkunft auf `app.boerdesnack24.de` und `boerdesnack24.de` begrenzen; geht zusammen mit S7 |
| S6 | Kunden sehen keine internen Kennungen | A2-11 | 🔴 | Erst prüfen, welche App-Abfragen `select('*')` auf diese Tabellen machen, sonst bricht die App. Dann Spaltenrechte entziehen |
| S7 | Zweiter Faktor gilt auch in den Server-Funktionen | neu, 16.11. | 🔴 | Vier Funktionen (`documents-init-templates`, `documents-install-branded-set`, `documents-install-haccp-set`, `signature-retouch`) prüfen die Rolle mit dem Dienstschlüssel und gehen an der Datenbank-Prüfung vorbei. Fix zusammen mit dem Abgleich A2-05 |
| S8 | Geleakte Passwörter serverseitig abweisen | A2-08 | ⏸ | Nur im bezahlten Tarif; kommt mit B1 |
| S9 | Überflüssige Rechte an Sichten entfernt; Preisaufteilung nur für sichtbare Angebote | A2-12, A2-14 | ✅ | `20261116110000`, Probe 115 6/6, Gegenprobe am alten Stand schlägt fehl (2 Urteile) |
| S10 | Keine Demo-Zugänge zu echten Konten in der ausgelieferten App | neu, 16.11. | ✅ | App blendet sie in der Produktion aus (Test vorhanden). Philipp entscheidet über das Sperren von `demo-admin@…`/`demo-gs@…` in der Produktion (COMPLIANCE V-018-n) |
| S11 | Repository und Produktion haben dieselben Rechte; Fingerabdruck misst Rechte | neu, 16.11. | ✅ | `telemetry_providers` angeglichen (`20261116130000`), siebtes Merkmal; Produktion `276:268ed099…` = Nachbau |

**Erreichbar: 4,5**, sobald S1–S7 und S9 erledigt sind. S8 hängt am Tarif.

### 2.2 Funktionalität und Zuverlässigkeit — heute 3

| # | Bedingung für 4,5 | Befund | Stand | Nachweis / nächster Schritt |
|---|---|---|---|---|
| F1 | Ausgelieferte App entspricht dem Repository | A2-07 | ✅ | `app.boerdesnack24.de` seit 16.11.2026, 05:12 (gh-pages `efb739e`); alle 59 App-Aufrufe gegen die Produktion geprüft |
| F2 | Server-Funktionen haben Tests, und ein roter Test hält die Auslieferung an | A2-06 | 🟦 | `|| true` in `.github/workflows/ci.yaml` entfernen. Lokal laufen die vorhandenen Tests (16/16 am 16.11. mit Deno 2.1.4) |
| F3 | Ein durchgehender Test des Kaufwegs (Anmeldung → Freigabe → Verkauf → Beleg) | — | 🔴 | als Prüfskript gegen den lokalen Nachbau, nicht gegen die Produktion |
| F4 | Alle Server-Funktionen aus dem Repository ausgeliefert | A2-05 | 🔴 | 15 von 26 vergleichen, Abweichungen ins Repository, dann geordnet ausliefern (braucht Freigabe) |

**Erreichbar: 4,5** mit F2–F4.

### 2.3 Architektur und Codequalität — heute 3

| # | Bedingung für 4,5 | Befund | Stand | Nachweis / nächster Schritt |
|---|---|---|---|---|
| A1 | Eine einzige Datenbank-Linie | A2-06 | ✅ | 16.11.2026 stillgelegt (Entscheidung Philipp), `ARCHITECTURE.md` A-13 |
| A2 | CI baut die Produktionslinie und vergleicht den Fingerabdruck | A2-06 | 🟦 | Produktionslinie liegt seit 16.11.2026 auf GitHub (Zweig `claude/bordesnack24-audit-architecture-7xd3d6`, `cdb28ef`, mit Erlaubnis Philipp). Umstellung der CI folgt mit A1 |
| A3 | Kein toter Code | A2-13 | 🔴 | `nayax-webhook`, `send-push`, Tabellen `nayax_sales`, `device_tokens`: erst als „nicht in Betrieb" kennzeichnen, Löschen nur mit Freigabe |
| A4 | Keine Änderung nur in der Produktion | A2-20 | ✅ | Pflicht in `CLAUDE.md`. Am 16.11. noch einen Rest gefunden: die geplante Aufgabe `weather-sync` stand nur in der Produktion; sie ist jetzt Teil von `20261116120000` |

**Erreichbar: 4,5** mit A1–A3.

### 2.4 Recht — heute nicht bewertbar

Bewertbar wird der Bereich erst, wenn die Unterlagen vorliegen. Kein
Rechtsgutachten; die technische Seite ist jeweils genannt.

| # | Bedingung für 4,5 | Stand | Wer |
|---|---|---|---|
| R1 | Verträge zur Auftragsverarbeitung (Art. 28 DSGVO) für Supabase, Resend, GitHub, Hostinger, sevDesk, DocuSign, CleverPay abgelegt | 🟡 | Philipp lädt herunter bzw. schließt ab; ich lege die Liste an |
| R2 | Verzeichnis von Verarbeitungstätigkeiten (Art. 30 DSGVO) | 🔴 | ich entwerfe aus dem Code (Tabellen, Fristen aus `loeschregeln`), Philipp prüft |
| R3 | Technische und organisatorische Maßnahmen (Art. 32 DSGVO) | 🔴 | ich entwerfe; S1, S3, B1 sind Voraussetzungen für eine ehrliche Fassung |
| R4 | Preisangaben mit Pfand getrennt (§ 7 PAngV) in App, Landingpage, Datenbank | ✅ (Technik) | App seit 16.11. live; Preisschilder am Automaten prüft Philipp |
| R5 | KI-Kennzeichnung (Art. 50 KI-VO) | ✅ | `AiBadge` und `AiInfoScreen` nach `CLAUDE.md` |
| R6 | Aufbewahrung Belege (§ 147 AO) auch bei Ausfall | ⏸ | hängt an B1 |

**Erreichbar: 4,5** mit R1–R3 und B1.

### 2.5 Betriebssicherheit und Zukunftsfähigkeit — heute 2

| # | Bedingung für 4,5 | Befund | Stand | Nachweis / nächster Schritt |
|---|---|---|---|---|
| B1 | Zurückspielbare Sicherung, keine Pausierung | A2-04 | ⏸ | Bezahlter Tarif, laut Philipp „wenn echte Kunden kommen" |
| B2 | Überwachung: tägliche Prüfung, festgehaltenes Ergebnis | A2-15 | ✅ | `20261116100000` prüft täglich 06:10 UTC fehlgeschlagene Aufgaben, Tabellen ohne Zeilenschutz, Funktionen ohne Suchpfad, überfällige Löschanträge, Stand zweiter Faktor; Probe 114 8/8 |
| B3 | Alarm bei schlechtem Ergebnis | A2-15 | 🔴 | Mail über Resend, wenn `gesund = false`. Folgt auf B2 |
| B4 | Wiederanlauf einmal geübt | — | 🔴 | nach B1: Sicherung in ein Testprojekt zurückspielen, Fingerabdruck vergleichen |
| B5 | Auslieferung der Landingpage ohne Plattformbindung | V-018-e | 🟦 + 🟡 | Lovable-Auftrag vom 16.11., freigegeben und umgesetzt (Lovable `b4a3e95`): Medien in `public/medien/`, `.htaccess` mit Sicherheits-Kopfzeilen, Ablauf `hostinger.yml` nur von Hand, nicht ausgeführt. Offen: CSP und Dateiliste am fertigen Build prüfen (Lovable kann dort nicht bauen); vor dem ersten Lauf prüfe ich, ob die Seite Dienste außerhalb der eigenen Domain anspricht (`connect-src 'self'`, `form-action 'none'`) |
| B6 | Hilfsschema vom 15.11. entfernt | A2-16 | 🟡 | Löschvorgang, nur mit Freigabe |

**Ehrliche Einschätzung:** Ohne B1 bleibt Betrieb bei höchstens **3,5**. Bis
zum Tarifwechsel überbrückt ein verschlüsselter Export (eigener Ablauf, kein
Dashboard-Klick) das Risiko teilweise; die Pausierung nach 7 Tagen ohne
Aktivität verhindert er nicht.

## 3. Ergebnis

| Bereich | heute | nach allen 🟦-Punkten | Ziel erreichbar mit |
|---|---|---|---|
| Sicherheit | 3 | 4 | + S3, S4 (Philipp), S5–S7 (ich) |
| Funktion | 3 | 3,5 | + F2–F4 |
| Architektur | 3 | 3,5 | + A1 (Entscheidung), A2, A3 |
| Recht | – | – | + R1–R3 |
| Betrieb | 2 | 3 | + B1 (Tarif), B3, B4 |

## 4. Was als Nächstes passiert

**Von mir, sobald Du im Chat zustimmst** (je ein Bestätigungsklick bei
Supabase): die vier vorbereiteten Migrationen in dieser Reihenfolge
einspielen, nach jeder den Fingerabdruck messen —
`20261116090000`/`090100` (zweiter Faktor, Schalter aus),
`20261116100000` (Betriebsprüfung), `20261116110000` (Kleinbefunde),
`20261116120000` (Einmalmarke), danach `weather-sync` ausliefern.

**Von Dir:** Runbook P (Adressen), Runbook O (zweiter Faktor, alle vier),
Entscheidung Runbook Q (Weg A, B oder C), Freigabe des Lovable-Plans,
Entscheidung A1 (`main`-Linie stilllegen), Erlaubnis für den Zweig der
Produktionslinie.

**Von mir ohne weitere Freigabe:** S5–S7, F2, F3, A3 (nur Kennzeichnung), B3,
R2- und R3-Entwürfe.

## 4a. Stand nach Philipps Antwort vom 16.11.2026

* A (Einspielen): zugestimmt. Die Bestätigungsfrage von Supabase lief erneut
  nach 60 Sekunden ohne Antwort ab; gemessen: nichts eingespielt, Fingerabdruck
  der Produktion unverändert gleich dem Nachbau aus 242 Migrationen
  (`231:b8ffbbf5…|278:a9644c1f…|1379:82ab5f18…|103:7b1fc14a…|67:4ee7d4d2…|238:49d57759…`).
  Sollwerte je Schritt (Nachbau ohne Prüfdaten): nach `090000` →
  `236:76769aa3…|282:137ea0d3…|1383:6794e73c…`, nach `100000` →
  `285:0416b0c8…|1387:3fe4fee3…`, nach `110000` → `285:7dfd9bd3…`, nach
  `120000` → `236:76769aa3…|287:ba9a9072…|1389:d09aa6ef…|103:7b1fc14a…|67:4ee7d4d2…|238:49d57759…`.
* B (Lovable): freigegeben, umgesetzt (siehe B5).
* Erlaubnis Produktionslinie: erteilt, hochgeladen (`cdb28ef`).

## 4b. Stand nach Philipps Antwort „C ja, E stilllegen" (16.11.2026)

* **E erledigt:** main-Linie stillgelegt (`ARCHITECTURE.md` A-13). CI baut die
  Produktionslinie auf PostgreSQL 17 (34 Prüfskripte, 8 pgTAP-Dateien,
  Fingerabdruck gegen `fingerabdruck.soll`); Server-Funktionen: Lint und Tests
  blockierend und grün.
* **Dabei gefunden und behoben:** Rechte-Abweichung `telemetry_providers`
  (Repository weiter als Produktion), Fingerabdruck um Rechte ergänzt,
  Nachbau der Anmelde-Hilfsfunktionen wie Supabase, `config.toml` ohne die
  fünf Funktionen ohne Anmeldepflicht, `deploy-functions` mit veralteter
  Voreinstellung, Flutter-Version nicht festgelegt (CI war schon vorher rot).
* **C vorbereitet:** Ablauf `hostinger-app.yml`, `.htaccess` mit geprüfter CSP,
  Schlüsselsuche, Runbook R. Wartet auf Runbook R Teil 1 (Philipp).
* **Neuer Befund V-018-n:** Demo-Zugänge zu aktiven Produktionskonten in der
  App sichtbar; Passwort gilt nicht. App-Seite behoben; Sperren der Konten
  wartet auf Philipp.
* **A (Einspielen):** wartet auf Philipp am Desktop. Neu dazu kommt
  `20261116130000` (ändert in der Produktion nichts, hält aber den Verlauf
  gleich). Soll nach allem: `fingerabdruck.soll`.

## 4c. Eingespielt am 16.11.2026, 13:05–13:13 UTC (Philipp am Desktop)

| Schritt | Migration | Messung danach |
|---|---|---|
| 1 | `20261116090000` Zwei-Faktor vorbereitet | Regeln `236:76769aa3…`, Funktionen `282:137ea0d3…`, Spalten `1383:6794e73c…` = Soll; Schalter aus |
| 2 | `20261116090100` Prüfung vor jeder Anfrage | `pgrst.db_pre_request=public.pruefe_anfrage` gesetzt; Schnittstelle antwortet 200 (`subscription_plans`) |
| 3 | `20261116100000` Betriebsprüfung | Funktionen `285:0416b0c8…`, Spalten `1387:3fe4fee3…` = Soll; erster Aufruf meldet einen offenen Löschantrag (Demo-Kundenkonto, seit 09.07.) |
| 4 | `20261116110000` Kleinbefunde | — |
| 5 | `20261116120000` Einmalmarke Wetter | — |
| 6 | `20261116130000` Rechte Telemetrie | **alle sieben Merkmale = `fingerabdruck.soll`** |
| 7 | `20261116140000` Demo-Konten sperren | 2 Konten gesperrt, 0 Sitzungen; Fingerabdruck unberührt |
| — | weather-sync Version 9 ausgeliefert | ohne Marke 401, erfundene Marke 401, regulär 200 (4 Tage) |

Damit erledigt: S2 (A2-02), S9 (A2-12, A2-14), S10, B2 (A2-15). S1 (A2-01): Mechanik in
der Produktion, Schalter aus bis Runbook O. App mit ausgeblendeten Demo-Zugängen seit
16.11.2026 live (main `c052e6f`, CI und Auslieferung grün).

## 4d. Vorbereitet am 17.11.2026, noch nicht in der Produktion

| Migration | Inhalt | Nachweis lokal |
|---|---|---|
| `20261117090000` | Betriebsprüfung: meldet sich nicht mehr selbst als „läuft", zählt gesperrte Konten nicht mit | Prüfskript 114 |
| `20261117100000` | Löschantrag Demo-Kundenkonto ausführen (Freigabe Philipp 17.11.) | **eingespielt 17.11.2026**: Antrag „ausgefuehrt", Profil anonymisiert, gesperrt; Fingerabdruck der Produktion = lokaler Nachbau auf demselben Stand (alle sieben Merkmale) |
| `20261117110000` | Zwei-Faktor-Pflicht an (Runbook O ohne Pia) | ganze Prüfumgebung grün |
| `20261117120000` | Claude-Verbindung (V-019, Runbook S) | Prüfskript 118, 14/14 |
| `20261117130000` | Kontolöschung entfernt auch Anmeldedaten (V-020) | Prüfskript 96 Test 7b: ohne Korrektur rot, mit 27/27 |
| `20261118090000` | Demo-Konten auflösen: Unterschriften umhängen, offene Demo-Freigaben ablehnen, 3 Konten löschen (V-021, Freigabe Philipp 18.11.) | Prüfskript 119, 6/6 |

Gesamtlauf am 17.11.2026 auf frischem Aufbau: 35 Prüfskripte, 0 Fehler; 8 pgTAP-Dateien, 0 Fehler;
Fingerabdruck = `fingerabdruck.soll` (Funktionen `291:698c4c58…`). Server-Funktionen: 44 Tests,
Lint sauber. App: 183 Tests, Analyse ohne Befund.

Beim Bau gefunden und behoben:

* Der neue Bucket hatte keine Dateityp-Grenze (Prüfskript 90, S-10). Jetzt nur PDF, höchstens 10 MB.
* GitHub Pages hatte keine Rückfallseite für echte Pfade. `/oauth/consent` hätte die Fehlerseite
  gezeigt; `deploy_web.sh` legt jetzt `404.html` an.
* Exportierte PDFs wären unbegrenzt liegen geblieben. Jetzt löscht jeder Export die abgelaufenen.

Reihenfolge beim Einspielen (Philipp am Desktop, geplant 19.11.2026): 130000 → 20261118090000 → 090000 → 110000 (Zwei-Faktor-Pflicht an, Gegenprobe Philipp) → 120000, nach jedem
Schritt Fingerabdruck; danach `verwaltung-mcp` ausliefern. Nach 110000 Gegenprobe Philipp
(Anmeldung mit Code).

## 5. Abweichungen Doku ↔ Code, geprüft am 16.11.2026

* `docs/OPERATIONS.md` Runbook H: Tabelle, Schlüssel und Schalter-Text
  stimmen mit der Produktionslinie; Personenzahl (zwei statt vier) und
  Testdatei (`mfa_gate_test.sql` gilt nur für `main`) nicht. → Runbook H
  verweist jetzt auf Runbook O.
* Kommentar in `weather-sync/index.ts` sagte „zweimal täglich"; die
  geplante Aufgabe läuft einmal täglich (03:40 UTC). → korrigiert.
* Die geplante Aufgabe `weather-sync` stand nur in der Produktion. →
  jetzt in `20261116120000`.
* Prüfwerkzeug `pruef.zaehle`: Ein skalarer Funktionsaufruf in der
  Select-Liste wird unter `count(*)` vom Planer weggelassen, eine fehlende
  Berechtigung bleibt dann unbemerkt. Beim Schreiben von Probe 114
  gefunden; die vorhandenen Proben nutzen dieses Muster nicht (Suche am
  16.11.). Neue Proben rufen Funktionen im `from`-Teil auf.

Dateien zu diesem Stand: `docs/audit/2026-11-16-zielbild/` (Migrationen,
Proben, Patches der Produktionslinie, Prüfsummen).
