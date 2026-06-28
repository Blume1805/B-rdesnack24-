import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../auth/presentation/controllers/auth_providers.dart';

final _documentsProvider = FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) async {
    final rows = await ref
        .read(supabaseClientProvider)
        .from('documents')
        .select('id, title, category, current_version, status')
        .order('title');
    return (rows as List).cast<Map<String, dynamic>>();
  },
);

/// Dokumentenmanagement (versioniert, GoBD). Anlage/Übersicht; das Hochladen
/// von Dateiversionen erfolgt über Storage (Datei-Upload-UI in Phase 4).
class DocumentsScreen extends ConsumerWidget {
  const DocumentsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final docs = ref.watch(_documentsProvider);
    final canEdit = ref.watch(currentPermissionsProvider).maybeWhen(
          data: (p) => p.contains('documents.edit'),
          orElse: () => false,
        );
    return Scaffold(
      appBar: AppBar(title: const Text('Dokumente')),
      floatingActionButton: canEdit
          ? FloatingActionButton.extended(
              onPressed: () => _create(context, ref),
              icon: const Icon(Icons.note_add),
              label: const Text('Neu'),
            )
          : null,
      body: docs.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (list) => list.isEmpty
            ? const Center(child: Text('Keine Dokumente.'))
            : ListView.separated(
                itemCount: list.length,
                separatorBuilder: (_, __) => const Divider(height: 1),
                itemBuilder: (context, i) {
                  final d = list[i];
                  return ListTile(
                    leading: const Icon(Icons.description),
                    title: Text(d['title'] as String? ?? ''),
                    subtitle: Text(
                      '${d['category'] ?? '—'} · v${d['current_version']} · ${d['status']}',
                    ),
                  );
                },
              ),
      ),
    );
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
              decoration: const InputDecoration(labelText: 'Titel'),
            ),
            TextField(
              controller: catCtrl,
              decoration: const InputDecoration(
                labelText: 'Kategorie (z. B. haccp, hygienekonzept)',
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Anlegen'),
          ),
        ],
      ),
    );
    if (ok != true || titleCtrl.text.trim().isEmpty) return;
    try {
      await ref.read(supabaseClientProvider).from('documents').insert({
        'title': titleCtrl.text.trim(),
        'category': catCtrl.text.trim().isEmpty ? null : catCtrl.text.trim(),
      });
      if (!context.mounted) return;
      ref.invalidate(_documentsProvider);
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Fehlgeschlagen: $e')),
      );
    }
  }
}
