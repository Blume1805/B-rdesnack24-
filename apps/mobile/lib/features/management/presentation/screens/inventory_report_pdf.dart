import 'dart:typed_data';

import 'package:flutter/widgets.dart' show BuildContext;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import '../../../../core/druck/pdf_ausgabe.dart';
import '../../../../core/druck/pdf_hausstil.dart';
import '../../../../core/utils/formatters.dart';

/// Die FIFO-Inventur als PDF-Datei (A4 quer): Kopf, je Produkt die
/// Bewegungen im Zeitraum und die FIFO-Restlots am Stichtag, danach
/// Bewertungsmatrix, Bilanzwert, Freigabe und Unterschriften.
///
/// Umbruch: Produktkopf und Teilüberschrift bleiben bei ihrer ersten Zeile,
/// kurze Restlot-Tabellen bleiben als Ganzes zusammen, Bilanzwert, Freigabe
/// und Unterschriften bilden einen unteilbaren Schluss.
///
/// [signaturBilder]: hinterlegte Unterschriften je Name (`full_name`), vom
/// Aufrufer geladen.
Future<Uint8List> inventoryReportPdf({
  required List<Map<String, dynamic>> movements,
  required List<Map<String, dynamic>> lots,
  required List<Map<String, dynamic>> signatures,
  required DateTime from,
  required DateTime to,
  required PdfSchriften schriften,
  List<Map<String, dynamic>>? approvalDecisions,
  Map<String, pw.ImageProvider> signaturBilder = const {},
  DateTime? erstelltAm,
}) {
  final h = PdfHausstil(schriften, grundgroesse: 8.5);
  final jetzt = erstelltAm ?? DateTime.now();
  final titel =
      'FIFO-Inventur ${Formatters.date(from)} – ${Formatters.date(to)}';

  final bewegungenJeProdukt = <String, List<Map<String, dynamic>>>{};
  for (final m in movements) {
    bewegungenJeProdukt
        .putIfAbsent(m['product_id']?.toString() ?? '', () => [])
        .add(m);
  }
  final lotsJeProdukt = <String, List<Map<String, dynamic>>>{};
  for (final l in lots) {
    lotsJeProdukt
        .putIfAbsent(l['product_id']?.toString() ?? '', () => [])
        .add(l);
  }

  double summe(Iterable<Map<String, dynamic>> l, String k) =>
      l.fold<double>(0, (s, r) => s + ((r[k] as num?)?.toDouble() ?? 0));
  int summeGanz(Iterable<Map<String, dynamic>> l, String k) =>
      l.fold<int>(0, (s, r) => s + ((r[k] as num?)?.toInt() ?? 0));
  String euro(dynamic v) => Formatters.euro((v as num?)?.toDouble() ?? 0);
  String datum(dynamic v) {
    if (v == null || v.toString().isEmpty) return '—';
    final d = DateTime.tryParse(v.toString());
    return d == null ? v.toString() : Formatters.date(d);
  }

  String vorgang(String t) => switch (t) {
        'refill' => 'Zugang',
        'sale' => 'Verkauf',
        'disposal' => 'Vernichtung',
        'correction' => 'Korrektur',
        _ => t,
      };

  // ── Kopf ────────────────────────────────────────────────────────────────
  final grauKlein = h.stil(farbe: PdfFarben.grau);
  final kopf = pw.Row(
    crossAxisAlignment: pw.CrossAxisAlignment.end,
    children: [
      pw.Expanded(
        child: pw.Column(
          crossAxisAlignment: pw.CrossAxisAlignment.start,
          children: [
            pw.Text(
              'INVENTUR — FIFO-Bewegungsreport',
              style: h.stil(
                groesse: 17,
                extrafett: true,
                farbe: PdfFarben.goldDunkel,
                sperrung: 0.5,
              ),
            ),
            pw.SizedBox(height: 2),
            pw.Text(
              'Zeitraum: ${Formatters.date(from)} – ${Formatters.date(to)}',
              style: grauKlein,
            ),
            pw.RichText(
              text: pw.TextSpan(
                style: grauKlein,
                children: [
                  const pw.TextSpan(text: 'Bewertungsverfahren: '),
                  pw.TextSpan(
                    text: 'FIFO',
                    style: h.stil(fett: true, farbe: PdfFarben.grau),
                  ),
                  const pw.TextSpan(text: ' (§ 256 HGB, Verbrauchsfolge)'),
                ],
              ),
            ),
            pw.Text(
              'Bewertung: Anschaffungskosten netto (§ 253 HGB), '
              'MHD-Abschlag vom AK-Wert',
              style: grauKlein,
            ),
          ],
        ),
      ),
      pw.Column(
        crossAxisAlignment: pw.CrossAxisAlignment.end,
        children: [
          for (final z in [
            'Bördesnack24 GbR',
            'Sülldorfer Str. 3A · 39171 Sülzetal OT Osterweddingen',
            'Steuernummer: 102/178/01635',
            'USt-IdNr.: DE 458804058',
            'Erstellt am ${Formatters.date(jetzt)}',
          ])
            pw.Text(z, style: grauKlein),
        ],
      ),
    ],
  );

  // ── Tabellen ────────────────────────────────────────────────────────────
  final breitenBewegung = <int, pw.TableColumnWidth>{
    0: const pw.FixedColumnWidth(20 * PdfPageFormat.mm),
    1: const pw.FixedColumnWidth(22 * PdfPageFormat.mm),
    2: const pw.FixedColumnWidth(16 * PdfPageFormat.mm),
    3: const pw.FixedColumnWidth(20 * PdfPageFormat.mm),
    4: const pw.FixedColumnWidth(34 * PdfPageFormat.mm),
    5: const pw.FixedColumnWidth(20 * PdfPageFormat.mm),
    6: const pw.FixedColumnWidth(20 * PdfPageFormat.mm),
    7: const pw.FlexColumnWidth(),
  };
  // Kopfzeilen als Funktion: Ein Baustein darf nur einmal im Dokument
  // stehen, die Bibliothek merkt sich seine Lage am Baustein selbst.
  pw.TableRow kopfBewegung() => h.kopfzeile(const [
        PdfZelle('Datum'),
        PdfZelle('Vorgang'),
        PdfZelle.zahl('Menge'),
        PdfZelle.zahl('EK/Stk.'),
        PdfZelle('Rechnung'),
        PdfZelle('Rg-Datum'),
        PdfZelle('MHD'),
        PdfZelle('Bemerkung'),
      ]);
  final breitenLots = <int, pw.TableColumnWidth>{
    0: const pw.FlexColumnWidth(1.6),
    1: const pw.FlexColumnWidth(),
    2: const pw.FlexColumnWidth(0.7),
    3: const pw.FlexColumnWidth(),
    4: const pw.FlexColumnWidth(),
    5: const pw.FlexColumnWidth(),
    6: const pw.FlexColumnWidth(),
    7: const pw.FlexColumnWidth(),
    8: const pw.FlexColumnWidth(),
    9: const pw.FlexColumnWidth(),
  };
  pw.TableRow kopfLots() => h.kopfzeile(const [
        PdfZelle('Rechnung'),
        PdfZelle('Rg-Datum'),
        PdfZelle.zahl('Rest'),
        PdfZelle.zahl('EK/Stk.'),
        PdfZelle('MHD'),
        PdfZelle.zahl('Restlaufzeit'),
        PdfZelle.zahl('Abschlag %'),
        PdfZelle.zahl('AK-Wert'),
        PdfZelle.zahl('Abschlag €'),
        PdfZelle.zahl('Bilanz'),
      ]);

  pw.Widget teiltitel(String text) => pw.Padding(
        padding: const pw.EdgeInsets.only(top: 5, bottom: 1),
        child: pw.Text(
          text,
          style: h.stil(groesse: 9, fett: true, farbe: PdfFarben.grau),
        ),
      );

  pw.Widget produktkopf(String name, String sku, int endbestand) =>
      pw.Container(
        margin: const pw.EdgeInsets.only(top: 10),
        padding: const pw.EdgeInsets.only(bottom: 3),
        decoration: const pw.BoxDecoration(
          border: pw.Border(
            bottom: pw.BorderSide(color: PdfFarben.tinte, width: 1),
          ),
        ),
        child: pw.Row(
          mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
          crossAxisAlignment: pw.CrossAxisAlignment.end,
          children: [
            pw.Column(
              crossAxisAlignment: pw.CrossAxisAlignment.start,
              children: [
                pw.Text(name, style: h.stil(groesse: 11, extrafett: true)),
                pw.Text(
                  'SKU: $sku',
                  style: h.stil(groesse: 7.5, farbe: PdfFarben.grau),
                ),
              ],
            ),
            pw.RichText(
              text: pw.TextSpan(
                style: h.stil(groesse: 9.5),
                children: [
                  const pw.TextSpan(text: 'Endbestand: '),
                  pw.TextSpan(
                    text: '$endbestand',
                    style: h.stil(
                      groesse: 9.5,
                      extrafett: true,
                      farbe: PdfFarben.goldDunkel,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      );

  List<pw.Widget> produkt(
    PdfUmbruch u,
    int nr,
    String id,
    List<Map<String, dynamic>> moves,
  ) {
    final name = moves.first['product_name']?.toString() ?? '';
    final sku = moves.first['sku']?.toString() ?? '';
    final pl = lotsJeProdukt[id] ?? const [];
    final endbestand = summeGanz(pl, 'remaining_qty');

    final bewegungen = [
      for (var i = 0; i < moves.length; i++)
        () {
          final m = moves[i];
          final t = m['type']?.toString() ?? '';
          final menge = (m['quantity_delta'] as num?)?.toInt() ?? 0;
          return h.zeile(
            merker: i == 0 ? u.merker('p$nr.start') : null,
            art: t == 'refill'
                ? PdfZeilenart.zugang
                : t == 'disposal'
                    ? PdfZeilenart.abgang
                    : PdfZeilenart.normal,
            [
              PdfZelle(datum(m['occurred_at'])),
              PdfZelle(vorgang(t), fett: true),
              PdfZelle.zahl(menge > 0 ? '+$menge' : '$menge', fett: true),
              PdfZelle.zahl(
                m['unit_cost'] == null ? '—' : euro(m['unit_cost']),
              ),
              PdfZelle(m['invoice_number']?.toString() ?? '—'),
              PdfZelle(datum(m['invoice_date'])),
              PdfZelle(datum(m['lot_expiry'])),
              PdfZelle(
                m['reason']?.toString() ?? '',
                farbe: PdfFarben.grau,
              ),
            ],
          );
        }(),
    ];

    final lotZeilen = <pw.TableRow>[
      if (pl.isEmpty)
        h.zeile([
          const PdfZelle(
            'Endbestand 0 — keine Bewertung.',
            farbe: PdfFarben.grau,
          ),
          for (var i = 0; i < 9; i++) const PdfZelle(''),
        ]),
      for (final l in pl)
        () {
          final pct = (l['mhd_pct'] as num?)?.toInt() ?? 0;
          final warn = pct >= 20;
          final abschlag = (l['lot_discount'] as num?)?.toDouble() ?? 0;
          return h.zeile([
            PdfZelle(l['invoice_number']?.toString() ?? '—'),
            PdfZelle(datum(l['invoice_date'])),
            PdfZelle.zahl('${l['remaining_qty']}', fett: true),
            PdfZelle.zahl(euro(l['unit_cost'])),
            PdfZelle(datum(l['lot_expiry'])),
            PdfZelle.zahl(
              l['mhd_days_left'] == null ? '—' : '${l['mhd_days_left']} Tage',
            ),
            PdfZelle.zahl(
              '$pct %',
              fett: true,
              farbe: warn ? PdfFarben.rot : null,
            ),
            PdfZelle.zahl(euro(l['lot_gross'])),
            PdfZelle.zahl(
              abschlag == 0 ? '—' : '− ${Formatters.euro(abschlag)}',
              farbe: warn ? PdfFarben.rot : null,
            ),
            PdfZelle.zahl(euro(l['lot_net']), fett: true),
          ]);
        }(),
      if (pl.isNotEmpty)
        h.zeile(
          [
            PdfZelle('Summe $name'),
            const PdfZelle(''),
            PdfZelle.zahl('$endbestand'),
            for (var i = 0; i < 4; i++) const PdfZelle(''),
            PdfZelle.zahl(Formatters.euro(summe(pl, 'lot_gross'))),
            PdfZelle.zahl(
              summe(pl, 'lot_discount') == 0
                  ? '—'
                  : '− ${Formatters.euro(summe(pl, 'lot_discount'))}',
              farbe: PdfFarben.rot,
            ),
            PdfZelle.zahl(Formatters.euro(summe(pl, 'lot_net'))),
          ],
          art: PdfZeilenart.summe,
        ),
    ];

    return [
      ...u.ueberschrift(
        'p$nr',
        pw.Column(
          crossAxisAlignment: pw.CrossAxisAlignment.stretch,
          children: [
            produktkopf(name, sku, endbestand),
            teiltitel('Bewegungen im Zeitraum'),
          ],
        ),
      ),
      h.tabelle(
        breiten: breitenBewegung,
        kopf: kopfBewegung(),
        zeilen: bewegungen,
      ),
      // Kurze Restlot-Tabellen (bis 15 Lots) bleiben mit ihrer Überschrift
      // als Ganzes zusammen, lange dürfen umbrechen.
      ...u.ueberschrift('l$nr', teiltitel('FIFO-Restlots am Stichtag')),
      h.tabelle(
        breiten: breitenLots,
        kopf: kopfLots(),
        zeilen: [
          for (var i = 0; i < lotZeilen.length; i++)
            i == 0
                ? _mitMerker(lotZeilen[i], u.merker('l$nr.start'))
                : lotZeilen[i],
        ],
      ),
      if (lotZeilen.length <= 16) u.merker('l$nr.ende'),
    ];
  }

  // ── Bewertungsmatrix ────────────────────────────────────────────────────
  const matrix = [
    ['> 4 Wochen', '0 % Abschlag', '0 %', 'normale Verwertbarkeit'],
    [
      '2–4 Wochen',
      '10–30 %',
      '20 %',
      'eingeschränkte Verkaufszeit, ggf. erhöhte Preisaktionen',
    ],
    ['1–2 Wochen', '30–50 %', '40 %', 'erheblicher Verkaufsdruck'],
    [
      '< 1 Woche',
      '50–80 %',
      '65 %',
      'Risiko des Nichtverkaufs deutlich erhöht',
    ],
    [
      'MHD überschritten',
      '100 % Abschreibung',
      '100 %',
      'keine wirtschaftliche Verwertbarkeit',
    ],
  ];
  // Matrix, Bilanzwert, Freigabe und Unterschriften bilden den Schluss und
  // stehen zusammen auf einer Seite (Merker `schluss.titel`/`schluss.ende`).
  List<pw.Widget> matrixBlock(PdfUmbruch u) => [
        ...u.ueberschrift(
          'schluss',
          h.ueberschrift('Bewertungsansatz MHD-Abschlag'),
        ),
        pw.Text(
          'Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf '
          'den Anschaffungskostenwert eines FIFO-Restlots angesetzt. Die '
          'Bandbreite orientiert sich an branchenüblichen Ansätzen für '
          'verderbliche Handelswaren; angesetzt wird der Mittelwert.',
          style: grauKlein,
        ),
        pw.SizedBox(height: 3),
        h.tabelle(
          breiten: const {
            0: pw.FlexColumnWidth(1.2),
            1: pw.FlexColumnWidth(1.4),
            2: pw.FlexColumnWidth(1.2),
            3: pw.FlexColumnWidth(3),
          },
          kopf: h.kopfzeile(const [
            PdfZelle('Rest-MHD am Stichtag'),
            PdfZelle('Typischer Bewertungsansatz'),
            PdfZelle.zahl('Bördesnack24 wendet an'),
            PdfZelle('Begründung'),
          ]),
          zeilen: [
            for (final r in matrix)
              h.zeile([
                PdfZelle(r[0], fett: true),
                PdfZelle(r[1]),
                PdfZelle.zahl(
                  r[2],
                  fett: true,
                  farbe: r[2] == '0 %' ? null : PdfFarben.rot,
                ),
                PdfZelle(r[3]),
              ]),
          ],
        ),
      ];

  // ── Schluss: Bilanzwert, Freigabe, Unterschriften ──────────────────────
  final gesamtAbschlag = summe(lots, 'lot_discount');
  pw.Widget kennzahl(
    String vor,
    String wert, {
    String nach = '',
    bool warn = false,
  }) {
    final farbe = warn ? PdfFarben.rot : PdfFarben.tinte;
    return pw.RichText(
      text: pw.TextSpan(
        style: h.stil(groesse: 9.5, farbe: farbe),
        children: [
          pw.TextSpan(text: vor),
          pw.TextSpan(
            text: wert,
            style: h.stil(groesse: 11.5, extrafett: true, farbe: farbe),
          ),
          pw.TextSpan(text: nach),
        ],
      ),
    );
  }

  final freigegeben = approvalDecisions != null &&
      approvalDecisions.any((d) => d['decision'] == 'approved');
  List<pw.Widget> schluss(PdfUmbruch u) => [
        h.ueberschrift('Bilanzwert der Vorräte'),
        pw.SizedBox(height: 3),
        pw.Wrap(
          spacing: 20,
          runSpacing: 4,
          children: [
            kennzahl(
              '',
              '${lots.map((l) => l['product_id']?.toString()).toSet().length}',
              nach: ' Produkte im Bestand',
            ),
            kennzahl(
              '',
              '${summeGanz(lots, 'remaining_qty')}',
              nach: ' Einheiten gesamt',
            ),
            kennzahl(
              'Anschaffungskosten netto ',
              Formatters.euro(summe(lots, 'lot_gross')),
            ),
            kennzahl(
              'MHD-Abschlag ',
              gesamtAbschlag == 0
                  ? '0,00 €'
                  : '− ${Formatters.euro(gesamtAbschlag)}',
              warn: true,
            ),
            kennzahl(
              'Bilanzwert netto ',
              Formatters.euro(summe(lots, 'lot_net')),
            ),
          ],
        ),
        if (freigegeben)
          h.stempel(
            'Beide Gesellschafter haben nach Prüfung digital signiert.',
            zeilen: [
              for (final d in approvalDecisions)
                '${d['approver_name'] ?? '?'} — '
                    '${d['decision'] == 'approved' ? 'freigegeben' : 'abgelehnt'}'
                    '${d['decided_at'] == null ? '' : ' · ${datum(d['decided_at'])}'}',
            ],
          ),
        if (signatures.isNotEmpty) ...[
          h.ueberschrift('Freigabe / Unterschriften'),
          pw.SizedBox(height: 4),
          pw.SizedBox(
            width: 190 * PdfPageFormat.mm,
            child: h.unterschriften(
              [
                for (final s in signatures)
                  PdfUnterschrift(
                    name: '${s['full_name'] ?? ''}',
                    zusatz: '${s['role_label'] ?? ''} · Datum: '
                        '${Formatters.date(jetzt)}',
                    bild: signaturBilder['${s['full_name'] ?? ''}'],
                  ),
              ],
              kastenHoehe: 22 * PdfPageFormat.mm,
            ),
          ),
        ],
        u.merker('schluss.ende'),
      ];

  pw.Document bauen(PdfUmbruch u) {
    final doc = pw.Document(
      title: titel,
      author: 'Bördesnack24 GbR',
      creator: 'Bördesnack24-App',
      theme: schriften.thema(),
    );
    var nr = 0;
    doc.addPage(
      pw.MultiPage(
        pageTheme: pw.PageTheme(
          pageFormat: PdfPageFormat.a4.landscape,
          margin: const pw.EdgeInsets.fromLTRB(
            10 * PdfPageFormat.mm,
            8 * PdfPageFormat.mm,
            10 * PdfPageFormat.mm,
            9 * PdfPageFormat.mm,
          ),
          theme: schriften.thema(),
        ),
        header: (ctx) => h.folgekopf(ctx, titel),
        footer: (ctx) => h.fusszeile(ctx, 'Bördesnack24 GbR · $titel'),
        build: (ctx) => [
          h.markenkopf(balken: 5 * PdfPageFormat.mm),
          kopf,
          for (final e in bewegungenJeProdukt.entries)
            if (e.value.isNotEmpty) ...produkt(u, nr++, e.key, e.value),
          ...matrixBlock(u),
          ...schluss(u),
        ],
      ),
    );
    return doc;
  }

  return pdfMitUmbruchpruefung(bauen);
}

/// Erzeugt die Inventur als PDF und bietet sie zum Teilen, Drucken und
/// Öffnen an (Inventur-Bildschirm und Freigabe-Bildschirm).
Future<void> inventurPdfAnbieten(
  BuildContext context, {
  required List<Map<String, dynamic>> movements,
  required List<Map<String, dynamic>> lots,
  required List<Map<String, dynamic>> signatures,
  required DateTime from,
  required DateTime to,
  List<Map<String, dynamic>>? approvalDecisions,
}) {
  String iso(DateTime d) => d.toIso8601String().substring(0, 10);
  return pdfAnbieten(
    context,
    titel: 'FIFO-Inventur ${Formatters.date(from)} – ${Formatters.date(to)}',
    dateiname: 'FIFO-Inventur_${iso(from)}_bis_${iso(to)}.pdf',
    erzeugen: () async => inventoryReportPdf(
      movements: movements,
      lots: lots,
      signatures: signatures,
      from: from,
      to: to,
      approvalDecisions: approvalDecisions,
      schriften: await pdfSchriftenLaden(),
      signaturBilder: await pdfBilderLaden({
        for (final s in signatures)
          '${s['full_name'] ?? ''}': s['image_url']?.toString(),
      }),
    ),
  );
}

/// Setzt einen Merker in die erste Zelle einer fertigen Zeile.
pw.TableRow _mitMerker(pw.TableRow zeile, PdfSeitenmerker m) => pw.TableRow(
      decoration: zeile.decoration,
      verticalAlignment: zeile.verticalAlignment,
      repeat: zeile.repeat,
      children: [
        pw.Column(
          crossAxisAlignment: pw.CrossAxisAlignment.start,
          children: [m, zeile.children.first],
        ),
        ...zeile.children.skip(1),
      ],
    );
