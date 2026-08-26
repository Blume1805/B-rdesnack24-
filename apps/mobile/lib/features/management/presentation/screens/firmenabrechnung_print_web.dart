// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

import '../../../../core/utils/formatters.dart';

/// Öffnet die Monatsabrechnung eines Firmenkunden als druckbare A4-Seite.
///
/// Wozu: Das ist die Aufstellung, die der Rechnung an den Firmenkunden
/// beiliegt — Zeile für Zeile, wer wann was entnommen hat und wie sich der
/// Betrag zwischen Firma und Beschäftigten aufteilt. Die Rechnung selbst
/// entsteht in sevDesk; dieses Blatt ist ihr Nachweis.
bool get firmenabrechnungDruckMoeglich => true;

Future<void> printFirmenabrechnung({
  required Map<String, dynamic> daten,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
}) async {
  final b = Map<String, dynamic>.from((daten['business'] as Map?) ?? const {});
  final z = Map<String, dynamic>.from((daten['zeitraum'] as Map?) ?? const {});
  final s = Map<String, dynamic>.from((daten['summen'] as Map?) ?? const {});
  final zeilen =
      (daten['zeilen'] as List? ?? const []).cast<Map<String, dynamic>>();

  const monate = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
  ];
  final monatNr = (z['monat'] as num?)?.toInt() ?? 1;
  final monatName = monate[(monatNr - 1).clamp(0, 11)];

  final puffer = StringBuffer()
    ..write('<!doctype html><html lang="de"><head><meta charset="utf-8">')
    ..write('<title>Abrechnung ${_esc('${b['name'] ?? ''}')}</title>')
    ..write('<style>${_stil()}</style></head>')
    ..write('<body onload="window.print()">')
    ..write('<div class="topbar"></div>')
    ..write('<div class="wrap">')
    ..write('<div class="brand">BÖRDESNACK24</div>');

  // ── Kopf ──────────────────────────────────────────────────────────────
  puffer
    ..write('<div class="head">')
    ..write('<div>')
    ..write('<h1>Abrechnung $monatName ${z['jahr']}</h1>')
    ..write('<p class="stammdaten">')
    ..write('${_esc(firma)}<br>')
    ..write('Steuernummer: ${_esc(steuernummer)}<br>')
    ..write('USt-IdNr.: ${_esc(ustIdNr)}')
    ..write('</p>')
    ..write('</div>')
    ..write('<div class="meta">')
    ..write('<div><span class="meta-label">Firmenkunde</span>'
        '${_esc('${b['name'] ?? ''}')}</div>')
    ..write('<div><span class="meta-label">Anschrift</span>'
        '${_esc('${b['anschrift'] ?? '—'}')}</div>')
    ..write('<div><span class="meta-label">USt-IdNr.</span>'
        '${_esc('${b['ust_id'] ?? '—'}')}</div>')
    ..write('<div><span class="meta-label">Zeitraum</span>'
        '${_datum(z['von'])} bis ${_datum(z['bis'])}</div>')
    ..write('</div>')
    ..write('</div>');

  // ── Erklärung ─────────────────────────────────────────────────────────
  // Wer das Blatt in die Hand bekommt, hat den Bildschirm nie gesehen.
  puffer
    ..write('<h2>Worum es geht</h2>')
    ..write('<p class="fliess">')
    ..write('Diese Aufstellung führt alle Einkäufe auf, die Beschäftigte der '
        'oben genannten Firma im Abrechnungsmonat an einem Automaten auf dem '
        'Gelände dieser Firma getätigt haben. Massgeblich für die Zuordnung '
        'ist der Standort des Automaten. Einkäufe an öffentlichen Automaten '
        'sind Privatkäufe und stehen hier nicht.')
    ..write('</p>')
    ..write('<p class="fliess">')
    ..write('Die Spalte „Firma" weist aus, welchen Anteil der Arbeitgeber '
        'nach dem vereinbarten Budget trägt; „Beschäftigte" ist der Rest. '
        'Es wird kein Guthaben ausgegeben — ob und wie der Arbeitgeber den '
        'auf die beschäftigte Person entfallenden Anteil einfordert, richtet '
        'sich nach dem Arbeitsverhältnis.')
    ..write('</p>');

  // ── Tabelle ───────────────────────────────────────────────────────────
  puffer
    ..write('<h2>Einzelnachweis</h2>')
    ..write('<table><thead><tr>')
    ..write('<th class="l">Datum</th>')
    ..write('<th class="l">Wer</th>')
    ..write('<th class="l">Automat</th>')
    ..write('<th class="l">Standort</th>')
    ..write('<th class="l">Artikel</th>')
    ..write('<th class="r">Brutto</th>')
    ..write('<th class="r">Firma</th>')
    ..write('<th class="r">Beschäftigte</th>')
    ..write('</tr></thead><tbody>');

  if (zeilen.isEmpty) {
    puffer.write('<tr><td colspan="8" class="leer">'
        'In diesem Monat wurde an keinem Firmenautomaten eingekauft.'
        '</td></tr>');
  } else {
    for (final r in zeilen) {
      final artikel =
          (r['artikel'] as List? ?? const []).cast<Map<String, dynamic>>();
      puffer
        ..write('<tr>')
        ..write('<td class="l">${_zeitpunkt(r)}</td>')
        ..write('<td class="l">${_esc('${r['wer'] ?? '—'}')}</td>')
        ..write('<td class="l">${_esc('${r['automat'] ?? '—'}')}</td>')
        ..write('<td class="l">${_esc('${r['standort'] ?? '—'}')}</td>')
        ..write('<td class="l">${_artikel(artikel)}</td>')
        ..write('<td class="r">${_eur(r['brutto'])}</td>')
        ..write('<td class="r">${_eur(r['arbeitgeber'])}</td>')
        ..write('<td class="r">${_eur(r['mitarbeiter'])}</td>')
        ..write('</tr>');
    }
    puffer
      ..write('<tr class="summe">')
      ..write('<td class="l" colspan="5">Summe '
          '(${(s['kaeufe'] as num?)?.toInt() ?? 0} Käufe)</td>')
      ..write('<td class="r">${_eur(s['brutto'])}</td>')
      ..write('<td class="r">${_eur(s['arbeitgeber'])}</td>')
      ..write('<td class="r">${_eur(s['mitarbeiter'])}</td>')
      ..write('</tr>');
  }
  puffer.write('</tbody></table>');

  puffer
    ..write('<p class="hinweis">')
    ..write('Die Aufteilung wird bei jedem Abruf neu gerechnet, in der '
        'Reihenfolge der Kaufzeitpunkte. Solange der Monat läuft, kann sich '
        'ein Anteil dadurch noch verschieben — mit dem Monatsende steht er '
        'fest. Diese Aufstellung ist kein Rechnungsdokument; die Rechnung '
        'geht getrennt zu.')
    ..write('</p>');

  puffer
    ..write('<div class="fuss">')
    ..write('${_esc(firma)} · Erstellt am '
        '${Formatters.date(DateTime.now())}')
    ..write('</div>')
    ..write('</div></body></html>');

  final blob = html.Blob([puffer.toString()], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}

