import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import 'app_card.dart';

/// Modulkachel für die Verwaltungs- und Kunden-Übersicht.
/// Icon-Badge in Gold, Titel + kurze Beschreibung, subtiler Chevron.
class ModuleTile extends StatelessWidget {
  const ModuleTile({
    super.key,
    required this.icon,
    required this.label,
    this.description,
    this.onTap,
    this.badge,
  });

  final IconData icon;
  final String label;
  final String? description;
  final VoidCallback? onTap;
  final Widget? badge;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      onTap: onTap,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: AppColors.brandLight,
                  borderRadius: BorderRadius.circular(AppRadii.md),
                  border:
                      Border.all(color: AppColors.brand.withValues(alpha: 0.4)),
                ),
                alignment: Alignment.center,
                child: Icon(icon, size: 22, color: AppColors.ink),
              ),
              const Spacer(),
              if (badge != null)
                badge!
              else
                const Icon(Icons.chevron_right, color: AppColors.textMuted),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            label,
            style: AppTypography.body(
              size: 15,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          if (description != null) ...[
            const SizedBox(height: 2),
            Text(
              description!,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
          ],
        ],
      ),
    );
  }
}
