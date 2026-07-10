// ignore_for_file: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import '../../../../core/utils/formatters.dart';

/// Öffnet die Inventur als druckbare HTML-Seite in einem neuen Tab und
/// ruft direkt window.print() auf — der Benutzer kann als PDF speichern
/// oder drucken. Gruppierung nach Automat, Semikolon-freundliche Layout-
/// entscheidungen für PDF-Export.
Future<void> printInventoryReport({
  required List<Map<String, dynamic>> rows,
  required DateTime from,
  required DateTime to,
}) async {
  final byMachine = <String, List<Map<String, dynamic>>>{};
  for (final r in rows) {
    final key = '${r['machine_code']} — ${r['machine_name']}';
    byMachine.putIfAbsent(key, () => []).add(r);
  }

  final tables = StringBuffer();
  byMachine.forEach((key, list) {
    tables.write('<h2>${_esc(key)}</h2>');
    tables.write('<table class="pos"><thead><tr>'
        '<th>Produkt</th><th>SKU</th>'
        '<th>Anfang</th><th>+ Zugang</th><th>− Verkauf</th>'
        '<th>− Verderb</th><th>± Korrektur</th>'
        '<th>Ende</th><th>Kapazität</th>'
        '</tr></thead><tbody>');
    for (final r in list) {
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
          '</tr>');
    }
    tables.write('</tbody></table>');
  });

  final now = DateTime.now();
  final doc = '''
<!doctype html>
<html lang="de"><head>
<meta charset="utf-8">
<title>Inventur ${Formatters.date(from)} – ${Formatters.date(to)}</title>
<style>
  @page { size: A4 landscape; margin: 15mm 12mm; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
         color: #14110E; margin: 0; padding: 0; font-size: 10pt; }
  .wrap { max-width: 100%; margin: 0 auto; }
  .head { display: flex; justify-content: space-between; align-items: flex-end; }
  .head h1 { margin: 0; font-size: 18pt; letter-spacing: 0.5px; }
  .meta { color: #6f6a5b; font-size: 9pt; }
  h2 { font-size: 12pt; margin: 14pt 0 4pt 0; color: #14110E; }
  table.pos { width: 100%; border-collapse: collapse; margin-top: 4pt; }
  table.pos th, table.pos td { padding: 4pt 6pt; text-align: left; border-bottom: 1pt solid #e6e0cc; }
  table.pos th { background: #FAF6ED; border-top: 1pt solid #14110E; border-bottom: 1pt solid #14110E; }
  .num { text-align: right; }
  .muted { color: #6f6a5b; }
  .strong { font-weight: 800; }
  .footer { color: #6f6a5b; font-size: 8pt; margin-top: 16pt; text-align: right; }
</style>
</head><body onload="window.print()"><div class="wrap">
  <div class="head">
    <div>
      <h1>INVENTUR — Bewegungsreport</h1>
      <div class="meta">Zeitraum: ${Formatters.date(from)} – ${Formatters.date(to)}</div>
    </div>
    <div class="meta">
      Bördesnack24 GbR<br>
      Erstellt am ${Formatters.date(now)}
    </div>
  </div>
  $tables
  <div class="footer">
    Datenquellen: Nayax-Ingest (Verkäufe) · Lieferschein-/Nachfüll-Protokolle (Zugänge) ·
    Vernichtungs- und Korrektur-Protokolle. Bestand am Ende = Bestand aktuell abzüglich
    Bewegungen nach dem Zeitraum-Ende.
  </div>
</div></body></html>
''';

  final blob = html.Blob([doc], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}

String _esc(String s) =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
