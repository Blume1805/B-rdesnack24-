import 'dart:typed_data';

import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../data/datasources/finance_remote_data_source.dart';
import '../../data/repositories/finance_repository_impl.dart';
import '../../domain/entities/finance_booking.dart';
import '../../domain/entities/finance_kpis.dart';
import '../../domain/entities/finance_period.dart';
import '../../domain/entities/finance_summary.dart';
import '../../domain/repositories/finance_repository.dart';

final financeRemoteDataSourceProvider = Provider<FinanceRemoteDataSource>(
  (ref) => FinanceRemoteDataSource(ref.watch(supabaseClientProvider)),
);

final financeRepositoryProvider = Provider<FinanceRepository>(
  (ref) => FinanceRepositoryImpl(ref.watch(financeRemoteDataSourceProvider)),
);

/// Aktuell gewählter Auswertungszeitraum (Standard: laufender Monat).
final selectedPeriodProvider = StateProvider<FinancePeriod>(
  (ref) => FinancePeriod.currentMonth(),
);

/// Kennzahlen für den gewählten Zeitraum.
final financeSummaryProvider =
    FutureProvider.autoDispose<FinanceSummary>((ref) {
  final period = ref.watch(selectedPeriodProvider);
  return ref.watch(financeRepositoryProvider).getSummary(period);
});

/// Einzelbuchungen für den gewählten Zeitraum (serverseitig begrenzt).
final financeBookingsProvider =
    FutureProvider.autoDispose<FinanceBookingPage>((ref) {
  final period = ref.watch(selectedPeriodProvider);
  return ref.watch(financeRepositoryProvider).getBookings(period);
});

/// Volles KPI-Paket (Trend, Vorjahr/Vormonat, Automaten, Produkte).
final financeKpisProvider = FutureProvider.autoDispose<FinanceKpis>((ref) {
  final period = ref.watch(selectedPeriodProvider);
  return ref.watch(financeRepositoryProvider).getKpis(period);
});

/// Bilanz-Kennzahlen (Etappe 2): jüngster Snapshot mit Liquidität 1/2/3
/// und EK-Quote. `null` = noch keine Bilanzdaten erfasst.
final financeBalanceProvider =
    FutureProvider.autoDispose<Map<String, dynamic>?>((ref) async {
  final res =
      await ref.watch(supabaseClientProvider).rpc('finance_balance_kpis');
  final map = Map<String, dynamic>.from(res as Map);
  if (map['has_data'] != true) return null;
  return map;
});

/// Aktionen (Sync/Export) mit Lade-/Fehlerzustand.
class FinanceActionsController extends StateNotifier<AsyncValue<void>> {
  FinanceActionsController(this._ref) : super(const AsyncData(null));

  final Ref _ref;
  FinanceRepository get _repo => _ref.read(financeRepositoryProvider);

  Future<int?> sync() async {
    state = const AsyncLoading();
    final period = _ref.read(selectedPeriodProvider);
    int? count;
    state = await AsyncValue.guard(() async {
      count = await _repo.syncSevdesk(period);
    });
    if (!state.hasError) {
      _ref.invalidate(financeSummaryProvider);
      _ref.invalidate(financeKpisProvider);
      _ref.invalidate(financeBookingsProvider);
    }
    return count;
  }

  Future<Uint8List?> exportPdf() async {
    state = const AsyncLoading();
    final period = _ref.read(selectedPeriodProvider);
    Uint8List? bytes;
    state = await AsyncValue.guard(() async {
      bytes = await _repo.exportPdf(period);
    });
    return state.hasError ? null : bytes;
  }
}

final financeActionsProvider =
    StateNotifierProvider<FinanceActionsController, AsyncValue<void>>(
  FinanceActionsController.new,
);
