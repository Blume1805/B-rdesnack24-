import 'package:equatable/equatable.dart';

import 'finance_direction.dart';

/// Eine einzelne Buchung (ein sevDesk-Beleg oder eine manuelle Erfassung).
///
/// Bis zum 24.08.2026 zeigte das Finanzdashboard ausschließlich Summen je
/// Konto. Welcher Beleg hinter „3400: 1.240,00 €" steckt, liess sich in der
/// App nicht beantworten — für eine Auswertung, an der Gesellschafter-
/// entscheidungen hängen, zu wenig.
class FinanceBooking extends Equatable {
  const FinanceBooking({
    required this.id,
    required this.date,
    required this.accountCode,
    required this.accountName,
    required this.direction,
    required this.description,
    required this.net,
    required this.tax,
    required this.gross,
    required this.taxRate,
    required this.source,
    required this.sourceRef,
    required this.sourceAccountCode,
  });

  final String id;
  final DateTime date;
  final String accountCode;
  final String accountName;
  final String direction; // revenue | expense | asset | liability
  final String? description;
  final double net;
  final double tax;
  final double gross;
  final double taxRate;
  final String source; // sevdesk | manual | bwa_upload
  final String? sourceRef;

  /// Kontonummer, wie sie das Quellsystem gemeldet hat. `null` bedeutet:
  /// sevDesk hat kein im Kontenstamm bekanntes Konto mitgeliefert, die
  /// Buchung sitzt auf einem Sammelkonto.
  final String? sourceAccountCode;

  bool get isRevenue => direction == 'revenue';
  bool get isExpense => direction == 'expense';

  /// Weder Erlös noch Aufwand — Bestands- und Kapitalkonten.
  ///
  /// Wichtigster Fall: die Privatkonten 1800–1999 des SKR 03
  /// (Privatentnahmen, Privateinlagen). Sie berühren das Kapitalkonto, nicht
  /// das Ergebnis. Bis zum 25.08.2026 zeigte die App alles, was kein Erlös
  /// war, als „Aufwand" — zwei Privateinlagen über 347,00 € standen deshalb
  /// als Kosten in der Auswertung.
  bool get isNeutral => !isRevenue && !isExpense;

  String get directionLabel => richtungsBezeichnung(direction);

  /// Fliesst bei dieser Buchung Geld ab? Steuert Vorzeichen und Farbe.
  /// Ein negativer Betrag dreht die Richtung um — eine Erstattung auf einem
  /// Aufwandskonto ist Geld, das zurückkommt.
  bool get istAuszahlung => geldFliesstAb(direction, accountCode, net);

  /// Erstattung eines Aufwands (oder Minderung eines Erlöses).
  bool get istErstattung => net < 0;

  /// True, wenn das Konto geraten (Sammelkonto) statt übernommen wurde.
  bool get kontoGeschaetzt => source == 'sevdesk' && sourceAccountCode == null;

  String get sourceLabel {
    switch (source) {
      case 'sevdesk':
        return 'sevDesk';
      case 'manual':
        return 'manuell';
      case 'bwa_upload':
        return 'BWA-Import';
      default:
        return source;
    }
  }

  factory FinanceBooking.fromJson(Map<String, dynamic> j) => FinanceBooking(
        id: (j['id'] ?? '').toString(),
        date: DateTime.tryParse((j['booking_date'] ?? '').toString()) ??
            DateTime(1970),
        accountCode: (j['account_code'] ?? '').toString(),
        accountName: (j['account_name'] ?? '').toString(),
        direction: (j['direction'] ?? 'expense').toString(),
        description: j['description']?.toString(),
        net: _toDouble(j['amount_net']),
        tax: _toDouble(j['amount_tax']),
        gross: _toDouble(j['amount_gross']),
        taxRate: _toDouble(j['tax_rate']),
        source: (j['source'] ?? 'manual').toString(),
        sourceRef: j['source_ref']?.toString(),
        sourceAccountCode: j['source_account_code']?.toString(),
      );

  @override
  List<Object?> get props => [id, date, accountCode, net, tax];
}

/// Eine Seite Einzelbuchungen samt Gesamtzahl im Zeitraum.
class FinanceBookingPage extends Equatable {
  const FinanceBookingPage({required this.total, required this.bookings});

  final int total;
  final List<FinanceBooking> bookings;

  bool get isEmpty => bookings.isEmpty;

  /// Wie viele Buchungen der Zeitraum insgesamt hat, aber nicht geliefert
  /// wurden — die Liste ist serverseitig begrenzt.
  int get notShown => total - bookings.length;

  factory FinanceBookingPage.fromJson(Map<String, dynamic> j) =>
      FinanceBookingPage(
        total: (j['total'] as num?)?.toInt() ?? 0,
        bookings: ((j['rows'] as List?) ?? const [])
            .map(
              (e) => FinanceBooking.fromJson(
                Map<String, dynamic>.from(e as Map),
              ),
            )
            .toList(),
      );

  @override
  List<Object?> get props => [total, bookings];
}

double _toDouble(dynamic v) {
  if (v == null) return 0;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString()) ?? 0;
}
