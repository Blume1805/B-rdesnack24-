import 'package:boerdesnack24/features/management/presentation/screens/anlagen_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Anlage zur Ermittlung der individuellen PKW-Kosten, Auftrag vom
/// 25.08.2026. Die Rechnung selbst steht in der RPC `anlage_pkw` und ist
/// dort gegen Testzahlen geprüft; hier geht es um die Oberfläche.
void main() {
  testWidgets('Anlagen-Übersicht führt zur PKW-Anlage', (tester) async {
    tester.view.physicalSize = const Size(1024, 2000);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      const MaterialApp(home: AnlagenScreen()),
    );
    await tester.pumpAndSettle();

    expect(find.text('Anlagen zum Jahresabschluss'), findsOneWidget);
    expect(find.text('PKW-Kosten'), findsOneWidget);
    expect(find.text('Kilometersatz und Nutzungseinlage'), findsOneWidget);
  });
}
