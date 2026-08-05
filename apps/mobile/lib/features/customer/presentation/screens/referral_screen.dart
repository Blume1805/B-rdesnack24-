import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/brand_refresh.dart';
import '../../../../core/motion/motion.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/referral.dart';
import '../controllers/customer_providers.dart';
import '../widgets/subscription_lock.dart';

/// „Freunde werben" — persönlicher Code, Fortschritt, Historie, Prämien.
///
/// Werben dürfen nur Abonnent:innen: die Prämie ist ein Freimonat, und den
/// kann nur gutschreiben, wer überhaupt eine Laufzeit hat. Ohne Abo liegt
/// der Bereich deshalb unter der bekannten Sperre.
class ReferralScreen extends ConsumerWidget {
  const ReferralScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final hasSub = ref.watch(hasSubscriptionProvider).valueOrNull ?? false;
    final status = ref.watch(myReferralStatusProvider);

    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Freunde werben')),
      body: BrandRefresh(
        onRefresh: () async {
          ref
            ..invalidate(myReferralStatusProvider)
            ..invalidate(hasSubscriptionProvider);
        },
        child: ListView(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s8,
          ),
          children: [
            const SectionHeader(
              eyebrow: 'Empfehlungsprogramm',
              title: 'Beide gewinnen',
            ),
            const SizedBox(height: AppSpacing.s3),
            status.when(
              loading: () => const Column(
                children: [
                  SkeletonCard(height: 150),
                  SizedBox(height: AppSpacing.s3),
                  SkeletonCard(height: 120),
                ],
              ),
              error: (e, _) => AppCard(
                color: const Color(0xFFF7DBDB),
                borderColor: AppColors.statusCritical,
                child: Text(
                  '$e',
                  style: AppTypography.body(size: 13, color: AppColors.ink),
                ),
              ),
              data: (s) => Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _RulesCard(status: s),
                  const SizedBox(height: AppSpacing.s4),
                  SubscriptionLock(
                    locked: !hasSub,
                    note: 'Empfehlen und Freimonate sammeln — beide Seiten '
                        'profitieren.',
                    child: _CodeCard(status: s),
                  ),
                  const SizedBox(height: AppSpacing.s5),
                  if (hasSub) ...[
                    _ProgressCard(status: s),
                    const SizedBox(height: AppSpacing.s5),
                    const Eyebrow('Deine Empfehlungen'),
                    const SizedBox(height: AppSpacing.s3),
                    _HistoryCard(status: s),
                    if (s.rewards.isNotEmpty) ...[
                      const SizedBox(height: AppSpacing.s5),
                      const Eyebrow('Erhaltene Prämien'),
                      const SizedBox(height: AppSpacing.s3),
                      _RewardsCard(status: s),
                    ],
                  ],
                  const SizedBox(height: AppSpacing.s4),
                  Text(
                    'Die Prämie wird gutgeschrieben, sobald die geworbene '
                    'Person ihr erstes kostenpflichtiges Abo abgeschlossen '
                    'hat und die 14-tägige Widerrufsfrist abgelaufen ist. '
                    'Eigenwerbung zählt nicht.',
                    style:
                        AppTypography.body(size: 11, color: AppColors.textMuted)
                            .copyWith(height: 1.4),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Was es gibt — die zwei Zahlen, um die es geht.
class _RulesCard extends StatelessWidget {
  const _RulesCard({required this.status});
  final ReferralStatusSummary status;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: AppColors.ink,
      borderColor: AppColors.brand,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(
                Icons.group_add_outlined,
                color: AppColors.brand,
                size: 24,
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: Text(
                  'Empfiehl Bördesnack24 weiter',
                  style: AppTypography.display(
                    size: 18,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Schließt jemand über deinen Link erstmals ein Abo ab, bekommt '
            'ihr beide kostenlose Premium-Monate.',
            style: AppTypography.body(size: 13.5, color: AppColors.brandLight)
                .copyWith(height: 1.45),
          ),
          const SizedBox(height: AppSpacing.s4),
          Row(
            children: [
              Expanded(
                child: _RuleTile(
                  plan: 'Monats-Abo geworben',
                  months: status.monthsMonthly,
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: _RuleTile(
                  plan: 'Jahres-Abo geworben',
                  months: status.monthsYearly,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _RuleTile extends StatelessWidget {
  const _RuleTile({required this.plan, required this.months});
  final String plan;
  final int months;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.s3),
      decoration: BoxDecoration(
        color: AppColors.brand,
        borderRadius: BorderRadius.circular(AppRadii.md),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            plan.toUpperCase(),
            style: AppTypography.body(
              size: 9.5,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ).copyWith(letterSpacing: 0.6, height: 1.25),
          ),
          const SizedBox(height: 4),
          Text(
            '+$months',
            style: AppTypography.display(
              size: 26,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ).copyWith(height: 1),
          ),
          Text(
            months == 1 ? 'Monat je Seite' : 'Monate je Seite',
            style: AppTypography.body(
              size: 11,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

/// Code + Link + Teilen.
class _CodeCard extends ConsumerStatefulWidget {
  const _CodeCard({required this.status});
  final ReferralStatusSummary status;

  @override
  ConsumerState<_CodeCard> createState() => _CodeCardState();
}

class _CodeCardState extends ConsumerState<_CodeCard> {
  bool _busy = false;

  Future<void> _createCode() async {
    setState(() => _busy = true);
    try {
      await ref.read(referralActionsProvider).ensureCode();
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _copy(String value, String what) async {
    await Clipboard.setData(ClipboardData(text: value));
    Motion.success();
    if (!mounted) return;
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text('$what kopiert')));
  }

  @override
  Widget build(BuildContext context) {
    final code = widget.status.code;

    if (code == null) {
      return AppCard(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Dein persönlicher Empfehlungslink',
              style: AppTypography.body(
                size: 15,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Wird erst erzeugt, wenn du ihn brauchst.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            FilledButton.icon(
              onPressed: _busy ? null : _createCode,
              icon: _busy
                  ? const SizedBox(
                      width: 16,
                      height: 16,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        color: AppColors.ink,
                      ),
                    )
                  : const Icon(Icons.qr_code_2, size: 18),
              label: const Text('Empfehlungslink erstellen'),
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.brand,
                foregroundColor: AppColors.ink,
                padding: const EdgeInsets.symmetric(vertical: 13),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
            ),
          ],
        ),
      );
    }

    final link = widget.status.shareLink!;
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Dein Code',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w800,
              color: AppColors.textMuted,
            ).copyWith(letterSpacing: 0.8),
          ),
          const SizedBox(height: AppSpacing.s2),
          // Der Code wird vorgelesen und abgetippt — deshalb groß, mit
          // weitem Zeichenabstand und ohne verwechselbare Zeichen (0/O, 1/I).
          SelectableText(
            code,
            style: AppTypography.display(
              size: 30,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ).copyWith(letterSpacing: 4, height: 1.1),
          ),
          const SizedBox(height: AppSpacing.s3),
          Container(
            padding: const EdgeInsets.all(AppSpacing.s3),
            decoration: BoxDecoration(
              color: AppColors.surfaceAlt,
              borderRadius: BorderRadius.circular(AppRadii.md),
            ),
            child: Text(
              link,
              style: AppTypography.body(size: 11.5, color: AppColors.textMuted)
                  .copyWith(height: 1.3),
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          Row(
            children: [
              Expanded(
                child: FilledButton.icon(
                  onPressed: () => _copy(link, 'Link'),
                  icon: const Icon(Icons.link, size: 18),
                  label: const Text('Link kopieren'),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppColors.ink,
                    foregroundColor: AppColors.brand,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(AppRadii.pill),
                    ),
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              OutlinedButton.icon(
                onPressed: () => _copy(code, 'Code'),
                icon: const Icon(Icons.copy_all_outlined, size: 18),
                label: const Text('Code'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppColors.ink,
                  side: const BorderSide(color: AppColors.ink),
                  padding: const EdgeInsets.symmetric(
                    horizontal: AppSpacing.s3,
                    vertical: 12,
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

/// Fortschrittsbalken bis zum nächsten Meilenstein.
class _ProgressCard extends StatelessWidget {
  const _ProgressCard({required this.status});
  final ReferralStatusSummary status;

  @override
  Widget build(BuildContext context) {
    final next = status.nextMilestone;
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(
                child: _CountTile(
                  value: status.rewardedCount,
                  label: 'erfolgreich',
                ),
              ),
              Expanded(
                child: _CountTile(
                  value: status.pendingCount,
                  label: 'ausstehend',
                ),
              ),
              Expanded(
                child: _CountTile(
                  value: status.monthsTotal,
                  label: status.monthsTotal == 1 ? 'Freimonat' : 'Freimonate',
                ),
              ),
            ],
          ),
          if (next != null) ...[
            const SizedBox(height: AppSpacing.s4),
            ClipRRect(
              borderRadius: BorderRadius.circular(AppRadii.pill),
              child: TweenAnimationBuilder<double>(
                tween: Tween(begin: 0, end: status.milestoneProgress),
                duration: Motion.duration(context, AppMotion.slow),
                curve: AppMotion.easeOut,
                builder: (context, v, _) => LinearProgressIndicator(
                  value: v,
                  minHeight: 10,
                  backgroundColor: AppColors.borderSubtle,
                  color: AppColors.brand,
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              '${status.rewardedCount} / ${next.threshold} Empfehlungen',
              style: AppTypography.body(
                size: 12.5,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              status.missingToMilestone == 0
                  ? next.label
                  : 'Noch ${status.missingToMilestone} bis: ${next.label}',
              style: AppTypography.body(size: 12, color: AppColors.textMuted)
                  .copyWith(height: 1.35),
            ),
          ],
        ],
      ),
    );
  }
}

class _CountTile extends StatelessWidget {
  const _CountTile({required this.value, required this.label});
  final int value;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        AnimatedCountUp(
          value: value.toDouble(),
          format: (v) => v.round().toString(),
          style: AppTypography.display(
            size: 24,
            weight: FontWeight.w800,
            color: AppColors.ink,
          ).copyWith(height: 1),
        ),
        const SizedBox(height: 2),
        Text(
          label,
          textAlign: TextAlign.center,
          style: AppTypography.body(size: 11, color: AppColors.textMuted),
        ),
      ],
    );
  }
}

/// Historie: wer, welcher Stand, welche Prämie.
class _HistoryCard extends StatelessWidget {
  const _HistoryCard({required this.status});
  final ReferralStatusSummary status;

  @override
  Widget build(BuildContext context) {
    if (status.history.isEmpty) {
      return AppCard(
        color: AppColors.surfaceAlt,
        child: Text(
          'Noch niemand geworben. Teile deinen Link — sobald jemand darüber '
          'ein Abo abschließt, erscheint er hier.',
          style: AppTypography.body(size: 13, color: AppColors.textMuted)
              .copyWith(height: 1.4),
        ),
      );
    }

    return AppCard(
      padding: EdgeInsets.zero,
      child: Column(
        children: [
          for (var i = 0; i < status.history.length; i++) ...[
            if (i > 0) const Divider(height: 1, color: AppColors.borderSubtle),
            _HistoryRow(entry: status.history[i]),
          ],
        ],
      ),
    );
  }
}

class _HistoryRow extends StatelessWidget {
  const _HistoryRow({required this.entry});
  final ReferralEntry entry;

  ({Color color, IconData icon}) get _tone => switch (entry.status) {
        ReferralStatus.rewarded => (
            color: AppColors.statusPositive,
            icon: Icons.check_circle,
          ),
        ReferralStatus.qualified => (
            color: AppColors.statusWarning,
            icon: Icons.schedule,
          ),
        ReferralStatus.registered => (
            color: AppColors.textMuted,
            icon: Icons.hourglass_empty,
          ),
        ReferralStatus.rejected => (
            color: AppColors.statusCritical,
            icon: Icons.remove_circle_outline,
          ),
      };

  @override
  Widget build(BuildContext context) {
    final tone = _tone;
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Row(
        children: [
          Icon(tone.icon, size: 20, color: tone.color),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  entry.name,
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                Text(
                  '${entry.status.label} · '
                  '${Formatters.date(entry.registeredAt)}',
                  style: AppTypography.body(
                      size: 11.5, color: AppColors.textMuted),
                ),
              ],
            ),
          ),
          Text(
            entry.rewardLabel,
            textAlign: TextAlign.right,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w800,
              color: tone.color,
            ),
          ),
        ],
      ),
    );
  }
}

/// Journal der gutgeschriebenen Prämien.
class _RewardsCard extends StatelessWidget {
  const _RewardsCard({required this.status});
  final ReferralStatusSummary status;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: EdgeInsets.zero,
      child: Column(
        children: [
          for (var i = 0; i < status.rewards.length; i++) ...[
            if (i > 0) const Divider(height: 1, color: AppColors.borderSubtle),
            Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: AppSpacing.s4,
                vertical: AppSpacing.s3,
              ),
              child: Row(
                children: [
                  Icon(
                    status.rewards[i].badgeCode != null
                        ? Icons.workspace_premium
                        : Icons.card_giftcard,
                    size: 20,
                    color: AppColors.brandDark,
                  ),
                  const SizedBox(width: AppSpacing.s3),
                  Expanded(
                    child: Text(
                      status.rewards[i].note ?? 'Prämie',
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w700,
                        color: AppColors.ink,
                      ),
                    ),
                  ),
                  if (status.rewards[i].months > 0)
                    Text(
                      '+${status.rewards[i].months} '
                      '${status.rewards[i].months == 1 ? 'Monat' : 'Monate'}',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w800,
                        color: AppColors.statusPositive,
                      ),
                    ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}
