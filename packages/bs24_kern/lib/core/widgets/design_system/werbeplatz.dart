import 'package:flutter/material.dart';

import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';

/// Ein gebuchter Werbeplatz: Logo eines Unternehmens, sichtbar als Anzeige
/// gekennzeichnet.
///
/// **Die Kennzeichnung ist nicht verhandelbar.** Werbung muss als solche
/// erkennbar sein (§ 5a Abs. 4 UWG); ein Logo ohne Hinweis auf einer
/// Angebotskarte sieht aus wie eine Partnerschaft oder ein Zahlungsmittel.
/// Das Wort kommt deshalb vom Server mit (`kennzeichnung`) und wird hier
/// nicht erfunden — fehlt es, steht „Anzeige".
///
/// Welches Logo erscheint, hängt allein vom Kalendertag ab. Alle
/// Kundinnen und Kunden sehen an einem Tag dasselbe; die Auswahl kennt
/// weder Konto noch Kaufhistorie. Deshalb trägt diese Fläche auch keinen
/// Kennzeichnungschip für automatische Inhalte: es wird nichts über den
/// einzelnen Nutzer entschieden.
class Werbeplatz extends StatelessWidget {
  const Werbeplatz({
    super.key,
    required this.logoUrl,
    required this.werbetreibender,
    this.altText,
    this.kennzeichnung = 'Anzeige',
    this.onTap,
  });

  final String logoUrl;
  final String werbetreibender;
  final String? altText;
  final String kennzeichnung;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final inhalt = Row(
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
          decoration: BoxDecoration(
            color: AppColors.surfaceAlt,
            border: Border.all(color: AppColors.borderSubtle),
            borderRadius: BorderRadius.circular(AppRadii.sm),
          ),
          child: Text(
            kennzeichnung,
            style: AppTypography.body(
              size: 9,
              weight: FontWeight.w800,
              color: AppColors.textMuted,
            ).copyWith(letterSpacing: 0.5),
          ),
        ),
        const SizedBox(width: AppSpacing.s2),
        Flexible(
          child: Semantics(
            label: altText ?? 'Logo $werbetreibender',
            image: true,
            child: Image.network(
              logoUrl,
              height: 22,
              fit: BoxFit.contain,
              // Ein Logo, das nicht lädt, hinterlässt den Namen — nicht
              // einen leeren Kasten neben dem Wort „Anzeige".
              errorBuilder: (_, __, ___) => Text(
                werbetreibender,
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
            ),
          ),
        ),
      ],
    );

    if (onTap == null) return inhalt;
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(AppRadii.sm),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: inhalt,
      ),
    );
  }
}
