# Bördesnack24 Kunden-App — Zielkonzept 2027

Stand 10.09.2026. Grundlage: die Konzeptprüfung vom selben Tag
(`KUNDEN-APP-KONZEPTPRUEFUNG.md`), der Code in `apps/kunden-app/` und
die Produktionsdatenbank.

Kein Code geändert. Dieses Dokument ist die Vorgabe für UX/UI, Inhalte,
Landingpage und Umsetzung.

---

## 1 · Die Produktlogik in einem Satz

> **Die Bördesnack24-App ist für Menschen im Sülzetal, die abends oder
> unterwegs etwas brauchen, wenn nichts mehr offen hat, und hilft ihnen,
> den Weg nicht umsonst zu machen und den Kauf nachvollziehbar zu haben,
> während von jedem Produkt 5 % vom Nettopreis in der Region bleiben.**

Vier Bestandteile, wie verlangt:

| | |
|---|---|
| **Nutzer** | Menschen im Sülzetal, außerhalb der Ladenöffnungszeiten |
| **Problem** | Der Weg zum Automaten lohnt sich nur, wenn drin ist, was man braucht — und ein Automat gibt keinen Beleg |
| **Lösung** | Bestand vorher sehen, Beleg hinterher haben |
| **Unterscheidung** | 5 % vom Nettopreis bleiben in der Region, und der Kunde bestimmt mit, wo |

---

## 2 · Die einzigartige Rolle

### Warum ist Bördesnack24 nicht einfach ein Verkaufsautomat?

Weil ein Automat drei Dinge nicht kann, die hier gebaut sind:

1. **Er sagt nicht, was drin ist, bevor man davorsteht.** Auf dem Land
   ist das der Unterschied zwischen fünf Minuten und einer vergeblichen
   Fahrt.
2. **Er gibt keinen Beleg.** Wer Spesen abrechnet, kann am Automaten
   nichts kaufen.
3. **Er sagt nicht, wohin das Geld geht.** Hier geht ein fester Anteil
   in die Region, und der Kunde entscheidet mit, wohin.

Alles drei ist im Code vorhanden: `machine_stock`, `my_receipts`,
`donation_causes` mit Abstimmung.

### Warum ist die App nicht einfach eine Rabatt-App?

Weil der Rabatt der **schwächste** ihrer Bestandteile ist. Eine
Rabatt-App lebt davon, dass der Rabatt groß ist. Hier sind es 5 %, und
sie kosten 0,99 € im Monat — das rechnet sich erst ab etwa acht Käufen
monatlich (Konzeptprüfung, Aufgabe 4).

Die App trägt über den **Bestand vorher** und den **Beleg hinterher**.
Der Rabatt ist ein Zusatz für Vielkäufer, kein Grund zur Installation.

**Konsequenz für das gesamte Konzept:** Die App wird nicht als
Sparprodukt aufgebaut. Sie wird als Werkzeug aufgebaut, das nebenbei
sparen lässt.

---

## 3 · Zwei Produktzustände

Der Zustand hängt an einer einzigen Bedingung: **Steht mindestens ein
echter Automat mit echtem Bestand?**

Technisch: mindestens ein Datensatz in `machines` ohne Seed-Kennzeichen.
Die heutigen vier Zeilen („Automat 1/2/3", „Heißgetränkeautomat") sind
Seed-Daten und dürfen den Zustand **nicht** auslösen — das ist die
Regel, die heute fehlt und die gebaut werden muss.

| | **PRE-LAUNCH** | **LIVE** |
|---|---|---|
| Automatenliste | Der geplante Standort mit Datum, klar als Planung | Echte Automaten, Entfernung, Bestand |
| Bestand | wird nicht gezeigt | Echtzeitbestand je Produkt |
| Angebote | keine | Wochenangebote, persönliche Angebote |
| Kundenkarte | ausgeblendet | mittiger Knopf, QR |
| Abo | **wird nicht angeboten** | angeboten, sobald es sich rechnet |
| Meilensteine, Status | ausgeblendet | sichtbar |
| Region/Spende | Rechenweg, Idee, Abstimmung | zusätzlich eigener Beitrag |
| Belege | erklärt, was kommt | echte Belege |
| Empfehlung | ausgeblendet | nach dem ersten Vorteil |

**Die härteste Regel:** Im Pre-Launch wird **kein Abo verkauft**. Man
kann nicht auf Käufe sparen, die man nicht tätigen kann. Ein Abo, das
vor dem ersten Automaten abgeschlossen wird, ist eine Zahlung ohne
Gegenleistung — und beim ersten Blick auf die Abrechnung eine Kündigung.

---

## 4 · Die Journey, kritisch geprüft

| Schritt | Gedeckt? | Befund |
|---|---|---|
| Ich habe Hunger | — | Beginnt außerhalb der App |
| Wo ist der nächste Automat? | **ja** | `finder_tab`, `machinesProvider` |
| Ist mein Produkt verfügbar? | **ja** | `machine_stock`, 94 Positionen |
| Ich kaufe | **LÜCKE** | siehe unten |
| Ich bekomme meinen Beleg | **ja** | `my_receipts`, `receipts_screen` |
| Wenn ich öfter kaufe, spare ich | **ja**, mit Vorbehalt | trägt erst ab ~8 Käufen/Monat |
| Mein Kauf trägt zur Region bei | **ja** | `purchase_donation_for` |
| Ich kann mitbestimmen | **LÜCKE** | `donation_causes` ist leer |
| Ich kann weiterempfehlen | **ja** im Backend | keine Oberfläche |

