import 'package:equatable/equatable.dart';

/// Verfügbarkeit eines Produkts in einem Automaten, wie Kunden sie sehen
/// (RPC `machine_availability`, V-016-d).
///
/// Bewusst **ohne Stückzahl**: Kunden erfahren nur, ob etwas da ist, knapp
/// wird oder fehlt. Stückzahlen, Kapazität und Nachfüllschwelle sind
/// Betriebsdaten und bleiben der internen Bestandsansicht vorbehalten.
class MachineAvailability extends Equatable {
  const MachineAvailability({
    required this.productId,
    required this.productName,
    required this.availability,
    this.imageUrl,
    this.priceGross,
    this.deposit = 0,
    this.mhdDiscountPercent = 0,
  });

  final String productId;
  final String productName;
  final String? imageUrl;

  /// `available` | `low` | `out`.
  final String availability;

  /// Warenpreis am Automaten nach MHD-Abschlag, brutto, ohne Pfand.
  final double? priceGross;

  /// Pfand je Stück, steht neben dem Preis (§ 7 PAngV).
  final double deposit;

  /// MHD-Abschlag in Prozent, 0 ohne Abschlag.
  final double mhdDiscountPercent;

  factory MachineAvailability.fromJson(Map<String, dynamic> j) =>
      MachineAvailability(
        productId: j['product_id'] as String,
        productName: j['product_name'] as String? ?? '',
        imageUrl: j['image_url'] as String?,
        availability: j['availability'] as String? ?? 'available',
        priceGross: (j['price_gross'] as num?)?.toDouble(),
        deposit: (j['deposit'] as num?)?.toDouble() ?? 0,
        mhdDiscountPercent:
            (j['mhd_discount_percent'] as num?)?.toDouble() ?? 0,
      );

  @override
  List<Object?> get props =>
      [productId, availability, priceGross, deposit, mhdDiscountPercent];
}
