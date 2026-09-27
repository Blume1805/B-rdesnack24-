import 'package:equatable/equatable.dart';

import '../../../../core/utils/prices.dart';

/// Marketing-Angebot (Wochen-/Tages-/Sonderaktion).  Enthält jetzt auch die
/// Preisdaten für den Rabattausweis (alter Preis durchgestrichen +
/// prozentualer Rabatt).  `regularPriceNet` / `offerPriceNet` sind
/// optional, weil ältere Datensätze ggf. noch keine Preise haben.
///
/// Angezeigt werden nie die Nettopreise, sondern [regularGross] und
/// [offerGross] (§ 3 PAngV), der Pfand daneben ([deposit], § 7 PAngV).
/// Steuersatz und Pfand kommen aus dem Produkt; fehlt der Steuersatz, gibt
/// es keinen Preis ([hasPrice] ist dann `false`).
class Offer extends Equatable {
  const Offer({
    required this.id,
    required this.title,
    required this.kind,
    this.description,
    this.validTo,
    this.imageUrl,
    this.productId,
    this.regularPriceNet,
    this.offerPriceNet,
    this.discountPercent,
    this.taxRate,
    this.deposit = 0,
  });

  final String id;
  final String title;
  final String kind; // daily | weekly | special
  final String? description;
  final DateTime? validTo;
  final String? imageUrl;

  /// Referenz auf das Produkt, damit die Produkt-Detailseite geöffnet werden
  /// kann (Nährwerte, Bewertungen).  Kann null sein, wenn das Angebot nicht
  /// direkt an ein Produkt gekoppelt ist.
  final String? productId;

  final double? regularPriceNet;
  final double? offerPriceNet;
  final double? discountPercent;

  /// USt-Satz des Produkts in Prozent.
  final double? taxRate;

  /// Pfand je Stück, brutto; nicht rabattiert und nicht im Preis enthalten.
  final double deposit;

  bool get hasPrice =>
      regularPriceNet != null && offerPriceNet != null && taxRate != null;

  double? get regularGross =>
      hasPrice ? Prices.gross(regularPriceNet!, taxRate!) : null;
  double? get offerGross =>
      hasPrice ? Prices.gross(offerPriceNet!, taxRate!) : null;

  factory Offer.fromJson(Map<String, dynamic> j) => Offer(
        id: j['id'] as String,
        title: j['title'] as String? ?? '',
        kind: j['kind'] as String? ?? 'special',
        description: j['description'] as String?,
        validTo: j['valid_to'] != null
            ? DateTime.tryParse(j['valid_to'].toString())
            : null,
        imageUrl: j['image_url'] as String?,
        productId: j['product_id'] as String?,
        regularPriceNet: (j['regular_price_net'] as num?)?.toDouble(),
        offerPriceNet: (j['offer_price_net'] as num?)?.toDouble(),
        discountPercent: (j['discount_percent'] as num?)?.toDouble(),
        taxRate: (j['tax_rate'] as num?)?.toDouble(),
        deposit: (j['deposit'] as num?)?.toDouble() ?? 0,
      );

  @override
  List<Object?> get props => [
        id,
        title,
        kind,
        validTo,
        imageUrl,
        productId,
        regularPriceNet,
        offerPriceNet,
        discountPercent,
      ];
}

/// Individuelles, kundenspezifisches Angebot mit Einlösecode. Max 3 Tage
/// gültig; nach Einlösung wird `redeemedAt` gesetzt und ein neues Angebot
/// vom Backend erzeugt.
/// Quelle eines individuellen Angebots.  Bestimmt UI-Styling und
/// Sortierung im Angebote-Tab.
enum PersonalOfferSource {
  /// Basis-Angebot ('auto'): 10 % auf ein Produkt aus dem Konsumverhalten,
  /// max. 1 aktives pro Kunde.
  auto,

  /// Loyalty-Bonus für erreichten Meilenstein (5/10/15/25 %).
  loyalty,

  /// 50 %-Rabatt zum Geburtstag, 14 Tage gültig, „Produkt deiner Wahl".
  birthday,

  /// 30 %-Rabatt zum Jahrestag der Registrierung, 14 Tage gültig,
  /// „Produkt deiner Wahl".
  anniversary;

