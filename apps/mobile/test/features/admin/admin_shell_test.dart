import 'package:boerdesnack24/features/admin/presentation/widgets/admin_shell.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('unterdrueckteKennzahl', () {
    // Diese Regel ist der Unterschied zwischen einer zulässigen und einer
    // unzulässigen Auswertung. Sie wird deshalb an ihren Rändern geprüft,
    // nicht nur im Normalfall.

    test('unterdrückter Wert nennt die Schwelle, nie die Zahl', () {
      expect(unterdrueckteKennzahl(7, true, 30), 'weniger als 30');
      expect(unterdrueckteKennzahl(29, true, 30), 'weniger als 30');
    });

    test('unterdrückter Wert zeigt auch dann keine Zahl, wenn eine da ist', () {
      // Der gefährliche Fall: Die Datenbank liefert versehentlich doch einen
      // Wert MIT gesetztem Unterdrückungsmerkmal. Dann gilt das Merkmal.
      final ausgabe = unterdrueckteKennzahl(12, true, 30);
      expect(ausgabe.contains('12'), isFalse);
      expect(ausgabe, 'weniger als 30');
    });

    test('unterdrückter Wert wird niemals zu 0', () {
      expect(unterdrueckteKennzahl(null, true, 30), isNot('0'));
      expect(unterdrueckteKennzahl(0, true, 30), 'weniger als 30');
    });

    test('nicht unterdrückter Wert wird unverändert gezeigt', () {
      expect(unterdrueckteKennzahl(31, false, 30), '31');
      expect(unterdrueckteKennzahl(1204, false, 30), '1204');
    });

    test('fehlender Wert heißt „keine Angabe", nicht 0', () {
      expect(unterdrueckteKennzahl(null, false, 30), 'keine Angabe');
    });

    test('Schwelle kommt aus den Daten, ist nicht fest verdrahtet', () {
      expect(unterdrueckteKennzahl(5, true, 50), 'weniger als 50');
    });
  });

  group('adminErrorText', () {
    // Ein Fehlercode darf nie im sichtbaren Text landen. Die Prüfung ist
    // bewusst zweiteilig: richtige Aussage UND kein Code.

    test('42501 wird zur Berechtigungsaussage ohne Code', () {
      final text = adminErrorText(
        Exception(
          'PostgrestException(code: 42501, message: permission denied)',
        ),
      );
      expect(text, contains('Berechtigung'));
      expect(text.contains('42501'), isFalse);
    });

    test('P0002 wird zum Leerzustand ohne Code', () {
      final text = adminErrorText(Exception('code: P0002 not found'));
      expect(text, contains('keine Daten'));
      expect(text.contains('P0002'), isFalse);
    });

    test('PGRST202 wird als Programmierfehler benannt', () {
      // Genau dieser Code wäre beim Partnerportal aufgetreten: richtige
      // Funktion, falscher Parametername. Er bedeutet nie „Server kaputt".
      final text = adminErrorText(Exception('PGRST202 function not found'));
      expect(text, contains('Programmierfehler'));
      expect(text.contains('PGRST202'), isFalse);
    });

    test('unbekannter Fehler bleibt allgemein und ohne Innenleben', () {
      final text = adminErrorText(Exception('SocketException: host lookup'));
      expect(text, contains('nicht geladen werden'));
      expect(text.contains('SocketException'), isFalse);
    });
  });
}
