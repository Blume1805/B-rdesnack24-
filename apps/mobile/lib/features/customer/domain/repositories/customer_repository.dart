import '../entities/customer_models.dart';
import '../entities/loyalty_status.dart';
import '../entities/offer.dart';

abstract interface class CustomerRepository {
  Future<List<Offer>> offers();
  Future<List<CustomerPrice>> myPrices();
  Future<List<Purchase>> myPurchases();
  Future<List<Recommendation>> myRecommendations();
  Future<Map<String, dynamic>?> myCustomer();

  /// Aktuelles individuelles Angebot (max. 1 aktives pro Kunde).
  Future<PersonalOffer?> myPersonalOffer();

  /// Alle aktiven individuellen Angebote (Basis-Angebot + Loyalty-Bonusse).
  Future<List<PersonalOffer>> myPersonalOffers();

  /// Loyalty-Punktestand des aktuellen Monats.
  Future<LoyaltyStatus?> myLoyaltyStatus();

  /// Falls kein aktives Angebot vorhanden ist, generiert das Backend eines
  /// basierend auf dem Konsumverhalten des Kunden.
  Future<PersonalOffer?> ensurePersonalOffer();

  /// Löst einen Zahlencode ein.  Wirft bei ungültigem/abgelaufenem Code.
  Future<PersonalOffer> redeemPersonalOffer(String code);

  /// Setzt/aktualisiert das Geschlecht (m|w|d|null).
  Future<void> updateGender(String? gender);

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
