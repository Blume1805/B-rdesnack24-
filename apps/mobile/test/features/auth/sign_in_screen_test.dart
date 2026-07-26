import 'package:boerdesnack24/features/auth/presentation/screens/sign_in_screen.dart';
import 'package:boerdesnack24/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('SignInScreen rendert Felder und Aktionen', (tester) async {
    await tester.pumpWidget(
      const ProviderScope(
        child: MaterialApp(
          localizationsDelegates: AppLocalizations.localizationsDelegates,
          supportedLocales: AppLocalizations.supportedLocales,
          locale: Locale('de'),
          home: SignInScreen(),
        ),
      ),
    );
    await tester.pumpAndSettle();

    expect(find.byType(TextFormField), findsNWidgets(2)); // E-Mail + Passwort
    expect(find.text('Anmelden'), findsWidgets);
    expect(find.text('Passwort vergessen?'), findsOneWidget);
  });

  testWidgets('Validierung verhindert leere Anmeldung', (tester) async {
    // Formular ist höher als der 600-px-Standardviewport — sonst liegt
    // der Anmelden-Button außerhalb und der Tap läuft ins Leere.
    tester.view.physicalSize = const Size(1024, 1600);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(
      const ProviderScope(
        child: MaterialApp(
          localizationsDelegates: AppLocalizations.localizationsDelegates,
          supportedLocales: AppLocalizations.supportedLocales,
          locale: Locale('de'),
          home: SignInScreen(),
        ),
      ),
    );
    await tester.pumpAndSettle();

    // FilledButton "Anmelden" antippen ohne Eingaben -> Validierungsfehler.
    await tester.tap(find.widgetWithText(FilledButton, 'Anmelden'));
    await tester.pumpAndSettle();

    expect(find.text('Pflichtfeld'), findsWidgets);
  });
}
