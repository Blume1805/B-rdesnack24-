import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/feedback.dart';
import '../../../../core/motion/motion.dart';
import '../../../../core/motion/brand_refresh.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';

/// „Status & Belohnungen" — Gamification-Übersicht für Kund:innen.
/// Zeigt die kumulative Status-Stufe (Bronze/Silber/Gold) mit Fortschritt
/// zur nächsten Stufe, den lebenslangen Status-Rabatt (zusätzlich zu den
/// 5 % Abo-Rabatt), laufende Challenges mit Fortschritt und die Sammel-
/// Badges. Alle Werte kommen aus der RPC my_gamification_status
/// (Berechnung serverseitig aus der Kaufhistorie).
class RewardsScreen extends ConsumerStatefulWidget {
  const RewardsScreen({super.key});

  @override
  ConsumerState<RewardsScreen> createState() => _RewardsScreenState();
}

class _RewardsScreenState extends ConsumerState<RewardsScreen> {
  /// Zuletzt gefeierte Stufe — verhindert, dass die Feier bei jedem
  /// Rebuild erneut losgeht. Nur ein echter Aufstieg löst sie aus.
  static String? _celebratedTier;

  static const _tierColors = <String, Color>{
    'basis': Color(0xFF9AA0A6),
    'bronze': Color(0xFFB08D57),
    'silber': Color(0xFF9AA0A6),
    'gold': AppColors.brand,
  };

  /// Bronze/Silber/Gold-Akzente für die Challenge-Kacheln (rotierend nach
  /// Position), damit die Herausforderungen die Status-Farbwelt aufgreifen.
  static const _challengeTierColors = <Color>[
    Color(0xFFB08D57), // Bronze
    Color(0xFF9AA0A6), // Silber
    Color(0xFFD9A400), // Gold (etwas dunkler für Kontrast auf Weiß)
  ];

  static IconData _badgeIcon(String key) {
    switch (key) {
      case 'bolt':
        return Icons.bolt;
      case 'favorite':
        return Icons.favorite;
      case 'workspace':
        return Icons.workspace_premium;
      case 'diamond':
        return Icons.diamond_outlined;
      case 'explore':
        return Icons.explore_outlined;
      case 'restaurant':
        return Icons.restaurant_outlined;
      case 'wb_sunny':
        return Icons.wb_sunny_outlined;
      case 'nightlight':
        return Icons.nightlight_outlined;
      default:
        return Icons.star_outline;
    }
  }

  /// Feiert einen Stufenaufstieg genau einmal — und nur ab Bronze
  /// (Basis ist kein Aufstieg). Sparsam: nur echte Meilensteine.
  void _maybeCelebrate(Map<String, dynamic> data) {
    final tier = Map<String, dynamic>.from(data['tier'] as Map? ?? const {});
    final code = tier['code'] as String?;
    if (code == null || code == 'basis') return;
    if (_celebratedTier == code) return;
    final first = _celebratedTier == null;
    _celebratedTier = code;
    // Beim allerersten Laden nicht feiern — sonst knallt es bei jedem
    // App-Start, obwohl gar nichts erreicht wurde.
    if (first) return;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) showCelebration(context);
    });
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(myGamificationProvider);
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Status & Belohnungen')),
      body: async.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Center(
          child: Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text(
              'Konnte nicht geladen werden: $e',
              style: AppTypography.body(size: 13, color: AppColors.ink),
            ),
          ),
        ),
        data: (data) {
          _maybeCelebrate(data);
          return BrandRefresh(
            onRefresh: () async => ref.invalidate(myGamificationProvider),
            child: ListView(
              padding: const EdgeInsets.all(AppSpacing.s4),
              children: [
                _TierCard(data: data),
                const SizedBox(height: AppSpacing.s4),
                _DiscountCard(data: data),
                const SizedBox(height: AppSpacing.s5),
                const _SectionTitle(
                  eyebrow: 'Dauerrabatt',
                  title: 'Dein Rabatt wächst mit',
                ),
                const SizedBox(height: AppSpacing.s3),
                TierTiles(
                  currentCode: (Map<String, dynamic>.from(
                    data['tier'] as Map? ?? const {},
                  )['code'] as String?),
                ),
                const SizedBox(height: AppSpacing.s5),
                const _SectionTitle(
                  eyebrow: 'Challenges',
                  title: 'Aktuelle Herausforderungen',
                ),
                const SizedBox(height: AppSpacing.s3),
                // Herausforderungen als Stapel — man bearbeitet ohnehin
                // eine nach der anderen.
                StackSlider(
                  height: 118,
                  children: [
                    for (final (i, c)
                        in (data['challenges'] as List? ?? const []).indexed)
                      _ChallengeCard(
                        c: Map<String, dynamic>.from(c as Map),
                        tierColor: _challengeTierColors[i % 3],
                      ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s2),
                const _SectionTitle(
                  eyebrow: 'Sammlung',
                  title: 'Deine Abzeichen',
                ),
                const SizedBox(height: AppSpacing.s3),
                _BadgeGrid(
                  badges: (data['badges'] as List? ?? const [])
                      .map((b) => Map<String, dynamic>.from(b as Map))
                      .toList(),
                  iconOf: _badgeIcon,
                ),
                const SizedBox(height: AppSpacing.s4),
              ],
            ),
          );
        },
      ),
    );
  }
}

