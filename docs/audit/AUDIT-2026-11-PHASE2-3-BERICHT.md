# Backend-Audit Bördesnack24, Phase 2 und 3: Prüfung und Ergebnisbericht (15.11.2026)

Auftrag: Master-Prompt „Ganzheitliches Backend-Audit" vom 14.11.2026; Auftrag
Philipp vom 15.11.2026, alle offenen Punkte zu erledigen. Grundlage ist die
Bestandsaufnahme `AUDIT-2026-11-PHASE1-BESTANDSAUFNAHME.md`. Dieses Dokument ist
zugleich das zentrale Audit-Protokoll.

## 1. Zusammenfassung

> **Fortschreibung 16.11.2026:** Was für 4,5 von 5 je Bereich nötig ist und
> wo jeder Punkt steht: `AUDIT-2026-11-ZIELBILD-4-5.md`.

Die Datenbank ist die stärkste Schicht des Systems: Jede Tabelle hat
Zeilenschutz, Preise und Rechte werden dort entschieden, und seit dem 15.11.2026
stimmen Repository und echte Datenbank nachweisbar überein. Die Schwächen liegen
um die Datenbank herum: beim Betrieb (kein Zurückspielen von Sicherungen,
keine Überwachung), bei einem fehlenden zweiten Faktor für interne Konten, bei
einer ungeschützten Server-Funktion und bei einem öffentlichen Repository mit
internen Unterlagen. Kein Befund ist als „kritisch" eingestuft, weil noch kein
Automat läuft und nur sechs eigene Konten bestehen. Mehrere werden kritisch,
sobald echte Kunden und echter Umsatz dazukommen.

| Prüfbereich | Wertung | Kurzbegründung |
|---|---|---|
| IT-Sicherheit und Datenschutz (Technik) | **3 von 5** | Datenbankschicht solide und gemessen; offen: zweiter Faktor, `weather-sync`, öffentliches Repository, Auth-Einstellungen nicht einsehbar |
| Funktionalität und Zuverlässigkeit | **3 von 5** | Datenbanklogik mit 29 Prüfskripten und App mit 166 Tests belegt; Server-Funktionen kaum getestet, kein Test des Gesamtwegs, ausgelieferte App veraltet |
| Architektur und Codequalität | **3 von 5** | Geschäftslogik an einer Stelle; Altlast zweite Datenbank-Linie (`main`), Tests prüfen die falsche Linie |
| Recht und Regulatorik | **nicht bewertbar** | Technische Unterstützung vorhanden (Auskunft, Löschung, Einwilligung, Fristen); Verträge, Verzeichnisse und organisatorische Nachweise liegen nicht vor. 10 Vorgänge in `docs/COMPLIANCE.md` offen |
| Betriebssicherheit und Zukunftsfähigkeit | **2 von 5** | Tarif ohne zurückspielbare Sicherung, Pausierung bei Inaktivität, keine Überwachung, kein geübter Wiederanlauf |

## 2. Was geprüft wurde und was nicht

**Geprüft (mit Ausführung, nicht nur gelesen):**

* alle 128 Tabellen: Leserechte für nicht angemeldete Aufrufer, zwei
  Kundenkonten und ein internes Konto, gegen die Wahrheit gezählt
  (`40_lese_isolation`)
* alle Funktionen mit Eigentümerrechten, die jedes Konto aufrufen darf (161):
  maschinelle Suche nach fehlender Berechtigungsprüfung, die 20 Treffer einzeln
  eingeordnet
* Spaltenrechte auf Produkten, Standorten, Automaten (Einkaufspreise)
* Server-Funktionen ohne Anmeldeprüfung der Plattform: Zugangsprüfung im Code,
  bei `weather-sync` am tatsächlich ausgelieferten Stand
* gesamte Repository-Historie aller Zweige auf Schlüssel und Zugangsdaten
* geplante Aufgaben in der Produktion mit letztem Lauf und Ergebnis
* Sicherheitshinweise von Supabase (alle Einträge)
* Tarifbedingungen von Supabase zu Sicherung und Pausierung (Dokumentation von
  Supabase, abgerufen 15.11.2026)
