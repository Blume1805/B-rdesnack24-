import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../auth/presentation/controllers/auth_providers.dart';
import '../../finance/presentation/screens/datev_export_screen.dart';
import 'screens/b2b_customers_screen.dart';
import 'screens/cancellations_screen.dart';
import 'screens/complaints_screen.dart';
import 'screens/cash_screen.dart';
import 'screens/cleaning_screen.dart';
import 'screens/disposal_screen.dart';
import 'screens/documents_screen.dart';
import 'screens/employees_screen.dart';
import 'screens/filling_screen.dart';
import 'screens/inventory_report_screen.dart';
import 'screens/inventory_screen.dart';
import 'screens/maintenance_screen.dart';
import 'screens/my_signature_tasks_screen.dart';
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
        'DATEV-Export',
        'Buchungsstapel (CSV)',
        Icons.receipt_long_outlined,
        const DatevExportScreen(),
        // Finanz-sensibel: Kachel nur für Gesellschafter/Admins; die RPC
        // erzwingt die Rolle zusätzlich serverseitig.
        visible: p.contains('finance.export'),
        iconColor: AppColors.statusPositive,
        iconBackgroundColor: AppColors.statusPositive.withValues(alpha: 0.12),
        iconBorderColor: AppColors.statusPositive.withValues(alpha: 0.4),
        badge: const _DatevBadge(),
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
      _Module(
        'Kündigungen',
        'Abo-Kündigungen prüfen',
        Icons.unsubscribe_outlined,
        const CancellationsScreen(),
        visible: p.contains('customers.manage'),
      ),
      _Module(
        'Reklamationen',
        'Kundenmeldungen je Kauf',
        Icons.flag_outlined,
        const ComplaintsScreen(),
        visible: p.contains('customers.manage'),
      ),
      const _Module(
        'Zu signieren',
        'Belehrungen & Nachweise',
        Icons.draw_outlined,
        MySignatureTasksScreen(),
        // Für alle authentifizierten Rollen sichtbar — die RPC filtert
        // ohnehin nur die dem User zugewiesenen Aufgaben. Nützlich vor
        // allem für Rolle 'employee'.
        visible: true,
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
                    iconColor: m.iconColor,
                    iconBackgroundColor: m.iconBackgroundColor,
                    iconBorderColor: m.iconBorderColor,
                    badge: m.badge,
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
              child: const Icon(
                Icons.lock_outline,
                size: 32,
                color: AppColors.ink,
              ),
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
    this.iconColor,
    this.iconBackgroundColor,
    this.iconBorderColor,
    this.badge,
  });
  final String label;
  final String description;
  final IconData icon;
  final Widget screen;
  final bool visible;

  /// Optionale Farbüberschreibung — z. B. Grün + Badge für DATEV.
  final Color? iconColor;
  final Color? iconBackgroundColor;
  final Color? iconBorderColor;
  final Widget? badge;
}

/// Kleines grünes "DATEV"-Label auf der Export-Kachel — kennzeichnet das
/// Zielformat (EXTF-Buchungsstapel) rein textlich, ohne das geschützte
/// DATEV-Markenlogo zu reproduzieren.
class _DatevBadge extends StatelessWidget {
  const _DatevBadge();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
      decoration: BoxDecoration(
        color: AppColors.statusPositive.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(AppRadii.sm),
        border: Border.all(
          color: AppColors.statusPositive.withValues(alpha: 0.5),
        ),
      ),
      child: Text(
        'DATEV',
        style: AppTypography.body(
          size: 9,
          weight: FontWeight.w800,
          color: AppColors.statusPositive,
        ).copyWith(letterSpacing: 0.4),
      ),
    );
  }
}
