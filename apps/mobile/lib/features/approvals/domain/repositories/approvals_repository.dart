import '../entities/shareholder_approval.dart';

/// Vertrag für die Gesellschafter-Freigabe (Dual-Control).
abstract interface class ApprovalsRepository {
  /// Offene Freigabeanträge laden.
  Future<List<ShareholderApproval>> pending();

  /// Antrag entscheiden. [approve] = true → freigeben, sonst ablehnen.
  /// Selbstfreigabe wird serverseitig verhindert.
  Future<void> decide({
    required String approvalId,
    required bool approve,
    String? note,
  });
}