* 29 Prüfskripte der Datenbank, 166 Tests der App, Fingerabdruck Produktion
  gegen Neuaufbau

**Nicht geprüft, ausdrücklich offen:**

* die fachliche Logik jeder einzelnen der 161 Funktionen (nur Berechtigung und
  die von Prüfskripten abgedeckten Wege)
* 15 der 26 ausgelieferten Server-Funktionen im Wortlaut gegen das Repository
  (A2-05)
* die Einstellungen der Anmeldung im Supabase-Dashboard (nicht auslesbar)
* Angriffe gegen die echte Umgebung (untersagt), Lasttests, Messung der
  Abfragegeschwindigkeit
* der Gesamtweg App → Datenbank → Beleg mit einem echten Gerät
* Verträge zur Auftragsverarbeitung, Verzeichnis der Verarbeitungstätigkeiten,
  Datenschutz-Folgenabschätzung, Unterlagen der Buchführung
* eine eigenständige rechtliche Begutachtung: Abschnitt 6 ist eine
  Statusübersicht mit Normen, kein Rechtsgutachten

## 3. Audit-Protokoll: Befunde

Art: **B** bestätigt (ausgeführt oder am ausgelieferten Stand gelesen),
**V** begründeter Verdacht, **T** theoretisches Risiko, **N** nicht überprüfbar.

