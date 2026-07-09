import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/loyalty_status.dart';
import '../../domain/entities/offer.dart';
import '../controllers/customer_providers.dart';

class OffersTab extends ConsumerWidget {
  const OffersTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final offers = ref.watch(offersProvider);
    final personals = ref.watch(myPersonalOffersProvider);
    final loyalty = ref.watch(myLoyaltyStatusProvider);

    return RefreshIndicator(
      onRefresh: () async {
        ref
          ..invalidate(offersProvider)
          ..invalidate(myPersonalOffersProvider)
          ..invalidate(myLoyaltyStatusProvider);
      },
      color: AppColors.brand,
      child: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          // ── Loyalty-Fortschritt ─────────────────────────────────────
          loyalty.when(
            loading: () => const SizedBox.shrink(),
            error: (_, __) => const SizedBox.shrink(),
            data: (l) => l == null
                ? const SizedBox.shrink()
                : _LoyaltyProgressCard(status: l),
          ),
          if (loyalty.valueOrNull != null)
            const SizedBox(height: AppSpacing.s5),

          // ── Individuelle Angebote (Special / Loyalty / Basis) ────────
          personals.when(
            loading: () => const _PersonalLoading(),
            error: (_, __) => const SizedBox.shrink(),
            data: (list) {
              final specials = list.where((o) => o.isSpecial).toList();
              final loyalty = list
                  .where((o) => o.source == PersonalOfferSource.loyalty)
                  .toList();
              final basis = list
                  .where((o) => o.source == PersonalOfferSource.auto)
                  .toList();
              return Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  if (specials.isNotEmpty) ...[
                    const SectionHeader(
                      eyebrow: 'Für dich persönlich',
                      title: 'Sonderangebote',
                    ),
                    const SizedBox(height: AppSpacing.s4),
                    for (final o in specials)
                      Padding(
                        padding: const EdgeInsets.only(bottom: AppSpacing.s4),
                        child: _PersonalOfferCard(offer: o),
                      ),
                    const SizedBox(height: AppSpacing.s5),
                  ],
                  if (loyalty.isNotEmpty) ...[
                    const SectionHeader(
                      eyebrow: 'Belohnung',
                      title: 'Bonus-Angebote',
                    ),
                    const SizedBox(height: AppSpacing.s4),
                    for (final o in loyalty)
                      Padding(
                        padding: const EdgeInsets.only(bottom: AppSpacing.s4),
                        child: _PersonalOfferCard(offer: o),
                      ),
                    const SizedBox(height: AppSpacing.s5),
                  ],
                  if (basis.isNotEmpty) ...[
                    const SectionHeader(
                      eyebrow: 'Nur für dich',
                      title: 'Dein Angebot',
                    ),
                    const SizedBox(height: AppSpacing.s4),
                    for (final o in basis)
                      Padding(
                        padding: const EdgeInsets.only(bottom: AppSpacing.s4),
                        child: _PersonalOfferCard(offer: o),
                      ),
                    const SizedBox(height: AppSpacing.s5),
                  ],
                ],
              );
            },
          ),

          // ── Wochenangebote als horizontale Scroll-Karten ─────────────
          const SectionHeader(
            eyebrow: 'Für alle',
            title: 'Wochen­angebote',
          ),
          const SizedBox(height: AppSpacing.s4),
          offers.when(
            loading: () => const Center(
              child: Padding(
                padding: EdgeInsets.all(AppSpacing.s6),
                child: CircularProgressIndicator(color: AppColors.brand),
              ),
            ),
            error: (e, _) => AppCard(
              color: const Color(0xFFF7DBDB),
              borderColor: AppColors.statusCritical,
              child: Text(
                '$e',
                style: AppTypography.body(size: 13, color: AppColors.ink),
              ),
            ),
            data: (list) {
              if (list.isEmpty) {
                return AppCard(
                  color: AppColors.surfaceAlt,
                  child: Text(
                    'Aktuell sind keine Wochen­angebote verfügbar. Schau bald wieder vorbei.',
                    style: AppTypography.body(
                        size: 14, color: AppColors.textMuted),
                  ),
                );
              }
              // Horizontales Scrollen wie in gängigen Handels-Apps.
              return SizedBox(
                height: 380,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  itemCount: list.length,
                  separatorBuilder: (_, __) =>
                      const SizedBox(width: AppSpacing.s3),
                  itemBuilder: (context, i) {
                    final o = list[i];
                    return OfferCard(
                      title: o.title,
                      regularPrice: o.regularPriceNet ?? 0,
                      offerPrice: o.offerPriceNet ?? 0,
                      discountPercent: o.discountPercent ?? 10,
                      imageUrl: o.imageUrl,
                      validUntil: o.validTo,
                      width: 260,
                    );
                  },
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}

class _PersonalLoading extends StatelessWidget {
  const _PersonalLoading();
  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(vertical: AppSpacing.s6),
      child: Center(child: CircularProgressIndicator(color: AppColors.brand)),
    );
  }
}

