import 'package:boerdesnack24/features/customer/domain/entities/product_availability.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ProductFilter', () {
    test('Kategorie an- und wieder abwählen', () {
      const start = ProductFilter(query: 'cola');
      final on = start.toggleCategory('Getränke');
      expect(on.category, 'Getränke');
      expect(on.query, 'cola', reason: 'Der Suchbegriff bleibt erhalten.');

      final off = on.toggleCategory('Getränke');
      expect(off.category, isNull);
      expect(off.query, 'cola');
    });

    test('Kategoriewechsel verwirft den Getränke-Unterfilter', () {
      const drinks = ProductFilter(
        category: 'Getränke',
        subcategory: 'Energy Drinks',
      );
      // Sonst bliebe „Energy Drinks" aktiv, während „Eis" gewählt ist —
      // die Trefferliste wäre ohne erkennbaren Grund leer.
      final ice = drinks.toggleCategory('Eis');
      expect(ice.category, 'Eis');
      expect(ice.subcategory, isNull);
    });

    test('Unterfilter nur dort, wo es welche gibt', () {
      expect(
        const ProductFilter(category: 'Getränke').availableSubcategories,
        ['Kaltgetränke', 'Energy Drinks', 'Heißgetränke'],
      );
      for (final c in ['Süßwaren', 'Snacks', 'Eis']) {
        expect(
          ProductFilter(category: c).availableSubcategories,
          isEmpty,
          reason: '$c hat keine Feingliederung',
        );
      }
      expect(const ProductFilter().availableSubcategories, isEmpty);
    });

    test('Unterfilter umschalten lässt die Kategorie stehen', () {
      const base = ProductFilter(category: 'Getränke');
      final hot = base.toggleSubcategory('Heißgetränke');
      expect(hot.category, 'Getränke');
      expect(hot.subcategory, 'Heißgetränke');
      expect(hot.toggleSubcategory('Heißgetränke').subcategory, isNull);
    });

    test('isFiltered erkennt jeden aktiven Filter', () {
      expect(
        const ProductFilter(query: 'cola').isFiltered,
        isFalse,
        reason: 'Ein Suchbegriff allein ist kein Kategoriefilter.',
      );
      expect(const ProductFilter(category: 'Eis').isFiltered, isTrue);
    });

    test('withQuery ändert nur den Begriff', () {
      const f = ProductFilter(
        category: 'Getränke',
        subcategory: 'Kaltgetränke',
      );
      final q = f.withQuery('vio');
      expect(q.query, 'vio');
      expect(q.category, 'Getränke');
      expect(q.subcategory, 'Kaltgetränke');
    });

    test('gleicher Filter ist gleich — sonst lädt der Provider doppelt', () {
      expect(
        const ProductFilter(query: 'a', category: 'Eis'),
        const ProductFilter(query: 'a', category: 'Eis'),
      );
    });
  });

  group('ProductAvailability', () {
    ProductAvailability of(Map<String, dynamic> j) =>
        ProductAvailability.fromJson(j);

    test('Anschrift setzt sich aus den vorhandenen Teilen zusammen', () {
      expect(
        of({
          'machine_id': '1',
          'street': 'Sülldorfer Str. 3A',
          'zip': '39171',
          'city': 'Sülzetal',
        }).addressLine,
        'Sülldorfer Str. 3A, 39171 Sülzetal',
      );
    });

    test('ohne Standortdaten bleibt die Anschrift leer statt halb', () {
      // Die Automaten tragen aktuell noch Platzhalter-Standorte; dann soll
      // die Karte nur den Namen zeigen und keine Bruchstück-Adresse.
      expect(of({'machine_id': '1'}).addressLine, isNull);
      expect(of({'machine_id': '1', 'city': ''}).addressLine, isNull);
    });

    test('inStock hängt an der Stückzahl, nicht am Status-Text', () {
      expect(of({'machine_id': '1', 'quantity': 3}).inStock, isTrue);
      expect(of({'machine_id': '1', 'quantity': 0}).inStock, isFalse);
    });
  });
}
