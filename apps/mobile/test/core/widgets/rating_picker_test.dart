import 'package:boerdesnack24/core/widgets/design_system/rating_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('meldet die angetippte Stufe als 1–5', (tester) async {
    final picked = <int>[];
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: RatingPicker(value: null, onChanged: picked.add),
        ),
      ),
    );

    await tester.tap(find.text('Super'));
    await tester.pump();
    expect(picked, [5]);

    await tester.tap(find.text('Schlecht'));
    await tester.pump();
    expect(picked, [5, 1]);
  });

  testWidgets('labelFor passt zur angezeigten Beschriftung', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: RatingPicker(value: 3, onChanged: (_) {}),
        ),
      ),
    );

    // Der Bestätigungstext nutzt labelFor — beide müssen dasselbe Wort
    // verwenden, sonst steht in der Meldung etwas anderes als am Gesicht.
    for (var step = 1; step <= 5; step++) {
      expect(find.text(RatingPicker.labelFor(step)), findsOneWidget);
    }
  });

  testWidgets('gesperrt löst nichts aus', (tester) async {
    final picked = <int>[];
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: RatingPicker(
            value: null,
            enabled: false,
            onChanged: picked.add,
          ),
        ),
      ),
    );

    await tester.tap(find.text('Gut'));
    await tester.pump();
    expect(picked, isEmpty);
  });
}
