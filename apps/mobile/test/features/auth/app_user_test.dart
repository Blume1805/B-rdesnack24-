import 'package:boerdesnack24/features/auth/data/dtos/profile_dto.dart';
import 'package:boerdesnack24/features/auth/domain/entities/app_user.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('UserRole', () {
    test('mappt Schlüssel bidirektional', () {
      for (final role in UserRole.values) {
        expect(UserRole.fromKey(role.key), role);
      }
    });
    test('unbekannter Schlüssel -> customer (sicherster Default)', () {
      expect(UserRole.fromKey('unbekannt'), UserRole.customer);
    });
  });

  group('ProfileDto.toEntity', () {
    test('mappt Datenbankzeile auf AppUser', () {
      final dto = ProfileDto.fromMap({
        'id': 'uuid-1',
        'email': 'philipp@boerdesnack24.de',
        'full_name': 'Philipp Blume',
        'role': 'shareholder',
        'status': 'active',
      });
      final user = dto.toEntity();
      expect(user.id, 'uuid-1');
      expect(user.role, UserRole.shareholder);
      expect(user.isShareholder, isTrue);
      expect(user.isActive, isTrue);
    });

    test('fehlende optionale Felder werden toleriert', () {
      final dto = ProfileDto.fromMap({
        'id': 'uuid-2',
        'email': 'kunde@example.com',
      });
      final user = dto.toEntity();
      expect(user.role, UserRole.customer);
      expect(user.status, ProfileStatus.invited);
      expect(user.fullName, isNull);
    });
  });
}
