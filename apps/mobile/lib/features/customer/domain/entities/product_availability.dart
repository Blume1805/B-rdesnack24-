import 'package:equatable/equatable.dart';

/// Kategorie-Filter der Produktsuche.
///
/// [subcategory] gilt nur für Getränke (Energy Drinks / Kaltgetränke /
/// Heißgetränke) und wird beim Wechsel der Hauptkategorie verworfen — sonst
/// bliebe ein Getränke-Unterfilter aktiv, während „Eis" gewählt ist, und die
/// Trefferliste wäre ohne erkennbaren Grund leer.
class ProductFilter extends Equatable {
  const ProductFilter({this.query = '', this.category, this.subcategory});

  final String query;
  final String? category;
  final String? subcategory;

  /// Hauptkategorien in Anzeige-Reihenfolge.
  static const categories = <String>['Getränke', 'Süßwaren', 'Snacks', 'Eis'];

  /// Feinfilter — bisher nur für Getränke belegt.
  static const subcategoriesByCategory = <String, List<String>>{
    'Getränke': ['Kaltgetränke', 'Energy Drinks', 'Heißgetränke'],
  };

  List<String> get availableSubcategories =>
      subcategoriesByCategory[category] ?? const [];

  bool get isFiltered => category != null || subcategory != null;

  ProductFilter withQuery(String v) => ProductFilter(
        query: v,
        category: category,
        subcategory: subcategory,
      );

  /// Kategorie umschalten. Erneutes Antippen hebt den Filter auf; ein Wechsel
  /// wirft den Unterfilter weg, weil er zur neuen Kategorie nicht passt.
  ProductFilter toggleCategory(String v) => category == v
      ? ProductFilter(query: query)
      : ProductFilter(query: query, category: v);

  ProductFilter toggleSubcategory(String v) => ProductFilter(
        query: query,
        category: category,
        subcategory: subcategory == v ? null : v,
      );

  @override
  List<Object?> get props => [query, category, subcategory];
}

/// Ein Automat, der ein bestimmtes Produkt führt.
class ProductAvailability extends Equatable {
  const ProductAvailability({
    required this.machineId,
    required this.machineCode,
    required this.machineName,
    required this.quantity,
    required this.availability,
    this.locationName,
    this.street,
    this.zip,
    this.city,
    this.lat,
    this.lng,
  });

  final String machineId;
  final String machineCode;
  final String machineName;

  /// `available` · `low` · `out`
  final String availability;
  final int quantity;

  final String? locationName;
  final String? street;
  final String? zip;
  final String? city;
  final double? lat;
  final double? lng;

  bool get inStock => quantity > 0;

  /// Einzeilige Anschrift, leere Bestandteile fallen weg. Solange die
  /// Standorte noch Platzhalter sind, bleibt das Feld ggf. leer — die Karte
  /// zeigt dann nur den Automatennamen statt einer halben Adresse.
  String? get addressLine {
    final parts = [
      if (street != null && street!.trim().isNotEmpty) street!.trim(),
      [
        if (zip != null && zip!.trim().isNotEmpty) zip!.trim(),
        if (city != null && city!.trim().isNotEmpty) city!.trim(),
      ].join(' ').trim(),
    ].where((p) => p.isNotEmpty).toList();
    return parts.isEmpty ? null : parts.join(', ');
  }

  bool get hasCoordinates => lat != null && lng != null;

  factory ProductAvailability.fromJson(Map<String, dynamic> j) =>
      ProductAvailability(
        machineId: j['machine_id'] as String,
        machineCode: j['machine_code'] as String? ?? '',
        machineName: j['machine_name'] as String? ?? '',
        availability: j['availability'] as String? ?? 'out',
        quantity: (j['quantity'] as num?)?.toInt() ?? 0,
        locationName: j['location_name'] as String?,
        street: j['street'] as String?,
        zip: j['zip'] as String?,
        city: j['city'] as String?,
        lat: (j['lat'] as num?)?.toDouble(),
        lng: (j['lng'] as num?)?.toDouble(),
      );

  @override
  List<Object?> get props => [machineId, quantity, availability];
}