  static PersonalOfferSource fromString(String? s) => switch (s) {
        'loyalty' => PersonalOfferSource.loyalty,
        'birthday' => PersonalOfferSource.birthday,
        'anniversary' => PersonalOfferSource.anniversary,
        _ => PersonalOfferSource.auto,
      };
}

class PersonalOffer extends Equatable {
  const PersonalOffer({
    required this.id,
    required this.title,
    required this.regularPriceNet,
    required this.offerPriceNet,
    required this.discountPercent,
    required this.redemptionCode,
    required this.validFrom,
    required this.validTo,
    required this.source,
    this.redeemedAt,
    this.activatedAt,
    this.imageUrl,
    this.productId,
    this.taxRate,
    this.deposit = 0,
  });

  final String id;
  final String title;
  final double regularPriceNet;
  final double offerPriceNet;
  final double discountPercent;
  final String redemptionCode;
  final DateTime validFrom;
  final DateTime validTo;
  final DateTime? redeemedAt;
  final DateTime? activatedAt;
  final String? imageUrl;
  final PersonalOfferSource source;

  final String? productId;

  /// USt-Satz des Produkts in Prozent; ohne ihn wird kein Preis gezeigt.
  final double? taxRate;

  /// Pfand je Stück, brutto; nicht rabattiert und nicht im Preis enthalten.
  final double deposit;

  bool get hasPrice => taxRate != null;
  double? get regularGross =>
      hasPrice ? Prices.gross(regularPriceNet, taxRate!) : null;
  double? get offerGross =>
      hasPrice ? Prices.gross(offerPriceNet, taxRate!) : null;

  bool get isRedeemed => redeemedAt != null;
  bool get isActivated => activatedAt != null;
  bool get isExpired => DateTime.now().isAfter(validTo);
  bool get isActive => !isRedeemed && !isExpired;
  bool get isSpecial =>
      source == PersonalOfferSource.birthday ||
      source == PersonalOfferSource.anniversary;

  /// Für den Offline-Cache (gleiche Keys wie fromJson).
  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'regular_price_net': regularPriceNet,
        'offer_price_net': offerPriceNet,
        'discount_percent': discountPercent,
        'redemption_code': redemptionCode,
        'valid_from': validFrom.toIso8601String(),
        'valid_to': validTo.toIso8601String(),
        'redeemed_at': redeemedAt?.toIso8601String(),
        'activated_at': activatedAt?.toIso8601String(),
        'image_url': imageUrl,
        'source': source.name,
        'product_id': productId,
        'tax_rate': taxRate,
        'deposit': deposit,
      };

  factory PersonalOffer.fromJson(Map<String, dynamic> j) => PersonalOffer(
        id: j['id'] as String,
        title: j['title'] as String? ?? '',
        regularPriceNet: (j['regular_price_net'] as num?)?.toDouble() ?? 0,
        offerPriceNet: (j['offer_price_net'] as num?)?.toDouble() ?? 0,
        discountPercent: (j['discount_percent'] as num?)?.toDouble() ?? 0,
        redemptionCode: j['redemption_code'] as String? ?? '',
        validFrom: DateTime.tryParse(j['valid_from']?.toString() ?? '') ??
            DateTime.now(),
        validTo: DateTime.tryParse(j['valid_to']?.toString() ?? '') ??
            DateTime.now(),
        redeemedAt: j['redeemed_at'] != null
            ? DateTime.tryParse(j['redeemed_at'].toString())
            : null,
        activatedAt: j['activated_at'] != null
            ? DateTime.tryParse(j['activated_at'].toString())
            : null,
        imageUrl: j['image_url'] as String?,
        source: PersonalOfferSource.fromString(j['source'] as String?),
        productId: j['product_id'] as String?,
        taxRate: (j['tax_rate'] as num?)?.toDouble(),
        deposit: (j['deposit'] as num?)?.toDouble() ?? 0,
      );

  @override
  List<Object?> get props => [
        id,
        title,
        regularPriceNet,
        offerPriceNet,
        discountPercent,
        redemptionCode,
        validTo,
        redeemedAt,
        source,
      ];
}
