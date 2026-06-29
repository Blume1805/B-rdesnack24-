import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'screens/finder_tab.dart';
import 'screens/history_tab.dart';
import 'screens/offers_tab.dart';
import 'screens/profile_tab.dart';

/// Kategorie 3 — Kundenbereich. Eigene untere Navigation (nur für Kunden sichtbar).
class CustomerScreen extends ConsumerStatefulWidget {
  const CustomerScreen({super.key});

  @override
  ConsumerState<CustomerScreen> createState() => _CustomerScreenState();
}

class _CustomerScreenState extends ConsumerState<CustomerScreen> {
  int _index = 0;

  static const _tabs = [
    OffersTab(),
    FinderTab(),
    HistoryTab(),
    ProfileTab(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(index: _index, children: _tabs),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _index,
        onDestinationSelected: (i) => setState(() => _index = i),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.local_offer), label: 'Angebote'),
          NavigationDestination(icon: Icon(Icons.place), label: 'Automaten'),
          NavigationDestination(icon: Icon(Icons.history), label: 'Verlauf'),
          NavigationDestination(icon: Icon(Icons.person), label: 'Profil'),
        ],
      ),
    );
  }
}
