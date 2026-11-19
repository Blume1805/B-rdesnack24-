import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import '../../../../core/druck/pdf_hausstil.dart';
import '../../../../core/utils/formatters.dart';
import '../../domain/entities/invoice.dart';

/// Die Rechnung als PDF-Datei (A4): Aussteller, Empfänger, Rechnungsangaben,
/// Positionen nach Steuersatz, Bruttobetrag und Hinweis nach § 14 UStG.
Future<Uint8List> invoicePdf(
  Invoice invoice, {
  required PdfSchriften schriften,
}) {
  final h = PdfHausstil(schriften, grundgroesse: 10.5);
  final snap = invoice.billingSnapshot;
  final issuer = Map<String, dynamic>.from(
    snap['issuer'] as Map? ?? const <String, dynamic>{},
  );
  String s(String k) => (snap[k] as String?)?.trim() ?? '';
  String iss(String k) => (issuer[k] as String?)?.trim() ?? '';

  final empfaenger = <String>[
    if (s('company_name').isNotEmpty) s('company_name'),
    if (s('full_name').isNotEmpty) s('full_name'),
    if (s('street').isNotEmpty) s('street'),
    if ('${s('zip')}${s('city')}'.isNotEmpty) '${s('zip')} ${s('city')}'.trim(),
    if (s('country').isNotEmpty) s('country'),
  ];
  final zahlung = switch (invoice.paymentMethod) {
    'card_ec' => 'EC-Karte',
    'card_credit' => 'Kreditkarte',
    'card_contactless' => 'Kontaktlos',
    'other' => 'Sonstige',
    _ => 'Bar',
  };
  final grau = h.stil(groesse: 9, farbe: PdfFarben.grau);

  pw.Widget angabe(String k, String v) => pw.Padding(
        padding: const pw.EdgeInsets.only(bottom: 1.5),
        child: pw.Row(
          mainAxisAlignment: pw.MainAxisAlignment.end,
          children: [
            pw.Text(k, style: h.stil(fett: true, farbe: PdfFarben.grau)),
            pw.SizedBox(width: 6),
            pw.Text(v, style: h.stil(extrafett: true)),
          ],
        ),
      );

  final doc = pw.Document(
    title: 'Rechnung ${invoice.invoiceNumber}',
    author: iss('name'),
    creator: 'Bördesnack24-App',
    theme: schriften.thema(),
  );
  doc.addPage(
    pw.MultiPage(
      pageTheme: pw.PageTheme(
        pageFormat: PdfPageFormat.a4,
        margin: const pw.EdgeInsets.fromLTRB(
          18 * PdfPageFormat.mm,
          12 * PdfPageFormat.mm,
          18 * PdfPageFormat.mm,
          14 * PdfPageFormat.mm,
        ),
        theme: schriften.thema(),
      ),
      header: (ctx) => h.folgekopf(ctx, 'Rechnung ${invoice.invoiceNumber}'),
      footer: (ctx) => h.fusszeile(
        ctx,
        '${iss('name')} · Rechnung ${invoice.invoiceNumber}',
      ),
      build: (ctx) => [
        h.markenkopf(balken: 6 * PdfPageFormat.mm),
        pw.SizedBox(height: 4),
        pw.Row(
          crossAxisAlignment: pw.CrossAxisAlignment.start,
          children: [
            pw.Expanded(
              child: pw.Column(
                crossAxisAlignment: pw.CrossAxisAlignment.start,
                children: [
                  pw.Text(iss('name'), style: h.stil(extrafett: true)),
                  pw.Text(iss('street')),
                  pw.Text('${iss('zip')} ${iss('city')}'.trim()),
                  if (iss('tax_number').isNotEmpty)
                    pw.Text('Steuernummer: ${iss('tax_number')}', style: grau),
                ],
              ),
            ),
            pw.Text(
              'RECHNUNG',
              style: h.stil(
                groesse: 24,
                extrafett: true,
                farbe: PdfFarben.goldDunkel,
                sperrung: 1,
              ),
            ),
          ],
        ),
        pw.Container(
          margin: const pw.EdgeInsets.symmetric(vertical: 14),
          height: 1,
          color: PdfFarben.tinte,
        ),
        pw.Row(
          crossAxisAlignment: pw.CrossAxisAlignment.start,
          children: [
            pw.Expanded(
              child: pw.Column(
                crossAxisAlignment: pw.CrossAxisAlignment.start,
                children: [
                  pw.Text('Rechnungsempfänger:', style: grau),
                  for (final z in empfaenger) pw.Text(z),
                  if (s('tax_number').isNotEmpty)
                    pw.Text('Steuernummer: ${s('tax_number')}', style: grau),
                  if (s('vat_id').isNotEmpty)
                    pw.Text('USt-IdNr.: ${s('vat_id')}', style: grau),
                ],
              ),
            ),
            pw.Expanded(
              child: pw.Column(
                crossAxisAlignment: pw.CrossAxisAlignment.end,
                children: [
                  angabe('Rechnungs-Nr.:', invoice.invoiceNumber),
                  angabe(
                    'Rechnungsdatum:',
                    Formatters.date(invoice.issuedAt),
                  ),
                  angabe(
                    'Leistungsdatum:',
                    Formatters.date(invoice.issuedAt),
                  ),
                  angabe('Zahlung:', zahlung),
                ],
              ),
            ),
          ],
        ),
        pw.SizedBox(height: 18),
        // Positionen, Summe und Hinweis bleiben zusammen.
        pw.Inseparable(
          child: pw.Column(
            crossAxisAlignment: pw.CrossAxisAlignment.stretch,
            children: [
              h.tabelle(
                breiten: const {
                  0: pw.FlexColumnWidth(2.4),
                  1: pw.FlexColumnWidth(0.7),
                  2: pw.FlexColumnWidth(),
                  3: pw.FlexColumnWidth(),
                  4: pw.FlexColumnWidth(),
                },
                kopf: h.kopfzeile(const [
                  PdfZelle('Position'),
                  PdfZelle.zahl('Satz'),
                  PdfZelle.zahl('Netto'),
                  PdfZelle.zahl('USt'),
                  PdfZelle.zahl('Brutto'),
                ]),
                zeilen: [
                  h.zeile([
                    const PdfZelle('Snacks / Süßwaren / Eis'),
                    const PdfZelle.zahl('7 %'),
                    PdfZelle.zahl(Formatters.euro(invoice.totalNet7)),
                    PdfZelle.zahl(Formatters.euro(invoice.totalVat7)),
                    PdfZelle.zahl(
                      Formatters.euro(invoice.totalNet7 + invoice.totalVat7),
                    ),
                  ]),
                  h.zeile([
                    const PdfZelle('Getränke'),
                    const PdfZelle.zahl('19 %'),
                    PdfZelle.zahl(Formatters.euro(invoice.totalNet19)),
                    PdfZelle.zahl(Formatters.euro(invoice.totalVat19)),
                    PdfZelle.zahl(
                      Formatters.euro(invoice.totalNet19 + invoice.totalVat19),
                    ),
                  ]),
                ],
              ),
              pw.SizedBox(height: 12),
              pw.Align(
                alignment: pw.Alignment.centerRight,
                child: pw.Container(
                  padding: const pw.EdgeInsets.symmetric(
                    horizontal: 14,
                    vertical: 8,
                  ),
                  decoration: const pw.BoxDecoration(
                    color: PdfFarben.gold,
                    borderRadius: pw.BorderRadius.all(pw.Radius.circular(8)),
                  ),
                  child: pw.Column(
                    crossAxisAlignment: pw.CrossAxisAlignment.end,
                    children: [
                      pw.Text(
                        'Bruttobetrag',
                        style: h.stil(groesse: 9, fett: true),
                      ),
                      pw.Text(
                        Formatters.euro(invoice.totalGross),
                        style: h.stil(groesse: 20, extrafett: true),
                      ),
                    ],
                  ),
                ),
              ),
              pw.SizedBox(height: 20),
              pw.Text(
                'Diese Rechnung entspricht den Anforderungen des § 14 UStG und '
                'berechtigt bei ordnungsgemäßer Vereinnahmung zum '
                'Vorsteuerabzug nach § 15 UStG. Der Betrag ist bereits am '
                'Automaten entrichtet.',
                style: grau,
              ),
            ],
          ),
        ),
      ],
    ),
  );
  return doc.save();
}
