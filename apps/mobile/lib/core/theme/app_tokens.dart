import 'package:flutter/material.dart';

/// Zentrale Design-Tokens des Bördesnack24-Design-Systems.
///
/// Farben, Typografie-Skala, Spacing, Radien, Schatten und Motion. Alle
/// Widgets im Repository konsumieren ausschließlich diese Konstanten (keine
/// Hex-Werte hart im Code).
///
/// **Dunkles Design seit dem 26.09.2026 (ADR 0008, „Local Discovery").**
/// Die Markenfarben bleiben unverändert (Gold, Ink, Börde-Grau, Cream,
/// Frisch-Grün). Geändert haben sich nur die *semantischen* Namen: Ink ist
/// jetzt der Grund, Cream die Schrift, Gold der Akzent. Jede Verwendung sagt,
/// wofür eine Farbe steht, nicht welche sie ist:
///
/// * [textStrong], [textDefault], [textMuted]: Schrift auf dunklem Grund
/// * [onBrand]: Schrift und Symbole auf Gold, immer Ink, nie Weiß
/// * [canvas], [surfaceCard], [surfaceAlt], [surfaceInverse]: Flächen
///
/// Jede Kombination Schrift auf Fläche ist in
/// `test/core/theme/contrast_test.dart` gegen WCAG 2.1 AA gemessen.
abstract final class AppColors {
  // ── Markenpalette (unveränderlich) ──────────────────────────────────────
  static const Color brand = Color(0xFFFDC102); // Gold
  static const Color ink = Color(0xFF202321); // Ink
  static const Color boerdeGrau = Color(0xFFDCD8D3); // Börde-Grau
  static const Color cream = Color(0xFFFBF8F4); // Cream
  static const Color frischGruen = Color(0xFF5C9A3F); // Frisch-Grün

  // ── Gold in Rollen ──────────────────────────────────────────────────────
  /// Dunkler Goldton für Flächen, die sich vom Gold absetzen sollen
  /// (Verläufe, gedrückter Zustand). Ink darauf: 5,8:1.
  static const Color brandDark = Color(0xFFB89A00);

  /// Gold getönte Fläche auf dunklem Grund (Hinweise, Chips, Zähler).
  /// Vorher ein helles Gelb; auf dunklem Grund ein gedämpftes Gold.
  static const Color brandLight = Color(0xFF3A3113);

  /// Helles Gold als *Schrift* auf dunklen Flächen (Hinweise, Fußzeilen von
  /// Karten). Der frühere Flächenton [brandLight] der hellen Fassung.
  static const Color brandPale = Color(0xFFFEE7A0);

  /// Gold als *Schrift*. Auf dunklem Grund ist das Marken-Gold selbst lesbar
  /// (9,7:1 auf [surfaceCard]); der abgedunkelte Ton für helle Flächen
  /// entfällt.
  static const Color brandText = brand;

  /// Schrift und Symbole auf Gold. Immer Ink: Weiß auf Gold erreicht nur
  /// 1,6:1 und fällt durch, Ink auf Gold liegt bei 9,7:1.
  static const Color onBrand = ink;

  // ── Schrift auf dunklem Grund ───────────────────────────────────────────
  /// Überschriften, Beträge, starke Beschriftungen.
  static const Color textStrong = cream;
  static const Color textDefault = Color(0xFFDAD5CD);
  static const Color textMuted = Color(0xFFA9A39A);

  // ── Flächen ─────────────────────────────────────────────────────────────
  /// Seitengrund, eine Stufe tiefer als Ink.
  static const Color canvas = Color(0xFF151716);

  /// Karten, Leisten, Dialoge. Das Marken-Ink selbst.
  static const Color surfaceCard = ink;

  /// Angehobene Fläche: Eingabefelder, verschachtelte Bereiche.
  static const Color surfaceAlt = Color(0xFF2B2E2C);

  /// Hervorgehobene dunkle Fläche (früher Ink auf weißer Seite): Coupons,
  /// Kopfbereiche. Tiefer als der Seitengrund, mit goldenem Rand abgesetzt.
  static const Color surfaceInverse = Color(0xFF0E100F);

  static const Color borderSubtle = Color(0xFF3A3E3B);

  // ── Status ──────────────────────────────────────────────────────────────
  /// Für Schrift und Symbole auf dunklem Grund aufgehellt; die Markenfarbe
  /// Frisch-Grün erreicht dort als Schrift nur 4,5:1 knapp nicht.
  static const Color statusPositive = Color(0xFF79B957);
  static const Color statusWarning = Color(0xFFE8A206);

  /// Grün als *Fläche*. Schrift darauf ist [onStatus]: Weiß erreichte auf
  /// Frisch-Grün nur 3,4:1 (Befund 26.09.2026), Ink liegt bei 5,6:1.
  static const Color statusPositiveFill = frischGruen;

  /// Schrift und Symbole auf Status- und Goldflächen.
  static const Color onStatus = ink;

  /// Rot als Schrift und Symbol auf dunklem Grund.
  static const Color statusCritical = Color(0xFFFF6B64);

  /// Rot als *Fläche* mit weißer Schrift (Fehlermeldungen).
  static const Color statusCriticalFill = Color(0xFFB31C1C);
  static const Color statusInfo = Color(0xFF6CB2FF);

  // Getönte Flächen für Hinweise, mit der Statusfarbe als Schrift.
  static const Color statusPositiveTint = Color(0xFF1D2A18);
  static const Color statusWarningTint = Color(0xFF33290D);
  static const Color statusCriticalTint = Color(0xFF3A1B1A);
  static const Color statusInfoTint = Color(0xFF16243A);

  /// Weiß auf dunklen Flächen.
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
  // Auf dunklem Grund tragen Schatten nur mit Schwarz und mehr Deckkraft.
  static const List<BoxShadow> sm = [
    BoxShadow(color: Color(0x40000000), blurRadius: 2, offset: Offset(0, 1)),
  ];
  static const List<BoxShadow> base = [
    BoxShadow(color: Color(0x59000000), blurRadius: 8, offset: Offset(0, 4)),
  ];
  static const List<BoxShadow> md = [
    BoxShadow(color: Color(0x73000000), blurRadius: 18, offset: Offset(0, 10)),
  ];
  static const List<BoxShadow> gold = [
    BoxShadow(color: Color(0x4DFDC102), blurRadius: 20, offset: Offset(0, 4)),
  ];
}

/// Bewegungswerte. Spiegel von `motion/motion-tokens.css` (Motion & Scroll
/// System v1.0, seit 27.09.2026). Werte dort ändern, dann hier nachziehen;
/// keine eigenen Dauern oder Kurven im Widget-Code.
abstract final class AppMotion {
  /// `--dur-fast`: Druck, Farbe.
  static const Duration fast = Duration(milliseconds: 140);

  /// `--dur-base`: Hover, Umschalten, Beschriftungswechsel.
  static const Duration base = Duration(milliseconds: 220);

  /// `--dur-slow`: Flächen, Karten.
  static const Duration slow = Duration(milliseconds: 420);

  /// `--ease-out`: Standard.
  static const Curve easeOut = Cubic(0.22, 1, 0.36, 1);

  /// `--ease-in-out`: Szenenwechsel, Farbflächen.
  static const Curve easeInOut = Cubic(0.65, 0, 0.35, 1);

  /// `--ease-bounce`: Bestätigungen, Pops. Schwingt kurz über 1 hinaus.
  static const Curve easeBounce = Cubic(0.34, 1.56, 0.64, 1);

  /// `--press-scale`.
  static const double pressScale = 0.96;
}