/// Personalisiertes Angebot — dunkle Ink-Karte, prominenter Preisunterschied,
/// 6-stelliger Code, „Einlösen"-Button.  Styling wird durch `source` bestimmt.
class _PersonalOfferCard extends ConsumerWidget {
  const _PersonalOfferCard({required this.offer});
  final PersonalOffer offer;

  ({String label, IconData icon}) get _header {
    switch (offer.source) {
      case PersonalOfferSource.birthday:
        return (label: 'Herzlichen Glückwunsch', icon: Icons.celebration);
      case PersonalOfferSource.anniversary:
        return (label: 'Dein Jahres-Angebot', icon: Icons.emoji_events);
      case PersonalOfferSource.loyalty:
        return (label: 'Meilenstein-Bonus', icon: Icons.workspace_premium);
      case PersonalOfferSource.auto:
        return (label: 'Nur für dich', icon: Icons.card_giftcard);
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final remaining = offer.validTo.difference(DateTime.now());
    final days = remaining.inDays;
    final hours = remaining.inHours;
    final validityLabel = days >= 1
        ? 'noch $days ${days == 1 ? 'Tag' : 'Tage'}'
        : hours >= 1
            ? 'noch $hours Std.'
            : 'endet bald';
    final h = _header;
    final isWildcard = offer.isSpecial;

    return AppCard(
      color: AppColors.ink,
      borderColor: AppColors.brand,
      padding: EdgeInsets.zero,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s4,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(h.icon, color: AppColors.brand, size: 20),
                    const SizedBox(width: 6),
                    Text(
                      h.label,
                      style: AppTypography.body(
                        size: 16,
                        weight: FontWeight.w800,
                        color: AppColors.brand,
                      ),
                    ),
                    const Spacer(),
                    StatusBadge(
                      label: validityLabel,
                      tone: StatusTone.brand,
                      icon: Icons.schedule,
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s3),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    ProductImage(
                      imageUrl: offer.imageUrl,
                      productName: offer.title,
                      size: 56,
                    ),
                    const SizedBox(width: AppSpacing.s3),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            offer.title,
                            style: AppTypography.display(
                              size: 20,
                              weight: FontWeight.w800,
                              color: AppColors.onDark,
                            ),
                          ),
                          if (isWildcard)
                            Text(
                              'Auf ein Produkt deiner Wahl',
                              style: AppTypography.body(
                                size: 13,
                                weight: FontWeight.w600,
                                color: AppColors.brandLight,
                              ),
                            ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s4),
                if (isWildcard)
                  Row(
                    children: [
                      Text(
                        '-${offer.discountPercent.toStringAsFixed(0)} %',
                        style: AppTypography.display(
                          size: 40,
                          weight: FontWeight.w800,
                          color: AppColors.brand,
                        ).copyWith(height: 1),
                      ),
                      const SizedBox(width: AppSpacing.s3),
                      Expanded(
                        child: Text(
                          'am Automaten einlösen',
                          style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w700,
                            color: AppColors.brandLight,
                          ),
                        ),
                      ),
                    ],
                  )
                else
                  _DarkPriceRow(
                    regular: offer.regularPriceNet,
                    discounted: offer.offerPriceNet,
                    percent: offer.discountPercent,
                  ),
              ],
            ),
          ),
          Container(
            decoration: const BoxDecoration(
              color: Color(0xFF14110E),
              border: Border(
                top: BorderSide(color: AppColors.brand, width: 1),
              ),
            ),
            padding: const EdgeInsets.symmetric(
              horizontal: AppSpacing.s5,
              vertical: AppSpacing.s4,
            ),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        'Einlöse-Code',
                        style: AppTypography.body(
                          size: 12,
                          weight: FontWeight.w700,
                          color: AppColors.brand,
                        ).copyWith(letterSpacing: 0.6),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        _formatCode(offer.redemptionCode),
                        style: AppTypography.display(
                          size: 28,
                          weight: FontWeight.w800,
                          color: AppColors.onDark,
                        ).copyWith(letterSpacing: 3),
                      ),
                    ],
                  ),
                ),
                IconButton(
                  tooltip: 'Code kopieren',
                  icon: const Icon(Icons.copy_outlined, color: AppColors.brand),
                  onPressed: () async {
                    await Clipboard.setData(
                        ClipboardData(text: offer.redemptionCode));
                    if (context.mounted) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Code kopiert.')),
                      );
                    }
                  },
                ),
                const SizedBox(width: 4),
                _RedeemButton(code: offer.redemptionCode),
              ],
            ),
          ),
        ],
      ),
    );
  }

  static String _formatCode(String c) =>
      c.length == 6 ? '${c.substring(0, 3)} ${c.substring(3)}' : c;
}

