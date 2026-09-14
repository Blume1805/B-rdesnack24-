import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'package:bs24_kern/core/router/app_routes.dart';
import 'package:bs24_kern/core/services/outbox_service.dart';
import 'package:bs24_kern/core/theme/app_theme.dart';
import 'package:bs24_kern/l10n/generated/app_localizations.dart';
import 'package:bs24_gesellschafter/features/approvals/presentation/screens/approvals_screen.dart';
import 'package:bs24_gesellschafter/features/home/presentation/gesellschafter_shell.dart';
import 'package:bs24_gesellschafter/features/management/presentation/screens/my_signature_tasks_screen.dart';

/// Zusätzliche Routen, die es nur intern gibt.
abstract final class InterneRoutes {
  static const approvals = '/finance/approvals';
  static const mySignatureTasks = '/management/my-signatures';
}

final routerProvider = Provider<GoRouter>(
  (ref) => appRouter(
    ref: ref,
    start: () => const GesellschafterShell(),
    zusatz: [
      GoRoute(
        path: InterneRoutes.approvals,
        builder: (context, state) => const ApprovalsScreen(),
      ),
      GoRoute(
        path: InterneRoutes.mySignatureTasks,
        builder: (context, state) => const MySignatureTasksScreen(),
      ),
    ],
  ),
);

class GesellschafterApp extends ConsumerWidget {
  const GesellschafterApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);
    // Hält die Offline-Synchronisation der Protokolle aktiv.
    ref.watch(outboxSyncProvider);
    return MaterialApp.router(
      onGenerateTitle: (context) =>
          '${AppLocalizations.of(context).appTitle} — Intern',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light(),
      themeMode: ThemeMode.light,
      routerConfig: router,
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
    );
  }
}
