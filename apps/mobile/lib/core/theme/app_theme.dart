import 'package:flutter/material.dart';

/// Bördesnack24-Design-System (Material 3, Light + Dark).
/// Markenfarbe: Gold (#FDC102) auf Ink (vgl. Website/Logo).
abstract final class AppTheme {
  static const Color _gold = Color(0xFFFDC102);
  static const Color _ink = Color(0xFF14110E);

  static ThemeData light() => _build(Brightness.light);
  static ThemeData dark() => _build(Brightness.dark);

  static ThemeData _build(Brightness brightness) {
    final scheme = ColorScheme.fromSeed(
      seedColor: _gold,
      brightness: brightness,
    ).copyWith(
      surfaceTint: _gold,
      // Ink als bewusst dunkler Hintergrund im Dark Mode.
      surface: brightness == Brightness.dark ? _ink : null,
    );

    final base = ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      brightness: brightness,
      visualDensity: VisualDensity.adaptivePlatformDensity,
    );

    return base.copyWith(
      appBarTheme: const AppBarTheme(centerTitle: false),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size.fromHeight(48),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        filled: true,
      ),
      cardTheme: CardThemeData(
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
        ),
      ),
    );
  }
}
