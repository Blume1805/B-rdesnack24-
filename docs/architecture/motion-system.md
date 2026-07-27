# Motion-System — Bördesnack24 App

Stand: 2026-07-26 · Code: `apps/mobile/lib/core/motion/motion.dart`

## Grundsätze

1. **Funktion vor Effekt.** Jede Animation dient Fokus, Orientierung oder
   unmittelbarem Feedback — sonst kommt sie nicht rein.
2. **Nie blockierend.** Animationen laufen über bereits vorhandenem Inhalt.
   Daten warten nie auf eine Animation.
3. **Einheitliche Dauer/Easing** aus `AppMotion` (`app_tokens.dart`):
   `fast 150 ms`, `base 250 ms`, `slow 350 ms`, `easeOutCubic` /
   `easeInOutCubic`. Keine Ad-hoc-Werte im Feature-Code.
4. **Barrierefrei.** `Motion.reduced(context)` liest
   `MediaQuery.disableAnimations` — das Flutter-Äquivalent zu
   `prefers-reduced-motion`. Ist es aktiv, werden Bewegungen auf
   `Duration.zero` gesetzt bzw. auf reines Ein-/Ausblenden reduziert.
5. **Performance.** Keine Animationspakete: alles mit Bordmitteln
   (`AnimatedScale`, `TweenAnimationBuilder`, `BackdropFilter`, `Hero`).
   Grund: die Web-Startzeit ist in diesem Projekt ein wiederkehrendes
   Problem — jedes zusätzliche Paket vergrößert das Bundle.

## Bausteine

| Baustein | Zweck |
|---|---|
| `Motion.reduced/duration/offset` | Reduced-Motion-Resolver |
| `Motion.tap()` / `Motion.success()` | Haptik (Selection / MediumImpact) |
| `FadeSlidePageTransitionsBuilder` | Seitenwechsel: Fade + Slide-Up ~16 px |
| `PressableScale` | Tap-Skalierung auf 96 % + Federung + Haptik |
| `AnimatedCountUp` | Zahlen zählen hoch (Preise, Punkte, Ersparnis) |
| `SkeletonBox` / `SkeletonCard` | Skeleton-Loading mit Shimmer statt Spinner |
| `FadeInUp` | Gestaffeltes Einlaufen von Listenelementen |
| `PulseGlow` | Ruhiger Marken-Puls als Blickführung |
| `BrandRefresh` | Pull-to-Refresh mit Marken-Puck statt Material-Spinner |

Haptik ist in `try/catch` gekapselt: Web/Desktop haben keine Haptik, das
darf den Flow nie stören.

## Bereits angewendet

* **Seitenwechsel** app-weit über `pageTransitionsTheme` (alle Plattformen).
* **Bottom-Navigation** schwebend mit `BackdropFilter`-Blur (sigma 18),
  Karte auf 82 % Deckkraft. `ClipRect` begrenzt den Filter auf die Leiste —
  sonst filtert er den halben Widget-Baum (teuer).
* **Wochenangebote**: Snap-Physik auf ganze Karten + Karussell-Effekt
  (Fokus-Karte 100 %, äußere Karten bis 94 % Skalierung / 65 % Deckkraft).
* **Key-Facts (Angebote-Start)**: Rabatt, Punkte und Coupons zählen hoch.

* **Erfolgs-Feedback** (`feedback.dart`): `showSuccessToast()` mit
  selbstzeichnendem Haken (`CustomPainter`: Kreis 0–0,6, Häkchen 0,5–1) und
  Haptik. Ersetzt die Standard-SnackBar bei Coupon-Aktivierung und
  Code-Kopieren.
* **Konfetti** (`showCelebration()`) — nur bei echtem Stufenaufstieg
  (Bronze/Silber/Gold), nie beim ersten Laden, `IgnorePointer`, damit die
  Feier die Bedienung nie blockiert.
* **Fortschrittsbalken** der Status-Stufe baut sich beim Erscheinen auf.
* **Hero-Übergang** Produktbild: Angebotskarte → Detailansicht
  (Tag `product-<id>`).
* **Tap-Skalierung** auf der Angebotskarte (`PressableScale` statt InkWell —
  der Ripple wäre unter dem Bild kaum sichtbar, die Skalierung ist das
  klarere Feedback und liefert die Haptik gleich mit).

* **Suchleiste** im Angebote-Tab blendet beim Herunterscrollen weich aus
  und beim Hochscrollen wieder ein. Schwelle 12 px gegen Flackern, ganz
  oben bleibt sie immer sichtbar.
* **Skeleton-Loading** statt Spinner: Wochenangebote, persönliche Coupons,
  Favoriten-Sektion, Echtzeit-Bestand. Die Platzhalter haben die Maße der
  echten Karten — beim Datenwechsel springt nichts.
* **Pull-to-Refresh** (`BrandRefresh`) im gesamten Kundenbereich: der
  Marken-Puck wächst aus dem oberen Rand, gibt an der Auslöseschwelle einen
  haptischen Tick und dreht sich während des Ladens.
* **Live-Bestand**: Stückzahl zählt hoch, Bestandsbalken läuft weich auf
  den neuen Anteil, wenn ein Verkauf per Realtime hereinkommt.
* **QR-Kundenkarte**: ruhiger Gold-Puls (1,8 s) um den Code als
  Blickführung auf die Scan-Fläche.
* **Preise** (`PriceRow`) zählen auf den neuen Wert, wenn sich der Rabatt
  ändert (Abo, Status-Stufe, Coupon).
* **Favoriten-Sektion**: Karten laufen gestaffelt ein (70 ms Versatz),
  Wechsel Skeleton → Inhalt über `AnimatedSwitcher`.

## Bewusste Abweichungen von der Vorgabe

* **Tap-Skalierung nach unten (96 %)** statt nach oben (103–106 %): in
  Zeilen mit fester Höhe würde eine Vergrößerung an den Nachbarn
  anschneiden.
* **Karussell 94 % / 65 %** statt 105–110 % / 60–80 %: die Fokus-Karte
  bleibt bei 100 %, die Nachbarn schrumpfen — sonst müsste die
  Karussell-Höhe für den Überstand wachsen.
* **`BrandRefresh` nur im Kundenbereich.** Finanzen und Verwaltung
  behalten den Plattform-Indikator: Arbeitswerkzeuge profitieren mehr von
  vertrautem Systemverhalten als von Markenauftritt.
* **Kein Kategorie-Umschalter animiert**, weil es keinen gibt — die
  Kategorien stehen als eigene Sektionen untereinander. Ein Tab-Wechsel
  wäre eine Informationsarchitektur-Änderung, keine Animation.

## Noch offen

* **Lottie-Animationen** für QR-Scan / Bonus / Kaufabschluss. Braucht
  (a) das `lottie`-Paket und (b) **Marken-Animationsdateien**, die es noch
  nicht gibt. Ohne eigene Assets wäre es Stock-Material. Der Erfolgsfall ist
  inzwischen code-basiert gelöst (gezeichneter Haken) — Lottie lohnt erst
  mit echten Marken-Assets.
* **Glassmorphism** bisher nur auf der Bottom-Navigation. Auf Karten über
  dem hellen Cream-Hintergrund bringt ein Blur kaum sichtbaren Effekt,
  kostet aber auf Web spürbar Rasterzeit — kommt erst, wenn es dunklere
  Hintergrundflächen gibt, auf denen es wirkt.