| ID | Bereich | Befund | Fundstelle und Nachweis | Art | Risiko | Maßnahme | Stand |
|---|---|---|---|---|---|---|---|
| A2-01 | Sicherheit | **Kein zweiter Faktor für interne Konten in der Produktion.** Die Pflicht (Schalter, Prüfung in der Rechteschicht) gibt es nur in der `main`-Linie (`0066_mfa_gate_and_execute_privileges`). Ein entwendetes Passwort eines Gesellschafters genügt für Finanzen, Dokumente und Kundendaten | Produktion: 0 Funktionen und 0 Regeln mit Bezug auf den zweiten Faktor. `docs/COMPLIANCE.md` V-011 beschreibt die Pflicht als umgesetzt | B | **Hoch** | Mechanik in die Produktionslinie übernehmen, alle vier internen Konten richten den zweiten Faktor ein, erst dann Schalter an (sonst sperrt sich der Betrieb aus). OWASP A07 | 🟡 16.11.2026: App fragt den Code ab (live); Pflicht in der Produktion eingespielt, Schalter aus bis Runbook O |
| A2-02 | Sicherheit | `weather-sync` ist ohne jede Anmeldung aufrufbar und prüft selbst nichts. Jeder Aufruf löst einen Abruf beim Wetterdienst und einen Schreibvorgang mit dem Dienstschlüssel aus; die Fehlerantwort nennt die abgefragte Adresse | Ausgelieferter Stand gelesen: `verify_jwt = false`, kein Prüfschritt vor `createClient(… SERVICE_ROLE_KEY)` | B | Mittel | Einmalmarke aus der Datenbank im Aufruf verlangen (ohne neues Geheimnis). OWASP API4, API8 | ✅ 16.11.2026 eingespielt, Funktion ausgeliefert, in der Produktion gegengeprüft (401/401/200) |
| A2-03 | Datenschutz, Vertraulichkeit | **Das Repository ist öffentlich** und enthält Businessplan, Finanzrechnung, Audit-Berichte mit Sicherheitsbefunden und die Kennung des Datenbankprojekts | Dateien waren am 15.11.2026 ohne Anmeldung abrufbar (so hat die Datenbank die Migrationen geholt) | B | Mittel | Entscheidung Philipp: Repository privat stellen (die App-Auslieferung über GitHub Pages braucht dann einen bezahlten GitHub-Tarif oder einen anderen Ort) oder interne Unterlagen in ein privates Repository auslagern | 🔴 offen, Grundsatzentscheidung |
| A2-04 | Betrieb | Tarif Free: Sicherungen sind nicht herunterladbar und nicht zurückspielbar; Projekte mit wenig Aktivität werden nach 7 Tagen pausiert (Wiederherstellung binnen 90 Tagen) | Supabase-Dokumentation „Database Backups", „Project Pausing", „Production Checklist" | B | Mittel, mit erstem Kunden Hoch | vor dem ersten echten Kunden bezahlter Tarif; bis dahin regelmäßiger Export. §§ 146, 147 AO, Art. 32 DSGVO | 🔴 offen, Kostenentscheidung |
| A2-05 | Zuverlässigkeit | 15 der 26 ausgelieferten Server-Funktionen wurden nicht aus dem Repository ausgeliefert (Befund H-3 vom September, weiter offen). Ob ihr Stand dem Repository entspricht, ist nicht belegt | Pfad der Auslieferung je Funktion in der Produktion | B | Mittel | Wortlaut vergleichen, dann einmal geordnet aus dem Repository ausliefern | 🔴 offen |
| A2-06 | Architektur, Tests | Die automatischen Tests bauen die `main`-Linie, nicht die Linie der Produktion; fehlgeschlagene Tests der Server-Funktionen brechen den Lauf nicht ab (`\|\| true`) | `.github/workflows/ci.yaml` | B | Mittel | CI auf die Produktionslinie umstellen, Prüfskripte und Fingerabdruck dort laufen lassen; `main`-Linie stilllegen (Grundsatzentscheidung) | 🔴 offen |
| A2-07 | Recht, Betrieb | Die ausgelieferte App ist vom 26.09.2026: Pfand nicht getrennt ausgewiesen, keine Verfügbarkeitsanzeige | `gh-pages` `7e61e78` | B | Mittel vor Verkaufsstart (§ 7 PAngV) | App-Update nach `main` ausliefern | ✅ 16.11.2026: live unter `app.boerdesnack24.de` (gh-pages `efb739e`) |
| A2-08 | Sicherheit | Schutz vor bekannten, geleakten Passwörtern ist ausgeschaltet (in bezahlten Tarifen verfügbar); die App prüft selbst, das ersetzt den Serverschutz nicht | Supabase-Hinweis `auth_leaked_password_protection` | B | Niedrig | mit dem Tarifwechsel einschalten | offen |
| A2-09 | Sicherheit | Einstellungen der Anmeldung (Passwortregeln, Bestätigung der E-Mail, erlaubte Rücksprungadressen, Drosselung) sind von hier nicht einsehbar | Dashboard | N | unbekannt | Bildschirmfotos von Philipp, siehe Abschnitt 8 | 🟡 16.11.2026 teilweise gesehen: Site URL zeigt noch auf `blume1805.github.io`, zwei fremde Lovable-Adressen als erlaubtes Ziel, Schalter „Confirm email" nicht sichtbar. Anleitung: `docs/OPERATIONS.md` Runbook P |
| A2-10 | Sicherheit | Alle Server-Funktionen erlauben Aufrufe von jeder Herkunft (`Access-Control-Allow-Origin: *`) | `_shared/cors.ts` | T | Niedrig | auf die eigenen Adressen begrenzen. Die Anmeldung läuft über einen Kopf im Aufruf, nicht über Cookies; deshalb kein unmittelbarer Missbrauch | offen |
| A2-11 | Datenminimierung | Kundenkonten können interne Kennungen lesen: `created_by`, `updated_by` in Produkten, Standorten, Automaten, dazu `nayax_terminal_id` | Spaltenrechte gemessen | B | Niedrig | Spaltenrechte entziehen oder Kunden nur über Funktionen bedienen. Art. 5 Abs. 1 lit. c DSGVO | offen |
| A2-12 | Sicherheit | Sicht `product_rating_summary` läuft mit Eigentümerrechten (zeigt nur Durchschnitt und Anzahl je Produkt); Sicht `machine_stock` trägt überflüssige Schreibrechte für nicht angemeldete Aufrufer, die an der Sicht nichts bewirken | Supabase-Hinweis; Rechteliste | B | Niedrig | überflüssige Rechte entziehen; die Sicht bleibt, wie im September begründet (M-1) | ✅ 16.11.2026 eingespielt (`20261116110000`) |
| A2-13 | Codequalität | Toter Code: `nayax-webhook`, `send-push`, Tabellen `nayax_sales`, `device_tokens`; genutzt wird CleverPay, Push gibt es laut Nutzungsbedingungen nicht | Antworten Philipp, Liste der ausgelieferten Funktionen | B | Niedrig | entfernen oder als „nicht in Betrieb" kennzeichnen (Löschen nur mit Freigabe) | offen |
| A2-14 | Logik | `bundle_split` liefert die Preisaufteilung auch für nicht aktive Kombi-Angebote, wenn die Kennung bekannt ist | Funktionsrumpf | T | Hinweis | auf aktive Angebote oder Pflegerecht begrenzen | ✅ 16.11.2026 eingespielt (`20261116110000`) |
| A2-15 | Betrieb | Keine Überwachung: kein Alarm bei fehlgeschlagener geplanter Aufgabe, bei Fehlern der Server-Funktionen oder bei Pausierung | keine Fundstelle im Repository | B | Mittel | tägliche Statusmail aus der Datenbank (Aufgaben, Fehler, Fingerabdruck) | ✅ 16.11.2026 tägliche Prüfung läuft in der Produktion (`20261116100000`); Mail-Alarm folgt |
| A2-16 | Betrieb | Hilfsschema `ausrollen_20261115` mit Migrationstexten und Preissicherung steht in der Produktion | angelegt am 15.11.2026 | B | Hinweis | nach Abschluss entfernen (Löschvorgang, nur mit Freigabe) | offen |
| A2-17 | Sicherheit | Scheinkauf, fremde Kaufbeträge, Bargeld-Anzeige (B-1 bis B-3 vom September) | Produktion gemessen | B | war Hoch | Rechte entzogen, Schutz eingespielt | ✅ 15.11.2026 |
| A2-18 | Sicherheit | Upload in `employee-signatures` für jedes Konto; zweiter Upload scheiterte | lokal nachgestellt | B | war Mittel | Regeln angepasst | ✅ 15.11.2026 |
| A2-19 | Sicherheit | Fünf Funktionen ohne festen Suchpfad | Supabase-Hinweis | B | war Niedrig | fester Suchpfad | ✅ 15.11.2026 |
| A2-20 | Architektur | Produktion 11 Migrationen hinter dem Repository, dazu Änderungen nur in der Produktion | Fingerabdruck | B | war Hoch | ausgerollt und nachgezogen; Pflicht zum Fingerabdruck in `CLAUDE.md` | ✅ 15.11.2026 |

