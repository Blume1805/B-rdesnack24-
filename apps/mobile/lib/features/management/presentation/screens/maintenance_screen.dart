import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../widgets/machine_dropdown.dart';
import '../widgets/protocol_scaffold.dart';

/// Wartungsprotokoll (Anlage H).
class MaintenanceScreen extends StatelessWidget {
  const MaintenanceScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ProtocolScaffold(
      title: 'Wartung',
      table: 'maintenance_logs',
      dateCol: 'reported_at',
      exportKind: 'maintenance',
      itemTitle: (r) => '${r['issue']}',
      itemSubtitle: (r) =>
          '${_short(r['reported_at'])}${r['resolved'] == true ? ' · erledigt' : ' · offen'}'
          '${r['performed_by'] != null ? ' · ${r['performed_by']}' : ''}',
      onCreate: (context, ref) => showModalBottomSheet<Map<String, dynamic>>(
        context: context,
        isScrollControlled: true,
        builder: (_) => const _MaintenanceForm(),
      ),
    );
  }
}

String _short(dynamic iso) =>
    iso == null ? '' : iso.toString().replaceFirst('T', ' ').substring(0, 16);

class _MaintenanceForm extends ConsumerStatefulWidget {
  const _MaintenanceForm();

  @override
  ConsumerState<_MaintenanceForm> createState() => _MaintenanceFormState();
}

class _MaintenanceFormState extends ConsumerState<_MaintenanceForm> {
  final _formKey = GlobalKey<FormState>();
  final _issueCtrl = TextEditingController();
  final _actionCtrl = TextEditingController();
  final _byCtrl = TextEditingController();
  final _costCtrl = TextEditingController();
  String? _machineId;
  bool _resolved = false;

  @override
  void dispose() {
    _issueCtrl.dispose();
    _actionCtrl.dispose();
    _byCtrl.dispose();
    _costCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    Navigator.of(context).pop({
      'machine_id': _machineId,
      'issue': _issueCtrl.text.trim(),
      'action':
          _actionCtrl.text.trim().isEmpty ? null : _actionCtrl.text.trim(),
      'performed_by': _byCtrl.text.trim().isEmpty ? null : _byCtrl.text.trim(),
      'cost_amount': _costCtrl.text.trim().isEmpty
          ? null
          : double.tryParse(_costCtrl.text.replaceAll(',', '.')),
      'resolved': _resolved,
      'reported_at': DateTime.now().toIso8601String(),
    });
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
              Text('Wartung erfassen',
                  style: Theme.of(context).textTheme.titleLarge),
              const SizedBox(height: 16),
              MachineDropdown(
                value: _machineId,
                onChanged: (v) => setState(() => _machineId = v),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _issueCtrl,
                decoration:
                    const InputDecoration(labelText: 'Fehlerbeschreibung'),
                validator: (v) =>
                    (v == null || v.trim().isEmpty) ? 'Pflichtfeld' : null,
                maxLines: 2,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _actionCtrl,
                decoration: const InputDecoration(labelText: 'Maßnahme'),
                maxLines: 2,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _byCtrl,
                decoration: const InputDecoration(
                    labelText: 'Erledigt durch (Name/Firma)'),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _costCtrl,
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                decoration: const InputDecoration(labelText: 'Kosten (€)'),
              ),
              SwitchListTile(
                contentPadding: EdgeInsets.zero,
                title: const Text('Erledigt'),
                value: _resolved,
                onChanged: (v) => setState(() => _resolved = v),
              ),
              FilledButton(onPressed: _submit, child: const Text('Speichern')),
            ],
          ),
        ),
      ),
    );
  }
}
