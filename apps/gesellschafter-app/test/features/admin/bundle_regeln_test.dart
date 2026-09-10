import 'package:bs24_gesellschafter/features/admin/presentation/screens/bundles_screen.dart';
import 'package:flutter_test/flutter_test.dart';

/// Zwei Regeln entscheiden, ob ein Kombiangebot gespeichert werden darf.
/// Beide setzt zusätzlich `bundle_save` auf dem Server durch — hier wird
/// geprüft, dass die Maske sie vorher zeigt, statt den Fehler erst beim
/// Speichern zu melden.
void main() {
  group('bundleFehler', () {
    test('zwei Produkte und ein günstigerer Preis sind in Ordnung', () {
      expect(
        bundleFehler(positionen: 2, einzelSumme: 7.10, kombiPreis: 6.00),
        isNull,
      );
    });

    test('eine Position ist kein Kombiangebot', () {
      final f = bundleFehler(
        positionen: 1,
        einzelSumme: 4.00,
        kombiPreis: 3.50,
      );
      expect(f, isNotNull);
      expect(f, contains('mindestens zwei Produkte'));
    });

    test('keine Position ist erst recht keins', () {
      expect(
        bundleFehler(positionen: 0, einzelSumme: 0, kombiPreis: 0),
        isNotNull,
      );
    });

    test('Preis null wird abgewiesen', () {
      final f = bundleFehler(
        positionen: 2,
        einzelSumme: 7.10,
        kombiPreis: 0,
      );
      expect(f, contains('größer als null'));
    });

    test('gleich teuer wie einzeln ist kein Kombiangebot', () {
      final f = bundleFehler(
        positionen: 2,
        einzelSumme: 7.10,
        kombiPreis: 7.10,
      );
      expect(f, isNotNull);
      expect(f, contains('Falschaussage'));
    });

    test('teurer als einzeln erst recht nicht', () {
      expect(
        bundleFehler(positionen: 2, einzelSumme: 7.10, kombiPreis: 7.50),
        isNotNull,
      );
    });

    test('ein Cent Unterschied genügt', () {
      expect(
        bundleFehler(positionen: 2, einzelSumme: 7.10, kombiPreis: 7.09),
        isNull,
      );
    });
  });
}
