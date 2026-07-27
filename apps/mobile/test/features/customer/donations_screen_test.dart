import 'package:boerdesnack24/features/customer/domain/entities/donations_news.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/donations_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Regressionstest zu „Meine Spenden ist leer".
///
/// Die Kennzahl-Kacheln standen in einer `Row(crossAxisAlignment: stretch)`.
/// In einer ListView bekommt die Row unbegrenzte Höhe; `stretch` verlangt
/// aber eine endliche — Flutter wirft „BoxConstraints forces an infinite
/// height". Im Debug-Build sieht man den roten Fehlerbalken, im
/// Release-Build bleibt die Fläche schlicht leer. Genau so ist es dem
/// Nutzer erschienen.
///
/// Der Test rendert die Karte in derselben Umgebung wie der Screen (also in
/// einer ListView) und besteht nur, wenn dabei keine Layout-Ausnahme fliegt.
void main() {
  Future<void> pumpInList(WidgetTester tester, Widget child) {
    return tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: ListView(children: [child]),
        ),
      ),
    );
  }

  testWidgets('Spendenkonto rendert in einer ListView ohne Layoutfehler',
      (tester) async {
    await pumpInList(
      tester,
      const DonationSummaryCard(
        summary: DonationSummary(totalDonated: 12.34, purchaseCount: 7),
      ),
    );

    expect(
      tester.takeException(),
      isNull,
      reason: 'Row(stretch) braucht in einer ListView ein IntrinsicHeight.',
    );
    expect(find.text('Dein Spendenkonto'), findsOneWidget);
    expect(find.text('gespendet'), findsOneWidget);
    expect(find.text('Einkäufe'), findsOneWidget);
    expect(find.text('Ø je Einkauf'), findsOneWidget);
  });

  testWidgets('ohne Einkäufe entfällt die Durchschnitts-Kachel',
      (tester) async {
    await pumpInList(
      tester,
      const DonationSummaryCard(
        summary: DonationSummary(totalDonated: 0, purchaseCount: 0),
      ),
    );

    expect(tester.takeException(), isNull);
    // Ein Durchschnitt aus null Einkäufen sagt nichts aus.
    expect(find.text('Ø je Einkauf'), findsNothing);
    expect(find.text('Einkäufe'), findsOneWidget);
  });

  testWidgets('ein einzelner Einkauf steht im Singular', (tester) async {
    await pumpInList(
      tester,
      const DonationSummaryCard(
        summary: DonationSummary(totalDonated: 0.25, purchaseCount: 1),
      ),
    );

    expect(tester.takeException(), isNull);
    expect(find.text('Einkauf'), findsOneWidget);
  });
}
