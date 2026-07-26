import 'package:supabase_flutter/supabase_flutter.dart';

class ManagementRemoteDataSource {
  ManagementRemoteDataSource(this._client);

  final SupabaseClient _client;

  String? get _uid => _client.auth.currentUser?.id;

  static String _iso(DateTime d) => d.toIso8601String();

  Future<List<Map<String, dynamic>>> machines() async {
    final rows = await _client
        .from('machines')
        .select('id, code, name, type, is_cooled, city, status, image_url')
        .order('code');
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<List<Map<String, dynamic>>> products() async {
    final rows = await _client
        .from('products')
        .select('id, name, sku, tax_rate')
        .eq('status', 'active')
        .order('name');
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<List<Map<String, dynamic>>> machineStock(String machineId) async {
    final rows = await _client
        .from('machine_stock')
        .select()
        .eq('machine_id', machineId)
        .order('product_name');
    return (rows as List).cast<Map<String, dynamic>>();
  }

  /// FIFO-Bewegungen (Zugänge/Abgänge/Vernichtungen/Korrekturen) pro Produkt
  /// im gewählten Zeitraum, chronologisch sortiert.
  Future<List<Map<String, dynamic>>> inventoryFifoMovements(
    DateTime from,
    DateTime to,
  ) async {
    final rows = await _client.rpc(
      'inventory_fifo_movements',
      params: {
        'p_from': from.toUtc().toIso8601String(),
        'p_to': to.toUtc().toIso8601String(),
      },
    );
    return (rows as List).cast<Map<String, dynamic>>();
  }

  /// Am Stichtag noch verbliebene FIFO-Lots je Produkt mit Restmenge,
  /// EK-Preis, MHD-Abschlag und Bilanzwert.
  Future<List<Map<String, dynamic>>> inventoryFifoLots(DateTime to) async {
    final rows = await _client.rpc(
      'inventory_fifo_lots',
      params: {
        'p_to': to.toUtc().toIso8601String(),
      },
    );
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<void> correctInventory(
    String machineId,
    String productId,
    int deltaQty,
    String? reason,
  ) async {
    await _client.from('inventory_movements').insert({
      'machine_id': machineId,
      'product_id': productId,
      'type': 'correction',
      'quantity_delta': deltaQty,
      'reason': reason ?? 'Inventurkorrektur',
      'source': 'inventory',
      'created_by': _uid,
    });
  }

  Future<List<Map<String, dynamic>>> listProtocol(
    String table,
    String dateCol,
    DateTime from,
    DateTime to,
  ) async {
    final rows = await _client
        .from(table)
        .select()
        .gte(dateCol, _iso(from))
        .lte(dateCol, _iso(to))
        .order(dateCol, ascending: false);
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<void> addProtocol(String table, Map<String, dynamic> data) async {
    await _client.from(table).insert({...data, 'recorded_by': _uid});
  }

  Future<String> exportProtocolBase64(
    String kind,
    DateTime from,
    DateTime to,
  ) async {
    final res = await _client.functions.invoke(
      'protocol-export-pdf',
      body: {
        'protocol': kind,
        'from': from.toIso8601String().substring(0, 10),
        'to': to.toIso8601String().substring(0, 10),
      },
    );
    final data = res.data;
    if (data is Map && data['base64'] is String) {
      return data['base64'] as String;
    }
    throw Exception('PDF-Export fehlgeschlagen');
  }
}
