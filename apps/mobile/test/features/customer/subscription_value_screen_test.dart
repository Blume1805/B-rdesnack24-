import 'package:boerdesnack24/core/pricing/pricing.dart';
import 'package:boerdesnack24/features/customer/presentation/controllers/customer_providers.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/subscription_value_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
      'SubscriptionValueScreen rendert Szenarien, Ersparnis-Tabelle und CTA',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 2200);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          hasSubscriptionProvider.overrideWith((ref) async => false),
          // Vorteile noch nicht aktiv (= nicht angemeldet): nur dann wirbt
          // die Seite überhaupt für die Anmeldung.
          hasBenefitsProvider.overrideWith((ref) async => false),
        ],
        child: const MaterialApp(home: SubscriptionValueScreen()),
      ),
    );
    await tester.pumpAndSettle();

    // Beide Szenario-Kacheln UND die Tabellen-Spalten sind da — das
    // schlägt fehl, wenn die Seite (wie beim Stretch-Row-Bug) nach dem
    // Intro abbricht.
    expect(find.text('KONSERVATIV'), findsWidgets);
    expect(find.text('NORMAL'), findsWidgets);

    // Ersparnis-Tabelle statt Break-even: monatlicher Einkauf je Zeile.
    // textContaining, weil Formatters.euro ein geschütztes Leerzeichen
    // vor das €-Zeichen setzt (de_DE) — ein exakter Vergleich wäre spröde.
    expect(find.text('EINKAUF'), findsOneWidget);
    expect(find.textContaining('20,00'), findsWidgets);
    expect(find.textContaining('240,00'), findsWidgets);

    // Abo-Zeilen darf es nicht mehr geben — die App ist kostenlos.
    expect(find.text('Monats-Abo'), findsNothing);
    expect(find.text('Jahres-Abo'), findsNothing);
    expect(find.text('Lifetime · Founders Edition'), findsNothing);

    // Der CTA wirbt für die Vorteile, nicht für einen Kauf.
    expect(find.text('Vorteile ansehen'), findsOneWidget);
  });

  testWidgets('mit aktiven Vorteilen entfällt der CTA', (tester) async {
    tester.view.physicalSize = const Size(1024, 2200);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          hasSubscriptionProvider.overrideWith((ref) async => false),
          hasBenefitsProvider.overrideWith((ref) async => true),
        ],
        child: const MaterialApp(home: SubscriptionValueScreen()),
      ),
    );
    await tester.pumpAndSettle();

    expect(find.text('Vorteile ansehen'), findsNothing);
    expect(
      find.text('Deine Vorteile sind aktiv — kostenlos, dauerhaft.'),
      findsOneWidget,
    );
  });

  testWidgets('der Link auf den One-Pager ist sichtbar', (tester) async {
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

    // Das PDF wurde am 2026-09-16 neu erzeugt und nennt keine Abo-Preise
    // mehr. Es darf deshalb wieder verlinkt werden (vgl. § 5 UWG).
    expect(Pricing.benefitsFreeForAll, isTrue);
    expect(find.text('Beispielrechnung hier klicken'), findsOneWidget);
  });
}
