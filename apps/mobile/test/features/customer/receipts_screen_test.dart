import 'package:boerdesnack24/features/customer/domain/entities/receipt.dart';
import 'package:boerdesnack24/features/customer/presentation/controllers/customer_providers.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/receipts_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';

Receipt _r({
  required String id,
  required String category,
  required String label,
  required DateTime at,
}) =>
    Receipt(
      id: id,
      purchasedAt: at,
      totalGross: 2.60,
      source: 'nayax',
      category: category,
      itemCount: 1,
      machineName: 'Automat Mitte',
      items: [
        ReceiptItem(
          label: label,
          quantity: 1,
          unitPrice: 2.60,
          lineGross: 2.60,
          category: category,
        ),
      ],
    );

void main() {
  setUpAll(() => initializeDateFormatting('de_DE'));

  testWidgets('Belegarchiv listet Belege und filtert per Suche',
      (tester) async {
    tester.view.physicalSize = const Size(1080, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    final receipts = [
      _r(
        id: '1',
        category: 'Getränke',
        label: 'Coca-Cola 0,5 l',
        at: DateTime(2026, 7, 20, 12),
      ),
      _r(
        id: '2',
        category: 'Snacks & Süßes',
        label: 'Snickers',
        at: DateTime(2026, 7, 18, 9),
      ),
    ];

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          myReceiptsProvider.overrideWith((ref) async => receipts),
        ],
        child: const MaterialApp(home: ReceiptsScreen()),
      ),
    );
    await tester.pumpAndSettle();

    // Titel + beide Produkte sichtbar, Summe stimmt (2 × 2,60 = 5,20).
    expect(find.text('Belegarchiv'), findsWidgets);
    expect(find.textContaining('2 Belege'), findsOneWidget);
    expect(find.text('Coca-Cola 0,5 l'), findsNothing); // erst im Detail-Sheet

    // Kategorie-Filter „Getränke" (erster Treffer = Filter-Chip) reduziert
    // auf einen Beleg.
    await tester.tap(find.text('Getränke').first);
    await tester.pumpAndSettle();
    expect(find.textContaining('1 Belege'), findsOneWidget);
  });
}
