import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

enum StatusTone { positive, warning, critical, info, neutral, brand }

/// Kleines Status-Chip (Pill), z. B. für „aktiv", „bald leer", „ausverkauft".
///
/// Dunkle, farbig getönte Flächen mit der Statusfarbe als Schrift (ADR 0008);
/// Kontraste in `test/core/theme/contrast_test.dart`.
class StatusBadge extends StatelessWidget {
  const StatusBadge({
    super.key,
    required this.label,
    this.tone = StatusTone.neutral,
    this.icon,
  });

  final String label;
  final StatusTone tone;
  final IconData? icon;

  ({Color bg, Color fg, Color border}) _colors() {
    switch (tone) {
      case StatusTone.positive:
        return (
          bg: AppColors.statusPositiveTint,
          fg: AppColors.statusPositive,
          border: AppColors.statusPositive
        );
      case StatusTone.warning:
        return (
          bg: AppColors.statusWarningTint,
          fg: AppColors.statusWarning,
          border: AppColors.statusWarning
        );
      case StatusTone.critical:
        return (
          bg: AppColors.statusCriticalTint,
          fg: AppColors.statusCritical,
          border: AppColors.statusCritical
        );
      case StatusTone.info:
        return (
          bg: AppColors.statusInfoTint,
          fg: AppColors.statusInfo,
          border: AppColors.statusInfo
        );
      case StatusTone.brand:
        return (
          bg: AppColors.brandLight,
          fg: AppColors.textStrong,
          border: AppColors.brand
        );
      case StatusTone.neutral:
        return (
          bg: AppColors.surfaceAlt,
          fg: AppColors.textMuted,
          border: AppColors.borderSubtle
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = _colors();
    return Container(
      padding:
          const EdgeInsets.symmetric(horizontal: AppSpacing.s3, vertical: 4),
      decoration: BoxDecoration(
        color: c.bg,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        border: Border.all(color: c.border.withValues(alpha: 0.4), width: 1),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (icon != null) ...[
            Icon(icon, size: 14, color: c.fg),
            const SizedBox(width: 4),
          ],
          Text(
            label,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: c.fg,
            ),
          ),
        ],
      ),
    );
  }
}
