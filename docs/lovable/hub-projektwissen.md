# Bördesnack24 — verbindliche Grundlagen

Bördesnack24 GbR baut 24/7-Snack- und Getränkeautomaten in der Magdeburger
Börde auf (Sülzetal OT Osterweddingen).

## 0. Was dieses Projekt ist — und was nicht

**Dieses Projekt ist eine Entwurfsvorlage, kein Produkt.**

Die echte Kunden-App ist in Flutter geschrieben und liegt im Repository
`Blume1805/B-rdesnack24-`. Sie geht in die Stores. Was hier entsteht,
sind Bildschirmentwürfe, die anschließend von Hand nach Flutter
übertragen werden.

Daraus folgt verbindlich:

* **Keine Datenbank, kein Supabase-Connector, keine Anmeldung, keine
  RPC-Aufrufe.** Alle Daten in den Entwürfen sind fest verdrahtete
  Beispielwerte in einer Datei je Bildschirm, klar als solche benannt.
* **Kein Routing-Gerüst, keine Zustandsverwaltung, keine Formularlogik.**
  Ein Bildschirm ist eine Seite, die man ansehen kann.
* **Jeder Abstand, jede Farbe und jeder Radius kommt aus den Tokens in
  Abschnitt 2 und 3.** Ein Entwurf mit erfundenen Werten ist nicht
  übertragbar und damit wertlos.
* Gib zu jedem Bildschirm an, welche Tokens er benutzt. Diese Liste ist
  Teil der Lieferung, nicht Beiwerk.

## 1. Der Stand: es gibt noch nichts

Stand 09/2026: **null Automaten in Betrieb, null Verkäufe, null
bestätigte Standorte**, keine App in einem Store. Der erste Automat ist
für 2027 geplant.

**Jede Aussage im Präsens über einen Betriebszustand ist ein Fehler**
(§ 5 UWG) — auch in einem Entwurf, weil der Text mit übertragen wird.
Falsch: „Scanne am Automaten." Richtig: „Sobald der erste Automat
steht, …"

Die App kennt deshalb zwei Zustände, und **beide sind zu entwerfen**:

* **Vor dem Start** — keine Automaten, keine Angebote, keine Käufe,
  kein Abo im Angebot. Das ist der Zustand, den jeder heutige Nutzer
  sieht. Er darf nicht wie ein Fehler aussehen und nicht wie eine
  leere Liste, sondern muss erklären, was kommt.
* **Im Betrieb** — der Zustand ab dem ersten Automaten.

## 2. Farbwelt: unveränderlich

Nie neue Töne erfinden, nie rohes Hex in Komponenten, immer Variablen.

```css
--brand:            #FDC102; /* Gold. Flächen, Ränder, Symbole, CTA */
--brand-light:      #FEE7A0;
--brand-text:       #856A00; /* Gold ALS SCHRIFT auf hellem Grund */
--ink:              #202321; /* Headlines, dunkle Flächen */
--hero-ink:         #0C0A07; /* dunkler Kopfbereich */
--text-default:     #4A4844;
--text-muted:       #6E6A66; /* 4,6:1 auf Weiß */
--surface-card:     #FFFFFF;
--surface-alt:      #F7F5F1;
--border-subtle:    #E3DFDA; /* nur Trennlinien */
--border-strong:    #8F887E; /* Kante von Bedienelementen, WCAG 1.4.11 */
--status-positive:  #5C9A3F;
--status-warning:   #E8A206;
--status-critical:  #B31C1C;
--status-info:      #0066CC;
/* Statusfarben ALS SCHRIFT auf hellem Chip: */
--status-positive-text: #467430;
--status-warning-text:  #8C6104;
--status-info-text:     #0062C4;
```