### Die entscheidende Lücke: „Ich kaufe"

**FAKT.** `customer_qr_screen.dart:11` sagt im Kommentar:
„zukünftige Nayax-Integration". Der QR-Code enthält
`BS24:<Kundennummer>:<Benutzer-ID>`. Auf dem Bildschirm steht:

> „Halte den QR-Code an den Scanner des Automaten. Rabatte und Rechnung
> werden automatisch verknüpft."

**Diesen Ablauf gibt es nicht.** Kein Automat, kein Scanner, keine
Anbindung. Der Satz ist eine Aussage über einen Betriebszustand, den es
nicht gibt (§ 5 UWG) — auf dem Bildschirm hinter dem mittigen Knopf,
also der prominentesten Handlung der App.

**Zwei offene Fragen, die nicht in der App entschieden werden:**

1. **Kann der geplante Automat überhaupt QR-Codes scannen?** Davon
   hängt ab, ob die Kundenkarte in dieser Form funktioniert oder ob der
   Rabatt anders zugeordnet werden muss.
2. **Wenn ja: Wie wird geprüft, dass der Scannende der Kontoinhaber
   ist?** Der heutige QR ist ein reiner Bezeichner. Wer ihn
   abfotografiert, könnte fremde Rabatte einlösen und fremde Käufe auf
   ein fremdes Konto buchen. Ein Bezeichner darf kein Ausweis sein.

**P0.** Bis zur Klärung darf der Bildschirm den Ablauf nicht im Präsens
versprechen.

---

## 5 · Informationsarchitektur

### Die fünf Bereiche

| Position | Bereich | Nutzeraufgabe | Warum hier |
|---|---|---|---|
| 1 | **Automaten** | „Wo bekomme ich jetzt was, und lohnt der Weg?" | Die einzige Aufgabe, die ohne Vorgeschichte funktioniert. Einstieg. |
| 2 | **Vorteile** | „Was habe ich davon, dass ich dabei bin?" | Fasst Angebote, persönliche Vorteile, Status und Abo zusammen |
| — | **Kundenkarte** (Knopf) | „Ich stehe davor und will kaufen" | Handlung, kein Ort. Deshalb Knopf, kein Reiter |
| 3 | **Für die Region** | „Was passiert mit meinem Geld, und wo geht es hin?" | Das Unterscheidungsmerkmal |
| 4 | **Profil** | „Meine Daten, meine Belege, meine Verträge" | Verwaltung |

### Zwei Umbenennungen, beide begründet

**„Angebote" → „Vorteile".** Der Bildschirm enthält vier verschiedene
Dinge, von denen nur eines ein Angebot ist. „Vorteile" ist die ehrliche
Klammer und beantwortet die Nutzerfrage.

**„Meine Spenden" → „Für die Region".** Das ist keine
Geschmacksfrage, sondern eine Richtigstellung: **Der Kunde spendet
nicht.** Er kauft ein Produkt; Bördesnack24 gibt 5 % vom Nettopreis
weiter. „Meine Spenden" legt eine eigene Zuwendung nahe — mit der
Erwartung einer Spendenbescheinigung, die es nicht geben kann und darf
(§ 10b EStG betrifft den Spender, und das ist die GbR).

### Kein Home-Screen

Bleibt so. Ein Home-Screen löst „Überblick über viele gleichrangige
Bereiche". Bei vier Bereichen plus einer Handlung kostet er einen
Schritt vor jeder Aufgabe und liefert eine Zusammenfassung dessen, was
daneben schon als Reiter steht.

### Einstieg: immer „Automaten"

Ich revidiere hier meine eigene frühere Formulierung. In der
Konzeptprüfung hatte ich „Automaten als Einstieg, **solange** es keine
Kaufhistorie gibt" empfohlen, mit „Vorteile" später.

**Das war falsch gedacht.** Ein Einstieg, der sich abhängig vom
Kontostand ändert, verwirrt: Der Nutzer öffnet dieselbe App und findet
etwas anderes vor, ohne zu wissen warum. Und die Aufgabe der App ändert
sich nicht mit der Kaufhistorie — sie bringt Menschen zum Automaten.
„Vorteile" ist ein Nachschlagebildschirm, den man aufsucht, wenn man
etwas wissen will. Kein Einstieg.

**Automaten ist der Einstieg, immer.** Technisch: Startwert von
`_index` in `customer_screen.dart`.

---

## 6 · Screen-Übersicht

