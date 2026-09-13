# Auftrag an Lovable: Bildschirmentwürfe für die Kunden-App (10.09.2026)

**Status: nicht abgesendet. Überarbeitet am 12.09.2026.**

**Was sich am 12.09. geändert hat:** Der Auftrag hatte drei Lücken, die
erst aufgefallen sind, als die Landingpage dasselbe Problem gezeigt hat
— Aufträge, die nach Anlässen gegliedert sind, lassen aus, wonach nie
jemand gefragt hat.

1. **Der Ladescreen fehlte vollständig.** Er ist bis heute der
   Flutter-Standard: eine weiße Fläche ohne Inhalt. Jetzt **Lieferung 0**.
2. **Die Struktur der App fehlte.** Vier Reiter, zwei schwebende Knöpfe,
   zwei Zustände — begründet, aber nur in Code-Kommentaren. Ebenfalls
   Lieferung 0.
3. **Die Bildschirme waren nicht durchentschieden.** Von dreizehn
   Pflichtfeldern je Bildschirm waren bei den meisten drei bis fünf
   gefüllt. Die Felder stehen jetzt in
   `docs/lovable/KUNDEN-APP-BILDSCHIRMBUCH.md`; dieser Auftrag verweist
   darauf, statt sie zu wiederholen.

Dazu eine **Korrektur an den Tokens**, die vor dem Absenden wirksam sein
muss — siehe Abschnitt „Eine Farbe stimmt nicht“ weiter unten.
Ziel ist das Projekt **BÖRDESNACK Hub** (`snack-aid-app`,
`d5033021-6dce-4044-8bf6-bb50d80aa8ff`).

## Warum dieses Projekt und nicht die App selbst

Die Kunden-App ist in Flutter geschrieben. Lovable schreibt TypeScript
und React und kann keine `.dart`-Datei öffnen. Entscheidung Philipps vom
10.09.2026: **Lovable entwirft, die Umsetzung nach Flutter mache ich.**
Der Hub ist damit keine zweite App mehr, sondern die Entwurfsmappe.

**Das Projektwissen ist am 10.09.2026 dafür neu geschrieben worden**
(Fassung im Repo: `docs/lovable/hub-projektwissen.md`). Die alte Fassung
beschrieb den Hub als eigenständige Kunden-App mit Supabase-Anbindung;
die dort aufgeführten RPC-Signaturen sind vollständig in
`docs/API-UNTERNEHMENSBEREICH.md` und `docs/API-FIRMENPORTAL.md`
erhalten, es geht nichts verloren.

Der Auftragstext vom 30.07. in der Projektbeschreibung ist überholt und
darf nicht mehr als Grundlage dienen: er nennt Dunkelblau als
Primärfarbe, Statusstufen „Platin" und „Lifetime", einen Live-Zähler der
Spendensumme, Konfetti und Lottie sowie eine fünfteilige Navigation mit
„Home" und „Karte". Nichts davon gilt.

## Reihenfolge

1. ~~`landingpage-nachfassen.md`~~ — erledigt 11.09.
2. ~~`AUFTRAG-2026-09-LANDINGPAGE-KUNDENNUTZEN.md`~~ — erledigt 11.09.
3. ~~`AUFTRAG-2026-09-LANDINGPAGE-BEWEGUNG-2.md`~~ — erledigt 12.09.
4. dieser Auftrag, **Lieferung 0** — Ladescreen und Struktur, rund 2 Credits
5. dieser Auftrag, **Lieferung 1** — rund 6 bis 8 Credits
6. `AUFTRAG-2026-09-LANDINGPAGE-RESTARBEITEN.md` — die offenen Punkte der Seite
7. dieser Auftrag, **Lieferung 2**

**Lieferung 0 kommt zuerst**, und zwar aus einem Grund, der nichts mit
Reihenfolge zu tun hat: Ladescreen und Struktur legen fest, worin die
anderen Bildschirme stehen. Wer den Rahmen nach den Bildern entwirft,
entwirft ihn zweimal.

