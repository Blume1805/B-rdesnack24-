import 'package:equatable/equatable.dart';

import 'finance_summary.dart';

/// Ein Monatspunkt aus dem 12-Monats-Trend.
class TrendPoint extends Equatable {
  const TrendPoint({
    required this.month,
    required this.revenueNet,
    required this.expenseNet,
    required this.resultNet,
  });
  final String month; // YYYY-MM
  final double revenueNet;
  final double expenseNet;
  final double resultNet;

  factory TrendPoint.fromJson(Map<String, dynamic> j) => TrendPoint(
        month: (j['month'] ?? '').toString(),
        revenueNet: _toDouble(j['revenue_net']),
        expenseNet: _toDouble(j['expense_net']),
        resultNet: _toDouble(j['result_net']),
      );

  @override
  List<Object?> get props => [month, revenueNet, expenseNet, resultNet];
}

/// Umsatz und Verkäufe je Automat im gewählten Zeitraum.
class MachineKpi extends Equatable {
  const MachineKpi({
    required this.machineId,
    required this.label,
    required this.code,
    required this.gross,
    required this.purchasesCount,
    required this.avgBasket,
  });
  final String? machineId;
  final String label;
  final String? code;
  final double gross;
  final int purchasesCount;
  final double avgBasket;

  factory MachineKpi.fromJson(Map<String, dynamic> j) => MachineKpi(
        machineId: j['machine_id'] as String?,
        label: (j['label'] ?? 'unbekannt').toString(),
        code: j['code'] as String?,
        gross: _toDouble(j['gross']),
        purchasesCount: (j['purchases_count'] as num?)?.toInt() ?? 0,
        avgBasket: _toDouble(j['avg_basket']),
      );

  @override
  List<Object?> get props =>
      [machineId, label, code, gross, purchasesCount, avgBasket];
}

/// Umsatz je Produkt im gewählten Zeitraum (Top-N).
class TopProductKpi extends Equatable {
  const TopProductKpi({
    required this.productId,
    required this.name,
    required this.quantity,
    required this.gross,
  });
  final String? productId;
  final String name;
  final int quantity;
  final double gross;

  factory TopProductKpi.fromJson(Map<String, dynamic> j) => TopProductKpi(
        productId: j['product_id'] as String?,
        name: (j['name'] ?? 'unbekannt').toString(),
        quantity: (j['quantity'] as num?)?.toInt() ?? 0,
        gross: _toDouble(j['gross']),
      );

  @override
  List<Object?> get props => [productId, name, quantity, gross];
}

/// App-Kunden-Kennzahlen im Zeitraum.
class CustomerKpi extends Equatable {
  const CustomerKpi({
    required this.purchasesCount,
    required this.appGross,
    required this.activeCustomers,
    required this.avgBasket,
  });
  final int purchasesCount;
  final double appGross;
  final int activeCustomers;
  final double avgBasket;

  factory CustomerKpi.fromJson(Map<String, dynamic> j) => CustomerKpi(
        purchasesCount: (j['purchases_count'] as num?)?.toInt() ?? 0,
        appGross: _toDouble(j['app_gross']),
        activeCustomers: (j['active_customers'] as num?)?.toInt() ?? 0,
        avgBasket: _toDouble(j['avg_basket']),
      );

  @override
  List<Object?> get props =>
      [purchasesCount, appGross, activeCustomers, avgBasket];
}

/// Ableitete Kennzahlen inkl. Vergleiche.
class DerivedKpis extends Equatable {
  const DerivedKpis({
    required this.grossMarginPct,
    required this.netMarginPct,
    required this.ebitdaMarginPct,
    required this.cashflowOperating,
    required this.revenueGrowthYoyPct,
    required this.revenueGrowthMomPct,
    required this.resultGrowthYoyPct,
    required this.resultGrowthMomPct,
  });

