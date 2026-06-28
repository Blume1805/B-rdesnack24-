import 'package:flutter/material.dart';

import '../../../../core/widgets/placeholder_view.dart';

/// Kategorie 1 — Finanzdashboard (Phase 1). Platzhalter bis zur Umsetzung.
class FinanceScreen extends StatelessWidget {
  const FinanceScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const PlaceholderView(
      icon: Icons.insights,
      title: 'Finanzdashboard',
      message:
          'Kategorie 1 (nur Gesellschafter): sevDesk-Auswertungen, Zeitraum-Filter, '
          'PDF-Export. Wird in Phase 1 implementiert.',
    );
  }
}
