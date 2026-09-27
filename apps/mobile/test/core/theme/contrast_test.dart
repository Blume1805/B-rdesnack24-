import 'dart:math' as math;

import 'package:boerdesnack24/core/theme/app_tokens.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// WCAG-2.1-Kontrastwächter (BFSG) für das dunkle Design (ADR 0008).
///
/// Prüft jede Kombination Schrift auf Fläche, die das Designsystem vorsieht,
/// gegen 4,5:1 (Erfolgskriterium 1.4.3, normaler Text) und Bedienelemente
/// gegen 3:1 (1.4.11). Schlägt eine Farbanpassung hier fehl, ist das ein
/// bewusster Design-Konflikt: die Farbe ändern, nicht den Test lockern.
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

/// Halbtransparente Farbe auf deckendem Grund, wie sie tatsächlich erscheint.
Color over(Color fg, Color bg) => Color.alphaBlend(fg, bg);

void main() {
  const surfaces = {
    'canvas': AppColors.canvas,
    'surfaceCard': AppColors.surfaceCard,
    'surfaceAlt': AppColors.surfaceAlt,
    'surfaceInverse': AppColors.surfaceInverse,
  };
  const texts = {
    'textStrong': AppColors.textStrong,
    'textDefault': AppColors.textDefault,
    'textMuted': AppColors.textMuted,
    'brandText': AppColors.brandText,
    'brandPale': AppColors.brandPale,
    'statusPositive': AppColors.statusPositive,
    'statusWarning': AppColors.statusWarning,
    'statusCritical': AppColors.statusCritical,
    'statusInfo': AppColors.statusInfo,
  };

  group('Schrift auf allen dunklen Flächen (>= 4,5:1)', () {
    for (final s in surfaces.entries) {
      for (final t in texts.entries) {
        test('${t.key} auf ${s.key}', () {
          expect(contrast(t.value, s.value), greaterThanOrEqualTo(4.5));
        });
      }
    }
  });

  group('Schrift auf farbigen Flächen (>= 4,5:1)', () {
    final pairs = <String, (Color, Color)>{
      'onBrand auf Gold (Schaltflächen)': (AppColors.onBrand, AppColors.brand),
      'onBrand auf dunklem Gold': (AppColors.onBrand, AppColors.brandDark),
      'onStatus auf Frisch-Grün (Aktiviert)': (
        AppColors.onStatus,
        AppColors.statusPositiveFill,
      ),
      'onStatus auf Warn-Orange': (AppColors.onStatus, AppColors.statusWarning),
      'Weiß auf Kritisch-Fläche': (
        AppColors.onDark,
        AppColors.statusCriticalFill,
      ),
      'brandPale auf Gold-Tönung': (AppColors.brandPale, AppColors.brandLight),
      'textStrong auf Gold-Tönung': (
        AppColors.textStrong,
        AppColors.brandLight
      ),
      'statusPositive auf Positiv-Tönung': (
        AppColors.statusPositive,
        AppColors.statusPositiveTint,
      ),
      'statusWarning auf Warn-Tönung': (
        AppColors.statusWarning,
        AppColors.statusWarningTint,
      ),
      'statusCritical auf Kritisch-Tönung': (
        AppColors.statusCritical,
        AppColors.statusCriticalTint,
      ),
      'statusInfo auf Info-Tönung': (
        AppColors.statusInfo,
        AppColors.statusInfoTint,
      ),
      'textStrong auf Kritisch-Tönung': (
        AppColors.textStrong,
        AppColors.statusCriticalTint,
      ),
      'textStrong auf Warn-Tönung': (
        AppColors.textStrong,
        AppColors.statusWarningTint,
      ),
    };
    for (final p in pairs.entries) {
      test(p.key, () {
        expect(contrast(p.value.$1, p.value.$2), greaterThanOrEqualTo(4.5));
      });
    }
  });

  group('Bewegung und Transparenz', () {
    // FocusCarousel blendet Nachbarkarten auf 80 % ab. Auch dann muss die
    // leiseste Schrift der Karte lesbar bleiben.
    test('Nachbarkarte im Karussell: textMuted bei 80 % Deckkraft', () {
      final card = over(
        AppColors.surfaceCard.withValues(alpha: 0.8),
        AppColors.canvas,
      );
      final text = over(AppColors.textMuted.withValues(alpha: 0.8), card);
      expect(contrast(text, card), greaterThanOrEqualTo(4.5));
    });

    // Stufenkacheln: Ink auf dem hellsten und dem dunkelsten Verlaufston
    // jeder Metallkachel (tier_tiles.dart).
    test('Stufenkacheln: Ink auf allen Verlaufstönen', () {
      for (final bg in const [
        Color(0xFFCBA26A),
        Color(0xFFB68A4E),
        Color(0xFFDDE1E6),
        Color(0xFFB2B8BF),
        Color(0xFFFDD65A),
        Color(0xFFE0A500),
      ]) {
        expect(contrast(AppColors.onBrand, bg), greaterThanOrEqualTo(4.5));
      }
    });

    test('Weiß mit 70 % auf der hervorgehobenen Fläche', () {
      final text = over(
        AppColors.onDark.withValues(alpha: 0.7),
        AppColors.surfaceInverse,
      );
      expect(
        contrast(text, AppColors.surfaceInverse),
        greaterThanOrEqualTo(4.5),
      );
    });
  });

  group('Bedienelemente und Fokus (>= 3:1)', () {
    test('Gold als Fokus- und Auswahlfarbe auf allen Flächen', () {
      for (final s in surfaces.values) {
        expect(contrast(AppColors.brand, s), greaterThanOrEqualTo(3));
      }
    });
    test('Frisch-Grün als Fläche hebt sich von Karte ab', () {
      expect(
        contrast(AppColors.statusPositiveFill, AppColors.surfaceCard),
        greaterThanOrEqualTo(3),
      );
    });
  });
}
