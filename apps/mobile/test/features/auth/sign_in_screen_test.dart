import 'package:boerdesnack24/core/config/app_config.dart';
import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/sign_in_screen.dart';
import 'package:boerdesnack24/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// Konfiguration ohne Demokonto — der Auslieferungszustand.
const _ohneDemo = AppConfig(
  supabaseUrl: 'https://example.test',
  supabaseAnonKey: 'anon',
);

/// Konfiguration mit Demokonto, wie sie ein Demo-Build mitbringt.
const _mitDemo = AppConfig(
  supabaseUrl: 'https://example.test',
  supabaseAnonKey: 'anon',
  demoLoginEmail: 'demo-kunde@example.test',
  demoLoginPassword: 'geheim',
);

Widget _app(AppConfig config) => ProviderScope(
      overrides: [appConfigProvider.overrideWithValue(config)],
      child: const MaterialApp(
        localizationsDelegates: AppLocalizations.localizationsDelegates,
        supportedLocales: AppLocalizations.supportedLocales,
        locale: Locale('de'),
        home: SignInScreen(),
      ),
    );

void main() {
  testWidgets('SignInScreen rendert Felder und Aktionen', (tester) async {
    await tester.pumpWidget(_app(_ohneDemo));
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
    await tester.pumpWidget(_app(_ohneDemo));
    await tester.pumpAndSettle();

    // FilledButton "Anmelden" antippen ohne Eingaben -> Validierungsfehler.
    await tester.tap(find.widgetWithText(FilledButton, 'Anmelden'));
    await tester.pumpAndSettle();

    expect(find.text('Pflichtfeld'), findsWidgets);
  });

  // --------------------------------------------------------------------
  // Demo-Zugang
  //
  // Bis zum 24.08.2026 standen drei Zugangspaare fest im Quelltext, darunter
  // eines für `system_admin` und eines für `shareholder` — in einem
  // öffentlichen Repository und auf einer öffentlichen Web-Demo. Diese beiden
  // Tests halten fest, dass die Schaltfläche ohne ausdrückliche
  // Build-Konfiguration gar nicht erscheint.
  // --------------------------------------------------------------------
  testWidgets('ohne Demo-Konfiguration erscheint keine Demo-Schaltfläche',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 1600);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(_app(_ohneDemo));
    await tester.pumpAndSettle();

    expect(find.text('Demo-Zugang'), findsNothing);
    expect(find.text('Als Demo-Kunde ansehen'), findsNothing);
    expect(find.text('Melde dich mit deinem Konto an.'), findsOneWidget);
  });

  testWidgets('mit Demo-Konfiguration erscheint genau eine Schaltfläche',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 1600);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(_app(_mitDemo));
    await tester.pumpAndSettle();

    expect(find.text('Demo-Zugang'), findsOneWidget);
    expect(find.text('Als Demo-Kunde ansehen'), findsOneWidget);
  });

  test('hasDemoLogin verlangt beide Felder', () {
    expect(_ohneDemo.hasDemoLogin, isFalse);
    expect(_mitDemo.hasDemoLogin, isTrue);
    // Ein halb gesetztes Paar ergäbe eine Schaltfläche, die sicher scheitert.
    const nurAdresse = AppConfig(
      supabaseUrl: 'https://example.test',
      supabaseAnonKey: 'anon',
      demoLoginEmail: 'demo-kunde@example.test',
    );
    const nurKennwort = AppConfig(
      supabaseUrl: 'https://example.test',
      supabaseAnonKey: 'anon',
      demoLoginPassword: 'geheim',
    );
    expect(nurAdresse.hasDemoLogin, isFalse);
    expect(nurKennwort.hasDemoLogin, isFalse);
  });
}
