import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
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
      threshold: 'ab 150 €',
      percent: '6 %',
      breakdown: '5 % Abo + 1 % Status',
      // Bronze-Verlauf, heller oben.
      gradient: [Color(0xFFCBA26A), Color(0xFF9A7440)],
      onColor: Colors.white,
    ),
    _Tier(
      code: 'silber',
      name: 'SILBER',
      threshold: 'ab 500 €',
      percent: '7,5 %',
      breakdown: '5 % Abo + 2,5 % Status',
      gradient: [Color(0xFFDDE1E6), Color(0xFFB2B8BF)],
      onColor: AppColors.ink,
    ),
    _Tier(
      code: 'gold',
      name: 'GOLD',
      threshold: 'ab 1.000 €',
      percent: '10 %',
      breakdown: '5 % Abo + 5 % Status',
      gradient: [Color(0xFFFDD65A), Color(0xFFE0A500)],
      onColor: AppColors.ink,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    // Feste Kachelbreite + horizontales Scrollen: verhindert Umbrüche wegen
    // einzelner Zeichen (%/€) auf schmalen Displays und hält die Fakten
    // gut lesbar nebeneinander.
    return SizedBox(
      height: 118,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        physics: const BouncingScrollPhysics(),
        padding: EdgeInsets.zero,
        itemCount: _tiers.length,
        separatorBuilder: (_, __) => const SizedBox(width: AppSpacing.s3),
        itemBuilder: (context, i) => _TierTile(
          tier: _tiers[i],
          reached: currentCode != null &&
              _rank(currentCode!) >= _rank(_tiers[i].code),
        ),
      ),
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
                  '${tier.name} · ${tier.threshold}',
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
