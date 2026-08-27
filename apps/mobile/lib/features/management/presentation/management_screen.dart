import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/theme/app_tokens.dart';
import '../../../core/theme/app_typography.dart';
import '../../../core/widgets/design_system/design_system.dart';
import '../../auth/presentation/controllers/auth_providers.dart';
import '../../finance/presentation/screens/datev_export_screen.dart';
import '../domain/verwaltungs_struktur.dart';
import 'screens/anlagen_screen.dart';
import 'screens/approvals_screen.dart';
import 'screens/b2b_customers_screen.dart';
import 'screens/bildregister_screen.dart';
import 'screens/firmenkunden_screen.dart';
import 'screens/cancellations_screen.dart';
import 'screens/cash_screen.dart';
import 'screens/cleaning_screen.dart';
import 'screens/complaints_screen.dart';
import 'screens/disposal_screen.dart';
import 'screens/documents_screen.dart';
import 'screens/employees_screen.dart';
import 'screens/filling_screen.dart';
import 'screens/inventory_hub_screen.dart';
import 'screens/maintenance_screen.dart';
import 'screens/my_signature_tasks_screen.dart';
import 'screens/telemetry_hub_screen.dart';
import 'screens/temperature_screen.dart';
import 'screens/werbeflaechen_screen.dart';
import 'widgets/anhang_sheet.dart';
import 'widgets/oberbegriff_gruppe.dart';

/// Kategorie 2 — Unternehmensverwaltung.
///
/// Bis zum 25.08.2026 lagen hier 17 gleichrangige Kacheln in einem Raster.
/// Der Auftraggeber hat fünf Oberbegriffe vorgegeben; jeder klappt seine
/// Funktionen auf. Die Zuordnung selbst steht in
/// `domain/verwaltungs_struktur.dart`, nicht hier.
///
/// Zugeklappt ist der Ausgangszustand, weil genau das verlangt war: „Durch
/// Anklicken der Oberbegriffe erscheinen dann die jeweiligen Unterbegriffe."
/// Damit der Bildschirm dabei nicht leer wirkt, trägt jede Kopfzeile eine
/// erklärende Zeile und die Anzahl.
///
/// Kacheln werden nach den effektiven Berechtigungen ein- und ausgeblendet.
/// Autorisierung erfolgt zusätzlich serverseitig (RLS und RPC).
class ManagementScreen extends ConsumerStatefulWidget {
  const ManagementScreen({super.key});

  @override
  ConsumerState<ManagementScreen> createState() => _ManagementScreenState();
}

class _ManagementScreenState extends ConsumerState<ManagementScreen> {
  final Set<Oberbegriff> _offen = <Oberbegriff>{};

