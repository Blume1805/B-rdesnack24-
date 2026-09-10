import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/features/geteilt/betriebszustand.dart';
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
  /// Einstieg ist die Automatenliste, immer.
  ///
  /// Sie beantwortet die einzige Frage, die ohne Vorgeschichte
  /// funktioniert: lohnt der Weg? „Vorteile" ist ein Nachschlage-
  /// bildschirm — man sucht ihn auf, wenn man etwas wissen will. Vor dem
  /// ersten Kauf zeigt er ausserdem nur Nullen.
  ///
  /// Bewusst kein Einstieg, der sich mit der Kaufhistorie aendert: Wer
  /// dieselbe App oeffnet und etwas anderes vorfindet, ohne zu wissen
  /// warum, verliert die Orientierung.
  int _index = 0;

  static const _tabs = [
    FinderTab(),
    OffersTab(),
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
    final vorStart = ref.watch(istVorStartProvider);
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
      // Die Kundenkarte ist die hervorgehobene Handlung — aber nur,
      // wenn es einen Automaten gibt, an dem man sie vorzeigen kann.
      // Vor dem Start waere sie ein Knopf ins Leere an der
      // prominentesten Stelle der App.
      floatingActionButton: vorStart
          ? null
          : FloatingActionButton(
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
                icon: Icons.place_outlined,
                selectedIcon: Icons.place,
                label: 'Automaten',
                selected: _index == 0,
                onTap: () => setState(() => _index = 0),
              ),
              // „Vorteile" statt „Angebote": Der Bildschirm enthaelt vier
              // verschiedene Dinge — Wochenangebote, persoenliches
              // Angebot, Status und Abo. Nur eines davon ist ein
              // Angebot.
              _NavItem(
                icon: Icons.local_offer_outlined,
                selectedIcon: Icons.local_offer,
                label: 'Vorteile',
                selected: _index == 1,
                onTap: () => setState(() => _index = 1),
              ),
              // Platz für den FAB. Ohne ihn bliebe sonst eine Lücke
              // zwischen den Reitern.
              if (!vorStart) const SizedBox(width: 56),
              _NavItem(
                icon: Icons.volunteer_activism_outlined,
                selectedIcon: Icons.volunteer_activism,
                // „Für die Region" statt „Meine Spenden": Der Kunde
                // spendet nicht, er kauft — Bördesnack24 gibt 5 % vom
                // Nettopreis weiter. „Meine Spenden" legt eine eigene
                // Zuwendung nahe, mit der Erwartung einer
                // Spendenbescheinigung, die es nicht geben kann.
                label: 'Für die Region',
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
