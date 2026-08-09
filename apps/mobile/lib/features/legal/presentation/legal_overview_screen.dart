import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/router/app_router.dart';
import '../../../core/theme/app_tokens.dart';
import '../../../core/theme/app_typography.dart';
import '../../../core/widgets/design_system/design_system.dart';

/// Sammelseite für alle Rechtstexte.
///
/// Vorher standen die sieben Texte als sieben einzelne Zeilen im Profil.
/// Das hatte zwei Nachteile: Die eigentlichen Profilfunktionen gingen in
/// der Liste unter, und es gab keine Adresse, auf die man „die
/// Rechtsseiten" verlinken konnte — nur sieben einzelne.
///
/// Diese Seite ist beides. Im Profil führt eine Kachel hierher, und
/// `/legal` lässt sich auch von aussen verlinken (Web-Auftritt, E-Mail-
/// Fusszeile, App-Store-Eintrag).
///
/// Erreichbar OHNE Anmeldung — siehe `_openRoutes` in `app_router.dart`.
/// Die Widerrufsbelehrung und die Zahlungsangaben muss man lesen können,
/// bevor man ein Konto anlegt, nicht erst danach.
class LegalOverviewScreen extends StatelessWidget {
  const LegalOverviewScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Rechtliches')),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.s5),
          children: [
            Text(
              'Pflichtangaben, Datenschutz und Vertragsbedingungen von '
              'Bördesnack24. Alle Texte sind auch ohne Anmeldung lesbar.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            AppCard(
              padding: EdgeInsets.zero,
              child: Column(
                children: [
                  for (var i = 0; i < legalOverviewEntries.length; i++) ...[
                    _LegalRow(entry: legalOverviewEntries[i]),
                    if (i < legalOverviewEntries.length - 1)
                      const Divider(height: 1, color: AppColors.borderSubtle),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Ein Eintrag der Übersicht.
///
/// Öffentlich (nicht `_`), damit der Test die Liste gegen die tatsächlich
/// registrierten Routen prüfen kann. Ein Eintrag, der ins Leere zeigt,
/// fällt sonst erst dem Nutzer auf.
@immutable
class LegalOverviewEntry {
  const LegalOverviewEntry({
    required this.icon,
    required this.title,
    required this.route,
    this.subtitle,
  });

  final IconData icon;
  final String title;
  final String route;
  final String? subtitle;
}

/// Reihenfolge wie bisher im Profil: erst die Anbieterkennzeichnung, dann
/// Datenschutz und Vertrag, danach die Verbraucherrechte.
const legalOverviewEntries = <LegalOverviewEntry>[
  LegalOverviewEntry(
    icon: Icons.gavel_outlined,
    title: 'Impressum',
    route: AppRoutes.imprint,
  ),
  LegalOverviewEntry(
    icon: Icons.privacy_tip_outlined,
    title: 'Datenschutzerklärung',
    route: AppRoutes.privacy,
  ),
  LegalOverviewEntry(
    icon: Icons.article_outlined,
    title: 'Nutzungsbedingungen',
    route: AppRoutes.terms,
  ),
  LegalOverviewEntry(
    icon: Icons.undo_outlined,
    title: 'Widerrufsbelehrung',
    subtitle: '14 Tage bei Abos',
    route: AppRoutes.withdrawal,
  ),
  // Neu in der Übersicht: Bisher war das Kündigungsformular für
  // Angemeldete nirgends verlinkt — nur von der Anmeldeseite und aus dem
  // Chat-Assistenten heraus. § 312k Abs. 2 BGB verlangt aber, dass die
  // Kündigungsmöglichkeit ständig verfügbar und unmittelbar erreichbar
  // ist; für jemanden, der bereits eingeloggt ist, war sie das nicht.
  LegalOverviewEntry(
    icon: Icons.cancel_schedule_send_outlined,
    title: 'Verträge hier kündigen',
    subtitle: 'Kündigungsformular nach § 312k BGB',
    route: AppRoutes.cancellation,
  ),
  LegalOverviewEntry(
    icon: Icons.payments_outlined,
    title: 'Zahlungsinformationen',
    subtitle: 'Zahlarten, Preise, Belege',
    route: AppRoutes.paymentInfo,
  ),
  LegalOverviewEntry(
    icon: Icons.cookie_outlined,
    title: 'Cookies und Tracking',
    subtitle: 'Kurz: wir setzen keine',
    route: AppRoutes.cookies,
  ),
  LegalOverviewEntry(
    icon: Icons.accessibility_new_outlined,
    title: 'Barrierefreiheit',
    subtitle: 'Erklärung nach BFSG',
    route: AppRoutes.accessibility,
  ),
];

class _LegalRow extends StatelessWidget {
  const _LegalRow({required this.entry});

  final LegalOverviewEntry entry;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => context.push(entry.route),
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s4,
          vertical: AppSpacing.s3,
        ),
        child: Row(
          children: [
            // Das Symbol wiederholt nur, was daneben steht — für
            // Screenreader ist es damit Lärm.
            ExcludeSemantics(
              child: Icon(entry.icon, size: 22, color: AppColors.brand),
            ),
            const SizedBox(width: AppSpacing.s3),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    entry.title,
                    style: AppTypography.body(
                      size: 14,
                      weight: FontWeight.w700,
                      color: AppColors.ink,
                    ),
                  ),
                  if (entry.subtitle != null)
                    Padding(
                      padding: const EdgeInsets.only(top: 2),
                      child: Text(
                        entry.subtitle!,
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                ],
              ),
            ),
            const ExcludeSemantics(
              child: Icon(Icons.chevron_right, color: AppColors.textMuted),
            ),
          ],
        ),
      ),
    );
  }
}
