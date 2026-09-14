# Kritik am ChatGPT-Masterprompt zur Kunden-App

Stand 10.09.2026. Grundlage: der tatsächliche Code in
`apps/kunden-app/` und `packages/bs24_kern/` sowie die
Produktionsdatenbank `nnfsyuglkqycwenwxmuw`, beide am selben Tag
gelesen.

Der Prompt ist handwerklich ordentlich gebaut: klare Gliederung,
Abgrenzung gegen Feature Creep, ausdrückliches Verbot von Dark
Patterns, Trennung von Analyse und Umsetzung. Das ist mehr Disziplin,
als solche Prompts üblicherweise haben.

Er hat aber sechs Fehler, von denen zwei so grundlegend sind, dass die
Antwort darauf zwangsläufig erfunden wäre.

---

## Fehler 1 — Der Prompt analysiert einen Bildschirm, den es nicht gibt

Vier Abschnitte (§5 First Impression, §6 Home-Screen, §7 Home =
Dashboard oder Story, §41 Home-Screen Blueprint) und Teile von §23 und
§40 drehen sich um die „Home-Seite".

**Die App hat keine Home-Seite.**

Die untere Navigation steht in
`apps/kunden-app/lib/features/customer/presentation/customer_screen.dart`
und lautet:

    Angebote · Automaten · [Kundenkarte als Knopf] · Meine Spenden · Profil

§27 des Prompts behauptet dagegen „Home · Automaten · zentrale
Kundenkarte · Bonus · Profil". Zwei von vier Einträgen stimmen nicht:
Es gibt weder „Home" noch „Bonus".

Wer diesen Prompt beantwortet, ohne den Code zu lesen, schreibt vier
Kapitel über einen Bildschirm, der nicht existiert — und liefert einen
„Blueprint" für dessen Umbau. Das ist kein Detailfehler, das ist der
Kern von §§5–7 und §41.

---

## Fehler 2 — Der Prompt verlangt Kennzahlen, die es nicht geben kann

§8 Customer Journey, §9 Retention Loop, §12 Abo-Conversion, §32 Funnel
mit „Drop-off-Punkten", §33 „erwarteter Nutzen" — das alles setzt
Nutzung voraus.

Stand der Produktionsdatenbank am 10.09.2026:

| | |
|---|---|
| Käufe | **0** |
| Profile | **6** (Testkonten) |
| Abos | **7** (Testdaten) |
| Automaten in Betrieb | **0** (4 Seed-Zeilen) |
| Spendenzwecke | **0** |
| App im Store | **nein** |

Es gibt keinen Funnel, weil niemand hineingeht. Es gibt keine
Abbruchpunkte, weil niemand abbricht. Eine Antwort auf „identifiziere
die wahrscheinlich größten Drop-off-Punkte" ist eine Vermutung im
Gewand einer Analyse — und sie liest sich genauso überzeugend wie eine
echte Messung.

Das ist die gefährlichste Eigenschaft des Prompts: Er fragt so
selbstsicher, dass die Antwort selbstsicher ausfallen muss.

---

## Fehler 3 — Vier sachliche Fehler, die sich in die Antwort fortpflanzen

**§13 verlangt eine Preishierarchie für „Monthly / Yearly / Lifetime".**
Das Lifetime-Abo wird nicht angeboten. `Pricing.lifetimePubliclyOffered`
steht auf `false`, und die Entscheidung vom 10.09.2026 lautet: bleibt in
der Schublade, später für begrenzte Zeiträume. Wer die Preisdarstellung
für drei Modelle optimiert, arbeitet zu einem Drittel für nichts.

**§14 schreibt „5 % jedes Einkaufs".** Zugesagt sind **5 % vom
Nettopreis des jeweiligen Produkts**. Der Unterschied ist nicht
sprachlich: Die Datenbank rechnete bis zum 07.09.2026 auf den
Bruttobetrag des ganzen Kaufs mit pauschal 7 % Umsatzsteuer und lag
damit doppelt falsch. Das ist repariert. Ein Prompt, der die alte,
falsche Formulierung transportiert, holt den Fehler in die Texte zurück
— und das ist eine Aussage gegenüber Kunden (§ 5 UWG).

**§3 führt Heißgetränke unter GENIESSEN.** In der Kategorie stehen null
Produkte. Ein Automat dafür ist geplant, mehr nicht.

