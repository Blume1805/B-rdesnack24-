import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/admin_providers.dart';
import '../widgets/admin_shell.dart';

/// Firmenkunden: Stammdaten, Mitglieder, Einladungen, Standorte und
/// Rechnungsläufe.
///
/// Diese Ansicht ist die interne Gegenseite zum Unternehmensbereich der
/// Kunden-App. Was ein Firmenkunde dort NICHT darf — Stammdaten und
/// Standorte ändern —, geschieht hier.
class BusinessesAdminScreen extends ConsumerWidget {
  const BusinessesAdminScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final businesses = ref.watch(businessesProvider);

    return AdminScaffold(
      title: 'Firmenkunden',
      eyebrow: 'B2B',
      headline: 'Firmenkunden verwalten',
      intro: 'Beschäftigte kaufen am Automaten auf Firmenrechnung. Der '
          'Arbeitgeberanteil wird monatlich abgerechnet.',
      onRefresh: () async => ref.invalidate(businessesProvider),
      child: AdminAsyncList<Map<String, dynamic>>(
        value: businesses,
        emptyTitle: 'Noch kein Firmenkunde angelegt',
        emptyBody: 'Das B2B-Modell ist vollständig gebaut, aber noch nicht in '
            'Betrieb. Ein Firmenkunde entsteht über die Datenbankfunktion '
            '`business_create`; eine Maske dafür gibt es bewusst noch nicht, '
            'weil Vertragsdaten aus dem Vertrag kommen und nicht aus einem '
            'Formular.',
        builder: (items) => Column(
          children: [
            for (final b in items) ...[
              _BusinessCard(business: b),
              const SizedBox(height: AppSpacing.s3),
            ],
          ],
        ),
      ),
    );
  }
}

class _BusinessCard extends ConsumerWidget {
  const _BusinessCard({required this.business});
  final Map<String, dynamic> business;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final id = business['id']?.toString() ?? '';
    final ohneSevdesk = business['sevdesk_contact_id'] == null;

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  (business['name'] ?? 'Ohne Namen').toString(),
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              AdminStatusChip(
                label: (business['status'] ?? 'aktiv').toString(),
                tone: business['status'] == 'active'
                    ? AdminTone.positive
                    : AdminTone.neutral,
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s1),
          Text(
            [
              if ((business['legal_form'] ?? '').toString().isNotEmpty)
                business['legal_form'].toString(),
              if ((business['billing_city'] ?? '').toString().isNotEmpty)
                business['billing_city'].toString(),
              if ((business['billing_email'] ?? '').toString().isNotEmpty)
                business['billing_email'].toString(),
            ].join(' · '),
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          if (ohneSevdesk) ...[
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Ohne sevDesk-Kontaktnummer. Ein Rechnungslauf bricht damit ab, '
              'bevor er beginnt.',
              style: AppTypography.body(
                size: 12,
                color: AppColors.statusWarning,
              ),
            ),
          ],
          const SizedBox(height: AppSpacing.s3),
          _Members(businessId: id),
          _Invitations(businessId: id),
          _InvoiceRuns(businessId: id),
        ],
      ),
    );
  }
}

class _Members extends ConsumerWidget {
  const _Members({required this.businessId});
  final String businessId;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final members = ref.watch(businessMembersProvider(businessId));
    return members.maybeWhen(
      data: (items) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _SectionLabel(
            'Mitglieder',
            trailing: items.isEmpty ? null : '${items.length}',
          ),
          if (items.isEmpty)
            Text(
              'Noch niemand zugeordnet.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            )
          else
            for (final m in items)
              Padding(
                padding: const EdgeInsets.only(bottom: 2),
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        _name(m),
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textDefault,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    Text(
                      '${m['role'] ?? '?'} · ${m['status'] ?? '?'}',
                      style: AppTypography.body(
                        size: 11,
                        color: AppColors.textMuted,
                      ),
                    ),
                  ],
                ),
              ),
          const SizedBox(height: AppSpacing.s3),
        ],
      ),
      orElse: () => const SizedBox.shrink(),
    );
  }

  String _name(Map<String, dynamic> m) {
    final p = m['profiles'];
    if (p is Map) {
      final vor = (p['first_name'] ?? '').toString();
      final nach = (p['last_name'] ?? '').toString();
      final mail = (p['email'] ?? '').toString();
      final name = [vor, nach].where((s) => s.isNotEmpty).join(' ');
      if (name.isNotEmpty) return name;
      if (mail.isNotEmpty) return mail;
    }
    return m['profile_id']?.toString() ?? 'Unbekannt';
  }
}

