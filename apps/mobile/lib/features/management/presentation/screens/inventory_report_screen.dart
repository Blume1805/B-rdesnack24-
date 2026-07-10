import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import 'inventory_report_print.dart'
    if (dart.library.html) 'inventory_report_print_web.dart';

/// Permanente Inventur — Zeitraum-Auswahl + Tabelle je Automat/Produkt +
/// PDF-Export. Nur für Admins/Gesellschafter freigeschaltet (Server-Check
/// im inventory_report-RPC).
class InventoryReportScreen extends ConsumerStatefulWidget {
  const InventoryReportScreen({super.key});
  @override
  ConsumerState<InventoryReportScreen> createState() =>
      _InventoryReportScreenState();
}

class _InventoryReportScreenState
    extends ConsumerState<InventoryReportScreen> {
  DateTime _from = DateTime.now().subtract(const Duration(days: 30));
  DateTime _to = DateTime.now();
  List<Map<String, dynamic>>? _rows;
  bool _busy = false;
  String? _error;

  Future<void> _load() async {
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final client = ref.read(supabaseClientProvider);
      final res = await client.rpc('inventory_report', params: {
        'p_from': _from.toUtc().toIso8601String(),
        'p_to': _to.toUtc().toIso8601String(),
      });
      _rows = (res as List).cast<Map<String, dynamic>>();
    } catch (e) {
      _error = e.toString();
      _rows = null;
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _pickFrom() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _from,
      firstDate: DateTime(2024),
      lastDate: DateTime.now(),
      locale: const Locale('de'),
    );
    if (picked != null) setState(() => _from = picked);
  }

  Future<void> _pickTo() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _to,
      firstDate: DateTime(2024),
      lastDate: DateTime.now(),
      locale: const Locale('de'),
    );
    if (picked != null) setState(() => _to = picked);
  }

  @override
  void initState() {
    super.initState();
    Future.microtask(_load);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Inventur — Bewegungsreport'),
        actions: [
          if (_rows != null && _rows!.isNotEmpty)
            IconButton(
              tooltip: 'Als PDF drucken',
              icon: const Icon(Icons.picture_as_pdf_outlined),
              onPressed: () => printInventoryReport(
                rows: _rows!,
                from: _from,
                to: _to,
              ),
            ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        children: [
          Text(
            'Permanente Inventur — Anfangsbestand, Zugänge (Lieferschein/'
            'Nachfüllung), Verkäufe (Nayax), Vernichtungen, Korrekturen '
            'und Endbestand je Automat/Produkt. Nur für Systemadmin.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s4),
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: _pickFrom,
                  icon: const Icon(Icons.date_range),
                  label: Text('Von ${Formatters.date(_from)}'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppColors.ink,
                    side: const BorderSide(color: AppColors.brand),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: _pickTo,
                  icon: const Icon(Icons.date_range),
                  label: Text('Bis ${Formatters.date(_to)}'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppColors.ink,
                    side: const BorderSide(color: AppColors.brand),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          FilledButton.icon(
            onPressed: _busy ? null : _load,
            icon: _busy
                ? const SizedBox(
                    width: 16,
                    height: 16,
                    child: CircularProgressIndicator(
                        strokeWidth: 2, color: AppColors.ink),
                  )
                : const Icon(Icons.refresh),
            label: const Text('Inventur berechnen'),
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.brand,
              foregroundColor: AppColors.ink,
              padding: const EdgeInsets.symmetric(vertical: 14),
            ),
          ),
          const SizedBox(height: AppSpacing.s4),
          if (_error != null)
            AppCard(
              color: const Color(0xFFF7DBDB),
              borderColor: AppColors.statusCritical,
              child: Text(_error!,
                  style: AppTypography.body(size: 13, color: AppColors.ink)),
            )
          else if (_rows == null)
            const SizedBox.shrink()
          else if (_rows!.isEmpty)
            AppCard(
              color: AppColors.surfaceAlt,
              child: Text(
                'Keine Bestände / Bewegungen im gewählten Zeitraum.',
                style: AppTypography.body(
                    size: 13, color: AppColors.textMuted),
              ),
            )
          else
            _ReportTable(rows: _rows!),
        ],
      ),
    );
  }
}

class _ReportTable extends StatelessWidget {
  const _ReportTable({required this.rows});
  final List<Map<String, dynamic>> rows;

  @override
  Widget build(BuildContext context) {
    // Gruppieren nach Automat.
    final byMachine = <String, List<Map<String, dynamic>>>{};
    for (final r in rows) {
      final key = '${r['machine_code']} — ${r['machine_name']}';
      byMachine.putIfAbsent(key, () => []).add(r);
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        for (final entry in byMachine.entries) ...[
          Padding(
            padding:
                const EdgeInsets.only(top: 8, bottom: AppSpacing.s2),
            child: Text(
              entry.key,
              style: AppTypography.body(
                size: 14,
                weight: FontWeight.w800,
                color: AppColors.brand,
              ).copyWith(letterSpacing: 0.3),
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              headingRowHeight: 34,
              dataRowMinHeight: 32,
              dataRowMaxHeight: 40,
              headingRowColor: WidgetStateProperty.all(AppColors.surfaceAlt),
              columns: const [
                DataColumn(label: Text('Produkt')),
                DataColumn(label: Text('Anfang'), numeric: true),
                DataColumn(label: Text('+ Zugang'), numeric: true),
                DataColumn(label: Text('− Verkauf'), numeric: true),
                DataColumn(label: Text('− Verderb'), numeric: true),
                DataColumn(label: Text('± Korr.'), numeric: true),
                DataColumn(label: Text('Ende'), numeric: true),
                DataColumn(label: Text('von Kap.'), numeric: true),
              ],
              rows: [
                for (final r in entry.value)
                  DataRow(cells: [
                    DataCell(Text(r['product_name']?.toString() ?? '')),
                    DataCell(Text('${r['start_qty']}')),
                    DataCell(Text('${r['refill']}')),
                    DataCell(Text('${r['sales']}')),
                    DataCell(Text('${r['disposal']}')),
                    DataCell(Text('${r['correction']}')),
                    DataCell(Text(
                      '${r['end_qty']}',
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    )),
                    DataCell(Text('${r['capacity']}')),
                  ]),
              ],
            ),
          ),
        ],
      ],
    );
  }
}
