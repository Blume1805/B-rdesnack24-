import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/admin_providers.dart';
import '../widgets/admin_shell.dart';

/// Werbekampagnen und ihre Werbemittel.
///
/// Kein Motiv wird ohne Freigabe aktiv — dieselbe Regel wie bei den
/// Flächenverträgen. Die Prüfung ist deshalb hier die wichtigste Handlung.
class CampaignsScreen extends ConsumerWidget {
  const CampaignsScreen({super.key});

  static const stati = <String, String>{
    'draft': 'Entwurf',
    'pending_review': 'Zur Prüfung',
    'approved': 'Freigegeben',
    'active': 'Aktiv',
    'paused': 'Pausiert',
    'completed': 'Abgeschlossen',
    'cancelled': 'Storniert',
  };

  static const welten = <String, String>{
    'analog': 'Analog',
    'digital': 'Digital',
    'komplett': 'Komplett',
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final campaigns = ref.watch(campaignsProvider);

    return AdminScaffold(
      title: 'Kampagnen',
      eyebrow: 'Werbenetzwerk',
      headline: 'Kampagnen und Werbemittel',
      intro: 'Ein Werbeauftrag bündelt Flächenverträge und Coupon-Sponsoring. '
          'Werbemittel werden hier geprüft; ohne Freigabe wird keines aktiv.',
      onRefresh: () async => ref.invalidate(campaignsProvider),
      child: AdminAsyncList<Map<String, dynamic>>(
        value: campaigns,
        emptyTitle: 'Noch keine Kampagne',
        emptyBody: 'Sobald ein Werbeauftrag angelegt ist, erscheint er hier '
            'mit seinen Werbemitteln und seinem Bericht.',
        builder: (items) => Column(
          children: [
            for (final c in items) ...[
              _CampaignCard(campaign: c),
              const SizedBox(height: AppSpacing.s3),
            ],
          ],
        ),
      ),
    );
  }
}

class _CampaignCard extends ConsumerWidget {
  const _CampaignCard({required this.campaign});
  final Map<String, dynamic> campaign;

  double _num(dynamic v) => v == null ? 0 : double.tryParse(v.toString()) ?? 0;

