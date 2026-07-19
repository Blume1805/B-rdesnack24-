import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';

/// Verfügbare Einzelberechtigungen (ABAC) für Mitarbeiter.
const _assignablePermissions = <String, String>{
  'inventory.view': 'Inventur ansehen',
  'inventory.edit': 'Inventur bearbeiten',
  'haccp.fill': 'Befüllung',
  'haccp.temperature': 'Temperatur',
  'haccp.cleaning': 'Reinigung',
  'haccp.disposal': 'Vernichtung',
  'haccp.maintenance': 'Wartung',
  'cash.collect': 'Geldentnahme',
  'documents.view': 'Dokumente ansehen',
};

final _profilesProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) async {
    final rows = await ref
        .read(supabaseClientProvider)
        .from('profiles')
        .select('id, email, full_name, role, status')
        .order('created_at');
    return (rows as List).cast<Map<String, dynamic>>();
  },
);

/// Mitarbeiterverwaltung: Liste + Einladung (mit individuellen Berechtigungen).
/// Mitarbeiter werden nie gelöscht, nur deaktiviert/archiviert (Revisionssicherheit).
class EmployeesScreen extends ConsumerWidget {
  const EmployeesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profiles = ref.watch(_profilesProvider);
    return Scaffold(
      appBar: AppBar(title: const Text('Mitarbeiter')),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => _invite(context, ref),
        icon: const Icon(Icons.person_add),
        label: const Text('Einladen'),
      ),
      body: profiles.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (list) => ListView.separated(
          itemCount: list.length,
          separatorBuilder: (_, __) => const Divider(height: 1),
          itemBuilder: (context, i) {
            final p = list[i];
            return ListTile(
              title: Text(p['full_name'] as String? ?? p['email'] as String),
              subtitle: Text('${p['email']} · ${p['role']}'),
              trailing: Chip(label: Text('${p['status']}')),
            );
          },
        ),
      ),
    );
  }

  Future<void> _invite(BuildContext context, WidgetRef ref) async {
    final selected = await showModalBottomSheet<_InviteResult>(
      context: context,
      isScrollControlled: true,
      builder: (_) => const _InviteForm(),
    );
    if (selected == null) return;
    try {
      await ref.read(supabaseClientProvider).functions.invoke(
        'invite-user',
        body: {
          'email': selected.email,
          'role': 'employee',
          'full_name': selected.fullName,
          'permissions': selected.permissions,
        },
      );
      if (!context.mounted) return;
      ref.invalidate(_profilesProvider);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Einladung versendet.')),
      );
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Einladung fehlgeschlagen: $e')),
      );
    }
  }
}

class _InviteResult {
  const _InviteResult(this.email, this.fullName, this.permissions);
  final String email;
  final String? fullName;
  final List<String> permissions;
}

class _InviteForm extends StatefulWidget {
  const _InviteForm();

  @override
  State<_InviteForm> createState() => _InviteFormState();
}

class _InviteFormState extends State<_InviteForm> {
  final _formKey = GlobalKey<FormState>();
  final _emailCtrl = TextEditingController();
  final _nameCtrl = TextEditingController();
  final _selected = <String>{};

  @override
  void dispose() {
    _emailCtrl.dispose();
    _nameCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    Navigator.of(context).pop(_InviteResult(
      _emailCtrl.text.trim(),
      _nameCtrl.text.trim().isEmpty ? null : _nameCtrl.text.trim(),
      _selected.toList(),
    ));
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Mitarbeiter einladen',
                  style: Theme.of(context).textTheme.titleLarge),
              const SizedBox(height: 16),
              TextFormField(
                controller: _emailCtrl,
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(labelText: 'E-Mail'),
                validator: (v) =>
                    (v == null || !v.contains('@')) ? 'Gültige E-Mail' : null,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _nameCtrl,
                decoration: const InputDecoration(labelText: 'Name (optional)'),
              ),
              const SizedBox(height: 12),
              Text('Berechtigungen',
                  style: Theme.of(context).textTheme.titleMedium),
              for (final entry in _assignablePermissions.entries)
                CheckboxListTile(
                  dense: true,
                  contentPadding: EdgeInsets.zero,
                  title: Text(entry.value),
                  value: _selected.contains(entry.key),
                  onChanged: (v) => setState(() {
                    if (v == true) {
                      _selected.add(entry.key);
                    } else {
                      _selected.remove(entry.key);
                    }
                  }),
                ),
              const SizedBox(height: 8),
              FilledButton(onPressed: _submit, child: const Text('Einladen')),
            ],
          ),
        ),
      ),
    );
  }
}
