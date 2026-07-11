import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../controllers/management_providers.dart';
import '../widgets/machine_dropdown.dart';
import '../widgets/protocol_scaffold.dart';

/// Befüllungsprotokoll (Anlage D). Schreibt automatisch eine Inventur-Bewegung (+).
class FillingScreen extends StatelessWidget {
  const FillingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ProtocolScaffold(
      title: 'Befüllung',
      table: 'filling_logs',
      dateCol: 'filled_at',
      exportKind: 'filling',
      itemTitle: (r) => 'Menge: ${r['quantity']}'
          '${(r['removed_spoiled'] ?? 0) != 0 ? ' · Verderb: ${r['removed_spoiled']}' : ''}',
      itemSubtitle: (r) =>
          '${_short(r['filled_at'])}${r['mhd_checked'] == true ? ' · MHD geprüft' : ''}',
      onCreate: (context, ref) => showModalBottomSheet<Map<String, dynamic>>(
        context: context,
        isScrollControlled: true,
        builder: (_) => const _FillingForm(),
      ),
    );
  }
}

String _short(dynamic iso) =>
    iso == null ? '' : iso.toString().replaceFirst('T', ' ').substring(0, 16);

class _FillingForm extends ConsumerStatefulWidget {
  const _FillingForm();

  @override
  ConsumerState<_FillingForm> createState() => _FillingFormState();
}

class _FillingFormState extends ConsumerState<_FillingForm> {
  final _formKey = GlobalKey<FormState>();
  final _qtyCtrl = TextEditingController();
  final _spoiledCtrl = TextEditingController(text: '0');
  String? _machineId;
  String? _productId;
  bool _mhdChecked = true;

  @override
  void dispose() {
    _qtyCtrl.dispose();
    _spoiledCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    if (_productId == null) return;
    Navigator.of(context).pop({
      'machine_id': _machineId,
      'product_id': _productId,
      'quantity': int.parse(_qtyCtrl.text),
      'removed_spoiled': int.tryParse(_spoiledCtrl.text) ?? 0,
      'mhd_checked': _mhdChecked,
      'filled_at': DateTime.now().toIso8601String(),
    });
  }

  @override
  Widget build(BuildContext context) {
    final products = ref.watch(productsProvider);
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
              Text('Befüllung erfassen',
                  style: Theme.of(context).textTheme.titleLarge),
              const SizedBox(height: 16),
              MachineDropdown(
                value: _machineId,
                onChanged: (v) => setState(() => _machineId = v),
              ),
              const SizedBox(height: 12),
              products.maybeWhen(
                data: (list) => DropdownButtonFormField<String>(
                  initialValue: _productId,
                  isExpanded: true,
                  decoration: const InputDecoration(labelText: 'Produkt'),
                  items: [
                    for (final p in list)
                      DropdownMenuItem(
                        value: p['id'] as String,
                        child: Text(p['name'] as String? ?? ''),
                      ),
                  ],
                  onChanged: (v) => setState(() => _productId = v),
                  validator: (v) => v == null ? 'Pflichtfeld' : null,
                ),
                orElse: () => const LinearProgressIndicator(),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _qtyCtrl,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'Eingelegte Menge'),
                validator: (v) {
                  final n = int.tryParse(v ?? '');
                  return (n == null || n <= 0) ? 'Menge > 0' : null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _spoiledCtrl,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'Entnommener Verderb'),
              ),
              SwitchListTile(
                contentPadding: EdgeInsets.zero,
                title: const Text('MHD geprüft'),
                value: _mhdChecked,
                onChanged: (v) => setState(() => _mhdChecked = v),
              ),
              FilledButton(onPressed: _submit, child: const Text('Speichern')),
            ],
          ),
        ),
      ),
    );
  }
}