  String _firma() {
    final b = campaign['businesses'];
    if (b is Map && (b['name'] ?? '').toString().isNotEmpty) {
      return b['name'].toString();
    }
    return 'Unbekannter Werbekunde';
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final id = campaign['id']?.toString() ?? '';
    final status = campaign['status']?.toString();

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  (campaign['name'] ?? 'Ohne Namen').toString(),
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              AdminStatusChip(
                label: CampaignsScreen.stati[status] ?? status ?? '?',
                tone: switch (status) {
                  'active' || 'approved' => AdminTone.positive,
                  'pending_review' => AdminTone.warning,
                  'cancelled' => AdminTone.critical,
                  _ => AdminTone.neutral,
                },
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s1),
          Text(
            [
              _firma(),
              CampaignsScreen.welten[campaign['welt']] ??
                  campaign['welt']?.toString() ??
                  '',
              '${campaign['von'] ?? '?'} bis ${campaign['bis'] ?? '?'}',
            ].where((s) => s.isNotEmpty).join(' · '),
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          if (campaign['budget_gesamt'] != null)
            Text(
              'Budget ${Formatters.euro(_num(campaign['budget_gesamt']))}',
              style: AppTypography.body(
                size: 12,
                color: AppColors.textDefault,
              ),
            ),
          const SizedBox(height: AppSpacing.s3),
          _Creatives(campaignId: id),
          const SizedBox(height: AppSpacing.s2),
          Wrap(
            spacing: AppSpacing.s2,
            runSpacing: AppSpacing.s2,
            children: [
              OutlinedButton.icon(
                onPressed: () => _changeStatus(context, ref, id),
                icon: const Icon(Icons.flag_outlined, size: 18),
                label: const Text('Status'),
              ),
              OutlinedButton.icon(
                onPressed: () => _showReport(context, ref, id),
                icon: const Icon(Icons.insights_outlined, size: 18),
                label: const Text('Bericht'),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Future<void> _changeStatus(
    BuildContext context,
    WidgetRef ref,
    String id,
  ) async {
    final status = await showDialog<String>(
      context: context,
      builder: (context) => SimpleDialog(
        title: const Text('Kampagnenstatus'),
        children: [
          for (final e in CampaignsScreen.stati.entries)
            SimpleDialogOption(
              onPressed: () => Navigator.of(context).pop(e.key),
              child: Text(e.value),
            ),
        ],
      ),
    );
    if (status == null) return;
    final ok = await ref
        .read(adminActionsProvider.notifier)
        .setCampaignStatus(campaignId: id, status: status);
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Status geändert.',
    );
  }

  void _showReport(BuildContext context, WidgetRef ref, String id) {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (context) => _ReportSheet(campaignId: id),
    );
  }
}

class _Creatives extends ConsumerWidget {
  const _Creatives({required this.campaignId});
  final String campaignId;

  static const _arten = <String, String>{
    'motiv_flaeche': 'Motiv Fläche',
    'aushang': 'Aushang',
    'coupon_logo': 'Coupon-Logo',
    'social_post': 'Social Post',
    'news_beitrag': 'News-Beitrag',
    'profil_logo': 'Profillogo',
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final creatives = ref.watch(creativesProvider(campaignId));
    return creatives.maybeWhen(
      data: (items) {
        if (items.isEmpty) {
          return Text(
            'Noch kein Werbemittel eingereicht.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          );
        }
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (final c in items)
              Padding(
                padding: const EdgeInsets.only(bottom: AppSpacing.s2),
                child: Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            _arten[c['kind']] ?? c['kind']?.toString() ?? '?',
                            style: AppTypography.body(
                              size: 12,
                              weight: FontWeight.w700,
                              color: AppColors.ink,
                            ),
                          ),
                          if ((c['review_notiz'] ?? '').toString().isNotEmpty)
                            Text(
                              c['review_notiz'].toString(),
                              style: AppTypography.body(
                                size: 11,
                                color: AppColors.textMuted,
                              ),
                            ),
                        ],
                      ),
                    ),
                    AdminStatusChip(
                      label: c['status']?.toString() ?? '?',
                      tone: switch (c['status']) {
                        'approved' || 'active' => AdminTone.positive,
                        'pending_review' => AdminTone.warning,
                        'rejected' => AdminTone.critical,
                        _ => AdminTone.neutral,
                      },
                    ),
                    if (c['status'] == 'pending_review')
                      IconButton(
                        tooltip: 'Prüfen',
                        icon: const Icon(Icons.rule, size: 20),
                        onPressed: () =>
                            _review(context, ref, c['id'].toString()),
                      ),
                  ],
                ),
              ),
          ],
        );
      },
      orElse: () => const SizedBox.shrink(),
    );
  }

  Future<void> _review(
    BuildContext context,
    WidgetRef ref,
    String creativeId,
  ) async {
    final result = await showDialog<(String, String)>(
      context: context,
      builder: (context) => const _ReviewDialog(),
    );
    if (result == null) return;
    final ok = await ref.read(adminActionsProvider.notifier).reviewCreative(
          creativeId: creativeId,
          campaignId: campaignId,
          status: result.$1,
          notiz: result.$2.isEmpty ? null : result.$2,
        );
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Werbemittel geprüft.',
    );
  }
}

class _ReviewDialog extends StatefulWidget {
  const _ReviewDialog();

  @override
  State<_ReviewDialog> createState() => _ReviewDialogState();
}

class _ReviewDialogState extends State<_ReviewDialog> {
  String _status = 'approved';
  final _notiz = TextEditingController();

