import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/pricing/pricing.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';
import 'subscription_screen.dart';

/// Marketing-Rechnung „Was du mit der App sparst" — der One-Pager als
/// In-App-Screen. Zwei Szenarien aus der zentralen Preislogik (Pricing):
///   * konservativ: nur der garantierte 5-%-App-Preis,
///   * normal: zusätzlich Frühstücks-/Feierabend-Deals, Tages- und
///     Wochenangebote (weitere 10 % auf den App-Preis) sowie
///     Treue-Meilensteine (Coupons 5–25 %).
///
/// Seit dem Beschluss vom 2026-09-16 ([Pricing.benefitsFreeForAll]) kostet
/// die App nichts mehr. Damit entfällt die Break-even-Frage „ab welchem
/// Einkauf trägt sich die Gebühr?" — es gibt keine Gebühr, die getragen
/// werden müsste. An ihre Stelle tritt eine reine Ersparnis-Tabelle: wie
/// viel bei einem gegebenen monatlichen Einkauf im Jahr zusammenkommt.
/// Die Break-even-Logik bleibt in [Pricing] erhalten, falls die
/// Entscheidung zurückgenommen wird.
class SubscriptionValueScreen extends ConsumerWidget {
  const SubscriptionValueScreen({super.key});

  /// Der One-Pager als PDF — wird mit dem Web-Build ausgeliefert
  /// (apps/mobile/web/marketing/) und liegt damit auf GitHub Pages;
  /// die absolute URL funktioniert auch aus den nativen Apps.
  ///
  /// Am 2026-09-16 neu erzeugt aus `docs/marketing/abo-rechnet-sich.html`
  /// (Headless-Chromium-Druck). Der Dateiname stammt noch aus der Abo-Zeit,
  /// der Inhalt nicht mehr: Er nennt keine Abo-Preise. Wird das PDF erneut
  /// geändert, muss die HTML-Quelle die Vorlage bleiben — sonst driften
  /// beide auseinander und die Preisangaben werden irreführend (§ 5 UWG).
  static final Uri onePagerPdf = Uri.parse(
    'https://blume1805.github.io/B-rdesnack24-/marketing/abo-rechnet-sich.pdf',
  );

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final hasBenefits = ref.watch(hasBenefitsProvider).valueOrNull ?? false;

    const conservative = Pricing.appDiscountRate;
    final normal = Pricing.normalSavingsRate;

    // Ersparnis-Beispiele: monatlicher Einkaufswert → Ersparnis im Jahr.
    // Keine Kosten mehr gegenzurechnen, deshalb ist die Ersparnis die
    // Ersparnis — nicht der Überschuss über eine Gebühr.
    const spendSteps = <double>[10, 20, 40];

