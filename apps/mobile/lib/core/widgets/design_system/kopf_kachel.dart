import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import 'brand_marks.dart';

/// Kachel unter dem Markenbild (Referenzbild Philipp 18.11.2026): goldener
/// Rahmen, Symbolfeld links, optional ein goldenes Etikett über dem Titel,
/// eine Unterzeile und rechts nach einem Trennstrich die Knöpfe der Seite.
class KopfKachel extends StatelessWidget {
  const KopfKachel({
    super.key,
    required this.symbol,
    required this.titel,
    this.etikett,
    this.unterzeile,
    this.aktionen = const [],
  });

  final Widget symbol;
  final Widget titel;
  final String? etikett;
  final Widget? unterzeile;
  final List<Widget> aktionen;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: AppSpacing.s4),
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s3,
        AppSpacing.s3,
        AppSpacing.s2,
        AppSpacing.s3,
      ),
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        borderRadius: BorderRadius.circular(AppRadii.lg),
        border: Border.all(
          color: AppColors.brand.withValues(alpha: 0.85),
          width: 1.5,
        ),
      ),
      child: Row(
        children: [
          symbol,
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                if (etikett != null) ...[
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 8,
                      vertical: 2,
                    ),
                    decoration: BoxDecoration(
                      color: AppColors.brand,
                      borderRadius: BorderRadius.circular(AppRadii.pill),
                    ),
                    child: Text(
                      etikett!.toUpperCase(),
                      style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w800,
                        color: AppColors.onBrand,
                      ).copyWith(letterSpacing: 0.4),
                    ),
                  ),
                  const SizedBox(height: 4),
                ],
                // Titel wird so weit verkleinert (bis 14 pt), dass sein
                // längstes Wort in eine Zeile passt: kein Umbruch mitten im
                // Wort, auch wenn rechts Knöpfe stehen (Layoutprüfung
                // 18.11.2026: „Benachrichtigungen").
                LayoutBuilder(
                  builder: (context, c) => DefaultTextStyle(
                    style: _titelStil(
                      titel is Text ? (titel as Text).data : null,
                      c.maxWidth,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    child: titel,
                  ),
                ),
                if (unterzeile != null) ...[
                  const SizedBox(height: 3),
                  DefaultTextStyle(
                    style: AppTypography.body(
                      size: 13,
                      color: AppColors.textMuted,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    child: unterzeile!,
                  ),
                ],
              ],
            ),
          ),
          if (aktionen.isNotEmpty) ...[
            Container(
              width: 1,
              height: 44,
              margin: const EdgeInsets.symmetric(horizontal: AppSpacing.s2),
              color: AppColors.borderSubtle,
            ),
            IconTheme(
              data: const IconThemeData(color: AppColors.textStrong),
              child: Row(mainAxisSize: MainAxisSize.min, children: aktionen),
            ),
          ],
        ],
      ),
    );
  }
}

TextStyle _titelStil(String? text, double breite) {
  TextStyle stil(double groesse) => AppTypography.display(
        size: groesse,
        weight: FontWeight.w800,
        color: AppColors.textStrong,
      ).copyWith(height: 1.15);
  if (text == null || breite.isInfinite) return stil(20);
  final laengstes = text
      .split(RegExp(r'\s+'))
      .fold<String>('', (a, b) => b.length > a.length ? b : a);
  var groesse = 20.0;
  while (groesse > 14) {
    final tp = TextPainter(
      text: TextSpan(text: laengstes, style: stil(groesse)),
      textDirection: TextDirection.ltr,
      maxLines: 1,
    )..layout();
    if (tp.width <= breite) break;
    groesse -= 1;
  }
  return stil(groesse);
}

/// Symbolfelder für die [KopfKachel].
abstract final class KopfSymbol {
  /// Goldenes Feld mit dem Markenzeichen (Startseite).
  static Widget marke() => Container(
        width: 56,
        height: 56,
        padding: const EdgeInsets.all(6),
        decoration: BoxDecoration(
          color: AppColors.brand,
          borderRadius: BorderRadius.circular(AppRadii.md),
        ),
        child: const BrandIcon(size: 44, color: AppColors.onBrand),
      );

  /// Feld mit dem Symbol der Funktion (Unterseiten), wie in den Kacheln
  /// der Verwaltung.
  static Widget funktion(IconData icon) => Container(
        width: 52,
        height: 52,
        decoration: BoxDecoration(
          color: AppColors.brandLight,
          borderRadius: BorderRadius.circular(AppRadii.md),
          border: Border.all(color: AppColors.brand.withValues(alpha: 0.5)),
        ),
        alignment: Alignment.center,
        child: Icon(icon, size: 26, color: AppColors.brand),
      );
}
