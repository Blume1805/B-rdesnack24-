import 'package:supabase_flutter/supabase_flutter.dart';

/// Stub für die Web-Demo: Push (FCM) wird nur in nativen Builds eingebunden;
/// hier degradiert der Dienst sauber, damit der Web-Build keine Firebase-
/// Abhängigkeiten zieht (firebase_messaging_web crasht ohne firebase_options).
class PushService {
  PushService(this._client);
  // ignore: unused_field
  final SupabaseClient _client;

  /// Wird in bootstrap gesetzt, sobald Firebase erfolgreich initialisiert wurde.
  static bool available = false;

  Future<void> registerCurrentDevice() async {
    // No-op in der Web-Demo. Native Builds binden Firebase ein und überschreiben
    // diese Klasse über die DI/CI-Variante.
  }
}
