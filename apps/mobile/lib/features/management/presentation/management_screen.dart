import 'package:flutter/material.dart';

import '../../../../core/widgets/placeholder_view.dart';

/// Kategorie 2 — Unternehmensverwaltung (Phase 2). Platzhalter bis zur Umsetzung.
class ManagementScreen extends StatelessWidget {
  const ManagementScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const PlaceholderView(
      icon: Icons.inventory_2,
      title: 'Unternehmensverwaltung',
      message:
          'Kategorie 2: HACCP, Reinigung, Temperatur, Vernichtung, Wartung, '
          'Inventur in Echtzeit, Dokumente. Wird in Phase 2 implementiert.',
    );
  }
}
