import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bs24_kern/core/di/providers.dart';
import 'package:bs24_gesellschafter/features/approvals/data/datasources/approvals_remote_data_source.dart';
import 'package:bs24_gesellschafter/features/approvals/data/repositories/approvals_repository_impl.dart';
import 'package:bs24_gesellschafter/features/approvals/domain/entities/shareholder_approval.dart';
import 'package:bs24_gesellschafter/features/approvals/domain/repositories/approvals_repository.dart';

final approvalsRepositoryProvider = Provider<ApprovalsRepository>(
  (ref) => ApprovalsRepositoryImpl(
    ApprovalsRemoteDataSource(ref.watch(supabaseClientProvider)),
  ),
);

final pendingApprovalsProvider =
    FutureProvider.autoDispose<List<ShareholderApproval>>((ref) {
  return ref.watch(approvalsRepositoryProvider).pending();
});

final approvalsActionProvider =
    StateNotifierProvider<ApprovalsActionController, AsyncValue<void>>(
  ApprovalsActionController.new,
);

class ApprovalsActionController extends StateNotifier<AsyncValue<void>> {
  ApprovalsActionController(this._ref) : super(const AsyncData(null));
  final Ref _ref;

  Future<bool> decide(String id, bool approve, {String? note}) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(
      () => _ref.read(approvalsRepositoryProvider).decide(
            approvalId: id,
            approve: approve,
            note: note,
          ),
    );
    if (!state.hasError) {
      _ref.invalidate(pendingApprovalsProvider);
      return true;
    }
    return false;
  }
}
