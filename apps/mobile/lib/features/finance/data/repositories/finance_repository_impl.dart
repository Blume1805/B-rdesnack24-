import 'dart:convert';
import 'dart:typed_data';

import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/error/failures.dart';
import '../../domain/entities/finance_kpis.dart';
import '../../domain/entities/finance_period.dart';
import '../../domain/entities/finance_summary.dart';
import '../../domain/repositories/finance_repository.dart';
import '../datasources/finance_remote_data_source.dart';

class FinanceRepositoryImpl implements FinanceRepository {
  FinanceRepositoryImpl(this._remote);

  final FinanceRemoteDataSource _remote;

  @override
  Future<FinanceSummary> getSummary(FinancePeriod period) async {
    try {
      final json = await _remote.fetchSummary(period);
      return FinanceSummary.fromJson(json);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<FinanceKpis> getKpis(FinancePeriod period) async {
    try {
      final json = await _remote.fetchKpis(period);
      return FinanceKpis.fromJson(json);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<int> syncSevdesk(FinancePeriod period) async {
    try {
      return await _remote.syncSevdesk(period);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<Uint8List> exportPdf(FinancePeriod period) async {
    try {
      final b64 = await _remote.exportPdfBase64(period);
      return base64Decode(b64);
    } catch (e) {
      throw _map(e);
    }
  }

  Failure _map(Object e) {
    if (e is Failure) return e;
    if (e is PostgrestException) {
      if (e.code == '42501') return PermissionFailure(e.message, cause: e);
      return ServerFailure(e.message, cause: e);
    }
    if (e is FunctionException) {
      final grund = funktionsFehlerText(e.details);
      return ServerFailure(
        grund == null
            ? 'Edge Function fehlgeschlagen (${e.status})'
            : '$grund (${e.status})',
        cause: e,
      );
    }
    return UnknownFailure('Unerwarteter Fehler: $e', cause: e);
  }
}

/// Zieht den Klartext aus der Fehlerantwort einer Edge Function.
///
/// Alle Functions dieses Projekts antworten im Fehlerfall mit
/// `{"error": "..."}`. Ohne diese Auswertung landet der Wortlaut nirgends:
/// Der Aufrufer sah nur „Edge Function fehlgeschlagen (500)", und die
/// Oberfläche machte daraus „Synchronisierung fehlgeschlagen."
///
/// Anlass (24.08.2026): Der sevDesk-Sync scheiterte dreimal hintereinander.
/// Die Function hatte sauber geantwortet — „sevDesk nicht konfiguriert",
/// weil `SEVDESK_API_TOKEN` fehlte. Zu sehen war davon nichts; der Grund
/// liess sich nur im Serverprotokoll finden. Das hat eine ganze Runde
/// gekostet, und genau solche Runden meint die Regel „Behauptungen vorher
/// prüfen": Wer den Grund nicht sieht, rät.
///
/// `details` kommt je nach Antwort als Map (JSON wurde geparst) oder als
/// Zeichenkette (Rohtext). Beides wird behandelt; ist nichts Brauchbares
/// dabei, liefert die Funktion `null` und der Aufrufer bleibt bei seiner
/// allgemeinen Meldung.
String? funktionsFehlerText(Object? details) {
  if (details is Map) {
    final wert = details['error'];
    if (wert is String && wert.trim().isNotEmpty) return wert.trim();
  }
  if (details is String && details.trim().isNotEmpty) return details.trim();
  return null;
}
