import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Welches der offiziellen EU-Symbole gilt.
///
/// Die Zuordnung stammt nicht aus dem Bauch, sondern aus der Tabelle der
/// Kommission (`docs/assets/eu-ki-icons/HERKUNFT.md`). Sie unterscheidet
/// danach, ob es einen menschlich geschaffenen Ausgangsinhalt gab:
/// gab es keinen, ist der Inhalt erzeugt; gab es einen, ist er verändert.
enum KiHerkunft {
  /// Vollständig von KI erzeugt, ohne menschlich geschaffene Bestandteile.
  vollstaendigErzeugt,

  /// Bestehender, menschlich erstellter Inhalt wurde teilweise mit KI
  /// verändert.
  teilweiseBearbeitet,
}

/// Kennzeichnung eines KI-erzeugten oder KI-veränderten Inhalts mit dem
/// offiziellen Symbol der Europäischen Kommission.
///
/// ABGRENZUNG ZU [AiBadge] — die beiden sagen Verschiedenes und sind nicht
/// austauschbar:
///
/// * [AiBadge] kennzeichnet, dass eine **Auswahl automatisch** getroffen
///   wurde: Gutscheine, Angebote, Empfehlungen, Bonusstufen. Dahinter steht
///   eine Regel, kein KI-System. Der Chip erfüllt die Hausregel aus
///   `CLAUDE.md`, nicht Art. 50 KI-VO.
/// * Dieses Widget kennzeichnet, dass ein **Inhalt selbst** von einem
///   KI-System erzeugt oder verändert wurde. Es gehört ausschließlich an
///   solche Inhalte — heute an Bilder.
///
/// Ein EU-Symbol an einer regelbasierten Fläche wäre eine falsche Aussage
/// über das System: es behauptet KI, wo keine ist. Umgekehrt genügt der
/// Gold-Chip nicht für ein erzeugtes Bild.
///
/// ZUR RECHTSLAGE: Die Kommission stellt ausdrücklich klar, dass die
/// Verwendung der Symbole freiwillig ist und „für sich genommen keine
/// Rechtskonformität darstellt". Das Symbol ist die sichtbare Form der
/// Offenlegung, nicht ihr Ersatz. Deshalb trägt es hier immer einen
/// deutschen Alternativtext und führt auf eine Seite, die beschreibt,
/// inwiefern KI angewandt wurde.
class EuKiKennzeichen extends StatelessWidget {
  const EuKiKennzeichen({
    super.key,
    required this.herkunft,
    this.onTap,
    this.aufDunklemGrund = false,
    this.hoehe = 20,
    this.kompakt = false,
  });

  final KiHerkunft herkunft;

  /// Öffnet die zweite Ebene. Die Kommission verlangt, dass das Symbol
  /// erkennbar auf weitere Informationen hinweist, wenn es welche gibt.
  final VoidCallback? onTap;

  /// Die amtlichen Motive sind schwarz. Auf dunklem Grund bekommen sie eine
  /// helle Unterlage, statt das Motiv einzufärben: eine Umfärbung wäre eine
  /// Veränderung am amtlichen Symbol, eine Unterlage ist keine.
  final bool aufDunklemGrund;

  final double hoehe;

  /// Auf kleinen Flächen — Vorschaubilder, Listenzeilen — ist die
  /// beschriftete Pille unleserlich. Dort tritt das Grundsymbol an ihre
  /// Stelle. Die Kommission sieht genau diesen Fall vor: das Grundsymbol
  /// gilt, „wenn eine benutzerdefinierte Textbeschriftung oder eine
  /// interaktive zweite Ebene implementiert ist". Beides trifft hier zu, der
  /// Vorlesetext und die verlinkte Seite bleiben unverändert. Eine
  /// unleserlich kleine Pille wäre keine Kennzeichnung, sondern ein Fleck.
  final bool kompakt;

  String get _pfad {
    if (kompakt) return 'assets/images/ki/eu-ki-basis.png';
    return switch (herkunft) {
      KiHerkunft.vollstaendigErzeugt => 'assets/images/ki/eu-ki-generiert.png',
      KiHerkunft.teilweiseBearbeitet => 'assets/images/ki/eu-ki-bearbeitet.png',
    };
  }

  /// Der deutsche Wortlaut, den das englische Motiv nicht trägt. Er ist die
  /// eigentliche Offenlegung für alle, die das Bild nicht sehen.
  String get _vorlesetext => switch (herkunft) {
        KiHerkunft.vollstaendigErzeugt =>
          'Vollständig mit künstlicher Intelligenz erzeugt.',
        KiHerkunft.teilweiseBearbeitet =>
          'Mit künstlicher Intelligenz bearbeitet.',
      };

  @override
  Widget build(BuildContext context) {
    final bild = ExcludeSemantics(
      child: Image.asset(
        _pfad,
        height: hoehe,
        fit: BoxFit.contain,
        // Ohne Filter franst die feine Schrift in der Pille beim
        // Herunterskalieren aus.
        filterQuality: FilterQuality.high,
      ),
    );

    final inhalt = aufDunklemGrund
        ? Container(
            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
            decoration: BoxDecoration(
              color: AppColors.onDark,
              borderRadius: BorderRadius.circular(AppRadii.pill),
            ),
            child: bild,
          )
        : bild;

    final beschriftung = onTap == null
        ? _vorlesetext
        : '$_vorlesetext Mehr dazu auf der Seite zu automatisch erzeugten '
            'Inhalten.';

    if (onTap == null) {
      return Semantics(
        image: true,
        label: beschriftung,
        child: inhalt,
      );
    }

    return Semantics(
      link: true,
      label: beschriftung,
      child: InkWell(
        borderRadius: BorderRadius.circular(AppRadii.pill),
        onTap: onTap,
        // Mindestens 44 Punkt Tippfläche, ohne das Motiv zu vergrößern.
        child: ConstrainedBox(
          constraints: const BoxConstraints(minHeight: 44),
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 6),
            child: Align(
              alignment: Alignment.centerLeft,
              child: inhalt,
            ),
          ),
        ),
      ),
    );
  }
}
