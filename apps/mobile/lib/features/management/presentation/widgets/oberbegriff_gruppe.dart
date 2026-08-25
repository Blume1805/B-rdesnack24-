import 'package:flutter/material.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../domain/verwaltungs_struktur.dart';

/// Ein Oberbegriff mit seinen Funktionen, aufklappbar.
///
/// Zugeklappt ist die Zeile kein blosses Wort: Sie trägt Symbol, Titel, eine
/// erklärende Zeile und die Anzahl. Fünf zugeklappte Gruppen sollen ein
/// lesbares Menü ergeben und kein Rätsel.
///
/// Aufgeklappt läuft links eine goldene Schiene neben den Kacheln entlang.
/// Sie ist die einzige Zutat, die über das Nötige hinausgeht, und sie hat
/// einen Zweck: Sind zwei Gruppen offen, zeigt sie ohne Nachdenken, welche
/// Kachel zu welcher Überschrift gehört.
class OberbegriffGruppe extends StatelessWidget {
  const OberbegriffGruppe({
    super.key,
    required this.daten,
    required this.anzahl,
    required this.offen,
    required this.onUmschalten,
    required this.inhalt,
  });

  final OberbegriffDaten daten;
  final int anzahl;
  final bool offen;
  final VoidCallback onUmschalten;
  final Widget inhalt;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _Kopf(
          daten: daten,
          anzahl: anzahl,
          offen: offen,
          onUmschalten: onUmschalten,
        ),
        // AnimatedSize statt AnimatedCrossFade: Beim Zuklappen soll die
        // Höhe mitlaufen, sonst springt der Rest der Liste.
        AnimatedSize(
          duration: const Duration(milliseconds: 180),
          curve: Curves.easeOutCubic,
          alignment: Alignment.topCenter,
          child: offen
              ? Container(
                  // Die Schiene als linker Rahmen, nicht als gestreckte
                  // Zeile: In einer ListView ist die Höhe unbegrenzt, und
                  // `CrossAxisAlignment.stretch` verlangt dort eine
                  // endliche. Der Rahmen wächst einfach mit dem Inhalt.
                  margin: const EdgeInsets.only(
                    top: AppSpacing.s3,
                    bottom: AppSpacing.s2,
                    left: AppSpacing.s2,
                  ),
                  padding: const EdgeInsets.only(left: AppSpacing.s4),
                  decoration: const BoxDecoration(
                    border: Border(
                      left: BorderSide(color: AppColors.brand, width: 3),
                    ),
                  ),
                  child: inhalt,
                )
              : const SizedBox(width: double.infinity),
        ),
      ],
    );
  }
}

class _Kopf extends StatelessWidget {
  const _Kopf({
    required this.daten,
    required this.anzahl,
    required this.offen,
    required this.onUmschalten,
  });

  final OberbegriffDaten daten;
  final int anzahl;
  final bool offen;
  final VoidCallback onUmschalten;

  @override
  Widget build(BuildContext context) {
    // Ein InkWell mit Text darin ist für den Screenreader nur Text. Ohne
    // `expanded` bliebe unklar, ob gerade auf- oder zugeklappt ist.
    return Semantics(
      button: true,
      expanded: offen,
      label: '${daten.titel}, $anzahl ${anzahl == 1 ? 'Eintrag' : 'Einträge'}',
      child: Material(
        color: offen ? AppColors.surfaceAlt : AppColors.surfaceCard,
        borderRadius: BorderRadius.circular(AppRadii.md),
        child: InkWell(
          onTap: onUmschalten,
          borderRadius: BorderRadius.circular(AppRadii.md),
          child: Container(
            padding: const EdgeInsets.symmetric(
              horizontal: AppSpacing.s4,
              vertical: AppSpacing.s3,
            ),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(AppRadii.md),
              border: Border.all(
                color: offen ? AppColors.brand : AppColors.borderStrong,
              ),
            ),
            child: Row(
              children: [
                Icon(daten.icon, size: 22, color: AppColors.ink),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        daten.titel,
                        style: AppTypography.body(
                          size: 16,
                          weight: FontWeight.w700,
                          color: AppColors.ink,
                        ),
                      ),
                      const SizedBox(height: 1),
                      Text(
                        daten.beschreibung,
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: AppSpacing.s3),
                _Zaehler(anzahl: anzahl),
                const SizedBox(width: 4),
                AnimatedRotation(
                  turns: offen ? 0.5 : 0,
                  duration: const Duration(milliseconds: 180),
                  child: const Icon(
                    Icons.expand_more,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _Zaehler extends StatelessWidget {
  const _Zaehler({required this.anzahl});

  final int anzahl;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
      decoration: BoxDecoration(
        color: AppColors.brandLight,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        border: Border.all(color: AppColors.brand.withValues(alpha: 0.5)),
      ),
      // Die Zahl steht schon im Semantics-Label des Kopfes; hier wäre sie
      // ein zweites Mal zu hören.
      child: ExcludeSemantics(
        child: Text(
          '$anzahl',
          style: AppTypography.body(
            size: 12,
            weight: FontWeight.w800,
            color: AppColors.brandText,
          ),
        ),
      ),
    );
  }
}
