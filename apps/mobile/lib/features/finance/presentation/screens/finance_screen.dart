import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:printing/printing.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/utils/formatters.dart';
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

    return Scaffold(
      appBar: AppBar(
        title: const Text('Finanzdashboard'),
        actions: [
          IconButton(
            tooltip: 'Gesellschafter-Freigaben',
            icon: const Icon(Icons.verified_user),
            onPressed: () => context.push(AppRoutes.approvals),
          ),
          IconButton(
            tooltip: 'sevDesk synchronisieren',
            icon: const Icon(Icons.sync),
            onPressed: busy ? null : () => _sync(context, ref),
          ),
          IconButton(
            tooltip: 'PDF exportieren',
            icon: const Icon(Icons.picture_as_pdf),
            onPressed: busy ? null : () => _export(context, ref),
          ),
        ],
      ),
      body: RefreshIndicator(
        onRefresh: () async => ref.invalidate(financeSummaryProvider),
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            _PeriodSelector(period: period),
            const SizedBox(height: 16),
            summary.when(
              loading: () => const Padding(
                padding: EdgeInsets.all(48),
                child: Center(child: CircularProgressIndicator()),
              ),
              error: (e, _) => _ErrorCard(message: '$e'),
              data: (s) => _SummaryContent(summary: s),
            ),
          ],
        ),
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

class _PeriodSelector extends ConsumerWidget {
  const _PeriodSelector({required this.period});
  final FinancePeriod period;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '${Formatters.date(period.from)} – ${Formatters.date(period.to)}',
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 8),
            Wrap(
              spacing: 8,
              children: [
                ActionChip(
                  label: const Text('Aktueller Monat'),
                  onPressed: () => ref.read(selectedPeriodProvider.notifier).state =
                      FinancePeriod.currentMonth(),
                ),
                ActionChip(
                  label: const Text('Jahr (YTD)'),
                  onPressed: () => ref.read(selectedPeriodProvider.notifier).state =
                      FinancePeriod.yearToDate(),
                ),
                ActionChip(
                  label: const Text('Zeitraum wählen'),
                  avatar: const Icon(Icons.date_range, size: 18),
                  onPressed: () => _pickRange(context, ref),
                ),
              ],
            ),
          ],
        ),
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
    );
    if (picked != null) {
      ref.read(selectedPeriodProvider.notifier).state =
          FinancePeriod(from: picked.start, to: picked.end);
    }
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
        GridView.count(
          crossAxisCount: 2,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          childAspectRatio: 1.7,
          mainAxisSpacing: 12,
          crossAxisSpacing: 12,
          children: [
            _KpiCard(label: 'Umsatz netto (7 %)', value: summary.revenueNet7),
            _KpiCard(label: 'Umsatz netto (19 %)', value: summary.revenueNet19),
            _KpiCard(
              label: 'Umsatz netto gesamt',
              value: summary.revenueNet,
              emphasize: true,
            ),
            _KpiCard(label: 'Aufwand netto', value: summary.expenseNet),
            _KpiCard(
              label: 'Ergebnis (netto)',
              value: summary.resultNet,
              emphasize: true,
              signColor: true,
            ),
            _KpiCard(label: 'USt-Saldo', value: summary.vatCollected - summary.vatPaid),
          ],
        ),
        const SizedBox(height: 24),
        Text('Konten (SKR 03)', style: Theme.of(context).textTheme.titleMedium),
        const SizedBox(height: 8),
        if (summary.accounts.isEmpty)
          const Padding(
            padding: EdgeInsets.symmetric(vertical: 24),
            child: Center(child: Text('Keine Buchungen im Zeitraum.')),
          )
        else
          ...summary.accounts.map(
            (a) => Card(
              child: ListTile(
                dense: true,
                leading: CircleAvatar(child: Text(a.code.substring(0, 1))),
                title: Text('${a.code} · ${a.name}'),
                subtitle: Text(a.isRevenue ? 'Erlös' : 'Aufwand'),
                trailing: Text(
                  Formatters.euro(a.net),
                  style: const TextStyle(fontWeight: FontWeight.w600),
                ),
              ),
            ),
          ),
      ],
    );
  }
}

class _KpiCard extends StatelessWidget {
  const _KpiCard({
    required this.label,
    required this.value,
    this.emphasize = false,
    this.signColor = false,
  });

  final String label;
  final double value;
  final bool emphasize;
  final bool signColor;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    Color? color;
    if (signColor) {
      color = value < 0 ? theme.colorScheme.error : Colors.green.shade700;
    }
    return Card(
      color: emphasize ? theme.colorScheme.primaryContainer : null,
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(label, style: theme.textTheme.labelMedium),
            const SizedBox(height: 6),
            Text(
              Formatters.euro(value),
              style: theme.textTheme.titleLarge?.copyWith(color: color),
            ),
          ],
        ),
      ),
    );
  }
}

class _ErrorCard extends StatelessWidget {
  const _ErrorCard({required this.message});
  final String message;

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Theme.of(context).colorScheme.errorContainer,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            const Icon(Icons.error_outline),
            const SizedBox(width: 12),
            Expanded(child: Text(message)),
          ],
        ),
      ),
    );
  }
}