class _RedeemButton extends ConsumerWidget {
  const _RedeemButton({required this.code});
  final String code;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final busy = ref.watch(personalOfferActionsProvider).isLoading;
    return FilledButton.icon(
      onPressed: busy
          ? null
          : () async {
              final ctx = context;
              final offer = await ref
                  .read(personalOfferActionsProvider.notifier)
                  .redeem(code);
              if (!ctx.mounted) return;
              final err = ref.read(personalOfferActionsProvider).error;
              ref.invalidate(myPersonalOffersProvider);
              ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(
                content: Text(
                  offer != null
                      ? 'Angebot eingelöst — viel Spaß!'
                      : 'Einlösen fehlgeschlagen: ${err ?? 'unbekannt'}',
                ),
              ));
            },
      style: FilledButton.styleFrom(
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        padding: const EdgeInsets.symmetric(
            horizontal: AppSpacing.s4, vertical: 10),
        textStyle: AppTypography.body(size: 13, weight: FontWeight.w800),
      ),
      icon: busy
          ? const SizedBox(
              width: 14,
              height: 14,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                color: AppColors.ink,
              ),
            )
          : const Icon(Icons.check_circle_outline, size: 18),
      label: const Text('Einlösen'),
    );
  }
}

class _DarkPriceRow extends StatelessWidget {
  const _DarkPriceRow({
    required this.regular,
    required this.discounted,
    required this.percent,
  });
  final double regular;
  final double discounted;
  final double percent;
  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          _euro(discounted),
          style: AppTypography.display(
            size: 30,
            weight: FontWeight.w800,
            color: AppColors.brand,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        Text(
          _euro(regular),
          style: AppTypography.body(
            size: 16,
            weight: FontWeight.w600,
            color: AppColors.brandLight,
          ).copyWith(
            decoration: TextDecoration.lineThrough,
            decorationColor: AppColors.brandLight,
            decorationThickness: 2,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        DiscountBadge(percent: percent),
      ],
    );
  }

  static String _euro(double v) {
    final s = v.toStringAsFixed(2).replaceAll('.', ',');
    return '$s €';
  }
}

/// Loyalty-Fortschritt: Punktzahl links, Meilensteine als Timeline rechts.
class _LoyaltyProgressCard extends StatelessWidget {
  const _LoyaltyProgressCard({required this.status});
  final LoyaltyStatus status;

  @override
  Widget build(BuildContext context) {
    final tiers = const [400, 800, 1300, 2000];
    final resetDay = status.nextReset.day.toString().padLeft(2, '0');
    final resetMonth = status.nextReset.month.toString().padLeft(2, '0');
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s5),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.stars_rounded,
                  color: AppColors.brand, size: 22),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  'Deine Punkte',
                  style: AppTypography.body(
                    size: 16,
                    weight: FontWeight.w800,
                    color: AppColors.brand,
                  ),
                ),
              ),
              Text(
                'Reset $resetDay.$resetMonth.',
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text(
                '${status.points}',
                style: AppTypography.display(
                  size: 40,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ).copyWith(height: 1),
              ),
              const SizedBox(width: 6),
              Text(
                'Pkt.',
                style: AppTypography.body(
                  size: 16,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
              const Spacer(),
              if (status.nextTier != null)
                Text(
                  'noch ${status.pointsToNext} bis ${status.nextTier}',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          // Meilenstein-Timeline
          _TierTimeline(tiers: tiers, points: status.points),
        ],
      ),
    );
  }
}

class _TierTimeline extends StatelessWidget {
  const _TierTimeline({required this.tiers, required this.points});
  final List<int> tiers;
  final int points;

  @override
  Widget build(BuildContext context) {
    final maxTier = tiers.last;
    final progress = (points / maxTier).clamp(0.0, 1.0);
    return Column(
      children: [
        Stack(
          alignment: Alignment.centerLeft,
          children: [
            Container(
              height: 6,
              decoration: BoxDecoration(
                color: AppColors.surfaceAlt,
                borderRadius: BorderRadius.circular(AppRadii.pill),
                border: Border.all(color: AppColors.borderSubtle),
              ),
            ),
            LayoutBuilder(
              builder: (context, c) => Container(
                height: 6,
                width: c.maxWidth * progress,
                decoration: BoxDecoration(
                  color: AppColors.brand,
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 6),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            for (final t in tiers)
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    width: 12,
                    height: 12,
                    decoration: BoxDecoration(
                      color: points >= t
                          ? AppColors.brand
                          : AppColors.surfaceAlt,
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: points >= t
                            ? AppColors.brand
                            : AppColors.borderSubtle,
                        width: 2,
                      ),
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    '$t',
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w700,
                      color:
                          points >= t ? AppColors.ink : AppColors.textMuted,
                    ),
                  ),
                ],
              ),
          ],
        ),
      ],
    );
  }
}
