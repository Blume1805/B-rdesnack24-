// ignore_for_file: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import '../../../../core/utils/formatters.dart';
import '../../domain/entities/invoice.dart';

/// Öffnet ein neues Browser-Fenster mit der Rechnung als HTML und ruft den
/// System-Print-Dialog auf — der Kunde kann so als PDF speichern oder
/// direkt drucken. Kein Zusatz-Package nötig.
Future<void> printInvoice(Invoice invoice) async {
  final snap = invoice.billingSnapshot;
  final issuer = Map<String, dynamic>.from(
      snap['issuer'] as Map? ?? const <String, dynamic>{});

  String s(String key) => (snap[key] as String?)?.trim() ?? '';
  String iss(String key) => (issuer[key] as String?)?.trim() ?? '';

  final recipientLines = <String>[
    if (s('company_name').isNotEmpty) s('company_name'),
    if (s('full_name').isNotEmpty) s('full_name'),
    if (s('street').isNotEmpty) s('street'),
    if ((s('zip') + s('city')).isNotEmpty) '${s('zip')} ${s('city')}'.trim(),
    if (s('country').isNotEmpty) s('country'),
  ];

  final paymentLabel = switch (invoice.paymentMethod) {
    'card_ec' => 'EC-Karte',
    'card_credit' => 'Kreditkarte',
    'card_contactless' => 'Kontaktlos',
    'other' => 'Sonstige',
    _ => 'Bar',
  };

  String euro(double v) => Formatters.euro(v);
  String date(DateTime d) => Formatters.date(d);

  final htmlDoc = '''
<!doctype html>
<html lang="de"><head>
<meta charset="utf-8">
<title>Rechnung ${invoice.invoiceNumber}</title>
<style>
  @page { size: A4; margin: 0 16mm 22mm 16mm; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
         color: #14110E; margin: 0; padding: 0; font-size: 12pt; }
  /* One-Pager-Look: Gold-Topbar + Wortmarke */
  .topbar { height: 6mm; background: #FDC102; margin: 0 -16mm 8mm; }
  .brand { font-weight: 900; letter-spacing: 2px; font-size: 12pt; margin-bottom: 10pt; }
  .wrap { max-width: 720px; margin: 0 auto; }
  h1 { font-size: 24pt; margin: 0; letter-spacing: 1px; color: #B8860B; }
  .row { display: flex; gap: 24px; }
  .row > .col { flex: 1; }
  .right { text-align: right; }
  .muted { color: #6f6a5b; font-size: 10pt; }
  .divider { border: 0; border-top: 1px solid #14110E; margin: 16pt 0; }
  table.pos { width: 100%; border-collapse: collapse; margin-top: 8pt; }
  table.pos th, table.pos td { padding: 6pt 8pt; text-align: right; }
  table.pos th { background: #14110E; color: #F9F5EC; text-align: left; }
  table.pos th:first-child, table.pos td:first-child { text-align: left; }
  table.pos td { border-bottom: 1pt solid #E8E2D6; }
  table.pos tbody tr:nth-child(even) td { background: #F9F5EC; }
  .sum { display: inline-block; background: #FDC102; padding: 8pt 14pt; border-radius: 8pt; margin-top: 12pt; }
  .sum .lbl { font-size: 9pt; font-weight: 700; }
  .sum .val { font-size: 20pt; font-weight: 800; }
  .kv { display: flex; justify-content: flex-end; gap: 6pt; margin: 1pt 0; }
  .kv .k { color: #6f6a5b; font-weight: 700; }
  .kv .v { font-weight: 800; }
  .footer { font-size: 9pt; color: #6f6a5b; margin-top: 20pt; }
  h2 { font-size: 12pt; margin: 12pt 0 4pt 0; }
  .r-lines { line-height: 1.35; }
</style>
</head><body onload="window.print()"><div class="topbar"></div><div class="wrap">
  <div class="brand">BÖRDESNACK24</div>
  <div class="row">
    <div class="col">
      <div><strong>${iss('name')}</strong></div>
      <div class="r-lines">${iss('street')}<br>${iss('zip')} ${iss('city')}</div>
      <div class="muted">Steuernummer: ${iss('tax_number')}</div>
    </div>
    <div class="col right"><h1>RECHNUNG</h1></div>
  </div>
  <hr class="divider">
  <div class="row">
    <div class="col">
      <div class="muted">Rechnungsempfänger:</div>
      <div class="r-lines">${recipientLines.map((l) => l.replaceAll('&', '&amp;').replaceAll('<', '&lt;')).join('<br>')}</div>
      ${s('tax_number').isEmpty ? '' : '<div class="muted">Steuernummer: ${s('tax_number')}</div>'}
      ${s('vat_id').isEmpty ? '' : '<div class="muted">USt-IdNr.: ${s('vat_id')}</div>'}
    </div>
    <div class="col right">
      <div class="kv"><span class="k">Rechnungs-Nr.:</span><span class="v">${invoice.invoiceNumber}</span></div>
      <div class="kv"><span class="k">Rechnungsdatum:</span><span class="v">${date(invoice.issuedAt)}</span></div>
      <div class="kv"><span class="k">Leistungsdatum:</span><span class="v">${date(invoice.issuedAt)}</span></div>
      <div class="kv"><span class="k">Zahlung:</span><span class="v">$paymentLabel</span></div>
    </div>
  </div>

  <table class="pos">
    <thead><tr>
      <th>Position</th><th>Satz</th><th>Netto</th><th>USt</th><th>Brutto</th>
    </tr></thead>
    <tbody>
      <tr>
        <td>Snacks / Süßwaren / Eis</td><td class="right">7 %</td>
        <td>${euro(invoice.totalNet7)}</td>
        <td>${euro(invoice.totalVat7)}</td>
        <td>${euro(invoice.totalNet7 + invoice.totalVat7)}</td>
      </tr>
      <tr>
        <td>Getränke</td><td class="right">19 %</td>
        <td>${euro(invoice.totalNet19)}</td>
        <td>${euro(invoice.totalVat19)}</td>
        <td>${euro(invoice.totalNet19 + invoice.totalVat19)}</td>
      </tr>
    </tbody>
  </table>

  <div class="right"><span class="sum"><div class="lbl">Bruttobetrag</div><div class="val">${euro(invoice.totalGross)}</div></span></div>

  <div class="footer">
    Diese Rechnung entspricht den Anforderungen des § 14 UStG und berechtigt bei ordnungsgemäßer
    Vereinnahmung zum Vorsteuerabzug nach § 15 UStG. Der Betrag ist bereits am Automaten entrichtet.
  </div>
</div></body></html>
''';

  final blob = html.Blob([htmlDoc], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}
