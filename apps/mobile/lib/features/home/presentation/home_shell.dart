import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/brand_marks.dart';
import '../../../../core/widgets/design_system/marken_kopf_bild.dart';
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
      color: AppColors.statusWarningTint,
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
                  color: AppColors.textStrong,
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
      Size.fromHeight(user.role == UserRole.customer ? 250 : 236);

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
      preferredSize: const Size.fromHeight(236),
      // Markenbild über die volle Breite (18.11.2026), auch hinter der
      // Statusleiste; Schwarz an die App-Grundfarbe angeglichen.
      child: Stack(
        children: [
          const Positioned.fill(
            child: MarkenKopfBild(ausrichtung: Alignment.topCenter),
          ),
          SafeArea(
            bottom: false,
            child: SizedBox(
              height: 236,
              child: Stack(
                children: [
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
                            colors: [Color(0xD9151716), Color(0x00151716)],
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
                                borderRadius:
                                    BorderRadius.circular(AppRadii.md),
                              ),
                              child: const BrandIcon(
                                size: 40,
                                color: AppColors.onBrand,
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
                                      color: AppColors.brandPale,
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
        ],
      ),
    );
  }

  /// Header für Kunden: Bördesnack24-Marken-Hero füllt die linke bis
  /// mittlere Fläche, rechts sitzt ausschließlich die Notification-Bell.
  /// Abmelden ist im Profil-Tab; Kundennummer und Spendenstand ebenfalls.
  Widget _customerHeader(BuildContext context, String? customerNumber) {
    final firstName = _firstName(user.fullName) ?? 'Kunde';
    return PreferredSize(
      preferredSize: const Size.fromHeight(250),
      // Markenbild über die volle Breite (18.11.2026), auch hinter der
      // Statusleiste; Schwarz an die App-Grundfarbe angeglichen.
      child: Stack(
        children: [
          const Positioned.fill(
            child: MarkenKopfBild(ausrichtung: Alignment.topCenter),
          ),
          SafeArea(
            bottom: false,
            child: SizedBox(
              height: 250,
              child: Stack(
                children: [
                  // Bodennebel für die Lesbarkeit der Anrede.
                  const Positioned(
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 90,
                    child: IgnorePointer(
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.bottomCenter,
                            end: Alignment.topCenter,
                            colors: [Color(0xD9151716), Color(0x00151716)],
                          ),
                        ),
                      ),
                    ),
                  ),
                  // Anrede unten links, unter Logo und Slogan des Bildes
                  // (18.11.2026: der Slogan steht jetzt im Bild, nicht mehr
                  // zusätzlich als Text).
                  Positioned(
                    left: AppSpacing.s5,
                    right: AppSpacing.s5,
                    bottom: AppSpacing.s3,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          'Moin, $firstName.',
                          style: AppTypography.display(
                            size: 22,
                            weight: FontWeight.w800,
                            color: AppColors.onDark,
                          ).copyWith(height: 1.1),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: 2),
                        Text(
                          'Snack gefällig?',
                          style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w600,
                            color: AppColors.brandPale,
                          ),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
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
        ],
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
                color: AppColors.statusCriticalFill,
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
