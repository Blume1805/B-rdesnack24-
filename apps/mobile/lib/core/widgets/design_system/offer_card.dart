import 'package:flutter/material.dart';

import '../../motion/motion.dart';
import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import '../../utils/formatters.dart';
import 'brand_marks.dart';
import 'footnote_mark.dart';
import 'product_image.dart';
import 'rating_stars.dart';

/// Angebots-Karte im Bördesnack24-Style (Layout wie in gängigen Handels-Apps,
/// aber komplett im Designsystem):
///
///   ┌────────────────────────────┐
///   │ [Produktbild]              │
///   │                            │
///   ├─┬──────────────────────────┤
///   │ │  Icon+-XX%   statt X,XX │
///   │ │              **NEU,YY** │
///   ├─┴──────────────────────────┤
///   │  Produktname               │
///   └────────────────────────────┘
///
/// Optional: Gültigkeits-Badge oben rechts überm Bild, Kartensteg unten
/// (Karten-Pill) für Aktionen wie „Zur Karte hinzufügen".
/// Sternchen-Text zu jedem Rabatt-Badge.
///
/// Steht bewusst IN der Karte (nicht als grauer Absatz darunter): der „*"
/// am Prozentwert und seine Auflösung gehören zusammen, und bei einem
/// horizontalen Karussell ist eine Fußnote unter der Liste keiner
/// bestimmten Karte mehr zuzuordnen.
/// Gegenüber der früheren Fassung gekürzt, aber inhaltlich vollständig:
/// nicht kombinierbar + bei mehreren aktivierten Coupons gilt automatisch
/// der günstigste Preis. In einer 260 px breiten Karte kostet jede
/// zusätzliche Zeile spürbar Höhe.
const String kCouponFootnote =
    '* Nicht mit anderen Coupons/Aktionen kombinierbar. Bei mehreren '
    'aktivierten Coupons gilt automatisch der günstigste Preis.';

class OfferCard extends StatelessWidget {
  const OfferCard({
    super.key,
    required this.title,
    required this.regularPrice,
    required this.offerPrice,
    required this.discountPercent,
    this.imageUrl,
    this.validUntil,
    this.onTap,
    this.width = 260,
    this.footer,
    this.rating,
    this.reviewCount,
    this.heroTag,
    this.showFootnote = false,
  });

  /// Blendet [kCouponFootnote] am Kartenfuß ein — überall dort, wo das
  /// Rabatt-Badge ein „*" trägt.
  final bool showFootnote;

  /// Tag für den Hero-Übergang des Produktbilds in die Detailansicht.
  /// `null` = kein Hero (z. B. wenn die Karte nirgendwohin führt).
  final String? heroTag;

  final String title;
  final double regularPrice;
  final double offerPrice;
  final double discountPercent;
  final String? imageUrl;
  final DateTime? validUntil;
  final VoidCallback? onTap;
  final double width;

  /// Optionaler Footer (z. B. Aktivieren-Button, „Aktiviert"-Chip).
  final Widget? footer;

  /// Optionales Rating — wenn > 0 gesetzt, wird eine Sternchen-Zeile
  /// unter dem Titel eingeblendet („★ 4,3 (127)").
  final double? rating;
  final int? reviewCount;

  /// Wickelt [child] nur dann in einen Hero, wenn ein Tag gesetzt ist.
  static Widget _maybeHero({required String? tag, required Widget child}) =>
      tag == null ? child : Hero(tag: tag, child: child);

