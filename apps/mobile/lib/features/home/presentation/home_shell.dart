import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/brand_marks.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../../auth/domain/entities/app_user.dart';
import '../../auth/presentation/controllers/auth_providers.dart';
import '../../customer/presentation/controllers/customer_providers.dart';
import '../../customer/presentation/customer_screen.dart';
import '../../customer/presentation/screens/notifications_screen.dart';
// Deferred: Finanz- und Verwaltungsbereich werden erst geladen, wenn ein
// interner Nutzer sie öffnet. dart2js legt sie dadurch in separate
// .part.js-Dateien — Kunden (die große Mehrheit) laden nur den
// Kunden-Code und starten entsprechend schneller.
import '../../finance/presentation/screens/finance_screen.dart'
    deferred as finance;
import '../../management/presentation/management_screen.dart'
    deferred as management;

/// Rollenabhängige Hauptnavigation. Sichtbarkeit der Bereiche richtet sich
/// nach der Rolle; die eigentliche Autorisierung erfolgt serverseitig (RLS).
class HomeShell extends ConsumerStatefulWidget {
  const HomeShell({super.key});

  @override
  ConsumerState<HomeShell> createState() => _HomeShellState();
}

class _HomeShellState extends ConsumerState<HomeShell> {
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    final userAsync = ref.watch(currentUserProvider);

    return userAsync.when(
      // Der Provider baut sich bei JEDEM Auth-Event neu auf (auch beim
      // stündlichen Token-Refresh). Ohne diese Flags würde die komplette
      // Oberfläche dann kurz auf den Lade-Spinner zurückfallen — die
      // bisherigen Daten bleiben stattdessen sichtbar, bis der neue
      // Stand da ist.
      skipLoadingOnReload: true,
      skipLoadingOnRefresh: true,
      loading: () => const Scaffold(
        body: Center(child: CircularProgressIndicator()),
      ),
      error: (e, _) => Scaffold(
        body: Center(child: Text(l10n.errorGeneric)),
      ),
      data: (user) {
        if (user == null) {
          return const Scaffold(
            body: Center(child: CircularProgressIndicator()),
          );
        }
        final tabs = _tabsForRole(user.role, l10n);
        final safeIndex = _index.clamp(0, tabs.length - 1).toInt();

        return Scaffold(
          appBar: _BrandAppBar(
            user: user,
            onSignOut: () =>
                ref.read(authControllerProvider.notifier).signOut(),
          ),
          body: user.role == UserRole.customer
              ? tabs[safeIndex].screen
              : Column(
                  children: [
                    const _MfaReminderBanner(),
                    Expanded(child: tabs[safeIndex].screen),
                  ],
                ),
          bottomNavigationBar: tabs.length > 1
              ? NavigationBar(
                  selectedIndex: safeIndex,
                  onDestinationSelected: (i) => setState(() => _index = i),
                  destinations: [
                    for (final t in tabs)
                      NavigationDestination(icon: Icon(t.icon), label: t.label),
                  ],
                )
              : null,
        );
      },
    );
  }

  List<_Tab> _tabsForRole(UserRole role, AppLocalizations l10n) {
    switch (role) {
      case UserRole.systemAdmin:
      case UserRole.shareholder:
        return [
          _Tab(
            l10n.navFinance,
            Icons.trending_up_outlined,
            _DeferredScreen(
              key: const ValueKey('deferred-finance'),
              load: finance.loadLibrary,
              build: () => finance.FinanceScreen(),
            ),
          ),
          _Tab(
            l10n.navManagement,
            Icons.inventory_2_outlined,
            _DeferredScreen(
              key: const ValueKey('deferred-management'),
              load: management.loadLibrary,
              build: () => management.ManagementScreen(),
            ),
          ),
        ];
      case UserRole.employee:
        return [
          _Tab(
            l10n.navManagement,
            Icons.inventory_2_outlined,
            _DeferredScreen(
              key: const ValueKey('deferred-management'),
              load: management.loadLibrary,
              build: () => management.ManagementScreen(),
            ),
          ),
        ];
      case UserRole.customer:
        return [
          _Tab(
            l10n.navCustomer,
            Icons.storefront_outlined,
            const CustomerScreen(),
          ),
        ];
    }
  }
}

/// Lädt eine deferred Library nach und zeigt bis dahin einen Marken-Spinner.
/// `loadLibrary()` ist idempotent — nach dem ersten Laden löst das Future
/// sofort auf, spätere Tab-Wechsel rendern ohne Verzögerung.
///
/// WICHTIG: Jede Instanz braucht einen eindeutigen [key]. Ohne Key recycelt
/// Flutter beim Tab-Wechsel das Element samt State — inklusive des
/// memoisierten loadLibrary-Futures des ANDEREN Tabs. Der FutureBuilder
/// meldet dann „fertig", obwohl die neue Library nie geladen wurde, und
/// build() wirft „Deferred library … was not loaded" (im Release: graue
/// Fläche statt Verwaltung/Finanzen).
class _DeferredScreen extends StatefulWidget {
  const _DeferredScreen({
    required super.key,
    required this.load,
    required this.build,
  });
  final Future<void> Function() load;
  final Widget Function() build;

