import 'package:flutter/material.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../domain/entities/finance_direction.dart';

/// Ein Geldbetrag, überall gleich dargestellt.
///
/// Rot mit `-` bei allem, was Geld kostet; grün bei Erlösen und bei
/// Erstattungen; gedämpft bei Bestands- und Kapitalkonten, die weder das eine
/// noch das andere sind. Die Regel steht in `geldfluss`, nicht in den
/// Bildschirmen.
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
    final fluss = geldfluss(direction, accountCode, betrag);
    return Text(
      betragMitFluss(betrag, fluss),
      style: AppTypography.body(
        size: size,
        weight: FontWeight.w700,
        color: betragsFarbe(direction, fluss),
      ),
      // Für den Screenreader ist ein „-" vor einer Zahl nicht eindeutig; es
      // kann als Bindestrich vorgelesen werden. Deshalb hier im Klartext.
      semanticsLabel: '${flussBezeichnung(direction, fluss)} '
          '${Formatters.euro(betrag.abs())}',
    );
  }
}

/// `-1.234,56 €`, wenn Geld abfliesst, sonst ohne Vorzeichen.
///
/// Der Betrag wird auf seinen Absolutwert gebracht: Das Vorzeichen steckt
/// schon in `Geldfluss` — ein negativer Aufwand ist eine Erstattung und
/// bekommt gerade KEIN Minus, sondern steht wie ein Zufluss da.
String betragMitFluss(double betrag, Geldfluss fluss) {
  final text = Formatters.euro(betrag.abs());
  return fluss == Geldfluss.hinaus ? '-$text' : text;
}

/// Rot, wenn Geld abfliesst; grün, wenn es bei einem Erfolgskonto hereinkommt;
/// gedämpft bei Bestands- und Kapitalkonten.
///
/// Warum die Farbe am Fluss hängt und nicht allein an der Richtung: Eine
/// Erstattung steht auf einem Aufwandskonto, ist aber Geld, das zurückkommt.
/// Rot wäre dort schlicht falsch.
Color betragsFarbe(String direction, Geldfluss fluss) {
  if (fluss == Geldfluss.hinaus) {
    return direction == 'revenue' || direction == 'expense'
        ? AppColors.statusCritical
        : AppColors.textMuted;
  }
  if (fluss == Geldfluss.herein &&
      (direction == 'revenue' || direction == 'expense')) {
    return AppColors.statusPositive;
  }
  return AppColors.textMuted;
}

/// Was der Screenreader statt eines Minuszeichens vorliest.
String flussBezeichnung(String direction, Geldfluss fluss) {
  if (direction == 'expense') {
    return fluss == Geldfluss.hinaus ? 'Ausgabe' : 'Erstattung';
  }
  if (direction == 'revenue') {
    return fluss == Geldfluss.hinaus ? 'Erlösminderung' : 'Erlös';
  }
  if (fluss == Geldfluss.hinaus) return 'Privatentnahme';
  if (fluss == Geldfluss.herein) return 'Privateinlage';
  return richtungsBezeichnung(direction);
}
