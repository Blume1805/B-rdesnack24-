import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/pricing/pricing.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/product_detail.dart';
import '../controllers/customer_providers.dart';

/// Produkt-Detailansicht: großes Produktbild, Titel, Rating, Nährwertblock
/// (Icons + Werte je 100 g), Allergen-Chips, Bewertung durch den Kunden.
class ProductDetailScreen extends ConsumerWidget {
  const ProductDetailScreen({super.key, required this.productId});
  final String productId;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final detail = ref.watch(productDetailProvider(productId));
    return Scaffold(
      appBar: HeroAppBar(
        title: Text(
          detail.valueOrNull?.name ?? 'Produkt',
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
        ),
      ),
      body: detail.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Padding(
          padding: const EdgeInsets.all(AppSpacing.s5),
          child: Text('$e', style: AppTypography.body(size: 14)),
        ),
        data: (p) {
          if (p == null) {
            return Padding(
              padding: const EdgeInsets.all(AppSpacing.s5),
              child: Text(
                'Produkt nicht gefunden.',
                style: AppTypography.body(size: 14, color: AppColors.textMuted),
              ),
            );
          }
          return ListView(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s8,
            ),
            children: [
              // Produktbild
              AspectRatio(
                aspectRatio: 4 / 3,
                child: ProductImage.expand(
                  imageUrl: p.imageUrl,
                  productName: p.name,
                ),
              ),
              const SizedBox(height: AppSpacing.s4),
              // Titel + Kategorie
              Text(
                p.category,
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w800,
                  color: AppColors.brand,
                ).copyWith(letterSpacing: 0.4),
              ),
              const SizedBox(height: 2),
              Text(
                p.name,
                style: AppTypography.display(
                  size: 24,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
              const SizedBox(height: AppSpacing.s3),
              RatingStars(rating: p.avgRating, count: p.reviewCount, size: 18),
              const SizedBox(height: AppSpacing.s5),

              // Preisblock (Automatenpreis vs. App-Preis −5 %)
              if (p.grossPrice != null) ...[
                const Eyebrow('Preis'),
                const SizedBox(height: AppSpacing.s3),
                _PriceCard(gross: p.grossPrice!),
                const SizedBox(height: AppSpacing.s5),
              ],

              // Nährwertblock
              const Eyebrow('Nährwerte je 100 g / 100 ml'),
              const SizedBox(height: AppSpacing.s3),
              _NutritionGrid(detail: p),
              const SizedBox(height: AppSpacing.s5),

              // Allergene
              const Eyebrow('Hinweise für Allergiker'),
              const SizedBox(height: AppSpacing.s3),
              if (p.allergens.isEmpty)
                AppCard(
                  color: AppColors.surfaceAlt,
                  child: Row(
                    children: [
                      const Icon(
                        Icons.check_circle_outline,
                        color: AppColors.statusPositive,
                        size: 20,
                      ),
                      const SizedBox(width: AppSpacing.s2),
                      Expanded(
                        child: Text(
                          'Keine deklarationspflichtigen Allergene enthalten.',
                          style: AppTypography.body(
                            size: 13,
                            color: AppColors.textDefault,
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              else
                Wrap(
                  spacing: AppSpacing.s2,
                  runSpacing: AppSpacing.s2,
                  children: [for (final a in p.allergens) _AllergenChip(a)],
                ),
              const SizedBox(height: AppSpacing.s6),

              // Eigene Bewertung
              const Eyebrow('Deine Bewertung'),
              const SizedBox(height: AppSpacing.s3),
              _MyRatingCard(productId: p.id, initial: p.myRating),
            ],
          );
        },
      ),
    );
  }
}

/// Preisblock: Abonnenten sehen den App-Preis (−5 %) prominent mit
/// durchgestrichenem Automatenpreis; ohne Abo steht der Automatenpreis
/// vorn und der App-Preis wirbt als Abo-Vorteil.
class _PriceCard extends ConsumerWidget {
  const _PriceCard({required this.gross});
  final double gross;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final hasSub = ref.watch(hasSubscriptionProvider).valueOrNull ?? false;
    final appPrice = Pricing.appPriceGross(gross);
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (hasSub) ...[
            PriceRow(
              regular: gross,
              discounted: appPrice,
              discountPercent: Pricing.appDiscountRate * 100,
              showBadge: false,
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Dein App-Preis mit Abo — immer 5 % unter dem Automatenpreis.',
              style: AppTypography.body(
                size: 13,
                weight: FontWeight.w600,
                color: AppColors.brandDark,
              ),
            ),
          ] else ...[
            Row(
              crossAxisAlignment: CrossAxisAlignment.baseline,
              textBaseline: TextBaseline.alphabetic,
              children: [
                Text(
                  Formatters.euro(gross),
                  style: AppTypography.display(
                    size: 26,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(width: AppSpacing.s2),
                Text(
                  'am Automaten',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w600,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Mit Bördesnack24-Abo nur ${Formatters.euro(appPrice)} — '
              'App-Nutzer sparen immer 5 %.',
              style: AppTypography.body(
                size: 13,
                weight: FontWeight.w600,
                color: AppColors.textMuted,
              ),
            ),
          ],
        ],
      ),
    );
  }
}

class _NutritionGrid extends StatelessWidget {
  const _NutritionGrid({required this.detail});
  final ProductDetail detail;

  @override
  Widget build(BuildContext context) {
    // Reihenfolge und Icons an die LMIV-Nährwerttabelle angelehnt.
    final items = <_NutritionItem>[
      _NutritionItem(
        icon: Icons.local_fire_department_outlined,
        label: 'Energie',
        value: detail.energyKcal == null
            ? '—'
            : '${detail.energyKcal!.toStringAsFixed(0)} kcal',
      ),
      _NutritionItem(
        icon: Icons.water_drop_outlined,
        label: 'Fett',
        value: detail.fatG == null ? '—' : _g(detail.fatG!),
      ),
      _NutritionItem(
        icon: Icons.opacity_outlined,
        label: 'davon gesättigt',
        value: detail.saturatedFatG == null ? '—' : _g(detail.saturatedFatG!),
      ),
      _NutritionItem(
        icon: Icons.grain_outlined,
        label: 'Kohlenhydrate',
        value: detail.carbsG == null ? '—' : _g(detail.carbsG!),
      ),
      _NutritionItem(
        icon: Icons.icecream_outlined,
        label: 'davon Zucker',
        value: detail.sugarsG == null ? '—' : _g(detail.sugarsG!),
      ),
      _NutritionItem(
        icon: Icons.fitness_center_outlined,
        label: 'Eiweiß',
        value: detail.proteinG == null ? '—' : _g(detail.proteinG!),
      ),
      _NutritionItem(
        icon: Icons.grass_outlined,
        label: 'Salz',
        value: detail.saltG == null ? '—' : _g(detail.saltG!),
      ),
    ];
    return AppCard(
      padding: EdgeInsets.zero,
      child: Column(
        children: [
          for (int i = 0; i < items.length; i++) ...[
            _NutritionRow(item: items[i]),
            if (i != items.length - 1)
              const Divider(height: 1, color: AppColors.borderSubtle),
          ],
        ],
      ),
    );
  }

  String _g(double v) {
    final s = v.toStringAsFixed(1).replaceAll('.', ',');
    return '$s g';
  }
}

class _NutritionItem {
  const _NutritionItem({
    required this.icon,
    required this.label,
    required this.value,
  });
  final IconData icon;
  final String label;
  final String value;
}

class _NutritionRow extends StatelessWidget {
  const _NutritionRow({required this.item});
  final _NutritionItem item;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Row(
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              color: AppColors.brandLight,
              border: Border.all(color: AppColors.brand),
              borderRadius: BorderRadius.circular(AppRadii.md),
            ),
            alignment: Alignment.center,
            child: Icon(item.icon, size: 18, color: AppColors.ink),
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Text(
              item.label,
              style: AppTypography.body(
                size: 14,
                weight: FontWeight.w700,
                color: AppColors.ink,
              ),
            ),
          ),
          Text(
            item.value,
            style: AppTypography.body(
              size: 14,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

class _AllergenChip extends StatelessWidget {
  const _AllergenChip(this.name);
  final String name;

  static IconData _iconFor(String key) {
    switch (key.toLowerCase()) {
      case 'gluten':
      case 'weizen':
        return Icons.grass_outlined;
      case 'milch':
        return Icons.local_drink_outlined;
      case 'ei':
        return Icons.egg_outlined;
      case 'nüsse':
      case 'nuss':
      case 'haselnüsse':
      case 'mandel':
      case 'mandeln':
      case 'erdnüsse':
        return Icons.spa_outlined;
      case 'soja':
        return Icons.grain_outlined;
      case 'sesam':
        return Icons.eco_outlined;
      case 'sellerie':
        return Icons.grass_outlined;
      case 'senf':
        return Icons.local_florist_outlined;
      case 'fisch':
        return Icons.set_meal_outlined;
      case 'krebstiere':
      case 'krustentiere':
        return Icons.set_meal_outlined;
      case 'schwefeldioxid':
      case 'sulfite':
        return Icons.science_outlined;
      case 'lupinen':
        return Icons.local_florist_outlined;
      case 'weichtiere':
        return Icons.set_meal_outlined;
      default:
        return Icons.info_outline;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s3,
        vertical: 6,
      ),
      decoration: BoxDecoration(
        color: AppColors.surfaceAlt,
        border: Border.all(color: AppColors.statusWarning),
        borderRadius: BorderRadius.circular(AppRadii.pill),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(_iconFor(name), size: 14, color: AppColors.statusWarning),
          const SizedBox(width: 4),
          Text(
            name,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

class _MyRatingCard extends ConsumerStatefulWidget {
  const _MyRatingCard({required this.productId, required this.initial});
  final String productId;
  final int? initial;

  @override
  ConsumerState<_MyRatingCard> createState() => _MyRatingCardState();
}

class _MyRatingCardState extends ConsumerState<_MyRatingCard> {
  late int? _value = widget.initial;
  bool _saving = false;

  Future<void> _rate(int v) async {
    setState(() {
      _value = v;
      _saving = true;
    });
    try {
      await ref
          .read(customerRepositoryProvider)
          .rateProduct(widget.productId, v);
      ref.invalidate(productDetailProvider(widget.productId));
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Bewertung gespeichert. Danke!')),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Speichern fehlgeschlagen: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            _value == null
                ? 'Wie schmeckt dir das Produkt?'
                : 'Deine Bewertung: $_value ${_value == 1 ? 'Stern' : 'Sterne'}',
            style: AppTypography.body(
              size: 14,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          RatingInput(
            value: _value,
            onChanged: _saving ? (_) {} : _rate,
          ),
        ],
      ),
    );
  }
}
