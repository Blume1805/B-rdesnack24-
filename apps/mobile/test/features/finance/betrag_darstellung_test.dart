import 'package:flutter/material.dart';

import 'package:boerdesnack24/core/theme/app_tokens.dart';
import 'package:boerdesnack24/features/finance/domain/entities/finance_booking.dart';
import 'package:boerdesnack24/features/finance/domain/entities/finance_direction.dart';
import 'package:boerdesnack24/features/finance/domain/entities/finance_summary.dart';
import 'package:boerdesnack24/features/finance/presentation/widgets/betrag_text.dart';
import 'package:flutter_test/flutter_test.dart';

/// Vorgabe des Auftraggebers vom 25.08.2026: „Ausgaben möchte ich immer in
/// rot angezeigt bekommen mit einem `-` davor." — und, am selben Tag
/// nachgereicht: „Amazon ist eine Rückerstattung."
void main() {
  group('geldfluss', () {
    test('Aufwand hinaus, Erlös herein', () {
      expect(geldfluss('expense', '4920', 20.97), Geldfluss.hinaus);
      expect(geldfluss('revenue', '8400', 100), Geldfluss.herein);
    });

    test('Erstattung dreht die Richtung um', () {
      // Zwei Amazon-Belege über je 22,71 € mit derselben Rechnungsnummer;
      // der zweite ist die Rückerstattung. Sie steht auf demselben Konto,
      // mindert aber den Aufwand, statt ihn zu verdoppeln.
      expect(geldfluss('expense', '4930', -22.71), Geldfluss.herein);
      // Umgekehrt: ein negativer Erlös ist eine Erlösminderung.
      expect(geldfluss('revenue', '8400', -50), Geldfluss.hinaus);
    });

    test('Privatentnahme hinaus, Privateinlage herein', () {
      // Beide tragen `liability` — das Konto entscheidet.
      expect(geldfluss('liability', '1800', 215), Geldfluss.hinaus);
      expect(geldfluss('liability', '1810', 10), Geldfluss.hinaus);
      expect(geldfluss('liability', '1890', 215), Geldfluss.herein);
      expect(geldfluss('liability', '1990', 10), Geldfluss.herein);
    });

    test('Bestandskonto ohne klare Richtung bekommt kein Vorzeichen', () {
      expect(geldfluss('asset', '0480', 100), Geldfluss.weder);
      expect(geldfluss('liability', '1780', 74.27), Geldfluss.weder);
    });
  });

  group('Vorzeichen', () {
    test('Abfluss bekommt genau ein Minus', () {
      final text = betragMitFluss(20.97, Geldfluss.hinaus);
      expect(text, startsWith('-'));
      expect(text.split('-').length, 2, reason: 'kein doppeltes Vorzeichen');
    });

    test('Zufluss bleibt ohne Vorzeichen', () {
      expect(betragMitFluss(74.27, Geldfluss.herein), isNot(contains('-')));
    });

    test('Erstattung steht ohne Minus da', () {
      // Der gespeicherte Betrag ist negativ, der Geldfluss zeigt herein —
      // „-22,71 €" wäre hier genau die falsche Aussage.
      final fluss = geldfluss('expense', '4930', -22.71);
      expect(betragMitFluss(-22.71, fluss), isNot(contains('-')));
    });
  });

  group('betragsFarbe', () {
    test('rot bei Abfluss, grün bei Zufluss auf Erfolgskonten', () {
      const rot = AppColors.statusCritical;
      const gruen = AppColors.statusPositive;
      expect(betragsFarbe('expense', Geldfluss.hinaus), rot);
      expect(betragsFarbe('revenue', Geldfluss.herein), gruen);
      // Erstattung auf einem Aufwandskonto: grün, nicht rot.
      expect(betragsFarbe('expense', Geldfluss.herein), gruen);
      expect(betragsFarbe('revenue', Geldfluss.hinaus), rot);
    });

    test('Bestands- und Kapitalkonten bleiben gedämpft', () {
      expect(betragsFarbe('liability', Geldfluss.hinaus), AppColors.textMuted);
      expect(betragsFarbe('liability', Geldfluss.herein), AppColors.textMuted);
      expect(betragsFarbe('asset', Geldfluss.weder), AppColors.textMuted);
    });
  });

  group('Entitäten benutzen dieselbe Regel', () {
    test('FinanceBooking', () {
      final aufwand = FinanceBooking.fromJson({
        'id': 'a',
        'booking_date': '2026-08-19',
        'account_code': '4920',
        'account_name': 'Telefon',
        'direction': 'expense',
        'amount_net': 20.97,
        'source': 'sevdesk',
      });
      expect(aufwand.istAuszahlung, isTrue);
      expect(aufwand.istErstattung, isFalse);
      expect(aufwand.directionLabel, 'Aufwand');

      final erstattung = FinanceBooking.fromJson({
        'id': 'a2',
        'booking_date': '2026-05-15',
        'account_code': '4930',
        'account_name': 'Bürobedarf',
        'direction': 'expense',
        'amount_net': -22.71,
        'source': 'sevdesk',
      });
      expect(erstattung.istAuszahlung, isFalse);
      expect(erstattung.istErstattung, isTrue);

      final einlage = FinanceBooking.fromJson({
        'id': 'b',
        'booking_date': '2026-06-15',
        'account_code': '1890',
        'account_name': 'Privateinlagen',
        'direction': 'liability',
        'amount_net': 215,
        'source': 'sevdesk',
      });
      expect(einlage.istAuszahlung, isFalse);
      expect(einlage.directionLabel, 'Privat/Kapital');
    });

    test('AccountAmount', () {
      final k = AccountAmount.fromJson({
        'code': '4964',
        'name': 'Aufwendungen für Lizenzen',
        'direction': 'expense',
        'net': 250.0,
        'tax': 0.0,
        'gross': 250.0,
      });
      expect(k.istAuszahlung, isTrue);
      expect(k.directionLabel, 'Aufwand');
    });
  });

  testWidgets('BetragText zeigt Ausgaben rot mit Minus', (tester) async {
    await tester.pumpWidget(
      const Directionality(
        textDirection: TextDirection.ltr,
        child: BetragText(
          betrag: 20.97,
          direction: 'expense',
          accountCode: '4920',
        ),
      ),
    );
    final text = tester.widget<Text>(find.byType(Text));
    expect(text.data, startsWith('-'));
    expect(text.style?.color, AppColors.statusCritical);
    // Der Screenreader liest „Ausgabe …", nicht „Bindestrich".
    expect(text.semanticsLabel, startsWith('Ausgabe '));
  });

  testWidgets('BetragText zeigt eine Erstattung grün ohne Minus',
      (tester) async {
    await tester.pumpWidget(
      const Directionality(
        textDirection: TextDirection.ltr,
        child: BetragText(
          betrag: -22.71,
          direction: 'expense',
          accountCode: '4930',
        ),
      ),
    );
    final text = tester.widget<Text>(find.byType(Text));
    expect(text.data, isNot(contains('-')));
    expect(text.style?.color, AppColors.statusPositive);
    expect(text.semanticsLabel, startsWith('Erstattung '));
  });

  testWidgets('BetragText zeigt Erlöse grün ohne Vorzeichen', (tester) async {
    await tester.pumpWidget(
      const Directionality(
        textDirection: TextDirection.ltr,
        child: BetragText(
          betrag: 74.27,
          direction: 'revenue',
          accountCode: '1780',
        ),
      ),
    );
    final text = tester.widget<Text>(find.byType(Text));
    expect(text.data, isNot(startsWith('-')));
    expect(text.style?.color, AppColors.statusPositive);
  });
}
