# Strategische Konzeptprüfung der Bördesnack24-Kunden-App

Stand 10.09.2026. Quellen: `apps/kunden-app/`, `packages/bs24_kern/`,
`supabase/migrations/` und die Produktionsdatenbank
`nnfsyuglkqycwenwxmuw`, alle am selben Tag gelesen.

Keine UI- oder Backend-Änderung vorgenommen. Reine Analyse.

---

## 0 · Ist-Zustand

| Bereich | Tatsächlicher Ist-Zustand | Quelle | Sicherheit |
|---|---|---|---|
| Navigation | Fünf Positionen: **Angebote · Automaten · Kundenkarte (mittiger Knopf) · Meine Spenden · Profil**. Kein Home-Reiter, kein Bonus-Reiter. Einstieg ist „Angebote". | `customer_screen.dart:79–121` | sicher |
| Startscreen | Existiert nicht als eigener Bildschirm. Beim Öffnen erscheint der Reiter „Angebote" mit Marken-Kopfbereich (220 px, Bördekreis-Motiv, persönliche Anrede). | `customer_screen.dart`, `kunden_shell.dart:57–110` | sicher |
| Kundenkarte | Eigener Bildschirm mit QR-Code, erreichbar über den mittigen Knopf. 98 Zeilen, keine weitere Funktion. | `customer_qr_screen.dart` | sicher |
| Angebote | Vier Datenquellen: Wochenangebote, persönliche Angebote, Loyalty-Status, aktivierte Angebote. 2.306 Zeilen — der mit Abstand größte Bildschirm. | `offers_tab.dart:28–42` | sicher |
| Automaten | Liste über `machinesProvider`, 371 Zeilen. | `finder_tab.dart:27` | sicher |
| Spenden | Eigener Bildschirm: eigene Spendensumme, Gesamttopf, Abstimmung über Zwecke. | `donations_screen.dart:18–20` | sicher |
| Abo | Zwei Bildschirme: Auswahl und Wertargumentation. Server-RPC `my_subscription`. | `subscription_screen.dart:107` | sicher |
| Belohnungen | **Acht** parallele Mechaniken — Aufstellung unten. | mehrere | sicher |
| Empfehlungsprogramm | **Im Backend vollständig gebaut und aktiv, in der App ohne Oberfläche.** | `referral_config`, sechs RPCs | sicher |
| Tracking | Kein Analyse- oder Werbe-Tracking im Kundencode. Keine Bibliothek, kein Ereignisaufruf. | Volltextsuche | sicher |

### Was der Kunde heute in der Produktion sehen würde

| | |
|---|---|
| Automaten in der Liste | **4** (Seed: „Automat 1/2/3", „Heißgetränkeautomat") |
| Bestandspositionen | **94**, zusammen **589 Stück** |
| Wochenangebote | **90** angelegt, davon **2** aktuell gültig |
| Nachrichten | 3 angelegt, **0 veröffentlicht** |
| Spendenzwecke zur Abstimmung | **0** |
| Käufe, Punkte, Meilensteine | **0** |
| Produkte mit Nährwerten/Allergenen | **0 von 62** |

**FAKT.** Der Einstiegsbildschirm der App zeigt heute Angebote für
Produkte, die nicht gekauft sind, an Automaten, die nicht existieren,
mit einem Bestand, den es nicht gibt.

---

## 0b · Drei Korrekturen an der Auftragsvorgabe

Der Auftragstext beschreibt drei Dinge anders, als sie sind. Zwei davon
gehen auf meine eigene frühere Zuarbeit zurück; ich korrigiere sie hier.

**Es gibt ein Wochenziel.** Die Vorgabe sagt „keine Wochenziele". In
`public.challenges` steht `weekly_3` — „Wochen-Snacker", 3 Käufe in
7 Tagen, +300 Bonuspunkte, `active = true`. Dazu drei weitere
Challenges über 30 Tage. Mein früherer Befund „keine Wochenziele"
beruhte auf einer Suche im Flutter-Code; die Ziele stehen aber in der
Datenbank und werden über `my_gamification_status` geliefert.

