import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:sentry_flutter/sentry_flutter.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'app.dart';
import 'core/config/app_config.dart';
import 'core/di/providers.dart';

/// Initialisiert Infrastruktur (Supabase, optional Sentry) und startet die App.
///
/// Analytics/Crash-Reporting werden nur aktiviert, wenn konfiguriert; PostHog
/// wird erst nach Nutzer-Einwilligung scharf geschaltet (DSGVO) — separat im
/// Consent-Flow, nicht hier.
Future<void> bootstrap() async {
  WidgetsFlutterBinding.ensureInitialized();

  final config = AppConfig.fromEnvironment();
  assert(config.isValid, 'SUPABASE_URL/ANON_KEY fehlen (--dart-define).');

  await Supabase.initialize(
    url: config.supabaseUrl,
    anonKey: config.supabaseAnonKey,
  );

  final app = ProviderScope(
    overrides: [appConfigProvider.overrideWithValue(config)],
    child: const BoerdesnackApp(),
  );

  if (config.hasSentry) {
    await SentryFlutter.init(
      (options) {
        options.dsn = config.sentryDsn;
        options.environment = config.environment;
        options.tracesSampleRate = config.isProduction ? 0.2 : 1.0;
        // Keine personenbezogenen Rohdaten an Sentry senden.
        options.sendDefaultPii = false;
      },
      appRunner: () => runApp(app),
    );
  } else {
    runApp(app);
  }
}
