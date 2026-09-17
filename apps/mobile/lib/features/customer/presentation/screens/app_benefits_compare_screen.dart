import 'package:flutter/material.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// „Das bekommst Du mit Deinem kostenlosen Konto" — die Leistungsübersicht als
/// wiederverwendbare Karte. Bewusst textarm, nur Fakten, keine ausformulierten
/// Sätze.
///
/// **Warum keine Gegenüberstellung mehr (Stand 2026-09-17).** Bis zum
/// 2026-09-16 stellte diese Karte zwei Spalten gegenüber, zuerst
/// „Kostenlos vs. App", danach „Ohne Konto vs. mit Konto". Beide Fassungen
/// behaupteten Funktionen ohne Anmeldung. Das ist falsch: Der Auth-Guard in
/// `app_router.dart` leitet jede Route außer den vier Rechtsseiten auf
/// `/signin` um. Ohne Konto ist in dieser App nichts nutzbar. Die Umbenennung
/// vom 2026-09-16 hatte den Fehler sogar verschärft, weil die linke Spalte
/// seither „Kundenkarte & Kaufhistorie" ohne Konto versprach.
///
/// Eine Spalte, die nichts enthält, ist keine Gegenüberstellung. Deshalb jetzt
/// eine einfache Liste dessen, was das kostenlose Konto bringt. Sollte die
/// öffentliche Automatenseite aus Phase 1 entstehen (siehe
/// `docs/strategy/2026-09-16-umsetzungsplan.md`), kann die Gegenüberstellung
/// zurückkehren, dann aber mit belegbarem Inhalt auf beiden Seiten.
class AppBenefitsCompareCard extends StatelessWidget {
  const AppBenefitsCompareCard({super.key});

  // Rund um den Einkauf.
  static const _shared = <String>[
    'Automatenfinder & Navigation',
    'Echtzeit-Bestand',
    'Nährwerte & Allergene',
    'Kundenkarte & Kaufhistorie',
    'News & Favoriten',
    'Kontakt & Reklamation',
  ];

  // Sparen. Non-breaking spaces vor %/€/−, damit keine Waisen-Umbrüche
  // entstehen (Zahl + Zeichen bleiben zusammen).
  static const _appOnly = <String>[
    '5 % Dauerrabatt',
    'Status-Rabatt bis 10 %',
    'Deals & Angebote −10 %',
    'Bonuspunkte & Coupons 5–25 %',
    'Geburtstagsgutschein',
    'Digitale Belege',
  ];

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: EdgeInsets.zero,
      child: Column(
        children: [
          const _CompareHeader(),
          const Divider(height: 1, color: AppColors.borderSubtle),
          const _GroupLabel('Rund um den Einkauf'),
          for (final f in _shared) _CompareRow(label: f),
          const _GroupLabel('Sparen'),
          for (final f in _appOnly) _CompareRow(label: f),
          const _PriceRow(),
        ],
      ),
    );
  }
}

/// Vollbild-Variante des Vergleichs (Deeplink/Chatbot). Die Vorteilsseite
/// bettet die Karte inline ein und braucht diesen Screen nicht mehr.
class AppBenefitsCompareScreen extends StatelessWidget {
  const AppBenefitsCompareScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Dein kostenloses Konto')),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s4),
        children: [
          Text(
            'Anmelden kostet nichts und schaltet alles frei.',
            style: AppTypography.body(size: 13, color: AppColors.textMuted)
                .copyWith(height: 1.4),
          ),
          const SizedBox(height: AppSpacing.s4),
          const AppBenefitsCompareCard(),
          const SizedBox(height: AppSpacing.s4),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.ink,
                foregroundColor: AppColors.brand,
                padding: const EdgeInsets.symmetric(vertical: 13),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Zurück zu deinen Vorteilen'),
            ),
          ),
        ],
      ),
    );
  }
}

// Feste Spaltenbreite, damit die Haken sauber unter der Kopfzeile sitzen.
const double _colApp = 82;

class _CompareHeader extends StatelessWidget {
  const _CompareHeader();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s4,
        AppSpacing.s3,
        AppSpacing.s3,
        AppSpacing.s3,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          const Expanded(child: SizedBox()),
          SizedBox(
            width: _colApp,
            child: Container(
              padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 4),
              decoration: BoxDecoration(
                color: AppColors.ink,
                borderRadius: BorderRadius.circular(AppRadii.sm),
              ),
              child: Column(
                children: [
                  Text(
                    'Mit Konto',
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w800,
                      color: AppColors.brand,
                    ),
                  ),
                  Text(
                    '0 €',
                    style: AppTypography.display(
                      size: 15,
                      weight: FontWeight.w800,
                      color: AppColors.onDark,
                    ),
                  ),
                  Text(
                    'kostenlos',
                    style: AppTypography.body(
                      size: 9,
                      color: AppColors.onDark.withValues(alpha: 0.7),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _GroupLabel extends StatelessWidget {
  const _GroupLabel(this.text);
  final String text;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      color: AppColors.surfaceAlt,
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: 6,
      ),
      child: Text(
        text.toUpperCase(),
        style: AppTypography.body(
          size: 9.5,
          weight: FontWeight.w800,
          color: AppColors.textMuted,
        ).copyWith(letterSpacing: 0.6),
      ),
    );
  }
}

/// Eine Leistungszeile. Es gibt nur noch einen Haken: Was hier steht, ist mit
/// dem kostenlosen Konto enthalten. Eine zweite Spalte gab es bis zum
/// 2026-09-17; sie behauptete Funktionen ohne Anmeldung, die der Auth-Guard
/// nicht zulässt (siehe Klassenkommentar oben).
class _CompareRow extends StatelessWidget {
  const _CompareRow({required this.label});
  final String label;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(color: AppColors.borderSubtle, width: 0.6),
        ),
      ),
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Row(
        children: [
          Expanded(
            child: Text(
              label,
              style: AppTypography.body(
                size: 12.5,
                weight: FontWeight.w600,
                color: AppColors.ink,
              ),
            ),
          ),
          const SizedBox(
            width: _colApp,
            child: Center(
              child: Icon(
                Icons.check_circle,
                size: 18,
                color: AppColors.brandDark,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _PriceRow extends StatelessWidget {
  const _PriceRow();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s4,
        AppSpacing.s3,
        AppSpacing.s3,
        AppSpacing.s4,
      ),
      child: Row(
        children: [
          Expanded(
            child: Text(
              'Kein Abo, keine Laufzeit, keine Kündigung — Anmelden genügt.',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
          ),
        ],
      ),
    );
  }
}
