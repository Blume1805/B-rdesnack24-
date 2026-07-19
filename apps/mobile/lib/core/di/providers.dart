import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../config/app_config.dart';
import '../services/push_service.dart';

/// Globale Konfiguration. Wird in main() via overrideWithValue gesetzt.
final appConfigProvider = Provider<AppConfig>(
  (ref) => throw UnimplementedError(
      'appConfigProvider muss in main() überschrieben werden'),
);

/// Supabase-Client (nach Supabase.initialize in bootstrap verfügbar).
final supabaseClientProvider = Provider<SupabaseClient>(
  (ref) => Supabase.instance.client,
);

/// Strom der Auth-Statusänderungen (Login/Logout/Token-Refresh).
final authStateChangesProvider = StreamProvider<AuthState>((ref) {
  return ref.watch(supabaseClientProvider).auth.onAuthStateChange;
});

/// Aktuelle Supabase-Session (oder null).
final currentSessionProvider = Provider<Session?>((ref) {
  // Reagiert auf Auth-Änderungen.
  ref.watch(authStateChangesProvider);
  return ref.watch(supabaseClientProvider).auth.currentSession;
});

/// FCM-Push-Dienst.
final pushServiceProvider = Provider<PushService>(
  (ref) => PushService(ref.watch(supabaseClientProvider)),
);

/// Registriert das Gerätetoken automatisch nach Anmeldung (no-op ohne Firebase).
final pushRegistrationProvider = Provider<void>((ref) {
  ref.listen<Session?>(
    currentSessionProvider,
    (prev, next) {
      if (next != null) ref.read(pushServiceProvider).registerCurrentDevice();
    },
    fireImmediately: true,
  );
});
