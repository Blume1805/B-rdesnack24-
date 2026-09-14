# apps/landing — die Referenzfassung der Seite boerdesnack24.de

> **Rollenwechsel am 07.09.2026.** Diese Seite ist **nicht mehr** die
> ausgelieferte Website. Philipp hat entschieden: das Frontend entsteht und
> wird gepflegt in **Lovable** (eigenes Projekt
> `0c068d85-ef58-4450-a511-3e7ac1d0446d`), die Domain `boerdesnack24.de`
> zeigt per DNS dorthin, Hostinger liefert nur die Domain.
>
> Was hier liegt, bleibt trotzdem wichtig — als **Vorlage und Pruefstelle**:
>
> * der geprueste Wortlaut aller acht Szenen (Wahrheitsschicht, Zeitform)
> * Impressum und Datenschutz, erzeugt aus `docs/rechtstexte/` — eine
>   Quelle, kein zweiter Stand
> * die Kontrastprobe (`scripts/landing_kontrast.py`, laeuft im CI)
> * eine lauffaehige Notfallfassung, falls Lovable einmal nicht verfuegbar
>   ist
>
> **Sie ist keine zweite Website.** Sie wird nirgends veroeffentlicht.

Statischer Onepager. Kein Bauwerkzeug, kein Framework, keine
Animationsbibliothek: drei Dateien plus zwei erzeugte Rechtsseiten. Was im
Ordner liegt, ist genau das, was ausgeliefert wird.

```
index.html              die acht Szenen
impressum.html          erzeugt aus docs/rechtstexte/impressum.md
datenschutz.html        erzeugt aus docs/rechtstexte/datenschutz.md
assets/styles.css       Tokens 1:1 aus dem Design-System der Apps
assets/szenen.js        ein Scroll-Handler, Bewegungsschalter, Formular
assets/konfiguration.js Supabase-Adresse fuer das Anfrageformular
```

## Vor dem Ausrollen: zwei Handgriffe

**1. `assets/konfiguration.js` befuellen.** Ohne Werte blendet die Seite das
Formular aus und nennt den direkten Weg per E-Mail — das ist Absicht, kein
Fehler. Einzutragen sind die Projekt-URL und der **anon**-Schluessel aus
`apps/kunden-app/env/prod.json`. Beide sind oeffentlich; der
`service_role`-Schluessel gehoert niemals in diese Datei.

**2. Rechtsseiten erzeugen**, wenn sich ein Rechtstext geaendert hat:

```bash
python3 scripts/rechtstexte_zu_html.py
```

Die Quelle bleibt `docs/rechtstexte/`. Wer die HTML-Dateien von Hand
nachpflegt, hat nach der ersten Aenderung zwei Staende und weiss nicht
mehr, welcher gilt.

## Ausrollen auf Hostinger

Die Domain ist bei Hostinger erworben. Zwei Wege, und die Wahl ist keine
Geschmacksfrage:

* **Hostinger-Webhosting.** Ordnerinhalt per SFTP oder Dateimanager nach
  `public_html/`. Fertig — es gibt nichts zu bauen. Serverstandort im
  Hostinger-Konto auf die EU stellen.
* **Nur die Domain bei Hostinger, ausgeliefert woanders.** Geht ebenso: die
  Domain zeigt per DNS auf ein beliebiges Ziel. Wer sie kauft, muss dort
  nicht hosten.

**Beides ist erst zulaessig, wenn der Punkt „Hosting" unten geklaert ist.**

Die Seite braucht kein HTTPS-Zertifikat aus dem Repo und keinen
Redirect-Zauber: eine Datei, ein Verzeichnis, zwei Unterseiten.

## Pruefungen

```bash
python3 scripts/landing_kontrast.py    # WCAG 2.1 AA, 15 Farbpaare
python3 scripts/rechtstexte_zu_html.py # erzeugt neu; git diff muss leer sein
```

## Was die Seite bewusst nicht tut

* **Keine externen Schriften.** Google Fonts zur Laufzeit wuerde die
  IP-Adresse jedes Besuchers an Google uebertragen (LG Muenchen I,
  20.01.2022 – 3 O 17493/20) und im laendlichen Mobilfunk Ladezeit kosten.
  Solange die Markenschriften nicht selbst gehostet sind, laeuft die Seite
  auf Systemschriften. **Naechster Schritt:** die vier
  `woff2`-Dateien aus dem Lovable-Projekt A (`public/fonts/`, Bricolage
  Grotesque und Hanken Grotesk, beide OFL) uebernehmen — dann steht die
  Marke, ohne dass ein fremder Server angefragt wird.
* **Keine Cookies, kein Tracking, kein Einwilligungsbanner.** Es wird nichts
  auf dem Geraet abgelegt ausser der Merkung des Bewegungsschalters
  (`localStorage`, rein funktional, § 25 Abs. 2 Nr. 2 TDDDG).
* **Keine Animationsbibliothek.** Ein rAF-gedrosselter Scroll-Handler,
  `IntersectionObserver`, `position: sticky`. Ohne JavaScript ist die Seite
  vollstaendig lesbar; die Bewegung aendert nur Sichtbarkeit, nie Inhalt.
* **Kein Foto eines Automaten oder Standorts.** Es gibt keine. Der
  Automaten-Anker ist eine schematische Zeichnung mit sichtbarer
  KI-Kennzeichnung (Art. 50 EU AI Act) und liegt an **einer** Stelle in
  `index.html` — ein freigegebenes Herstellerbild ersetzt sie dort, nicht an
  acht Stellen.

