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

  /// Lebenslanger Status-Zusatzrabatt (ON TOP auf die 5 % Abo-Rabatt),
  /// gestaffelt nach kumulativem Umsatz — Spiegel der Server-RPC
  /// my_gamification_status / app.status_tiers:
  ///   Bronze ab 150 € → +1 % (gesamt 6 %)
  ///   Silber ab 500 € → +2,5 % (gesamt 7,5 %)
  ///   Gold ab 1000 € → +5 % (gesamt 10 %)
  static double statusBonusRate(String? tierCode) {
    switch (tierCode) {
      case 'bronze':
        return 0.01;
      case 'silber':
        return 0.025;
      case 'gold':
        return 0.05;
      default:
        return 0.0;
    }
  }

  /// Effektiver App-Rabatt eines Abonnenten inkl. Status-Zusatzrabatt.
  static double effectiveDiscountRate(String? tierCode) =>
      appDiscountRate + statusBonusRate(tierCode);

  /// Abo-Preise (brutto, inkl. USt) — Spiegel der Server-RPC
  /// choose_subscription_plan (Migration 0061). Einzige Quelle für alle
  /// Anzeigen und Break-even-Rechnungen im Client.
  static const subMonthlyEur = 0.99;
  static const subYearlyEur = 9.99;
  static const subLifetimeEur = 79.99;

  /// Lifetime ist eine limitierte „Founders Edition": nur die ersten 20
  /// Konten können es abschließen (Kontingent serverseitig durchgesetzt,
  /// siehe app.lifetime_founders_limit()).
  static const lifetimeFoundersLimit = 20;

  /// Steuert, ob das Lifetime-Abo im Kundenbereich sichtbar angeboten wird.
  /// Aktuell `false`: Plan, Server-RPC und Founders-Kontingent bleiben voll
  /// im Code, die Kunden-UI blendet Lifetime aber aus. Für spätere Aktionen
  /// einfach auf `true` setzen — dann erscheint die Karte wieder überall.
  static const lifetimePubliclyOffered = false;

  /// Tages- und Wochenangebote geben auf das beworbene EINZELPRODUKT
  /// zusätzlich 10 % — multiplikativ auf den App-Preis.
  static const dealExtraDiscountRate = 0.10;

  /// Ersparnis eines Angebots-Kaufs gegenüber dem Automatenpreis:
  /// 1 − 0,95 × 0,90 = 14,5 %.
  static double get dealSavingsRate =>
      1 - (1 - appDiscountRate) * (1 - dealExtraDiscountRate);

  /// Frühstücks-/Feierabend-Deal: im Zeitfenster gibt es auf den GESAMTEN
  /// Kauf 5 % obendrauf, sobald er ein Getränk und etwas zu essen
  /// (Süßware oder Snack) enthält. Bewusst getrennt von
  /// [dealExtraDiscountRate] — das ist ein Warenkorb-Bonus, kein Rabatt auf
  /// ein einzelnes beworbenes Produkt.
  static const comboDealDiscountRate = 0.05;

  /// Ersparnis eines Kombi-Kaufs im Zeitfenster gegenüber dem
  /// Automatenpreis: 1 − 0,95 × 0,95 = 9,75 %.
  static double get comboDealSavingsRate =>
      1 - (1 - appDiscountRate) * (1 - comboDealDiscountRate);

  /// Zeitfenster des Frühstücks-Deals (Stunden, lokale Zeit; Ende exklusiv).
  static const breakfastDealFrom = 6;
  static const breakfastDealTo = 8;

  /// Zeitfenster des Feierabend-Deals.
  static const afterWorkDealFrom = 16;
  static const afterWorkDealTo = 17;

  /// Warengruppen, die als „etwas zu essen" für den Kombi-Deal zählen.
  static const comboFoodCategories = <String>{'Süßwaren', 'Snacks'};

  /// Warengruppe, die als Getränk zählt.
  static const comboDrinkCategory = 'Getränke';

  /// Läuft zur angegebenen Zeit ein Deal-Zeitfenster? `null` = gerade keins.
  /// [now] ist injizierbar, damit die Regel testbar bleibt.
  static String? activeComboWindow([DateTime? now]) {
    final h = (now ?? DateTime.now()).hour;
    if (h >= breakfastDealFrom && h < breakfastDealTo) return 'fruehstueck';
    if (h >= afterWorkDealFrom && h < afterWorkDealTo) return 'feierabend';
    return null;
  }

  /// Greift der Kombi-Bonus? Nur wenn der Warenkorb mindestens ein Getränk
  /// UND mindestens eine Süßware/einen Snack enthält — und die Uhrzeit im
  /// Zeitfenster liegt.
  static bool qualifiesForComboDeal(
    Iterable<String> categoriesInBasket, {
    DateTime? now,
  }) {
    if (activeComboWindow(now) == null) return false;
    final cats = categoriesInBasket.toSet();
    return cats.contains(comboDrinkCategory) &&
        cats.intersection(comboFoodCategories).isNotEmpty;
  }

  /// Annahme „normales" Nutzungsszenario: Anteil des Einkaufswerts über
  /// Tages-/Wochenangebote. Die sparen 14,5 % (5 % + 10 % auf das beworbene
  /// Einzelprodukt).
  static const normalOfferShare = 0.20;

  /// Anteil des Einkaufswerts über Frühstücks-/Feierabend-Kombis. Die sparen
  /// nur 9,75 %, dafür auf den ganzen Warenkorb. Bewusst getrennt vom
  /// Angebots-Anteil — bis zur Umstellung auf die Warenkorb-Regel wurden
  /// beide mit 14,5 % gerechnet, was die Ersparnis zu hoch auswies.
  static const normalComboShare = 0.10;

  /// Anteil des Einkaufswerts, der über irgendeinen Deal läuft (30 %).
  static double get normalDealShare => normalOfferShare + normalComboShare;

  /// Annahme „normales" Szenario: Zusatzeffekt der Treue-Meilensteine
  /// (persönliche Coupons 5–25 % auf einzelne Produkte, Geburtstags-
  /// angebot) — konservativ 1,5 Prozentpunkte vom Einkaufswert.
  static const normalLoyaltyEffect = 0.015;

  /// Effektive Ersparnisquote im „normalen" Szenario (≈ 8,9 %):
  /// 20 % Tages-/Wochenangebote (14,5 %), 10 % Kombi-Deals (9,75 %),
  /// Rest zum App-Preis (5 %), plus Treue-Effekt.
  static double get normalSavingsRate =>
      normalOfferShare * dealSavingsRate +
      normalComboShare * comboDealSavingsRate +
      (1 - normalDealShare) * appDiscountRate +
      normalLoyaltyEffect;

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

  /// App-Preis (brutto) für Abonnenten: standardmäßig 5 % unter dem
  /// Automatenpreis, kaufmännisch auf den Cent gerundet. Mit [rate] lässt
  /// sich der effektive Rabatt (inkl. Status-Zusatzrabatt) übergeben.
  static double appPriceGross(
    double automatGross, {
    double rate = appDiscountRate,
  }) {
    // Das Epsilon rettet die halben Cent. 1,50 × 0,95 × 100 ergibt in
    // Fließkomma 142,49999999999997 statt 142,5 und wurde deshalb auf 1,42
    // ABgerundet — während 2,50 € (exakt 237,5) korrekt auf 2,38 aufrundete.
    // Zwei mathematisch gleiche Fälle liefen also auseinander. Jetzt rundet
    // beides kaufmännisch auf: 1,43 € und 2,38 €.
    final cents = automatGross * (1 - rate) * 100;
    return (cents + 1e-9).round() / 100;
  }

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
