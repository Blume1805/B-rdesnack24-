import 'package:flutter/material.dart';

import 'app_tokens.dart';
import 'app_typography.dart';

/// Bördesnack24-App-Theme.
/// Material 3, dunkles Design „Local Discovery" (ADR 0008): Ink als Grund,
/// Cream als Schrift, Gold als Akzent. Schrift auf Gold ist immer Ink.
abstract final class AppTheme {
  static ColorScheme _scheme() => const ColorScheme(
        brightness: Brightness.dark,
        primary: AppColors.brand,
        onPrimary: AppColors.onBrand,
        primaryContainer: AppColors.brandLight,
        onPrimaryContainer: AppColors.textStrong,
        secondary: AppColors.textStrong,
        onSecondary: AppColors.ink,
        error: AppColors.statusCritical,
        onError: AppColors.ink,
        surface: AppColors.surfaceCard,
        onSurface: AppColors.textStrong,
        onSurfaceVariant: AppColors.textMuted,
        surfaceContainerLowest: AppColors.canvas,
        surfaceContainerLow: AppColors.surfaceCard,
        surfaceContainer: AppColors.surfaceAlt,
        surfaceContainerHigh: AppColors.surfaceAlt,
        surfaceContainerHighest: AppColors.surfaceAlt,
        outline: AppColors.borderSubtle,
        outlineVariant: AppColors.borderSubtle,
        inverseSurface: AppColors.cream,
        onInverseSurface: AppColors.ink,
        inversePrimary: AppColors.brandDark,
      );

  /// Frühere Bezeichnung. Das Theme ist seit dem 26.09.2026 dunkel
  /// (ADR 0008); der Name bleibt, damit bestehende Aufrufe weiter laufen.
  @Deprecated('AppTheme.dark() verwenden')
  static ThemeData light() => dark();

  static ThemeData dark() {
    final scheme = _scheme();
    final text = AppTypography.textTheme();
    return ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      scaffoldBackgroundColor: AppColors.canvas,
      canvasColor: AppColors.canvas,
      textTheme: text,
      splashFactory: InkRipple.splashFactory,
      visualDensity: VisualDensity.adaptivePlatformDensity,

      // AppBar: Seitengrund, helle Schrift, ohne Schatten
      appBarTheme: AppBarTheme(
        backgroundColor: AppColors.canvas,
        foregroundColor: AppColors.textStrong,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        titleTextStyle: text.titleLarge?.copyWith(color: AppColors.textStrong),
        centerTitle: false,
        iconTheme: const IconThemeData(color: AppColors.textStrong),
      ),

      // Filled Buttons: Gold, Schrift in Ink; groß, pillenförmig
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          backgroundColor: AppColors.brand,
          foregroundColor: AppColors.onBrand,
          textStyle: text.labelLarge,
          minimumSize: const Size(0, 48),
          padding: const EdgeInsets.symmetric(
            horizontal: AppSpacing.s6,
            vertical: AppSpacing.s3,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(AppRadii.xl),
          ),
        ),
      ),

      // Outlined = Secondary
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: AppColors.textStrong,
          side: const BorderSide(color: AppColors.borderSubtle, width: 1),
          textStyle: text.labelLarge,
          minimumSize: const Size(0, 48),
          padding: const EdgeInsets.symmetric(
            horizontal: AppSpacing.s6,
            vertical: AppSpacing.s3,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(AppRadii.xl),
          ),
        ),
      ),

      // Text Buttons für Links
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: AppColors.textStrong,
          textStyle: text.labelLarge?.copyWith(fontWeight: FontWeight.w600),
        ),
      ),

      // Karten: Ink-Fläche mit feinem Rand
      cardTheme: CardThemeData(
        color: AppColors.surfaceCard,
        elevation: 0,
        margin: EdgeInsets.zero,
        shape: RoundedRectangleBorder(
          side: const BorderSide(color: AppColors.borderSubtle),
          borderRadius: BorderRadius.circular(AppRadii.lg),
        ),
      ),

      // Formulare
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.surfaceAlt,
        contentPadding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s4,
          vertical: AppSpacing.s4,
        ),
        labelStyle: text.bodyMedium?.copyWith(color: AppColors.textMuted),
        hintStyle: text.bodyMedium?.copyWith(color: AppColors.textMuted),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
          borderSide: const BorderSide(color: AppColors.borderSubtle),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
          borderSide: const BorderSide(color: AppColors.borderSubtle),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
          borderSide: const BorderSide(color: AppColors.brand, width: 2),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
          borderSide:
              const BorderSide(color: AppColors.statusCritical, width: 2),
        ),
      ),

      // Chips (z. B. Demo-Login)
      chipTheme: ChipThemeData(
        backgroundColor: AppColors.surfaceAlt,
        selectedColor: AppColors.brand,
        side: const BorderSide(color: AppColors.borderSubtle),
        // Ausgewählt liegt die Schrift auf Gold und muss Ink sein.
        labelStyle: WidgetStateTextStyle.resolveWith(
          (states) => (text.labelMedium ?? const TextStyle()).copyWith(
            color: states.contains(WidgetState.selected)
                ? AppColors.onBrand
                : AppColors.textStrong,
          ),
        ),
        checkmarkColor: AppColors.onBrand,
        padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s3,
          vertical: AppSpacing.s2,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(AppRadii.pill),
          side: const BorderSide(color: AppColors.borderSubtle),
        ),
      ),

      // NavigationBar: Ink-Fläche, aktives Symbol in Gold getönter Kapsel
      navigationBarTheme: NavigationBarThemeData(
        backgroundColor: AppColors.surfaceCard,
        indicatorColor: AppColors.brandLight,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        labelTextStyle: WidgetStatePropertyAll(
          text.labelMedium?.copyWith(color: AppColors.textStrong),
        ),
        iconTheme: WidgetStateProperty.resolveWith((states) {
          if (states.contains(WidgetState.selected)) {
            return const IconThemeData(color: AppColors.brand, size: 24);
          }
          return const IconThemeData(color: AppColors.textMuted, size: 24);
        }),
      ),

      bottomSheetTheme: const BottomSheetThemeData(
        backgroundColor: AppColors.surfaceCard,
        surfaceTintColor: Colors.transparent,
        dragHandleColor: AppColors.borderSubtle,
      ),

      popupMenuTheme: PopupMenuThemeData(
        color: AppColors.surfaceAlt,
        surfaceTintColor: Colors.transparent,
        textStyle: text.bodyMedium,
      ),

      progressIndicatorTheme: const ProgressIndicatorThemeData(
        color: AppColors.brand,
        linearTrackColor: AppColors.surfaceAlt,
        circularTrackColor: AppColors.surfaceAlt,
      ),

      dividerTheme: const DividerThemeData(
        color: AppColors.borderSubtle,
        thickness: 1,
        space: 1,
      ),

      dialogTheme: DialogThemeData(
        backgroundColor: AppColors.surfaceCard,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(AppRadii.lg),
        ),
        titleTextStyle: text.headlineSmall,
        contentTextStyle: text.bodyMedium,
      ),

      snackBarTheme: SnackBarThemeData(
        backgroundColor: AppColors.surfaceAlt,
        contentTextStyle: text.bodyMedium?.copyWith(color: AppColors.onDark),
        actionTextColor: AppColors.brand,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
        ),
      ),
    );
  }
}
