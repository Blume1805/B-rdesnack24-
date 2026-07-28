import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/pricing/pricing.dart';
import '../../data/customer_remote_data_source.dart';
import '../../data/personal_offer_cache.dart';
import '../../data/customer_repository_impl.dart';
import '../../domain/entities/customer_models.dart';
import '../../domain/entities/donations_news.dart';
import '../../domain/entities/invoice.dart';
import '../../domain/entities/notification.dart';
import '../../domain/entities/loyalty_status.dart';
import '../../domain/entities/offer.dart';
import '../../domain/entities/product_availability.dart';
import '../../domain/entities/product_detail.dart';
import '../../domain/entities/receipt.dart';
import '../../domain/repositories/customer_repository.dart';

final customerRepositoryProvider = Provider<CustomerRepository>(
  (ref) => CustomerRepositoryImpl(
    CustomerRemoteDataSource(ref.watch(supabaseClientProvider)),
  ),
);

final offersProvider = FutureProvider.autoDispose<List<Offer>>(
  (ref) => ref.watch(customerRepositoryProvider).offers(),
);

/// Abo-Status des Kunden (Gating: Basis frei, Vorteile im Abo).
/// true, sobald ein Abo-Modell gewählt wurde — die eigentliche
/// Durchsetzung passiert zusätzlich serverseitig in den RPCs.
final hasSubscriptionProvider = FutureProvider.autoDispose<bool>((ref) async {
  final res = await ref.watch(supabaseClientProvider).rpc('my_subscription');
  final map = Map<String, dynamic>.from(res as Map);
  return map['plan'] != null;
});

final myPricesProvider = FutureProvider.autoDispose<List<CustomerPrice>>(
  (ref) => ref.watch(customerRepositoryProvider).myPrices(),
);

final myPurchasesProvider = FutureProvider.autoDispose<List<Purchase>>(
  (ref) => ref.watch(customerRepositoryProvider).myPurchases(),
);

/// Strukturiertes Belegarchiv (RPC my_receipts): je Kauf ein Beleg mit
/// Positionen, Kategorie, Automat und regelbasierter Gewährleistungsfrist.
/// Suche/Filter passieren clientseitig auf dieser Liste.
final myReceiptsProvider =
    FutureProvider.autoDispose<List<Receipt>>((ref) async {
  final res = await ref.watch(supabaseClientProvider).rpc('my_receipts');
  return (res as List)
      .map((e) => Receipt.fromJson(Map<String, dynamic>.from(e as Map)))
      .toList();
});

/// Gamification-Status (Stufe, Statusrabatt, Challenges, Badges) — alles
/// serverseitig aus der Kaufhistorie berechnet (RPC my_gamification_status).
final myGamificationProvider =
    FutureProvider.autoDispose<Map<String, dynamic>>((ref) async {
  final res =
      await ref.watch(supabaseClientProvider).rpc('my_gamification_status');
  return Map<String, dynamic>.from(res as Map);
});

/// Effektiver App-Rabatt (Bruchzahl) für die Preisanzeige: 5 % Abo-Rabatt
/// plus lebenslanger Status-Zusatzrabatt (Bronze/Silber/Gold). Nur für
/// Abonnent:innen; ohne Abo 0 (Automatenpreis). Fällt bei Ladefehlern auf
/// die 5 % Basis zurück.
final myEffectiveDiscountProvider = Provider.autoDispose<double>((ref) {
  final hasSub = ref.watch(hasSubscriptionProvider).valueOrNull ?? false;
  if (!hasSub) return 0.0;
  final tier = ref.watch(myGamificationProvider).valueOrNull?['tier']
      as Map<String, dynamic>?;
  return Pricing.effectiveDiscountRate(tier?['code'] as String?);
});

/// Eigene Reklamations-Tickets, gruppiert nach Kauf (jüngstes Ticket je
/// Kauf gewinnt). RLS liefert nur die eigenen Zeilen.
final myComplaintsByPurchaseProvider =
    FutureProvider.autoDispose<Map<String, Map<String, dynamic>>>((ref) async {
  final rows = await ref
      .watch(supabaseClientProvider)
      .from('purchase_complaints')
      .select('id, purchase_id, kind, status, resolution_note, created_at')
      .order('created_at', ascending: false);
  final byPurchase = <String, Map<String, dynamic>>{};
  for (final r in List<Map<String, dynamic>>.from(rows as List)) {
    byPurchase.putIfAbsent(r['purchase_id'] as String, () => r);
  }
  return byPurchase;
});

final myRecommendationsProvider =
    FutureProvider.autoDispose<List<Recommendation>>(
  (ref) => ref.watch(customerRepositoryProvider).myRecommendations(),
);

final myCustomerProvider = FutureProvider.autoDispose<Map<String, dynamic>?>(
  (ref) => ref.watch(customerRepositoryProvider).myCustomer(),
);

/// Aktives Basis-Angebot (nicht-Loyalty).  Automatisch generiert (via RPC)
/// sobald keins existiert oder das letzte abgelaufen ist.
final myPersonalOfferProvider = FutureProvider.autoDispose<PersonalOffer?>(
  (ref) => ref.watch(customerRepositoryProvider).ensurePersonalOffer(),
);

