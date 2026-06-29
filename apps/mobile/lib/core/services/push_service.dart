import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Kapselt FCM: Berechtigung, Token-Abruf und Registrierung in device_tokens.
/// Degradiert sauber, wenn Firebase nicht konfiguriert ist (siehe [available]).
class PushService {
  PushService(this._client);
  final SupabaseClient _client;

  /// Wird in bootstrap gesetzt, sobald Firebase erfolgreich initialisiert wurde.
  static bool available = false;

  String get _platform => kIsWeb
      ? 'web'
      : switch (defaultTargetPlatform) {
          TargetPlatform.iOS => 'ios',
          TargetPlatform.android => 'android',
          _ => 'web',
        };

  /// Registriert das aktuelle Gerätetoken für den angemeldeten Nutzer.
  Future<void> registerCurrentDevice() async {
    if (!available) return;
    final uid = _client.auth.currentUser?.id;
    if (uid == null) return;
    try {
      final messaging = FirebaseMessaging.instance;
      await messaging.requestPermission();
      final token = await messaging.getToken();
      if (token == null) return;
      await _upsert(uid, token);
      messaging.onTokenRefresh.listen((t) => _upsert(uid, t));
    } catch (_) {
      // Push ist optional; Fehler dürfen die App nicht beeinträchtigen.
    }
  }

  Future<void> _upsert(String uid, String token) async {
    await _client.from('device_tokens').upsert(
      {
        'user_id': uid,
        'token': token,
        'platform': _platform,
        'last_seen': DateTime.now().toIso8601String(),
      },
      onConflict: 'token',
    );
  }
}
