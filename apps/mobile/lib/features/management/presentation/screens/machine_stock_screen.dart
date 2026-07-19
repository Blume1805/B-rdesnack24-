import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../domain/entities/stock_item.dart';
import '../controllers/management_providers.dart';

/// Echtzeit-Bestand eines Automaten. Abonniert Änderungen der Tabelle
/// `inventory` (Realtime) und aktualisiert die Liste automatisch.
class MachineStockScreen extends ConsumerStatefulWidget {
  const MachineStockScreen({
    required this.machineId,
    required this.title,
    super.key,
  });

  final String machineId;
  final String title;

  @override
  ConsumerState<MachineStockScreen> createState() => _MachineStockScreenState();
}

class _MachineStockScreenState extends ConsumerState<MachineStockScreen> {
  RealtimeChannel? _channel;

  @override
  void initState() {
    super.initState();
    final client = ref.read(supabaseClientProvider);
    _channel = client
        .channel('inventory:${widget.machineId}')
        .onPostgresChanges(
          event: PostgresChangeEvent.all,
          schema: 'public',
          table: 'inventory',
          filter: PostgresChangeFilter(
            type: PostgresChangeFilterType.eq,
            column: 'machine_id',
            value: widget.machineId,
          ),
          callback: (_) {
            if (mounted) {
              ref.invalidate(machineStockProvider(widget.machineId));
            }
          },
        )
        .subscribe();
  }

  @override
  void dispose() {
    final ch = _channel;
    if (ch != null) ref.read(supabaseClientProvider).removeChannel(ch);
    super.dispose();
  }

  Color _color(BuildContext context, String availability) =>
      switch (availability) {
        'out' => Theme.of(context).colorScheme.error,
        'low' => Colors.orange,
        _ => Colors.green,
      };

  String _label(String availability) => switch (availability) {
        'out' => 'ausverkauft',
        'low' => 'bald leer',
        _ => 'verfügbar',
      };

  @override
  Widget build(BuildContext context) {
    final stock = ref.watch(machineStockProvider(widget.machineId));
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: stock.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (items) => items.isEmpty
            ? const Center(child: Text('Kein Bestand erfasst.'))
            : RefreshIndicator(
                onRefresh: () async =>
                    ref.invalidate(machineStockProvider(widget.machineId)),
                child: ListView.separated(
                  itemCount: items.length,
                  separatorBuilder: (_, __) => const Divider(height: 1),
                  itemBuilder: (context, i) {
                    final s = items[i];
                    return ListTile(
                      title: Text(s.productName),
                      subtitle: Text(
                          'Bestand: ${s.quantity} (Schwelle ${s.parLevel})'),
                      trailing: Chip(
                        label: Text(_label(s.availability)),
                        backgroundColor:
                            _color(context, s.availability).withOpacity(0.15),
                        side:
                            BorderSide(color: _color(context, s.availability)),
                      ),
                      onTap: () => _correct(context, s),
                    );
                  },
                ),
              ),
      ),
    );
  }

  Future<void> _correct(BuildContext context, StockItem s) async {
    final ctrl = TextEditingController();
    final delta = await showDialog<int>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text('Korrektur: ${s.productName}'),
        content: TextField(
          controller: ctrl,
          keyboardType: const TextInputType.numberWithOptions(signed: true),
          decoration: const InputDecoration(
            labelText: 'Differenz (+ auffüllen / − abziehen)',
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(context, int.tryParse(ctrl.text)),
            child: const Text('Buchen'),
          ),
        ],
      ),
    );
    if (delta == null || delta == 0) return;
    final ok =
        await ref.read(managementActionsProvider.notifier).correctInventory(
              machineId: s.machineId,
              productId: s.productId,
              deltaQty: delta,
            );
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
          content: Text(
              ok ? 'Korrektur gebucht.' : 'Fehlgeschlagen (Berechtigung?).')),
    );
  }
}
