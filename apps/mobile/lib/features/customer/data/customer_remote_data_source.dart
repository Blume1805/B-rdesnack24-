import 'package:supabase_flutter/supabase_flutter.dart';

class CustomerRemoteDataSource {
  CustomerRemoteDataSource(this._client);

  final SupabaseClient _client;
  String? get _uid => _client.auth.currentUser?.id;

  Future<List<Map<String, dynamic>>> activeOffers() async {
    final today = DateTime.now().toIso8601String().substring(0, 10);
    final rows = await _client
        .from('offers')
        .select(
          'id, title, description, kind, valid_to, image_url, product_id, '
          'regular_price_net, offer_price_net, discount_percent',
        )
        .eq('status', 'active')
        .or('valid_to.is.null,valid_to.gte.$today')
        .order('valid_from', ascending: false);
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<Map<String, dynamic>?> myActivePersonalOffer() async {
    final row = await _client.rpc('my_active_personal_offer').maybeSingle();
    return row;
  }

  Future<List<Map<String, dynamic>>> myActivePersonalOffers() async {
    // Falls heute Geburtstag oder Registrierungs-Jubiläum ist: erzeugen.
    try {
      await _client.rpc('ensure_my_special_offers');
    } catch (_) {}
    final rows = await _client.rpc('my_active_personal_offers');
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  Future<Map<String, dynamic>?> myLoyaltyStatus() async {
    final row = await _client.rpc('my_loyalty_status').maybeSingle();
    return row;
  }

  Future<Map<String, dynamic>?> ensurePersonalOffer() async {
    if (_uid == null) return null;
    final existing = await myActivePersonalOffer();
    if (existing != null) return existing;
    final row = await _client.rpc(
      'generate_personal_offer',
      params: {'p_customer_id': _uid},
    ).maybeSingle();
    return row;
  }

  Future<Map<String, dynamic>> redeemPersonalOffer(String code) async {
    final row = await _client.rpc(
      'redeem_personal_offer',
      params: {'p_code': code.trim()},
    ).single();
    return row;
  }

  // Coupon-Aktivierung ------------------------------------------------------

  Future<void> activateWeeklyOffer(String offerId) async {
    await _client.rpc('activate_offer', params: {'p_offer_id': offerId});
  }

  Future<void> deactivateWeeklyOffer(String offerId) async {
    await _client.rpc('deactivate_offer', params: {'p_offer_id': offerId});
  }

  Future<void> activatePersonalOffer(String personalOfferId) async {
    await _client.rpc(
      'activate_personal_offer',
      params: {'p_offer_id': personalOfferId},
    );
  }

  Future<void> deactivatePersonalOffer(String personalOfferId) async {
    await _client.rpc(
      'deactivate_personal_offer',
      params: {'p_offer_id': personalOfferId},
    );
  }

  Future<List<String>> myActivatedOfferIds() async {
    if (_uid == null) return const [];
    final rows = await _client
        .from('offer_activations')
        .select('offer_id')
        .eq('customer_id', _uid!)
        .filter('redeemed_at', 'is', null);
    return (rows as List)
        .map((r) => (r as Map<String, dynamic>)['offer_id'] as String)
        .toList();
  }

  // Ratings + Top-Produkte + Detail -------------------------------------

  Future<void> rateProduct(String productId, int rating) async {
    await _client.rpc(
      'rate_product',
      params: {
        'p_product_id': productId,
        'p_rating': rating,
      },
    );
  }

  Future<List<Map<String, dynamic>>> topProductsByCategory(
    String category, {
    int limit = 3,
  }) async {
    final rows = await _client.rpc(
      'top_products_by_category',
      params: {'p_category': category, 'p_limit': limit},
    );
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  // Spenden + News --------------------------------------------------------

  Future<Map<String, dynamic>?> myDonationSummary() async {
    final row = await _client.rpc('my_donation_summary').maybeSingle();
    return row;
  }

  Future<Map<String, dynamic>?> donationPoolSummary() async {
    final row = await _client.rpc('donation_pool_summary').maybeSingle();
    return row;
  }

  Future<List<Map<String, dynamic>>> myDonationsByPurchase() async {
    final rows = await _client.rpc('my_donations_by_purchase');
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  Future<List<Map<String, dynamic>>> donationCauses() async {
    final rows = await _client.rpc('donation_causes_list');
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  Future<Map<String, dynamic>> suggestDonationCause(
    String title,
    String? description,
  ) async {
    final row = await _client.rpc(
      'suggest_donation_cause',
      params: {'p_title': title, 'p_description': description},
    ).single();
    return row;
  }

  Future<bool> voteDonationCause(String causeId) async {
    final res = await _client
        .rpc('vote_donation_cause', params: {'p_cause_id': causeId});
    return (res as bool?) ?? false;
  }

  Future<List<Map<String, dynamic>>> listNews({int limit = 20}) async {
    final rows = await _client.rpc('list_news', params: {'p_limit': limit});
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  Future<List<Map<String, dynamic>>> myNotifications({int limit = 30}) async {
    final rows =
        await _client.rpc('my_notifications', params: {'p_limit': limit});
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  Future<int> unreadNotificationsCount() async {
    final r = await _client.rpc('my_notifications_unread_count');
    return (r as num?)?.toInt() ?? 0;
  }

  Future<void> markNotificationRead(String key) async {
    await _client.rpc('mark_notification_read', params: {'p_key': key});
  }

  Future<void> markAllNotificationsRead() async {
    await _client.rpc('mark_all_notifications_read');
  }

  /// Katalogsuche (Name/Kategorie). Leerer Begriff = ganzer Katalog.
  /// [category] und [subcategory] filtern zusätzlich; `null` heißt „alle".
  Future<List<Map<String, dynamic>>> searchProducts(
    String query, {
    String? category,
    String? subcategory,
  }) async {
    final rows = await _client.rpc(
      'search_products',
      params: {
        'p_query': query,
        'p_limit': 60,
        'p_category': category,
        'p_subcategory': subcategory,
      },
    );
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  /// Automaten, die ein Produkt führen — inkl. Bestand und Standort.
  Future<List<Map<String, dynamic>>> productAvailability(
    String productId,
  ) async {
    final rows = await _client.rpc(
      'product_availability',
      params: {'p_product_id': productId},
    );
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  Future<Map<String, dynamic>?> productDetail(String productId) async {
    final rows = await _client.rpc(
      'product_detail',
      params: {'p_product_id': productId},
    );
    if (rows is List && rows.isNotEmpty) {
      return Map<String, dynamic>.from(rows.first as Map);
    }
    return null;
  }

  Future<List<Map<String, dynamic>>> myPrices() async {
    final rows = await _client
        .from('customer_prices')
        .select('price_net, valid_from, products(name)')
        .order('valid_from', ascending: false);
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<List<Map<String, dynamic>>> myPurchases() async {
    final rows = await _client
        .from('purchases')
        .select('id, total_gross, purchased_at')
        .order('purchased_at', ascending: false)
        .limit(100);
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<List<Map<String, dynamic>>> myRecommendations() async {
    final rows = await _client
        .from('recommendations')
        .select('product_id, score, reason, products(name)')
        .order('score', ascending: false)
        .limit(20);
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<void> submitContact(
    String category,
    String? subject,
    String body,
  ) async {
    await _client.from('contact_messages').insert({
      'customer_id': _uid,
      'category': category,
      'subject': subject,
      'body': body,
    });
  }

  Future<void> recordConsent(String type, bool granted) async {
    await _client.from('consents').insert({
      'profile_id': _uid,
      'type': type,
      'granted': granted,
    });
  }

  Future<void> updateNotifications({
    required bool email,
    required bool push,
  }) async {
    await _client
        .from('customers')
        .update({'notify_email': email, 'notify_push': push}).eq('id', _uid!);
  }

  Future<Map<String, dynamic>?> myCustomer() async {
    if (_uid == null) return null;
    final row = await _client
        .from('customers')
        .select(
          'customer_number, notify_email, notify_push, '
          'customer_type, company_name, '
          'billing_street, billing_zip, billing_city, billing_country, '
          'tax_number, vat_id, '
          'profiles!inner(full_name, birth_date, email, gender, created_at)',
        )
        .eq('id', _uid!)
        .maybeSingle();
    if (row == null) return null;
    final profile = row['profiles'] as Map<String, dynamic>?;
    return {
      'customer_number': row['customer_number'],
      'notify_email': row['notify_email'],
      'notify_push': row['notify_push'],
      'customer_type': row['customer_type'],
      'company_name': row['company_name'],
      'billing_street': row['billing_street'],
      'billing_zip': row['billing_zip'],
      'billing_city': row['billing_city'],
      'billing_country': row['billing_country'],
      'tax_number': row['tax_number'],
      'vat_id': row['vat_id'],
      'full_name': profile?['full_name'],
      'birth_date': profile?['birth_date'],
      'email': profile?['email'],
      'gender': profile?['gender'],
      'registered_at': profile?['created_at'],
    };
  }

  Future<List<Map<String, dynamic>>> myInvoices() async {
    final rows = await _client.rpc('my_invoices');
    if (rows is List) return rows.cast<Map<String, dynamic>>();
    return const [];
  }

  Future<void> updateBusinessData({
    String? companyName,
    String? billingStreet,
    String? billingZip,
    String? billingCity,
    String? billingCountry,
    String? taxNumber,
    String? vatId,
  }) async {
    if (_uid == null) return;
    await _client.from('customers').update({
      if (companyName != null) 'company_name': companyName,
      if (billingStreet != null) 'billing_street': billingStreet,
      if (billingZip != null) 'billing_zip': billingZip,
      if (billingCity != null) 'billing_city': billingCity,
      if (billingCountry != null) 'billing_country': billingCountry,
      if (taxNumber != null) 'tax_number': taxNumber,
      if (vatId != null) 'vat_id': vatId,
    }).eq('id', _uid!);
  }

  Future<String> businessCustomersCsv() async {
    final res = await _client.rpc('business_customers_csv');
    return res as String? ?? '';
  }

  Future<void> addDemoPurchase({
    required String paymentMethod,
    double totalGross = 4.99,
  }) async {
    await _client.rpc(
      'dev_add_demo_purchase',
      params: {
        'p_payment_method': paymentMethod,
        'p_total_gross': totalGross,
      },
    );
  }

  Future<void> updateGender(String? gender) async {
    if (_uid == null) return;
    await _client.from('profiles').update({'gender': gender}).eq('id', _uid!);
  }

  Future<void> updateProfileName(String fullName, String? phone) async {
    await _client
        .from('profiles')
        .update({'full_name': fullName, 'phone': phone}).eq('id', _uid!);
  }

  Future<void> changePassword(String newPassword) async {
    await _client.auth.updateUser(UserAttributes(password: newPassword));
  }
}
