import 'dart:typed_data';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../di/providers.dart';

/// Sichere Uploads in private Storage-Buckets (haccp/documents).
/// Pfadkonvention: `<uid>/<timestamp>_<name>`.
class StorageService {
  StorageService(this._client);
  final SupabaseClient _client;

  Future<String> upload({
    required String bucket,
    required String filename,
    required Uint8List bytes,
    String contentType = 'application/octet-stream',
  }) async {
    final uid = _client.auth.currentUser?.id ?? 'anon';
    final ts = DateTime.now().millisecondsSinceEpoch;
    final path = '$uid/${ts}_$filename';
    await _client.storage.from(bucket).uploadBinary(
          path,
          bytes,
          fileOptions: FileOptions(contentType: contentType, upsert: false),
        );
    return path;
  }
}

final storageServiceProvider = Provider<StorageService>(
  (ref) => StorageService(ref.watch(supabaseClientProvider)),
);