| Screen | Nutzerziel | Kernbotschaft | Primäre CTA | Sekundär | Wichtigste Info | Leerzustand | Pre-Launch | Live |
|---|---|---|---|---|---|---|---|---|
| Automaten | Weg lohnt sich? | „Fahr nicht umsonst." | Automat öffnen | Route starten | Entfernung + Bestand | „Noch kein Automat in Betrieb." | Geplanter Standort, Datum | Liste nach Entfernung |
| Automat-Detail | Ist mein Produkt da? | „Das ist gerade drin." | Route starten | Favorit | Bestand je Produkt | „Bestand noch nicht verfügbar." | ausgeblendet | Echtzeitbestand |
| Kundenkarte | Kaufen | „Am Automaten vorzeigen." | — (QR ist der Inhalt) | Ablauf erklären | QR + Kd.-Nr. | — | **ausgeblendet** | QR |
| Vorteile | Was habe ich davon? | „Kaufst du öfter, sparst du dauerhaft." | je nach Zustand | Abo ansehen | Aktueller Vorteil | „Nach dem ersten Kauf siehst du hier deine Vorteile." | ausgeblendet | vier Blöcke |
| Abo | Lohnt sich das? | „Rechne selbst nach." | Abo abschließen **oder** „Lohnt sich für dich noch nicht" | Vergleich | **Die eigene Rechnung** | Rechnung mit 0 € | **nicht angeboten** | Rechner |
| Für die Region | Wo geht mein Geld hin? | „5 % vom Nettopreis des jeweiligen Produkts." | Abstimmen | Rechenweg | Rechenweg, später eigener Beitrag | „Die Organisationen stehen noch nicht fest." | Rechenweg + Idee | + eigener Beitrag |
| Belege | Habe ich den Beleg? | „Deine Belege. Immer dabei." | Beleg öffnen | Suchen, exportieren | Kauf, Betrag, Datum, Automat | „Hier erscheinen deine Einkäufe und Belege." | Erklärung | Liste |
| Meilensteine | Was habe ich erreicht? | „Noch X Punkte bis zum nächsten Gutschein." | — | Erklärung | Abstand zur nächsten Schwelle | ausgeblendet | ausgeblendet | Balken |
| Empfehlung | Was bekomme ich fürs Weitersagen? | „Dein Code. Deine Entscheidung, wem." | Code teilen | Bedingungen | Code + Belohnung + Bedingung | — | ausgeblendet | nach erstem Vorteil |
| Profil | Verwalten | — | — | — | Konto, Verträge, Recht | — | reduziert | vollständig |

---

## 7 · Screen-Blueprints

### 7.1 · Automaten (Einstieg)

**Zweck.** Bringt den Nutzer zum richtigen Automaten oder hält ihn von
einer vergeblichen Fahrt ab.

**Nutzerfrage.** „Lohnt sich der Weg?"

**Primäre Botschaft.** Der nächste Automat, seine Entfernung, und ob
drin ist, was ich brauche.

**Hierarchie.**

1. Nächster Automat: Name, Ort, Entfernung
2. Ein Satz zum Bestand: „Gut gefüllt" / „Wenig drin" / „Bestand seit
   … nicht aktualisiert"
3. Weitere Automaten nach Entfernung
4. *nichts weiter*

**CTA.** Automat öffnen. Sekundär: Route starten.

