import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/admin_providers.dart';
import '../widgets/admin_shell.dart';

/// Werbeflächen an den Automaten: Belegung, Verträge, Motivfreigabe.
///
/// Quelle ist `advertising_overview(p_stichtag)`. Die Funktion liefert die
/// Kennzahlen und je Automat dessen Flächen samt laufendem Vertrag — es
/// wird hier nichts nachgerechnet.
///
/// Die Freigabe eines Motivs ist bewusst eine eigene Handlung: Ohne sie geht
/// kein Motiv an den Automaten, und die Datenbank hält den Zeitpunkt fest.
class AdvertisingScreen extends ConsumerWidget {
  const AdvertisingScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final overview = ref.watch(advertisingOverviewProvider);

    return AdminScaffold(
      title: 'Werbeflächen',
      eyebrow: 'Werbenetzwerk',
      headline: 'Flächen und Verträge',
      intro: 'Belegung aller Werbeflächen zum heutigen Stichtag. Freie '
          'Flächen sind Umsatz, der noch nicht abgerufen wird.',
      onRefresh: () async => ref.invalidate(advertisingOverviewProvider),
      child: overview.when(
        loading: () => const Padding(
          padding: EdgeInsets.symmetric(vertical: AppSpacing.s10),
          child: Center(
            child: CircularProgressIndicator(color: AppColors.brand),
          ),
        ),
        error: (e, _) => AdminErrorCard(error: e),
        data: (data) => _Overview(data: data),
      ),
    );
  }
}

class _Overview extends ConsumerWidget {
  const _Overview({required this.data});
  final Map<String, dynamic> data;

  double _num(dynamic v) => v == null ? 0 : double.tryParse(v.toString()) ?? 0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final k = data['kennzahlen'] is Map
        ? Map<String, dynamic>.from(data['kennzahlen'] as Map)
        : <String, dynamic>{};
    final automaten = data['je_automat'] is List
        ? List<Map<String, dynamic>>.from(
            (data['je_automat'] as List).whereType<Map<dynamic, dynamic>>().map(
                  (e) => Map<String, dynamic>.from(e),
                ),
          )
        : <Map<String, dynamic>>[];

    if (automaten.isEmpty) {
      return const AdminEmptyCard(
        title: 'Noch keine Werbeflächen erfasst',
        body: 'Das Werbenetzwerk ist vollständig angelegt, aber noch nicht in '
            'Betrieb. Sobald an einem Automaten eine Fläche eingetragen ist, '
            'erscheint sie hier mit ihrem Vertragszustand.',
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        AppCard(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              AdminValueRow(
                label: 'Werbeumsatz im Monat',
                value: Formatters.euro(_num(k['werbeumsatz_monat'])),
                strong: true,
              ),
              const SizedBox(height: AppSpacing.s2),
              AdminValueRow(
                label: 'Flächen gesamt',
                value: '${k['flaechen'] ?? 0}',
              ),
              AdminValueRow(
                label: 'davon vermietet',
                value: '${k['vermietet'] ?? 0}',
              ),
              AdminValueRow(label: 'davon frei', value: '${k['frei'] ?? 0}'),
              AdminValueRow(
                label: 'Listenwert der freien Flächen',
                value: Formatters.euro(_num(k['listenwert_frei'])),
              ),
            ],
          ),
        ),
        const SizedBox(height: AppSpacing.s4),
        for (final automat in automaten) ...[
          _MachineBlock(automat: automat),
          const SizedBox(height: AppSpacing.s3),
        ],
      ],
    );
  }
}

class _MachineBlock extends StatelessWidget {
  const _MachineBlock({required this.automat});
  final Map<String, dynamic> automat;

  @override
  Widget build(BuildContext context) {
    final flaechen = automat['flaechen'] is List
        ? List<Map<String, dynamic>>.from(
            (automat['flaechen'] as List)
                .whereType<Map<dynamic, dynamic>>()
                .map(
                  (e) => Map<String, dynamic>.from(e),
                ),
          )
        : <Map<String, dynamic>>[];

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            (automat['automat'] ?? 'Automat').toString(),
            style: AppTypography.body(
              size: 14,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          if ((automat['standort'] ?? '').toString().isNotEmpty)
            Text(
              automat['standort'].toString(),
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
          const SizedBox(height: AppSpacing.s3),
          if (flaechen.isEmpty)
            Text(
              'Keine Flächen an diesem Automaten.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            )
          else
            for (final f in flaechen) _SpaceRow(flaeche: f),
        ],
      ),
    );
  }
}

