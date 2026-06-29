import 'dart:async';

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:sentry_flutter/sentry_flutter.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'app.dart';
import 'core/config/app_config.dart';
import 'core/di/providers.dart';
import 'core/services/push_service.dart';

/// Initialisiert Infrastruktur (Supabase, optional Sentry) und startet die App.
///
/// Analytics/Crash-Reporting werden nur aktiviert, wenn konfiguriert; PostHog
/// wird erst nach Nutzer-Einwilligung scharf geschaltet (DSGVO) — separat im
/// Consent-Flow, nicht hier.
Future<void> bootstrap() async {
  WidgetsFlutterBinding.ensureInitialized();

  await initializeDateFormatting('de_DE');

  final config = AppConfig.fromEnvironment();
  assert(config.isValid, 'SUPABASE_URL/ANON_KEY fehlen (--dart-define).');

  await Supabase.initialize(
    url: config.supabaseUrl,
    anonKey: config.supabaseAnonKey,
  );

  // Firebase ist optional: nur wenn nativ konfiguriert (google-services.json /
  // GoogleService-Info.plist). Schlägt es fehl, bleibt Push deaktiviert.
  try {
    await Firebase.initializeApp();
    PushService.available = true;
  } catch (_) {
    PushService.available = false;
  }

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
