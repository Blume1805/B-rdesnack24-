/// Push-Benachrichtigungen in der Web-App (Wunsch Philipp 19.11.2026: der
/// andere Gesellschafter soll erfahren, dass eine Freigabe ansteht).
///
/// Ablauf: Browser fragt einmal um Erlaubnis (nur nach einem Tipp), legt
/// ein Abonnement an; das Abonnement wird in `device_tokens` (Plattform
/// `web`) gespeichert. Der Server verschlüsselt jede Nachricht für genau
/// dieses Abonnement (approval-notify/webpush.ts).
///
/// iPhone/iPad: Web-Push gibt es nur, wenn die App über „Zum Home-
/// Bildschirm" abgelegt und von dort geöffnet wurde (ab iOS 16.4).
library;

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'web_push_stub.dart' if (dart.library.js_interop) 'web_push_web.dart'
    as impl;

enum PushZustand {
  /// Gerät/Browser kann kein Web-Push.
  nichtUnterstuetzt,

  /// iPhone/iPad im Browser-Tab: erst zum Home-Bildschirm hinzufügen.
  homeBildschirmNoetig,

  /// Benachrichtigungen wurden für die App blockiert.
  abgelehnt,

  /// Möglich, aber noch nicht eingeschaltet.
  aus,

  /// Eingeschaltet.
  aktiv,
}

class WebPush {
  WebPush(this._client);
  final SupabaseClient _client;

  Future<PushZustand> zustand() => impl.zustand();

  /// Schaltet Push ein. Nur aus einem Tipp heraus aufrufen: Browser fragen
  /// sonst nicht um Erlaubnis.
  Future<PushZustand> einschalten() async {
    final schluessel = await _oeffentlicherSchluessel();
    if (schluessel == null) {
      throw StateError('Push ist auf dem Server noch nicht eingerichtet.');
    }
    final abo = await impl.abonnieren(schluessel);
    if (abo == null) return impl.zustand();
    await _speichern(abo);
    return PushZustand.aktiv;
  }

  /// Beim Start: vorhandenes Abonnement erneut ablegen (Geräte wechseln,
  /// Browser erneuern Abonnements gelegentlich).
  Future<void> abgleichen() async {
    try {
      final abo = await impl.vorhandenesAbo();
      if (abo != null) await _speichern(abo);
    } catch (e) {
      debugPrint('[web_push] Abgleich: $e');
    }
  }

  Future<String?> _oeffentlicherSchluessel() async {
    final res = await _client.functions
        .invoke('approval-notify', method: HttpMethod.get);
    final daten = res.data;
    return daten is Map ? daten['public_key'] as String? : null;
  }

  Future<void> _speichern(String abo) async {
    final uid = _client.auth.currentUser?.id;
    if (uid == null) return;
    await _client.from('device_tokens').upsert(
      {
        'user_id': uid,
        'token': abo,
        'platform': 'web',
        'last_seen': DateTime.now().toUtc().toIso8601String(),
      },
      onConflict: 'token',
    );
  }
}
