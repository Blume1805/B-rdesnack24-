import 'package:equatable/equatable.dart';

class Offer extends Equatable {
  const Offer({
    required this.id,
    required this.title,
    required this.kind,
    this.description,
    this.validTo,
  });

  final String id;
  final String title;
  final String kind; // daily | weekly | special
  final String? description;
  final DateTime? validTo;

  factory Offer.fromJson(Map<String, dynamic> j) => Offer(
        id: j['id'] as String,
        title: j['title'] as String? ?? '',
        kind: j['kind'] as String? ?? 'special',
        description: j['description'] as String?,
        validTo: j['valid_to'] != null
            ? DateTime.tryParse(j['valid_to'].toString())
            : null,
      );

  @override
  List<Object?> get props => [id, title, kind, validTo];
}
