import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../data/customer_remote_data_source.dart';
import '../../data/customer_repository_impl.dart';
import '../../domain/entities/customer_models.dart';
import '../../domain/entities/loyalty_status.dart';
import '../../domain/entities/offer.dart';
import '../../domain/repositories/customer_repository.dart';

final customerRepositoryProvider = Provider<CustomerRepository>(
  (ref) => CustomerRepositoryImpl(
    CustomerRemoteDataSource(ref.watch(supabaseClientProvider)),
  ),
);

final offersProvider = FutureProvider.autoDispose<List<Offer>>(
  (ref) => ref.watch(customerRepositoryProvider).offers(),
);

final myPricesProvider = FutureProvider.autoDispose<List<CustomerPrice>>(
  (ref) => ref.watch(customerRepositoryProvider).myPrices(),
);

final myPurchasesProvider = FutureProvider.autoDispose<List<Purchase>>(
  (ref) => ref.watch(customerRepositoryProvider).myPurchases(),
);

final myRecommendationsProvider =
    FutureProvider.autoDispose<List<Recommendation>>(
  (ref) => ref.watch(customerRepositoryProvider).myRecommendations(),
);

final myCustomerProvider =
    FutureProvider.autoDispose<Map<String, dynamic>?>(
  (ref) => ref.watch(customerRepositoryProvider).myCustomer(),
);

/// Aktives Basis-Angebot (nicht-Loyalty).  Automatisch generiert (via RPC)
/// sobald keins existiert oder das letzte abgelaufen ist.
final myPersonalOfferProvider = FutureProvider.autoDispose<PersonalOffer?>(
  (ref) => ref.watch(customerRepositoryProvider).ensurePersonalOffer(),
);

/// Alle aktiven individuellen Angebote (Basis + Loyalty-Bonusse), Loyalty
/// zuerst — Client kann daraus die Sektionen bauen.
final myPersonalOffersProvider =
    FutureProvider.autoDispose<List<PersonalOffer>>((ref) async {
  // Sicherstellen, dass mindestens das Basis-Angebot existiert.
  await ref.watch(customerRepositoryProvider).ensurePersonalOffer();
  return ref.watch(customerRepositoryProvider).myPersonalOffers();
});

final myLoyaltyStatusProvider = FutureProvider.autoDispose<LoyaltyStatus?>(
  (ref) => ref.watch(customerRepositoryProvider).myLoyaltyStatus(),
);

/// Aktionen rund um das persönliche Angebot: Einlösen per Zahlencode.
class PersonalOfferActions extends StateNotifier<AsyncValue<void>> {
  PersonalOfferActions(this._ref) : super(const AsyncData(null));
  final Ref _ref;

  Future<PersonalOffer?> redeem(String code) async {
    state = const AsyncLoading();
    try {
      final offer =
          await _ref.read(customerRepositoryProvider).redeemPersonalOffer(code);
      state = const AsyncData(null);
      _ref.invalidate(myPersonalOfferProvider);
      return offer;
    } catch (e, st) {
      state = AsyncError(e, st);
      return null;
    }
  }
}

final personalOfferActionsProvider =
    StateNotifierProvider.autoDispose<PersonalOfferActions, AsyncValue<void>>(
  (ref) => PersonalOfferActions(ref),
);
