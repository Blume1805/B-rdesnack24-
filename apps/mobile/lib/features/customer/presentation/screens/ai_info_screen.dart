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
                'den Feierabend-Deal je eine Getränk-/Snack-Paarung '
                'aus dem Produktkatalog aus. '
                '${_kAppUsesLlm ? 'Außerdem läuft ein KI-Chat-Assistent auf Basis eines großen Sprachmodells (LLM), der App-Fragen beantwortet.' : 'Der Chat-Assistent im Kundenbereich ist ein regel-basierter Q&A-Bot ohne generatives KI-Modell und wird deshalb als „Automatischer Chat-Assistent" gekennzeichnet.'}',
          ),
          const _InfoBlock(
            title: 'Welche Bereiche das im Einzelnen sind',
            body: '• Persönliche Coupons und Bonus-Angebote — berechnet aus '
                'Kaufhistorie, Kategorie-Präferenzen und Punktestand\n'
                '• Wochenangebote und die Tages-Deals (Frühstück, Feierabend)\n'
                '• Dein Status, der lebenslange Dauerrabatt und der '
                'Fortschritt zur nächsten Stufe\n'
                '• Aktuelle Herausforderungen und die Punkte, die du dafür '
                'gutgeschrieben bekommst\n'
                '• Deine Abzeichen\n'
                '• Punkte für das tägliche Einloggen und der Wochenbonus\n'
                '• Der Geburtstagsgutschein\n'
                '• Die Werbelogos auf deiner Kundenkarte\n\n'
                'All diese Berechnungen laufen nach festen Regeln auf unserem '
                'Server. Es ist kein lernendes System beteiligt und es trifft '
                'keine Einzelfallentscheidung über dich.',
          ),
          const _InfoBlock(
            title: 'Werbelogos auf der Kundenkarte',
            body: 'Auf der Kundenkarte kann das Logo eines Unternehmens '
                'stehen, das bei uns digitale Werbung gebucht hat. Es ist '
                'sichtbar als „Anzeige" gekennzeichnet, damit klar ist, dass '
                'es Werbung ist und keine Partnerschaft, kein Zahlungsmittel '
                'und keine Zugehörigkeit.\n\n'
                'Welches Logo du siehst, hängt allein vom Kalendertag ab. '
                'Alle Kundinnen und Kunden sehen an einem Tag dieselben '
                'Logos in derselben Reihenfolge. Dein Konto, deine Käufe, '
                'dein Standort und dein Punktestand fließen nicht ein — die '
                'Funktion, die die Auswahl trifft, kann dich technisch gar '
                'nicht erkennen.\n\n'
                'Daraus folgt zweierlei: Der Werbetreibende erfährt nicht, '
                'wer sein Logo gesehen hat, sondern nur, wie oft es insgesamt '
                'erschienen ist — und auch das erst ab einer Mindestzahl, '
                'unter der sich keine einzelne Person herausrechnen ließe. '
                'Und ein Widerspruch gegen personalisierte Anzeige ändert an '
                'dieser Fläche nichts, weil sie nie personalisiert war.',
          ),
          const _InfoBlock(
            title: 'Produktbilder',
            body: 'Inwiefern KI hier angewandt wird: Ausgangspunkt ist immer '
                'eine eigene Aufnahme des Produkts. Ein KI-Werkzeug stellt '
                'sie frei, schneidet sie zu und hellt sie auf. Es erfindet '
                'nichts hinzu.\n\n'
                'Ein Hinweis erscheint deshalb nicht an jedem bearbeiteten '
                'Bild, sondern nur dort, wo das Produkt selbst oder seine '
                'Umgebung verändert wurde. Freistellen, Zuschneiden und '
                'Helligkeit allein lösen keinen aus, weil das Bild den '
                'Gegenstand weiterhin so zeigt, wie er ist. Ein Hinweis an '
                'jedem Bild wäre nicht die vorsichtigere Wahl, sondern selbst '
                'eine falsche Aussage — er behauptete eine Veränderung, die '
                'es nicht gab. Maßgeblich ist immer die Ware am Automaten.\n\n'
                'Wo der Hinweis fällig ist, trägt das Bild das Symbol '
                '„AI MODIFIED" der Europäischen Kommission. Ein Tipp darauf '
                'führt hierher zurück.',
          ),
          const _InfoBlock(
            title: 'Die Symbole auf den Bildern',
            body: 'Für Bilder verwenden wir die amtlichen Symbole der '
                'Europäischen Kommission, damit die Kennzeichnung überall '
                'gleich aussieht und nicht bei jedem Anbieter neu gelernt '
                'werden muss:\n\n'
                '• „AI GENERATED" heißt: das Bild ist vollständig von einem '
                'KI-System erzeugt. Es gibt keine Aufnahme, die ihm zugrunde '
                'liegt, und niemanden und nichts darauf, den oder das es '
                'wirklich gibt.\n'
                '• „AI MODIFIED" heißt: es gab eine echte Aufnahme, und ein '
                'KI-System hat daran etwas verändert.\n'
                '• Der schlichte Kreis mit „AI" steht für dasselbe, nur auf '
                'Bildern, die zu klein für die beschriftete Form sind.\n\n'
                'Die Beschriftung der Symbole ist englisch, weil es sie nur '
                'so gibt. Der deutsche Wortlaut wird vorgelesen, wenn du '
                'einen Screenreader verwendest, und steht auf dieser Seite.\n\n'
                'Die Symbole sind freiwillig. Die Pflicht zur Offenlegung aus '
                'Art. 50 EU AI Act besteht unabhängig davon, und ein Symbol '
                'allein erfüllt sie nicht — deshalb diese Seite.',
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
            body: 'Es gibt zwei Kennzeichen, und sie sagen Verschiedenes. '
                'Keines ersetzt das andere.\n\n'
                'Der gold-schwarze „KI"-Chip am Kopf einer Section heißt: '
                'die Auswahl ist automatisch entstanden. Welche Gutscheine, '
                'welche Angebote, welche Reihenfolge — das entscheidet eine '
                'Regel, keine Redaktion. Er sagt nichts darüber, wie der '
                'Inhalt selbst entstanden ist.\n\n'
                'Die schwarzen Symbole auf einem Bild heißen: dieses Bild '
                'wurde von einem KI-System erzeugt oder verändert. Sie stehen '
                'am Bild, nicht am Abschnitt, weil sich die Aussage auf genau '
                'dieses Bild bezieht.\n\n'
                'Der Chat-Assistent trägt weder das eine noch das andere. Er '
                'heißt „Automatischer Chat-Assistent", damit du weißt, dass '
                'du nicht mit einem Menschen sprichst — aber er ist kein '
                'KI-System, sondern beantwortet feste Fragen nach festen '
                'Regeln. Ihn als KI zu bezeichnen wäre bequem und falsch.',
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
