import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../data/datasources/auth_remote_data_source.dart';
import '../../data/repositories/auth_repository_impl.dart';
import '../../domain/entities/app_user.dart';
import '../../domain/repositories/auth_repository.dart';

final authRemoteDataSourceProvider = Provider<AuthRemoteDataSource>(
  (ref) => AuthRemoteDataSource(ref.watch(supabaseClientProvider)),
);

final authRepositoryProvider = Provider<AuthRepository>(
  (ref) => AuthRepositoryImpl(ref.watch(authRemoteDataSourceProvider)),
);

/// Aktueller [AppUser] (inkl. Profil), reagiert auf Auth-Statusänderungen.
final currentUserProvider = FutureProvider<AppUser?>((ref) async {
  // Neu auflösen, wenn sich der Auth-Status ändert.
  ref.watch(authStateChangesProvider);
  return ref.watch(authRepositoryProvider).currentUser();
});

/// Effektive Permissions des aktuellen Nutzers (für UI-Gating).
final currentPermissionsProvider = FutureProvider<Set<String>>((ref) async {
  final user = await ref.watch(currentUserProvider.future);
  if (user == null) return <String>{};
  return ref.watch(authRepositoryProvider).myPermissions();
});

/// Hat der aktuelle Nutzer einen bestätigten TOTP-Faktor (MFA)?
/// Für die Sicherheits-Erinnerung interner Rollen im Home-Shell.
final mfaEnrolledProvider = FutureProvider<bool>((ref) async {
  final user = await ref.watch(currentUserProvider.future);
  if (user == null) return true;
  return ref.watch(authRepositoryProvider).hasMfaEnrolled();
});

/// Session-weites „Später"-Dismiss der MFA-Erinnerung.
final mfaReminderDismissedProvider = StateProvider<bool>((ref) => false);

/// Controller für Anmelde-/Registrierungsaktionen.
class AuthController extends StateNotifier<AsyncValue<void>> {
  AuthController(this._ref) : super(const AsyncData(null));

  final Ref _ref;
  AuthRepository get _repo => _ref.read(authRepositoryProvider);

  Future<bool> signIn(String email, String password) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(
      () => _repo.signIn(email: email.trim(), password: password),
    );
    if (!state.hasError) {
      _ref.invalidate(currentUserProvider);
      return true;
    }
    return false;
  }

  Future<bool> registerCustomer(
    String email,
    String password, {
    String? fullName,
    DateTime? birthDate,
    String customerType = 'private',
    String? companyName,
    String? billingStreet,
    String? billingZip,
    String? billingCity,
    String? billingCountry,
    String? taxNumber,
    String? vatId,
  }) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(
      () => _repo.registerCustomer(
        email: email.trim(),
        password: password,
        fullName: fullName,
        birthDate: birthDate,
        customerType: customerType,
        companyName: companyName,
        billingStreet: billingStreet,
        billingZip: billingZip,
        billingCity: billingCity,
        billingCountry: billingCountry,
        taxNumber: taxNumber,
        vatId: vatId,
      ),
    );
    return !state.hasError;
  }

  Future<void> signOut() async {
    await _repo.signOut();
    _ref.invalidate(currentUserProvider);
  }
}

final authControllerProvider =
    StateNotifierProvider<AuthController, AsyncValue<void>>(
  AuthController.new,
);
