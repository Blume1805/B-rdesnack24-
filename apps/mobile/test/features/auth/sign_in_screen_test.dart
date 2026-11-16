import 'package:boerdesnack24/core/config/app_config.dart';
import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/sign_in_screen.dart';
import 'package:boerdesnack24/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

Widget _app({String umgebung = 'dev'}) => ProviderScope(
      overrides: [
        appConfigProvider.overrideWithValue(
          AppConfig(
            supabaseUrl: 'https://test.invalid',
            supabaseAnonKey: 'test',
            environment: umgebung,
          ),
        ),
      ],
      child: const MaterialApp(
        localizationsDelegates: AppLocalizations.localizationsDelegates,
        supportedLocales: AppLocalizations.supportedLocales,
        locale: Locale('de'),
        home: SignInScreen(),
      ),
    );

void _hoch(WidgetTester tester) {
  // Formular ist höher als der 600-px-Standardviewport.
  tester.view.physicalSize = const Size(1024, 1800);
  tester.view.devicePixelRatio = 1.0;
  addTearDown(tester.view.reset);
}

void main() {
  testWidgets('SignInScreen rendert Felder und Aktionen', (tester) async {
    await tester.pumpWidget(_app());
    await tester.pumpAndSettle();

    expect(find.byType(TextFormField), findsNWidgets(2)); // E-Mail + Passwort
    expect(find.text('Anmelden'), findsWidgets);
    expect(find.text('Passwort vergessen?'), findsOneWidget);
  });

  testWidgets('Validierung verhindert leere Anmeldung', (tester) async {
    _hoch(tester);
    await tester.pumpWidget(_app());
    await tester.pumpAndSettle();

    // FilledButton "Anmelden" antippen ohne Eingaben -> Validierungsfehler.
    await tester.tap(find.widgetWithText(FilledButton, 'Anmelden'));
    await tester.pumpAndSettle();

    expect(find.text('Pflichtfeld'), findsWidgets);
  });

  // Befund 16.11.2026: Die Demo-Zugänge (darunter „Admin") standen auch in
  // der echten App und nannten die Adressen echter Konten der Produktion.
  testWidgets('Produktion: keine Demo-Zugänge', (tester) async {
    _hoch(tester);
    await tester.pumpWidget(_app(umgebung: 'prod'));
    await tester.pumpAndSettle();

    expect(find.text('Demo-Zugänge'), findsNothing);
    expect(find.text('Admin'), findsNothing);
    expect(find.textContaining('Demo-Zugang'), findsNothing);
    expect(find.text('Melde Dich mit Deinem Konto an.'), findsOneWidget);
  });

  testWidgets('Entwicklung: Demo-Zugänge sichtbar (Gegenprobe)',
      (tester) async {
    _hoch(tester);
    await tester.pumpWidget(_app());
    await tester.pumpAndSettle();

    expect(find.text('Demo-Zugänge'), findsOneWidget);
    expect(find.text('Admin'), findsOneWidget);
    expect(find.text('Mitarbeiter'), findsOneWidget);
    expect(find.text('Kunde'), findsOneWidget);
  });
}
