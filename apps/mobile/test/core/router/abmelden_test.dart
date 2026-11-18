// Befund Philipp 17.11.2026: Nach „Abmelden" drehte sich nur ein
// Ladekreis, die Anmeldeseite kam erst nach Neuladen der App.
//
// Der Test spielt genau das nach: angemeldet auf der Startseite, dann
// signOut über den echten Supabase-Client (Netz durch MockClient ersetzt).
// Erwartung: Die Anmeldeseite erscheint ohne Neuladen.
import 'dart:convert';

import 'package:boerdesnack24/core/config/app_config.dart';
import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/core/router/app_router.dart';
import 'package:boerdesnack24/features/auth/presentation/controllers/auth_providers.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/sign_in_screen.dart';
import 'package:boerdesnack24/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

String _b64(Map<String, Object?> m) =>
    base64Url.encode(utf8.encode(jsonEncode(m))).replaceAll('=', '');

String _sitzung() {
  final ablauf = DateTime.now().add(const Duration(hours: 1));
  final sekunden = ablauf.millisecondsSinceEpoch ~/ 1000;
  const id = '11111111-1111-1111-1111-111111111111';
  final token = '${_b64({'alg': 'HS256', 'typ': 'JWT'})}.'
      '${_b64({
        'sub': id,
        'aud': 'authenticated',
        'role': 'authenticated',
        'aal': 'aal1',
        'exp': sekunden,
      })}.signatur';
  return jsonEncode({
    'access_token': token,
    'token_type': 'bearer',
    'expires_in': 3600,
    'expires_at': sekunden,
    'refresh_token': 'auffrischen',
    'user': {
      'id': id,
      'aud': 'authenticated',
      'email': 'test@example.invalid',
      'app_metadata': <String, Object?>{},
      'user_metadata': <String, Object?>{},
      'created_at': DateTime.now().toIso8601String(),
    },
  });
}

