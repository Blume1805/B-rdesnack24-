import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:printing/printing.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/finance_period.dart';
import '../../domain/entities/finance_summary.dart';
import '../controllers/finance_providers.dart';

/// Kategorie 1 — Finanzdashboard (nur Gesellschafter/Admin).
class FinanceScreen extends ConsumerWidget {
  const FinanceScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final period = ref.watch(selectedPeriodProvider);
    final summary = ref.watch(financeSummaryProvider);
    final actions = ref.watch(financeActionsProvider);
    final busy = actions.isLoading;

    return RefreshIndicator(
      onRefresh: () async => ref.invalidate(financeSummaryProvider),
      color: AppColors.brand,
      child: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          SectionHeader(
            eyebrow: 'finanzen',
            title: 'Dashboard',
            action: _ActionCluster(
              busy: busy,
              onSync: () => _sync(context, ref),
              onExport: () => _export(context, ref),
              onApprovals: () => context.push(AppRoutes.approvals),
            ),
          ),
          const SizedBox(height: AppSpacing.s5),
          _PeriodSelector(period: period),
          const SizedBox(height: AppSpacing.s6),
          summary.when(
            loading: () => const Padding(
              padding: EdgeInsets.all(48),
              child: Center(child: CircularProgressIndicator(color: AppColors.brand)),
            ),
            error: (e, _) => _ErrorCard(message: '$e'),
            data: (s) => _SummaryContent(summary: s),
          ),
        ],
      ),
    );
  }

  Future<void> _sync(BuildContext context, WidgetRef ref) async {
    final count = await ref.read(financeActionsProvider.notifier).sync();
    if (!context.mounted) return;
    final ok = !ref.read(financeActionsProvider).hasError;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok
            ? 'sevDesk synchronisiert: $count Buchungen.'
            : 'Synchronisierung fehlgeschlagen.'),
      ),
    );
  }

  Future<void> _export(BuildContext context, WidgetRef ref) async {
    final bytes = await ref.read(financeActionsProvider.notifier).exportPdf();
    if (!context.mounted) return;
    if (bytes == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('PDF-Export fehlgeschlagen.')),
      );
      return;
    }
    await Printing.sharePdf(bytes: bytes, filename: 'finanzauswertung.pdf');
  }
}

class _ActionCluster extends StatelessWidget {
  const _ActionCluster({
    required this.busy,
    required this.onSync,
    required this.onExport,
    required this.onApprovals,
  });

  final bool busy;
  final VoidCallback onSync;
  final VoidCallback onExport;
  final VoidCallback onApprovals;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        _IconAction(
          icon: Icons.verified_user_outlined,
          tooltip: 'Freigaben',
          onTap: onApprovals,
        ),
        const SizedBox(width: 6),
        _IconAction(
          icon: Icons.sync,
          tooltip: 'sevDesk synchronisieren',
          onTap: busy ? null : onSync,
        ),
        const SizedBox(width: 6),
        _IconAction(
          icon: Icons.picture_as_pdf_outlined,
          tooltip: 'PDF-Export',
          onTap: busy ? null : onExport,
          emphasize: true,
        ),
      ],
    );
  }
}

class _IconAction extends StatelessWidget {
  const _IconAction({
    required this.icon,
    required this.tooltip,
    this.onTap,
    this.emphasize = false,
  });

  final IconData icon;
  final String tooltip;
  final VoidCallback? onTap;
  final bool emphasize;

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: tooltip,
      child: Material(
        color: emphasize ? AppColors.brand : AppColors.surfaceAlt,
        borderRadius: BorderRadius.circular(AppRadii.md),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(AppRadii.md),
          child: Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(AppRadii.md),
              border: Border.all(
                color: emphasize ? AppColors.brand : AppColors.borderSubtle,
              ),
            ),
            child: Icon(icon, size: 20, color: AppColors.ink),
          ),
        ),
      ),
    );
  }
}