  @override
  Widget build(BuildContext context) {
    final perms = ref.watch(currentPermissionsProvider);
    return perms.when(
      loading: () => const Center(
        child: CircularProgressIndicator(color: AppColors.brand),
      ),
      error: (e, _) => Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s6),
          child: Text(
            'Berechtigungen konnten nicht geladen werden: $e',
            style: AppTypography.body(size: 14),
          ),
        ),
      ),
      data: (p) {
        final sichtbar =
            _funktionen().where((f) => f.sichtbar(p)).toList(growable: false);
        if (sichtbar.isEmpty) return const _KeineModule();

        final gruppen = [
          for (final g in oberbegriffe)
            (
              daten: g,
              eintraege: sichtbar
                  .where((f) => f.gruppe == g.id)
                  .toList(growable: false)
            ),
        ].where((g) => g.eintraege.isNotEmpty).toList(growable: false);

        // Bleibt nur eine Gruppe übrig, gibt es nichts zu wählen. Wer als
        // Mitarbeiter zwei Funktionen sieht, soll sie sehen und nicht erst
        // eine Überschrift aufklappen müssen.
        final nurEine = gruppen.length == 1;

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
              title: 'Betrieb und Unterlagen',
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Tippe einen Bereich an, um seine Funktionen zu sehen. Über das '
              'Plus an einer Kachel legst Du Unterlagen dazu ab, als Datei '
              'oder als Foto.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s5),
            for (final g in gruppen) ...[
              OberbegriffGruppe(
                daten: g.daten,
                anzahl: g.eintraege.length,
                offen: nurEine || _offen.contains(g.daten.id),
                onUmschalten: () => setState(() {
                  if (!_offen.remove(g.daten.id)) _offen.add(g.daten.id);
                }),
                inhalt: _Kachelraster(eintraege: g.eintraege),
              ),
              const SizedBox(height: AppSpacing.s3),
            ],
          ],
        );
      },
    );
  }

  /// Alle Funktionen mit ihrer Gruppe, ihrem Recht und ihrem Ablageordner.
  List<Verwaltungsfunktion> _funktionen() => <Verwaltungsfunktion>[
        // ── Protokolle ──────────────────────────────────────────────────
        Verwaltungsfunktion(
          gruppe: Oberbegriff.protokolle,
          label: 'Befüllung',
          beschreibung: 'Nachfüll-Protokoll',
          icon: Icons.add_box_outlined,
          ziel: () => const FillingScreen(),
          sichtbar: (p) => p.contains('haccp.fill'),
          ablageOrdner: 'protokolle',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.protokolle,
          label: 'Reinigung',
          beschreibung: 'Hygieneplan',
          icon: Icons.cleaning_services_outlined,
          ziel: () => const CleaningScreen(),
          sichtbar: (p) => p.contains('haccp.cleaning'),
          ablageOrdner: 'protokolle',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.protokolle,
          label: 'Temperatur',
          beschreibung: 'HACCP, höchstens 7 °C',
          icon: Icons.thermostat_outlined,
          ziel: () => const TemperatureScreen(),
          sichtbar: (p) => p.contains('haccp.temperature'),
          ablageOrdner: 'protokolle',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.protokolle,
          label: 'Wartung',
          beschreibung: 'Technik-Protokolle',
          icon: Icons.build_outlined,
          ziel: () => const MaintenanceScreen(),
          sichtbar: (p) => p.contains('haccp.maintenance'),
          ablageOrdner: 'wartung',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.protokolle,
          label: 'Vernichtung',
          beschreibung: 'MHD und Verderb',
          icon: Icons.delete_outline,
          ziel: () => const DisposalScreen(),
          sichtbar: (p) => p.contains('haccp.disposal'),
          ablageOrdner: 'protokolle',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.protokolle,
          label: 'Geldentnahme',
          beschreibung: 'Kassenprotokoll',
          icon: Icons.payments_outlined,
          ziel: () => const CashScreen(),
          sichtbar: (p) => p.contains('cash.collect'),
          ablageOrdner: 'protokolle',
        ),

        // ── Vorgänge & Prozesse ─────────────────────────────────────────
        Verwaltungsfunktion(
          gruppe: Oberbegriff.vorgaenge,
          label: 'Freigaben',
          beschreibung: 'Dokumente prüfen',
          icon: Icons.rule_folder_outlined,
          ziel: () => const DocumentApprovalsScreen(),
          sichtbar: (p) => p.contains('customers.manage'),
          ablageOrdner: 'sonstiges',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.vorgaenge,
          label: 'Zu signieren',
          beschreibung: 'Belehrungen und Nachweise',
          icon: Icons.draw_outlined,
          ziel: () => const MySignatureTasksScreen(),
          // Für alle angemeldeten Rollen sichtbar, die RPC liefert ohnehin
          // nur die eigenen Aufgaben. Wichtig für die Rolle 'employee'.
          sichtbar: (_) => true,
          ablageOrdner: 'ifsg',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.vorgaenge,
          label: 'Mitarbeiter',
          beschreibung: 'Einladen und schulen',
          icon: Icons.group_outlined,
          ziel: () => const EmployeesScreen(),
          sichtbar: (p) => p.contains('employees.manage'),
          ablageOrdner: 'arbeitsvertrag',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.vorgaenge,
          label: 'Firmenkunden',
          beschreibung: 'Unternehmen, Mitarbeiter, Budgets, Abrechnung',
          icon: Icons.domain_outlined,
          ziel: () => const FirmenkundenScreen(),
          // Eine Firma wird bei uns angelegt, nicht von ihr selbst — deshalb
          // dasselbe Recht wie die Firmenverwaltung in der Datenbank.
          sichtbar: (p) => p.contains('businesses.manage'),
          ablageOrdner: 'sonstiges',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.vorgaenge,
          label: 'Werbeflächen',
          beschreibung: 'Flächen am Automaten, Mieter, Motivfreigabe',
          icon: Icons.campaign_outlined,
          ziel: () => const WerbeflaechenScreen(),
          // Dasselbe Recht wie die Standortverwaltung: Die Flächen hängen an
          // unseren Automaten — wer die verwaltet, verwaltet auch sie. Ein
          // eigenes Recht wäre beim nächsten Rollenwechsel vergessen worden
          // (begründet im Kopf von Migration 0146).
          sichtbar: (p) => p.contains('locations.manage'),
          ablageOrdner: 'sonstiges',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.vorgaenge,
          label: 'Bilder',
          beschreibung: 'Herkunft und Bearbeitung je Produktbild',
          icon: Icons.photo_library_outlined,
          ziel: () => const BildregisterScreen(),
          // Dieselbe Berechtigung wie der Produktkatalog: Wer Produkte
          // pflegt, pflegt auch deren Bilddokumentation.
          sichtbar: (p) => p.contains('inventory.view'),
          ablageOrdner: 'sonstiges',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.vorgaenge,
          label: 'Telemetrie',
          beschreibung: 'IoT, Live, Slots',
          icon: Icons.sensors,
          ziel: () => const TelemetryHubScreen(),
          sichtbar: (p) => p.contains('customers.manage'),
          ablageOrdner: 'wartung',
        ),

        // ── Serviceanliegen ─────────────────────────────────────────────
        Verwaltungsfunktion(
          gruppe: Oberbegriff.serviceanliegen,
          label: 'Reklamationen',
          beschreibung: 'Kundenmeldungen je Kauf',
          icon: Icons.flag_outlined,
          ziel: () => const ComplaintsScreen(),
          sichtbar: (p) => p.contains('customers.manage'),
          ablageOrdner: 'sonstiges',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.serviceanliegen,
          label: 'Kündigungen',
          beschreibung: 'Abo-Kündigungen prüfen',
          icon: Icons.unsubscribe_outlined,
          ziel: () => const CancellationsScreen(),
          sichtbar: (p) => p.contains('customers.manage'),
          ablageOrdner: 'sonstiges',
        ),

        // ── Dokumente ───────────────────────────────────────────────────
        // Eine Kachel, kein Ordner je Vertragsart: Die Ordner liegen in
        // `document_folders` und werden dort gepflegt. Sie hier ein zweites
        // Mal als Kacheln zu führen, hiesse dieselbe Liste an zwei Stellen
        // zu haben, die auseinanderlaufen können.
        Verwaltungsfunktion(
          gruppe: Oberbegriff.dokumente,
          label: 'Archiv',
          beschreibung: 'Verträge, Bescheide, Policen',
          icon: Icons.folder_outlined,
          ziel: () => const DocumentsScreen(),
          sichtbar: (p) =>
              p.contains('documents.view') || p.contains('documents.edit'),
          ablageOrdner: 'sonstiges',
        ),

        // ── Steuern ─────────────────────────────────────────────────────
        Verwaltungsfunktion(
          gruppe: Oberbegriff.steuern,
          label: 'DATEV-Export',
          beschreibung: 'Buchungsstapel als CSV',
          icon: Icons.receipt_long_outlined,
          ziel: () => const DatevExportScreen(),
          // Finanz-sensibel: nur Gesellschafter und Admins; die RPC
          // erzwingt die Rolle zusätzlich serverseitig.
          sichtbar: (p) => p.contains('finance.export'),
          ablageOrdner: 'steuern',
          iconColor: AppColors.statusPositive,
          iconBackgroundColor: const Color(0x1F5C9A3F),
          iconBorderColor: const Color(0x665C9A3F),
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.steuern,
          label: 'Inventur',
          beschreibung: 'Bestand je Automat und FIFO-Report',
          icon: Icons.inventory_2_outlined,
          ziel: () => const InventoryHubScreen(),
          sichtbar: (p) =>
              p.contains('inventory.view') || p.contains('inventory.edit'),
          ablageOrdner: 'steuern',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.steuern,
          label: 'Anlagen',
          beschreibung: 'Übersichten zum Jahresabschluss',
          icon: Icons.attach_file_outlined,
          ziel: () => const AnlagenScreen(),
          sichtbar: (p) => p.contains('finance.view'),
          ablageOrdner: 'steuern',
        ),
        Verwaltungsfunktion(
          gruppe: Oberbegriff.steuern,
          label: 'B2B-Kunden',
          beschreibung: 'sevDesk-Export als CSV',
          icon: Icons.download_outlined,
          ziel: () => const B2bCustomersScreen(),
          sichtbar: (p) => p.contains('customers.manage'),
          ablageOrdner: 'steuern',
        ),
      ];
}

