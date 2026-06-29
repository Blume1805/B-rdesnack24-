import 'dart:typed_data';

import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/services/outbox_service.dart';
import '../../data/management_remote_data_source.dart';
import '../../data/management_repository_impl.dart';
import '../../domain/entities/machine.dart';
import '../../domain/entities/stock_item.dart';
import '../../domain/repositories/management_repository.dart';

final managementRepositoryProvider = Provider<ManagementRepository>(
  (ref) => ManagementRepositoryImpl(
    ManagementRemoteDataSource(ref.watch(supabaseClientProvider)),
  ),
);

final machinesProvider = FutureProvider<List<Machine>>(
  (ref) => ref.watch(managementRepositoryProvider).machines(),
);

final productsProvider = FutureProvider<List<Map<String, dynamic>>>(
  (ref) => ref.watch(managementRepositoryProvider).products(),
);

final machineStockProvider =
    FutureProvider.autoDispose.family<List<StockItem>, String>(
  (ref, machineId) =>
      ref.watch(managementRepositoryProvider).machineStock(machineId),
);

/// Parameter eines Protokoll-Listenabrufs.
class ProtocolQuery {
  const ProtocolQuery({
    required this.table,
    required this.dateCol,
    required this.from,
    required this.to,
  });
  final String table;
  final String dateCol;
  final DateTime from;
  final DateTime to;

  @override
  bool operator ==(Object other) =>
      other is ProtocolQuery &&
      other.table == table &&
      other.from == from &&
      other.to == to;

  @override
  int get hashCode => Object.hash(table, from, to);
}

final protocolListProvider = FutureProvider.autoDispose
    .family<List<Map<String, dynamic>>, ProtocolQuery>((ref, q) {
  return ref.watch(managementRepositoryProvider).listProtocol(
        table: q.table,
        dateCol: q.dateCol,
        from: q.from,
        to: q.to,
      );
});

/// Aktionen (Anlegen/Korrektur/Export) mit Lade-/Fehlerzustand.
class ManagementActionsController extends StateNotifier<AsyncValue<void>> {
  ManagementActionsController(this._ref) : super(const AsyncData(null));
  final Ref _ref;
  ManagementRepository get _repo => _ref.read(managementRepositoryProvider);

  /// Speichert einen Protokolleintrag. Bei fehlender Verbindung wird der Eintrag
  /// offline in die Outbox gestellt und später automatisch synchronisiert.
  Future<bool> addProtocol(String table, Map<String, dynamic> data) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(() => _repo.addProtocol(table, data));
    if (state.hasError) {
      final outbox = _ref.read(outboxServiceProvider);
      if (!await outbox.isOnline()) {
        await outbox.enqueue(table, data);
        state = const AsyncData(null);
        return true; // offline vorgemerkt
      }
    }
    return !state.hasError;
  }

  Future<bool> correctInventory({
    required String machineId,
    required String productId,
    required int deltaQty,
    String? reason,
  }) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(() => _repo.correctInventory(
          machineId: machineId,
          productId: productId,
          deltaQty: deltaQty,
          reason: reason,
        ));
    return !state.hasError;
  }

  Future<Uint8List?> exportProtocol(
    String kind,
    DateTime from,
    DateTime to,
  ) async {
    state = const AsyncLoading();
    Uint8List? bytes;
    state = await AsyncValue.guard(() async {
      bytes = await _repo.exportProtocol(kind: kind, from: from, to: to);
    });
    return state.hasError ? null : bytes;
  }
}

final managementActionsProvider =
    StateNotifierProvider<ManagementActionsController, AsyncValue<void>>(
  ManagementActionsController.new,
);
