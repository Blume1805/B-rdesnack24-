import 'dart:convert';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/services/storage_service.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../auth/presentation/controllers/auth_providers.dart';

/// Dokumentenmanagement (versioniert, GoBD/HACCP).
final _documentsProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>((ref) async {
  final rows =
      await ref.read(supabaseClientProvider).rpc('list_documents');
  return (rows as List).cast<Map<String, dynamic>>();
});

/// Signatur-Aufgaben eines Dokuments — nur relevant für Kategorien
/// wie ifsg, sicherheitsunterweisung etc. Wird pro Karte on-demand
/// geladen, wenn die Karte expandiert wird.
final _signatureTasksProvider = FutureProvider.autoDispose
    .family<List<Map<String, dynamic>>, String>((ref, docId) async {
  final data = await ref
      .read(supabaseClientProvider)
      .rpc('list_document_signature_tasks', params: {'p_document': docId});
  return (data as List).cast<Map<String, dynamic>>();
});

class DocumentsScreen extends ConsumerStatefulWidget {
  const DocumentsScreen({super.key});
  @override
  ConsumerState<DocumentsScreen> createState() => _DocumentsScreenState();
}

class _DocumentsScreenState extends ConsumerState<DocumentsScreen> {
  String _search = '';
  String? _categoryFilter;
  bool _exporting = false;

