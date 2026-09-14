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
    required this.priceGrossAbo,
    required this.regularGross,
    required this.regularGrossAbo,
    required this.discountPercent,
    required this.items,
    this.code,
    this.description,
    this.validFrom,
    this.validTo,
  });

  final String id;
  final String? code;
  final String title;
  final String? description;

  /// Der beworbene Preis, ohne Abo.
  final double priceGross;

  /// Derselbe Preis für Abonnenten, also abzüglich Dauerrabatt.
  ///
  /// **Kommt vom Server, wird hier nicht gerechnet.** Nicht aus Bequemlichkeit:
  /// `7,10 × 0,95` ergibt in Dart und Python zwei verschiedene Cent-Beträge,
  /// weil Fließkomma zur Mitte hin unterschiedlich rundet. In der Datenbank
  /// ist es `numeric`, und dort kommt reproduzierbar 6,75 heraus.
  final double priceGrossAbo;

  /// Summe der Einzelpreise. Das ist die Zahl, die durchgestrichen wird.
  final double regularGross;

  /// Dieselbe Summe für Abonnenten.
  final double regularGrossAbo;

  /// Dauerrabatt in Prozent, wie ihn der Server ausweist.
  final double discountPercent;

  final DateTime? validFrom;
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

  /// Ersparnis für Abonnenten in Euro.
  double get savingsAbo => regularGrossAbo - priceGrossAbo;

  /// Ob die Abo-Zeile überhaupt etwas anderes zeigt als die normale. Bei
  /// einem Dauerrabatt von 0 wäre sie eine Wiederholung.
  bool get hasAboRow => discountPercent > 0 && priceGrossAbo < priceGross;

  static Bundle fromJson(Map<String, dynamic> j) => Bundle(
        id: j['id'] as String,
        code: j['code'] as String?,
        title: j['title'] as String? ?? '',
        description: j['description'] as String?,
        priceGross: (j['price_gross'] as num?)?.toDouble() ?? 0,
        priceGrossAbo: (j['price_gross_abo'] as num?)?.toDouble() ??
            (j['price_gross'] as num?)?.toDouble() ??
            0,
        regularGross: (j['regular_gross'] as num?)?.toDouble() ?? 0,
        regularGrossAbo: (j['regular_gross_abo'] as num?)?.toDouble() ??
            (j['regular_gross'] as num?)?.toDouble() ??
            0,
        discountPercent: (j['discount_percent'] as num?)?.toDouble() ?? 0,
        validFrom: j['valid_from'] == null
            ? null
            : DateTime.tryParse(j['valid_from'] as String),
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