### Ohne Befund geprüft

| Prüfung | Ergebnis |
|---|---|
| Zeilenschutz | auf allen Tabellen aktiv; nicht angemeldete Aufrufer sehen nur Werbekatalog, E-Mail-Themen, KI-Register und Rechtstexte (gewollt öffentlich) |
| Trennung der Kundenkonten | jedes Kundenkonto sieht in personenbezogenen Tabellen nur eigene Zeilen (Konto, Käufe, Positionen, Angebote, Einwilligungen, Benachrichtigungen) |
| Einkaufspreise | für Kundenkonten nicht lesbar (`ERR:42501`); Bestandsberichte weisen Kunden ab |
| Funktionen ohne Berechtigungsprüfung | 20 Treffer der Suche, alle öffentliche Katalog-, Tarif- oder Werbeauskünfte oder über ein Einmal-Kennwort geschützt (Abmeldung, Berichtsfreigabe) |
| Geheimnisse im Repository | gesamte Historie: nur der öffentliche Schlüssel der Datenbank, der in jede Web-App gehört. Kein Dienstschlüssel, kein Zugang zu Resend, Zahlungs- oder Cloud-Diensten |
| Geplante Aufgaben | sechs aktive, alle am 15.11.2026 erfolgreich gelaufen (Löschfristen, Abrechnung der Empfehlungen, Wetter); die Befehle enthalten keine Schlüssel |
| Analyse- und Fehlerdienste | Sentry und PostHog sind in der App nicht eingebunden (in `pubspec.yaml` auskommentiert) |
| Eingänge von außen | `iot-webhook`, `email-inbound`, `auth-email-hook` prüfen eine Signatur und arbeiten ohne Geheimnis nicht |
| Kundenbeleg | `receipt-pdf` liest mit den Rechten des Aufrufers; ein fremder Kauf wird nicht gefunden |
| Fester Suchpfad | bei allen Funktionen gesetzt |

