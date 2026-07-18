import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../management/domain/entities/machine.dart';
import '../../../management/presentation/controllers/management_providers.dart';
import 'availability_screen.dart';

/// Automatenfinder: Liste aller Automaten, Navigation (Google Maps) und
/// Echtzeit-Verfügbarkeit je Automat. Optional als Karten-Ansicht mit
/// Standortmarkern.
class FinderTab extends ConsumerStatefulWidget {
  const FinderTab({super.key});

  @override
  ConsumerState<FinderTab> createState() => _FinderTabState();
}

class _FinderTabState extends ConsumerState<FinderTab> {
  bool _mapMode = false;

  @override
  Widget build(BuildContext context) {
    final machines = ref.watch(machinesProvider);
    return machines.when(
      loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand)),
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
            const SizedBox(height: AppSpacing.s4),
            // Toggle Liste ↔ Karte
            SegmentedButton<bool>(
              segments: const [
                ButtonSegment(
                    value: false, icon: Icon(Icons.list), label: Text('Liste')),
                ButtonSegment(
                    value: true,
                    icon: Icon(Icons.map_outlined),
                    label: Text('Karte')),
              ],
              selected: {_mapMode},
              onSelectionChanged: (s) => setState(() => _mapMode = s.first),
            ),
            const SizedBox(height: AppSpacing.s5),
            if (_mapMode)
              _MapPreview(machines: list)
            else if (list.isEmpty)
              AppCard(
                color: AppColors.surfaceAlt,
                child: Text(
                  'Aktuell sind keine Automaten hinterlegt.',
                  style:
                      AppTypography.body(size: 14, color: AppColors.textMuted),
                ),
              )
            else
              for (final m in list) ...[
                _MachineLocationCard(
                  machine: m,
                  onOpen: () => Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (_) =>
                          AvailabilityScreen(machineId: m.id, title: m.name),
                    ),
                  ),
                  onNavigate: () => _navigate(m.name, m.city),
                ),
                const SizedBox(height: AppSpacing.s4),
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

/// Karten-Ansicht (statisch): stilisierte Vorschau + Deep-Link, öffnet
/// Google-Maps mit allen Automaten als Suchergebnissen.
class _MapPreview extends StatelessWidget {
  const _MapPreview({required this.machines});
  final List<dynamic> machines;

  @override
  Widget build(BuildContext context) {
    Future<void> openAll() async {
      final query =
          Uri.encodeComponent('Bördesnack24 Automat Sülzetal Osterweddingen');
      final uri =
          Uri.parse('https://www.google.com/maps/search/?api=1&query=$query');
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        AspectRatio(
          aspectRatio: 4 / 3,
          child: Container(
            decoration: BoxDecoration(
              color: AppColors.brandLight,
              border: Border.all(color: AppColors.brand),
              borderRadius: BorderRadius.circular(AppRadii.lg),
            ),
            child: Stack(
              children: [
                Positioned.fill(
                  child: CustomPaint(painter: _GridPainter()),
                ),
                for (int i = 0; i < machines.length; i++)
                  Positioned(
                    left: 40.0 + (i * 55),
                    top: 60.0 + ((i % 3) * 55),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Icon(Icons.place,
                            size: 34, color: AppColors.brand),
                        Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 6, vertical: 2),
                          decoration: BoxDecoration(
                            color: AppColors.ink,
                            borderRadius: BorderRadius.circular(4),
                          ),
                          child: Text(
                            'A${i + 1}',
                            style: AppTypography.body(
                              size: 10,
                              weight: FontWeight.w800,
                              color: AppColors.onDark,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                Positioned(
                  right: 8,
                  bottom: 8,
                  child: Container(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: AppColors.ink,
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Text(
                      'Karten-Vorschau',
                      style: AppTypography.body(
                        size: 10,
                        weight: FontWeight.w800,
                        color: AppColors.brand,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: AppSpacing.s3),
        FilledButton.icon(
          onPressed: openAll,
          icon: const Icon(Icons.directions_outlined),
          label: const Text('In Google Maps öffnen'),
          style: FilledButton.styleFrom(
            backgroundColor: AppColors.brand,
            foregroundColor: AppColors.ink,
            padding: const EdgeInsets.symmetric(vertical: 12),
          ),
        ),
      ],
    );
  }
}

/// Standort-Karte im Kundenbereich: weiße Karte mit gold-gelbem Streifen
/// am oberen Rand, „offen 24/7"-Pill rechts und schwarzem Pill-Button
/// „Sortiment ansehen". Optional darüber das Automatenbild.
class _MachineLocationCard extends StatelessWidget {
  const _MachineLocationCard({
    required this.machine,
    required this.onOpen,
    required this.onNavigate,
  });

  final Machine machine;
  final VoidCallback onOpen;
  final VoidCallback onNavigate;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      onTap: onOpen,
      padding: EdgeInsets.zero,
      topStripeColor: AppColors.brand,
      topStripeHeight: 4,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (machine.imageUrl != null && machine.imageUrl!.isNotEmpty)
            AspectRatio(
              aspectRatio: 16 / 9,
              child: ProductImage.expand(
                imageUrl: machine.imageUrl,
                productName: machine.name,
                icon: machine.isCooled
                    ? Icons.ac_unit
                    : Icons.storefront_outlined,
              ),
            ),
          Padding(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s5,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Text(
                        machine.name,
                        style: AppTypography.body(
                          size: 20,
                          weight: FontWeight.w800,
                          color: AppColors.ink,
                        ),
                      ),
                    ),
                    const SizedBox(width: AppSpacing.s3),
                    const StatusBadge(
                      label: 'offen 24/7',
                      tone: StatusTone.positive,
                    ),
                  ],
                ),
                if (machine.city != null && machine.city!.isNotEmpty) ...[
                  const SizedBox(height: 6),
                  Text(
                    machine.city!,
                    style: AppTypography.body(
                      size: 13,
                      color: AppColors.textMuted,
                    ),
                  ),
                ],
                if (machine.isCooled) ...[
                  const SizedBox(height: AppSpacing.s3),
                  const StatusBadge(
                    label: 'Kühlung',
                    tone: StatusTone.info,
                    icon: Icons.ac_unit,
                  ),
                ],
                const SizedBox(height: AppSpacing.s4),
                Row(
                  children: [
                    Expanded(
                      child: SizedBox(
                        height: 46,
                        child: FilledButton(
                          onPressed: onOpen,
                          style: FilledButton.styleFrom(
                            backgroundColor: AppColors.ink,
                            foregroundColor: Colors.white,
                            shape: RoundedRectangleBorder(
                              borderRadius:
                                  BorderRadius.circular(AppRadii.pill),
                            ),
                          ),
                          child: Text(
                            'Sortiment ansehen',
                            style: AppTypography.body(
                              size: 15,
                              weight: FontWeight.w700,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: AppSpacing.s2),
                    Container(
                      width: 46,
                      height: 46,
                      decoration: BoxDecoration(
                        color: AppColors.surfaceAlt,
                        border: Border.all(color: AppColors.borderSubtle),
                        borderRadius: BorderRadius.circular(AppRadii.pill),
                      ),
                      child: IconButton(
                        tooltip: 'Navigation starten',
                        icon: const Icon(Icons.directions_outlined),
                        color: AppColors.ink,
                        onPressed: onNavigate,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Feines Grid-Muster als Karten-Hintergrund.
class _GridPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppColors.brand.withValues(alpha: 0.15)
      ..strokeWidth = 0.6;
    for (double x = 0; x < size.width; x += 24) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (double y = 0; y < size.height; y += 24) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