  @override
  State<_DeferredScreen> createState() => _DeferredScreenState();
}

class _DeferredScreenState extends State<_DeferredScreen> {
  late final Future<void> _future = widget.load();

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<void>(
      future: _future,
      builder: (context, snap) {
        if (snap.hasError) {
          return Center(
            child: Text(
              'Bereich konnte nicht geladen werden. Bitte neu laden.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
          );
        }
        if (snap.connectionState != ConnectionState.done) {
          return const Center(
            child: CircularProgressIndicator(color: AppColors.brand),
          );
        }
        return widget.build();
      },
    );
  }
}

class _Tab {
  const _Tab(this.label, this.icon, this.screen);
  final String label;
  final IconData icon;
  final Widget screen;
}

/// Sicherheits-Erinnerung für interne Rollen (Admin/Gesellschafter/
/// Mitarbeiter): solange kein bestätigter TOTP-Faktor existiert, erscheint
/// oberhalb des Inhalts eine Banner-Zeile mit Direkteinstieg in die
/// MFA-Einrichtung. „Später" blendet sie für die laufende Sitzung aus —
/// bewusst keine harte Pflicht, damit Demo-Zugänge nutzbar bleiben.
class _MfaReminderBanner extends ConsumerWidget {
  const _MfaReminderBanner();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final dismissed = ref.watch(mfaReminderDismissedProvider);
    final enrolled = ref.watch(mfaEnrolledProvider).valueOrNull;
    if (dismissed || enrolled != false) return const SizedBox.shrink();
    return Material(
      color: const Color(0xFFFFF3D6),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s4,
          AppSpacing.s2,
          AppSpacing.s2,
          AppSpacing.s2,
        ),
        child: Row(
          children: [
            const Icon(
              Icons.shield_outlined,
              size: 18,
              color: AppColors.brandText,
            ),
            const SizedBox(width: AppSpacing.s2),
            Expanded(
              child: Text(
                'Konto absichern: Zwei-Faktor-Authentifizierung einrichten.',
                style: AppTypography.body(
                  size: 12.5,
                  weight: FontWeight.w600,
                  color: AppColors.ink,
                ),
              ),
            ),
            TextButton(
              onPressed: () => GoRouter.of(context).push(AppRoutes.mfaEnroll),
              child: const Text('Einrichten'),
            ),
            IconButton(
              tooltip: 'Später',
              icon: const Icon(Icons.close, size: 18),
              onPressed: () =>
                  ref.read(mfaReminderDismissedProvider.notifier).state = true,
            ),
          ],
        ),
      ),
    );
  }
}

class _BrandAppBar extends ConsumerWidget implements PreferredSizeWidget {
  const _BrandAppBar({required this.user, required this.onSignOut});

  final AppUser user;
  final VoidCallback onSignOut;

  @override
  Size get preferredSize =>
      Size.fromHeight(user.role == UserRole.customer ? 220 : 180);

  // Rollen-Labels für die UI: intern bleiben shareholder und employee als
  // getrennte Berechtigungsstufen (nur shareholder darf Finanzen sehen),
  // in der Anzeige wird beides unter „Mitarbeiter" zusammengefasst.
  String _roleLabel(UserRole role) => switch (role) {
        UserRole.systemAdmin => 'Admin',
        UserRole.shareholder => 'Mitarbeiter',
        UserRole.employee => 'Mitarbeiter',
        UserRole.customer => 'Kunde',
      };

