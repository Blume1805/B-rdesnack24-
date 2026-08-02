import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:boerdesnack24/features/customer/data/personal_offer_cache.dart';
import 'package:boerdesnack24/features/customer/domain/entities/offer.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  // Gültigkeit relativ zu heute, nicht als festes Datum: Der Cache wirft
  // abgelaufene Coupons absichtlich raus, feste Fixture-Daten lassen den
  // Test deshalb irgendwann von selbst umfallen. Genau das ist am
  // 01.08.2026 passiert, als die alten Werte (01.–31.07.2026) abliefen —
  // der Roundtrip-Test bekam plötzlich null statt zwei Coupons zurück.
  PersonalOffer offer({String id = 'o1'}) => PersonalOffer(
        id: id,
        title: 'Club-Mate',
        regularPriceNet: 2.10,
        offerPriceNet: 1.89,
        discountPercent: 10,
        redemptionCode: '123456',
        validFrom: DateTime.now().subtract(const Duration(days: 1)),
        validTo: DateTime.now().add(const Duration(days: 30)),
        source: PersonalOfferSource.loyalty,
        imageUrl: null,
      );

  test('Roundtrip: save → load liefert identische Coupons inkl. Code',
      () async {
    SharedPreferences.setMockInitialValues({});
    await PersonalOfferCache.save([offer(), offer(id: 'o2')]);
    final loaded = await PersonalOfferCache.load();
    expect(loaded, isNotNull);
    expect(loaded!.length, 2);
    expect(loaded.first.redemptionCode, '123456');
    expect(loaded.first.source, PersonalOfferSource.loyalty);
    expect(loaded.first.offerPriceNet, 1.89);
    expect(loaded[1].id, 'o2');
  });

  test('load ohne Snapshot liefert null (kein Crash)', () async {
    SharedPreferences.setMockInitialValues({});
    expect(await PersonalOfferCache.load(), isNull);
  });

  test('lastSyncedAt wird beim save gesetzt', () async {
    SharedPreferences.setMockInitialValues({});
    expect(await PersonalOfferCache.lastSyncedAt(), isNull);
    await PersonalOfferCache.save([offer()]);
    final ts = await PersonalOfferCache.lastSyncedAt();
    expect(ts, isNotNull);
    expect(DateTime.now().difference(ts!).inSeconds, lessThan(10));
  });

  // ── Regression: „Angebote auf Produkte, die es nicht gibt" ──────────────
  //
  // Der Cache hatte kein Ablaufdatum. Nach dem Katalogwechsel zeigte der
  // Kundenbereich deshalb weiter Coupons auf Artikel aus dem alten Sortiment
  // („Airwaves Cool Cassis Dragees 50St") — die Datenbank war längst sauber,
  // der Snapshot im Gerät nicht.
  group('Cache-Hygiene', () {
    PersonalOffer relOffer({
      String id = 'o1',
      String title = 'Test-Coupon',
      required Duration validFor,
    }) =>
        PersonalOffer(
          id: id,
          title: title,
          regularPriceNet: 2.0,
          offerPriceNet: 1.8,
          discountPercent: 10,
          redemptionCode: '123456',
          validFrom: DateTime.now().subtract(const Duration(days: 1)),
          validTo: DateTime.now().add(validFor),
          source: PersonalOfferSource.loyalty,
        );

    test('Snapshot älter als 14 Tage wird verworfen', () async {
      SharedPreferences.setMockInitialValues({});
      await PersonalOfferCache.save(
        [relOffer(validFor: const Duration(days: 5))],
      );

      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        'offline_personal_offers_ts_v2',
        DateTime.now().subtract(const Duration(days: 15)).toIso8601String(),
      );

      expect(await PersonalOfferCache.load(), isNull);
    });

    test('abgelaufene Coupons fallen einzeln raus', () async {
      SharedPreferences.setMockInitialValues({});
      await PersonalOfferCache.save([
        relOffer(id: 'alt', validFor: const Duration(days: -2)),
        relOffer(id: 'neu', validFor: const Duration(days: 3)),
      ]);

      final loaded = await PersonalOfferCache.load();
      expect(loaded!.map((o) => o.id), ['neu']);
    });

    test('sind alle Coupons abgelaufen, kommt gar nichts zurück', () async {
      SharedPreferences.setMockInitialValues({});
      await PersonalOfferCache.save(
        [relOffer(validFor: const Duration(days: -1))],
      );
      // Lieber kein Angebot zeigen als ein erfundenes.
      expect(await PersonalOfferCache.load(), isNull);
    });

    test('der alte v1-Schlüssel wird nicht mehr gelesen', () async {
      // Genau dort lagen die Coupons auf Produkten, die es nicht mehr gibt.
      SharedPreferences.setMockInitialValues({
        'offline_personal_offers_v1': '[]',
        'offline_personal_offers_ts_v1': DateTime.now().toIso8601String(),
      });
      expect(await PersonalOfferCache.load(), isNull);
    });

    test('clear entfernt Snapshot und Zeitstempel', () async {
      SharedPreferences.setMockInitialValues({});
      await PersonalOfferCache.save(
        [relOffer(validFor: const Duration(days: 5))],
      );
      await PersonalOfferCache.clear();
      expect(await PersonalOfferCache.load(), isNull);
      expect(await PersonalOfferCache.lastSyncedAt(), isNull);
    });
  });
}
