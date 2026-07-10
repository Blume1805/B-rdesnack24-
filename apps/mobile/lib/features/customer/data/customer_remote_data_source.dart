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
    final row = await _client
        .rpc('my_active_personal_offer')
        .maybeSingle();
    return row as Map<String, dynamic>?;
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
    return row as Map<String, dynamic>?;
  }

  Future<Map<String, dynamic>?> ensurePersonalOffer() async {
    if (_uid == null) return null;
    final existing = await myActivePersonalOffer();
    if (existing != null) return existing;
    final row = await _client
        .rpc('generate_personal_offer', params: {'p_customer_id': _uid})
        .maybeSingle();
    return row as Map<String, dynamic>?;
  }

  Future<Map<String, dynamic>> redeemPersonalOffer(String code) async {
    final row = await _client.rpc(
      'redeem_personal_offer',
      params: {'p_code': code.trim()},
    ).single();
    return row as Map<String, dynamic>;
  }

  // Coupon-Aktivierung ------------------------------------------------------

  Future<void> activateWeeklyOffer(String offerId) async {
    await _client.rpc('activate_offer', params: {'p_offer_id': offerId});
  }

  Future<void> activatePersonalOffer(String personalOfferId) async {
    await _client.rpc('activate_personal_offer',
        params: {'p_offer_id': personalOfferId});
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
    await _client.rpc('rate_product', params: {
      'p_product_id': productId,
      'p_rating': rating,
    });
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

  Future<void> submitContact(String category, String? subject, String body) async {
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

  Future<void> updateNotifications({required bool email, required bool push}) async {
    await _client
        .from('customers')
        .update({'notify_email': email, 'notify_push': push})
        .eq('id', _uid!);
  }

  Future<Map<String, dynamic>?> myCustomer() async {
    if (_uid == null) return null;
    // Join Profil, damit Stammdaten direkt mitkommen (full_name, birth_date,
    // email, gender, created_at/Registrierungsdatum).
    final row = await _client
        .from('customers')
        .select(
          'customer_number, notify_email, notify_push, billing_city, '
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
      'billing_city': row['billing_city'],
      'full_name': profile?['full_name'],
      'birth_date': profile?['birth_date'],
      'email': profile?['email'],
      'gender': profile?['gender'],
      'registered_at': profile?['created_at'],
    };
  }

  Future<void> updateGender(String? gender) async {
    if (_uid == null) return;
    await _client
        .from('profiles')
        .update({'gender': gender})
        .eq('id', _uid!);
  }

  Future<void> updateProfileName(String fullName, String? phone) async {
    await _client
        .from('profiles')
        .update({'full_name': fullName, 'phone': phone})
        .eq('id', _uid!);
  }

  Future<void> changePassword(String newPassword) async {
    await _client.auth.updateUser(UserAttributes(password: newPassword));
  }
}
