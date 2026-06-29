import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../management/presentation/controllers/management_providers.dart';
import 'availability_screen.dart';

/// Automatenfinder: Liste aller Automaten, Navigation (Google Maps) und
/// Echtzeit-Verfügbarkeit je Automat.
class FinderTab extends ConsumerWidget {
  const FinderTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final machines = ref.watch(machinesProvider);
    return Scaffold(
      appBar: AppBar(title: const Text('Automaten')),
      body: machines.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (list) => ListView.separated(
          itemCount: list.length,
          separatorBuilder: (_, __) => const Divider(height: 1),
          itemBuilder: (context, i) {
            final m = list[i];
            return ListTile(
              leading: Icon(m.isCooled ? Icons.ac_unit : Icons.storefront),
              title: Text(m.name),
              subtitle: Text(m.city ?? ''),
              trailing: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  IconButton(
                    tooltip: 'Navigieren',
                    icon: const Icon(Icons.directions),
                    onPressed: () => _navigate(m.name, m.city),
                  ),
                  const Icon(Icons.chevron_right),
                ],
              ),
              onTap: () => Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (_) =>
                      AvailabilityScreen(machineId: m.id, title: m.name),
                ),
              ),
            );
          },
        ),
      ),
    );
  }

  Future<void> _navigate(String name, String? city) async {
    final query = Uri.encodeComponent([name, if (city != null) city].join(' '));
    final uri = Uri.parse(
      'https://www.google.com/maps/dir/?api=1&destination=$query',
    );
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}
