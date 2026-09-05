import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/admin_providers.dart';
import '../widgets/admin_shell.dart';

/// E-Mail: Vorlagen, Versandprotokoll und Warteschlange.
///
/// In der Datenbank liegt nur der INHALT einer Vorlage — Betreff,
/// Fließtext, Vorschauzeile. Rahmen, Kopf und Fuß bleiben im Code, damit
/// die Pflichtangaben im Fuß (Impressum, Datenschutz, Widerruf) an genau
/// einer Stelle gepflegt werden. Lägen sie als Kopie in jeder Vorlage,
/// müsste bei einem Umzug jede einzeln nachgezogen werden, und eine würde
/// vergessen.
///
/// Ist eine Vorlage leer oder abgeschaltet, gilt unverändert die Fassung
/// aus dem Code. Ein Betrieb soll eine Betreffzeile ändern können, ohne
/// dass jemand ausrollt; solange er das nicht tut, ändert sich nichts.
class EmailAdminScreen extends ConsumerWidget {
  const EmailAdminScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final templates = ref.watch(emailTemplatesProvider);
    final stats = ref.watch(emailLogStatsProvider);
    final outbox = ref.watch(emailOutboxStatsProvider);

    return AdminScaffold(
      title: 'E-Mail',
      eyebrow: 'Kommunikation',
      headline: 'Vorlagen und Versand',
      intro: 'Jede versendete und empfangene E-Mail wird protokolliert. '
          'Bei Aktionsmails wird der Körper bewusst nicht mitgeschrieben, '
          'weil er Einmalcodes trägt.',
      onRefresh: () async {
        ref
          ..invalidate(emailTemplatesProvider)
          ..invalidate(emailLogStatsProvider)
          ..invalidate(emailOutboxStatsProvider);
      },
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          stats.maybeWhen(
            data: (s) => AppCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  AdminValueRow(
                    label: 'Protokollierte Mails',
                    value: '${s['gesamt'] ?? 0}',
                    strong: true,
                  ),
                  const SizedBox(height: AppSpacing.s2),
                  AdminValueRow(
                    label: 'ausgehend',
                    value: '${s['ausgehend'] ?? 0}',
                  ),
                  AdminValueRow(
                    label: 'eingehend',
                    value: '${s['eingehend'] ?? 0}',
                  ),
                  AdminValueRow(
                    label: 'gescheitert',
                    value: '${s['gescheitert'] ?? 0}',
                  ),
                  AdminValueRow(
                    label: 'simuliert (kein Versand)',
                    value: '${s['simuliert'] ?? 0}',
                  ),
                ],
              ),
            ),
            orElse: () => const SizedBox.shrink(),
          ),
          outbox.maybeWhen(
            data: (rows) => rows.isEmpty
                ? const SizedBox.shrink()
                : Padding(
                    padding: const EdgeInsets.only(top: AppSpacing.s3),
                    child: AppCard(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Warteschlange',
                            style: AppTypography.body(
                              size: 13,
                              weight: FontWeight.w800,
                              color: AppColors.ink,
                            ),
                          ),
                          const SizedBox(height: AppSpacing.s2),
                          for (final r in rows)
                            AdminValueRow(
                              label: r['status']?.toString() ?? '?',
                              value: '${r['anzahl'] ?? 0}',
                            ),
                        ],
                      ),
                    ),
                  ),
            orElse: () => const SizedBox.shrink(),
          ),
          const SizedBox(height: AppSpacing.s4),
          Text(
            'Vorlagen',
            style: AppTypography.display(
              size: 16,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          AdminAsyncList<Map<String, dynamic>>(
            value: templates,
            emptyTitle: 'Keine Vorlagen hinterlegt',
            emptyBody: 'Solange hier nichts steht, gilt für jede Mail die '
                'Fassung aus dem Code. Das ist ein gültiger Zustand.',
            builder: (items) => Column(
              children: [
                for (final t in items) ...[
                  _TemplateCard(template: t),
                  const SizedBox(height: AppSpacing.s2),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _TemplateCard extends ConsumerWidget {
  const _TemplateCard({required this.template});
  final Map<String, dynamic> template;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final betreff = (template['subject'] ?? '').toString();
    final inhalt = (template['body_html'] ?? '').toString();
    final aktiv = template['is_active'] == true;
    // Nur eine aktive Vorlage MIT Betreff UND Inhalt ersetzt den Code.
    final greift =
        aktiv && betreff.trim().isNotEmpty && inhalt.trim().isNotEmpty;

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  template['key']?.toString() ?? '?',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              AdminStatusChip(
                label: greift ? 'aus der Datenbank' : 'Fassung aus dem Code',
                tone: greift ? AdminTone.positive : AdminTone.neutral,
              ),
            ],
          ),
          if (betreff.isNotEmpty) ...[
            const SizedBox(height: AppSpacing.s1),
            Text(
              betreff,
              style: AppTypography.body(
                size: 12,
                color: AppColors.textDefault,
              ),
            ),
          ],
          const SizedBox(height: AppSpacing.s2),
          Align(
            alignment: Alignment.centerLeft,
            child: OutlinedButton.icon(
              onPressed: () => _edit(context, ref),
              icon: const Icon(Icons.edit_outlined, size: 18),
              label: const Text('Bearbeiten'),
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _edit(BuildContext context, WidgetRef ref) async {
    final result = await showModalBottomSheet<Map<String, String?>>(
      context: context,
      isScrollControlled: true,
      builder: (context) => _TemplateEditor(template: template),
    );
    if (result == null) return;

    final ok = await ref.read(adminActionsProvider.notifier).saveEmailTemplate(
          key: template['key'].toString(),
          subject: result['subject'],
          bodyHtml: result['body_html'],
          bodyText: result['body_text'],
          preheader: result['preheader'],
          isActive: result['is_active'] == 'true',
        );
    if (!context.mounted) return;
    showAdminActionResult(
      context,
      ok ? const AsyncData<void>(null) : ref.read(adminActionsProvider),
      erfolg: 'Vorlage gespeichert.',
    );
  }
}

class _TemplateEditor extends StatefulWidget {
  const _TemplateEditor({required this.template});
  final Map<String, dynamic> template;

  @override
  State<_TemplateEditor> createState() => _TemplateEditorState();
}

class _TemplateEditorState extends State<_TemplateEditor> {
  late final TextEditingController _subject;
  late final TextEditingController _preheader;
  late final TextEditingController _html;
  late final TextEditingController _text;
  late bool _aktiv;

  @override
  void initState() {
    super.initState();
    _subject =
        TextEditingController(text: '${widget.template['subject'] ?? ''}');
    _preheader =
        TextEditingController(text: '${widget.template['preheader'] ?? ''}');
    _html =
        TextEditingController(text: '${widget.template['body_html'] ?? ''}');
    _text =
        TextEditingController(text: '${widget.template['body_text'] ?? ''}');
    _aktiv = widget.template['is_active'] == true;
  }

  @override
  void dispose() {
    _subject.dispose();
    _preheader.dispose();
    _html.dispose();
    _text.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: AppSpacing.s5,
        right: AppSpacing.s5,
        top: AppSpacing.s5,
        bottom: MediaQuery.of(context).viewInsets.bottom + AppSpacing.s5,
      ),
      child: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.template['key']?.toString() ?? 'Vorlage',
              style: AppTypography.display(
                size: 18,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Nur der Inhalt. Kopf und Fuß mit den Pflichtangaben kommen '
              'weiter aus dem Code. Platzhalter der Form {{name}} bleiben '
              'stehen und werden beim Versand ersetzt.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            TextField(
              controller: _subject,
              decoration: const InputDecoration(labelText: 'Betreff'),
            ),
            const SizedBox(height: AppSpacing.s3),
            TextField(
              controller: _preheader,
              decoration: const InputDecoration(
                labelText: 'Vorschauzeile',
                helperText: 'Steht im Postfach neben dem Betreff.',
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            TextField(
              controller: _html,
              maxLines: 6,
              decoration: const InputDecoration(labelText: 'Inhalt (HTML)'),
            ),
            const SizedBox(height: AppSpacing.s3),
            TextField(
              controller: _text,
              maxLines: 4,
              decoration: const InputDecoration(labelText: 'Textfassung'),
            ),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              value: _aktiv,
              title: const Text('Vorlage verwenden'),
              subtitle: const Text(
                'Abgeschaltet gilt die Fassung aus dem Code.',
              ),
              onChanged: (v) => setState(() => _aktiv = v),
            ),
            const SizedBox(height: AppSpacing.s3),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton(
                  onPressed: () => Navigator.of(context).pop(),
                  child: const Text('Abbrechen'),
                ),
                const SizedBox(width: AppSpacing.s2),
                FilledButton(
                  onPressed: () => Navigator.of(context).pop({
                    'subject': _subject.text,
                    'preheader': _preheader.text,
                    'body_html': _html.text,
                    'body_text': _text.text,
                    'is_active': _aktiv.toString(),
                  }),
                  child: const Text('Speichern'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
