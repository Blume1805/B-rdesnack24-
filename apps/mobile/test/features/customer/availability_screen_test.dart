import 'package:boerdesnack24/features/customer/domain/entities/machine_availability.dart';
import 'package:boerdesnack24/features/customer/presentation/controllers/customer_providers.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/availability_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';

/// Verfügbarkeit für Kunden (V-016-d): Zustand, Preis und Pfand, aber keine
/// Stückzahlen.
void main() {
  setUpAll(() => initializeDateFormatting('de_DE'));

  testWidgets('zeigt Zustand, Preis und Pfand, aber keine Stückzahl',
      (tester) async {
    tester.view.physicalSize = const Size(1080, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          machineAvailabilityProvider('m1').overrideWith(
            (ref) async => const [
              MachineAvailability(
                productId: 'a',
                productName: 'Coca-Cola 0,5 l',
                availability: 'available',
                priceGross: 2.05,
                deposit: 0.25,
              ),
              MachineAvailability(
                productId: 'b',
                productName: 'Durstlöscher',
                availability: 'low',
                priceGross: 1.5,
              ),
              MachineAvailability(
                productId: 'c',
                productName: 'BiFi Carazza',
                availability: 'out',
                priceGross: 1.65,
              ),
            ],
          ),
          hasBenefitsProvider.overrideWith((ref) async => false),
        ],
        child: const MaterialApp(
          home: AvailabilityScreen(machineId: 'm1', title: 'Automat Mitte'),
        ),
      ),
    );
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 100));

    expect(find.text('verfügbar'), findsOneWidget);
    expect(find.text('bald leer'), findsOneWidget);
    expect(find.text('ausverkauft'), findsOneWidget);
    expect(find.textContaining('2,05'), findsWidgets);
    expect(find.textContaining('zzgl. 0,25'), findsOneWidget);
    // Keine Betriebsdaten: weder Stückzahl noch Kapazität.
    expect(find.textContaining('Stück'), findsNothing);
    expect(find.textContaining('von '), findsNothing);
    expect(find.byType(LinearProgressIndicator), findsNothing);

    // Timer beim Verlassen beenden, sonst meldet der Test einen offenen Timer.
    await tester.pumpWidget(const SizedBox());
  });
}