  @override
  Widget build(BuildContext context) {
    final docs = ref.watch(_documentsProvider);
    final canEdit = ref.watch(currentPermissionsProvider).maybeWhen(
          data: (p) => p.contains('documents.edit'),
          orElse: () => false,
        );
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dokumente'),
        actions: [
          IconButton(
            tooltip: 'Prüfer-Export als ZIP',
            icon: _exporting
                ? const SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(
                        strokeWidth: 2, color: AppColors.brand))
                : const Icon(Icons.folder_zip_outlined,
                    color: AppColors.brand),
            onPressed: _exporting ? null : () => _exportZip(context, ref),
          ),
        ],
      ),
      floatingActionButton: canEdit
          ? FloatingActionButton.extended(
              onPressed: () => _create(context, ref),
              icon: const Icon(Icons.note_add),
              label: const Text('Neu'),
              backgroundColor: AppColors.brand,
              foregroundColor: AppColors.ink,
            )
          : null,
      body: docs.when(
        loading: () => const Center(
            child: CircularProgressIndicator(color: AppColors.brand)),
        error: (e, _) => Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text('$e')),
        data: (list) {
          final categories = <String>{
            for (final d in list)
              if (d['category'] is String &&
                  (d['category'] as String).isNotEmpty)
                d['category'] as String
          }.toList()
            ..sort();
          final filtered = list.where((d) {
            final t = (d['title'] as String? ?? '').toLowerCase();
            final c = (d['category'] as String? ?? '').toLowerCase();
            final q = _search.toLowerCase();
            final matchQ = q.isEmpty || t.contains(q) || c.contains(q);
            final matchCat = _categoryFilter == null ||
                d['category'] == _categoryFilter;
            return matchQ && matchCat;
          }).toList();
          return RefreshIndicator(
            onRefresh: () async => ref.invalidate(_documentsProvider),
            color: AppColors.brand,
            child: ListView(
              padding: const EdgeInsets.all(AppSpacing.s4),
              children: [
                _SearchBar(
                    onChanged: (v) => setState(() => _search = v)),
                if (categories.isNotEmpty) ...[
                  const SizedBox(height: AppSpacing.s3),
                  _CategoryChips(
                    categories: categories,
                    selected: _categoryFilter,
                    onSelected: (c) => setState(() => _categoryFilter = c),
                  ),
                ],
                const SizedBox(height: AppSpacing.s4),
                if (filtered.isEmpty)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 40),
                    child: Center(
                      child: Text('Keine Treffer.',
                          style: AppTypography.body(
                              size: 13, color: AppColors.textMuted)),
                    ),
                  )
                else
                  for (final d in filtered)
                    _DocumentCard(
                      row: d,
                      canEdit: canEdit,
                      onOpen: () => _open(context, ref, d),
                      onNewVersion: () =>
                          _addVersion(context, ref, d['id'] as String),
                      onSetValidUntil: () => _setValidUntil(context, ref, d),
                      onRequestApproval: () => _requestReview(context, ref, d),
                      onInviteEmployees: () =>
                          _inviteEmployees(context, ref, d),
                    ),
                const SizedBox(height: AppSpacing.s12),
              ],
            ),
          );
        },
      ),
    );
  }

  // ─── Aktionen ────────────────────────────────────────────────────

  Future<void> _open(BuildContext context, WidgetRef ref,
      Map<String, dynamic> doc) async {
    final path = doc['latest_file_path']?.toString();
    if (path == null || path.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content:
            Text('Für dieses Dokument ist noch keine Version hochgeladen.'),
      ));
      return;
    }
    final lower = path.toLowerCase();
    final isPdf = lower.endsWith('.pdf');
    final isImage = lower.endsWith('.png') ||
        lower.endsWith('.jpg') ||
        lower.endsWith('.jpeg') ||
        lower.endsWith('.gif') ||
        lower.endsWith('.webp');
    try {
      final url = await ref
          .read(supabaseClientProvider)
          .storage
          .from('documents')
          .createSignedUrl(path, 3600 * 24);
      await launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
        webOnlyWindowName: '_blank',
      );
      if (!isPdf && !isImage && context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          duration: const Duration(seconds: 5),
          content: Text(
              'Format nicht direkt anzeigbar — Datei wurde heruntergeladen. '
              'Tipp: künftige Versionen als PDF hochladen für Inline-Vorschau.'),
        ));
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    }
  }

  Future<void> _addVersion(
      BuildContext context, WidgetRef ref, String docId) async {
    final picked = await FilePicker.platform.pickFiles(
      withData: true,
      type: FileType.custom,
      allowedExtensions: const ['pdf', 'docx', 'doc', 'jpg', 'jpeg', 'png'],
    );
    if (picked == null || picked.files.isEmpty) return;
    final file = picked.files.first;
    if (file.bytes == null) return;
    try {
      final path = await ref.read(storageServiceProvider).upload(
            bucket: 'documents',
            filename: file.name,
            bytes: file.bytes!,
          );
      await ref
          .read(supabaseClientProvider)
          .rpc('add_document_version', params: {
        'p_document': docId,
        'p_file_path': path,
        'p_notes': file.name,
      });
      if (!context.mounted) return;
      ref.invalidate(_documentsProvider);
      final isPdf = file.name.toLowerCase().endsWith('.pdf');
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(isPdf
            ? 'Neue Version gespeichert.'
            : 'Version gespeichert. Hinweis: Nicht-PDFs werden beim Öffnen '
                'heruntergeladen — PDF ist ideal für Inline-Vorschau.'),
      ));
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Upload fehlgeschlagen: $e')),
      );
    }
  }

  Future<void> _setValidUntil(BuildContext context, WidgetRef ref,
      Map<String, dynamic> doc) async {
    final currentRaw = doc['valid_until']?.toString();
    DateTime? initial;
    if (currentRaw != null && currentRaw.isNotEmpty) {
      initial = DateTime.tryParse(currentRaw);
    }
    final picked = await showDatePicker(
      context: context,
      initialDate: initial ?? DateTime.now().add(const Duration(days: 365)),
      firstDate: DateTime(2020),
      lastDate: DateTime(2100),
      locale: const Locale('de'),
    );
    if (picked == null) return;
    try {
      await ref
          .read(supabaseClientProvider)
          .rpc('set_document_valid_until', params: {
        'p_document': doc['id'],
        'p_valid_until': picked.toIso8601String().substring(0, 10),
      });
      if (!context.mounted) return;
      ref.invalidate(_documentsProvider);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Gültig bis ${Formatters.date(picked)}.')),
      );
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text('Fehler: $e')));
    }
  }

  Future<void> _requestReview(BuildContext context, WidgetRef ref,
      Map<String, dynamic> doc) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Freigabe anfordern'),
        content: Text(
          '„${doc['title']}" (v${doc['current_version']}) wird beiden '
          'Gesellschaftern zur Prüfung vorgelegt. Nach 2-of-2-Freigabe '
          'ist das Dokument revisionssicher signiert.',
        ),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context, false),
              child: const Text('Abbrechen')),
          FilledButton(
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.brand,
              foregroundColor: AppColors.ink,
            ),
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Anfordern'),
          ),
        ],
      ),
    );
    if (ok != true) return;
    try {
      await ref
          .read(supabaseClientProvider)
          .rpc('request_document_review', params: {'p_document': doc['id']});
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Freigabe angefordert.')),
      );
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text('Fehler: $e')));
    }
  }

  Future<void> _inviteEmployees(BuildContext context, WidgetRef ref,
      Map<String, dynamic> doc) async {
    final client = ref.read(supabaseClientProvider);
    List<Map<String, dynamic>> employees;
    try {
      final data = await client.rpc('list_employees_for_signature');
      employees = (data as List).cast<Map<String, dynamic>>();
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
      return;
    }
    if (employees.isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text(
              'Keine Mitarbeiter angelegt — zuerst über „Mitarbeiter" einladen.'),
        ));
      }
      return;
    }
    final selected = <String>{};
    if (!context.mounted) return;
    final ok = await showDialog<bool>(
      context: context,
      builder: (dCtx) => StatefulBuilder(
        builder: (dCtx, setState) => AlertDialog(
          title: const Text('Mitarbeiter zur Signatur einladen'),
          content: SizedBox(
            width: 400,
            child: ListView(
              shrinkWrap: true,
              children: [
                for (final e in employees)
                  CheckboxListTile(
                    value: selected.contains(e['id']),
                    title: Text(e['full_name']?.toString() ?? '?'),
                    subtitle: Text(e['email']?.toString() ?? ''),
                    onChanged: (v) => setState(() {
                      final id = e['id'] as String;
                      if (v == true) {
                        selected.add(id);
                      } else {
                        selected.remove(id);
                      }
                    }),
                  ),
              ],
            ),
          ),
          actions: [
            TextButton(
                onPressed: () => Navigator.pop(dCtx, false),
                child: const Text('Abbrechen')),
            FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.brand,
                foregroundColor: AppColors.ink,
              ),
              onPressed: () => Navigator.pop(dCtx, true),
              child: const Text('Einladen'),
            ),
          ],
        ),
      ),
    );
    if (ok != true || selected.isEmpty) return;
    try {
      for (final empId in selected) {
        await client.rpc('invite_employee_signature', params: {
          'p_document': doc['id'],
          'p_employee': empId,
        });
      }
      if (!context.mounted) return;
      ref.invalidate(_signatureTasksProvider(doc['id'] as String));
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
            content: Text('${selected.length} Mitarbeiter eingeladen.')),
      );
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text('Fehler: $e')));
    }
  }

  Future<void> _exportZip(BuildContext context, WidgetRef ref) async {
    setState(() => _exporting = true);
    try {
      final res = await ref.read(supabaseClientProvider).functions.invoke(
        'documents-zip-export',
        body: _categoryFilter == null ? {} : {'category': _categoryFilter},
      );
      final data = res.data;
      if (data is Map && data['base64'] is String) {
        final bytes = base64Decode(data['base64'] as String);
        final name = (data['filename'] as String?) ?? 'export.zip';
        final url = 'data:application/zip;base64,${base64Encode(bytes)}';
        await launchUrl(Uri.parse(url),
            mode: LaunchMode.externalApplication);
        await Clipboard.setData(ClipboardData(text: url));
        if (context.mounted) {
          ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content:
                Text('$name (${bytes.length ~/ 1024} KB) heruntergeladen.'),
          ));
        }
      } else {
        throw Exception('Ungültige Antwort: $data');
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Export fehlgeschlagen: $e')));
      }
    } finally {
      if (mounted) setState(() => _exporting = false);
    }
  }

  Future<void> _create(BuildContext context, WidgetRef ref) async {
    final titleCtrl = TextEditingController();
    final catCtrl = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Neues Dokument'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
                controller: titleCtrl,
                decoration: const InputDecoration(labelText: 'Titel')),
            TextField(
              controller: catCtrl,
              decoration: const InputDecoration(
                labelText:
                    'Kategorie (z. B. haccp, hygienekonzept, ifsg, vertrag)',
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context, false),
              child: const Text('Abbrechen')),
          FilledButton(
              onPressed: () => Navigator.pop(context, true),
              child: const Text('Anlegen')),
        ],
      ),
    );
    if (ok != true || titleCtrl.text.trim().isEmpty) return;
    try {
      await ref.read(supabaseClientProvider).from('documents').insert({
        'title': titleCtrl.text.trim(),
        'category':
            catCtrl.text.trim().isEmpty ? null : catCtrl.text.trim(),
      });
      if (!context.mounted) return;
      ref.invalidate(_documentsProvider);
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text('Fehlgeschlagen: $e')));
    }
  }
}

