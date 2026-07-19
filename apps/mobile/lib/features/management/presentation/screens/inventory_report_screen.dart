import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../data/approvals_remote_data_source.dart';
import 'inventory_report_print.dart'
    if (dart.library.html) 'inventory_report_print_web.dart';

/// FIFO-Inventur — Bewegungen und Bewertung je Produkt (nicht mehr je
/// Automat).  Aufbau:
///   • Kopf: Zeitraum, Bewertung nach FIFO, Anschaffungskosten
///   • Pro Produkt eine Sektion mit
///       – chronologischen Bewegungen (Zugänge mit EK/Rechnung, Verkäufe,
///         Vernichtungen mit MHD, Korrekturen)
///       – FIFO-Restlots am Stichtag mit Bewertung + MHD-Abschlag
///   • Am Ende: MHD-Bewertungsmatrix + Unterschriften-Block
class InventoryReportScreen extends ConsumerStatefulWidget {
  const InventoryReportScreen({super.key});
  @override
  ConsumerState<InventoryReportScreen> createState() =>
      _InventoryReportScreenState();
}

class _InventoryReportScreenState extends ConsumerState<InventoryReportScreen> {
  DateTime _from = DateTime.now().subtract(const Duration(days: 90));
  DateTime _to = DateTime.now();
  List<Map<String, dynamic>>? _movements;
  List<Map<String, dynamic>>? _lots;
  List<Map<String, dynamic>>? _signatures;
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
        client.rpc('inventory_fifo_movements', params: {
          'p_from': _from.toUtc().toIso8601String(),
          'p_to': _to.toUtc().toIso8601String(),
        }),
        client.rpc('inventory_fifo_lots', params: {
          'p_to': _to.toUtc().toIso8601String(),
        }),
        client.rpc('list_partner_signatures'),
      ]);
      _movements = (results[0] as List).cast<Map<String, dynamic>>();
      _lots = (results[1] as List).cast<Map<String, dynamic>>();
      _signatures = (results[2] as List).cast<Map<String, dynamic>>();
    } catch (e) {
      _error = e.toString();
      _movements = null;
      _lots = null;
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

  Future<void> _requestApproval() async {
    if (_movements == null) return;
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Freigabe anfordern'),
        content: Text(
            'Die Inventur für ${Formatters.date(_from)} – ${Formatters.date(_to)} '
            'wird beiden Gesellschaftern zur Prüfung vorgelegt.  Nach 2-of-2-'
            'Freigabe wird der Report mit den DocuSign-Signaturen finalisiert. '
            'Fortfahren?'),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context, false),
              child: const Text('Abbrechen')),
          FilledButton(
              style: FilledButton.styleFrom(
                  backgroundColor: AppColors.brand,
                  foregroundColor: AppColors.ink),
              onPressed: () => Navigator.pop(context, true),
              child: const Text('Anfordern')),
        ],
      ),
    );
    if (confirmed != true) return;
    try {
      final remote =
          ApprovalsRemoteDataSource(ref.read(supabaseClientProvider));
      await remote.requestApproval(
        documentKind: 'inventory_fifo',
        periodFrom: _from,
        periodTo: _to,
        title: 'Inventur ${Formatters.date(_from)} – ${Formatters.date(_to)}',
        snapshot: {
          'movements': _movements,
          'lots': _lots,
        },
      );
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Freigabe angefordert.')),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    }
  }

  /// Gruppiert Bewegungen nach Produkt in Original-Reihenfolge (Server
  /// liefert bereits nach product_name, sku, occurred_at sortiert).
  Map<String, List<Map<String, dynamic>>> _byProduct(
      List<Map<String, dynamic>> rows) {
    final m = <String, List<Map<String, dynamic>>>{};
    for (final r in rows) {
      final key = r['product_id']?.toString() ?? '';
      m.putIfAbsent(key, () => []).add(r);
    }
    return m;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Inventur — FIFO-Bewegungsreport'),
        actions: [
          if (_movements != null && _movements!.isNotEmpty) ...[
            IconButton(
              tooltip: 'Freigabe anfordern',
              icon: const Icon(Icons.rule_folder_outlined,
                  color: AppColors.brand),
              onPressed: _requestApproval,
            ),
            IconButton(
              tooltip: 'Als PDF drucken',
              icon: const Icon(Icons.picture_as_pdf,
                  color: AppColors.statusCritical),
              onPressed: () => printInventoryReport(
                movements: _movements!,
                lots: _lots ?? const [],
                signatures: _signatures ?? const [],
                from: _from,
                to: _to,
              ),
            ),
          ],
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        children: [
          Text(
            'FIFO-Inventur — je Produkt alle Bewegungen chronologisch, '
            'Bewertung nach dem Verbrauchsfolgeverfahren (§256 HGB): die '
            'ältesten Zugänge sind zuerst verbraucht, der Endbestand wird '
            'mit den EK-Preisen der jüngsten verbliebenen Lots bewertet. '
            'MHD-Abschlag nach Restlaufzeit-Matrix vom AK-Wert.',
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
          else if (_movements == null)
            const SizedBox.shrink()
          else if (_movements!.isEmpty)
            AppCard(
              color: AppColors.surfaceAlt,
              child: Text(
                'Keine Bewegungen im gewählten Zeitraum.',
                style: AppTypography.body(size: 13, color: AppColors.textMuted),
              ),
            )
          else ...[
            for (final entry in _byProduct(_movements!).entries)
              _ProductSection(
                productId: entry.key,
                movements: entry.value,
                lots: (_lots ?? [])
                    .where((l) => l['product_id']?.toString() == entry.key)
                    .toList(),
              ),
            const SizedBox(height: AppSpacing.s5),
            _GrandTotal(lots: _lots ?? const []),
            const SizedBox(height: AppSpacing.s6),
            const _MhdWritedownMatrix(),
            const SizedBox(height: AppSpacing.s6),
            if (_signatures != null && _signatures!.isNotEmpty)
              _SignatureBlock(signatures: _signatures!),
          ],
        ],
      ),
    );
  }
}

