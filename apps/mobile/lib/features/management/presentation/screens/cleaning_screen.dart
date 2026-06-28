import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../widgets/machine_dropdown.dart';
import '../widgets/protocol_scaffold.dart';

/// Reinigungsprotokoll (Anlage E).
class CleaningScreen extends StatelessWidget {
  const CleaningScreen({super.key});

  static const _typeLabels = {
    'exterior': 'Außenreinigung',
    'interior': 'Innenreinigung',
    'full': 'Vollreinigung + Desinfektion',
  };

  @override
  Widget build(BuildContext context) {
    return ProtocolScaffold(
      title: 'Reinigung',
      table: 'cleaning_logs',
      dateCol: 'cleaned_at',
      exportKind: 'cleaning',
      itemTitle: (r) => _typeLabels[r['cleaning_type']] ?? '${r['cleaning_type']}',
      itemSubtitle: (r) =>
          '${_short(r['cleaned_at'])}${r['agent'] != null ? ' · ${r['agent']}' : ''}'
          '${r['notes'] != null ? '\n${r['notes']}' : ''}',
      onCreate: (context, ref) => showModalBottomSheet<Map<String, dynamic>>(
        context: context,
        isScrollControlled: true,
        builder: (_) => const _CleaningForm(),
      ),
    );
  }
}

String _short(dynamic iso) =>
    iso == null ? '' : iso.toString().replaceFirst('T', ' ').substring(0, 16);

class _CleaningForm extends ConsumerStatefulWidget {
  const _CleaningForm();

  @override
  ConsumerState<_CleaningForm> createState() => _CleaningFormState();
}

class _CleaningFormState extends ConsumerState<_CleaningForm> {
  final _formKey = GlobalKey<FormState>();
  final _agentCtrl = TextEditingController();
  final _notesCtrl = TextEditingController();
  String? _machineId;
  String _type = 'exterior';

  @override
  void dispose() {
    _agentCtrl.dispose();
    _notesCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    Navigator.of(context).pop({
      'machine_id': _machineId,
      'cleaning_type': _type,
      'agent': _agentCtrl.text.trim().isEmpty ? null : _agentCtrl.text.trim(),
      'notes': _notesCtrl.text.trim().isEmpty ? null : _notesCtrl.text.trim(),
      'cleaned_at': DateTime.now().toIso8601String(),
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Reinigung erfassen',
                  style: Theme.of(context).textTheme.titleLarge),
              const SizedBox(height: 16),
              MachineDropdown(
                value: _machineId,
                onChanged: (v) => setState(() => _machineId = v),
              ),
              const SizedBox(height: 12),
              DropdownButtonFormField<String>(
                initialValue: _type,
                decoration: const InputDecoration(labelText: 'Art'),
                items: const [
                  DropdownMenuItem(value: 'exterior', child: Text('Außenreinigung')),
                  DropdownMenuItem(value: 'interior', child: Text('Innenreinigung')),
                  DropdownMenuItem(value: 'full', child: Text('Vollreinigung + Desinfektion')),
                ],
                onChanged: (v) => setState(() => _type = v ?? 'exterior'),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _agentCtrl,
                decoration: const InputDecoration(labelText: 'Reinigungsmittel'),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _notesCtrl,
                decoration: const InputDecoration(labelText: 'Bemerkung'),
                maxLines: 2,
              ),
              const SizedBox(height: 16),
              FilledButton(onPressed: _submit, child: const Text('Speichern')),
            ],
          ),
        ),
      ),
    );
  }
}
