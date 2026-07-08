import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'app_tokens.dart';

/// Typografie-Skala des Bördesnack24-Design-Systems.
/// Display = Bricolage Grotesque (700/800, -0.02em); Body = Hanken Grotesk.
abstract final class AppTypography {
  static TextStyle display({
    required double size,
    Color color = AppColors.ink,
    FontWeight weight = FontWeight.w800,
  }) =>
      GoogleFonts.bricolageGrotesque(
        fontSize: size,
        height: 1.15,
        letterSpacing: -0.02 * size,
        fontWeight: weight,
        color: color,
      );

  static TextStyle body({
    required double size,
    Color color = AppColors.textDefault,
    FontWeight weight = FontWeight.w400,
    double height = 1.5,
  }) =>
      GoogleFonts.hankenGrotesk(
        fontSize: size,
        height: height,
        fontWeight: weight,
        color: color,
      );

  /// Text-Theme für Material 3 (Display = Bricolage, Body = Hanken).
  static TextTheme textTheme() {
    return TextTheme(
      displayLarge:  display(size: 56, weight: FontWeight.w800),
      displayMedium: display(size: 44, weight: FontWeight.w800),
      displaySmall:  display(size: 36, weight: FontWeight.w800),
      headlineLarge: display(size: 32, weight: FontWeight.w700),
      headlineMedium:display(size: 24, weight: FontWeight.w700),
      headlineSmall: display(size: 20, weight: FontWeight.w700),
      titleLarge:    display(size: 20, weight: FontWeight.w700),
      titleMedium:   body(size: 16, weight: FontWeight.w600, color: AppColors.ink),
      titleSmall:    body(size: 14, weight: FontWeight.w600, color: AppColors.ink),
      bodyLarge:     body(size: 16),
      bodyMedium:    body(size: 14),
      bodySmall:     body(size: 12, color: AppColors.textMuted),
      labelLarge:    body(size: 14, weight: FontWeight.w700, color: AppColors.ink),
      labelMedium:   body(size: 12, weight: FontWeight.w600, color: AppColors.textMuted),
      labelSmall:    body(size: 11, weight: FontWeight.w600, color: AppColors.textMuted),
    );
  }
}