// ─── Widgets ─────────────────────────────────────────────────────

class _SearchBar extends StatelessWidget {
  const _SearchBar({required this.onChanged});
  final ValueChanged<String> onChanged;
  @override
  Widget build(BuildContext context) {
    return TextField(
      onChanged: onChanged,
      decoration: InputDecoration(
        hintText: 'Titel oder Kategorie suchen …',
        prefixIcon: const Icon(Icons.search, color: AppColors.textMuted),
        filled: true,
        fillColor: AppColors.surfaceCard,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
          borderSide: const BorderSide(color: AppColors.borderSubtle),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
          borderSide: const BorderSide(color: AppColors.borderSubtle),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
          borderSide: const BorderSide(color: AppColors.brand, width: 1.5),
        ),
      ),
    );
  }
}

class _CategoryChips extends StatelessWidget {
  const _CategoryChips({
    required this.categories,
    required this.selected,
    required this.onSelected,
  });
  final List<String> categories;
  final String? selected;
  final ValueChanged<String?> onSelected;
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: [
          _chip(context, 'Alle', selected == null, () => onSelected(null)),
          const SizedBox(width: 6),
          for (final c in categories) ...[
            _chip(context, c, selected == c, () => onSelected(c)),
            const SizedBox(width: 6),
          ],
        ],
      ),
    );
  }

  Widget _chip(BuildContext context, String label, bool active,
      VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(999),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
        decoration: BoxDecoration(
          color: active ? AppColors.brand : AppColors.surfaceCard,
          borderRadius: BorderRadius.circular(999),
          border: Border.all(
            color: active ? AppColors.brand : AppColors.borderSubtle,
          ),
        ),
        child: Text(
          label,
          style: AppTypography.body(
            size: 12,
            weight: FontWeight.w700,
            color: active ? AppColors.ink : AppColors.textDefault,
          ),
        ),
      ),
    );
  }
}

