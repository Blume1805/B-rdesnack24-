import 'package:equatable/equatable.dart';

class StockItem extends Equatable {
  const StockItem({
    required this.machineId,
    required this.productId,
    required this.productName,
    required this.quantity,
    required this.parLevel,
    required this.availability,
  });

  final String machineId;
  final String productId;
  final String productName;
  final int quantity;
  final int parLevel;
  final String availability; // available | low | out

  factory StockItem.fromJson(Map<String, dynamic> j) => StockItem(
        machineId: j['machine_id'] as String,
        productId: j['product_id'] as String,
        productName: j['product_name'] as String? ?? '',
        quantity: (j['quantity'] as num?)?.toInt() ?? 0,
        parLevel: (j['par_level'] as num?)?.toInt() ?? 0,
        availability: j['availability'] as String? ?? 'available',
      );

  @override
  List<Object?> get props => [machineId, productId, quantity, availability];
}
