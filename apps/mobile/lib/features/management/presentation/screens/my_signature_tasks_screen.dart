import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:signature/signature.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// „Zu signieren"-Übersicht für Mitarbeiter: Belehrungen und andere
/// Dokumente, für die sie eine Unterschrift leisten müssen.
final _mySignatureTasksProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>((ref) async {
  final rows =
      await ref.read(supabaseClientProvider).rpc('list_my_signature_tasks');
  return (rows as List).cast<Map<String, dynamic>>();
});

class MySignatureTasksScreen extends ConsumerWidget {
  const MySignatureTasksScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final tasks = ref.watch(_mySignatureTasksProvider);
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Zu signieren')),
      body: tasks.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Padding(
          padding: const EdgeInsets.all(AppSpacing.s5),
          child: Text('$e'),
        ),
        data: (list) => RefreshIndicator(
          color: AppColors.brand,
          onRefresh: () async => ref.invalidate(_mySignatureTasksProvider),
          child: list.isEmpty
              ? ListView(
                  children: const [
                    SizedBox(height: 120),
                    Center(
                      child: Padding(
                        padding: EdgeInsets.all(AppSpacing.s5),
                        child: Text('Aktuell nichts zu unterschreiben.'),
                      ),
                    ),
                  ],
                )
              : ListView(
                  padding: const EdgeInsets.all(AppSpacing.s4),
                  children: [
                    for (final t in list) _TaskCard(row: t),
                  ],
                ),
        ),
      ),
    );
  }
}

class _TaskCard extends ConsumerWidget {
  const _TaskCard({required this.row});
  final Map<String, dynamic> row;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final title = row['document_title']?.toString() ?? '';
    final category = row['document_category']?.toString();
    final status = row['status']?.toString() ?? 'pending';
    final invited = DateTime.tryParse(row['invited_at']?.toString() ?? '');
    final signed = DateTime.tryParse(row['signed_at']?.toString() ?? '');
    final version = row['document_version'];
    final filePath = row['latest_file_path']?.toString();
    final done = status == 'signed';
    final stripe = done ? AppColors.statusPositive : AppColors.brand;

    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: AppCard(
        topStripeColor: stripe,
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(
                    title,
                    style: AppTypography.body(
                      size: 15,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                ),
                StatusBadge(
                  label: done ? 'signiert' : 'offen',
                  tone: done ? StatusTone.positive : StatusTone.warning,
                ),
              ],
            ),
            const SizedBox(height: 4),
            Text(
              '${category ?? '—'} · v$version'
              '${invited == null ? '' : ' · eingeladen ${Formatters.date(invited)}'}'
              '${signed == null ? '' : ' · signiert ${Formatters.date(signed)}'}',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                if (filePath != null && filePath.isNotEmpty)
                  OutlinedButton.icon(
                    onPressed: () => _openDoc(context, ref, filePath),
                    icon: const Icon(Icons.visibility, size: 18),
                    label: const Text('Dokument lesen'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: AppColors.ink,
                      side: const BorderSide(color: AppColors.ink),
                    ),
                  ),
                const Spacer(),
                if (!done)
                  FilledButton.icon(
                    onPressed: () => _sign(context, ref),
                    icon: const Icon(Icons.draw, size: 18),
                    label: const Text('Signieren'),
                    style: FilledButton.styleFrom(
                      backgroundColor: AppColors.brand,
                      foregroundColor: AppColors.ink,
                    ),
                  )
                else
                  FilledButton.icon(
                    onPressed: () => _openSigned(context, ref),
                    icon: const Icon(Icons.picture_as_pdf, size: 18),
                    label: const Text('Nachweis öffnen'),
                    style: FilledButton.styleFrom(
                      backgroundColor: AppColors.statusPositive,
                      foregroundColor: Colors.white,
                    ),
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _openDoc(
    BuildContext context,
    WidgetRef ref,
    String filePath,
  ) async {
    final client = ref.read(supabaseClientProvider);
    try {
      final url = await client.storage
          .from('documents')
          .createSignedUrl(filePath, 3600 * 24);
      await launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
        webOnlyWindowName: '_blank',
      );
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    }
  }

  Future<void> _openSigned(BuildContext context, WidgetRef ref) async {
    // Nachweis liegt unter signed-documents/employee/<task-id>.pdf
    final client = ref.read(supabaseClientProvider);
    try {
      final url = await client.storage
          .from('signed-documents')
          .createSignedUrl('employee/${row['id']}.pdf', 3600 * 24);
      await launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
        webOnlyWindowName: '_blank',
      );
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    }
  }

