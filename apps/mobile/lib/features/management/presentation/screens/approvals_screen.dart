import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:url_launcher/url_launcher.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../data/approvals_remote_data_source.dart';

final _approvalsRemoteProvider =
    Provider<ApprovalsRemoteDataSource>((ref) =>
        ApprovalsRemoteDataSource(ref.watch(supabaseClientProvider)));

final _approvalsListProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>(
        (ref) => ref.watch(_approvalsRemoteProvider).list());

/// Freigaben-Übersicht: alle offenen und erledigten Anfragen. Gesellschafter
/// sehen ihre eigenen offenen Entscheidungen ganz oben.
class DocumentApprovalsScreen extends ConsumerWidget {
  const DocumentApprovalsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final approvals = ref.watch(_approvalsListProvider);
    return Scaffold(
      appBar: AppBar(title: const Text('Freigaben')),
      body: approvals.when(
        loading: () => const Center(
            child: CircularProgressIndicator(color: AppColors.brand)),
        error: (e, _) => Center(
            child: Padding(padding: const EdgeInsets.all(AppSpacing.s6),
                child: Text('$e'))),
        data: (rows) => rows.isEmpty
            ? const _EmptyHint()
            : RefreshIndicator(
                onRefresh: () async => ref.invalidate(_approvalsListProvider),
                color: AppColors.brand,
                child: ListView(
                  padding: const EdgeInsets.all(AppSpacing.s5),
                  children: [
                    for (final r in rows) _ApprovalCard(row: r),
                  ],
                ),
              ),
      ),
    );
  }
}

class _EmptyHint extends StatelessWidget {
  const _EmptyHint();
  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Padding(
        padding: EdgeInsets.all(AppSpacing.s6),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Icon(Icons.rule_folder_outlined,
              size: 40, color: AppColors.textMuted),
          SizedBox(height: 8),
          Text('Keine Freigabe-Anfragen offen.'),
        ]),
      ),
    );
  }
}

class _ApprovalCard extends ConsumerWidget {
  const _ApprovalCard({required this.row});
  final Map<String, dynamic> row;

