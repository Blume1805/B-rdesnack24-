import 'package:bs24_kunden/features/customer/domain/entities/bundle.dart';
import 'package:flutter_test/flutter_test.dart';

/// Die Aufteilung des Bundlepreises macht der Server (`bundle_split`), weil
/// sie über zwei Steuersätze läuft und buchungsrelevant ist. Der Client
/// zeigt nur an — geprüft wird hier deshalb das Anzeigen, nicht das
/// Rechnen: dass die Zahlen ankommen, und dass die Karte keine Ersparnis
/// behauptet, die es nicht gibt.
void main() {
  Map<String, dynamic> beispiel({
    double preis = 6.00,
    double regulaer = 7.10,
  }) =>
      {
        'id': 'b1',
        'code': 'KINO',
        'title': 'Cola + Popcorn',
        'description': 'Der Feierabend-Klassiker.',
        'price_gross': preis,
        'regular_gross': regulaer,
        'valid_to': '2026-12-31',
        'items': [
          {
            'product_id': 'p-cola',
            'name': 'Coca-Cola 0,5 l',
            'quantity': 1,
            'regular_gross': 3.10,
            'bundle_gross': 2.62,
          },
          {
            'product_id': 'p-popcorn',
            'name': 'Popcrn Caramel & Seasalt',
            'quantity': 1,
            'regular_gross': 4.00,
            'bundle_gross': 3.38,
          },
        ],
      };

  test('Bundle.fromJson liest Kopf und Positionen', () {
    final b = Bundle.fromJson(beispiel());
    expect(b.title, 'Cola + Popcorn');
    expect(b.priceGross, 6.00);
    expect(b.regularGross, 7.10);
    expect(b.items, hasLength(2));
    expect(b.items.first.name, 'Coca-Cola 0,5 l');
    expect(b.validTo?.year, 2026);
  });

  test('Die Positionen summieren sich auf den Bundlepreis', () {
    final b = Bundle.fromJson(beispiel());
    final summe = b.items.fold<double>(0, (s, i) => s + i.bundleGross);
    expect(summe, closeTo(b.priceGross, 0.005));
  });

  test('Ersparnis wird aus den beiden Preisen gebildet', () {
    final b = Bundle.fromJson(beispiel());
    expect(b.savings, closeTo(1.10, 0.001));
    expect(b.savingsPercent, closeTo(15.49, 0.01));
    expect(b.isSaving, isTrue);
  });

  test('Kein durchgestrichener Preis, wenn das Bundle nicht spart', () {
    // Kann durch Handpflege entstehen: Bundlepreis gleich hoch oder höher
    // als die Summe der Einzelpreise. Ein durchgestrichener Preis wäre dann
    // eine irreführende Angabe, deshalb schaltet die Karte ihn ab.
    final gleich = Bundle.fromJson(beispiel(preis: 7.10));
    expect(gleich.isSaving, isFalse);
    expect(gleich.savings, closeTo(0, 0.001));

    final teurer = Bundle.fromJson(beispiel(preis: 7.50));
    expect(teurer.isSaving, isFalse);
    expect(teurer.savings, lessThan(0));
  });

  test('Fehlende Positionen ergeben eine leere Liste, keinen Absturz', () {
    final b = Bundle.fromJson({
      'id': 'b2',
      'title': 'Leer',
      'price_gross': 1.0,
      'regular_gross': 1.0,
    });
    expect(b.items, isEmpty);
    expect(b.validTo, isNull);
    expect(b.isSaving, isFalse);
  });

  test('Menge größer 1 kommt an', () {
    final j = beispiel();
    (j['items'] as List)[1]['quantity'] = 2;
    final b = Bundle.fromJson(j);
    expect(b.items[1].quantity, 2);
  });
}
