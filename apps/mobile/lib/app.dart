import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/di/providers.dart';
import 'core/router/app_router.dart';
import 'core/services/outbox_service.dart';
import 'core/theme/app_theme.dart';
import 'l10n/generated/app_localizations.dart';

class BoerdesnackApp extends ConsumerWidget {
  const BoerdesnackApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);
    // Hält Push-Token-Registrierung und Offline-Synchronisation aktiv.
    ref.watch(pushRegistrationProvider);
    ref.watch(outboxSyncProvider);
    return MaterialApp.router(
      onGenerateTitle: (context) => AppLocalizations.of(context).appTitle,
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light(),
      themeMode: ThemeMode.light,
      routerConfig: router,
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
      // Feste Sprache Deutsch (Vorgabe A4). Ohne diese Zeile zieht ein
      // Gerät mit englischer Systemsprache das englische ARB — während
      // der weitaus größte Teil der Oberfläche fest deutsch ist. Das
      // Ergebnis war eine gemischte UI („Sign in" über „Willkommen
      // zurück"). Die ARB-Struktur bleibt bestehen: sobald eine zweite
      // Sprache wirklich vollständig ist, fällt diese Zeile wieder weg.
      locale: const Locale('de'),
    );
  }
}
