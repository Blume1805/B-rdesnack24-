import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../core/error/failures.dart';
import '../domain/entities/customer_models.dart';
import '../domain/entities/donations_news.dart';
import '../domain/entities/invoice.dart';
import '../domain/entities/notification.dart';
import '../domain/entities/loyalty_status.dart';
import '../domain/entities/offer.dart';
import '../domain/entities/product_availability.dart';
import '../domain/entities/product_detail.dart';
import '../domain/repositories/customer_repository.dart';
import 'customer_remote_data_source.dart';

class CustomerRepositoryImpl implements CustomerRepository {
  CustomerRepositoryImpl(this._remote);

  final CustomerRemoteDataSource _remote;

  @override
  Future<List<Offer>> offers() => _guard(
        () async => (await _remote.activeOffers()).map(Offer.fromJson).toList(),
      );

  @override
  Future<List<CustomerPrice>> myPrices() => _guard(
        () async =>
            (await _remote.myPrices()).map(CustomerPrice.fromJson).toList(),
      );

  @override
  Future<List<Purchase>> myPurchases() => _guard(
        () async =>
            (await _remote.myPurchases()).map(Purchase.fromJson).toList(),
      );

  @override
  Future<List<Recommendation>> myRecommendations() => _guard(
        () async => (await _remote.myRecommendations())
            .map(Recommendation.fromJson)
            .toList(),
      );

  @override
  Future<Map<String, dynamic>?> myCustomer() => _guard(_remote.myCustomer);

  @override
  Future<PersonalOffer?> myPersonalOffer() => _guard(() async {
        final row = await _remote.myActivePersonalOffer();
        return row == null ? null : PersonalOffer.fromJson(row);
      });

  @override
  Future<List<PersonalOffer>> myPersonalOffers() => _guard(() async {
        final rows = await _remote.myActivePersonalOffers();
        return rows.map(PersonalOffer.fromJson).toList();
      });

  @override
  Future<LoyaltyStatus?> myLoyaltyStatus() => _guard(() async {
        final row = await _remote.myLoyaltyStatus();
        return row == null ? null : LoyaltyStatus.fromJson(row);
      });

  @override
  Future<PersonalOffer?> ensurePersonalOffer() => _guard(() async {
        final row = await _remote.ensurePersonalOffer();
        return row == null ? null : PersonalOffer.fromJson(row);
      });

  @override
  Future<PersonalOffer> redeemPersonalOffer(String code) => _guard(() async {
        final row = await _remote.redeemPersonalOffer(code);
        return PersonalOffer.fromJson(row);
      });

  @override
  Future<void> updateGender(String? gender) =>
      _guard(() => _remote.updateGender(gender));

  @override
  Future<void> activateWeeklyOffer(String offerId) =>
      _guard(() => _remote.activateWeeklyOffer(offerId));

  @override
  Future<void> deactivateWeeklyOffer(String offerId) =>
      _guard(() => _remote.deactivateWeeklyOffer(offerId));

  @override
  Future<void> activatePersonalOffer(String personalOfferId) =>
      _guard(() => _remote.activatePersonalOffer(personalOfferId));

  @override
  Future<void> deactivatePersonalOffer(String personalOfferId) =>
      _guard(() => _remote.deactivatePersonalOffer(personalOfferId));

  @override
  Future<Set<String>> myActivatedWeeklyOfferIds() => _guard(() async {
        final ids = await _remote.myActivatedOfferIds();
        return ids.toSet();
      });

  @override
  Future<List<RankedProduct>> topProducts(String category, {int limit = 3}) =>
      _guard(() async {
        final rows =
            await _remote.topProductsByCategory(category, limit: limit);
        return rows.map(RankedProduct.fromJson).toList();
      });

  @override
  Future<ProductDetail?> productDetail(String productId) => _guard(() async {
        final row = await _remote.productDetail(productId);
        return row == null ? null : ProductDetail.fromJson(row);
      });

  @override
  Future<void> rateProduct(String productId, int rating) =>
      _guard(() => _remote.rateProduct(productId, rating));

  @override
  Future<List<RankedProduct>> searchProducts(
    String query, {
    String? category,
    String? subcategory,
  }) =>
      _guard(
        () async => (await _remote.searchProducts(
          query,
          category: category,
          subcategory: subcategory,
        ))
            .map(RankedProduct.fromJson)
            .toList(),
      );

  @override
  Future<List<ProductAvailability>> productAvailability(String productId) =>
      _guard(
        () async => (await _remote.productAvailability(productId))
            .map(ProductAvailability.fromJson)
            .toList(),
      );

