import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';

/// Verlauf: individuelle Preise, Kaufhistorie und Empfehlungen.
class HistoryTab extends ConsumerWidget {
  const HistoryTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final prices = ref.watch(myPricesProvider);
    final purchases = ref.watch(myPurchasesProvider);
    final recos = ref.watch(myRecommendationsProvider);

    return RefreshIndicator(
      color: AppColors.brand,
      onRefresh: () async {
        ref
          ..invalidate(myPricesProvider)
          ..invalidate(myPurchasesProvider)
          ..invalidate(myRecommendationsProvider);
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
            eyebrow: 'mein konto',
            title: 'Verlauf & Preise',
          ),
          const SizedBox(height: AppSpacing.s5),
          _SectionEyebrow(eyebrow: 'meine preise', icon: Icons.local_offer_outlined),
          const SizedBox(height: AppSpacing.s3),
          prices.when(
            loading: () => const LinearProgressIndicator(color: AppColors.brand),
            error: (e, _) => _errorCard('$e'),
            data: (list) => list.isEmpty
                ? _empty('Keine individuellen Preise hinterlegt.')
                : Column(
                    children: [
                      for (final p in list) ...[
                        AppCard(
                          padding: const EdgeInsets.symmetric(
                            horizontal: AppSpacing.s4,
                            vertical: AppSpacing.s3,
                          ),
                          child: Row(
                            children: [
                              const Icon(Icons.euro_symbol,
                                  size: 20, color: AppColors.brandDark),
                              const SizedBox(width: AppSpacing.s2),
                              Expanded(
                                child: Text(
                                  p.productName,
                                  style: AppTypography.body(
                                    size: 14,
                                    weight: FontWeight.w600,
                                    color: AppColors.ink,
                                  ),
                                ),
                              ),
                              Text(
                                Formatters.euro(p.priceNet),
                                style: AppTypography.body(
                                  size: 14,
                                  weight: FontWeight.w700,
                                  color: AppColors.ink,
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: AppSpacing.s2),
                      ],
                    ],
                  ),
          ),
          const SizedBox(height: AppSpacing.s5),
          _SectionEyebrow(eyebrow: 'empfehlungen', icon: Icons.recommend_outlined),
          const SizedBox(height: AppSpacing.s3),
          recos.when(
            loading: () => const LinearProgressIndicator(color: AppColors.brand),
            error: (e, _) => _errorCard('$e'),
            data: (list) => list.isEmpty
                ? _empty('Noch keine Empfehlungen — kauf öfter, wir merken uns Trends.')
                : Column(
                    children: [
                      for (final r in list) ...[
                        AppCard(
                          padding: const EdgeInsets.symmetric(
                            horizontal: AppSpacing.s4,
                            vertical: AppSpacing.s3,
                          ),
                          child: Row(
                            children: [
                              const Icon(Icons.star_outline,
                                  size: 20, color: AppColors.brandDark),
                              const SizedBox(width: AppSpacing.s2),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      r.productName,
                                      style: AppTypography.body(
                                        size: 14,
                                        weight: FontWeight.w700,
                                        color: AppColors.ink,
                                      ),
                                    ),
                                    if (r.reason != null)
                                      Text(
                                        r.reason!,
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
                        ),
                        const SizedBox(height: AppSpacing.s2),
                      ],
                    ],
                  ),
          ),
          const SizedBox(height: AppSpacing.s5),
          _SectionEyebrow(eyebrow: 'kaufhistorie', icon: Icons.receipt_long_outlined),
          const SizedBox(height: AppSpacing.s3),
          purchases.when(
            loading: () => const LinearProgressIndicator(color: AppColors.brand),
            error: (e, _) => _errorCard('$e'),
            data: (list) => list.isEmpty
                ? _empty('Noch keine Käufe erfasst.')
                : Column(
                    children: [
                      for (final p in list) ...[
                        AppCard(
                          padding: const EdgeInsets.symmetric(
                            horizontal: AppSpacing.s4,
                            vertical: AppSpacing.s3,
                          ),
                          child: Row(
                            children: [
                              Container(
                                width: 36,
                                height: 36,
                                decoration: BoxDecoration(
                                  color: AppColors.surfaceAlt,
                                  border: Border.all(color: AppColors.borderSubtle),
                                  borderRadius: BorderRadius.circular(AppRadii.sm),
                                ),
                                alignment: Alignment.center,
                                child: const Icon(
                                  Icons.shopping_bag_outlined,
                                  size: 18,
                                  color: AppColors.brandDark,
                                ),
                              ),
                              const SizedBox(width: AppSpacing.s3),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      Formatters.euro(p.totalGross),
                                      style: AppTypography.body(
                                        size: 14,
                                        weight: FontWeight.w700,
                                        color: AppColors.ink,
                                      ),
                                    ),
                                    Text(
                                      Formatters.date(p.purchasedAt),
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
                        ),
                        const SizedBox(height: AppSpacing.s2),
                      ],
                    ],
                  ),
          ),
        ],
      ),
    );
  }

  Widget _empty(String text) => AppCard(
        color: AppColors.surfaceAlt,
        child: Text(
          text,
          style: AppTypography.body(size: 13, color: AppColors.textMuted),
        ),
      );

  Widget _errorCard(String message) => AppCard(
        color: const Color(0xFFF7DBDB),
        borderColor: AppColors.statusCritical,
        child: Text(
          message,
          style: AppTypography.body(size: 13, color: AppColors.ink),
        ),
      );
}

class _SectionEyebrow extends StatelessWidget {
  const _SectionEyebrow({required this.eyebrow, required this.icon});
  final String eyebrow;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppColors.brandDark),
        const SizedBox(width: 6),
        Eyebrow(eyebrow),
      ],
    );
  }
}