class _SectionTitle extends StatelessWidget {
  const _SectionTitle({required this.eyebrow, required this.title});
  final String eyebrow;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Eyebrow(eyebrow),
        const SizedBox(height: 2),
        Text(
          title,
          style: AppTypography.display(
            size: 18,
            weight: FontWeight.w800,
            color: AppColors.ink,
          ),
        ),
      ],
    );
  }
}

class _TierCard extends StatelessWidget {
  const _TierCard({required this.data});
  final Map<String, dynamic> data;

  @override
  Widget build(BuildContext context) {
    final tier = Map<String, dynamic>.from(data['tier'] as Map? ?? {});
    final code = (tier['code'] as String?) ?? 'basis';
    final label = (tier['label'] as String?) ?? 'Basis';
    final color = _RewardsScreenState._tierColors[code] ?? AppColors.brand;
    final progress = ((tier['progress'] as num?) ?? 0).toDouble();
    final nextLabel = tier['next_label'] as String?;
    final nextMin = ((tier['next_min_eur'] as num?) ?? 0).toDouble();
    final gross = ((data['lifetime_gross'] as num?) ?? 0).toDouble();
    final totalPct = ((tier['total_discount_pct'] as num?) ?? 5).toDouble();
    final toNext = (nextMin - gross).clamp(0, double.infinity).toDouble();

    return AppCard(
      topStripeColor: color,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: color.withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(AppRadii.md),
                ),
                child: Icon(Icons.workspace_premium, color: color, size: 28),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '$label-Status',
                      style: AppTypography.display(
                        size: 20,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    ),
                    Text(
                      'Gesamtumsatz ${Formatters.euro(gross)} · '
                      '${_fmtPct(totalPct)} % Dauerrabatt',
                      style: AppTypography.body(
                        size: 12,
                        color: AppColors.textMuted,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          // Fortschritt baut sich beim Erscheinen auf, statt fertig
          // dazustehen — macht den Abstand zur nächsten Stufe spürbar.
          ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child: TweenAnimationBuilder<double>(
              tween: Tween<double>(begin: 0, end: progress.clamp(0.0, 1.0)),
              duration: Motion.duration(
                context,
                const Duration(milliseconds: 700),
              ),
              curve: AppMotion.easeOut,
              builder: (context, v, _) => LinearProgressIndicator(
                value: v,
                minHeight: 10,
                backgroundColor: AppColors.borderSubtle,
                valueColor: AlwaysStoppedAnimation<Color>(color),
              ),
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            nextLabel == null
                ? 'Höchste Stufe erreicht — danke für deine Treue!'
                : 'Noch ${Formatters.euro(toNext)} bis $nextLabel '
                    '(${_fmtPct(5 + ((tier['next_discount_pct'] as num?) ?? 0).toDouble())} % Rabatt).',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: AppColors.textMuted,
            ),
          ),
        ],
      ),
    );
  }
}

/// Prozent hübsch: ganze Zahlen ohne Nachkomma, sonst mit Komma (7,5).
String _fmtPct(double pct) => pct % 1 == 0
    ? pct.toStringAsFixed(0)
    : pct.toStringAsFixed(1).replaceAll('.', ',');

/// Dauerrabatt-Karte: zeigt den effektiven App-Rabatt (5 % Abo + Status-
/// Zusatzrabatt) als große Zahl, mit Aufschlüsselung Abo + Status.
class _DiscountCard extends StatelessWidget {
  const _DiscountCard({required this.data});
  final Map<String, dynamic> data;

