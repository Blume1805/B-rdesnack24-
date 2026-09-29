import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/pricing/pricing.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/machine_availability.dart';
import '../controllers/customer_providers.dart';

/// Verfügbarkeit eines Automaten für Kunden (nur lesen).
///
/// Zeigt je Produkt „verfügbar", „bald leer" oder „ausverkauft", dazu Preis
/// und Pfand, **keine Stückzahlen** (RPC `machine_availability`, V-016-d,
/// Entscheidung 29.09.2026). Die frühere Fassung las die interne Sicht
/// `machine_stock` und abonnierte `inventory` per Realtime; beides ist für
/// Kunden gesperrt, der Bildschirm blieb deshalb leer.
///
/// Aktualisiert wird beim Öffnen, per Ziehen nach unten und jede Minute.
class AvailabilityScreen extends ConsumerStatefulWidget {
  const AvailabilityScreen({
    required this.machineId,
    required this.title,
    super.key,
  });

  final String machineId;
  final String title;

  @override
  ConsumerState<AvailabilityScreen> createState() => _AvailabilityScreenState();
}

class _AvailabilityScreenState extends ConsumerState<AvailabilityScreen> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(minutes: 1), (_) {
      if (mounted) {
        ref.invalidate(machineAvailabilityProvider(widget.machineId));
      }
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final stock = ref.watch(machineAvailabilityProvider(widget.machineId));
    final hasSub = ref.watch(hasBenefitsProvider).valueOrNull ?? false;
    // Effektiver Rabatt = 5 % Abo + lebenslanger Status-Zusatzrabatt.
    final effRate = ref.watch(myEffectiveDiscountProvider);
    return Scaffold(
      appBar: HeroAppBar(title: Text(widget.title)),
      body: stock.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Center(
          child: Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text('$e', style: AppTypography.body(size: 14)),
          ),
        ),
        data: (items) => RefreshIndicator(
          onRefresh: () async =>
              ref.invalidate(machineAvailabilityProvider(widget.machineId)),
          color: AppColors.brand,
          child: items.isEmpty
              ? ListView(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(AppSpacing.s5),
                      child: AppCard(
                        color: AppColors.surfaceAlt,
                        child: Text(
                          'Für diesen Automaten liegen aktuell keine Produktdaten vor.',
                          style: AppTypography.body(
                            size: 14,
                            color: AppColors.textMuted,
                          ),
                        ),
                      ),
                    ),
                  ],
                )
              : ListView(
                  padding: const EdgeInsets.fromLTRB(
                    AppSpacing.s5,
                    AppSpacing.s5,
                    AppSpacing.s5,
                    AppSpacing.s8,
                  ),
                  children: [
                    SectionHeader(
                      eyebrow: 'Echtzeit-Bestand',
                      title: widget.title,
                    ),
                    const SizedBox(height: AppSpacing.s2),
                    Text(
                      'Der Stand kommt aus den Verkaufsdaten des Automaten und '
                      'aktualisiert sich jede Minute.',
                      style: AppTypography.body(
                        size: 13,
                        color: AppColors.textMuted,
                      ),
                    ),
                    const SizedBox(height: AppSpacing.s5),
                    for (final s in items) ...[
                      _AvailabilityRow(
                        item: s,
                        hasSubscription: hasSub,
                        effectiveRate: effRate,
                      ),
                      const SizedBox(height: AppSpacing.s2),
                    ],
                  ],
                ),
        ),
      ),
    );
  }
}

class _AvailabilityRow extends StatelessWidget {
  const _AvailabilityRow({
    required this.item,
    required this.hasSubscription,
    required this.effectiveRate,
  });
  final MachineAvailability item;
  final bool hasSubscription;
  final double effectiveRate;

  ({String label, StatusTone tone, IconData icon}) _status() {
    switch (item.availability) {
      case 'out':
        return (
          label: 'ausverkauft',
          tone: StatusTone.critical,
          icon: Icons.remove_circle_outline,
        );
      case 'low':
        return (
          label: 'bald leer',
          tone: StatusTone.warning,
          icon: Icons.warning_amber_outlined,
        );
      default:
        return (
          label: 'verfügbar',
          tone: StatusTone.positive,
          icon: Icons.check_circle_outline,
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    final s = _status();
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ProductImage(
                imageUrl: item.imageUrl,
                productName: item.productName,
                size: 56,
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      item.productName,
                      style: AppTypography.body(
                        size: 15,
                        weight: FontWeight.w700,
                        color: AppColors.textStrong,
                      ),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 4),
                    StatusBadge(label: s.label, tone: s.tone, icon: s.icon),
                  ],
                ),
              ),
            ],
          ),
          if (item.priceGross != null) ...[
            const SizedBox(height: AppSpacing.s3),
            _PriceLine(
              effectiveRate: effectiveRate,
              gross: item.priceGross!,
              hasSubscription: hasSubscription,
            ),
            DepositNote(item.deposit),
          ],
        ],
      ),
    );
  }
}

/// Preiszeile im Katalog: Abonnenten sehen den App-Preis (−5 %) mit
/// durchgestrichenem Automatenpreis, alle anderen den Automatenpreis
/// plus Hinweis auf den App-Vorteil.
class _PriceLine extends StatelessWidget {
  const _PriceLine({
    required this.gross,
    required this.hasSubscription,
    required this.effectiveRate,
  });
  final double gross;
  final bool hasSubscription;
  final double effectiveRate;

  @override
  Widget build(BuildContext context) {
    final effR = effectiveRate > 0 ? effectiveRate : Pricing.appDiscountRate;
    final appPrice = Pricing.appPriceGross(gross, rate: effR);
    final pctText = (effR * 100)
        .toStringAsFixed(effR * 100 % 1 == 0 ? 0 : 1)
        .replaceAll('.', ',');
    if (hasSubscription) {
      return Row(
        children: [
          Expanded(
            child: PriceRow(
              regular: gross,
              discounted: appPrice,
              discountPercent: effR * 100,
              size: 20,
              showBadge: false,
            ),
          ),
          Text(
            'Dein App-Preis: −$pctText %',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: AppColors.brandDark,
            ),
          ),
        ],
      );
    }
    return Row(
      crossAxisAlignment: CrossAxisAlignment.baseline,
      textBaseline: TextBaseline.alphabetic,
      children: [
        Text(
          Formatters.euro(gross),
          style: AppTypography.display(
            size: 20,
            weight: FontWeight.w800,
            color: AppColors.textStrong,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        Expanded(
          child: Text(
            'Dein App-Preis ${Formatters.euro(appPrice)} (−5 %)',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w600,
              color: AppColors.textMuted,
            ),
            textAlign: TextAlign.end,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ),
      ],
    );
  }
}
