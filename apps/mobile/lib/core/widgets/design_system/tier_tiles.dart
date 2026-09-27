import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import '../motion/motion.dart';

/// Metallische Status-Kacheln (Bronze · Silber · Gold) für den lebenslangen
/// Dauerrabatt. Wird sowohl im Status-/Belohnungen-Screen als auch im
/// Abo-Vergleich verwendet. Jede Kachel trägt ihre echte Metallfarbe
/// (Bronze/Silber/Gold) mit Verlauf; die erreichte Stufe wird hervorgehoben.
class TierTiles extends StatelessWidget {
  const TierTiles({super.key, this.currentCode});

  /// Aktuelle Stufe des Kunden (`bronze`/`silber`/`gold`), falls bekannt —
  /// bekommt eine „Erreicht"-Markierung. `null` = neutral (Marketing).
  final String? currentCode;

  static const _tiers = <_Tier>[
    _Tier(
      code: 'bronze',
      name: 'Bronze',
      threshold: 'ab 150 €',
      percent: '6 %',
      breakdown: '5 % Grund + 1 % Status',
      // Bronze-Verlauf, heller oben.
      // Unteres Ende aufgehellt (vorher 0xFF9A7440): Ink darauf erreicht so
      // mindestens 4,5:1. Vorher stand hier Weiß mit 2,4:1 (Befund 26.09.2026).
      gradient: [Color(0xFFCBA26A), Color(0xFFB68A4E)],
      onColor: AppColors.onBrand,
    ),
    _Tier(
      code: 'silber',
      name: 'Silber',
      threshold: 'ab 500 €',
      percent: '7,5 %',
      breakdown: '5 % Grund + 2,5 % Status',
      gradient: [Color(0xFFDDE1E6), Color(0xFFB2B8BF)],
      onColor: AppColors.onBrand,
    ),
    _Tier(
      code: 'gold',
      name: 'Gold',
      threshold: 'ab 1.000 €',
      percent: '10 %',
      breakdown: '5 % Grund + 5 % Status',
      gradient: [Color(0xFFFDD65A), Color(0xFFE0A500)],
      onColor: AppColors.onBrand,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    // Feste Kachelbreite, Reihe breiter als ein Telefon: verhindert
    // Umbrüche bei %/€ auf schmalen Displays. Muster 07: Die Reihe läuft beim
    // Scrollen von Bronze nach Gold mit und bleibt von Hand wischbar.
    return ScrollLinkedStrip(
      height: 118,
      children: [
        for (final t in _tiers)
          _TierTile(
            tier: t,
            reached:
                currentCode != null && _rank(currentCode!) >= _rank(t.code),
          ),
      ],
    );
  }

  static int _rank(String code) => switch (code) {
        'gold' => 3,
        'silber' => 2,
        'bronze' => 1,
        _ => 0,
      };
}

class _Tier {
  const _Tier({
    required this.code,
    required this.name,
    required this.threshold,
    required this.percent,
    required this.breakdown,
    required this.gradient,
    required this.onColor,
  });
  final String code;
  final String name;
  final String threshold;
  final String percent;
  final String breakdown;
  final List<Color> gradient;
  final Color onColor;
}

class _TierTile extends StatelessWidget {
  const _TierTile({required this.tier, required this.reached});
  final _Tier tier;
  final bool reached;

  @override
  Widget build(BuildContext context) {
    // Volle Deckkraft auch für die leise Zeile: 85 % Ink erreichten auf dem
    // dunklen Bronzeton nur 4,07:1 (contrast_test, 27.09.2026). Die
    // Abstufung trägt jetzt allein die Schriftstärke.
    final muted = tier.onColor;
    return Container(
      width: 172,
      padding: const EdgeInsets.all(AppSpacing.s3),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: tier.gradient,
        ),
        borderRadius: BorderRadius.circular(AppRadii.lg),
        border: reached
            ? Border.all(color: tier.onColor.withValues(alpha: 0.9), width: 2)
            : null,
        boxShadow: [
          BoxShadow(
            color: tier.gradient.last.withValues(alpha: 0.35),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  '${tier.name} ${tier.threshold}',
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: AppTypography.body(
                    size: 10,
                    weight: FontWeight.w800,
                    color: muted,
                  ).copyWith(letterSpacing: 0.4),
                ),
              ),
              if (reached)
                Icon(Icons.check_circle, size: 15, color: tier.onColor),
            ],
          ),
          const Spacer(),
          Text(
            tier.percent,
            maxLines: 1,
            style: AppTypography.display(
              size: 28,
              weight: FontWeight.w800,
              color: tier.onColor,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            tier.breakdown,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: AppTypography.body(size: 11, color: muted),
          ),
        ],
      ),
    );
  }
}
