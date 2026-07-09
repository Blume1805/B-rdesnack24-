import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/offer.dart';
import '../controllers/customer_providers.dart';

class OffersTab extends ConsumerWidget {
  const OffersTab({super.key});

  static const _kindLabels = {
    'daily': 'Tagesangebot',
    'weekly': 'Wochenangebot',
    'special': 'Sonderaktion',
  };

  static const _kindIcons = {
    'daily': Icons.today_outlined,
    'weekly': Icons.date_range_outlined,
    'special': Icons.star_outline,
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final offers = ref.watch(offersProvider);
    final personal = ref.watch(myPersonalOfferProvider);

    return RefreshIndicator(
      onRefresh: () async {
        ref
          ..invalidate(offersProvider)
          ..invalidate(myPersonalOfferProvider);
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
          // ── Individuelles Angebot (falls vorhanden) ──────────────────
          personal.when(
            loading: () => const _PersonalLoading(),
            error: (_, __) => const SizedBox.shrink(),
            data: (p) => p == null
                ? const SizedBox.shrink()
                : _PersonalOfferCard(offer: p),
          ),
          if (personal.valueOrNull != null)
            const SizedBox(height: AppSpacing.s6),

          // ── Wochen- und Sonderaktionen ───────────────────────────────
          const SectionHeader(
            eyebrow: 'Für alle',
            title: 'Wochen­angebote',
          ),
          const SizedBox(height: AppSpacing.s5),
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
                  child: Row(
                    children: [
                      const Icon(Icons.local_offer_outlined,
                          color: AppColors.textMuted),
                      const SizedBox(width: AppSpacing.s3),
                      Expanded(
                        child: Text(
                          'Aktuell sind keine Wochen­angebote verfügbar. Schau bald wieder vorbei.',
                          style: AppTypography.body(
                              size: 14, color: AppColors.textMuted),
                        ),
                      ),
                    ],
                  ),
                );
              }
              return Column(
                children: [
                  for (final o in list) ...[
                    _WeeklyOfferCard(
                      offer: o,
                      kindLabel: _kindLabels[o.kind] ?? o.kind,
                      kindIcon: _kindIcons[o.kind] ?? Icons.local_offer_outlined,
                    ),
                    const SizedBox(height: AppSpacing.s4),
                  ],
                ],
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
    return AppCard(
      color: AppColors.ink,
      borderColor: AppColors.ink,
      padding: const EdgeInsets.symmetric(vertical: AppSpacing.s5),
      child: const Center(child: CircularProgressIndicator(color: AppColors.brand)),
    );
  }
}

/// Dunkel-Ink-Karte für das individuelle Kunden-Angebot.  Zeigt Preis-
/// unterschied prominent, den 6-stelligen Einlöse-Code und einen Button,
/// der den Code einlöst (Demo — echter Automatenscanner erledigt das an
/// den Terminals selbst via Nayax-Webhook).
class _PersonalOfferCard extends ConsumerWidget {
  const _PersonalOfferCard({required this.offer});

  final PersonalOffer offer;

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
                    const Icon(Icons.workspace_premium,
                        color: AppColors.brand, size: 20),
                    const SizedBox(width: 6),
                    Text(
                      'Nur für dich',
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
                      child: Text(
                        offer.title,
                        style: AppTypography.display(
                          size: 20,
                          weight: FontWeight.w800,
                          color: AppColors.onDark,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s4),
                _DarkPriceRow(
                  regular: offer.regularPriceNet,
                  discounted: offer.offerPriceNet,
                  percent: offer.discountPercent,
                ),
              ],
            ),
          ),
          // Code-Bereich (goldene Trennlinie oben).
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

  static String _formatCode(String c) {
    // 6-stellig: „123 456"
    if (c.length == 6) return '${c.substring(0, 3)} ${c.substring(3)}';
    return c;
  }
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

/// Wochen-/Sonderangebot-Karte mit Bild oben, Preis-Rabatt und Ablauf.
class _WeeklyOfferCard extends StatelessWidget {
  const _WeeklyOfferCard({
    required this.offer,
    required this.kindLabel,
    required this.kindIcon,
  });

  final Offer offer;
  final String kindLabel;
  final IconData kindIcon;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: EdgeInsets.zero,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Bild + Rabatt-Badge overlay
          Stack(
            children: [
              AspectRatio(
                aspectRatio: 16 / 9,
                child: ProductImage.expand(
                  imageUrl: offer.imageUrl,
                  productName: offer.title,
                  icon: kindIcon,
                ),
              ),
              if (offer.discountPercent != null && offer.discountPercent! > 0)
                Positioned(
                  top: AppSpacing.s3,
                  right: AppSpacing.s3,
                  child: DiscountBadge(percent: offer.discountPercent!),
                ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.all(AppSpacing.s4),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Eyebrow(kindLabel),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  offer.title,
                  style: AppTypography.body(
                    size: 18,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                if (offer.hasPrice) ...[
                  const SizedBox(height: AppSpacing.s3),
                  PriceRow(
                    regular: offer.regularPriceNet!,
                    discounted: offer.offerPriceNet!,
                    discountPercent: offer.discountPercent,
                    showBadge: false,
                  ),
                ],
                if (offer.description != null) ...[
                  const SizedBox(height: AppSpacing.s3),
                  Text(
                    offer.description!,
                    style: AppTypography.body(
                      size: 14,
                      color: AppColors.textDefault,
                    ),
                  ),
                ],
                if (offer.validTo != null) ...[
                  const SizedBox(height: AppSpacing.s3),
                  StatusBadge(
                    label: 'gültig bis ${Formatters.date(offer.validTo!)}',
                    tone: StatusTone.brand,
                    icon: Icons.schedule,
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// PriceRow-Variante für dunklen Ink-Hintergrund (weiße Zahl statt Ink).
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
          Formatters.euro(discounted),
          style: AppTypography.display(
            size: 30,
            weight: FontWeight.w800,
            color: AppColors.brand,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        Text(
          Formatters.euro(regular),
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
}
