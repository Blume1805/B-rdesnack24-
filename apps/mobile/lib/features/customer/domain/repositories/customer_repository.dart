import '../entities/customer_models.dart';
import '../entities/donations_news.dart';
import '../entities/invoice.dart';
import '../entities/notification.dart';
import '../entities/loyalty_status.dart';
import '../entities/offer.dart';
import '../entities/product_detail.dart';

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

  /// Coupon-Aktivierung — Kunde muss ein Angebot aktivieren, bevor der
  /// Automat es beim Einlösen akzeptiert.
  Future<void> activateWeeklyOffer(String offerId);
  Future<void> deactivateWeeklyOffer(String offerId);
  Future<void> activatePersonalOffer(String personalOfferId);
  Future<void> deactivatePersonalOffer(String personalOfferId);
  Future<Set<String>> myActivatedWeeklyOfferIds();

  /// Top-3 pro Kategorie (Getränke, Snacks, Eis) — sortiert nach
  /// Durchschnittsbewertung und Reviewanzahl.
  Future<List<RankedProduct>> topProducts(String category, {int limit = 3});

  /// Produkt-Detailansicht inkl. Nährwerte, Allergene und meiner Bewertung.
  Future<ProductDetail?> productDetail(String productId);

  /// Produkt bewerten (1-5 Sterne).  Setzt oder aktualisiert die bestehende
  /// Bewertung des aktuellen Kunden.
  Future<void> rateProduct(String productId, int rating);

  /// Katalogsuche nach Name/Kategorie.
  Future<List<RankedProduct>> searchProducts(String query);

  /// 5 % Netto-Umsatz wandern in einen Spendentopf. Diese Methoden geben die
  /// kumulierte Spende des Kunden und die Aufschlüsselung je Kauf zurück.
  Future<DonationSummary> myDonationSummary();
  Future<List<PurchaseDonation>> myDonationsByPurchase();
  Future<DonationPoolSummary> donationPoolSummary();

  /// Spendenempfänger + Abstimmung.
  Future<List<DonationCause>> donationCauses();
  Future<DonationCause> suggestDonationCause(String title, String? description);
  Future<bool> voteDonationCause(String causeId);

  /// News-Feed (veröffentlichte Artikel, jüngste zuerst).
  Future<List<NewsArticle>> listNews({int limit = 20});

  /// Notification-Center (News, persönliche Angebote, Coupons, Rechnungen).
  Future<List<CustomerNotification>> myNotifications({int limit});
  Future<int> unreadNotificationsCount();
  Future<void> markNotificationRead(String key);
  Future<void> markAllNotificationsRead();

  /// Rechnungen des aktuellen Unternehmer-Kunden.
  Future<List<Invoice>> myInvoices();

  /// Business-Stammdaten nachtragen bzw. ändern.
  Future<void> updateBusinessData({
    String? companyName,
    String? billingStreet,
    String? billingZip,
    String? billingCity,
    String? billingCountry,
    String? taxNumber,
    String? vatId,
  });

  /// CSV-Export aller Unternehmer-Kunden im sevDesk-Import-Format
  /// (nur für Gesellschafter/Systemadmin).
  Future<String> businessCustomersCsv();

  /// Demo-Kauf für den angemeldeten Kunden anlegen (dient dem Testen von
  /// Zahlungsart-Icon und PDF-Rechnung).
  Future<void> addDemoPurchase({
    required String paymentMethod,
    double totalGross,
  });

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
