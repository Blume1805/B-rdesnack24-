# Auftrag an Lovable: Bildschirmentwürfe für die Kunden-App (10.09.2026)

**Status: nicht abgesendet — der Workspace hat kein Guthaben.**
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

1. `landingpage-nachfassen.md` (technisch, klein)
2. `AUFTRAG-2026-09-LANDINGPAGE-KUNDENNUTZEN.md` (inhaltlich)
3. dieser Auftrag, **Lieferung 1**
4. dieser Auftrag, **Lieferung 2**

Lieferung 1 sind drei Bildschirme. Erst ansehen, dann Lieferung 2 —
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

## Bildschirm 2 — Vorteile

Der größte Bildschirm der App und der unübersichtlichste. Heute zeigt er
acht Belohnungsmechaniken nebeneinander und zwei Fortschrittsbalken in
verschiedenen Einheiten, deren Schwellen sich überschneiden: einer läuft
in Euro (Status ab 150/500/1000 €), einer in Punkten (Meilensteine bei
500/1200/2000/3000). „500" bedeutet an zwei Stellen zwei verschiedene
Dinge.

**Neu: vier Blöcke, feste Reihenfolge, von konkret nach abstrakt.**

**A · Jetzt günstiger** — was heute konkret weniger kostet.
Wochenangebote und das persönliche Angebot. Gibt es keine Angebote,
**entfällt der Block ganz**. Keine leere Karte, kein „Aktuell keine
Angebote".

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

---

# Lieferung 2

Erst beauftragen, wenn Lieferung 1 abgenommen ist.

**Bildschirm 4 — Automaten.** Der Einstieg der App, immer. Vor dem Start
gibt es keine Automaten: kein leerer Listenzustand, sondern eine Seite,
die sagt, was geplant ist und wann. Im Betrieb Liste und Karte,
Verfügbarkeit, Entfernung.

**Bildschirm 5 — Abo.** Reihenfolge: Verhalten → Vorteil → Rechnung →
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

**Bildschirm 6 — Kundenkarte.** Eine Karte mit QR-Code, Name und
Kundennummer. Der Scanvorgang am Automaten existiert nicht. Der Text
lautet: „Diese Karte weist dich als Kunde aus. Sobald der erste Automat
steht, ordnet sie deine Käufe und Rabatte automatisch zu." Nicht
anzeigen: Punktestand, Meilensteine, Werbung. Der Kunde steht vor einem
Gerät und will scannen.

**Bildschirm 7 — Profil.** Konto, Verträge, Rechtliches. Der
Kündigungsweg muss ohne Suchen zu finden sein — er ist Pflicht nach
§ 312k BGB und wird nicht versteckt und nicht optisch abgewertet.

---

**Melde zu jeder Lieferung zurück:**

1. Welche Tokens jeder Bildschirm benutzt.
2. Welches Element du je Bildschirm als Signature gesetzt hast.
3. Wo du eine Aussage gebraucht hättest, die im Projektwissen nicht
   steht — und was du stattdessen getan hast. Nicht erfinden, fragen.