  @override
  Widget build(BuildContext context) {
    final body = Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisSize: MainAxisSize.min,
      children: [
        Stack(
          children: [
            AspectRatio(
              aspectRatio: 1.1,
              child: DecoratedBox(
                decoration: const BoxDecoration(color: Colors.white),
                // Hero-Übergang in die Detailansicht: das Produktbild
                // fliegt mit, statt hart geschnitten zu werden.
                child: _maybeHero(
                  tag: heroTag,
                  child: ProductImage.expand(
                    imageUrl: imageUrl,
                    productName: title,
                  ),
                ),
              ),
            ),
            if (validUntil != null)
              Positioned(
                top: AppSpacing.s2,
                left: AppSpacing.s2,
                child: Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: AppColors.ink,
                    borderRadius: BorderRadius.circular(AppRadii.sm),
                  ),
                  child: Text(
                    'gültig bis ${Formatters.date(validUntil!)}',
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w700,
                      color: AppColors.onDark,
                    ),
                  ),
                ),
              ),
            // Ersparnis als konkreter Euro-Betrag — die Zahl, die zählt,
            // ohne dass man die beiden Preise voneinander abziehen muss.
            if (regularPrice - offerPrice > 0.004)
              Positioned(
                top: AppSpacing.s2,
                right: AppSpacing.s2,
                child: Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: AppColors.brand,
                    border: Border.all(color: AppColors.ink, width: 1.2),
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                  child: Text(
                    'spart ${Formatters.euro(regularPrice - offerPrice)}',
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                ),
              ),
          ],
        ),
        Container(
          color: AppColors.brand,
          padding: const EdgeInsets.symmetric(
            horizontal: AppSpacing.s3,
            vertical: AppSpacing.s3,
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              _DiscountAnchor(percent: discountPercent),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'statt ${Formatters.euro(regularPrice)}',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w700,
                        color: AppColors.ink,
                      ).copyWith(
                        decoration: TextDecoration.lineThrough,
                        decorationColor: AppColors.ink,
                        decorationThickness: 2,
                      ),
                    ),
                    Text(
                      Formatters.euro(offerPrice),
                      style: AppTypography.display(
                        size: 26,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ).copyWith(height: 1),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(AppSpacing.s3),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                title,
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
              if (rating != null && rating! > 0) ...[
                const SizedBox(height: 4),
                RatingStars(
                  rating: rating!,
                  count: reviewCount ?? 0,
                  size: 13,
                ),
              ],
            ],
          ),
        ),
      ],
    );

    return SizedBox(
      width: width,
      // Schatten außen um das Material herum: `clipBehavior: antiAlias` würde
      // ihn sonst an der Kartenkante abschneiden. Die kräftigere Stufe, weil
      // diese Karten im Karussell deutlich vor dem Hintergrund stehen sollen.
      child: DecoratedBox(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(AppRadii.lg),
          boxShadow: AppShadows.raised,
        ),
        child: Material(
          color: AppColors.surfaceCard,
          borderRadius: BorderRadius.circular(AppRadii.lg),
          clipBehavior: Clip.antiAlias,
          elevation: 0,
          child: DecoratedBox(
            decoration: BoxDecoration(
              border: Border.all(color: AppColors.borderSubtle, width: 1),
              borderRadius: BorderRadius.circular(AppRadii.lg),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              mainAxisSize: MainAxisSize.min,
              children: [
                // Nur der Kartenkörper (Bild + Preis + Titel + Rating) ist
                // klickbar → Produkt-Detail. Der Footer mit dem Aktivieren-/
                // Deaktivieren-Button liegt außerhalb, damit ein Klick dort
                // NICHT die Detailseite triggert.
                //
                // PressableScale statt InkWell: die Skalierung ist hier das
                // klarere Feedback als ein Ripple, der unter dem Bild kaum
                // sichtbar wäre — und liefert zugleich die Haptik.
                PressableScale(
                  onTap: onTap,
                  child: body,
                ),
                if (footer != null)
                  Padding(
                    padding: const EdgeInsets.fromLTRB(
                      AppSpacing.s3,
                      0,
                      AppSpacing.s3,
                      AppSpacing.s3,
                    ),
                    child: footer!,
                  ),
                if (showFootnote)
                  Padding(
                    padding: const EdgeInsets.fromLTRB(
                      AppSpacing.s3,
                      0,
                      AppSpacing.s3,
                      AppSpacing.s3,
                    ),
                    child: Text(
                      kCouponFootnote,
                      style: AppTypography.body(
                        size: 9,
                        weight: FontWeight.w600,
                        color: AppColors.textMuted,
                      ).copyWith(height: 1.3),
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

/// Marken-Kreis mit Prozent-Text darunter — Ersatz für „Netto-plus-Handy".
class _DiscountAnchor extends StatelessWidget {
  const _DiscountAnchor({required this.percent});
  final double percent;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 68,
      padding: const EdgeInsets.symmetric(vertical: 4),
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        borderRadius: BorderRadius.circular(AppRadii.md),
        border: Border.all(color: AppColors.ink, width: 1.5),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const BrandIcon(size: 26),
          const SizedBox(height: 2),
          StarredText(
            '-${percent.toStringAsFixed(0)} %',
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ).copyWith(height: 1),
          ),
        ],
      ),
    );
  }
}
