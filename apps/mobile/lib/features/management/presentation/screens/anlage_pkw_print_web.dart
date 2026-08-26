// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

import '../../../../core/utils/formatters.dart';

/// Öffnet die „Anlage zur Ermittlung der individuellen PKW-Kosten" als
/// druckbare A4-Seite in einem neuen Tab und ruft window.print() auf.
///
/// Aufbau nach Vorgabe des Auftraggebers vom 25.08.2026:
///   • Überschrift fett und eine Stufe grösser als der Fliesstext, mit Jahr
///   • darunter kleiner die Stammdaten (Firma, Steuernummer, USt-IdNr.)
///   • Tabelle je Fahrzeug mit allen Kostenarten, Kilometerständen zum 01.01.
///     und 31.12. und dem daraus ermittelten Satz je Kilometer
///   • Tabelle der betrieblichen Fahrten mit einer Spalte je Kennzeichen,
///     in der der jeweilige Satz erscheint
///   • Summe als Nutzungseinlage
///   • zwei Unterschriftsfelder für die Gesellschafter
bool get anlageDruckMoeglich => true;

Future<void> printAnlagePkw({
  required Map<String, dynamic> daten,
  required List<Map<String, dynamic>> signatures,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
  List<Map<String, dynamic>>? approvalDecisions,
}) async {
  final jahr = daten['jahr'];
  final fahrzeuge =
      (daten['fahrzeuge'] as List? ?? const []).cast<Map<String, dynamic>>();
  final fahrten =
      (daten['fahrten'] as List? ?? const []).cast<Map<String, dynamic>>();
  final einlage = _num(daten['nutzungseinlage']);
  final ohneSatz = _num(daten['fahrten_ohne_satz']).toInt();

  final freigegeben = approvalDecisions != null && approvalDecisions.isNotEmpty;

  final puffer = StringBuffer()
    ..write('<!doctype html><html lang="de"><head><meta charset="utf-8">')
    ..write('<title>Anlage PKW-Kosten $jahr</title>')
    // `onload` statt eines eigenen print()-Aufrufs: So ist der Ablauf
    // derselbe wie beim FIFO-Inventurreport, und der Druckdialog erscheint
    // erst, wenn die Seite wirklich steht.
    ..write('<style>${_stil()}</style></head>')
    ..write('<body onload="window.print()">');

  if (freigegeben) {
    puffer.write('<div class="stempel">Freigegeben</div>');
  }

  // ── Kopf ────────────────────────────────────────────────────────────────
  puffer
    ..write('<h1>Anlage zur Ermittlung der individuellen '
        'PKW-Kosten $jahr</h1>')
    ..write('<p class="stammdaten">')
    ..write('${_esc(firma)}<br>')
    ..write('Steuernummer: ${_esc(steuernummer)}<br>')
    ..write('USt-IdNr.: ${_esc(ustIdNr)}')
    ..write('</p>');

  // ── Fahrzeuge und Kilometersatz ─────────────────────────────────────────
  puffer.write('<h2>Fahrzeugkosten und Satz je Kilometer</h2>');
  puffer.write('<table><thead><tr><th class="l">Position</th>');
  for (final f in fahrzeuge) {
    puffer.write('<th class="r">${_esc('${f['kennzeichen']}')}</th>');
  }
  puffer.write('</tr></thead><tbody>');

  for (final art in _kostenarten) {
    puffer.write('<tr><td class="l">${_esc(art.value)}</td>');
    for (final f in fahrzeuge) {
      final zeilen =
          (f['kosten'] as List? ?? const []).cast<Map<String, dynamic>>();
      final summe = zeilen
          .where((k) => k['kostenart'] == art.key)
          .fold<double>(0, (s, k) => s + _num(k['betrag_brutto']));
      puffer.write('<td class="r">${summe == 0 ? '—' : _eur(summe)}</td>');
    }
    puffer.write('</tr>');
  }

  puffer.write('<tr class="summe"><td class="l">Gesamtkosten (brutto)</td>');
  for (final f in fahrzeuge) {
    puffer.write('<td class="r">${_eur(_num(f['gesamtkosten']))}</td>');
  }
  puffer.write('</tr>');

  puffer.write('<tr><td class="l">Kilometerstand 01.01.</td>');
  for (final f in fahrzeuge) {
    puffer.write('<td class="r">${_km(f['km_stand_anfang'])}</td>');
  }
  puffer.write('</tr><tr><td class="l">Kilometerstand 31.12.</td>');
  for (final f in fahrzeuge) {
    puffer.write('<td class="r">${_km(f['km_stand_ende'])}</td>');
  }
  puffer.write('</tr><tr><td class="l">Gefahrene Kilometer</td>');
  for (final f in fahrzeuge) {
    puffer.write('<td class="r">${_km(f['km_gefahren'])}</td>');
  }
  puffer.write('</tr>');

  puffer.write('<tr class="summe"><td class="l">Kosten je Kilometer</td>');
  for (final f in fahrzeuge) {
    puffer.write('<td class="r">${_satz(f['satz_je_km'])}</td>');
  }
  puffer.write('</tr></tbody></table>');

  puffer.write('<p class="hinweis">Der Satz je Kilometer ergibt sich aus den '
      'Gesamtkosten geteilt durch die in diesem Jahr gefahrenen Kilometer. '
      'Die Beträge sind Bruttobeträge: Bei einem privaten Fahrzeug besteht '
      'kein Vorsteuerabzug, die Umsatzsteuer gehört damit zu den '
      'tatsächlich getragenen Kosten.</p>');

  // ── Betriebliche Fahrten ────────────────────────────────────────────────
  puffer.write('<h2>Betrieblich gefahrene Strecken</h2>');
  puffer.write('<table class="fahrten"><thead>');
  puffer
    ..write('<tr>')
    ..write('<th class="l" rowspan="2">Datum</th>')
    ..write('<th class="l" rowspan="2">Anlass der Fahrt</th>')
    ..write('<th class="r" rowspan="2">Kilometer<br><span class="klein">'
        'Hin- und Rückweg</span></th>')
    ..write('<th colspan="${fahrzeuge.length}">Kosten je Kilometer</th>')
    ..write('<th class="r" rowspan="2">Betrag</th>')
    ..write('</tr><tr>');
  for (final f in fahrzeuge) {
    puffer.write('<th class="r">${_esc('${f['kennzeichen']}')}</th>');
  }
  puffer.write('</tr></thead><tbody>');

  if (fahrten.isEmpty) {
    puffer.write('<tr><td class="l leer" colspan="${4 + fahrzeuge.length}">'
        'Für $jahr ist keine betriebliche Fahrt erfasst.</td></tr>');
  }
  for (final t in fahrten) {
    puffer
      ..write('<tr>')
      ..write('<td class="l">${_datum(t['fahrt_datum'])}</td>')
      ..write('<td class="l">${_esc('${t['anlass'] ?? ''}')}</td>')
      ..write('<td class="r">${_km(t['kilometer'])}</td>');
    // Der Satz steht in der Spalte des Fahrzeugs, mit dem gefahren wurde.
    for (final f in fahrzeuge) {
      final passt = f['id'] == t['pkw_id'];
      puffer.write(
        '<td class="r">${passt ? _satz(t['satz_je_km']) : ''}</td>',
      );
    }
    puffer.write('<td class="r">${_eurOderStrich(t['betrag'])}</td></tr>');
  }

  puffer
    ..write('<tr class="summe"><td class="l" '
        'colspan="${3 + fahrzeuge.length}">Nutzungseinlage</td>')
    ..write('<td class="r">${_eur(einlage)}</td></tr>')
    ..write('</tbody></table>');

  if (ohneSatz > 0) {
    puffer.write('<p class="warnung">$ohneSatz Fahrt'
        '${ohneSatz == 1 ? '' : 'en'} ohne Kilometersatz: Für das '
        'betreffende Fahrzeug fehlen Kilometerstände oder Kosten. '
        'Diese Fahrten sind in der Summe nicht enthalten.</p>');
  }

  // ── Unterschriften ──────────────────────────────────────────────────────
  puffer.write('<div class="unterschriften">');
  for (final s in signatures) {
    final name = '${s['full_name'] ?? ''}';
    final rolle = '${s['role_label'] ?? ''}';
    final bild = freigegeben ? _bildAus(approvalDecisions, name) : null;
    puffer
      ..write('<div class="feld">')
      ..write(
        bild == null
            ? '<div class="linie"></div>'
            : '<img class="signatur" src="${_esc(bild)}" alt="">'
                '<div class="linie"></div>',
      )
      ..write('<div class="name">${_esc(name)}</div>')
      ..write('<div class="rolle">${_esc(rolle)}</div>')
      ..write('</div>');
  }
  puffer.write('</div>');

  puffer.write('<p class="fuss">Erstellt am '
      '${Formatters.date(DateTime.now())}. Die Beträge beruhen auf den in '
      'der App erfassten Kosten, Kilometerständen und Fahrten.</p>');

  puffer.write('</body></html>');

  // Über einen Blob und nicht über document.write: Derselbe Weg wie beim
  // FIFO-Inventurreport, und der einzige, der im iOS-In-App-Browser
  // zuverlässig eine eigene Seite öffnet.
  final blob = html.Blob([puffer.toString()], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}

/// Reihenfolge und Beschriftung der Kostenarten im PDF.
const _kostenarten = <MapEntry<String, String>>[
  MapEntry('tanken', 'Tanken'),
  MapEntry('versicherung', 'Versicherung'),
  MapEntry('kfz_steuer', 'Kfz-Steuer'),
  MapEntry('waesche', 'Autowäsche'),
  MapEntry('reparatur', 'Reparaturen'),
  MapEntry('leasing', 'Leasingraten'),
  MapEntry('abschreibung', 'Abschreibung'),
  MapEntry('sonstiges', 'Sonstiges'),
];

String? _bildAus(List<Map<String, dynamic>>? decisions, String name) {
  if (decisions == null) return null;
  for (final d in decisions) {
    if ('${d['full_name'] ?? ''}' == name) {
      final url = '${d['signature_url'] ?? ''}';
      if (url.isNotEmpty) return url;
    }
  }
  return null;
}

double _num(dynamic v) {
  if (v == null) return 0;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString()) ?? 0;
}

