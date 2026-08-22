# Auftrag 03 — Coupon-Slider mit Zoomeffekt

*Einzeln senden. Nichts anderes in diesem Durchgang.*

---

Nächster Auftrag: nur der Coupon-Slider. Keine Lottie-Dateien, kein
Designsystem, keine weitere Bewegung ausserhalb dieses Bausteins — die
kommen als eigene Aufträge.

## Was der Auftraggeber will

Coupons sollen als **Slide mit Zoomeffekt** erscheinen, mit
**Platzhaltern für die Bilder**.

## Was ich vorher geprüft habe, damit du dieselbe Runde nicht drehst

Alles gegen die laufende Datenbank und dein `package.json` geprüft, nicht
aus dem Gedächtnis:

* **62 aktive Produkte, davon 0 mit `image_url`.** Der Platzhalter ist
  deshalb kein Übergang bis zum echten Bild — er ist auf absehbare Zeit
  *das* Bild. Er muss so gut aussehen, dass die Kachel damit fertig
  wirkt, nicht so, als fehle etwas.
* **Vier Kategorien:** Eis, Getränke, Snacks, Süßwaren. Mehr gibt es
  nicht. Der Platzhalter darf sich daran orientieren.
* **0 laufende Coupons** (`personal_offers` und `offers` jeweils leer,
  Stand 22.08.2026). Im echten Zugang siehst du den Slider also **leer**.
  Gefüllt siehst du ihn nur über die Demo-Fixtures aus Auftrag 01. Beide
  Zustände gehören gebaut, und der leere ist der, den ein echter Kunde
  heute zu sehen bekommt.
* **`embla-carousel-react` ^8.6.0 ist bereits als Abhängigkeit da**, und
  `src/components/ui/carousel.tsx` existiert schon. Nimm das. Keine neue
  Slider-Bibliothek — jede neue Abhängigkeit zieht bei uns eine
  datenschutzrechtliche Einordnung nach sich, und für einen Slider ist
  das nicht zu rechtfertigen.
* **`motion` ^12.43.0 ist da.** Für den Zoom reicht CSS-Transform; nimm
  `motion` nur, wo du es wirklich brauchst.
* **Es gibt keine Lottie-Bibliothek im Projekt.** Bau hier auch keine
  ein — das ist Auftrag 04 und hängt an Dateien, die noch fehlen.
* `src/lib/demo/fixtures.ts`, `use-demo-query.ts` und `variants.ts` sind
  aus Auftrag 01 vorhanden. Sieh dort nach, wie der Demozustand
  umgeschaltet wird, und häng dich dort an, statt etwas Eigenes zu bauen.

## Was zu bauen ist

### 1. Der Platzhalter

Es gibt bereits `src/components/product-image.tsx`. **Sieh zuerst dort
nach, was der heute tut**, bevor du etwas Neues anlegst — wenn er schon
einen Platzhalter kann, erweitere ihn, statt einen zweiten Weg
aufzumachen.

Der Platzhalter soll:

* je Kategorie unterschiedlich aussehen (Eis, Getränke, Snacks,
  Süßwaren) — aus den vorhandenen Marken-Token, keine neuen Farben,
* den Produktnamen tragen, damit die Kachel auch ohne Bild etwas sagt,
* **deterministisch** sein: dasselbe Produkt bekommt immer denselben
  Platzhalter. Kein `Math.random()` — sonst springt die Darstellung bei
  jedem Rendern, und im Slider fällt das sofort auf.
* Wenn eines Tages ein `image_url` da ist, gewinnt das Bild. Der
  Platzhalter ist der Rückfall, nicht die Regel im Code.

### 2. Der Slider

* Waagerecht, ein Coupon je Slide, angrenzende Slides angeschnitten
  sichtbar — der Kunde muss sehen, dass es weitergeht.
* **Zoomeffekt:** Der mittlere, aktive Slide steht auf `scale(1)`, die
  Nachbarn kleiner (etwa `0.92`) und leicht abgedunkelt. Beim Wischen
  wandert der Zoom mit. Embla liefert dafür den Fortschritt je Slide —
  nutz den, statt den aktiven Index hart umzuschalten; sonst springt es,
  statt zu gleiten.
* Wischen mit dem Finger, Ziehen mit der Maus, und **Pfeiltasten links
  und rechts**, wenn der Slider den Tastaturfokus hat.
* Punkte-Anzeige darunter, wie viele Coupons es gibt und wo man steht.

### 3. Die beiden Zustände, die es wirklich gibt

* **Leer** (heute der Normalfall): Kein toter Rahmen und kein
  Ladebalken, der nie endet. Eine ruhige Karte, die sagt, dass gerade
  keine Coupons offen sind, und was den nächsten auslöst. Der Ton wie
  im übrigen Kundenbereich — kein Ausrufezeichen, keine Werbung.
* **Gefüllt** (über die Demo-Fixtures): mehrere Coupons mit Titel,
  Ersparnis, Gültig-bis und Einlösecode.

### 4. Barrierefreiheit — nicht optional

* `prefers-reduced-motion` respektieren: Dann kein Zoom und kein
  weiches Gleiten, nur der Wechsel. Der Slider muss ohne Bewegung
  vollständig bedienbar bleiben.
* Jeder Slide braucht einen lesbaren Namen für Screenreader; der
  Platzhalter darf nicht als „Bild" ohne Text durchgehen.
* Der Kontrast der Schrift auf dem Platzhalter muss **4,5:1** erreichen.
  Rechne das nach und schreib die Werte in die Antwort — nicht schätzen.
  Bei den abgedunkelten Nachbar-Slides gilt dasselbe, solange ihr Text
  lesbar ist; wenn du sie so weit abdunkelst, dass Text nicht mehr
  gelesen werden soll, blende ihn richtig aus, statt ihn unlesbar
  stehen zu lassen.

## Was ausdrücklich NICHT dazugehört

* Keine Lottie-Dateien, keine neue Animationsbibliothek.
* Keine Änderung an der Datenbank oder an den Abfragen — die Coupons
  kommen bereits über die vorhandenen Wege.
* Keine Umbauten am Designsystem. Wenn dir dabei etwas auffällt:
  aufschreiben, nicht anfassen.

## Am Schluss

Sag mir kurz:

1. Was `product-image.tsx` vorher tat und was du daran geändert hast.
2. Die gerechneten Kontrastwerte des Platzhalters.
3. Wie du den Slider im leeren Zustand geprüft hast — im echten Zugang
   ist er leer, das ist kein Fehler, sondern der heutige Stand.
