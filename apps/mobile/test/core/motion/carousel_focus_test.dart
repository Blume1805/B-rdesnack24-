import 'package:boerdesnack24/core/motion/motion.dart';
import 'package:flutter_test/flutter_test.dart';

/// Geometrie der Snap-Karussells.
///
/// Hintergrund: die Angebots-Karussells liefen ohne seitliche Polsterung. Der
/// Scrollbereich endete dadurch, bevor die letzte Karte die Fokusposition
/// erreichen konnte — sie blieb dauerhaft unscharf und ließ sich nicht
/// auswählen. Diese Tests halten die Rechnung fest, die das behebt.
void main() {
  // Werte des Wochenangebots-Karussells.
  const cardWidth = 260.0;
  const gap = 12.0;
  const extent = cardWidth + gap;
  const viewport = 390.0; // typische iPhone-Breite

  group('CarouselFocus.sidePadding', () {
    test('zentriert eine Karte im Viewport', () {
      final pad = CarouselFocus.sidePadding(
        viewport: viewport,
        cardWidth: cardWidth,
      );
      expect(pad, closeTo((viewport - cardWidth) / 2, 0.001));
      // Karte 0 liegt bei pixels = 0 exakt mittig.
      expect(pad + cardWidth / 2, closeTo(viewport / 2, 0.001));
    });

    test('wird auf schmalen Viewports nicht negativ', () {
      expect(
        CarouselFocus.sidePadding(viewport: 200, cardWidth: cardWidth),
        0.0,
      );
    });
  });

  group('CarouselFocus.maxScrollExtentFor', () {
    test('erlaubt exakt (itemCount − 1) Rasterschritte', () {
      // Das ist der eigentliche Regressionstest: nur wenn der Scrollbereich
      // genau auf dem Raster endet, kann die Snap-Physik die letzte Karte
      // in den Fokus bringen, ohne auf maxScrollExtent geklemmt zu werden.
      for (final n in [2, 3, 5, 12]) {
        expect(
          CarouselFocus.maxScrollExtentFor(
            viewport: viewport,
            cardWidth: cardWidth,
            gap: gap,
            itemCount: n,
          ),
          closeTo((n - 1) * extent, 0.001),
          reason: 'itemCount $n',
        );
      }
    });

    test('eine einzelne Karte lässt sich gar nicht scrollen', () {
      expect(
        CarouselFocus.maxScrollExtentFor(
          viewport: viewport,
          cardWidth: cardWidth,
          gap: gap,
          itemCount: 1,
        ),
        0.0,
      );
    });
  });

  group('CarouselFocus.distanceToCenter', () {
    double distance(int index, double pixels) {
      final pad = CarouselFocus.sidePadding(
        viewport: viewport,
        cardWidth: cardWidth,
      );
      return CarouselFocus.distanceToCenter(
        index: index,
        itemExtent: extent,
        cardWidth: cardWidth,
        leadingPad: pad,
        pixels: pixels,
        viewport: viewport,
      );
    }

    test('die Karte am Rasterpunkt steht exakt im Fokus', () {
      expect(distance(0, 0), closeTo(0, 0.001));
      expect(distance(1, extent), closeTo(0, 0.001));
      expect(distance(4, 4 * extent), closeTo(0, 0.001));
    });

    test('Nachbarn liegen genau eine Karten-Einheit daneben', () {
      expect(distance(1, 0), closeTo(1, 0.001));
      expect(distance(2, 0), closeTo(2, 0.001));
      expect(distance(0, extent), closeTo(-1, 0.001));
    });

    test('die letzte Karte erreicht am Scroll-Ende den Fokus', () {
      const n = 5;
      final maxExtent = CarouselFocus.maxScrollExtentFor(
        viewport: viewport,
        cardWidth: cardWidth,
        gap: gap,
        itemCount: n,
      );
      // Vor dem Fix endete der Scrollbereich früher, die Distanz blieb hier
      // deutlich über 0 und die Karte damit unscharf.
      expect(distance(n - 1, maxExtent), closeTo(0, 0.001));
    });
  });
}
