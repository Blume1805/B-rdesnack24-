import '../../../../core/druck/druck_regeln.dart';
import '../../../../core/utils/formatters.dart';

/// Baut die „Anlage zur Ermittlung der individuellen PKW-Kosten" als
/// druckbares HTML (A4 hoch). Ohne Browser-Abhängigkeit, damit sie
/// getestet und als PDF nachgerendert werden kann; geöffnet wird sie in
/// `anlage_pkw_print_web.dart`.
///
/// Aufbau nach Vorgabe des Auftraggebers vom 25.08.2026:
///   • Überschrift fett und eine Stufe grösser als der Fliesstext, mit Jahr
///   • darunter kleiner die Stammdaten (Firma, Steuernummer, USt-IdNr.)
///   • Tabelle je Fahrzeug mit den Kostenarten, Kilometerständen zum 01.01.
///     und 31.12. und dem daraus ermittelten Satz je Kilometer
///   • Tabelle der betrieblichen Fahrten mit einer Spalte je Kennzeichen,
///     in der der jeweilige Satz erscheint
///   • Summe als Nutzungseinlage
///   • zwei Unterschriftsfelder für die Gesellschafter
///
/// Seitenumbruch (Befund 19.11.2026): Ergebnis, Unterschriften und Fuß
/// bilden einen unteilbaren Schlussblock; jede Überschrift bleibt bei ihrem
/// Inhalt (`druckUmbruchCss`). Kostenarten ohne Betrag erscheinen nicht als
/// leere Zeile, sondern werden im Hinweis genannt.
String anlagePkwHtml({
  required Map<String, dynamic> daten,
  required List<Map<String, dynamic>> signatures,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
  List<Map<String, dynamic>>? approvalDecisions,
  DateTime? erstelltAm,
  bool druckenBeimLaden = true,
}) {
  final jahr = daten['jahr'];
  final fahrzeuge =
      (daten['fahrzeuge'] as List? ?? const []).cast<Map<String, dynamic>>();
  final fahrten =
      (daten['fahrten'] as List? ?? const []).cast<Map<String, dynamic>>();
  final einlage = _num(daten['nutzungseinlage']);
  final ohneSatz = _num(daten['fahrten_ohne_satz']).toInt();
  final freigegeben = approvalDecisions != null && approvalDecisions.isNotEmpty;

  double kosten(Map<String, dynamic> f, String art) =>
      (f['kosten'] as List? ?? const [])
          .cast<Map<String, dynamic>>()
          .where((k) => k['kostenart'] == art)
          .fold<double>(0, (s, k) => s + _num(k['betrag_brutto']));

  final mitBetrag = _kostenarten
      .where((a) => fahrzeuge.any((f) => kosten(f, a.key) != 0))
      .toList();
  final ohneBetrag = _kostenarten
      .where((a) => !mitBetrag.contains(a))
      .map((a) => a.value)
      .toList();

  final p = StringBuffer()
    ..write('<!doctype html><html lang="de"><head><meta charset="utf-8">')
    ..write('<title>Anlage PKW-Kosten $jahr</title>')
    ..write('<style>${_stil()}$druckUmbruchCss</style></head>')
    // `onload` statt eines eigenen print()-Aufrufs: Der Druckdialog
    // erscheint erst, wenn die Seite wirklich steht.
    ..write(druckenBeimLaden ? '<body onload="window.print()">' : '<body>')
    ..write('<div class="topbar"></div>')
    ..write('<div class="brand">BÖRDESNACK24</div>');

  // ── Kopf ────────────────────────────────────────────────────────────────
  // Titel fett und eine Stufe grösser, darunter kleiner die Stammdaten, so
  // vom Auftraggeber vorgegeben. Darunter eine Leiste über die volle Breite
  // mit dem, was den Beleg einordnet. Vorher stand sie als schmale Spalte
  // rechts neben dem Titel, und „Zeitraum" brach dreizeilig um.
  p
    ..write('<header class="kopfbereich">')
    ..write('<h1>Anlage zur Ermittlung der individuellen PKW-Kosten $jahr</h1>')
    ..write('<p class="stammdaten">${htmlEsc(firma)} · '
        'Steuernummer: ${htmlEsc(steuernummer)} · '
        'USt-IdNr.: ${htmlEsc(ustIdNr)}</p>')
    ..write('<div class="meta">')
    ..write('<div><span class="meta-label">Zeitraum</span>'
        '<span>01.01.$jahr bis 31.12.$jahr</span></div>')
    ..write('<div><span class="meta-label">Ermittlung</span>'
        '<span>Bruttokosten je gefahrenem Kilometer</span></div>')
    ..write('<div><span class="meta-label">Erstellt am</span>'
        '<span>${Formatters.date(erstelltAm ?? DateTime.now())}</span></div>')
    ..write('</div>')
    ..write('</header>');

  if (freigegeben) {
    p.write('<section class="stamp"><span class="stamp-badge">FREIGEGEBEN'
        '</span><div class="stamp-note">Von beiden Gesellschaftern signiert '
        'und freigegeben. Korrekturen sind für dieses Jahr gesperrt.</div>'
        '</section>');
  }

  // ── Fahrzeuge und Kilometersatz ─────────────────────────────────────────
  p
    ..write('<section class="abschnitt">')
    ..write('<h2>Fahrzeugkosten und Satz je Kilometer</h2>')
    ..write('<table><thead><tr><th class="l">Position</th>');
  for (final f in fahrzeuge) {
    p.write('<th class="r">${htmlEsc(f['kennzeichen'])}</th>');
  }
  p.write('</tr></thead><tbody>');
  for (final art in mitBetrag) {
    p.write('<tr><td class="l">${htmlEsc(art.value)}</td>');
    for (final f in fahrzeuge) {
      final s = kosten(f, art.key);
      p.write('<td class="r">${s == 0 ? '—' : _eur(s)}</td>');
    }
    p.write('</tr>');
  }
  void zeile(
    String label,
    String Function(Map<String, dynamic>) wert, {
    bool summe = false,
    bool trenner = false,
  }) {
    final klassen = [if (summe) 'summe', if (trenner) 'trenner'].join(' ');
    p.write('<tr${klassen.isEmpty ? '' : ' class="$klassen"'}>'
        '<td class="l">$label</td>');
    for (final f in fahrzeuge) {
      p.write('<td class="r">${wert(f)}</td>');
    }
    p.write('</tr>');
  }

  zeile(
    'Gesamtkosten (brutto)',
    (f) => _eur(_num(f['gesamtkosten'])),
    summe: true,
  );
  zeile(
    'Kilometerstand 01.01.',
    (f) => _km(f['km_stand_anfang']),
    trenner: true,
  );
  zeile('Kilometerstand 31.12.', (f) => _km(f['km_stand_ende']));
  zeile('Gefahrene Kilometer', (f) => _km(f['km_gefahren']));
  zeile('Kosten je Kilometer', (f) => _satz(f['satz_je_km']), summe: true);
  p
    ..write('</tbody></table>')
    ..write('<p class="hinweis">Der Satz je Kilometer ergibt sich aus den '
        'Gesamtkosten geteilt durch die in diesem Jahr gefahrenen Kilometer. '
        'Die Beträge sind Bruttobeträge: Bei einem privaten Fahrzeug besteht '
        'kein Vorsteuerabzug, die Umsatzsteuer gehört damit zu den '
        'tatsächlich getragenen Kosten.'
        '${ohneBetrag.isEmpty ? '' : ' Ohne Beträge in $jahr: '
            '${htmlEsc(ohneBetrag.join(', '))}.'}</p>')
    ..write('</section>');

  // ── Betriebliche Fahrten und Schluss ────────────────────────────────────
  // Die Liste darf umbrechen; der Tabellenkopf wiederholt sich dann, und die
  // Überschrift hält Platz für die ersten Zeilen frei. Der Schluss
  // (Ergebnis, Unterschriften, Fuß) steht als letzte Zeile IN der Tabelle,
  // in einer unteilbaren Zeilengruppe mit den letzten drei Fahrten und der
  // Summe: Muss er auf eine neue Seite, nimmt er diese Zeilen und den
  // Tabellenkopf mit, statt allein auf einem fast leeren Blatt zu stehen.
  final spalten = 4 + fahrzeuge.length;
  final ende = fahrten.length < 3 ? 0 : fahrten.length - 3;
  p
    ..write('<section class="abschnitt lang">')
    ..write('<h2>Betrieblich gefahrene Strecken</h2>')
    ..write('<table class="fahrten"><thead><tr>')
    ..write('<th class="l" rowspan="2">Datum</th>')
    ..write('<th class="l" rowspan="2">Anlass der Fahrt</th>')
    ..write('<th class="r" rowspan="2">Kilometer<br><span class="klein">'
        'Hin- und Rückweg</span></th>')
    ..write('<th class="c" colspan="${fahrzeuge.length}">'
        'Kosten je Kilometer</th>')
    ..write('<th class="r" rowspan="2">Betrag</th>')
    ..write('</tr><tr>');
  for (final f in fahrzeuge) {
    p.write('<th class="r">${htmlEsc(f['kennzeichen'])}</th>');
  }
  p.write('</tr></thead><tbody>');

  if (fahrten.isEmpty) {
    p.write('</tbody><tbody class="ende">');
    p.write('<tr><td class="l leer" colspan="$spalten">'
        'Für $jahr ist keine betriebliche Fahrt erfasst.</td></tr>');
  }
  for (var i = 0; i < fahrten.length; i++) {
    final t = fahrten[i];
    if (i == ende) p.write('</tbody><tbody class="ende">');
    p
      ..write('<tr>')
      ..write('<td class="l">${_datum(t['fahrt_datum'])}</td>')
      ..write('<td class="l">${htmlEsc(t['anlass'])}</td>')
      ..write('<td class="r">${_km(t['kilometer'])}</td>');
    // Der Satz steht in der Spalte des Fahrzeugs, mit dem gefahren wurde.
    for (final f in fahrzeuge) {
      final passt = f['id'] == t['pkw_id'];
      p.write('<td class="r">${passt ? _satz(t['satz_je_km']) : ''}</td>');
    }
    p.write('<td class="r">${_eurOderStrich(t['betrag'])}</td></tr>');
  }
  if (fahrten.isNotEmpty) {
    p.write('<tr class="summe"><td class="l" '
        'colspan="${3 + fahrzeuge.length}">Summe der betrieblichen Fahrten'
        '</td><td class="r">${_eur(einlage)}</td></tr>');
  }

  p
    ..write('<tr class="schluss-zeile"><td colspan="$spalten">')
    ..write('<div class="schluss">')
    ..write('<div class="ergebnis"><span class="ergebnis-label">'
        'Nutzungseinlage $jahr</span><span class="ergebnis-wert">'
        '${_eur(einlage)}</span></div>');
  if (ohneSatz > 0) {
    p.write('<p class="warnung">$ohneSatz Fahrt'
        '${ohneSatz == 1 ? '' : 'en'} ohne Kilometersatz: Für das '
        'betreffende Fahrzeug fehlen Kilometerstände oder Kosten. '
        'Diese Fahrten sind in der Summe nicht enthalten.</p>');
  }
  p.write('<div class="unterschriften">');
  for (final s in signatures) {
    final name = '${s['full_name'] ?? ''}';
    final rolle = '${s['role_label'] ?? ''}';
    final bild = freigegeben ? _bildAus(approvalDecisions, name) : null;
    // Ein Kasten mit Vorlauf statt einer nackten Linie: So bleibt Platz,
    // von Hand zu unterschreiben, wenn keine hinterlegte Signatur da ist.
    p.write('<div class="feld"><div class="sig-box">'
        '${bild == null ? '' : '<img class="signatur" src="${htmlEsc(bild)}" alt="">'}'
        '</div><div class="linie"></div>'
        '<div class="name">${htmlEsc(name)}</div>'
        '<div class="rolle">${htmlEsc(rolle)}</div></div>');
  }
  p
    ..write('</div>')
    // Das Erstellungsdatum steht schon im Kopf. Hier nur, worauf die Zahlen
    // beruhen, damit die Steuerberatung die Quelle kennt.
    ..write('<p class="fuss">Die Beträge beruhen auf den in der App '
        'erfassten Kosten, Kilometerständen und Fahrten der Bördesnack24 GbR. '
        'Alle Angaben brutto.</p>')
    ..write('</div></td></tr></tbody></table></section>')
    ..write('</body></html>');
  return p.toString();
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
  final ganz = n == n.roundToDouble();
  // Tausenderpunkt wie bei Beträgen: „29.028 km" statt „29028 km".
  final text =
      ganz ? _tausender(n.round()) : n.toStringAsFixed(1).replaceAll('.', ',');
  return '$text km';
}