  Future<void> _sign(BuildContext context, WidgetRef ref) async {
    final ok = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (_) => _SignatureSheet(taskId: row['id']?.toString() ?? ''),
    );
    if (ok == true) {
      ref.invalidate(_mySignatureTasksProvider);
    }
  }
}

class _SignatureSheet extends ConsumerStatefulWidget {
  const _SignatureSheet({required this.taskId});
  final String taskId;
  @override
  ConsumerState<_SignatureSheet> createState() => _SignatureSheetState();
}

class _SignatureSheetState extends ConsumerState<_SignatureSheet> {
  late final SignatureController _controller;
  bool _busy = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _controller = SignatureController(
      penStrokeWidth: 3,
      penColor: AppColors.ink,
      exportBackgroundColor: const Color(0x00000000),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (_controller.isEmpty) {
      setState(() => _error = 'Bitte zuerst unterschreiben.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final png = await _controller.toPngBytes();
      if (png == null) throw Exception('Signatur-Rendering fehlgeschlagen');
      final client = ref.read(supabaseClientProvider);
      final uid = client.auth.currentUser!.id;
      final path = '$uid/${widget.taskId}.png';
      await client.storage.from('employee-signatures').uploadBinary(
            path,
            Uint8List.fromList(png),
            fileOptions: const FileOptions(
              contentType: 'image/png',
              upsert: true,
            ),
          );
      // Auth-Kontext-Hash (User-Agent + Zeit) — statt echter IP
      final ctx = '${DateTime.now().millisecondsSinceEpoch}|'
          '${Uri.base.host}|${client.auth.currentUser?.id}';
      final ipHash = base64Encode(utf8.encode(ctx)).substring(0, 32);
      await client.rpc(
        'submit_employee_signature',
        params: {
          'p_task': widget.taskId,
          'p_png_path': path,
          'p_ip_hash': ipHash,
        },
      );
      // Merge-Edge-Function anstoßen (fire-and-forget nicht sinnvoll:
      // Rückmeldung soll den Nachweis-Button freischalten)
      await client.functions.invoke(
        'merge-employee-signature',
        body: {
          'task_id': widget.taskId,
        },
      );
      if (mounted) Navigator.pop(context, true);
    } catch (e) {
      setState(() {
        _error = '$e';
        _busy = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Unterschrift zeichnen',
              style: AppTypography.display(
                size: 20,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Zeichne deine Unterschrift mit dem Finger. Die Signatur '
              'wird zusammen mit Zeitstempel und Auth-Kontext '
              'revisionssicher gespeichert.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s3),
            Container(
              decoration: BoxDecoration(
                color: AppColors.surfaceAlt,
                border: Border.all(color: AppColors.borderSubtle),
                borderRadius: BorderRadius.circular(AppRadii.md),
              ),
              child: SizedBox(
                height: 220,
                child: Signature(
                  controller: _controller,
                  backgroundColor: Colors.transparent,
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Row(
              children: [
                TextButton.icon(
                  onPressed: _busy
                      ? null
                      : () {
                          _controller.clear();
                          setState(() => _error = null);
                        },
                  icon: const Icon(Icons.refresh, size: 18),
                  label: const Text('Neu zeichnen'),
                ),
                const Spacer(),
              ],
            ),
            if (_error != null)
              Padding(
                padding: const EdgeInsets.only(top: 4),
                child: Text(
                  _error!,
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.statusCritical,
                  ),
                ),
              ),
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed:
                        _busy ? null : () => Navigator.pop(context, false),
                    child: const Text('Abbrechen'),
                  ),
                ),
                const SizedBox(width: AppSpacing.s2),
                Expanded(
                  child: FilledButton.icon(
                    onPressed: _busy ? null : _submit,
                    icon: _busy
                        ? const SizedBox(
                            width: 16,
                            height: 16,
                            child: CircularProgressIndicator(
                              strokeWidth: 2,
                              color: AppColors.ink,
                            ),
                          )
                        : const Icon(Icons.check),
                    label: const Text('Speichern'),
                    style: FilledButton.styleFrom(
                      backgroundColor: AppColors.brand,
                      foregroundColor: AppColors.ink,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: AppSpacing.s2),
          ],
        ),
      ),
    );
  }
}
