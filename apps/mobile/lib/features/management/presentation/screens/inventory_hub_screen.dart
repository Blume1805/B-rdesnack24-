import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/management_providers.dart';
import 'inventory_report_screen.dart';
import 'machine_stock_screen.dart';

/// Inventur an einer Stelle: Bestand je Automat und FIFO-Report.
///
/// Vorgabe des Auftraggebers vom 25.08.2026: „Inventur je Automat soll
/// künftig über die Inventur abgebildet werden, also keine separate
/// Funktion."
///
/// Vorher standen zwei Kacheln nebeneinander, beide mit der Beschriftung
/// „Inventur" und beide mit demselben Symbol. Welche man brauchte, stand nur
/// in der kleinen Unterzeile („Bestand je Automat" gegen „PDF-Report
/// Zeitraum"). Jetzt ist es eine Kachel mit zwei Ansichten.
class InventoryHubScreen extends ConsumerStatefulWidget {
  const InventoryHubScreen({super.key});

  @override
  ConsumerState<InventoryHubScreen> createState() => _InventoryHubScreenState();
}

enum _Ansicht { bestand, report }

class _InventoryHubScreenState extends ConsumerState<InventoryHubScreen> {
  _Ansicht _ansicht = _Ansicht.bestand;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Inventur')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s4,
              AppSpacing.s5,
              AppSpacing.s3,
            ),
            child: SegmentedButton<_Ansicht>(
              segments: const [
                ButtonSegment(
                  value: _Ansicht.bestand,
                  icon: Icon(Icons.kitchen_outlined, size: 18),
                  label: Text('Bestand'),
                ),
                ButtonSegment(
                  value: _Ansicht.report,
                  icon: Icon(Icons.summarize_outlined, size: 18),
                  label: Text('Report'),
                ),
              ],
              selected: {_ansicht},
              showSelectedIcon: false,
              onSelectionChanged: (auswahl) =>
                  setState(() => _ansicht = auswahl.first),
            ),
          ),
          Expanded(
            child: _ansicht == _Ansicht.bestand
                ? const _BestandJeAutomat()
                : const InventoryReportScreen(eingebettet: true),
          ),
        ],
      ),
    );
  }
}

/// Die Automatenliste, bis zum 25.08.2026 eine eigene Kachel „Inventur".
class _BestandJeAutomat extends ConsumerWidget {
  const _BestandJeAutomat();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final machines = ref.watch(machinesProvider);
    return machines.when(
      loading: () => const Center(
        child: CircularProgressIndicator(color: AppColors.brand),
      ),
      error: (e, _) => Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s6),
          child: Text(
            'Automaten konnten nicht geladen werden: $e',
            style: AppTypography.body(size: 14),
          ),
        ),
      ),
      data: (list) {
        if (list.isEmpty) {
          return Center(
            child: Padding(
              padding: const EdgeInsets.all(AppSpacing.s6),
              child: Text(
                'Noch kein Automat angelegt.',
                style: AppTypography.body(
                  size: 14,
                  color: AppColors.textMuted,
                ),
              ),
            ),
          );
        }
        return ListView.separated(
          itemCount: list.length,
          separatorBuilder: (_, __) => const Divider(
            height: 1,
            color: AppColors.borderSubtle,
          ),
          itemBuilder: (context, i) {
            final m = list[i];
            final titel = '${m.code} ${m.name}';
            return ListTile(
              leading: Icon(
                m.isCooled ? Icons.ac_unit : Icons.kitchen,
                color: AppColors.ink,
              ),
              title: Text(
                titel,
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
              subtitle: Text(
                m.city ?? 'Ohne Standort',
                style: AppTypography.body(
                  size: 12,
                  color: AppColors.textMuted,
                ),
              ),
              trailing: const Icon(
                Icons.chevron_right,
                color: AppColors.textMuted,
              ),
              onTap: () => Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (_) => MachineStockScreen(
                    machineId: m.id,
                    title: titel,
                  ),
                ),
              ),
            );
          },
        );
      },
    );
  }
}