Lieferung 1 sind drei Bildschirme und eine Karte. Erst ansehen, dann Lieferung 2 —
nicht alles auf einmal beauftragen.

---

## Der Auftragstext

Das Projektwissen dieses Projekts ist neu. Lies es zuerst vollständig,
besonders Abschnitt 0 (dies ist eine Entwurfsvorlage, kein Produkt) und
Abschnitt 1 (es gibt noch keinen Automaten). Die alte
Projektbeschreibung vom 30. Juli gilt nicht mehr.

Dazu die Skills `boerdesnack24-design`, `frontend-taste`, `impeccable`
und `humanizer` — letzteren auf **jeden** sichtbaren Text anwenden,
Beschriftungen und Fehlermeldungen eingeschlossen.

**Was geliefert wird, je Bildschirm:**

1. Eine Seite, die man ansehen kann. Feste Beispielwerte in einer Datei
   je Bildschirm, keine Datenbank, kein Login.
2. **Beide Zustände**, wo das Projektwissen sie verlangt: vor dem Start
   und im Betrieb. Zwei getrennte Seiten, nicht ein Schalter.
3. Die Ansicht bei **400 px Breite** — das ist der Regelfall, nicht der
   Sonderfall. Ein Entwurf, der nur am Desktop überzeugt, ist unbrauchbar.
4. Eine kurze Liste, welche Tokens der Bildschirm benutzt.

---

## Eine Farbe stimmt nicht — vor dem Absenden zu korrigieren

Das Projektwissen des Hubs nennt `--brand-text: #8A6E00` als „Gold ALS
SCHRIFT auf hellem Grund, 4,9:1“. Nachgerechnet:

| Farbe | auf Weiß | auf Creme `#F7F5F1` |
|---|---|---|
| `#8A6E00` | 4,87:1 ✓ | **4,47:1 ✗** |
| `#856A00` | 5,17:1 ✓ | 4,75:1 ✓ |

