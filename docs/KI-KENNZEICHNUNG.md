# KI-Kennzeichnung — Register gegen Oberfläche geprüft

Stand: 02.09.2026. Geprüft wurde, ob jeder Eintrag in `public.ki_register`
in den beiden Kundenoberflächen so gekennzeichnet ist, wie das Register es
behauptet. Grundlage ist die Dauerregel in `CLAUDE.md`: algorithmisch oder
KI-erzeugte Inhalte im Kundenbereich tragen einen sichtbaren Chip **und**
werden auf der KI-Info-Seite textlich benannt.

## Sachverhalt

`public.ki_register` führt acht Funktionen. Genau eine davon ist ein
KI-System im Sinne von Art. 3 EU AI Act; die übrigen sieben sind
regelbasierte SQL-Berechnungen.

| key | ist_ki_system | kennzeichnung_noetig | ampel |
|---|---|---|---|
| `produktbild_bearbeitung` | **ja** | **ja** | gelb |
| `challenge_rewards` | nein | ja | gruen |
| `customer_chatbot` | nein | nein | gruen |
| `generate_daily_offers` | nein | nein | gruen |
| `generate_personal_offer` | nein | nein | gruen |
| `generate_weekly_offers` | nein | nein | gruen |
| `grant_birthday_offer` | nein | nein | gelb |
| `loyalty_login_points` | nein | nein | gelb |

`ki_funktion_freigegeben(p_key)` gibt nur bei `aktiv and ampel = 'gruen'`
ein `true` zurück. Drei Ampeln stehen auf Gelb.

## Befund 1 — Statusbereich war nicht gekennzeichnet (behoben)

`rewards_screen.dart` zeigte Statusstufe, lebenslangen Dauerrabatt,
laufende Challenges und Abzeichen. Alle vier Werte rechnet
`my_gamification_status` serverseitig aus der Kaufhistorie. Kein einziger
Chip war gesetzt, obwohl `challenge_rewards` im Register
`kennzeichnung_noetig = true` **und** `kennzeichnung_umgesetzt = true`
führt. Die Behauptung des Registers traf nicht zu.

Behoben: Chip im Kopf der Statuskarte und an den drei Abschnittstiteln
„Dein Rabatt wächst mit", „Aktuelle Herausforderungen", „Deine Abzeichen".
Alle vier öffnen den `AiInfoScreen`.

Nicht betroffen: `offers_tab.dart` war bereits vollständig gekennzeichnet
— Sonderangebote, Bonus-Angebote, Dein Angebot, Wochenangebote und die
Tages-Deal-Karte tragen den Chip.

Kein Chip nötig für `loyalty_login_points`: die Funktion vergibt Punkte im
Backend, hat aber in der App keine eigene Fläche. Ein Chip ohne Fläche wäre
keine Kennzeichnung. Textlich wird sie trotzdem genannt.

Kein Chip für `customer_chatbot`: regelbasiert, kein KI-System nach
Art. 3 EU AI Act. Bleibt „Automatischer Chat-Assistent".

## Befund 2 — KI-Info-Seite war unvollständig (behoben)

Der `AiInfoScreen` nannte nur den Empfehlungsgenerator, den Kombi-
Algorithmus und den Chat-Assistenten. Nicht genannt waren: Statusstufe,
Dauerrabatt, Challenges, Abzeichen, Login-Punkte, Geburtstagsgutschein
und die KI-Bearbeitung von Produktbildern.

Behoben: zwei neue Abschnitte. „Welche Bereiche das im Einzelnen sind"
listet die sieben regelbasierten Funktionen auf. „Produktbilder" benennt
die Bildbearbeitung ausdrücklich als die einzige Stelle mit einem
KI-System und grenzt sie von den regelbasierten Funktionen ab.

## Befund 3 — das Register behauptet zwei Dinge, die nicht stimmen (offen)

Die Begründung zu `produktbild_bearbeitung` sagt:

> „Zugesagt ist die Kennzeichnung bereits in den Nutzungsbedingungen
> (Abschnitt 8) und auf der KI-Info-Seite."

Nachgeprüft am 02.09.2026:

* **KI-Info-Seite:** traf nicht zu. Mit Befund 2 trifft es jetzt zu.
* **Nutzungsbedingungen Abschnitt 8:** trifft nicht zu. Abschnitt 8 heißt
  „PRODUKTINFORMATIONEN UND PREISE" und behandelt Verfügbarkeit, den am
  Automaten ausgewiesenen Preis und Übertragungsfehler. Zur Bildbearbeitung
  steht dort nichts. Eine Volltextsuche über alle sieben Rechtstexte in
  `public.legal_text` findet weder „Produktbild" noch „Bildbearbeitung".

