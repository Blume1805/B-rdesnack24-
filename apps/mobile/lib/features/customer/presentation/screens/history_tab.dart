import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/donations_news.dart';
import '../controllers/customer_providers.dart';
import 'donations_screen.dart';
import 'invoice_preview_screen.dart';

/// Verlauf: Spendenanteil, Kaufhistorie mit Zahlungsart-Icon und (bei
/// Unternehmern) PDF-Rechnung. Preise und Empfehlungen wurden entfernt.
class HistoryTab extends ConsumerWidget {
  const HistoryTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final donations = ref.watch(myDonationsByPurchaseProvider);
    final donationSummary = ref.watch(myDonationSummaryProvider);
    // Rechnungen werden hier passiv geladen, damit die PDF-Vorschau
    // sofort verfügbar ist, wenn der Kunde den Button drückt.
    ref.watch(myInvoicesProvider);

    return RefreshIndicator(
      color: AppColors.brand,
      onRefresh: () async {
        ref
          ..invalidate(myPurchasesProvider)
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
            title: 'Verlauf',
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
            eyebrow: 'Kaufhistorie',
            icon: Icons.receipt_long_outlined,
          ),
          const SizedBox(height: AppSpacing.s3),
          donations.when(
            loading: () =>
                const LinearProgressIndicator(color: AppColors.brand),
            error: (e, _) => _errorCard('$e'),
            data: (list) => list.isEmpty
                ? _empty('Noch keine Käufe erfasst.')
                : Column(
                    children: [
                      for (final p in list) ...[
                        _PurchaseDonationRow(purchase: p),
                        const SizedBox(height: AppSpacing.s2),
                      ],
                    ],
                  ),
          ),
          const SizedBox(height: AppSpacing.s6),
          // Demo-Testkäufe. Zukünftig kommt die Transaktion automatisch
          // vom Automaten (Nayax-Webhook): Verifizierung des Kunden am
          // Automaten → Kauf der Produkte → Automatischer Eintrag mit
          // Datum, Produkt, Menge, Bezahlweise. Bei Unternehmern zusätzlich
          // sevDesk-Rechnung + E-Mail. Diese Buttons hier sind reines
          // Demo-Werkzeug für die manuelle Simulation.
          const _SectionEyebrow(
            eyebrow: 'Demo-Testkauf',
            icon: Icons.science_outlined,
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Simuliert einen Kauf am Automaten mit der gewählten Zahlungs-'
            'weise. Im Live-Betrieb ersetzt der Nayax-Webhook diesen '
            'Trigger und liefert Datum, Produkt, Menge und Zahlungsart '
            'automatisch. Bei Unternehmer-Kunden wird zusätzlich die '
            'Rechnung erzeugt (mit sevDesk versendet, im Verlauf als '
            'PDF verfügbar).',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          const _DemoPurchaseButtons(),
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

/// Ein Kauf mit Brutto, Netto, Spendenbetrag und relativer Quote.
class _PurchaseDonationRow extends ConsumerWidget {
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
  Widget build(BuildContext context, WidgetRef ref) {
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
          if (purchase.hasInvoice) ...[
            const SizedBox(height: AppSpacing.s2),
            OutlinedButton.icon(
              icon: const Icon(Icons.picture_as_pdf_outlined, size: 18),
              label: Text(
                'Rechnung ${purchase.invoiceNumber ?? ''} — PDF öffnen',
              ),
              onPressed: () async {
                final invoice =
                    ref.read(myInvoicesProvider).valueOrNull?.firstWhere(
                          (i) => i.id == purchase.invoiceId,
                          orElse: () =>
                              ref.read(myInvoicesProvider).valueOrNull!.first,
                        );
                if (invoice == null) return;
                if (!context.mounted) return;
                await Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (_) => InvoicePreviewScreen(invoice: invoice),
                  ),
                );
              },
              style: OutlinedButton.styleFrom(
                foregroundColor: AppColors.ink,
                side: const BorderSide(color: AppColors.brand),
                padding: const EdgeInsets.symmetric(vertical: 10),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// Vier Chip-Buttons zum Anlegen einer Demo-Transaktion je Zahlungsart.
/// Sitzt unten im Verlauf und simuliert einen Kauf am Automaten.
class _DemoPurchaseButtons extends ConsumerStatefulWidget {
  const _DemoPurchaseButtons();
  @override
  ConsumerState<_DemoPurchaseButtons> createState() =>
      _DemoPurchaseButtonsState();
}

class _DemoPurchaseButtonsState extends ConsumerState<_DemoPurchaseButtons> {
  bool _busy = false;

  Future<void> _add(String method, String label) async {
    setState(() => _busy = true);
    try {
      await ref
          .read(customerRepositoryProvider)
          .addDemoPurchase(paymentMethod: method);
      ref
        ..invalidate(myPurchasesProvider)
        ..invalidate(myDonationsByPurchaseProvider)
        ..invalidate(myDonationSummaryProvider)
        ..invalidate(myInvoicesProvider);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Demo-Kauf ($label) angelegt.')),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final entries = <(String, String, IconData)>[
      ('cash', 'Bar', Icons.euro_symbol),
      ('card_ec', 'EC', Icons.credit_card),
      ('card_credit', 'Kredit', Icons.credit_card_outlined),
      ('card_contactless', 'Kontaktlos', Icons.contactless_outlined),
    ];
    return Wrap(
      spacing: AppSpacing.s2,
      runSpacing: AppSpacing.s2,
      children: [
        for (final e in entries)
          OutlinedButton.icon(
            onPressed: _busy ? null : () => _add(e.$1, e.$2),
            icon: Icon(e.$3, size: 16, color: AppColors.ink),
            label: Text(e.$2),
            style: OutlinedButton.styleFrom(
              foregroundColor: AppColors.ink,
              side: const BorderSide(color: AppColors.brand),
              padding: const EdgeInsets.symmetric(
                horizontal: AppSpacing.s3,
                vertical: 10,
              ),
            ),
          ),
      ],
    );
  }
}
