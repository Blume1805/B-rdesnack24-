import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
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
    return offers.when(
      loading: () => const Center(child: CircularProgressIndicator(color: AppColors.brand)),
      error: (e, _) => Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s5),
          child: Text('$e', style: AppTypography.body(size: 14)),
        ),
      ),
      data: (list) {
        return RefreshIndicator(
          onRefresh: () async => ref.invalidate(offersProvider),
          color: AppColors.brand,
          child: ListView(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s8,
            ),
            children: [
              const SectionHeader(
                eyebrow: 'Für dich',
                title: 'Angebote & Aktionen',
              ),
              const SizedBox(height: AppSpacing.s5),
              if (list.isEmpty)
                AppCard(
                  color: AppColors.surfaceAlt,
                  child: Row(
                    children: [
                      const Icon(Icons.local_offer_outlined, color: AppColors.textMuted),
                      const SizedBox(width: AppSpacing.s3),
                      Expanded(
                        child: Text(
                          'Aktuell sind keine Angebote verfügbar. Schau bald wieder vorbei.',
                          style: AppTypography.body(size: 14, color: AppColors.textMuted),
                        ),
                      ),
                    ],
                  ),
                )
              else
                for (final o in list) ...[
                  AppCard(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Container(
                              width: 40,
                              height: 40,
                              decoration: BoxDecoration(
                                color: AppColors.brandLight,
                                borderRadius: BorderRadius.circular(AppRadii.md),
                                border: Border.all(color: AppColors.brand),
                              ),
                              alignment: Alignment.center,
                              child: Icon(
                                _kindIcons[o.kind] ?? Icons.local_offer_outlined,
                                color: AppColors.ink,
                                size: 20,
                              ),
                            ),
                            const SizedBox(width: AppSpacing.s3),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Eyebrow(_kindLabels[o.kind] ?? o.kind),
                                  const SizedBox(height: 2),
                                  Text(
                                    o.title,
                                    style: AppTypography.body(
                                      size: 16,
                                      weight: FontWeight.w700,
                                      color: AppColors.ink,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        if (o.description != null) ...[
                          const SizedBox(height: AppSpacing.s3),
                          Text(
                            o.description!,
                            style: AppTypography.body(size: 14, color: AppColors.textDefault),
                          ),
                        ],
                        if (o.validTo != null) ...[
                          const SizedBox(height: AppSpacing.s3),
                          StatusBadge(
                            label: 'gültig bis ${Formatters.date(o.validTo!)}',
                            tone: StatusTone.brand,
                            icon: Icons.schedule,
                          ),
                        ],
                      ],
                    ),
                  ),
                  const SizedBox(height: AppSpacing.s3),
                ],
            ],
          ),
        );
      },
    );
  }
}
