# Was noch offen ist — Aufgabenliste Philipp

Stand 07.09.2026.

Diese Liste gab es bisher nicht. Die offenen Punkte lagen verstreut in
Auditberichten, README-Dateien und Migrationskommentaren; wer wissen
wollte, was noch aussteht, musste sie zusammensuchen. Hier stehen sie an
einer Stelle, jeder mit der Quelle, aus der er stammt — damit sich
nachlesen laesst, warum ein Punkt draufsteht, und damit niemand einen
Punkt aus dem Gedaechtnis ergaenzt.

**Aufnahmeregel:** Ein Punkt kommt hier nur hinein, wenn er belegt ist —
aus einem Dokument im Repo, aus einer Messung oder aus einer
ausdruecklichen Entscheidung. Erledigte Punkte werden nicht geloescht,
sondern nach unten verschoben. Eine Liste, aus der Dinge verschwinden,
beantwortet die Frage „war das jemals ein Thema?" nicht mehr.

---

## 1. Blockierend — ohne das geht nichts live

### 1.1 Liste der Spendenempfaenger

- [ ] **Die Liste mit ueber 60 Vereinen und Organisationen bereitstellen.**

Sie liegt nicht im Repo. Gesucht wurde in `docs/`, `supabase/migrations/`
und `scripts/` — es gibt keine Datei damit. Vermutlich war sie ein Anhang
in einer frueheren Unterhaltung und ist nie im Projekt angekommen.

Die drei bisherigen Zwecke (Tafel Magdeburg, Kinderhospiz Magdeburger
Elbland, Feuerwehr Suelzetal) sind am 07.09.2026 archiviert worden.
`donation_causes` ist damit **leer** — die Abstimmung in der App hat
nichts zur Auswahl. Erfunden wird hier nichts.

Gebraucht wird je Organisation mindestens: Name, kurze Beschreibung, und
ob sie im Suelzetal sitzt oder in der weiteren Region. Format egal
(Liste, Tabelle, PDF). Daraus entsteht eine Migration mit Pruefsumme.

Quelle: `apps/landing/README.md`, `docs/scrollcraft/references/truth.md`

### 1.2 Hosting der Landingpage und die Datenschutzerklaerung

- [ ] Auftragsverarbeitungsvertrag nach Art. 28 DSGVO mit Hostinger schliessen
- [ ] Im Hostinger-Konto einen EU-Serverstandort waehlen
- [ ] Datenschutzerklaerung um den Hoster und die Serverprotokolle ergaenzen
- [ ] Verzeichnis der Verarbeitungstaetigkeiten nachziehen

Die Datenschutzerklaerung v6 nennt in Abschnitt 4 und 5 ausdruecklich
**GitHub Pages** als Ausliefernden und begruendet damit den
Drittlandtransfer. Laeuft `boerdesnack24.de` bei Hostinger, ist das
falsch. Die Aenderung am Rechtstext braucht eine eigene Migration mit
geprueften Ankertexten — das mache ich, sobald der Hoster feststeht.

Quelle: `apps/landing/README.md`, `docs/rechtstexte/datenschutz.md`

### 1.3 Impressum spricht von „dieser App"

- [ ] Wortlaut freigeben: „Wir halten die Informationen in dieser App …"
      soll auch die Website erfassen

Der Text ist zeichengenau mit der Produktionsdatenbank abgeglichen und
wird deshalb nicht nebenbei geaendert. Auf einer Website ist die jetzige
Formulierung schief.

Quelle: `docs/rechtstexte/impressum.md`, `apps/landing/README.md`

---

## 2. Entscheidungen, die noch anstehen

- [ ] **Nachweisform der Spende gegenueber Kunden.** Wie wird belegt, dass
      der Anteil tatsaechlich geflossen ist? (Quartalsbericht in der App,
      Spendenquittung, Foto der Uebergabe — offen.)
      Quelle: `docs/scrollcraft/references/truth.md`, Abschnitt 4
- [ ] **Automatendarstellung auf der Landingpage.** Herstellerbild mit
      schriftlich geklaerten Nutzungsrechten, eigene Illustration, oder
      die jetzige schematische Zeichnung behalten.
      Quelle: `apps/landing/README.md`
- [ ] **Jugendschutz auf der Kundenkarte.** Die Kundenkarte ist allen
      Kontoinhabern zugaenglich, auch Minderjaehrigen. Es gibt heute keine
      inhaltliche Schranke, die altersbeschraenkte Werbung von dieser
      Flaeche fernhaelt. Solange keine Kampagne gebucht ist, ist das
      theoretisch — **vor der ersten Buchung** ist es zu entscheiden.
      Quelle: `docs/COMPLIANCE.md`, Zeile 214
