# ADR 0007 — Standortvergütung und Spendenanteil werden getrennt

- **Status:** Akzeptiert
- **Datum:** 2026-09-22
- **Ersetzt teilweise:** die Kernthese aus
  `docs/strategy/2026-09-15-fundament-und-finanzlogik.md`, Abschnitte 1, 2 und 9

## Kontext

Bis zum 22.09.2026 war das Geschäftsmodell darauf aufgebaut, dass Bördesnack24
Standorte **nicht** mit Geld bezahlt, sondern mit einem zweckgebundenen Anteil
am Umsatz des jeweiligen Automaten, der an einen Empfänger am Ort fließt. Der
Anteil war damit ein **Ersatz** der Standortvergütung — in der Finanzrechnung
„Fall A".

Parallel dazu existiert im Produkt seit Migration `0020_donations_news.sql` ein
zweites, davon unabhängiges Modell: 5 % des Nettoerlöses fließen in einen
gemeinsamen Spendentopf, über dessen Empfänger die **Kundschaft** in der App
abstimmt, mit quartalsweiser Auszahlung und öffentlichem Nachweis.

Beide Modelle beanspruchen dieselben 5 %. Auf die Rückfrage, was gilt, hat der
Gesellschafter am 22.09.2026 entschieden.

## Entscheidung

> „Der Standortgeber soll keine 5 % bekommen aus den Spenden. Man einigt sich
> auf einen Mietvertrag, entweder Festmiete oder prozentuale
> Umsatzbeteiligung."

1. **Standortgeber erhalten eine marktübliche Vergütung** — Festmiete oder
   prozentuale Umsatzbeteiligung, je Standort verhandelt.
2. **Die 5 % des Nettoerlöses bleiben davon unberührt** und gehen als Spende an
   gemeinnützige Vereine und Organisationen der Region. Die Empfänger werden
   von der Kundschaft vorgeschlagen und gewählt, nicht vom Standortgeber
   gestellt.

## Konsequenzen

### Wirtschaftlich — die gravierendste Folge

Die Finanzrechnung vom 15.09.2026 kennt zwei Fälle: **Fall A** (der Anteil
ersetzt die Vergütung) und **Fall B** (der Anteil kommt zur Vergütung hinzu).
Mit dieser Entscheidung **gibt es Fall A nicht mehr.** Jeder Standort rechnet
ab sofort nach Fall B.

Was das kostet, steht bereits in Tabelle 7.4 des Strategiedokuments —
wirtschaftlicher Deckungsbeitrag je Automat und Jahr:

| Standortvergütung | 700 € Umsatz | 950 € | 1.200 € |
|---|---|---|---|
| 0 % | 949 € | 2.235 € | 3.520 € |
| 5 % | 574 € | 1.726 € | 2.878 € |
| 10 % | 199 € | 1.217 € | 2.235 € |
| 15 % | **−176 €** | 708 € | 1.592 € |
| 20 % | **−551 €** | 199 € | 949 € |

Die Aufnahmeschwelle aus Abschnitt 9 — Amortisation der 7.000 € in unter drei
Jahren — verlangt einen wirtschaftlichen Deckungsbeitrag von mindestens
**1.458 €** im Jahr (7.000 ÷ 3 = 2.333 €, abzüglich 875 € Abschreibung).
Daraus folgen harte Verhandlungsobergrenzen:

| Umsatz/Monat | höchste Umsatzbeteiligung | höchste Festmiete |
|---|---|---|
| 700 € | **nicht erreichbar** — auch ohne jede Vergütung nicht | — |
| 950 € | ≈ 7,6 % | ≈ 65 €/Monat |
| 1.200 € | ≈ 16,0 % | ≈ 172 €/Monat |

Alle Werte tragen die Annahmen der Tabelle: Umsatzsteuer 12 % im Mischsatz,
Wareneinsatz 40 %, Anschaffung 7.000 €, kalkulatorische Arbeitszeit 25 €/h,
Einzelanfahrt. Die dort als ZU VERIFIZIEREN markierten Positionen
(Zahlungsgebühren, Telemetrie, Abschreibungsdauer, Zins) sind nicht bestätigt.

