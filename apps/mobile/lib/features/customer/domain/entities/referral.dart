import 'package:equatable/equatable.dart';

import '../../../../core/config/app_config.dart';

/// Stand einer einzelnen Empfehlung aus Sicht des Werbers.
enum ReferralStatus {
  /// Geworbene Person hat sich registriert, aber noch kein Abo.
  registered,

  /// Erstes kostenpflichtiges Abo abgeschlossen — Prämie läuft, ist aber
  /// bis zum Ablauf der Widerrufsfrist noch nicht ausgezahlt.
  qualified,

  /// Prämie gutgeschrieben.
  rewarded,

  /// Abgelehnt (z. B. Jahres-Höchstzahl erreicht, nicht das erste Abo).
  rejected;

  static ReferralStatus parse(String? raw) => switch (raw) {
        'qualified' => ReferralStatus.qualified,
        'rewarded' => ReferralStatus.rewarded,
        'rejected' => ReferralStatus.rejected,
        _ => ReferralStatus.registered,
      };

  String get label => switch (this) {
        ReferralStatus.registered => 'Registriert',
        ReferralStatus.qualified => 'Abo abgeschlossen',
        ReferralStatus.rewarded => 'Prämie gutgeschrieben',
        ReferralStatus.rejected => 'Nicht gewertet',
      };
}

/// Eine geworbene Person in der Empfehlungs-Historie.
class ReferralEntry extends Equatable {
  const ReferralEntry({
    required this.id,
    required this.name,
    required this.status,
    required this.months,
    this.plan,
    this.payableAt,
    this.rewardedAt,
    required this.registeredAt,
  });

  factory ReferralEntry.fromJson(Map<String, dynamic> json) => ReferralEntry(
        id: json['id'] as String,
        name: (json['name'] as String?)?.trim().isNotEmpty ?? false
            ? json['name'] as String
            : 'Freund*in',
        status: ReferralStatus.parse(json['status'] as String?),
        months: (json['months'] as num?)?.toInt() ?? 0,
        plan: json['plan'] as String?,
        payableAt: DateTime.tryParse(json['payable_at'] as String? ?? ''),
        rewardedAt: DateTime.tryParse(json['rewarded_at'] as String? ?? ''),
        registeredAt:
            DateTime.tryParse(json['registered_at'] as String? ?? '') ??
                DateTime.now(),
      );

  final String id;
  final String name;
  final ReferralStatus status;
  final int months;
  final String? plan;
  final DateTime? payableAt;
  final DateTime? rewardedAt;
  final DateTime registeredAt;

  /// Was in der Historie in der Spalte „Belohnung" steht.
  String get rewardLabel => switch (status) {
        ReferralStatus.rewarded => '+$months ${months == 1 ? 'Monat' : 'Monate'}',
        ReferralStatus.qualified => 'Wartet auf Fristablauf',
        ReferralStatus.registered => 'Wartet auf Abo',
        ReferralStatus.rejected => '—',
      };

  @override
  List<Object?> get props => [id, status, months, rewardedAt];
}

/// Eine gewährte Prämie (Freimonate, Badge, Lifetime, Guthaben).
class ReferralReward extends Equatable {
  const ReferralReward({
    required this.kind,
    required this.months,
    required this.grantedAt,
    this.badgeCode,
    this.note,
  });

  factory ReferralReward.fromJson(Map<String, dynamic> json) => ReferralReward(
        kind: json['kind'] as String? ?? 'referral',
        months: (json['months'] as num?)?.toInt() ?? 0,
        badgeCode: json['badge_code'] as String?,
        note: json['note'] as String?,
        grantedAt: DateTime.tryParse(json['granted_at'] as String? ?? '') ??
            DateTime.now(),
      );

  final String kind;
  final int months;
  final String? badgeCode;
  final String? note;
  final DateTime grantedAt;

  @override
  List<Object?> get props => [kind, months, badgeCode, grantedAt];
}

/// Nächster Meilenstein („noch 2 Empfehlungen bis zum Supporter-Badge").
class ReferralMilestone extends Equatable {
  const ReferralMilestone({
    required this.threshold,
    required this.bonusMonths,
    required this.label,
    this.badgeCode,
  });

