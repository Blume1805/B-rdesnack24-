import 'package:flutter/material.dart';

/// Zentrale Design-Tokens des Bördesnack24-Design-Systems.
///
/// Farben, Typografie-Skala, Spacing, Radien, Schatten und Motion — 1:1 nach
/// `references/design-tokens.md`. Alle Widgets im Repository konsumieren
/// ausschließlich diese Konstanten (keine Hex-Werte hart im Code).
abstract final class AppColors {
  // Basis-Palette
  static const Color brand = Color(0xFFFDC102); // Gold
  static const Color brandLight = Color(0xFFFEE7A0);
  static const Color brandDark = Color(0xFFB89A00);

  /// Gold als *Textfarbe* auf hellen Flächen. Das Marken-Gold (#FDC102)
  /// erreicht auf Weiß nur ~1,6:1 Kontrast — für Fließ-/Labeltext ist nach
  /// WCAG 1.4.3 (BFSG) mindestens 4,5:1 nötig. Dieser abgedunkelte Goldton
  /// liegt bei ~4,9:1 und bleibt in der Markenwelt. Auf dunklen Flächen
  /// weiterhin [brand] verwenden.
  static const Color brandText = Color(0xFF8A6E00);

  static const Color ink = Color(0xFF202321); // Ink — Headlines/Dark
  static const Color textDefault = Color(0xFF4A4844);
  // 4,6:1 auf Weiß (WCAG 1.4.3); vorher #7D7975 mit nur 4,1:1.
  static const Color textMuted = Color(0xFF6E6A66);

  static const Color surfaceCard = Color(0xFFFFFFFF); // Weiß
  static const Color surfaceAlt =
      Color(0xFFF7F5F1); // sehr leichte Creme für Layering
  static const Color borderSubtle =
      Color(0xFFE3DFDA); // Börde-Grau (etwas heller wegen Weiß-BG)

  static const Color statusPositive = Color(0xFF5C9A3F);
  static const Color statusWarning = Color(0xFFE8A206);
  static const Color statusCritical = Color(0xFFB31C1C);
  static const Color statusInfo = Color(0xFF0066CC);

  /// Statusfarben als *Textfarbe* auf hellen Flächen.
  ///
  /// Gleiche Begründung wie bei [brandText]: Die Statusfarben oben sind für
  /// Ränder, Symbole und Flächen gedacht — dort greift WCAG 1.4.3 nicht.
  /// Als Beschriftung auf dem hellen Chip-Hintergrund verfehlen sie die
  /// 4,5:1 aber deutlich (grün 2,9:1, gelb 1,9:1, blau 4,47:1). Diese
  /// abgedunkelten Varianten behalten den Farbton und liegen bei rund
  /// 4,75:1 auf dem jeweiligen Chip — mit etwas Reserve, damit nicht die
  /// nächste Nuance wieder darunter rutscht. Auf Weiß und Creme liegen sie
  /// bei über 5:1.
  ///
  /// Rot und Neutral brauchen keine Extravariante: #B31C1C erreicht auf
  /// seinem Chip 5,2:1, das Grau 4,9:1.
  static const Color statusPositiveText = Color(0xFF467430);
  static const Color statusWarningText = Color(0xFF8C6104);
  static const Color statusInfoText = Color(0xFF0062C4);

  static const Color onDark = Colors.white;
}

/// Spacing-Tokens auf 8-px-Grid.
abstract final class AppSpacing {
  static const double s1 = 4;
  static const double s2 = 8;
  static const double s3 = 12;
  static const double s4 = 16;
  static const double s5 = 20;
  static const double s6 = 24;
  static const double s8 = 32;
  static const double s10 = 40;
  static const double s12 = 48;
  static const double s16 = 64;
  static const double s20 = 80;
}

/// Radien.
abstract final class AppRadii {
  static const double sm = 4;
  static const double base = 8;
  static const double md = 12;
  static const double lg = 16;
  static const double xl = 24;
  static const double pill = 9999;
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

  /// Karten-Elevation (Standard für [AppCard]).
  ///
  /// Zwei Ebenen, weil erst die Kombination als Höhe gelesen wird: ein enger,
  /// dunklerer Kontaktschatten direkt unter der Kante verankert die Karte auf
  /// dem Untergrund, ein weiter, weicher Umgebungsschatten hebt sie davon ab.
  /// Ein einzelner Blur wirkt dagegen nur wie ein grauer Rand.
  ///
  /// Der negative `spreadRadius` zieht den weiten Schatten unter der Karte
  /// zusammen, damit er seitlich nicht ausfranst.
  static const List<BoxShadow> card = [
    BoxShadow(color: Color(0x14202321), blurRadius: 3, offset: Offset(0, 1)),
    BoxShadow(
      color: Color(0x26202321),
      blurRadius: 16,
      offset: Offset(0, 9),
      spreadRadius: -3,
    ),
  ];

  /// Stärkere Variante für Karten, die deutlich vor dem Hintergrund stehen
  /// sollen — Karussell-Kacheln, Angebotskarten, hervorgehobene Panels.
  static const List<BoxShadow> raised = [
    BoxShadow(color: Color(0x1F202321), blurRadius: 4, offset: Offset(0, 2)),
    BoxShadow(
      color: Color(0x38202321),
      blurRadius: 30,
      offset: Offset(0, 18),
      spreadRadius: -6,
    ),
  ];
}

/// Motion.
abstract final class AppMotion {
  static const Duration fast = Duration(milliseconds: 150);
  static const Duration base = Duration(milliseconds: 250);
  static const Duration slow = Duration(milliseconds: 350);
  static const Curve easeOut = Curves.easeOutCubic;
  static const Curve easeInOut = Curves.easeInOutCubic;
}
