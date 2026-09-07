# apps/landing — die Seite unter boerdesnack24.de

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

An drei Stellen weicht die Seite von der Wahrheitsschicht ab. Jedes Mal,
weil der laufende Code etwas anderes sagt als das Dokument — und der Code
ist das, was Kunden tatsaechlich bekommen:

### 1. Die Bezugsgroesse der 5 % ist nicht offen, sie steht im Backend

Die Wahrheitsschicht fuehrt „brutto/netto, Waren- oder Gesamtumsatz" als
OFFEN und verbietet die Zahl deshalb auf der Seite. Die Datenbank
entscheidet die Frage aber seit dem 10.07.2026:

```sql
donation_rate()            -> 0.05
purchase_net(p_gross)      -> round(p_gross / 1.07, 2)
purchase_donation(p_gross) -> round(purchase_net(p_gross) * donation_rate(), 2)
```

(`supabase/migrations/20260710104458_donations_news.sql`)

Also: **5 % vom Nettobetrag jedes Kaufs.** Genau so steht es auch in der
Kunden-App („5 % jedes Netto-Umsatzes", `onboarding_stories.dart`,
`history_tab.dart`). Die Seite nennt die Zahl deshalb mit Bezugsgroesse.

→ **Philipp bestaetigt oder korrigiert das.** Wird es korrigiert, aendert
sich nicht nur die Seite, sondern auch die Berechnung im Backend und die
Anzeige in der App.

### 2. Der Empfaengerkreis ist nicht „aus dem Suelzetal"

Die Wahrheitsschicht sagt „gemeinnuetzige Organisationen aus dem
Suelzetal — IST". Die angelegten Zwecke sind:

| Zweck | aus dem Suelzetal? |
|---|---|
| Tafel Magdeburg | nein |
| Kinderhospiz Magdeburger Elbland | nein |
| Feuerwehr Suelzetal | ja |

(`supabase/migrations/20260710104458_donations_news.sql`)

Zwei von drei liegen ausserhalb. „Aus dem Suelzetal" waere damit eine
Aussage, die die eigene Datenbank widerlegt. Die Seite schreibt deshalb
**„aus der Region"**.

→ **Zu entscheiden:** entweder der Empfaengerkreis wird enger gefasst und
die beiden Magdeburger Zwecke fliegen raus, oder die Formulierung bleibt
„aus der Region". Beides ist vertretbar, eines muss gelten.

### 3. Die Abstimmung haengt nicht am kostenpflichtigen Abo

Die Wahrheitsschicht sagt: „Zugang zur Abstimmung — **nur ueber das
kostenpflichtige App-Abo** — IST", und leitet daraus eine
Transparenzpflicht ab. Der Code kennt diese Schranke nicht:

```sql
create or replace function public.vote_donation_cause(p_cause_id uuid) ...
  v_uid uuid := auth.uid();
  if v_uid is null then raise exception 'Nicht angemeldet'; end if;
  -- danach: keine Abo-Pruefung
```

(`supabase/migrations/20260804120315_spendenvorschlaege_nicht_oeffentlich.sql`;
`suggest_donation_cause` genauso)

Jedes angemeldete Konto darf vorschlagen und abstimmen, kostenlos. Die
Seite sagt das so — und das ist auch die unproblematischere Variante:
eine Mitbestimmung, die nur gegen Geld zu haben ist, muesste an derselben
Stelle offengelegt werden und beruehrt bei Minderjaehrigen zusaetzlich
§§ 104–110 BGB.

→ **Zu entscheiden:** bleibt die Abstimmung frei (dann ist die
Wahrheitsschicht zu korrigieren), oder soll die Abo-Schranke tatsaechlich
gebaut werden (dann aendert sich der Satz auf der Seite und es braucht die
Offenlegung)?

## Offene Punkte vor dem Livegang

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
- [ ] Bezugsgroesse der 5 % bestaetigen (siehe oben, Punkt 1)
- [ ] Empfaengerkreis „Region" oder „Suelzetal" (Punkt 2)
- [ ] Abstimmung frei oder abopflichtig (Punkt 3)
- [ ] Markenschriften self-hosted uebernehmen
- [ ] Automatendarstellung: Herstellerbild, eigene Illustration oder die
      jetzige Zeichnung behalten
- [ ] App-Vormerkung laeuft ueber eine E-Mail; ein eigener Endpunkt fuer
      Privatpersonen existiert nicht (`advertising_inquiry_submit` verlangt
      einen Firmennamen)
