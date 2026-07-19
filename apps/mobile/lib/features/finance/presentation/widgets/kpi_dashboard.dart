import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/finance_kpis.dart';
import '../controllers/finance_providers.dart';

/// KPI-Dashboard-Block: KPI-Kacheln mit Trend-Sparkline, Vergleich Vorjahr/
/// Vormonat, Cashflow-Chart und Automaten-Balken. Wird auf dem
/// `FinanceScreen` unterhalb der Zeitraum-Auswahl gerendert.
class KpiDashboard extends ConsumerWidget {
  const KpiDashboard({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final kpis = ref.watch(financeKpisProvider);
    return kpis.when(
      loading: () => const Padding(
        padding: EdgeInsets.all(32),
        child: Center(child: CircularProgressIndicator(color: AppColors.brand)),
      ),
      error: (e, _) => AppCard(
        color: const Color(0xFFF7DBDB),
        borderColor: AppColors.statusCritical,
        child: Text('KPIs konnten nicht geladen werden: $e',
            style: AppTypography.body(size: 13, color: AppColors.ink)),
      ),
      data: (k) => _KpiBody(k: k),
    );
  }
}

class _KpiBody extends StatelessWidget {
  const _KpiBody({required this.k});
  final FinanceKpis k;
  @override
  Widget build(BuildContext context) {
    final avgRevenuePerDay =
        k.periodDays > 0 ? k.current.revenueNet / k.periodDays : 0.0;
    final avgSalesPerDay =
        k.periodDays > 0 ? k.customer.purchasesCount / k.periodDays : 0.0;
    final wareneinsatzquotePct = 100 - k.derived.grossMarginPct;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const SectionHeader(eyebrow: 'Kennzahlen', title: 'Rentabilität'),
        const SizedBox(height: AppSpacing.s3),
        LayoutBuilder(builder: (context, c) {
          final compact = c.maxWidth < 480;
          return GridView.count(
            crossAxisCount: compact ? 2 : 3,
            crossAxisSpacing: AppSpacing.s3,
            mainAxisSpacing: AppSpacing.s3,
            childAspectRatio: compact ? 1.05 : 1.1,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            children: [
              _KpiTile(
                label: 'Umsatz (netto)',
                value: Formatters.euro(k.current.revenueNet),
                deltaYoyPct: k.derived.revenueGrowthYoyPct,
                deltaMomPct: k.derived.revenueGrowthMomPct,
                trend: k.trend.map((t) => t.revenueNet).toList(),
              ),
              _KpiTile(
                label: 'Ø Umsatz / Tag',
                value: Formatters.euro(avgRevenuePerDay),
                sub: 'Zielband: 15 – 50 €/Tag · Automat',
                trend: k.trend.map((t) => t.revenueNet / 30.0).toList(),
                targetLower: 15,
                targetUpper: 50,
                targetLabel: '15 – 50 €',
              ),
              _KpiTile(
                label: 'Ergebnis (netto)',
                value: Formatters.euro(k.current.resultNet),
                deltaYoyPct: k.derived.resultGrowthYoyPct,
                deltaMomPct: k.derived.resultGrowthMomPct,
                trend: k.trend.map((t) => t.resultNet).toList(),
                emphasizePositive: true,
              ),
              _KpiTile(
                // \u00AD = weiches Trennzeichen: bricht lange Titel an der
                // Silbengrenze MIT Trennstrich um (statt mitten im Wort).
                label: 'Umsatz\u00ADrendite',
                value: '${k.derived.netMarginPct.toStringAsFixed(1)} %',
                sub: 'Ergebnis / Umsatz · Ziel 25 – 35 %',
                trend: k.trend
                    .map((t) => t.revenueNet > 0
                        ? (t.resultNet / t.revenueNet) * 100
                        : 0.0)
                    .toList(),
                targetLower: 25,
                targetUpper: 35,
                targetLabel: '25 – 35 %',
              ),
              _KpiTile(
                label: 'Rohertrags\u00ADmarge',
                value: '${k.derived.grossMarginPct.toStringAsFixed(1)} %',
                sub: '(Umsatz – Wareneinsatz) / Umsatz · Ziel 50 – 70 %',
                trend: k.trend
                    .map((t) => t.revenueNet > 0
                        ? ((t.revenueNet - t.expenseNet) / t.revenueNet) * 100
                        : 0.0)
                    .toList(),
                targetLower: 50,
                targetUpper: 70,
                targetLabel: '50 – 70 %',
              ),
              _KpiTile(
                label: 'Waren\u00ADeinsatz\u00ADquote',
                value: '${wareneinsatzquotePct.toStringAsFixed(1)} %',
                sub: 'Wareneinsatz / Umsatz · Ziel 30 – 40 %',
                trend: k.trend
                    .map((t) => t.revenueNet > 0
                        ? (t.expenseNet / t.revenueNet) * 100
                        : 0.0)
                    .toList(),
                targetLower: 30,
                targetUpper: 40,
                targetLabel: '30 – 40 %',
                lowerIsBetter: true,
              ),
              _KpiTile(
                label: 'EBITDA-Marge',
                value: '${k.derived.ebitdaMarginPct.toStringAsFixed(1)} %',
                sub: 'ohne AfA/Zinsen/Steuern *',
                trend: k.trend
                    .map((t) => t.revenueNet > 0
                        ? (t.resultNet / t.revenueNet) * 100
                        : 0.0)
                    .toList(),
              ),
              _KpiTile(
                label: 'Operativer Cashflow',
                value: Formatters.euro(k.derived.cashflowOperating),
                sub: 'Einzahlungen – Auszahlungen (brutto)',
                trend: k.trend.map((t) => t.resultNet).toList(),
              ),
              _KpiTile(
                label: 'Ø Warenkorb',
                value: Formatters.euro(k.customer.avgBasket),
                sub: 'App-Käufe · Zielband 1 – 3 €',
                trend: k.trend.map((t) => k.customer.avgBasket).toList(),
                targetLower: 1,
                targetUpper: 3,
                targetLabel: '1 – 3 €',
              ),
              _KpiTile(
                label: 'Ø Verkäufe / Tag',
                value: avgSalesPerDay.toStringAsFixed(1),
                sub: 'App-Käufe · Zielband 10 – 50/Tag · Automat',
                trend: k.trend.map((t) => avgSalesPerDay).toList(),
                targetLower: 10,
                targetUpper: 50,
                targetLabel: '10 – 50',
              ),
            ],
          );
        }),
        const SizedBox(height: AppSpacing.s3),
        _FootnoteEbitda(),
        const SizedBox(height: AppSpacing.s5),
        const SectionHeader(
            eyebrow: 'Trend & Vergleich', title: 'Cashflow-Entwicklung'),
        const SizedBox(height: AppSpacing.s3),
        GestureDetector(
          onTap: () => _showZoomedChart(
            context,
            title: 'Cashflow-Entwicklung',
            subtitle: 'Umsatz (gold) und Aufwand (schwarz) je Monat',
            aspectRatio: 1.45,
            chart: _CashflowChart(k: k, height: double.infinity),
          ),
          child: AppCard(child: _CashflowChart(k: k)),
        ),
        const SizedBox(height: AppSpacing.s5),
        const SectionHeader(
            eyebrow: 'Vergleich', title: 'Aktueller vs. Vergleichszeitraum'),
        const SizedBox(height: AppSpacing.s3),
        GestureDetector(
          onTap: () => _showZoomedChart(
            context,
            title: 'Aktueller vs. Vergleichszeitraum',
            subtitle: 'Umsatz (gold) und Ergebnis (grün)',
            aspectRatio: 1.6,
            chart: _ComparisonBars(k: k, height: double.infinity, bare: true),
          ),
          child: _ComparisonBars(k: k),
        ),
        const SizedBox(height: AppSpacing.s5),
        const SectionHeader(
            eyebrow: 'Automaten-Business', title: 'Umsatz je Automat'),
        const SizedBox(height: AppSpacing.s3),
        _MachineList(k: k),
        const SizedBox(height: AppSpacing.s5),
        const SectionHeader(
            eyebrow: 'Automaten-Business', title: 'App-Käufe im Zeitraum'),
        const SizedBox(height: AppSpacing.s3),
        _CustomerCard(k: k),
        if (k.topProducts.isNotEmpty) ...[
          const SizedBox(height: AppSpacing.s5),
          const SectionHeader(eyebrow: 'Top', title: 'Meistverkaufte Produkte'),
          const SizedBox(height: AppSpacing.s3),
          _TopProducts(k: k),
        ],
      ],
    );
  }
}

