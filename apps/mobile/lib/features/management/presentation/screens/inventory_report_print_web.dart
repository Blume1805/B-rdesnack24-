// ignore_for_file: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import '../../../../core/utils/formatters.dart';

/// Öffnet die FIFO-Inventur als druckbare HTML-Seite (A4 Querformat) in
/// einem neuen Tab und ruft direkt window.print() auf.  Struktur:
///   • Kopf (Firma, StNr., USt-IdNr., Zeitraum, Bewertung: FIFO)
///   • Je Produkt ein Block mit
///       – Bewegungen chronologisch (Zugänge, Verkäufe, Vernichtungen,
///         Korrekturen) inkl. EK/Stk., Rechnungsnummer/-datum, MHD
///       – FIFO-Restlots am Stichtag mit Restmenge, EK, MHD, Abschlag,
///         AK-Wert, Bilanzwert
///   • Gesamt-Bilanzwert der Vorräte
///   • MHD-Bewertungsmatrix (Erklärung)
///   • Unterschriften-Block Gesellschafter
/// Öffnet die FIFO-Inventur als druckbare HTML-Seite. Wenn [approvalDecisions]
/// gesetzt ist (Freigabe-Kontext), wird ein FREIGEGEBEN-Stempel oben
/// gerendert und die Signatur-Bilder aus den Decisions genommen.
Future<void> printInventoryReport({
  required List<Map<String, dynamic>> movements,
  required List<Map<String, dynamic>> lots,
  required List<Map<String, dynamic>> signatures,
  required DateTime from,
  required DateTime to,
  List<Map<String, dynamic>>? approvalDecisions,
}) async {
  // Bewegungen nach Produkt gruppieren (Reihenfolge = Server-Sort)
  final byProductMoves = <String, List<Map<String, dynamic>>>{};
  for (final m in movements) {
    final key = m['product_id']?.toString() ?? '';
    byProductMoves.putIfAbsent(key, () => []).add(m);
  }
  final byProductLots = <String, List<Map<String, dynamic>>>{};
  for (final l in lots) {
    final key = l['product_id']?.toString() ?? '';
    byProductLots.putIfAbsent(key, () => []).add(l);
  }

  double sumNum(Iterable<Map<String, dynamic>> list, String key) =>
      list.fold<double>(0, (s, r) => s + ((r[key] as num?)?.toDouble() ?? 0));
  int sumInt(Iterable<Map<String, dynamic>> list, String key) =>
      list.fold<int>(0, (s, r) => s + ((r[key] as num?)?.toInt() ?? 0));

  String fmtDate(dynamic v) {
    if (v == null || v.toString().isEmpty) return '—';
    try {
      return Formatters.date(DateTime.parse(v.toString()));
    } catch (_) {
      final s = v.toString();
      return s.substring(0, s.length > 10 ? 10 : s.length);
    }
  }

  String label(String type) => switch (type) {
        'refill' => 'Zugang',
        'sale' => 'Verkauf',
        'disposal' => 'Vernichtung',
        'correction' => 'Korrektur',
        _ => type,
      };

  // Produkt-Blöcke
  final blocks = StringBuffer();
  for (final entry in byProductMoves.entries) {
    final moves = entry.value;
    if (moves.isEmpty) continue;
    final name = _esc(moves.first['product_name']?.toString() ?? '');
    final sku = _esc(moves.first['sku']?.toString() ?? '');
    final productLots = byProductLots[entry.key] ?? const [];
    final endQty = sumInt(productLots, 'remaining_qty');
    final grossSum = sumNum(productLots, 'lot_gross');
    final discSum = sumNum(productLots, 'lot_discount');
    final netSum = sumNum(productLots, 'lot_net');

    blocks.write('<section class="product">');
    blocks.write('<div class="prod-head"><div>'
        '<div class="prod-name">$name</div>'
        '<div class="prod-sku">SKU: $sku</div>'
        '</div><div class="prod-end">Endbestand: <b>$endQty</b></div></div>');

    // Bewegungen
    blocks.write('<h3>Bewegungen im Zeitraum</h3>');
    blocks.write(
        '<table class="pos"><thead><tr>'
        '<th>Datum</th><th>Vorgang</th>'
        '<th class="num">Menge</th><th class="num">EK/Stk.</th>'
        '<th>Rechnung</th><th>Rg-Datum</th><th>MHD</th><th>Bemerkung</th>'
        '</tr></thead><tbody>');
    for (final m in moves) {
      final t = m['type']?.toString() ?? '';
      final qty = (m['quantity_delta'] as num?)?.toInt() ?? 0;
      final rowCls = t == 'refill'
          ? 'in'
          : t == 'disposal'
              ? 'out'
              : '';
      blocks.write('<tr class="$rowCls">'
          '<td>${fmtDate(m['occurred_at'])}</td>'
          '<td class="strong">${_esc(label(t))}</td>'
          '<td class="num strong">${qty > 0 ? '+$qty' : qty}</td>'
          '<td class="num">'
              '${m['unit_cost'] == null ? '—' : Formatters.euro((m['unit_cost'] as num).toDouble())}'
          '</td>'
          '<td>${_esc((m['invoice_number']?.toString()) ?? '—')}</td>'
          '<td>${fmtDate(m['invoice_date'])}</td>'
          '<td>${fmtDate(m['lot_expiry'])}</td>'
          '<td class="muted">${_esc((m['reason']?.toString()) ?? '')}</td>'
          '</tr>');
    }
    blocks.write('</tbody></table>');

    // FIFO-Lots
    blocks.write('<h3>FIFO-Restlots am Stichtag</h3>');
    blocks.write(
        '<table class="pos"><thead><tr>'
        '<th>Rechnung</th><th>Rg-Datum</th>'
        '<th class="num">Rest</th><th class="num">EK/Stk.</th>'
        '<th>MHD</th><th class="num">Restlaufzeit</th>'
        '<th class="num">Abschlag %</th>'
        '<th class="num">AK-Wert</th><th class="num">Abschlag €</th>'
        '<th class="num">Bilanz</th>'
        '</tr></thead><tbody>');
    if (productLots.isEmpty) {
      blocks.write('<tr><td colspan="10" class="muted">'
          'Endbestand 0 — keine Bewertung.</td></tr>');
    } else {
      for (final l in productLots) {
        final pct = (l['mhd_pct'] as num?)?.toInt() ?? 0;
        final warn = pct >= 20;
        final disc = (l['lot_discount'] as num?)?.toDouble() ?? 0;
        blocks.write('<tr>'
            '<td>${_esc((l['invoice_number']?.toString()) ?? '—')}</td>'
            '<td>${fmtDate(l['invoice_date'])}</td>'
            '<td class="num strong">${l['remaining_qty']}</td>'
            '<td class="num">${Formatters.euro(((l['unit_cost'] as num?)?.toDouble()) ?? 0)}</td>'
            '<td>${fmtDate(l['lot_expiry'])}</td>'
            '<td class="num">${l['mhd_days_left'] == null ? '—' : '${l['mhd_days_left']}d'}</td>'
            '<td class="num ${warn ? 'warn' : 'strong'}">$pct %</td>'
            '<td class="num">${Formatters.euro(((l['lot_gross'] as num?)?.toDouble()) ?? 0)}</td>'
            '<td class="num ${warn ? 'warn' : ''}">'
                '${disc == 0 ? '—' : '− ${Formatters.euro(disc)}'}</td>'
            '<td class="num strong">${Formatters.euro(((l['lot_net'] as num?)?.toDouble()) ?? 0)}</td>'
            '</tr>');
      }
      // Summenzeile
      blocks.write('<tr class="sum">'
          '<td colspan="2"><b>Summe $name</b></td>'
          '<td class="num strong">$endQty</td>'
          '<td class="num" colspan="4"></td>'
          '<td class="num strong">${Formatters.euro(grossSum)}</td>'
          '<td class="num warn strong">'
              '${discSum == 0 ? '—' : '− ${Formatters.euro(discSum)}'}</td>'
          '<td class="num strong">${Formatters.euro(netSum)}</td>'
          '</tr>');
    }
    blocks.write('</tbody></table>');
    blocks.write('</section>');
  }

  // Gesamt-Bilanzwert
  final totalItems = sumInt(lots, 'remaining_qty');
  final totalGross = sumNum(lots, 'lot_gross');
  final totalDisc = sumNum(lots, 'lot_discount');
  final totalNet = sumNum(lots, 'lot_net');
  final distinctProducts =
      lots.map((l) => l['product_id']?.toString()).toSet().length;
  final totalHtml = StringBuffer();
  totalHtml.write('<h2 style="margin-top:14pt">Bilanzwert der Vorräte</h2>');
  totalHtml.write('<div class="kpis">'
      '<span><b>$distinctProducts</b> Produkte im Bestand</span>'
      '<span><b>$totalItems</b> Einheiten gesamt</span>'
      '<span>Anschaffungskosten netto <b>${Formatters.euro(totalGross)}</b></span>'
      '<span class="warn">MHD-Abschlag <b>${totalDisc == 0 ? '— 0,00 €' : '− ${Formatters.euro(totalDisc)}'}</b></span>'
      '<span>Bilanzwert netto <b>${Formatters.euro(totalNet)}</b></span>'
      '</div>');

  // MHD-Bewertungsmatrix
  final matrixHtml = StringBuffer();
  matrixHtml.write('<section class="matrix-block">');
  matrixHtml.write('<h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2>');
  matrixHtml.write('<p class="matrix-intro">Je Rest-Laufzeit am '
      'Bilanzstichtag wird folgender Abschlag auf den Anschaffungskosten-'
      'wert eines FIFO-Restlots angesetzt. Die Bandbreite orientiert sich '
      'an branchenüblichen Ansätzen für verderbliche Handelswaren; '
      'angesetzt wird der Mittelwert.</p>');
  matrixHtml.write('<table class="pos matrix"><thead><tr>'
      '<th>Rest-MHD am Stichtag</th>'
      '<th>Typischer Bewertungsansatz</th>'
      '<th class="num">Bördesnack24 wendet an</th>'
      '<th>Begründung</th></tr></thead><tbody>');
  const matrix = [
    ['> 4 Wochen', '0 % Abschlag', '0 %', 'normale Verwertbarkeit'],
    ['2–4 Wochen', '10–30 %', '20 %',
      'eingeschränkte Verkaufszeit, ggf. erhöhte Preisaktionen'],
    ['1–2 Wochen', '30–50 %', '40 %', 'erheblicher Verkaufsdruck'],
    ['< 1 Woche', '50–80 %', '65 %',
      'Risiko des Nichtverkaufs deutlich erhöht'],
    ['MHD überschritten', '100 % Abschreibung', '100 %',
      'keine wirtschaftliche Verwertbarkeit'],
  ];
  for (final r in matrix) {
    final applied = r[2];
    final applyClass = applied == '0 %' ? 'strong' : 'strong warn';
    matrixHtml.write('<tr>'
        '<td class="strong">${_esc(r[0])}</td>'
        '<td>${_esc(r[1])}</td>'
        '<td class="num $applyClass">${_esc(applied)}</td>'
        '<td>${_esc(r[3])}</td>'
        '</tr>');
  }
  matrixHtml.write('</tbody></table></section>');

  // Signaturen + optional FREIGEGEBEN-Stempel
  final now = DateTime.now();
  final signaturesHtml = StringBuffer();

  // Im Freigabe-Kontext: FREIGEGEBEN-Stempel oberhalb der Signaturen
  final isApproved = approvalDecisions != null &&
      approvalDecisions.any((d) => d['decision'] == 'approved');
  if (isApproved) {
    signaturesHtml.write('<section class="stamp">');
    signaturesHtml.write('<div class="stamp-badge">FREIGEGEBEN</div>');
    signaturesHtml.write('<div class="stamp-note">Beide Gesellschafter '
        'haben nach Prüfung digital signiert.</div>');
    signaturesHtml.write('<ul class="stamp-list">');
    for (final d in approvalDecisions) {
      final name = _esc((d['approver_name']?.toString()) ?? '?');
      final decision = d['decision']?.toString() == 'approved'
          ? 'freigegeben' : 'abgelehnt';
      final at = d['decided_at']?.toString();
      final atFmt = at == null ? '' :
          ' · ' + fmtDate(at);
      signaturesHtml.write('<li><b>$name</b> — $decision$atFmt</li>');
    }
    signaturesHtml.write('</ul></section>');
  }

  if (signatures.isNotEmpty) {
    signaturesHtml.write('<section class="signatures">');
    signaturesHtml.write('<h2>Freigabe / Unterschriften</h2>');
    signaturesHtml.write('<div class="sigrow">');
    for (final s in signatures) {
      final img = (s['image_url'] as String?) ?? '';
      final name = _esc((s['full_name'] as String?) ?? '');
      final role = _esc((s['role_label'] as String?) ?? '');
      final content = img.isNotEmpty
          ? '<img src="${_esc(img)}" alt="Signatur" class="sig-img">'
          : '<div class="sig-line"></div>';
      signaturesHtml.write('<div class="sig-slot">'
          '<div class="sig-box">$content</div>'
          '<div class="sig-name"><b>$name</b></div>'
          '<div class="sig-meta">$role · Datum: ${Formatters.date(now)}</div>'
          '</div>');
    }
    signaturesHtml.write('</div></section>');
  }

  final doc = '''
<!doctype html>
<html lang="de"><head>
<meta charset="utf-8">
<title>FIFO-Inventur ${Formatters.date(from)} – ${Formatters.date(to)}</title>
<style>
  @page { size: A4 landscape; margin: 12mm 10mm; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
         color: #14110E; margin: 0; padding: 0; font-size: 9pt; }
  .wrap { max-width: 100%; margin: 0 auto; }
  .head { display: flex; justify-content: space-between; align-items: flex-end; }
  .head h1 { margin: 0; font-size: 17pt; letter-spacing: 0.5px; }
  .meta { color: #6f6a5b; font-size: 9pt; }
  h2 { font-size: 11pt; margin: 12pt 0 4pt 0; color: #14110E; }
  h3 { font-size: 10pt; margin: 8pt 0 2pt 0; color: #6f6a5b;
       font-weight: 700; letter-spacing: 0.2px; }
  table.pos { width: 100%; border-collapse: collapse; margin-top: 3pt; }
  table.pos th, table.pos td { padding: 3pt 5pt; text-align: left;
                                border-bottom: 1pt solid #e6e0cc; }
  table.pos th { background: #FAF6ED; border-top: 1pt solid #14110E;
                  border-bottom: 1pt solid #14110E; }
  .num { text-align: right; white-space: nowrap; }
  .muted { color: #6f6a5b; }
  .strong { font-weight: 800; }
  .warn { color: #B2311C; font-weight: 800; }
  tr.in td   { background: #F3F8ED; }
  tr.out td  { background: #FAE9E4; }
  tr.sum td  { background: #FFF5CC; border-top: 1pt solid #14110E;
                border-bottom: 1pt solid #14110E; }
  .kpis { display: flex; flex-wrap: wrap; gap: 20pt; margin: 6pt 0;
          font-size: 10pt; color: #14110E; }
  .kpis span b { font-size: 12pt; }
  .kpis .warn { color: #B2311C; }
  .sigrow { display: flex; flex-wrap: wrap; gap: 24pt; margin-top: 6pt; }
  .sig-slot { width: 260px; }
  .sig-box { height: 70px; border: 1pt solid #e6e0cc; border-radius: 6pt;
             background: #FAF6ED; padding: 6pt; display: flex;
             align-items: flex-end; }
  .sig-line { height: 1pt; background: #14110E; width: 100%;
              margin-bottom: 3pt; }
  .sig-img { max-height: 60px; max-width: 100%; object-fit: contain; }
  .sig-name { margin-top: 4pt; font-size: 10pt; }
  .sig-meta { color: #6f6a5b; font-size: 8pt; }
  .matrix-intro { color: #6f6a5b; font-size: 9pt; margin: 2pt 0 4pt 0;
                  max-width: 780px; }
  /* "Bewertung:" mit zwei Zeilen — Label steht neben dem Anschaffungs­
     kosten-Text, die zweite Zeile ("MHD-Abschlag vom AK-Wert") wird auf
     die Höhe von "Anschaffungskosten" eingerückt. */
  .head .meta .bewertung-label { display: inline-block; vertical-align: top; }
  .head .meta .bewertung-lines { display: inline-block; vertical-align: top;
                                  margin-left: 4pt; }
  .head .meta .bewertung-lines > span { display: block; }

  /* Freigabe-Stempel */
  section.stamp { margin: 8pt 0 4pt 0; padding: 6pt 10pt;
                  border: 1pt solid #5C9A3F; border-radius: 6pt;
                  background: #EEF6E8; }
  section.stamp .stamp-badge {
    display: inline-block; font-weight: 800; letter-spacing: 1px;
    color: #3E7A25; font-size: 12pt;
  }
  section.stamp .stamp-note { color: #14110E; font-size: 9pt; margin-top: 2pt; }
  section.stamp .stamp-list { margin: 4pt 0 0 14pt; padding: 0;
                              font-size: 9pt; color: #14110E; }
  section.stamp .stamp-list li { margin: 1pt 0; }
  table.matrix { width: 100%; }
  table.matrix td, table.matrix th { padding: 4pt 6pt; }

  /* Produkt-Block */
  section.product { margin: 10pt 0 8pt 0;
                    padding: 6pt 8pt 8pt 8pt;
                    border: 1pt solid #e6e0cc;
                    border-radius: 4pt; }
  .prod-head { display: flex; justify-content: space-between;
               align-items: flex-end;
               border-bottom: 1pt solid #14110E; padding-bottom: 3pt;
               margin-bottom: 4pt; }
  .prod-name { font-size: 12pt; font-weight: 800; letter-spacing: 0.2px; }
  .prod-sku  { color: #6f6a5b; font-size: 8pt; }
  .prod-end  { color: #14110E; font-size: 10pt; }
  .prod-end b { color: #b89a00; }

  /* ── Sauberer Seitenumbruch ────────────────────────────────────── */
  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  p, li { orphans: 3; widows: 3; }
  h1, h2, h3 { page-break-after: avoid; break-after: avoid-page; }
  thead { display: table-header-group; }
  tfoot { display: table-footer-group; }
  table.pos tr { page-break-inside: avoid; break-inside: avoid; }
  table.pos tr.sum { page-break-before: avoid; break-before: avoid; }
  section.product { page-break-inside: auto; break-inside: auto; }
  section.product .prod-head { page-break-after: avoid; break-after: avoid-page; }
  .sig-slot { page-break-inside: avoid; break-inside: avoid; }
  .kpis, table.matrix,
  section.matrix-block, section.signatures {
    page-break-inside: avoid; break-inside: avoid;
  }
</style>
</head><body onload="window.print()"><div class="wrap">
  <div class="head">
    <div>
      <h1>INVENTUR — FIFO-Bewegungsreport</h1>
      <div class="meta">Zeitraum: ${Formatters.date(from)} – ${Formatters.date(to)}</div>
      <div class="meta">Bewertungsverfahren: <b>FIFO</b> (§256 HGB, Verbrauchsfolge)</div>
      <div class="meta">
        <span class="bewertung-label">Bewertung:</span>
        <span class="bewertung-lines">
          <span>Anschaffungskosten netto (§253 HGB)</span>
          <span>MHD-Abschlag vom AK-Wert</span>
        </span>
      </div>
    </div>
    <div class="meta">
      Bördesnack24 GbR<br>
      Sülldorfer Str. 3A · 39171 Sülzetal OT Osterweddingen<br>
      Steuernummer: 102/178/01635<br>
      USt-IdNr.: DE 458804058<br>
      Erstellt am ${Formatters.date(now)}
    </div>
  </div>
  $blocks
  $totalHtml
  $matrixHtml
  $signaturesHtml
</div></body></html>
''';

  final blob = html.Blob([doc], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}

String _esc(String s) =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
