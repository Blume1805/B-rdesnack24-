import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../data/admin_remote_data_source.dart';

/// Datenzugriff der Verwaltungsmodule.
final adminDataSourceProvider = Provider<AdminRemoteDataSource>(
  (ref) => AdminRemoteDataSource(ref.watch(supabaseClientProvider)),
);

// ── Werbenetzwerk ────────────────────────────────────────────────────

/// Flächenbelegung zum heutigen Stichtag.
final advertisingOverviewProvider =
    FutureProvider.autoDispose<Map<String, dynamic>>(
  (ref) => ref.watch(adminDataSourceProvider).advertisingOverview(),
);

final campaignsProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) => ref.watch(adminDataSourceProvider).campaigns(),
);

final campaignReportProvider =
    FutureProvider.autoDispose.family<Map<String, dynamic>, String>(
  (ref, id) => ref.watch(adminDataSourceProvider).campaignReport(id),
);

final creativesProvider =
    FutureProvider.autoDispose.family<List<Map<String, dynamic>>, String>(
  (ref, campaignId) => ref.watch(adminDataSourceProvider).creatives(campaignId),
);

// ── Anfragen ─────────────────────────────────────────────────────────

/// Aktiver Statusfilter der Anfragenliste. `null` heißt „alle".
final leadFilterProvider = StateProvider<String?>((ref) => null);

final leadsProvider = FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) => ref
      .watch(adminDataSourceProvider)
      .leads(status: ref.watch(leadFilterProvider)),
);

final leadActivitiesProvider =
    FutureProvider.autoDispose.family<List<Map<String, dynamic>>, String>(
  (ref, leadId) => ref.watch(adminDataSourceProvider).leadActivities(leadId),
);

// ── Firmenkunden ─────────────────────────────────────────────────────

final businessesProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) => ref.watch(adminDataSourceProvider).businesses(),
);

final businessMembersProvider =
    FutureProvider.autoDispose.family<List<Map<String, dynamic>>, String>(
  (ref, id) => ref.watch(adminDataSourceProvider).businessMembers(id),
);

final businessInvitationsProvider =
    FutureProvider.autoDispose.family<List<Map<String, dynamic>>, String>(
  (ref, id) => ref.watch(adminDataSourceProvider).businessInvitations(id),
);

final invoiceRunsProvider =
    FutureProvider.autoDispose.family<List<Map<String, dynamic>>, String>(
  (ref, id) => ref.watch(adminDataSourceProvider).invoiceRuns(id),
);

final businessLocationsProvider =
    FutureProvider.autoDispose.family<List<Map<String, dynamic>>, String>(
  (ref, id) => ref.watch(adminDataSourceProvider).businessLocations(id),
);

// ── E-Mail ───────────────────────────────────────────────────────────

final emailTemplatesProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) => ref.watch(adminDataSourceProvider).emailTemplates(),
);

final emailLogStatsProvider = FutureProvider.autoDispose<Map<String, dynamic>>(
  (ref) => ref.watch(adminDataSourceProvider).emailLogStats(),
);

final emailOutboxStatsProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) => ref.watch(adminDataSourceProvider).emailOutboxStats(),
);

// ── Aktionen ─────────────────────────────────────────────────────────

/// Schreibende Vorgänge mit Lade- und Fehlerzustand.
///
/// Jede Aktion aktualisiert danach die betroffene Liste, damit die Anzeige
/// nicht behauptet, etwas sei geschehen, was die Datenbank abgelehnt hat.
/// Fehler werden NICHT verschluckt: Der Aufrufer zeigt sie an.
class AdminActionsController extends StateNotifier<AsyncValue<void>> {
  AdminActionsController(this._ref) : super(const AsyncData(null));
  final Ref _ref;

  AdminRemoteDataSource get _data => _ref.read(adminDataSourceProvider);

  Future<bool> _run(
    Future<void> Function() action,
    List<void> Function() refresh,
  ) async {
    state = const AsyncLoading();
    try {
      await action();
      refresh();
      state = const AsyncData(null);
      return true;
    } catch (e, st) {
      state = AsyncError(e, st);
      return false;
    }
  }

  Future<bool> approveMotif({
    required String contractId,
    required String wer,
  }) =>
      _run(
        () => _data.approveMotif(contractId: contractId, wer: wer),
        () => [_ref.invalidate(advertisingOverviewProvider)],
      );

  Future<bool> setContractStatus({
    required String contractId,
    required String status,
  }) =>
      _run(
        () => _data.setContractStatus(contractId: contractId, status: status),
        () => [_ref.invalidate(advertisingOverviewProvider)],
      );

  Future<bool> setCampaignStatus({
    required String campaignId,
    required String status,
  }) =>
      _run(
        () => _data.setCampaignStatus(campaignId: campaignId, status: status),
        () => [_ref.invalidate(campaignsProvider)],
      );

  Future<bool> reviewCreative({
    required String creativeId,
    required String campaignId,
    required String status,
    String? notiz,
  }) =>
      _run(
        () => _data.reviewCreative(
          creativeId: creativeId,
          status: status,
          notiz: notiz,
        ),
        () => [_ref.invalidate(creativesProvider(campaignId))],
      );

  Future<bool> setLeadStatus({
    required String leadId,
    required String status,
    String? notiz,
  }) =>
      _run(
        () => _data.setLeadStatus(leadId: leadId, status: status, notiz: notiz),
        () => [
          _ref.invalidate(leadsProvider),
          _ref.invalidate(leadActivitiesProvider(leadId)),
        ],
      );

  Future<bool> addLeadActivity({
    required String leadId,
    required String text,
  }) =>
      _run(
        () => _data.addLeadActivity(leadId: leadId, text: text),
        () => [_ref.invalidate(leadActivitiesProvider(leadId))],
      );

  Future<bool> releaseInvoice({
    required String runId,
    required String businessId,
  }) =>
      _run(
        () => _data.releaseInvoice(runId),
        () => [_ref.invalidate(invoiceRunsProvider(businessId))],
      );

  Future<bool> revokeInvitation({
    required String invitationId,
    required String businessId,
  }) =>
      _run(
        () => _data.revokeInvitation(invitationId),
        () => [_ref.invalidate(businessInvitationsProvider(businessId))],
      );

  Future<bool> saveEmailTemplate({
    required String key,
    String? subject,
    String? bodyHtml,
    String? bodyText,
    String? preheader,
    bool isActive = true,
  }) =>
      _run(
        () => _data.saveEmailTemplate(
          key: key,
          subject: subject,
          bodyHtml: bodyHtml,
          bodyText: bodyText,
          preheader: preheader,
          isActive: isActive,
        ),
        () => [_ref.invalidate(emailTemplatesProvider)],
      );
}

final adminActionsProvider =
    StateNotifierProvider<AdminActionsController, AsyncValue<void>>(
  AdminActionsController.new,
);