## Warum bestimmte Saetze so und nicht anders dastehen

Grundlage ist die Wahrheitsschicht des `scrollcraft`-Skills
(`docs/scrollcraft/references/truth.md`) und der Auftrag
`docs/lovable/AUFTRAG-2026-09-LANDINGPAGE-SCROLLCRAFT.md`. Stand 09/2026:
**0 Automaten, 0 Verkaeufe, 0 bestaetigte Standorte, App in keinem Store.**

Daraus folgt: kein Praesens ueber den Betrieb, keine Produktzahl, keine
Reichweite, keine Kundenstimme, keine Zahl von Erloesquellen, kein
Partnername. Der alte Hunger-Claim ist endgueltig abgeloest und auch nach
Inbetriebnahme nicht wieder verwendbar.

An drei Stellen widersprach die Wahrheitsschicht dem laufenden Code.
Philipp hat am 07.09.2026 entschieden; die Wahrheitsschicht ist entsprechend
korrigiert (`docs/scrollcraft/references/truth.md`).

### 1. Bezugsgroesse der 5 % — entschieden: Nettopreis je Produkt

Die Wahrheitsschicht fuehrte „brutto/netto, Waren- oder Gesamtumsatz" als
OFFEN. Die Datenbank rechnete seit dem 10.07.2026 so:

```sql
purchase_net(p_gross)      -> round(p_gross / 1.07, 2)
purchase_donation(p_gross) -> round(purchase_net(p_gross) * 0.05, 2)
```

Das war auf zwei Arten nicht das, was zugesagt war: Bezugsgroesse war der
Bruttobetrag des **ganzen Kaufs**, und der Steuersatz war fest 7 % — auch
fuer Getraenke mit 19 %.

Seit `20260907110000_spende_je_produkt_netto.sql` gilt:

```
Nettopreis der Position = round(menge * bruttoeinzelpreis / (1 + satz/100), 2)
Spende des Kaufs        = round(summe der Nettopreise * 5 %, 2)
```

Ein Kauf aus 2,00 EUR Snack (7 %) und 2,50 EUR Getraenk (19 %) ergibt jetzt
0,20 EUR statt 0,21 EUR. Nachweis mit Gegenproben:
`scripts/pruefumgebung/104_spende_je_produkt.sql` (T1–T6).

### 2. Empfaengerkreis — entschieden: die drei Seed-Zwecke sind raus

Tafel Magdeburg, Kinderhospiz Magdeburger Elbland und Feuerwehr Suelzetal
sind archiviert (`status = 'archived'`, `deleted_at` gesetzt — nicht
geloescht, damit sie sich zurueckholen lassen). Der Empfaengerkreis heisst
auf der Seite „gemeinnuetzige Organisationen aus der Region".

**Offen:** Philipp hatte einmal eine Liste mit ueber 60 Organisationen
bereitgestellt. Sie liegt **nicht** im Repo und nicht in den Migrationen —
gesucht wurde in `docs/`, `supabase/` und `scripts/`. Ohne diese Liste
bleibt `donation_causes` leer; erfunden wird hier nichts.

### 3. Abstimmung — entschieden: bleibt frei

`vote_donation_cause` und `suggest_donation_cause` verlangen nur eine
Anmeldung, keine Abo-Schranke. Das bleibt so. Damit entfaellt auch die
Offenlegungspflicht, die die Wahrheitsschicht aus der gegenteiligen Annahme
abgeleitet hatte.

## Offene Punkte vor dem Livegang

Sie stehen zusammen mit allem anderen in
[`docs/betrieb/AUFGABEN-PHILIPP.md`](../../docs/betrieb/AUFGABEN-PHILIPP.md).

Die ersten beiden sind **blockierend** — ohne sie darf die Seite nicht
erreichbar sein.

- [ ] **Hosting.** Die Datenschutzerklaerung v6 nennt als Ausliefernden
      ausdruecklich GitHub Pages und begruendet damit den
      Drittlandtransfer. Laeuft boerdesnack24.de bei Hostinger, ist das
      falsch: es fehlen der Eintrag zum Hoster, die Serverprotokolle und
      der Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Zu tun:
      AV-Vertrag mit Hostinger schliessen, EU-Serverstandort waehlen,
      Abschnitt 4 der Datenschutzerklaerung ergaenzen (eigene Migration mit
      geprueften Ankertexten), Verzeichnis der Verarbeitungstaetigkeiten
      nachziehen.
- [ ] **Impressum.** Der Text sagt „Wir halten die Informationen in dieser
      **App** …". Auf einer Website ist das schief. Der Wortlaut ist
      zeichengenau mit der Produktionsdatenbank abgeglichen und wird
      deshalb nicht nebenbei geaendert — das braucht eine eigene Migration
      und Philipps Freigabe.
- [ ] **Liste der moeglichen Spendenempfaenger.** Die 60+ Organisationen
      liegen nicht im Repo; ohne sie hat die Abstimmung nichts zur Auswahl.
- [ ] Nachweisform der Spende gegenueber Kunden
- [ ] Markenschriften self-hosted uebernehmen
- [ ] Automatendarstellung: Herstellerbild, eigene Illustration oder die
      jetzige Zeichnung behalten
- [ ] App-Vormerkung laeuft ueber eine E-Mail; ein eigener Endpunkt fuer
      Privatpersonen existiert nicht (`advertising_inquiry_submit` verlangt
      einen Firmennamen)
