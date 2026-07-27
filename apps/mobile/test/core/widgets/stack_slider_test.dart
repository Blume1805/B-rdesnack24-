import 'package:boerdesnack24/core/widgets/design_system/stack_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  Widget harness(Widget child) =>
      MaterialApp(home: Scaffold(body: ListView(children: [child])));

  testWidgets('zeigt Zähler und blättert per Pfeil', (tester) async {
    await tester.pumpWidget(
      harness(
        const StackSlider(
          height: 90,
          children: [
            SizedBox(height: 90, child: Text('A')),
            SizedBox(height: 90, child: Text('B')),
            SizedBox(height: 90, child: Text('C')),
          ],
        ),
      ),
    );
    await tester.pumpAndSettle();

    expect(tester.takeException(), isNull);
    expect(find.text('1 von 3'), findsOneWidget);

    await tester.tap(find.byIcon(Icons.keyboard_arrow_down));
    await tester.pumpAndSettle();
    expect(find.text('2 von 3'), findsOneWidget);
  });

  testWidgets('eine einzelne Karte bleibt ohne Stapel', (tester) async {
    await tester.pumpWidget(
      harness(
        const StackSlider(height: 90, children: [Text('allein')]),
      ),
    );
    await tester.pumpAndSettle();
    expect(find.text('allein'), findsOneWidget);
    expect(find.textContaining(' von '), findsNothing);
  });

  testWidgets('Alle-anzeigen-Ausweg ist erreichbar', (tester) async {
    var opened = false;
    await tester.pumpWidget(
      harness(
        StackSlider(
          height: 90,
          onShowAll: () => opened = true,
          children: const [
            SizedBox(height: 90, child: Text('A')),
            SizedBox(height: 90, child: Text('B')),
          ],
        ),
      ),
    );
    await tester.pumpAndSettle();
    await tester.tap(find.text('Alle anzeigen'));
    await tester.pumpAndSettle();
    expect(opened, isTrue);
  });
}
