import 'package:equatable/equatable.dart';

class Machine extends Equatable {
  const Machine({
    required this.id,
    required this.code,
    required this.name,
    required this.type,
    required this.isCooled,
    this.city,
    this.status = 'active',
  });

  final String id;
  final String code;
  final String name;
  final String type;
  final bool isCooled;
  final String? city;
  final String status;

  factory Machine.fromJson(Map<String, dynamic> j) => Machine(
        id: j['id'] as String,
        code: j['code'] as String,
        name: j['name'] as String? ?? '',
        type: j['type'] as String? ?? 'snack',
        isCooled: j['is_cooled'] as bool? ?? false,
        city: j['city'] as String?,
        status: j['status'] as String? ?? 'active',
      );

  @override
  List<Object?> get props => [id, code];
}