class _Kachelraster extends StatelessWidget {
  const _Kachelraster({required this.eintraege});

  final List<Verwaltungsfunktion> eintraege;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final cols = constraints.maxWidth < 460 ? 2 : 3;
        return GridView.count(
          crossAxisCount: cols,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          childAspectRatio: 1.05,
          mainAxisSpacing: AppSpacing.s3,
          crossAxisSpacing: AppSpacing.s3,
          children: [
            for (final f in eintraege)
              ModuleTile(
                icon: f.icon,
                label: f.label,
                description: f.beschreibung,
                iconColor: f.iconColor,
                iconBackgroundColor: f.iconBackgroundColor,
                iconBorderColor: f.iconBorderColor,
                badge: f.badge,
                anhangTooltip: 'Unterlage zu ${f.label} hinzufügen',
                onAnhang:
                    f.ablageOrdner == null ? null : () => _anhang(context, f),
                onTap: () => Navigator.of(context).push(
                  MaterialPageRoute(builder: (_) => f.ziel()),
                ),
              ),
          ],
        );
      },
    );
  }

  Future<void> _anhang(
    BuildContext context,
    Verwaltungsfunktion f,
  ) async {
    final abgelegt = await AnhangSheet.oeffnen(
      context,
      ordner: f.ablageOrdner!,
      kachel: f.label,
    );
    if (!abgelegt || !context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Unterlage liegt im Dokumentenarchiv.'),
      ),
    );
  }
}

class _KeineModule extends StatelessWidget {
  const _KeineModule();

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
              'Für Dein Konto ist noch kein Bereich aktiviert. Bitte wende '
              'Dich an einen Gesellschafter.',
              textAlign: TextAlign.center,
              style: AppTypography.body(size: 14, color: AppColors.textMuted),
            ),
          ],
        ),
      ),
    );
  }
}
