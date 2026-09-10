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

### 1.1b Lovable-Guthaben ist wieder leer

- [ ] Credits aufladen: https://lovable.dev/settings/billing

Zwei Auftraege sind an diesem Tag durchgelaufen (die sieben Punkte vom
08.09. und die neue Datenschutzerklaerung, beide nachgeprueft). Der
dritte wurde abgewiesen.

Er ist nicht dringend: Es geht um die Markenschriften, die zwar im
Projekt liegen, aber nirgends eingebunden sind und deshalb keine Wirkung
haben. Die Seite sieht aus wie vorher. Dazu zwei Kleinigkeiten, die mir
dabei aufgefallen sind: die Seite meldet dem Browser Englisch als
Sprache, und im Seitenkopf steht auf jeder Seite noch
"author: Lovable".

Dazu kommt seit dem 10.09. ein zweiter, inhaltlicher Auftrag: Auf der
Seite fehlt die Antwort auf die Frage, was ein Privatkunde von der App
hat. Ausserdem stehen in der Vergleichstabelle zwei Angaben, die nicht
stimmen — „Digitale Belege" als Abo-Vorteil (die gibt es kostenlos) und
„Status-Rabatt bis 10 %" (die Stufe gibt hoechstens +5 %). In der App
sind beide Saetze heute korrigiert worden; die Seite zieht nach, sobald
Guthaben da ist.

Dazu kommt die Kunden-App. Lovable kann sie nicht selbst bearbeiten -
sie ist in Flutter geschrieben, Lovable schreibt React. Entscheidung vom
10.09.: **Lovable entwirft, die Umsetzung nach Flutter mache ich.** Das
Projekt "BOERDESNACK Hub" ist dafuer vom Produkt zur Entwurfsmappe
umgewidmet; sein Projektwissen habe ich neu geschrieben, weil die alte
Fassung vom 30.07. Dunkelblau, "Platin", ein Lifetime-Abo und einen
Live-Zaehler der Spendensumme vorgab - alles ueberholt.

**Vier fertige Auftraege warten auf Guthaben, in dieser Reihenfolge:**

1. `docs/lovable/landingpage-nachfassen.md` - Landingpage, technisch
2. `docs/lovable/AUFTRAG-2026-09-LANDINGPAGE-KUNDENNUTZEN.md` -
   Landingpage, inhaltlich
3. `docs/lovable/AUFTRAG-2026-09-KUNDEN-APP-ENTWUERFE.md`, Lieferung 1 -
   Registrierung, Vorteile, Fuer die Region
4. derselbe Auftrag, Lieferung 2 - Automaten, Abo, Kundenkarte, Profil

Lieferung 2 erst beauftragen, wenn Lieferung 1 abgenommen ist.

---

### 1.2 Landingpage nach Hostinger ausrollen

**Entscheidung 08.09.2026, ersetzt die vom 07.09.:** Gehostet wird bei
**Hostinger**, nicht bei Lovable. Grund: Im Pro-Tarif von Lovable gibt es
keinen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Lovable bleibt
reines Bauwerkzeug — dort entsteht der Code, ausgeliefert wird er von
Hostinger.

Das ist sauber begruendet und macht die Seite rechtlich einfacher: Die
Website nimmt nichts mehr entgegen, der Kunde gibt seine Daten erst in der
App an.

- [ ] **Webhosting "Premium" buchen (2,99 EUR/Mon).** Nicht
      "Unlimited": der Unterschied sind nicht die 1 EUR heute,
      sondern 9,99 gegen 16,99 EUR bei der Verlaengerung — fuer CDN,
      Shop-Funktion und KI-Tools, die diese Seite nicht braucht.
      Nicht "Web-App Hosting": die Seite ist statisch und braucht
      keinen laufenden Server. Fuer die beiden Apps wird bei
      Hostinger gar nichts gebraucht.
      Begruendung und Vergleich: `docs/betrieb/HOSTING-WAS-WIRD-GEBRAUCHT.md`
- [x] ~~Gibt es bei Hostinger einen AVV nach Art. 28 DSGVO?~~
      **Ja** — laut AGB, von dir am 08.09.2026 nachgelesen. Damit
      faellt der Einwand weg, an dem Lovable gescheitert ist.
- [x] ~~Kommt der AVV automatisch mit den AGB zustande?~~ **Ja.**
      Das "Data Processing Addendum" ist durch Verweis Bestandteil
      der Nutzungsbedingungen, und deren elektronische Annahme
      bindet daran. Keine gesonderte Unterschrift noetig.
