import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// „Dein Arbeitgeber kann mitzahlen" — erklärt die monatliche
/// Sachbezugsfreigrenze nach § 8 Abs. 2 Satz 11 EStG (50 €, steuer- und
/// sozialversicherungsfrei) am Beispiel unserer Automaten und grenzt sie
/// bewusst vom Verpflegungszuschuss (Mahlzeitengestellung, R 8.1 LStR) ab,
/// der aktuell mangels vollwertiger Mahlzeiten am Automaten nicht greift.
///
/// Erreichbar über die Teaser-Karte in [SubscriptionScreen]. Allgemeine
/// Information, keine Steuerberatung im Einzelfall — Disclaimer am Ende.
class EmployerBenefitScreen extends StatelessWidget {
  const EmployerBenefitScreen({super.key});

  /// One-Pager zum Weiterleiten an Personalabteilung/Arbeitgeber — wird
  /// mit dem Web-Build ausgeliefert (apps/mobile/web/marketing/), analog
  /// zum Abo-Rechnet-sich-One-Pager.
  static final Uri onePagerPdf = Uri.parse(
    'https://blume1805.github.io/B-rdesnack24-/marketing/sachbezug-steuerfrei.pdf',
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Steuerfreier Zuschuss')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          const Eyebrow('Für Arbeitgeber & Beschäftigte'),
          const SizedBox(height: 2),
          Text(
            'Bis zu 50 € im Monat — steuerfrei vom Arbeitgeber',
            style: AppTypography.display(
              size: 22,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Arbeitgeber dürfen ihren Beschäftigten monatlich Sachbezüge bis '
            'zu 50 € steuer- und sozialversicherungsfrei gewähren — das '
            'lässt sich auch für Käufe an unseren Automaten nutzen: Snacks, '
            'Getränke, Eis. Hier erfährst du, was rechtlich dahintersteckt '
            'und was das für dein Gehalt bedeuten kann.',
            style: AppTypography.body(size: 13.5, color: AppColors.textMuted)
                .copyWith(height: 1.5),
          ),
          const SizedBox(height: AppSpacing.s4),

          // ── Die Kernzahl, groß ────────────────────────────────────────
          AppCard(
            color: AppColors.ink,
            borderColor: AppColors.brand,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'SACHBEZUGSFREIGRENZE',
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w800,
                    color: AppColors.brand,
                  ).copyWith(letterSpacing: 0.6),
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  '50 € / Monat',
                  style: AppTypography.display(
                    size: 30,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                ),
                Text(
                  'steuer- und SV-frei — § 8 Abs. 2 Satz 11 EStG',
                  style: AppTypography.body(
                    size: 11.5,
                    weight: FontWeight.w600,
                    color: AppColors.brandLight,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s5),

          const _InfoBlock(
            title: 'Die Rechtsgrundlage',
            body:
                'Nach § 8 Abs. 2 Satz 11 EStG bleiben Sachbezüge bis zu 50 € '
                'im Kalendermonat steuerfrei — seit 1.1.2022 angehoben von '
                'zuvor 44 €. Wichtig: Es handelt sich um eine Freigrenze, '
                'keinen Freibetrag. Wird der Betrag in einem Monat auch nur '
                'um einen Cent überschritten, ist der gesamte Betrag '
                'steuer- und beitragspflichtig — nicht nur der übersteigende '
                'Teil. Die Grenze gilt außerdem für alle Sachbezüge eines '
                'Monats zusammen, nicht getrennt je Anbieter.',
          ),
          const _InfoBlock(
            title: 'Muss ein „Sachbezug" sein — kein Bargeld',
            body:
                'Steuerfrei ist nur eine Sach- oder Dienstleistung, keine '
                'Geldzahlung. In der Praxis bedeutet das: eine Guthaben- '
                'oder Gutscheinkarte, die nur bei einem begrenzten Kreis '
                'von Akzeptanzstellen bzw. für ein begrenztes Waren- oder '
                'Dienstleistungsangebot einlösbar ist (§ 2 Abs. 1 Nr. 10 '
                'ZAG) — etwa eine Karte, die an unseren Automaten aufgeladen '
                'und eingelöst wird.',
          ),
          const _InfoBlock(
            title: 'Zusätzlich zum Gehalt, nicht statt Gehalt',
            body:
                'Der Sachbezug muss zusätzlich zum ohnehin geschuldeten '
                'Arbeitslohn gewährt werden (Zusätzlichkeitserfordernis, '
                '§ 8 Abs. 4 EStG). Eine Umwandlung von bestehendem Gehalt in '
                'den Sachbezug erfüllt die Voraussetzungen nicht. Der '
                'naheliegendste Weg: den 50-€-Sachbezug bei der nächsten '
                'Gehaltsrunde als Extra „on top" einführen — der Arbeitgeber '
                'beteiligt sich damit an den Verpflegungskosten, spart '
                'dabei Lohnnebenkosten (keine SV-Beiträge auf diesen Teil), '
                'und die Beschäftigten haben mehr Netto vom Brutto.',
          ),
          const SizedBox(height: AppSpacing.s2),

          // ── Abgrenzung: kein Verpflegungszuschuss ──────────────────────
          AppCard(
            color: AppColors.surfaceAlt,
            borderColor: AppColors.statusWarning,
            topStripeColor: AppColors.statusWarning,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Icon(
                      Icons.info_outline,
                      size: 18,
                      color: AppColors.statusWarning,
                    ),
                    const SizedBox(width: AppSpacing.s2),
                    Expanded(
                      child: Text(
                        'Wichtige Abgrenzung: kein Verpflegungszuschuss',
                        style: AppTypography.display(
                          size: 15,
                          weight: FontWeight.w800,
                          color: AppColors.ink,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Ein Verpflegungszuschuss bzw. die Bezuschussung von '
                  'Mahlzeiten (z. B. per Essensmarken) folgt einer anderen '
                  'steuerlichen Regel: Bewertung nach den amtlichen '
                  'Sachbezugswerten (Sozialversicherungsentgeltverordnung) '
                  'und ggf. Pauschalversteuerung durch den Arbeitgeber nach '
                  '§ 40 Abs. 2 EStG. Voraussetzung dafür ist aber eine '
                  '„Mahlzeit" im steuerlichen Sinne (R 8.1 Lohnsteuer-'
                  'Richtlinien) — zum Beispiel ein belegtes Brötchen. Ein '
                  'reiner Snack oder ein Getränk allein zählt nicht als '
                  'Mahlzeit.',
                  style: AppTypography.body(size: 13, color: AppColors.ink)
                      .copyWith(height: 1.5),
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Unsere Automaten bieten aktuell keine vollwertigen '
                  'Mahlzeiten an. Für Käufe bei uns gilt deshalb '
                  'ausschließlich die 50-€-Sachbezugsfreigrenze — nicht die '
                  'Verpflegungszuschuss-Regel. Bieten wir künftig zum '
                  'Beispiel belegte Brötchen an, könnte zusätzlich die '
                  'Mahlzeiten-Regelung greifen und Arbeitgebern weitere '
                  'steuerlich begünstigte Beteiligungsmöglichkeiten eröffnen.',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w600,
                    color: AppColors.textDefault,
                  ).copyWith(height: 1.5),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s5),

          const _InfoBlock(
            title: 'Vorteile auf einen Blick',
            body:
                '• Arbeitgeber: beteiligt sich an den Verpflegungskosten, '
                'spart Lohnnebenkosten, kein zusätzlicher Verwaltungsaufwand '
                '— nutzbar direkt am Arbeitsplatz-Automaten.\n'
                '• Beschäftigte: bis zu 50 € mehr netto im Monat, ohne '
                'Abzüge, direkt einsetzbar für Snacks, Getränke und Eis.\n'
                '• Beide Seiten: das Abo-Guthaben und Käufe an unseren '
                'Automaten lassen sich vollständig aus diesem Budget '
                'decken — ein einfacher, sofort nutzbarer Vorteil ohne '
                'Wartezeit.',
          ),
          const SizedBox(height: AppSpacing.s2),

          InkWell(
            onTap: () =>
                launchUrl(onePagerPdf, mode: LaunchMode.externalApplication),
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: AppSpacing.s1),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Flexible(
                    child: Text(
                      'Als PDF für deinen Arbeitgeber herunterladen',
                      style: AppTypography.body(
                        size: 14.5,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ).copyWith(
                        decoration: TextDecoration.underline,
                        decorationColor: AppColors.ink,
                        decorationThickness: 2,
                      ),
                    ),
                  ),
                  const SizedBox(width: AppSpacing.s1),
                  const Icon(
                    Icons.picture_as_pdf_outlined,
                    size: 18,
                    color: AppColors.ink,
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: AppSpacing.s5),

          Text(
            'Allgemeine Information, keine Steuerberatung im Einzelfall. Die '
            'konkrete Umsetzung (z. B. Wahl einer ZAG-konformen Guthaben-'
            'karte, Ausgestaltung als Zusatzleistung) sollte jeder '
            'Arbeitgeber mit seinem Steuerberater bzw. seiner Lohnbuch-'
            'haltung abstimmen. Rechtsstand: Juli 2026, Angaben ohne Gewähr.',
            style: AppTypography.body(size: 11, color: AppColors.textMuted)
                .copyWith(height: 1.45),
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
              color: AppColors.brandDark,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            body,
            style: AppTypography.body(size: 13.5, color: AppColors.ink)
                .copyWith(height: 1.5),
          ),
        ],
      ),
    );
  }
}
