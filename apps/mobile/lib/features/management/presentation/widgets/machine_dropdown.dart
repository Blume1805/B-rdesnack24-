import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../domain/entities/machine.dart';
import '../controllers/management_providers.dart';

/// Wiederverwendbare Automaten-Auswahl (lädt machinesProvider).
class MachineDropdown extends ConsumerWidget {
  const MachineDropdown({
    required this.value,
    required this.onChanged,
    this.label = 'Automat',
    super.key,
  });

  final String? value;
  final ValueChanged<String?> onChanged;
  final String label;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final machines = ref.watch(machinesProvider);
    return machines.when(
      loading: () => const LinearProgressIndicator(),
      error: (e, _) => Text('$e'),
      data: (list) => DropdownButtonFormField<String>(
        initialValue: value,
        isExpanded: true,
        decoration: InputDecoration(labelText: label),
        items: [
          for (final Machine m in list)
            DropdownMenuItem(value: m.id, child: Text('${m.code} · ${m.name}')),
        ],
        onChanged: onChanged,
        validator: (v) => v == null ? 'Pflichtfeld' : null,
      ),
    );
  }
}
