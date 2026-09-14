import 'dart:typed_data';

/// Vertrag der Unternehmensverwaltung (Kategorie 2).
abstract interface class ManagementRepository {
  Future<List<Map<String, dynamic>>> products();

  /// Bestandskorrektur als Inventur-Bewegung (append-only).
  Future<void> correctInventory({
    required String machineId,
    required String productId,
    required int deltaQty,
    String? reason,
  });

  /// Generisches Lesen eines Protokolls in einem Zeitraum (revisionssicher).
  Future<List<Map<String, dynamic>>> listProtocol({
    required String table,
    required String dateCol,
    required DateTime from,
    required DateTime to,
  });

  /// Generisches Anlegen eines Protokolleintrags (append-only).
  Future<void> addProtocol(String table, Map<String, dynamic> data);

  /// PDF-Nachweis für ein Protokoll (Temperatur/Reinigung/Vernichtung/Schulung).
  Future<Uint8List> exportProtocol({
    required String kind,
    required DateTime from,
    required DateTime to,
  });
}
