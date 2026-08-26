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
    ..write('<body onload="window.print()">')
    // Gold-Balken und Wortmarke wie im FIFO-Inventurreport: Beide Anlagen
    // gehen an dieselbe Steuerberatung und sollen als ein Haus erkennbar
    // sein.
    ..write('<div class="topbar"></div>')
    ..write('<div class="wrap">')
    ..write('<div class="brand">BÖRDESNACK24</div>');

  // ── Kopf ────────────────────────────────────────────────────────────────
  // Titel fett und eine Stufe grösser, darunter kleiner die Stammdaten, so
  // vom Auftraggeber vorgegeben. Rechts steht, was den Beleg einordnet.
  puffer
    ..write('<div class="head">')
    ..write('<div>')
    ..write('<h1>Anlage zur Ermittlung der individuellen '
        'PKW-Kosten $jahr</h1>')
    ..write('<p class="stammdaten">')
    ..write('${_esc(firma)}<br>')
    ..write('Steuernummer: ${_esc(steuernummer)}<br>')
    ..write('USt-IdNr.: ${_esc(ustIdNr)}')
    ..write('</p>')
    ..write('</div>')
    ..write('<div class="meta">')
    ..write('<div><span class="meta-label">Zeitraum</span>'
        '01.01.$jahr bis 31.12.$jahr</div>')
    ..write('<div><span class="meta-label">Ermittlung</span>'
        'Bruttokosten je gefahrenem Kilometer</div>')
    ..write('<div><span class="meta-label">Erstellt am</span>'
        '${Formatters.date(DateTime.now())}</div>')
    ..write('</div>')
    ..write('</div>');

  if (freigegeben) {
    puffer
      ..write('<section class="stamp">')
      ..write('<span class="stamp-badge">FREIGEGEBEN</span>')
      ..write('<div class="stamp-note">Von beiden Gesellschaftern signiert '
          'und freigegeben. Korrekturen sind für dieses Jahr gesperrt.</div>')
      ..write('</section>');
  }

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
    ..write('<th class="c" colspan="${fahrzeuge.length}">'
        'Kosten je Kilometer</th>')
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
    // Ein Kasten mit Vorlauf statt einer nackten Linie: So bleibt Platz,
    // von Hand zu unterschreiben, wenn keine hinterlegte Signatur da ist.
    puffer
      ..write('<div class="feld">')
      ..write('<div class="sig-box">')
      ..write(
        bild == null ? '' : '<img class="signatur" src="${_esc(bild)}" alt="">',
      )
      ..write('</div>')
      ..write('<div class="linie"></div>')
      ..write('<div class="name">${_esc(name)}</div>')
      ..write('<div class="rolle">${_esc(rolle)}</div>')
      ..write('</div>');
  }
  puffer.write('</div>');

  // Das Erstellungsdatum steht schon im Kopf. Hier nur noch, worauf die
  // Zahlen beruhen, damit die Steuerberatung die Quelle kennt.
  puffer.write('<p class="fuss">Die Beträge beruhen auf den in der App '
      'erfassten Kosten, Kilometerständen und Fahrten der Bördesnack24 GbR. '
      'Alle Angaben brutto.</p>');

  puffer.write('</div></body></html>');

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