## 4. Funktionsanalyse

| Funktionsbereich | Umsetzung | Nachweis | Auffälligkeiten |
|---|---|---|---|
| Anmeldung, Rollen, Rechte | Supabase Auth, Tabellen `profiles`, `roles`, `permissions`, Rechteprüfung in Funktionen | Prüfskripte zur Trennung und Rechteausweitung | A2-01, A2-09 |
| Katalog, Preise, Pfand | Datenbankfunktionen (`kundenpreis`, `automatenpreis`) | `110_pfand` (23 Fälle), Messung in der Produktion | App-Update fehlt (A2-07) |
| Vorteile, Angebote, Treue | Datenbankfunktionen, tägliche Erzeuger | `112_vorteile_ohne_abo` (21 Fälle) | Aufgabe `daily-offers` ist in der Produktion abgeschaltet; ob gewollt, ist zu klären |
| Kauf am Automaten | Freigabe, Terminal-Ereignisse, Kauf | `108`, `109` | Terminal-Eingang nicht ausgeliefert, CleverPay nicht angebunden: kein Kauf möglich, bis das steht |
| Belege, Rechnungen | Datenbank und `receipt-pdf` | lokal | kein Test mit echtem Beleg |
| Konto löschen, Auskunft | `request_account_deletion`, `export_my_data`, Löschläufe | `94` bis `97` | zwei bekannte Bestandsmeldungen in `94`/`95` (gelöschtes Konto in der internen Nutzerliste, geplante Löschläufe): in Phase 4 zu klären |
| E-Mail | Warteschlange, Vorlagen, Resend | Prüfskripte | Versand selbst nicht getestet |
| Dokumente, Unterschriften | Tabellen, Speicher, DocuSign | teilweise | A2-18 behoben; Gesamtweg ungetestet |
| Buchhaltung | sevDesk-Abgleich, DATEV-Export | lokal | Abgleich mit echtem sevDesk nicht getestet |
| Werbung, Firmenkunden | Tabellen und Funktionen | Prüfskripte | noch nicht in Betrieb |

Fehlende Tests, in dieser Reihenfolge sinnvoll: Server-Funktionen (nur vier
Testdateien für 30 Funktionen), Gesamtweg Kauf bis Beleg, Wiederanlauf aus
einer Sicherung.

## 5. Architektur und Code

**Sofort:** A2-06 (Tests prüfen die falsche Linie). **Mittelfristig:** die
`main`-Linie stilllegen, die 15 von Hand ausgelieferten Funktionen einmal aus
dem Repository ausliefern, toten Code entfernen. **Langfristig:** die App
(160 Dateien, direkter Zugriff auf 24 Tabellen) schrittweise nur noch über
Datenbankfunktionen bedienen; das macht Spaltenrechte (A2-11) überflüssig.
Eine Neuentwicklung ist nicht nötig.

## 6. Recht: Statusübersicht (kein Rechtsgutachten, Stand 15.11.2026)

