import 'package:boerdesnack24/features/finance/domain/entities/finance_summary.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('FinanceSummary.fromJson liest Kennzahlen und Konten', () {
    final s = FinanceSummary.fromJson({
      'revenue_net_7': 1000,
      'revenue_net_19': 500.50,
      'revenue_net': 1500.50,
      'expense_net': 400,
      'result_net': 1100.50,
      'vat_collected': 165.10,
      'vat_paid': 76,
      'accounts': [
        {
          'code': '8300',
          'name': 'Erlöse 7 %',
          'direction': 'revenue',
          'net': 1000,
          'tax': 70,
          'gross': 1070,
        },
      ],
    });

    expect(s.revenueNet7, 1000);
    expect(s.revenueNet19, 500.50);
    expect(s.resultNet, 1100.50);
    expect(s.accounts, hasLength(1));
    expect(s.accounts.first.code, '8300');
    expect(s.accounts.first.isRevenue, isTrue);
  });

  test('fehlende Felder werden zu 0 / leerer Liste', () {
    final s = FinanceSummary.fromJson({});
    expect(s.revenueNet, 0);
    expect(s.accounts, isEmpty);
  });
}
