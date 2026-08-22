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
            'Hier steht, an welchen Stellen unsere App automatisiert '
            'auswählt, welchen Zweck das hat und welche Rechte du hast.\n\n'
            'Zur Einordnung, ehrlich gesagt: Unsere Angebotslogik sind feste '
            'Rechenregeln — kein lernendes System und kein Sprachmodell. '
            'Nach den Leitlinien der EU-Kommission vom 06.02.2025 sind '
            'solche regelbasierten Systeme keine KI-Systeme im Sinne des EU '
            'AI Act, und Artikel 50 verpflichtet uns hier zu nichts. Wir '
            'kennzeichnen trotzdem — weil du sonst nicht erkennen könntest, '
            'warum dir ausgerechnet dieses Angebot gezeigt wird.',
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
                'personalisierte Coupons vorzuschlagen. Der Frühstücks- und '
                'der Feierabend-Deal gehören ausdrücklich NICHT dazu: sie '
                'sind eine feste Warenkorb-Regel (Getränk + Süßware/Snack im '
                'Zeitfenster = 5 % extra) ohne jede algorithmische Auswahl. '
                'Der Tages-Deal wird dagegen '
                'nach der Wetterlage gewichtet: an heißen Tagen werden Eis '
                'und Kaltgetränke bevorzugt, an kalten Tagen Heißgetränke. '
                'Grundlage ist die Vorhersage des Deutschen Wetterdienstes '
                'für den Automaten-Standort — dein eigener Standort wird '
                'dafür nicht verwendet. '
                'Dazu kommt seit August 2026 eine Punkteregel fürs tägliche '
                'Einloggen: Öffnest du die App an einem Tag, zählt dieser Tag '
                '10 Punkte; warst du an allen sieben Tagen einer Woche da, '
                'kommen 100 Punkte dazu. Das ist reine Rechnerei nach festen '
                'Zahlen — nichts wird gelernt, geschätzt oder vorhergesagt. '
                'Sie steht hier trotzdem, weil sie mitentscheidet, wann ein '
                'Meilenstein-Gutschein entsteht. '
                'Nach demselben Muster arbeiten seit August 2026 die '
                'Aufgaben-Prämien: Erfüllst du „Wochen-Snacker" (drei Käufe '
                'in sieben Tagen) oder „Morgenmuffel-Kur" (drei Käufe '
                'zwischen 7 und 9 Uhr) zum ersten Mal, werden dir einmalig '
                '300 beziehungsweise 200 Punkte gutgeschrieben. Gezählt '
                'werden deine Käufe im jeweiligen Zeitfenster — eine feste '
                'Rechenregel, keine Schätzung. Jede Aufgabe zahlt genau '
                'einmal aus. '
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
            body: 'Für das individuelle Angebot:\n'
                '• Welche Produkte du in den letzten 90 Tagen gekauft hast, '
                'und wie oft\n\n'
                'Für den Geburtstagsgutschein:\n'
                '• Dein Geburtsdatum\n\n'
                'Für die Punkte fürs tägliche Einloggen:\n'
                '• Der Kalendertag, an dem du die App geöffnet hast — keine '
                'Uhrzeit, kein Gerät, keine IP-Adresse. Nach 90 Tagen wird '
                'er gelöscht.\n\n'
                'Für die Aufgaben-Prämien:\n'
                '• Zeitpunkt und Anzahl deiner Käufe, der Automat und das '
                'Produkt je Kauf — also Daten, die ohnehin zu deinem Kauf '
                'gespeichert sind. Es kommt nichts Neues dazu.\n\n'
                'Ohne Bezug zu deiner Person:\n'
                '• Wettervorhersage für den Automaten-Standort '
                '(nicht für deinen)\n'
                '• Mindesthaltbarkeitsdatum unseres Bestands\n\n'
                'Mehr nicht. Loyalty-Punkte, Kategorie-Präferenzen und aktive '
                'Coupons fließen ausdrücklich NICHT in die Auswahl ein — '
                'frühere Fassungen dieser Seite haben das falsch behauptet.\n\n'
                'Keine Weitergabe an Dritte für Werbezwecke. Keine automatisierten '
                'Einzelentscheidungen mit rechtlicher Wirkung im Sinne von '
                'Art. 22 DSGVO: Der Rabatt beträgt immer 10 % und ist für alle '
                'gleich — es entscheidet sich nur, welches Produkt vergünstigt '
                'wird.',
          ),
          const _InfoBlock(
            title: 'Widerspruch und Opt-out',
            body: 'Du kannst der personalisierten Angebots-Anzeige jederzeit '
                'widersprechen — schreib uns über das Kontaktformular in '
                'der App oder per E-Mail an datenschutz@boerdesnack24.de. Du '
                'siehst dann nur noch die allgemeinen Wochenangebote, den '
                'Frühstücks- und den Feierabend-Deal.\n\n'
                'Das gilt auch für die Punkte fürs tägliche Einloggen: Auf '
                'Widerspruch zeichnen wir deine Öffnungstage nicht mehr auf. '
                'Punkte sammelst du dann nur noch über deine Einkäufe.\n\n'
                'Bei den Aufgaben-Prämien können wir dich auf Widerspruch von '
                'der Auswertung ausnehmen — dann wird dein Kaufverhalten '
                'nicht mehr auf die Aufgaben geprüft, und es entstehen keine '
                'Prämien mehr. Bereits gutgeschriebene Punkte bleiben dir.',
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
            body: 'Wenn du glaubst, dass unsere automatisierte Auswahl deine '
                'Rechte verletzt, kannst du dich an die für uns zuständige '
                'Aufsichtsbehörde wenden: die Landesbeauftragte für den '
                'Datenschutz Sachsen-Anhalt, Leiterstr. 9, 39104 Magdeburg.',
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