- [ ] **Pruefen, zu welcher Laendergruppe Deutschland gehoert.**
      Die AGB nennen zwei Vertragspartner: HOSTINGER Global S.a r.l.
      (Luxemburg) fuer Gruppe 2, und HOSTINGER INTERNATIONAL LIMITED
      (Larnaca, Zypern) fuer alle uebrigen Laender "einschliesslich
      aller EU-Laender". Nach dem Wortlaut ist es fuer uns die
      zypriotische Gesellschaft — das steht so schon in der
      Datenschutzerklaerung. Ein Klick auf die verlinkte Liste in den
      AGB bestaetigt oder widerlegt das. Beide sitzen in der EU, es
      geht also nur um die richtige Firmierung, nicht um ein
      Drittlandproblem.
- [ ] **Datierte Kopie des AVV sichern** (die Fassung, die beim
      Vertragsschluss galt). AGB aendern sich — fuer den Nachweis
      zaehlt das Dokument, nicht der Link (Art. 5 Abs. 2 DSGVO).
- [ ] **Sind Postfaecher im Premium-Tarif enthalten?** Nur wichtig,
      falls du `info@boerdesnack24.de` willst.
- [ ] **Rechenzentrum in der EU** waehlen bzw. pruefen, welches dein
      Tarif nutzt.
- [ ] **Eine Angabe fehlt mir noch: das Land des Rechenzentrums.**
      Firmierung und Anschrift stehen jetzt in der
      Datenschutzerklaerung (aus den AGB). Der Serverstandort wird
      bei der Einrichtung gewaehlt und ist der letzte Platzhalter.
- [ ] **E-Mails von Hostinger zu AGB-Aenderungen nicht wegklicken.**
      Bei wesentlichen Aenderungen zu deinem Nachteil hast du laut
      AGB **30 Kalendertage** ab der Benachrichtigung, um zu
      kuendigen. Danach gilt die neue Fassung.
- [ ] **Verzeichnis der Verarbeitungstaetigkeiten** nachziehen.

Technisch offen und bei mir: Das Lovable-Projekt baut derzeit fuer
Cloudflare, nicht fuer normales Webhosting. Fuer Hostinger braucht es
einen statischen Build. Steht in Abschnitt 5.

Die Web-Demo der Kunden-App bleibt davon unberuehrt — die laeuft weiter
ueber GitHub Pages, und dafuer stimmt der Text.

---

### 1.3 Impressum spricht von „dieser App"

- [ ] Wortlaut freigeben: „Wir halten die Informationen in dieser App …"
      soll auch die Website erfassen

Der Text ist zeichengenau mit der Produktionsdatenbank abgeglichen und
wird deshalb nicht nebenbei geaendert. Auf einer Website ist die jetzige
Formulierung schief.

Quelle: `docs/rechtstexte/impressum.md`, `apps/landing/README.md`

---

## 2. Entscheidungen, die noch anstehen

- [ ] **Popcorn: Verkaufspreis, Einkaufspreis und Gewicht.** Die vier
      Sorten stehen seit dem 10.09. im Sortiment (BS-063 bis BS-066),
      aber ohne diese drei Angaben. Die Bildschirmfotos liefern sie
      nicht: 2,99 EUR ist der Ladenpreis von kreutzers.eu, nicht unser
      Automatenpreis, und die Gewichtsangaben dort widersprechen sich
      (100 g und 80 g stehen beide bei 11,96 EUR/kg; 2,99 EUR bei
      11,96 EUR/kg waeren 250 g). Ohne Einkaufspreis fehlen
      Wareneinsatzquote und Rohertragsmarge fuer diese vier Positionen;
      ohne Verkaufspreis zeigt die App keinen Preis an. Geschaetzt wird
      nichts.
      Quelle: `supabase/migrations/20260910180000_sortiment_popcorn.sql`
      und `20260910183000_sortiment_popcorn_premium_caramel.sql`

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
- [x] ~~Gibt es das Lifetime-Abo noch?~~ **Entschieden 10.09.2026:**
      Es bleibt in der Schublade und wird spaeter fuer begrenzte
      Zeitraeume genutzt. Damit bleibt alles, wie es ist: Plan und
      Founders-Kontingent im Backend, Beschreibung in den
      App-Rechtstexten, `lifetimePubliclyOffered = false`. Auf der
      Landingpage kommt es nicht vor. Kein Handlungsbedarf.
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

## 4b. Zwei Funde vom 08.09.2026, die keiner Entscheidung beduerfen

**Die Tabelle `machines` enthaelt vier Demo-Automaten.** „Automat 1",
„Automat 2", „Automat 3" (alle vom 29.06.) und „Heissgetraenkeautomat"
(18.07.), alle mit Status `active`. Es sind Seed-Daten, kein gekaufter
Automat.

