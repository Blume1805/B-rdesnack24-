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

**Stand 11.09.2026:** Die fuenf Credits sind aufgebraucht. Damit sind
die **beiden Landingpage-Auftraege erledigt** -- die Seite ist inhaltlich
fertig. Was jetzt noch wartet, sind die App-Entwuerfe.

Erfahrungswert aus diesem Lauf, damit du besser planen kannst:

| Auftrag | Umfang | Verbrauch |
|---|---|---|
| Landingpage technisch (5 Punkte) | Schriften, Sprache, Seitenkopf | rund 1 Credit |
| Landingpage inhaltlich (5 Punkte) | inkl. neuer Szene | rund 3 Credits |
| Kleine Korrektur (1 Absatz) | | 0,3 Credits |

Der Agent hat beide grossen Auftraege in **je einem Durchgang**
abgearbeitet, ohne Rueckfrage. Fuer die App-Entwuerfe (vier Bildschirme,
teils in zwei Zustaenden) rechne mit **6 bis 8 Credits fuer Lieferung 1**.
Mit weniger anzufangen lohnt nicht: Es entstehen halbe Entwuerfe, und der
naechste Durchgang muss sich erst wieder einlesen.

**Es warten jetzt drei Auftraege, in dieser Reihenfolge:**

1. `docs/lovable/AUFTRAG-2026-09-LANDINGPAGE-BEWEGUNG-2.md` -- die
   fehlenden Scroll-Muster. Sechs von achtzehn sind gebaut; drei kommen
   dazu, zwei werden ausgebaut, drei bleiben gesperrt. Rechne mit
   3 bis 4 Credits.
2. `AUFTRAG-2026-09-KUNDEN-APP-ENTWUERFE.md`, Lieferung 1 -- 6 bis 8
3. dieselbe Datei, Lieferung 2

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
   Registrierung, Vorteile, Fuer die Region, Kombiangebot-Karte
4. derselbe Auftrag, Lieferung 2 - Automaten, Abo, Kundenkarte, Profil

Die Coupon-Karte fuer Kombiangebote steht in Lieferung 1. Sie ist zwar
schon in Flutter gebaut und funktioniert, aber sie traegt eine
Preisaussage und ist das Sichtbarste, was in den naechsten Monaten
dazukommt - da lohnt ein zweiter Blick von aussen. Der Entwurf ersetzt
die bestehende Karte nicht automatisch; ich uebertrage, was besser ist.

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

- [x] **Popcorn: Duerfen Coupons und Deals darauf gelten?** Entschieden
      am 10.09.: nur im Bundle. Umgesetzt ueber
      `products.coupon_eligibility = 'bundle_only'`; die vier
      Angebotsgeneratoren (Tages-Deal, Wochenangebote, Meilenstein-
      Coupons, persoenliches Angebot) ueberspringen das Popcorn jetzt.
      **Eine Folge davon musst du kennen:** `generate_weekly_offers` ist
      zugleich die MHD-Abschrift. Popcorn, dessen Mindesthaltbarkeit
      naeher rueckt, wird also nicht mehr automatisch heruntergesetzt --
      es muss von Hand in ein Bundle oder ein Einzelangebot, sonst wird
      es Schwund.

      Die urspruengliche Frage, zur Erinnerung: Bei Abo, Status
      und Deal traegt die Rechnung noch -- im schlechtesten Fall bleiben
      8 Cent. Faellt aber ein Meilenstein-Coupon von 25 % darauf, kippt
      sie: auf den Abo-Preis gerechnet liegt der Verkauf dann unter dem
      Einkauf, und die Spende faellt trotzdem an. Macht **minus 26 Cent
      je Packung**. Die Rechnung steht im Kopf der Migration
      `20260910200000_popcorn_verkaufspreis.sql`.
      Zu entscheiden: Popcorn von Coupons und Deals ausnehmen, den
      Couponsatz begrenzen, oder den Verlust als Werbekosten hinnehmen.
      Technisch ist heute **keine** dieser Ausnahmen gebaut.

- [ ] **Popcorn: Zutaten und Allergene nachtragen** (du traegst nach).
      Fuer alle vier Sorten von der Packung: Zutatenverzeichnis im
      Wortlaut und Naehrwerttabelle. Eingetragen ist bisher nur Caramel
      & Seasalt, weil die Shop-Seiten sich widersprechen -- Einzelheiten
      in Abschnitt 4c. Die Allergene stehen bei allen vier, sind aber
      aus der Zutatenliste abgeleitet und gehoeren mit der Packung
      gegengeprueft.
      Sobald du sie hast, trage ich sie ein.

