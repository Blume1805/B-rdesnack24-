import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../customer/presentation/controllers/customer_providers.dart';
import 'b2b_csv_download.dart'
    if (dart.library.html) 'b2b_csv_download_web.dart';

/// B2B-Kunden — Übersicht + CSV-Export im sevDesk-Import-Format.
/// Nur für Gesellschafter/Systemadmin (RLS + Server-Check).
class B2bCustomersScreen extends ConsumerStatefulWidget {
  const B2bCustomersScreen({super.key});

  @override
  ConsumerState<B2bCustomersScreen> createState() => _B2bCustomersScreenState();
}

class _B2bCustomersScreenState extends ConsumerState<B2bCustomersScreen> {
  String? _preview;
  bool _busy = false;

  Future<void> _load() async {
    setState(() => _busy = true);
    try {
      final csv =
          await ref.read(customerRepositoryProvider).businessCustomersCsv();
      setState(() => _preview = csv);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _download() async {
    final csv = _preview;
    if (csv == null) return;
    await downloadB2bCsv(csv);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('B2B-Kunden — sevDesk-Export')),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        children: [
          Text(
            'Exportiert alle Unternehmer-Kunden (customer_type = business) '
            'als CSV-Datei im sevDesk-Import-Format. Semikolon-getrennt, '
            'UTF-8, eine Zeile pro Kunde. Import in sevDesk unter '
            'Stammdaten → Kunden → Importieren.',
            style: AppTypography.body(size: 13, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s5),
          FilledButton.icon(
            onPressed: _busy ? null : _load,
            icon: _busy
                ? const SizedBox(
                    width: 16,
                    height: 16,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: AppColors.ink,
                    ),
                  )
                : const Icon(Icons.refresh),
            label: const Text('Datensätze laden'),
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.brand,
              foregroundColor: AppColors.ink,
              padding: const EdgeInsets.symmetric(vertical: 12),
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          if (_preview != null) ...[
            OutlinedButton.icon(
              onPressed: _download,
              icon: const Icon(Icons.download_outlined),
              label: const Text('CSV herunterladen (b2b_customers.csv)'),
              style: OutlinedButton.styleFrom(
                foregroundColor: AppColors.ink,
                side: const BorderSide(color: AppColors.brand),
                padding: const EdgeInsets.symmetric(vertical: 12),
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            AppCard(
              padding: const EdgeInsets.all(AppSpacing.s3),
              child: SelectableText(
                _preview!,
                style: AppTypography.body(
                  size: 12,
                  color: AppColors.ink,
                ).copyWith(fontFamily: 'monospace'),
              ),
            ),
          ],
        ],
      ),
    );
  }
}
