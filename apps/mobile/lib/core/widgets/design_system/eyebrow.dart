import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Kleine Vorüberschrift in Marken-Gold (#FDC102) — Signatur-Element
/// des Bördesnack24-Designsystems.
class Eyebrow extends StatelessWidget {
  const Eyebrow(this.text, {super.key, this.onDark = false});

  final String text;

  /// Für Kontraste auf dunklen Flächen: rein zur Farbwahl (leichtes Gold).
  /// Weil die Marken-Gold-Farbe auf hellen wie dunklen Flächen gut liest,
  /// bleibt sie in beiden Fällen dieselbe.
  final bool onDark;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: AppTypography.body(
        size: 13,
        weight: FontWeight.w700,
        color: AppColors.brand,
      ).copyWith(letterSpacing: 0.2, height: 1.2),
    );
  }
}
