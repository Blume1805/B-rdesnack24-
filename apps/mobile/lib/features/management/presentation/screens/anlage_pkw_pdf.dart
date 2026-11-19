import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import '../../../../core/druck/pdf_hausstil.dart';
import '../../../../core/utils/formatters.dart';
import 'anlage_pkw_werte.dart';

/// Die „Anlage zur Ermittlung der individuellen PKW-Kosten" als PDF-Datei
/// (A4 hoch): Kopf mit Stammdaten und Kopfleiste,
/// Fahrzeugkosten mit Satz je Kilometer, betriebliche Fahrten, Ergebnis
/// und Unterschriften.
///
/// Der Schluss (Nutzungseinlage, Unterschriften, Fuß) nimmt die letzten
/// drei Fahrten und die Summe mit, wenn er auf eine neue Seite muss
/// (Befund 19.11.2026: Seite 2 trug sonst nur Überschrift und
/// Unterschriften).
///
/// [signaturBilder]: hinterlegte Unterschriften je Name, vom Aufrufer
/// geladen (nur bei freigegebenen Anlagen).
Future<Uint8List> anlagePkwPdf({
  required Map<String, dynamic> daten,
  required List<Map<String, dynamic>> signatures,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
  required PdfSchriften schriften,
  List<Map<String, dynamic>>? approvalDecisions,
  Map<String, pw.ImageProvider> signaturBilder = const {},
  DateTime? erstelltAm,
}) {
  final h = PdfHausstil(schriften, grundgroesse: 9);
  final jahr = daten['jahr'];
  final fahrzeuge =
      (daten['fahrzeuge'] as List? ?? const []).cast<Map<String, dynamic>>();
  final fahrten =
      (daten['fahrten'] as List? ?? const []).cast<Map<String, dynamic>>();
  final einlage = pkwZahl(daten['nutzungseinlage']);
  final ohneSatz = pkwZahl(daten['fahrten_ohne_satz']).toInt();
  final freigegeben = approvalDecisions != null && approvalDecisions.isNotEmpty;
  final titel = 'Anlage PKW-Kosten $jahr';

  final mitBetrag = pkwKostenarten
      .where((a) => fahrzeuge.any((f) => pkwKosten(f, a.key) != 0))
      .toList();
  final ohneBetrag = pkwKostenarten
      .where((a) => !mitBetrag.contains(a))
      .map((a) => a.value)
      .toList();

  // ── Kopf ────────────────────────────────────────────────────────────────
  pw.Widget kopfleiste() {
    pw.Widget feld(String label, String wert, int flex) => pw.Expanded(
          flex: flex,
          child: pw.Column(
            crossAxisAlignment: pw.CrossAxisAlignment.start,
            children: [
              pw.Text(
                label.toUpperCase(),
                style: h.stil(
                  groesse: 6.5,
                  fett: true,
                  farbe: PdfFarben.grau,
                  sperrung: 0.6,
                ),
              ),
              pw.Text(wert, style: h.stil(groesse: 8.5)),
            ],
          ),
        );
    return pw.Row(
      crossAxisAlignment: pw.CrossAxisAlignment.start,
      children: [
        feld('Zeitraum', '01.01.$jahr bis 31.12.$jahr', 10),
        pw.SizedBox(width: 4 * PdfPageFormat.mm),
        feld('Ermittlung', 'Bruttokosten je gefahrenem Kilometer', 16),
        pw.SizedBox(width: 4 * PdfPageFormat.mm),
        feld(
          'Erstellt am',
          Formatters.date(erstelltAm ?? DateTime.now()),
          10,
        ),
      ],
    );
  }

  final kopf = pw.Container(
    padding: const pw.EdgeInsets.only(bottom: 5),
    decoration: const pw.BoxDecoration(
      border: pw.Border(
        bottom: pw.BorderSide(color: PdfFarben.gold, width: 1.5),
      ),
    ),
    child: pw.Column(
      crossAxisAlignment: pw.CrossAxisAlignment.start,
      children: [
        pw.Text(
          'Anlage zur Ermittlung der individuellen PKW-Kosten $jahr',
          style: h.stil(
            groesse: 15,
            extrafett: true,
            farbe: PdfFarben.goldDunkel,
          ),
        ),
        pw.SizedBox(height: 3),
        pw.Text(
          '$firma · Steuernummer: $steuernummer · USt-IdNr.: $ustIdNr',
          style: h.stil(groesse: 8.5, farbe: PdfFarben.grau),
        ),
        pw.SizedBox(height: 5),
        kopfleiste(),
      ],
    ),
  );

  // ── Fahrzeugkosten ──────────────────────────────────────────────────────
  final breitenFahrzeuge = <int, pw.TableColumnWidth>{
    0: const pw.FlexColumnWidth(),
    for (var i = 0; i < fahrzeuge.length; i++)
      i + 1: const pw.FixedColumnWidth(30 * PdfPageFormat.mm),
  };
  pw.TableRow fzZeile(
    String label,
    String Function(Map<String, dynamic>) wert, {
    PdfZeilenart art = PdfZeilenart.normal,
  }) =>
      h.zeile(
        [
          PdfZelle(label),
          for (final f in fahrzeuge) PdfZelle.zahl(wert(f)),
        ],
        art: art,
      );
  final fahrzeugTabelle = h.tabelle(
    breiten: breitenFahrzeuge,
    kopf: h.kopfzeile([
      const PdfZelle('Position'),
      for (final f in fahrzeuge) PdfZelle.zahl('${f['kennzeichen'] ?? ''}'),
    ]),
    zeilen: [
      for (final art in mitBetrag)
        fzZeile(art.value, (f) {
          final s = pkwKosten(f, art.key);
          return s == 0 ? '—' : pkwEuro(s);
        }),
      fzZeile(
        'Gesamtkosten (brutto)',
        (f) => pkwEuro(pkwZahl(f['gesamtkosten'])),
        art: PdfZeilenart.summe,
      ),
      fzZeile(
        'Kilometerstand 01.01.',
        (f) => pkwKm(f['km_stand_anfang']),
        art: PdfZeilenart.trenner,
      ),
      fzZeile('Kilometerstand 31.12.', (f) => pkwKm(f['km_stand_ende'])),
      fzZeile('Gefahrene Kilometer', (f) => pkwKm(f['km_gefahren'])),
      fzZeile(
        'Kosten je Kilometer',
        (f) => pkwSatz(f['satz_je_km']),
        art: PdfZeilenart.summe,
      ),
    ],
  );
  final fahrzeugHinweis = h.hinweis(
    'Der Satz je Kilometer ergibt sich aus den Gesamtkosten geteilt durch '
    'die in diesem Jahr gefahrenen Kilometer. Die Beträge sind '
    'Bruttobeträge: Bei einem privaten Fahrzeug besteht kein '
    'Vorsteuerabzug, die Umsatzsteuer gehört damit zu den tatsächlich '
    'getragenen Kosten.'
    '${ohneBetrag.isEmpty ? '' : ' Ohne Beträge in $jahr: '
        '${ohneBetrag.join(', ')}.'}',
  );

  // ── Fahrten ─────────────────────────────────────────────────────────────
  // Spalten: Datum | Anlass | Kilometer | je Fahrzeug der Satz | Betrag.
  // Datum und Zahlen nur so breit wie nötig, der Anlass bekommt den Rest.
  final nFz = fahrzeuge.length;
  final breitenFahrten = <int, pw.TableColumnWidth>{
    0: const pw.FixedColumnWidth(20 * PdfPageFormat.mm),
    1: const pw.FlexColumnWidth(),
    2: const pw.FixedColumnWidth(19 * PdfPageFormat.mm),
    for (var i = 0; i < nFz; i++)
      3 + i: const pw.FixedColumnWidth(22 * PdfPageFormat.mm),
    3 + nFz: const pw.FixedColumnWidth(20 * PdfPageFormat.mm),
  };
  // Kopfzeile als Funktion: Ein Baustein darf nur einmal im Dokument
  // stehen, die Bibliothek merkt sich seine Lage am Baustein selbst.
  pw.TableRow fahrtenKopf() => h.kopfzeile([
        const PdfZelle('Datum'),
        const PdfZelle('Anlass der Fahrt'),
        const PdfZelle.zahl('Kilometer', unterzeile: 'Hin und zurück'),
        for (final f in fahrzeuge)
          PdfZelle.zahl('Satz je km', unterzeile: '${f['kennzeichen'] ?? ''}'),
        const PdfZelle.zahl('Betrag'),
      ]);
  pw.TableRow fahrtZeile(Map<String, dynamic> t, {PdfSeitenmerker? merker}) =>
      h.zeile(merker: merker, [
        PdfZelle(pkwDatum(t['fahrt_datum'])),
        PdfZelle('${t['anlass'] ?? ''}'),
        PdfZelle.zahl(pkwKm(t['kilometer'])),
        // Der Satz steht in der Spalte des Fahrzeugs, mit dem gefahren wurde.
        for (final f in fahrzeuge)
          PdfZelle.zahl(
            f['id'] == t['pkw_id'] ? pkwSatz(t['satz_je_km']) : '',
          ),
        PdfZelle.zahl(pkwEuroOderStrich(t['betrag'])),
      ]);
  pw.TableRow summenZeile() => h.zeile(
        [
          const PdfZelle(''),
          const PdfZelle('Summe der betrieblichen Fahrten'),
          const PdfZelle(''),
          for (var i = 0; i < nFz; i++) const PdfZelle(''),
          PdfZelle.zahl(pkwEuro(einlage)),
        ],
        art: PdfZeilenart.summe,
      );

  final ende = fahrten.length < 3 ? 0 : fahrten.length - 3;
  final vorne = fahrten.sublist(0, ende);
  final hinten = fahrten.sublist(ende);

  // ── Schluss ─────────────────────────────────────────────────────────────
  final felder = [
    for (final s in signatures)
      PdfUnterschrift(
        name: '${s['full_name'] ?? ''}',
        zusatz: '${s['role_label'] ?? ''}',
        bild: freigegeben ? signaturBilder['${s['full_name'] ?? ''}'] : null,
      ),
  ];
  final schlussInhalt = <pw.Widget>[
    pw.SizedBox(height: 12),
    h.ergebnis('Nutzungseinlage $jahr', pkwEuro(einlage)),
    if (ohneSatz > 0)
      pw.Padding(
        padding: const pw.EdgeInsets.only(top: 5),
        child: pw.Text(
          '$ohneSatz Fahrt${ohneSatz == 1 ? '' : 'en'} ohne Kilometersatz: '
          'Für das betreffende Fahrzeug fehlen Kilometerstände oder Kosten. '
          'Diese Fahrten sind in der Summe nicht enthalten.',
          style: h.stil(groesse: 8.5, fett: true, farbe: PdfFarben.rot),
        ),
      ),
    pw.SizedBox(height: 12 * PdfPageFormat.mm),
    h.unterschriften(felder),
    pw.Container(
      margin: const pw.EdgeInsets.only(top: 8 * PdfPageFormat.mm),
      padding: const pw.EdgeInsets.only(top: 3),
      decoration: const pw.BoxDecoration(
        border: pw.Border(
          top: pw.BorderSide(color: PdfFarben.linie, width: 0.75),
        ),
      ),
      child: pw.Text(
        'Die Beträge beruhen auf den in der App erfassten Kosten, '
        'Kilometerständen und Fahrten der $firma. Alle Angaben brutto.',
        style: h.stil(groesse: 7, farbe: PdfFarben.grau),
      ),
    ),
  ];

  pw.Document bauen(PdfUmbruch u) {
    final doc = pw.Document(
      title: titel,
      author: firma,
      creator: 'Bördesnack24-App',
      theme: schriften.thema(),
    );

    // Unteilbarer Schlussblock: letzte Fahrten, Summe, Ergebnis,
    // Unterschriften. Steht vorne nichts, gehört der Tabellenkopf immer
    // dazu; sonst nur, wenn der Block auf eine neue Seite rutscht.
    final mitKopf = vorne.isEmpty || u.kopfMitnehmen.contains('schluss');
    final letzteZeilen = <pw.TableRow>[
      if (fahrten.isEmpty)
        h.zeile([
          const PdfZelle(''),
          PdfZelle(
            'Für $jahr ist keine betriebliche Fahrt erfasst.',
            farbe: PdfFarben.grau,
          ),
          const PdfZelle(''),
          for (var i = 0; i < nFz; i++) const PdfZelle(''),
          const PdfZelle(''),
        ]),
      for (final t in hinten) fahrtZeile(t),
      if (fahrten.isNotEmpty) summenZeile(),
    ];
    final schlussBlock = pw.Inseparable(
      child: pw.Column(
        crossAxisAlignment: pw.CrossAxisAlignment.stretch,
        children: [
          u.merker('schluss.block'),
          if (vorne.isEmpty) h.ueberschrift('Betrieblich gefahrene Strecken'),
          h.tabelle(
            breiten: breitenFahrten,
            kopf: mitKopf ? fahrtenKopf() : null,
            zeilen: letzteZeilen,
          ),
          ...schlussInhalt,
        ],
      ),
    );

    doc.addPage(
      pw.MultiPage(
        pageTheme: pw.PageTheme(
          pageFormat: PdfPageFormat.a4,
          margin: const pw.EdgeInsets.fromLTRB(
            22 * PdfPageFormat.mm,
            12 * PdfPageFormat.mm,
            22 * PdfPageFormat.mm,
            12 * PdfPageFormat.mm,
          ),
          theme: schriften.thema(),
        ),
        header: (ctx) => h.folgekopf(ctx, titel),
        footer: (ctx) => h.fusszeile(ctx, '$firma · $titel'),
        build: (ctx) => [
          h.markenkopf(),
          kopf,
          if (freigegeben)
            h.stempel(
              'Von beiden Gesellschaftern signiert und freigegeben. '
              'Korrekturen sind für dieses Jahr gesperrt.',
            ),
          h.mitUeberschrift(
            'Fahrzeugkosten und Satz je Kilometer',
            pw.Column(
              crossAxisAlignment: pw.CrossAxisAlignment.stretch,
              children: [fahrzeugTabelle, fahrzeugHinweis],
            ),
          ),
          if (vorne.isNotEmpty) ...[
            // Die Liste bricht zwischen Zeilen um, der Kopf wiederholt
            // sich. Die Überschrift bleibt bei der ersten Zeile.
            ...u.ueberschrift(
              'fahrten',
              h.ueberschrift('Betrieblich gefahrene Strecken'),
            ),
            h.tabelle(
              breiten: breitenFahrten,
              kopf: fahrtenKopf(),
              zeilen: [
                for (var i = 0; i < vorne.length; i++)
                  fahrtZeile(
                    vorne[i],
                    merker: i == 0 ? u.merker('fahrten.start') : null,
                  ),
              ],
            ),
            u.merker('schluss.vorher'),
          ],
          schlussBlock,
        ],
      ),
    );
    return doc;
  }

  return pdfMitUmbruchpruefung(bauen);
}