/// Zoom-Ansicht für Dashboard-Grafiken: öffnet die Grafik groß in einem
/// Dialog (Tap auf Kachel oder Chart). Schließen per X oder Tap daneben.
///
/// [aspectRatio] = Breite/Höhe der Grafik in der normalen Ansicht — die
/// Zoom-Darstellung behält damit exakt das gewohnte Format und wird nur
/// auf die maximale Dialog-Breite skaliert (kein Verzerren in die Höhe).
Future<void> _showZoomedChart(
  BuildContext context, {
  required String title,
  String? subtitle,
  required Widget chart,
  required double aspectRatio,
}) {
  return showDialog<void>(
    context: context,
    builder: (context) {
      return Dialog(
        backgroundColor: AppColors.surfaceCard,
        insetPadding: const EdgeInsets.all(AppSpacing.s2),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(AppRadii.lg),
        ),
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s4),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(
                      title,
                      style: AppTypography.display(
                        size: 18,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    ),
                  ),
                  IconButton(
                    tooltip: 'Schließen',
                    icon: const Icon(Icons.close, color: AppColors.ink),
                    onPressed: () => Navigator.of(context).pop(),
                  ),
                ],
              ),
              if (subtitle != null) ...[
                Text(
                  subtitle,
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w600,
                    color: AppColors.textMuted,
                  ),
                ),
                const SizedBox(height: AppSpacing.s2),
              ],
              const SizedBox(height: AppSpacing.s3),
              SizedBox(
                width: double.maxFinite,
                child: AspectRatio(
                  aspectRatio: aspectRatio,
                  child: chart,
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}

class _FootnoteEbitda extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text(
      '* EBITDA wird für Etappe 1 vereinfacht mit dem Betriebsergebnis '
      'gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). '
      'Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidität 1/2/3, '
      'EK-Quote, ROI und die echte EBITDA-Berechnung dazu.',
      style: AppTypography.body(size: 11, color: AppColors.textMuted)
          .copyWith(height: 1.35),
    );
  }
}

