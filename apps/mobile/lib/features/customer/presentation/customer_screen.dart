import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/theme/app_tokens.dart';
import 'screens/customer_qr_screen.dart';
import 'screens/finder_tab.dart';
import 'screens/history_tab.dart';
import 'screens/offers_tab.dart';
import 'screens/onboarding_stories.dart';
import 'screens/profile_tab.dart';
import 'widgets/customer_chatbot.dart';

/// Kategorie 3 — Kundenbereich. Eigene untere Navigation (nur für Kunden
/// sichtbar) mit schwebendem QR-Kundenkarten-Button in der Mitte.
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
  void initState() {
    super.initState();
    // Onboarding-Stories beim ersten Öffnen zeigen.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      maybeShowOnboardingStories(context);
    });
  }

  void _openQr() {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => const CustomerQrScreen()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          IndexedStack(index: _index, children: _tabs),
          // Chatbot-FAB: unten rechts, über allen Kunden-Tabs erreichbar,
          // ausreichend vom BottomAppBar entfernt damit die Karten-Navigation
          // frei bleibt. Verwendet einen normalen Materialkreis (kein
          // FloatingActionButton), weil der zentrale QR-FAB bereits im
          // Scaffold liegt.
          Positioned(
            right: 12,
            bottom: 88,
            child: ChatbotLauncherFab(
              onSelectTab: (i) {
                if (i >= 0 && i < _tabs.length) setState(() => _index = i);
              },
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _openQr,
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        elevation: 4,
        shape: const CircleBorder(),
        tooltip: 'Kundenkarte',
        child: const Icon(Icons.qr_code_2, size: 30),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: BottomAppBar(
        color: AppColors.surfaceCard,
        elevation: 8,
        shape: const CircularNotchedRectangle(),
        notchMargin: 8,
        padding: EdgeInsets.zero,
        child: SizedBox(
          height: 68,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _NavItem(
                icon: Icons.local_offer_outlined,
                selectedIcon: Icons.local_offer,
                label: 'Angebote',
                selected: _index == 0,
                onTap: () => setState(() => _index = 0),
              ),
              _NavItem(
                icon: Icons.place_outlined,
                selectedIcon: Icons.place,
                label: 'Automaten',
                selected: _index == 1,
                onTap: () => setState(() => _index = 1),
              ),
              const SizedBox(width: 56), // Platz für den FAB
              _NavItem(
                icon: Icons.receipt_long_outlined,
                selectedIcon: Icons.receipt_long,
                label: 'Verlauf',
                selected: _index == 2,
                onTap: () => setState(() => _index = 2),
              ),
              _NavItem(
                icon: Icons.person_outline,
                selectedIcon: Icons.person,
                label: 'Profil',
                selected: _index == 3,
                onTap: () => setState(() => _index = 3),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _NavItem extends StatelessWidget {
  const _NavItem({
    required this.icon,
    required this.selectedIcon,
    required this.label,
    required this.selected,
    required this.onTap,
  });
  final IconData icon;
  final IconData selectedIcon;
  final String label;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    // Icon-Kachel im Screen-Design: gerundetes Quadrat, aktiv gold, inaktiv
    // creme/beige, darunter das Label.
    final tileColor = selected ? AppColors.brand : AppColors.borderSubtle;
    final iconColor = selected ? AppColors.ink : AppColors.textMuted;
    final labelColor = selected ? AppColors.ink : AppColors.textMuted;
    return Expanded(
      child: InkResponse(
        onTap: onTap,
        radius: 44,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 32,
                height: 32,
                decoration: BoxDecoration(
                  color: tileColor,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(
                  selected ? selectedIcon : icon,
                  size: 18,
                  color: iconColor,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                label,
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: selected ? FontWeight.w800 : FontWeight.w600,
                  color: labelColor,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
