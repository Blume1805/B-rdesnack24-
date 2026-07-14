import 'package:supabase_flutter/supabase_flutter.dart';

class ApprovalsRemoteDataSource {
  ApprovalsRemoteDataSource(this._client);
  final SupabaseClient _client;

  /// Neue Freigabe-Anfrage anlegen. snapshot enthält die vollständigen
  /// Daten, aus denen später das finale PDF reproduzierbar erzeugt wird.
  Future<String> requestApproval({
    required String documentKind,
    required DateTime periodFrom,
    required DateTime periodTo,
    required String title,
    required Map<String, dynamic> snapshot,
    String? draftPdfPath,
  }) async {
    final id = await _client.rpc('request_document_approval', params: {
      'p_document_kind': documentKind,
      'p_period_from': periodFrom.toIso8601String().substring(0, 10),
      'p_period_to': periodTo.toIso8601String().substring(0, 10),
      'p_title': title,
      'p_snapshot': snapshot,
      'p_draft_path': draftPdfPath,
    });
    // Notification-E-Mail an Gesellschafter feuern (best effort)
    unawaited(_client.functions.invoke('approval-notify', body: {
      'approval_id': id.toString(),
      'phase': 'requested',
    }));
    return id.toString();
  }

  Future<void> decide({
    required String approvalId,
    required String decision,
    String? comment,
  }) async {
    await _client.rpc('decide_document_approval', params: {
      'p_approval_id': approvalId,
      'p_decision': decision,
      'p_comment': comment,
    });
    unawaited(_client.functions.invoke('approval-notify', body: {
      'approval_id': approvalId,
      'phase': decision == 'approved' ? 'approved' : 'rejected',
    }));
    // Wenn beide zugestimmt haben, hat die RPC status=approved gesetzt;
    // document-finalize erzeugt jetzt das signierte PDF (rejected/pending
    // werden serverseitig ohnehin abgelehnt).
    unawaited(_client.functions.invoke('document-finalize', body: {
      'approval_id': approvalId,
    }));
  }

  /// Neuen Signed-URL für das finale PDF beziehen (24 h gültig).
  Future<String?> signedUrl(String path) async {
    final res = await _client.storage
        .from('signed-documents')
        .createSignedUrl(path, 3600 * 24);
    return res;
  }

  Future<List<Map<String, dynamic>>> list({bool mineOnly = false}) async {
    final rows = await _client
        .rpc('list_document_approvals', params: {'p_mine_only': mineOnly});
    final list = (rows as List).cast<Map<String, dynamic>>();

    // Signed-URLs für freigegebene Dokumente parallel vorab holen und
    // in die Row unter 'signed_url' schreiben. Grund: iOS Safari blockt
    // window.open, wenn irgendein await zwischen User-Tap und dem
    // Aufruf liegt. Wir wollen also, dass der Tap-Handler synchron
    // aus row['signed_url'] lesen und launchUrl direkt aufrufen kann.
    final futures = <Future<void>>[];
    for (final row in list) {
      final path = row['final_pdf_path']?.toString();
      final status = row['status']?.toString();
      if (status == 'approved' && path != null && path.isNotEmpty) {
        futures.add(
          _client.storage
              .from('signed-documents')
              .createSignedUrl(path, 3600 * 24)
              .then((url) => row['signed_url'] = url)
              .catchError((_) {
            // Bei Fehler bleibt signed_url null — Tap-Handler nutzt Fallback.
          }),
        );
      }
    }
    if (futures.isNotEmpty) {
      await Future.wait(futures);
    }
    return list;
  }
}

// Fire-and-forget-Helper
void unawaited(Future<void> f) {}
