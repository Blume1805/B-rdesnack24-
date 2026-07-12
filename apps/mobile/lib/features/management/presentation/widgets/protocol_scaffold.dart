import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:printing/printing.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/utils/formatters.dart';
import '../../../finance/domain/entities/finance_period.dart';
import '../controllers/management_providers.dart';

/// Generisches Gerüst für ein revisionssicheres Protokoll:
/// Zeitraum-Filter, Liste, optionaler PDF-Export und Anlegen-FAB.
///
/// [onCreate] öffnet ein Formular und liefert die Insert-Daten (ohne
/// recorded_by) oder null bei Abbruch.
class ProtocolScaffold extends ConsumerStatefulWidget {
  const ProtocolScaffold({
    required this.title,
    required this.table,
    required this.dateCol,
    required this.itemTitle,
    required this.itemSubtitle,
    required this.onCreate,
    this.exportKind,
    super.key,
  });

  final String title;
  final String table;
  final String dateCol;
  final String? exportKind;
  final String Function(Map<String, dynamic> row) itemTitle;
  final String Function(Map<String, dynamic> row) itemSubtitle;
  final Future<Map<String, dynamic>?> Function(BuildContext context, WidgetRef ref)
      onCreate;

  @override
  ConsumerState<ProtocolScaffold> createState() => _ProtocolScaffoldState();
}

class _ProtocolScaffoldState extends ConsumerState<ProtocolScaffold> {
  late FinancePeriod _period = FinancePeriod.currentMonth();

  ProtocolQuery get _query => ProtocolQuery(
        table: widget.table,
        dateCol: widget.dateCol,
        from: _period.from,
        to: DateTime(_period.to.year, _period.to.month, _period.to.day, 23, 59, 59),
      );

  Future<void> _create() async {
    final data = await widget.onCreate(context, ref);
    if (data == null) return;
    final ok = await ref
        .read(managementActionsProvider.notifier)
        .addProtocol(widget.table, data);
    if (!mounted) return;
    if (ok) {
      ref.invalidate(protocolListProvider(_query));
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Eintrag gespeichert.')),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Speichern fehlgeschlagen (Berechtigung?).')),
      );
    }
  }

  Future<void> _export() async {
    final kind = widget.exportKind;
    if (kind == null) return;
    final bytes = await ref
        .read(managementActionsProvider.notifier)
        .exportProtocol(kind, _period.from, _period.to);
    if (!mounted) return;
    if (bytes == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Export fehlgeschlagen.')),
      );
      return;
    }
    await Printing.sharePdf(bytes: bytes, filename: '${kind}_nachweis.pdf');
  }

  @override
  Widget build(BuildContext context) {
    final list = ref.watch(protocolListProvider(_query));
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        actions: [
          if (widget.exportKind != null)
            IconButton(
              tooltip: 'PDF-Nachweis',
              icon: const Icon(Icons.picture_as_pdf, color: AppColors.statusCritical),
              onPressed: _export,
            ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _create,
        icon: const Icon(Icons.add),
        label: const Text('Neu'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(12),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    '${Formatters.date(_period.from)} – ${Formatters.date(_period.to)}',
                  ),
                ),
                TextButton.icon(
                  icon: const Icon(Icons.date_range),
                  label: const Text('Zeitraum'),
                  onPressed: () async {
                    final now = DateTime.now();
                    final picked = await showDateRangePicker(
                      context: context,
                      firstDate: DateTime(now.year - 5),
                      lastDate: DateTime(now.year + 1),
                      initialDateRange:
                          DateTimeRange(start: _period.from, end: _period.to),
                      locale: const Locale('de'),
                    );
                    if (picked != null) {
                      setState(() => _period =
                          FinancePeriod(from: picked.start, to: picked.end));
                    }
                  },
                ),
              ],
            ),
          ),
          const Divider(height: 1),
          Expanded(
            child: list.when(
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (e, _) => Center(child: Text('$e')),
              data: (rows) => rows.isEmpty
                  ? const Center(child: Text('Keine Einträge im Zeitraum.'))
                  : RefreshIndicator(
                      onRefresh: () async =>
                          ref.invalidate(protocolListProvider(_query)),
                      child: ListView.separated(
                        itemCount: rows.length,
                        separatorBuilder: (_, __) => const Divider(height: 1),
                        itemBuilder: (context, i) => ListTile(
                          title: Text(widget.itemTitle(rows[i])),
                          subtitle: Text(widget.itemSubtitle(rows[i])),
                        ),
                      ),
                    ),
            ),
          ),
        ],
      ),
    );
  }
}
