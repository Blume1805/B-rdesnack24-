import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/admin_providers.dart';
import '../widgets/admin_shell.dart';

/// Anfragen aus Werbung, Sponsoring, Partnerschaft, Recruiting und Events.
///
/// Rein intern: Der beschriebene Werbekunde sieht diese Zeile nie. Der
/// Verlauf entsteht NICHT automatisch aus Statuswechseln — wer den Status
/// ändert, trägt den Grund selbst ein. Deshalb fragt die Oberfläche beim
/// Wechsel nach einer Notiz, statt sie stillschweigend zu erfinden.
class LeadsScreen extends ConsumerWidget {
  const LeadsScreen({super.key});

  static const _stufen = <String, String>{
    'new': 'Neu',
    'qualified': 'Qualifiziert',
    'contacted': 'Kontaktiert',
    'meeting': 'Termin',
    'offer': 'Angebot',
    'negotiation': 'Verhandlung',
    'won': 'Gewonnen',
    'lost': 'Verloren',
  };

  static const _arten = <String, String>{
    'advertising': 'Werbung',
    'ad_space': 'Werbefläche',
    'sponsoring': 'Sponsoring',
    'partnership': 'Partnerschaft',
    'recruiting': 'Recruiting',
    'event': 'Event',
    'business': 'Firmenkunde',
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final filter = ref.watch(leadFilterProvider);
    final leads = ref.watch(leadsProvider);

    return AdminScaffold(
      title: 'Anfragen',
      eyebrow: 'Vertrieb',
      headline: 'Eingegangene Anfragen',
      intro: 'Werbung, Sponsoring, Partnerschaften, Recruiting und Events. '
          'Diese Ansicht ist intern; Anfragende sehen ihren Eintrag nicht.',
      onRefresh: () async => ref.invalidate(leadsProvider),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                _FilterChip(
                  label: 'Alle',
                  selected: filter == null,
                  onTap: () =>
                      ref.read(leadFilterProvider.notifier).state = null,
                ),
                for (final e in _stufen.entries)
                  _FilterChip(
                    label: e.value,
                    selected: filter == e.key,
                    onTap: () =>
                        ref.read(leadFilterProvider.notifier).state = e.key,
                  ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s4),
          AdminAsyncList<Map<String, dynamic>>(
            value: leads,
            emptyTitle: filter == null
                ? 'Noch keine Anfragen'
                : 'Keine Anfrage in dieser Stufe',
            emptyBody: filter == null
                ? 'Sobald eine Anfrage erfasst wird, erscheint sie hier. '
                    'Anfragen werden derzeit intern angelegt; ein öffentliches '
                    'Formular gibt es noch nicht.'
                : 'Nehmen Sie den Filter heraus, um alle Anfragen zu sehen.',
            builder: (items) => Column(
              children: [
                for (final lead in items) ...[
                  _LeadCard(lead: lead, stufen: _stufen, arten: _arten),
                  const SizedBox(height: AppSpacing.s3),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _FilterChip extends StatelessWidget {
  const _FilterChip({
    required this.label,
    required this.selected,
    required this.onTap,
  });

  final String label;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: AppSpacing.s2),
      child: ChoiceChip(
        label: Text(label),
        selected: selected,
        onSelected: (_) => onTap(),
      ),
    );
  }
}

class _LeadCard extends ConsumerWidget {
  const _LeadCard({
    required this.lead,
    required this.stufen,
    required this.arten,
  });

  final Map<String, dynamic> lead;
  final Map<String, String> stufen;
  final Map<String, String> arten;

  AdminTone _tone(String? status) => switch (status) {
        'won' => AdminTone.positive,
        'lost' => AdminTone.critical,
        'new' => AdminTone.warning,
        _ => AdminTone.neutral,
      };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final status = lead['status']?.toString();
    final kind = lead['kind']?.toString();
    final id = lead['id']?.toString();

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  (lead['company_name'] ?? 'Ohne Firmenname').toString(),
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              AdminStatusChip(
                label: stufen[status] ?? status ?? 'unbekannt',
                tone: _tone(status),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s1),
          Text(
            [
              arten[kind] ?? kind ?? 'Anfrage',
              if ((lead['contact_name'] ?? '').toString().isNotEmpty)
                lead['contact_name'].toString(),
              if ((lead['source'] ?? '').toString().isNotEmpty)
                'über ${lead['source']}',
            ].join(' · '),
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          if ((lead['email'] ?? '').toString().isNotEmpty ||
              (lead['phone'] ?? '').toString().isNotEmpty) ...[
            const SizedBox(height: AppSpacing.s1),
            Text(
              [
                if ((lead['email'] ?? '').toString().isNotEmpty)
                  lead['email'].toString(),
                if ((lead['phone'] ?? '').toString().isNotEmpty)
                  lead['phone'].toString(),
              ].join(' · '),
              style: AppTypography.body(
                size: 12,
                color: AppColors.textDefault,
              ),
            ),
          ],
          if (id != null) ...[
            const SizedBox(height: AppSpacing.s3),
            Wrap(
              spacing: AppSpacing.s2,
              runSpacing: AppSpacing.s2,
              children: [
                OutlinedButton.icon(
                  onPressed: () => _changeStatus(context, ref, id),
                  icon: const Icon(Icons.flag_outlined, size: 18),
                  label: const Text('Stufe ändern'),
                ),
                OutlinedButton.icon(
                  onPressed: () => _addNote(context, ref, id),
                  icon: const Icon(Icons.note_add_outlined, size: 18),
                  label: const Text('Notiz'),
                ),
              ],
            ),
            _Activities(leadId: id),
          ],
        ],
      ),
    );
  }

  Future<void> _changeStatus(
    BuildContext context,
    WidgetRef ref,
    String id,
  ) async {
    final result = await showDialog<(String, String)>(
      context: context,
      builder: (context) => _StatusDialog(stufen: stufen),
    );
    if (result == null) return;
    final ok = await ref.read(adminActionsProvider.notifier).setLeadStatus(
          leadId: id,
          status: result.$1,
          notiz: result.$2.isEmpty ? null : result.$2,
        );
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Stufe geändert.',
    );
  }