**§11 und §20 setzen Wochenziele, Bonusmonate und ein
Empfehlungsprogramm voraus.** Im Kundencode gibt es keines davon:
kein Treffer für `referral`, `Wochenziel`, `weekly_goal`, `Bonusmonat`.
„Empfehlungscode" und „Empfehlungsprämien" kommen ausschließlich im
Datenauskunfts-Bildschirm und in den Nutzungsbedingungen vor — dort als
**Verbot** der Mehrfachanlage von Konten, nicht als Funktion.

Meilensteine gibt es (acht Dateien). Die Prompt-Annahme ist also nicht
komplett falsch, aber sie mischt Vorhandenes mit Erfundenem — und
verlangt in §19, beides „in einem verständlichen mentalen Modell"
zusammenzuführen.

---

## Fehler 4 — §31 verlangt Tracking und behandelt Recht als Häkchen

Der Prompt listet dreizehn Analytics-Ereignisse („app opened",
„purchase recorded", „referral accepted" …) und schiebt nach:
„Analytics müssen datenschutzrechtlich geprüft werden."

Diese Reihenfolge ist verkehrt. In der App gibt es **kein** Tracking —
und das ist der Grund, warum sie heute ohne Einwilligungsdialog
auskommt. Die Nutzungsbedingungen sagen das ausdrücklich zu:

> Analyse- oder Werbecookies setzen wir nicht, und deshalb fragt die App
> auch nicht nach einer Einwilligung.

Wer Ereignis-Tracking einführt, das über das für den Dienst
Erforderliche hinausgeht, braucht eine Einwilligung nach § 25 Abs. 1
TDDDG, ändert die Rechtsgrundlage, muss die Datenschutzerklärung und das
Verzeichnis der Verarbeitungstätigkeiten nachziehen und die
Store-Datenschutzangaben anpassen. Das ist keine nachgelagerte Prüfung,
das ist die Entscheidung selbst.

Richtig wäre: erst die Frage „welche Entscheidung wollen wir mit welcher
Zahl treffen", dann die Rechtsfolgenprüfung, dann — vielleicht — ein
Ereignis.

---

## Fehler 5 — Die Psychologie-Liste erzeugt genau das, was §24 verbietet

§24 nennt elf Prinzipien, darunter **Loss Aversion**, **Variable
Reward** und **Goal Gradient**, und verbietet im selben Abschnitt Dark
Patterns.

Diese drei sind in Bonusprogrammen die üblichen Bauteile von Dark
Patterns: der ablaufende Vorteil, die Zufallsbelohnung, der Balken, der
kurz vor dem Ziel langsamer wird. Eine Checkliste abzufragen und
gleichzeitig ihre typische Anwendung zu untersagen, verlagert die
Entscheidung auf die Formulierungskunst des Antwortenden.

Besser ist ein Verbot mit Prüfregel statt einer Liste mit Vorbehalt:

> Jeder Vorschlag muss auch dann noch gut sein, wenn wir dem Nutzer die
> Mechanik vollständig erklären. Was nur wirkt, solange er sie nicht
> durchschaut, kommt nicht in die App.

Das ist überprüfbar. „Keine Dark Patterns" ist es nicht.

---

## Fehler 6 — Die Form des Ergebnisses macht es unbrauchbar

§39 verlangt zwanzig Kapitel (A–T), §§40–43 vier weitere Blueprints,
§45 zählt zehn Ergebnisse auf. Das ergibt ein Dokument, das niemand
liest und gegen das niemand etwas einwenden kann, weil jede Aussage in
einem eigenen Kapitel steht.

Dazu ist der Prompt in sich widersprüchlich: §34 verbietet Feature
Creep, während §§9–21 der Sache nach ein Impact-Zentrum, ein
Belohnungsmodell, einen Referral-Zeitpunkt und eine neue
Informationsarchitektur bestellen.

---

## Was stattdessen — der überarbeitete Auftrag

Kürzer, in drei Stufen, jede mit einer Abbruchbedingung. Der Text ab
hier ist zum Weitergeben gedacht.

---

### AUFTRAG: Bestandsaufnahme und Bewertung der Bördesnack24-Kunden-App

