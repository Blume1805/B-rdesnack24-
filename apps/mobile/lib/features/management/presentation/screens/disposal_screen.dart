import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../controllers/management_providers.dart';
import '../widgets/machine_dropdown.dart';
import '../widgets/photo_picker_button.dart';
import '../widgets/protocol_scaffold.dart';

/// Vernichtungsprotokoll (Anlage I) — MHD/Verderb. Koppelt bei Stammprodukt
/// automatisch die Inventur (Bestandsabgang).
class DisposalScreen extends StatelessWidget {
  const DisposalScreen({super.key});

  static const _reasonLabels = {
    'mhd': 'MHD überschritten',
    'damage': 'Beschädigung',
    'hygiene': 'Hygienemangel',
    'other': 'Sonstiges',
  };

  @override
  Widget build(BuildContext context) {
    return ProtocolScaffold(
      title: 'Vernichtung',
      table: 'disposal_logs',
      dateCol: 'disposed_at',
      exportKind: 'disposal',
      itemTitle: (r) =>
          '${r['product_label'] ?? 'Ware'} · ${r['quantity']} Stk.',
      itemSubtitle: (r) =>
          '${_short(r['disposed_at'])} · ${_reasonLabels[r['reason']] ?? r['reason']}'
          '${r['mhd_date'] != null ? ' · MHD ${r['mhd_date']}' : ''}',
      onCreate: (context, ref) => showModalBottomSheet<Map<String, dynamic>>(
        context: context,
        isScrollControlled: true,
        builder: (_) => const _DisposalForm(),
      ),
    );
  }
}

String _short(dynamic iso) =>
    iso == null ? '' : iso.toString().replaceFirst('T', ' ').substring(0, 16);

class _DisposalForm extends ConsumerStatefulWidget {
  const _DisposalForm();

  @override
  ConsumerState<_DisposalForm> createState() => _DisposalFormState();
}

class _DisposalFormState extends ConsumerState<_DisposalForm> {
  final _formKey = GlobalKey<FormState>();
  final _qtyCtrl = TextEditingController();
  final _labelCtrl = TextEditingController();
  String? _machineId;
  String? _productId;
  String _reason = 'mhd';
  DateTime? _mhdDate;
  String? _photoPath;

  @override
  void dispose() {
    _qtyCtrl.dispose();
    _labelCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    Navigator.of(context).pop({
      'machine_id': _machineId,
      'product_id': _productId,
      'product_label':
          _labelCtrl.text.trim().isEmpty ? null : _labelCtrl.text.trim(),
      'quantity': int.parse(_qtyCtrl.text),
      'reason': _reason,
      'mhd_date': _mhdDate?.toIso8601String().substring(0, 10),
      'photo_path': _photoPath,
      'disposed_at': DateTime.now().toIso8601String(),
    });
  }

  @override
  Widget build(BuildContext context) {
    final products = ref.watch(productsProvider);
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
              Text('Vernichtung erfassen',
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
                  decoration: const InputDecoration(
                    labelText: 'Produkt (optional, koppelt Inventur)',
                  ),
                  items: [
                    const DropdownMenuItem(
                        value: null, child: Text('— freie Eingabe —')),
                    for (final p in list)
                      DropdownMenuItem(
                        value: p['id'] as String,
                        child: Text(p['name'] as String? ?? ''),
                      ),
                  ],
                  onChanged: (v) => setState(() {
                    _productId = v;
                    if (v != null) {
                      final p = list.firstWhere((e) => e['id'] == v);
                      _labelCtrl.text = p['name'] as String? ?? '';
                    }
                  }),
                ),
                orElse: () => const SizedBox.shrink(),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _labelCtrl,
                decoration:
                    const InputDecoration(labelText: 'Produktbezeichnung'),
                validator: (v) =>
                    (v == null || v.trim().isEmpty) ? 'Pflichtfeld' : null,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _qtyCtrl,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'Menge (Stück)'),
                validator: (v) {
                  final n = int.tryParse(v ?? '');
                  return (n == null || n <= 0) ? 'Menge > 0' : null;
                },
              ),
              const SizedBox(height: 12),
              DropdownButtonFormField<String>(
                initialValue: _reason,
                decoration: const InputDecoration(labelText: 'Grund'),
                items: const [
                  DropdownMenuItem(
                      value: 'mhd', child: Text('MHD überschritten')),
                  DropdownMenuItem(
                      value: 'damage', child: Text('Beschädigung')),
                  DropdownMenuItem(
                      value: 'hygiene', child: Text('Hygienemangel')),
                  DropdownMenuItem(value: 'other', child: Text('Sonstiges')),
                ],
                onChanged: (v) => setState(() => _reason = v ?? 'mhd'),
              ),
              const SizedBox(height: 8),
              ListTile(
                contentPadding: EdgeInsets.zero,
                title: Text(_mhdDate == null
                    ? 'MHD-Datum (optional)'
                    : 'MHD: ${_mhdDate!.toIso8601String().substring(0, 10)}'),
                trailing: const Icon(Icons.calendar_today),
                onTap: () async {
                  final now = DateTime.now();
                  final picked = await showDatePicker(
                    context: context,
                    firstDate: DateTime(now.year - 2),
                    lastDate: DateTime(now.year + 2),
                    initialDate: now,
                    locale: const Locale('de'),
                  );
                  if (picked != null) setState(() => _mhdDate = picked);
                },
              ),
              const SizedBox(height: 8),
              PhotoPickerButton(onUploaded: (p) => _photoPath = p),
              const SizedBox(height: 8),
              FilledButton(onPressed: _submit, child: const Text('Speichern')),
            ],
          ),
        ),
      ),
    );
  }
}
