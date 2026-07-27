import 'package:boerdesnack24/features/customer/presentation/screens/offers_tab.dart';
import 'package:flutter_test/flutter_test.dart';

/// Regressionstest zu „man sieht nicht, welche Buchstaben man eintippt".
///
/// Die Suchleiste blendet sich beim Herunterscrollen aus. Beim Öffnen der
/// Tastatur scrollt Flutter das fokussierte Feld aber selbst in den
/// sichtbaren Bereich — das zählte als Herunterscrollen und klappte die
/// Suche auf Höhe null zusammen, während man hineintippte.
void main() {
  group('searchBarVisible', () {
    test('bleibt bei Fokus sichtbar, egal wie gescrollt wird', () {
      expect(
        searchBarVisible(focused: true, scrollingDown: true, offset: 900),
        isTrue,
        reason: 'Fokus muss jede Ausblende-Regel überstimmen.',
      );
    });

    test('blendet ohne Fokus beim Herunterscrollen aus', () {
      expect(
        searchBarVisible(focused: false, scrollingDown: true, offset: 900),
        isFalse,
      );
    });

    test('kommt beim Hochscrollen zurück', () {
      expect(
        searchBarVisible(focused: false, scrollingDown: false, offset: 900),
        isTrue,
      );
    });

    test('bleibt ganz oben stehen', () {
      expect(
        searchBarVisible(focused: false, scrollingDown: true, offset: 10),
        isTrue,
      );
    });
  });
}
