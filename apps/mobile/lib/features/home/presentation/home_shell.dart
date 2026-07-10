import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

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
  Size get preferredSize => const Size.fromHeight(88);

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
  Widget build(BuildContext context, WidgetRef ref) {
    final isCustomer = user.role == UserRole.customer;
    String? customerNumber;
    if (isCustomer) {
      final row = ref.watch(myCustomerProvider).valueOrNull;
      customerNumber = row?['customer_number'] as String?;
    }

    // Ganzen Header wie eine „Mein Konto"-Card gestalten:
    // Ink-Hintergrund, Gold-Label, Avatar mit Anfangsbuchstaben.
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
          // Marken-Icon in Gold-Kachel — für alle Rollen inkl. Kunde.
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
                  isCustomer ? 'Mein Konto' : _roleLabel(user.role),
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
                    size: 18,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
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
                  )
                else
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
        if (isCustomer) const _DonationChip(),
        if (isCustomer) const SizedBox(width: AppSpacing.s2),
        IconButton(
          tooltip: AppLocalizations.of(context).signOut,
          icon: const Icon(Icons.logout, size: 22, color: AppColors.onDark),
          onPressed: onSignOut,
        ),
        const SizedBox(width: AppSpacing.s2),
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
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 20),
      child: Material(
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
      ),
    );
  }
}
