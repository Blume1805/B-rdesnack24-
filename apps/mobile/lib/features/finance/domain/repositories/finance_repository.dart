import 'dart:typed_data';

import '../entities/finance_period.dart';
import '../entities/finance_summary.dart';

/// Vertrag des Finanzdashboards. Wirft bei Fehlern eine [Failure].
abstract interface class FinanceRepository {
  /// Aggregierte Kennzahlen für einen Zeitraum (serverseitig RBAC-geprüft).
  Future<FinanceSummary> getSummary(FinancePeriod period);

  /// Stößt einen sevDesk-Sync für den Zeitraum an; liefert Anzahl Buchungen.
  Future<int> syncSevdesk(FinancePeriod period);

  /// Erzeugt eine PDF-Auswertung (Bytes) für den Zeitraum.
  Future<Uint8List> exportPdf(FinancePeriod period);
}