String _artikel(List<Map<String, dynamic>> a) {
  if (a.isEmpty) return '<span class="leer">keine Einzelangabe</span>';
  return a
      .map((e) => _esc('${e['menge']}× ${e['bezeichnung']}'))
      .join('<br>');
}

String _eur(dynamic v) {
  final n = v is num ? v.toDouble() : double.tryParse('${v ?? ''}') ?? 0;
  return Formatters.euro(n);
}

/// Datum und Uhrzeit kommen fertig formatiert vom Server, in Europe/Berlin.
///
/// Selbst zu formatieren hiesse `toLocal()` — also die Zeitzone dessen, der
/// das PDF öffnet. Am gerenderten Ausdruck aufgefallen: 08:00 Uhr MESZ stand
/// als 06:00 Uhr da. Bei einem Kauf kurz nach Mitternacht wäre es der falsche
/// Tag und womöglich der falsche Monat. Siehe Migration 0144.
String _zeitpunkt(Map<String, dynamic> r) {
  final datum = '${r['datum'] ?? ''}';
  final uhrzeit = '${r['uhrzeit'] ?? ''}';
  if (datum.isEmpty) return '';
  return '$datum<br><span class="klein-grau">$uhrzeit Uhr</span>';
}

String _datum(dynamic v) {
  final d = DateTime.tryParse('${v ?? ''}');
  return d == null ? '' : Formatters.date(d);
}

