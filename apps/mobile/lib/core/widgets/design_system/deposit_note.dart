import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import '../../utils/prices.dart';

/// „zzgl. 0,25 € Pfand" direkt beim Preis (§ 7 PAngV, COMPLIANCE V-016).
///
/// Ohne Pfand nimmt das Widget keinen Platz ein. Die Farbe ist `textMuted`
/// (Kontrast auf den hellen und dunklen Flächen ≥ 4,5:1); [color] nur
/// setzen, wo der Hintergrund es verlangt.
class DepositNote extends StatelessWidget {
  const DepositNote(this.deposit, {super.key, this.color});

  final double? deposit;
  final Color? color;

  @override
  Widget build(BuildContext context) {
    final text = Prices.depositNote(deposit);
    if (text == null) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: AppSpacing.s1),
      child: Text(
        text,
        style: AppTypography.body(
          size: 12.5,
          weight: FontWeight.w600,
          color: color ?? AppColors.textMuted,
        ),
      ),
    );
  }
}
