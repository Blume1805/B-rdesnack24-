import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Markenbild mit Slogan oben in jedem Seitenkopf (Wunsch Philipp
/// 18.11.2026, Referenzbild): vollständig, über die volle Breite, ohne
/// Abdunklung und ohne Transparenz.
///
/// Damit keine Bildkante sichtbar wird, ist das Schwarz des Bildes an die
/// Grundfarbe der App angeglichen (Verrechnung mit [AppColors.canvas] im
/// Modus „Screen": reines Schwarz wird genau zur Grundfarbe, alles Helle
/// bleibt unverändert). Nur der unterste Rand läuft weich in die Seite aus.
class MarkenKopfBild extends StatelessWidget {
  const MarkenKopfBild({super.key, this.semanticLabel});

  /// Nur setzen, wenn das Bild Inhalt trägt (z. B. Anmeldeseite).
  final String? semanticLabel;

  static const String asset = 'assets/images/brand_header_slogan.webp';

  /// Seitenverhältnis der Bilddatei (768 × 512).
  static const double seitenverhaeltnis = 768 / 512;

  @override
  Widget build(BuildContext context) {
    // Auf breiten Bildschirmen (Tablet, Browser am Rechner) wäre das Bild
    // über 500 px hoch. Darum höchstens [maxHoehe]; das Bild steht dann
    // mittig auf der Grundfarbe, ohne sichtbare Kante.
    return LayoutBuilder(
      builder: (context, c) {
        final hoehe = (c.maxWidth / seitenverhaeltnis).clamp(0.0, maxHoehe);
        return SizedBox(
          height: hoehe,
          width: double.infinity,
          child: _bild(),
        );
      },
    );
  }

  /// Höchsthöhe des Bildes in logischen Pixeln.
  static const double maxHoehe = 300;

  Widget _bild() {
    const grund = AppColors.canvas;
    return Stack(
      fit: StackFit.expand,
      children: [
        const ColoredBox(color: grund),
        Image.asset(
          asset,
          fit: BoxFit.contain,
          color: grund,
          colorBlendMode: BlendMode.screen,
          excludeFromSemantics: semanticLabel == null,
          semanticLabel: semanticLabel,
          errorBuilder: (_, __, ___) => const SizedBox.shrink(),
        ),
        const Align(
          alignment: Alignment.bottomCenter,
          child: SizedBox(
            height: 18,
            width: double.infinity,
            child: IgnorePointer(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.topCenter,
                    colors: [grund, Color(0x00151716)],
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
