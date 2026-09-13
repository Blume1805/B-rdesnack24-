# Auftrag: Landingpage — Bewegung, die zur Marke gehört

An den Lovable-Agenten, Projekt A. Stand 03.09.2026.

**Abgeschickt am 03.09.2026, Nachricht `umsg_01m1k3wybefxtv71s5mthav8gf`.**

Setze `impeccable`, `boerdesnack24-design`, `frontend-taste` und `humanizer`
ein. Alle vier liegen in der Workspace.

## Worum es geht

Die Startseite unter `/` wirkt statisch. Der Grund ist nicht fehlende
Animation — `FadeIn`, `Reveal` und `SignatureBoerde` sind da —, sondern dass
**Bewegung ausschließlich beim Erscheinen passiert**. Danach reagiert nichts
mehr. Man scrollt an fertigen Blöcken vorbei.

Die Seite soll dynamischer und hochwertiger wirken, ohne generisch zu werden.
Das ist ein Widerspruch, den man leicht falsch auflöst: mehr Effekt ist nicht
mehr Qualität. Der Weg ist Bewegung, die zur Sache gehört, nicht Bewegung,
die man drüberlegt.

## Was ausdrücklich NICHT verwendet wird

Der Betreiber hatte acht Lottie-Dateien von LottieFiles bereitgestellt. Sie
werden **nicht** eingebaut, und du sollst auch keine eigenen beschaffen. Die
Gründe, damit sie nicht später doch wieder auftauchen:

* Es sind Vorlagen aus einem UI-Paket und zeigen eine andere Anwendung —
  Anmeldemaske, Chatfenster, Blogkarten mit erfundenen Autoren,
  Sternebewertung. Auf der Startseite würden sie ein Produkt versprechen, das
  es so nicht gibt.
* Eine Datei enthält Logo und Domain eines fremden Unternehmens als
  eingebettetes Bild.
* Zusammen 12,9 MB, komprimiert 7,4 MB. Dafür ist auf einer Startseite kein
  Platz.
* Und der eigentliche Punkt: ein Animationspaket von der Stange ist genau
  das, was `frontend-taste` als Standard-Optik abfängt.

## Der Auftrag

### 1. Der Bildblock im Kopfbereich bekommt Tiefe

Das Foto rechts (`hero-genuss.jpg`) steht heute still. Es soll beim Scrollen
langsam aus einem leichten Zoom herauslaufen: von `scale(1.08)` auf `1`
über den Bereich, in dem es sichtbar wird.

Zwingend: Das Bild sitzt in einem Rahmen mit fester Höhe und
`overflow: hidden`. Skaliert wird das Bild **im** Rahmen, nie der Rahmen.
Sonst verschiebt sich das Layout und die Seite ruckelt beim Lesen.

### 2. Zoom beim Scrollen — der Kern dieses Auftrags

Der Betreiber möchte spürbar mehr Zoom beim Scrollen und Wischen. Umsetzung
über scrollgetriebene Animationen, nicht über einen Scroll-Listener in
JavaScript:

```css
@keyframes einlauf-zoom {
  from { transform: scale(1.10); opacity: 0.85; }
  to   { transform: scale(1);    opacity: 1; }
}

@supports (animation-timeline: view()) {
  .zoom-beim-scrollen {
    animation: einlauf-zoom linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 45%;
  }
}
```

Das läuft im Compositor und nicht im Hauptthread — deshalb bleibt es auch auf
einem älteren Android flüssig. Wo `animation-timeline` fehlt (derzeit
Firefox), setzt ein `IntersectionObserver` einmalig eine Klasse und die
Bewegung läuft als normale Transition ab. Kein Effekt ist besser als ein
hakeliger.

**Maßhalten.** `scale(1.10)` ist deutlich sichtbar und bleibt ruhig.
`scale(1.4)` sieht nach Demo aus. Wenn du zwischen zwei Werten schwankst,
nimm den kleineren.

### 3. Das Sortiment wird eine Wischgalerie mit Zoom in der Mitte

Heute sind die fünf Kategorien eine Liste mit Trennlinien. Das war eine
bewusste Entscheidung gegen fünf gleiche Kreise, und der Gedanke dahinter
bleibt richtig: die Zeilen führen in die App, sie sind kein Schmuck.

Neu, und darum geht es hier: **auf schmalen Geräten** wird daraus eine
horizontal wischbare Reihe mit `scroll-snap-type: x mandatory`. Die Karte in
der Mitte steht auf `scale(1)`, die Nachbarn auf etwa `scale(0.92)` und
leicht gedämpfter Deckkraft. Beim Wischen wächst die neue mittlere Karte
heran. Auf breiten Geräten bleibt die Liste, dort ist Wischen kein
Bedienweg.

Für die mitwachsende Mitte:

```css
@supports (animation-timeline: view(inline)) {
  .galerie > * {
    animation: mitte-heran linear both;
    animation-timeline: view(inline);
    animation-range: entry 15% exit 85%;
  }
}
@keyframes mitte-heran {
  from, to { transform: scale(0.92); opacity: 0.75; }
  50%      { transform: scale(1);    opacity: 1; }
}
```

Zwingend beim Wischen:

* `touch-action: pan-x` auf der Galerie, `overscroll-behavior-x: contain`.
  Sonst kämpft die Wischgeste gegen das Scrollen der Seite, und der Nutzer
  verliert beide.
