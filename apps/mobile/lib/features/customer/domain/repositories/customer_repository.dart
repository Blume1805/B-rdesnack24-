import '../entities/customer_models.dart';
import '../entities/offer.dart';

abstract interface class CustomerRepository {
  Future<List<Offer>> offers();
  Future<List<CustomerPrice>> myPrices();
  Future<List<Purchase>> myPurchases();
  Future<List<Recommendation>> myRecommendations();
  Future<Map<String, dynamic>?> myCustomer();

  Future<void> submitContact({
    required String category,
    String? subject,
    required String body,
  });
  Future<void> recordConsent(String type, bool granted);
  Future<void> updateNotifications({required bool email, required bool push});
  Future<void> updateProfileName(String fullName, String? phone);
  Future<void> changePassword(String newPassword);
}
