import 'package:flutter/material.dart';

import 'app_tokens.dart';

/// Typografie-Skala des Bördesnack24-Design-Systems.
///
/// Display = Bricolage Grotesque (700/800, -0.02em); Body = Hanken Grotesk
/// (400/600/700/800).
///
/// Beide Schriften liegen seit dem 26.09.2026 selbst gehostet unter
/// `assets/fonts/` (ADR 0008). Vorher lieferte die Web-App nur eine
/// Systemschrift aus, weil das Nachladen bei Google abgeschaltet war — die
/// Markenschriften waren in der ausgelieferten App nie zu sehen. Die Dateien
/// kommen jetzt von derselben Adresse wie die App; es gibt keine Abfrage bei
/// Dritten. Die Systemschriften bleiben als Rückfall, falls eine Datei nicht
/// geladen werden kann.
abstract final class AppTypography {
  /// Familiennamen wie in `pubspec.yaml` unter `fonts:` eingetragen.
  static const String displayFamily = 'Bricolage Grotesque';
  static const String bodyFamily = 'Hanken Grotesk';

  static const List<String> _sansFallback = [
    'SF Pro Display',
    'Segoe UI',
    'Roboto',
    'system-ui',
    'sans-serif',
  ];

  static TextStyle display({
    required double size,
    Color color = AppColors.textStrong,
    FontWeight weight = FontWeight.w800,
  }) {
    final base = TextStyle(
      fontSize: size,
      height: 1.15,
      letterSpacing: -0.02 * size,
      fontWeight: weight,
      color: color,
      fontFamily: displayFamily,
      fontFamilyFallback: _sansFallback,
    );
    return base;
  }

  static TextStyle body({
    required double size,
    Color color = AppColors.textDefault,
    FontWeight weight = FontWeight.w400,
    double height = 1.5,
  }) {
    final base = TextStyle(
      fontSize: size,
      height: height,
      fontWeight: weight,
      color: color,
      fontFamily: bodyFamily,
      fontFamilyFallback: _sansFallback,
    );
    return base;
  }

  /// Text-Theme für Material 3.
  static TextTheme textTheme() {
    return TextTheme(
      displayLarge: display(size: 56, weight: FontWeight.w800),
      displayMedium: display(size: 44, weight: FontWeight.w800),
      displaySmall: display(size: 36, weight: FontWeight.w800),
      headlineLarge: display(size: 32, weight: FontWeight.w700),
      headlineMedium: display(size: 24, weight: FontWeight.w700),
      headlineSmall: display(size: 20, weight: FontWeight.w700),
      titleLarge: display(size: 20, weight: FontWeight.w700),
      titleMedium:
          body(size: 16, weight: FontWeight.w600, color: AppColors.textStrong),
      titleSmall:
          body(size: 14, weight: FontWeight.w600, color: AppColors.textStrong),
      bodyLarge: body(size: 16),
      bodyMedium: body(size: 14),
      bodySmall: body(size: 12, color: AppColors.textMuted),
      labelLarge:
          body(size: 14, weight: FontWeight.w700, color: AppColors.textStrong),
      labelMedium:
          body(size: 12, weight: FontWeight.w600, color: AppColors.textMuted),
      labelSmall:
          body(size: 11, weight: FontWeight.w600, color: AppColors.textMuted),
    );
  }
}
