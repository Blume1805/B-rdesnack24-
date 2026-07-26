import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Kompakte Anzeige einer Durchschnittsbewertung: gefüllte Marken-Gold-
/// Sterne (leer = borderSubtle), rechts der Durchschnittswert und in
/// Klammern die Anzahl der Bewertungen — Format wie in Handels-Apps
/// üblich (z. B. „★ 4,3 (127)").
class RatingStars extends StatelessWidget {
  const RatingStars({
    super.key,
    required this.rating,
    required this.count,
    this.size = 14,
    this.showText = true,
  });

  final double rating;
  final int count;
  final double size;
  final bool showText;

  @override
  Widget build(BuildContext context) {
    final full = rating.floor();
    final half = (rating - full) >= 0.5;
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        for (int i = 0; i < 5; i++)
          Icon(
            i < full
                ? Icons.star_rounded
                : (i == full && half
                    ? Icons.star_half_rounded
                    : Icons.star_outline_rounded),
            size: size,
            color: i < full || (i == full && half)
                ? AppColors.brand
                : AppColors.borderSubtle,
          ),
        if (showText) ...[
          const SizedBox(width: 4),
          Text(
            count == 0
                ? '—'
                : '${rating.toStringAsFixed(1).replaceAll('.', ',')} '
                    '($count)',
            style: AppTypography.body(
              size: size,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
        ],
      ],
    );
  }
}

/// Interaktive 1-5-Sterne-Bewertung.  Nutzer tippt auf einen Stern → callback
/// mit dem Wert (1..5).  Kein Zurücksetzen — die Bewertung wird sofort
/// gespeichert.
class RatingInput extends StatelessWidget {
  const RatingInput({
    super.key,
    required this.value,
    required this.onChanged,
    this.size = 34,
  });

  final int? value;
  final ValueChanged<int> onChanged;
  final double size;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        for (int i = 1; i <= 5; i++)
          IconButton(
            tooltip: '$i von 5 Sternen',
            padding: EdgeInsets.zero,
            constraints:
                BoxConstraints.tightFor(width: size + 8, height: size + 8),
            splashRadius: size,
            icon: Icon(
              (value ?? 0) >= i
                  ? Icons.star_rounded
                  : Icons.star_outline_rounded,
              size: size,
              color:
                  (value ?? 0) >= i ? AppColors.brand : AppColors.borderSubtle,
            ),
            onPressed: () => onChanged(i),
          ),
      ],
    );
  }
}
