import 'package:boerdesnack24/core/motion/motion.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// `FadeInUp` trägt den Einlauf des Login-Formulars. Der Test prüft, dass
/// beim Erscheinen wirklich animiert wird — und nicht still auf dem
/// Endwert steht.
double _opacityOf(WidgetTester tester) {
  final o = tester.widget<Opacity>(
    find.descendant(
      of: find.byType(FadeInUp),
      matching: find.byType(Opacity),
    ),
  );
  return o.opacity;
}

double _dyOf(WidgetTester tester) {
  final t = tester.widget<Transform>(
    find.descendant(
      of: find.byType(FadeInUp),
      matching: find.byType(Transform),
    ),
  );
  return t.transform.getTranslation().y;
}

void main() {
  testWidgets('startet unsichtbar und versetzt, endet sichtbar bei 0',
      (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: FadeInUp(offset: 40, child: Text('Formular')),
        ),
      ),
    );

    // Erster Frame: noch nicht eingelaufen.
    expect(_opacityOf(tester), lessThan(0.2));
    expect(_dyOf(tester), greaterThan(20));

    // Mittendrin: sichtbar in Bewegung.
    await tester.pump(const Duration(milliseconds: 150));
    final mid = _opacityOf(tester);
    expect(mid, greaterThan(0.0));
    expect(mid, lessThan(1.0));

    await tester.pumpAndSettle();
    expect(_opacityOf(tester), 1.0);
    expect(_dyOf(tester), 0.0);
  });

  testWidgets('gestaffelte Kinder laufen nacheinander ein', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: Column(
            children: [
              FadeInUp(child: Text('zuerst')),
              FadeInUp(index: 3, child: Text('spaeter')),
            ],
          ),
        ),
      ),
    );

    await tester.pump(const Duration(milliseconds: 200));
    final first = tester
        .widgetList<Opacity>(
          find.descendant(
            of: find.byType(FadeInUp),
            matching: find.byType(Opacity),
          ),
        )
        .toList();
    expect(
      first[0].opacity,
      greaterThan(first[1].opacity),
      reason: 'Das erste Element muss dem gestaffelten voraus sein.',
    );
  });

  testWidgets('bei reduzierter Bewegung sofort am Ziel', (tester) async {
    await tester.pumpWidget(
      const MediaQuery(
        data: MediaQueryData(disableAnimations: true),
        child: MaterialApp(
          home: Scaffold(
            body: FadeInUp(offset: 40, child: Text('Formular')),
          ),
        ),
      ),
    );

    expect(_opacityOf(tester), 1.0);
    expect(_dyOf(tester), 0.0);
  });
}
