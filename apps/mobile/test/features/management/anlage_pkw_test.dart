import 'package:boerdesnack24/features/management/presentation/screens/anlage_pkw_screen.dart';
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

  group('Sperre nach der Freigabe', () {
    // Durchgesetzt wird die Sperre in der Datenbank (Trigger
    // `app.anlage_pkw_sperre`, nachgestellt am 26.08.2026: sechs
    // Schreibversuche im freigegebenen Jahr, alle mit 42501 abgewiesen).
    // Hier geht es darum, dass die Oberfläche denselben Zustand liest und
    // nicht selbst rät.

    test('gesperrt kommt aus der Auswertung, nicht aus einer Vermutung', () {
      expect(anlageIstGesperrt({'gesperrt': true}), isTrue);
      expect(anlageIstGesperrt({'gesperrt': false}), isFalse);
      // Fehlt die Angabe, wird NICHT gesperrt: Die Datenbank entscheidet,
      // und eine Oberfläche, die vorsorglich sperrt, nimmt dem Nutzer die
      // Korrektur weg, die er darf.
      expect(anlageIstGesperrt(const {}), isFalse);
      expect(anlageIstGesperrt(null), isFalse);
    });

    test('die Fehlermeldung der Datenbank wird erkannt', () {
      // Die Sperre wirft einen verständlichen Satz. Ihn durch ein
      // allgemeines „Fehlgeschlagen" zu ersetzen, hiesse die einzige
      // Erklärung wegzuwerfen, die der Nutzer bekommt.
      expect(
        istSperrfehler(
          'PostgrestException(message: Die Anlage PKW 2026 ist freigegeben '
          'und unterschrieben. Korrekturen sind nicht mehr möglich.)',
        ),
        isTrue,
      );
      expect(istSperrfehler('Verbindung unterbrochen'), isFalse);
    });
  });
}
