import 'package:boerdesnack24/core/widgets/design_system/design_system.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';

void main() {
  setUpAll(() => initializeDateFormatting('de_DE'));

  Widget host(double? deposit) => MaterialApp(
        home: Scaffold(body: DepositNote(deposit)),
      );

  testWidgets('mit Pfand: „zzgl. 0,25 € Pfand"', (tester) async {
    await tester.pumpWidget(host(0.25));
    expect(
      find.textContaining(RegExp(r'^zzgl\. 0,25\s€ Pfand$')),
      findsOneWidget,
    );
  });

  testWidgets('ohne Pfand: kein Text, kein Platz', (tester) async {
    await tester.pumpWidget(host(0));
    expect(find.byType(Text), findsNothing);
    expect(tester.getSize(find.byType(DepositNote)), Size.zero);
  });
}
