import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Ink-farbener „Hero"-Bereich mit Marken-Foto (Automat + leuchtender
/// Bördekreis-Umriss + Wortmarke).  Das Foto liegt als Asset unter
/// `assets/images/brand_hero.jpg` und wird passend zugeschnitten
/// eingeblendet; ein dunkler Gradient sorgt dafür, dass später
/// darübergelegte Inhalte (Tagline, Formularübergang) lesbar bleiben.
class HeroBackdrop extends StatelessWidget {
  const HeroBackdrop({
    super.key,
    this.height = 320,
    this.tagline,
  });

  final double height;
  final String? tagline;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      child: Stack(
        fit: StackFit.expand,
        children: [
          // Ink-Basis, damit an den Rändern nie ein weißer Blitz durchkommt.
          Container(color: AppColors.ink),
          // Marken-Foto (Bördekreis-Umriss + Automat + Wortmarke).
          Image.asset(
            'assets/images/brand_hero.jpg',
            fit: BoxFit.cover,
            alignment: Alignment.center,
          ),
          // Unten leichter Dunkel-Verlauf, damit die Tagline lesbar bleibt
          // und der Übergang zum Cream-Formular sanft wirkt.
          const DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                stops: [0.55, 1.0],
                colors: [Color(0x00000000), Color(0xCC14110E)],
              ),
            ),
          ),
          if (tagline != null)
            Positioned(
              left: AppSpacing.s5,
              right: AppSpacing.s5,
              bottom: AppSpacing.s4,
              child: Text(
                tagline!,
                style: AppTypography.body(
                  size: 13,
                  weight: FontWeight.w600,
                  color: AppColors.onDark,
                ),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
            ),
        ],
      ),
    );
  }
}