**Das Empfehlungsprogramm existiert.** Die Vorgabe sagt „es soll eines
geben". Es ist gebaut: `referral_config` steht auf `enabled = true`,
sechs RPCs, eine eigene Belohnungstabelle, ein Trigger auf den
Abo-Abschluss. Was fehlt, ist die Oberfläche in der App — deshalb hatte
ich es nicht gefunden.

**Bonusmonate gibt es.** Die Vorgabe schließt sie aus. Die Belohnung
für eine erfolgreiche Empfehlung wird in `referral_rewards.months`
gezählt: 1 Monat, wenn der Geworbene ein Monats-Abo abschließt, 2 bei
einem Jahres-Abo.

Dieser Abschnitt ist der eigentliche Ertrag von Schritt 0. Ohne ihn
hätte die ganze Analyse ein Programm entworfen, das schon dasteht.

---

## 0c · Das Belohnungssystem, vollständig

| # | Mechanik | Einheit | Schwellen | Belohnung | Quelle |
|---|---|---|---|---|---|
| 1 | Abo-Dauerrabatt | — | Abo aktiv | 5 % auf alles | `pricing.dart:15` |
| 2 | Status-Stufen | **Euro** kumuliert | 150 / 500 / 1.000 € | +1 / +2,5 / +5 % dauerhaft | `pricing.dart:24–33` |
| 3 | Loyalty-Meilensteine | **Punkte** | 500 / 1.200 / 2.000 / 3.000 | Coupon 5 / 10 / 15 / 25 % | `offers_tab.dart:942` |
| 4 | Challenges | Käufe, Automaten, Produkte, Uhrzeit | 4 aktive | Punkte oder Badge | `public.challenges` |
| 5 | Badges | — | 9 angelegt | Abzeichen | `public.badges` |
| 6 | Wochenangebote | — | wechselnd | −10 % | `public.offers` |
| 7 | Persönliches Angebot | meistgekauftes Produkt, 90 Tage | automatisch | −10 % | Nutzungsbedingungen § 5 |
| 8 | Geburtstagsgutschein | Datum | einmal jährlich | Gutschein | Abo-Vorteile |

**BEOBACHTUNG.** Zwei Fortschrittsbalken laufen gleichzeitig, in
**verschiedenen Einheiten**, mit **verschiedenen Schwellen** und
**verschiedenen Belohnungsarten**: Status in Euro (dauerhafter Rabatt),
Meilensteine in Punkten (einmaliger Coupon). Ein Nutzer, der „500"
sieht, kann nicht wissen, ob 500 Euro oder 500 Punkte gemeint sind —
beide Zahlen sind Schwellen in je einem der beiden Systeme.

Der Auftrag verbietet neue Gamification-Funktionen. Nötig ist auch
keine: Nötig ist, von acht Mechaniken **sechs zu verbergen oder
abzuschalten**, bis es Käufe gibt.

---

## Aufgabe 1 · Der echte Grund für die Installation

> Ein Mensch steht abends vor einem Automaten. Warum die App
> installieren, statt mit Karte zu zahlen?

1. Er sieht vorher, ob das, was er will, überhaupt noch drin ist,
   statt vor der Scheibe zu suchen (Bestand in Echtzeit).
2. Er sieht die Nährwerte und Allergene, die auf der Packung im
   Automaten hinter Glas nicht lesbar sind.
3. Er bekommt für jeden Kauf einen Beleg, den er wiederfindet, statt
   eines Zettels, den der Automat nicht ausgibt.
4. Er entscheidet mit, welche Organisation aus der Region die 5 % vom
   Nettopreis bekommt — dafür genügt das kostenlose Konto.
5. Mit Abo zahlt er dauerhaft 5 % weniger als am Automaten.

**Trägt die Antwort? — Teilweise.**

Die Sätze 1 bis 3 tragen, aber erst **beim zweiten Mal**. Sie
beschreiben Gründe, die App zu *haben*, nicht Gründe, sie **in diesem
Moment vor dem Automaten** zu installieren. Wer hungrig davorsteht,
lädt keine App herunter, um zu erfahren, was hinter der Scheibe liegt,
die er sieht.

Satz 2 ist heute nicht einlösbar: **0 von 62 Produkten** haben
Nährwerte oder Allergene erfasst.

