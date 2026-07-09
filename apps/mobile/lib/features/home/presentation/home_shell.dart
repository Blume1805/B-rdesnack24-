import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/brand_marks.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../../auth/domain/entities/app_user.dart';
import '../../auth/presentation/controllers/auth_providers.dart';
import '../../customer/presentation/controllers/customer_providers.dart';
import '../../customer/presentation/customer_screen.dart';
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
  Size get preferredSize => const Size.fromHeight(66);

  String _roleLabel(UserRole role) => switch (role) {
        UserRole.systemAdmin => 'Systemadmin',
        UserRole.shareholder => 'Gesellschafter',
        UserRole.employee => 'Mitarbeiter',
        UserRole.customer => 'Kunde',
      };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Kundennummer nur für Kunden nachladen.
    String? customerNumber;
    if (user.role == UserRole.customer) {
      final row = ref.watch(myCustomerProvider).valueOrNull;
      customerNumber = row?['customer_number'] as String?;
    }

    return AppBar(
      toolbarHeight: 66,
      // Cream-Header hebt sich vom weißen Content ab.
      backgroundColor: AppColors.surfaceAlt,
      elevation: 0,
      surfaceTintColor: Colors.transparent,
      shape: const Border(
        bottom: BorderSide(color: AppColors.borderSubtle, width: 1),
      ),
      title: Row(
        children: [
          // Marken-Icon
          const BrandIcon(size: 34),
          const SizedBox(width: AppSpacing.s2),
          // Wortmarke einzeilig — 24 in Gold
          Row(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text(
                'BÖRDESNACK',
                style: AppTypography.display(
                  size: 14,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ).copyWith(letterSpacing: 0.2, height: 1),
              ),
              const SizedBox(width: 4),
              Text(
                '24',
                style: AppTypography.display(
                  size: 14,
                  weight: FontWeight.w800,
                  color: AppColors.brand,
                ).copyWith(letterSpacing: 0.2, height: 1),
              ),
            ],
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  user.fullName ?? user.email,
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.end,
                ),
                Text(
                  customerNumber != null
                      ? 'Kd.-Nr. $customerNumber'
                      : _roleLabel(user.role),
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w700,
                    color: AppColors.brand,
                  ).copyWith(letterSpacing: 0.3),
                ),
              ],
            ),
          ),
        ],
      ),
      actions: [
        IconButton(
          tooltip: AppLocalizations.of(context).signOut,
          icon: const Icon(Icons.logout, size: 20),
          onPressed: onSignOut,
        ),
        const SizedBox(width: AppSpacing.s2),
      ],
    );
  }
}
