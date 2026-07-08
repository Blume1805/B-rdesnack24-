import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// „Eyebrow" — kleine Vorüberschrift in Gold, lowercase, mit End-Punkt.
/// Typografisches Signature-Element des Bördesnack24-Designsystems.
class Eyebrow extends StatelessWidget {
  const Eyebrow(this.text, {super.key, this.onDark = false});

  final String text;
  final bool onDark;

  @override
  Widget build(BuildContext context) {
    final normalized = text.trim().toLowerCase();
    final withDot = normalized.endsWith('.') ? normalized : '$normalized.';
    return Text(
      withDot,
      style: AppTypography.body(
        size: 12,
        weight: FontWeight.w700,
        color: onDark ? AppColors.brand : AppColors.brandDark,
      ).copyWith(letterSpacing: 0.6, height: 1),
    );
  }
}
