import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Reklamationen der Kunden (je Kauf) — Sicht für Gesellschafter/Admin.
/// Zeigt alle Tickets aus `purchase_complaints` (RLS: GS/Admin sehen
/// alles) mit Problemart, Kommentar und Kaufbezug. Bearbeitung: Status
/// „In Bearbeitung" / „Erledigt" / „Abgelehnt" — bei Abschluss mit
/// Antwort-Notiz, die der Kunde in seinem Verlauf sieht.
class ComplaintsScreen extends ConsumerStatefulWidget {
  const ComplaintsScreen({super.key});

  @override
  ConsumerState<ComplaintsScreen> createState() => _ComplaintsScreenState();
}

class _ComplaintsScreenState extends ConsumerState<ComplaintsScreen> {
  late Future<List<Map<String, dynamic>>> _future;

  @override
  void initState() {
    super.initState();
    _future = _load();
  }

  Future<List<Map<String, dynamic>>> _load() async {
    final rows = await ref
        .read(supabaseClientProvider)
        .from('purchase_complaints')
        .select(
          'id, kind, comment, status, resolution_note, created_at, '
          'purchase:purchases(purchased_at, total_gross), '
          'customer:customers(customer_number)',
        )
        .order('created_at', ascending: false);
    return List<Map<String, dynamic>>.from(rows as List);
  }

  Future<void> _setStatus(
    Map<String, dynamic> row,
    String status, {
    bool askNote = false,
  }) async {
    String? note;
    if (askNote) {
      final ctrl = TextEditingController(
        text: (row['resolution_note'] as String?) ?? '',
      );
      final ok = await showDialog<bool>(
        context: context,
        builder: (dctx) => AlertDialog(
          title: Text(
            status == 'resolved'
                ? 'Reklamation erledigen'
                : 'Reklamation ablehnen',
          ),
          content: TextField(
            controller: ctrl,
            maxLines: 3,
            maxLength: 300,
            decoration: const InputDecoration(
              labelText: 'Antwort an den Kunden',
              helperText: 'Wird dem Kunden im Verlauf angezeigt.',
              border: OutlineInputBorder(),
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(dctx).pop(false),
              child: const Text('Abbrechen'),
            ),
            FilledButton(
              onPressed: () => Navigator.of(dctx).pop(true),
              child: const Text('Speichern'),
            ),
          ],
        ),
      );
      if (ok != true) return;
      note = ctrl.text.trim().isEmpty ? null : ctrl.text.trim();
    }
    final client = ref.read(supabaseClientProvider);
    await client.from('purchase_complaints').update({
      'status': status,
      if (askNote) 'resolution_note': note,
      'updated_by': client.auth.currentUser?.id,
    }).eq('id', row['id'] as String);
    if (!mounted) return;
    setState(() => _future = _load());
  }

  static ({String label, IconData icon}) _kindInfo(String kind) {
    switch (kind) {
      case 'not_received':
        return (
          label: 'Produkt nicht erhalten',
          icon: Icons.remove_shopping_cart_outlined
        );
      case 'damaged':
        return (label: 'Produkt beschädigt', icon: Icons.broken_image_outlined);
      case 'wrong_product':
        return (label: 'Falsches Produkt', icon: Icons.swap_horiz_outlined);
      default:
        return (label: 'Sonstiges', icon: Icons.help_outline);
    }
  }

  static ({String label, Color color}) _statusInfo(String status) {
    switch (status) {
      case 'in_progress':
        return (label: 'IN BEARBEITUNG', color: AppColors.brandDark);
      case 'resolved':
        return (label: 'ERLEDIGT', color: AppColors.statusPositive);
      case 'rejected':
        return (label: 'ABGELEHNT', color: AppColors.statusCritical);
      default:
        return (label: 'OFFEN', color: AppColors.ink);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Reklamationen')),
      body: FutureBuilder<List<Map<String, dynamic>>>(
        future: _future,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) {
            return const Center(
              child: CircularProgressIndicator(color: AppColors.brand),
            );
          }
          if (snap.hasError) {
            return Center(
              child: Padding(
                padding: const EdgeInsets.all(AppSpacing.s5),
                child: Text(
                  'Fehler: ${snap.error}',
                  style: AppTypography.body(size: 13, color: AppColors.ink),
                ),
              ),
            );
          }
          final rows = snap.data ?? const [];
          if (rows.isEmpty) {
            return Center(
              child: Text(
                'Keine Reklamationen — sehr gut!',
                style: AppTypography.body(size: 13, color: AppColors.textMuted),
              ),
            );
          }
          return RefreshIndicator(
            color: AppColors.brand,
            onRefresh: () async => setState(() => _future = _load()),
            child: ListView.separated(
              padding: const EdgeInsets.all(AppSpacing.s4),
              itemCount: rows.length,
              separatorBuilder: (_, __) =>
                  const SizedBox(height: AppSpacing.s3),
              itemBuilder: (context, i) => _ComplaintCard(
                row: rows[i],
                kindInfo: _kindInfo,
                statusInfo: _statusInfo,
                onSetStatus: _setStatus,
              ),
            ),
          );
        },
      ),
    );
  }
}