**Handlungsbedarf — Entscheidung des Betreibers.** Zwei Wege, die sich
ausschließen:

1. Abschnitt 8 der Nutzungsbedingungen um einen Absatz zur KI-Bearbeitung
   von Produktaufnahmen ergänzen. Dann wird die Aussage des Registers wahr.
2. Die Begründung im Register korrigieren, weil die Zusage in den
   Nutzungsbedingungen nie erteilt wurde.

Beides sind Eingriffe in verbindliche Texte; die Entscheidung liegt nicht
bei der Entwicklung. Verantwortlich: Betreiber. Status: **🔴 offen**.

## Der sichtbare Hinweis am Bild ist noch nicht fällig

Gezählt in der Produktionsdatenbank am 02.09.2026:

```
produkte                        63
davon mit image_url              0
Einträge in produktbilder        0
davon kennzeichnungspflichtig    0
```

Die Regel des Betreibers steht in der Register-Begründung:
`kennzeichnung_noetig` wird je Bild gerechnet als „KI verwendet UND Produkt
oder Umgebung verändert". Freistellen, Zuschneiden und Helligkeit lösen sie
nicht aus, weil das Bild den Gegenstand weiterhin so zeigt, wie er ist.

Solange kein Bild existiert, wäre ein pauschaler Hinweis „KI-bearbeitet" an
der Bildfläche eine unzutreffende Angabe. Er ist erst zu führen, wenn das
erste Bild mit `kennzeichnung_noetig = true` veröffentlicht wird, und dann
am einzelnen Bild — nicht an der Fläche und nicht an der Register-Ampel.
Die Ampel bleibt bis dahin zu Recht gelb.

## Was hier ausdrücklich nicht entschieden wurde

Ob die Bildbearbeitung unter Art. 50 Abs. 2 oder Abs. 4 EU AI Act fällt,
ist auslegungsbedürftig und wurde hier **nicht** entschieden. Die
Kennzeichnungspflicht folgt in diesem Dokument nicht aus einer
Rechtsauslegung, sondern aus der Festlegung des Betreibers im Register
(`kennzeichnung_noetig = true`) und aus der Dauerregel in `CLAUDE.md`. Die
fachliche Prüfung der Norm steht aus.

## Nachweis nachgeholt

Beim ersten Anlauf am 03.09.2026 waren diese Änderungen **nicht kompiliert**:
Ich hatte die Flutter-Toolchain in dieser Umgebung nicht gefunden und den
Diff nur manuell gegen `_DealAiBadge` in `offers_tab.dart` geprüft. Der
Status stand deshalb auf 🔴.

Beim späteren Neubau der Web-Fassung stellte sich heraus, dass Flutter unter
`/opt/flutter` liegt und nur nicht im Suchpfad stand. Nachgeholt am selben
Tag, Flutter 3.47.2 stable:

* `flutter analyze` — **No issues found**
* `flutter test` — **110 Tests grün**
* `flutter build web --release` — durchgelaufen; die vier für diese Änderung
  kennzeichnenden Zeichenketten stehen im ausgelieferten Bündel
  („Welche Bereiche das im Einzelnen sind", „Produktbilder",
  „Aktuelle Herausforderungen", „Automatischer Chat-Assistent")

Status: **🟢**. Was weiterhin **nicht** geprüft ist: wie der Statusbildschirm
tatsächlich aussieht. Ein bestandener Analyselauf sagt, dass der Code
übersetzt; er sagt nicht, dass der Chip an der richtigen Stelle sitzt und
lesbar ist. Das bleibt ein Blick mit dem Auge.

---

# Nachtrag 03.09.2026 — Amtliche EU-Symbole und zwei neue Einträge

## Das Register hat jetzt zehn Einträge

Dazugekommen sind `marketingbild_ki` (vollständig erzeugte Motive, siehe
`supabase/migrations/20260903144845…`) und `kundenkarte_werbeflaeche`
(Werbelogos auf der Kundenkarte). Zwei davon stehen dauerhaft auf Gelb,
und zwar aus verschiedenen Gründen — der Unterschied ist wichtiger als die
Farbe.

`marketingbild_ki` **kann nicht grün werden.** Der Versuch scheiterte am
CHECK `ki_risiko_nicht_gruen`, der Einträgen mit Deepfake- oder
Manipulationsrisiko die Ampel Grün verweigert. Der Constraint hat recht:
ein Verfahren, das jederzeit das Bild eines Menschen erzeugen kann, den es
nicht gibt, trägt ein Risiko, das kein erledigter Einzelfall beendet. Gelb
heißt hier „umgesetzt und unter Aufsicht", nicht „offener Rest".

