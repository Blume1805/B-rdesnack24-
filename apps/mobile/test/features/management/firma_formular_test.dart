import 'package:boerdesnack24/features/management/presentation/screens/firmenkunden_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Was das Stammdatenformular zurückgibt — und vor allem, was nicht.
///
/// `business_update` fasst nur die Schlüssel an, die es bekommt. Damit hängt
/// an dieser Abbildung eine echte Folge: Schickt das Formular beim Ändern
/// alle Felder mit, überschreibt das Eintragen einer sevDesk-Nummer nebenbei
/// die Steuernummer mit dem, was gerade im Textfeld stand. Deshalb wird hier
/// geprüft, dass nur Geändertes zurückkommt — und dass ein geleertes Feld
/// ausdrücklich als `null` mitkommt, weil „leeren" gemeint ist.
void main() {
  const bestand = <String, dynamic>{
    'name': 'Muster GmbH',
    'legal_form': 'GmbH',
    'billing_street': 'Hauptstraße 1',
    'billing_zip': '39171',
    'billing_city': 'Sülzetal',
    'billing_email': 'rechnung@muster.de',
    'tax_number': '102/178/01635',
    'vat_id': 'DE123456789',
    'sevdesk_contact_id': null,
  };

  Future<void> tippen(WidgetTester t, String spalte, String text) async {
    await t.enterText(find.byKey(ValueKey('feld_$spalte')), text);
  }

  Future<void> knopf(WidgetTester t, String beschriftung) async {
    await t.tap(find.widgetWithText(FilledButton, beschriftung));
  }

  Future<Map<String, dynamic>?> oeffnen(
    WidgetTester tester,
    Map<String, dynamic>? vorgabe,
    Future<void> Function(WidgetTester) eingeben,
  ) async {
    // Hoch genug, dass das ganze Formular gebaut wird: Eine Liste baut nur,
    // was sichtbar ist, und ein Feld, das nicht im Baum steht, lässt sich
    // nicht ausfüllen. Ob es auf ein Telefon passt, ist die Frage eines
    // anderen Tests — hier geht es um die Abbildung der Werte.
    tester.view.physicalSize = const Size(900, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    Map<String, dynamic>? ergebnis;
    await tester.pumpWidget(
      MaterialApp(
        home: Builder(
          builder: (context) => Scaffold(
            body: Center(
              child: ElevatedButton(
                onPressed: () async {
                  ergebnis =
                      await firmaFormularOeffnen(context, vorgabe: vorgabe);
                },
                child: const Text('auf'),
              ),
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('auf'));
    await tester.pumpAndSettle();
    await eingeben(tester);
    await tester.pumpAndSettle();
    return ergebnis;
  }

  testWidgets('Ändern: nur das angefasste Feld kommt zurück', (tester) async {
    final ergebnis = await oeffnen(tester, bestand, (t) async {
      await tippen(t, 'sevdesk_contact_id', '1000123');
      await knopf(t, 'Speichern');
    });

    expect(ergebnis, {'sevdesk_contact_id': '1000123'});
  });

  testWidgets('Ändern: ein geleertes Feld kommt als null mit', (tester) async {
    final ergebnis = await oeffnen(tester, bestand, (t) async {
      await tippen(t, 'vat_id', '');
      await knopf(t, 'Speichern');
    });

    expect(ergebnis, {'vat_id': null});
  });

  testWidgets('Ändern ohne Änderung schickt nichts', (tester) async {
    final ergebnis = await oeffnen(tester, bestand, (t) async {
      await knopf(t, 'Speichern');
    });

    expect(ergebnis, isNull);
  });

  testWidgets('Anlegen: alle Felder, aber ohne sevDesk-Nummer',
      (tester) async {
    final ergebnis = await oeffnen(tester, null, (t) async {
      await tippen(t, 'name', 'Neue GmbH');
      await knopf(t, 'Anlegen');
    });

    // Die Kontaktnummer kennt `business_create` nicht; sie wird nach dem
    // Anlegen unter Stammdaten nachgetragen.
    expect(ergebnis?.containsKey('sevdesk_contact_id'), isFalse);
    expect(ergebnis?['name'], 'Neue GmbH');
    expect(ergebnis?['tax_number'], isNull);
    expect(ergebnis?.keys.length, 8);
  });

  testWidgets('Ein zu kurzer Name schliesst das Formular nicht',
      (tester) async {
    final ergebnis = await oeffnen(tester, null, (t) async {
      await tippen(t, 'name', 'X');
      await knopf(t, 'Anlegen');
    });

    expect(ergebnis, isNull);
    expect(find.text('Firma anlegen'), findsOneWidget);
  });
}
