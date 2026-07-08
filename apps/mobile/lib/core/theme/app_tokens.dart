import 'package:flutter/material.dart';

/// Zentrale Design-Tokens des Bördesnack24-Design-Systems.
///
/// Farben, Typografie-Skala, Spacing, Radien, Schatten und Motion — 1:1 nach
/// `references/design-tokens.md`. Alle Widgets im Repository konsumieren
/// ausschließlich diese Konstanten (keine Hex-Werte hart im Code).
abstract final class AppColors {
  // Basis-Palette
  static const Color brand       = Color(0xFFFDC102); // Gold
  static const Color brandLight  = Color(0xFFFEE7A0);
  static const Color brandDark   = Color(0xFFB89A00);

  static const Color ink         = Color(0xFF202321); // Ink — Headlines/Dark
  static const Color textDefault = Color(0xFF4A4844);
  static const Color textMuted   = Color(0xFF7D7975);

  static const Color surfaceCard = Color(0xFFFBF8F4); // Cream
  static const Color surfaceAlt  = Color(0xFFFFFFF8);
  static const Color borderSubtle= Color(0xFFDCD8D3); // Börde-Grau

  static const Color statusPositive = Color(0xFF5C9A3F);
  static const Color statusWarning  = Color(0xFFE8A206);
  static const Color statusCritical = Color(0xFFB31C1C);
  static const Color statusInfo     = Color(0xFF0066CC);

  static const Color onDark = Colors.white;
}

/// Spacing-Tokens auf 8-px-Grid.
abstract final class AppSpacing {
  static const double s1  = 4;
  static const double s2  = 8;
  static const double s3  = 12;
  static const double s4  = 16;
  static const double s5  = 20;
  static const double s6  = 24;
  static const double s8  = 32;
  static const double s10 = 40;
  static const double s12 = 48;
  static const double s16 = 64;
  static const double s20 = 80;
}

/// Radien.
abstract final class AppRadii {
  static const double sm  = 4;
  static const double base= 8;
  static const double md  = 12;
  static const double lg  = 16;
  static const double xl  = 24;
  static const double pill= 9999;
}

/// Schatten.
abstract final class AppShadows {
  static const List<BoxShadow> sm = [
    BoxShadow(color: Color(0x0D202321), blurRadius: 2, offset: Offset(0, 1)),
  ];
  static const List<BoxShadow> base = [
    BoxShadow(color: Color(0x1A202321), blurRadius: 6, offset: Offset(0, 4)),
  ];
  static const List<BoxShadow> md = [
    BoxShadow(color: Color(0x26202321), blurRadius: 15, offset: Offset(0, 10)),
  ];
  static const List<BoxShadow> gold = [
    BoxShadow(color: Color(0x4DFDC102), blurRadius: 20, offset: Offset(0, 4)),
  ];
}

/// Motion.
abstract final class AppMotion {
  static const Duration fast   = Duration(milliseconds: 150);
  static const Duration base   = Duration(milliseconds: 250);
  static const Duration slow   = Duration(milliseconds: 350);
  static const Curve easeOut   = Curves.easeOutCubic;
  static const Curve easeInOut = Curves.easeInOutCubic;
}