String _tausender(int n) {
  final s = n.abs().toString();
  final b = StringBuffer(n < 0 ? '-' : '');
  for (var i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 == 0) b.write('.');
    b.write(s[i]);
  }
  return b.toString();
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

/// Hausstil der Bördesnack24-Belege, abgeleitet vom FIFO-Inventurreport
/// (Gold-Balken, Wortmarke, dunkle Tabellenköpfe, goldener Unterstrich),
/// dazu die Vorgaben des Branding Guide v1.0 für formelle Dokumente: A4 mit
/// 25 mm Seitenrändern, Arial, Beträge rechtsbündig, Hinweise grau und
/// kursiv, Unterschriftsfelder mit Vorlauf.
///
/// Bewusste Abweichung vom Guide: Die Stammdaten stehen auf Wunsch des
/// Auftraggebers unter der Überschrift, nicht rechts.
String _stil() => '''
  /* Oben randlos NUR auf der ersten Seite (Gold-Balken am Papierrand);
     Folgeseiten bekommen den normalen Rand. */
  @page { size: A4 portrait; margin: 16mm 22mm 16mm 22mm; }
  @page :first { margin-top: 0; }
  * { box-sizing: border-box; }
  body { font-family: Arial, "Liberation Sans", -apple-system,
                      "Segoe UI", Roboto, sans-serif;
         color: #14110E; margin: 0; padding: 0; font-size: 9.5pt;
         line-height: 1.35; }

  /* Gold-Balken über der Breite des Satzspiegels, nicht randabfallend:
     Negative Ränder beschneidet die Druck-Engine am Seitenrand. */
  .topbar { height: 4mm; background: #FDC102; margin: 0 0 6mm;
            border-radius: 1pt; }
  .brand { font-weight: 900; letter-spacing: 2px; font-size: 9.5pt;
           margin-bottom: 5pt; }

  .kopfbereich { border-bottom: 1.5pt solid #FDC102; padding-bottom: 5pt; }
  h1 { margin: 0 0 3pt 0; font-size: 15pt; font-weight: 800;
       letter-spacing: 0.2px; color: #B8860B; line-height: 1.2; }
  .stammdaten { font-size: 8.5pt; color: #6f6a5b; margin: 0; }
  .meta { display: grid; grid-template-columns: 1fr 1.6fr 1fr; gap: 4mm;
          margin-top: 5pt; font-size: 8.5pt; color: #14110E; }
  .meta > div { display: flex; flex-direction: column; }
  .meta .meta-label { font-size: 7pt; font-weight: 700; color: #6f6a5b;
                      text-transform: uppercase; letter-spacing: 0.6px; }

  h2 { font-size: 10.5pt; margin: 12pt 0 3pt 0; color: #14110E;
       font-weight: 800;
       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }

  table { width: 100%; border-collapse: collapse; margin-top: 3pt; }
  th, td { padding: 2.6pt 6pt; text-align: left;
           border-bottom: 0.75pt solid #E8E2D6; vertical-align: top; }
  thead th { background: #14110E; color: #F9F5EC; font-weight: 700;
             font-size: 8.5pt; border-bottom: none; }
  .l { text-align: left; }
  .c { text-align: center; }
  .r { text-align: right; white-space: nowrap; }
  .klein { font-weight: 400; font-size: 7pt; color: #C9C4BC; }
  .summe td { background: #FFF5CC; font-weight: 800;
              border-top: 1pt solid #14110E;
              border-bottom: 1pt solid #14110E; }
  .trenner td { border-top: 1pt solid #14110E; }
  .leer { color: #6f6a5b; font-style: italic; }
  /* Fahrten: Datum und Zahlenspalten nur so breit wie nötig, der Anlass
     bekommt den Rest (vorher brach er dreizeilig um, während rechts Platz
     frei blieb). */
  table.fahrten td:first-child, table.fahrten th:first-child,
  table.fahrten td.r, table.fahrten th.r { width: 1%; white-space: nowrap; }

  /* Hinweise: grau, kursiv, kleiner als der Fliesstext. */
  .hinweis { font-size: 7.5pt; color: #595959; font-style: italic;
             margin: 4pt 0 0 0; line-height: 1.4; }
  .warnung { font-size: 8.5pt; color: #B2311C; font-weight: 700;
             margin: 5pt 0 0 0; }

  section.stamp { margin: 8pt 0 2pt 0; padding: 5pt 10pt;
                  border: 1pt solid #5C9A3F; border-radius: 6pt;
                  background: #EEF6E8; }
  section.stamp .stamp-badge { display: inline-block; font-weight: 800;
                               letter-spacing: 1px; color: #3E7A25;
                               font-size: 10.5pt; }
  section.stamp .stamp-note { color: #14110E; font-size: 8.5pt;
                              margin-top: 2pt; }

  /* Schluss: letzte Zeile der Fahrtentabelle, ohne Tabellenoptik. Die
     Zeilengruppe .ende (letzte Fahrten, Summe, Schluss) ist unteilbar. */
  tbody.ende { page-break-inside: avoid; break-inside: avoid; }
  tr.schluss-zeile > td { padding: 0; border: none; background: none; }
  .schluss { padding-top: 12pt; }
  .ergebnis { display: flex; justify-content: space-between;
              align-items: baseline; background: #FDC102;
              border-radius: 6pt; padding: 6pt 10pt; }
  .ergebnis-label { font-weight: 800; font-size: 10pt; }
  .ergebnis-wert { font-weight: 900; font-size: 14pt; }
  .unterschriften { display: flex; gap: 16mm; margin-top: 12mm; }
  .feld { flex: 1; }
  .sig-box { height: 18mm; border: 1pt solid #E8E2D6; border-radius: 6pt;
             background: #FAF6ED; padding: 4pt; display: flex;
             align-items: flex-end; }
  .signatur { max-height: 15mm; max-width: 100%; object-fit: contain; }
  .linie { border-bottom: 1pt solid #14110E; height: 0; margin-top: 3pt; }
  .name { font-size: 9pt; font-weight: 700; margin-top: 3pt; }
  .rolle { font-size: 7.5pt; color: #6f6a5b; }
  .fuss { font-size: 7pt; color: #6f6a5b; margin-top: 8mm;
          border-top: 0.75pt solid #E8E2D6; padding-top: 3pt; }
''';
