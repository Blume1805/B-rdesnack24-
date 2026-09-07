import 'package:equatable/equatable.dart';

/// Anwendungsrolle (entspricht app.role_key in der Datenbank).
enum UserRole {
  systemAdmin,
  shareholder,
  employee,
  customer;

  static UserRole fromKey(String key) => switch (key) {
        'system_admin' => UserRole.systemAdmin,
        'shareholder' => UserRole.shareholder,
        'employee' => UserRole.employee,
        _ => UserRole.customer,
      };

  String get key => switch (this) {
        UserRole.systemAdmin => 'system_admin',
        UserRole.shareholder => 'shareholder',
        UserRole.employee => 'employee',
        UserRole.customer => 'customer',
      };
}

/// Kontostatus (entspricht app.profile_status).
enum ProfileStatus {
  invited,
  active,
  deactivated,
  archived;

  static ProfileStatus fromKey(String key) => switch (key) {
        'invited' => ProfileStatus.invited,
        'active' => ProfileStatus.active,
        'deactivated' => ProfileStatus.deactivated,
        _ => ProfileStatus.archived,
      };
}

/// Authentifizierter Anwendungsnutzer inkl. Profil.
class AppUser extends Equatable {
  const AppUser({
    required this.id,
    required this.email,
    required this.role,
    required this.status,
    this.fullName,
  });

  final String id;
  final String email;
  final String? fullName;
  final UserRole role;
  final ProfileStatus status;

  bool get isActive => status == ProfileStatus.active;
  bool get isAdmin => role == UserRole.systemAdmin;
  bool get isShareholder => role == UserRole.shareholder;

  @override
  List<Object?> get props => [id, email, fullName, role, status];
}
