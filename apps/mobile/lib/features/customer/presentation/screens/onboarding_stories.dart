import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/brand_marks.dart';

const _prefsKey = 'bs24_onboarding_shown_v1';

/// Zeigt beim ersten Öffnen der Kunden-App drei Story-Cards und speichert
/// die Sichtung in SharedPreferences. Bei jedem weiteren Start kein-op.
Future<void> maybeShowOnboardingStories(BuildContext context) async {
  final prefs = await SharedPreferences.getInstance();
  if (prefs.getBool(_prefsKey) ?? false) return;
  if (!context.mounted) return;
  await showDialog(
    context: context,
    barrierDismissible: false,
    builder: (_) => const _OnboardingDialog(),
  );
  await prefs.setBool(_prefsKey, true);
}

class _OnboardingDialog extends StatefulWidget {
  const _OnboardingDialog();
  @override
  State<_OnboardingDialog> createState() => _OnboardingDialogState();
}

class _OnboardingDialogState extends State<_OnboardingDialog> {
  final _pageCtrl = PageController();
  int _page = 0;

  static const _pages = <_StoryPage>[
    _StoryPage(
      icon: Icons.qr_code_2,
      eyebrow: 'Kundenkarte',
      title: 'Am Automaten scannen',
      body: 'Öffne die App und zeige deinen QR-Code am Automaten — Rabatte, '
          'Punkte und (bei Unternehmern) die Rechnung werden automatisch '
          'verknüpft.',
    ),
    _StoryPage(
      icon: Icons.stars_rounded,
      eyebrow: 'Punktesystem',
      title: 'Sammeln und sparen',
      body: 'Jeder Cent Umsatz = 1 Punkt. Bei 500 · 1200 · 2000 · 3000 '
          'Punkten schaltest du 5 · 10 · 15 · 25 % Rabatt frei.',
    ),
    _StoryPage(
      icon: Icons.volunteer_activism,
      eyebrow: '5 % für den guten Zweck',
      title: 'Deine Spende zählt',
      body: '5 % jedes Netto-Umsatzes wandern in einen Spendentopf. Du '
          'entscheidest über die Empfänger — Vorschlagen, Abstimmen, '
          'nachlesen wohin es geht.',
    ),
  ];

  @override
  void dispose() {
    _pageCtrl.dispose();
    super.dispose();
  }

  void _next() {
    if (_page < _pages.length - 1) {
      _pageCtrl.nextPage(
          duration: const Duration(milliseconds: 250), curve: Curves.easeOut);
    } else {
      Navigator.of(context).pop();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.all(AppSpacing.s5),
      child: Container(
        decoration: BoxDecoration(
          color: AppColors.surfaceCard,
          borderRadius: BorderRadius.circular(AppRadii.lg),
          border: Border.all(color: AppColors.brand, width: 1.5),
        ),
        padding: const EdgeInsets.all(AppSpacing.s5),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const BrandIcon(size: 44, color: AppColors.brand),
            const SizedBox(height: AppSpacing.s3),
            SizedBox(
              height: 300,
              child: PageView.builder(
                controller: _pageCtrl,
                itemCount: _pages.length,
                onPageChanged: (i) => setState(() => _page = i),
                itemBuilder: (_, i) => _pages[i].build(context),
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                for (int i = 0; i < _pages.length; i++)
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    margin: const EdgeInsets.symmetric(horizontal: 3),
                    width: _page == i ? 20 : 8,
                    height: 8,
                    decoration: BoxDecoration(
                      color:
                          _page == i ? AppColors.brand : AppColors.borderSubtle,
                      borderRadius: BorderRadius.circular(4),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: AppSpacing.s4),
            Row(
              children: [
                TextButton(
                  onPressed: () => Navigator.of(context).pop(),
                  child: Text(
                    'Überspringen',
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w700,
                      color: AppColors.textMuted,
                    ),
                  ),
                ),
                const Spacer(),
                FilledButton.icon(
                  onPressed: _next,
                  icon: Icon(
                    _page < _pages.length - 1
                        ? Icons.arrow_forward
                        : Icons.check,
                    size: 18,
                  ),
                  label: Text(
                    _page < _pages.length - 1 ? 'Weiter' : 'Los geht’s',
                  ),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppColors.brand,
                    foregroundColor: AppColors.ink,
                    padding: const EdgeInsets.symmetric(
                        horizontal: AppSpacing.s5, vertical: 12),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _StoryPage {
  const _StoryPage({
    required this.icon,
    required this.eyebrow,
    required this.title,
    required this.body,
  });
  final IconData icon;
  final String eyebrow;
  final String title;
  final String body;

  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(height: 4),
        Container(
          width: 80,
          height: 80,
          decoration: BoxDecoration(
            color: AppColors.brandLight,
            border: Border.all(color: AppColors.brand),
            borderRadius: BorderRadius.circular(AppRadii.lg),
          ),
          alignment: Alignment.center,
          child: Icon(icon, size: 44, color: AppColors.ink),
        ),
        const SizedBox(height: AppSpacing.s4),
        Text(
          eyebrow,
          style: AppTypography.body(
            size: 12,
            weight: FontWeight.w800,
            color: AppColors.brand,
          ).copyWith(letterSpacing: 1),
        ),
        const SizedBox(height: 4),
        Text(
          title,
          style: AppTypography.display(
            size: 22,
            weight: FontWeight.w800,
            color: AppColors.ink,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: AppSpacing.s3),
        Text(
          body,
          textAlign: TextAlign.center,
          style: AppTypography.body(
            size: 14,
            color: AppColors.textDefault,
          ),
        ),
      ],
    );
  }
}
