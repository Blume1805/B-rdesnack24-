# Kunden-App — Bildschirmbuch

Stand 12.09.2026. Das Gegenstück zu
`docs/lovable/LANDINGPAGE-SZENENBUCH.md`, für die App.

**Zweck:** Kein Bildschirm wird beauftragt, dessen dreizehn Pflichtfelder
nicht gefüllt sind. Die Landingpage hat gezeigt, was sonst passiert: Zwei
Szenen sind aus Inhaltsdokumenten entstanden, ohne dass jemand entschieden
hat, wie sie aussehen — der Abo-Vergleich ist deshalb bis heute eine rohe
HTML-Tabelle.

---

## Die dreizehn Pflichtfelder

Das Storyboard des Skills `scrollcraft` schreibt für eine **Szene** zwölf
Felder vor. Ein App-Bildschirm braucht drei mehr und eines weniger: Er hat
Zustände, er hat eine Datenquelle, und an ihm hängen Rechtspflichten. Dafür
braucht er keine Scrollstrecke.

```yaml
screen:
  id:                 # kurz, sprechend
  audience:           # Privatkunde | Unternehmer | beide
  purpose:            # verstehen | fühlen | handeln
  message:            # ein Satz, ohne Marketingfloskel
  entry:              # woher kommt der Nutzer hierher
  exit:               # die eine Handlung, die weiterführt — oder "keine"
  information_goal:   # was man danach weiß
  zustaende:          # vor dem Start | im Betrieb | leer | Fehler | lädt
  datenquelle:        # RPC/Feld — oder "feste Beispielwerte" im Entwurf
  recht:              # welche Pflicht hängt hier — oder "keine"
  signature:          # das eine Element, das den Bildschirm trägt
  varianten:          # 400 px | Screenreader | reduzierte Bewegung |
                      # Dunkelmodus | ohne Netz
  tokens:             # welche Tokens, namentlich
```

**Prüfsatz, aus dem Skill übernommen:** Streiche gedanklich jede Bewegung
und jede Farbe. Ist der Bildschirm noch verständlich? Wenn nein, ist er
falsch gebaut — nicht die Gestaltung zu schwach.

---

## Stand je Bildschirm

| # | Bildschirm | Felder gefüllt | Wo |
|---|---|---|---|
| 0 | **Ladescreen** | **nie** — kein Auftrag, kein Entwurf | unten |
| S | **Struktur / Rahmen** | **nie** — nur in Code-Kommentaren begründet | unten |
| 1 | Registrierung | teilweise (Inhalt ja, Anker/Zustände nein) | unten |
| 2 | Vorteile | teilweise | `AUFTRAG-…-KUNDEN-APP-ENTWUERFE.md` |
| 3 | Für die Region | teilweise | dito |
| 4 | Kombiangebot-Coupon | **vollständig** — der einzige | dito |
| 5 | Automaten | nein | dito, Lieferung 2 |
| 6 | Abo | nein | dito, Lieferung 2 |
| 7 | Kundenkarte | nein | dito, Lieferung 2 |
| 8 | Profil | nein | dito, Lieferung 2 |

Bildschirm 4 ist vollständig, weil er der einzige war, bei dem von Anfang
an feststand, dass die Vorlage für **alle** Bundles gilt. Der Zwang zur
Vollständigkeit kam dort aus der Sache, nicht aus dem Verfahren.

---

## 0 — Der Ladescreen

### Ist-Stand: er ist nie entworfen worden

Geprüft am 12.09.2026 im Repository:

* **Android**, `android/app/src/main/res/drawable/launch_background.xml`:
  eine einzige Zeile, `<item android:drawable="@android:color/white" />`.
  Der Block für ein eigenes Bild steht noch **auskommentiert** darunter,
  wörtlich so, wie Flutter ihn beim Anlegen des Projekts hinterlässt.
* **Dunkelmodus**, `values-night/styles.xml`: ebenfalls unverändert.
* **iOS**, `Assets.xcassets/LaunchImage.imageset/`: drei Dateien mit je
  **68 Byte**. Das ist das leere Flutter-Platzhalterbild, kein Logo.