| Rechtsbereich | Anwendbar, weil | Technischer Stand | Offen außerhalb der Technik |
|---|---|---|---|
| DSGVO Art. 5, 6, 25, 32 | Kundenkonten, Kaufhistorie, Einwilligungen | Zeilenschutz, Datenminimierung bis auf A2-11, Löschfristen laufen täglich | A2-01, A2-04 berühren Art. 32 |
| DSGVO Art. 12 bis 22 | Betroffenenrechte | Auskunft und Export, Löschantrag mit Löschlauf, Einwilligung mit Widerruf vorhanden und getestet | Abläufe für Berichtigung und Widerspruch organisatorisch festlegen |
| DSGVO Art. 28 | Dienstleister | technisch nicht prüfbar | Verträge mit Supabase, Resend, sevDesk, DocuSign, CleverPay, Hostinger, GitHub (Auslieferung der App, Sitz USA) als Nachweis ablegen |
| DSGVO Art. 30, 33 bis 35 | Verzeichnis, Meldewege, Folgenabschätzung | Protokoll und Audit-Log vorhanden | Verzeichnis, Meldeweg mit 72-Stunden-Frist und Prüfung der Folgenabschätzung dokumentieren |
| § 25 TDDDG | Speicherung auf dem Endgerät | App: Sitzung der Anmeldung (technisch erforderlich), keine Analyse; Landingpage: nichts | Datenschutzerklärung der App nach Auslieferung gegenprüfen |
| DDG § 5, Impressum | Telemedium | Rechtstexte aus einer Quelle (`legal_text`) | Angaben aktuell halten |
| Verbraucherrecht, BGB §§ 312 ff. | App unentgeltlich, Kauf am Automaten | Abo geschlossen, Kündigungs- und Widerrufsseiten vorhanden | Altbestand von Abo-Einträgen (1 Testkonto) |
| PAngV § 7 | Pfand | Datenbank und Landingpage erledigt | App-Update (A2-07), Preisschilder am Automaten |
| UWG §§ 5, 5a | Werbeaussagen | Landingpage gegen Datenbank abgeglichen | laufender Abgleich bei jeder Änderung |
| AO §§ 145 bis 147, GoBD | Kassen- und Belegdaten | Unveränderbarkeit von Terminalereignissen und Kassenzählungen in der Datenbank | Verfahrensdokumentation, Sicherung (A2-04); Einordnung des Automaten nach § 146a AO mit dem Steuerbüro klären |
| EU AI Act Art. 50 | algorithmisch erzeugte Angebote | KI-Register in der Datenbank, Kennzeichnung in der App | bei jeder neuen Funktion fortführen |
| BFSG | App und Website für Verbraucher | Landingpage: Pause-Knopf, Beschriftungen nachgezogen | App nicht geprüft |
| JuSchG, LMIV | Lebensmittel, ggf. Altersgrenzen | Zutaten und Allergene je Produkt, Altersprüfung serverseitig für das Abo | Vollständigkeit der Zutatenangaben (nur eine Popcorn-Sorte gepflegt) |

Offene Vorgänge in `docs/COMPLIANCE.md`: V-002, V-003, V-004, V-006, V-012,
V-014, V-015, V-016, V-017, V-018 (jeweils mit Reststand dort).

## 7. Priorisierte Maßnahmen (Phase 4)

| Rang | Maßnahme | Befund | Wer |
|---|---|---|---|
| 1 | App-Update ausliefern | A2-07 | Erlaubnis Philipp, dann ich |
| 2 | Zweiter Faktor für interne Konten | A2-01 | ich bereite vor, alle vier Konten richten ein, Philipp gibt frei |
| 3 | Repository: privat oder Unterlagen auslagern | A2-03 | Entscheidung Philipp |
| 4 | `weather-sync` absichern | A2-02 | ich, nach Freigabe (Auslieferung einer Server-Funktion) |
| 5 | Bezahlter Supabase-Tarif vor dem ersten Kunden | A2-04, A2-08 | Entscheidung Philipp |
| 6 | Tests auf die Produktionslinie, `main`-Linie stilllegen | A2-06 | Entscheidung Philipp, dann ich |
| 7 | 15 Server-Funktionen abgleichen und geordnet ausliefern | A2-05 | ich |
| 8 | Überwachung: tägliche Statusmail | A2-15 | ich |
| 9 | Kleinere Punkte | A2-10 bis A2-14, A2-16 | ich, gebündelt |

## 8. Was ich von Philipp noch brauche

1. Zwei Bildschirmfotos aus dem Supabase-Dashboard (Anmeldung): Seite
   „Authentication → Sign In / Providers" und Seite „Authentication → URL
   Configuration". Damit schließt sich A2-09.
2. Die Entscheidungen zu Rang 1, 3, 5 und 6.
3. Die Verträge zur Auftragsverarbeitung als Ablage (Abschnitt 6).