class _ComplaintCard extends StatelessWidget {
  const _ComplaintCard({
    required this.row,
    required this.kindInfo,
    required this.statusInfo,
    required this.onSetStatus,
  });

  final Map<String, dynamic> row;
  final ({String label, IconData icon}) Function(String) kindInfo;
  final ({String label, Color color}) Function(String) statusInfo;
  final Future<void> Function(Map<String, dynamic>, String, {bool askNote})
      onSetStatus;

  @override
  Widget build(BuildContext context) {
    final kind = kindInfo(row['kind'] as String? ?? 'other');
    final status = row['status'] as String? ?? 'open';
    final st = statusInfo(status);
    final purchase = row['purchase'] as Map<String, dynamic>?;
    final customer = row['customer'] as Map<String, dynamic>?;
    final createdAt = DateTime.tryParse(row['created_at'] as String? ?? '');
    final purchasedAt =
        DateTime.tryParse(purchase?['purchased_at'] as String? ?? '');
    final open = status == 'open' || status == 'in_progress';

    return AppCard(
      topStripeColor: open ? AppColors.brand : null,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(kind.icon, size: 18, color: AppColors.ink),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  kind.label,
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  border: Border.all(color: st.color),
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
                child: Text(
                  st.label,
                  style: AppTypography.body(
                    size: 10,
                    weight: FontWeight.w800,
                    color: st.color,
                  ).copyWith(letterSpacing: 0.6),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Kunde ${customer?['customer_number'] ?? '—'} · '
            'Kauf ${purchasedAt != null ? Formatters.date(purchasedAt) : '—'} '
            'über ${Formatters.euro(((purchase?['total_gross'] as num?) ?? 0).toDouble())} · '
            'gemeldet ${createdAt != null ? Formatters.date(createdAt) : '—'}',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          if ((row['comment'] as String?)?.isNotEmpty == true) ...[
            const SizedBox(height: AppSpacing.s2),
            Text(
              '„${row['comment']}"',
              style: AppTypography.body(size: 13, color: AppColors.ink)
                  .copyWith(height: 1.4),
            ),
          ],
          if ((row['resolution_note'] as String?)?.isNotEmpty == true) ...[
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Antwort: ${row['resolution_note']}',
              style: AppTypography.body(size: 12, color: AppColors.textMuted)
                  .copyWith(height: 1.35),
            ),
          ],
          if (open) ...[
            const SizedBox(height: AppSpacing.s3),
            Wrap(
              spacing: AppSpacing.s2,
              runSpacing: AppSpacing.s2,
              children: [
                if (status == 'open')
                  OutlinedButton.icon(
                    onPressed: () => onSetStatus(row, 'in_progress'),
                    icon: const Icon(Icons.hourglass_top, size: 16),
                    label: const Text('In Bearbeitung'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: AppColors.ink,
                      side: const BorderSide(color: AppColors.brand),
                    ),
                  ),
                FilledButton.icon(
                  onPressed: () => onSetStatus(row, 'resolved', askNote: true),
                  icon: const Icon(Icons.check, size: 16),
                  label: const Text('Erledigt'),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppColors.ink,
                    foregroundColor: AppColors.brand,
                  ),
                ),
                OutlinedButton.icon(
                  onPressed: () => onSetStatus(row, 'rejected', askNote: true),
                  icon: const Icon(Icons.close, size: 16),
                  label: const Text('Ablehnen'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppColors.statusCritical,
                    side: const BorderSide(color: AppColors.statusCritical),
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}
