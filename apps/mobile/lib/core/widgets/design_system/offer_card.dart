import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import '../../utils/formatters.dart';
import 'brand_marks.dart';
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
  });

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

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: width,
      child: Material(
        color: AppColors.surfaceCard,
        borderRadius: BorderRadius.circular(AppRadii.lg),
        clipBehavior: Clip.antiAlias,
        elevation: 0,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(AppRadii.lg),
          child: DecoratedBox(
            decoration: BoxDecoration(
              border: Border.all(color: AppColors.borderSubtle, width: 1),
              borderRadius: BorderRadius.circular(AppRadii.lg),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Produktbild oben
                Stack(
                  children: [
                    AspectRatio(
                      aspectRatio: 1.1,
                      child: DecoratedBox(
                        decoration: const BoxDecoration(color: Colors.white),
                        child: ProductImage.expand(
                          imageUrl: imageUrl,
                          productName: title,
                        ),
                      ),
                    ),
                    if (validUntil != null)
                      Positioned(
                        top: AppSpacing.s2,
                        left: AppSpacing.s2,
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 8, vertical: 4),
                          decoration: BoxDecoration(
                            color: AppColors.ink,
                            borderRadius:
                                BorderRadius.circular(AppRadii.sm),
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
                  ],
                ),
                // Gelbes Preis-Band
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
                // Titel + Rating + optionaler Footer
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppSpacing.s3,
                    AppSpacing.s3,
                    AppSpacing.s3,
                    AppSpacing.s3,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
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
                      if (footer != null) ...[
                        const SizedBox(height: AppSpacing.s3),
                        footer!,
                      ],
                    ],
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
          Text(
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
