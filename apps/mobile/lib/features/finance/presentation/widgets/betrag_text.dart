import 'package:flutter/material.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../domain/entities/finance_direction.dart';

/// Ein Geldbetrag, überall gleich dargestellt.
///
/// Rot mit `-` bei allem, was Geld kostet; grün bei Erlösen; gedämpft bei
/// Bestands- und Kapitalkonten, die weder das eine noch das andere sind.
/// Die Regel steht in `istAuszahlung`, nicht in den Bildschirmen.
class BetragText extends StatelessWidget {
  const BetragText({
    super.key,
    required this.betrag,
    required this.direction,
    required this.accountCode,
    this.size = 15,
  });

  final double betrag;
  final String direction;
  final String accountCode;
  final double size;

  @override
  Widget build(BuildContext context) {
    final ab = geldFliesstAb(direction, accountCode);
    return Text(
      betragMitVorzeichen(betrag, auszahlung: ab),
      style: AppTypography.body(
        size: size,
        weight: FontWeight.w700,
        color: betragsFarbe(direction),
      ),
      // Für den Screenreader ist ein „-" vor einer Zahl nicht eindeutig; es
      // kann als Bindestrich vorgelesen werden. Deshalb hier im Klartext.
      semanticsLabel: ab
          ? 'Ausgabe ${Formatters.euro(betrag.abs())}'
          : '${richtungsBezeichnung(direction)} ${Formatters.euro(betrag.abs())}',
    );
  }
}

/// `-1.234,56 €` bei Auszahlungen, sonst ohne Vorzeichen.
///
/// Der Betrag wird vorher auf seinen Absolutwert gebracht: In
/// `finance_bookings` stehen alle Beträge positiv, die Richtung steckt in
/// `direction`. Käme doch einmal ein negativer Wert an, stünden sonst zwei
/// Minuszeichen davor.
String betragMitVorzeichen(double betrag, {required bool auszahlung}) {
  final text = Formatters.euro(betrag.abs());
  return auszahlung ? '-$text' : text;
}

/// Grün für Erlöse, rot für Aufwand, gedämpft für alles dazwischen.
Color betragsFarbe(String direction) {
  switch (direction) {
    case 'revenue':
      return AppColors.statusPositive;
    case 'expense':
      return AppColors.statusCritical;
    default:
      return AppColors.textMuted;
  }
}