**Ausgangslage, die du nicht überschreiben darfst.** Die App ist nicht
im Store. Es gibt null Verkäufe, null Automaten in Betrieb, sechs
Testkonten. Jede Aussage über Conversion, Retention, Abbruchquoten oder
Nutzerverhalten wäre eine Erfindung. Solche Aussagen sind untersagt.
Erlaubt sind: Aussagen über den Code, über Verständlichkeit, über
Widersprüche, über rechtliche Wirkung — und **Annahmen, die
ausdrücklich als solche gekennzeichnet und mit einem Test versehen
sind**, der sie nach dem ersten Automaten widerlegen könnte.

**Belegpflicht.** Jede Aussage über eine Funktion nennt Datei und Zeile.
Jede Zahl nennt ihre Abfrage. Was du nicht belegen kannst, schreibst du
nicht — auch nicht als Vermutung, auch nicht als „vermutlich".

#### Stufe 1 — Was ist da? (keine Bewertung)

Liste die vorhandenen Bildschirme, die Navigation, die Datenquellen je
Bildschirm und die Stellen, an denen Demo- oder Seed-Daten in die
Kundenoberfläche gelangen. Ergebnis: eine Tabelle, höchstens zwei
Seiten.

**Abbruchbedingung:** Wenn du eine im Auftrag genannte Funktion im Code
nicht findest, melde das, statt sie zu behandeln.

#### Stufe 2 — Wo widerspricht sich die App? (Bewertung ohne Vorschläge)

Drei Fragen, mehr nicht:

1. **Wo sagt die App etwas, das nicht stimmt?** Zeigt sie Automaten,
   die es nicht gibt? Funktionen ohne Daten dahinter? Beträge, die
   anders berechnet werden als zugesagt?
2. **Wo muss der Nutzer etwas wissen, das ihm niemand gesagt hat?**
   Welche Bildschirme setzen Vorwissen voraus?
3. **Wo widersprechen sich zwei Stellen der App?** Unterschiedliche
   Zahlen, unterschiedliche Begriffe für dieselbe Sache,
   unterschiedliche Versprechen.

Sortiere die Funde nach Schaden, nicht nach Aufwand. Rechtlich falsche
Aussagen zuerst.

#### Stufe 3 — Die eine Frage, die zählt

> Ein Mensch steht vor einem Automaten in Osterweddingen, hat die App
> nicht. Warum sollte er sie in diesem Moment installieren, statt
> einfach mit Karte zu zahlen?

Beantworte sie in höchstens fünf Sätzen, ohne Marketingvokabular, und
belege jeden Satz mit einer Funktion, die es heute im Code gibt.

**Wenn du sie nicht beantworten kannst, ist das das Ergebnis der
Analyse.** Dann ist keine Informationsarchitektur zu entwerfen, sondern
diese Frage zu klären.

#### Regeln für alle drei Stufen

- **Keine neuen Funktionen vorschlagen.** Erst wenn Stufe 3 beantwortet
  ist, wird über Funktionen gesprochen.
- **Erklärbarkeitsregel statt Psychologie-Liste:** Jeder Vorschlag muss
  auch dann tragen, wenn die Mechanik dem Nutzer vollständig erklärt
  wird.
- **Rechtsprüfung vorher, nicht nachher.** Bei Tracking, Preisen,
  Vorteilen, Werbung, Empfehlungen und Aussagen über die Spende gilt:
  erst die Rechtsfolge klären, dann gestalten.
- **Umfang:** Stufe 1 höchstens zwei Seiten, Stufe 2 höchstens drei,
  Stufe 3 höchstens eine halbe. Was länger wird, ist nicht fertig
  gedacht.

---

## Drei Fragen an ChatGPT

Wenn diese Kritik zurückgespielt wird, sind das die Punkte, an denen
sich zeigt, ob die Gegenseite mitdenkt:

1. Der Prompt verlangt einen Home-Screen-Blueprint für eine App ohne
   Home-Screen. Wie soll ein Auftrag aussehen, der solche Annahmen
   strukturell verhindert — nicht durch guten Willen, sondern durch die
   Form der Frage?
2. Bei null Verkäufen: Was ist an einer Customer-Journey-Analyse noch
   sinnvoll, und was ist Theater? Woran würde man den Unterschied
   erkennen?
3. Der Prompt nennt elf psychologische Prinzipien und verbietet Dark
   Patterns. Wie trennt man beides so, dass die Trennung überprüfbar
   ist und nicht von der Formulierung abhängt?
