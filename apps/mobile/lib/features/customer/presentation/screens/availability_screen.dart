import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/motion/motion.dart';
import '../../../../core/pricing/pricing.dart';
import '../../../../core/motion/brand_refresh.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../management/domain/entities/stock_item.dart';
import '../../../management/presentation/controllers/management_providers.dart';
import '../controllers/customer_providers.dart';

/// Echtzeit-Produktverfügbarkeit für Kunden (read-only). Abonniert die
/// Inventur-Tabelle und zeigt jeden Artikel mit konkreter Stückzahl und
/// Status-Badge — die Zahl wird durch die Nayax-Sales-Webhooks laufend
/// aktualisiert (siehe supabase/functions/nayax-webhook).
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
  RealtimeChannel? _channel;

  @override
  void initState() {
    super.initState();
    _channel = ref
        .read(supabaseClientProvider)
        .channel('avail:${widget.machineId}')
        .onPostgresChanges(
          event: PostgresChangeEvent.all,
          schema: 'public',
          table: 'inventory',
          filter: PostgresChangeFilter(
            type: PostgresChangeFilterType.eq,
            column: 'machine_id',
            value: widget.machineId,
          ),
          callback: (_) {
            if (mounted) ref.invalidate(machineStockProvider(widget.machineId));
          },
        )
        .subscribe();
  }

  @override
  void dispose() {
    final ch = _channel;
    if (ch != null) ref.read(supabaseClientProvider).removeChannel(ch);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final stock = ref.watch(machineStockProvider(widget.machineId));
    final hasSub = ref.watch(hasSubscriptionProvider).valueOrNull ?? false;
    // Effektiver Rabatt = 5 % Abo + lebenslanger Status-Zusatzrabatt.
    final effRate = ref.watch(myEffectiveDiscountProvider);
    return Scaffold(
      appBar: HeroAppBar(title: Text(widget.title)),
      body: stock.when(
        // Skeletons statt Spinner: die Liste steht schon in ihrer späteren
        // Form da, der Wechsel auf echte Daten wirkt dadurch ruhiger.
        loading: () => ListView(
          padding: const EdgeInsets.all(AppSpacing.s5),
          children: const [
            SkeletonCard(height: 120),
            SizedBox(height: AppSpacing.s2),
            SkeletonCard(height: 120),
            SizedBox(height: AppSpacing.s2),
            SkeletonCard(height: 120),
          ],
        ),
        error: (e, _) => Center(
          child: Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text('$e', style: AppTypography.body(size: 14)),
          ),
        ),
        data: (items) => BrandRefresh(
          onRefresh: () async =>
              ref.invalidate(machineStockProvider(widget.machineId)),
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
                      'Bestand wird laufend über die Verkaufsdaten der Automaten aktualisiert.',
                      style: AppTypography.body(
                        size: 13,
                        color: AppColors.textMuted,
                      ),
                    ),
                    const SizedBox(height: AppSpacing.s5),
                    for (final s in items) ...[
                      _StockRow(
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

class _StockRow extends StatelessWidget {
  const _StockRow({
    required this.item,
    required this.hasSubscription,
    required this.effectiveRate,
  });
  final StockItem item;
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
    // Total = Kapazität des Slots (100 % voll). parLevel ist die
    // Nachfüllschwelle und bleibt nur für die Status-Bewertung.
    final total = item.capacity > 0 ? item.capacity : item.parLevel;
    final qty = item.quantity;
    final ratio = total > 0 ? (qty / total).clamp(0.0, 1.0) : 0.0;

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
                        color: AppColors.ink,
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
          if (item.grossPrice != null) ...[
            const SizedBox(height: AppSpacing.s3),
            _PriceLine(
              effectiveRate: effectiveRate,
              gross: item.grossPrice!,
              hasSubscription: hasSubscription,
            ),
          ],
          const SizedBox(height: AppSpacing.s3),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              // Live-Bestand: die Stückzahl zählt weich auf den neuen Wert,
              // wenn ein Verkauf per Realtime hereinkommt — kein harter
              // Zahlensprung.
              AnimatedCountUp(
                value: qty.toDouble(),
                format: (v) => v.round().toString(),
                style: AppTypography.display(
                  size: 28,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
              const SizedBox(width: 4),
              Text(
                qty == 1 ? 'Stück' : 'Stück',
                style: AppTypography.body(
                  size: 13,
                  weight: FontWeight.w600,
                  color: AppColors.textMuted,
                ),
              ),
              if (total > 0) ...[
                const SizedBox(width: AppSpacing.s3),
                Text(
                  'von $total',
                  style: AppTypography.body(
                    size: 13,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
            ],
          ),
          if (total > 0) ...[
            const SizedBox(height: AppSpacing.s3),
            ClipRRect(
              borderRadius: BorderRadius.circular(AppRadii.pill),
              child: TweenAnimationBuilder<double>(
                tween: Tween<double>(begin: ratio, end: ratio),
                duration: Motion.duration(context, AppMotion.slow),
                curve: AppMotion.easeOut,
                builder: (context, v, _) => LinearProgressIndicator(
                  value: v,
                  minHeight: 6,
                  backgroundColor: AppColors.borderSubtle,
                  valueColor: AlwaysStoppedAnimation<Color>(
                    ratio < 0.15
                        ? AppColors.statusCritical
                        : ratio < 0.35
                            ? AppColors.statusWarning
                            : AppColors.brand,
                  ),
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// Preiszeile im Katalog: Abonnenten sehen den App-Preis (−5 %) mit
/// durchgestrichenem Automatenpreis, alle anderen den Automatenpreis
/// plus Hinweis auf den Abo-Vorteil.
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
            'Dein App-Preis · −$pctText %',
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
            color: AppColors.ink,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        Expanded(
          child: Text(
            'Mit Abo ${Formatters.euro(appPrice)} (−5 %)',
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
