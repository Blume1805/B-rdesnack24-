import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../management/domain/entities/stock_item.dart';
import '../../../management/presentation/controllers/management_providers.dart';

/// Echtzeit-Produktverfügbarkeit für Kunden (read-only). Abonniert die
/// Inventur-Tabelle und zeigt jeden Artikel mit konkreter Stückzahl und
/// Status-Badge — die Zahl wird durch die Nayax-Sales-Webhooks laufend
/// aktualisiert (siehe supabase/functions/nayax-webhook).
class AvailabilityScreen extends ConsumerStatefulWidget {
  const AvailabilityScreen({required this.machineId, required this.title, super.key});

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
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: stock.when(
        loading: () =>
            const Center(child: CircularProgressIndicator(color: AppColors.brand)),
        error: (e, _) => Center(
          child: Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text('$e', style: AppTypography.body(size: 14)),
          ),
        ),
        data: (items) => RefreshIndicator(
          onRefresh: () async => ref.invalidate(machineStockProvider(widget.machineId)),
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
                              size: 14, color: AppColors.textMuted),
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
                          size: 13, color: AppColors.textMuted),
                    ),
                    const SizedBox(height: AppSpacing.s5),
                    for (final s in items) ...[
                      _StockRow(item: s),
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
  const _StockRow({required this.item});
  final StockItem item;

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
    final total = item.parLevel;
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
          const SizedBox(height: AppSpacing.s3),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text(
                '$qty',
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
              child: LinearProgressIndicator(
                value: ratio,
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
          ],
        ],
      ),
    );
  }
}
