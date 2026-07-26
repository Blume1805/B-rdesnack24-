import 'package:equatable/equatable.dart';

/// Freigabeantrag für einen neuen Gesellschafter (Dual-Control).
class ShareholderApproval extends Equatable {
  const ShareholderApproval({
    required this.id,
    required this.status,
    required this.requestedForEmail,
    required this.requestedForName,
    required this.requestedByEmail,
    required this.createdAt,
  });

  final String id;
  final String status; // pending | approved | rejected
  final String requestedForEmail;
  final String? requestedForName;
  final String? requestedByEmail;
  final DateTime createdAt;

  bool get isPending => status == 'pending';

  factory ShareholderApproval.fromJson(Map<String, dynamic> j) {
    final forProfile = j['for_profile'] as Map<String, dynamic>?;
    final byProfile = j['by_profile'] as Map<String, dynamic>?;
    return ShareholderApproval(
      id: j['id'] as String,
      status: j['status'] as String? ?? 'pending',
      requestedForEmail: forProfile?['email'] as String? ?? '—',
      requestedForName: forProfile?['full_name'] as String?,
      requestedByEmail: byProfile?['email'] as String?,
      createdAt:
          DateTime.tryParse(j['created_at'] as String? ?? '') ?? DateTime.now(),
    );
  }

  @override
  List<Object?> get props => [id, status];
}
