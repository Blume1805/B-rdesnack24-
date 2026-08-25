import 'package:boerdesnack24/features/finance/domain/entities/finance_booking.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('FinanceBooking.fromJson liest eine sevDesk-Buchung', () {
    final b = FinanceBooking.fromJson({
      'id': 'aaa',
      'booking_date': '2026-06-15',
      'account_code': '4240',
      'account_name': 'Gas, Strom, Wasser',
      'direction': 'expense',
      'description': 'Abschlag Juni',
      'amount_net': 210.5,
      'amount_tax': 39.99,
      'amount_gross': 250.49,
      'tax_rate': 19,
      'source': 'sevdesk',
      'source_ref': '4711',
      'source_account_code': '4240',
    });

    expect(b.accountCode, '4240');
    expect(b.date, DateTime(2026, 6, 15));
    expect(b.isExpense, isTrue);
    expect(b.net, 210.5);
    expect(b.gross, 250.49);
    expect(b.sourceLabel, 'sevDesk');
    expect(b.kontoGeschaetzt, isFalse);
  });

  test('Buchung ohne Konto aus sevDesk gilt als geschaetzt', () {
    // Fällt das Herkunftskonto weg, sitzt die Buchung auf einem
    // Sammelkonto — das muss in der Oberfläche erkennbar bleiben, sonst
    // sieht eine geratene Zuordnung aus wie eine übernommene.
    final b = FinanceBooking.fromJson({
      'id': 'bbb',
      'booking_date': '2026-06-15',
      'account_code': '3400',
      'account_name': 'Wareneingang 19 % Vorsteuer',
      'direction': 'expense',
      'amount_net': 100,
      'tax_rate': 19,
      'source': 'sevdesk',
      'source_ref': '4712',
      'source_account_code': null,
    });

    expect(b.kontoGeschaetzt, isTrue);
    expect(b.description, isNull);
  });

  test('Manuelle Buchung gilt nie als geschaetzt', () {
    final b = FinanceBooking.fromJson({
      'id': 'ccc',
      'booking_date': '2026-06-01',
      'account_code': '8300',
      'account_name': 'Erlöse 7 % USt',
      'direction': 'revenue',
      'amount_net': 730,
      'tax_rate': 7,
      'source': 'manual',
    });

    expect(b.isRevenue, isTrue);
    expect(b.kontoGeschaetzt, isFalse);
    expect(b.sourceLabel, 'manuell');
  });

  test('Privatkonto ist weder Erloes noch Aufwand', () {
    // 1890 Privateinlagen: Kapitalkonto. Am 25.08.2026 zeigte die App alles,
    // was kein Erlös war, als „Aufwand" — zwei solche Buchungen ueber
    // 347,00 EUR standen dadurch als Kosten in der Auswertung.
    final b = FinanceBooking.fromJson({
      'id': 'priv',
      'booking_date': '2026-06-15',
      'account_code': '1890',
      'account_name': 'Privateinlagen',
      'direction': 'liability',
      'amount_net': 215,
      'tax_rate': 0,
      'source': 'sevdesk',
      'source_ref': '147932939-203065862',
      'source_account_code': '1890',
    });

    expect(b.isRevenue, isFalse);
    expect(b.isExpense, isFalse);
    expect(b.isNeutral, isTrue);
    expect(b.directionLabel, 'Privat/Kapital');
  });

  test('directionLabel benennt alle vier Richtungen', () {
    FinanceBooking mit(String richtung) => FinanceBooking.fromJson({
          'id': 'x',
          'booking_date': '2026-06-15',
          'account_code': '4930',
          'account_name': 'Bürobedarf',
          'direction': richtung,
          'amount_net': 1,
          'tax_rate': 19,
          'source': 'sevdesk',
        });
    expect(mit('revenue').directionLabel, 'Erlös');
    expect(mit('expense').directionLabel, 'Aufwand');
    expect(mit('liability').directionLabel, 'Privat/Kapital');
    expect(mit('asset').directionLabel, 'Bestand');
  });

  test('FinanceBookingPage zaehlt nicht gezeigte Buchungen', () {
    final p = FinanceBookingPage.fromJson({
      'total': 512,
      'rows': [
        {
          'id': 'x',
          'booking_date': '2026-06-15',
          'account_code': '4240',
          'account_name': 'Gas, Strom, Wasser',
          'direction': 'expense',
          'amount_net': 10,
          'tax_rate': 19,
          'source': 'sevdesk',
        },
      ],
    });

    expect(p.total, 512);
    expect(p.bookings, hasLength(1));
    expect(p.notShown, 511);
    expect(p.isEmpty, isFalse);
  });

  test('FinanceBookingPage vertraegt eine leere Antwort', () {
    final p = FinanceBookingPage.fromJson(const {});
    expect(p.total, 0);
    expect(p.isEmpty, isTrue);
    expect(p.notShown, 0);
  });
}