/// Ein Produkt-Block: Header (Name + SKU), Bewegungstabelle, FIFO-Lot-
/// Bewertung, Zeilensumme.
class _ProductSection extends StatelessWidget {
  const _ProductSection({
    required this.productId,
    required this.movements,
    required this.lots,
  });
  final String productId;
  final List<Map<String, dynamic>> movements;
  final List<Map<String, dynamic>> lots;

  @override
  Widget build(BuildContext context) {
    final name = movements.first['product_name']?.toString() ?? '';
    final sku = movements.first['sku']?.toString() ?? '';
    final endQty = lots.fold<int>(
        0, (s, l) => s + ((l['remaining_qty'] as num?)?.toInt() ?? 0));
    final grossSum = lots.fold<double>(
        0, (s, l) => s + ((l['lot_gross'] as num?)?.toDouble() ?? 0));
    final discSum = lots.fold<double>(
        0, (s, l) => s + ((l['lot_discount'] as num?)?.toDouble() ?? 0));
    final netSum = lots.fold<double>(
        0, (s, l) => s + ((l['lot_net'] as num?)?.toDouble() ?? 0));

    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s5),
      child: AppCard(
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        name,
                        style: AppTypography.body(
                          size: 16,
                          weight: FontWeight.w800,
                          color: AppColors.ink,
                        ),
                      ),
                      Text(
                        sku.isEmpty ? '' : 'SKU: $sku',
                        style: AppTypography.body(
                          size: 11,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ],
                  ),
                ),
                Text(
                  'Endbestand: $endQty',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w800,
                    color: AppColors.brand,
                  ),
                ),
              ],
            ),
            const SizedBox(height: AppSpacing.s3),
            Text('Bewegungen im Zeitraum',
                style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w800,
                    color: AppColors.textMuted)),
            const SizedBox(height: 4),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: DataTable(
                headingRowHeight: 32,
                dataRowMinHeight: 30,
                dataRowMaxHeight: 40,
                headingRowColor: WidgetStateProperty.all(AppColors.surfaceAlt),
                columns: const [
                  DataColumn(label: Text('Datum')),
                  DataColumn(label: Text('Vorgang')),
                  DataColumn(label: Text('Menge'), numeric: true),
                  DataColumn(label: Text('EK/Stk.'), numeric: true),
                  DataColumn(label: Text('Rechnung')),
                  DataColumn(label: Text('MHD')),
                  DataColumn(label: Text('Bemerkung')),
                ],
                rows: [
                  for (final m in movements) _movementRow(m),
                ],
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            Text('FIFO-Restlots am Stichtag',
                style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w800,
                    color: AppColors.textMuted)),
            const SizedBox(height: 4),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: DataTable(
                headingRowHeight: 32,
                dataRowMinHeight: 30,
                dataRowMaxHeight: 40,
                headingRowColor: WidgetStateProperty.all(AppColors.surfaceAlt),
                columns: const [
                  DataColumn(label: Text('Rechnung')),
                  DataColumn(label: Text('Rg-Datum')),
                  DataColumn(label: Text('Rest'), numeric: true),
                  DataColumn(label: Text('EK/Stk.'), numeric: true),
                  DataColumn(label: Text('MHD')),
                  DataColumn(label: Text('Restlaufzeit'), numeric: true),
                  DataColumn(label: Text('Abschlag %'), numeric: true),
                  DataColumn(label: Text('AK-Wert'), numeric: true),
                  DataColumn(label: Text('Abschlag €'), numeric: true),
                  DataColumn(label: Text('Bilanz'), numeric: true),
                ],
                rows: [
                  for (final l in lots) _lotRow(l),
                  _lotSumRow(endQty, grossSum, discSum, netSum),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  DataRow _movementRow(Map<String, dynamic> m) {
    final type = (m['type'] as String?) ?? '';
    final label = switch (type) {
      'refill' => 'Zugang',
      'sale' => 'Verkauf',
      'disposal' => 'Vernichtung (MHD)',
      'correction' => 'Korrektur',
      _ => type,
    };
    final qty = (m['quantity_delta'] as num?)?.toInt() ?? 0;
    final cost = (m['unit_cost'] as num?)?.toDouble();
    final invNo = m['invoice_number']?.toString() ?? '';
    final invDate = m['invoice_date']?.toString();
    final lotMhd = m['lot_expiry']?.toString();
    final reason = m['reason']?.toString() ?? '';
    final occurred = m['occurred_at']?.toString();
    final rowColor = type == 'refill'
        ? const Color(0xFFF3F8ED)
        : type == 'disposal'
            ? const Color(0xFFFAE9E4)
            : null;
    return DataRow(
      color: rowColor == null ? null : WidgetStateProperty.all(rowColor),
      cells: [
        DataCell(Text(_fmtDate(occurred))),
        DataCell(Text(label,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w800,
              color:
                  type == 'disposal' ? AppColors.statusCritical : AppColors.ink,
            ))),
        DataCell(Text(
          qty > 0 ? '+$qty' : '$qty',
          style: AppTypography.body(
            size: 12,
            weight: FontWeight.w800,
            color: qty > 0 ? AppColors.statusPositive : AppColors.ink,
          ),
        )),
        DataCell(Text(cost == null ? '—' : Formatters.euro(cost))),
        DataCell(Text(
          invNo.isEmpty
              ? '—'
              : '$invNo${invDate == null ? '' : '  · ${_fmtDate(invDate)}'}',
          style: AppTypography.body(size: 11),
        )),
        DataCell(Text(_fmtDate(lotMhd))),
        DataCell(SizedBox(
          width: 200,
          child: Text(
            reason,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: AppTypography.body(size: 11, color: AppColors.textMuted),
          ),
        )),
      ],
    );
  }

  DataRow _lotRow(Map<String, dynamic> l) {
    final invNo = l['invoice_number']?.toString() ?? '—';
    final invDate = l['invoice_date']?.toString();
    final rest = (l['remaining_qty'] as num?)?.toInt() ?? 0;
    final cost = (l['unit_cost'] as num?)?.toDouble() ?? 0;
    final mhd = l['lot_expiry']?.toString();
    final days = (l['mhd_days_left'] as num?)?.toInt();
    final pct = (l['mhd_pct'] as num?)?.toInt() ?? 0;
    final gross = (l['lot_gross'] as num?)?.toDouble() ?? 0;
    final disc = (l['lot_discount'] as num?)?.toDouble() ?? 0;
    final net = (l['lot_net'] as num?)?.toDouble() ?? 0;
    final warn = pct >= 20;
    return DataRow(cells: [
      DataCell(Text(invNo,
          style: AppTypography.body(size: 11, color: AppColors.ink))),
      DataCell(Text(_fmtDate(invDate))),
      DataCell(Text('$rest',
          style: AppTypography.body(
              size: 12, weight: FontWeight.w800, color: AppColors.ink))),
      DataCell(Text(Formatters.euro(cost))),
      DataCell(Text(_fmtDate(mhd))),
      DataCell(Text(days == null ? '—' : '${days}d')),
      DataCell(Text(
        '$pct %',
        style: AppTypography.body(
          size: 12,
          weight: FontWeight.w800,
          color: warn ? AppColors.statusCritical : AppColors.ink,
        ),
      )),
      DataCell(Text(Formatters.euro(gross))),
      DataCell(Text(
        disc == 0 ? '—' : '− ${Formatters.euro(disc)}',
        style: AppTypography.body(
          size: 12,
          weight: FontWeight.w800,
          color: warn ? AppColors.statusCritical : AppColors.ink,
        ),
      )),
      DataCell(Text(
        Formatters.euro(net),
        style: AppTypography.body(
            size: 13, weight: FontWeight.w800, color: AppColors.ink),
      )),
    ]);
  }

  DataRow _lotSumRow(int qty, double gross, double disc, double net) {
    final bold = AppTypography.body(
        size: 13, weight: FontWeight.w800, color: AppColors.ink);
    return DataRow(
      color: WidgetStateProperty.all(AppColors.brandLight),
      cells: [
        DataCell(Text('Summe', style: bold)),
        const DataCell(Text('')),
        DataCell(Text('$qty', style: bold)),
        const DataCell(Text('')),
        const DataCell(Text('')),
        const DataCell(Text('')),
        const DataCell(Text('')),
        DataCell(Text(Formatters.euro(gross), style: bold)),
        DataCell(Text(disc == 0 ? '—' : '− ${Formatters.euro(disc)}',
            style: bold.copyWith(color: AppColors.statusCritical))),
        DataCell(Text(Formatters.euro(net), style: bold)),
      ],
    );
  }

  static String _fmtDate(String? s) {
    if (s == null || s.isEmpty) return '—';
    try {
      final d = DateTime.parse(s);
      return Formatters.date(d);
    } catch (_) {
      return s.substring(0, s.length > 10 ? 10 : s.length);
    }
  }
}

