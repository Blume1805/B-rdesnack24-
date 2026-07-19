import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../widgets/machine_dropdown.dart';
import '../widgets/protocol_scaffold.dart';

/// Geldentnahmeprotokoll (Anlage G, § 146 AO).
class CashScreen extends StatelessWidget {
  const CashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ProtocolScaffold(
      title: 'Geldentnahme',
      table: 'cash_collection_logs',
      dateCol: 'collected_at',
      exportKind: 'cash',
      itemTitle: (r) => 'Netto: ${r['net_amount']} €',
      itemSubtitle: (r) =>
          '${_short(r['collected_at'])} · Brutto ${r['amount_gross']} € · Wechselgeld ${r['change_amount']} €',
      onCreate: (context, ref) => showModalBottomSheet<Map<String, dynamic>>(
        context: context,
        isScrollControlled: true,
        builder: (_) => const _CashForm(),
      ),
    );
  }
}

String _short(dynamic iso) =>
    iso == null ? '' : iso.toString().replaceFirst('T', ' ').substring(0, 16);

class _CashForm extends ConsumerStatefulWidget {
  const _CashForm();

  @override
  ConsumerState<_CashForm> createState() => _CashFormState();
}

class _CashFormState extends ConsumerState<_CashForm> {
  final _formKey = GlobalKey<FormState>();
  final _grossCtrl = TextEditingController();
  final _changeCtrl = TextEditingController(text: '0');
  String? _machineId;

  @override
  void dispose() {
    _grossCtrl.dispose();
    _changeCtrl.dispose();
    super.dispose();
  }

  double _num(String s) => double.parse(s.replaceAll(',', '.'));

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    Navigator.of(context).pop({
      'machine_id': _machineId,
      'amount_gross': _num(_grossCtrl.text),
      'change_amount': _num(_changeCtrl.text.isEmpty ? '0' : _changeCtrl.text),
      'collected_at': DateTime.now().toIso8601String(),
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
              Text(
                'Geldentnahme erfassen',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              MachineDropdown(
                value: _machineId,
                onChanged: (v) => setState(() => _machineId = v),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _grossCtrl,
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                decoration: const InputDecoration(
                  labelText: 'Entnommener Betrag brutto (€)',
                ),
                validator: (v) {
                  final n = double.tryParse((v ?? '').replaceAll(',', '.'));
                  return n == null ? 'Betrag eingeben' : null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _changeCtrl,
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                decoration: const InputDecoration(labelText: 'Wechselgeld (€)'),
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