/// Einzelne KPI-Kachel: großer Wert, Vorjahres-/Vormonatsdelta,
/// optionales Zielband (gestrichelte rote Linien in der Sparkline) und
/// eine leichte Sparkline in den unteren 40 % der Kachel.
///
/// `targetLower` und `targetUpper` sind in derselben Einheit wie die
/// Trend-Werte anzugeben (also z. B. Prozent-Zahlen für Margen-KPIs,
/// EUR für Umsatz-KPIs). Wenn beide Grenzen gesetzt sind, wird ein
/// Zielband dargestellt; ist nur eine gesetzt, entsteht eine einzelne
/// rote Zielline.
///
/// `lowerIsBetter` schaltet die Farbcodierung des Ist-Werts um, wenn
/// niedrigere Werte besser sind (z. B. Wareneinsatzquote): Ist-Wert
/// innerhalb/unter dem Band → grün, darüber → rot.
class _KpiTile extends StatelessWidget {
  const _KpiTile({
    required this.label,
    required this.value,
    this.sub,
    this.deltaYoyPct,
    this.deltaMomPct,
    this.trend = const [],
    this.emphasizePositive = false,
    this.targetLower,
    this.targetUpper,
    this.targetLabel,
    this.lowerIsBetter = false,
  });
  final String label;
  final String value;
  final String? sub;
  final double? deltaYoyPct;
  final double? deltaMomPct;
  final List<double> trend;
  final bool emphasizePositive;
  final double? targetLower;
  final double? targetUpper;
  final String? targetLabel;
  final bool lowerIsBetter;

