import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import 'brand_marks.dart';

/// Ink-farbener „Hero"-Bereich mit Wortmarke, Automat-Glyph und
/// Bördekreis-Umriss als flächigem Hintergrund-Motiv.
class HeroBackdrop extends StatelessWidget {
  const HeroBackdrop({
    super.key,
    this.height = 340,
    this.showVending = true,
    this.showOutline = true,
    this.tagline,
  });

  final double height;
  final bool showVending;
  final bool showOutline;
  final String? tagline;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      child: Stack(
        fit: StackFit.expand,
        children: [
          // Ink-Hintergrund mit dezentem Gold-Gradient
          Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [AppColors.ink, Color(0xFF14110E)],
              ),
            ),
          ),
          // Bördekreis-Outline dezent im Hintergrund
          if (showOutline)
            Positioned(
              right: -40,
              top: -20,
              child: SizedBox(
                width: 280,
                height: 280,
                child: CustomPaint(
                  painter: BoerdeOutlinePainter(
                    color: AppColors.brand.withValues(alpha: 0.35),
                  ),
                ),
              ),
            ),
          // Inhalt
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: AppSpacing.s6,
              vertical: AppSpacing.s5,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const WordmarkLarge(),
                      if (tagline != null) ...[
                        const SizedBox(height: AppSpacing.s3),
                        Text(
                          tagline!,
                          style: const TextStyle(
                            color: AppColors.onDark,
                            fontSize: 14,
                            height: 1.4,
                          ),
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                    ],
                  ),
                ),
                if (showVending) ...[
                  const SizedBox(width: AppSpacing.s4),
                  const VendingMachineGlyph(size: 90),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}
