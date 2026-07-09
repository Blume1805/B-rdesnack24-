import 'package:equatable/equatable.dart';

/// Loyalty-Punktestand des aktuellen Kalendermonats.
///
/// 1 Punkt = 1 Cent Umsatz (aus `purchases.total_gross`).  Am 1. eines
/// Monats beginnt automatisch ein neuer Zyklus — die Punkte werden nicht
/// gelöscht, sondern die Aggregation summiert nur den laufenden Monat.
class LoyaltyStatus extends Equatable {
  const LoyaltyStatus({
    required this.points,
    required this.reachedTiers,
    required this.nextTier,
    required this.pointsToNext,
    required this.monthStart,
    required this.nextReset,
  });

  final int points;
  final List<int> reachedTiers;
  final int? nextTier;
  final int pointsToNext;
  final DateTime monthStart;
  final DateTime nextReset;

  /// Fortschritt zum nächsten Meilenstein (0..1).  Wenn alle Meilensteine
  /// erreicht sind → 1.0.
  double get progressToNext {
    if (nextTier == null) return 1.0;
    final prev = reachedTiers.isEmpty ? 0 : reachedTiers.last;
    final span = nextTier! - prev;
    if (span <= 0) return 1.0;
    return ((points - prev) / span).clamp(0.0, 1.0);
  }

  factory LoyaltyStatus.fromJson(Map<String, dynamic> j) => LoyaltyStatus(
        points: (j['points'] as num?)?.toInt() ?? 0,
        reachedTiers: ((j['reached_tiers'] as List?) ?? const [])
            .map((e) => (e as num).toInt())
            .toList(),
        nextTier: (j['next_tier'] as num?)?.toInt(),
        pointsToNext: (j['points_to_next'] as num?)?.toInt() ?? 0,
        monthStart: DateTime.tryParse(j['month_start']?.toString() ?? '') ??
            DateTime.now(),
        nextReset: DateTime.tryParse(j['next_reset']?.toString() ?? '') ??
            DateTime.now(),
      );

  @override
  List<Object?> get props =>
      [points, reachedTiers, nextTier, pointsToNext, monthStart, nextReset];
}