  final double grossMarginPct;
  final double netMarginPct;
  final double ebitdaMarginPct;
  final double cashflowOperating;
  final double? revenueGrowthYoyPct;
  final double? revenueGrowthMomPct;
  final double? resultGrowthYoyPct;
  final double? resultGrowthMomPct;

  factory DerivedKpis.fromJson(Map<String, dynamic> j) => DerivedKpis(
        grossMarginPct: _toDouble(j['gross_margin_pct']),
        netMarginPct: _toDouble(j['net_margin_pct']),
        ebitdaMarginPct: _toDouble(j['ebitda_margin_pct']),
        cashflowOperating: _toDouble(j['cashflow_operating']),
        revenueGrowthYoyPct: _toDoubleN(j['revenue_growth_yoy_pct']),
        revenueGrowthMomPct: _toDoubleN(j['revenue_growth_mom_pct']),
        resultGrowthYoyPct: _toDoubleN(j['result_growth_yoy_pct']),
        resultGrowthMomPct: _toDoubleN(j['result_growth_mom_pct']),
      );

  @override
  List<Object?> get props => [
        grossMarginPct,
        netMarginPct,
        ebitdaMarginPct,
        cashflowOperating,
        revenueGrowthYoyPct,
        revenueGrowthMomPct,
        resultGrowthYoyPct,
        resultGrowthMomPct,
      ];
}

/// Vollständiges KPI-Paket aus `public.finance_kpis`.
class FinanceKpis extends Equatable {
  const FinanceKpis({
    required this.current,
    required this.priorYear,
    required this.priorPeriod,
    required this.trend,
    required this.machines,
    required this.topProducts,
    required this.customer,
    required this.derived,
    required this.periodDays,
  });

  final FinanceSummary current;
  final FinanceSummary priorYear;
  final FinanceSummary priorPeriod;
  final List<TrendPoint> trend;
  final List<MachineKpi> machines;
  final List<TopProductKpi> topProducts;
  final CustomerKpi customer;
  final DerivedKpis derived;

  /// Anzahl Tage im gewählten Zeitraum — wird für pro-Tag-Benchmarks
  /// (Umsatz/Tag, Verkäufe/Tag) gebraucht. Fallback 1, damit die
  /// Division auch bei fehlender period-Node nicht crasht.
  final int periodDays;

  factory FinanceKpis.fromJson(Map<String, dynamic> j) {
    final period = (j['period'] as Map?) ?? const {};
    return FinanceKpis(
      current: FinanceSummary.fromJson(
          Map<String, dynamic>.from(j['current'] as Map)),
      priorYear: FinanceSummary.fromJson(
          Map<String, dynamic>.from(j['prior_year'] as Map)),
      priorPeriod: FinanceSummary.fromJson(
          Map<String, dynamic>.from(j['prior_period'] as Map)),
      trend: ((j['trend'] as List?) ?? const [])
          .map((e) => TrendPoint.fromJson(Map<String, dynamic>.from(e as Map)))
          .toList(),
      machines: ((j['machines'] as List?) ?? const [])
          .map((e) => MachineKpi.fromJson(Map<String, dynamic>.from(e as Map)))
          .toList(),
      topProducts: ((j['top_products'] as List?) ?? const [])
          .map((e) =>
              TopProductKpi.fromJson(Map<String, dynamic>.from(e as Map)))
          .toList(),
      customer:
          CustomerKpi.fromJson(Map<String, dynamic>.from(j['customer'] as Map)),
      derived:
          DerivedKpis.fromJson(Map<String, dynamic>.from(j['derived'] as Map)),
      periodDays: (period['days'] as num?)?.toInt() ?? 1,
    );
  }

  @override
  List<Object?> get props => [
        current,
        priorYear,
        priorPeriod,
        trend,
        machines,
        topProducts,
        customer,
        derived,
        periodDays,
      ];
}

double _toDouble(dynamic v) {
  if (v == null) return 0;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString()) ?? 0;
}

double? _toDoubleN(dynamic v) {
  if (v == null) return null;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString());
}
