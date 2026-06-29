import 'package:equatable/equatable.dart';

/// Individueller Kundenpreis (mit Produktname über Join).
class CustomerPrice extends Equatable {
  const CustomerPrice({
    required this.productName,
    required this.priceNet,
  });

  final String productName;
  final double priceNet;

  factory CustomerPrice.fromJson(Map<String, dynamic> j) {
    final product = j['products'] as Map<String, dynamic>?;
    return CustomerPrice(
      productName: product?['name'] as String? ?? '—',
      priceNet: (j['price_net'] as num?)?.toDouble() ?? 0,
    );
  }

  @override
  List<Object?> get props => [productName, priceNet];
}

/// Empfehlung (mit Produktname über Join).
class Recommendation extends Equatable {
  const Recommendation({
    required this.productName,
    required this.score,
    this.reason,
  });

  final String productName;
  final double score;
  final String? reason;

  factory Recommendation.fromJson(Map<String, dynamic> j) {
    final product = j['products'] as Map<String, dynamic>?;
    return Recommendation(
      productName: product?['name'] as String? ?? '—',
      score: (j['score'] as num?)?.toDouble() ?? 0,
      reason: j['reason'] as String?,
    );
  }

  @override
  List<Object?> get props => [productName, score];
}

/// Kauf (Kopf).
class Purchase extends Equatable {
  const Purchase({
    required this.id,
    required this.totalGross,
    required this.purchasedAt,
  });

  final String id;
  final double totalGross;
  final DateTime purchasedAt;

  factory Purchase.fromJson(Map<String, dynamic> j) => Purchase(
        id: j['id'] as String,
        totalGross: (j['total_gross'] as num?)?.toDouble() ?? 0,
        purchasedAt:
            DateTime.tryParse(j['purchased_at']?.toString() ?? '') ?? DateTime.now(),
      );

  @override
  List<Object?> get props => [id, totalGross, purchasedAt];
}
