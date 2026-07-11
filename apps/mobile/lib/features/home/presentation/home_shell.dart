import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/brand_marks.dart';
import '../../../../core/widgets/design_system/loyalty_meter.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../../auth/domain/entities/app_user.dart';
import '../../auth/presentation/controllers/auth_providers.dart';
import '../../../../core/utils/formatters.dart';
import '../../customer/presentation/controllers/customer_providers.dart';
import '../../customer/presentation/customer_screen.dart';
import '../../customer/presentation/screens/donations_screen.dart';
import '../../customer/presentation/screens/notifications_screen.dart';
import '../../finance/presentation/screens/finance_screen.dart';
import '../../management/presentation/management_screen.dart';

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
            onSignOut: () => ref.read(authControllerProvider.notifier).signOut(),
          ),
          body: tabs[safeIndex].screen,
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
          _Tab(l10n.navFinance, Icons.trending_up_outlined, const FinanceScreen()),
          _Tab(l10n.navManagement, Icons.inventory_2_outlined, const ManagementScreen()),
        ];
      case UserRole.employee:
        return [
          _Tab(l10n.navManagement, Icons.inventory_2_outlined, const ManagementScreen()),
        ];
      case UserRole.customer:
        return [
          _Tab(l10n.navCustomer, Icons.storefront_outlined, const CustomerScreen()),
        ];
    }
  }
}

class _Tab {
  const _Tab(this.label, this.icon, this.screen);
  final String label;
  final IconData icon;
  final Widget screen;
}

class _BrandAppBar extends ConsumerWidget implements PreferredSizeWidget {
  const _BrandAppBar({required this.user, required this.onSignOut});

  final AppUser user;
  final VoidCallback onSignOut;

  @override
  Size get preferredSize => const Size.fromHeight(108);

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
    return AppBar(
      toolbarHeight: 88,
      backgroundColor: AppColors.ink,
      elevation: 0,
      surfaceTintColor: Colors.transparent,
      iconTheme: const IconThemeData(color: AppColors.onDark),
      titleSpacing: AppSpacing.s5,
      title: Row(
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
            child: const BrandIcon(size: 40, color: AppColors.ink),
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
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
        ],
      ),
      actions: [
        IconButton(
          tooltip: AppLocalizations.of(context).signOut,
          icon: const Icon(Icons.logout, size: 22, color: AppColors.onDark),
          onPressed: onSignOut,
        ),
        const SizedBox(width: AppSpacing.s2),
      ],
    );
  }

  /// Header für Kunden im 3-Spalten-Layout:
  /// • Links: „Hallo Philipp" in handschriftlicher Skript-Schrift (Caveat),
  ///   darunter die Kundennummer.
  /// • Mitte: Marken-Kachel mit Automaten-Icon (später Bördekreis-Kartenumriss).
  /// • Rechts: Notification-Bell oben, Spendenchip darunter.
  Widget _customerHeader(BuildContext context, String? customerNumber) {
    final firstName = _firstName(user.fullName) ?? '';
    final hello = firstName.isEmpty ? 'Hallo' : 'Hallo $firstName';
    return AppBar(
      toolbarHeight: 108,
      backgroundColor: AppColors.ink,
      elevation: 0,
      surfaceTintColor: Colors.transparent,
      automaticallyImplyLeading: false,
      iconTheme: const IconThemeData(color: AppColors.onDark),
      titleSpacing: 0,
      title: Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s4),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            // Links: Skript-Anrede + Kd.-Nr.
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    hello,
                    style: GoogleFonts.caveat(
                      fontSize: 30,
                      fontWeight: FontWeight.w700,
                      color: AppColors.onDark,
                      height: 1.05,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 2),
                  if (customerNumber != null)
                    Text(
                      'Kd.-Nr. $customerNumber',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w700,
                        color: AppColors.brandLight,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                ],
              ),
            ),
            // Mitte: Marken-Kachel (Automat + geplante Bördekreis-Kartenkontur)
            Container(
              width: 68,
              height: 68,
              margin: const EdgeInsets.symmetric(horizontal: AppSpacing.s3),
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: AppColors.brand,
                borderRadius: BorderRadius.circular(AppRadii.md),
              ),
              child: const BrandIcon(size: 56, color: AppColors.ink),
            ),
            // Rechts: Bell + Spendenchip untereinander
            Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: const [
                _NotificationBell(),
                SizedBox(height: 4),
                _DonationChip(),
              ],
            ),
          ],
        ),
      ),
      actions: [
        IconButton(
          tooltip: 'Abmelden',
          icon: const Icon(Icons.logout, size: 20, color: AppColors.onDark),
          onPressed: onSignOut,
        ),
      ],
    );
  }
}

/// Kleiner Chip im Header, der die kumulierte Spende des Kunden anzeigt.
/// Klick öffnet den Spenden-Screen (eigener Beitrag + Abstimmung).
class _DonationChip extends ConsumerWidget {
  const _DonationChip();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final summary = ref.watch(myDonationSummaryProvider).valueOrNull;
    final amount = summary?.totalDonated ?? 0;
    return Material(
      color: AppColors.brand,
      borderRadius: BorderRadius.circular(AppRadii.pill),
      child: InkWell(
          borderRadius: BorderRadius.circular(AppRadii.pill),
          onTap: () {
            Navigator.of(context).push(
              MaterialPageRoute(
                builder: (_) => const DonationsScreen(),
              ),
            );
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(
                horizontal: AppSpacing.s3, vertical: 6),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.volunteer_activism,
                    color: AppColors.ink, size: 18),
                const SizedBox(width: 6),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'Meine Spende',
                      style: AppTypography.body(
                        size: 9,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ).copyWith(letterSpacing: 0.3, height: 1),
                    ),
                    Text(
                      Formatters.euro(amount),
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ).copyWith(height: 1.1),
                    ),
                  ],
                ),
              ],
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
    final unread =
        ref.watch(unreadNotificationCountProvider).valueOrNull ?? 0;
    return Stack(
      clipBehavior: Clip.none,
      children: [
          IconButton(
            tooltip: 'Benachrichtigungen',
            icon: const Icon(Icons.notifications_none,
                color: AppColors.onDark, size: 24),
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                    builder: (_) => const NotificationsScreen()),
              );
            },
          ),
          if (unread > 0)
            Positioned(
              top: 6,
              right: 4,
              child: Container(
                padding: const EdgeInsets.symmetric(
                    horizontal: 5, vertical: 2),
                constraints:
                    const BoxConstraints(minWidth: 18, minHeight: 18),
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
