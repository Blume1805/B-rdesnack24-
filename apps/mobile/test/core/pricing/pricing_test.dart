import 'package:flutter_test/flutter_test.dart';

import 'package:boerdesnack24/core/pricing/pricing.dart';

void main() {
  group('Pricing.salePriceGross', () {
    test('hält die Ziel-Wareneinsatzquote (30–40 %) für normale Artikel', () {
      // Coca Cola 0,5l: EK 0,75 netto, Getränk 19 %.
      final vk = Pricing.salePriceGross(0.75, vatRate: 0.19);
      // 0,75 / 0,35 = 2,142857 netto → 2,55 brutto → aufgerundet 2,60.
      expect(vk, 2.60);
      final quote = Pricing.wareneinsatzquote(0.75, vk, vatRate: 0.19);
      expect(quote, greaterThanOrEqualTo(0.30));
      expect(quote, lessThanOrEqualTo(0.40));
    });

    test('Snack mit 7 % USt landet im Zielband', () {
      // Snickers: EK 0,79 netto, Lebensmittel 7 %.
      final vk = Pricing.salePriceGross(0.79, vatRate: 0.07);
      // 0,79/0,35 = 2,257 netto → 2,415 brutto → 2,50.
      expect(vk, 2.50);
      final quote = Pricing.wareneinsatzquote(0.79, vk, vatRate: 0.07);
      expect(quote, greaterThanOrEqualTo(0.30));
      expect(quote, lessThanOrEqualTo(0.40));
    });

    test('rundet immer auf 10-Cent-Stufen auf', () {
      final vk = Pricing.salePriceGross(0.51, vatRate: 0.07);
      expect((vk * 10).roundToDouble(), vk * 10);
      // Aufrunden: nie unter dem ungerundeten Wert.
      expect(vk, greaterThanOrEqualTo(0.51 / 0.35 * 1.07));
    });

    test('Vending-Untergrenze 1 € greift bei Cheap-Items', () {
      // Knoppers EK 0,23 → rechnerisch 0,71 brutto, aber Floor 1,00.
      expect(Pricing.salePriceGross(0.23, vatRate: 0.07), 1.00);
      // Floor bedeutet bewusst BESSERE Marge (Quote < 30 %).
      final quote = Pricing.wareneinsatzquote(0.23, 1.00, vatRate: 0.07);
      expect(quote, lessThan(0.30));
    });

    test('ungültiger EK fällt auf die Untergrenze zurück', () {
      expect(Pricing.salePriceGross(0, vatRate: 0.19), Pricing.minGross);
      expect(Pricing.salePriceGross(-1, vatRate: 0.19), Pricing.minGross);
    });
  });

  group('Pricing.appPriceGross', () {
    test('App-Preis ist exakt 5 % unter Automatenpreis', () {
      expect(Pricing.appPriceGross(2.60), 2.47);
      expect(Pricing.appPriceGross(1.00), 0.95);
      // Heißgetränke aus der Gastro-Preisliste:
      expect(Pricing.appPriceGross(3.40), 3.23); // Espresso doppelt
      expect(Pricing.appPriceGross(4.60), 4.37); // Latte Macchiato
    });
  });

  group('Pricing Break-even (Marketing-Hochrechnung)', () {
    test('1 € Abokosten rentieren sich ab 20 € Monatseinkauf', () {
      expect(Pricing.breakEvenMonthlySpend(1.00), 20.0);
    });

    test('0,833 €/Monat Abokosten rentieren sich ab ~16,67 €', () {
      expect(Pricing.breakEvenMonthlySpend(10 / 12), closeTo(16.67, 0.01));
    });

    test('Netto-Ersparnis: 40 € Monatseinkauf bei 1 € Abokosten = +1 €', () {
      expect(Pricing.monthlyNetSavings(40, 1.00), closeTo(1.00, 0.001));
    });

    test('unter Break-even ist die Ersparnis negativ', () {
      expect(Pricing.monthlyNetSavings(10, 1.00), lessThan(0));
    });

    test('mit Coupon-Ersparnis obendrauf sinkt der Break-even', () {
      // 5 % Basis + konservativ 3 % Ø-Coupon-Effekt = 8 %.
      expect(
        Pricing.breakEvenMonthlySpend(1.00, savingsRate: 0.08),
        closeTo(12.50, 0.01),
      );
    });
  });

  group('Pricing „normales" Szenario (Deals + Coupons + Meilensteine)', () {
    test('Deal-Kauf spart 14,5 % (5 % App-Preis + 10 % Deal, multiplikativ)',
        () {
      expect(Pricing.dealSavingsRate, closeTo(0.145, 0.0001));
    });

    test('effektive Ersparnisquote liegt bei ≈ 9,35 %', () {
      // 30 % Deal-Anteil × 14,5 % + 70 % × 5 % + 1,5 pp Treue-Effekt.
      expect(Pricing.normalSavingsRate, closeTo(0.0935, 0.0001));
    });

    test('Break-even sinkt im normalen Szenario deutlich', () {
      expect(
        Pricing.breakEvenMonthlySpend(
          Pricing.subMonthlyEur,
          savingsRate: Pricing.normalSavingsRate,
        ),
        closeTo(10.59, 0.01),
      );
      expect(
        Pricing.breakEvenMonthlySpend(
          Pricing.subYearlyEur / 12,
          savingsRate: Pricing.normalSavingsRate,
        ),
        closeTo(8.90, 0.01),
      );
      // Lifetime: 79,99 € / 9,35 % ≈ 856 € kumulierter Einkauf.
      expect(
        Pricing.subLifetimeEur / Pricing.normalSavingsRate,
        closeTo(855.51, 0.5),
      );
    });
  });

  group('Abo-Preismodell (Konsistenz zur Server-RPC)', () {
    // Preise müssen mit choose_subscription_plan (Migration 0061) und dem
    // SubscriptionScreen übereinstimmen.
    const monthlyCents = 99;
    const yearlyCents = 999;
    const lifetimeCents = 7999;

    test('Pricing-Konstanten spiegeln die Server-Preise in Cent', () {
      expect((Pricing.subMonthlyEur * 100).round(), monthlyCents);
      expect((Pricing.subYearlyEur * 100).round(), yearlyCents);
      expect((Pricing.subLifetimeEur * 100).round(), lifetimeCents);
    });

    test('Jahres-Abo entspricht rund 10 Monaten — 2 Monate geschenkt', () {
      // 9,99 € ≈ 10,09 Monatsbeiträge; gegenüber 12 × 0,99 € = 11,88 €
      // sind das knapp zwei geschenkte Monate.
      expect(yearlyCents / monthlyCents, closeTo(10, 0.2));
      expect((12 * monthlyCents - yearlyCents) / monthlyCents, closeTo(2, 0.2));
    });

    test('Lifetime amortisiert sich gegenüber Jahres-Abo nach 8 Jahren', () {
      expect((lifetimeCents / yearlyCents).floor(), 8);
    });

    test('Lifetime ist auf 20 Founders-Plätze limitiert', () {
      expect(Pricing.lifetimeFoundersLimit, 20);
    });
  });
}
