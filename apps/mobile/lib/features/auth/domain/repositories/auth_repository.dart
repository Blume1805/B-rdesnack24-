import '../entities/app_user.dart';
import '../entities/mfa_enrollment.dart';

/// Vertrag der Authentifizierung. Implementierung in der Data-Schicht.
/// Wirft bei Fehlern eine [Failure] (siehe core/error/failures.dart).
abstract interface class AuthRepository {
  /// Aktuell angemeldeter Nutzer inkl. Profil, oder null.
  Future<AppUser?> currentUser();

  /// Anmeldung mit E-Mail/Passwort.
  Future<AppUser> signIn({required String email, required String password});

  /// Self-Signup (nur Kundenrolle; interne Nutzer werden eingeladen).
  Future<void> registerCustomer({
    required String email,
    required String password,
    String? fullName,
  });

  /// Passwort-Zurücksetzen anstoßen.
  Future<void> sendPasswordReset(String email);

  /// Abmelden.
  Future<void> signOut();

  /// Permission-Prüfung serverseitig (RPC auth_has_permission).
  Future<bool> hasPermission(String permissionKey);

  /// MFA: TOTP-Einrichtung starten (liefert Secret/URI zur App-Kopplung).
  Future<MfaEnrollment> startTotpEnrollment();

  /// MFA: TOTP-Einrichtung mit 6-stelligem Code bestätigen.
  Future<void> confirmTotpEnrollment({
    required String factorId,
    required String code,
  });
}
