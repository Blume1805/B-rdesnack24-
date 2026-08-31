// Farb- und Typo-Tokens für alle Bördesnack24-E-Mails.
//
// Die Werte stammen aus der Marken-/Printwelt (docs/marketing/*.html) und
// wurden bereits von den bestehenden Bestätigungsmails verwendet — sie
// bleiben unverändert, damit sich das Aussehen versendeter Mails durch die
// Modularisierung nicht ändert.
//
// Achtung, Unterschied zur App: `apps/mobile/lib/core/theme/app_tokens.dart`
// nutzt #202321 als Ink und ein etwas helleres Grau für Ränder. Die Mails
// fahren die kontrastreichere Print-Palette. Nur der Sonderfall „Gold als
// Textfarbe" ist bewusst aus der App übernommen (siehe brandOnLight).
export const theme = {
  /// Warmes Schwarz — Kopfleiste und Fließtext.
  ink: "#14110E",
  /// Marken-Gold. Nur auf dunklem Grund als Text verwenden.
  brand: "#FDC102",
  /// Abgedunkeltes Gold für Text auf hellem Grund. #FDC102 erreicht auf Weiß
  /// nur ~1,6:1 und verfehlt WCAG 1.4.3 (4,5:1) deutlich; dieser Ton liegt
  /// bei ~4,9:1. Gleiche Begründung wie AppColors.brandText in der App.
  brandOnLight: "#8A6E00",
  /// Creme — Seitenhintergrund und Info-Boxen.
  cream: "#F9F5EC",
  /// Kartenfläche.
  card: "#FFFFFF",
  /// Kartenrand.
  border: "#E8E2D6",
  /// Sekundärer Fließtext.
  muted: "#6F6A5E",
  /// Footer-Text (Pflichtangaben).
  footer: "#9B958A",
  /// Zustandsfarben für Success-/Warning-Boxen.
  success: "#3F7A2E",
  warning: "#A33B2E",

  font: "Helvetica, Arial, sans-serif",
  /// Breite der Mail-Karte in px. 560 ist der Wert der Bestandsmails.
  maxWidth: 560,
  /// Mindesthöhe für Buttons — 44 px ist die von Apple und WCAG 2.5.5
  /// empfohlene Mindestgröße für Touch-Ziele.
  buttonMinHeight: 44,
} as const;
