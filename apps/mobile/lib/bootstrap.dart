import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:intl/date_symbol_data_local.dart';
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

  await initializeDateFormatting('de_DE');

  final config = AppConfig.fromEnvironment();
  assert(config.isValid, 'SUPABASE_URL/ANON_KEY fehlen (--dart-define).');

  await Supabase.initialize(
    url: config.supabaseUrl,
    anonKey: config.supabaseAnonKey,
  );

  // Firebase wird in dieser Demo (Web-Build) nicht eingebunden. Für native
  // Builds aktivieren — siehe pubspec.yaml-Kommentar.

  final app = ProviderScope(
    overrides: [appConfigProvider.overrideWithValue(config)],
    child: const BoerdesnackApp(),
  );

  // Sentry/PostHog werden im Web-Demo-Build bewusst nicht eingebunden
  // (Web-Plugins initialisieren sich beim Import selbst → Start-Fehler).
  // Für native Builds wieder aktivieren (siehe pubspec.yaml-Kommentar).
  runApp(app);
}