Die 4,9:1 gelten nur auf Weiß. Die App legt Karten aber auf
`surfaceAlt` (#F7F5F1) — dort fällt der Ton durch. Die Landingpage
verwendet aus genau diesem Grund seit Anfang an `#856A00`; die App und
das Hub-Projektwissen sind ihr nie gefolgt.

Der Kontrasttest im Repository prüft `brandText` **nur gegen Weiß**
(`packages/bs24_kern/test/core/theme/contrast_test.dart`), während er
`textMuted` gegen Weiß **und** Creme prüft. Deshalb ist es nie
aufgefallen.

Zu tun, bevor Lieferung 0 rausgeht, sonst wird mit dem falschen Ton
entworfen: Token in der App auf `#856A00`, Test um die Cremefläche
erweitern, Hub-Projektwissen nachziehen.

---

# Lieferung 0 — Ladescreen und Struktur

**Stand 13.09.2026: abgesendet, aber nicht geliefert.** Der Agent hat das
Projekt geprüft (Dateien, Komponenten, Skills), **0,6 Credits**
verbraucht und dann geschrieben: „Die Prüfung ist abgeschlossen, aber
die beiden Bildschirme konnten in diesem Durchlauf nicht umgesetzt
werden. Bitte sende ‚Weiter‘, dann baue ich sie ohne erneute Planung.“
Die Antwort „Weiter“ ließ sich nicht mehr senden — das Guthaben war
aufgebraucht.

**Daraus die dritte Erfahrungsregel:** Beim Hub kostet allein das
Einlesen rund 0,6 Credits, und der Agent liefert im selben Durchgang
nichts. Ein Auftrag an den Hub braucht deshalb **zwei** Nachrichten und
mindestens **2,5 Credits** Reserve. Beim nächsten Guthaben genügt
„Weiter“ — der Auftragstext liegt dem Agenten bereits vor.

Rund 2 Credits. Kommt vor Lieferung 1, weil beides den Rahmen festlegt,
in dem die übrigen Bildschirme stehen.

## Bildschirm 0 — Der Ladescreen

Der erste Eindruck der Marke, und er ist nie entworfen worden. Heute ist
es der Flutter-Standard: eine **weiße Fläche ohne jeden Inhalt**, danach
springt die App auf den dunklen Kopfbereich (#0C0A07). Weiß auf
Fast-Schwarz, ohne Übergang.

**Bevor du etwas entwirfst, zwei technische Grenzen — sie sind der
häufigste Grund, warum Splash-Entwürfe unbrauchbar sind:**

* Der Ladescreen wird vom **Betriebssystem** gezeichnet, bevor die App
  läuft. Er kann **nicht animieren**, nichts nachladen, keinen Text
  zeigen, der sich ändert, und keinen Fortschritt anzeigen. Ein
  Fortschrittsbalken, ein laufender Zähler oder ein sich aufbauender
  Schriftzug sind an dieser Stelle nicht umsetzbar.
* Er dauert **Bruchteile einer Sekunde**. Alles, was man lesen müsste,
  ist verschwendet.

**Was zu entwerfen ist:**

1. **Die statische Fläche.** Grundfarbe `#0C0A07` (`heroInk`), nicht
   weiß — dann gibt es keinen Sprung auf den ersten Bildschirm, und der
   Dunkelmodus ist dieselbe Gestaltung statt einer zweiten. Darauf die
   Wortmarke. Sonst nichts. Kein Slogan, keine Jahreszahl, keine
   Ortsangabe.
2. **Vier Zuschnitte:** Telefon hoch (400 × 860), Telefon quer, Tablet,
   und das Android-12-Format — dort zeichnet das Betriebssystem nur das
   **App-Symbol auf einer Fläche**, die Wortmarke fällt weg. Der Entwurf
   muss auch auf das Symbol allein heruntergebrochen funktionieren.
3. **Den Übergang danach**, und das ist der eigentliche Entwurf: Was
   sieht man in der ersten halben Sekunde, in der die App läuft, aber
   noch keine Daten hat? Heute ist das ein goldener Fortschrittsbalken je
   Widget. Entwirf stattdessen einen ruhigen Ladezustand für die
   Automatenliste — Platzhalterkarten in der Form der späteren Karten,
   ohne Zappeln, ohne Spinner in der Bildschirmmitte. **Dieser** Teil
   darf animieren.

**Was der Ladescreen nicht darf:** eine Aussage über den Betrieb machen.
Kein „immer für dich da“, kein „24/7“, kein „Dein Automat in der
Börde“. Es steht kein Automat (§ 5 UWG), und der Satz wäre auf dem
allerersten Bildschirm besonders sichtbar falsch.

## Bildschirm S — Die Struktur

Die App hat vier Reiter und zwei schwebende Knöpfe. Die Aufteilung ist
entschieden und wird **nicht** neu erfunden — entworfen wird, wie sie
aussieht.

**Die Aufteilung, verbindlich:**

| Position | Reiter | Inhalt |
|---|---|---|
| 1 | **Automaten** | Einstieg, immer |
| 2 | **Vorteile** | Angebote, Status, Abo |
| — | *(schwebender Knopf)* | **Kundenkarte**, nur im Betrieb |
| 3 | **Für die Region** | Spendenanteil, Abstimmung, Belegarchiv |
| 4 | **Profil** | Konto, Verträge, Rechtliches |

**Warum der Einstieg die Automatenliste ist** und nicht „Vorteile“: Sie
beantwortet die einzige Frage, die ohne Vorgeschichte funktioniert —
lohnt der Weg? „Vorteile“ ist ein Nachschlagebildschirm und zeigt vor
dem ersten Kauf nur Nullen. Der Einstieg ändert sich auch **nicht** mit
der Kaufhistorie: Wer dieselbe App öffnet und etwas anderes vorfindet,
ohne zu wissen warum, verliert die Orientierung.

**Zwei Zustände, beide entwerfen:**

* **Vor dem Start** — der Kundenkarten-Knopf entfällt, samt seiner Mulde
  in der Leiste. Es gibt keinen Automaten, an dem man die Karte vorzeigen
  könnte; ein Knopf ins Leere an der auffälligsten Stelle der App wäre
  schlimmer als keiner. Die Leiste muss ohne Mulde genauso ruhig
  aussehen wie mit.
* **Im Betrieb** — mit Knopf und Mulde.

**Die Frage, die du beantworten sollst:** Im Betrieb liegen **zwei**
schwebende Knöpfe auf derselben Fläche — die Kundenkarte in der Mitte
(gold, groß) und der Chat-Assistent unten rechts. Das ist die
auffälligste Stelle der App, doppelt belegt. Zeig zwei Fassungen: eine
mit beiden Knöpfen und eine, in der der Chat-Assistent im Kopfbereich
sitzt. Empfiehl eine, mit Begründung.

**Was noch dazugehört:**

* Der aktive Reiter ist heute eine goldene Kachel mit Symbol und Label
  darunter. Prüfe, ob der Zustand „aktiv“ ohne Farbe erkennbar bleibt —
  Farbe allein reicht nicht (WCAG 1.4.1).
* Beschriftungen bleiben wie sie sind. **„Für die Region“ heißt nicht
  „Meine Spenden“**: Der Kunde spendet nicht, Bördesnack24 gibt einen
  Anteil des eigenen Umsatzes ab. „Meine Spenden“ weckt die Erwartung
  einer Spendenbescheinigung, die es nicht geben kann.
* Der Kündigungsweg liegt unter Profil und muss dort **ohne Suchen** zu
  finden sein (§ 312k BGB). Er wird nicht kleiner, grauer oder tiefer
  gelegt als der Rest.

---

# Lieferung 1

## Bildschirm 1 — Registrierung

Der erste Bildschirm, den ein Kunde sieht, egal ob er von der
Landingpage oder aus dem Store kommt. Er sieht heute aus wie ein
Formular beim Finanzamt.

**Was tatsächlich abgefragt wird und bleiben muss:**

Privatkunde: Kundenart · Name · E-Mail · Geburtsdatum · Passwort ·
Wiederholung · zwei Zustimmungen (Datenschutz, Nutzungsbedingungen).

Unternehmer zusätzlich: Firmenname · Straße und Hausnummer · PLZ · Ort ·
Land · Steuernummer · USt-IdNr. (freiwillig).

**Kein Feld darf weg.** Das Geburtsdatum ist nicht optional: das Abo
darf nur an Volljährige verkauft werden, und die Prüfung läuft
serverseitig gegen dieses Feld. Die beiden Zustimmungen sind
Einwilligungen nach Art. 6 Abs. 1 lit. a DSGVO und müssen ausdrücklich
und getrennt erfolgen — keine Sammel-Checkbox, keine Vorauswahl.

**Die Aufgabe ist die Anordnung, nicht die Menge.** Ein Privatkunde
sieht heute alles auf einmal. Er soll sechs Felder sehen; die sieben
Unternehmerfelder erscheinen erst, wenn er „Unternehmer" wählt.

Zwei Dinge, die dabei nicht verloren gehen dürfen:

* Fehler stehen **am Feld**, nicht als kurz eingeblendete Meldung unten.
  Das ist bewusst so gebaut worden und geht sonst wieder verloren.
* Der Kopfbereich trägt Wortmarke, „Herzlich willkommen" und den Slogan
  „Genießen. Geben. Gutes tun." auf dunklem Grund (`--hero-ink`) und
  scrollt weg, damit das Formular Platz bekommt.

**Was der Bildschirm nicht darf:** dem Kunden erzählen, was er gleich
alles kann. Er hat noch nichts erlebt, und es gibt noch keinen
Automaten. Ein Satz genügt.

**Nachgetragen am 12.09. — sechs Zustände, nicht einer.** Der Auftrag
beschrieb bisher nur das leere Formular. Entworfen werden **alle sechs**:

| Zustand | Worauf es ankommt |
|---|---|
| leer | die sechs Felder, nichts sonst |
| teilweise ausgefüllt | die Unternehmerfelder klappen auf, ohne dass die Seite springt |
| Feldfehler | am Feld, mit dem Feld verknüpft — nicht als Meldung unten |
| **sendet** | der Knopf bleibt an seiner Stelle und ändert nur den Zustand; kein Vollbild-Spinner |
| **Serverfehler** | der wichtigste: alle Eingaben bleiben stehen, die Meldung sagt, was zu tun ist, nicht was schiefging |
| erfolgreich | wohin es weitergeht |

Die beiden fett gesetzten sind nie entworfen worden. Beim
Registrierungsformular ist der Moment nach dem Tippen auf „Konto
anlegen“ der, an dem ein Kunde abspringt — ein Formular, das seine
Eingaben bei einem Fehler verliert, verliert den Kunden gleich mit.

**Zwei Angaben brauchen einen Satz, der sagt warum**, sonst wirken sie
wie Neugier: das **Geburtsdatum** (das Abo darf nur an Volljährige
verkauft werden, die Prüfung läuft serverseitig gegen dieses Feld) und
bei Unternehmern die **Steuernummer**. Der Satz steht am Feld, bevor man
es ausfüllt, nicht hinterher.

## Bildschirm 2 — Vorteile

Der größte Bildschirm der App und der unübersichtlichste. Heute zeigt er
acht Belohnungsmechaniken nebeneinander und zwei Fortschrittsbalken in
verschiedenen Einheiten, deren Schwellen sich überschneiden: einer läuft
in Euro (Status ab 150/500/1000 €), einer in Punkten (Meilensteine bei
500/1200/2000/3000). „500" bedeutet an zwei Stellen zwei verschiedene
Dinge.

**Neu: vier Blöcke, feste Reihenfolge, von konkret nach abstrakt.**

**A · Jetzt günstiger** — was heute konkret weniger kostet.
Wochenangebote, das persönliche Angebot und die **Kombiangebote**
(Bildschirm 4). Gibt es keine Angebote, **entfällt der Block ganz**.
Keine leere Karte, kein „Aktuell keine Angebote".

**B · Dein Vorteil** — der Rabattsatz als **ein Satz**, kein Balken,
keine Stufen: „Du zahlst dauerhaft 5 % weniger als am Automaten." Ohne
Abo: „Mit Abo zahlst du 5 % weniger."

**C · Was du erreicht hast** — Status und Meilensteine **zusammen an
einem Ort**, und der Abstand zur nächsten Schwelle im Klartext statt als
zweiter Balken: „Noch 520 Punkte bis zum nächsten Gutschein (10 %)."
Vor dem ersten Kauf entfällt der Block.

**D · Abo** — nur, wenn es sich für diesen Kunden rechnet. Sonst
erscheint es hier nicht.

**Bewusst nicht anzeigen:** Challenges, Abzeichen, Punktzahlen ohne
Bezugsgröße.

**Vor dem Start** bleibt von allem vieren nichts übrig. Dann trägt der
Bildschirm einen Satz: „Nach dem ersten Kauf siehst du hier deine
Vorteile." Entwirf diesen Zustand ernsthaft — er ist der einzige, den
heute jemand zu sehen bekommt, und er darf nicht wie ein Fehler wirken.

An den Blöcken A und C steht der Chip „Automatisch" aus Abschnitt 7 des
Projektwissens, am Kopf des Blocks, nicht darunter.

## Bildschirm 3 — Für die Region

Hieß bis heute „Meine Spenden". Der Name war falsch: der Kunde spendet
nicht, Bördesnack24 gibt einen Anteil seines eigenen Umsatzes ab.

**Vor dem ersten Verkauf** gibt es keine Summe, keinen Balken und keinen
Zähler. Es gibt genau einen Beweis, und der ist der Rechenweg an einem
echten Produkt:

    Riegel                   2,50 €   brutto
    − 7 % Umsatzsteuer   →   2,34 €   netto
    × 5 %                →   0,12 €   für die Region

Dazu der Satz: „Gerechnet wird mit dem Steuersatz des jeweiligen
Produkts — bei einem Getränk mit 19 % fällt der Anteil anders aus."
Und: „Welche Organisationen es werden, steht noch nicht fest."

**Im Betrieb** derselbe Rechenweg, aber mit dem eigenen Kauf, neben dem
Beleg. Dazu die Abstimmung über den Empfänger — die steht jedem offen,
auch ohne Abo, und das gehört sichtbar dazu.

Entwirf den Rechenweg so, dass er nach einer Rechnung aussieht und nicht
nach einer Werbeaussage: feste Schrittweite, die Beträge untereinander,
das Ergebnis hervorgehoben. Er ist das inhaltliche Signature-Element
dieses Bildschirms; sonst bleibt die Seite ruhig.

## Bildschirm 4 — Der Kombiangebot-Coupon

Das ist keine Seite, sondern eine Karte — und die wichtigste Lieferung
dieses Auftrags.

**Warum sie besonders ist:** Die Gestaltung ist für **alle** Bundles
identisch. Was du hier entwirfst, wird einmal gebaut und danach von jedem
Kombiangebot gefüllt, das Bördesnack24 anlegt. Es gibt keinen zweiten
Entwurf je Angebot. Entwirf also keine Karte für „Cola + Popcorn",
sondern eine Vorlage, die zwei genauso trägt wie vier.

### Was auf der Karte steht — verbindlich, nicht als Vorschlag

1. **Die Produktbilder nebeneinander, mit einem `+` dazwischen.**
2. **Vier Preise, in zwei Zeilen:**

       ohne Abo:   ~~7,10 €~~     6,00 €
       mit Abo:    ~~6,75 €~~     5,70 €

   Der jeweils höhere Betrag ist durchgestrichen, der geltende steht
   daneben. Abonnenten bekommen 5 % Dauerrabatt, auch auf ein
   Kombiangebot.
3. **Die Ersparnis**, ausgeschrieben.
4. **Kleiner darunter: die Laufzeit** („Gültig bis 10.10.2026").
5. **Eine Fläche für ein Werbelogo**, wie sie jeder Coupon hat. Wenn ein
   Unternehmen sie gebucht hat, steht dort sein Logo — daneben, sichtbar
   und nicht wegzudenken, das Wort **„Anzeige"**. Ist nichts gebucht,
   entfällt die Fläche ganz; kein freigehaltener Kasten.

### Die Fälle, an denen eine Vorlage scheitert

- **Zwei ist der Regelfall, drei muss gehen.** Bei 400 px umbrechen,
  nicht stauchen.
- **Mengen:** „2 × Popcorn" muss lesbar sein.
- **Keine Produktfotos.** Es gibt noch keine. Getönte Kachel mit „BILD",
  wie überall im Katalog. Die Vorlage muss mit und ohne Bild gut aussehen.
- **Kein Dauerrabatt sichtbar?** Ohne Abo-Zeile darf die Karte nicht
  halbleer wirken.
- **Kein Preisvorteil.** Liegt der Kombipreis nicht unter der Summe der
  Einzelpreise, **verschwindet der durchgestrichene Preis**. Ein
  durchgestrichener Preis behauptet eine Ersparnis; gibt es sie nicht,
  ist die Behauptung falsch (§ 5 UWG). Entwirf diesen Zustand mit.
- **Screenreader:** Eine Durchstreichung ist für ihn nur ein zweiter
  Preis. Der durchgestrichene Betrag braucht eine eigene Beschriftung.

### Und ein zweiter Entwurf: die Detailansicht

Tippen auf die Karte. Dort steht die vollständige Rechnung: je Produkt
Einzelpreis, Anteil in Prozent, Bruttoanteil, Steuersatz, Netto und
Umsatzsteuer, dazu die Summen.

    Cola     19 %   3,10 €   43,66 %   2,62 €   2,20 €   0,42 €
    Popcorn   7 %   4,00 €   56,34 %   3,38 €   3,16 €   0,22 €
                    7,10 €  100,00 %   6,00 €   5,36 €   0,64 €

Für eine Verkaufsfläche ungewohnt, aber Absicht: Ein Kombipreis über
zwei Steuersätze wird beim Kauf auf die Positionen verteilt, und der
Spendenanteil von 5 % hängt am Nettowert **je Produkt**. Wer wissen will,
wie viel bei seinem Kauf in der Region bleibt, findet es nur hier. Die
Karte selbst bleibt eine Karte; die Tabelle liegt eine Ebene tiefer.

**Kein Kennzeichnungschip für automatische Inhalte.** Kombiangebote
werden von Hand angelegt. Auch das Werbelogo bekommt keinen: welches
erscheint, hängt allein vom Kalendertag ab und nicht vom Konto.

---

# Lieferung 2

Erst beauftragen, wenn Lieferung 1 abgenommen ist.

**Bildschirm 5 — Automaten.** Der Einstieg der App, immer. Vor dem Start
gibt es keine Automaten: kein leerer Listenzustand, sondern eine Seite,
die sagt, was geplant ist und wann. Im Betrieb Liste und Karte,
Verfügbarkeit, Entfernung.

**Bildschirm 6 — Abo.** Reihenfolge: Verhalten → Vorteil → Rechnung →
Preis → Entscheidung. Der Rechner steht **vor** den Preisen und sieht so
aus:

    Deine Käufe in den letzten 3 Monaten:   44,40 €
    Das wären mit Abo gewesen:              42,18 €
    Dein Vorteil:                            2,22 €
    Abo im selben Zeitraum:                  2,97 €

    → Für dich lohnt sich das Abo aktuell noch nicht.
      Ab etwa 8 Käufen im Monat kippt die Rechnung.

Entwirf **beide** Ergebnisse — „lohnt sich" und „lohnt sich noch nicht".
Das zweite ist der wichtigere Entwurf. Es darf nicht wie eine Absage
aussehen und nicht wie ein verstecktes Verkaufsargument. Vor dem Start
wird das Abo gar nicht angeboten; auch dieser Zustand gehört dazu.

**Bildschirm 7 — Kundenkarte.** Eine Karte mit QR-Code, Name und
Kundennummer. Der Scanvorgang am Automaten existiert nicht. Der Text
lautet: „Diese Karte weist dich als Kunde aus. Sobald der erste Automat
steht, ordnet sie deine Käufe und Rabatte automatisch zu." Nicht
anzeigen: Punktestand, Meilensteine, Werbung. Der Kunde steht vor einem
Gerät und will scannen.

**Bildschirm 8 — Profil.** Konto, Verträge, Rechtliches. Der
Kündigungsweg muss ohne Suchen zu finden sein — er ist Pflicht nach
§ 312k BGB und wird nicht versteckt und nicht optisch abgewertet.

---

**Melde zu jeder Lieferung zurück:**

1. Welche Tokens jeder Bildschirm benutzt.
2. Welches Element du je Bildschirm als Signature gesetzt hast.
3. Wo du eine Aussage gebraucht hättest, die im Projektwissen nicht
   steht — und was du stattdessen getan hast. Nicht erfinden, fragen.