- [ ] **Logo-Nutzungsrechte im Vertragsmuster.** Die Logos der
      Werbepartner sind fremde Marken. Der Werbevertrag muss die
      Nutzungsrechte am Logo ausdruecklich einraeumen, sonst zeigt die App
      eine fremde Marke ohne Erlaubnis.
      Quelle: `docs/COMPLIANCE.md`, Zeile 219
- [ ] **Katalogpreise** final festlegen (die im Katalog stehen, sind
      Planwerte).
- [ ] **M-3 Spaltenrechte `unit_cost`.** Erst nachweisen, dass jeder
      interne Lesepfad ueber eine RPC laeuft, dann die Spalte schliessen.
      Bewusst zurueckgestellt, nicht vergessen.
      Quelle: `docs/audit/GESAMTAUDIT-2026-09-05-PHASE2.md`

---

## 3. Konten, Zugaenge, Einstellungen

- [ ] **Supabase Pro** buchen — vor der Live-Schaltung der App.
      Daran haengt M-2 (serverseitige Passwortpruefung gegen bekannte
      Leaks; `auth_leaked_password_protection` ist nur im Dashboard
      setzbar, nicht per SQL).
      Quelle: `docs/SECURITY.md` Abschnitt S-13, Phase-2-Audit
- [ ] **„Automatically expose new tables" abschalten** — zusammen mit
      expliziten Grants in kuenftigen Migrationen.
      Quelle: `docs/audit/GESAMTAUDIT-2026-09-05-PHASE2.md`
- [ ] **Pias Gesellschafter-Freigabe** in `/finance/approvals` erteilen
      (2-of-2 ist sonst nicht erfuellt).
- [ ] **Pruefzugang loeschen**, sobald er nicht mehr gebraucht wird.
- [ ] **Signaturschluessel fuer die Gesellschafter-App.** Die APK aus dem
      Workflow `release.yaml` ist noch mit dem Debug-Schluessel signiert.
      Fuer die dauerhafte Installation auf euren Geraeten gehoert ein
      eigener Upload-Schluessel dazu.
      Quelle: `docs/ARCHITEKTUR-ZWEI-APPS.md`

---

## 4. Sobald der erste Automat gekauft ist

- [ ] **`docs/betrieb/AUTOMAT-INBETRIEBNAHME.md` abarbeiten** — vollstaendig,
      vor dem ersten Verkauf.
- [ ] Automat in der Tabelle `machines` eintragen.
- [ ] Webhook `nayax-webhook` ausrollen (bewusst noch nicht ausgerollt).
- [ ] `send-push` ausrollen.

Ohne die Liste fehlen ab dem ersten Verkauf die Aufzeichnungen, die
§§ 145–147 AO verlangen. Nachtraeglich herstellen laesst sich das nicht.

---

## 5. Bei mir, nicht bei dir

Damit klar ist, was du **nicht** anfassen musst:

- H-3: 15 Edge Functions sind im Dashboard neuer als im Repo. Erst
  vergleichen, dann ausrollen — ein naives „aus dem Repo neu ausrollen"
  wuerde eine Sicherheitspruefung entfernen.
- Zweiter Pruefdurchgang: Finanzlogik, FIFO/MHD, Art.-15-Export,
  KI-Register, DATEV, Wettlaufsituationen.
- Markenschriften auf der Landingpage selbst hosten.
- Landingpage nach Hostinger ausrollen, sobald 1.2 geklaert ist.

---

## 6. Erledigt

| Wann | Was |
|---|---|
| 07.09.2026 | Spende rechnet 5 % vom Nettopreis je Produkt; Migration in der Produktion, 9 Proben gegen die Replik gruen |
| 07.09.2026 | Die drei Spendenzwecke aus dem Seed archiviert |
| 07.09.2026 | Drei Demo-Nachrichten, die einen laufenden Betrieb behaupteten, auf unveroeffentlicht gesetzt |
| 07.09.2026 | Abstimmung bleibt fuer jedes angemeldete Konto offen (Wahrheitsschicht korrigiert) |
| 07.09.2026 | Trennung in Kunden- und Gesellschafter-App; keine internen Pfade mehr im Kunden-Bundle |
| 07.09.2026 | Landingpage `apps/landing/` angelegt |
