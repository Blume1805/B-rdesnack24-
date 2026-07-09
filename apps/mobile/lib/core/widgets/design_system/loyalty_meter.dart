import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Kompakte Punktezähler-Kachel für den Header.
///
/// Zeigt die aktuelle Punktzahl links, rechts einen Mini-Fortschrittsbalken
/// zum nächsten Meilenstein und die Zahl "noch X zu …".  Ist bewusst schmal,
/// damit sie in die AppBar passt.
class LoyaltyMeter extends StatelessWidget {
  const LoyaltyMeter({
    super.key,
    required this.points,
    required this.nextTier,
    required this.pointsToNext,
    required this.progress,
    this.compact = true,
  });

  final int points;
  final int? nextTier;
  final int pointsToNext;
  final double progress;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: AppColors.ink,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        border: Border.all(color: AppColors.brand, width: 1.5),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Icon(Icons.stars_rounded, color: AppColors.brand, size: 16),
          const SizedBox(width: 6),
          Text(
            '$points Pkt.',
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w800,
              color: AppColors.brand,
            ).copyWith(height: 1),
          ),
          if (!compact && nextTier != null) ...[
            const SizedBox(width: 8),
            SizedBox(
              width: 46,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(AppRadii.pill),
                child: LinearProgressIndicator(
                  value: progress,
                  minHeight: 4,
                  backgroundColor: AppColors.brand.withValues(alpha: 0.25),
                  valueColor:
                      const AlwaysStoppedAnimation<Color>(AppColors.brand),
                ),
              ),
            ),
            const SizedBox(width: 6),
            Text(
              '$pointsToNext',
              style: AppTypography.body(
                size: 11,
                weight: FontWeight.w700,
                color: AppColors.onDark,
              ),
            ),
          ],
        ],
      ),
    );
  }
}
