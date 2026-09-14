import 'package:equatable/equatable.dart';

/// Top-Produkt einer Kategorie (für „Eure Favoriten"-Slider).
class RankedProduct extends Equatable {
  const RankedProduct({
    required this.id,
    required this.name,
    required this.category,
    required this.avgRating,
    required this.reviewCount,
    this.imageUrl,
    this.listPriceNet,
    this.taxRate,
  });

  final String id;
  final String name;
  final String category;
  final double avgRating;
  final int reviewCount;
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

  factory RankedProduct.fromJson(Map<String, dynamic> j) => RankedProduct(
        id: j['id'] as String,
        name: j['name'] as String? ?? '',
        category: j['category'] as String? ?? '',
        imageUrl: j['image_url'] as String?,
        listPriceNet: (j['list_price_net'] as num?)?.toDouble(),
        taxRate: (j['tax_rate'] as num?)?.toDouble(),
        avgRating: (j['avg_rating'] as num?)?.toDouble() ?? 0,
        reviewCount: (j['review_count'] as num?)?.toInt() ?? 0,
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
    this.allergens,
    this.ingredients,
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

  /// `null` heißt **nicht geprüft**, eine leere Liste heißt **geprüft und
  /// keine enthalten**. Die Unterscheidung ist der ganze Zweck des
  /// nullbaren Typs: Bis zum 10.09.2026 wurde beides als leere Liste
  /// geführt, und der Bildschirm meldete daraufhin für jedes Produkt
  /// grün „Ohne Allergene" — für alle 66, von denen keines geprüfte
  /// Angaben trug.
  final List<String>? allergens;

  /// Zutatenverzeichnis im Wortlaut der Verpackung, samt freiwilligem
  /// Spurenhinweis. `null` heißt: liegt nicht vor.
  final String? ingredients;

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
        allergens: (j['allergens'] as List?)?.map((e) => e.toString()).toList(),
        ingredients: j['ingredients'] as String?,
        avgRating: (j['avg_rating'] as num?)?.toDouble() ?? 0,
        reviewCount: (j['review_count'] as num?)?.toInt() ?? 0,
        myRating: (j['my_rating'] as num?)?.toInt(),
      );

  @override
  List<Object?> get props => [id, avgRating, reviewCount, myRating];
}
