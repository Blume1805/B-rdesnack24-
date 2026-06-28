import 'package:boerdesnack24/features/finance/domain/entities/finance_period.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('FinancePeriod', () {
    test('currentMonth umfasst ersten bis letzten Tag', () {
      final p = FinancePeriod.currentMonth(DateTime(2026, 2, 15));
      expect(p.fromIso, '2026-02-01');
      expect(p.toIso, '2026-02-28'); // 2026 ist kein Schaltjahr
    });

    test('yearToDate beginnt am 1. Januar', () {
      final p = FinancePeriod.yearToDate(DateTime(2026, 6, 28));
      expect(p.fromIso, '2026-01-01');
      expect(p.toIso, '2026-06-28');
    });

    test('ISO-Formatierung füllt führende Nullen', () {
      final p = FinancePeriod(from: DateTime(2026, 1, 3), to: DateTime(2026, 1, 9));
      expect(p.fromIso, '2026-01-03');
      expect(p.toIso, '2026-01-09');
    });
  });
}
