// Hausstil der Bördesnack24-PDFs (PKW-Anlage, FIFO-Inventur, Rechnung).
//
// Warum echte PDF-Dateien (Befund 19.11.2026): In der Home-Bildschirm-App
// auf dem iPhone ignoriert iOS den Druckbefehl einer Webseite, und ein
// nachgeladenes Dokumentfenster öffnet sich dort nicht zuverlässig. Die
// bisherigen HTML-Druckansichten funktionierten deshalb nur im Safari-Tab.
// Eine fertige PDF-Datei lässt sich dagegen über das Teilen-Menü drucken,
// in „Dateien" sichern oder an die Steuerberatung schicken.
//
// Gestaltung wie die HTML-Druckansichten: Gold-Balken, Wortmarke, dunkle
// Tabellenköpfe, goldener Unterstrich unter Überschriften, Beträge
// rechtsbündig. Schrift: Hanken Grotesk aus den App-Assets (deckt €, „",
// Umlaute, − und · ab; die PDF-Standardschriften können das nicht).
//
// Seitenumbruch: Überschriften stehen nie allein am Seitenfuß, und der
// Schluss (Ergebnis, Unterschriften) nimmt die letzten Tabellenzeilen mit
// auf die neue Seite (`pdfMitUmbruchpruefung`).
import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

/// Die drei Schnitte der Hausschrift.
class PdfSchriften {
  const PdfSchriften({
    required this.normal,
    required this.fett,
    required this.extrafett,
  });

  /// Aus den rohen TTF-Dateien (App: rootBundle, Test: Datei).
  factory PdfSchriften.ausBytes({
    required ByteData normal,
    required ByteData fett,
    required ByteData extrafett,
  }) =>
      PdfSchriften(
        normal: pw.Font.ttf(normal),
        fett: pw.Font.ttf(fett),
        extrafett: pw.Font.ttf(extrafett),
      );

  final pw.Font normal;
  final pw.Font fett;
  final pw.Font extrafett;

  /// Pfade in den App-Assets (pubspec.yaml, Familie „Hanken Grotesk").
  static const pfadNormal = 'assets/fonts/HankenGrotesk-Regular.ttf';
  static const pfadFett = 'assets/fonts/HankenGrotesk-Bold.ttf';
  static const pfadExtrafett = 'assets/fonts/HankenGrotesk-ExtraBold.ttf';

  pw.ThemeData thema() => pw.ThemeData.withFont(
        base: normal,
        bold: fett,
        italic: normal,
        boldItalic: fett,
      );
}

/// Farben des Hausstils (dieselben Werte wie in den HTML-Druckansichten).
abstract final class PdfFarben {
  static const gold = PdfColor.fromInt(0xFFFDC102);
  static const goldDunkel = PdfColor.fromInt(0xFFB8860B);
  static const goldHell = PdfColor.fromInt(0xFFFFF5CC);
  static const tinte = PdfColor.fromInt(0xFF14110E);
  static const papier = PdfColor.fromInt(0xFFF9F5EC);
  static const kasten = PdfColor.fromInt(0xFFFAF6ED);
  static const linie = PdfColor.fromInt(0xFFE8E2D6);
  static const grau = PdfColor.fromInt(0xFF6F6A5B);
  static const grauText = PdfColor.fromInt(0xFF595959);
  static const kopfKlein = PdfColor.fromInt(0xFFC9C4BC);
  static const rot = PdfColor.fromInt(0xFFB2311C);
  static const gruen = PdfColor.fromInt(0xFF3E7A25);
  static const gruenRand = PdfColor.fromInt(0xFF5C9A3F);
  static const gruenHell = PdfColor.fromInt(0xFFEEF6E8);
  static const zugang = PdfColor.fromInt(0xFFF3F8ED);
  static const abgang = PdfColor.fromInt(0xFFFAE9E4);
}

/// Bausteine einer Seite. Eine Instanz je Dokument, damit Schriften und
/// Grundgröße nicht an jeden Aufruf weitergereicht werden müssen.
class PdfHausstil {
  PdfHausstil(this.schriften, {this.grundgroesse = 9});

  final PdfSchriften schriften;

  /// Fließtextgröße in Punkt; alles andere ist relativ dazu gesetzt.
  final double grundgroesse;

