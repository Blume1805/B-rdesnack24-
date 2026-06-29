import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../../management/presentation/controllers/management_providers.dart';

/// Echtzeit-Produktverfügbarkeit für Kunden (read-only). Abonniert inventory.
class AvailabilityScreen extends ConsumerStatefulWidget {
  const AvailabilityScreen({required this.machineId, required this.title, super.key});

  final String machineId;
  final String title;

  @override
  ConsumerState<AvailabilityScreen> createState() => _AvailabilityScreenState();
}

class _AvailabilityScreenState extends ConsumerState<AvailabilityScreen> {
  RealtimeChannel? _channel;

  @override
  void initState() {
    super.initState();
    _channel = ref
        .read(supabaseClientProvider)
        .channel('avail:${widget.machineId}')
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
            if (mounted) ref.invalidate(machineStockProvider(widget.machineId));
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

  @override
  Widget build(BuildContext context) {
    final stock = ref.watch(machineStockProvider(widget.machineId));
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: stock.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (items) => items.isEmpty
            ? const Center(child: Text('Keine Produktdaten.'))
            : ListView.separated(
                itemCount: items.length,
                separatorBuilder: (_, __) => const Divider(height: 1),
                itemBuilder: (context, i) {
                  final s = items[i];
                  final (label, color, icon) = switch (s.availability) {
                    'out' => ('ausverkauft', Colors.red, Icons.remove_circle),
                    'low' => ('bald leer', Colors.orange, Icons.warning),
                    _ => ('verfügbar', Colors.green, Icons.check_circle),
                  };
                  return ListTile(
                    leading: Icon(icon, color: color),
                    title: Text(s.productName),
                    trailing: Text(label, style: TextStyle(color: color)),
                  );
                },
              ),
      ),
    );
  }
}
