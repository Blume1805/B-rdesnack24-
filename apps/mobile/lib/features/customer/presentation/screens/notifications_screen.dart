import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/notification.dart';
import '../controllers/customer_providers.dart';

/// Notification-Center des Kunden — News, Coupons, persönliche Angebote und
/// Rechnungen der letzten 30 Tage.
class NotificationsScreen extends ConsumerWidget {
  const NotificationsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final notifications = ref.watch(myNotificationsProvider);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Benachrichtigungen'),
        actions: [
          TextButton(
            onPressed: () async {
              await ref
                  .read(customerRepositoryProvider)
                  .markAllNotificationsRead();
              ref
                ..invalidate(myNotificationsProvider)
                ..invalidate(unreadNotificationCountProvider);
            },
            child: Text(
              'Alle gelesen',
              style: AppTypography.body(
                size: 13,
                weight: FontWeight.w700,
                color: AppColors.brand,
              ),
            ),
          ),
        ],
      ),
      body: RefreshIndicator(
        color: AppColors.brand,
        onRefresh: () async {
          ref
            ..invalidate(myNotificationsProvider)
            ..invalidate(unreadNotificationCountProvider);
        },
        child: notifications.when(
          loading: () => const Center(
              child: CircularProgressIndicator(color: AppColors.brand)),
          error: (e, _) => Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text('$e', style: AppTypography.body(size: 14)),
          ),
          data: (list) {
            if (list.isEmpty) {
              return Padding(
                padding: const EdgeInsets.all(AppSpacing.s5),
                child: Text(
                  'Aktuell keine neuen Nachrichten.',
                  style:
                      AppTypography.body(size: 14, color: AppColors.textMuted),
                ),
              );
            }
            return ListView.separated(
              padding: const EdgeInsets.fromLTRB(
                AppSpacing.s5,
                AppSpacing.s5,
                AppSpacing.s5,
                AppSpacing.s8,
              ),
              itemCount: list.length,
              separatorBuilder: (_, __) =>
                  const SizedBox(height: AppSpacing.s2),
              itemBuilder: (_, i) => _NotificationTile(
                notification: list[i],
                onTap: () async {
                  await ref
                      .read(customerRepositoryProvider)
                      .markNotificationRead(list[i].key);
                  ref
                    ..invalidate(myNotificationsProvider)
                    ..invalidate(unreadNotificationCountProvider);
                },
              ),
            );
          },
        ),
      ),
    );
  }
}

class _NotificationTile extends StatelessWidget {
  const _NotificationTile({required this.notification, required this.onTap});
  final CustomerNotification notification;
  final VoidCallback onTap;

  ({IconData icon, Color color}) _visual() {
    switch (notification.kind) {
      case 'news':
        return (icon: Icons.campaign, color: AppColors.brand);
      case 'coupon':
        return (
          icon: Icons.local_activity_outlined,
          color: AppColors.statusPositive
        );
      case 'offer':
        return (icon: Icons.card_giftcard, color: AppColors.brand);
      case 'invoice':
        return (icon: Icons.receipt_long_outlined, color: AppColors.ink);
      default:
        return (icon: Icons.notifications_outlined, color: AppColors.ink);
    }
  }

  @override
  Widget build(BuildContext context) {
    final v = _visual();
    return AppCard(
      color: notification.isRead ? AppColors.surfaceCard : AppColors.brandLight,
      borderColor:
          notification.isRead ? AppColors.borderSubtle : AppColors.brand,
      padding: EdgeInsets.zero,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(AppRadii.lg),
          child: Padding(
            padding: const EdgeInsets.all(AppSpacing.s3),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 38,
                  height: 38,
                  decoration: BoxDecoration(
                    color: AppColors.surfaceCard,
                    border: Border.all(color: v.color),
                    borderRadius: BorderRadius.circular(AppRadii.md),
                  ),
                  alignment: Alignment.center,
                  child: Icon(v.icon, color: v.color, size: 20),
                ),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        notification.title,
                        style: AppTypography.body(
                          size: 14,
                          weight: FontWeight.w800,
                          color: AppColors.ink,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        notification.subtitle,
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        Formatters.date(notification.createdAt),
                        style: AppTypography.body(
                          size: 11,
                          weight: FontWeight.w700,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ],
                  ),
                ),
                if (!notification.isRead)
                  Container(
                    width: 10,
                    height: 10,
                    decoration: const BoxDecoration(
                      color: AppColors.statusCritical,
                      shape: BoxShape.circle,
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
