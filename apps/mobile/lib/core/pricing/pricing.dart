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

  /// **Kostenlose App (Beschluss vom 2026-09-16).**
  ///
  /// Die App wird nicht mehr kostenpflichtig angeboten. Dauerrabatt, Coupons,
  /// Treue-Meilensteine und Statusstufen stehen **allen registrierten Kunden**
  /// offen; es gibt keine Bezahlschranke mehr.
  ///
  /// Hintergrund: Die Abogebühr sollte nie ein Ertragsprodukt sein, sondern
  /// Reichweite für das B2B-Geschäft schaffen. Sie hat dabei genau das
  /// reduziert, was sie steigern sollte. Siehe
  /// `docs/strategy/2026-09-15-fundament-und-finanzlogik.md`, Nachtrag 2.
  ///
  /// Der Schalter bleibt bewusst als Konstante bestehen, statt die Abo-Logik
  /// zu löschen: Die Entscheidung ist damit ohne Datenverlust umkehrbar,
  /// solange die Standortgespräche nicht abgeschlossen sind. Die Abo-Tabellen,
  /// die RPC `choose_subscription_plan` und die Preisfelder bleiben unberührt.
  static const benefitsFreeForAll = true;

  /// Lebenslanger Status-Zusatzrabatt (ON TOP auf die 5 % Abo-Rabatt).
  ///
  /// ACHTUNG — dieser Code ist **kein** Spiegel der Server-RPC, auch wenn das
  /// hier früher behauptet wurde. Geprüft am 2026-09-16:
  ///
  /// `app.status_tiers` (Migration 0058) liefert vier Stufen mit anderen
  /// Schwellen und einem anderen Vorteil:
  ///   bronze ab   0 € → 0 % Cashback
  ///   silber ab  50 € → 1 % Cashback
  ///   gold   ab 150 € → 2 % Cashback
  ///   platin ab 400 € → 3 % Cashback
  ///
  /// Der Client bildet dieselben Codes dagegen auf Rabattsätze ab. Daraus
  /// folgen drei Abweichungen, die vor jeder Weiterverwendung zu entscheiden
  /// sind (siehe docs/strategy/2026-09-16-umsetzungsplan.md, Befund P-1):
  ///   1. Der Zusatzrabatt greift viel früher als dokumentiert — „silber"
  ///      ab 50 € statt ab 500 €, „gold" ab 150 € statt ab 1.000 €.
  ///   2. `platin` ist hier nicht abgebildet und fällt auf 0 %. Die höchste
  ///      Stufe erhält damit den geringsten Rabatt.
  ///   3. Cashback der Server-Stufe kommt zum Rabatt hinzu.
  ///
  /// Die Werte bleiben unverändert, bis über den Verbleib des Abo-Modells
  /// entschieden ist (Phase 2, gesperrt).
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

  /// Abo-Preise (brutto, inkl. USt). **Seit dem 2026-09-16 nicht mehr im
  /// Verkauf** (siehe [benefitsFreeForAll]); die Werte bleiben für die
  /// Break-even-Rechnungen und eine mögliche Rückkehr erhalten.
  /// Spiegel der Server-RPC
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

  /// Frühstücks-/Feierabend-Deals sowie Tages- und Wochenangebote geben
  /// zusätzlich 10 % Rabatt — multiplikativ auf den App-Preis.
  static const dealExtraDiscountRate = 0.10;

  /// Ersparnis eines Deal-Kaufs gegenüber dem Automatenpreis:
  /// 1 − 0,95 × 0,90 = 14,5 %.
  static double get dealSavingsRate =>
      1 - (1 - appDiscountRate) * (1 - dealExtraDiscountRate);

  /// Annahme „normales" Nutzungsszenario: Anteil des Einkaufswerts, der
  /// über Deals/Angebote läuft (Frühstück, Feierabend, Tages-/Wochenaktion).
  static const normalDealShare = 0.30;

  /// Annahme „normales" Szenario: Zusatzeffekt der Treue-Meilensteine
  /// (persönliche Coupons 5–25 % auf einzelne Produkte, Geburtstags-
  /// angebot) — konservativ 1,5 Prozentpunkte vom Einkaufswert.
  static const normalLoyaltyEffect = 0.015;

  /// Effektive Ersparnisquote im „normalen" Szenario (≈ 9,4 %):
  /// 30 % der Käufe als Deal (14,5 %), Rest zum App-Preis (5 %),
  /// plus Treue-Effekt.
  static double get normalSavingsRate =>
      normalDealShare * dealSavingsRate +
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
  /// Automatenpreis, auf den Cent gerundet. Mit [rate] lässt sich der
  /// effektive Rabatt (inkl. Status-Zusatzrabatt) übergeben.
  static double appPriceGross(
    double automatGross, {
    double rate = appDiscountRate,
  }) =>
      (automatGross * (1 - rate) * 100).round() / 100;

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
