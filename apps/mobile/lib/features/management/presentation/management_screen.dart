import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../auth/presentation/controllers/auth_providers.dart';
import 'screens/b2b_customers_screen.dart';
import 'screens/cash_screen.dart';
import 'screens/cleaning_screen.dart';
import 'screens/disposal_screen.dart';
import 'screens/documents_screen.dart';
import 'screens/employees_screen.dart';
import 'screens/filling_screen.dart';
import 'screens/inventory_report_screen.dart';
import 'screens/inventory_screen.dart';
import 'screens/maintenance_screen.dart';
import 'screens/approvals_screen.dart';
import 'screens/telemetry_hub_screen.dart';
import 'screens/temperature_screen.dart';

/// Kategorie 2 — Unternehmensverwaltung. Modul-Kacheln werden nach den
/// effektiven Berechtigungen (RBAC/ABAC) ein-/ausgeblendet. Autorisierung
/// erfolgt zusätzlich serverseitig (RLS).
class ManagementScreen extends ConsumerWidget {
  const ManagementScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final perms = ref.watch(currentPermissionsProvider);
    return perms.when(
      loading: () => const Center(
        child: CircularProgressIndicator(color: AppColors.brand),
      ),
      error: (e, _) => Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s6),
          child: Text('$e', style: AppTypography.body(size: 14)),
        ),
      ),
      data: (p) {
        final modules = _buildModules(p);
        if (modules.isEmpty) {
          return _EmptyState();
        }
        return _ModuleGrid(modules: modules);
      },
    );
  }

  List<_Module> _buildModules(Set<String> p) {
    return <_Module>[
      _Module(
        'Inventur',
        'Bestand je Automat',
        Icons.inventory_2_outlined,
        const InventoryScreen(),
        visible: p.contains('inventory.view') || p.contains('inventory.edit'),
      ),
      _Module(
        'Befüllung',
        'Nachfüll-Protokoll',
        Icons.add_box_outlined,
        const FillingScreen(),
        visible: p.contains('haccp.fill'),
      ),
      _Module(
        'Temperatur',
        'HACCP · ≤ 7 °C',
        Icons.thermostat_outlined,
        const TemperatureScreen(),
        visible: p.contains('haccp.temperature'),
      ),
      _Module(
        'Reinigung',
        'Hygieneplan',
        Icons.cleaning_services_outlined,
        const CleaningScreen(),
        visible: p.contains('haccp.cleaning'),
      ),
      _Module(
        'Vernichtung',
        'MHD / Verderb',
        Icons.delete_outline,
        const DisposalScreen(),
        visible: p.contains('haccp.disposal'),
      ),
      _Module(
        'Wartung',
        'Technik-Protokolle',
        Icons.build_outlined,
        const MaintenanceScreen(),
        visible: p.contains('haccp.maintenance'),
      ),
      _Module(
        'Geldentnahme',
        'Kassenprotokoll',
        Icons.payments_outlined,
        const CashScreen(),
        visible: p.contains('cash.collect'),
      ),
      _Module(
        'Dokumente',
        'Archiv & Versionen',
        Icons.folder_outlined,
        const DocumentsScreen(),
        visible: p.contains('documents.view') || p.contains('documents.edit'),
      ),
      _Module(
        'Mitarbeiter',
        'Einladen & Schulen',
        Icons.group_outlined,
        const EmployeesScreen(),
        visible: p.contains('employees.manage'),
      ),
      _Module(
        'B2B-Kunden',
        'sevDesk-CSV-Export',
        Icons.download_outlined,
        const B2bCustomersScreen(),
        // Sichtbar für alle Gesellschafter/Admins mit customers.manage.
        visible: p.contains('customers.manage'),
      ),
      _Module(
        'Inventur',
        'PDF-Report Zeitraum',
        Icons.inventory_2_outlined,
        const InventoryReportScreen(),
        // Nur Systemadministrator/Vollzugriff — Server-RPC prüft zusätzlich
        visible: p.contains('customers.manage'),
      ),
      _Module(
        'Telemetrie',
        'IoT · Live · Slots',
        Icons.sensors,
        const TelemetryHubScreen(),
        visible: p.contains('customers.manage'),
      ),
      _Module(
        'Freigaben',
        'Dokumente prüfen',
        Icons.rule_folder_outlined,
        const DocumentApprovalsScreen(),
        visible: p.contains('customers.manage'),
      ),
    ].where((m) => m.visible).toList();
  }
}

class _ModuleGrid extends StatelessWidget {
  const _ModuleGrid({required this.modules});
  final List<_Module> modules;

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s5,
        AppSpacing.s5,
        AppSpacing.s5,
        AppSpacing.s8,
      ),
      children: [
        const SectionHeader(
          eyebrow: 'Verwaltung',
          title: 'Betriebsprotokolle',
        ),
        const SizedBox(height: AppSpacing.s2),
        Text(
          'Digitale HACCP-, Reinigungs- und Bestandsprotokolle — revisionssicher und GoBD-konform.',
          style: AppTypography.body(size: 13, color: AppColors.textMuted),
        ),
        const SizedBox(height: AppSpacing.s5),
        LayoutBuilder(
          builder: (context, constraints) {
            final cols = constraints.maxWidth < 500 ? 2 : 3;
            return GridView.count(
              crossAxisCount: cols,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              childAspectRatio: 1.05,
              mainAxisSpacing: AppSpacing.s3,
              crossAxisSpacing: AppSpacing.s3,
              children: [
                for (final m in modules)
                  ModuleTile(
                    icon: m.icon,
                    label: m.label,
                    description: m.description,
                    onTap: () => Navigator.of(context).push(
                      MaterialPageRoute(builder: (_) => m.screen),
                    ),
                  ),
              ],
            );
          },
        ),
      ],
    );
  }
}

class _EmptyState extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(AppSpacing.s6),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 72,
              height: 72,
              decoration: BoxDecoration(
                color: AppColors.brandLight,
                shape: BoxShape.circle,
                border: Border.all(color: AppColors.brand),
              ),
              child: const Icon(Icons.lock_outline, size: 32, color: AppColors.ink),
            ),
            const SizedBox(height: AppSpacing.s4),
            Text(
              'Keine Module freigeschaltet',
              style: AppTypography.display(size: 20, weight: FontWeight.w700),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Für dein Konto sind noch keine Module aktiviert. Bitte wende dich an einen Gesellschafter.',
              textAlign: TextAlign.center,
              style: AppTypography.body(size: 14, color: AppColors.textMuted),
            ),
          ],
        ),
      ),
    );
  }
}

class _Module {
  const _Module(
    this.label,
    this.description,
    this.icon,
    this.screen, {
    required this.visible,
  });
  final String label;
  final String description;
  final IconData icon;
  final Widget screen;
  final bool visible;
}