  /// Tap auf die Kachel öffnet die Sparkline groß im Dialog — im selben
  /// breiten, flachen Format wie in der Kachel, nur skaliert.
  void _zoom(BuildContext context) {
    _showZoomedChart(
      context,
      title: label.replaceAll('\u00AD', ''),
      subtitle: [value, if (sub != null) sub!].join(' · '),
      aspectRatio: 2.4,
      chart: _Sparkline(
        values: trend,
        targetLower: targetLower,
        targetUpper: targetUpper,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final valueColor = emphasizePositive
        ? (value.startsWith('-')
            ? AppColors.statusCritical
            : AppColors.statusPositive)
        : AppColors.ink;
    return GestureDetector(
      onTap: trend.length >= 2 ? () => _zoom(context) : null,
      child: AppCard(
        padding: const EdgeInsets.all(AppSpacing.s3),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(
                    label.toUpperCase(),
                    style: AppTypography.body(
                      size: 10,
                      weight: FontWeight.w800,
                      color: AppColors.textMuted,
                    ).copyWith(letterSpacing: 0.6),
                  ),
                ),
                if (targetLabel != null)
                  Container(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                    decoration: BoxDecoration(
                      border: Border.all(
                          color: AppColors.statusCritical, width: 0.8),
                      borderRadius: BorderRadius.circular(AppRadii.sm),
                    ),
                    child: Text(
                      'Ziel ${targetLabel!}',
                      style: AppTypography.body(
                          size: 9,
                          weight: FontWeight.w800,
                          color: AppColors.statusCritical),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 4),
            FittedBox(
              alignment: Alignment.centerLeft,
              fit: BoxFit.scaleDown,
              child: Text(
                value,
                style: AppTypography.display(
                  size: 22,
                  weight: FontWeight.w800,
                  color: valueColor,
                ),
              ),
            ),
            if (sub != null)
              Text(
                sub!,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: AppTypography.body(
                  size: 10,
                  weight: FontWeight.w600,
                  color: AppColors.textMuted,
                ),
              ),
            const SizedBox(height: 6),
            Row(
              children: [
                _DeltaChip(label: 'Vormonat', pct: deltaMomPct),
                const SizedBox(width: 4),
                _DeltaChip(label: 'Vorjahr', pct: deltaYoyPct),
              ],
            ),
            const SizedBox(height: 6),
            Expanded(
              child: _Sparkline(
                values: trend,
                targetLower: targetLower,
                targetUpper: targetUpper,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _DeltaChip extends StatelessWidget {
  const _DeltaChip({required this.label, required this.pct});
  final String label;
  final double? pct;
  @override
  Widget build(BuildContext context) {
    if (pct == null) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
        decoration: BoxDecoration(
          color: AppColors.borderSubtle,
          borderRadius: BorderRadius.circular(AppRadii.sm),
        ),
        child: Text('$label —',
            style: AppTypography.body(
                size: 9, weight: FontWeight.w800, color: AppColors.textMuted)),
      );
    }
    final positive = pct! >= 0;
    final color =
        positive ? AppColors.statusPositive : AppColors.statusCritical;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.12),
        border: Border.all(color: color, width: 0.7),
        borderRadius: BorderRadius.circular(AppRadii.sm),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(positive ? Icons.arrow_upward : Icons.arrow_downward,
              size: 10, color: color),
          const SizedBox(width: 2),
          Text('$label ${pct!.toStringAsFixed(1)} %',
              style: AppTypography.body(
                  size: 9, weight: FontWeight.w800, color: color)),
        ],
      ),
    );
  }
}

class _Sparkline extends StatelessWidget {
  const _Sparkline({
    required this.values,
    this.targetLower,
    this.targetUpper,
  });
  final List<double> values;
  final double? targetLower;
  final double? targetUpper;

  @override
  Widget build(BuildContext context) {
    if (values.length < 2) {
      return const SizedBox.shrink();
    }
    final spots = <FlSpot>[
      for (int i = 0; i < values.length; i++) FlSpot(i.toDouble(), values[i]),
    ];
    var minY = values.reduce((a, b) => a < b ? a : b);
    var maxY = values.reduce((a, b) => a > b ? a : b);
    // Zielband ins Y-Fenster einbeziehen, damit die roten Linien nie
    // aus der Kachel rauslaufen.
    if (targetLower != null) {
      if (targetLower! < minY) minY = targetLower!;
      if (targetLower! > maxY) maxY = targetLower!;
    }
    if (targetUpper != null) {
      if (targetUpper! < minY) minY = targetUpper!;
      if (targetUpper! > maxY) maxY = targetUpper!;
    }
    final padded = (maxY - minY).abs() < 0.001;
    final xMax = (values.length - 1).toDouble();

    LineChartBarData dashedTarget(double y) => LineChartBarData(
          spots: [FlSpot(0, y), FlSpot(xMax, y)],
          isCurved: false,
          color: AppColors.statusCritical,
          barWidth: 1.4,
          isStrokeCapRound: false,
          dashArray: const [4, 3],
          dotData: const FlDotData(show: false),
        );

    return LineChart(
      LineChartData(
        minY: padded ? minY - 1 : minY,
        maxY: padded ? maxY + 1 : maxY,
        titlesData: const FlTitlesData(show: false),
        gridData: const FlGridData(show: false),
        borderData: FlBorderData(show: false),
        lineTouchData: const LineTouchData(enabled: false),
        lineBarsData: [
          LineChartBarData(
            spots: spots,
            isCurved: true,
            color: AppColors.brand,
            barWidth: 2,
            isStrokeCapRound: true,
            dotData: const FlDotData(show: false),
            belowBarData: BarAreaData(
              show: true,
              color: AppColors.brand.withValues(alpha: 0.16),
            ),
          ),
          if (targetLower != null) dashedTarget(targetLower!),
          if (targetUpper != null) dashedTarget(targetUpper!),
        ],
      ),
      duration: Duration.zero,
    );
  }
}

/// Balken-Chart mit revenue/expense je Monat (letzte 12 Monate).
class _CashflowChart extends StatelessWidget {
  const _CashflowChart({required this.k, this.height = 220});
  final FinanceKpis k;

  /// Chart-Höhe; `double.infinity` füllt den Zoom-Dialog.
  final double height;
  @override
  Widget build(BuildContext context) {
    final points = k.trend;
    if (points.isEmpty) {
      return _EmptyBox(text: 'Noch keine Trend-Daten für den Zeitraum.');
    }
    final maxAbs = points.fold<double>(0, (acc, p) {
      final revenue = p.revenueNet;
      final expense = p.expenseNet;
      final v = revenue > expense ? revenue : expense;
      return v > acc ? v : acc;
    });
    return SizedBox(
      height: height,
      child: BarChart(BarChartData(
        maxY: maxAbs > 0 ? maxAbs * 1.15 : 10,
        barGroups: [
          for (int i = 0; i < points.length; i++)
            BarChartGroupData(x: i, barsSpace: 2, barRods: [
              BarChartRodData(
                toY: points[i].revenueNet,
                color: AppColors.brand,
                width: 6,
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(3),
                  topRight: Radius.circular(3),
                ),
              ),
              BarChartRodData(
                toY: points[i].expenseNet,
                color: AppColors.ink,
                width: 6,
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(3),
                  topRight: Radius.circular(3),
                ),
              ),
            ]),
        ],
        titlesData: FlTitlesData(
          leftTitles: AxisTitles(
              sideTitles: SideTitles(
                  showTitles: true,
                  reservedSize: 46,
                  getTitlesWidget: (v, _) => Text(
                        _shortEuro(v),
                        style: AppTypography.body(
                            size: 10,
                            weight: FontWeight.w700,
                            color: AppColors.textMuted),
                      ))),
          bottomTitles: AxisTitles(
              sideTitles: SideTitles(
                  showTitles: true,
                  reservedSize: 26,
                  getTitlesWidget: (v, _) {
                    final i = v.toInt();
                    if (i < 0 || i >= points.length) return const SizedBox();
                    final month = points[i].month;
                    return Padding(
                      padding: const EdgeInsets.only(top: 4),
                      child: Text(
                        month.substring(5),
                        style: AppTypography.body(
                            size: 9,
                            weight: FontWeight.w700,
                            color: AppColors.textMuted),
                      ),
                    );
                  })),
          topTitles:
              const AxisTitles(sideTitles: SideTitles(showTitles: false)),
          rightTitles:
              const AxisTitles(sideTitles: SideTitles(showTitles: false)),
        ),
        gridData: FlGridData(
          drawVerticalLine: false,
          getDrawingHorizontalLine: (_) =>
              const FlLine(color: AppColors.borderSubtle, strokeWidth: 0.5),
        ),
        borderData: FlBorderData(show: false),
      )),
    );
  }

