import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/features/auth/domain/entities/app_user.dart';
import 'package:bs24_kern/features/auth/presentation/controllers/auth_providers.dart';
import 'package:bs24_kern/l10n/generated/app_localizations.dart';
import 'package:bs24_kunden/features/customer/presentation/controllers/customer_providers.dart';
import 'package:bs24_kunden/features/customer/presentation/customer_screen.dart';
import 'package:bs24_kunden/features/customer/presentation/screens/notifications_screen.dart';

/// Startoberfläche der Kunden-App.
///
/// Bewusst ohne Rollenverzweigung: diese App kennt nur den Kundenbereich.
/// Interne Bereiche liegen in einer eigenen Anwendung — sie sollen im
/// ausgelieferten Kunden-Bundle nicht einmal als Routenname auftauchen.
class KundenShell extends ConsumerWidget {
  const KundenShell({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
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
        return Scaffold(
          appBar: _KundenAppBar(user: user),
          body: const CustomerScreen(),
        );
      },
    );
  }
}

/// Header für Kunden: Bördesnack24-Marken-Hero füllt die linke bis
/// mittlere Fläche, rechts sitzt ausschließlich die Notification-Bell.
/// Abmelden ist im Profil-Tab; Kundennummer und Spendenstand ebenfalls.
class _KundenAppBar extends ConsumerWidget implements PreferredSizeWidget {
  const _KundenAppBar({required this.user});

  final AppUser user;

  @override
  Size get preferredSize => const Size.fromHeight(220);

  /// Extrahiert den Vornamen für die persönliche Anrede.
  static String? _firstName(String? fullName) {
    if (fullName == null || fullName.trim().isEmpty) return null;
    return fullName.trim().split(RegExp(r'\s+')).first;
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final firstName = _firstName(user.fullName) ?? 'Kunde';
    // Farbtöne aus dem brand_hero_wide.webp-Hintergrund:
    // - warm-schwarz als Grundfläche
    // - subtiler goldener Bodennebel am unteren Rand (radial)
    // Damit wirkt der linke Header wie eine Fortsetzung der Bild-
    // Hintergrundatmosphäre statt eines fremden kalten Ink-Blocks.
    return PreferredSize(
      preferredSize: const Size.fromHeight(220),
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
            height: 220,
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
                      AppSpacing.s5,
                      AppSpacing.s2,
                      AppSpacing.s5,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        // Claim zweizeilig. Der frühere Hunger-Slogan ist
                        // abgeloest und laut Wahrheitsschicht (scrollcraft,
                        // references/truth.md) verboten -- auch nach
                        // Inbetriebnahme nicht wieder verwendbar.
                        Text(
                          'Genießen. Geben.',
                          style: AppTypography.body(
                            size: 12,
                            weight: FontWeight.w700,
                            color: AppColors.brand,
                          ).copyWith(letterSpacing: 0.3, height: 1.2),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        Text(
                          'Gutes tun.',
                          style: AppTypography.body(
                            size: 12,
                            weight: FontWeight.w700,
                            color: AppColors.brand,
                          ).copyWith(letterSpacing: 0.3, height: 1.2),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: AppSpacing.s3),
                        Text(
                          'Moin,',
                          style: AppTypography.display(
                            size: 26,
                            weight: FontWeight.w800,
                            color: AppColors.onDark,
                          ).copyWith(height: 1.0),
                        ),
                        Text(
                          '$firstName.',
                          style: AppTypography.display(
                            size: 26,
                            weight: FontWeight.w800,
                            color: AppColors.onDark,
                          ).copyWith(height: 1.05),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: 6),
                        Text(
                          'Snack gefällig?',
                          style: AppTypography.body(
                            size: 12,
                            weight: FontWeight.w500,
                            color: AppColors.brandLight,
                          ),
                          maxLines: 2,
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
