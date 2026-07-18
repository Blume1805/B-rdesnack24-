import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:boerdesnack24/features/customer/data/personal_offer_cache.dart';
import 'package:boerdesnack24/features/customer/domain/entities/offer.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  PersonalOffer offer({String id = 'o1'}) => PersonalOffer(
        id: id,
        title: 'Club-Mate',
        regularPriceNet: 2.10,
        offerPriceNet: 1.89,
        discountPercent: 10,
        redemptionCode: '123456',
        validFrom: DateTime.utc(2026, 7, 1),
        validTo: DateTime.utc(2026, 7, 31),
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
}
