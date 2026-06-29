import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../core/error/failures.dart';
import '../domain/entities/customer_models.dart';
import '../domain/entities/offer.dart';
import '../domain/repositories/customer_repository.dart';
import 'customer_remote_data_source.dart';

class CustomerRepositoryImpl implements CustomerRepository {
  CustomerRepositoryImpl(this._remote);

  final CustomerRemoteDataSource _remote;

  @override
  Future<List<Offer>> offers() => _guard(
      () async => (await _remote.activeOffers()).map(Offer.fromJson).toList());

  @override
  Future<List<CustomerPrice>> myPrices() => _guard(
      () async => (await _remote.myPrices()).map(CustomerPrice.fromJson).toList());

  @override
  Future<List<Purchase>> myPurchases() => _guard(
      () async => (await _remote.myPurchases()).map(Purchase.fromJson).toList());

  @override
  Future<List<Recommendation>> myRecommendations() => _guard(() async =>
      (await _remote.myRecommendations()).map(Recommendation.fromJson).toList());

  @override
  Future<Map<String, dynamic>?> myCustomer() => _guard(_remote.myCustomer);

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
      if (e is Failure) throw e;
      if (e is PostgrestException) {
        if (e.code == '42501') throw PermissionFailure(e.message, cause: e);
        throw ServerFailure(e.message, cause: e);
      }
      if (e is AuthException) throw AuthFailure(e.message, cause: e);
      throw UnknownFailure('Unerwarteter Fehler: $e', cause: e);
    }
  }
}
