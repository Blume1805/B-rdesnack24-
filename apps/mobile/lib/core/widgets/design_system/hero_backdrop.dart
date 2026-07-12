import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Ink-farbener „Hero"-Bereich mit Marken-Foto (Automat + leuchtender
/// Bördekreis-Umriss + Wortmarke + Slogan). Das Foto liegt als Asset unter
/// `assets/images/brand_hero_wide.png`. Der Container wächst mit der
/// Bildschirmbreite und rendert das Motiv immer vollständig (BoxFit.contain).
///
/// [showTaglineOverlay] blendet den Slogan noch einmal als eigene Text-Zeile
/// unter dem Bild ein (nützlich für den Login, wo der Slogan „Immer da, wenn
/// der Hunger kommt." ergänzend zum Bild erscheinen soll).
class HeroBackdrop extends StatelessWidget {
  const HeroBackdrop({
    super.key,
    this.tagline,
    this.minHeight = 220,
    this.maxHeight = 360,
    this.imageAspectRatio = 1500 / 1000,
    this.showTaglineOverlay = false,
  });

  final String? tagline;
  final double minHeight;
  final double maxHeight;
  final double imageAspectRatio;
  final bool showTaglineOverlay;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        final naturalHeight = width / imageAspectRatio;
        final target = naturalHeight.clamp(minHeight, maxHeight);
        return Container(
          width: width,
          color: AppColors.ink,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              SizedBox(
                width: width,
                height: target,
                child: Image.asset(
                  'assets/images/brand_hero_wide.png',
                  fit: BoxFit.contain,
                  alignment: Alignment.center,
                ),
              ),
              if (showTaglineOverlay && tagline != null) ...[
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppSpacing.s5,
                    0,
                    AppSpacing.s5,
                    AppSpacing.s4,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: const BoxDecoration(
                          color: AppColors.brand,
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 10),
                      Flexible(
                        child: Text(
                          tagline!,
                          textAlign: TextAlign.center,
                          style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w700,
                            color: AppColors.brand,
                          ).copyWith(letterSpacing: 0.4),
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ],
          ),
        );
      },
    );
  }
}
