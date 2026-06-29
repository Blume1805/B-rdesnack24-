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
      darkTheme: AppTheme.dark(),
      themeMode: ThemeMode.system,
      routerConfig: router,
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
    );
  }
}
