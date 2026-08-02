import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'app_tokens.dart';

/// Typografie-Skala des Bördesnack24-Design-Systems.
///
/// Display = Bricolage Grotesque (700/800, -0.02em); Body = Hanken Grotesk.
///
/// **Web-Demo:** GoogleFonts sind zur Start-Zeit deaktiviert (siehe
/// `bootstrap.dart`, `allowRuntimeFetching = false`), weil das Nachladen
/// der Font-Dateien den ersten Frame ~10–20 s verzögern kann. Wir liefern
/// stattdessen eine System-Sans (SF Pro / Segoe / Roboto) als visuell
/// nahestehende Fallback-Familie aus — dieselbe, die auch der HTML-Loader
/// verwendet, sodass es beim App-Start keinen Schriftsprung gibt.
/// Für native Builds (Android/iOS) läuft GoogleFonts normal und cached
/// die Dateien einmalig auf das Gerät.
abstract final class AppTypography {
  /// Wenn true, wird die System-Sans genutzt statt der Schriften über
  /// `google_fonts`.
  ///
  /// Im Web-Build ist das der Normalfall (siehe Klassenkommentar). Tests
  /// setzen den Schalter in `test/flutter_test_config.dart` ebenfalls auf
  /// true: Ohne Netz kann `google_fonts` die Dateien weder laden noch aus
  /// den Assets ziehen und wirft — sonst scheitern Widget-Tests an der
  /// Schrift statt an ihrem eigentlichen Gegenstand. Nebeneffekt, der
  /// erwünscht ist: Tests messen dann exakt die Darstellung, die auch
  /// Web-Nutzer bekommen.
  static bool useSystemFallback = kIsWeb;

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
    if (useSystemFallback) return base;
    return GoogleFonts.bricolageGrotesque(textStyle: base);
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
    if (useSystemFallback) return base;
    return GoogleFonts.hankenGrotesk(textStyle: base);
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
