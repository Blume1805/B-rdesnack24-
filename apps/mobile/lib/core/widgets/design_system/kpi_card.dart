import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import 'app_card.dart';
import 'eyebrow.dart';

/// KPI-Kachel für Dashboards. Zeigt Label (Eyebrow) + Wert + optionalen
/// Trend/Untertitel.
class KpiCard extends StatelessWidget {
  const KpiCard({
    super.key,
    required this.label,
    required this.value,
    this.trailing,
    this.subtitle,
    this.emphasize = false,
    this.valueColor,
    this.icon,
  });

  final String label;
  final String value;
  final Widget? trailing;
  final String? subtitle;
  final bool emphasize;
  final Color? valueColor;
  final IconData? icon;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: emphasize ? AppColors.brandLight : AppColors.surfaceCard,
      borderColor: emphasize ? AppColors.brand : AppColors.borderSubtle,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              if (icon != null) ...[
                Icon(icon, size: 18, color: AppColors.brandDark),
                const SizedBox(width: 6),
              ],
              Expanded(child: Eyebrow(label)),
              if (trailing != null) trailing!,
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            value,
            style: AppTypography.display(
              size: 22,
              weight: FontWeight.w700,
              color: valueColor ?? AppColors.ink,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          if (subtitle != null) ...[
            const SizedBox(height: 2),
            Text(
              subtitle!,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
          ],
        ],
      ),
    );
  }
}