  String _shortEuro(double v) {
    if (v.abs() >= 1000) return '${(v / 1000).toStringAsFixed(1)} k';
    return v.toStringAsFixed(0);
  }
}

/// Nebeneinander: aktueller Zeitraum · Vormonat · Vorjahr — je Balken.
class _ComparisonBars extends StatelessWidget {
  const _ComparisonBars(
      {required this.k, this.height = 200, this.bare = false});
  final FinanceKpis k;

  /// Chart-Höhe; `double.infinity` füllt den Zoom-Dialog.
  final double height;

  /// true = ohne AppCard-Rahmen rendern (für den Zoom-Dialog).
  final bool bare;
  @override
  Widget build(BuildContext context) {
    final labels = ['Aktuell', 'Vormonat', 'Vorjahr'];
    final revenue = [
      k.current.revenueNet,
      k.priorPeriod.revenueNet,
      k.priorYear.revenueNet,
    ];
    final result = [
      k.current.resultNet,
      k.priorPeriod.resultNet,
      k.priorYear.resultNet,
    ];
    final maxV = [
      ...revenue.map((e) => e.abs()),
      ...result.map((e) => e.abs()),
    ].fold<double>(0, (a, b) => a > b ? a : b);
    final chart = SizedBox(
        height: height,
        child: BarChart(BarChartData(
          maxY: maxV > 0 ? maxV * 1.2 : 10,
          barGroups: [
            for (int i = 0; i < labels.length; i++)
              BarChartGroupData(x: i, barsSpace: 4, barRods: [
                BarChartRodData(
                    toY: revenue[i], color: AppColors.brand, width: 14),
                BarChartRodData(
                    toY: result[i], color: AppColors.statusPositive, width: 14),
              ])
          ],
          titlesData: FlTitlesData(
            leftTitles:
                const AxisTitles(sideTitles: SideTitles(showTitles: false)),
            rightTitles:
                const AxisTitles(sideTitles: SideTitles(showTitles: false)),
            topTitles:
                const AxisTitles(sideTitles: SideTitles(showTitles: false)),
            bottomTitles: AxisTitles(
              sideTitles: SideTitles(
                showTitles: true,
                reservedSize: 26,
                getTitlesWidget: (v, _) {
                  final i = v.toInt();
                  if (i < 0 || i >= labels.length) return const SizedBox();
                  return Padding(
                    padding: const EdgeInsets.only(top: 4),
                    child: Text(
                      labels[i],
                      style: AppTypography.body(
                          size: 12,
                          weight: FontWeight.w800,
                          color: AppColors.ink),
                    ),
                  );
                },
              ),
            ),
          ),
          gridData: const FlGridData(show: false),
          borderData: FlBorderData(show: false),
        )));
    return bare ? chart : AppCard(child: chart);
  }
}

