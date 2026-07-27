import 'package:boerdesnack24/app.dart';
import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/core/router/app_router.dart';
import 'package:boerdesnack24/core/services/outbox_service.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:go_router/go_router.dart';

/// Regressionstest zu einem Fehler, der lange unentdeckt blieb: die App
/// setzte keine feste Sprache. Auf einem Gerät mit englischer Systemsprache
/// zog sie das englische ARB, während der weitaus größte Teil der
/// Oberfläche fest deutsch ist — sichtbar als „Sign in" über „Willkommen
/// zurück". Die vorhandenen Widget-Tests haben das nicht gefunden, weil sie
/// in ihrer eigenen MaterialApp `locale: Locale('de')` gesetzt haben.
///
/// Dieser Test prüft deshalb die echte App-Konfiguration statt einer
/// Test-Hülle. Supabase, Push und Outbox werden stillgelegt — sie brauchen
/// eine initialisierte Supabase-Instanz und tragen zur Frage nichts bei.
void main() {
  testWidgets('App ist fest auf Deutsch gepinnt (Vorgabe A4)', (tester) async {
    // Systemsprache Englisch simulieren — genau der Fall, der die
    // gemischte Oberfläche erzeugt hat.
    tester.platformDispatcher.localeTestValue = const Locale('en', 'US');
    tester.platformDispatcher.localesTestValue = const [Locale('en', 'US')];
    addTearDown(tester.platformDispatcher.clearLocaleTestValue);
    addTearDown(tester.platformDispatcher.clearLocalesTestValue);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          pushRegistrationProvider.overrideWithValue(null),
          outboxSyncProvider.overrideWithValue(null),
          routerProvider.overrideWithValue(
            GoRouter(
              routes: [
                GoRoute(
                  path: '/',
                  builder: (_, __) => const SizedBox.shrink(),
                ),
              ],
            ),
          ),
        ],
        child: const BoerdesnackApp(),
      ),
    );
    await tester.pump();

    final app = tester.widget<MaterialApp>(find.byType(MaterialApp));
    expect(
      app.locale,
      const Locale('de'),
      reason: 'Ohne festes Locale mischt die App Deutsch und Englisch.',
    );
  });
}
