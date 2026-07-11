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
  List<Map<String, dynamic>>? _summary;
  bool _busy = false;
  String? _error;

  Future<void> _load() async {
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final client = ref.read(supabaseClientProvider);
      final results = await Future.wait([
        client.rpc('inventory_report', params: {
          'p_from': _from.toUtc().toIso8601String(),
          'p_to': _to.toUtc().toIso8601String(),
        }),
        client.rpc('inventory_summary_by_product'),
      ]);
      _rows = (results[0] as List).cast<Map<String, dynamic>>();
      _summary = (results[1] as List).cast<Map<String, dynamic>>();
    } catch (e) {
      _error = e.toString();
      _rows = null;
      _summary = null;
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
                summary: _summary ?? const [],
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
          else ...[
            _ReportTable(rows: _rows!),
            const SizedBox(height: AppSpacing.s6),
            if (_summary != null && _summary!.isNotEmpty)
              _StockSummary(summary: _summary!),
          ],
        ],
      ),
    );
  }
}

/// Bestandsübersicht je Produkt über alle Automaten + Lager.
class _StockSummary extends StatelessWidget {
  const _StockSummary({required this.summary});
  final List<Map<String, dynamic>> summary;

  @override
  Widget build(BuildContext context) {
    final totalItems = summary.fold<int>(
        0, (s, r) => s + ((r['total_qty'] as num?)?.toInt() ?? 0));
    final totalValue = summary.fold<double>(
        0.0, (s, r) => s + ((r['total_value'] as num?)?.toDouble() ?? 0));
    final distinctProducts = summary.where((r) =>
        ((r['total_qty'] as num?)?.toInt() ?? 0) > 0).length;

    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.summarize_outlined,
                  color: AppColors.ink, size: 18),
              const SizedBox(width: 6),
              Eyebrow('Bestand gesamt (Automaten + Lager)'),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Wrap(
            spacing: AppSpacing.s4,
            runSpacing: AppSpacing.s2,
            children: [
              _KpiTile(
                icon: Icons.category_outlined,
                label: 'Produkte im Bestand',
                value: '$distinctProducts',
              ),
              _KpiTile(
                icon: Icons.inventory_outlined,
                label: 'Einheiten gesamt',
                value: '$totalItems',
              ),
              _KpiTile(
                icon: Icons.euro_outlined,
                label: 'Warenwert netto',
                value: Formatters.euro(totalValue),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          const Divider(color: AppColors.borderSubtle, height: 1),
          const SizedBox(height: AppSpacing.s2),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              headingRowHeight: 34,
              dataRowMinHeight: 32,
              dataRowMaxHeight: 40,
              headingRowColor:
                  WidgetStateProperty.all(AppColors.surfaceAlt),
              columns: const [
                DataColumn(label: Text('SKU')),
                DataColumn(label: Text('Produkt')),
                DataColumn(label: Text('Automaten'), numeric: true),
                DataColumn(label: Text('Lager'), numeric: true),
                DataColumn(label: Text('Gesamt'), numeric: true),
                DataColumn(label: Text('EK/VK'), numeric: true),
                DataColumn(label: Text('Wert netto'), numeric: true),
              ],
              rows: [
                for (final r in summary)
                  DataRow(cells: [
                    DataCell(Text(r['sku']?.toString() ?? '')),
                    DataCell(Text(r['product_name']?.toString() ?? '')),
                    DataCell(Text('${r['in_machines_qty']}')),
                    DataCell(Text('${r['in_warehouse_qty']}')),
                    DataCell(Text(
                      '${r['total_qty']}',
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    )),
                    DataCell(Text(Formatters.euro(
                        (r['unit_price'] as num?)?.toDouble() ?? 0))),
                    DataCell(Text(Formatters.euro(
                        (r['total_value'] as num?)?.toDouble() ?? 0))),
                  ]),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _KpiTile extends StatelessWidget {
  const _KpiTile({
    required this.icon,
    required this.label,
    required this.value,
  });
  final IconData icon;
  final String label;
  final String value;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s3, vertical: AppSpacing.s2),
      decoration: BoxDecoration(
        color: AppColors.surfaceAlt,
        borderRadius: BorderRadius.circular(AppRadii.md),
        border: Border.all(color: AppColors.borderSubtle),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 18, color: AppColors.ink),
          const SizedBox(width: 8),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                label,
                style: AppTypography.body(
                  size: 10,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
              Text(
                value,
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
            ],
          ),
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
              dataRowMaxHeight: 44,
              headingRowColor: WidgetStateProperty.all(AppColors.surfaceAlt),
              columns: const [
                DataColumn(label: Text('Produkt')),
                DataColumn(label: Text('Anfang'), numeric: true),
                DataColumn(label: Text('+ Zug.'), numeric: true),
                DataColumn(label: Text('− Verk.'), numeric: true),
                DataColumn(label: Text('− Verd.'), numeric: true),
                DataColumn(label: Text('± Korr.'), numeric: true),
                DataColumn(label: Text('Ende'), numeric: true),
                DataColumn(label: Text('Kap.'), numeric: true),
                DataColumn(label: Text('VK/Stk.'), numeric: true),
                DataColumn(label: Text('Wert'), numeric: true),
                DataColumn(label: Text('MHD'), numeric: true),
                DataColumn(label: Text('Abschlag'), numeric: true),
                DataColumn(label: Text('Bilanz'), numeric: true),
              ],
              rows: [
                for (final r in entry.value) _dataRow(r),
                _sumRow(entry.value),
              ],
            ),
          ),
        ],
      ],
    );
  }

  DataRow _dataRow(Map<String, dynamic> r) {
    final unitPrice = (r['unit_price'] as num?)?.toDouble() ?? 0;
    final gross = (r['gross_value'] as num?)?.toDouble() ?? 0;
    final discount = (r['mhd_discount'] as num?)?.toDouble() ?? 0;
    final net = (r['net_value'] as num?)?.toDouble() ?? 0;
    final expiry = r['expiry_date']?.toString();
    final expiryDate = expiry == null ? null : DateTime.tryParse(expiry);
    final days = expiryDate == null
        ? null
        : expiryDate.difference(DateTime.now()).inDays;
    final expiryLabel = expiryDate == null
        ? '—'
        : '${Formatters.date(expiryDate)}'
            '${days != null && days < 7 && days >= 0 ? ' (${days}d)' : ''}';
    final warn = discount > 0;
    return DataRow(cells: [
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
      DataCell(Text(Formatters.euro(unitPrice))),
      DataCell(Text(Formatters.euro(gross))),
      DataCell(Text(
        expiryLabel,
        style: AppTypography.body(
          size: 12,
          color: warn ? AppColors.statusCritical : AppColors.textDefault,
          weight: warn ? FontWeight.w800 : FontWeight.w600,
        ),
      )),
      DataCell(Text(
        discount == 0 ? '—' : '− ${Formatters.euro(discount)}',
        style: AppTypography.body(
          size: 12,
          color: warn ? AppColors.statusCritical : AppColors.textDefault,
          weight: warn ? FontWeight.w800 : FontWeight.w600,
        ),
      )),
      DataCell(Text(
        Formatters.euro(net),
        style: AppTypography.body(
          size: 13,
          weight: FontWeight.w800,
          color: AppColors.ink,
        ),
      )),
    ]);
  }

  DataRow _sumRow(List<Map<String, dynamic>> list) {
    final sumGross = list.fold<double>(
        0, (s, r) => s + ((r['gross_value'] as num?)?.toDouble() ?? 0));
    final sumDisc = list.fold<double>(
        0, (s, r) => s + ((r['mhd_discount'] as num?)?.toDouble() ?? 0));
    final sumNet = list.fold<double>(
        0, (s, r) => s + ((r['net_value'] as num?)?.toDouble() ?? 0));
    final sumEnd = list.fold<int>(
        0, (s, r) => s + ((r['end_qty'] as num?)?.toInt() ?? 0));
    final emptyCell = const DataCell(Text(''));
    TextStyle bold(Color c) => AppTypography.body(
        size: 13, weight: FontWeight.w800, color: c);
    return DataRow(
      color: WidgetStateProperty.all(AppColors.brandLight),
      cells: [
        DataCell(Text('Summe', style: bold(AppColors.ink))),
        emptyCell, emptyCell, emptyCell, emptyCell, emptyCell,
        DataCell(Text('$sumEnd', style: bold(AppColors.ink))),
        emptyCell, emptyCell,
        DataCell(Text(Formatters.euro(sumGross), style: bold(AppColors.ink))),
        emptyCell,
        DataCell(Text(
            sumDisc == 0 ? '—' : '− ${Formatters.euro(sumDisc)}',
            style: bold(AppColors.statusCritical))),
        DataCell(Text(Formatters.euro(sumNet), style: bold(AppColors.ink))),
      ],
    );
  }
}