class _PeriodSelector extends ConsumerWidget {
  const _PeriodSelector({required this.period});
  final FinancePeriod period;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Eyebrow('zeitraum'),
          const SizedBox(height: AppSpacing.s2),
          Row(
            children: [
              const Icon(Icons.date_range_outlined, size: 20, color: AppColors.ink),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  '${Formatters.date(period.from)} – ${Formatters.date(period.to)}',
                  style: AppTypography.body(
                    size: 16,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Wrap(
            spacing: 8,
            runSpacing: 6,
            children: [
              _RangeChip(
                label: 'Monat',
                onTap: () => ref.read(selectedPeriodProvider.notifier).state =
                    FinancePeriod.currentMonth(),
              ),
              _RangeChip(
                label: 'Jahr (YTD)',
                onTap: () => ref.read(selectedPeriodProvider.notifier).state =
                    FinancePeriod.yearToDate(),
              ),
              _RangeChip(
                label: 'Zeitraum wählen …',
                icon: Icons.tune,
                onTap: () => _pickRange(context, ref),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Future<void> _pickRange(BuildContext context, WidgetRef ref) async {
    final now = DateTime.now();
    final picked = await showDateRangePicker(
      context: context,
      firstDate: DateTime(now.year - 5),
      lastDate: DateTime(now.year + 1),
      initialDateRange: DateTimeRange(start: period.from, end: period.to),
      locale: const Locale('de'),
      builder: (context, child) => Theme(
        data: Theme.of(context).copyWith(
          colorScheme: Theme.of(context).colorScheme.copyWith(
                primary: AppColors.brand,
                onPrimary: AppColors.ink,
              ),
        ),
        child: child!,
      ),
    );
    if (picked != null) {
      ref.read(selectedPeriodProvider.notifier).state =
          FinancePeriod(from: picked.start, to: picked.end);
    }
  }
}

class _RangeChip extends StatelessWidget {
  const _RangeChip({required this.label, this.onTap, this.icon});
  final String label;
  final VoidCallback? onTap;
  final IconData? icon;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: AppColors.surfaceAlt,
      borderRadius: BorderRadius.circular(AppRadii.pill),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        child: Container(
          padding: const EdgeInsets.symmetric(
            horizontal: AppSpacing.s3,
            vertical: 8,
          ),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(AppRadii.pill),
            border: Border.all(color: AppColors.borderSubtle),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (icon != null) ...[
                Icon(icon, size: 14, color: AppColors.ink),
                const SizedBox(width: 6),
              ],
              Text(
                label,
                style: AppTypography.body(
                  size: 13,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _SummaryContent extends StatelessWidget {
  const _SummaryContent({required this.summary});
  final FinanceSummary summary;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        LayoutBuilder(
          builder: (context, constraints) {
            final cols = constraints.maxWidth < 380 ? 1 : 2;
            return GridView.count(
              crossAxisCount: cols,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              childAspectRatio: 1.7,
              mainAxisSpacing: AppSpacing.s3,
              crossAxisSpacing: AppSpacing.s3,
              children: [
                KpiCard(
                  label: 'umsatz 7 %',
                  value: Formatters.euro(summary.revenueNet7),
                  icon: Icons.percent,
                ),
                KpiCard(
                  label: 'umsatz 19 %',
                  value: Formatters.euro(summary.revenueNet19),
                  icon: Icons.percent,
                ),
                KpiCard(
                  label: 'umsatz netto',
                  value: Formatters.euro(summary.revenueNet),
                  emphasize: true,
                  icon: Icons.trending_up,
                ),
                KpiCard(
                  label: 'aufwand',
                  value: Formatters.euro(summary.expenseNet),
                  icon: Icons.trending_down,
                ),
                KpiCard(
                  label: 'ergebnis',
                  value: Formatters.euro(summary.resultNet),
                  emphasize: true,
                  valueColor: summary.resultNet < 0
                      ? AppColors.statusCritical
                      : AppColors.statusPositive,
                  icon: Icons.euro_symbol,
                ),
                KpiCard(
                  label: 'ust-saldo',
                  value: Formatters.euro(summary.vatCollected - summary.vatPaid),
                  icon: Icons.receipt_long_outlined,
                ),
              ],
            );
          },
        ),
        const SizedBox(height: AppSpacing.s6),
        const Eyebrow('konten (SKR 03)'),
        const SizedBox(height: AppSpacing.s3),
        if (summary.accounts.isEmpty)
          AppCard(
            color: AppColors.surfaceAlt,
            child: Row(
              children: [
                const Icon(Icons.info_outline, color: AppColors.textMuted),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: Text(
                    'Keine Buchungen im gewählten Zeitraum.',
                    style: AppTypography.body(size: 14, color: AppColors.textMuted),
                  ),
                ),
              ],
            ),
          )
        else
          Column(
            children: [
              for (final a in summary.accounts) ...[
                _AccountRow(
                  code: a.code,
                  name: a.name,
                  isRevenue: a.isRevenue,
                  amount: a.net,
                ),
                const SizedBox(height: AppSpacing.s2),
              ],
            ],
          ),
      ],
    );
  }
}

class _AccountRow extends StatelessWidget {
  const _AccountRow({
    required this.code,
    required this.name,
    required this.isRevenue,
    required this.amount,
  });

  final String code;
  final String name;
  final bool isRevenue;
  final double amount;

  @override
  Widget build(BuildContext context) {
    return AppCard(
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
              color: isRevenue ? AppColors.brandLight : AppColors.surfaceAlt,
              border: Border.all(
                color: isRevenue ? AppColors.brand : AppColors.borderSubtle,
              ),
              borderRadius: BorderRadius.circular(AppRadii.sm),
            ),
            alignment: Alignment.center,
            child: Text(
              code.substring(0, 1),
              style: AppTypography.display(
                size: 14,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '$code · $name',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
                Text(
                  isRevenue ? 'Erlös' : 'Aufwand',
                  style: AppTypography.body(size: 12, color: AppColors.textMuted),
                ),
              ],
            ),
          ),
          Text(
            Formatters.euro(amount),
            style: AppTypography.body(
              size: 15,
              weight: FontWeight.w700,
              color: isRevenue ? AppColors.statusPositive : AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

class _ErrorCard extends StatelessWidget {
  const _ErrorCard({required this.message});
  final String message;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: const Color(0xFFF7DBDB),
      borderColor: AppColors.statusCritical,
      child: Row(
        children: [
          const Icon(Icons.error_outline, color: AppColors.statusCritical),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Text(
              message,
              style: AppTypography.body(size: 14, color: AppColors.ink),
            ),
          ),
        ],
      ),
    );
  }
}
