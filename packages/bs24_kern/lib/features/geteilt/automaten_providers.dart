import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'package:bs24_kern/core/di/providers.dart';
import 'package:bs24_kern/features/geteilt/machine.dart';
import 'package:bs24_kern/features/geteilt/stock_item.dart';

/// Die beiden Lesezugriffe, die BEIDE Apps brauchen: Automatenliste und
/// Bestand je Automat.
///
/// Kunden sehen darüber den Automatenfinder und die Verfügbarkeit, die
/// Verwaltung dieselben Daten in ihren Protokollen. Bewusst nur Lesen und
/// bewusst ohne Einkaufspreise/Margen — was hier steht, landet auch im
/// Kunden-Bundle. Alles Schreibende (Befüllung, Korrektur, Export) bleibt in
/// der Gesellschafter-App.
///
/// Welche Zeilen tatsächlich zurückkommen, entscheidet weiterhin die
/// Datenbank (RLS), nicht diese Klasse.
class AutomatenDaten {
  const AutomatenDaten(this._client);

  final SupabaseClient _client;

  Future<List<Machine>> automaten() async {
    final rows = await _client
        .from('machines')
        .select('id, code, name, type, is_cooled, city, status, image_url')
        .order('code');
    return (rows as List)
        .cast<Map<String, dynamic>>()
        .map(Machine.fromJson)
        .toList();
  }

  Future<List<StockItem>> bestand(String machineId) async {
    final rows = await _client
        .from('machine_stock')
        .select()
        .eq('machine_id', machineId)
        .order('product_name');
    return (rows as List)
        .cast<Map<String, dynamic>>()
        .map(StockItem.fromJson)
        .toList();
  }
}

final automatenDatenProvider = Provider<AutomatenDaten>(
  (ref) => AutomatenDaten(ref.watch(supabaseClientProvider)),
);

final machinesProvider = FutureProvider<List<Machine>>(
  (ref) => ref.watch(automatenDatenProvider).automaten(),
);

final machineStockProvider =
    FutureProvider.autoDispose.family<List<StockItem>, String>(
  (ref, machineId) => ref.watch(automatenDatenProvider).bestand(machineId),
);
