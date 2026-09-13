import 'package:equatable/equatable.dart';

/// Ergebnis des Starts einer TOTP-Einrichtung (MFA).
class MfaEnrollment extends Equatable {
  const MfaEnrollment({
    required this.factorId,
    required this.secret,
    required this.uri,
  });

  /// ID des Faktors (für die anschließende Verifikation).
  final String factorId;

  /// Geheimer Schlüssel zur manuellen Eingabe in der Authenticator-App.
  final String secret;

  /// otpauth://-URI (Grundlage für QR-Code).
  final String uri;

  @override
  List<Object?> get props => [factorId, secret, uri];
}