    return Scaffold(
      appBar: const HeroAppBar(title: Text('Was du sparst')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          const SectionHeader(
            eyebrow: 'Beispielrechnung',
            title: 'Die App zahlt sich aus.',
          ),
          const SizedBox(height: AppSpacing.s3),
          // Kernfakten kurz als Stichpunkte statt Fließtext.
          const AppCard(
            color: AppColors.surfaceAlt,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _AssumptionRow(icon: Icons.percent, text: '5 % auf jeden Kauf'),
                SizedBox(height: AppSpacing.s2),
                _AssumptionRow(
                  icon: Icons.workspace_premium_outlined,
                  text: 'Status-Rabatt bis 10 % — lebenslang',
                ),
                SizedBox(height: AppSpacing.s2),
                _AssumptionRow(
                  icon: Icons.local_offer_outlined,
                  text: 'Deals & Wochenangebote: −10 % extra',
                ),
                SizedBox(height: AppSpacing.s2),
                _AssumptionRow(
                  icon: Icons.star_outline,
                  text: 'Coupons 5–25 % + Geburtstagsgutschein',
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Zwei Szenarien — Status-Rabatt kommt obendrauf.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),

          // One-Pager-PDF zum Ansehen/Teilen — schwarz und fett als Link.
          InkWell(
            onTap: () => launchUrl(
              onePagerPdf,
              mode: LaunchMode.externalApplication,
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: AppSpacing.s1),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Flexible(
                    child: Text(
                      'Beispielrechnung hier klicken',
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
          const SizedBox(height: AppSpacing.s4),

          // ── Die zwei Szenarien ────────────────────────────────────────
          // IntrinsicHeight: gleiche Kartenhöhe trotz stretch — ohne sie
          // fordert die Row in der ListView unendliche Höhe an und die
          // Seite bricht nach dem Intro ab.
          IntrinsicHeight(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const Expanded(
                  child: _ScenarioCard(
                    title: 'Konservativ',
                    rate: conservative,
                    subtitle: 'Nur der garantierte 5-%-App-Preis — '
                        'ohne einen einzigen Coupon.',
                    highlighted: false,
                  ),
                ),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: _ScenarioCard(
                    title: 'Normal',
                    rate: normal,
                    subtitle: 'Mit Deals (−10 % extra), Wochen-/Tagesangeboten '
                        'und Treue-Boni.',
                    highlighted: true,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s5),

          // ── Ersparnis-Tabelle ─────────────────────────────────────────
          const Eyebrow('Was das im Jahr ausmacht'),
          const SizedBox(height: AppSpacing.s3),
          AppCard(
            padding: EdgeInsets.zero,
            child: Column(
              children: [
                const _SavingsHeader(),
                for (final spend in spendSteps) ...[
                  const Divider(height: 1, color: AppColors.borderSubtle),
                  _SavingsRow(
                    spend: '${Formatters.euro(spend)} / Monat',
                    perYear: '= ${Formatters.euro(spend * 12)} im Jahr',
                    conservative:
                        '${Formatters.euro(spend * 12 * conservative)} / Jahr',
                    normal: '${Formatters.euro(spend * 12 * normal)} / Jahr',
                  ),
                ],
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Kaffee + Snack ca. 6 €. Die Ersparnis beginnt beim ersten Kauf — '
            'es gibt keine Gebühr, die sich erst rechnen müsste.',
            style: AppTypography.body(size: 12.5, color: AppColors.textMuted)
                .copyWith(height: 1.5),
          ),
          const SizedBox(height: AppSpacing.s5),

          // ── Was steckt im normalen Szenario? ──────────────────────────
          const Eyebrow('So entsteht die normale Ersparnis'),
          const SizedBox(height: AppSpacing.s3),
          const AppCard(
            color: AppColors.surfaceAlt,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _AssumptionRow(
                  icon: Icons.percent,
                  text: '5 % auf jeden Kauf — garantiert',
                ),
                SizedBox(height: AppSpacing.s2),
                _AssumptionRow(
                  icon: Icons.local_cafe_outlined,
                  text: 'Deals & Angebote: −10 % extra (ca. 30 % der Käufe)',
                ),
                SizedBox(height: AppSpacing.s2),
                _AssumptionRow(
                  icon: Icons.star_outline,
                  text: 'Coupons 5–25 % + Geburtstag (ca. 1,5 Pp.)',
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s6),

          // ── CTA (nur, wenn die Vorteile noch nicht aktiv sind) ─────────
          if (!hasBenefits)
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                style: FilledButton.styleFrom(
                  backgroundColor: AppColors.brand,
                  foregroundColor: AppColors.ink,
                  padding: const EdgeInsets.symmetric(vertical: 13),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                ),
                onPressed: () => Navigator.of(context).pushReplacement(
                  MaterialPageRoute(builder: (_) => const SubscriptionScreen()),
                ),
                child: const Text('Vorteile ansehen'),
              ),
            )
          else
            AppCard(
              color: AppColors.surfaceAlt,
              child: Row(
                children: [
                  const Icon(
                    Icons.check_circle_outline,
                    color: AppColors.statusPositive,
                    size: 20,
                  ),
                  const SizedBox(width: AppSpacing.s2),
                  Expanded(
                    child: Text(
                      'Deine Vorteile sind aktiv — kostenlos, dauerhaft.',
                      style: AppTypography.body(
                        size: 13,
                        color: AppColors.textDefault,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          const SizedBox(height: AppSpacing.s4),
          Text(
            'Kalkulationsbasis: Produktkatalog 03/2026, Preise inkl. USt. '
            'Das normale Szenario ist eine Beispielrechnung — deine '
            'tatsächliche Ersparnis hängt davon ab, wie oft du Deals und '
            'Coupons nutzt. Die App selbst kostet nichts; es fällt weder eine '
            'Grund- noch eine Nutzungsgebühr an. Angaben ohne Gewähr, Preise '
            'können sich ändern.',
            style: AppTypography.body(size: 11, color: AppColors.textMuted)
                .copyWith(height: 1.45),
          ),
        ],
      ),
    );
  }
}

/// Szenario-Kachel: Ersparnisquote groß, Kurzbeschreibung darunter.
class _ScenarioCard extends StatelessWidget {
  const _ScenarioCard({
    required this.title,
    required this.rate,
    required this.subtitle,
    required this.highlighted,
  });

  final String title;
  final double rate;
  final String subtitle;
  final bool highlighted;

  @override
  Widget build(BuildContext context) {
    final pct = (rate * 100).toStringAsFixed(1).replaceAll('.', ',');
    return AppCard(
      color: highlighted ? AppColors.ink : AppColors.surfaceAlt,
      borderColor: highlighted ? AppColors.brand : null,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title.toUpperCase(),
            style: AppTypography.body(
              size: 11,
              weight: FontWeight.w800,
              color: highlighted ? AppColors.brand : AppColors.textMuted,
            ).copyWith(letterSpacing: 0.6),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'ca. $pct %',
            style: AppTypography.display(
              size: 26,
              weight: FontWeight.w800,
              color: highlighted ? AppColors.onDark : AppColors.ink,
            ),
          ),
          Text(
            'Ersparnis',
            style: AppTypography.body(
              size: 11,
              weight: FontWeight.w600,
              color: highlighted ? AppColors.brandLight : AppColors.textMuted,
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            subtitle,
            style: AppTypography.body(
              size: 11.5,
              color: highlighted ? AppColors.brandLight : AppColors.textMuted,
            ).copyWith(height: 1.4),
          ),
        ],
      ),
    );
  }
}

/// Kopfzeile der Ersparnis-Tabelle.
class _SavingsHeader extends StatelessWidget {
  const _SavingsHeader();

  @override
  Widget build(BuildContext context) {
    Widget head(String label, {int flex = 1}) => Expanded(
          flex: flex,
          child: Text(
            label,
            style: AppTypography.body(
              size: 10.5,
              weight: FontWeight.w800,
              color: AppColors.textMuted,
            ).copyWith(letterSpacing: 0.4),
          ),
        );
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Row(
        children: [
          head('EINKAUF', flex: 5),
          head('KONSERVATIV', flex: 5),
          head('NORMAL', flex: 5),
        ],
      ),
    );
  }
}

/// Eine Zeile der Ersparnis-Tabelle: monatlicher Einkauf → Ersparnis
/// im Jahr, konservativ und im normalen Szenario.
class _SavingsRow extends StatelessWidget {
  const _SavingsRow({
    required this.spend,
    required this.perYear,
    required this.conservative,
    required this.normal,
  });

  final String spend;
  final String perYear;
  final String conservative;
  final String normal;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            flex: 5,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  spend,
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                ),
                Text(
                  perYear,
                  style: AppTypography.body(
                    size: 11,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            flex: 5,
            child: Text(
              conservative,
              style: AppTypography.body(
                size: 12.5,
                weight: FontWeight.w600,
                color: AppColors.ink,
              ),
            ),
          ),
          Expanded(
            flex: 5,
            child: Text(
              normal,
              style: AppTypography.body(
                size: 12.5,
                weight: FontWeight.w800,
                color: AppColors.brandDark,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _AssumptionRow extends StatelessWidget {
  const _AssumptionRow({required this.icon, required this.text});
  final IconData icon;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 18, color: AppColors.brandDark),
        const SizedBox(width: AppSpacing.s2),
        Expanded(
          child: Text(
            text,
            style: AppTypography.body(size: 12.5, color: AppColors.textDefault)
                .copyWith(height: 1.45),
          ),
        ),
      ],
    );
  }
}