  @override
  Future<DonationSummary> myDonationSummary() => _guard(() async {
        final row = await _remote.myDonationSummary();
        return row == null
            ? const DonationSummary(totalDonated: 0, purchaseCount: 0)
            : DonationSummary.fromJson(row);
      });

  @override
  Future<List<PurchaseDonation>> myDonationsByPurchase() => _guard(() async {
        final rows = await _remote.myDonationsByPurchase();
        return rows.map(PurchaseDonation.fromJson).toList();
      });

  @override
  Future<DonationPoolSummary> donationPoolSummary() => _guard(() async {
        final row = await _remote.donationPoolSummary();
        return row == null
            ? const DonationPoolSummary(
                myDonated: 0,
                totalPool: 0,
                mySharePct: 0,
                nonAppGross: 0,
              )
            : DonationPoolSummary.fromJson(row);
      });

  @override
  Future<List<DonationCause>> donationCauses() => _guard(() async {
        final rows = await _remote.donationCauses();
        return rows.map(DonationCause.fromJson).toList();
      });

  @override
  Future<DonationCause> suggestDonationCause(
    String title,
    String? description,
  ) =>
      _guard(() async {
        final row = await _remote.suggestDonationCause(title, description);
        // Backend liefert die frisch angelegte Zeile ohne Vote-Count zurück
        // → 0 Stimmen, nicht selbst gevotet, Status = 'suggested'.
        return DonationCause(
          id: row['id'] as String,
          title: row['title'] as String? ?? title,
          description: row['description'] as String?,
          status: (row['status'] as String?) ?? 'suggested',
          voteCount: 0,
          votedByMe: false,
        );
      });

  @override
  Future<bool> voteDonationCause(String causeId) =>
      _guard(() => _remote.voteDonationCause(causeId));

  @override
  Future<List<NewsArticle>> listNews({int limit = 20}) => _guard(() async {
        final rows = await _remote.listNews(limit: limit);
        return rows.map(NewsArticle.fromJson).toList();
      });

  @override
  Future<List<CustomerNotification>> myNotifications({int limit = 30}) =>
      _guard(() async {
        final rows = await _remote.myNotifications(limit: limit);
        return rows.map(CustomerNotification.fromJson).toList();
      });

  @override
  Future<int> unreadNotificationsCount() =>
      _guard(_remote.unreadNotificationsCount);

  @override
  Future<void> markNotificationRead(String key) =>
      _guard(() => _remote.markNotificationRead(key));

  @override
  Future<void> markAllNotificationsRead() =>
      _guard(_remote.markAllNotificationsRead);

  @override
  Future<List<Invoice>> myInvoices() => _guard(() async {
        final rows = await _remote.myInvoices();
        return rows.map(Invoice.fromJson).toList();
      });

  @override
  Future<void> updateBusinessData({
    String? companyName,
    String? billingStreet,
    String? billingZip,
    String? billingCity,
    String? billingCountry,
    String? taxNumber,
    String? vatId,
  }) =>
      _guard(
        () => _remote.updateBusinessData(
          companyName: companyName,
          billingStreet: billingStreet,
          billingZip: billingZip,
          billingCity: billingCity,
          billingCountry: billingCountry,
          taxNumber: taxNumber,
          vatId: vatId,
        ),
      );

  @override
  Future<String> businessCustomersCsv() => _guard(_remote.businessCustomersCsv);

  @override
  Future<void> addDemoPurchase({
    required String paymentMethod,
    double totalGross = 4.99,
  }) =>
      _guard(
        () => _remote.addDemoPurchase(
          paymentMethod: paymentMethod,
          totalGross: totalGross,
        ),
      );

  @override
  Future<void> submitContact({
    required String category,
    String? subject,
    required String body,
  }) =>
      _guard(() => _remote.submitContact(category, subject, body));

  @override
  Future<void> recordConsent(String type, bool granted) =>
      _guard(() => _remote.recordConsent(type, granted));

  @override
  Future<void> updateNotifications({required bool email, required bool push}) =>
      _guard(() => _remote.updateNotifications(email: email, push: push));

  @override
  Future<void> updateProfileName(String fullName, String? phone) =>
      _guard(() => _remote.updateProfileName(fullName, phone));

  @override
  Future<void> changePassword(String newPassword) =>
      _guard(() => _remote.changePassword(newPassword));

  Future<T> _guard<T>(Future<T> Function() run) async {
    try {
      return await run();
    } catch (e) {
      if (e is Failure) rethrow;
      if (e is PostgrestException) {
        if (e.code == '42501') throw PermissionFailure(e.message, cause: e);
        throw ServerFailure(e.message, cause: e);
      }
      if (e is AuthException) throw AuthFailure(e.message, cause: e);
      throw UnknownFailure('Unerwarteter Fehler: $e', cause: e);
    }
  }
}
