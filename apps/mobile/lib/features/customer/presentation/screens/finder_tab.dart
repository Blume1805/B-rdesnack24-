import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../management/presentation/controllers/management_providers.dart';
import 'availability_screen.dart';

/// Automatenfinder: Liste aller Automaten, Navigation (Google Maps) und
/// Echtzeit-Verfügbarkeit je Automat.
class FinderTab extends ConsumerWidget {
  const FinderTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final machines = ref.watch(machinesProvider);
    return machines.when(
      loading: () => const Center(child: CircularProgressIndicator(color: AppColors.brand)),
      error: (e, _) => Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s5),
          child: Text('$e', style: AppTypography.body(size: 14)),
        ),
      ),
      data: (list) => RefreshIndicator(
        onRefresh: () async => ref.invalidate(machinesProvider),
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
              eyebrow: 'Unsere Standorte',
              title: 'Automaten in der Börde',
            ),
            const SizedBox(height: AppSpacing.s5),
            if (list.isEmpty)
              AppCard(
                color: AppColors.surfaceAlt,
                child: Text(
                  'Aktuell sind keine Automaten hinterlegt.',
                  style: AppTypography.body(size: 14, color: AppColors.textMuted),
                ),
              )
            else
              for (final m in list) ...[
                AppCard(
                  onTap: () => Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (_) =>
                          AvailabilityScreen(machineId: m.id, title: m.name),
                    ),
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 44,
                        height: 44,
                        decoration: BoxDecoration(
                          color: AppColors.brandLight,
                          borderRadius: BorderRadius.circular(AppRadii.md),
                          border: Border.all(color: AppColors.brand),
                        ),
                        alignment: Alignment.center,
                        child: Icon(
                          m.isCooled ? Icons.ac_unit : Icons.storefront_outlined,
                          color: AppColors.ink,
                          size: 22,
                        ),
                      ),
                      const SizedBox(width: AppSpacing.s3),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              m.name,
                              style: AppTypography.body(
                                size: 15,
                                weight: FontWeight.w700,
                                color: AppColors.ink,
                              ),
                            ),
                            if (m.city != null && m.city!.isNotEmpty)
                              Padding(
                                padding: const EdgeInsets.only(top: 2),
                                child: Row(
                                  children: [
                                    const Icon(Icons.place_outlined,
                                        size: 14, color: AppColors.textMuted),
                                    const SizedBox(width: 3),
                                    Expanded(
                                      child: Text(
                                        m.city!,
                                        style: AppTypography.body(
                                          size: 12,
                                          color: AppColors.textMuted,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            if (m.isCooled) ...[
                              const SizedBox(height: 4),
                              const StatusBadge(
                                label: 'Kühlung',
                                tone: StatusTone.info,
                                icon: Icons.ac_unit,
                              ),
                            ],
                          ],
                        ),
                      ),
                      IconButton(
                        tooltip: 'Navigation starten',
                        icon: const Icon(Icons.directions_outlined),
                        color: AppColors.brand,
                        onPressed: () => _navigate(m.name, m.city),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
              ],
          ],
        ),
      ),
    );
  }

  Future<void> _navigate(String name, String? city) async {
    final query = Uri.encodeComponent([name, if (city != null) city].join(' '));
    final uri = Uri.parse(
      'https://www.google.com/maps/dir/?api=1&destination=$query',
    );
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}