String _esc(String s) => s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

String _stil() => '''
  /* Oben randlos NUR auf der ersten Seite: Dort sitzt der Gold-Balken bündig
     am Papierrand. Ohne die Ausnahme beginnt auch jede Folgeseite an der
     Papierkante — im ersten Ausdruck standen die Unterschriftsfelder
     deshalb oben angeschnitten auf Seite 2. Am gerenderten PDF gesehen,
     nicht vermutet. */
  @page { size: A4 landscape; margin: 15mm 18mm; }
  @page :first { margin-top: 0; }
  * { box-sizing: border-box; }
  body { font-family: Arial, "Liberation Sans", -apple-system,
                      "Segoe UI", Roboto, sans-serif;
         color: #14110E; margin: 0; padding: 0; font-size: 9.5pt; }

  .topbar { height: 4mm; background: #FDC102; margin: 0 0 7mm;
            border-radius: 1pt; }
  .wrap { max-width: 100%; }
  .brand { font-weight: 900; letter-spacing: 2px; font-size: 10pt;
           margin-bottom: 8pt; }

  .head { display: flex; justify-content: space-between;
          align-items: flex-end; gap: 12mm;
          border-bottom: 1.5pt solid #FDC102; padding-bottom: 6pt; }
  h1 { margin: 0 0 4pt 0; font-size: 15pt; font-weight: 800;
       letter-spacing: 0.2px; color: #B8860B; }
  .stammdaten { font-size: 9pt; color: #6f6a5b; margin: 0; line-height: 1.45; }
  .meta { font-size: 8.5pt; color: #6f6a5b; text-align: left;
          max-width: 74mm; line-height: 1.45; }
  .meta > div { display: flex; gap: 2.5mm; margin-bottom: 1pt; }
  .meta .meta-label { flex: 0 0 30mm; color: #14110E; font-weight: 700; }

  h2 { font-size: 11pt; margin: 14pt 0 4pt 0; color: #14110E;
       font-weight: 800;
       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }

  /* Blocksatz mit Silbentrennung nach Branding Guide v1.0 / DIN 5008. */
  .fliess { font-size: 9.5pt; line-height: 1.5; margin: 5pt 0 0 0;
            text-align: justify; hyphens: auto; }

  table { width: 100%; border-collapse: collapse; margin-top: 4pt; }
  th, td { padding: 3.5pt 5pt; text-align: left;
           border-bottom: 1pt solid #E8E2D6; vertical-align: top; }
  thead th { background: #14110E; color: #F9F5EC; font-weight: 700;
             font-size: 8.5pt; border-bottom: none; }
  thead { display: table-header-group; }
  tr { page-break-inside: avoid; }
  .l { text-align: left; }
  .c { text-align: center; }
  .klein { font-weight: 400; font-size: 7.5pt; color: #C9C4BC; }
  .klein-grau { font-size: 8pt; color: #6f6a5b; }
  .achtung { color: #B2311C; font-weight: 700; }
  .leer { color: #6f6a5b; font-style: italic; }

  .hinweis { font-size: 8pt; color: #595959; font-style: italic;
             margin: 5pt 0 0 0; line-height: 1.4; }
  .warnung { font-size: 9pt; color: #B2311C; font-weight: 700;
             margin: 6pt 0 0 0; }

  .unterschriften { display: flex; gap: 18mm; margin-top: 14mm;
                    page-break-inside: avoid; }
  .feld { flex: 1; max-width: 90mm; }
  .sig-box { height: 18mm; border: 1pt solid #E8E2D6; border-radius: 6pt;
             background: #FAF6ED; }
  .linie { border-bottom: 1pt solid #14110E; height: 0; margin-top: 3pt; }
  .name { font-size: 9.5pt; font-weight: 700; margin-top: 3pt; }
  .rolle { font-size: 8pt; color: #6f6a5b; }

  .fuss { font-size: 7.5pt; color: #6f6a5b; margin-top: 10mm;
          border-top: 1pt solid #E8E2D6; padding-top: 4pt; }
''';