void main() {
  testWidgets('Abmelden führt ohne Neuladen zur Anmeldeseite', (tester) async {
    tester.view.physicalSize = const Size(1024, 1800);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    final client = SupabaseClient(
      'https://test.invalid',
      'anon',
      httpClient: MockClient((_) async => http.Response('', 204)),
      authOptions: const AuthClientOptions(autoRefreshToken: false),
    );
    await tester.runAsync(() => client.auth.setInitialSession(_sitzung()));
    expect(client.auth.currentSession, isNotNull);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          supabaseClientProvider.overrideWithValue(client),
          appConfigProvider.overrideWithValue(
            const AppConfig(
              supabaseUrl: 'https://test.invalid',
              supabaseAnonKey: 'anon',
            ),
          ),
          // Startseite im Zustand „Konto wird geladen": genau der Ladekreis,
          // in dem die App nach dem Abmelden hängen blieb.
          currentUserProvider.overrideWith((ref) async => null),
        ],
        child: Consumer(
          builder: (context, ref, _) => MaterialApp.router(
            routerConfig: ref.watch(routerProvider),
            localizationsDelegates: AppLocalizations.localizationsDelegates,
            supportedLocales: AppLocalizations.supportedLocales,
            locale: const Locale('de'),
          ),
        ),
      ),
    );
    await tester.pump();
    expect(find.byType(SignInScreen), findsNothing);
    expect(find.byType(CircularProgressIndicator), findsOneWidget);

    await tester.runAsync(() => client.auth.signOut());
    for (var i = 0; i < 5; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }

    expect(client.auth.currentSession, isNull);
    expect(find.byType(SignInScreen), findsOneWidget);
  });

  // Wie in der echten App: Startseite als Administrator mit echtem
  // currentUserProvider; nur das Netz ist ersetzt.
  for (final rolle in ['system_admin']) {
    testWidgets('Abmelden aus der echten Startseite ($rolle)', (tester) async {
      tester.view.physicalSize = const Size(1024, 1800);
      tester.view.devicePixelRatio = 1.0;
      addTearDown(tester.view.reset);

      final client = SupabaseClient(
        'https://test.invalid',
        'anon',
        httpClient: MockClient((anfrage) async {
          final pfad = anfrage.url.path;
          if (pfad.endsWith('/auth/v1/logout')) return http.Response('', 204);
          if (pfad.endsWith('/rest/v1/profiles')) {
            final zeile = {
              'id': '11111111-1111-1111-1111-111111111111',
              'email': 'test@example.invalid',
              'full_name': 'Test',
              'role': rolle,
              'status': 'active',
            };
            final objekt = (anfrage.headers['Accept'] ?? '').contains('object');
            return http.Response(
              jsonEncode(objekt ? zeile : [zeile]),
              200,
              headers: {'content-type': 'application/json'},
              request: anfrage,
            );
          }
          return http.Response(
            '[]',
            200,
            headers: {'content-type': 'application/json'},
            request: anfrage,
          );
        }),
        authOptions: const AuthClientOptions(autoRefreshToken: false),
      );
      await tester.runAsync(() => client.auth.setInitialSession(_sitzung()));

      await tester.pumpWidget(
        ProviderScope(
          overrides: [
            supabaseClientProvider.overrideWithValue(client),
            appConfigProvider.overrideWithValue(
              const AppConfig(
                supabaseUrl: 'https://test.invalid',
                supabaseAnonKey: 'anon',
              ),
            ),
          ],
          child: Consumer(
            builder: (context, ref, _) => MaterialApp.router(
              routerConfig: ref.watch(routerProvider),
              localizationsDelegates: AppLocalizations.localizationsDelegates,
              supportedLocales: AppLocalizations.supportedLocales,
              locale: const Locale('de'),
            ),
          ),
        ),
      );
      for (var i = 0; i < 10; i++) {
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 20)),
        );
        await tester.pump(const Duration(milliseconds: 100));
      }
      expect(find.byTooltip('Abmelden'), findsWidgets);

      await tester.tap(find.byTooltip('Abmelden').first);
      for (var i = 0; i < 10; i++) {
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 20)),
        );
        await tester.pump(const Duration(milliseconds: 100));
      }

      expect(client.auth.currentSession, isNull);
      expect(find.byType(SignInScreen), findsOneWidget);
    });
  }

  // Die eigentliche Falle (nur im Browser sichtbar, dort läuft die
  // Weiterleitung noch innerhalb der Auth-Benachrichtigung): Wer in diesem
  // Moment fragt, muss schon „abgemeldet" sehen.
  test('Weiterleitung sieht die Abmeldung schon im Auth-Ereignis', () async {
    final client = SupabaseClient(
      'https://test.invalid',
      'anon',
      httpClient: MockClient((_) async => http.Response('', 204)),
      authOptions: const AuthClientOptions(autoRefreshToken: false),
    );
    await client.auth.setInitialSession(_sitzung());
    final refProvider = Provider<Ref>((ref) => ref);
    final container = ProviderContainer(
      overrides: [supabaseClientProvider.overrideWithValue(client)],
    );
    addTearDown(container.dispose);
    final ref = container.read(refProvider);

    String? imEreignis;
    container.listen(authStateChangesProvider, (_, next) {
      if (next.valueOrNull?.event == AuthChangeEvent.signedOut) {
        imEreignis = anmeldeWeiterleitung(ref, '/') ?? 'bleibt auf /';
      }
    });
    await Future<void>.delayed(Duration.zero);
    // Wie in der App: Die Sitzung wurde vorher schon einmal gelesen.
    expect(container.read(currentSessionProvider), isNotNull);
    expect(anmeldeWeiterleitung(ref, '/'), isNull);

    await client.auth.signOut();
    for (var i = 0; i < 5; i++) {
      await Future<void>.delayed(Duration.zero);
    }
    expect(imEreignis, '/signin');
  });
}
