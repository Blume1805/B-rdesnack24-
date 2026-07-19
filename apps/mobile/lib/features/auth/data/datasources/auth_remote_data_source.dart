import 'package:supabase_flutter/supabase_flutter.dart';

import '../dtos/profile_dto.dart';

/// Kapselt alle Supabase-Aufrufe der Authentifizierung.
class AuthRemoteDataSource {
  AuthRemoteDataSource(this._client);

  final SupabaseClient _client;

  GoTrueClient get _auth => _client.auth;

  String? get currentUserId => _auth.currentUser?.id;

  Future<AuthResponse> signInWithPassword(String email, String password) {
    return _auth.signInWithPassword(email: email, password: password);
  }

  Future<AuthResponse> signUpCustomer(
    String email,
    String password, {
    String? fullName,
    DateTime? birthDate,
    // Neu: Unternehmer-Registrierung. Wenn customerType == 'business',
    // erwartet der Trigger die Rechnungsanschrift und Steuernummer aus dem
    // Metadata. Optional: USt-IdNr. und Firmenname.
    String customerType = 'private',
    String? companyName,
    String? billingStreet,
    String? billingZip,
    String? billingCity,
    String? billingCountry,
    String? taxNumber,
    String? vatId,
  }) {
    return _auth.signUp(
      email: email,
      password: password,
      data: {
        'role': 'customer',
        'customer_type': customerType,
        if (fullName != null) 'full_name': fullName,
        if (birthDate != null)
          'birth_date': birthDate.toIso8601String().substring(0, 10),
        if (companyName != null && companyName.isNotEmpty)
          'company_name': companyName,
        if (billingStreet != null && billingStreet.isNotEmpty)
          'billing_street': billingStreet,
        if (billingZip != null && billingZip.isNotEmpty)
          'billing_zip': billingZip,
        if (billingCity != null && billingCity.isNotEmpty)
          'billing_city': billingCity,
        if (billingCountry != null && billingCountry.isNotEmpty)
          'billing_country': billingCountry,
        if (taxNumber != null && taxNumber.isNotEmpty) 'tax_number': taxNumber,
        if (vatId != null && vatId.isNotEmpty) 'vat_id': vatId,
      },
    );
  }

  Future<void> resetPassword(String email) {
    return _auth.resetPasswordForEmail(email);
  }

  Future<void> signOut() => _auth.signOut();

  /// Profil des aktuellen Nutzers laden.
  Future<ProfileDto?> fetchCurrentProfile() async {
    final id = currentUserId;
    if (id == null) return null;
    final row = await _client
        .from('profiles')
        .select('id, email, full_name, role, status')
        .eq('id', id)
        .maybeSingle();
    if (row == null) return null;
    return ProfileDto.fromMap(row);
  }

  /// Serverseitige Permission-Prüfung via RPC.
  Future<bool> hasPermission(String permissionKey) async {
    final result = await _client.rpc(
      'auth_has_permission',
      params: {'perm': permissionKey},
    );
    return result == true;
  }

  /// Effektive Permissions des aktuellen Nutzers (für UI-Gating).
  Future<List<String>> myPermissions() async {
    final result = await _client.rpc('my_permissions');
    if (result is List) return result.map((e) => e.toString()).toList();
    return const [];
  }

  // ── MFA (TOTP) ────────────────────────────────────────────────────────
  Future<AuthMFAEnrollResponse> enrollTotp() {
    return _auth.mfa.enroll(factorType: FactorType.totp);
  }

  Future<void> verifyTotp(String factorId, String code) async {
    final challenge = await _auth.mfa.challenge(factorId: factorId);
    await _auth.mfa.verify(
      factorId: factorId,
      challengeId: challenge.id,
      code: code,
    );
  }
}
