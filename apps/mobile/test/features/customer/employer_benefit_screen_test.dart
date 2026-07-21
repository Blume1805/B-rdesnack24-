import 'package:boerdesnack24/features/customer/presentation/screens/employer_benefit_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
      'EmployerBenefitScreen rendert Kernzahl, Abgrenzung und PDF-Link',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 2600);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      const MaterialApp(home: EmployerBenefitScreen()),
    );
    await tester.pumpAndSettle();

    // Kernzahl (50 €) und Rechtsgrundlage sind sichtbar.
    expect(find.text('50 € / Monat'), findsOneWidget);
    expect(
      find.text('steuer- und SV-frei — § 8 Abs. 2 Satz 11 EStG'),
      findsOneWidget,
    );

    // Abgrenzung zum Verpflegungszuschuss ist enthalten — das ist der
    // fachlich kritischste Teil dieser Seite.
    expect(
      find.text('Wichtige Abgrenzung: kein Verpflegungszuschuss'),
      findsOneWidget,
    );

    // PDF-Link zum Weiterleiten an den Arbeitgeber ist da.
    expect(
      find.text('Als PDF für deinen Arbeitgeber herunterladen'),
      findsOneWidget,
    );
  });
}
