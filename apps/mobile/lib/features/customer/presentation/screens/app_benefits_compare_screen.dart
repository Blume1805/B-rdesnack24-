import 'package:flutter/material.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// „Kostenlos vs. App" — der Mehrwert-Vergleich als wiederverwendbare Karte
/// (wird direkt im Abo-Screen eingebettet, Layout orientiert an einer klaren
/// Feature-Matrix: Funktion · Kostenlos · App). Bewusst textarm — nur Fakten
/// mit Haken/Strich, keine ausformulierten Sätze.
class AppBenefitsCompareCard extends StatelessWidget {
  const AppBenefitsCompareCard({super.key});

  // In allen Varianten enthalten (kostenlos + App).
  static const _shared = <String>[
    'Automatenfinder & Navigation',
    'Echtzeit-Bestand',
    'Nährwerte & Allergene',
    'Kundenkarte & Kaufhistorie',
    'News & Favoriten',
    'Kontakt & Reklamation',
  ];

  // Nur mit App (Spar- und Extra-Vorteile). Non-breaking spaces vor %/€/−,
  // damit keine Waisen-Umbrüche entstehen (Zahl + Zeichen bleiben zusammen).
  static const _appOnly = <String>[
    '5 % Dauerrabatt',
    'Status-Rabatt bis 10 %',
    'Deals & Angebote −10 %',
    'Bonuspunkte & Coupons\n5–25 %',
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
          const _GroupLabel('In allen Varianten'),
          for (final f in _shared) _CompareRow(label: f, free: true, app: true),
          const _GroupLabel('Nur mit App'),
          for (final f in _appOnly)
            _CompareRow(label: f, free: false, app: true),
          const _PriceRow(),
        ],
      ),
    );
  }
}

/// Vollbild-Variante des Vergleichs (Deeplink/Chatbot). Die Abo-Seite selbst
/// bettet die Karte inline ein und braucht diesen Screen nicht mehr.
class AppBenefitsCompareScreen extends StatelessWidget {
  const AppBenefitsCompareScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Kostenlos vs. App')),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s4),
        children: [
          Text(
            'App-Variante = alles aus Kostenlos + jeder Spar-Vorteil.',
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
              child: const Text('Zu den Abo-Modellen'),
            ),
          ),
        ],
      ),
    );
  }
}

// Feste Spaltenbreiten, damit Haken sauber unter den Kopfzeilen sitzen.
const double _colFree = 66;
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
          // Zeilenkopf für die Feature-Spalte — füllt die sonst leere weiße
          // Fläche links neben den beiden Preis-Spalten.
          Expanded(
            child: Text(
              'Was du bekommst',
              style: AppTypography.body(
                size: 13,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
          ),
          SizedBox(
            width: _colFree,
            child: Column(
              children: [
                Text(
                  'Kostenlos',
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w800,
                    color: AppColors.textMuted,
                  ),
                ),
                Text(
                  '0 €',
                  style: AppTypography.display(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ],
            ),
          ),
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
                    'App',
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w800,
                      color: AppColors.brand,
                    ),
                  ),
                  Text(
                    '0,99 €',
                    style: AppTypography.display(
                      size: 15,
                      weight: FontWeight.w800,
                      color: AppColors.onDark,
                    ),
                  ),
                  Text(
                    '/ Monat',
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

class _CompareRow extends StatelessWidget {
  const _CompareRow({
    required this.label,
    required this.free,
    required this.app,
  });
  final String label;
  final bool free;
  final bool app;

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
          SizedBox(width: _colFree, child: Center(child: _mark(free, false))),
          SizedBox(width: _colApp, child: Center(child: _mark(app, true))),
        ],
      ),
    );
  }

  Widget _mark(bool on, bool gold) {
    if (!on) {
      return const Icon(Icons.remove, size: 16, color: AppColors.textMuted);
    }
    return Icon(
      Icons.check_circle,
      size: 18,
      color: gold ? AppColors.brandDark : AppColors.statusPositive,
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
              'oder 9,99 € / Jahr (2 Monate geschenkt)',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
          ),
        ],
      ),
    );
  }
}
