import 'package:flutter/material.dart';

import '../motion/motion.dart';
import 'app_tokens.dart';
import 'app_typography.dart';

/// Bördesnack24-App-Theme.
/// Basiert auf Material 3 und dem Design-System (Cream + Ink + Gold).
/// Nur Light-Mode — Dark-Marken-Elemente (Hero, CTA-Band, Footer) werden
/// explizit über eigene Widgets gesetzt (Ink-Backdrop mit weißem Text).
abstract final class AppTheme {
  static ColorScheme _scheme() => const ColorScheme(
        brightness: Brightness.light,
        primary: AppColors.brand,
        onPrimary: AppColors.ink,
        secondary: AppColors.ink,
        onSecondary: AppColors.onDark,
        error: AppColors.statusCritical,
        onError: AppColors.onDark,
        surface: AppColors.surfaceCard,
        onSurface: AppColors.ink,
        surfaceContainerHighest: AppColors.surfaceAlt,
        surfaceContainer: AppColors.surfaceAlt,
        outline: AppColors.borderSubtle,
        outlineVariant: AppColors.borderSubtle,
      );

  static ThemeData light() {
    final scheme = _scheme();
    final text = AppTypography.textTheme();
    return ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      scaffoldBackgroundColor: AppColors.surfaceCard,
      textTheme: text,
      splashFactory: InkRipple.splashFactory,
      visualDensity: VisualDensity.adaptivePlatformDensity,

      // Einheitlicher Seitenwechsel: Fade + leichter Slide-Up statt der
      // je Plattform unterschiedlichen Default-Übergänge. Respektiert
      // „Bewegung reduzieren" (dann reines Fade) — siehe core/motion.
      pageTransitionsTheme: const PageTransitionsTheme(
        builders: {
          TargetPlatform.android: FadeSlidePageTransitionsBuilder(),
          TargetPlatform.iOS: FadeSlidePageTransitionsBuilder(),
          TargetPlatform.macOS: FadeSlidePageTransitionsBuilder(),
          TargetPlatform.windows: FadeSlidePageTransitionsBuilder(),
          TargetPlatform.linux: FadeSlidePageTransitionsBuilder(),
        },
      ),

      // AppBar — cream mit ink-text und dünner unterer Border via Elevation 0
      appBarTheme: AppBarTheme(
        backgroundColor: AppColors.surfaceCard,
        foregroundColor: AppColors.ink,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        titleTextStyle: text.titleLarge?.copyWith(color: AppColors.ink),
        centerTitle: false,
        iconTheme: const IconThemeData(color: AppColors.ink),
      ),

      // Filled Buttons — Gold-BG, weißer/ink-Text; groß, pill-shaped
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          backgroundColor: AppColors.brand,
          foregroundColor: AppColors.ink,
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
          foregroundColor: AppColors.ink,
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
          foregroundColor: AppColors.ink,
          textStyle: text.labelLarge?.copyWith(fontWeight: FontWeight.w600),
        ),
      ),

      // Karten — cream mit subtiler Border
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
        labelStyle: text.labelMedium?.copyWith(color: AppColors.ink),
        padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s3,
          vertical: AppSpacing.s2,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(AppRadii.pill),
          side: const BorderSide(color: AppColors.borderSubtle),
        ),
      ),

      // NavigationBar (Bottom-Nav) — cream mit ink-Icons + gold-Indicator
      navigationBarTheme: NavigationBarThemeData(
        backgroundColor: AppColors.surfaceCard,
        indicatorColor: AppColors.brandLight,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        labelTextStyle: WidgetStatePropertyAll(
          text.labelMedium?.copyWith(color: AppColors.ink),
        ),
        iconTheme: WidgetStateProperty.resolveWith((states) {
          if (states.contains(WidgetState.selected)) {
            return const IconThemeData(color: AppColors.ink, size: 24);
          }
          return const IconThemeData(color: AppColors.textMuted, size: 24);
        }),
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
        backgroundColor: AppColors.ink,
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