Heute sieht ein Nutzer also: **eine weiße Fläche ohne Inhalt**, danach
springt die App auf den dunklen Kopfbereich (`heroInk`, #0C0A07). Weiß auf
Fast-Schwarz, ohne Übergang, als erster Eindruck der Marke.

### Zwei Dinge, die nicht verwechselt werden dürfen

**Der Ladescreen des Betriebssystems** wird gezeichnet, **bevor** Flutter
läuft. Er kann nicht animieren, nichts nachladen und keinen Text zeigen,
der sich ändert. Ein Entwurf mit Fortschrittsbalken, laufendem Zähler oder
einer Animation des Schriftzugs ist technisch nicht umsetzbar. Das muss im
Auftrag stehen, sonst kommt genau das zurück.

**Der Ladezustand in der App** beginnt danach und kann alles. Heute ist er
ein `LinearProgressIndicator` in Gold, je Widget einzeln. Das ist der
Bildschirm, den man tatsächlich gestalten kann.

Beides zusammen muss wie **eine** Bewegung wirken: Die Fläche des
Betriebssystem-Ladescreens und die erste Flutter-Fläche sollten dieselbe
Farbe haben, sonst blitzt es.

```yaml
screen:
  id:                 ladescreen
  audience:           beide
  purpose:            fühlen
  message:            Genießen. Geben. Gutes tun.
  entry:              App-Symbol auf dem Startbildschirm
  exit:               keine — er verschwindet von selbst
  information_goal:   nichts. Wer hier etwas lernen soll, hat den
                      Bildschirm falsch verstanden.
  zustaende:          nur einer; er ist statisch
  datenquelle:        keine
  recht:              keine Pflicht — aber auch keine Aussage über einen
                      Betriebszustand. Kein "24/7", kein "immer da,
                      wenn der Hunger kommt". Es steht kein Automat.
  signature:          die Wortmarke auf heroInk, sonst nichts
  varianten:          hell | dunkel | Android 12+ | iOS | 400 px
  tokens:             heroInk (#0C0A07) als Grundfläche in ALLEN
                      Varianten, brand (#FDC102) nur im Zeichen
```

**Die eine Entscheidung, die hier zu treffen ist:** Grundfläche dunkel
(`heroInk`) statt weiß — weil der erste Bildschirm der App dunkel ist und
weil der Sprung sonst bleibt. Dann ist der Dunkelmodus auch keine zweite
Gestaltung mehr, sondern dieselbe.

**Technischer Vorbehalt, vor der Umsetzung zu prüfen:** Ab Android 12
zeichnet das Betriebssystem den Ladeschirm selbst — App-Symbol auf einer
Hintergrundfarbe, gesteuert über die Theme-Werte
`windowSplashScreenBackground` und `windowSplashScreenAnimatedIcon`. Der
alte Weg über `windowBackground` greift dort nicht mehr vollständig. Die
genauen Schlüssel sind gegen die aktuelle Android-Dokumentation zu prüfen;
aus dieser Umgebung ist kein Webzugriff möglich, deshalb steht es hier als
Vorbehalt und nicht als Anweisung.

---

## S — Die Struktur der App

### Ist-Stand: begründet, aber nirgends beauftragt

Die Struktur steht heute ausschließlich in Kommentaren in
`customer_screen.dart` — und zwar gut begründet:

* **Vier Reiter:** Automaten · Vorteile · Für die Region · Profil.
* **Einstieg ist immer die Automatenliste.** Begründung im Code: Sie
  beantwortet die einzige Frage, die ohne Vorgeschichte funktioniert —
  lohnt der Weg? Und: kein Einstieg, der sich mit der Kaufhistorie
  ändert, weil man sonst dieselbe App öffnet und etwas anderes vorfindet.
* **Die Kundenkarte ist ein schwebender Knopf in der Mitte** — aber nur
  im Betrieb. Vor dem Start wäre sie ein Knopf ins Leere an der
  auffälligsten Stelle der App, deshalb entfällt sie samt Lücke.
* **Der Chatbot** liegt als zweiter schwebender Knopf unten rechts.
* **Onboarding-Stories** beim ersten Öffnen.

Diese Begründungen sind besser als das meiste, was in den Aufträgen steht.
Sie sind nur nie als Entwurf geprüft worden.

```yaml
screen:
  id:                 rahmen
  audience:           beide
  purpose:            handeln
  message:            Vier Wege, einer davon ist immer der erste.
  entry:              jeder Start der App
  exit:               der gewählte Reiter
  information_goal:   wo bin ich, was gibt es sonst, wie komme ich zurück
  zustaende:          vor dem Start (ohne Kundenkarten-Knopf, drei Reiter
                      plus Profil) | im Betrieb (mit Knopf)
  datenquelle:        istVorStartProvider
  recht:              der Kündigungsweg muss ohne Suchen erreichbar sein
                      (§ 312k BGB) — er liegt unter Profil und darf dort
                      nicht optisch abgewertet werden
  signature:          der goldene Kundenkarten-Knopf in der Mulde
  varianten:          400 px | Screenreader (Reiter als Tabs
                      ausgezeichnet) | Dunkelmodus | ohne Netz
  tokens:             surfaceCard, borderSubtle, brand, ink, textMuted
```

### Zwei Befunde am Rahmen

**1. Zwei schwebende Knöpfe gleichzeitig.** Im Betrieb liegen der
Kundenkarten-Knopf (Mitte, gold, groß) und der Chatbot-Knopf (rechts,
12 px vom Rand, 88 px über der Leiste) auf derselben Fläche. Das ist die
auffälligste Stelle der App, und sie ist doppelt belegt. Zu entscheiden,
ob der Chatbot dort bleibt oder in den Kopfbereich wandert.

**2. Die Umbenennung ist halb geblieben.** Der Reiter heißt seit dem
10.09. **„Für die Region"**, mit ausdrücklicher Begründung: Der Kunde
spendet nicht, Bördesnack24 gibt einen Anteil seines eigenen Umsatzes ab —
„Meine Spenden" legt eine eigene Zuwendung nahe und weckt die Erwartung
einer Spendenbescheinigung, die es nicht geben kann. Die Überschrift
**innerhalb** des Bildschirms lautet aber weiterhin „Meine Spenden"
(`history_tab.dart:40`), und die Detailseite ebenso
(`donations_screen.dart:23`). Der Reiter sagt das eine, der Bildschirm
darunter das andere.

---

## 1 — Registrierung

Der Inhalt ist entschieden (Felder, Pflichtangaben, getrennte
Einwilligungen). Was fehlt, sind Anker, Zustände und Varianten.

```yaml
screen:
  id:                 registrierung
  audience:           beide — die Weiche ist das erste Bedienelement
  purpose:            handeln
  message:            Sechs Angaben, dann bist du dabei.
  entry:              Landingpage, Store, oder "Noch kein Konto?" aus
                      der Anmeldung
  exit:               genau einer: Konto anlegen
  information_goal:   was abgefragt wird, warum das Geburtsdatum dabei
                      ist, wem man wozu zustimmt
  zustaende:          leer | teilweise ausgefüllt | Feldfehler |
                      Serverfehler | sendet | erfolgreich
  datenquelle:        Entwurf mit festen Beispielwerten, keine Anbindung
  recht:              Art. 6 Abs. 1 lit. a DSGVO — zwei getrennte
                      Einwilligungen, keine Vorauswahl, keine
                      Sammel-Checkbox. Geburtsdatum ist Pflicht, weil
                      die Volljährigkeitsprüfung für das Abo
                      serverseitig daran hängt (§§ 104–110 BGB).
  signature:          der dunkle Kopfbereich mit Wortmarke und Slogan,
                      der beim Tippen wegscrollt
  varianten:          400 px | Screenreader (Fehler am Feld verknüpft,
                      nicht als Meldung unten) | Dunkelmodus |
                      Tastatur offen | ohne Netz
  tokens:             heroInk, brand, ink, textDefault, textMuted,
                      borderSubtle, statusCritical
```

**Was daran heute schon stimmt und nicht verloren gehen darf:**
Die Weiche Privat/Unternehmer blendet die sieben Unternehmerfelder
bedingt ein — ein Privatkunde sieht sie nicht. Fehler stehen am Feld.
Beides ist bewusst gebaut und geht bei einer Neugestaltung leicht wieder
verloren.

**Offen und im Auftrag zu entscheiden:** Der Zustand „sendet" und der
Zustand „Serverfehler" sind nie entworfen worden. Beim
Registrierungsformular ist das der Moment, in dem ein Kunde abspringt.

---

## Prüfliste vor jedem App-Auftrag

1. Welche Bildschirme berührt der Auftrag?
2. Sind für jeden die dreizehn Felder gefüllt? Wenn nein: erst
   entscheiden, dann beauftragen — mit Vorschlag an Philipp.
3. Sind **alle** Zustände genannt, auch „lädt" und „Fehler"?
4. Steht bei jedem Text, ob er vor dem Start oder im Betrieb gilt?
5. Stehen die Tokens **namentlich** drin, nicht als Farbbeschreibung?
6. Steht im Auftrag: „Kein Plan-Schritt, keine Freigabe abwarten"?