**Psychologischer Mechanismus.** Der Bildschirm reduziert eine
Unsicherheit („ist was drin?"), statt einen Anreiz zu setzen. Er nimmt
Risiko weg, statt Belohnung zu versprechen — das trägt auch beim
zwanzigsten Mal.

**Pre-Launch.**

> **Noch steht kein Automat.**
> Der erste ist für 2027 in Osterweddingen geplant.
> Sobald er steht, siehst du hier, was drin ist, bevor du losgehst.

Kein Kartenausschnitt mit Platzhalterpunkten. Kein „demnächst
verfügbar" mit Countdown.

**Live.** Liste nach Entfernung. Bestand als Ampel, Detailbestand im
Automaten-Detail.

**Empty State (Live, kein Automat in Reichweite).**
„In deiner Nähe steht noch keiner. Der nächste ist X km entfernt."

**Bewusst nicht anzeigen.** Punkte, Status, Abo, Angebote. Der
Einstieg beantwortet eine Frage, nicht fünf.

---

### 7.2 · Kundenkarte

**Zweck.** Den Kauf am Automaten dem Konto zuordnen.

**Nutzerfrage.** „Was mache ich mit dem Code?"

**Primäre Botschaft.** Vorzeigen. Sonst nichts.

**Hierarchie.**

1. QR-Code, groß, hell, maximale Helligkeit erzwungen
2. Kundennummer als Rückfallebene zum Vorlesen
3. Ein Satz, was passiert
4. Bei Abo: „Dein Rabatt: 5 %" — sonst nichts

**Der Satz muss korrigiert werden.** Heute steht dort im Präsens, dass
Rabatte und Rechnung automatisch verknüpft werden. Solange kein Automat
scannt, ist das unzutreffend.

Bis zur Klärung des Ablaufs:

> Diese Karte weist dich als Kunde aus. Sobald der erste Automat steht,
> ordnet sie deine Käufe und Rabatte automatisch zu.

**Pre-Launch.** Der Knopf wird ausgeblendet. Eine Karte, mit der man
nirgends etwas kann, ist kein zentrales Element.

**Fallback.** Ohne Netz muss der QR aus dem lokalen Zwischenspeicher
kommen — am Automaten ist der Empfang oft schlecht. Für die
persönlichen Angebote ist das bereits gebaut
(`PersonalOfferCache`); für die Kundenkarte fehlt es.

**Bewusst nicht anzeigen.** Punktestand, Meilensteine, Werbung. Der
Nutzer steht vor einem Gerät und will scannen.

**Offene Frage, die dieses Konzept nicht beantworten kann.** Ob der
Automat scannen kann, und wie verhindert wird, dass ein abfotografierter
Code fremde Käufe zuordnet. **P0 vor dem ersten Automaten.**

---

### 7.3 · Vorteile

Ersetzt den heutigen Angebote-Bildschirm (2.306 Zeilen, vier
Datenquellen, zeigt bei null Käufen nur Nullen).

**Vier Blöcke, feste Reihenfolge:**

**A · Jetzt günstiger** — Wochenangebote und persönliches Angebot.
Was heute konkret weniger kostet. Ohne Angebote: Block entfällt
vollständig, keine leere Karte.

**B · Dein Vorteil** — der aktuelle Rabattsatz in einem Satz:
„Du zahlst dauerhaft 5 % weniger als am Automaten." Ohne Abo: „Mit Abo
zahlst du 5 % weniger." Kein Balken, keine Stufen.

**C · Was du erreicht hast** — Status und Meilensteine, **zusammen an
einem Ort**, mit dem Abstand zur nächsten Schwelle im Klartext:
„Noch 520 Punkte bis zum nächsten Gutschein (10 %)." Vor dem ersten
Kauf: entfällt.

**D · Abo** — nur wenn es sich rechnet. Siehe 7.4.

**Psychologischer Mechanismus.** Der Bildschirm beantwortet „was habe
ich davon" von konkret nach abstrakt: heute sparen, dauerhaft sparen,
angesammelt haben, künftig sparen. Heute steht diese Reihenfolge auf
dem Kopf.

**Bewusst nicht anzeigen.** Challenges, Badges, Punktzahlen ohne
Bezugsgröße.

---

### 7.4 · Abo

**Zweck.** Dem Nutzer eine Rechnung zeigen, nicht ein Angebot.

**Nutzerfrage.** „Lohnt sich das für mich?"

**Reihenfolge.** Verhalten → Vorteil → Rechnung → Preis → Entscheidung.

**Der Rechner, mit echten Daten:**

    Deine Käufe in den letzten 3 Monaten:   44,40 €
    Das wären mit Abo gewesen:              42,18 €
    Dein Vorteil:                            2,22 €
    Abo im selben Zeitraum:                  2,97 €

    → Für dich lohnt sich das Abo aktuell noch nicht.
      Ab etwa 8 Käufen im Monat kippt die Rechnung.

**Wenn es sich nicht lohnt, sagt die App das** — und bietet das Abo
nicht an. Das ist die wichtigste Einzelentscheidung dieses Konzepts.

Begründung: Ein Abo, das sich für den Kunden nicht rechnet, ist kein
Umsatz, sondern eine aufgeschobene Kündigung plus ein Vertrauensschaden.
Bei 0,99 € im Monat ist der Ertrag pro Fehlverkauf so gering, dass er
den Schaden nie deckt.

**Break-even, aus dem Code gerechnet:**

| | nur 5 % | mit Deals und Treue (9,35 %) |
|---|---|---|
| Monats-Abo | ab 19,80 €/Monat | ab 10,59 €/Monat |
| Jahres-Abo | ab 199,80 €/Jahr | ab 106,84 €/Jahr |

Die zweite Spalte beruht auf `Pricing.normalSavingsRate` — einer
Modellannahme des Codes, nicht auf Messung. In der App wird **nur mit
dem gerechnet, was der Nutzer tatsächlich gekauft hat.**

**Pre-Launch.** Kein Abo. Kein „schon jetzt sichern".

**Empty State (Live, keine Käufe).** „Sobald du das erste Mal gekauft
hast, rechnen wir dir hier aus, ob sich ein Abo für dich lohnt."

**Bewusst nicht anzeigen.** Ersparnis-Hochrechnungen auf Basis fremder
oder erfundener Warenkörbe. Vergleichspreise, die niemand zahlt.

---

### 7.5 · Für die Region

**Zweck.** Das Unterscheidungsmerkmal glaubwürdig machen — ohne Zahlen,
die es nicht gibt.

**Nutzerfrage.** „Wo geht mein Geld hin, und stimmt das überhaupt?"

**Die drei Zustände:**

**Vor dem ersten Verkauf.** Der Rechenweg, an einem echten Produkt aus
dem geplanten Sortiment:

    Riegel               2,50 € brutto
    − 7 % Umsatzsteuer → 2,34 € netto
    × 5 %              → 0,12 € für die Region

Dazu: was mit dem Anteil geschieht, und die Abstimmung, sobald die
Liste steht. **Keine Summe, kein Balken, kein Zähler.**

**Nach dem ersten Kauf.** Derselbe Rechenweg, jetzt mit dem eigenen
Kauf, neben dem Beleg. Aus `purchase_donation_for` — die Zahl, die auch
gebucht wird.

**Nach einem Jahr.** Eigener Beitrag, Gesamttopf, unterstützte
Organisationen — und der Punkt, auf den es ankommt:

**Die Empfangsbestätigung der Organisation.** Alles, was die App zeigt,
ist eine Zahl, die Bördesnack24 selbst errechnet hat. Glaubwürdig wird
sie erst durch einen Dritten. Eine datierte Bestätigung des Vereins über
den erhaltenen Betrag, eingescannt und in der App hinterlegt, ist der
stärkste verfügbare Beweis. Das ist ein organisatorischer Vorgang, kein
Softwarethema — und er gehört in den Prozess, bevor der erste Betrag
fließt.

**Empty State.** „Welche Organisationen unterstützt werden, steht noch
nicht fest. Sobald die Liste steht, stimmst du hier mit ab."

**Bewusst nicht anzeigen.** Fortschrittsbalken auf Spendenziele.
Hochrechnungen. Bilder von Projekten, mit denen es keine Vereinbarung
gibt.

---

### 7.6 · Belege

**HYPOTHESE.** Der Beleg ist der stärkste Installationsgrund.
*Falsifikation:* Nach dem Start greift kaum jemand auf Belege zu, und in
Gesprächen wird der Beleg nicht als Grund genannt.

Die UX wird trotzdem so gebaut, dass der Nutzen ohne Erklärung
verständlich ist.

**Kernbotschaft.** „Deine Belege. Immer dabei."

**Hierarchie.** Datum · Betrag · Automat · Beleg öffnen. Nichts weiter.

**Warum das trägt.** Ein Automat gibt keinen Beleg. Wer Spesen
abrechnet — Handwerker, Außendienst, Pendler mit Arbeitgeberzuschuss —
kann am Automaten faktisch nicht kaufen. Für diese Gruppe ist die App
keine Bequemlichkeit, sondern die Voraussetzung.

**Pre-Launch.** „Hier erscheinen deine Einkäufe und Belege — mit Datum,
Betrag und Automat, damit du sie wiederfindest."

---

### 7.7 · Empfehlung

Die Mechanik existiert vollständig (`referral_config`, sechs RPCs).
Zu bauen ist nur die Oberfläche.

**Zeitpunkt: nach dem ersten eingelösten Vorteil.**

Geprüfte Alternativen:

| Zeitpunkt | Bewertung |
|---|---|
| Registrierung | Der Nutzer hat nichts erlebt. Er würde etwas empfehlen, das er nicht kennt. |
| Erster Kauf | Er weiß, dass es funktioniert, aber noch nicht, dass es sich lohnt. |
| **Erster eingelöster Vorteil** | **Empfohlen.** Er hat einen Nutzen erlebt, den er beschreiben kann. |
| Erster Meilenstein | Zu spät. Dauert bei realistischer Kauffrequenz Monate. |

**Was gezeigt wird, vollständig und ohne Kleingedrucktes:**

    Dein Code: XXXXXXXX

    Wer damit ein Abo abschließt, bekommt einen Gratismonat.
    Du bekommst ebenfalls einen — nach 14 Tagen, wenn das Abo
    bestehen bleibt. Höchstens 20 Empfehlungen im Jahr.

**Ein Problem, das benannt gehört.** Ein Bonusmonat ist **0,99 € wert**.
Dafür soll jemand einen Menschen aus seinem Umfeld zu einem
kostenpflichtigen Abo bringen. Das steht nicht im Verhältnis.

Dazu kommt: Der Geworbene muss ein **Abo** abschließen — und das lohnt
sich für ihn erst ab acht Käufen im Monat. Der Werbende soll also
jemanden zu etwas bringen, das sich für den anderen meistens nicht
rechnet. Das ist keine Empfehlung, das ist eine Zumutung.

**Empfehlung:** Den Auslöser in `referral_config` vom Abo-Abschluss auf
den **ersten Kauf** des Geworbenen umstellen. Das ist ein Wert in einer
Tabelle, kein Umbau. Was der Werbende dann bekommt, ist zu entscheiden
— ein Bonusmonat für einen gewonnenen Kunden ist stimmiger als für ein
gewonnenes Abo.

**Was die App nicht tut.** Kein Adressbuch, keine Nachricht im Namen
des Nutzers, keine E-Mail an Dritte. Der Nutzer teilt selbst, mit den
Mitteln seines Telefons. Das ist bereits so gebaut und muss so bleiben
(§ 7 UWG).

---

## 8 · Belohnungssystem

### Die Hierarchie

| Ebene | Mechanik | Botschaft | Sichtbar |
|---|---|---|---|
| **1** | Abo-Dauerrabatt | „Du zahlst dauerhaft 5 % weniger." | immer (Live) |
| **2** | Status-Stufen | „Je mehr du insgesamt kaufst, desto größer dein Rabatt." | ab erstem Kauf |
| **3** | Meilensteine | „Noch X Punkte bis zum nächsten Gutschein." | ab erstem Kauf |

### Challenges und Badges: abschalten

**Begründung, nicht Geschmack.**

**„Morgenmuffel-Kur"** (drei Käufe vormittags in 30 Tagen, +200 Punkte)
belohnt eine **Uhrzeit**. Sie hat keinen Bezug zu einem Kundennutzen und
verlangt, den Einkauf nach dem Programm zu richten. Genau das soll die
App laut Vorgabe nicht tun.

**„Tour de Automat"** (drei verschiedene Automaten in 30 Tagen) belohnt
**Umwege**. Bei vier geplanten Automaten in einem Landkreis heißt das:
fahre weiter als nötig.

**„Wochen-Snacker"** (drei Käufe in sieben Tagen) belohnt **Frequenz um
ihrer selbst willen**. Bei Lebensmitteln ist das eine Aufforderung zum
Mehrkonsum ohne Gegenwert.

**Neun Badges** ohne Gegenwert. Ein Abzeichen, das nichts einbringt,
konkurriert mit drei Systemen, die etwas einbringen.

**Umsetzung.** `challenges.active = false`, Badges in der Oberfläche
ausblenden. Konfiguration, kein Umbau. Die Daten bleiben, falls die
Entscheidung revidiert wird.

### Das Problem der zwei Balken

Status läuft in **Euro** (150/500/1.000), Meilensteine in **Punkten**
(500/1.200/2.000/3.000). Wer „500" sieht, kann nicht wissen, welches
gemeint ist — beide Zahlen sind Schwellen in je einem System.

**Regel:** Nie zwei Fortschrittsbalken auf einem Bildschirm. Status wird
als **Satz** ausgegeben („Du zahlst 7,5 % weniger — ab 1.000 € sind es
10 %"), Meilensteine als **einziger** Balken mit Klartext-Abstand.

### Meilensteine gegen Abo

Die Meilensteine geben bis **25 %** Coupon, das Abo **5 %** dauerhaft.
Das Bonussystem ist attraktiver als das Bezahlprodukt.

Das ist kein Fehler, solange es klar bleibt: Der Coupon ist einmalig,
der Rabatt dauerhaft. **Beides gehört nebeneinander gezeigt**, nicht auf
getrennten Bildschirmen, sonst wirkt das Abo teuer und der Coupon
großzügig.

---

## 9 · Automat und App als ein System

Die Journey beginnt am Gerät. Ein Bördesnack24-Automat sieht aus wie ein
Automat — was die App kann, erfährt dort niemand.

| Übergang | Nutzerfrage | Botschaft | CTA | Ziel |
|---|---|---|---|---|
| Automat → Aufmerksamkeit | „Was ist das?" | „Was hier gekauft wird, bleibt zu 5 % in der Region." | — | Zweiter Blick |
| Aufmerksamkeit → App | „Warum die App?" | „Sieh vorher, was drin ist. Beleg inklusive." | QR am Gerät | Installation |
| App → Kauf | „Wie kaufe ich?" | „Karte vorzeigen." | Kundenkarte | Erster Kauf |
| Kauf → Beleg | „Habe ich was Schriftliches?" | „Dein Beleg ist da." | Beleg ansehen | Wiederkehr |
| Beleg → Vorteil | „Was bringt mir das?" | „Bei diesem Kauf: 0,12 € für die Region." | Region ansehen | Bindung |
| Vorteil → Region | „Wohin genau?" | „Du bestimmst mit." | Abstimmen | Beteiligung |
| Region → Empfehlung | „Kenne ich wen?" | „Dein Code, deine Entscheidung." | Teilen | Wachstum |

**Die Fläche am Automaten ist Voraussetzung, nicht Zubehör.** Drei
Sätze und ein QR-Code. Ohne sie beginnt die Journey nicht.

---

## 10 · Landingpage-Konsistenz

Die Landingpage erzählt heute die Unternehmensgeschichte. Sie muss
zusätzlich die Kundengeschichte erzählen — dieselbe wie die App, in
derselben Reihenfolge:

1. Was ist Bördesnack24? — Versorgung, wenn nichts offen hat
2. Wo hilft es mir? — der konkrete Moment
3. Was bekomme ich? — das geplante Sortiment
4. Was bringt die App? — Bestand vorher, Beleg hinterher
5. Was passiert mit meinem Einkauf? — 5 % vom Nettopreis
6. Wie funktioniert die Unterstützung? — der Rechenweg
7. Warum registrieren? — mitbestimmen, kostenlos
8. Was bringt später das Abo? — mit dem Break-even, ehrlich

**Punkt 4 und 5 sind die Klammer.** Wer auf der Landingpage „Beleg" und
„5 % vom Nettopreis" liest und in der App dasselbe wiederfindet, erlebt
ein Versprechen, das gehalten wird. Wer auf der Seite von Rabatten liest
und in der App eine Rechnung sieht, die sich nicht lohnt, nicht.

---

## 11 · Sprache

**Funktion → Ergebnis.** Immer zuerst das Ergebnis, dann die Erklärung.

| Nicht | Sondern |
|---|---|
| Echtzeitbestand | **Fahr nicht umsonst.** Sieh vorher, was drin ist. |
| Kaufhistorie | **Deine Belege. Immer dabei.** Mit Datum, Betrag und Automat. |
| 5 % Dauerrabatt | **Kaufst du öfter, sparst du dauerhaft.** 5 % auf jeden Kauf. |
| Spendenfunktion | **Dein Einkauf bleibt zum Teil hier.** 5 % vom Nettopreis des jeweiligen Produkts. |
| Loyalty-Meilensteine | **Noch 520 Punkte bis zu deinem nächsten Gutschein.** |
| Referral-Programm | **Dein Code. Deine Entscheidung, wem du ihn gibst.** |

**Verbindlich unverändert:** „5 % vom Nettopreis des jeweiligen
Produkts."

**Was nicht vorkommt:** Startup-Sprache, gespielte Begeisterung,
Nachhaltigkeitspathos, moralischer Druck. Bördesnack24 sagt nicht „tu
Gutes", sondern: „Du bekommst etwas für dich. Und ein Teil bleibt hier."

---

## 12 · Empty States

**Regel:** Ein Leerzustand erklärt, was hier später steht und wovon es
abhängt. Er erzeugt keinen Kaufanreiz.

| Situation | Text |
|---|---|
| Keine Automaten | „Noch steht kein Automat. Der erste ist für 2027 in Osterweddingen geplant." |
| Kein Bestand | „Der Bestand wird angezeigt, sobald der Automat in Betrieb ist." |
| Keine Käufe | „Hier erscheinen deine Einkäufe und Belege." |
| Keine Angebote | Block entfällt vollständig — keine leere Karte |
| Kein persönliches Angebot | „Dein persönliches Angebot richtet sich nach dem, was du am häufigsten kaufst." |
| Keine Organisationen | „Welche Organisationen unterstützt werden, steht noch nicht fest. Sobald die Liste steht, stimmst du hier mit ab." |
| Keine Punkte / kein Status | Ausgeblendet, nicht auf null gesetzt |
| Keine Empfehlungen | Ausgeblendet bis zum ersten Vorteil |
| Keine Belege | Wie „keine Käufe" |

**Kein Balken auf null.** Ein Fortschrittsbalken bei 0 von 3.000 zeigt,
wie weit man **nicht** ist. Das ist der Gegenteil-Effekt des
Goal-Gradient: Er demotiviert am Anfang, wo Motivation gebraucht wird.

---

## 13 · Storytelling-Architektur

| Ebene | Aussage | Getragen von |
|---|---|---|
| **1 · funktional** | „Ich bekomme schnell, was ich brauche." | Automatenfinder, Bestand |
| **2 · persönlich** | „Ich habe meine Käufe im Griff und spare, wenn ich oft kaufe." | Belege, Rabatt, Status |
| **3 · regional** | „Ein Teil bleibt hier, und ich bestimme mit." | 5 % vom Nettopreis, Abstimmung |
| **darüber** | **Genießen. Geben. Gutes tun.** | Marke |

**Konsistenzprüfung: die vier Ebenen tragen — mit einer Einschränkung.**

Ebene 2 hat zwei Bestandteile von sehr unterschiedlicher Stärke. „Käufe
im Griff" (Belege) trägt ab dem ersten Kauf für jeden. „Sparen" trägt
erst ab acht Käufen im Monat. Wenn Ebene 2 als „Sparen" erzählt wird,
bricht sie für die Mehrheit.

**Deshalb: Ebene 2 wird als Übersicht erzählt, nicht als Ersparnis.**
Das Sparen ist der Zusatz für Vielkäufer.

**Zum Claim.** „Geben" beschreibt, was Bördesnack24 tut (5 % weitergeben).
„Gutes tun" beschreibt, was daraus in der Region entsteht. Beides
betrifft **nicht** die persönlichen Vorteile — die stehen unter
„Genießen", weil sie zum Einkauf gehören. Die frühere Zuordnung
(„Gutes tun = Rabatt") wäre semantisch falsch und wird nicht verwendet.

---

## 14 · Priorisierung

### P0 — ohne das kein Launch

| # | Maßnahme | Begründung |
|---|---|---|
| P0-1 | Seed-Daten aus der Kundenoberfläche entfernen (4 Automaten, 589 Bestandsstücke, 90 Angebote) | Die App zeigt heute einen Betriebszustand, den es nicht gibt (§ 5 UWG) |
| P0-2 | Pre-Launch/Live-Schalter bauen, an echten Automaten hängend — nicht an Seed-Zeilen | Ohne ihn ist P0-1 nicht dauerhaft haltbar |
| P0-3 | Kundenkarten-Text korrigieren (kein Präsens über den Scanvorgang) | Aussage über eine Funktion, die es nicht gibt, auf dem prominentesten Bildschirm |
| P0-4 | Ablauf am Automaten klären: Kann er scannen, und wie wird der Kontoinhaber geprüft? | Der QR ist heute ein Bezeichner ohne Nachweis. Ein abfotografierter Code darf keine fremden Käufe zuordnen |
| P0-5 | Liste der Organisationen | Ein kostenloser Nutzen, ein Installationsgrund und das Unterscheidungsmerkmal hängen daran |
| P0-6 | Nährwerte und Allergene erfassen | 0 von 62 Produkten. Die App zeigt die Funktion; vor dem ersten Verkauf ist es Pflicht (LMIV) |
| P0-7 | Abo im Pre-Launch nicht anbieten | Zahlung ohne mögliche Gegenleistung |

### P1 — vor oder unmittelbar nach dem Start

| # | Maßnahme | Begründung |
|---|---|---|
| P1-1 | Einstieg auf „Automaten" | Der heutige Einstieg zeigt bei null Käufen nur Nullen |
| P1-2 | Abo-Rechner mit echten Kaufdaten, inklusive „lohnt sich nicht" | Verhindert Fehlverkäufe, die als Kündigung und Vertrauensschaden zurückkommen |
| P1-3 | Challenges und Badges abschalten | Belohnen Uhrzeiten, Umwege und Frequenz ohne Gegenwert |
| P1-4 | „Vorteile"-Bildschirm nach den vier Blöcken neu ordnen | Größter Bildschirm der App, vier konkurrierende Konzepte |
| P1-5 | Rechenweg der Spende auf der Produktseite | Der einzige Beweis, der ohne Verkäufe funktioniert |
| P1-6 | Fläche am Automaten mit drei Sätzen und QR | Ohne sie beginnt die Journey nicht |
| P1-7 | „Meine Spenden" → „Für die Region" | Der Kunde spendet nicht; die Benennung weckt eine falsche Erwartung |

### P2 — nach dem Start

Empfehlungs-Oberfläche · Kundenkarte offline verfügbar · Belege als
Installationsgrund kommunizieren · Landingpage um die Kundengeschichte
erweitern · Status als Satz statt als zweiter Balken

### P3 — später

Empfangsbestätigungen der Organisationen in der App · Auslöser des
Empfehlungsprogramms überprüfen, sobald Kaufdaten vorliegen

---

## 15 · Abschlussentscheidung

**A · Strukturell.** Einstieg auf „Automaten". Der Angebote-Bildschirm
wird zu „Vorteile" mit vier klar getrennten Blöcken. Status und
Meilensteine an einen Ort. Pre-Launch und Live als getrennte Zustände,
an echten Automaten hängend.

**B · Kommunikativ.** Von Funktion auf Ergebnis. Der Beleg wird zum
genannten Grund, nicht zum versteckten Nebeneffekt. „Meine Spenden"
wird zu „Für die Region".

**C · Psychologisch.** Kein Balken auf null. Nie zwei Fortschritte
gleichzeitig. Belohnungen, die an Uhrzeiten und Umwegen hängen,
entfallen. Der Abo-Rechner darf gegen das Abo entscheiden.

**D · Storytelling.** Drei Ebenen unter einer Klammer. Ebene 2 wird als
Übersicht erzählt, nicht als Ersparnis — sonst bricht sie für die
Mehrheit. „Gutes tun" bleibt der Region zugeordnet, nicht dem Rabatt.

**E · Abo.** Wird gerechnet, nicht verkauft. Im Pre-Launch gar nicht
angeboten. Sagt ehrlich, wenn es sich nicht lohnt.

**F · Belohnungssystem.** Acht Mechaniken auf drei. Challenges und
Badges abgeschaltet. Coupon und Dauerrabatt nebeneinander, nicht
getrennt.

**G · Empfehlung.** Oberfläche bauen, Mechanik nicht. Nach dem ersten
eingelösten Vorteil. Auslöser vom Abo-Abschluss auf den ersten Kauf
prüfen — ein Bonusmonat für 0,99 € steht sonst nicht im Verhältnis.

**H · Spendenkommunikation.** Der Rechenweg ersetzt die Summe, solange
es keine gibt. Später die Empfangsbestätigung der Organisation als
eigentlicher Beweis.

**I · Pre-Launch.** Eigener Produktzustand, kein Notbehelf. Kein Abo,
keine Kundenkarte, keine erfundenen Automaten. Was da ist: die Idee, der
Rechenweg, die Abstimmung, die Erklärung, was kommt.

**J · Was ausdrücklich NICHT geändert wird.**

- Die fünf Positionen der Navigation. Sie sind nach Aufgaben
  gegliedert, und das ist die richtige Achse.
- Die Kundenkarte als mittiger Knopf. Eine Handlung gehört nicht in
  eine Liste von Orten.
- Das Fehlen eines Home-Screens.
- Die Formulierung „5 % vom Nettopreis des jeweiligen Produkts".
- Die Berechnung im Backend. Sie ist geprüft und stimmt.
- Der Verzicht auf Tracking.
- Das Empfehlungsprogramm im Backend. Es wird sichtbar gemacht, nicht
  neu gebaut.

---

## 16 · Nicht beauftragt — strategisch erwägenswert

**1 · Beleg-Export für die Steuererklärung.**
*Problem:* Wer Spesen abrechnet, braucht die Belege gesammelt.
*Lösung:* Monatsübersicht als PDF.
*Relevanz:* Würde den stärksten Installationsgrund zum stärksten
Bleibegrund machen.
*Warum nicht Teil des Auftrags:* Neue Funktion; erst sinnvoll, wenn die
Hypothese zum Beleg bestätigt ist.

**2 · Benachrichtigung, wenn ein Automat wieder gefüllt ist.**
*Problem:* „Nicht da" ist heute eine Sackgasse.
*Lösung:* Merken lassen, einmal melden.
*Relevanz:* Verwandelt eine Enttäuschung in einen zweiten Besuch.
*Warum nicht Teil des Auftrags:* Braucht Push-Benachrichtigungen, die
die Nutzungsbedingungen derzeit ausdrücklich ausschließen.

**3 · Der Automat zeigt den Spendenanteil auf dem Display.**
*Problem:* Das Unterscheidungsmerkmal ist nur in der App sichtbar.
*Lösung:* Nach dem Kauf am Gerät: „0,12 € bleiben in der Region."
*Relevanz:* Erreicht alle Kunden, nicht nur die mit App.
*Warum nicht Teil des Auftrags:* Abhängig davon, was das Gerät kann.

**4 · Ein Automat pro Ort statt mehrerer je Standort.**
*Problem:* „Tour de Automat" zeigt, dass jemand Automatenvielfalt für
einen Wert hielt.
*Lösung:* Standortstrategie in der Fläche statt in der Tiefe.
*Relevanz:* Betrifft das Geschäftsmodell, nicht die App.
*Warum nicht Teil des Auftrags:* Keine Produktfrage.

**5 · Die Organisation stellt sich selbst vor.**
*Problem:* Die Abstimmung ist eine Liste von Namen.
*Lösung:* Jede Organisation liefert drei Sätze und ein Bild.
*Relevanz:* Macht aus einer Abstimmung eine Entscheidung.
*Warum nicht Teil des Auftrags:* Redaktioneller Vorgang, hängt an P0-5.

---

## 17 · Die Leitidee

    Ich habe Hunger.
    Bördesnack24 hilft mir, schnell etwas zu bekommen.

    Ich nutze die App.
    Sie zeigt mir vorher, ob der Weg sich lohnt,
    und gibt mir hinterher einen Beleg.

    Ich kaufe öfter.
    Dann lohnt sich irgendwann auch das Abo — und die App sagt mir,
    wann.

    Mein Kauf erzeugt einen Beitrag.
    5 % vom Nettopreis des jeweiligen Produkts.

    Ich kann mitbestimmen, wohin er geht.
    Dadurch entsteht regionale Wirkung.

    Ich bin überzeugt.
    Dann gebe ich meinen Code weiter.

    Genießen. Geben. Gutes tun.

Der Unterschied zur Vorlage steht in der dritten Strophe: Nicht „ich
kaufe öfter, **dann** profitiere ich", sondern „die App sagt mir, wann".
Damit ist die Leitidee auch für die Mehrheit wahr, für die sich das Abo
nie lohnen wird.