/// Gesamt-Bilanzwert (Summe aller Produkt-Lots am Stichtag).
class _GrandTotal extends StatelessWidget {
  const _GrandTotal({required this.lots});
  final List<Map<String, dynamic>> lots;

  @override
  Widget build(BuildContext context) {
    final totalItems = lots.fold<int>(
        0, (s, l) => s + ((l['remaining_qty'] as num?)?.toInt() ?? 0));
    final totalGross = lots.fold<double>(
        0, (s, l) => s + ((l['lot_gross'] as num?)?.toDouble() ?? 0));
    final totalDisc = lots.fold<double>(
        0, (s, l) => s + ((l['lot_discount'] as num?)?.toDouble() ?? 0));
    final totalNet = lots.fold<double>(
        0, (s, l) => s + ((l['lot_net'] as num?)?.toDouble() ?? 0));
    final products =
        lots.map((l) => l['product_id']?.toString()).toSet().length;

    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s4),
      color: AppColors.brandLight,
      borderColor: AppColors.brand,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: const [
              Icon(Icons.stacked_line_chart, color: AppColors.ink, size: 18),
              SizedBox(width: 6),
              Eyebrow('Bilanzwert der Vorräte'),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Wrap(
            spacing: AppSpacing.s5,
            runSpacing: AppSpacing.s2,
            children: [
              _KpiTile(label: 'Produkte im Bestand', value: '$products'),
              _KpiTile(label: 'Einheiten gesamt', value: '$totalItems'),
              _KpiTile(
                  label: 'Anschaffungskosten netto',
                  value: Formatters.euro(totalGross)),
              _KpiTile(
                  label: 'MHD-Abschlag',
                  value: totalDisc == 0
                      ? '— 0,00 €'
                      : '− ${Formatters.euro(totalDisc)}',
                  emphasize: true),
              _KpiTile(
                  label: 'Bilanzwert netto',
                  value: Formatters.euro(totalNet),
                  bold: true),
            ],
          ),
        ],
      ),
    );
  }
}

