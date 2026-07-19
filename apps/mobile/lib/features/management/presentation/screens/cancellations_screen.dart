import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Eingegangene Abo-Kündigungen (§ 312k BGB) — Sicht für Gesellschafter/
/// Admin. Zeigt alle Kündigungserklärungen aus `cancellation_requests`
/// (RLS: nur GS/Admin sehen alles) und erlaubt „als bearbeitet markieren",
/// bis die Store-Abrechnung die Abwicklung übernimmt.
class CancellationsScreen extends ConsumerStatefulWidget {
  const CancellationsScreen({super.key});

  @override
  ConsumerState<CancellationsScreen> createState() =>
      _CancellationsScreenState();
}

class _CancellationsScreenState extends ConsumerState<CancellationsScreen> {
  late Future<List<Map<String, dynamic>>> _future;

  @override
  void initState() {
    super.initState();
    _future = _load();
  }

  Future<List<Map<String, dynamic>>> _load() async {
    final rows = await ref
        .read(supabaseClientProvider)
        .from('cancellation_requests')
        .select(
          'id, email, customer_number, kind, reason, cancel_at, requested_at, processed_at',
        )
        .order('requested_at', ascending: false);
    return List<Map<String, dynamic>>.from(rows as List);
  }

  Future<void> _markProcessed(String id) async {
    final client = ref.read(supabaseClientProvider);
    await client.from('cancellation_requests').update({
      'processed_at': DateTime.now().toUtc().toIso8601String(),
      'processed_by': client.auth.currentUser?.id,
    }).eq('id', id);
    if (!mounted) return;
    setState(() => _future = _load());
  }

  String _fmtTs(String? iso) {
    if (iso == null || iso.isEmpty) return '—';
    final dt = DateTime.tryParse(iso)?.toLocal();
    if (dt == null) return iso;
    String p(int v) => v.toString().padLeft(2, '0');
    return '${p(dt.day)}.${p(dt.month)}.${dt.year}, ${p(dt.hour)}:${p(dt.minute)} Uhr';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: AppBar(title: const Text('Kündigungen')),
      body: RefreshIndicator(
        color: AppColors.brand,
        onRefresh: () async => setState(() => _future = _load()),
        child: FutureBuilder<List<Map<String, dynamic>>>(
          future: _future,
          builder: (context, snap) {
            if (snap.hasError) {
              return ListView(
                padding: const EdgeInsets.all(AppSpacing.s4),
                children: [
                  AppCard(
                    color: const Color(0xFFF7DBDB),
                    borderColor: AppColors.statusCritical,
                    child: Text('Kündigungen konnten nicht geladen werden: '
                        '${snap.error}'),
                  ),
                ],
              );
            }
            if (!snap.hasData) {
              return const Center(
                child: CircularProgressIndicator(color: AppColors.brand),
              );
            }
            final rows = snap.data!;
            final open = rows.where((r) => r['processed_at'] == null).length;
            return ListView(
              padding: const EdgeInsets.all(AppSpacing.s4),
              children: [
                const Eyebrow('Abo-Verwaltung'),
                const SizedBox(height: 2),
                Text(
                  'Eingegangene Kündigungen',
                  style: AppTypography.display(
                    size: 22,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  rows.isEmpty
                      ? 'Bisher sind keine Kündigungen eingegangen.'
                      : '$open offen · ${rows.length} gesamt. Der Zugang '
                          'wurde jeweils automatisch per E-Mail bestätigt '
                          '(§ 312k Abs. 2 BGB).',
                  style:
                      AppTypography.body(size: 13, color: AppColors.textMuted),
                ),
                const SizedBox(height: AppSpacing.s4),
                for (final r in rows) ...[
                  _CancellationCard(
                    row: r,
                    fmtTs: _fmtTs,
                    onProcess: () => _markProcessed(r['id'] as String),
                  ),
                  const SizedBox(height: AppSpacing.s3),
                ],
              ],
            );
          },
        ),
      ),
    );
  }
}

class _CancellationCard extends StatelessWidget {
  const _CancellationCard({
    required this.row,
    required this.fmtTs,
    required this.onProcess,
  });
  final Map<String, dynamic> row;
  final String Function(String?) fmtTs;
  final VoidCallback onProcess;

  @override
  Widget build(BuildContext context) {
    final processed = row['processed_at'] != null;
    final extraordinary = row['kind'] == 'ausserordentlich';
    return AppCard(
      borderColor: processed ? AppColors.borderSubtle : AppColors.statusWarning,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  (row['email'] ?? '').toString(),
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: processed
                      ? AppColors.statusPositive.withValues(alpha: 0.12)
                      : AppColors.statusWarning.withValues(alpha: 0.14),
                  border: Border.all(
                    color: processed
                        ? AppColors.statusPositive
                        : AppColors.statusWarning,
                    width: 0.8,
                  ),
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
                child: Text(
                  processed ? 'BEARBEITET' : 'OFFEN',
                  style: AppTypography.body(
                    size: 10,
                    weight: FontWeight.w800,
                    color: processed
                        ? AppColors.statusPositive
                        : AppColors.statusWarning,
                  ).copyWith(letterSpacing: 0.6),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            '${extraordinary ? 'Außerordentliche' : 'Ordentliche'} Kündigung · '
            '${(row['cancel_at'] ?? '').toString()}',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
          Text(
            'Eingegangen: ${fmtTs(row['requested_at'] as String?)}'
            '${row['customer_number'] != null ? ' · Kd-Nr. ${row['customer_number']}' : ''}',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          if ((row['reason'] ?? '').toString().isNotEmpty) ...[
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Grund: ${row['reason']}',
              style: AppTypography.body(size: 12, color: AppColors.textDefault),
            ),
          ],
          if (processed)
            Text(
              'Bearbeitet: ${fmtTs(row['processed_at'] as String?)}',
              style: AppTypography.body(
                size: 12,
                color: AppColors.statusPositive,
              ),
            ),
          if (!processed) ...[
            const SizedBox(height: AppSpacing.s3),
            OutlinedButton.icon(
              onPressed: onProcess,
              icon: const Icon(Icons.task_alt, size: 18),
              label: const Text('Als bearbeitet markieren'),
            ),
          ],
        ],
      ),
    );
  }
}
