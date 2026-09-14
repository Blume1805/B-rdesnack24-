/// Infrastruktur-Exceptions der Data-Schicht. Werden in Repositories zu
/// [Failure]s gemappt; verlassen niemals die Data-Schicht roh.
class AppException implements Exception {
  AppException(this.message, {this.cause});
  final String message;
  final Object? cause;

  @override
  String toString() => 'AppException: $message';
}

class CacheException extends AppException {
  CacheException(super.message, {super.cause});
}
