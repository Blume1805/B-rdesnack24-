import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../widgets/machine_dropdown.dart';
import '../widgets/protocol_scaffold.dart';

/// Temperaturkontrolle (CCP 2: ≤ 7 °C).
class TemperatureScreen extends StatelessWidget {
  const TemperatureScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ProtocolScaffold(
      title: 'Temperaturkontrolle',
      table: 'temperature_logs',
      dateCol: 'measured_at',
      exportKind: 'temperature',
      itemTitle: (r) => '${r['temperature_c']} °C'
          '${(r['within_limit'] == false) ? '  ⚠️ über Grenzwert' : ''}',
      itemSubtitle: (r) =>
          '${_short(r['measured_at'])}${r['corrective_action'] != null ? '\n${r['corrective_action']}' : ''}',
      onCreate: (context, ref) => showModalBottomSheet<Map<String, dynamic>>(
        context: context,
        isScrollControlled: true,
        builder: (_) => const _TemperatureForm(),
      ),
    );
  }
}

String _short(dynamic iso) =>
    iso == null ? '' : iso.toString().replaceFirst('T', ' ').substring(0, 16);

class _TemperatureForm extends ConsumerStatefulWidget {
  const _TemperatureForm();

  @override
  ConsumerState<_TemperatureForm> createState() => _TemperatureFormState();
}

class _TemperatureFormState extends ConsumerState<_TemperatureForm> {
  final _formKey = GlobalKey<FormState>();
  final _tempCtrl = TextEditingController();
  final _actionCtrl = TextEditingController();
  String? _machineId;

  @override
  void dispose() {
    _tempCtrl.dispose();
    _actionCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    final temp = double.parse(_tempCtrl.text.replaceAll(',', '.'));
    Navigator.of(context).pop({
      'machine_id': _machineId,
      'temperature_c': temp,
      'corrective_action':
          _actionCtrl.text.trim().isEmpty ? null : _actionCtrl.text.trim(),
      'measured_at': DateTime.now().toIso8601String(),
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        bottom: MediaQuery.of(context).viewInsets.bottom,
      ),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Temperatur erfassen',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              MachineDropdown(
                value: _machineId,
                onChanged: (v) => setState(() => _machineId = v),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _tempCtrl,
                keyboardType: const TextInputType.numberWithOptions(
                  decimal: true,
                  signed: true,
                ),
                decoration: const InputDecoration(
                  labelText: 'Ist-Temperatur (°C)',
                  suffixText: '°C',
                ),
                validator: (v) {
                  final t = double.tryParse((v ?? '').replaceAll(',', '.'));
                  return t == null ? 'Bitte Temperatur eingeben' : null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _actionCtrl,
                decoration: const InputDecoration(
                  labelText: 'Korrekturmaßnahme (bei Überschreitung)',
                ),
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
