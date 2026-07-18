import 'dart:math' as math;

/// Zentrale Preis- und Rentabilitätslogik für Bördesnack24.
///
/// Quelle der Regeln sind die KPI-Benchmarks aus dem Finanzdashboard:
///   * Wareneinsatzquote-Ziel: 30–40 % (Kalkulation auf 35 % Mitte)
///   * Rohertragsmarge-Ziel: 50–70 %
///   * Ø-Warenkorb-Ziel: 1–3 €
///
/// Die Funktionen sind bewusst pure Dart (keine Flutter-Abhängigkeit),
/// damit die Produktkalkulation, die Marketing-Hochrechnung und die
/// Unit-Tests dieselbe Implementierung teilen.
abstract final class Pricing {
  /// App-Vorteil: Abonnenten sparen gegenüber dem Automatenpreis immer 5 %.
  static const appDiscountRate = 0.05;

  /// Ziel-Wareneinsatzquote (EK netto / VK netto) für die Kalkulation.
  static const targetWareneinsatz = 0.35;

  /// Vending-Preisuntergrenze: unter 1 € wird am Automaten nicht verkauft
  /// (Handling-/Zahlungskosten). Cheap-Items landen dadurch bewusst
  /// UNTER der Ziel-Wareneinsatzquote (= bessere Marge).
  static const minGross = 1.00;

  /// Kalkuliert den Automaten-Verkaufspreis (brutto) aus dem EK (netto).
  ///
  /// VK netto = EK / Ziel-Wareneinsatzquote, plus USt, dann kaufmännisch
  /// auf 10-Cent-Stufen AUFgerundet (Automaten-Preisraster; Aufrunden
  /// hält die Wareneinsatzquote unter dem Ziel).
  static double salePriceGross(
    double ekNetto, {
    required double vatRate,
    double wareneinsatz = targetWareneinsatz,
  }) {
    if (ekNetto <= 0) return minGross;
    final netto = ekNetto / wareneinsatz;
    final brutto = netto * (1 + vatRate);
    final rounded = (brutto * 10).ceil() / 10;
    return math.max(rounded, minGross);
  }

  /// Tatsächliche Wareneinsatzquote eines Preises (EK netto / VK netto).
  static double wareneinsatzquote(
    double ekNetto,
    double vkBrutto, {
    required double vatRate,
  }) {
    final vkNetto = vkBrutto / (1 + vatRate);
    if (vkNetto <= 0) return 1;
    return ekNetto / vkNetto;
  }

  /// App-Preis (brutto) für Abonnenten: 5 % unter dem Automatenpreis,
  /// auf den Cent gerundet.
  static double appPriceGross(double automatGross) =>
      (automatGross * (1 - appDiscountRate) * 100).round() / 100;

  /// Monatlicher Einkaufswert, ab dem sich Abo-Kosten von
  /// [subCostPerMonth] allein durch die Ersparnisquote [savingsRate]
  /// amortisieren. (Break-even: Ersparnis = Abo-Kosten.)
  static double breakEvenMonthlySpend(
    double subCostPerMonth, {
    double savingsRate = appDiscountRate,
  }) {
    if (savingsRate <= 0) return double.infinity;
    return subCostPerMonth / savingsRate;
  }

  /// Netto-Ersparnis pro Monat bei [monthlySpend] Einkaufswert:
  /// Rabatt-Ersparnis minus Abo-Kosten.
  static double monthlyNetSavings(
    double monthlySpend,
    double subCostPerMonth, {
    double savingsRate = appDiscountRate,
  }) =>
      monthlySpend * savingsRate - subCostPerMonth;
}
