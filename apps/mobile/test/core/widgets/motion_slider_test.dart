import 'package:boerdesnack24/core/widgets/design_system/motion_slider.dart';
import 'package:boerdesnack24/core/widgets/design_system/tier_tiles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  Widget harness(Widget child) => MaterialApp(
        home: Scaffold(body: ListView(children: [child])),
      );

  testWidgets('startet auf der angegebenen Karte', (tester) async {
    var changed = -1;
    await tester.pumpWidget(
      harness(
        MotionSlider(
          height: 100,
          initialPage: 1,
          onPageChanged: (i) => changed = i,
          children: const [
            Text('eins'),
            Text('zwei'),
            Text('drei'),
          ],
        ),
      ),
    );
    await tester.pumpAndSettle();

    // PageView hält Nachbarn im Baum; entscheidend ist die Startposition.
    expect(find.text('zwei'), findsOneWidget);
    expect(changed, -1, reason: 'Startposition ist kein Seitenwechsel.');
  });

  testWidgets('Wischen wechselt die Karte und meldet es', (tester) async {
    var changed = -1;
    await tester.pumpWidget(
      harness(
        MotionSlider(
          height: 100,
          onPageChanged: (i) => changed = i,
          children: const [
            SizedBox(height: 100, child: Text('eins')),
            SizedBox(height: 100, child: Text('zwei')),
          ],
        ),
      ),
    );
    await tester.pumpAndSettle();

    await tester.drag(find.text('eins'), const Offset(-400, 0));
    await tester.pumpAndSettle();

    expect(changed, 1);
  });

  testWidgets('eine einzelne Karte bekommt keine Punktleiste', (tester) async {
    await tester.pumpWidget(
      harness(
        const MotionSlider(height: 80, children: [Text('allein')]),
      ),
    );
    await tester.pumpAndSettle();

    expect(tester.takeException(), isNull);
    expect(find.text('allein'), findsOneWidget);
  });

  testWidgets('Status-Stufen starten auf der erreichten Stufe', (tester) async {
    await tester.pumpWidget(harness(const TierTiles(currentCode: 'gold')));
    await tester.pumpAndSettle();

    expect(tester.takeException(), isNull);
    expect(find.text('10 %'), findsOneWidget, reason: 'Gold steht vorn.');
  });

  testWidgets('Status-Stufen rendern auch ohne bekannte Stufe', (tester) async {
    await tester.pumpWidget(harness(const TierTiles()));
    await tester.pumpAndSettle();

    expect(tester.takeException(), isNull);
    expect(find.text('6 %'), findsOneWidget, reason: 'Bronze steht vorn.');
  });
}
