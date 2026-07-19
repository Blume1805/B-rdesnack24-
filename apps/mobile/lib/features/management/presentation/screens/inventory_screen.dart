import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../controllers/management_providers.dart';
import 'machine_stock_screen.dart';

/// Inventur — Übersicht der Automaten; Auswahl führt zum Echtzeit-Bestand.
class InventoryScreen extends ConsumerWidget {
  const InventoryScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final machines = ref.watch(machinesProvider);
    return Scaffold(
      appBar: AppBar(title: const Text('Inventur')),
      body: machines.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (list) => ListView.separated(
          itemCount: list.length,
          separatorBuilder: (_, __) => const Divider(height: 1),
          itemBuilder: (context, i) {
            final m = list[i];
            return ListTile(
              leading: Icon(m.isCooled ? Icons.ac_unit : Icons.kitchen),
              title: Text('${m.code} · ${m.name}'),
              subtitle: Text(m.city ?? ''),
              trailing: const Icon(Icons.chevron_right),
              onTap: () => Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (_) => MachineStockScreen(
                      machineId: m.id, title: '${m.code} · ${m.name}'),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
