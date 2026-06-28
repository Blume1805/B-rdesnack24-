import 'package:flutter/material.dart';

import '../../../../core/widgets/placeholder_view.dart';

/// Kategorie 3 — Kundenbereich (Phase 3). Platzhalter bis zur Umsetzung.
class CustomerScreen extends StatelessWidget {
  const CustomerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const PlaceholderView(
      icon: Icons.storefront,
      title: 'Kundenbereich',
      message:
          'Kategorie 3: Profil, individuelle Preise, Angebote, Kaufhistorie, '
          'Automatenfinder, Echtzeit-Verfügbarkeit. Wird in Phase 3 implementiert.',
    );
  }
}
