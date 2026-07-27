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

## Noch offen

* **Lottie-Animationen** für QR-Scan / Bonus / Kaufabschluss. Braucht
  (a) das `lottie`-Paket und (b) **Marken-Animationsdateien**, die es noch
  nicht gibt. Ohne eigene Assets wäre es Stock-Material — deshalb bewusst
  nicht eingebaut. Alternative ohne Paket: code-basierte Erfolgs-Animation
  (Haken, der sich zeichnet) über `CustomPainter`.
* Konfetti bei Stufenaufstieg (sparsam, nur Bronze/Silber/Gold-Wechsel).
* Suchleiste beim Scrollen ein-/ausblenden.
* Hero-Übergänge Produktkarte → Detailansicht.
* Skeleton-Loading in den Listen (Bausteine stehen, Einbau folgt).
* Pull-to-Refresh mit Markenanimation.
