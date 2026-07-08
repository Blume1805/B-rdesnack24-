import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
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

  // Im Web-Build blockiert das Laden der Google-Fonts-Dateien den ersten
  // Frame merklich (Bricolage + Hanken = ~500 KB zusätzliche Netzwerklast
  // gegen fonts.gstatic.com). Wir schalten das Runtime-Fetching für den
  // Web-Demo-Start ab; Flutter zeichnet dann sofort mit dem System-Sans
  // (SF Pro / Segoe / Roboto) — dieselbe Familie wie in unserer CSS-Loader-
  // Schrift. Für native Builds (Android/iOS) bleibt das Fetching aktiv,
  // weil die Fonts dort einmalig auf das Gerät geladen und dauerhaft
  // gecached werden.
  if (kIsWeb) {
    GoogleFonts.config.allowRuntimeFetching = false;
  }

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