Das hat zwei Folgen. Erstens wuerde die Kunden-App einem Kunden vier
Automaten anzeigen, die es nicht gibt — dieselbe Sorte Aussage wie die
drei Demo-Nachrichten, die am 07.09. auf unveroeffentlicht gesetzt
wurden (§ 5 UWG). Zweitens haengt die Erinnerungsregel in `CLAUDE.md`
genau an dieser Tabelle: sie gilt, „bis in der Tabelle `machines`
mindestens ein aktiver Automat steht". Durch die Seed-Zeilen ist die
Bedingung formal erfuellt, obwohl kein Automat gekauft ist — die
Erinnerung an `AUTOMAT-INBETRIEBNAHME.md` wuerde also ausgerechnet dann
ausbleiben, wenn sie faellig wird.

Ich raeume das auf (Seed-Automaten stilllegen, Regel an ein Merkmal
haengen, das Demo-Daten nicht ausloesen). Du musst nichts tun.

**Kein einziges Produkt hat Naehrwerte oder Allergene.** Bei allen 66
aktiven Produkten sind `energy_kcal` und `allergens` leer (die vier
Popcorn-Sorten vom 10.09. eingeschlossen). Die App
zeigt beides als Funktion, und die Nutzungsbedingungen fuehren es auf.
Solange nichts verkauft wird, ist das folgenlos; **vor dem ersten
Verkauf** ist es das nicht mehr (Kennzeichnungspflichten nach der LMIV,
bei Fernabsatz vor Abschluss). Die Angaben stehen auf der Verpackung
und muessen einmal erfasst werden — das ist Fleissarbeit, keine
Entscheidung. Ich sage rechtzeitig Bescheid, wenn es soweit ist.

---

## 5. Bei mir, nicht bei dir

Damit klar ist, was du **nicht** anfassen musst:

- H-3: 15 Edge Functions sind im Dashboard neuer als im Repo. Erst
  vergleichen, dann ausrollen — ein naives „aus dem Repo neu ausrollen"
  wuerde eine Sicherheitspruefung entfernen.
- Zweiter Pruefdurchgang: Finanzlogik, FIFO/MHD, Art.-15-Export,
  KI-Register, DATEV, Wettlaufsituationen.
- Markenschriften selbst hosten — an zwei Stellen: auf der Landingpage
  und in den beiden Apps. In den Apps ist das Nachladen von Google seit
  08.09.2026 abgeschaltet (es ging die IP-Adresse jedes Nutzers beim
  Start an Google in die USA); bis die Dateien mitgeliefert werden,
  zeigen die Apps die System-Schrift statt Bricolage Grotesque und
  Hanken Grotesk. Beide stehen unter der SIL Open Font License 1.1,
  Mitliefern ist also erlaubt. Rein optisch, nichts Blockierendes.
- Landingpage nach Hostinger ausrollen, sobald 1.2 geklaert ist.
- Seed-Automaten stilllegen und die Erinnerungsregel aus CLAUDE.md an
  ein Merkmal haengen, das Demo-Daten nicht ausloest (siehe 4b).
- Statischen Build fuer Hostinger einrichten. Das Lovable-Projekt baut
  ueber Nitro fuer Cloudflare; normales Webhosting kann damit nichts
  anfangen. Die Seite ist reiner Inhalt, laesst sich also vorrendern.
- Supabase-Anbindung aus der Landingpage nehmen (Formular wird zum
  E-Mail- und Telefonweg). Damit landet auch kein Schluessel mehr im
  ausgelieferten Code.
- Kuendigungsseite bleibt eine Textseite mit E-Mail- und Postweg. Ein
  Formular kommt dort nicht mehr hin: die Seite soll nichts
  entgegennehmen. Der Kuendigungsknopf nach § 312k BGB gehoert
  ohnehin dorthin, wo der Vertrag geschlossen wird — das ist die App,
  und dort gibt es ihn. Die Seite auf der Website ist freiwillige
  Transparenz, keine Pflichterfuellung.

---

## 6. Erledigt

| Wann | Was |
|---|---|
| 07.09.2026 | Spende rechnet 5 % vom Nettopreis je Produkt; Migration in der Produktion, 9 Proben gegen die Replik gruen |
| 07.09.2026 | Die drei Spendenzwecke aus dem Seed archiviert |
| 07.09.2026 | Drei Demo-Nachrichten, die einen laufenden Betrieb behaupteten, auf unveroeffentlicht gesetzt |
| 07.09.2026 | Abstimmung bleibt fuer jedes angemeldete Konto offen (Wahrheitsschicht korrigiert) |
| 07.09.2026 | Trennung in Kunden- und Gesellschafter-App; keine internen Pfade mehr im Kunden-Bundle |
| 07.09.2026 | Landingpage `apps/landing/` angelegt — jetzt Inhalts- und Pruefvorlage, nicht die ausgelieferte Seite |
| 07.09.2026 | Skill `scrollcraft` in den Lovable-Workspace uebertragen |
| 07.09.2026 | Eigenes Lovable-Projekt fuer die Landingpage angelegt und beauftragt |
