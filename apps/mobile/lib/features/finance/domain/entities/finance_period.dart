import 'package:equatable/equatable.dart';

/// Auswertungszeitraum (inklusive Grenzen).
class FinancePeriod extends Equatable {
  const FinancePeriod({required this.from, required this.to});

  final DateTime from;
  final DateTime to;

  /// Aktueller Kalendermonat.
  factory FinancePeriod.currentMonth([DateTime? now]) {
    final n = now ?? DateTime.now();
    return FinancePeriod(
      from: DateTime(n.year, n.month, 1),
      to: DateTime(n.year, n.month + 1, 0),
    );
  }

  /// Laufendes Jahr (YTD).
  factory FinancePeriod.yearToDate([DateTime? now]) {
    final n = now ?? DateTime.now();
    return FinancePeriod(from: DateTime(n.year, 1, 1), to: n);
  }

  static String _iso(DateTime d) => '${d.year.toString().padLeft(4, '0')}-'
      '${d.month.toString().padLeft(2, '0')}-'
      '${d.day.toString().padLeft(2, '0')}';

  String get fromIso => _iso(from);
  String get toIso => _iso(to);

  @override
  List<Object?> get props => [fromIso, toIso];
}