/// Hausstil der Bördesnack24-Belege.
///
/// Abgeleitet vom FIFO-Inventurreport, damit beide Anlagen bei derselben
/// Steuerberatung als ein Haus ankommen: Gold-Balken über der Seite,
/// Wortmarke, Ink-Tabellenköpfe, goldener Unterstrich an den Überschriften.
///
/// Dazu die Vorgaben des Branding Guide v1.0 für formelle Dokumente: A4 mit
/// 25 mm Seitenrändern, Arial, Beträge rechtsbündig, Hinweise grau und
/// kursiv, Unterschriftsfelder mit Vorlauf.
///
/// EINE ABWEICHUNG, BEWUSST: Der Guide setzt für Reports einen zweispaltigen
/// Kopf mit den Stammdaten RECHTS. Der Auftraggeber hat die Stammdaten
/// ausdrücklich unter der Überschrift und in kleinerer Schrift verlangt.
/// Seine Vorgabe gilt; rechts steht stattdessen, was den Beleg einordnet.
String _stil() => '''
  @page { size: A4 portrait; margin: 0 25mm 18mm 25mm; }
  * { box-sizing: border-box; }
  body { font-family: Arial, "Liberation Sans", -apple-system,
                      "Segoe UI", Roboto, sans-serif;
         color: #14110E; margin: 0; padding: 0; font-size: 10pt; }

  /* Gold-Balken über der Breite des Satzspiegels, NICHT randabfallend.
     Der FIFO-Report zieht ihn über negative Ränder bis an den Papierrand;
     im Druck beschneidet Chrome das am Seitenrand, und übrig blieb ein
     Balken, der willkürlich kürzer war als der Text darunter. Am echten
     PDF nachgesehen, nicht vermutet. Über den Satzspiegel gezogen sitzt er
     in jeder Druck-Engine gleich. */
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
  /* Kein `nowrap`: Die längste Zeile hing sonst am rechten Rand. Der Block
     bleibt linksbündig, damit alle Werte an derselben Kante beginnen. */
  .meta { font-size: 8.5pt; color: #6f6a5b; text-align: left;
          max-width: 74mm; line-height: 1.45; }
  .meta > div { display: flex; gap: 2.5mm; margin-bottom: 1pt; }
  .meta .meta-label { flex: 0 0 18mm; color: #14110E; font-weight: 700; }

  h2 { font-size: 11pt; margin: 14pt 0 4pt 0; color: #14110E;
       font-weight: 800;
       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }

  table { width: 100%; border-collapse: collapse; margin-top: 4pt; }
  th, td { padding: 3.5pt 6pt; text-align: left;
           border-bottom: 1pt solid #E8E2D6; vertical-align: top; }
  thead th { background: #14110E; color: #F9F5EC; font-weight: 700;
             font-size: 9pt; border-bottom: none; }
  /* Kopf wiederholen, wenn eine Tabelle umbricht. */
  thead { display: table-header-group; }
  tr { page-break-inside: avoid; }
  .l { text-align: left; }
  .c { text-align: center; }
  .r { text-align: right; white-space: nowrap; }
  .klein { font-weight: 400; font-size: 7.5pt; color: #C9C4BC; }
  .summe td { background: #FFF5CC; font-weight: 800;
              border-top: 1pt solid #14110E;
              border-bottom: 1pt solid #14110E; }
  .leer { color: #6f6a5b; font-style: italic; }

  /* Hinweise: grau, kursiv, zwei Punkt kleiner als der Fliesstext. */
  .hinweis { font-size: 8pt; color: #595959; font-style: italic;
             margin: 5pt 0 0 0; line-height: 1.4; }
  .warnung { font-size: 9pt; color: #B2311C; font-weight: 700;
             margin: 6pt 0 0 0; }

  /* Freigabe-Stempel, Form wie im FIFO-Report. */
  section.stamp { margin: 10pt 0 2pt 0; padding: 6pt 10pt;
                  border: 1pt solid #5C9A3F; border-radius: 6pt;
                  background: #EEF6E8; }
  section.stamp .stamp-badge { display: inline-block; font-weight: 800;
                               letter-spacing: 1px; color: #3E7A25;
                               font-size: 11pt; }
  section.stamp .stamp-note { color: #14110E; font-size: 9pt;
                              margin-top: 2pt; }

  /* Unterschriften mit Vorlauf, damit von Hand gezeichnet werden kann. */
  .unterschriften { display: flex; gap: 18mm; margin-top: 18mm;
                    page-break-inside: avoid; }
  .feld { flex: 1; }
  .sig-box { height: 22mm; border: 1pt solid #E8E2D6; border-radius: 6pt;
             background: #FAF6ED; padding: 5pt; display: flex;
             align-items: flex-end; }
  .signatur { max-height: 18mm; max-width: 100%; object-fit: contain; }
  .linie { border-bottom: 1pt solid #14110E; height: 0; margin-top: 3pt; }
  .name { font-size: 9.5pt; font-weight: 700; margin-top: 3pt; }
  .rolle { font-size: 8pt; color: #6f6a5b; }

  .fuss { font-size: 7.5pt; color: #6f6a5b; margin-top: 12mm;
          border-top: 1pt solid #E8E2D6; padding-top: 4pt; }
''';
