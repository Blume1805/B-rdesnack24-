import 'package:flutter/material.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/invoice.dart';
import 'invoice_print.dart'
    if (dart.library.html) 'invoice_print_web.dart';

/// Rechnungsvorschau im Layout einer § 14 UStG-Rechnung. Der Kunde kann
/// über den Aktionsknopf oben rechts die Rechnung als PDF drucken/speichern
/// (im Web nutzt der Print-Dialog des Browsers, auf iOS/Android der System-
/// Druckdialog). Die Rechnung wird bereits beim Kaufabschluss serverseitig
/// erzeugt und auch an die E-Mail-Adresse des Kunden versendet (Mock: Feld
/// email_sent_at wird gesetzt).
class InvoicePreviewScreen extends StatelessWidget {
  const InvoicePreviewScreen({super.key, required this.invoice});
  final Invoice invoice;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Rechnung ${invoice.invoiceNumber}'),
        actions: [
          IconButton(
            tooltip: 'Als PDF drucken/speichern',
            icon: const Icon(Icons.picture_as_pdf_outlined),
            onPressed: () => printInvoice(invoice),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        children: [
          AppCard(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: _InvoiceBody(invoice: invoice),
          ),
          const SizedBox(height: AppSpacing.s4),
          if (invoice.emailSentAt != null)
            AppCard(
              color: AppColors.brandLight,
              borderColor: AppColors.brand,
              child: Row(
                children: [
                  const Icon(Icons.mark_email_read_outlined,
                      color: AppColors.ink, size: 20),
                  const SizedBox(width: AppSpacing.s2),
                  Expanded(
                    child: Text(
                      'Rechnung wurde am ${Formatters.date(invoice.emailSentAt!)} '
                      'an ${invoice.billingSnapshot['email'] ?? 'deine E-Mail-Adresse'} '
                      'versendet.',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w700,
                        color: AppColors.ink,
                      ),
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }
}

/// Wird sowohl von der Bildschirm-Vorschau als auch von der Web-Print-Route
/// (invoice_print_web.dart) verwendet, damit der PDF-Ausdruck 1:1 aussieht.
class _InvoiceBody extends StatelessWidget {
  const _InvoiceBody({required this.invoice});
  final Invoice invoice;

  @override
  Widget build(BuildContext context) {
    final snap = invoice.billingSnapshot;
    final issuer = Map<String, dynamic>.from(
        snap['issuer'] as Map? ?? const <String, dynamic>{});
    final recipientLines = <String>[
      if ((snap['company_name'] as String?)?.isNotEmpty ?? false)
        snap['company_name'] as String,
      if ((snap['full_name'] as String?)?.isNotEmpty ?? false)
        snap['full_name'] as String,
      if ((snap['street'] as String?)?.isNotEmpty ?? false)
        snap['street'] as String,
      if (((snap['zip'] as String?)?.isNotEmpty ?? false) ||
          ((snap['city'] as String?)?.isNotEmpty ?? false))
        '${snap['zip'] ?? ''} ${snap['city'] ?? ''}'.trim(),
      if ((snap['country'] as String?)?.isNotEmpty ?? false)
        snap['country'] as String,
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    (issuer['name'] as String?) ?? 'Bördesnack24 GbR',
                    style: AppTypography.body(
                      size: 14,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                  Text(
                    '${issuer['street'] ?? ''}\n${issuer['zip'] ?? ''} ${issuer['city'] ?? ''}',
                    style: AppTypography.body(
                        size: 12, color: AppColors.textDefault),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Steuernummer: ${issuer['tax_number'] ?? ''}',
                    style: AppTypography.body(
                        size: 12, color: AppColors.textDefault),
                  ),
                ],
              ),
            ),
            Text(
              'RECHNUNG',
              style: AppTypography.display(
                size: 24,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s5),
        const Divider(color: AppColors.borderSubtle),
        const SizedBox(height: AppSpacing.s4),
        // Rechnungs-Kopf
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Rechnungsempfänger:',
                      style: AppTypography.body(
                          size: 11,
                          weight: FontWeight.w800,
                          color: AppColors.textMuted)),
                  const SizedBox(height: 4),
                  for (final line in recipientLines)
                    Text(line,
                        style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w700,
                            color: AppColors.ink)),
                  const SizedBox(height: 6),
                  if ((snap['tax_number'] as String?)?.isNotEmpty ?? false)
                    Text('Steuernummer: ${snap['tax_number']}',
                        style: AppTypography.body(
                            size: 12, color: AppColors.textDefault)),
                  if ((snap['vat_id'] as String?)?.isNotEmpty ?? false)
                    Text('USt-IdNr.: ${snap['vat_id']}',
                        style: AppTypography.body(
                            size: 12, color: AppColors.textDefault)),
                ],
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                _kv('Rechnungs-Nr.', invoice.invoiceNumber),
                _kv('Rechnungsdatum',
                    Formatters.date(invoice.issuedAt)),
                _kv('Leistungsdatum',
                    Formatters.date(invoice.issuedAt)),
                _kv('Zahlung', _paymentLabel(invoice.paymentMethod)),
              ],
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s5),
        // Rechnungspositionen (aggregiert nach Steuersatz)
        _RateTable(invoice: invoice),
        const SizedBox(height: AppSpacing.s5),
        // Summe
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Container(
              padding: const EdgeInsets.symmetric(
                  horizontal: AppSpacing.s4, vertical: AppSpacing.s3),
              decoration: BoxDecoration(
                color: AppColors.brand,
                borderRadius: BorderRadius.circular(AppRadii.md),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text('Bruttobetrag',
                      style: AppTypography.body(
                          size: 11,
                          weight: FontWeight.w800,
                          color: AppColors.ink)),
                  Text(
                    Formatters.euro(invoice.totalGross),
                    style: AppTypography.display(
                      size: 22,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s5),
        const Divider(color: AppColors.borderSubtle),
        const SizedBox(height: AppSpacing.s3),
        Text(
          'Diese Rechnung entspricht den Anforderungen des § 14 UStG und '
          'berechtigt bei ordnungsgemäßer Vereinnahmung zum Vorsteuerabzug '
          'nach § 15 UStG. Der Betrag ist bereits am Automaten entrichtet.',
          style: AppTypography.body(
            size: 10,
            color: AppColors.textMuted,
          ),
        ),
      ],
    );
  }

  static String _paymentLabel(String m) => switch (m) {
        'card_ec' => 'EC-Karte',
        'card_credit' => 'Kreditkarte',
        'card_contactless' => 'Kontaktlos',
        'other' => 'Sonstige',
        _ => 'Bar',
      };

  Widget _kv(String k, String v) => Padding(
        padding: const EdgeInsets.only(bottom: 2),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('$k: ',
                style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w700,
                    color: AppColors.textMuted)),
            Text(v,
                style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w800,
                    color: AppColors.ink)),
          ],
        ),
      );
}