  pw.TextStyle stil({
    double? groesse,
    bool fett = false,
    bool extrafett = false,
    PdfColor farbe = PdfFarben.tinte,
    double? zeilenabstand,
    double sperrung = 0,
  }) =>
      pw.TextStyle(
        font: extrafett
            ? schriften.extrafett
            : fett
                ? schriften.fett
                : schriften.normal,
        fontSize: groesse ?? grundgroesse,
        color: farbe,
        lineSpacing: zeilenabstand,
        letterSpacing: sperrung,
      );

  /// Gold-Balken und Wortmarke, nur auf Seite 1.
  pw.Widget markenkopf({double balken = 4 * PdfPageFormat.mm}) => pw.Column(
        crossAxisAlignment: pw.CrossAxisAlignment.start,
        children: [
          pw.Container(
            height: balken,
            decoration: const pw.BoxDecoration(
              color: PdfFarben.gold,
              borderRadius: pw.BorderRadius.all(pw.Radius.circular(1)),
            ),
          ),
          pw.SizedBox(height: 6 * PdfPageFormat.mm),
          pw.Text(
            'BÖRDESNACK24',
            style: stil(extrafett: true, sperrung: 2),
          ),
          pw.SizedBox(height: 5),
        ],
      );

  /// Kleine Kopfzeile ab Seite 2: Wortmarke links, Titel rechts.
  pw.Widget folgekopf(pw.Context ctx, String titel) {
    if (ctx.pageNumber == 1) return pw.SizedBox();
    return pw.Container(
      margin: const pw.EdgeInsets.only(bottom: 8),
      padding: const pw.EdgeInsets.only(bottom: 3),
      decoration: const pw.BoxDecoration(
        border: pw.Border(
          bottom: pw.BorderSide(color: PdfFarben.gold, width: 1.2),
        ),
      ),
      child: pw.Row(
        mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
        children: [
          pw.Text(
            'BÖRDESNACK24',
            style: stil(
              groesse: grundgroesse - 1.5,
              extrafett: true,
              sperrung: 1.5,
            ),
          ),
          pw.Text(
            titel,
            style: stil(groesse: grundgroesse - 1.5, farbe: PdfFarben.grau),
          ),
        ],
      ),
    );
  }

  /// Fußzeile jeder Seite: Quelle links, „Seite x von y" rechts.
  pw.Widget fusszeile(pw.Context ctx, String links) => pw.Container(
        margin: const pw.EdgeInsets.only(top: 6),
        child: pw.Row(
          mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
          children: [
            pw.Text(
              links,
              style: stil(groesse: grundgroesse - 2, farbe: PdfFarben.grau),
            ),
            pw.Text(
              'Seite ${ctx.pageNumber} von ${ctx.pagesCount}',
              style: stil(groesse: grundgroesse - 2, farbe: PdfFarben.grau),
            ),
          ],
        ),
      );

  /// Abschnittsüberschrift mit goldenem Unterstrich.
  pw.Widget ueberschrift(String text, {double oben = 12}) => pw.Container(
        margin: pw.EdgeInsets.only(top: oben, bottom: 3),
        padding: const pw.EdgeInsets.only(bottom: 2),
        decoration: const pw.BoxDecoration(
          border: pw.Border(
            bottom: pw.BorderSide(color: PdfFarben.gold, width: 1.5),
          ),
        ),
        child: pw.Text(
          text,
          style: stil(groesse: grundgroesse + 1, extrafett: true),
        ),
      );

  /// Überschrift, die auf derselben Seite bleibt wie der Anfang ihres
  /// Inhalts: Beides zusammen ist ein unteilbarer Block.
  pw.Widget mitUeberschrift(
    String titel,
    pw.Widget anfang, {
    double oben = 12,
  }) =>
      pw.Inseparable(
        child: pw.Column(
          crossAxisAlignment: pw.CrossAxisAlignment.stretch,
          children: [ueberschrift(titel, oben: oben), anfang],
        ),
      );

  /// Hinweis: grau, kleiner als der Fließtext.
  pw.Widget hinweis(String text, {double oben = 4}) => pw.Padding(
        padding: pw.EdgeInsets.only(top: oben),
        child: pw.Text(
          text,
          style: stil(
            groesse: grundgroesse - 1.5,
            farbe: PdfFarben.grauText,
            zeilenabstand: 1.5,
          ),
        ),
      );

