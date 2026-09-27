import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Produkt-Bild mit Fallback-Platzhalter.
///
/// Zeigt das Produktfoto, wenn `imageUrl` vorhanden ist, andernfalls einen
/// stilisierten Platzhalter (Marken-Icon + optional erster Buchstabe des
/// Produktnamens) in surfaceAlt.  Sobald Produktbilder in `products` /
/// `offers` als `image_url` gepflegt sind, ersetzt das echte Bild den
/// Platzhalter automatisch — kein weiterer Frontend-Change nötig.
///
/// Für Thumbnails: fixe Kantenlänge (`size: 64` …).
/// Für Karten-Header: [ProductImage.expand] in einem `AspectRatio` oder
/// `SizedBox` einbetten — dann füllt das Widget die verfügbare Fläche
/// und die Icon-Größe orientiert sich am tatsächlichen Layout.
class ProductImage extends StatelessWidget {
  const ProductImage({
    super.key,
    this.imageUrl,
    this.productName,
    required this.size,
    this.radius = AppRadii.md,
    this.icon = Icons.local_grocery_store_outlined,
  }) : _expand = false;

  /// Füllt die verfügbare Fläche (statt fixer Kantenlänge).
  const ProductImage.expand({
    super.key,
    this.imageUrl,
    this.productName,
    this.radius = 0,
    this.icon = Icons.local_grocery_store_outlined,
  })  : size = 0,
        _expand = true;

  final String? imageUrl;
  final String? productName;
  final double size;
  final double radius;
  final IconData icon;
  final bool _expand;

  @override
  Widget build(BuildContext context) {
    final url = imageUrl?.trim();
    final letter = (productName ?? '').trim().isNotEmpty
        ? productName!.trim().substring(0, 1).toUpperCase()
        : null;

    final content = LayoutBuilder(
      builder: (context, c) {
        final effective = _expand
            ? (c.maxWidth.isFinite && c.maxHeight.isFinite
                ? (c.maxWidth < c.maxHeight ? c.maxWidth : c.maxHeight)
                : 64.0)
            : size;
        return DecoratedBox(
          decoration: BoxDecoration(
            color: AppColors.surfaceAlt,
            border: Border.all(color: AppColors.borderSubtle),
            borderRadius: BorderRadius.circular(radius),
          ),
          child: Center(
            child: (url != null && url.isNotEmpty)
                ? Image.network(
                    url,
                    semanticLabel: productName == null
                        ? null
                        : 'Produktfoto: $productName',
                    fit: BoxFit.cover,
                    width: double.infinity,
                    height: double.infinity,
                    errorBuilder: (_, __, ___) =>
                        _placeholder(effective, letter),
                    loadingBuilder: (_, child, progress) => progress == null
                        ? child
                        : _placeholder(effective, letter),
                  )
                : _placeholder(effective, letter),
          ),
        );
      },
    );

    final clipped = ClipRRect(
      borderRadius: BorderRadius.circular(radius),
      child: content,
    );

    if (_expand) return clipped;
    return SizedBox(width: size, height: size, child: clipped);
  }

  /// Getönte „Bild"-Kachel, solange es keine Produktfotos gibt
  /// (Regel 5 des Skills `boerdesnack24-app-design`). Große Kacheln zeigen
  /// das Wort „Bild" und den Anfangsbuchstaben, kleine nur den Buchstaben.
  /// Sie wirken absichtlich als Platzhalter, nicht als fehlendes Bild.
  Widget _placeholder(double effective, String? letter) {
    final large = effective >= 72;
    return Container(
      width: double.infinity,
      height: double.infinity,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [AppColors.brandLight, AppColors.surfaceAlt],
        ),
      ),
      alignment: Alignment.center,
      child: ExcludeSemantics(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (large)
              Icon(
                Icons.image_outlined,
                size: effective * 0.2,
                color: AppColors.brandPale,
              ),
            if (letter != null)
              Text(
                letter,
                style: AppTypography.display(
                  size: effective * (large ? 0.3 : 0.42),
                  weight: FontWeight.w800,
                  color: AppColors.textStrong,
                ),
              ),
            if (large)
              Text(
                'Bild',
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.brandPale,
                ).copyWith(letterSpacing: 1.2),
              ),
          ],
        ),
      ),
    );
  }
}
