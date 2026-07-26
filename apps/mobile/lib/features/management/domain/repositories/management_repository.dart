import 'dart:typed_data';

import '../entities/machine.dart';
import '../entities/stock_item.dart';

/// Vertrag der Unternehmensverwaltung (Kategorie 2).
abstract interface class ManagementRepository {
  Future<List<Machine>> machines();
  Future<List<Map<String, dynamic>>> products();

  /// Bestand eines Automaten (View machine_stock).
  Future<List<StockItem>> machineStock(String machineId);

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