  /// Grüner FREIGEGEBEN-Stempel.
  pw.Widget stempel(String notiz, {List<String> zeilen = const []}) =>
      pw.Container(
        margin: const pw.EdgeInsets.only(top: 8, bottom: 2),
        padding: const pw.EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: pw.BoxDecoration(
          color: PdfFarben.gruenHell,
          border: pw.Border.all(color: PdfFarben.gruenRand),
          borderRadius: const pw.BorderRadius.all(pw.Radius.circular(6)),
        ),
        child: pw.Column(
          crossAxisAlignment: pw.CrossAxisAlignment.start,
          children: [
            pw.Text(
              'FREIGEGEBEN',
              style: stil(
                groesse: grundgroesse + 1.5,
                extrafett: true,
                farbe: PdfFarben.gruen,
                sperrung: 1,
              ),
            ),
            pw.SizedBox(height: 2),
            pw.Text(notiz, style: stil(groesse: grundgroesse - 0.5)),
            for (final z in zeilen)
              pw.Padding(
                padding: const pw.EdgeInsets.only(top: 1.5, left: 8),
                child: pw.Text(
                  '• $z',
                  style: stil(groesse: grundgroesse - 0.5),
                ),
              ),
          ],
        ),
      );

  /// Goldene Ergebnisleiste („Nutzungseinlage 2026 ... 1.234,56 €").
  pw.Widget ergebnis(String label, String wert) => pw.Container(
        padding: const pw.EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        decoration: const pw.BoxDecoration(
          color: PdfFarben.gold,
          borderRadius: pw.BorderRadius.all(pw.Radius.circular(6)),
        ),
        child: pw.Row(
          mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
          crossAxisAlignment: pw.CrossAxisAlignment.end,
          children: [
            pw.Text(
              label,
              style: stil(groesse: grundgroesse + 0.5, extrafett: true),
            ),
            pw.Text(
              wert,
              style: stil(groesse: grundgroesse + 5, extrafett: true),
            ),
          ],
        ),
      );

  /// Unterschriftsfelder nebeneinander: Kasten (mit hinterlegter Signatur
  /// oder leer zum Unterschreiben), Linie, Name, Zusatz.
  pw.Widget unterschriften(
    List<PdfUnterschrift> felder, {
    double kastenHoehe = 18 * PdfPageFormat.mm,
  }) {
    if (felder.isEmpty) return pw.SizedBox();
    final kinder = <pw.Widget>[];
    for (var i = 0; i < felder.length; i++) {
      final f = felder[i];
      if (i > 0) kinder.add(pw.SizedBox(width: 16 * PdfPageFormat.mm));
      kinder.add(
        pw.Expanded(
          child: pw.Column(
            crossAxisAlignment: pw.CrossAxisAlignment.start,
            children: [
              pw.Container(
                height: kastenHoehe,
                padding: const pw.EdgeInsets.all(4),
                alignment: pw.Alignment.bottomLeft,
                decoration: pw.BoxDecoration(
                  color: PdfFarben.kasten,
                  border: pw.Border.all(color: PdfFarben.linie),
                  borderRadius:
                      const pw.BorderRadius.all(pw.Radius.circular(6)),
                ),
                child: f.bild == null
                    ? null
                    : pw.Image(f.bild!, fit: pw.BoxFit.contain),
              ),
              pw.SizedBox(height: 3),
              pw.Container(height: 1, color: PdfFarben.tinte),
              pw.SizedBox(height: 3),
              pw.Text(f.name, style: stil(fett: true)),
              if (f.zusatz.isNotEmpty)
                pw.Text(
                  f.zusatz,
                  style: stil(
                    groesse: grundgroesse - 1.5,
                    farbe: PdfFarben.grau,
                  ),
                ),
            ],
          ),
        ),
      );
    }
    return pw.Row(
      crossAxisAlignment: pw.CrossAxisAlignment.start,
      children: kinder,
    );
  }

  // ── Tabellen ─────────────────────────────────────────────────────────────

  /// Kopfzeile: dunkler Grund, helle Schrift.
  pw.TableRow kopfzeile(List<PdfZelle> zellen) => pw.TableRow(
        repeat: true,
        decoration: const pw.BoxDecoration(color: PdfFarben.tinte),
        verticalAlignment: pw.TableCellVerticalAlignment.bottom,
        children: [
          for (final z in zellen)
            _zelle(
              z,
              stil(
                groesse: grundgroesse - 0.5,
                fett: true,
                farbe: PdfFarben.papier,
              ),
              unterzeileFarbe: PdfFarben.kopfKlein,
            ),
        ],
      );

