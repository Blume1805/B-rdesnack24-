import 'package:bs24_kunden/features/customer/domain/entities/product_detail.dart';
import 'package:flutter_test/flutter_test.dart';

/// Der Unterschied zwischen „nicht erfasst" und „geprüft, keines enthalten"
/// entscheidet darüber, ob die App einem Allergiker Entwarnung gibt.
///
/// Bis zum 10.09.2026 gab es ihn nicht: `allergens` wurde mit `?? const []`
/// gelesen, NULL und leere Liste kamen als dasselbe an, und der
/// Produktbildschirm meldete daraufhin grün „Ohne Allergene". Für alle 66
/// Produkte, von denen keines geprüfte Angaben trägt.
void main() {
  group('ProductDetail.allergens', () {
    Map<String, dynamic> basis(Object? allergens) => {
          'id': 'p1',
          'name': 'Popcrn Caramel & Seasalt',
          'category': 'Snacks',
          if (allergens != null) 'allergens': allergens,
        };

    test('fehlendes Feld heißt nicht erfasst, nicht allergenfrei', () {
      expect(ProductDetail.fromJson(basis(null)).allergens, isNull);
    });

    test('ausdrückliches NULL heißt ebenfalls nicht erfasst', () {
      final j = basis(null)..['allergens'] = null;
      expect(ProductDetail.fromJson(j).allergens, isNull);
    });

    test('leere Liste heißt geprüft und keines enthalten', () {
      expect(ProductDetail.fromJson(basis(<String>[])).allergens, isEmpty);
    });

    test('gefüllte Liste kommt vollständig an', () {
      final d = ProductDetail.fromJson(basis(['Milch', 'Soja']));
      expect(d.allergens, ['Milch', 'Soja']);
    });

    test('Zutatenverzeichnis fehlt, solange es nicht erfasst ist', () {
      expect(ProductDetail.fromJson(basis(null)).ingredients, isNull);
    });

    test('Zutatenverzeichnis kommt im Wortlaut an', () {
      final j = basis(['Milch', 'Soja'])
        ..['ingredients'] = 'Karamellzucker (enthält Sojaöl), Mais. '
            'Kann Spuren von Schalenfrüchten enthalten.';
      final d = ProductDetail.fromJson(j);
      expect(d.ingredients, contains('Sojaöl'));
      expect(d.ingredients, contains('Kann Spuren'));
    });
  });
}