  factory ReferralMilestone.fromJson(Map<String, dynamic> json) =>
      ReferralMilestone(
        threshold: (json['threshold'] as num).toInt(),
        bonusMonths: (json['bonus_months'] as num?)?.toInt() ?? 0,
        badgeCode: json['badge_code'] as String?,
        label: json['label'] as String? ?? '',
      );

  final int threshold;
  final int bonusMonths;
  final String? badgeCode;
  final String label;

  @override
  List<Object?> get props => [threshold, bonusMonths, badgeCode];
}

/// Gesamtstand des Empfehlungsprogramms für den eingeloggten Kunden
/// (RPC `my_referral_status`).
class ReferralStatusSummary extends Equatable {
  const ReferralStatusSummary({
    required this.enabled,
    required this.code,
    required this.rewardedCount,
    required this.pendingCount,
    required this.monthsTotal,
    required this.monthsMonthly,
    required this.monthsYearly,
    required this.history,
    required this.rewards,
    this.nextMilestone,
  });

  factory ReferralStatusSummary.fromJson(Map<String, dynamic> json) =>
      ReferralStatusSummary(
        enabled: json['enabled'] as bool? ?? false,
        code: json['code'] as String?,
        rewardedCount: (json['rewarded_count'] as num?)?.toInt() ?? 0,
        pendingCount: (json['pending_count'] as num?)?.toInt() ?? 0,
        monthsTotal: (json['months_total'] as num?)?.toInt() ?? 0,
        monthsMonthly: (json['months_monthly'] as num?)?.toInt() ?? 1,
        monthsYearly: (json['months_yearly'] as num?)?.toInt() ?? 2,
        nextMilestone: json['next_milestone'] == null
            ? null
            : ReferralMilestone.fromJson(
                Map<String, dynamic>.from(json['next_milestone'] as Map),
              ),
        history: ((json['history'] as List?) ?? const [])
            .map(
              (e) =>
                  ReferralEntry.fromJson(Map<String, dynamic>.from(e as Map)),
            )
            .toList(),
        rewards: ((json['rewards'] as List?) ?? const [])
            .map(
              (e) =>
                  ReferralReward.fromJson(Map<String, dynamic>.from(e as Map)),
            )
            .toList(),
      );

  final bool enabled;

  /// `null`, solange noch kein Code erzeugt wurde.
  final String? code;
  final int rewardedCount;
  final int pendingCount;
  final int monthsTotal;
  final int monthsMonthly;
  final int monthsYearly;
  final ReferralMilestone? nextMilestone;
  final List<ReferralEntry> history;
  final List<ReferralReward> rewards;

  /// Basis-URL für den Teilen-Link. Muss zur Deeplink-Konfiguration passen.
  ///
  /// Kommt aus `APP_PUBLIC_URL` (siehe [AppConfig]), damit der Link beim
  /// Domainwechsel nicht einzeln nachgezogen werden muss. Ein Wert ohne
  /// Schrägstrich am Ende ergäbe `…de#/r/CODE` statt `…de/#/r/CODE` —
  /// deshalb verlangt [AppConfig.appPublicUrl] den abschliessenden
  /// Schrägstrich. Hier lässt sich das nicht abfangen, weil der Wert
  /// konstant sein muss.
  static const _base = String.fromEnvironment(
    'APP_PUBLIC_URL',
    defaultValue: AppConfig.defaultAppPublicUrl,
  );
  static const shareBase = '$_base#/r/';

  String? get shareLink => code == null ? null : '$shareBase$code';

  /// Fortschritt zum nächsten Meilenstein (0…1).
  double get milestoneProgress {
    final next = nextMilestone;
    if (next == null || next.threshold <= 0) return 1;
    return (rewardedCount / next.threshold).clamp(0.0, 1.0);
  }

  int get missingToMilestone {
    final next = nextMilestone;
    if (next == null) return 0;
    final missing = next.threshold - rewardedCount;
    return missing < 0 ? 0 : missing;
  }

  @override
  List<Object?> get props =>
      [enabled, code, rewardedCount, pendingCount, monthsTotal];
}
