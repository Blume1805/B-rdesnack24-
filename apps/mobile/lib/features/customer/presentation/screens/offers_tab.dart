import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/utils/formatters.dart';
import '../controllers/customer_providers.dart';

class OffersTab extends ConsumerWidget {
  const OffersTab({super.key});

  static const _kindLabels = {
    'daily': 'Tagesangebot',
    'weekly': 'Wochenangebot',
    'special': 'Sonderaktion',
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final offers = ref.watch(offersProvider);
    return Scaffold(
      appBar: AppBar(title: const Text('Angebote')),
      body: offers.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('$e')),
        data: (list) => list.isEmpty
            ? const Center(child: Text('Aktuell keine Angebote.'))
            : RefreshIndicator(
                onRefresh: () async => ref.invalidate(offersProvider),
                child: ListView.builder(
                  padding: const EdgeInsets.all(12),
                  itemCount: list.length,
                  itemBuilder: (context, i) {
                    final o = list[i];
                    return Card(
                      child: ListTile(
                        leading: const Icon(Icons.local_offer),
                        title: Text(o.title),
                        subtitle: Text([
                          _kindLabels[o.kind] ?? o.kind,
                          if (o.description != null) o.description!,
                          if (o.validTo != null)
                            'gültig bis ${Formatters.date(o.validTo!)}',
                        ].join('\n')),
                        isThreeLine: o.description != null,
                      ),
                    );
                  },
                ),
              ),
      ),
    );
  }
}
