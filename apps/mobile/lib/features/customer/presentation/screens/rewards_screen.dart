import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';

/// „Status & Belohnungen" — Gamification-Übersicht für Kund:innen.
/// Zeigt die kumulative Status-Stufe (Bronze/Silber/Gold/Platin) mit
/// Fortschritt zur nächsten Stufe, den Cashback-Vorteil, laufende
/// Challenges mit Fortschritt und die Sammel-Badges. Alle Werte kommen
/// aus der RPC my_gamification_status (Berechnung serverseitig aus der
/// Kaufhistorie).
class RewardsScreen extends ConsumerWidget {
  const RewardsScreen({super.key});

  static const _tierColors = <String, Color>{
    'bronze': Color(0xFFB08D57),
    'silber': Color(0xFF9AA0A6),
    'gold': AppColors.brand,
    'platin': Color(0xFF6C7BD6),
  };

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

  @override
  Widget build(BuildContext context, WidgetRef ref) {
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
        data: (data) => RefreshIndicator(
          color: AppColors.brand,
          onRefresh: () async => ref.invalidate(myGamificationProvider),
          child: ListView(
            padding: const EdgeInsets.all(AppSpacing.s4),
            children: [
              _TierCard(data: data),
              const SizedBox(height: AppSpacing.s4),
              _CashbackCard(data: data),
              const SizedBox(height: AppSpacing.s5),
              const _SectionTitle(
                eyebrow: 'Challenges',
                title: 'Aktuelle Herausforderungen',
              ),
              const SizedBox(height: AppSpacing.s3),
              for (final c in (data['challenges'] as List? ?? const []))
                Padding(
                  padding: const EdgeInsets.only(bottom: AppSpacing.s3),
                  child: _ChallengeCard(c: Map<String, dynamic>.from(c as Map)),
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
        ),
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
    final code = (tier['code'] as String?) ?? 'bronze';
    final label = (tier['label'] as String?) ?? 'Bronze';
    final color = RewardsScreen._tierColors[code] ?? AppColors.brand;
    final progress = ((tier['progress'] as num?) ?? 0).toDouble();
    final nextLabel = tier['next_label'] as String?;
    final nextMin = ((tier['next_min_eur'] as num?) ?? 0).toDouble();
    final gross = ((data['lifetime_gross'] as num?) ?? 0).toDouble();
    final cashbackPct = ((tier['cashback_pct'] as num?) ?? 0).toDouble();
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
                      '${cashbackPct.toStringAsFixed(0)} % Cashback',
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
          ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child: LinearProgressIndicator(
              value: progress.clamp(0.0, 1.0),
              minHeight: 10,
              backgroundColor: AppColors.borderSubtle,
              valueColor: AlwaysStoppedAnimation<Color>(color),
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            nextLabel == null
                ? 'Höchste Stufe erreicht — danke für deine Treue!'
                : 'Noch ${Formatters.euro(toNext)} bis $nextLabel.',
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

class _CashbackCard extends StatelessWidget {
  const _CashbackCard({required this.data});
  final Map<String, dynamic> data;

  @override
  Widget build(BuildContext context) {
    final cashback = ((data['cashback_eur'] as num?) ?? 0).toDouble();
    return AppCard(
      color: AppColors.ink,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Row(
        children: [
          const Icon(Icons.savings_outlined, color: AppColors.brand, size: 30),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Cashback-Guthaben',
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w700,
                    color: AppColors.brand,
                  ),
                ),
                Text(
                  Formatters.euro(cashback),
                  style: AppTypography.display(
                    size: 24,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  'Wächst mit deiner Status-Stufe. Einlösung am Automaten '
                  'kommt mit der Automaten-Anbindung.',
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
  const _ChallengeCard({required this.c});
  final Map<String, dynamic> c;

  @override
  Widget build(BuildContext context) {
    final progress = ((c['progress'] as num?) ?? 0).toInt();
    final target = ((c['target'] as num?) ?? 1).toInt();
    final done = c['done'] == true;
    final ratio = target <= 0 ? 1.0 : (progress / target).clamp(0.0, 1.0);
    final color = done ? AppColors.statusPositive : AppColors.brand;

    return AppCard(
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
        return GridView.count(
          crossAxisCount: cols,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: AppSpacing.s2,
          crossAxisSpacing: AppSpacing.s2,
          childAspectRatio: 0.82,
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
