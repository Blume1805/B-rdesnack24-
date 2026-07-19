import 'package:supabase_flutter/supabase_flutter.dart';

class ApprovalsRemoteDataSource {
  ApprovalsRemoteDataSource(this._client);
  final SupabaseClient _client;

  // Session-Guard: jedes Approval-PDF wird pro App-Session höchstens
  // einmal automatisch neu erzeugt. So bekommen bereits freigegebene
  // Dokumente ohne User-Aktion das neueste Rendering (aktualisierte
  // Inhaltsseiten wenn sich das Template geändert hat), ohne bei jedem
  // Listen-Load Traffic zu verursachen.
  static final Set<String> _refinalizedThisSession = <String>{};

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

    // Partner-Signaturen einmal holen — für die Freigabe-Ansicht der
    // Inventur brauchen wir die Bilder je Gesellschafter.
    List<Map<String, dynamic>> partnerSignatures = const [];
    try {
      final sigs = await _client.rpc('list_partner_signatures');
      partnerSignatures = (sigs as List).cast<Map<String, dynamic>>();
    } catch (_) {/* Fallback: leer */}

    // Signed-URLs für freigegebene Dokumente parallel vorab holen und
    // in die Row unter 'signed_url' schreiben. Grund: iOS Safari blockt
    // window.open, wenn irgendein await zwischen User-Tap und dem
    // Aufruf liegt. Wir wollen also, dass der Tap-Handler synchron
    // aus row['signed_url'] lesen und launchUrl direkt aufrufen kann.
    final futures = <Future<void>>[];
    for (final row in list) {
      final path = row['final_pdf_path']?.toString();
      final status = row['status']?.toString();
      final id = row['id']?.toString();
      final kind = row['document_kind']?.toString();

      // Partner-Signaturen ins Row-Map durchreichen — der Tap-Handler
      // kann sie synchron abgreifen.
      row['partner_signatures'] = partnerSignatures;

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

      // Für inventory_fifo-Approvals das Snapshot mitladen (movements
      // + lots), damit der Tap-Handler synchron den HTML-Report bauen
      // kann — Popup-Blocker-sicher.
      if (status == 'approved' &&
          kind == 'inventory_fifo' &&
          id != null &&
          id.isNotEmpty) {
        futures.add(
          _client
              .from('document_approvals')
              .select('snapshot')
              .eq('id', id)
              .maybeSingle()
              .then((rec) {
            if (rec != null) {
              final snap = rec['snapshot'];
              if (snap is Map) row['snapshot'] = snap;
            }
          }).catchError((_) {}),
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