Satz 4 ist der einzige, der genau in diesem Moment wirkt, weil er nichts
kostet und nichts voraussetzt.

Satz 5 trägt rechnerisch erst ab einem Umsatz, den ein Automatenkunde im
ländlichen Raum wahrscheinlich nicht erreicht — siehe Aufgabe 4.

**Die drei stärksten Installationsgründe**, nach Stärke:

1. **Beleg und Kaufhistorie.** Ein Automat gibt keinen Beleg. Für
   Pendler, Handwerker und alle mit Spesenabrechnung ist das ein
   handfester, sofort verständlicher Grund — und er ist heute schon
   vollständig gebaut (`receipts_screen`, `my_receipts`, Rechnungen).
2. **Bestand vor der Fahrt.** Nicht vor dem Automaten, sondern davor:
   „lohnt der Weg?" Im ländlichen Raum mit Entfernungen ist das der
   Unterschied zwischen App und keiner App.
3. **Mitbestimmung über die Spende.** Kostenlos, sofort, ohne Kauf.

**HYPOTHESE.** Der Moment für die Installation ist nicht vor dem
Automaten, sondern **danach** — mit dem Beleg als Anlass — oder
**davor**, mit der Bestandsfrage. *Falsifikation:* Nach dem Start zeigt
sich, dass Installationen überwiegend am Standort und innerhalb weniger
Minuten vor einem Kauf erfolgen.

---

## Aufgabe 2 · Claim und Produktarchitektur

**Die Sorge ist berechtigt, aber sie trifft die falsche Stelle.**

