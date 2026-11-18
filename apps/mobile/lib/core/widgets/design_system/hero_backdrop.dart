import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import 'marken_kopf_bild.dart';

/// Ink-farbener „Hero"-Bereich mit Marken-Foto (Automat + leuchtender
/// Bördekreis-Umriss + Wortmarke + Slogan). Das Foto liegt als Asset unter
/// `assets/images/brand_header_slogan.webp` (seit 18.11.2026, mit Slogan im
/// Bild; siehe [MarkenKopfBild]). Der Container wächst mit der
/// Bildschirmbreite und rendert das Motiv immer vollständig (BoxFit.contain).
///
/// [showTaglineOverlay] blendet den Slogan noch einmal als eigene Text-Zeile
/// unter dem Bild ein (nützlich für den Login, wo der Slogan „Genießen. Geben.
/// Gutes tun." ergänzend zum Bild erscheinen soll, Entscheidung 03.11.2026).
/// Der frühere Claim ist seit dem 27.09.2026 auch aus dem Bild selbst
/// retuschiert.
class HeroBackdrop extends StatelessWidget {
  const HeroBackdrop({
    super.key,
    this.tagline,
    this.minHeight = 220,
    this.maxHeight = 360,
    this.imageAspectRatio = 768 / 512,
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
          color: AppColors.canvas,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              SizedBox(
                width: width,
                height: target,
                // Markenbild mit Slogan (18.11.2026), Schwarz an die
                // App-Grundfarbe angeglichen, über die volle Breite.
                child: const MarkenKopfBild(
                  abdunkeln: 0,
                  semanticLabel: 'Bördesnack24: Genießen. Geben. Gutes tun. '
                      'Snackautomat mit Umrisskarte des Bördekreises',
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
