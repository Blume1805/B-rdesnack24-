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
      return ServerFailure('Edge Function fehlgeschlagen (${e.status})',
          cause: e);
    }
    return UnknownFailure('Unerwarteter Fehler: $e', cause: e);
  }
}
