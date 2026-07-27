import 'package:boerdesnack24/core/widgets/design_system/code_input.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// `CodeInput` zeigt die Ziffern in einzelnen Kästchen, hält den Text aber
/// in einem einzigen versteckten Feld. Diese Trennung ist die Stelle, an
/// der so etwas erfahrungsgemäß bricht — deshalb hier abgesichert.
void main() {
  Widget harness(TextEditingController c, {ValueChanged<String>? onDone}) =>
      MaterialApp(
        home: Scaffold(
          body: CodeInput(controller: c, length: 6, onCompleted: onDone),
        ),
      );

  testWidgets('zeigt jede Ziffer in einem eigenen Kästchen', (tester) async {
    final c = TextEditingController();
    addTearDown(c.dispose);
    await tester.pumpWidget(harness(c));

    c.text = '1234';
    await tester.pump();

    for (final d in ['1', '2', '3', '4']) {
      expect(find.text(d), findsOneWidget, reason: 'Ziffer $d fehlt');
    }
  });

  testWidgets('meldet Vollständigkeit genau einmal', (tester) async {
    final c = TextEditingController();
    addTearDown(c.dispose);
    final done = <String>[];
    await tester.pumpWidget(harness(c, onDone: done.add));

    c.text = '12345';
    await tester.pump();
    expect(done, isEmpty, reason: 'fünf Stellen sind noch nicht vollständig');

    c.text = '123456';
    await tester.pump();
    expect(done, ['123456']);
  });

  testWidgets('Fehlertext wird angezeigt', (tester) async {
    final c = TextEditingController(text: '99');
    addTearDown(c.dispose);
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: CodeInput(
            controller: c,
            length: 6,
            errorText: 'Code stimmt nicht.',
          ),
        ),
      ),
    );
    await tester.pump();

    expect(find.text('Code stimmt nicht.'), findsOneWidget);
  });

  testWidgets('MorphButton klappt auf den Erfolgszustand um', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: MorphButton(
            label: 'Aktivieren',
            successLabel: 'Aktiviert',
            state: MorphState.idle,
          ),
        ),
      ),
    );
    expect(find.text('Aktivieren'), findsOneWidget);
    expect(find.text('Aktiviert'), findsNothing);

    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: MorphButton(
            label: 'Aktivieren',
            successLabel: 'Aktiviert',
            state: MorphState.success,
          ),
        ),
      ),
    );
    await tester.pumpAndSettle();

    expect(find.text('Aktiviert'), findsOneWidget);
    expect(find.byIcon(Icons.check_circle), findsOneWidget);
  });
}
