import '../../domain/entities/app_user.dart';

/// Data Transfer Object für die Tabelle public.profiles.
class ProfileDto {
  const ProfileDto({
    required this.id,
    required this.email,
    required this.role,
    required this.status,
    this.fullName,
  });

  final String id;
  final String email;
  final String? fullName;
  final String role;
  final String status;

  factory ProfileDto.fromMap(Map<String, dynamic> map) {
    return ProfileDto(
      id: map['id'] as String,
      email: map['email'] as String,
      fullName: map['full_name'] as String?,
      role: map['role'] as String? ?? 'customer',
      status: map['status'] as String? ?? 'invited',
    );
  }

  AppUser toEntity() => AppUser(
        id: id,
        email: email,
        fullName: fullName,
        role: UserRole.fromKey(role),
        status: ProfileStatus.fromKey(status),
      );
}
