import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'app.dart';
import 'core/auth/recovery_link.dart';
import 'core/config/app_config.dart';
import 'core/security/biometrie/biometrie_provider.dart';
import 'core/di/providers.dart';

/// Initialisiert Infrastruktur und startet die App.
///
/// **Kritisch für Web:** iOS Safari kann Supabase.initialize im
/// eingebetteten WebView (In-App-Browser, Private Relay) unbemerkt
/// blockieren — die Future resolvet nie, `runApp()` wird nie aufgerufen,
/// der HTML-Loader hängt endlos.  Deshalb wickeln wir den Init in einen
/// harten 4-Sekunden-Timeout ein und rufen `runApp()` in *jedem* Fall.
/// Falls Supabase im Hintergrund später doch noch antwortet, ist das
/// ok — der Auth-Provider zeigt so oder so das Login-Formular an.
Future<void> bootstrap() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Runtime-Fetching der Google-Fonts im Web unterdrücken (System-Fallback
  // rendert sofort; siehe app_typography.dart).
  if (kIsWeb) {
    GoogleFonts.config.allowRuntimeFetching = false;
  }

  await _safe(
    () => initializeDateFormatting('de_DE'),
    label: 'initializeDateFormatting',
    timeoutSeconds: 3,
  );

  // Die Startadresse festhalten, BEVOR Supabase initialisiert wird: das SDK
  // raeumt `code`, `access_token` und `type` unmittelbar nach dem Einloesen
  // aus der Browser-Adresse (clearAuthUrlParameters). Wer erst danach
  // nachsieht, kann einen gescheiterten Wiederherstellungslink nicht mehr von
  // einem gewoehnlichen Seitenaufruf unterscheiden -- und schickt den Nutzer
  // wortlos auf die Startseite. Genau das war der Fehler am 04.09.2026.
  final startAdresse = Uri.base;

  // Sitzungsablage fuer die biometrische Anmeldung. Sie muss VOR
  // Supabase.initialize stehen, weil Supabase sie als LocalStorage bekommt:
  // ist Face ID eingeschaltet, liegt die Sitzung im Keychain und wird beim
  // Start bewusst nicht herausgegeben. Ohne diesen Griff wuerde Supabase die
  // Sitzung von sich aus wiederherstellen und der Gesichtsdialog waere blosse
  // Dekoration vor einer offenen Tuer.
  final biometrie = biometrieAufbauen(
    offen: SharedPreferencesLocalStorage(
      persistSessionKey: 'sb-boerdesnack24-auth-token',
    ),
  );

  final config = AppConfig.fromEnvironment();
  if (!config.isValid) {
    debugPrint('AppConfig ungültig — Supabase-URL/Key fehlen (--dart-define).');
  } else {
    await _safe(
      () => Supabase.initialize(
        url: config.supabaseUrl,
        // Umstieg auf publishableKey folgt mit der Key-Rotation im
        // Supabase-Dashboard.
        // ignore: deprecated_member_use
        anonKey: config.supabaseAnonKey,
        authOptions: FlutterAuthClientOptions(
          localStorage: biometrie.speicher,
        ),
      ),
      label: 'Supabase.initialize',
      timeoutSeconds: 4,
    );
  }

  runApp(
    ProviderScope(
      overrides: [
        appConfigProvider.overrideWithValue(config),
        startAdresseProvider.overrideWithValue(startAdresse),
        biometrieSpeicherProvider.overrideWithValue(biometrie.speicher),
        biometrieAnmeldungProvider.overrideWithValue(biometrie.anmeldung),
      ],
      child: const BoerdesnackApp(),
    ),
  );
}

/// Führt eine Future aus, verschluckt alle Fehler und respektiert einen
/// harten Timeout. Nie re-throwen — sonst kommt runApp() nie zustande.
Future<void> _safe(
  Future<void> Function() action, {
  required String label,
  required int timeoutSeconds,
}) async {
  try {
    await action().timeout(Duration(seconds: timeoutSeconds));
  } on TimeoutException {
    debugPrint('$label — Timeout nach ${timeoutSeconds}s, Boot geht weiter.');
  } catch (e, st) {
    debugPrint('$label fehlgeschlagen: $e\n$st');
  }
}
