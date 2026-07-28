import 'package:flutter/material.dart';

import '../../motion/motion.dart';
import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import 'footnote_mark.dart';
import '../../utils/formatters.dart';

/// Preiszeile für Rabatt-Angebote: neuer Preis groß, alter Preis
/// durchgestrichen dahinter, prozentualer Rabatt als Gold-Badge.
class PriceRow extends StatelessWidget {
  const PriceRow({
    super.key,
    required this.regular,
    required this.discounted,
    this.discountPercent,
    this.size = 26,
    this.showBadge = true,
  });

  final double regular;
  final double discounted;
  final double? discountPercent;
  final double size;
  final bool showBadge;

  double get _percent {
    if (discountPercent != null && discountPercent! > 0) {
      return discountPercent!;
    }
    if (regular <= 0) return 0;
    return ((regular - discounted) / regular) * 100;
  }

  @override
  Widget build(BuildContext context) {
    final pct = _percent;
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        // Rabattierter Preis prominent, in Marken-Ink. Ändert sich der
        // Rabatt (Abo abgeschlossen, Status-Stufe erreicht, Coupon
        // aktiviert), zählt der Preis sichtbar auf den neuen Wert —
        // genau die Zahl, auf die es dem Kunden ankommt.
        AnimatedCountUp(
          value: discounted,
          format: Formatters.euro,
          style: AppTypography.display(
            size: size,
            weight: FontWeight.w800,
            color: AppColors.ink,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        // Alter Preis durchgestrichen.
        Text(
          Formatters.euro(regular),
          style: AppTypography.body(
            size: size * 0.55,
            weight: FontWeight.w600,
            color: AppColors.textMuted,
          ).copyWith(
            decoration: TextDecoration.lineThrough,
            decorationColor: AppColors.textMuted,
            decorationThickness: 2,
          ),
        ),
        if (showBadge && pct > 0) ...[
          const SizedBox(width: AppSpacing.s3),
          DiscountBadge(percent: pct),
        ],
      ],
    );
  }
}

/// Prozent-Rabatt-Chip in Gold (Signature-Element für Aktionen).
class DiscountBadge extends StatelessWidget {
  const DiscountBadge({super.key, required this.percent, this.dense = false});

  final double percent;
  final bool dense;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: dense ? AppSpacing.s2 : AppSpacing.s3,
        vertical: dense ? 2 : 4,
      ),
      decoration: BoxDecoration(
        color: AppColors.brand,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        boxShadow: AppShadows.sm,
      ),
      child: StarredText(
        '-${percent.toStringAsFixed(0)} %',
        style: AppTypography.body(
          size: dense ? 12 : 14,
          weight: FontWeight.w800,
          color: AppColors.ink,
        ).copyWith(letterSpacing: 0.2),
      ),
    );
  }
}
