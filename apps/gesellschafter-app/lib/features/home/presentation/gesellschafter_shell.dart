import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'package:bs24_kern/core/router/app_routes.dart';
import 'package:bs24_kern/core/services/datenstand.dart';
import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/core/widgets/design_system/brand_marks.dart';
import 'package:bs24_kern/features/auth/domain/entities/app_user.dart';
import 'package:bs24_kern/features/auth/presentation/controllers/auth_providers.dart';
import 'package:bs24_kern/features/geteilt/automaten_providers.dart';
import 'package:bs24_kern/l10n/generated/app_localizations.dart';
import 'package:bs24_gesellschafter/features/finance/presentation/screens/finance_screen.dart';
import 'package:bs24_gesellschafter/features/management/presentation/controllers/management_providers.dart';
import 'package:bs24_gesellschafter/features/management/presentation/management_screen.dart';

/// Startoberfläche der Gesellschafter-App.
///
/// Anders als früher gibt es hier keinen Kundenbereich mehr und kein
/// Nachladen per `deferred` — diese App wird nicht über die Stores verteilt,
/// sondern direkt auf die Geräte der Gesellschafter installiert. Wer sie
/// öffnet, hat den internen Bereich als einzigen Zweck.
///
/// Die Rollenabfrage steuert nur die Sichtbarkeit. Autorisiert wird
/// weiterhin ausschließlich serverseitig (RLS); ein Kundenkonto sähe hier
/// selbst dann keine Daten, wenn es die Oberfläche erreichte.
class GesellschafterShell extends ConsumerStatefulWidget {
  const GesellschafterShell({super.key});

  @override
  ConsumerState<GesellschafterShell> createState() =>
      _GesellschafterShellState();
}

class _GesellschafterShellState extends ConsumerState<GesellschafterShell> {
  int _index = 0;

  /// Provider, die einen Neuaufbau überleben (nicht `autoDispose`) und
  /// deshalb beim Aktualisieren ausdrücklich verworfen werden müssen.
  static final _dauerhaft = <ProviderOrFamily>[
    machinesProvider,
    productsProvider,
  ];

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    final userAsync = ref.watch(currentUserProvider);

    return userAsync.when(
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
        if (user.role == UserRole.customer) return const _KeinZugang();

        final tabs = _tabsFuerRolle(user.role, l10n);
        final safeIndex = _index.clamp(0, tabs.length - 1).toInt();

        return Scaffold(
          appBar: _InternerHeader(
            user: user,
            onAktualisieren: () => jetztAktualisieren(ref, _dauerhaft),
            onSignOut: () =>
                ref.read(authControllerProvider.notifier).signOut(),
          ),
          body: Column(
            children: [
              const _MfaReminderBanner(),
              Expanded(
                child: DatenAktualisierung(
                  zusaetzlich: _dauerhaft,
                  child: tabs[safeIndex].screen,
                ),
              ),
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

  List<_Tab> _tabsFuerRolle(UserRole role, AppLocalizations l10n) {
    switch (role) {
      case UserRole.systemAdmin:
      case UserRole.shareholder:
        return [
          _Tab(
            l10n.navFinance,
            Icons.trending_up_outlined,
            const FinanceScreen(),
          ),
          _Tab(
            l10n.navManagement,
            Icons.inventory_2_outlined,
            const ManagementScreen(),
          ),
        ];
      case UserRole.employee:
        return [
          _Tab(
            l10n.navManagement,
            Icons.inventory_2_outlined,
            const ManagementScreen(),
          ),
        ];
      case UserRole.customer:
        return const [];
    }
  }
}

class _Tab {
  const _Tab(this.label, this.icon, this.screen);
  final String label;
  final IconData icon;
  final Widget screen;
}

/// Ein Kundenkonto hat in dieser App nichts zu suchen. Es bekommt deshalb
/// weder Bereiche noch Hinweise darauf, was es hier gäbe — nur den Weg
/// zurück.
class _KeinZugang extends ConsumerWidget {
  const _KeinZugang();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s5),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.lock_outline, size: 40),
              const SizedBox(height: AppSpacing.s3),
              Text(
                'Dieses Konto ist für diese Anwendung nicht freigeschaltet.',
                textAlign: TextAlign.center,
                style: AppTypography.body(size: 14, color: AppColors.ink),
              ),
              const SizedBox(height: AppSpacing.s3),
              TextButton(
                onPressed: () =>
                    ref.read(authControllerProvider.notifier).signOut(),
                child: const Text('Abmelden'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Sicherheits-Erinnerung: solange kein bestätigter TOTP-Faktor existiert,
/// erscheint oberhalb des Inhalts eine Banner-Zeile mit Direkteinstieg in die
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

class _InternerHeader extends StatelessWidget implements PreferredSizeWidget {
  const _InternerHeader({
    required this.user,
    required this.onAktualisieren,
    required this.onSignOut,
  });

  final AppUser user;
  final VoidCallback onAktualisieren;
  final VoidCallback onSignOut;

  @override
  Size get preferredSize => const Size.fromHeight(180);

  // Rollen-Labels für die UI: intern bleiben shareholder und employee als
  // getrennte Berechtigungsstufen (nur shareholder darf Finanzen sehen),
  // in der Anzeige wird beides unter „Mitarbeiter" zusammengefasst.
  String _roleLabel(UserRole role) => switch (role) {
        UserRole.systemAdmin => 'Admin',
        UserRole.shareholder => 'Mitarbeiter',
        UserRole.employee => 'Mitarbeiter',
        UserRole.customer => 'Kunde',
      };

  @override
  Widget build(BuildContext context) {
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
                    'packages/bs24_kern/assets/images/brand_hero_wide.webp',
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
                            tooltip: 'Daten aktualisieren',
                            icon: const Icon(
                              Icons.refresh,
                              size: 22,
                              color: AppColors.onDark,
                            ),
                            onPressed: onAktualisieren,
                          ),
                          IconButton(
                            tooltip: 'Sicherheit',
                            icon: const Icon(
                              Icons.shield_outlined,
                              size: 22,
                              color: AppColors.onDark,
                            ),
                            onPressed: () =>
                                GoRouter.of(context).push(AppRoutes.security),
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
}
