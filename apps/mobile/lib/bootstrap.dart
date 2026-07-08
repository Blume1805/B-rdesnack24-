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

/// Initialisiert Infrastruktur (Supabase) und startet die App.
Future<void> bootstrap() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Runtime-Fetching der Google-Fonts im Web unterdrücken (System-Fallback
  // rendert sofort; siehe app_typography.dart).
  if (kIsWeb) {
    GoogleFonts.config.allowRuntimeFetching = false;
  }

  await initializeDateFormatting('de_DE');

  final config = AppConfig.fromEnvironment();
  if (!config.isValid) {
    debugPrint('AppConfig ungültig — Supabase-URL/Key fehlen (--dart-define).');
  }

  // Supabase-Init — Fehler nicht re-throwen, sonst bleibt runApp() aus und
  // der HTML-Loader hängt endlos. Falls Init scheitert, zeigt der Login
  // beim ersten Aufruf die reale Fehlermeldung.
  try {
    await Supabase.initialize(
      url: config.supabaseUrl,
      anonKey: config.supabaseAnonKey,
    );
  } catch (e, st) {
    debugPrint('Supabase-Init fehlgeschlagen: $e\n$st');
  }

  runApp(
    ProviderScope(
      overrides: [appConfigProvider.overrideWithValue(config)],
      child: const BoerdesnackApp(),
    ),
  );
}