  /// Extrahiert den Vornamen für die persönliche Anrede.
  String? _firstName(String? fullName) {
    if (fullName == null || fullName.trim().isEmpty) return null;
    return fullName.trim().split(RegExp(r'\s+')).first;
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isCustomer = user.role == UserRole.customer;
    String? customerNumber;
    if (isCustomer) {
      final row = ref.watch(myCustomerProvider).valueOrNull;
      customerNumber = row?['customer_number'] as String?;
    }

    // Kunden bekommen einen 3-Spalten-Header (Anrede + Markenbild + Bell/
    // Spende); interne Nutzer den alten „Mein Konto"-Card-Header.
    if (isCustomer) {
      return _customerHeader(context, customerNumber);
    }
    // Interne Nutzer: gleiche Hero-Komposition wie im Kunden-Header
    // (Markenbild rechts, Verschmelzungs-Gradient, Konto-Zeile unten links).
    return PreferredSize(
      preferredSize: const Size.fromHeight(180),
      child: Container(
        decoration: const BoxDecoration(
          color: Color(0xFF0C0A07),
          gradient: RadialGradient(
            center: Alignment(-0.4, 1.6),
            radius: 1.4,
            colors: [
              Color(0xFF3A2C10),
              Color(0xFF1A1409),
              Color(0xFF0C0A07),
            ],
            stops: [0.0, 0.35, 0.85],
          ),
        ),
        child: SafeArea(
          bottom: false,
          child: SizedBox(
            height: 180,
            child: Stack(
              children: [
                // Rechte Hälfte: Marken-Bild (Bördekreis + Wortmarke + Automat).
                Positioned(
                  right: -12,
                  top: 0,
                  bottom: 0,
                  width: MediaQuery.of(context).size.width * 0.60,
                  child: Image.asset(
                    'assets/images/brand_hero_wide.webp',
                    excludeFromSemantics: true,
                    fit: BoxFit.contain,
                    alignment: Alignment.centerRight,
                    errorBuilder: (_, __, ___) => const SizedBox.shrink(),
                  ),
                ),
                // Weicher Übergang von der Grundfläche in das Bild.
                Positioned(
                  left: 0,
                  top: 0,
                  bottom: 0,
                  right: MediaQuery.of(context).size.width * 0.22,
                  child: const IgnorePointer(
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.centerLeft,
                          end: Alignment.centerRight,
                          colors: [
                            Color(0xFF0C0A07),
                            Color(0xFF0C0A07),
                            Color(0x000C0A07),
                          ],
                          stops: [0.0, 0.55, 1.0],
                        ),
                      ),
                    ),
                  ),
                ),
                // Bodennebel für die Lesbarkeit der Konto-Zeile.
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 84,
                  child: IgnorePointer(
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.bottomCenter,
                          end: Alignment.topCenter,
                          colors: [Color(0xE60C0A07), Color(0x000C0A07)],
                        ),
                      ),
                    ),
                  ),
                ),
                Column(
                  children: [
                    const Spacer(),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(
                        AppSpacing.s5,
                        0,
                        AppSpacing.s2,
                        AppSpacing.s3,
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            width: 48,
                            height: 48,
                            padding: const EdgeInsets.all(4),
                            decoration: BoxDecoration(
                              color: AppColors.brand,
                              borderRadius: BorderRadius.circular(AppRadii.md),
                            ),
                            child: const BrandIcon(
                              size: 40,
                              color: AppColors.ink,
                            ),
                          ),
                          const SizedBox(width: AppSpacing.s3),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Text(
                                  _roleLabel(user.role),
                                  style: AppTypography.body(
                                    size: 13,
                                    weight: FontWeight.w800,
                                    color: AppColors.brand,
                                  ).copyWith(letterSpacing: 0.3),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  user.fullName ?? user.email,
                                  style: AppTypography.display(
                                    size: 20,
                                    weight: FontWeight.w800,
                                    color: AppColors.onDark,
                                  ),
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                ),
                                Text(
                                  user.email,
                                  style: AppTypography.body(
                                    size: 12,
                                    weight: FontWeight.w600,
                                    color: AppColors.brandLight,
                                  ),
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                ),
                              ],
                            ),
                          ),
                          IconButton(
                            tooltip: AppLocalizations.of(context).signOut,
                            icon: const Icon(
                              Icons.logout,
                              size: 22,
                              color: AppColors.onDark,
                            ),
                            onPressed: onSignOut,
                          ),
                          const SizedBox(width: AppSpacing.s2),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  /// Header für Kunden: Bördesnack24-Marken-Hero füllt die linke bis
  /// mittlere Fläche, rechts sitzt ausschließlich die Notification-Bell.
  /// Abmelden ist im Profil-Tab; Kundennummer und Spendenstand ebenfalls.
  Widget _customerHeader(BuildContext context, String? customerNumber) {
    final firstName = _firstName(user.fullName) ?? 'Kunde';
    // Farbtöne aus dem brand_hero_wide.webp-Hintergrund:
    // - warm-schwarz als Grundfläche
    // - subtiler goldener Bodennebel am unteren Rand (radial)
    // Damit wirkt der linke Header wie eine Fortsetzung der Bild-
    // Hintergrundatmosphäre statt eines fremden kalten Ink-Blocks.
    return PreferredSize(
      // 150 statt 220: der Header nahm auf einem iPhone rund ein Fünftel
      // der Bildschirmhöhe ein — im mobilen Browser kommen Adressleiste
      // und Toolbar noch dazu, dann bleibt für die Inhalte zu wenig.
      preferredSize: const Size.fromHeight(150),
      child: Container(
        decoration: const BoxDecoration(
          color: Color(0xFF0C0A07),
          gradient: RadialGradient(
            center: Alignment(-0.4, 1.6),
            radius: 1.4,
            colors: [
              Color(0xFF3A2C10),
              Color(0xFF1A1409),
              Color(0xFF0C0A07),
            ],
            stops: [0.0, 0.35, 0.85],
          ),
        ),
        child: SafeArea(
          bottom: false,
          child: SizedBox(
            height: 150,
            child: Stack(
              children: [
                // Rechte Hälfte: Marken-Bild (Bördekreis + Wortmarke + Automat).
                Positioned(
                  right: -12,
                  top: 0,
                  bottom: 0,
                  width: MediaQuery.of(context).size.width * 0.60,
                  child: Image.asset(
                    'assets/images/brand_hero_wide.webp',
                    excludeFromSemantics: true,
                    fit: BoxFit.contain,
                    alignment: Alignment.centerRight,
                  ),
                ),
                // Sanfter Verschmelzungs-Streifen an der linken Bild-Kante:
                // blendet vom warm-schwarzen Header-Grund über die linken
                // ~30 % des Bildes weich aus. Zielfarbe matcht den
                // Header-Hintergrund, damit die Rechteck-Kante des Bild-
                // Layers unsichtbar wird.
                Positioned(
                  left: 0,
                  top: 0,
                  bottom: 0,
                  right: MediaQuery.of(context).size.width * 0.22,
                  child: const IgnorePointer(
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.centerLeft,
                          end: Alignment.centerRight,
                          colors: [
                            Color(0xFF0C0A07),
                            Color(0xFF0C0A07),
                            Color(0x000C0A07),
                          ],
                          stops: [0.0, 0.55, 1.0],
                        ),
                      ),
                    ),
                  ),
                ),
                // Linke Hälfte: Anrede-Text
                Positioned(
                  left: 0,
                  top: 0,
                  bottom: 0,
                  right: MediaQuery.of(context).size.width * 0.42,
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(
                      AppSpacing.s5,
                      AppSpacing.s3,
                      AppSpacing.s2,
                      AppSpacing.s3,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        // Slogan zweizeilig, ohne Punkt-Präfix.
                        Text(
                          'immer da, wenn der',
                          style: AppTypography.body(
                            size: 11,
                            weight: FontWeight.w700,
                            color: AppColors.brand,
                          ).copyWith(letterSpacing: 0.3, height: 1.2),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        Text(
                          'Hunger kommt',
                          style: AppTypography.body(
                            size: 11,
                            weight: FontWeight.w700,
                            color: AppColors.brand,
                          ).copyWith(letterSpacing: 0.3, height: 1.2),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: AppSpacing.s2),
                        Text(
                          'Moin,',
                          style: AppTypography.display(
                            size: 21,
                            weight: FontWeight.w800,
                            color: AppColors.onDark,
                          ).copyWith(height: 1.0),
                        ),
                        Text(
                          '$firstName.',
                          style: AppTypography.display(
                            size: 21,
                            weight: FontWeight.w800,
                            color: AppColors.onDark,
                          ).copyWith(height: 1.05),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: 3),
                        Text(
                          'Snack gefällig?',
                          style: AppTypography.body(
                            size: 11,
                            weight: FontWeight.w500,
                            color: AppColors.brandLight,
                          ),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                    ),
                  ),
                ),
                // Notification-Bell oben rechts.
                const Positioned(
                  top: 4,
                  right: 4,
                  child: _NotificationBell(),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// Notification-Bell mit rotem Badge, wenn ungelesene Notifications anstehen.
class _NotificationBell extends ConsumerWidget {
  const _NotificationBell();
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final unread = ref.watch(unreadNotificationCountProvider).valueOrNull ?? 0;
    return Stack(
      clipBehavior: Clip.none,
      children: [
        IconButton(
          tooltip: 'Benachrichtigungen',
          icon: const Icon(
            Icons.notifications_none,
            color: AppColors.onDark,
            size: 24,
          ),
          onPressed: () {
            Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const NotificationsScreen()),
            );
          },
        ),
        if (unread > 0)
          Positioned(
            top: 6,
            right: 4,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
              constraints: const BoxConstraints(minWidth: 18, minHeight: 18),
              decoration: BoxDecoration(
                color: AppColors.statusCritical,
                borderRadius: BorderRadius.circular(9),
              ),
              alignment: Alignment.center,
              child: Text(
                unread > 99 ? '99+' : '$unread',
                style: AppTypography.body(
                  size: 10,
                  weight: FontWeight.w800,
                  color: AppColors.onDark,
                ),
              ),
            ),
          ),
      ],
    );
  }
}
