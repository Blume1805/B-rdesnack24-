import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/utils/formatters.dart';
import '../controllers/approvals_providers.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Gesellschafter-Freigaben (Dual-Control). Ein aktiver Gesellschafter gibt
/// neue Gesellschafter frei oder lehnt sie ab. Selbstfreigabe ist serverseitig
/// ausgeschlossen.
class ApprovalsScreen extends ConsumerWidget {
  const ApprovalsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final approvals = ref.watch(pendingApprovalsProvider);
    final busy = ref.watch(approvalsActionProvider).isLoading;

    return Scaffold(
      appBar: const HeroAppBar(title: Text('Gesellschafter-Freigaben')),
      body: approvals.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (items) {
          if (items.isEmpty) {
            return const Center(child: Text('Keine offenen Freigaben.'));
          }
          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: items.length,
            itemBuilder: (context, i) {
              final a = items[i];
              return Card(
                child: ListTile(
                  title: Text(a.requestedForName ?? a.requestedForEmail),
                  subtitle: Text(
                    'E-Mail: ${a.requestedForEmail}\n'
                    'Beantragt von: ${a.requestedByEmail ?? '—'} · '
                    '${Formatters.date(a.createdAt)}',
                  ),
                  isThreeLine: true,
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        tooltip: 'Ablehnen',
                        icon: const Icon(Icons.close, color: Colors.red),
                        onPressed: busy
                            ? null
                            : () => _decide(context, ref, a.id, false),
                      ),
                      IconButton(
                        tooltip: 'Freigeben',
                        icon: const Icon(Icons.check, color: Colors.green),
                        onPressed: busy
                            ? null
                            : () => _decide(context, ref, a.id, true),
                      ),
                    ],
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }

  Future<void> _decide(
    BuildContext context,
    WidgetRef ref,
    String id,
    bool approve,
  ) async {
    final ok =
        await ref.read(approvalsActionProvider.notifier).decide(id, approve);
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          ok
              ? (approve ? 'Gesellschafter freigegeben.' : 'Antrag abgelehnt.')
              : 'Aktion fehlgeschlagen (ggf. keine Berechtigung).',
        ),
      ),
    );
  }
}
