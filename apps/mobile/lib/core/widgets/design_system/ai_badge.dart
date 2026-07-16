import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Sichtbare Kennzeichnung für KI-generierte oder algorithmisch
/// erstellte Inhalte im Kundenbereich. Erfüllt die Transparenz-Pflicht
/// aus Art. 50 EU AI Act: der Nutzer muss unmittelbar erkennen können,
/// wo er mit einem AI-System oder AI-generierten Inhalten interagiert.
///
/// Der Chip ist tap-bar und öffnet — sofern `onTap` gesetzt — den
/// AiInfoScreen mit Zweck, Datenverarbeitung, Widerspruchs-Weg und
/// Beschwerde-Möglichkeit.
class AiBadge extends StatelessWidget {
  const AiBadge({
    super.key,
    this.label = 'KI',
    this.onTap,
    this.dense = false,
  });

  final String label;
  final VoidCallback? onTap;
  final bool dense;

  @override
  Widget build(BuildContext context) {
    final chip = Container(
      padding: EdgeInsets.symmetric(
        horizontal: dense ? 8 : 10,
        vertical: dense ? 4 : 5,
      ),
      decoration: BoxDecoration(
        color: AppColors.brand,
        border: Border.all(color: AppColors.ink, width: 1.2),
        borderRadius: BorderRadius.circular(AppRadii.pill),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.auto_awesome,
              size: dense ? 12 : 14, color: AppColors.ink),
          const SizedBox(width: 4),
          Text(
            label,
            style: AppTypography.body(
              size: dense ? 10 : 11,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ).copyWith(letterSpacing: 0.6),
          ),
          if (onTap != null) ...[
            const SizedBox(width: 4),
            Icon(Icons.info_outline,
                size: dense ? 12 : 13, color: AppColors.ink),
          ],
        ],
      ),
    );
    if (onTap == null) return chip;
    return InkWell(
      borderRadius: BorderRadius.circular(AppRadii.pill),
      onTap: onTap,
      child: chip,
    );
  }
}