class _KpiTile extends StatelessWidget {
  const _KpiTile({
    required this.label,
    required this.value,
    this.emphasize = false,
    this.bold = false,
  });
  final String label;
  final String value;
  final bool emphasize;
  final bool bold;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s3, vertical: AppSpacing.s2),
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        borderRadius: BorderRadius.circular(AppRadii.md),
        border: Border.all(color: AppColors.borderSubtle),
      ),
      child: Column(
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
              size: bold ? 17 : 15,
              weight: FontWeight.w800,
              color: emphasize ? AppColors.statusCritical : AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

/// Transparente Übersicht der gestuften MHD-Bewertungsabschläge.  Bleibt
/// als Anhang unter der Inventur für Wirtschaftsprüfer/Steuerberater.
class _MhdWritedownMatrix extends StatelessWidget {
  const _MhdWritedownMatrix();

  static const rows = <_MhdRow>[
    _MhdRow(
        range: '> 4 Wochen',
        typical: '0 %',
        applied: '0 %',
        reason: 'normale Verwertbarkeit'),
    _MhdRow(
        range: '2–4 Wochen',
        typical: '10–30 %',
        applied: '20 %',
        reason: 'eingeschränkte Verkaufszeit'),
    _MhdRow(
        range: '1–2 Wochen',
        typical: '30–50 %',
        applied: '40 %',
        reason: 'erheblicher Verkaufsdruck'),
    _MhdRow(
        range: '< 1 Woche',
        typical: '50–80 %',
        applied: '65 %',
        reason: 'Risiko Nichtverkauf deutlich erhöht'),
    _MhdRow(
        range: 'MHD überschritten',
        typical: '100 %',
        applied: '100 %',
        reason: 'keine wirtschaftl. Verwertbarkeit'),
  ];

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: const [
              Icon(Icons.rule_folder_outlined, color: AppColors.ink, size: 18),
              SizedBox(width: 6),
              Eyebrow('Bewertungsansatz MHD-Abschlag'),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf '
            'den Anschaffungskostenwert eines Lots angesetzt. Die '
            'Bandbreite orientiert sich an branchenüblichen Ansätzen für '
            'verderbliche Handelswaren; angesetzt wird der Mittelwert.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              headingRowHeight: 34,
              dataRowMinHeight: 32,
              dataRowMaxHeight: 44,
              headingRowColor: WidgetStateProperty.all(AppColors.surfaceAlt),
              columns: const [
                DataColumn(label: Text('Rest-MHD am Stichtag')),
                DataColumn(label: Text('Typischer Ansatz')),
                DataColumn(
                    label: Text('Bördesnack24 wendet an'), numeric: true),
                DataColumn(label: Text('Begründung')),
              ],
              rows: [
                for (final r in rows)
                  DataRow(cells: [
                    DataCell(Text(r.range,
                        style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w800,
                            color: AppColors.ink))),
                    DataCell(Text(r.typical)),
                    DataCell(Text(
                      r.applied,
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w800,
                        color: r.applied == '0 %'
                            ? AppColors.ink
                            : AppColors.statusCritical,
                      ),
                    )),
                    DataCell(Text(r.reason,
                        style: AppTypography.body(
                            size: 12, color: AppColors.textDefault))),
                  ]),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _MhdRow {
  const _MhdRow({
    required this.range,
    required this.typical,
    required this.applied,
    required this.reason,
  });
  final String range;
  final String typical;
  final String applied;
  final String reason;
}

/// Unterschriften-Block: Signaturlinie + Name + Rolle + Datum je
/// Gesellschafter.
class _SignatureBlock extends StatelessWidget {
  const _SignatureBlock({required this.signatures});
  final List<Map<String, dynamic>> signatures;
  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: const [
              Icon(Icons.draw_outlined, color: AppColors.ink, size: 18),
              SizedBox(width: 6),
              Eyebrow('Freigabe / Unterschriften'),
            ],
          ),
          const SizedBox(height: AppSpacing.s4),
          Wrap(
            spacing: AppSpacing.s5,
            runSpacing: AppSpacing.s4,
            children: [
              for (final s in signatures) _SignatureSlot(row: s),
            ],
          ),
        ],
      ),
    );
  }
}