class _RateTable extends StatelessWidget {
  const _RateTable({required this.invoice});
  final Invoice invoice;

  @override
  Widget build(BuildContext context) {
    final rows = <List<String>>[
      [
        'Snacks / Süßwaren / Eis',
        '7 %',
        Formatters.euro(invoice.totalNet7),
        Formatters.euro(invoice.totalVat7),
        Formatters.euro(invoice.totalNet7 + invoice.totalVat7),
      ],
      [
        'Getränke',
        '19 %',
        Formatters.euro(invoice.totalNet19),
        Formatters.euro(invoice.totalVat19),
        Formatters.euro(invoice.totalNet19 + invoice.totalVat19),
      ],
    ];
    final header = ['Position', 'Satz', 'Netto', 'USt', 'Brutto'];

    return Table(
      border: TableBorder(
        horizontalInside:
            const BorderSide(color: AppColors.borderSubtle),
        top: const BorderSide(color: AppColors.ink),
        bottom: const BorderSide(color: AppColors.ink),
      ),
      columnWidths: const {
        0: FlexColumnWidth(3),
        1: FixedColumnWidth(56),
        2: FlexColumnWidth(1),
        3: FlexColumnWidth(1),
        4: FlexColumnWidth(1.2),
      },
      children: [
        TableRow(
          decoration: const BoxDecoration(color: AppColors.surfaceAlt),
          children: [
            for (final h in header)
              Padding(
                padding: const EdgeInsets.symmetric(
                    horizontal: 6, vertical: 6),
                child: Text(h,
                    style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w800,
                        color: AppColors.ink)),
              ),
          ],
        ),
        for (final row in rows)
          TableRow(
            children: [
              for (int i = 0; i < row.length; i++)
                Padding(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 6, vertical: 6),
                  child: Text(
                    row[i],
                    style: AppTypography.body(
                      size: 12,
                      weight: i == 0
                          ? FontWeight.w700
                          : FontWeight.w800,
                      color: AppColors.ink,
                    ),
                    textAlign: i == 0 ? TextAlign.left : TextAlign.right,
                  ),
                ),
            ],
          ),
      ],
    );
  }
}