  /// Datenzeile mit dünner Linie darunter. `art` färbt Summen, Zugänge
  /// und Abgänge ein.
  pw.TableRow zeile(
    List<PdfZelle> zellen, {
    PdfZeilenart art = PdfZeilenart.normal,
    PdfSeitenmerker? merker,
  }) {
    final summe = art == PdfZeilenart.summe;
    final farbe = switch (art) {
      PdfZeilenart.summe => PdfFarben.goldHell,
      PdfZeilenart.zugang => PdfFarben.zugang,
      PdfZeilenart.abgang => PdfFarben.abgang,
      _ => null,
    };
    final rand = summe || art == PdfZeilenart.trenner
        ? const pw.BorderSide(color: PdfFarben.tinte, width: 1)
        : pw.BorderSide.none;
    return pw.TableRow(
      decoration: pw.BoxDecoration(
        color: farbe,
        border: pw.Border(
          top: rand,
          bottom: summe
              ? rand
              : const pw.BorderSide(color: PdfFarben.linie, width: 0.75),
        ),
      ),
      children: [
        for (var i = 0; i < zellen.length; i++)
          _zelle(
            zellen[i],
            stil(fett: zellen[i].fett || summe, extrafett: summe),
            merker: i == 0 ? merker : null,
          ),
      ],
    );
  }

  pw.Widget _zelle(
    PdfZelle z,
    pw.TextStyle grund, {
    PdfColor unterzeileFarbe = PdfFarben.grau,
    PdfSeitenmerker? merker,
  }) {
    final s = grund.copyWith(
      color: z.farbe ?? grund.color,
      font: z.fett && grund.font == schriften.normal ? schriften.fett : null,
      fontStyle: null,
    );
    final ausrichtung = switch (z.ausrichtung) {
      PdfAusrichtung.rechts => pw.TextAlign.right,
      PdfAusrichtung.mitte => pw.TextAlign.center,
      PdfAusrichtung.links => pw.TextAlign.left,
    };
    final achse = switch (z.ausrichtung) {
      PdfAusrichtung.rechts => pw.CrossAxisAlignment.end,
      PdfAusrichtung.mitte => pw.CrossAxisAlignment.center,
      PdfAusrichtung.links => pw.CrossAxisAlignment.start,
    };
    return pw.Padding(
      padding: const pw.EdgeInsets.symmetric(horizontal: 5, vertical: 2.6),
      child: pw.Column(
        crossAxisAlignment: achse,
        children: [
          if (merker != null) merker,
          pw.Text(z.text, style: s, textAlign: ausrichtung),
          if (z.unterzeile != null)
            pw.Text(
              z.unterzeile!,
              textAlign: ausrichtung,
              style: s.copyWith(
                fontSize: grundgroesse - 2,
                font: schriften.normal,
                color: unterzeileFarbe,
              ),
            ),
        ],
      ),
    );
  }

  /// Tabelle, die zwischen Zeilen umbricht; der Kopf wiederholt sich.
  pw.Table tabelle({
    required Map<int, pw.TableColumnWidth> breiten,
    pw.TableRow? kopf,
    required List<pw.TableRow> zeilen,
  }) =>
      pw.Table(
        columnWidths: breiten,
        tableWidth: pw.TableWidth.max,
        children: [if (kopf != null) kopf, ...zeilen],
      );
}

enum PdfAusrichtung { links, mitte, rechts }

enum PdfZeilenart { normal, summe, trenner, zugang, abgang }

/// Inhalt einer Tabellenzelle.
class PdfZelle {
  const PdfZelle(
    this.text, {
    this.ausrichtung = PdfAusrichtung.links,
    this.fett = false,
    this.farbe,
    this.unterzeile,
  });

  /// Rechtsbündig, für Beträge und Mengen.
  const PdfZelle.zahl(
    this.text, {
    this.fett = false,
    this.farbe,
    this.unterzeile,
  }) : ausrichtung = PdfAusrichtung.rechts;

  final String text;
  final PdfAusrichtung ausrichtung;
  final bool fett;
  final PdfColor? farbe;
  final String? unterzeile;
}

/// Ein Unterschriftsfeld.
class PdfUnterschrift {
  const PdfUnterschrift({required this.name, this.zusatz = '', this.bild});
  final String name;
  final String zusatz;
  final pw.ImageProvider? bild;
}

/// Merkt sich beim Zeichnen, auf welcher Seite er steht. Grundlage für
/// [pdfMitUmbruchpruefung]: Wo etwas landet, steht erst nach dem Umbruch
/// fest.
class PdfSeitenmerker extends pw.Widget {
  PdfSeitenmerker();

