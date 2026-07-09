import 'package:equatable/equatable.dart';

class Offer extends Equatable {
  const Offer({
    required this.id,
    required this.title,
    required this.kind,
    this.description,
    this.validTo,
    this.imageUrl,
  });

  final String id;
  final String title;
  final String kind; // daily | weekly | special
  final String? description;
  final DateTime? validTo;

  /// Optionales Produkt-/Aktionsbild.  Solange Bildpfade in der DB fehlen,
  /// zeigt das UI einen Platzhalter (siehe `ProductImage`).  Sobald `offers`
  /// eine Spalte `image_url` liefert, greift das Frontend ohne weitere
  /// Änderung darauf zu.
  final String? imageUrl;

  factory Offer.fromJson(Map<String, dynamic> j) => Offer(
        id: j['id'] as String,
        title: j['title'] as String? ?? '',
        kind: j['kind'] as String? ?? 'special',
        description: j['description'] as String?,
        validTo: j['valid_to'] != null
            ? DateTime.tryParse(j['valid_to'].toString())
            : null,
        imageUrl: j['image_url'] as String?,
      );

  @override
  List<Object?> get props => [id, title, kind, validTo, imageUrl];
}
