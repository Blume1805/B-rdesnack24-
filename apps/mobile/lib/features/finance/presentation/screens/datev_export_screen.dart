import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/services/datev.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
// Web: echter Browser-Download; Native: no-op-Stub.
import '../../../../core/utils/text_file_download_stub.dart'
    if (dart.library.js_interop) '../../../../core/utils/text_file_download_web.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/finance_period.dart';

/// DATEV-Schnittstelle: exportiert die Tageslosungen der App-Verkäufe als
/// EXTF-Buchungsstapel (CSV) für die Buchhaltung. Buchhaltung und
/// Steuererklärungen erstellt Gesellschafter Philipp Blume selbst — keine
/// externe Steuerkanzlei. Erreichbar aus dem Finanzdashboard
/// (Aktionsleiste) und der Verwaltung (Modul-Kachel) — serverseitig auf
/// Gesellschafter/Admin beschränkt (RPC-Guard).
class DatevExportScreen extends ConsumerStatefulWidget {
  const DatevExportScreen({super.key});

  @override
  ConsumerState<DatevExportScreen> createState() => _DatevExportScreenState();
}

class _DatevExportScreenState extends ConsumerState<DatevExportScreen> {
  late FinancePeriod _period = FinancePeriod.currentMonth();
  final _consultantCtrl = TextEditingController();
  final _clientCtrl = TextEditingController();
  bool _busy = false;

  @override
  void dispose() {
    _consultantCtrl.dispose();
    _clientCtrl.dispose();
    super.dispose();
  }

  Future<void> _pickPeriod() async {
    final now = DateTime.now();
    final picked = await showDateRangePicker(
      context: context,
      firstDate: DateTime(now.year - 5),
      lastDate: now,
      initialDateRange: DateTimeRange(start: _period.from, end: _period.to),
      locale: const Locale('de'),
    );
    if (picked != null) {
      setState(
        () => _period = FinancePeriod(from: picked.start, to: picked.end),
      );
    }
  }

  Future<void> _export() async {
    setState(() => _busy = true);
    try {
      final rows = await ref.read(supabaseClientProvider).rpc(
        'datev_export_rows',
        params: {
          'p_from': _period.from.toIso8601String().substring(0, 10),
          'p_to': _period.to.toIso8601String().substring(0, 10),
        },
      ) as List<dynamic>;
      final parsed = rows
          .map((e) => DatevRow.fromJson(Map<String, dynamic>.from(e as Map)))
          .toList();
      if (!mounted) return;
      if (parsed.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Keine Umsätze im gewählten Zeitraum.'),
          ),
        );
        return;
      }
      final csv = buildDatevBuchungsstapel(
        rows: parsed,
        from: _period.from,
        to: _period.to,
        consultantId: _consultantCtrl.text.trim(),
        clientId: _clientCtrl.text.trim(),
      );
      final fname = 'EXTF_Buchungsstapel_'
          '${_period.from.toIso8601String().substring(0, 10)}_'
          '${_period.to.toIso8601String().substring(0, 10)}.csv';
      await downloadTextFile(csv, fname);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('DATEV-Datei erstellt (${parsed.length} Buchungen).'),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Export fehlgeschlagen: $e')),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('DATEV-Export')),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Expanded(
                child: SectionHeader(
                  eyebrow: 'Schnittstelle',
                  title: 'Buchungsstapel für die Buchhaltung',
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: AppColors.statusPositive.withValues(alpha: 0.14),
                  borderRadius: BorderRadius.circular(AppRadii.sm),
                  border: Border.all(
                    color: AppColors.statusPositive.withValues(alpha: 0.5),
                  ),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(
                      Icons.receipt_long_outlined,
                      size: 14,
                      color: AppColors.statusPositive,
                    ),
                    const SizedBox(width: 4),
                    Text(
                      'DATEV',
                      style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w800,
                        color: AppColors.statusPositive,
                      ).copyWith(letterSpacing: 0.4),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Erzeugt eine CSV-Datei im DATEV-Format (EXTF-Buchungsstapel, '
            'SKR 03). Enthalten sind die Tageslosungen der App-Verkäufe je '
            'Steuersatz: Kasse (1000) an Erlöse 7 % (8300) bzw. 19 % (8400) '
            '— entsprechend der GoBD-Verfahrensdokumentation. Buchhaltung '
            'und Steuererklärungen erstellt Gesellschafter Philipp Blume; '
            'die Datei lässt sich direkt in eine DATEV-fähige '
            'Buchhaltungssoftware importieren.',
            style: AppTypography.body(size: 13, color: AppColors.textMuted)
                .copyWith(height: 1.4),
          ),
          const SizedBox(height: AppSpacing.s4),
          AppCard(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                OutlinedButton.icon(
                  onPressed: _busy ? null : _pickPeriod,
                  icon: const Icon(Icons.date_range, size: 18),
                  label: Text(
                    'Zeitraum: ${Formatters.date(_period.from)} – '
                    '${Formatters.date(_period.to)}',
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
                TextField(
                  controller: _consultantCtrl,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(
                    labelText: 'Beraternummer (optional)',
                    helperText: 'Nur falls in der Buchhaltungssoftware '
                        'hinterlegt',
                    isDense: true,
                  ),
                ),
                const SizedBox(height: AppSpacing.s2),
                TextField(
                  controller: _clientCtrl,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(
                    labelText: 'Mandantennummer (optional)',
                    helperText: 'Bleibt sie leer, beim Import in der '
                        'Software ergänzen',
                    isDense: true,
                  ),
                ),
                const SizedBox(height: AppSpacing.s4),
                FilledButton.icon(
                  onPressed: _busy ? null : _export,
                  style: FilledButton.styleFrom(
                    backgroundColor: AppColors.brand,
                    foregroundColor: AppColors.ink,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                  ),
                  icon: _busy
                      ? const SizedBox(
                          width: 18,
                          height: 18,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            color: AppColors.ink,
                          ),
                        )
                      : const Icon(Icons.download_outlined),
                  label: const Text('DATEV-Datei herunterladen'),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Hinweis: Bargeld-Entnahmen und Bankbewegungen bucht Philipp '
            'Blume weiterhin über sevDesk/Kontoauszug — diese Datei deckt '
            'bewusst nur die Erlösseite ab, damit keine Buchungen doppelt '
            'entstehen.',
            style: AppTypography.body(size: 11, color: AppColors.textMuted)
                .copyWith(height: 1.35),
          ),
        ],
      ),
    );
  }
}
