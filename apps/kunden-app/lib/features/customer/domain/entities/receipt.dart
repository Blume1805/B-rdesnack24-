import 'package:equatable/equatable.dart';

/// Eine Position auf einem digitalen Beleg.
class ReceiptItem extends Equatable {
  const ReceiptItem({
    required this.label,
    required this.quantity,
    required this.unitPrice,
    required this.lineGross,
    required this.category,
  });

  final String label;
  final int quantity;
  final double unitPrice;
  final double lineGross;
  final String category;

  factory ReceiptItem.fromJson(Map<String, dynamic> j) => ReceiptItem(
        label: j['label']?.toString() ?? 'Artikel',
        quantity: (j['quantity'] as num?)?.toInt() ?? 1,
        unitPrice: (j['unit_price'] as num?)?.toDouble() ?? 0,
        lineGross: (j['line_gross'] as num?)?.toDouble() ?? 0,
        category: j['category']?.toString() ?? 'Sonstiges',
      );

  @override
  List<Object?> get props => [label, quantity, unitPrice, lineGross, category];
}

/// Ein strukturierter, durchsuchbarer Beleg (aus RPC my_receipts).
class Receipt extends Equatable {
  const Receipt({
    required this.id,
    required this.purchasedAt,
    required this.totalGross,
    required this.source,
    required this.category,
    required this.itemCount,
    required this.items,
    this.machineName,
    this.warrantyUntil,
  });

  final String id;
  final DateTime purchasedAt;
  final double totalGross;
  final String source; // nayax | manual | import
  final String category; // dominante Kategorie
  final int itemCount;
  final List<ReceiptItem> items;
  final String? machineName;
  final DateTime? warrantyUntil;

  factory Receipt.fromJson(Map<String, dynamic> j) => Receipt(
        id: j['id'] as String,
        purchasedAt:
            DateTime.tryParse(j['purchased_at']?.toString() ?? '')?.toLocal() ??
                DateTime.now(),
        totalGross: (j['total_gross'] as num?)?.toDouble() ?? 0,
        source: j['source']?.toString() ?? 'manual',
        category: j['category']?.toString() ?? 'Sonstiges',
        itemCount: (j['item_count'] as num?)?.toInt() ?? 0,
        machineName: j['machine_name']?.toString(),
        warrantyUntil: j['warranty_until'] == null
            ? null
            : DateTime.tryParse(j['warranty_until'].toString())?.toLocal(),
        items: ((j['items'] as List?) ?? const []).map((e) {
          return ReceiptItem.fromJson(Map<String, dynamic>.from(e as Map));
        }).toList(),
      );

  /// Freitext-Treffer über Produktnamen, Automat und Kategorie.
  bool matches(String query) {
    if (query.trim().isEmpty) return true;
    final q = query.toLowerCase();
    if (category.toLowerCase().contains(q)) return true;
    if ((machineName ?? '').toLowerCase().contains(q)) return true;
    return items.any((i) => i.label.toLowerCase().contains(q));
  }

  @override
  List<Object?> get props => [id, purchasedAt, totalGross, category, itemCount];
}
