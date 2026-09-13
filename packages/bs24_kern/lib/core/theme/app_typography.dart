import 'package:flutter/material.dart';

import 'app_tokens.dart';

/// Typografie-Skala des Bördesnack24-Design-Systems.
///
/// Display = Bricolage Grotesque (700/800, -0.02em); Body = Hanken Grotesk.
///
/// **Beide Schriften werden zur Laufzeit NICHT nachgeladen.** Das Paket
/// `google_fonts` holt eine nicht mitgelieferte Schrift beim ersten Start
/// von `fonts.gstatic.com`. Dabei geht die IP-Adresse des Nutzers an
/// Google in die USA — vor jedem Einwilligungsdialog, ohne Rechtsgrundlage
/// nach Art. 6 DSGVO und ohne dass Google in der Datenschutzerklärung als
/// Empfänger steht. Für Webseiten hat das LG München I am 20.01.2022
/// (3 O 17493/20) genau so entschieden; eine App, die es beim Start tut,
/// steht nicht besser da.
///
/// Bis die Schriftdateien mitgeliefert werden (beide stehen unter der SIL
/// Open Font License 1.1, das Mitliefern ist also erlaubt — siehe
/// `docs/betrieb/AUFGABEN-PHILIPP.md`), rendern **alle** Plattformen die
/// System-Sans aus [_sansFallback]. Das ist dieselbe Schrift, die der
/// HTML-Loader der Web-App zeigt, und dieselbe, die das Web schon vorher
/// bekommen hat — es gibt also keinen Schriftsprung und keinen Unterschied
/// mehr zwischen Web und Telefon.
abstract final class AppTypography {
  static const List<String> _sansFallback = [
    'SF Pro Display',
    'Segoe UI',
    'Roboto',
    'system-ui',
    'sans-serif',
  ];

  static TextStyle display({
    required double size,
    Color color = AppColors.ink,
    FontWeight weight = FontWeight.w800,
  }) {
    final base = TextStyle(
      fontSize: size,
      height: 1.15,
      letterSpacing: -0.02 * size,
      fontWeight: weight,
      color: color,
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
          body(size: 16, weight: FontWeight.w600, color: AppColors.ink),
      titleSmall: body(size: 14, weight: FontWeight.w600, color: AppColors.ink),
      bodyLarge: body(size: 16),
      bodyMedium: body(size: 14),
      bodySmall: body(size: 12, color: AppColors.textMuted),
      labelLarge: body(size: 14, weight: FontWeight.w700, color: AppColors.ink),
      labelMedium:
          body(size: 12, weight: FontWeight.w600, color: AppColors.textMuted),
      labelSmall:
          body(size: 11, weight: FontWeight.w600, color: AppColors.textMuted),
    );
  }
}
