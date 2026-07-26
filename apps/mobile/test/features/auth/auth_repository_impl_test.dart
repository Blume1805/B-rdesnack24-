import 'package:boerdesnack24/core/error/failures.dart';
import 'package:boerdesnack24/features/auth/data/datasources/auth_remote_data_source.dart';
import 'package:boerdesnack24/features/auth/data/dtos/profile_dto.dart';
import 'package:boerdesnack24/features/auth/data/repositories/auth_repository_impl.dart';
import 'package:boerdesnack24/features/auth/domain/entities/app_user.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class _MockRemote extends Mock implements AuthRemoteDataSource {}

void main() {
  late _MockRemote remote;
  late AuthRepositoryImpl repo;

  setUp(() {
    remote = _MockRemote();
    repo = AuthRepositoryImpl(remote);
  });

  ProfileDto profile({required String status, String role = 'shareholder'}) =>
      ProfileDto.fromMap({
        'id': 'u1',
        'email': 'a@b.de',
        'full_name': 'A',
        'role': role,
        'status': status,
      });

  group('signIn', () {
    test('liefert aktiven Nutzer bei Erfolg', () async {
      when(() => remote.signInWithPassword(any(), any()))
          .thenAnswer((_) async => AuthResponse());
      when(() => remote.fetchCurrentProfile())
          .thenAnswer((_) async => profile(status: 'active'));

      final user = await repo.signIn(email: 'a@b.de', password: 'x');
      expect(user.role, UserRole.shareholder);
      expect(user.isActive, isTrue);
    });

    test('inaktives Konto -> PermissionFailure + signOut', () async {
      when(() => remote.signInWithPassword(any(), any()))
          .thenAnswer((_) async => AuthResponse());
      when(() => remote.fetchCurrentProfile())
          .thenAnswer((_) async => profile(status: 'deactivated'));
      when(() => remote.signOut()).thenAnswer((_) async {});

      expect(
        () => repo.signIn(email: 'a@b.de', password: 'x'),
        throwsA(isA<PermissionFailure>()),
      );
    });

    test('AuthException wird zu AuthFailure gemappt', () async {
      when(() => remote.signInWithPassword(any(), any()))
          .thenThrow(const AuthException('invalid'));

      expect(
        () => repo.signIn(email: 'a@b.de', password: 'x'),
        throwsA(isA<AuthFailure>()),
      );
    });
  });
}