class _SignatureSlot extends StatelessWidget {
  const _SignatureSlot({required this.row});
  final Map<String, dynamic> row;
  @override
  Widget build(BuildContext context) {
    final name = row['full_name']?.toString() ?? '';
    final role = row['role_label']?.toString() ?? '';
    final image = row['image_url']?.toString();
    return SizedBox(
      width: 260,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 68,
            decoration: BoxDecoration(
              color: AppColors.surfaceAlt,
              borderRadius: BorderRadius.circular(AppRadii.md),
              border: Border.all(color: AppColors.borderSubtle),
            ),
            padding: const EdgeInsets.all(AppSpacing.s2),
            alignment: Alignment.bottomLeft,
            child: image != null && image.isNotEmpty
                ? Image.network(image,
                    fit: BoxFit.contain,
                    errorBuilder: (_, __, ___) => const _Line())
                : const _Line(),
          ),
          const SizedBox(height: 6),
          Text(
            name,
            style: AppTypography.body(
                size: 13, weight: FontWeight.w800, color: AppColors.ink),
          ),
          Text(
            '$role · Datum: ${Formatters.date(DateTime.now())}',
            style: AppTypography.body(size: 11, color: AppColors.textMuted),
          ),
        ],
      ),
    );
  }
}

class _Line extends StatelessWidget {
  const _Line();
  @override
  Widget build(BuildContext context) => Container(
        height: 1,
        margin: const EdgeInsets.only(bottom: 2),
        color: AppColors.ink,
      );
}