class _DocumentCard extends ConsumerWidget {
  const _DocumentCard({
    required this.row,
    required this.canEdit,
    required this.onOpen,
    required this.onNewVersion,
    required this.onSetValidUntil,
    required this.onRequestApproval,
    required this.onInviteEmployees,
  });
  final Map<String, dynamic> row;
  final bool canEdit;
  final VoidCallback onOpen;
  final VoidCallback onNewVersion;
  final VoidCallback onSetValidUntil;
  final VoidCallback onRequestApproval;
  final VoidCallback onInviteEmployees;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final title = row['title']?.toString() ?? '';
    final category = row['category']?.toString();
    final version = row['current_version'];
    final status = row['status']?.toString() ?? 'draft';
    final validUntilRaw = row['valid_until']?.toString();
    final expiry = row['expiry_status']?.toString() ?? 'none';
    final hasFile = (row['latest_file_path']?.toString() ?? '').isNotEmpty;

    final stripeColor = switch (expiry) {
      'expired' => AppColors.statusCritical,
      'expiring' => AppColors.statusWarning,
      _ => AppColors.brand,
    };

    DateTime? validUntil;
    if (validUntilRaw != null && validUntilRaw.isNotEmpty) {
      validUntil = DateTime.tryParse(validUntilRaw);
    }

