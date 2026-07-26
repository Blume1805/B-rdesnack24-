import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/error/failures.dart';
import '../../domain/entities/shareholder_approval.dart';
import '../../domain/repositories/approvals_repository.dart';
import '../datasources/approvals_remote_data_source.dart';

class ApprovalsRepositoryImpl implements ApprovalsRepository {
  ApprovalsRepositoryImpl(this._remote);

  final ApprovalsRemoteDataSource _remote;

  @override
  Future<List<ShareholderApproval>> pending() async {
    try {
      final rows = await _remote.pending();
      return rows.map(ShareholderApproval.fromJson).toList();
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<void> decide({
    required String approvalId,
    required bool approve,
    String? note,
  }) async {
    try {
      await _remote.decide(approvalId, approve, note);
    } catch (e) {
      throw _map(e);
    }
  }

  Failure _map(Object e) {
    if (e is PostgrestException) {
      if (e.code == '42501') return PermissionFailure(e.message, cause: e);
      return ServerFailure(e.message, cause: e);
    }
    return UnknownFailure('Unerwarteter Fehler: $e', cause: e);
  }
}