class _Invitations extends ConsumerWidget {
  const _Invitations({required this.businessId});
  final String businessId;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final invitations = ref.watch(businessInvitationsProvider(businessId));
    return invitations.maybeWhen(
      data: (items) {
        final offen = items
            .where((i) => i['accepted_at'] == null && i['revoked_at'] == null)
            .toList();
        if (offen.isEmpty) return const SizedBox.shrink();
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const _SectionLabel('Offene Einladungen'),
            for (final i in offen)
              Padding(
                padding: const EdgeInsets.only(bottom: 2),
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        '${i['email']} · ${i['role']}',
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textDefault,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    TextButton(
                      onPressed: () =>
                          _revoke(context, ref, i['id'].toString()),
                      child: const Text('Zurückziehen'),
                    ),
                  ],
                ),
              ),
            const SizedBox(height: AppSpacing.s3),
          ],
        );
      },
      orElse: () => const SizedBox.shrink(),
    );
  }

  Future<void> _revoke(
    BuildContext context,
    WidgetRef ref,
    String invitationId,
  ) async {
    final ok = await ref.read(adminActionsProvider.notifier).revokeInvitation(
          invitationId: invitationId,
          businessId: businessId,
        );
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Einladung zurückgezogen.',
    );
  }
}

class _InvoiceRuns extends ConsumerWidget {
  const _InvoiceRuns({required this.businessId});
  final String businessId;

  static const _stati = <String, String>{
    'angefordert': 'Angefordert',
    'in_sevdesk': 'In sevDesk',
    'freigegeben': 'Freigegeben',
    'fehler': 'Fehler',
    'storniert': 'Storniert',
  };

  double _num(dynamic v) => v == null ? 0 : double.tryParse(v.toString()) ?? 0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final runs = ref.watch(invoiceRunsProvider(businessId));
    return runs.maybeWhen(
      data: (items) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const _SectionLabel('Rechnungsläufe'),
          if (items.isEmpty)
            Text(
              'Noch kein Rechnungslauf angefordert.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            )
          else
            for (final r in items.take(6))
              Padding(
                padding: const EdgeInsets.only(bottom: AppSpacing.s2),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            '${r['monat']}/${r['jahr']} · '
                            '${Formatters.euro(_num(r['brutto']))}',
                            style: AppTypography.body(
                              size: 12,
                              weight: FontWeight.w700,
                              color: AppColors.ink,
                            ),
                          ),
                          if ((r['fehlertext'] ?? '').toString().isNotEmpty)
                            Text(
                              r['fehlertext'].toString(),
                              style: AppTypography.body(
                                size: 11,
                                color: AppColors.statusCritical,
                              ),
                            ),
                        ],
                      ),
                    ),
                    const SizedBox(width: AppSpacing.s2),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        AdminStatusChip(
                          label: _stati[r['status']] ??
                              r['status']?.toString() ??
                              '?',
                          tone: switch (r['status']) {
                            'freigegeben' => AdminTone.positive,
                            'fehler' => AdminTone.critical,
                            'angefordert' => AdminTone.warning,
                            _ => AdminTone.neutral,
                          },
                        ),
                        if (r['status'] == 'in_sevdesk')
                          TextButton(
                            onPressed: () =>
                                _release(context, ref, r['id'].toString()),
                            child: const Text('Freigeben'),
                          ),
                      ],
                    ),
                  ],
                ),
              ),
        ],
      ),
      orElse: () => const SizedBox.shrink(),
    );
  }

  Future<void> _release(
    BuildContext context,
    WidgetRef ref,
    String runId,
  ) async {
    final bestaetigt = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Rechnung freigeben'),
        content: const Text(
          'Die Rechnung liegt als Entwurf in sevDesk. Nach der Freigabe wird '
          'sie dort versendet. Der Vorgang lässt sich nicht zurücknehmen.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: const Text('Freigeben'),
          ),
        ],
      ),
    );
    if (bestaetigt != true || !context.mounted) return;

    final ok = await ref.read(adminActionsProvider.notifier).releaseInvoice(
          runId: runId,
          businessId: businessId,
        );
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Rechnungslauf freigegeben.',
    );
  }
}

class _SectionLabel extends StatelessWidget {
  const _SectionLabel(this.text, {this.trailing});
  final String text;
  final String? trailing;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s1),
      child: Row(
        children: [
          Text(
            text,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          if (trailing != null) ...[
            const SizedBox(width: AppSpacing.s2),
            Text(
              trailing!,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
          ],
        ],
      ),
    );
  }
}
