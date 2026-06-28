import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/error/failures.dart';
import '../../domain/entities/app_user.dart';
import '../../domain/repositories/auth_repository.dart';
import '../datasources/auth_remote_data_source.dart';

/// Supabase-Implementierung von [AuthRepository].
/// Mappt Infrastruktur-Exceptions auf domänenspezifische [Failure]s.
class AuthRepositoryImpl implements AuthRepository {
  AuthRepositoryImpl(this._remote);

  final AuthRemoteDataSource _remote;

  @override
  Future<AppUser?> currentUser() async {
    try {
      final dto = await _remote.fetchCurrentProfile();
      return dto?.toEntity();
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<AppUser> signIn({
    required String email,
    required String password,
  }) async {
    try {
      await _remote.signInWithPassword(email, password);
      final dto = await _remote.fetchCurrentProfile();
      if (dto == null) {
        throw const AuthFailure('Profil konnte nicht geladen werden.');
      }
      final user = dto.toEntity();
      if (!user.isActive) {
        // Deaktivierte/archivierte Konten werden serverseitig ohnehin gesperrt.
        await _remote.signOut();
        throw const PermissionFailure('Konto ist nicht aktiv.');
      }
      return user;
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<void> registerCustomer({
    required String email,
    required String password,
    String? fullName,
  }) async {
    try {
      await _remote.signUpCustomer(email, password, fullName: fullName);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<void> sendPasswordReset(String email) async {
    try {
      await _remote.resetPassword(email);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<void> signOut() async {
    try {
      await _remote.signOut();
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<bool> hasPermission(String permissionKey) async {
    try {
      return await _remote.hasPermission(permissionKey);
    } catch (e) {
      throw _map(e);
    }
  }

  Failure _map(Object e) {
    if (e is Failure) return e;
    if (e is AuthException) {
      return AuthFailure(e.message, cause: e);
    }
    if (e is PostgrestException) {
      // RLS-Ablehnung o. Ä.
      if (e.code == '42501') {
        return PermissionFailure(e.message, cause: e);
      }
      return ServerFailure(e.message, cause: e);
    }
    return UnknownFailure('Unerwarteter Fehler: $e', cause: e);
  }
}
