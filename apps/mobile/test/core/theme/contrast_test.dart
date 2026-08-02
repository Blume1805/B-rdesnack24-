import 'dart:math' as math;

import 'package:boerdesnack24/core/theme/app_tokens.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// WCAG-2.1-Kontrastwächter (BFSG): stellt sicher, dass die zentralen
/// Text-auf-Fläche-Kombinationen des Designsystems die 4,5:1-Schwelle
/// (Erfolgskriterium 1.4.3, normaler Text) nicht wieder unterschreiten.
/// Schlägt eine Farb-Anpassung hier fehl, ist das ein bewusster
/// Design-Konflikt — nicht einfach den Test lockern.
double _linear(double v) =>
    v <= 0.03928 ? v / 12.92 : math.pow((v + 0.055) / 1.055, 2.4).toDouble();

double _luminance(Color c) =>
    0.2126 * _linear(c.r) + 0.7152 * _linear(c.g) + 0.0722 * _linear(c.b);

double contrast(Color fg, Color bg) {
  final l1 = _luminance(fg);
  final l2 = _luminance(bg);
  final lighter = math.max(l1, l2);
  final darker = math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

void main() {
  group('WCAG-Kontraste (>= 4,5:1 für Fließtext)', () {
    test('Text-Gold (Eyebrow) auf Weiß', () {
      expect(
        contrast(AppColors.brandText, AppColors.surfaceCard),
        greaterThanOrEqualTo(4.5),
      );
    });
    test('Standardtext auf Weiß', () {
      expect(
        contrast(AppColors.textDefault, AppColors.surfaceCard),
        greaterThanOrEqualTo(4.5),
      );
    });
    test('Muted-Text auf Weiß und auf Creme', () {
      expect(
        contrast(AppColors.textMuted, AppColors.surfaceCard),
        greaterThanOrEqualTo(4.5),
      );
      expect(
        contrast(AppColors.textMuted, AppColors.surfaceAlt),
        greaterThanOrEqualTo(4.5),
      );
    });
    test('Ink auf Marken-Gold (CTA-Buttons)', () {
      expect(
        contrast(AppColors.ink, AppColors.brand),
        greaterThanOrEqualTo(4.5),
      );
    });
    test('Weiß auf Ink (dunkle Header)', () {
      expect(
        contrast(AppColors.onDark, AppColors.ink),
        greaterThanOrEqualTo(4.5),
      );
    });
    test('Kritisch-Rot auf Weiß', () {
      expect(
        contrast(AppColors.statusCritical, AppColors.surfaceCard),
        greaterThanOrEqualTo(4.5),
      );
    });

    // Die Chip-Hintergründe stehen als Literale in status_badge.dart —
    // hier gespiegelt, damit eine Änderung dort auffällt.
    const chipPositiveBg = Color(0xFFE7F1E0);
    const chipWarningBg = Color(0xFFFCEECB);
    const chipInfoBg = Color(0xFFDBE8F5);

    test('Status-Textfarben auf ihrem Chip-Hintergrund', () {
      expect(
        contrast(AppColors.statusPositiveText, chipPositiveBg),
        greaterThanOrEqualTo(4.5),
      );
      expect(
        contrast(AppColors.statusWarningText, chipWarningBg),
        greaterThanOrEqualTo(4.5),
      );
      expect(
        contrast(AppColors.statusInfoText, chipInfoBg),
        greaterThanOrEqualTo(4.5),
      );
    });

    test('Status-Textfarben auch auf Weiß und Creme', () {
      for (final fg in [
        AppColors.statusPositiveText,
        AppColors.statusWarningText,
        AppColors.statusInfoText,
      ]) {
        expect(contrast(fg, AppColors.surfaceCard), greaterThanOrEqualTo(4.5));
        expect(contrast(fg, AppColors.surfaceAlt), greaterThanOrEqualTo(4.5));
      }
    });

    // Gegenprobe zur Begründung in app_tokens.dart: Die vollen
    // Statusfarben verfehlen als Text die Schwelle — deshalb gibt es
    // überhaupt eigene Textvarianten. Fällt das hier irgendwann anders
    // aus, kann man die Extravarianten wieder einsparen.
    test('die vollen Statusfarben taugen als Text NICHT', () {
      expect(contrast(AppColors.statusPositive, chipPositiveBg), lessThan(4.5));
      expect(contrast(AppColors.statusWarning, chipWarningBg), lessThan(4.5));
      expect(contrast(AppColors.statusInfo, chipInfoBg), lessThan(4.5));
    });
  });
}
