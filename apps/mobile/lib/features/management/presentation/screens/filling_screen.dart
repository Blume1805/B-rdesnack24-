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
  final _unitCostCtrl = TextEditingController();
  final _invoiceNumberCtrl = TextEditingController();
  String? _machineId;
  String? _productId;
  bool _mhdChecked = true;
  DateTime _invoiceDate = DateTime.now();
  DateTime? _lotExpiry;

  @override
  void dispose() {
    _qtyCtrl.dispose();
    _spoiledCtrl.dispose();
    _unitCostCtrl.dispose();
    _invoiceNumberCtrl.dispose();
    super.dispose();
  }

  Future<void> _pickInvoiceDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _invoiceDate,
      firstDate: DateTime(2024),
      lastDate: DateTime.now(),
      locale: const Locale('de'),
    );
    if (picked != null) setState(() => _invoiceDate = picked);
  }

  Future<void> _pickLotExpiry() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _lotExpiry ?? DateTime.now().add(const Duration(days: 90)),
      firstDate: DateTime.now().subtract(const Duration(days: 30)),
      lastDate: DateTime(2030),
      locale: const Locale('de'),
    );
    if (picked != null) setState(() => _lotExpiry = picked);
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
      'unit_cost': double.tryParse(_unitCostCtrl.text.replaceAll(',', '.')),
      'invoice_number': _invoiceNumberCtrl.text.trim().isEmpty
          ? null
          : _invoiceNumberCtrl.text.trim(),
      'invoice_date': _invoiceDate.toIso8601String().substring(0, 10),
      'lot_expiry': _lotExpiry?.toIso8601String().substring(0, 10),
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
                decoration:
                    const InputDecoration(labelText: 'Eingelegte Menge'),
                validator: (v) {
                  final n = int.tryParse(v ?? '');
                  return (n == null || n <= 0) ? 'Menge > 0' : null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _spoiledCtrl,
                keyboardType: TextInputType.number,
                decoration:
                    const InputDecoration(labelText: 'Entnommener Verderb'),
              ),
              const SizedBox(height: 12),
              // ── FIFO-Lot-Metadaten (Rechnung + EK-Preis + MHD) ─────
              TextFormField(
                controller: _unitCostCtrl,
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                decoration: const InputDecoration(
                  labelText: 'EK-Preis netto €/Stück',
                  helperText: 'Aus Lieferantenrechnung',
                ),
                validator: (v) {
                  if (v == null || v.trim().isEmpty) return 'Pflichtfeld';
                  final n = double.tryParse(v.replaceAll(',', '.'));
                  return (n == null || n <= 0) ? 'EK > 0' : null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _invoiceNumberCtrl,
                decoration: const InputDecoration(
                  labelText: 'Rechnungsnummer',
                  helperText: 'Nummer der Lieferantenrechnung',
                ),
                validator: (v) =>
                    (v == null || v.trim().isEmpty) ? 'Pflichtfeld' : null,
              ),
              const SizedBox(height: 12),
              InputDecorator(
                decoration: const InputDecoration(labelText: 'Rechnungsdatum'),
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        '${_invoiceDate.day.toString().padLeft(2, '0')}.${_invoiceDate.month.toString().padLeft(2, '0')}.${_invoiceDate.year}',
                      ),
                    ),
                    TextButton.icon(
                      onPressed: _pickInvoiceDate,
                      icon: const Icon(Icons.date_range),
                      label: const Text('ändern'),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              InputDecorator(
                decoration: const InputDecoration(
                  labelText: 'MHD des Lots (empfohlen)',
                  helperText:
                      'Wird für die MHD-Bewertung im Inventurreport genutzt',
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        _lotExpiry == null
                            ? '— nicht gesetzt —'
                            : '${_lotExpiry!.day.toString().padLeft(2, '0')}.${_lotExpiry!.month.toString().padLeft(2, '0')}.${_lotExpiry!.year}',
                      ),
                    ),
                    TextButton.icon(
                      onPressed: _pickLotExpiry,
                      icon: const Icon(Icons.date_range),
                      label: const Text('setzen'),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 4),
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