  Future<void> _addNote(
    BuildContext context,
    WidgetRef ref,
    String id,
  ) async {
    final text = await showDialog<String>(
      context: context,
      builder: (context) => const _NoteDialog(),
    );
    if (text == null || text.isEmpty) return;
    final ok = await ref
        .read(adminActionsProvider.notifier)
        .addLeadActivity(leadId: id, text: text);
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Notiz gespeichert.',
    );
  }
}

class _Activities extends ConsumerWidget {
  const _Activities({required this.leadId});
  final String leadId;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final activities = ref.watch(leadActivitiesProvider(leadId));
    return activities.maybeWhen(
      data: (items) => items.isEmpty
          ? const SizedBox.shrink()
          : Padding(
              padding: const EdgeInsets.only(top: AppSpacing.s3),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Verlauf',
                    style: AppTypography.body(
                      size: 12,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                  const SizedBox(height: AppSpacing.s1),
                  for (final a in items.take(5))
                    Padding(
                      padding: const EdgeInsets.only(bottom: 2),
                      child: Text(
                        '· ${a['text']}',
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                ],
              ),
            ),
      orElse: () => const SizedBox.shrink(),
    );
  }
}

class _StatusDialog extends StatefulWidget {
  const _StatusDialog({required this.stufen});
  final Map<String, String> stufen;

  @override
  State<_StatusDialog> createState() => _StatusDialogState();
}

class _StatusDialogState extends State<_StatusDialog> {
  String? _status;
  final _notiz = TextEditingController();

  @override
  void dispose() {
    _notiz.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Stufe ändern'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Bewusst ohne `value`/`initialValue`: Die beiden Parameter heissen
          // je nach Flutter-Fassung anders, und pubspec laesst ab 3.24 zu.
          // Das FormField fuehrt seinen Zustand selbst; `_status` dient nur
          // dazu, den Knopf zu sperren, solange nichts gewaehlt ist.
          DropdownButtonFormField<String>(
            decoration: const InputDecoration(labelText: 'Neue Stufe'),
            items: [
              for (final e in widget.stufen.entries)
                DropdownMenuItem(value: e.key, child: Text(e.value)),
            ],
            onChanged: (v) => setState(() => _status = v),
          ),
          const SizedBox(height: AppSpacing.s3),
          TextField(
            controller: _notiz,
            decoration: const InputDecoration(
              labelText: 'Grund (optional)',
              helperText: 'Ein Statuswechsel erzeugt von allein keinen '
                  'Verlaufseintrag.',
              helperMaxLines: 3,
            ),
            maxLines: 2,
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: _status == null
              ? null
              : () => Navigator.of(context).pop((_status!, _notiz.text.trim())),
          child: const Text('Übernehmen'),
        ),
      ],
    );
  }
}

class _NoteDialog extends StatefulWidget {
  const _NoteDialog();

  @override
  State<_NoteDialog> createState() => _NoteDialogState();
}

class _NoteDialogState extends State<_NoteDialog> {
  final _controller = TextEditingController();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Notiz zum Verlauf'),
      content: TextField(
        controller: _controller,
        autofocus: true,
        maxLines: 3,
        decoration: const InputDecoration(
          labelText: 'Was ist passiert?',
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: () => Navigator.of(context).pop(_controller.text.trim()),
          child: const Text('Speichern'),
        ),
      ],
    );
  }
}