  int? seite;

  @override
  void layout(
    pw.Context context,
    pw.BoxConstraints constraints, {
    bool parentUsesSize = false,
  }) {
    box = PdfRect.zero;
  }

  @override
  void paint(pw.Context context) {
    super.paint(context);
    seite = context.pageNumber;
  }
}

/// Umbruchprüfung über mehrere Durchgänge.
///
/// Die PDF-Bibliothek kennt kein „Überschrift bleibt bei ihrem Inhalt".
/// Deshalb wird das Dokument gebaut, gezeichnet und nachgesehen, wo die
/// Merker gelandet sind; wo eine Regel verletzt ist, wird mit einem Hinweis
/// neu gebaut (höchstens fünfmal).
///
/// Zwei Regeln:
///  * Überschrift `k`: Merker `k.titel` (direkt nach der Überschrift) und
///    `k.start` (in der ersten Zeile ihres Inhalts) müssen auf derselben
///    Seite stehen, ebenso `k.ende`, wenn der ganze Block zusammenbleiben
///    soll. Sonst beginnt die Überschrift auf einer neuen Seite
///    ([neueSeiteVor]). Ein solcher Block darf nicht höher als eine Seite
///    sein.
///
/// Wichtig beim Bauen: Jeder Baustein (auch eine Tabellenkopfzeile) darf nur
/// einmal im Dokument stehen. Die Bibliothek (pdf 3.13.1) merkt sich die
/// Lage am Baustein selbst; eine geteilte Kopfzeile landete in der
/// FIFO-Inventur an der Stelle der zuletzt gesetzten Tabelle, über der
/// Überschrift (gerendert 19.11.2026). Kopfzeilen deshalb als Funktion.
///  * Schluss `k`: Steht der Merker `k.block` (Anfang des unteilbaren
///    Schlussblocks) auf einer anderen Seite als `k.vorher` (Ende des
///    Teils davor), ist der Block auf eine neue Seite gerutscht. Dann
///    bekommt er einen eigenen Tabellenkopf ([kopfMitnehmen]), damit die
///    mitgenommenen Zeilen beschriftet sind.
class PdfUmbruch {
  final Set<String> neueSeiteVor = {};
  final Set<String> kopfMitnehmen = {};
  final Map<String, PdfSeitenmerker> _merker = {};

  PdfSeitenmerker merker(String schluessel) =>
      _merker.putIfAbsent(schluessel, PdfSeitenmerker.new);

  /// Überschrift mit Merker; bei Bedarf mit Seitenumbruch davor.
  List<pw.Widget> ueberschrift(String schluessel, pw.Widget ueberschrift) => [
        if (neueSeiteVor.contains(schluessel)) pw.NewPage(),
        ueberschrift,
        merker('$schluessel.titel'),
      ];

  bool _pruefen() {
    var geaendert = false;
    for (final e in _merker.entries) {
      final k = e.key;
      if (k.endsWith('.titel')) {
        final basis = k.substring(0, k.length - 6);
        // Ohne `.start` gilt `.ende`: Der ganze Block gehört auf die Seite
        // seiner Überschrift.
        final start =
            _merker['$basis.start']?.seite ?? _merker['$basis.ende']?.seite;
        final ende = _merker['$basis.ende']?.seite;
        final getrennt = (start != null && start != e.value.seite) ||
            (ende != null && ende != e.value.seite);
        if (e.value.seite != null && getrennt && neueSeiteVor.add(basis)) {
          geaendert = true;
        }
      } else if (k.endsWith('.block')) {
        final basis = k.substring(0, k.length - 6);
        final vorher = _merker['$basis.vorher']?.seite;
        if (e.value.seite != null &&
            vorher != null &&
            vorher != e.value.seite &&
            kopfMitnehmen.add(basis)) {
          geaendert = true;
        }
      }
    }
    return geaendert;
  }
}

/// Baut das Dokument, bis keine Umbruchregel mehr verletzt ist.
Future<Uint8List> pdfMitUmbruchpruefung(
  pw.Document Function(PdfUmbruch umbruch) bauen,
) async {
  final umbruch = PdfUmbruch();
  late Uint8List bytes;
  for (var durchgang = 0; durchgang < 5; durchgang++) {
    umbruch._merker.clear();
    bytes = await bauen(umbruch).save();
    if (!umbruch._pruefen()) break;
  }
  return bytes;
}
