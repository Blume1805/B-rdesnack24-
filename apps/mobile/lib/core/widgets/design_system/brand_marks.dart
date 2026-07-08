import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Stilisierte Umriss-Silhouette des Bördekreises (grob abstrahiert, nicht
/// kartografisch exakt). Wird als flächiges Motiv im Hero-Bereich verwendet.
class BoerdeOutlinePainter extends CustomPainter {
  BoerdeOutlinePainter({this.color = AppColors.brand, this.stroke = 2});

  final Color color;
  final double stroke;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path();
    final w = size.width;
    final h = size.height;

    // Abstrahiertes Bördekreis-Polygon (skalierbar).
    path.moveTo(w * 0.12, h * 0.28);
    path.lineTo(w * 0.22, h * 0.12);
    path.lineTo(w * 0.42, h * 0.06);
    path.lineTo(w * 0.58, h * 0.10);
    path.lineTo(w * 0.72, h * 0.22);
    path.lineTo(w * 0.88, h * 0.34);
    path.lineTo(w * 0.92, h * 0.52);
    path.lineTo(w * 0.84, h * 0.72);
    path.lineTo(w * 0.68, h * 0.88);
    path.lineTo(w * 0.50, h * 0.94);
    path.lineTo(w * 0.30, h * 0.86);
    path.lineTo(w * 0.16, h * 0.68);
    path.lineTo(w * 0.08, h * 0.50);
    path.close();

    canvas.drawPath(
      path,
      Paint()
        ..color = color.withValues(alpha: 0.15)
        ..style = PaintingStyle.fill,
    );
    canvas.drawPath(
      path,
      Paint()
        ..color = color
        ..style = PaintingStyle.stroke
        ..strokeWidth = stroke
        ..strokeJoin = StrokeJoin.round,
    );
  }

  @override
  bool shouldRepaint(covariant BoerdeOutlinePainter oldDelegate) =>
      oldDelegate.color != color || oldDelegate.stroke != stroke;
}

/// Stilisierter Snack-Automat als flaches SVG-artiges Motiv.
class VendingMachineGlyph extends StatelessWidget {
  const VendingMachineGlyph({
    super.key,
    this.size = 120,
    this.color = AppColors.brand,
    this.background = AppColors.ink,
  });

  final double size;
  final Color color;
  final Color background;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size * 1.4,
      child: CustomPaint(
        painter: _VendingMachinePainter(color: color, background: background),
      ),
    );
  }
}

class _VendingMachinePainter extends CustomPainter {
  _VendingMachinePainter({required this.color, required this.background});

  final Color color;
  final Color background;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;

    final body = Paint()..color = background;
    final gold = Paint()..color = color;
    final line = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2;
    final creamLine = Paint()
      ..color = AppColors.surfaceCard.withValues(alpha: 0.4)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;

    // Gehäuse
    const r = 12.0;
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(0, 0, w, h), Radius.circular(r)),
      body,
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(0, 0, w, h), Radius.circular(r)),
      line,
    );

    // Sichtscheibe / Warenfach
    final windowRect = Rect.fromLTWH(w * 0.08, h * 0.06, w * 0.84, h * 0.55);
    canvas.drawRRect(
      RRect.fromRectAndRadius(windowRect, const Radius.circular(6)),
      Paint()..color = color.withValues(alpha: 0.08),
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(windowRect, const Radius.circular(6)),
      line,
    );

    // Snack-Reihen (3 × 4 Raster)
    const cols = 4;
    const rows = 3;
    final cellW = windowRect.width / cols;
    final cellH = windowRect.height / rows;
    for (int r0 = 0; r0 < rows; r0++) {
      for (int c = 0; c < cols; c++) {
        final left = windowRect.left + c * cellW + cellW * 0.2;
        final top = windowRect.top + r0 * cellH + cellH * 0.25;
        final rect = Rect.fromLTWH(left, top, cellW * 0.6, cellH * 0.5);
        canvas.drawRRect(
          RRect.fromRectAndRadius(rect, const Radius.circular(2)),
          Paint()..color = color.withValues(alpha: 0.75),
        );
      }
      // Ablage-Linie
      final y = windowRect.top + (r0 + 1) * cellH;
      canvas.drawLine(
        Offset(windowRect.left + 2, y),
        Offset(windowRect.right - 2, y),
        creamLine,
      );
    }

    // Bedienleiste
    final panelTop = h * 0.68;
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromLTWH(w * 0.08, panelTop, w * 0.84, h * 0.12),
        const Radius.circular(4),
      ),
      Paint()..color = color.withValues(alpha: 0.15),
    );
    // Tasten
    for (int i = 0; i < 4; i++) {
      canvas.drawCircle(
        Offset(w * 0.14 + i * (w * 0.20), panelTop + h * 0.06),
        w * 0.025,
        gold,
      );
    }

    // Ausgabefach
    final trayRect = Rect.fromLTWH(w * 0.20, h * 0.86, w * 0.60, h * 0.08);
    canvas.drawRRect(
      RRect.fromRectAndRadius(trayRect, const Radius.circular(4)),
      line,
    );
  }

  @override
  bool shouldRepaint(covariant _VendingMachinePainter oldDelegate) =>
      oldDelegate.color != color || oldDelegate.background != background;
}

/// Bördesnack24-Wortmarke — Bricolage Grotesque, extrabold, 2 Zeilen.
class WordmarkLarge extends StatelessWidget {
  const WordmarkLarge({
    super.key,
    this.color = AppColors.onDark,
    this.accent = AppColors.brand,
  });

  final Color color;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'BÖRDE',
          style: AppTypography.display(size: 40, weight: FontWeight.w800, color: color)
              .copyWith(height: 1.0, letterSpacing: -0.5),
        ),
        Row(
          crossAxisAlignment: CrossAxisAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            Text(
              'SNACK',
              style: AppTypography.display(size: 40, weight: FontWeight.w800, color: color)
                  .copyWith(height: 1.0, letterSpacing: -0.5),
            ),
            const SizedBox(width: 8),
            Text(
              '24',
              style: AppTypography.display(size: 40, weight: FontWeight.w800, color: accent)
                  .copyWith(height: 1.0, letterSpacing: -0.5),
            ),
          ],
        ),
        const SizedBox(height: 6),
        Container(width: 56, height: 3, color: accent),
      ],
    );
  }
}