**Praktische Folge für die Akquise:** Ein 700-€-Standort trägt sich unter dieser
Konstruktion nicht. Die Gespräche gehören auf Standorte ab etwa 950 € Umsatz,
und die Vergütung ist dort die eigentliche Verhandlungsgröße — nicht mehr eine
Geschichte, die Geld ersetzt.

### Für die Außendarstellung

- Der Satz „Andere Betreiber zahlen Ihnen Miete. Wir zahlen Ihrem Verein." ist
  nicht mehr wahr und wird von Landingpage und Automatenseite entfernt.
- Der Empfänger ist **nicht mehr standortgebunden.** Die Automatenseite darf
  nicht länger behaupten, dieses Gerät zahle an diesen Verein; sie weist den
  **Beitrag dieses Automaten zum gemeinsamen Topf** aus.
- Die Spende darf „Spende" heißen, die Standortvergütung nicht.

### Rechtlich

Siehe `docs/COMPLIANCE.md`, V-012. Kurz: Die Trennung entschärft die Frage
Spende oder Sponsoring, weil der Empfänger keine Gegenleistung erbringt und
nicht vom Flächengeber gestellt wird. Sie kehrt zurück, sobald ein Empfänger
einem Standort zugeordnet oder auf der Automatenseite beworben wird. Die
Werbeaussage über die 5 % braucht Empfänger, Bezugsgröße, Zeitraum und Höhe und
einen Nachweis, bevor eine Auszahlung behauptet wird (§ 5 UWG).

### Technisch

Das Datenmodell trägt die Entscheidung bereits: `donation_causes`,
`donation_votes` und die Auswertung je Kunde stammen aus Migration 0020 und
setzen keinen Standortbezug voraus. Es ist **nichts zu migrieren**. Zu ergänzen
ist die Erfassung der Standortvergütung je Automat — heute gibt es dafür kein
Feld, obwohl sie ab sofort die wichtigste Kostengröße je Gerät ist.

## Offener Einwand

Der Mechanismus war bisher das einzige Argument, mit dem Bördesnack24 sich von
jedem anderen Automatenbetreiber unterschied. Mit einer marktüblichen Miete
konkurriert der Betrieb auf derselben Ebene wie die Wettbewerber, also über den
Preis. Die Spende bleibt ein Sympathieargument gegenüber Kundschaft und
Öffentlichkeit, aber sie ersetzt keine Verhandlungsposition mehr. Ob die
gewonnene Klarheit diesen Verlust aufwiegt, entscheidet sich an den ersten drei
Standortgesprächen — dieselben drei, die in Abschnitt 10 des Strategiedokuments
ohnehin als fehlende Größe geführt werden.

## Nachtrag 26.09.2026 — Auszahlungsregel

Offen geblieben war, wann und an wen der Topf ausgezahlt wird; im System
standen drei widersprüchliche Regeln (COMPLIANCE V-012, Befund D-1). Der
Gesellschafter hat entschieden:

* **Rhythmus:** einmal jährlich, nach Abschluss des Kalenderjahres.
* **Empfänger:** die drei Zwecke mit den meisten Stimmen am 31. Dezember, zu
  gleichen Teilen; bei weniger als drei zur Wahl stehenden Zwecken unter
  diesen.

Die 500-€-Schwelle je Projekt, die die App bis dahin anzeigte, entfällt: Sie
hätte bei einer festen jährlichen Auszahlung bedeutet, dass Geld über den
Stichtag hinaus zurückgehalten wird, ohne dass das irgendwo zugesagt war.

## Nachtrag 26.09.2026 — Bild im Kopf der Landingpage

Das fotorealistische Bild eines Automaten mit Schriftzug im Kopf der
Landingpage bleibt, auf Entscheidung des Gesellschafters. Festgehalten, weil
dieselbe Seite weiter unten an der KI-Zeichnung sagt, Fotos von Automaten gebe
es noch nicht; der Hinweis zum Betriebsstand direkt unter dem Kopf („Noch ist
kein Automat in Betrieb") steht weiterhin und löst den Eindruck eines laufenden
Betriebs auf.
