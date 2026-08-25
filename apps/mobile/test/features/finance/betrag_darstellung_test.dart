import 'package:flutter/material.dart';

import 'package:boerdesnack24/core/theme/app_tokens.dart';
import 'package:boerdesnack24/features/finance/domain/entities/finance_booking.dart';
import 'package:boerdesnack24/features/finance/domain/entities/finance_direction.dart';
import 'package:boerdesnack24/features/finance/domain/entities/finance_summary.dart';
import 'package:boerdesnack24/features/finance/presentation/widgets/betrag_text.dart';
import 'package:flutter_test/flutter_test.dart';

/// Vorgabe des Auftraggebers vom 25.08.2026: „Ausgaben möchte ich immer in
/// rot angezeigt bekommen mit einem `-` davor."
void main() {
  group('geldFliesstAb', () {
    test('Aufwand ja, Erlös nein', () {
      expect(geldFliesstAb('expense', '4920'), isTrue);
      expect(geldFliesstAb('revenue', '8400'), isFalse);
    });

    test('Privatentnahme fliesst ab, Privateinlage nicht', () {
      // Beide tragen `liability` — das Konto entscheidet.
      expect(geldFliesstAb('liability', '1800'), isTrue);
      expect(geldFliesstAb('liability', '1810'), isTrue);
      expect(geldFliesstAb('liability', '1890'), isFalse);
      expect(geldFliesstAb('liability', '1990'), isFalse);
    });

    test('Bestandskonto ohne klare Richtung bekommt kein Vorzeichen', () {
      expect(geldFliesstAb('asset', '0480'), isFalse);
      expect(geldFliesstAb('liability', '1780'), isFalse);
    });
  });

  group('betragMitVorzeichen', () {
    test('Auszahlung bekommt genau ein Minus', () {
      expect(betragMitVorzeichen(20.97, auszahlung: true), startsWith('-'));
      expect(
        betragMitVorzeichen(20.97, auszahlung: true).split('-').length,
        2,
        reason: 'kein doppeltes Vorzeichen',
      );
    });

    test('Einzahlung bleibt ohne Vorzeichen', () {
      final ohne = betragMitVorzeichen(74.27, auszahlung: false);
      expect(ohne, isNot(contains('-')));
    });

    test('ein bereits negativer Betrag ergibt kein doppeltes Minus', () {
      // In finance_bookings stehen alle Beträge positiv. Käme doch einer
      // negativ an, stünde sonst „--20,97 €" da.
      final text = betragMitVorzeichen(-20.97, auszahlung: true);
      expect(text.split('-').length, 2);
    });
  });

  group('betragsFarbe', () {
    test('rot für Aufwand, grün für Erlös, gedämpft für den Rest', () {
      expect(betragsFarbe('expense'), AppColors.statusCritical);
      expect(betragsFarbe('revenue'), AppColors.statusPositive);
      expect(betragsFarbe('liability'), AppColors.textMuted);
      expect(betragsFarbe('asset'), AppColors.textMuted);
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
      expect(aufwand.directionLabel, 'Aufwand');

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
