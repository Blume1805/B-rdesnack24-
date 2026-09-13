import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'package:bs24_kern/core/di/providers.dart';
import 'package:bs24_kern/core/router/app_routes.dart';
import 'package:bs24_kern/core/services/outbox_service.dart';
import 'package:bs24_kern/core/theme/app_theme.dart';
import 'package:bs24_kern/l10n/generated/app_localizations.dart';
import 'package:bs24_kunden/features/home/presentation/kunden_shell.dart';

/// Router der Kunden-App: die gemeinsamen Routen, sonst nichts. Interne
/// Ziele existieren in diesem Bundle nicht — auch nicht als Pfadname.
final routerProvider = Provider<GoRouter>(
  (ref) => appRouter(ref: ref, start: () => const KundenShell()),
);

class KundenApp extends ConsumerWidget {
  const KundenApp({super.key});

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
    );
  }
}
