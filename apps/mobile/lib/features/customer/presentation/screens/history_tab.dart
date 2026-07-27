import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/brand_refresh.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/donations_news.dart';
import '../controllers/customer_providers.dart';
import 'donations_screen.dart';
import 'receipts_screen.dart';

/// „Meine Spenden": Spenden-Übersicht + Spendenanteil je Kauf. Käufe,
/// Belege (PDF), Reklamation und Demo-Testkäufe liegen im Belegarchiv.
class HistoryTab extends ConsumerWidget {
  const HistoryTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final donations = ref.watch(myDonationsByPurchaseProvider);
    final donationSummary = ref.watch(myDonationSummaryProvider);

    return BrandRefresh(
      onRefresh: () async {
        ref
          ..invalidate(myDonationsByPurchaseProvider)
          ..invalidate(myDonationSummaryProvider);
      },
      child: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          const SectionHeader(
            eyebrow: 'Mein Konto',
            title: 'Meine Spenden',
          ),
          const SizedBox(height: AppSpacing.s5),

          // Spenden-Übersicht mit Klick auf Detail-Screen
          const _SectionEyebrow(
            eyebrow: 'Deine Spende',
            icon: Icons.volunteer_activism,
          ),
          const SizedBox(height: AppSpacing.s3),
          donationSummary.when(
            loading: () =>
                const LinearProgressIndicator(color: AppColors.brand),
            error: (e, _) => _errorCard('$e'),
            data: (s) => AppCard(
              padding: EdgeInsets.zero,
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  borderRadius: BorderRadius.circular(AppRadii.lg),
                  onTap: () => Navigator.of(context).push(
                    MaterialPageRoute(builder: (_) => const DonationsScreen()),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(AppSpacing.s4),
                    child: Row(
                      children: [
                        Container(
                          width: 44,
                          height: 44,
                          decoration: BoxDecoration(
                            color: AppColors.brand,
                            borderRadius: BorderRadius.circular(AppRadii.md),
                          ),
                          alignment: Alignment.center,
                          child: const Icon(
                            Icons.volunteer_activism,
                            color: AppColors.ink,
                            size: 26,
                          ),
                        ),
                        const SizedBox(width: AppSpacing.s3),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                '5 % Netto-Umsatz für den guten Zweck',
                                style: AppTypography.body(
                                  size: 12,
                                  weight: FontWeight.w700,
                                  color: AppColors.textMuted,
                                ),
                              ),
                              Text(
                                Formatters.euro(s.totalDonated),
                                style: AppTypography.display(
                                  size: 22,
                                  weight: FontWeight.w800,
                                  color: AppColors.ink,
                                ),
                              ),
                            ],
                          ),
                        ),
                        const Icon(Icons.arrow_forward, color: AppColors.brand),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),

          const SizedBox(height: AppSpacing.s5),
          const _SectionEyebrow(
            eyebrow: 'Deine Spende je Kauf',
            icon: Icons.volunteer_activism_outlined,
          ),
          const SizedBox(height: AppSpacing.s3),
          donations.when(
            loading: () =>
                const LinearProgressIndicator(color: AppColors.brand),
            error: (e, _) => _errorCard('$e'),
            data: (list) => list.isEmpty
                ? _empty('Noch keine Käufe erfasst.')
                // Stapel statt endloser Spalte: bei vielen Käufen wuchs die
                // Seite sonst ins Unendliche. Über „Alle Belege" kommt man
                // weiterhin an die vollständige Liste.
                : StackSlider(
                    height: 76,
                    showAllLabel: 'Alle Belege',
                    onShowAll: () => Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => const ReceiptsScreen(),
                      ),
                    ),
                    children: [
                      for (final p in list) _PurchaseDonationRow(purchase: p),
                    ],
                  ),
          ),
          const SizedBox(height: AppSpacing.s5),
          // Käufe, Belege (PDF), Reklamation und Demo-Testkäufe liegen jetzt
          // gebündelt im Belegarchiv.
          _ArchiveLinkCard(
            onTap: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const ReceiptsScreen()),
            ),
          ),
        ],
      ),
    );
  }

  Widget _empty(String text) => AppCard(
        color: AppColors.surfaceAlt,
        child: Text(
          text,
          style: AppTypography.body(size: 13, color: AppColors.textMuted),
        ),
      );

  Widget _errorCard(String message) => AppCard(
        color: const Color(0xFFF7DBDB),
        borderColor: AppColors.statusCritical,
        child: Text(
          message,
          style: AppTypography.body(size: 13, color: AppColors.ink),
        ),
      );
}