**`--brand-text` muss BEIDE hellen Flächen tragen**, Weiß und Creme
(`--surface-alt`, #F7F5F1) — auf Creme liegen die Karten. #856A00
schafft 5,17:1 auf Weiß und 4,75:1 auf Creme. Der früher hier genannte
Ton #8A6E00 trägt nur Weiß (4,87:1) und fällt auf Creme mit 4,47:1
durch; korrigiert am 12.09.2026.

**Der wichtigste Fallstrick:** Marken-Gold auf Weiß erreicht nur 1,6:1
und ist als Schriftfarbe unbrauchbar. Für Text `--brand-text`, für
Flächen und Symbole `--brand`. Dasselbe gilt für Grün, Gelb und Blau.

## 3. Maße, Radien, Typografie

Abstände (nur diese): 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80.
Radien (nur diese): 4 · 8 · 12 · 16 · 24 · Pille.

- Display (Headlines): **Bricolage Grotesque**, 700–800, `letter-spacing: -0.02em`
- Text (Body, UI): **Hanken Grotesk**, 400–700
- Zahlen in Spalten und Beträgen: `font-variant-numeric: tabular-nums`

## 4. Sprache

- Deutsch, Anrede **„Du" groß**, korrekte Groß- und Kleinschreibung
  überall, auch in Labels. Firmenkunden werden gesiezt.
- **Keine Gedankenstriche (—) und keine Mittelpunkte (·) im sichtbaren
  Text.** Keine Emoji in Headlines und CTAs.
- Fehlermeldungen sagen, was schiefging und was zu tun ist. Keine
  Entschuldigungen, keine Fehlercodes im Klartext.

## 5. Zahlen dürfen nicht erfunden werden

Jede angezeigte Zahl muss aus echten Daten kommen. Gibt es die Zahl
nicht, wird die Komponente nicht gezeigt. In Entwürfen sind
Beispielwerte erlaubt, aber sie müssen **plausibel und als Beispiel
erkennbar** sein — keine Spendensummen, keine Nutzerzahlen, keine
Bewertungen, keine „bereits gespendet"-Zähler.

Diese Zahlen sind verbindlich und dürfen nicht abgewandelt werden:

| | |
|---|---|
| Abo | 0,99 € im Monat oder 9,99 € im Jahr, brutto |
| Dauerrabatt mit Abo | 5 % |
| Statusstufen | Bronze ab 150 € (+1 %), Silber ab 500 € (+2,5 %), Gold ab 1000 € (+5 %) |
| Status **zusammen** mit Abo | höchstens 10 % |
| Deals und Angebote | zusätzlich −10 % |
| Treue-Meilensteine | 500/1200/2000/3000 Punkte → Coupon 5/10/15/25 % |
| Spendenanteil | 5 % vom **Nettopreis des jeweiligen Produkts** |

Es gibt **kein** Lifetime-Abo im Angebot und **keine** Stufe „Platin".
Der Rechenweg der Spende an einem Riegel: 2,50 € brutto − 7 % USt =
2,34 € netto, davon 5 % = 0,12 €.

Produktfotos existieren nicht: getönte Platzhalterkacheln mit der
Beschriftung „BILD", keine Stockfotos.

## 6. Keine Dark Patterns, verbindlich

Verboten: erfundene Knappheit, Fake-Countdowns, erfundene Bewertungen
oder Nutzerzahlen, versteckte Kosten, versteckte oder erschwerte
Kündigung, irreführende Buttons, manipulative Vorselektion, Schuld- oder
Schamkommunikation, „Nein danke" absichtlich unauffällig, Premium
optisch als kostenlos darstellen, aggressive Kaufsprache.

Erwünscht ist ethische Überzeugung: den tatsächlichen Nutzen besser
erklären. Nutzen vor Preis, Benefit vor Feature, schrittweise
Offenlegung.

**Besonderheit dieser App:** Die Abo-Seite trägt einen Rechner, der dem
Kunden aus seinen eigenen Käufen ausrechnet, ob sich das Abo lohnt — und
es ihm auch sagt, wenn nicht („Für dich lohnt sich das Abo aktuell noch
nicht."). Das ist Absicht und kein Fehler. Der Rechner steht **vor** den
Preisen, nicht dahinter.

## 7. Kennzeichnung automatischer Inhalte

Wo Inhalte für den einzelnen Kunden nach einer Regel erzeugt oder
ausgewählt werden — Coupons, Angebote, Empfehlungen, Deal-Paarungen, der
Abo-Rechner —, steht ein sichtbarer Chip am Abschnittskopf, also **vor**
der Aussage. Er führt auf eine Info-Seite.

Der Chip heißt „KI" nur, wo tatsächlich ein KI-System arbeitet. Für
regelbasierte Berechnungen heißt er **„Automatisch"**. Ein falsch
beschrifteter Chip ist selbst eine falsche Angabe.

## 8. Motion

- `prefers-reduced-motion: reduce` immer respektieren, dann Animation aus.
- Dauern: 150 ms schnell, 250 ms Standard, 350 ms langsam.
  Easing `cubic-bezier(0.33, 1, 0.68, 1)`.
- Gestaffeltes Einlaufen von Listen (70 ms Versatz), Druckskalierung auf
  0,96 bei Tap, Skelette statt Spinner, weiche Seitenwechsel.
- Bewegung darf lenken, nie Information verdecken, nie Daten aufhalten.
- Kein GSAP, keine Lottie-Dateien, kein Konfetti. Was hier animiert wird,
  muss in Flutter nachbaubar sein.

## 9. Anti-Slop

KI-Standardoptik, hier unerwünscht:

- Creme-Hintergrund mit Serif-Display und Terracotta-Akzent
- Fast-Schwarz mit einzelnem Neon-Akzent
- Lila-Blau-Verlauf im Hero
- Inter oder Space Grotesk als „sichere" Schrift
- Emoji als Abschnittsmarken, alles zentriert, überall derselbe Radius
- Nummerierte Schritte 01/02/03, obwohl der Inhalt keine Sequenz ist
- Drei gleich aussehende Karten ohne inhaltlichen Unterschied
- Kacheln ohne Hierarchie, alles gleich groß

**Genau ein Signature-Element je Bildschirm, der Rest bleibt ruhig.**

## 10. Zugänglichkeit

- Kontrast 4,5:1 für Text, 3:1 für die Begrenzung von Bedienelementen.
- Touch-Targets mindestens 44 × 44 px.
- Sichtbarer Tastaturfokus auf allem Bedienbaren.
- Breite Inhalte scrollen im eigenen Container; der Seitenkörper scrollt
  nie waagerecht.
- Entwürfe werden bei 400 px Breite geprüft, nicht nur am Desktop.

## 11. Vor der Übergabe prüfen

- [ ] Keine Datenbank, kein Login, keine RPC — nur Entwurf
- [ ] Farben nur über Variablen, kein rohes Hex in Komponenten
- [ ] Nur die Abstände und Radien aus Abschnitt 3
- [ ] Bricolage für Display, Hanken für Text
- [ ] Korrekte Groß- und Kleinschreibung, keine — und keine ·
- [ ] Keine Präsens-Aussage über einen Betriebszustand
- [ ] Vor-Start-Zustand und Betriebszustand beide entworfen
- [ ] Zahlen aus Abschnitt 5 unverändert
- [ ] Chip an automatisch erzeugten Inhalten, richtig beschriftet
- [ ] Genau ein Signature-Element je Bildschirm
- [ ] `prefers-reduced-motion` berücksichtigt
- [ ] Kontrast und Touch-Targets geprüft
- [ ] Token-Liste je Bildschirm mitgeliefert
