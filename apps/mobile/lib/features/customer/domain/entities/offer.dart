import 'package:equatable/equatable.dart';

/// Marketing-Angebot (Wochen-/Tages-/Sonderaktion).  Enthält jetzt auch die
/// Preisdaten für den Rabattausweis (alter Preis durchgestrichen +
/// prozentualer Rabatt).  `regularPriceNet` / `offerPriceNet` sind
/// optional, weil ältere Datensätze ggf. noch keine Preise haben.
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

  bool get hasPrice => regularPriceNet != null && offerPriceNet != null;

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

  bool get isRedeemed => redeemedAt != null;
  bool get isActivated => activatedAt != null;
  bool get isExpired => DateTime.now().isAfter(validTo);
  bool get isActive => !isRedeemed && !isExpired;
  bool get isSpecial =>
      source == PersonalOfferSource.birthday ||
      source == PersonalOfferSource.anniversary;

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
