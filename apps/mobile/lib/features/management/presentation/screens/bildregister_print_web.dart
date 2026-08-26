// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

import '../../../../core/utils/formatters.dart';

/// Öffnet das Bildregister als druckbare A4-Seite in einem neuen Tab und ruft
/// window.print() auf.
///
/// Wozu ein Ausdruck: Das Register ist der Nachweis, den man vorlegt — bei
/// einer markenrechtlichen Abmahnung, gegenüber der Steuerberatung oder in
/// der Verfahrensdokumentation. Ein Bildschirm lässt sich nicht zur Akte
/// nehmen.
///
/// Querformat, anders als bei der Anlage PKW-Kosten: Das Register hat neun
/// Spalten, und im Hochformat wären sie so schmal, dass „Kennzeichnung
/// erforderlich" über vier Zeilen bricht.
bool get bildregisterDruckMoeglich => true;

Future<void> printBildregister({
  required Map<String, dynamic> daten,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
}) async {
  final bilder =
      (daten['bilder'] as List? ?? const []).cast<Map<String, dynamic>>();
  final kennzahlen =
      Map<String, dynamic>.from((daten['kennzahlen'] as Map?) ?? const {});
  final stand = DateTime.tryParse('${daten['stand'] ?? ''}') ?? DateTime.now();

  int z(String k) => (kennzahlen[k] as num?)?.toInt() ?? 0;

  final puffer = StringBuffer()
    ..write('<!doctype html><html lang="de"><head><meta charset="utf-8">')
    ..write('<title>Bildregister</title>')
    ..write('<style>${_stil()}</style></head>')
    ..write('<body onload="window.print()">')
    ..write('<div class="topbar"></div>')
    ..write('<div class="wrap">')
    ..write('<div class="brand">BÖRDESNACK24</div>');

  // ── Kopf ──────────────────────────────────────────────────────────────
  // Aufbau wie bei der Anlage PKW-Kosten: Titel fett und eine Stufe grösser,
  // darunter kleiner die Stammdaten, rechts die Einordnung.
  puffer
    ..write('<div class="head">')
    ..write('<div>')
    ..write('<h1>Bildregister — Herkunft und Bearbeitung der '
        'Produktbilder</h1>')
    ..write('<p class="stammdaten">')
    ..write('${_esc(firma)}<br>')
    ..write('Steuernummer: ${_esc(steuernummer)}<br>')
    ..write('USt-IdNr.: ${_esc(ustIdNr)}')
    ..write('</p>')
    ..write('</div>')
    ..write('<div class="meta">')
    ..write('<div><span class="meta-label">Stand</span>'
        '${Formatters.date(stand)}</div>')
    ..write('<div><span class="meta-label">Einträge</span>'
        '${z('gesamt')}</div>')
    ..write('<div><span class="meta-label">davon KI</span>'
        '${z('mit_ki')}</div>')
    ..write('<div><span class="meta-label">zu kennzeichnen</span>'
        '${z('kennzeichnungspflicht')}</div>')
    ..write('</div>')
    ..write('</div>');

  // ── Zweck ─────────────────────────────────────────────────────────────
  // Der Ausdruck geht an Leser, die den Bildschirm nie gesehen haben. Ohne
  // diesen Absatz ist es eine Tabelle ohne Anlass.
  puffer
    ..write('<h2>Zweck dieser Aufstellung</h2>')
    ..write('<p class="fliess">')
    ..write('Alle Produktbilder der Bördesnack24 GbR werden selbst '
        'aufgenommen. Diese Aufstellung hält je Bild fest, wer es wann '
        'aufgenommen hat, was daran bearbeitet wurde und ob dabei ein '
        'KI-System zum Einsatz kam. Sie dient dem urheberrechtlichen '
        'Nachweis der eigenen Aufnahme, der markenrechtlichen Abgrenzung '
        'gegenüber den abgebildeten Herstellern und der Prüfung der '
        'Kennzeichnungspflicht nach Art. 50 Abs. 4 der Verordnung (EU) '
        '2024/1689 (EU AI Act).')
    ..write('</p>')
    ..write('<p class="fliess">')
    ..write('Die abgebildeten Marken sind Eigentum der jeweiligen '
        'Rechteinhaber. Zwischen ihnen und der Bördesnack24 GbR besteht '
        'keine geschäftliche Verbindung; die Darstellung erfolgt allein zur '
        'Beschreibung der angebotenen Ware nach § 23 Abs. 1 Nr. 3 MarkenG '
        'und ist weder gesponsert noch anderweitig beauftragt.')
    ..write('</p>');

  // ── Tabelle ───────────────────────────────────────────────────────────
  puffer
    ..write('<h2>Einzelnachweis</h2>')
    ..write('<table><thead><tr>')
    ..write('<th class="l">Produkt</th>')
    ..write('<th class="l">Originalfoto</th>')
    ..write('<th class="l">Fotograf</th>')
    ..write('<th class="c">Aufnahme</th>')
    ..write('<th class="l">Bearbeitung</th>')
    ..write('<th class="l">KI-System</th>')
    ..write('<th class="c">Produkt<br><span class="klein">verändert</span></th>')
    ..write('<th class="c">Kennzeichnung<br>'
        '<span class="klein">erforderlich</span></th>')
    ..write('<th class="l">Freigabe</th>')
    ..write('</tr></thead><tbody>');

  if (bilder.isEmpty) {
    puffer.write('<tr><td colspan="9" class="leer">'
        'Noch kein Bild dokumentiert.</td></tr>');
  } else {
    for (final b in bilder) {
      final pflicht = b['kennzeichnung_noetig'] == true;
      final veraendert = b['produkt_veraendert'] == true;
      final freigabe = b['freigabe_am'];
      puffer
        ..write('<tr>')
        ..write('<td class="l"><b>${_esc('${b['produkt']}')}</b></td>')
        ..write('<td class="l">${_esc('${b['originalfoto']}')}</td>')
        ..write('<td class="l">${_esc('${b['fotograf']}')}</td>')
        ..write('<td class="c">${_datum(b['aufnahmedatum'])}</td>')
        ..write('<td class="l">${_esc('${b['bearbeitung'] ?? '—'}')}</td>')
        ..write('<td class="l">'
            '${b['ki_verwendet'] == true ? _esc('${b['ki_system']}') : 'keine KI'}'
            '</td>')
        ..write('<td class="c${veraendert ? ' achtung' : ''}">'
            '${veraendert ? 'Ja' : 'Nein'}</td>')
        ..write('<td class="c${pflicht ? ' achtung' : ''}">'
            '${pflicht ? 'Ja' : 'Nein'}</td>')
        ..write('<td class="l">'
            '${freigabe == null ? '<span class="leer">offen</span>' : '${_esc('${b['freigegeben_von']}')}<br><span class="klein-grau">${_datum(freigabe)}</span>'}'
            '</td>')
        ..write('</tr>');
    }
  }
  puffer.write('</tbody></table>');

  // ── Regel, nach der die letzte Spalte entsteht ────────────────────────
  // Ohne sie wäre „Nein" bei einem Bild mit KI-Bearbeitung eine Behauptung.
  puffer
    ..write('<p class="hinweis">')
    ..write('Die Spalte „Kennzeichnung erforderlich" wird nicht eingetragen, '
        'sondern gerechnet: Sie steht auf „Ja", wenn ein KI-System '
        'eingesetzt wurde UND dabei das Produkt verändert, ein Produkt neu '
        'erzeugt oder eine Umgebung erzeugt wurde. Rein technische '
        'Bearbeitungen — Freistellen, Zuschneiden, Helligkeit — begründen '
        'keine Kennzeichnungspflicht, weil das Bild den Gegenstand weiterhin '
        'so zeigt, wie er ist.')
    ..write('</p>');

  if (z('ohne_art50_pruefung') > 0 || z('ohne_freigabe') > 0) {
    puffer
      ..write('<p class="warnung">')
      ..write('Offen: ${z('ohne_art50_pruefung')} Eintrag/Einträge ohne '
          'Prüfung nach Art. 50, ${z('ohne_freigabe')} ohne Freigabe.')
      ..write('</p>');
  }

  // ── Unterschrift ──────────────────────────────────────────────────────
  puffer
    ..write('<div class="unterschriften">')
    ..write('<div class="feld">')
    ..write('<div class="sig-box"></div>')
    ..write('<div class="linie"></div>')
    ..write('<div class="name">Pia Blume</div>')
    ..write('<div class="rolle">Gesellschafterin</div>')
    ..write('</div>')
    ..write('<div class="feld">')
    ..write('<div class="sig-box"></div>')
    ..write('<div class="linie"></div>')
    ..write('<div class="name">Philipp Blume</div>')
    ..write('<div class="rolle">Gesellschafter</div>')
    ..write('</div>')
    ..write('</div>');

  puffer
    ..write('<div class="fuss">')
    ..write('${_esc(firma)} · Erstellt am ${Formatters.date(stand)} · '
        'Diese Aufstellung wird bei jeder Änderung neu erzeugt.')
    ..write('</div>')
    ..write('</div></body></html>');

  // Über einen Blob und nicht über document.write: derselbe Weg wie beim
  // FIFO-Inventurreport und der Anlage PKW-Kosten.
  final blob = html.Blob([puffer.toString()], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
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

/// Hausstil der Bördesnack24-Belege — dieselben Werte wie in
/// `anlage_pkw_print_web.dart`, damit beide Ausdrucke als ein Haus ankommen.
///
/// Zwei Abweichungen, beide begründet:
///   • Querformat, weil das Register neun Spalten hat.
///   • Ein Fliesstext-Absatz („.fliess"), den die Anlage PKW nicht braucht:
///     Dieser Ausdruck muss seinen eigenen Anlass erklären.
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
  .meta .meta-label { flex: 0 0 26mm; color: #14110E; font-weight: 700; }

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