* Die Galerie braucht `role="list"`, die Karten `role="listitem"`, und sie
  müssen mit der Tastatur in derselben Reihenfolge erreichbar sein wie mit
  dem Finger.
* Kein eigener Scrollbalken-Ersatz, keine Punkte-Navigation, die nichts tut.
  Wenn Punkte, dann anklickbar und mit `aria-current`.

### 4. Der Bördekreis wird durchgehendes Motiv

`SignatureBoerde` ist heute ein einzelner Moment. Er soll wiederkehren: als
sehr zurückhaltende Kontur hinter dem Spendenversprechen, gezeichnet über den
Scrollfortschritt statt beim Erscheinen. Ein Motiv, das zweimal auftaucht,
wirkt wie eine Entscheidung; einmal wirkt es wie ein Zufall.

### 5. Richtung im Hover

Die Sortimentszeilen haben heute `row-press` und einen Pfeil. Der Pfeil soll
beim Überfahren nach rechts wandern — die Bewegung sagt, was der Klick tut.
`transform: translateX`, sonst nichts. Kein Schatten, der aufgeht, keine
Karte, die kippt.

### 6. Kopfbereich beim Scrollen

Die Kopfzeile verdichtet sich nach dem ersten Bildschirm: geringere Höhe,
`glass-bar` als Hintergrund, Wortmarke kleiner. Ein Zustandswechsel mit
`--duration-fade`, nicht laufend mitscrollend.

## Die Grenzen

**Bewegt werden nur `transform` und `opacity`.** Nicht `width`, `height`,
`top`, `left`, `margin`, `box-shadow`, `filter`. Alles andere zwingt den
Browser zu Layout- oder Malarbeit in jedem Bild.

**`prefers-reduced-motion: reduce` schaltet alles ab.** Der Block dafür steht
schon in `styles.css` und setzt `[data-reveal]` auf sichtbar. Neue Effekte
müssen dort mit abgedeckt sein: Inhalt sofort vollständig da, kein Zoom,
keine Verschiebung. Das ist kein Zugeständnis, sondern für manche Menschen
die Bedingung, die Seite überhaupt benutzen zu können.

**Kein Scroll-Hijacking.** Die Seite scrollt mit der Geschwindigkeit, die das
Gerät vorgibt. Keine erzwungenen Abschnittssprünge, kein Abfangen des
Mausrads.

**Kein Layout-Sprung.** Alles, was skaliert, sitzt in einem Rahmen mit fester
Größe. Der Wert für Cumulative Layout Shift darf sich nicht verschlechtern.

**Die Hauskurve gilt:** `--ease-house: cubic-bezier(0.22, 1, 0.36, 1)`,
Dauern `--duration-press` 200 ms, `--duration-fade` 350 ms,
`--duration-shared` 450 ms, `--duration-count` 900 ms. Keine neuen Kurven,
keine neuen Dauern. Wer eine fünfte Dauer braucht, braucht meist keine
Animation.

## Was nicht passieren soll

* Kein Parallax auf allem — ein bewegter Hintergrund pro Seite reicht.
* Kein Einblenden jedes einzelnen Elements. Was ohnehin sichtbar ist, muss
  nicht erst erscheinen.
* Keine hochzählenden Zahlen, solange es keine echten gibt. Erfundene
  Kennzahlen auf der Startseite kommen nicht in Frage.
* Keine kippenden 3D-Karten, kein Milchglas über allem, kein Farbverlauf im
  Text. `text-gradient-gold` ist im Projekt bereits absichtlich auf eine
  volle Goldfläche zurückgesetzt worden.
* Keine neuen Abhängigkeiten für Animation. Kein GSAP, kein Framer Motion,
  kein Lottie-Player. CSS und die vorhandenen Bausteine reichen.

## Texte

Jede sichtbare Zeile, die du anfasst, läuft durch `humanizer`. Die Seite
spricht heute knapp und ohne Werbesprache — „Kein Ladenschluss, kein
Sonntagsproblem" —, und das soll so bleiben. Keine Superlative, keine
Dreierfiguren, keine Wörter wie „nahtlos", „mühelos", „revolutionär".

## Nachweise

Zusage genügt nicht:

1. Ausgabe von `bun run test` mit Testnamen und Zählung.
2. Ein Test, der belegt: bei `prefers-reduced-motion: reduce` ist der Inhalt
   ohne Transformation und voll sichtbar.
3. Die Stellen, an denen `animation-timeline` verwendet wird, samt der
   Fallback-Behandlung — Datei und Zeile.
4. Die Bestätigung, dass in den neuen Regeln ausschließlich `transform` und
   `opacity` bewegt werden. Ein `grep` über die geänderten Dateien nach
   `transition:` und `animation:` reicht mir als Beleg, wenn du die Trefferliste
   mitschickst.
5. Eine kurze Aussage, was du auf einem schmalen Gerät geprüft hast und wie —
   besonders, ob die Wischgeste in der Galerie das Scrollen der Seite stört.

Wenn dir an einer Stelle mehr Bewegung sinnvoll erscheint als hier steht,
bau sie nicht einfach ein, sondern sag es mir mit Begründung. Beim letzten
Auftrag hast du einen Fehler in meiner Vorgabe gefunden; dieselbe Freiheit
gilt hier.
