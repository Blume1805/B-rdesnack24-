import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../auth/presentation/controllers/auth_providers.dart';
import '../../data/automaten_verwaltung.dart';
import '../../domain/entities/machine.dart';
import '../controllers/management_providers.dart';
import '../widgets/automat_formular.dart';
import 'machine_stock_screen.dart';

/// Inventur — Übersicht der Automaten; Auswahl führt zum Echtzeit-Bestand.
///
/// Seit 19.11.2026 lassen sich Automaten hier auch pflegen (Recht
/// `inventory.edit`): anlegen (+), bearbeiten (Name, Kennung, Art,
/// Standort), stilllegen und wieder in Betrieb nehmen. Löschen gibt es
/// bewusst nicht: Am Automaten hängen Bestand, Protokolle und Verkäufe.
class InventoryScreen extends ConsumerWidget {
  const InventoryScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final machines = ref.watch(machinesProvider);
    final darfPflegen = ref.watch(currentPermissionsProvider).maybeWhen(
          data: (p) => p.contains('inventory.edit'),
          orElse: () => false,
        );
    final liste = machines.valueOrNull ?? const <Machine>[];
    final kennungen = [for (final m in liste) m.code];

    return MarkenScaffold(
      appBar: HeroAppBar(
        title: const Text('Inventur'),
        actions: [
          if (darfPflegen)
            IconButton(
              tooltip: 'Automat hinzufügen',
              icon: const Icon(Icons.add),
              onPressed: () => automatBearbeiten(
                context,
                vorhandeneKennungen: kennungen,
              ),
            ),
        ],
      ),
      body: machines.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (list) {
          final inBetrieb = list.where((m) => m.inBetrieb).toList();
          final still = list.where((m) => !m.inBetrieb).toList();
          return RefreshIndicator(
            onRefresh: () async => ref.invalidate(machinesProvider),
            child: ListView(
              children: [
                if (list.isEmpty)
                  _Leer(
                    darfPflegen: darfPflegen,
                    onAnlegen: () => automatBearbeiten(
                      context,
                      vorhandeneKennungen: kennungen,
                    ),
                  ),
                for (final m in inBetrieb)
                  _AutomatZeile(
                    automat: m,
                    darfPflegen: darfPflegen,
                    kennungen: kennungen,
                  ),
                if (still.isNotEmpty) ...[
                  const Padding(
                    padding: EdgeInsets.fromLTRB(
                      AppSpacing.s5,
                      AppSpacing.s5,
                      AppSpacing.s5,
                      AppSpacing.s2,
                    ),
                    child: Text('Stillgelegt'),
                  ),
                  for (final m in still)
                    _AutomatZeile(
                      automat: m,
                      darfPflegen: darfPflegen,
                      kennungen: kennungen,
                    ),
                ],
              ],
            ),
          );
        },
      ),
    );
  }
}

class _Leer extends StatelessWidget {
  const _Leer({required this.darfPflegen, required this.onAnlegen});
  final bool darfPflegen;
  final VoidCallback onAnlegen;

