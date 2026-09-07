import 'package:bs24_kern/features/auth/domain/entities/app_user.dart';
import 'package:bs24_kern/features/auth/presentation/controllers/auth_providers.dart';
import 'package:bs24_gesellschafter/features/home/presentation/gesellschafter_shell.dart';
import 'package:bs24_kern/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// Flow-Test der Hauptnavigation der Gesellschafter-App: die Shell muss den
/// Hero-Konto-Header rendern, die MFA-Erinnerung zeigen (solange kein
/// TOTP-Faktor bestätigt ist) und den Verwaltungsbereich vollständig
/// aufbauen — der Regressionsfall zum grauen Verwaltungs-Tab. Seit der
/// Trennung in zwei Apps wird nichts mehr nachgeladen; der Fall bleibt
/// trotzdem geprüft.
void main() {
  const employee = AppUser(
    id: 'u-1',
    email: 'mitarbeiter@boerdesnack24.app',
    fullName: 'Max Muster',
    role: UserRole.employee,
    status: ProfileStatus.active,
  );
  const allPerms = <String>{
    'inventory.view',
    'documents.view',
    'haccp.fill',
  };

  Widget shell({bool mfaEnrolled = false}) => ProviderScope(
        overrides: [
          currentUserProvider.overrideWith((ref) async => employee),
          currentPermissionsProvider.overrideWith((ref) async => allPerms),
          mfaEnrolledProvider.overrideWith((ref) async => mfaEnrolled),
        ],
        child: const MaterialApp(
          localizationsDelegates: AppLocalizations.localizationsDelegates,
          supportedLocales: AppLocalizations.supportedLocales,
          home: GesellschafterShell(),
        ),
      );

  testWidgets('interner Nutzer: Hero-Header, MFA-Banner, Verwaltung lädt',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(shell());
    await tester.pumpAndSettle();

    // Konto-Header (Rolle + Name) über dem Hero-Hintergrund.
    expect(find.text('Mitarbeiter'), findsOneWidget);
    expect(find.text('Max Muster'), findsOneWidget);

    // MFA-Erinnerung sichtbar, solange kein Faktor bestätigt ist.
    expect(
      find.text('Konto absichern: Zwei-Faktor-Authentifizierung einrichten.'),
      findsOneWidget,
    );

    // Deferred-Verwaltung ist vollständig geladen (kein grauer Tab).
    expect(find.text('Betriebsprotokolle'), findsOneWidget);

    // „Später" blendet die Erinnerung für die Sitzung aus.
    await tester.tap(find.byTooltip('Später'));
    await tester.pumpAndSettle();
    expect(
      find.text('Konto absichern: Zwei-Faktor-Authentifizierung einrichten.'),
      findsNothing,
    );
  });

  testWidgets('mit bestätigtem TOTP-Faktor erscheint kein MFA-Banner',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(shell(mfaEnrolled: true));
    await tester.pumpAndSettle();

    expect(
      find.text('Konto absichern: Zwei-Faktor-Authentifizierung einrichten.'),
      findsNothing,
    );
  });
}