„Geben" und „Gutes tun" sind für einen Nutzer tatsächlich kaum
unterscheidbar — beide Wörter beschreiben Wohltätigkeit. Die
vorgeschlagene Zuordnung („Gutes tun" = persönliche Vorteile) ist
schlimmer als unklar: Sie nennt den eigenen Rabatt eine gute Tat. Wer
das als Gliederung baut, muss dem Nutzer erklären, warum sein
Geburtstagsgutschein unter „Gutes tun" steht.

**Der Claim soll bleiben. Die Navigation soll ihm nicht folgen.**

Ein Claim arbeitet auf einer anderen Ebene als eine Navigation: Er
verdichtet eine Haltung in drei Wörter, die man sich merkt. Eine
Navigation beantwortet die Frage „wo finde ich was". Dass beide aus
denselben Wörtern bestehen, ist eine Idee, die auf Papier gut aussieht
und im Gebrauch scheitert — jedes Wort müsste dann zugleich Versprechen
und Wegweiser sein.

**BEOBACHTUNG.** Die heutige Navigation ist bereits nach Aufgaben
gegliedert, nicht nach Claim-Wörtern: Angebote, Automaten, Kundenkarte,
Spenden, Profil. Das ist die richtige Achse. Sie hat andere Probleme
(Aufgabe 3), aber nicht dieses.

---

## Aufgabe 3 · Navigation und Startpunkt

### A · Braucht es einen Home-Screen?

**Nein — und sein Fehlen ist derzeit eine Stärke.**

Ein Home-Screen löst die Aufgabe „Überblick über viele gleichrangige
Bereiche". Die App hat vier Bereiche plus eine hervorgehobene Handlung.
Bei dieser Größe kostet ein Home-Screen einen zusätzlichen Schritt vor
jeder Aufgabe und liefert dafür eine Zusammenfassung, die aus vier
Kacheln besteht, die daneben schon als Reiter stehen.

Ein Home-Screen wäre erst dann begründet, wenn es eine Information gibt,
die **regelmäßig** wichtig ist und **in keinen** der vier Bereiche
gehört. Die gibt es heute nicht.

### B · Was soll beim Öffnen passieren?

Der Einstieg ist heute „Angebote" — und das ist die schwächste Wahl.

**FAKT.** `offers_tab.dart` hat 2.306 Zeilen und lädt vier Datenquellen.
Es ist der komplexeste Bildschirm der App und zeigt bei null Käufen:
keine persönlichen Angebote, 0 Punkte, einen Fortschrittsbalken auf 0
von 3.000, und zwei Wochenangebote für nicht existierende Produkte.

**Empfehlung: „Automaten" als Einstieg**, solange es keine Kaufhistorie
gibt. Das ist der einzige Bereich, dessen Nutzen nicht von vergangenen
Käufen abhängt, und er beantwortet die Frage, mit der ein neuer Nutzer
die App öffnet: „wo ist der nächste, und was ist drin?"

Das ist ohne Architekturänderung möglich — es ist der Startwert von
`_index` in `customer_screen.dart`.

**HYPOTHESE.** Sobald ein Nutzer regelmäßig kauft, wird „Angebote" der
bessere Einstieg. *Falsifikation:* Bestandskunden öffnen weiterhin
überwiegend die Automatenliste.

### C · Redundanzen

| Überschneidung | Befund |
|---|---|
| Angebote ↔ Bonus/Meilensteine | Der Loyalty-Fortschritt sitzt **im** Angebote-Reiter (`offers_tab.dart:853–1000`), zusätzlich gibt es `rewards_screen`. Zwei Orte für dieselbe Sache. |
| Angebote ↔ Abo | Der Abo-Vorteil („5 % Dauerrabatt") wird auf beiden Bildschirmen erklärt. |
| Spenden ↔ Profil | Der Spendenstand steht laut Kommentar in `kunden_shell.dart:57` auch im Profil. |
| Kundenkarte ↔ Profil | Kundennummer an zwei Stellen. |

**Die deutlichste Redundanz ist die erste.** Der größte Bildschirm der
App trägt ein zweites, vollständiges Belohnungssystem huckepack.

---

## Aufgabe 4 · Das Abo

### Argumentationsreihenfolge

1. **Das Problem:** Am Automaten zahlt jeder denselben Preis, egal wie
   oft er kommt.
2. **Der Vorteil:** Wer regelmäßig kauft, zahlt dauerhaft weniger.
3. **Die Rechnung:** offengelegt, mit dem eigenen Umsatz des Nutzers.
4. **Der Preis:** danach.
5. **Die Entscheidung:** mit dem ehrlichen Hinweis, ab wann es sich
   lohnt.

### Die Rechnung, nur mit dem 5-%-Dauerrabatt

| | Break-even |
|---|---|
| Monats-Abo (0,99 €) | ab **19,80 € Umsatz im Monat** |
| Jahres-Abo (9,99 €) | ab **199,80 € im Jahr** = 16,65 €/Monat |

### Mit dem vollen Paket

Der Code rechnet ein „normales" Szenario: 30 % der Käufe als Deal
(−14,5 %), der Rest zum App-Preis (−5 %), plus 1,5 Prozentpunkte
Treueeffekt. Ergibt **9,35 %** (`pricing.dart:78–82`).

| | Break-even |
|---|---|
| Monats-Abo | ab **10,59 €/Monat** |
| Jahres-Abo | ab **106,84 €/Jahr** = 8,90 €/Monat |

Nicht berechenbar, weil dafür Annahmen fehlen: Status-Rabatt (setzt
150 € kumulierten Umsatz voraus), Coupon-Einlösequote,
Geburtstagsgutschein. Ich setze dafür **keine** Zahlen ein.

### Die ehrliche Aussage für zwei Snacks im Monat

Zwei Käufe à 2 € = 4 €/Monat = 48 €/Jahr.

| | Ersparnis/Jahr | Abo-Kosten |
|---|---|---|
| nur 5 % | 2,40 € | 9,99 € |
| Mischszenario 9,35 % | 4,49 € | 9,99 € |

**Für diesen Kunden lohnt sich das Abo nicht.** Er zahlt gut das
Doppelte dessen, was er spart. Auch bei vier Käufen im Monat (8,98 €
Ersparnis) trägt es noch nicht. Es kippt bei etwa **acht Käufen im
Monat**.

**Das ist die wichtigste Zahl dieser Analyse.** Acht Automatenkäufe im
Monat sind kein Gelegenheitskauf, das ist eine Gewohnheit — Pendler,
Schichtarbeiter, Sportverein. Für alle anderen ist das Abo ein
Verlustgeschäft, und sie merken es spätestens bei der Verlängerung.

**Empfehlung:** Den Rechner in die App nehmen, mit dem **tatsächlichen**
Umsatz des Nutzers, und das Abo erst anbieten, wenn die Rechnung
aufgeht. Ein Abo, das sich rechnet, muss man nicht verkaufen.

---

## Aufgabe 5 · Belohnungslogik

1. **Verständlich?** Nein. Acht Mechaniken, zwei Fortschrittsbalken in
   verschiedenen Einheiten mit sich überschneidenden Zahlen (500 € vs.
   500 Punkte).
2. **Psychologisch sinnvoll?** Die einzelnen Bausteine ja. In Summe
   konkurrieren sie: Jede zusätzliche Mechanik verwässert die vorige,
   weil der Nutzer nicht mehr weiß, worauf eine Handlung einzahlt.
3. **Zusammenhang zum Kundennutzen?** Bei Status und Meilensteinen ja —
   beide zahlen in Geld aus. Bei Badges nein: Neun Abzeichen ohne
   Gegenwert. Bei den Challenges gemischt („Morgenmuffel-Kur": drei
   Käufe vormittags — belohnt eine Uhrzeit, nicht einen Nutzen).
4. **Wirkt es künstlich?** An zwei Stellen ja. „Tour de Automat" (drei
   verschiedene Automaten in 30 Tagen) belohnt Umwege bei vier
   Automaten in einem Landkreis. „Morgenmuffel-Kur" belohnt eine
   Tageszeit.
5. **Unterstützt es das Abo oder konkurriert es?** **Es konkurriert.**
   Die Meilensteine liefern bis zu 25 % Coupon — mehr als das Abo mit
   5 % dauerhaft. Wer Punkte sammelt, hat weniger Grund zu zahlen.

**Empfehlung ohne neue Funktionen:** Von den acht Mechaniken bleiben
drei sichtbar — Abo-Rabatt, Status, Meilensteine. Challenges und Badges
werden ausgeblendet, bis es Käufe gibt; „Morgenmuffel-Kur" und „Tour de
Automat" ganz gestrichen. Das ist Konfiguration (`challenges.active`),
kein Umbau.

---

## Aufgabe 6 · Empfehlungsprogramm

**Es ist gebaut.** Die Aufgabe lautet nicht „entwerfen", sondern
„prüfen und sichtbar machen".

### Was dasteht

| | |
|---|---|
| Aktiv | ja (`referral_config.enabled`) |
| Code | 8 Zeichen, Alphabet ohne I/L/O/0/1 — vorlesbar |
| Belohnung Werbender | 1 Bonusmonat (Monats-Abo) / 2 (Jahres-Abo) |
| Belohnung Geworbener | konfigurierbar, aktuell dieselbe Logik |
| Auslöser | **Abo-Abschluss** des Geworbenen, nicht Registrierung |
| Wartezeit | 14 Tage (Widerrufsfrist) |
| Obergrenze | 20 Belohnungen pro Jahr |
| Meilensteine | zusätzliche Bonusmonate und Badges |
| Versand an Dritte | **findet nicht statt** — nur ein Code |

### Bewertung

**Die drei Bedingungen des Auftrags sind erfüllt.** Kein
Adressbuchzugriff, keine Nachricht im Namen des Kunden, funktioniert ab
einem Nutzer, Auslöser sauber definiert. Die 14 Tage Wartezeit zeigen,
dass jemand an § 355 BGB gedacht hat. Die Jahresobergrenze verhindert
gewerbliche Weiterverbreitung.

**Ein Problem: das Verhältnis.** Ein Bonusmonat ist **0,99 € wert**.
Dafür soll jemand einen Menschen aus seinem Umfeld dazu bringen, ein
kostenpflichtiges Abo abzuschließen. Das ist kein Anreiz, das ist eine
Geste.

Beim Jahres-Abo sind zwei Bonusmonate rechnerisch **1,67 €** (2/12 von
9,99 €) — für den Umsatz eines Jahresabonnenten.

**HYPOTHESE.** Der Auslöser ist zu spät gesetzt. Wer jemanden für eine
App gewinnt, hat geliefert; ob der Geworbene danach ein Abo abschließt,
liegt nicht mehr in seiner Hand. *Falsifikation:* Nach dem Start werden
Empfehlungen ausgesprochen und führen regelmäßig zu Abos.

**Empfehlung, ohne neue Mechanik:** `referral_config` ist eine Tabelle
mit Werten. Die Belohnung lässt sich ändern, ohne Code anzufassen. Zu
entscheiden ist, ob der Auslöser der Abo-Abschluss bleibt oder der
**erste Kauf** des Geworbenen wird — Letzteres ist näher an dem, was
der Werbende beeinflussen kann.

**Zeitpunkt der Ansprache:** Nach dem ersten eingelösten Vorteil. Nicht
bei der Registrierung — da hat der Nutzer nichts erlebt, was er
weiterempfehlen könnte.

**Missbrauchsschutz** steht bereits: Jahresobergrenze,
E-Mail-Gleichheitsprüfung in `register_referral`, Abo-Bindung,
Wartezeit.

---

## Aufgabe 7 · Spendenversprechen

Das Versprechen lautet **5 % vom Nettopreis des jeweiligen Produkts**.

**Der Mechanismus, der ohne einen einzigen Verkauf funktioniert: die
Rechnung offenlegen, bevor gekauft wird.**

Auf der Produktseite, unter dem Preis:

    2,50 € brutto
    − 19 % Umsatzsteuer  → 2,10 € netto
    × 5 %                → 0,11 € für die Region

Das ist überprüfbar: Jeder kann nachrechnen. Es behauptet nichts über
Vergangenes. Und es macht die Zusage konkret an genau der Stelle, an
der sie entsteht — beim einzelnen Produkt, so wie sie formuliert ist.

**FAKT.** Die Datenbank rechnet bereits genau so
(`purchase_net_items`, `purchase_donation_for`, je Position mit dem
Steuersatz des Produkts). Es ist eine Anzeigefrage, keine Rechenfrage.

| Zeitpunkt | Was der Nutzer sieht |
|---|---|
| **Tag 1** | Die Rechnung je Produkt (oben). Dazu die Liste der Organisationen, sobald sie steht, und die Abstimmung. Kein Betrag, keine Summe, kein Balken. |
| **Nach dem ersten Kauf** | Der Betrag **dieses** Kaufs, aus `purchase_donation_for`, neben dem Beleg. Eine Zahl, die er selbst nachrechnen kann. |
| **Nach einem Jahr** | Die Summe seiner Käufe, die Summe des Topfes, und — das ist der Beleg, der zählt — **die Bestätigung der Organisation über den erhaltenen Betrag**. |

**Der letzte Punkt ist die eigentliche Antwort.** Alles, was die App
zeigt, ist eine Zahl, die Bördesnack24 selbst berechnet hat. Glaubwürdig
wird sie erst durch einen Dritten. Eine Empfangsbestätigung der
Organisation, eingescannt und datiert, ist ein stärkerer Beweis als
jede Darstellung in der App.

**Was heute fehlt:** `donation_causes` ist leer. Die Abstimmung, der
kostenlose Nutzen und einer der fünf Installationsgründe hängen an einer
Liste, die es nicht gibt.

---

## Aufgabe 8 · Customer Journey (Modell, keine Erkenntnis)

Alles hier ist **HYPOTHESE**. Es gibt keine Nutzer.

| Phase | Nutzerziel | Wahrscheinlichste Frage | Vorhandene Funktion | Hürde | Nächste Handlung |
|---|---|---|---|---|---|
| 1 · Ohne App | Hunger stillen | „Ist der Automat auf dem Weg?" | — | kennt Bördesnack24 nicht | Automat wahrnehmen |
| 2 · Erster Kontakt | Verstehen, was das ist | „Was ist anders als am normalen Automaten?" | Aufkleber am Automaten, Landingpage | nichts unterscheidet ihn optisch | Code am Automaten scannen |
| 3 · Installation | Schnell drin sein | „Muss ich mich registrieren?" | Registrierung | Geburtsdatum vor dem ersten Nutzen | Konto anlegen |
| 4 · Erste Nutzung | Etwas Nützliches finden | „Was kann das jetzt?" | Automatenliste, Bestand | Angebote-Reiter zeigt Nullen | Automat ansehen |
| 5 · Erster Kauf | Kaufen | „Wie bekomme ich den Rabatt?" | Kundenkarte (QR) | Ablauf am Automaten unklar | QR zeigen |
| 6 · Wiederkehr | Beleg, Bestand | „Habe ich den Beleg?" | Belegarchiv | — | Beleg abrufen |
| 7 · Abo | Sparen | „Lohnt sich das?" | Abo-Bildschirme | rechnet sich erst ab ~8 Käufen/Monat | ehrliche Rechnung sehen |
| 8 · Empfehlung | Weitergeben | „Was habe ich davon?" | Backend vorhanden, **keine Oberfläche** | nicht auffindbar | Code teilen |

**Die größte Hürde liegt in Phase 2**, und sie ist nicht in der App
lösbar: Ein Bördesnack24-Automat sieht aus wie ein Automat. Was die App
kann, muss **am Automaten** stehen, sonst erfährt es niemand.

---

## Aufgabe 9 · Value Propositions

**1 · Nicht-Abonnent — warum die App behalten?**
Trägt, aber nur über den Beleg und den Bestand. „Kaufhistorie und
Belege, die ein Automat nicht ausgibt, und der Blick in den Automaten,
bevor du hinfährst." Alles andere im kostenlosen Umfang ist Beiwerk.

**2 · Regelmäßiger Käufer — warum regelmäßig nutzen?**
**Nicht ausreichend belegt.** Zwischen zwei Käufen gibt die App keinen
Grund, sie zu öffnen. Die Wochenangebote wären dieser Grund, aber
niemand öffnet eine App wegen eines Angebots über 10 % auf einen Riegel.
Der Rückkehrgrund ist der Automat, nicht die App.

**3 · Abonnent — warum 0,99 € zahlen?**
**Trägt nur oberhalb von etwa acht Käufen im Monat.** Darunter ist es
für den Kunden ein Verlust. Siehe Aufgabe 4.

**4 · Spendenfunktion — warum sollte die Mitbestimmung wichtig sein?**
Trägt im ländlichen Raum, wo die Organisation die Feuerwehr, der
Sportverein oder die Kita im selben Ort ist. Genau das macht sie
persönlich statt abstrakt. **Heute nicht einlösbar**, weil die Liste
leer ist.

**5 · Empfehlungsprogramm — warum weiterempfehlen?**
**Derzeit nicht überzeugend.** Ein Bonusmonat für 0,99 € steht nicht im
Verhältnis zu dem, was verlangt wird.

---

## Aufgabe 10 · Funktionen auf ein Ziel reduziert

| Funktion | Hauptnutzen für Nutzer | Geschäftlicher Zweck | Wichtigkeit | Problem |
|---|---|---|---|---|
| Angebote | Rabatte finden | Kauffrequenz | mittel | Größter Bildschirm der App, zeigt bei 0 Käufen nur Nullen |
| Automaten | Weg und Bestand | Erster Kauf | **hoch** | Zeigt 4 Automaten, die es nicht gibt |
| Kundenkarte | Rabatt am Automaten einlösen | Zuordnung des Kaufs | **hoch** | Ablauf am Automaten nirgends erklärt |
| Kaufhistorie / Belege | Beleg, den der Automat nicht gibt | Bindung | **hoch** | Wird nicht als Grund kommuniziert |
| Spenden | Mitbestimmen | Unterscheidungsmerkmal | **hoch** | `donation_causes` ist leer |
| Abo | Dauerhaft sparen | Erlös | mittel | Rechnet sich erst ab ~8 Käufen/Monat |
| Meilensteine | Coupons | Frequenz | niedrig | Konkurriert mit dem Abo (25 % > 5 %) |
| Challenges / Badges | — | Frequenz | **sehr niedrig** | Belohnen Uhrzeiten und Umwege |
| Empfehlungsprogramm | Bonusmonate | Wachstum | mittel | Gebaut, aber unsichtbar |
| Profil | Verwaltung | Pflicht | mittel | — |

---

## Aufgabe 11 · Entscheidung

### **B — tragfähig, braucht andere Kommunikation und Informationsarchitektur.**

Mit einer ausdrücklichen Einschränkung: **Beim Abo ist es ein C.**

Die Begründung in drei Sätzen. Erstens: Der kostenlose Teil hat einen
echten, heute schon gebauten Nutzen — Beleg, Bestand, Mitbestimmung —
der nur nicht als solcher kommuniziert wird. Zweitens: Die
Informationsarchitektur stellt den schwächsten Bildschirm nach vorn und
versteckt den stärksten Nutzen im Profil. Drittens: Das Abo hat keinen
Kommunikationsfehler, sondern einen Rechenfehler im Nutzenversprechen —
für die realistische Kaufmenge eines Automatenkunden im ländlichen Raum
lohnt es sich nicht, und das lässt sich nicht durch bessere Texte
beheben.

**D gilt für genau eine Größe:** Wie oft kauft ein Mensch im Sülzetal
tatsächlich am Automaten? Davon hängt ab, ob das Abo ein Produkt ist
oder ein Rechenfehler. Diese Zahl ist mit dem ersten Automaten in
wenigen Wochen messbar — vorher nicht.

---

## Nicht beauftragt, aber erwägenswert

**1 · Der Automat muss erklären, was die App kann.**
*Problem:* Ein Bördesnack24-Automat ist optisch ein Automat.
*Lösung:* Eine Fläche am Gerät mit den drei Gründen und einem QR-Code.
*Relevanz:* Die größte Hürde der Journey liegt vor der App.
*Warum nicht Teil des Auftrags:* Kein App-Thema, sondern Ausstattung.

**2 · Nährwerte und Allergene erfassen.**
*Problem:* 0 von 62 Produkten haben sie; die App zeigt die Funktion.
*Lösung:* Beim Wareneingang von der Packung abtippen.
*Relevanz:* Ein Installationsgrund, der heute ins Leere läuft — und vor
dem ersten Verkauf eine Pflicht (LMIV).
*Warum nicht Teil des Auftrags:* Fleißarbeit, keine Konzeptfrage.

**3 · Seed-Daten aus der Kundenoberfläche nehmen.**
*Problem:* 4 Automaten, 589 Bestandsstücke, 2 Angebote — alles erfunden.
*Lösung:* Stilllegen, bis der erste Automat steht.
*Relevanz:* Aussagen über einen Betriebszustand, den es nicht gibt
(§ 5 UWG).
*Warum nicht Teil des Auftrags:* Datenpflege, kein Konzept. Steht
bereits auf meiner Liste.

---

## Die drei größten Unsicherheiten

**1 · Die Kauffrequenz.**
*Was wir nicht wissen:* Wie oft ein Mensch im Sülzetal am Automaten
kauft.
*Warum relevant:* Sie entscheidet allein darüber, ob das Abo trägt. Bei
zwei Käufen im Monat ist es ein Verlustgeschäft für den Kunden, bei acht
trägt es.
*Was hilft:* Die ersten drei Monate am ersten Automaten. Bis dahin
sollte das Abo zurückhaltend beworben werden.

**2 · Ob der Beleg wirklich der stärkste Grund ist.**
*Was wir nicht wissen:* Ob Menschen für einen 2-Euro-Snack einen Beleg
wollen.
*Warum relevant:* Ich habe ihn zum stärksten Installationsgrund erklärt.
Wenn das falsch ist, bleibt nur der Bestand.
*Was hilft:* Zwanzig Gespräche am ersten Automaten. Keine Befragung in
der App — die erreicht nur die, die sie schon haben.

**3 · Ob die Mitbestimmung wirkt oder nur sympathisch ist.**
*Was wir nicht wissen:* Ob jemand ein Konto anlegt, um über eine Spende
abzustimmen, die aus fremden Käufen entsteht.
*Warum relevant:* Es ist der einzige Grund, der ohne Kauf und ohne Abo
wirkt — und das Unterscheidungsmerkmal der Marke.
*Was hilft:* Die Liste der Organisationen fertigstellen und an einem
Automaten sichtbar machen, bevor die App im Store ist. Wenn niemand
danach fragt, ist die Antwort da.
