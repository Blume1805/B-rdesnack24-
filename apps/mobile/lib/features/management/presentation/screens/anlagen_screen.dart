import 'package:flutter/material.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import 'anlage_pkw_screen.dart';

/// Anlagen zum Jahresabschluss.
///
/// Auftrag des Auftraggebers vom 25.08.2026: „Darunter sollen Übersichten
/// subsumiert werden, die für die Erstellung des Jahresabschlusses von
/// Bedeutung sind." Die erste ist die Ermittlung der individuellen
/// PKW-Kosten; weitere kommen hier dazu.
class AnlagenScreen extends StatelessWidget {
  const AnlagenScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Anlagen')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          const SectionHeader(
            eyebrow: 'Steuern',
            title: 'Anlagen zum Jahresabschluss',
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Übersichten, die Dein Steuerberater zum Jahresabschluss braucht. '
            'Jede lässt sich als PDF ausgeben und von beiden Gesellschaftern '
            'freigeben.',
            style: AppTypography.body(size: 13, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s5),
          ModuleTile(
            icon: Icons.directions_car_outlined,
            label: 'PKW-Kosten',
            description: 'Kilometersatz und Nutzungseinlage',
            onTap: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const AnlagePkwScreen()),
            ),
          ),
        ],
      ),
    );
  }
}
