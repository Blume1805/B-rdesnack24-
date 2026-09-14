import 'package:equatable/equatable.dart';

class CustomerNotification extends Equatable {
  const CustomerNotification({
    required this.key,
    required this.kind,
    required this.title,
    required this.subtitle,
    required this.createdAt,
    required this.isRead,
  });

  final String key;
  final String kind; // news | offer | coupon | invoice
  final String title;
  final String subtitle;
  final DateTime createdAt;
  final bool isRead;

  factory CustomerNotification.fromJson(Map<String, dynamic> j) =>
      CustomerNotification(
        key: j['key'] as String,
        kind: j['kind'] as String,
        title: j['title'] as String? ?? '',
        subtitle: j['subtitle'] as String? ?? '',
        createdAt: DateTime.parse(j['created_at'] as String),
        isRead: (j['is_read'] as bool?) ?? false,
      );

  @override
  List<Object?> get props => [key, isRead];
}
