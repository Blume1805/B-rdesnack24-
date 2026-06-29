import 'dart:convert';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../di/providers.dart';

/// Offline-Outbox für Protokoll-Schreibvorgänge (Feldarbeit ohne Verbindung).
/// Einträge werden lokal persistiert und bei Verbindung synchronisiert.
class OutboxService {
  OutboxService(this._client);
  final SupabaseClient _client;

  static const _key = 'outbox_v1';

  Future<bool> isOnline() async {
    final result = await Connectivity().checkConnectivity();
    return result.any((r) => r != ConnectivityResult.none);
  }

  Future<void> enqueue(String table, Map<String, dynamic> data) async {
    final prefs = await SharedPreferences.getInstance();
    final list = prefs.getStringList(_key) ?? [];
    final payload = {
      ...data,
      'recorded_by': _client.auth.currentUser?.id,
    };
    list.add(jsonEncode({'table': table, 'data': payload}));
    await prefs.setStringList(_key, list);
  }

  Future<int> pendingCount() async {
    final prefs = await SharedPreferences.getInstance();
    return (prefs.getStringList(_key) ?? []).length;
  }

  /// Versucht alle ausstehenden Einträge zu schreiben; behält fehlgeschlagene.
  Future<int> flush() async {
    final prefs = await SharedPreferences.getInstance();
    final list = prefs.getStringList(_key) ?? [];
    if (list.isEmpty) return 0;

    final remaining = <String>[];
    var sent = 0;
    for (final item in list) {
      try {
        final m = jsonDecode(item) as Map<String, dynamic>;
        await _client.from(m['table'] as String).insert(m['data']);
        sent++;
      } catch (_) {
        remaining.add(item); // bei Fehler erneut versuchen
      }
    }
    await prefs.setStringList(_key, remaining);
    return sent;
  }
}

final outboxServiceProvider = Provider<OutboxService>(
  (ref) => OutboxService(ref.watch(supabaseClientProvider)),
);

/// Flusht die Outbox beim Start und sobald wieder Verbindung besteht.
final outboxSyncProvider = Provider<void>((ref) {
  final outbox = ref.watch(outboxServiceProvider);
  // Initialer Versuch.
  outbox.flush();
  // Bei Verbindungsänderung erneut.
  final sub = Connectivity().onConnectivityChanged.listen((result) {
    if (result.any((r) => r != ConnectivityResult.none)) {
      outbox.flush();
    }
  });
  ref.onDispose(sub.cancel);
});
