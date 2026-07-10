import 'package:supabase_flutter/supabase_flutter.dart';

import '../../domain/entities/finance_period.dart';

/// Kapselt Supabase-Aufrufe des Finanzdashboards (RPC + Edge Functions).
class FinanceRemoteDataSource {
  FinanceRemoteDataSource(this._client);

  final SupabaseClient _client;

  Future<Map<String, dynamic>> fetchSummary(FinancePeriod period) async {
    final result = await _client.rpc(
      'finance_summary',
      params: {'p_from': period.fromIso, 'p_to': period.toIso},
    );
    // Die RPC liefert `null`, wenn im Zeitraum weder Erlöse noch Aufwände
    // gebucht sind — nicht als Fehler behandeln, sondern als leeres Summary.
    if (result == null) {
      return const {
        'revenue_net7': 0,
        'revenue_net19': 0,
        'revenue_net': 0,
        'expense_net': 0,
        'result_net': 0,
        'vat_collected': 0,
        'vat_paid': 0,
        'accounts': <Map<String, dynamic>>[],
      };
    }
    if (result is Map) return Map<String, dynamic>.from(result);
    // Fallback für andere unerwartete Formate:
    return const {
      'revenue_net7': 0,
      'revenue_net19': 0,
      'revenue_net': 0,
      'expense_net': 0,
      'result_net': 0,
      'vat_collected': 0,
      'vat_paid': 0,
      'accounts': <Map<String, dynamic>>[],
    };
  }

  Future<int> syncSevdesk(FinancePeriod period) async {
    final res = await _client.functions.invoke(
      'sevdesk-sync',
      body: {'from': period.fromIso, 'to': period.toIso},
    );
    final data = res.data;
    if (data is Map && data['upserted'] is num) {
      return (data['upserted'] as num).toInt();
    }
    return 0;
  }

  Future<String> exportPdfBase64(FinancePeriod period) async {
    final res = await _client.functions.invoke(
      'finance-export-pdf',
      body: {'from': period.fromIso, 'to': period.toIso},
    );
    final data = res.data;
    if (data is Map && data['base64'] is String) {
      return data['base64'] as String;
    }
    throw Exception('PDF-Export fehlgeschlagen');
  }
}
