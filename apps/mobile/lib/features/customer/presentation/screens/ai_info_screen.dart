import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// KI-Transparenzseite laut Art. 50 EU AI Act (Verordnung (EU) 2024/1689)
/// und dem GPAI-Verhaltenskodex. Erklärt in verständlicher Sprache
/// welche KI-Funktionen die App einsetzt, mit welchem Zweck, welche
/// Daten verarbeitet werden und wie der Nutzer widersprechen oder sich
/// beschweren kann.
///
/// Wird über den `AiBadge`-Chip von jeder KI-gekennzeichneten Section
/// im Kundenbereich erreichbar.
class AiInfoScreen extends StatelessWidget {
  const AiInfoScreen({super.key});

  static const _kAppUsesLlm = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('KI-Transparenz')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          Row(
            children: [
              const AiBadge(),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Text(
                  'Wo Bördesnack24 KI einsetzt',
                  style: AppTypography.display(
                    size: 22,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s4),
          Text(
            'Wir informieren dich hier transparent nach Artikel 50 EU AI Act '
            '(Verordnung (EU) 2024/1689), an welchen Stellen unsere App '
            'automatisierte, algorithmische oder KI-basierte Entscheidungen '
            'trifft, welchen Zweck sie verfolgen und welche Rechte du hast.',
            style: AppTypography.body(size: 14, color: AppColors.textMuted)
                .copyWith(height: 1.4),
          ),
          const SizedBox(height: AppSpacing.s5),
          const _InfoBlock(
            title: 'Was wird eingesetzt?',
            body:
                'Ein regel-basierter Empfehlungs- und Angebots-Generator, der '
                'Kaufhistorie, Kategorie-Präferenzen und Loyalty-Punkte '
                'auswertet, um dir Wochenangebote, Bonus-Angebote und '
                'personalisierte Coupons vorzuschlagen. Zusätzlich wählt '
                'ein täglicher Kombi-Algorithmus für den Frühstücks- und '
                'den Feierabend-Deal je eine Heißgetränk-/Snack-Paarung '
                'aus dem Produktkatalog aus. '
                '${_kAppUsesLlm ? 'Außerdem läuft ein KI-Chat-Assistent auf Basis eines großen Sprachmodells (LLM), der App-Fragen beantwortet.' : 'Der Chat-Assistent im Kundenbereich ist ein regel-basierter Q&A-Bot ohne generatives KI-Modell und wird deshalb als „Automatischer Chat-Assistent" gekennzeichnet.'}',
          ),
          const _InfoBlock(
            title: 'Zweck',
            body:
                'Bessere Sichtbarkeit von Angeboten, die zu deinem bisherigen '
                'Einkaufsverhalten passen. Die Vorschläge sind Empfehlungen — '
                'du bist nie verpflichtet, ein Angebot anzunehmen.',
          ),
          const _InfoBlock(
            title: 'Welche Daten fließen ein?',
            body: '• Deine Kaufhistorie an unseren Automaten\n'
                '• Deine Kategorie-Präferenzen (Getränke, Snacks, Eis)\n'
                '• Loyalty-Punktestand und -Meilensteine\n'
                '• Aktive Coupons\n\n'
                'Keine Weitergabe an Dritte für Werbezwecke. Keine automatisierten '
                'Einzelentscheidungen mit rechtlicher Wirkung im Sinne von '
                'Art. 22 DSGVO.',
          ),
          const _InfoBlock(
            title: 'Widerspruch und Opt-out',
            body: 'Du kannst der personalisierten Angebots-Anzeige jederzeit '
                'widersprechen — schreib uns über das Kontaktformular in '
                'der App oder per E-Mail an datenschutz@boerdesnack24.de. Du '
                'siehst dann nur noch die allgemeinen Wochenangebote, den '
                'Frühstücks- und den Feierabend-Deal.',
          ),
          const _InfoBlock(
            title: 'Kennzeichnung im Kundenbereich',
            body: 'Überall wo KI oder Algorithmen dir Inhalte vorschlagen, '
                'siehst du in der oberen rechten Ecke der Section den '
                'gold-schwarzen „KI"-Chip. Der Chat-Assistent trägt das '
                'Label „Automatischer Chat-Assistent" damit du weißt, dass '
                'du nicht mit einem Menschen sprichst.',
          ),
          const _InfoBlock(
            title: 'Beschwerde',
            body: 'Wenn du glaubst, dass unsere KI-Nutzung deine Rechte '
                'verletzt, kannst du dich an die zuständige Datenschutz-'
                'Aufsichtsbehörde wenden: den Bundesbeauftragten für den '
                'Datenschutz und die Informationsfreiheit (BfDI) oder — für '
                'Sachsen-Anhalt — die Landesbeauftragte für den Datenschutz.',
          ),
          const SizedBox(height: AppSpacing.s5),
          OutlinedButton.icon(
            onPressed: () => launchUrl(
              Uri.parse(
                'https://data.consilium.europa.eu/doc/document/PE-24-2024-INIT/en/pdf',
              ),
              mode: LaunchMode.externalApplication,
            ),
            icon: const Icon(Icons.open_in_new, size: 16),
            label: const Text('EU AI Act — Volltext lesen'),
            style: OutlinedButton.styleFrom(
              foregroundColor: AppColors.ink,
              side: const BorderSide(color: AppColors.ink),
              padding: const EdgeInsets.symmetric(
                horizontal: AppSpacing.s4,
                vertical: AppSpacing.s3,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _InfoBlock extends StatelessWidget {
  const _InfoBlock({required this.title, required this.body});
  final String title;
  final String body;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s5),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: AppTypography.display(
              size: 16,
              weight: FontWeight.w800,
              color: AppColors.brand,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            body,
            style: AppTypography.body(size: 14, color: AppColors.ink)
                .copyWith(height: 1.45),
          ),
        ],
      ),
    );
  }
}