/// true, wenn die persönlichen Angebote gerade aus dem Offline-Cache
/// stammen (Netzwerkfehler beim Laden) — der Offers-Tab zeigt dann einen
/// Hinweis-Banner mit dem letzten Sync-Zeitpunkt.
final personalOffersOfflineProvider = StateProvider<bool>((_) => false);

/// Alle aktiven individuellen Angebote (Basis + Loyalty-Bonusse), Loyalty
/// zuerst — Client kann daraus die Sektionen bauen. Erfolgreiche Loads
/// werden lokal gecacht; bei Netzwerkfehlern (typisch: schlechter Empfang
/// direkt am Automaten) kommt der letzte Snapshot zurück, damit die
/// Einlösecodes trotzdem anzeigbar bleiben.
final myPersonalOffersProvider =
    FutureProvider.autoDispose<List<PersonalOffer>>((ref) async {
  try {
    // Sicherstellen, dass mindestens das Basis-Angebot existiert.
    await ref.watch(customerRepositoryProvider).ensurePersonalOffer();
    final list = await ref.watch(customerRepositoryProvider).myPersonalOffers();
    await PersonalOfferCache.save(list);
    ref.read(personalOffersOfflineProvider.notifier).state = false;
    return list;
  } catch (_) {
    final cached = await PersonalOfferCache.load();
    if (cached != null) {
      ref.read(personalOffersOfflineProvider.notifier).state = true;
      return cached;
    }
    rethrow;
  }
});

final myLoyaltyStatusProvider = FutureProvider.autoDispose<LoyaltyStatus?>(
  (ref) => ref.watch(customerRepositoryProvider).myLoyaltyStatus(),
);

/// IDs der aktivierten Wochenangebote — für „Aktiviert ✓"-Chip auf der Karte.
final activatedOfferIdsProvider = FutureProvider.autoDispose<Set<String>>(
  (ref) => ref.watch(customerRepositoryProvider).myActivatedWeeklyOfferIds(),
);

/// Eure Favoriten — Top-3 pro Kategorie.
final topProductsProvider =
    FutureProvider.autoDispose.family<List<RankedProduct>, String>(
  (ref, category) =>
      ref.watch(customerRepositoryProvider).topProducts(category, limit: 3),
);

/// Produkt-Detail (Nährwerte, Allergene, Rating).
final productDetailProvider =
    FutureProvider.autoDispose.family<ProductDetail?, String>(
  (ref, productId) =>
      ref.watch(customerRepositoryProvider).productDetail(productId),
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

// ── Spenden + News ───────────────────────────────────────────────────

final myDonationSummaryProvider = FutureProvider.autoDispose<DonationSummary>(
  (ref) => ref.watch(customerRepositoryProvider).myDonationSummary(),
);

final myDonationsByPurchaseProvider =
    FutureProvider.autoDispose<List<PurchaseDonation>>(
  (ref) => ref.watch(customerRepositoryProvider).myDonationsByPurchase(),
);

final donationPoolSummaryProvider =
    FutureProvider.autoDispose<DonationPoolSummary>(
  (ref) => ref.watch(customerRepositoryProvider).donationPoolSummary(),
);

final donationCausesProvider = FutureProvider.autoDispose<List<DonationCause>>(
  (ref) => ref.watch(customerRepositoryProvider).donationCauses(),
);

/// Ergebnisse der Produktsuche. Familie über den Suchbegriff, damit jeder
/// Begriff seinen eigenen Cache-Eintrag bekommt und Zurücktippen nicht neu
/// lädt. Leerer Begriff liefert den Katalog.
/// Aktiver Filter der Produktsuche (Begriff + Kategorie + Unterkategorie).
final productFilterProvider =
    StateProvider.autoDispose<ProductFilter>((ref) => const ProductFilter());

final productSearchProvider =
    FutureProvider.autoDispose.family<List<RankedProduct>, ProductFilter>(
  (ref, filter) => ref.watch(customerRepositoryProvider).searchProducts(
        filter.query,
        category: filter.category,
        subcategory: filter.subcategory,
      ),
);

/// Automaten, an denen es ein Produkt gibt — vorrätige zuerst.
final productAvailabilityProvider =
    FutureProvider.autoDispose.family<List<ProductAvailability>, String>(
  (ref, productId) =>
      ref.watch(customerRepositoryProvider).productAvailability(productId),
);

final newsProvider = FutureProvider.autoDispose<List<NewsArticle>>(
  (ref) => ref.watch(customerRepositoryProvider).listNews(),
);

final myInvoicesProvider = FutureProvider.autoDispose<List<Invoice>>(
  (ref) => ref.watch(customerRepositoryProvider).myInvoices(),
);

final myNotificationsProvider =
    FutureProvider.autoDispose<List<CustomerNotification>>(
  (ref) => ref.watch(customerRepositoryProvider).myNotifications(),
);

final unreadNotificationCountProvider = FutureProvider.autoDispose<int>(
  (ref) => ref.watch(customerRepositoryProvider).unreadNotificationsCount(),
);
