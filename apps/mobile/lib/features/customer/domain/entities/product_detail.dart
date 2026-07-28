import 'package:equatable/equatable.dart';

/// Top-Produkt einer Kategorie (für „Eure Favoriten"-Slider).
class RankedProduct extends Equatable {
  const RankedProduct({
    required this.id,
    required this.name,
    required this.category,
    required this.avgRating,
    required this.reviewCount,
    this.subcategory,
    this.imageUrl,
    this.listPriceNet,
    this.taxRate,
    this.availableMachines = 0,
  });

  final String id;
  final String name;
  final String category;

  /// Feingliederung, aktuell nur bei Getränken gesetzt
  /// (Energy Drinks / Kaltgetränke / Heißgetränke).
  final String? subcategory;

  final double avgRating;
  final int reviewCount;
  final String? imageUrl;
  final double? listPriceNet;

  /// Zahl der Automaten, an denen der Artikel gerade vorrätig ist.
  final int availableMachines;

  /// USt-Satz in Prozent (7/19) — für die Brutto-Berechnung im Client.
  final double? taxRate;

  /// Automatenpreis brutto (Listenpreis netto + USt).
  double? get grossPrice => listPriceNet == null
      ? null
      : double.parse(
          (listPriceNet! * (1 + (taxRate ?? 19) / 100)).toStringAsFixed(2),
        );

  factory RankedProduct.fromJson(Map<String, dynamic> j) => RankedProduct(
        id: j['id'] as String,
        name: j['name'] as String? ?? '',
        category: j['category'] as String? ?? '',
        subcategory: j['subcategory'] as String?,
        imageUrl: j['image_url'] as String?,
        listPriceNet: (j['list_price_net'] as num?)?.toDouble(),
        taxRate: (j['tax_rate'] as num?)?.toDouble(),
        avgRating: (j['avg_rating'] as num?)?.toDouble() ?? 0,
        reviewCount: (j['review_count'] as num?)?.toInt() ?? 0,
        availableMachines: (j['available_machines'] as num?)?.toInt() ?? 0,
      );

  @override
  List<Object?> get props => [id, name, avgRating, reviewCount];
}

/// Vollständige Produkt-Detailansicht: Nährwerte, Allergene, Rating.
class ProductDetail extends Equatable {
  const ProductDetail({
    required this.id,
    required this.name,
    required this.category,
    required this.avgRating,
    required this.reviewCount,
    this.imageUrl,
    this.listPriceNet,
    this.taxRate,
    this.energyKcal,
    this.fatG,
    this.saturatedFatG,
    this.carbsG,
    this.sugarsG,
    this.proteinG,
    this.saltG,
    this.allergens = const [],
    this.myRating,
  });

  final String id;
  final String name;
  final String category;
  final String? imageUrl;
  final double? listPriceNet;

  /// USt-Satz in Prozent (7/19) — für die Brutto-Berechnung im Client.
  final double? taxRate;

  /// Automatenpreis brutto (Listenpreis netto + USt).
  double? get grossPrice => listPriceNet == null
      ? null
      : double.parse(
          (listPriceNet! * (1 + (taxRate ?? 19) / 100)).toStringAsFixed(2),
        );
  final double? energyKcal;
  final double? fatG;
  final double? saturatedFatG;
  final double? carbsG;
  final double? sugarsG;
  final double? proteinG;
  final double? saltG;
  final List<String> allergens;
  final double avgRating;
  final int reviewCount;
  final int? myRating;

  factory ProductDetail.fromJson(Map<String, dynamic> j) => ProductDetail(
        id: j['id'] as String,
        name: j['name'] as String? ?? '',
        category: j['category'] as String? ?? '',
        imageUrl: j['image_url'] as String?,
        listPriceNet: (j['list_price_net'] as num?)?.toDouble(),
        taxRate: (j['tax_rate'] as num?)?.toDouble(),
        energyKcal: (j['energy_kcal'] as num?)?.toDouble(),
        fatG: (j['fat_g'] as num?)?.toDouble(),
        saturatedFatG: (j['saturated_fat_g'] as num?)?.toDouble(),
        carbsG: (j['carbs_g'] as num?)?.toDouble(),
        sugarsG: (j['sugars_g'] as num?)?.toDouble(),
        proteinG: (j['protein_g'] as num?)?.toDouble(),
        saltG: (j['salt_g'] as num?)?.toDouble(),
        allergens: ((j['allergens'] as List?) ?? const [])
            .map((e) => e.toString())
            .toList(),
        avgRating: (j['avg_rating'] as num?)?.toDouble() ?? 0,
        reviewCount: (j['review_count'] as num?)?.toInt() ?? 0,
        myRating: (j['my_rating'] as num?)?.toInt(),
      );

  @override
  List<Object?> get props => [id, avgRating, reviewCount, myRating];
}
