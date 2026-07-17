import 'package:equatable/equatable.dart';

/// Aggregierter Betrag je SKR-03-Konto.
class AccountAmount extends Equatable {
  const AccountAmount({
    required this.code,
    required this.name,
    required this.direction,
    required this.net,
    required this.tax,
    required this.gross,
  });

  final String code;
  final String name;
  final String direction; // revenue | expense | asset | liability
  final double net;
  final double tax;
  final double gross;

  bool get isRevenue => direction == 'revenue';
  bool get isExpense => direction == 'expense';

  factory AccountAmount.fromJson(Map<String, dynamic> j) => AccountAmount(
        // Defensiv: die RPC kann in seltenen Fällen null oder unerwartete
        // Typen liefern. Aussteigen mit „minified:qY" hätte in Release
        // den ganzen Screen zerlegt, siehe Screenshot #9859.
        code: (j['code'] ?? '').toString(),
        name: (j['name'] ?? '').toString(),
        direction: (j['direction'] ?? 'expense').toString(),
        net: _toDouble(j['net']),
        tax: _toDouble(j['tax']),
        gross: _toDouble(j['gross']),
      );

  @override
  List<Object?> get props => [code, net, tax, gross];
}

/// Kennzahlen einer Finanzauswertung (Ergebnis der RPC finance_summary).
class FinanceSummary extends Equatable {
  const FinanceSummary({
    required this.revenueNet7,
    required this.revenueNet19,
    required this.revenueNet,
    required this.expenseNet,
    required this.resultNet,
    required this.vatCollected,
    required this.vatPaid,
    required this.accounts,
  });

  final double revenueNet7;
  final double revenueNet19;
  final double revenueNet;
  final double expenseNet;
  final double resultNet;
  final double vatCollected;
  final double vatPaid;
  final List<AccountAmount> accounts;

  factory FinanceSummary.fromJson(Map<String, dynamic> j) => FinanceSummary(
        revenueNet7: _toDouble(j['revenue_net_7']),
        revenueNet19: _toDouble(j['revenue_net_19']),
        revenueNet: _toDouble(j['revenue_net']),
        expenseNet: _toDouble(j['expense_net']),
        resultNet: _toDouble(j['result_net']),
        vatCollected: _toDouble(j['vat_collected']),
        vatPaid: _toDouble(j['vat_paid']),
        accounts: ((j['accounts'] as List?) ?? const [])
            .map((e) => AccountAmount.fromJson(e as Map<String, dynamic>))
            .toList(),
      );

  @override
  List<Object?> get props =>
      [revenueNet7, revenueNet19, revenueNet, expenseNet, resultNet];
}

double _toDouble(dynamic v) {
  if (v == null) return 0;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString()) ?? 0;
}
