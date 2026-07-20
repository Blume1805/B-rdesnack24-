/// DATEV-Export (EXTF-Buchungsstapel) für die Steuerkanzlei.
///
/// Erzeugt aus den aggregierten Tageslosungen (RPC `datev_export_rows`)
/// eine CSV-Datei im DATEV-Format 700 („EXTF"-Buchungsstapel), die die
/// Kanzlei direkt in DATEV Rechnungswesen importieren kann. Je Tag und
/// Steuersatz entsteht eine Buchungszeile: Kasse (SKR 03 Konto 1000) an
/// Erlöse 7 % (8300) bzw. 19 % (8400) — Automatikkonten, daher ohne
/// BU-Schlüssel. Beträge brutto mit Dezimal-KOMMA (DATEV-Konvention),
/// Belegdatum im Format TTMM.
library;

/// Eine aggregierte Tageslosung aus der RPC.
class DatevRow {
  const DatevRow({
    required this.bookingDate,
    required this.taxRate,
    required this.gross,
  });

  final DateTime bookingDate;
  final double taxRate;
  final double gross;

  factory DatevRow.fromJson(Map<String, dynamic> j) => DatevRow(
        bookingDate: DateTime.parse(j['booking_date'].toString()),
        taxRate: (j['tax_rate'] as num?)?.toDouble() ?? 19,
        gross: (j['gross'] as num?)?.toDouble() ?? 0,
      );
}

/// SKR-03-Konten laut Verfahrensdokumentation Kapitel 5/9.
const kDatevKontoKasse = '1000';
const kDatevKontoErloese7 = '8300';
const kDatevKontoErloese19 = '8400';

String _two(int v) => v.toString().padLeft(2, '0');

/// Betrag in DATEV-Schreibweise: Dezimal-Komma, keine Tausendertrenner.
String datevAmount(double v) => v.toStringAsFixed(2).replaceAll('.', ',');

/// Baut den vollständigen EXTF-Buchungsstapel (Header + Spaltenzeile +
/// Buchungszeilen). [consultantId]/[clientId] sind Berater- und
/// Mandantennummer der Kanzlei — dürfen leer sein (dann trägt die
/// Kanzlei sie beim Import ein).
String buildDatevBuchungsstapel({
  required List<DatevRow> rows,
  required DateTime from,
  required DateTime to,
  String consultantId = '',
  String clientId = '',
  DateTime? createdAt,
}) {
  final now = createdAt ?? DateTime.now();
  final created = '${now.year}${_two(now.month)}${_two(now.day)}'
      '${_two(now.hour)}${_two(now.minute)}${_two(now.second)}000';
  String d8(DateTime d) => '${d.year}${_two(d.month)}${_two(d.day)}';

  // Kopfzeile 1 — Metadaten des Stapels (DATEV-Format 700, Kategorie 21 =
  // Buchungsstapel, Formatversion 13). Wirtschaftsjahresbeginn = 1.1. des
  // Von-Jahres, Sachkontenlänge 4 (SKR 03), Festschreibung 0 = die
  // Kanzlei schreibt beim Import fest.
  final header = [
    '"EXTF"',
    '700',
    '21',
    '"Buchungsstapel"',
    '13',
    created,
    '',
    '"BS"',
    '"Boerdesnack24 App"',
    '',
    consultantId.isEmpty ? '0' : consultantId,
    clientId.isEmpty ? '0' : clientId,
    '${from.year}0101',
    '4',
    d8(from),
    d8(to),
    '"Automatenumsaetze App"',
    '',
    '1',
    '0',
    '0',
    '"EUR"',
  ].join(
    ';',
  );

  const captions =
      '"Umsatz (ohne Soll/Haben-Kz)";"Soll/Haben-Kennzeichen";"WKZ Umsatz";'
      '"Kurs";"Basis-Umsatz";"WKZ Basis-Umsatz";"Konto";'
      '"Gegenkonto (ohne BU-Schlüssel)";"BU-Schlüssel";"Belegdatum";'
      '"Belegfeld 1";"Belegfeld 2";"Skonto";"Buchungstext"';

  final lines = <String>[header, captions];
  for (final r in rows) {
    final isReduced = r.taxRate < 10;
    final gegenkonto = isReduced ? kDatevKontoErloese7 : kDatevKontoErloese19;
    final belegdatum = '${_two(r.bookingDate.day)}${_two(r.bookingDate.month)}';
    final beleg1 = 'TL${d8(r.bookingDate)}-${isReduced ? '7' : '19'}';
    final text = 'Tageslosung App-Verkaeufe '
        '${isReduced ? '7' : '19'} % '
        '${_two(r.bookingDate.day)}.${_two(r.bookingDate.month)}.${r.bookingDate.year}';
    lines.add(
      [
        datevAmount(r.gross),
        '"S"',
        '"EUR"',
        '',
        '',
        '',
        kDatevKontoKasse,
        gegenkonto,
        '',
        belegdatum,
        '"$beleg1"',
        '',
        '',
        '"$text"',
      ].join(';'),
    );
  }
  // DATEV erwartet CRLF-Zeilenenden.
  return lines.join('\r\n');
}
