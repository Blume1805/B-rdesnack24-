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
  }) {
    return _auth.signUp(
      email: email,
      password: password,
      data: {
        'role': 'customer',
        if (fullName != null) 'full_name': fullName,
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
}
