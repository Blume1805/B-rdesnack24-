import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Kleine Vorüberschrift in Marken-Gold (#FDC102) — Signatur-Element
/// des Bördesnack24-Designsystems.
class Eyebrow extends StatelessWidget {
  const Eyebrow(this.text, {super.key, this.onDark = false});

  final String text;

  /// Farbwahl nach Untergrund: auf dunklen Flächen das volle Marken-Gold,
  /// auf hellen Flächen der WCAG-konforme Text-Goldton [AppColors.brandText]
  /// (BFSG: mindestens 4,5:1 Kontrast für Text dieser Größe).
  final bool onDark;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: AppTypography.body(
        size: 16,
        weight: FontWeight.w800,
        color: onDark ? AppColors.brand : AppColors.brandText,
      ).copyWith(letterSpacing: 0.1, height: 1.2),
    );
  }
}
