import 'dart:math' as math;

import 'package:boerdesnack24/core/theme/app_tokens.dart';
import 'package:boerdesnack24/core/widgets/motion/motion.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Pattern M07 „Geneigtes Produkt-Karussell" (motion/MOTION.md) als Option
/// `tilt` von FocusCarousel.
void main() {
  Widget host({bool tilt = true, bool reduceMotion = false}) => MaterialApp(
        home: MediaQuery(
          data: MediaQueryData(
            size: const Size(390, 844),
            disableAnimations: reduceMotion,
          ),
          child: Scaffold(
            body: SizedBox(
              width: 350,
              child: FocusCarousel(
                tilt: tilt,
                itemExtent: 212,
                height: 300,
                itemCount: 4,
                itemBuilder: (context, i) => SizedBox(
                  key: ValueKey('card$i'),
                  width: 200,
                  height: 240,
                  child: Text('Karte $i'),
                ),
                labelFor: (i) => 'Produkt $i',
                labelStyle: const TextStyle(fontSize: 14),
              ),
            ),
          ),
        ),
      );

  /// Drehwinkel (Grad) und Scherung (Grad) der Karte [i], aus der äußersten
  /// Transform-Matrix über der Karte.
  ({double rotation, double skew})? tiltOf(WidgetTester tester, int i) {
    final transforms = find.ancestor(
      of: find.byKey(ValueKey('card$i')),
      matching: find.byType(Transform),
    );
    for (final e in transforms.evaluate()) {
      final m = (e.widget as Transform).transform;
      // Reine Skalierung hat keine Nebendiagonale; die Neige-Matrix schon
      // oder ist bei der Fokuskarte die Einheitsdrehung.
      if (m.entry(0, 0) == m.entry(1, 1) && m.entry(0, 1) == 0) {
        if ((e.widget as Transform).alignment == Alignment.center &&
            m.entry(0, 0) == 1) {
          return (rotation: 0, skew: 0);
        }
        continue;
      }
      final rotation = math.atan2(m.entry(1, 0), m.entry(0, 0)) * 180 / math.pi;
      // Scherung: Winkel der verschobenen y-Achse gegen die Drehung.
      final yAxis = math.atan2(-m.entry(0, 1), m.entry(1, 1)) * 180 / math.pi;
      return (rotation: rotation, skew: yAxis - rotation);
    }
    return null;
  }

  testWidgets('Fokuskarte gerade, Nachbar um --tilt-max geneigt',
      (tester) async {
    await tester.pumpWidget(host());
    await tester.pump();
    final focus = tiltOf(tester, 0);
    final neighbour = tiltOf(tester, 1);
    expect(focus, isNotNull);
    expect(focus!.rotation.abs(), lessThan(0.01));
    expect(neighbour, isNotNull);
    expect(neighbour!.rotation.abs(), closeTo(AppMotion.tiltMaxDeg, 0.01));
  });

  testWidgets('Wischen schert, danach läuft die Scherung auf null zurück',
      (tester) async {
    await tester.pumpWidget(host());
    final gesture =
        await tester.startGesture(tester.getCenter(find.byType(PageView)));
    await gesture.moveBy(const Offset(-60, 0));
    await tester.pump();
    await gesture.moveBy(const Offset(-60, 0));
    await tester.pump();
    final during = tiltOf(tester, 1)!;
    expect(during.skew.abs(), greaterThan(0.5));
    expect(during.skew.abs(), lessThanOrEqualTo(AppMotion.skewMaxDeg + 0.01));

    await gesture.up();
    await tester.pumpAndSettle();
    for (final i in [0, 1, 2]) {
      final t = tiltOf(tester, i);
      if (t != null) expect(t.skew.abs(), lessThan(0.05));
    }
  });

  testWidgets('„Bewegung reduzieren": keine Neigung, keine Scherung',
      (tester) async {
    await tester.pumpWidget(host(reduceMotion: true));
    await tester.pump();
    final transforms = find.ancestor(
      of: find.byKey(const ValueKey('card1')),
      matching: find.byType(Transform),
    );
    for (final e in transforms.evaluate()) {
      final m = (e.widget as Transform).transform;
      expect(m.entry(0, 1), 0, reason: 'keine Drehung oder Scherung');
      expect(m.entry(1, 0), 0, reason: 'keine Drehung oder Scherung');
    }
    // Inhalt bleibt vollständig: alle Karten und die Beschriftung da.
    expect(find.text('Produkt 0'), findsOneWidget);
    expect(find.text('1 von 4'), findsOneWidget);
  });

  testWidgets('ohne tilt bleibt das bisherige Karussell unverändert',
      (tester) async {
    await tester.pumpWidget(host(tilt: false));
    await tester.pump();
    final transforms = find.ancestor(
      of: find.byKey(const ValueKey('card1')),
      matching: find.byType(Transform),
    );
    for (final e in transforms.evaluate()) {
      final m = (e.widget as Transform).transform;
      expect(m.entry(0, 1), 0);
      expect(m.entry(1, 0), 0);
    }
  });
}
