import 'dart:convert';
import 'dart:typed_data';

import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/error/failures.dart';
import '../domain/entities/machine.dart';
import '../domain/entities/stock_item.dart';
import '../domain/repositories/management_repository.dart';
import 'management_remote_data_source.dart';

class ManagementRepositoryImpl implements ManagementRepository {
  ManagementRepositoryImpl(this._remote);

  final ManagementRemoteDataSource _remote;

  @override
  Future<List<Machine>> machines() async {
    try {
      return (await _remote.machines()).map(Machine.fromJson).toList();
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<List<Map<String, dynamic>>> products() async {
    try {
      return await _remote.products();
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<List<StockItem>> machineStock(String machineId) async {
    try {
      return (await _remote.machineStock(machineId))
          .map(StockItem.fromJson)
          .toList();
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<void> correctInventory({
    required String machineId,
    required String productId,
    required int deltaQty,
    String? reason,
  }) async {
    try {
      await _remote.correctInventory(machineId, productId, deltaQty, reason);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<List<Map<String, dynamic>>> listProtocol({
    required String table,
    required String dateCol,
    required DateTime from,
    required DateTime to,
  }) async {
    try {
      return await _remote.listProtocol(table, dateCol, from, to);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<void> addProtocol(String table, Map<String, dynamic> data) async {
    try {
      await _remote.addProtocol(table, data);
    } catch (e) {
      throw _map(e);
    }
  }

  @override
  Future<Uint8List> exportProtocol({
    required String kind,
    required DateTime from,
    required DateTime to,
  }) async {
    try {
      return base64Decode(await _remote.exportProtocolBase64(kind, from, to));
    } catch (e) {
      throw _map(e);
    }
  }

  Failure _map(Object e) {
    if (e is Failure) return e;
    if (e is PostgrestException) {
      if (e.code == '42501') return PermissionFailure(e.message, cause: e);
      return ServerFailure(e.message, cause: e);
    }
    return UnknownFailure('Unerwarteter Fehler: $e', cause: e);
  }
}
