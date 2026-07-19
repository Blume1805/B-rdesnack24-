import 'package:boerdesnack24/features/customer/presentation/controllers/customer_providers.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/subscription_value_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
      'SubscriptionValueScreen rendert Szenarien, Tabelle, PDF-Link und CTA',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 2200);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          hasSubscriptionProvider.overrideWith((ref) async => false),
        ],
        child: const MaterialApp(home: SubscriptionValueScreen()),
      ),
    );
    await tester.pumpAndSettle();

    // Der PDF-Link (schwarz/fett) ist sichtbar.
    expect(find.text('Beispielrechnung hier klicken'), findsOneWidget);

    // Beide Szenario-Kacheln UND die Tabellen-Spalten sind da — das
    // schlägt fehl, wenn die Seite (wie beim Stretch-Row-Bug) nach dem
    // Intro abbricht.
    expect(find.text('KONSERVATIV'), findsWidgets);
    expect(find.text('NORMAL'), findsWidgets);
    expect(find.text('Monats-Abo'), findsOneWidget);
    expect(find.text('Jahres-Abo'), findsOneWidget);
    expect(find.text('Lifetime'), findsOneWidget);

    // Ohne Abo wirbt der CTA für die Abo-Wahl.
    expect(find.text('Abo wählen — ab 1 € im Monat'), findsOneWidget);
  });
}
