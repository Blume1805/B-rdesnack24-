import 'package:supabase_flutter/supabase_flutter.dart';

class ApprovalsRemoteDataSource {
  ApprovalsRemoteDataSource(this._client);

  final SupabaseClient _client;

  static const _select = 'id, status, created_at, requested_for, requested_by, '
      'for_profile:profiles!shareholder_approvals_requested_for_fkey(email, full_name), '
      'by_profile:profiles!shareholder_approvals_requested_by_fkey(email)';

  Future<List<Map<String, dynamic>>> pending() async {
    final rows = await _client
        .from('shareholder_approvals')
        .select(_select)
        .eq('status', 'pending')
        .order('created_at');
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<void> decide(String approvalId, bool approve, String? note) async {
    await _client.rpc('approve_shareholder', params: {
      'approval_id': approvalId,
      'decision': approve ? 'approved' : 'rejected',
      'note': note,
    });
  }
}