/// Umsatz je Automat als horizontale Balken (sortiert nach gross).
class _MachineList extends StatelessWidget {
  const _MachineList({required this.k});
  final FinanceKpis k;
  @override
  Widget build(BuildContext context) {
    if (k.machines.isEmpty) {
      return const _EmptyBox(
          text: 'Im gewählten Zeitraum wurden keine '
              'Umsätze je Automat erfasst.');
    }
    final maxGross =
        k.machines.map((m) => m.gross).reduce((a, b) => a > b ? a : b);
    return AppCard(
      child: Column(
        children: [
          for (final m in k.machines) ...[
            Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(m.label,
                          style: AppTypography.body(
                              size: 14,
                              weight: FontWeight.w800,
                              color: AppColors.ink)),
                      Text(
                        '${m.purchasesCount} Verkäufe · Ø ${Formatters.euro(m.avgBasket)}',
                        style: AppTypography.body(
                            size: 12,
                            weight: FontWeight.w600,
                            color: AppColors.textMuted),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 8),
                Text(
                  Formatters.euro(m.gross),
                  style: AppTypography.display(
                      size: 16, weight: FontWeight.w800, color: AppColors.ink),
                ),
              ],
            ),
            const SizedBox(height: 6),
            ClipRRect(
              borderRadius: BorderRadius.circular(4),
              child: LinearProgressIndicator(
                value: (m.gross / maxGross).clamp(0, 1),
                minHeight: 8,
                backgroundColor: AppColors.borderSubtle,
                valueColor:
                    const AlwaysStoppedAnimation<Color>(AppColors.brand),
              ),
            ),
            if (m != k.machines.last) const SizedBox(height: AppSpacing.s3),
          ],
        ],
      ),
    );
  }
}