    // Sign-Tasks werden nur für „ifsg"-Kategorien geladen (spart Traffic)
    final isIfsg = (category ?? '').toLowerCase() == 'ifsg';
    final sigTasks = isIfsg && hasFile
        ? ref.watch(_signatureTasksProvider(row['id'] as String))
        : null;

    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: AppCard(
        onTap: hasFile ? onOpen : null,
        topStripeColor: stripeColor,
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(title,
                      style: AppTypography.body(
                          size: 15,
                          weight: FontWeight.w800,
                          color: AppColors.ink)),
                ),
                _ExpiryBadge(expiry: expiry, validUntil: validUntil),
              ],
            ),
            const SizedBox(height: 4),
            Text(
              '${category ?? '—'} · v$version · $status'
              '${validUntil == null ? '' : ' · gültig bis ${Formatters.date(validUntil)}'}',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                if (hasFile)
                  Row(
                    children: const [
                      Icon(Icons.picture_as_pdf,
                          size: 14, color: AppColors.brand),
                      SizedBox(width: 4),
                      Text('Tippen zum Öffnen',
                          style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w700,
                              color: AppColors.brand)),
                    ],
                  )
                else
                  Text('Noch keine Version hochgeladen',
                      style: AppTypography.body(
                          size: 11, color: AppColors.textMuted)),
                const Spacer(),
                if (canEdit) ...[
                  IconButton(
                    tooltip: 'Gültigkeit setzen',
                    icon: const Icon(Icons.event_available, size: 20),
                    color: AppColors.textDefault,
                    onPressed: onSetValidUntil,
                    visualDensity: VisualDensity.compact,
                  ),
                  IconButton(
                    tooltip: 'Neue Version hochladen',
                    icon: const Icon(Icons.upload_file, size: 20),
                    color: AppColors.textDefault,
                    onPressed: onNewVersion,
                    visualDensity: VisualDensity.compact,
                  ),
                  if (isIfsg)
                    IconButton(
                      tooltip: 'Mitarbeiter zur Signatur einladen',
                      icon: const Icon(Icons.person_add_alt_1, size: 20),
                      color: AppColors.brand,
                      onPressed: hasFile ? onInviteEmployees : null,
                      visualDensity: VisualDensity.compact,
                    ),
                  IconButton(
                    tooltip: 'Freigabe (2-of-2 Gesellschafter)',
                    icon: const Icon(Icons.rule_folder_outlined, size: 20),
                    color: AppColors.brand,
                    onPressed: hasFile ? onRequestApproval : null,
                    visualDensity: VisualDensity.compact,
                  ),
                ],
              ],
            ),
            // Signatur-Aufgaben-Liste für IfSG-Dokumente
            if (sigTasks != null) ...[
              const SizedBox(height: AppSpacing.s3),
              const Divider(height: 1, color: AppColors.borderSubtle),
              const SizedBox(height: AppSpacing.s2),
              sigTasks.when(
                loading: () => const Padding(
                  padding: EdgeInsets.symmetric(vertical: 8),
                  child: LinearProgressIndicator(color: AppColors.brand),
                ),
                error: (e, _) => Text('$e',
                    style: AppTypography.body(
                        size: 11, color: AppColors.statusCritical)),
                data: (tasks) {
                  if (tasks.isEmpty) {
                    return Text('Noch keine Mitarbeiter eingeladen.',
                        style: AppTypography.body(
                            size: 11, color: AppColors.textMuted));
                  }
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Mitarbeiter-Signaturen',
                          style: AppTypography.body(
                              size: 11,
                              weight: FontWeight.w800,
                              color: AppColors.textMuted)),
                      const SizedBox(height: 4),
                      for (final t in tasks) _SigTaskRow(row: t),
                    ],
                  );
                },
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _SigTaskRow extends ConsumerWidget {
  const _SigTaskRow({required this.row});
  final Map<String, dynamic> row;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final name = row['employee_name']?.toString() ?? '?';
    final status = row['status']?.toString() ?? 'pending';
    final signedAt = row['signed_at']?.toString();
    final path = row['signed_pdf_path']?.toString();
    final signed = status == 'signed';
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3),
      child: Row(
        children: [
          Icon(
            signed ? Icons.check_circle : Icons.hourglass_bottom,
            size: 16,
            color: signed ? AppColors.statusPositive : AppColors.brand,
          ),
          const SizedBox(width: 6),
          Expanded(
            child: Text(
              signed
                  ? '$name — signiert' +
                      (signedAt == null ? '' : ' · ${signedAt.substring(0, 10)}')
                  : '$name — ausstehend',
              style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.ink),
            ),
          ),
          if (signed && path != null && path.isNotEmpty)
            TextButton.icon(
              onPressed: () => _openSigned(context, ref, path),
              icon: const Icon(Icons.picture_as_pdf,
                  size: 16, color: AppColors.brand),
              label: const Text('Nachweis',
                  style: TextStyle(color: AppColors.brand)),
            ),
        ],
      ),
    );
  }

  Future<void> _openSigned(
      BuildContext context, WidgetRef ref, String path) async {
    try {
      final url = await ref
          .read(supabaseClientProvider)
          .storage
          .from('signed-documents')
          .createSignedUrl(path, 3600 * 24);
      await launchUrl(Uri.parse(url),
          mode: LaunchMode.externalApplication,
          webOnlyWindowName: '_blank');
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    }
  }
}

class _ExpiryBadge extends StatelessWidget {
  const _ExpiryBadge({required this.expiry, required this.validUntil});
  final String expiry;
  final DateTime? validUntil;
  @override
  Widget build(BuildContext context) {
    switch (expiry) {
      case 'expired':
        return const StatusBadge(
            label: 'abgelaufen', tone: StatusTone.critical);
      case 'expiring':
        return const StatusBadge(
            label: 'läuft bald', tone: StatusTone.warning);
      case 'ok':
        return const StatusBadge(label: 'gültig', tone: StatusTone.positive);
      default:
        return const SizedBox.shrink();
    }
  }
}
