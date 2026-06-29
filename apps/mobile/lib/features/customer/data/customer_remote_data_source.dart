import 'package:supabase_flutter/supabase_flutter.dart';

class CustomerRemoteDataSource {
  CustomerRemoteDataSource(this._client);

  final SupabaseClient _client;
  String? get _uid => _client.auth.currentUser?.id;

  Future<List<Map<String, dynamic>>> activeOffers() async {
    final today = DateTime.now().toIso8601String().substring(0, 10);
    final rows = await _client
        .from('offers')
        .select('id, title, description, kind, valid_to')
        .eq('status', 'active')
        .or('valid_to.is.null,valid_to.gte.$today')
        .order('valid_from', ascending: false);
    return (rows as List).cast<Map<String, dynamic>>();
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
    return _client
        .from('customers')
        .select('customer_number, notify_email, notify_push, billing_city')
        .eq('id', _uid!)
        .maybeSingle();
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
