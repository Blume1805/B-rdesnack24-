// ignore_for_file: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import '../../../../core/utils/formatters.dart';

/// Öffnet die Inventur als druckbare HTML-Seite (A4-Querformat) in einem
/// neuen Tab und ruft direkt window.print() auf. Enthält je Automat die
/// Bewegungs-Tabelle mit Verkaufspreis, Warenwert, MHD-Abschlag und
/// Bilanzwert plus Zeilensummen sowie am Ende die Gesamt-Zusammenfassung
/// aller Automaten und des Lagerbestands.
Future<void> printInventoryReport({
  required List<Map<String, dynamic>> rows,
  required List<Map<String, dynamic>> summary,
  required DateTime from,
  required DateTime to,
}) async {
  final byMachine = <String, List<Map<String, dynamic>>>{};
  for (final r in rows) {
    final key = '${r['machine_code']} — ${r['machine_name']}';
    byMachine.putIfAbsent(key, () => []).add(r);
  }

  double sumNum(Iterable<Map<String, dynamic>> list, String key) =>
      list.fold<double>(0, (s, r) => s + ((r[key] as num?)?.toDouble() ?? 0));
  int sumInt(Iterable<Map<String, dynamic>> list, String key) =>
      list.fold<int>(0, (s, r) => s + ((r[key] as num?)?.toInt() ?? 0));

  final tables = StringBuffer();
  byMachine.forEach((key, list) {
    tables.write('<h2>${_esc(key)}</h2>');
    tables.write('<table class="pos"><thead><tr>'
        '<th>Produkt</th><th>SKU</th>'
        '<th>Anfang</th><th>+ Zug.</th><th>− Verk.</th>'
        '<th>− Verd.</th><th>± Korr.</th>'
        '<th>Ende</th><th>Kap.</th>'
        '<th>VK/Stk.</th><th>Wert</th>'
        '<th>MHD</th><th>Abschlag</th><th>Bilanz</th>'
        '</tr></thead><tbody>');
    for (final r in list) {
      final expiry = r['expiry_date']?.toString();
      final expiryDate = expiry == null ? null : DateTime.tryParse(expiry);
      final days = expiryDate == null
          ? null
          : expiryDate.difference(DateTime.now()).inDays;
      final expiryLabel = expiryDate == null
          ? '—'
          : Formatters.date(expiryDate) +
              (days != null && days < 7 && days >= 0 ? ' (${days}d)' : '');
      final discount = (r['mhd_discount'] as num?)?.toDouble() ?? 0;
      final warnClass = discount > 0 ? 'warn' : '';
      tables.write('<tr>'
          '<td>${_esc(r['product_name']?.toString() ?? '')}</td>'
          '<td>${_esc(r['sku']?.toString() ?? '')}</td>'
          '<td class="num">${r['start_qty']}</td>'
          '<td class="num">${r['refill']}</td>'
          '<td class="num">${r['sales']}</td>'
          '<td class="num">${r['disposal']}</td>'
          '<td class="num">${r['correction']}</td>'
          '<td class="num strong">${r['end_qty']}</td>'
          '<td class="num muted">${r['capacity']}</td>'
          '<td class="num">${Formatters.euro((r['unit_price'] as num?)?.toDouble() ?? 0)}</td>'
          '<td class="num">${Formatters.euro((r['gross_value'] as num?)?.toDouble() ?? 0)}</td>'
          '<td class="num $warnClass">${_esc(expiryLabel)}</td>'
          '<td class="num $warnClass">'
              '${discount == 0 ? "—" : "− " + Formatters.euro(discount)}</td>'
          '<td class="num strong">${Formatters.euro((r['net_value'] as num?)?.toDouble() ?? 0)}</td>'
          '</tr>');
    }
    // Summenzeile je Automat
    tables.write('<tr class="sum">'
        '<td colspan="2"><b>Summe ${_esc(key)}</b></td>'
        '<td class="num" colspan="5"></td>'
        '<td class="num strong">${sumInt(list, "end_qty")}</td>'
        '<td class="num" colspan="2"></td>'
        '<td class="num strong">${Formatters.euro(sumNum(list, "gross_value"))}</td>'
        '<td class="num"></td>'
        '<td class="num warn strong">'
            '${sumNum(list, "mhd_discount") == 0 ? "—" : "− " + Formatters.euro(sumNum(list, "mhd_discount"))}</td>'
        '<td class="num strong">${Formatters.euro(sumNum(list, "net_value"))}</td>'
        '</tr>');
    tables.write('</tbody></table>');
  });

  // Zusammenfassung: Bestand je Produkt (Automat + Lager)
  final grandItems = summary.fold<int>(
      0, (s, r) => s + ((r['total_qty'] as num?)?.toInt() ?? 0));
  final grandValue = summary.fold<double>(
      0, (s, r) => s + ((r['total_value'] as num?)?.toDouble() ?? 0));
  final distinctProducts = summary
      .where((r) => ((r['total_qty'] as num?)?.toInt() ?? 0) > 0)
      .length;

  final summaryHtml = StringBuffer();
  summaryHtml.write('<h2 style="margin-top:16pt">'
      'Bestand gesamt (Automaten + Lager)</h2>');
  summaryHtml.write('<div class="kpis">'
      '<span><b>${distinctProducts}</b> Produkte im Bestand</span>'
      '<span><b>${grandItems}</b> Einheiten gesamt</span>'
      '<span>Warenwert netto <b>${Formatters.euro(grandValue)}</b></span>'
      '</div>');
  summaryHtml.write('<table class="pos"><thead><tr>'
      '<th>SKU</th><th>Produkt</th>'
      '<th>Automaten</th><th>Lager</th><th>Gesamt</th>'
      '<th>VK/Stk.</th><th>Wert netto</th></tr></thead><tbody>');
  for (final r in summary) {
    summaryHtml.write('<tr>'
        '<td>${_esc(r['sku']?.toString() ?? '')}</td>'
        '<td>${_esc(r['product_name']?.toString() ?? '')}</td>'
        '<td class="num">${r['in_machines_qty']}</td>'
        '<td class="num">${r['in_warehouse_qty']}</td>'
        '<td class="num strong">${r['total_qty']}</td>'
        '<td class="num">${Formatters.euro((r['unit_price'] as num?)?.toDouble() ?? 0)}</td>'
        '<td class="num">${Formatters.euro((r['total_value'] as num?)?.toDouble() ?? 0)}</td>'
        '</tr>');
  }
  summaryHtml.write('</tbody></table>');

  final now = DateTime.now();
  final doc = '''
<!doctype html>
<html lang="de"><head>
<meta charset="utf-8">
<title>Inventur ${Formatters.date(from)} – ${Formatters.date(to)}</title>
<style>
  @page { size: A4 landscape; margin: 12mm 10mm; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
         color: #14110E; margin: 0; padding: 0; font-size: 9pt; }
  .wrap { max-width: 100%; margin: 0 auto; }
  .head { display: flex; justify-content: space-between; align-items: flex-end; }
  .head h1 { margin: 0; font-size: 17pt; letter-spacing: 0.5px; }
  .meta { color: #6f6a5b; font-size: 9pt; }
  h2 { font-size: 11pt; margin: 14pt 0 4pt 0; color: #14110E; }
  table.pos { width: 100%; border-collapse: collapse; margin-top: 4pt; }
  table.pos th, table.pos td { padding: 3pt 5pt; text-align: left; border-bottom: 1pt solid #e6e0cc; }
  table.pos th { background: #FAF6ED; border-top: 1pt solid #14110E; border-bottom: 1pt solid #14110E; }
  .num { text-align: right; white-space: nowrap; }
  .muted { color: #6f6a5b; }
  .strong { font-weight: 800; }
  .warn { color: #B2311C; font-weight: 800; }
  .sum td { background: #FFF5CC; border-top: 1pt solid #14110E; border-bottom: 1pt solid #14110E; }
  .kpis { display: flex; gap: 24pt; margin: 6pt 0; font-size: 10pt; color: #14110E; }
  .kpis span b { font-size: 12pt; }
  .footer { color: #6f6a5b; font-size: 8pt; margin-top: 12pt; text-align: right; }
</style>
</head><body onload="window.print()"><div class="wrap">
  <div class="head">
    <div>
      <h1>INVENTUR — Bewegungs- und Wertreport</h1>
      <div class="meta">Zeitraum: ${Formatters.date(from)} – ${Formatters.date(to)}</div>
    </div>
    <div class="meta">
      Bördesnack24 GbR<br>
      Erstellt am ${Formatters.date(now)}
    </div>
  </div>
  $tables
  $summaryHtml
  <div class="footer">
    Warenwert = Endbestand × Verkaufspreis netto. Bei MHD &lt; 7 Tagen
    wird ein 50 %-Abschlag angesetzt. Datenquellen: Nayax-Ingest
    (Verkäufe), Lieferschein-/Nachfüll-Protokolle (Zugänge),
    Vernichtungs- und Korrektur-Protokolle, warehouse_stock (Lager).
  </div>
</div></body></html>
''';

  final blob = html.Blob([doc], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}

String _esc(String s) =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
