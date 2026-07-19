import 'package:boerdesnack24/features/auth/domain/entities/app_user.dart';
import 'package:boerdesnack24/features/auth/presentation/controllers/auth_providers.dart';
import 'package:boerdesnack24/features/home/presentation/home_shell.dart';
import 'package:boerdesnack24/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  const admin = AppUser(
    id: 'u-2',
    email: 'admin@boerdesnack24.app',
    fullName: 'Demo Admin',
    role: UserRole.systemAdmin,
    status: ProfileStatus.active,
  );

  testWidgets('Admin: HomeShell mit Finance-Tab baut ohne Exception',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          currentUserProvider.overrideWith((ref) async => admin),
          currentPermissionsProvider.overrideWith((ref) async => <String>{}),
          mfaEnrolledProvider.overrideWith((ref) async => false),
        ],
        child: const MaterialApp(
          localizationsDelegates: AppLocalizations.localizationsDelegates,
          supportedLocales: AppLocalizations.supportedLocales,
          home: HomeShell(),
        ),
      ),
    );
    // Kein pumpAndSettle: Finance-Provider hängen am (nicht gemockten)
    // Supabase-Client und bleiben im Loading — uns interessiert nur, ob
    // der Widget-Baum ohne Exception steht.
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 300));
    expect(tester.takeException(), isNull);
    expect(find.text('Demo Admin'), findsOneWidget);
  });
}