  @override
  void dispose() {
    _notiz.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Werbemittel prüfen'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Bewusst kein RadioListTile: dessen `groupValue`/`onChanged` sind
          // seit Flutter 3.32 abgelöst, der Ersatz `RadioGroup` existiert
          // davor aber nicht — und pubspec lässt ab 3.24 zu. Eine schlichte
          // Auswahlliste funktioniert in beiden Fassungen.
          for (final e in const {
            'approved': 'Freigeben',
            'revision_required': 'Änderung verlangen',
            'rejected': 'Ablehnen',
          }.entries)
            ListTile(
              contentPadding: EdgeInsets.zero,
              leading: Icon(
                _status == e.key
                    ? Icons.radio_button_checked
                    : Icons.radio_button_unchecked,
                color: _status == e.key
                    ? AppColors.brandText
                    : AppColors.textMuted,
              ),
              title: Text(e.value),
              onTap: () => setState(() => _status = e.key),
            ),
          TextField(
            controller: _notiz,
            maxLines: 2,
            decoration: const InputDecoration(
              labelText: 'Begründung',
              helperText: 'Bei Ablehnung oder Änderungswunsch verbindlich.',
              helperMaxLines: 2,
            ),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: () =>
              Navigator.of(context).pop((_status, _notiz.text.trim())),
          child: const Text('Übernehmen'),
        ),
      ],
    );
  }
}

/// Kampagnenbericht mit der Unterdrückung kleiner Fallzahlen.
///
/// Liegt ein Wert unter der Mindestzahl, liefert die Datenbank ihn NICHT.
/// Dann steht hier „weniger als 30" — niemals eine Zahl, niemals „0" und
/// niemals ein Schätzwert.
class _ReportSheet extends ConsumerWidget {
  const _ReportSheet({required this.campaignId});
  final String campaignId;

  String _wert(dynamic value, bool unterdrueckt, int mindestzahl) {
    if (unterdrueckt) return 'weniger als $mindestzahl';
    if (value == null) return 'keine Angabe';
    return value.toString();
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final report = ref.watch(campaignReportProvider(campaignId));

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(AppSpacing.s5),
        child: report.when(
          loading: () => const Padding(
            padding: EdgeInsets.all(AppSpacing.s8),
            child: Center(
              child: CircularProgressIndicator(color: AppColors.brand),
            ),
          ),
          error: (e, _) => AdminErrorCard(error: e),
          data: (data) {
            final mindestzahl =
                int.tryParse('${data['mindestzahl'] ?? 30}') ?? 30;
            final anlaesse = data['je_anlass'] is List
                ? List<Map<String, dynamic>>.from(
                    (data['je_anlass'] as List)
                        .whereType<Map<dynamic, dynamic>>()
                        .map((e) => Map<String, dynamic>.from(e)),
                  )
                : <Map<String, dynamic>>[];

            return Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Kampagnenbericht',
                  style: AppTypography.display(
                    size: 20,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Werte unter $mindestzahl werden aus Datenschutzgründen '
                  'nicht ausgewiesen. Das ist kein Fehler.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.textMuted,
                  ),
                ),
                const SizedBox(height: AppSpacing.s4),
                AdminValueRow(
                  label: 'Aufrufe der Zielseite',
                  value: _wert(
                    data['aufrufe'],
                    data['aufrufe_unter_mindestzahl'] == true,
                    mindestzahl,
                  ),
                  strong: true,
                ),
                Text(
                  'Technisch gezählter Rohwert, nicht bereinigt.',
                  style: AppTypography.body(
                    size: 11,
                    color: AppColors.textMuted,
                  ),
                ),
                const SizedBox(height: AppSpacing.s4),
                if (anlaesse.isEmpty)
                  Text(
                    'Für diese Kampagne liegen noch keine Coupon-Anlässe vor.',
                    style: AppTypography.body(
                      size: 12,
                      color: AppColors.textMuted,
                    ),
                  )
                else
                  for (final a in anlaesse) ...[
                    Text(
                      a['anlass']?.toString() ?? 'Anlass',
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    ),
                    AdminValueRow(
                      label: 'Ausgegeben',
                      value: _wert(
                        a['ausgabe'],
                        a['ausgabe_unter_mindestzahl'] == true,
                        mindestzahl,
                      ),
                    ),
                    AdminValueRow(
                      label: 'Eingelöst',
                      value: _wert(
                        a['einloesung'],
                        a['einloesung_unter_mindestzahl'] == true,
                        mindestzahl,
                      ),
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
