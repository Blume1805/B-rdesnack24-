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
  // v2: der v1-Schlüssel wird bewusst NICHT weiterverwendet. Nach dem
  // Katalogwechsel steckten in alten Snapshots noch Coupons auf Produkte,
  // die es gar nicht mehr gibt („Airwaves Cool Cassis Dragees") — die
  // erschienen im Kundenbereich weiter, weil der Cache kein Ablaufdatum
  // hatte. Der neue Schlüssel entwertet jeden Altbestand auf einen Schlag.
  static const _key = 'offline_personal_offers_v2';
  static const _tsKey = 'offline_personal_offers_ts_v2';

  /// Ab diesem Alter ist ein Snapshot wertlos: Coupons laufen nach spätestens
  /// 14 Tagen ab, und der Katalog kann sich zwischenzeitlich geändert haben.
  /// Lieber gar kein Angebot zeigen als ein erfundenes.
  static const _maxAge = Duration(days: 14);

  static Future<void> save(List<PersonalOffer> offers) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _key,
        jsonEncode([for (final o in offers) o.toJson()]),
      );
      await prefs.setString(_tsKey, DateTime.now().toIso8601String());
    } catch (_) {
      // Cache ist best-effort — Fehler hier dürfen den Online-Pfad nie stören.
    }
  }

  /// Gibt den Snapshot zurück oder null, wenn keiner (mehr) gilt.
  ///
  /// Verworfen wird ein Snapshot, der älter als [_maxAge] ist; einzelne
  /// abgelaufene Coupons fallen zusätzlich raus. Ein Coupon, der am Automaten
  /// ohnehin abgelehnt würde, hilft niemandem — er sieht nur wie ein Angebot
  /// aus, das es nicht gibt.
  static Future<List<PersonalOffer>?> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();

      final ts = DateTime.tryParse(prefs.getString(_tsKey) ?? '');
      if (ts == null || DateTime.now().difference(ts) > _maxAge) {
        await clear();
        return null;
      }

      final raw = prefs.getString(_key);
      if (raw == null) return null;
      final list = jsonDecode(raw) as List;
      final offers = [
        for (final e in list)
          PersonalOffer.fromJson(Map<String, dynamic>.from(e as Map)),
      ].where((o) => !o.isExpired).toList();

      return offers.isEmpty ? null : offers;
    } catch (_) {
      return null;
    }
  }

  /// Snapshot verwerfen — z. B. beim Abmelden oder wenn er veraltet ist.
  static Future<void> clear() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(_key);
      await prefs.remove(_tsKey);
    } catch (_) {
      // best-effort
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