String _eur(double v) => Formatters.euro(v);

String _eurOderStrich(dynamic v) => v == null ? '—' : Formatters.euro(_num(v));

String _km(dynamic v) {
  if (v == null) return '—';
  final n = _num(v);
  final text = n == n.roundToDouble()
      ? n.round().toString()
      : n.toStringAsFixed(1).replaceAll('.', ',');
  return '$text km';
}

String _satz(dynamic v) {
  if (v == null) return '—';
  // Vier Nachkommastellen, so wie die Datenbank rechnet: Bei dreistelligen
  // Strecken verschiebt schon die dritte Stelle den Betrag um Cent.
  return '${_num(v).toStringAsFixed(4).replaceAll('.', ',')} €';
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
  @page { size: A4 portrait; margin: 18mm 14mm; }
  body { font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
         font-size: 10pt; color: #202321; margin: 0; }
  h1 { font-size: 14pt; font-weight: 800; margin: 0 0 4pt 0; }
  h2 { font-size: 11pt; font-weight: 700; margin: 16pt 0 4pt 0; }
  .stammdaten { font-size: 8.5pt; color: #4A4844; margin: 0 0 14pt 0;
                line-height: 1.45; }
  table { width: 100%; border-collapse: collapse; margin-top: 4pt; }
  th, td { border: 0.5pt solid #C9C4BC; padding: 3.5pt 5pt;
           vertical-align: top; }
  th { background: #F7F5F1; font-weight: 700; font-size: 9pt; }
  .l { text-align: left; }
  .r { text-align: right; white-space: nowrap; }
  .klein { font-weight: 400; font-size: 7.5pt; color: #6E6A66; }
  .summe td { font-weight: 800; background: #FBF9F5; }
  .leer { color: #6E6A66; font-style: italic; }
  .hinweis { font-size: 8pt; color: #4A4844; margin: 6pt 0 0 0;
             line-height: 1.4; }
  .warnung { font-size: 8.5pt; color: #B31C1C; margin: 6pt 0 0 0; }
  .fahrten th, .fahrten td { font-size: 9pt; }
  .unterschriften { display: flex; gap: 24mm; margin-top: 22mm;
                    page-break-inside: avoid; }
  .feld { flex: 1; }
  .signatur { display: block; max-height: 16mm; max-width: 100%;
              margin-bottom: 1pt; }
  .linie { border-bottom: 0.75pt solid #202321; height: 0; }
  .name { font-size: 9pt; font-weight: 700; margin-top: 3pt; }
  .rolle { font-size: 8pt; color: #6E6A66; }
  .fuss { font-size: 7.5pt; color: #6E6A66; margin-top: 10mm; }
  .stempel { float: right; border: 1.5pt solid #5C9A3F; color: #5C9A3F;
             font-weight: 800; font-size: 12pt; padding: 3pt 10pt;
             transform: rotate(-4deg); letter-spacing: 1pt; }
''';
