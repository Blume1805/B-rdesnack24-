import 'package:boerdesnack24/features/customer/domain/entities/customer_models.dart';
import 'package:boerdesnack24/features/customer/domain/entities/offer.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Offer.fromJson liest Felder', () {
    final o = Offer.fromJson({
      'id': 'o1',
      'title': 'Kaffee -20%',
      'kind': 'weekly',
      'description': 'Diese Woche',
      'valid_to': '2026-07-01',
    });
    expect(o.title, 'Kaffee -20%');
    expect(o.kind, 'weekly');
    expect(o.validTo, isNotNull);
  });

  test('CustomerPrice liest Produktname aus Join', () {
    final p = CustomerPrice.fromJson({
      'price_net': 1.49,
      'products': {'name': 'Wasser 0,5l'},
    });
    expect(p.productName, 'Wasser 0,5l');
    expect(p.priceNet, 1.49);
  });

  test('Recommendation toleriert fehlenden Join', () {
    final r = Recommendation.fromJson({'score': 0.8, 'reason': null});
    expect(r.productName, '—');
    expect(r.score, 0.8);
  });
}
