// Das Blatt „PDF teilen oder drucken": erst „wird erstellt", dann die
// Schaltflächen; ein Fehler beim Erzeugen wird angezeigt und lässt sich
// wiederholen. (Im Test gilt die native Fassung: Teilen und Öffnen.)
import 'dart:async';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:boerdesnack24/core/druck/pdf_ausgabe.dart';

Widget _app(Future<Uint8List> Function() erzeugen) => MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: TextButton(
            onPressed: () => pdfAnbieten(
              context,
              titel: 'Anlage PKW-Kosten 2026',
              dateiname: 'Anlage_PKW-Kosten_2026.pdf',
              erzeugen: erzeugen,
            ),
            child: const Text('los'),
          ),
        ),
      ),
    );

void main() {
  testWidgets('erst „wird erstellt", dann Teilen und Öffnen', (t) async {
    final fertig = Completer<Uint8List>();
    await t.pumpWidget(_app(() => fertig.future));
    await t.tap(find.text('los'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('PDF wird erstellt …'), findsOneWidget);
    expect(find.text('Anlage_PKW-Kosten_2026.pdf'), findsOneWidget);

    fertig.complete(Uint8List.fromList('%PDF-1.4'.codeUnits));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('PDF wird erstellt …'), findsNothing);
    expect(find.text('Teilen oder drucken'), findsOneWidget);
    expect(find.text('PDF öffnen'), findsOneWidget);
  });

  testWidgets('Fehler beim Erzeugen: Meldung und erneuter Versuch', (t) async {
    // Hochformat wie ein Telefon, damit das Blatt ganz sichtbar ist.
    t.view.physicalSize = const Size(390, 844);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    var versuche = 0;
    await t.pumpWidget(
      _app(() async {
        versuche++;
        if (versuche == 1) throw Exception('Server weg');
        return Uint8List.fromList('%PDF-1.4'.codeUnits);
      }),
    );
    await t.tap(find.text('los'));
    await t.pump(const Duration(milliseconds: 300));
    await t.pump();
    expect(find.text('Das PDF konnte nicht erstellt werden.'), findsOneWidget);
    await t.pumpAndSettle(); // Blatt fertig eingeblendet
    await t.tap(find.text('Erneut versuchen'));
    for (var i = 0; i < 3; i++) {
      await t.pump(const Duration(milliseconds: 100));
    }
    expect(find.text('Teilen oder drucken'), findsOneWidget);
    expect(versuche, 2);
  });
}