- [ ] **Popcorn: Gewicht je Sorte.** Fehlt weiterhin. Die Angaben im
      Shop widersprechen sich (100 g und 80 g stehen beide bei
      11,96 EUR/kg; 2,99 EUR bei 11,96 EUR/kg waeren 250 g). Es gehoert
      in den Produktnamen, wie bei „Kinderriegel 4 Stk.".

      Quellen: `supabase/migrations/20260910180000_sortiment_popcorn.sql`,
      `20260910183000_sortiment_popcorn_premium_caramel.sql`,
      `20260910190000_popcorn_zutaten_naehrwerte_ek.sql`,
      `20260910200000_popcorn_verkaufspreis.sql`

- [x] **Kombiangebote sind gebaut, Maske inklusive.** In der
      Gesellschafter-App unter *Unternehmensverwaltung > Kombiangebote*.
      Du waehlst Produkte, setzt die Reihenfolge (die ist zugleich die
      Reihenfolge der Bilder beim Kunden), gibst den Kombipreis ein und
      siehst sofort die Ersparnis. Die Kachel sieht nur, wer
      `offers.manage` hat -- Gesellschafter also.

      Die Maske weist zwei Sachen ab, und der Server noch einmal
      unabhaengig davon: weniger als zwei Produkte, und einen Kombipreis,
      der nicht unter der Summe der Einzelpreise liegt. Das zweite ist
      der wichtigere Riegel -- sonst zeigt die Kunden-App einen
      durchgestrichenen Preis ohne Anlass.

      Bei jedem Kombiangebot steht die vollstaendige Steuerrechnung
      dabei: je Produkt Einzelpreis, Anteil in Prozent, Bruttoanteil,
      Steuersatz, Netto und Umsatzsteuer, dazu die Summen. Ohne
      Aufklappen. Die Regel steht in `CLAUDE.md` und gilt fuer jede
      kuenftige Maske mit.

      Nachgerechnet am 10.09. auf einer lokalen Datenbank, aufgebaut aus
      allen Migrationen: Cola 3,10 und Popcorn 4,00 bei 6,00 Kombipreis
      ergeben 43,66 % / 56,34 %, brutto 2,62 / 3,38, netto 2,20 / 3,16,
      Steuer 0,42 / 0,22. Summe 6,00 auf den Cent -- dieselben Zahlen wie
      in deinem Rechenbeispiel.

- [ ] **Am Automaten ist ein Bundle zwei Kaeufe.** Solange das Geraet
      kein Bundle kennt, kauft der Kunde zweimal einzeln. Wie der
      Nachlass dann tatsaechlich beim Kunden ankommt -- als
      Einloese-Code, als Gutschrift, als Vorgang am Geraet --, ist offen
      und gehoert geklaert, bevor der erste Automat steht.

- [ ] **Supabase-Verbindung neu freigeben.** Die dritte Migration
      (Zutaten, Naehrwerte, Einkaufspreis) ist geschrieben, aber **noch
      nicht angewandt** -- der Zugang dieser Sitzung ist mit abgelaufenem
      Token ausgestiegen. Freigabe in den claude.ai-Connector-
      Einstellungen; danach ziehe ich sie nach und zaehle die
      Produktzahl gegen.

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

## 4c. Was ich beim Popcorn gefunden habe (10.09.2026)

**Die vier Produktseiten zeigen nur zwei Datensaetze.**

| Datensatz | Kennzeichen | Steht auf |
|---|---|---|
| A | 1738 kJ / 412 kcal, Salz 2,0 g, Meersalz in der Zutatenliste | Caramel & Seasalt **und** Premium Caramel |
| B | 1933 kJ / 461 kcal, Kakaomasse + Weizenmehl + Zimt | Cookies & Cream **und** Caramel Biscuit |

Bei B sind die beiden Listen Wort fuer Wort gleich. Zwei Produkte tragen
also die Angaben ihres Nachbarn, und aus den Fotos laesst sich nicht
entscheiden, welches jeweils das richtige ist:

* Datensatz A nennt Meersalz und weist 2,0 g Salz je 100 g aus. Das passt
  zu **Caramel & Seasalt**. Fuer ein ungesalzenes Premium Caramel waeren
  2,0 g sehr viel.
* Datensatz B enthaelt **gleichzeitig** Kakaomasse, Kakaopulver und 13 %
  Vollmilchpulver (das waere Cookies & Cream) **und** Weizenmehl,
  Kandisirup und Zimt (das waere Caramel Biscuit). Beide Handschriften in
  einer Liste ergeben fuer keines der beiden Produkte ein stimmiges
  Zutatenverzeichnis.

