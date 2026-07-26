import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../di/providers.dart';

/// Ergebnis-Phase eines Kaufversuchs.
///
/// Wichtig für den Jugendschutz: Bei aktivierter elterlicher Freigabe
/// (Apple „Ask to Buy" / Google „Kaufgenehmigungen" via Family Link) liefert
/// der Store NICHT sofort `success`, sondern `pending` — die Zahlung bleibt im
/// Wartestatus, bis die Eltern auf ihrem Gerät zustimmen. Die App darf in
/// diesem Fall KEINE Inhalte freischalten und muss beim nächsten Start
/// nachhören, ob inzwischen freigegeben wurde.
enum PurchasePhase { success, pending, cancelled, error }

/// Ergebnis eines Kaufversuchs (store-unabhängig).
class PurchaseOutcome {
  const PurchaseOutcome(
    this.phase, {
    this.planKey,
    this.message,
    this.emailTo,
  });

  final PurchasePhase phase;
  final String? planKey;
  final String? message;
  final String? emailTo;

  bool get isSuccess => phase == PurchasePhase.success;
  bool get isPending => phase == PurchasePhase.pending;
}

/// Ein „hängender" Kauf, der auf die elterliche Freigabe wartet. Wird lokal
/// persistiert, damit die App den Status auch nach einem Neustart auflösen
/// kann (StoreKit `Transaction.updates` / Play `PurchasesUpdatedListener`).
class PendingPurchase {
  const PendingPurchase({required this.planKey, required this.createdAt});
  final String planKey;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'plan': planKey,
        'created_at': createdAt.toIso8601String(),
      };

  static PendingPurchase? fromJson(Map<String, dynamic> j) {
    final plan = j['plan'] as String?;
    if (plan == null) return null;
    return PendingPurchase(
      planKey: plan,
      createdAt:
          DateTime.tryParse(j['created_at'] as String? ?? '') ?? DateTime.now(),
    );
  }
}

/// Lokale Persistenz des Wartestatus (shared_preferences). Best-effort —
/// Fehler dürfen den Kauf-Flow nie blockieren.
class PendingPurchaseStore {
  static const _key = 'pending_subscription_purchase_v1';

  static Future<void> save(PendingPurchase p) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_key, jsonEncode(p.toJson()));
    } catch (_) {/* ignore */}
  }

  static Future<PendingPurchase?> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key);
      if (raw == null) return null;
      return PendingPurchase.fromJson(
        Map<String, dynamic>.from(jsonDecode(raw) as Map),
      );
    } catch (_) {
      return null;
    }
  }

  static Future<void> clear() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(_key);
    } catch (_) {/* ignore */}
  }
}

/// Store-unabhängige Schnittstelle für den Abo-Kauf. Konkrete Adapter:
///
///  * [EdgeFunctionBillingService] — aktueller Flow (Server bestätigt den
///    Planwechsel; Abrechnung folgt bei Store-Veröffentlichung).
///  * StoreKit-2-Adapter (iOS) — später: `product.purchase()` auswerten,
///    `.pending` explizit abfangen, beim App-Start `Transaction.updates`
///    nachhören und freigegebene Käufe abschließen.
///  * Play-Billing-Adapter (Android) — später: `BillingClient` mit
///    `enablePendingPurchases()` initialisieren (Pflicht für Family-Link-
///    Kinderkonten), im `PurchasesUpdatedListener` den Status
///    `Purchase.PurchaseState.PENDING` vs. `PURCHASED` unterscheiden.
abstract class SubscriptionBillingService {
  /// Startet den Kauf. Kann `success`, `pending` (elterliche Freigabe steht
  /// aus), `cancelled` oder `error` zurückgeben.
  Future<PurchaseOutcome> purchase({
    required String planKey,
    required bool withdrawalConsent,
    required bool ageConsent,
  });

  /// Beim App-Start aufrufen: prüft, ob ein zuvor hängender Kauf inzwischen
  /// freigegeben wurde. Gibt `success` zurück, sobald der Server das Abo als
  /// aktiv meldet; ansonsten `null` (nichts offen) bzw. weiterhin `pending`.
  Future<PurchaseOutcome?> resolvePending();
}

/// Standard-Adapter: nutzt die Edge Function `subscription-choose`.
///
/// Der Server ist die Wahrheit über den Abo-Status. Sobald ein echter Store
/// verdrahtet ist, meldet dieser bei Jugendschutz-Freigabe `pending`; bis
/// dahin gilt der Planwechsel nach erfolgreicher Bestätigung als `success`.
/// Der Server kann optional `status: 'pending'` liefern (Ask-to-Buy-Weiche),
/// das hier bereits ausgewertet wird.
class EdgeFunctionBillingService implements SubscriptionBillingService {
  EdgeFunctionBillingService(this._client);
  final SupabaseClient _client;

  @override
  Future<PurchaseOutcome> purchase({
    required String planKey,
    required bool withdrawalConsent,
    required bool ageConsent,
  }) async {
    try {
      final res = await _client.functions.invoke(
        'subscription-choose',
        body: {
          'plan': planKey,
          'withdrawal_consent': withdrawalConsent,
          'age_consent': ageConsent,
        },
      );
      final data = Map<String, dynamic>.from(res.data as Map);
      if (data['ok'] != true) {
        return PurchaseOutcome(
          PurchasePhase.error,
          planKey: planKey,
          message: (data['error'] ?? 'Unbekannter Fehler').toString(),
        );
      }
      // Ask-to-Buy-Weiche: Store/Server signalisiert Wartestatus.
      if (data['status'] == 'pending') {
        await PendingPurchaseStore.save(
          PendingPurchase(planKey: planKey, createdAt: DateTime.now()),
        );
        return PurchaseOutcome(PurchasePhase.pending, planKey: planKey);
      }
      await PendingPurchaseStore.clear();
      return PurchaseOutcome(
        PurchasePhase.success,
        planKey: (data['plan'] ?? planKey).toString(),
        emailTo: (data['email_to'] ?? '').toString(),
      );
    } catch (e) {
      return PurchaseOutcome(
        PurchasePhase.error,
        planKey: planKey,
        message: e.toString().replaceFirst('Exception: ', ''),
      );
    }
  }

  @override
  Future<PurchaseOutcome?> resolvePending() async {
    final pending = await PendingPurchaseStore.load();
    if (pending == null) return null;
    try {
      final res = await _client.rpc('my_subscription');
      final map = Map<String, dynamic>.from(res as Map);
      final active = map['plan'] as String?;
      // Eltern haben freigegeben → Server meldet das Abo jetzt als aktiv.
      if (active != null && active == pending.planKey) {
        await PendingPurchaseStore.clear();
        return PurchaseOutcome(PurchasePhase.success, planKey: active);
      }
    } catch (_) {/* offline: Wartestatus bleibt bestehen */}
    return PurchaseOutcome(PurchasePhase.pending, planKey: pending.planKey);
  }
}

final subscriptionBillingProvider = Provider<SubscriptionBillingService>(
  (ref) => EdgeFunctionBillingService(ref.watch(supabaseClientProvider)),
);