class _SpaceRow extends ConsumerWidget {
  const _SpaceRow({required this.flaeche});
  final Map<String, dynamic> flaeche;

  double _num(dynamic v) => v == null ? 0 : double.tryParse(v.toString()) ?? 0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final vertrag = flaeche['vertrag'] is Map
        ? Map<String, dynamic>.from(flaeche['vertrag'] as Map)
        : null;
    final vermietet = vertrag != null;
    final gesperrt = flaeche['betriebszustand'] == 'gesperrt';
    final motivOffen = vermietet && vertrag['motiv_freigegeben_am'] == null;

    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  (flaeche['bezeichnung'] ?? flaeche['position'] ?? 'Fläche')
                      .toString(),
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              AdminStatusChip(
                label: gesperrt
                    ? 'gesperrt'
                    : vermietet
                        ? 'vermietet'
                        : 'frei',
                tone: gesperrt
                    ? AdminTone.critical
                    : vermietet
                        ? AdminTone.positive
                        : AdminTone.warning,
              ),
            ],
          ),
          Text(
            [
              if ((flaeche['groesse_mm'] ?? '').toString().isNotEmpty)
                flaeche['groesse_mm'].toString(),
              'Liste ${Formatters.euro(_num(flaeche['listenpreis_monat']))} / Monat',
            ].join(' · '),
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          if (vermietet) ...[
            const SizedBox(height: AppSpacing.s1),
            Text(
              '${vertrag['mieter'] ?? 'Unbekannt'} · '
              '${vertrag['von'] ?? '?'} bis ${vertrag['bis'] ?? 'unbefristet'} · '
              '${Formatters.euro(_num(vertrag['preis_monat']))} / Monat',
              style: AppTypography.body(
                size: 12,
                color: AppColors.textDefault,
              ),
            ),
            if (motivOffen) ...[
              const SizedBox(height: AppSpacing.s2),
              Text(
                'Motiv noch nicht freigegeben. Ohne Freigabe geht es nicht an '
                'den Automaten.',
                style: AppTypography.body(
                  size: 12,
                  color: AppColors.statusWarning,
                ),
              ),
              const SizedBox(height: AppSpacing.s2),
              OutlinedButton.icon(
                onPressed: () => _approve(context, ref, vertrag),
                icon: const Icon(Icons.verified_outlined, size: 18),
                label: const Text('Motiv freigeben'),
              ),
            ] else
              Text(
                'Motiv freigegeben am ${vertrag['motiv_freigegeben_am']}',
                style: AppTypography.body(
                  size: 12,
                  color: AppColors.statusPositive,
                ),
              ),
          ],
        ],
      ),
    );
  }

  Future<void> _approve(
    BuildContext context,
    WidgetRef ref,
    Map<String, dynamic> vertrag,
  ) async {
    final id = vertrag['id']?.toString();
    if (id == null) return;
    final wer = await showDialog<String>(
      context: context,
      builder: (context) => const _WerDialog(),
    );
    if (wer == null || wer.isEmpty) return;

    final ok = await ref
        .read(adminActionsProvider.notifier)
        .approveMotif(contractId: id, wer: wer);
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Motiv freigegeben.',
    );
  }
}

/// Die Freigabe hält fest, WER freigegeben hat. Das ist kein Formalismus:
/// Bei einer Beanstandung des Werbekunden ist genau das die Frage.
class _WerDialog extends StatefulWidget {
  const _WerDialog();

  @override
  State<_WerDialog> createState() => _WerDialogState();
}

class _WerDialogState extends State<_WerDialog> {
  final _controller = TextEditingController();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Motiv freigeben'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Wer gibt frei? Der Name wird mit dem Zeitpunkt festgehalten.',
            style: AppTypography.body(size: 13, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          TextField(
            controller: _controller,
            autofocus: true,
            decoration: const InputDecoration(labelText: 'Name'),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: () => Navigator.of(context).pop(_controller.text.trim()),
          child: const Text('Freigeben'),
        ),
      ],
    );
  }
}