  @override
  Widget build(BuildContext context) {
    final tier = Map<String, dynamic>.from(data['tier'] as Map? ?? {});
    final basePct = ((data['base_discount_pct'] as num?) ?? 5).toDouble();
    final bonusPct = ((tier['discount_pct'] as num?) ?? 0).toDouble();
    final totalPct =
        ((tier['total_discount_pct'] as num?) ?? basePct).toDouble();
    return AppCard(
      color: AppColors.ink,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Row(
        children: [
          const Icon(Icons.sell_outlined, color: AppColors.brand, size: 30),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Dein Dauerrabatt',
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w700,
                    color: AppColors.brand,
                  ),
                ),
                Text(
                  '${_fmtPct(totalPct)} %',
                  style: AppTypography.display(
                    size: 28,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  bonusPct > 0
                      ? '${_fmtPct(basePct)} % Abo-Rabatt + ${_fmtPct(bonusPct)} % Status — '
                          'auf jeden Einkauf im Abo, lebenslang.'
                      : '${_fmtPct(basePct)} % Abo-Rabatt auf jeden Einkauf. Ab 150 € '
                          'Gesamtumsatz kommt der lebenslange Status-Rabatt dazu.',
                  style: AppTypography.body(
                    size: 11,
                    color: AppColors.onDark.withValues(alpha: 0.7),
                  ).copyWith(height: 1.35),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _ChallengeCard extends StatelessWidget {
  const _ChallengeCard({required this.c, required this.tierColor});
  final Map<String, dynamic> c;
  final Color tierColor;

  @override
  Widget build(BuildContext context) {
    final progress = ((c['progress'] as num?) ?? 0).toInt();
    final target = ((c['target'] as num?) ?? 1).toInt();
    final done = c['done'] == true;
    final ratio = target <= 0 ? 1.0 : (progress / target).clamp(0.0, 1.0);
    final color = done ? AppColors.statusPositive : tierColor;

    return AppCard(
      topStripeColor: color,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(
                done ? Icons.check_circle : Icons.flag_outlined,
                color: color,
                size: 20,
              ),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  c['title'] as String? ?? '',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              Text(
                done ? 'Geschafft!' : '$progress / $target',
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w800,
                  color: color,
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            c['description'] as String? ?? '',
            style: AppTypography.body(size: 12, color: AppColors.textMuted)
                .copyWith(height: 1.35),
          ),
          const SizedBox(height: AppSpacing.s2),
          ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: LinearProgressIndicator(
              value: ratio,
              minHeight: 6,
              backgroundColor: AppColors.borderSubtle,
              valueColor: AlwaysStoppedAnimation<Color>(color),
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Row(
            children: [
              const Icon(Icons.redeem, size: 14, color: AppColors.brandDark),
              const SizedBox(width: 4),
              Text(
                'Belohnung: ${c['reward_text'] ?? ''}',
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.brandDark,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _BadgeGrid extends StatelessWidget {
  const _BadgeGrid({required this.badges, required this.iconOf});
  final List<Map<String, dynamic>> badges;
  final IconData Function(String) iconOf;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final cols = constraints.maxWidth < 420 ? 3 : 4;
        // Zwei Zeilen je Seite, der Rest wird gewischt — die Sammlung
        // wächst mit der Zeit und würde die Seite sonst zuwachsen.
        return PagedTileGrid(
          columns: cols,
          tileHeight: 104,
          children: [
            for (final b in badges)
              _BadgeTile(
                badge: b,
                icon: iconOf(b['icon_key'] as String? ?? 'star'),
              ),
          ],
        );
      },
    );
  }
}

class _BadgeTile extends StatelessWidget {
  const _BadgeTile({required this.badge, required this.icon});
  final Map<String, dynamic> badge;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    final earned = badge['earned'] == true;
    return Tooltip(
      message: badge['description'] as String? ?? '',
      child: Container(
        padding: const EdgeInsets.all(AppSpacing.s2),
        decoration: BoxDecoration(
          color: earned ? AppColors.surfaceCard : AppColors.surfaceAlt,
          border: Border.all(
            color: earned ? AppColors.brand : AppColors.borderSubtle,
            width: earned ? 1.4 : 1,
          ),
          borderRadius: BorderRadius.circular(AppRadii.md),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: 28,
              color: earned ? AppColors.brandDark : AppColors.textMuted,
            ),
            const SizedBox(height: 6),
            Text(
              badge['title'] as String? ?? '',
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: AppTypography.body(
                size: 10,
                weight: FontWeight.w700,
                color: earned ? AppColors.ink : AppColors.textMuted,
              ).copyWith(height: 1.2),
            ),
          ],
        ),
      ),
    );
  }
}