  Color _statusColor(String status) {
    switch (status) {
      case 'approved': return AppColors.statusPositive;
      case 'rejected': return AppColors.statusCritical;
      case 'cancelled': return AppColors.textMuted;
      default: return AppColors.brand;
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final status = row['status']?.toString() ?? 'pending';
    final myDec = row['my_decision']?.toString() ?? 'pending';
    final decisions =
        (row['decisions'] as List?)?.cast<Map<String, dynamic>>() ?? [];

    DateTime? parseDate(dynamic v) =>
        v == null ? null : DateTime.tryParse(v.toString());
    final from = parseDate(row['period_from']);
    final to = parseDate(row['period_to']);
    final requestedAt = parseDate(row['requested_at']);

    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: AppCard(
        topStripeColor: _statusColor(status),
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(row['title']?.toString() ?? '',
                      style: AppTypography.body(
                          size: 15,
                          weight: FontWeight.w800,
                          color: AppColors.ink)),
                ),
                StatusBadge(
                  label: switch (status) {
                    'approved' => 'freigegeben',
                    'rejected' => 'abgelehnt',
                    'cancelled' => 'abgebrochen',
                    _ => 'offen',
                  },
                  tone: switch (status) {
                    'approved' => StatusTone.positive,
                    'rejected' => StatusTone.critical,
                    'cancelled' => StatusTone.neutral,
                    _ => StatusTone.warning,
                  },
                ),
              ],
            ),
            const SizedBox(height: 4),
            Text(
              'Zeitraum: ${from == null ? '?' : Formatters.date(from)} – '
              '${to == null ? '?' : Formatters.date(to)}'
              '${requestedAt == null ? '' : ' · angefragt ${Formatters.date(requestedAt)}'}',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s3),
            for (final d in decisions) _DecisionRow(row: d),
            if (status == 'pending' && myDec == 'pending') ...[
              const SizedBox(height: AppSpacing.s3),
              Row(
                children: [
                  Expanded(
                    child: FilledButton.icon(
                      onPressed: () => _decide(context, ref, 'approved'),
                      icon: const Icon(Icons.check),
                      label: const Text('Freigeben'),
                      style: FilledButton.styleFrom(
                        backgroundColor: AppColors.statusPositive,
                        foregroundColor: Colors.white,
                      ),
                    ),
                  ),
                  const SizedBox(width: AppSpacing.s2),
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () => _decide(context, ref, 'rejected'),
                      icon: const Icon(Icons.close),
                      label: const Text('Ablehnen'),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: AppColors.statusCritical,
                        side: const BorderSide(color: AppColors.statusCritical),
                      ),
                    ),
                  ),
                ],
              ),
            ],
            if (status == 'approved' &&
                (row['final_pdf_path']?.toString().isNotEmpty ?? false)) ...[
              const SizedBox(height: AppSpacing.s3),
              FilledButton.icon(
                onPressed: () => _openFinal(context, ref,
                    row['final_pdf_path']?.toString() ?? ''),
                icon: const Icon(Icons.picture_as_pdf),
                label: const Text('Signiertes PDF öffnen'),
                style: FilledButton.styleFrom(
                  backgroundColor: AppColors.brand,
                  foregroundColor: AppColors.ink,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Future<void> _openFinal(BuildContext context, WidgetRef ref, String path) async {
    if (path.isEmpty) return;
    final remote = ref.read(_approvalsRemoteProvider);
    try {
      final url = await remote.signedUrl(path);
      if (url == null) throw Exception('Kein URL verfügbar');
      await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    }
  }

  Future<void> _decide(BuildContext context, WidgetRef ref, String decision) async {
    String? comment;
    if (decision == 'rejected') {
      final ctrl = TextEditingController();
      comment = await showDialog<String>(
        context: context,
        builder: (_) => AlertDialog(
          title: const Text('Ablehnung begründen'),
          content: TextField(
            controller: ctrl,
            maxLines: 3,
            decoration: const InputDecoration(hintText: 'Kommentar (Pflicht)'),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context, null),
                child: const Text('Abbrechen')),
            FilledButton(
              onPressed: () {
                if (ctrl.text.trim().length < 3) return;
                Navigator.pop(context, ctrl.text.trim());
              },
              child: const Text('Ablehnen'),
            ),
          ],
        ),
      );
      if (comment == null || comment.trim().length < 3) return;
    }
    try {
      await ref.read(_approvalsRemoteProvider).decide(
        approvalId: row['id']?.toString() ?? '',
        decision: decision,
        comment: comment,
      );
      ref.invalidate(_approvalsListProvider);
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Fehler: $e')));
      }
    }
  }
}

class _DecisionRow extends StatelessWidget {
  const _DecisionRow({required this.row});
  final Map<String, dynamic> row;
  @override
  Widget build(BuildContext context) {
    final decision = row['decision']?.toString() ?? 'pending';
    final name = row['approver_name']?.toString() ?? '?';
    final at = row['decided_at']?.toString();
    final comment = row['comment']?.toString();
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        children: [
          Icon(
            switch (decision) {
              'approved' => Icons.check_circle,
              'rejected' => Icons.cancel,
              _ => Icons.schedule,
            },
            size: 16,
            color: switch (decision) {
              'approved' => AppColors.statusPositive,
              'rejected' => AppColors.statusCritical,
              _ => AppColors.brand,
            },
          ),
          const SizedBox(width: 6),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '$name — ${switch (decision) {
                    'approved' => 'freigegeben',
                    'rejected' => 'abgelehnt',
                    _ => 'ausstehend',
                  }}${at == null ? '' : ' · $at'}',
                  style: AppTypography.body(
                      size: 12,
                      weight: FontWeight.w700,
                      color: AppColors.ink),
                ),
                if (comment?.isNotEmpty == true)
                  Text('„$comment"',
                      style: AppTypography.body(
                          size: 11, color: AppColors.textMuted)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
