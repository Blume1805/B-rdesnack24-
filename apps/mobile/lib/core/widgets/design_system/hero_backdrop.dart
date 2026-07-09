import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Ink-farbener „Hero"-Bereich mit Marken-Foto (Automat + leuchtender
/// Bördekreis-Umriss + Wortmarke). Das Foto liegt als Asset unter
/// `assets/images/brand_hero.jpg`. Der Container wächst mit der Bildschirm-
/// breite: Für ein Foto im Seitenverhältnis 1,5 : 1 rendert er auf
/// 390-px-Breite ca. 260 px hoch, auf 780-px-Breite ca. 340 px hoch.
/// So bleibt das gesamte Motiv (Wortmarke + Automat + Bördekreis-Umriss)
/// jederzeit vollständig sichtbar — kein Zuschneiden.
class HeroBackdrop extends StatelessWidget {
  const HeroBackdrop({
    super.key,
    this.tagline,
    this.minHeight = 220,
    this.maxHeight = 360,
    this.imageAspectRatio = 1400 / 933,
  });

  final String? tagline;
  final double minHeight;
  final double maxHeight;
  final double imageAspectRatio;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        // Höhe an das echte Bildseitenverhältnis koppeln — plus Zusatz-
        // Platz für die Tagline unten.
        final naturalHeight = width / imageAspectRatio;
        final taglineExtra = (tagline == null || tagline!.isEmpty) ? 0.0 : 40.0;
        final target = (naturalHeight + taglineExtra)
            .clamp(minHeight, maxHeight);

        return SizedBox(
          width: width,
          height: target,
          child: Stack(
            fit: StackFit.expand,
            children: [
              // Ink-Basis: rahmt das Bild in Marken-Dunkel und verdeckt
              // ggf. kleine Farbsäume an den Rändern.
              Container(color: AppColors.ink),
              // Marken-Foto — vollständig sichtbar, mittig ausgerichtet.
              Padding(
                padding: EdgeInsets.only(bottom: taglineExtra),
                child: Image.asset(
                  'assets/images/brand_hero.jpg',
                  fit: BoxFit.contain,
                  alignment: Alignment.center,
                ),
              ),
              if (tagline != null && tagline!.isNotEmpty)
                Positioned(
                  left: AppSpacing.s5,
                  right: AppSpacing.s5,
                  bottom: AppSpacing.s3,
                  child: Text(
                    tagline!,
                    textAlign: TextAlign.center,
                    style: AppTypography.body(
                      size: 14,
                      weight: FontWeight.w700,
                      color: AppColors.brand,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
            ],
          ),
        );
      },
    );
  }
}
