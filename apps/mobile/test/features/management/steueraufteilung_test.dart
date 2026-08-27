import 'package:boerdesnack24/features/management/presentation/screens/firmenkunden_screen.dart';
import 'package:flutter_test/flutter_test.dart';

/// Die Rechenregel hinter der Firmenrechnung, in Dart nachgestellt.
///
/// Anlass (27.08.2026): `app.business_invoice_basis` nahm den Automatenpreis
/// als NETTO und schlug die Steuer oben drauf. Aus 4,99 € am Automaten wären
/// 5,94 € auf der Rechnung geworden. Gerechnet wird in der Datenbank, nicht
/// hier — dieser Test hält die Regel fest, damit sie beim nächsten Umbau
/// nicht still kippt, und dokumentiert die Zahlen, die am laufenden System
/// herausgekommen sind.
///
/// Die Regel: Der Preis am Automaten ist BRUTTO. Netto wird herausgerechnet,
/// die Steuer ist die Differenz — nie ein zweites Mal gerundetes Produkt,
/// sonst geht `netto + steuer = brutto` nicht auf.
({double netto, double steuer}) aufteilen(double brutto, double satzProzent) {
  final netto = (brutto / (1 + satzProzent / 100) * 100).roundToDouble() / 100;
  return (netto: netto, steuer: (brutto * 100).roundToDouble() / 100 - netto);
}

void main() {
  group('Steueraufteilung', () {
    test('7 % auf 3,00 € — wie am 27.08.2026 gemessen', () {
      final a = aufteilen(3.00, 7);
      expect(a.netto, 2.80);
      expect(a.steuer, closeTo(0.20, 0.0001));
      expect(a.netto + a.steuer, closeTo(3.00, 0.0001));
    });

    test('19 % auf 7,47 € — wie am 27.08.2026 gemessen', () {
      final a = aufteilen(7.47, 19);
      expect(a.netto, 6.28);
      expect(a.steuer, closeTo(1.19, 0.0001));
      expect(a.netto + a.steuer, closeTo(7.47, 0.0001));
    });

    test('die Summe geht über beide Sätze auf', () {
      final a = aufteilen(3.00, 7);
      final b = aufteilen(7.47, 19);
      expect(a.netto + b.netto, closeTo(9.08, 0.0001));
      expect(a.steuer + b.steuer, closeTo(1.39, 0.0001));
      expect(
        a.netto + a.steuer + b.netto + b.steuer,
        closeTo(10.47, 0.0001),
      );
    });

    test('der falsche Weg wäre aufgefallen — und woran', () {
      // Der alte Weg: brutto * (1 + satz) statt brutto / (1 + satz).
      const brutto = 4.99;
      final falsch = brutto * 1.19;
      expect(falsch, greaterThan(brutto));
      // Genau diese Abweichung hat die Grundlage gemeldet: Die Summe der
      // Posten passte nicht mehr zum Kaufbetrag.
      expect((falsch - brutto).abs(), greaterThan(0.02));
    });
  });

  group('firmenFehlertext zu Standorten', () {
    test('ein vergebener Standort wird erklärt', () {
      final t = firmenFehlertext(
        Exception('Dieser Standort ist bereits einem anderen Firmenkunden '
            'zugeordnet.'),
      );
      expect(t, contains('gehört schon zu einer anderen Firma'));
    });

    test('der fehlende sevDesk-Kontakt sagt, wo er einzutragen ist', () {
      final t = firmenFehlertext(
        Exception('Für diesen Firmenkunden ist kein sevDesk-Kontakt '
            'hinterlegt.'),
      );
      expect(t, contains('Stammdaten'));
    });

    test('die unvollständige Anschrift nennt den Grund', () {
      final t = firmenFehlertext(
        Exception('Rechnungsanschrift des Firmenkunden ist unvollständig '
            '(Straße, PLZ, Ort).'),
      );
      expect(t, contains('§ 14 UStG'));
    });
  });
}