Deshalb habe ich Naehrwerte und Zutaten nur bei Caramel & Seasalt
eingetragen. Ein fehlendes Zutatenverzeichnis ist eine Luecke, ein
falsches ist eine Falschangabe nach LMIV -- und bei Allergien ist das
der Unterschied, auf den es ankommt.

**Die Allergene habe ich fuer alle vier gesetzt.** Sie sind gegen die
Verwechslung robust: In beiden Datensaetzen stehen Sojaoel und Butter,
in Datensatz B zusaetzlich Weizenmehl. Egal wie herum die Datensaetze
gehoeren -- die beiden Karamell-Sorten tragen Milch und Soja, die beiden
Keks-Sorten zusaetzlich Gluten.

**Was zu tun ist:** einmal die vier Packungen in die Hand nehmen und
Naehrwerttabelle und Zutatenliste abschreiben. Dann stimmt es.

---

**Der zweite Fund, und der ist ernster.** Beim Zuordnen ist mir
aufgefallen, was die App bisher anzeigte, wenn keine Allergene erfasst
sind: einen gruenen Haken und den Satz **„Keine deklarationspflichtigen
Allergene enthalten."** Dazu oben am Produkt einen gruenen Chip **„Ohne
Allergene"**.

Kein einziges der 66 Produkte trug gepruefte Angaben. Die App hat also
fuer jedes Produkt Entwarnung gegeben -- auch fuer die mit Milch, Gluten
und Nuessen. Fuer jemanden mit einer Milchallergie ist das die
gefaehrlichste Art von Falschangabe: eine Entwarnung, die niemand
gegeben hat.

Ursache war eine Zeile, die zwischen „nicht erfasst" und „geprueft,
keines enthalten" nicht unterschied. Ist behoben; die App kennt jetzt
drei Zustaende und sagt bei fehlenden Angaben: „Das heisst nicht, dass
keine Allergene enthalten sind. Massgeblich ist die Verpackung." Sechs
Tests halten den Unterschied fest. Du musst nichts tun.

---

**Was 4,00 EUR bedeuten, in Zahlen.** Damit du die Kombi-Idee darauf
aufbauen kannst:

| Fall | Kundenpreis | Wareneinsatz | bleibt nach Spende |
|---|---|---|---|
| Listenpreis | 4,00 | 74,8 % | 0,76 EUR |
| mit Abo | 3,80 | 78,7 % | 0,58 EUR |
| Abo + Gold | 3,60 | 83,1 % | 0,40 EUR |
| Abo + Gold + Deal | 3,24 | 92,3 % | 0,08 EUR |
| **Coupon 25 % auf Abo-Preis** | **2,85** | **104,9 %** | **−0,26 EUR** |

**Die Kombi rechnet sich, und zwar wegen der Cola.** Coca-Cola 0,5 l
(BS-001) kostet uns 0,89 EUR netto bei 2,605 EUR Listenpreis netto --
Wareneinsatz 34 %. Das ist die gesunde Haelfte des Bundles.

    Einzeln zusammen        7,10 EUR brutto
    Kombipreis              6,00 EUR       (Nachlass 1,10 EUR = 15,5 %)

    Aufteilung nach Anteilen: Cola 2,62 brutto, Popcorn 3,38 brutto
    Nettoerloes             5,36 EUR
    Wareneinsatz            3,68 EUR  =  68,7 %
    abzueglich Spende       0,27 EUR
    bleibt                  1,41 EUR

Zum Vergleich: einzeln zum Listenpreis blieben 2,34 EUR. Die Kombi
kostet dich also rund 0,93 EUR Deckungsbeitrag -- lohnend, wenn sie
Kaeufe ausloest, die sonst nicht stattfaenden, und teuer, wenn sie nur
den Einzelkauf ersetzt.

Fuer eine Wareneinsatzquote von 40 % muesste die Kombi bei rund
10,40 EUR liegen. Das ist keine Empfehlung, sondern der Massstab, gegen
den du die 6,00 EUR bewusst setzt.

**Zum Kinovergleich:** als Positionierung fuer dich taugt er. Auf die
Landingpage oder in die App gehoert er nicht als Preisaussage -- eine
Werbung mit einem Preisvergleich muss stimmen und belegbar sein, und wir
haben weder eine Quelle fuer die Kinopreise noch die Fuellmengen, auf
die du hochrechnest. Die Gewichte der eigenen Packungen kennen wir ja
selbst noch nicht.

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
