import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/utils/formatters.dart';
import '../controllers/customer_providers.dart';

/// Verlauf: individuelle Preise, Kaufhistorie und Empfehlungen.
class HistoryTab extends ConsumerWidget {
  const HistoryTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final prices = ref.watch(myPricesProvider);
    final purchases = ref.watch(myPurchasesProvider);
    final recos = ref.watch(myRecommendationsProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Mein Verlauf')),
      body: RefreshIndicator(
        onRefresh: () async {
          ref
            ..invalidate(myPricesProvider)
            ..invalidate(myPurchasesProvider)
            ..invalidate(myRecommendationsProvider);
        },
        child: ListView(
          padding: const EdgeInsets.all(12),
          children: [
            _section(context, 'Meine Preise'),
            prices.when(
              loading: () => const LinearProgressIndicator(),
              error: (e, _) => Text('$e'),
              data: (list) => list.isEmpty
                  ? const _Empty('Keine individuellen Preise hinterlegt.')
                  : Column(
                      children: [
                        for (final p in list)
                          Card(
                            child: ListTile(
                              dense: true,
                              title: Text(p.productName),
                              trailing: Text(Formatters.euro(p.priceNet)),
                            ),
                          ),
                      ],
                    ),
            ),
            const SizedBox(height: 16),
            _section(context, 'Empfehlungen für dich'),
            recos.when(
              loading: () => const LinearProgressIndicator(),
              error: (e, _) => Text('$e'),
              data: (list) => list.isEmpty
                  ? const _Empty('Noch keine Empfehlungen.')
                  : Column(
                      children: [
                        for (final r in list)
                          Card(
                            child: ListTile(
                              dense: true,
                              leading: const Icon(Icons.recommend),
                              title: Text(r.productName),
                              subtitle: r.reason != null ? Text(r.reason!) : null,
                            ),
                          ),
                      ],
                    ),
            ),
            const SizedBox(height: 16),
            _section(context, 'Kaufhistorie'),
            purchases.when(
              loading: () => const LinearProgressIndicator(),
              error: (e, _) => Text('$e'),
              data: (list) => list.isEmpty
                  ? const _Empty('Noch keine Käufe erfasst.')
                  : Column(
                      children: [
                        for (final p in list)
                          Card(
                            child: ListTile(
                              dense: true,
                              leading: const Icon(Icons.receipt_long),
                              title: Text(Formatters.euro(p.totalGross)),
                              subtitle: Text(Formatters.date(p.purchasedAt)),
                            ),
                          ),
                      ],
                    ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _section(BuildContext context, String title) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 8),
        child: Text(title, style: Theme.of(context).textTheme.titleMedium),
      );
}

class _Empty extends StatelessWidget {
  const _Empty(this.text);
  final String text;
  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 12),
        child: Text(text, style: Theme.of(context).textTheme.bodySmall),
      );
}
