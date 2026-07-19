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
  /// [customerType] = 'private' (Standard) oder 'business'. Bei 'business'
  /// müssen Anschrift und Steuernummer angegeben werden, damit § 14 UStG
  /// erfüllt ist.
  Future<void> registerCustomer({
    required String email,
    required String password,
    String? fullName,
    DateTime? birthDate,
    String customerType,
    String? companyName,
    String? billingStreet,
    String? billingZip,
    String? billingCity,
    String? billingCountry,
    String? taxNumber,
    String? vatId,
  });

  /// Passwort-Zurücksetzen anstoßen.
  Future<void> sendPasswordReset(String email);

  /// Abmelden.
  Future<void> signOut();

  /// Permission-Prüfung serverseitig (RPC auth_has_permission).
  Future<bool> hasPermission(String permissionKey);

  /// Effektive Permissions des aktuellen Nutzers (für UI-Gating).
  Future<Set<String>> myPermissions();

  /// MFA: TOTP-Einrichtung starten (liefert Secret/URI zur App-Kopplung).
  Future<MfaEnrollment> startTotpEnrollment();

  /// MFA: TOTP-Einrichtung mit 6-stelligem Code bestätigen.
  Future<void> confirmTotpEnrollment({
    required String factorId,
    required String code,
  });

  /// MFA: hat der aktuelle Nutzer einen bestätigten TOTP-Faktor?
  Future<bool> hasMfaEnrolled();
}
