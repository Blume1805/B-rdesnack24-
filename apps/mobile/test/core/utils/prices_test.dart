import 'package:boerdesnack24/core/utils/prices.dart';
import 'package:boerdesnack24/features/customer/domain/entities/offer.dart';
import 'package:boerdesnack24/features/customer/domain/entities/receipt.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';

/// Preisangabe nach PAngV (COMPLIANCE V-016): Brutto statt Netto (§ 3),
/// Pfand neben dem Preis statt darin (§ 7).
void main() {
  setUpAll(() => initializeDateFormatting('de_DE'));

  group('Prices', () {
    test('Brutto auf den Cent, wie der Automat kassiert', () {
      // Coca-Cola 0,5 l nach der Migration: 1,7227 netto zu 19 % = 2,05 €.
      expect(Prices.gross(1.7227, 19), 2.05);
      // Müllermilch zu 7 %: 1,1682 netto = 1,25 €.
      expect(Prices.gross(1.1682, 7), 1.25);
    });

    test('Pfandhinweis nur, wenn es Pfand gibt', () {
      expect(
        Prices.depositNote(0.25),
        matches(RegExp(r'^zzgl\. 0,25\s€ Pfand$')),
      );
      expect(Prices.depositNote(0), isNull);
      expect(Prices.depositNote(null), isNull);
    });
  });

  group('Offer', () {
    Map<String, dynamic> row({Object? tax = 19, Object? deposit = 0.25}) => {
          'id': 'o1',
          'title': 'Coca-Cola 0,5 l',
          'kind': 'daily',
          'regular_price_net': 1.7227,
          'offer_price_net': 1.5504,
          'discount_percent': 10,
          'tax_rate': tax,
          'deposit': deposit,
        };

    test('zeigt Brutto, nicht Netto', () {
      final o = Offer.fromJson(row());
      expect(o.hasPrice, isTrue);
      expect(o.regularGross, 2.05);
      expect(o.offerGross, 1.84);
      expect(o.deposit, 0.25);
    });

    test('ohne Steuersatz kein Preis statt eines Nettopreises', () {
      final o = Offer.fromJson(row(tax: null));
      expect(o.hasPrice, isFalse);
      expect(o.regularGross, isNull);
      expect(o.offerGross, isNull);
    });

    test('ohne Pfandspalte (App vor der Migration) gilt 0', () {
      final j = row()..remove('deposit');
      expect(Offer.fromJson(j).deposit, 0);
    });
  });

  group('PersonalOffer', () {
    test('Steuersatz, Pfand und Produkt überstehen den Offline-Cache', () {
      final o = PersonalOffer(
        id: 'p1',
        title: 'Eistee',
        regularPriceNet: 1.6387,
        offerPriceNet: 1.47,
        discountPercent: 10,
        redemptionCode: '123456',
        validFrom: DateTime(2026, 9, 27),
        validTo: DateTime(2026, 10, 4),
        source: PersonalOfferSource.auto,
        productId: 'prod',
        taxRate: 19,
        deposit: 0.25,
      );
      final back = PersonalOffer.fromJson(o.toJson());
      expect(back.productId, 'prod');
      expect(back.taxRate, 19);
      expect(back.deposit, 0.25);
      expect(back.regularGross, 1.95);
      expect(back.offerGross, 1.75);
    });

    test('ohne Steuersatz kein Preis', () {
      final o = PersonalOffer.fromJson({
        'id': 'p2',
        'regular_price_net': 1.5,
        'offer_price_net': 1.35,
        'discount_percent': 10,
      });
      expect(o.hasPrice, isFalse);
      expect(o.offerGross, isNull);
    });
  });

  group('Receipt', () {
    test('Pfand je Position und je Kauf aus my_receipts', () {
      final r = Receipt.fromJson({
        'id': 'k1',
        'purchased_at': '2026-09-27T10:00:00Z',
        'total_gross': 2.30,
        'deposit_total': 0.25,
        'items': [
          {
            'label': 'Coca-Cola 0,5 l',
            'quantity': 1,
            'unit_price': 2.30,
            'unit_deposit': 0.25,
            'line_gross': 2.30,
          },
        ],
      });
      expect(r.depositTotal, 0.25);
      expect(r.items.single.unitDeposit, 0.25);
    });

    test('alte Antwort ohne Pfandfelder: 0', () {
      final r = Receipt.fromJson({
        'id': 'k2',
        'total_gross': 1.5,
        'items': [
          {'label': 'Durstlöscher', 'quantity': 1, 'unit_price': 1.5},
        ],
      });
      expect(r.depositTotal, 0);
      expect(r.items.single.unitDeposit, 0);
    });
  });
}
