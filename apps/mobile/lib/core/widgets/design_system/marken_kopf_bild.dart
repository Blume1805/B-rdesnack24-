import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Markenbild mit Slogan als Hintergrund aller Seitenköpfe (Wunsch Philipp
/// 18.11.2026): über die volle Breite, Schwarz des Bildes an die Grundfarbe
/// der App angeglichen, leicht von rechts nach links abgedunkelt, damit Text
/// links lesbar bleibt.
///
/// Angleichung statt Überblendung: Das Bild wird mit der Grundfarbe
/// [AppColors.canvas] im Modus „Screen" verrechnet. Reines Schwarz wird so
/// genau zur Grundfarbe, helle Stellen bleiben hell. Dadurch gibt es keine
/// Bildkante, egal wie breit der Bildschirm ist.
class MarkenKopfBild extends StatelessWidget {
  const MarkenKopfBild({
    super.key,
    this.abdunkeln = 0.3,
    this.ausrichtung = Alignment.center,
    this.fit = BoxFit.cover,
    this.semanticLabel,
  });

  /// Deckkraft der Abdunklung am linken Rand (0 = keine, 1 = voll).
  final double abdunkeln;

  /// Bildausschnitt, wenn das Bild beschnitten wird.
  final Alignment ausrichtung;

  final BoxFit fit;

  /// Nur setzen, wenn das Bild Inhalt trägt (z. B. Anmeldeseite).
  final String? semanticLabel;

  static const String asset = 'assets/images/brand_header_slogan.webp';

  @override
  Widget build(BuildContext context) {
    const grund = AppColors.canvas;
    return Stack(
      fit: StackFit.expand,
      children: [
        const ColoredBox(color: grund),
        Image.asset(
          asset,
          fit: fit,
          alignment: ausrichtung,
          color: grund,
          colorBlendMode: BlendMode.screen,
          excludeFromSemantics: semanticLabel == null,
          semanticLabel: semanticLabel,
          errorBuilder: (_, __, ___) => const SizedBox.shrink(),
        ),
        if (abdunkeln > 0)
          IgnorePointer(
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.centerLeft,
                  end: Alignment.centerRight,
                  colors: [
                    grund.withValues(alpha: abdunkeln),
                    grund.withValues(alpha: abdunkeln * 0.45),
                    grund.withValues(alpha: 0),
                  ],
                  stops: const [0.0, 0.5, 0.9],
                ),
              ),
            ),
          ),
        // Unterer Rand weich in die Seite, keine sichtbare Kante.
        const Align(
          alignment: Alignment.bottomCenter,
          child: SizedBox(
            height: 28,
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
