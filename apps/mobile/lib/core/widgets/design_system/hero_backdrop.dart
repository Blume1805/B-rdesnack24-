import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Ink-farbener „Hero"-Bereich mit Marken-Foto (Automat + leuchtender
/// Bördekreis-Umriss + Wortmarke + Slogan). Das Foto liegt als Asset unter
/// `assets/images/brand_hero_wide.png` und enthält den Slogan bereits als
/// Teil der Grafik — deshalb keine separate Tagline mehr, damit der graue
/// Balken darunter verschwindet und das Motiv harmonisch bleibt. Der
/// Container wächst mit der Bildschirmbreite und rendert das Motiv immer
/// vollständig (BoxFit.contain).
class HeroBackdrop extends StatelessWidget {
  const HeroBackdrop({
    super.key,
    this.tagline,
    this.minHeight = 220,
    this.maxHeight = 360,
    this.imageAspectRatio = 1500 / 1000,
  });

  /// Wird nicht mehr gerendert — der Slogan ist Teil des Marken-Bildes.
  /// Bleibt aus Kompatibilitätsgründen im Konstruktor, damit bestehende
  /// Aufrufer nicht geändert werden müssen.
  final String? tagline;
  final double minHeight;
  final double maxHeight;
  final double imageAspectRatio;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        final naturalHeight = width / imageAspectRatio;
        final target = naturalHeight.clamp(minHeight, maxHeight);
        return SizedBox(
          width: width,
          height: target,
          child: Container(
            color: AppColors.ink,
            child: Image.asset(
              'assets/images/brand_hero_wide.png',
              fit: BoxFit.contain,
              alignment: Alignment.center,
            ),
          ),
        );
      },
    );
  }
}