class _CustomerCard extends StatelessWidget {
  const _CustomerCard({required this.k});
  final FinanceKpis k;
  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Row(
        children: [
          Expanded(
            child: _Stat(
              label: 'Aktive Kunden',
              value: '${k.customer.activeCustomers}',
            ),
          ),
          Expanded(
            child: _Stat(
              label: 'Käufe',
              value: '${k.customer.purchasesCount}',
            ),
          ),
          Expanded(
            child: _Stat(
              label: 'Ø-Warenkorb',
              value: Formatters.euro(k.customer.avgBasket),
            ),
          ),
        ],
      ),
    );
  }
}

class _Stat extends StatelessWidget {
  const _Stat({required this.label, required this.value});
  final String label;
  final String value;
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(label.toUpperCase(),
            style: AppTypography.body(
                    size: 10,
                    weight: FontWeight.w800,
                    color: AppColors.textMuted)
                .copyWith(letterSpacing: 0.6)),
        const SizedBox(height: 2),
        Text(value,
            style: AppTypography.display(
                size: 20, weight: FontWeight.w800, color: AppColors.ink)),
      ],
    );
  }
}

class _TopProducts extends StatelessWidget {
  const _TopProducts({required this.k});
  final FinanceKpis k;
  @override
  Widget build(BuildContext context) {
    final maxGross =
        k.topProducts.map((t) => t.gross).reduce((a, b) => a > b ? a : b);
    return AppCard(
      child: Column(
        children: [
          for (final p in k.topProducts) ...[
            Row(
              children: [
                Expanded(
                    child: Text(p.name,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w800,
                            color: AppColors.ink))),
                Text('${p.quantity}× ',
                    style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w700,
                        color: AppColors.textMuted)),
                Text(Formatters.euro(p.gross),
                    style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w800,
                        color: AppColors.ink)),
              ],
            ),
            const SizedBox(height: 4),
            ClipRRect(
              borderRadius: BorderRadius.circular(4),
              child: LinearProgressIndicator(
                value: (p.gross / maxGross).clamp(0, 1),
                minHeight: 6,
                backgroundColor: AppColors.borderSubtle,
                valueColor:
                    const AlwaysStoppedAnimation<Color>(AppColors.brand),
              ),
            ),
            if (p != k.topProducts.last) const SizedBox(height: AppSpacing.s2),
          ]
        ],
      ),
    );
  }
}

class _EmptyBox extends StatelessWidget {
  const _EmptyBox({required this.text});
  final String text;
  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: AppColors.surfaceAlt,
      child: Text(text,
          style: AppTypography.body(size: 13, color: AppColors.textMuted)),
    );
  }
}
