import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../domain/entities/offer.dart';

/// Offline-Cache für persönliche Angebote/Coupons.
///
/// Am Automaten ist der Empfang oft schlecht — die Einlösecodes müssen
/// aber genau dort verfügbar sein. Nach jedem erfolgreichen Laden wird
/// deshalb ein Snapshot lokal gespeichert (shared_preferences), den der
/// Provider bei Netzwerkfehlern als Fallback anzeigt. Der Cache ist rein
/// lesender Komfort: Aktivieren/Einlösen braucht weiterhin den Server.
class PersonalOfferCache {
  static const _key = 'offline_personal_offers_v1';
  static const _tsKey = 'offline_personal_offers_ts_v1';

  static Future<void> save(List<PersonalOffer> offers) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
          _key, jsonEncode([for (final o in offers) o.toJson()]));
      await prefs.setString(_tsKey, DateTime.now().toIso8601String());
    } catch (_) {
      // Cache ist best-effort — Fehler hier dürfen den Online-Pfad nie stören.
    }
  }

  /// Gibt den Snapshot zurück oder null, wenn keiner existiert.
  static Future<List<PersonalOffer>?> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key);
      if (raw == null) return null;
      final list = jsonDecode(raw) as List;
      return [
        for (final e in list)
          PersonalOffer.fromJson(Map<String, dynamic>.from(e as Map)),
      ];
    } catch (_) {
      return null;
    }
  }

  /// Zeitpunkt des letzten erfolgreichen Snapshots (für den Offline-Hinweis).
  static Future<DateTime?> lastSyncedAt() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_tsKey);
      return raw == null ? null : DateTime.tryParse(raw);
    } catch (_) {
      return null;
    }
  }
}