class _SectionEyebrow extends StatelessWidget {
  const _SectionEyebrow({required this.eyebrow, required this.icon});
  final String eyebrow;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppColors.brand),
        const SizedBox(width: 6),
        Eyebrow(eyebrow),
      ],
    );
  }
}

/// Spende je Kauf: Betrag, Datum, Zahlungsart und der Spendenanteil.
/// Kauf-Aktionen (Beleg-PDF, Reklamation) liegen jetzt im Belegarchiv.
class _PurchaseDonationRow extends StatelessWidget {
  const _PurchaseDonationRow({required this.purchase});
  final PurchaseDonation purchase;

  static ({IconData icon, String label}) _paymentInfo(String method) {
    switch (method) {
      case 'card_ec':
        return (icon: Icons.credit_card, label: 'EC-Karte');
      case 'card_credit':
        return (icon: Icons.credit_card_outlined, label: 'Kreditkarte');
      case 'card_contactless':
        return (icon: Icons.contactless_outlined, label: 'Kontaktlos');
      case 'other':
        return (icon: Icons.payments_outlined, label: 'Andere');
      case 'cash':
      default:
        return (icon: Icons.euro_symbol, label: 'Bar');
    }
  }

  @override
  Widget build(BuildContext context) {
    final pay = _paymentInfo(purchase.paymentMethod);
    return AppCard(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  color: AppColors.surfaceAlt,
                  border: Border.all(color: AppColors.borderSubtle),
                  borderRadius: BorderRadius.circular(AppRadii.sm),
                ),
                alignment: Alignment.center,
                child: const Icon(
                  Icons.shopping_bag_outlined,
                  size: 18,
                  color: AppColors.brand,
                ),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      Formatters.euro(purchase.totalGross),
                      style: AppTypography.body(
                        size: 15,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    ),
                    Text(
                      Formatters.date(purchase.purchasedAt),
                      style: AppTypography.body(
                        size: 12,
                        color: AppColors.textMuted,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [
                        Icon(pay.icon, size: 14, color: AppColors.ink),
                        const SizedBox(width: 4),
                        Text(
                          pay.label,
                          style: AppTypography.body(
                            size: 11,
                            weight: FontWeight.w700,
                            color: AppColors.textMuted,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Row(
                    children: [
                      const Icon(
                        Icons.volunteer_activism,
                        size: 14,
                        color: AppColors.statusPositive,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        Formatters.euro(purchase.donation),
                        style: AppTypography.body(
                          size: 14,
                          weight: FontWeight.w800,
                          color: AppColors.statusPositive,
                        ),
                      ),
                    ],
                  ),
                  Text(
                    '${purchase.sharePct.toStringAsFixed(1).replaceAll('.', ',')} % '
                    'deiner Spende',
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w700,
                      color: AppColors.textMuted,
                    ),
                  ),
                ],
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: LinearProgressIndicator(
              value: (purchase.sharePct / 100).clamp(0.0, 1.0),
              minHeight: 6,
              backgroundColor: AppColors.borderSubtle,
              valueColor:
                  const AlwaysStoppedAnimation<Color>(AppColors.statusPositive),
            ),
          ),
        ],
      ),
    );
  }
}

/// Verweis auf das Belegarchiv (Käufe, Belege-PDF, Reklamation, Demo).
class _ArchiveLinkCard extends StatelessWidget {
  const _ArchiveLinkCard({required this.onTap});
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      onTap: onTap,
      color: AppColors.ink,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Row(
        children: [
          const Icon(Icons.receipt_long, color: AppColors.brand, size: 26),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Belegarchiv',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.brand,
                  ),
                ),
                const SizedBox(height: 1),
                Text(
                  'Käufe, Belege als PDF, Reklamation & Demo-Testkäufe.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.onDark.withValues(alpha: 0.8),
                  ),
                ),
              ],
            ),
          ),
          Icon(
            Icons.chevron_right,
            color: AppColors.onDark.withValues(alpha: 0.6),
            size: 20,
          ),
        ],
      ),
    );
  }
}
