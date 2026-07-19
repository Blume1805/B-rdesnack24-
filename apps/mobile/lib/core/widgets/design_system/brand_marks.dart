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

/// Marken-Kreis-Icon (goldener Ring + stilisierter Snackautomat innen).
/// Nachbau des Icons aus dem Marken-Referenzbild — vektoriell gezeichnet,
/// damit es auf jeder Pixel-Dichte scharf ist und die Marken-Gold-Farbe
/// aus dem Designsystem übernimmt.
class BrandIcon extends StatelessWidget {
  const BrandIcon({
    super.key,
    this.size = 32,
    this.color = AppColors.brand,
  });

  final double size;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size,
      child: CustomPaint(painter: _BrandIconPainter(color: color)),
    );
  }
}

class _BrandIconPainter extends CustomPainter {
  _BrandIconPainter({required this.color});
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final center = Offset(w / 2, h / 2);
    final radius = w * 0.44;
    final ring = w * 0.10;

    // Goldener Ring
    final ringPaint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = ring;
    canvas.drawCircle(center, radius, ringPaint);

    // Kleiner Automat innen — vereinfachte Silhouette.
    final gold = Paint()..color = color;

    final bodyRect = Rect.fromCenter(
      center: center,
      width: w * 0.36,
      height: h * 0.52,
    );
    final bodyR = w * 0.03;

    // Automatengehäuse (outline)
    final bodyOutline = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = w * 0.03;
    canvas.drawRRect(
      RRect.fromRectAndRadius(bodyRect, Radius.circular(bodyR)),
      bodyOutline,
    );

    // Snack-Fenster 3x3 Raster als kleine Quadrate.
    const rows = 3;
    const cols = 3;
    final gridRect = Rect.fromCenter(
      center: Offset(center.dx, center.dy - h * 0.03),
      width: w * 0.26,
      height: h * 0.32,
    );
    final cellW = gridRect.width / cols;
    final cellH = gridRect.height / rows;
    for (int r = 0; r < rows; r++) {
      for (int c = 0; c < cols; c++) {
        final cellRect = Rect.fromLTWH(
          gridRect.left + c * cellW + cellW * 0.15,
          gridRect.top + r * cellH + cellH * 0.15,
          cellW * 0.7,
          cellH * 0.7,
        );
        canvas.drawRRect(
          RRect.fromRectAndRadius(cellRect, Radius.circular(w * 0.008)),
          gold,
        );
      }
    }

    // Ausgabefach unten (kleine Linie).
    final trayY = bodyRect.bottom - h * 0.06;
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromLTWH(
          bodyRect.left + w * 0.04,
          trayY,
          bodyRect.width - w * 0.08,
          h * 0.03,
        ),
        Radius.circular(w * 0.01),
      ),
      gold,
    );
  }

  @override
  bool shouldRepaint(covariant _BrandIconPainter oldDelegate) =>
      oldDelegate.color != color;
}

/// Bördesnack24-Wortmarke — Bricolage Grotesque, extrabold, eine Zeile:
/// „BÖRDESNACK 24" mit dem 24 in Gold hervorgehoben.
class WordmarkLarge extends StatelessWidget {
  const WordmarkLarge({
    super.key,
    this.size = 32,
    this.color = AppColors.onDark,
    this.accent = AppColors.brand,
  });

  final double size;
  final Color color;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.baseline,
      textBaseline: TextBaseline.alphabetic,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'BÖRDESNACK',
          style: AppTypography.display(
                  size: size, weight: FontWeight.w800, color: color)
              .copyWith(height: 1.0, letterSpacing: -0.5),
        ),
        SizedBox(width: size * 0.18),
        Text(
          '24',
          style: AppTypography.display(
                  size: size, weight: FontWeight.w800, color: accent)
              .copyWith(height: 1.0, letterSpacing: -0.5),
        ),
      ],
    );
  }
}