`kundenkarte_werbeflaeche` ist gelb, **weil die Oberfläche noch fehlt.**
Das Backend steht und ist geprüft; sobald beide Hinweise sichtbar
ausgeliefert sind, geht der Eintrag auf Grün.

## Zwei Kennzeichen, die Verschiedenes sagen

Bis jetzt gab es einen Chip für alles. Das ging, solange die einzige
KI-Funktion die Produktbildbearbeitung war. Mit einem vollständig erzeugten
Motiv auf der Startseite geht es nicht mehr, weil zwei verschiedene
Aussagen zu treffen sind:

| | Aussage | Wo | Grundlage |
|---|---|---|---|
| Gold-schwarzer Chip | **Die Auswahl** ist automatisch entstanden | am Kopf einer Section | Hausregel `CLAUDE.md` |
| Amtliches EU-Symbol | **Der Inhalt selbst** wurde von KI erzeugt oder verändert | am einzelnen Bild | Art. 50 KI-VO |

Keiner ersetzt den anderen, und sie stehen an verschiedenen Orten, weil sie
sich auf Verschiedenes beziehen: der Chip auf einen Abschnitt, das Symbol
auf genau ein Bild.

**Ein EU-Symbol gehört nicht an eine regelbasierte Fläche.** Gutscheine,
Angebote, Bonusstufen, Abzeichen, Login-Punkte: dort behauptete das Symbol
KI, wo keine ist. Das ist keine übervorsichtige Kennzeichnung, sondern eine
falsche Aussage über das System — und sie entwertet das Symbol dort, wo es
gebraucht wird.

## Warum der deutsche Hinweistext am Hero-Bild weicht

Der Betreiber hat entschieden, den Satz „Gestaltungsbeispiel, mit KI
erzeugt…" durch das amtliche Symbol zu ersetzen, verlinkt auf die
KI-Info-Seite. Drei Punkte aus dem Kommissionsdokument sprechen dagegen und
sind hier festgehalten, damit die Entscheidung nachvollziehbar bleibt und
nicht später als Versehen gelesen wird:

1. Die Symbole sind **freiwillig**; die Pflicht aus Art. 50 KI-VO besteht
   unabhängig davon. Wörtlich: „Die Verwendung dieser Icons stellt für sich
   genommen keine Rechtskonformität dar."
2. Der Nutzertest der Kommission ergab, dass die Wirkung sich „über alle
   Maßnahmen hinweg verbessert, wenn das Basissymbol von einer
   Textbeschriftung begleitet wurde".
3. Die Motivbeschriftung ist **englisch**, die Oberfläche deutsch.

Drei Maßnahmen halten den Tausch trotzdem tragfähig:

* Verwendet wird nicht der nackte Kreis, sondern die **beschriftete Pille**
  („AI GENERATED" / „AI MODIFIED"). Sie trägt ihre Textbeschriftung im
  Motiv — das ist die Form, die im Nutzertest gut abgeschnitten hat.
* Der deutsche Wortlaut lebt im **Alternativtext** weiter und wird
  vorgelesen. Für Screenreader-Nutzer ändert sich dadurch nichts zum
  Schlechteren; ohne ihn wäre die Offenlegung für sie ganz verschwunden.
* Das Symbol ist ein **Link auf die zweite Ebene**, und diese Ebene
  beschreibt ab jetzt je Fläche, *inwiefern* KI angewandt wurde — nicht nur
  *dass*. Das ist mehr Information als der ersetzte Satz enthielt.

Die Symbole liegen mit Herkunft und Lizenz unter
`docs/assets/eu-ki-icons/`. Die offizielle weiße Variante fehlt (Egress
blockt `ec.europa.eu`); bis dahin bekommt das schwarze Motiv auf dunklem
Grund eine helle Unterlage, statt umgefärbt zu werden — eine Umfärbung wäre
eine Veränderung am amtlichen Symbol, eine Unterlage ist keine.

## Umsetzungsstand

| Ort | Symbol | Stand |
|---|---|---|
| Flutter: `EuKiKennzeichen` + Regel + `ProductImage` | beide Pillen, Kreis kompakt | gebaut, 17 Tests grün |
| Flutter: Produktbilder | „AI MODIFIED" | greift automatisch, sobald ein Bild mit veränderter Ware oder Umgebung vorliegt — heute gibt es keins |
| Lovable: Hero-Bild | „AI GENERATED" | beauftragt, noch nicht geprüft |
| Lovable: KI-Info-Seite | Legende + Beschreibung je Fläche | beauftragt, noch nicht geprüft |
| Lovable: Kundenkarte | kein EU-Symbol, dafür „Anzeige" + Chip | beauftragt, noch nicht geprüft |
