import 'package:boerdesnack24/core/pricing/pricing.dart';
import 'package:boerdesnack24/features/customer/domain/entities/product_detail.dart';
import 'package:flutter_test/flutter_test.dart';

/// Regressionstest zum Preisfehler in Produktsuche und Favoriten-Slider.
///
/// `search_products` und `top_products_by_category` lieferten nur
/// `list_price_net`, aber kein `tax_rate`. `RankedProduct.grossPrice` fällt
/// ohne Steuersatz auf 19 % zurück — dadurch wurden alle Artikel mit 7 % USt
/// (Eis, Snacks, Süßwaren, Latte Macchiato) zu teuer angezeigt:
/// Ben & Jerry's stand mit 6,45 € statt 5,80 € in der Trefferliste.
///
/// Der Test hält beides fest: die Umrechnung selbst und die Annahme, dass
/// die RPC den Steuersatz mitliefert.
void main() {
  RankedProduct fromRpc(Map<String, dynamic> row) =>
      RankedProduct.fromJson(row);

  group('RankedProduct.grossPrice', () {
    test('7 % USt ergibt den Listenpreis (Ben & Jerry\'s 5,80 €)', () {
      final p = fromRpc({
        'id': 'a',
        'name': "Ben & Jerry's",
        'category': 'Eis',
        'list_price_net': 5.4206,
        'tax_rate': 7.0,
      });
      expect(p.grossPrice, 5.80);
    });

    test('19 % USt ergibt den Listenpreis (Cola 2,30 €)', () {
      final p = fromRpc({
        'id': 'b',
        'name': 'Coca-Cola 0,5 l',
        'category': 'Getränke',
        'list_price_net': 1.9328,
        'tax_rate': 19.0,
      });
      expect(p.grossPrice, 2.30);
    });

    test('Latte Macchiato liegt bei 7 % auf 2,20 €', () {
      final p = fromRpc({
        'id': 'c',
        'name': 'Latte Macchiato',
        'category': 'Heißgetränke',
        'list_price_net': 2.0561,
        'tax_rate': 7.0,
      });
      expect(p.grossPrice, 2.20);
    });

    test(
        'fehlendes tax_rate verfälscht den Preis — deshalb muss die RPC '
        'den Satz mitliefern', () {
      final ohneSatz = fromRpc({
        'id': 'd',
        'name': "Ben & Jerry's",
        'category': 'Eis',
        'list_price_net': 5.4206,
      });
      // Dokumentiert den Fehlerfall: ohne Steuersatz greift der 19-%-Default.
      expect(ohneSatz.grossPrice, isNot(5.80));
      expect(ohneSatz.grossPrice, 6.45);
    });
  });

  group('App-Preis in der Trefferkachel', () {
    test('5 % unter dem Automatenpreis, kaufmännisch gerundet', () {
      expect(Pricing.appPriceGross(5.80, rate: Pricing.appDiscountRate), 5.51);
      expect(Pricing.appPriceGross(2.30, rate: Pricing.appDiscountRate), 2.19);
      expect(Pricing.appPriceGross(1.50, rate: Pricing.appDiscountRate), 1.43);
    });

    test('App-Preis liegt immer unter dem Normalpreis', () {
      for (final gross in [0.80, 1.20, 2.20, 2.50, 5.80]) {
        final app = Pricing.appPriceGross(gross, rate: Pricing.appDiscountRate);
        expect(app, lessThan(gross), reason: 'bei $gross €');
      }
    });
  });
}
