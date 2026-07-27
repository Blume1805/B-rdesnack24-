import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import 'motion_slider.dart';
import '../../theme/app_typography.dart';

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
      name: 'BRONZE',
      threshold: 'ab 150 € Umsatz',
      percent: '6 %',
      breakdown: '5 % Abo + 1 % Status',
      // Bronze-Verlauf, heller oben.
      gradient: [Color(0xFFCBA26A), Color(0xFF9A7440)],
      onColor: Colors.white,
    ),
    _Tier(
      code: 'silber',
      name: 'SILBER',
      threshold: 'ab 500 € Umsatz',
      percent: '7,5 %',
      breakdown: '5 % Abo + 2,5 % Status',
      gradient: [Color(0xFFDDE1E6), Color(0xFFB2B8BF)],
      onColor: AppColors.ink,
    ),
    _Tier(
      code: 'gold',
      name: 'GOLD',
      threshold: 'ab 1.000 € Umsatz',
      percent: '10 %',
      breakdown: '5 % Abo + 5 % Status',
      gradient: [Color(0xFFFDD65A), Color(0xFFE0A500)],
      onColor: AppColors.ink,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    // Slide statt Nebeneinander: die drei Stufen sind Alternativen, keine
    // Liste. Im Slider steht immer genau eine im Fokus, die Nachbarn
    // treten zurück — man vergleicht sie nacheinander statt sie zu
    // überfliegen. Startkarte ist die erreichte Stufe.
    final startIndex = currentCode == null
        ? 0
        : _tiers.indexWhere((t) => t.code == currentCode).clamp(0, 2);

    return MotionSlider(
      height: 128,
      initialPage: startIndex,
      viewportFraction: 0.62,
      children: [
        for (final tier in _tiers)
          _TierTile(
            tier: tier,
            reached:
                currentCode != null && _rank(currentCode!) >= _rank(tier.code),
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
    final muted = tier.onColor.withValues(alpha: 0.72);
    return Container(
      padding: const EdgeInsets.all(AppSpacing.s4),
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
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(
                child: Text.rich(
                  TextSpan(
                    children: [
                      TextSpan(
                        text: tier.name,
                        style: AppTypography.body(
                          size: 10,
                          weight: FontWeight.w800,
                          color: tier.onColor,
                        ).copyWith(letterSpacing: 0.4),
                      ),
                      const TextSpan(text: '  '),
                      TextSpan(
                        text: tier.threshold,
                        style: AppTypography.body(
                          size: 10,
                          weight: FontWeight.w500,
                          color: muted,
                        ).copyWith(letterSpacing: 0.4),
                      ),
                    ],
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.center,
                ),
              ),
              if (reached)
                Icon(Icons.check_circle, size: 15, color: tier.onColor),
            ],
          ),
          // Die Prozentzahl ist die eigentliche Aussage der Kachel:
          // mittig und groß, damit sie im Slider sofort trägt.
          Expanded(
            child: Center(
              child: FittedBox(
                fit: BoxFit.scaleDown,
                child: Text(
                  tier.percent,
                  maxLines: 1,
                  style: AppTypography.display(
                    size: 44,
                    weight: FontWeight.w800,
                    color: tier.onColor,
                  ).copyWith(height: 1),
                ),
              ),
            ),
          ),
          Text(
            tier.breakdown,
            maxLines: 1,
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: AppTypography.body(size: 11, color: muted),
          ),
        ],
      ),
    );
  }
}
