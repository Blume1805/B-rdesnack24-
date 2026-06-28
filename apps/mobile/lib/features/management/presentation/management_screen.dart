import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../auth/presentation/controllers/auth_providers.dart';
import 'screens/cash_screen.dart';
import 'screens/cleaning_screen.dart';
import 'screens/disposal_screen.dart';
import 'screens/documents_screen.dart';
import 'screens/employees_screen.dart';
import 'screens/filling_screen.dart';
import 'screens/inventory_screen.dart';
import 'screens/maintenance_screen.dart';
import 'screens/temperature_screen.dart';

/// Kategorie 2 — Unternehmensverwaltung. Modul-Kacheln werden nach den
/// effektiven Berechtigungen (RBAC/ABAC) ein-/ausgeblendet. Autorisierung
/// erfolgt zusätzlich serverseitig (RLS).
class ManagementScreen extends ConsumerWidget {
  const ManagementScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final perms = ref.watch(currentPermissionsProvider);
    return Scaffold(
      appBar: AppBar(title: const Text('Unternehmensverwaltung')),
      body: perms.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (p) {
          final modules = <_Module>[
            _Module('Inventur', Icons.inventory_2, const InventoryScreen(),
                visible: p.contains('inventory.view') || p.contains('inventory.edit')),
            _Module('Befüllung', Icons.add_box, const FillingScreen(),
                visible: p.contains('haccp.fill')),
            _Module('Temperatur', Icons.thermostat, const TemperatureScreen(),
                visible: p.contains('haccp.temperature')),
            _Module('Reinigung', Icons.cleaning_services, const CleaningScreen(),
                visible: p.contains('haccp.cleaning')),
            _Module('Vernichtung', Icons.delete_forever, const DisposalScreen(),
                visible: p.contains('haccp.disposal')),
            _Module('Wartung', Icons.build, const MaintenanceScreen(),
                visible: p.contains('haccp.maintenance')),
            _Module('Geldentnahme', Icons.payments, const CashScreen(),
                visible: p.contains('cash.collect')),
            _Module('Dokumente', Icons.folder, const DocumentsScreen(),
                visible: p.contains('documents.view') || p.contains('documents.edit')),
            _Module('Mitarbeiter', Icons.group, const EmployeesScreen(),
                visible: p.contains('employees.manage')),
          ].where((m) => m.visible).toList();

          if (modules.isEmpty) {
            return const Center(
              child: Padding(
                padding: EdgeInsets.all(24),
                child: Text(
                  'Für dein Konto sind noch keine Module freigeschaltet. '
                  'Bitte wende dich an einen Gesellschafter.',
                  textAlign: TextAlign.center,
                ),
              ),
            );
          }

          return GridView.count(
            crossAxisCount: 2,
            padding: const EdgeInsets.all(16),
            mainAxisSpacing: 12,
            crossAxisSpacing: 12,
            childAspectRatio: 1.1,
            children: [
              for (final m in modules)
                Card(
                  child: InkWell(
                    onTap: () => Navigator.of(context).push(
                      MaterialPageRoute(builder: (_) => m.screen),
                    ),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(m.icon, size: 40,
                            color: Theme.of(context).colorScheme.primary),
                        const SizedBox(height: 12),
                        Text(m.label,
                            style: Theme.of(context).textTheme.titleMedium),
                      ],
                    ),
                  ),
                ),
            ],
          );
        },
      ),
    );
  }
}

class _Module {
  const _Module(this.label, this.icon, this.screen, {required this.visible});
  final String label;
  final IconData icon;
  final Widget screen;
  final bool visible;
}
