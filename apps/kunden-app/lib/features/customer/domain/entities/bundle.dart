/// Kombiangebot: mehrere Produkte zu einem Bruttopreis.
///
/// Der Preis ist bewusst **brutto**, anders als bei einzelnen Produkten.
/// Ein Bundle über zwei Steuersätze (Cola 19 %, Popcorn 7 %) hat keinen
/// einen Nettopreis — netto ergibt sich erst nach der Aufteilung, die
/// serverseitig `public.bundle_split()` vornimmt. Der Client rechnet
/// deshalb nichts nach, er zeigt an.
class Bundle {
  const Bundle({
    required this.id,
    required this.title,
    required this.priceGross,
    required this.regularGross,
    required this.items,
    this.code,
    this.description,
    this.validTo,
  });

  final String id;
  final String? code;
  final String title;
  final String? description;

  /// Der beworbene Preis.
  final double priceGross;

  /// Summe der Einzelpreise. Das ist die Zahl, die durchgestrichen wird.
  final double regularGross;

  final DateTime? validTo;
  final List<BundleItem> items;

  /// Ersparnis in Euro. Kann rechnerisch nie negativ werden, solange der
  /// Bundlepreis unter der Summe der Einzelpreise liegt — geprüft wird es
  /// trotzdem, weil ein „Kombiangebot", das teurer ist als der Einzelkauf,
  /// nicht als Ersparnis beworben werden darf.
  double get savings => regularGross - priceGross;

  bool get isSaving => savings > 0;

  /// Ersparnis in Prozent des Einzelpreises.
  double get savingsPercent =>
      regularGross <= 0 ? 0 : savings / regularGross * 100;

  static Bundle fromJson(Map<String, dynamic> j) => Bundle(
        id: j['id'] as String,
        code: j['code'] as String?,
        title: j['title'] as String? ?? '',
        description: j['description'] as String?,
        priceGross: (j['price_gross'] as num?)?.toDouble() ?? 0,
        regularGross: (j['regular_gross'] as num?)?.toDouble() ?? 0,
        validTo: j['valid_to'] == null
            ? null
            : DateTime.tryParse(j['valid_to'] as String),
        items: [
          for (final e in (j['items'] as List?) ?? const [])
            BundleItem.fromJson(Map<String, dynamic>.from(e as Map)),
        ],
      );
}

/// Eine Position im Bundle. `regularGross` ist der Einzelpreis der Zeile,
/// `bundleGross` der auf diese Zeile entfallende Anteil am Bundlepreis.
class BundleItem {
  const BundleItem({
    required this.productId,
    required this.name,
    required this.quantity,
    required this.regularGross,
    required this.bundleGross,
    this.imageUrl,
  });

  final String productId;
  final String name;
  final int quantity;
  final double regularGross;
  final double bundleGross;
  final String? imageUrl;

  static BundleItem fromJson(Map<String, dynamic> j) => BundleItem(
        productId: j['product_id'] as String? ?? '',
        name: j['name'] as String? ?? '',
        quantity: (j['quantity'] as num?)?.toInt() ?? 1,
        regularGross: (j['regular_gross'] as num?)?.toDouble() ?? 0,
        bundleGross: (j['bundle_gross'] as num?)?.toDouble() ?? 0,
        imageUrl: j['image_url'] as String?,
      );
}
