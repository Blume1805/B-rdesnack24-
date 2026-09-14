import 'package:equatable/equatable.dart';

/// Domänenfehler — von Repositories/UseCases nach außen gereicht.
/// Trennt fachliche Fehler von Infrastruktur-Exceptions.
sealed class Failure extends Equatable {
  const Failure(this.message, {this.cause});

  final String message;
  final Object? cause;

  @override
  List<Object?> get props => [message];
}

/// Ungültige Anmeldedaten / fehlende Authentifizierung.
class AuthFailure extends Failure {
  const AuthFailure(super.message, {super.cause});
}

/// Fehlende Berechtigung (serverseitig durch RLS abgelehnt).
class PermissionFailure extends Failure {
  const PermissionFailure(super.message, {super.cause});
}

/// Netzwerk-/Verbindungsfehler.
class NetworkFailure extends Failure {
  const NetworkFailure(super.message, {super.cause});
}

/// Server-/Datenbankfehler.
class ServerFailure extends Failure {
  const ServerFailure(super.message, {super.cause});
}

/// Validierungsfehler (Eingaben).
class ValidationFailure extends Failure {
  const ValidationFailure(super.message, {super.cause});
}

/// Unerwarteter Fehler.
class UnknownFailure extends Failure {
  const UnknownFailure(super.message, {super.cause});
}
