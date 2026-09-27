import 'package:equatable/equatable.dart';

class StockItem extends Equatable {
  const StockItem({
    required this.machineId,
    required this.productId,
    required this.productName,
    required this.quantity,
    required this.parLevel,
    required this.capacity,
    required this.availability,
    this.imageUrl,
    this.listPriceNet,
    this.taxRate,
    this.deposit = 0,
  });

  final String machineId;
  final String productId;
  final String productName;
  final int quantity;
  final int parLevel; // Nachfüll-Schwelle
  final int capacity; // Fach-Kapazität = 100 %
  final String availability; // available | low | out
  final String? imageUrl;
  final double? listPriceNet;

  /// USt-Satz in Prozent (7/19) — für die Brutto-Berechnung im Client.
  final double? taxRate;

  /// Pfand je Stück, brutto. Steht nach § 7 PAngV neben dem Preis und ist in
  /// [grossPrice] nicht enthalten (V-016).
  final double deposit;

  /// Automatenpreis brutto (Listenpreis netto + USt), ohne Pfand.
  double? get grossPrice => listPriceNet == null
      ? null
      : double.parse(
          (listPriceNet! * (1 + (taxRate ?? 19) / 100)).toStringAsFixed(2),
        );

  factory StockItem.fromJson(Map<String, dynamic> j) => StockItem(
        machineId: j['machine_id'] as String,
        productId: j['product_id'] as String,
        productName: j['product_name'] as String? ?? '',
        quantity: (j['quantity'] as num?)?.toInt() ?? 0,
        parLevel: (j['par_level'] as num?)?.toInt() ?? 0,
        capacity: (j['capacity'] as num?)?.toInt() ?? 0,
        availability: j['availability'] as String? ?? 'available',
        imageUrl: j['image_url'] as String?,
        listPriceNet: (j['list_price_net'] as num?)?.toDouble(),
        taxRate: (j['tax_rate'] as num?)?.toDouble(),
        deposit: (j['deposit'] as num?)?.toDouble() ?? 0,
      );

  @override
  List<Object?> get props => [
        machineId,
        productId,
        quantity,
        capacity,
        availability,
        imageUrl,
        listPriceNet,
        taxRate,
        deposit,
      ];
}