  @override
  Widget build(BuildContext context) {
    final text = Theme.of(context).textTheme;
    return Padding(
      padding: const EdgeInsets.all(AppSpacing.s5),
      child: AppCard(
        color: AppColors.surfaceAlt,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Noch kein Automat angelegt.', style: text.titleMedium),
            const SizedBox(height: AppSpacing.s2),
            Text(
              darfPflegen
                  ? 'Lege den ersten Automaten mit Namen, Kennung und Standort '
                      'an. Danach erscheint er hier mit seinem Bestand.'
                  : 'Automaten legt an, wer das Recht „Inventur bearbeiten“ hat.',
              style: text.bodyMedium?.copyWith(color: AppColors.textMuted),
            ),
            if (darfPflegen) ...[
              const SizedBox(height: AppSpacing.s4),
              FilledButton.icon(
                onPressed: onAnlegen,
                icon: const Icon(Icons.add),
                label: const Text('Automat hinzufügen'),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

enum _Aktion { bearbeiten, stilllegen, inBetrieb }

class _AutomatZeile extends ConsumerWidget {
  const _AutomatZeile({
    required this.automat,
    required this.darfPflegen,
    required this.kennungen,
  });

  final Machine automat;
  final bool darfPflegen;
  final List<String> kennungen;

  Future<void> _status(
    BuildContext context,
    WidgetRef ref, {
    required bool inBetrieb,
  }) async {
    final m = automat;
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(
          inBetrieb
              ? '${m.code} wieder in Betrieb nehmen?'
              : '${m.code} stilllegen?',
        ),
        content: Text(
          inBetrieb
              ? 'Der Automat erscheint wieder im Automaten-Finder der '
                  'Kunden-App.'
              : 'Der Automat verschwindet aus dem Automaten-Finder der '
                  'Kunden-App. Bestand, Protokolle und Verkäufe bleiben '
                  'gespeichert. Du kannst ihn jederzeit wieder in Betrieb '
                  'nehmen.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(context, true),
            child: Text(inBetrieb ? 'In Betrieb nehmen' : 'Stilllegen'),
          ),
        ],
      ),
    );
    if (ok != true || !context.mounted) return;
    final messenger = ScaffoldMessenger.of(context);
    try {
      await ref
          .read(automatenVerwaltungProvider)
          .statusSetzen(m.id, inBetrieb: inBetrieb);
      ref.invalidate(machinesProvider);
      messenger.showSnackBar(
        SnackBar(
          content: Text(
            inBetrieb
                ? '${m.code} ist wieder in Betrieb.'
                : '${m.code} ist stillgelegt.',
          ),
        ),
      );
    } catch (e) {
      messenger.showSnackBar(SnackBar(content: Text(automatFehlerText(e))));
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final m = automat;
    final ort = [
      if ((m.locationName ?? '').isNotEmpty) m.locationName!,
      if ((m.city ?? '').isNotEmpty) m.city!,
    ].join(' · ');
    return Column(
      children: [
        Opacity(
          opacity: m.inBetrieb ? 1 : 0.6,
          child: ListTile(
            leading: Icon(m.isCooled ? Icons.ac_unit : Icons.kitchen),
            title: Text('${m.code} · ${m.name}'),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(ort.isEmpty ? automatenArt(m.type) : ort),
                if (!m.inBetrieb) ...[
                  const SizedBox(height: AppSpacing.s1),
                  const StatusBadge(
                    label: 'Stillgelegt',
                    tone: StatusTone.warning,
                  ),
                ],
              ],
            ),
            trailing: darfPflegen
                ? PopupMenuButton<_Aktion>(
                    tooltip: 'Automat verwalten',
                    icon: const Icon(Icons.more_vert),
                    onSelected: (a) {
                      switch (a) {
                        case _Aktion.bearbeiten:
                          automatBearbeiten(
                            context,
                            automat: m,
                            vorhandeneKennungen: kennungen,
                          );
                        case _Aktion.stilllegen:
                          _status(context, ref, inBetrieb: false);
                        case _Aktion.inBetrieb:
                          _status(context, ref, inBetrieb: true);
                      }
                    },
                    itemBuilder: (_) => [
                      const PopupMenuItem(
                        value: _Aktion.bearbeiten,
                        child: ListTile(
                          leading: Icon(Icons.edit_outlined),
                          title: Text('Bearbeiten'),
                          subtitle: Text('Name, Kennung, Standort'),
                        ),
                      ),
                      if (m.inBetrieb)
                        const PopupMenuItem(
                          value: _Aktion.stilllegen,
                          child: ListTile(
                            leading: Icon(Icons.pause_circle_outline),
                            title: Text('Stilllegen'),
                          ),
                        )
                      else
                        const PopupMenuItem(
                          value: _Aktion.inBetrieb,
                          child: ListTile(
                            leading: Icon(Icons.play_circle_outline),
                            title: Text('Wieder in Betrieb nehmen'),
                          ),
                        ),
                    ],
                  )
                : const Icon(Icons.chevron_right),
            onTap: () => Navigator.of(context).push(
              MaterialPageRoute(
                builder: (_) => MachineStockScreen(
                  machineId: m.id,
                  title: '${m.code} · ${m.name}',
                ),
              ),
            ),
          ),
        ),
        const Divider(height: 1),
      ],
    );
  }
}
