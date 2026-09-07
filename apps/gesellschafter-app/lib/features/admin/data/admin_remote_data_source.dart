import 'package:supabase_flutter/supabase_flutter.dart';

/// Datenzugriff der internen Verwaltungsmodule (Werbenetzwerk, Anfragen,
/// Firmenkunden, E-Mail).
///
/// Diese Bereiche waren bis zum Audit vom 31.08.2026 ausschließlich per SQL
/// bedienbar: rund 45 RPCs ohne jede Oberfläche (Kapitel 8 des Berichts).
///
/// Zwei Zugriffswege, bewusst gemischt:
///
/// * **RPC**, wo eine existiert. Sie trägt die Berechtigungsprüfung und die
///   Aufbereitung; das Frontend baut nichts davon nach.
/// * **Direkter Tabellenzugriff**, wo es keine RPC gibt — für die Listen der
///   Kampagnen, Firmenkunden, Werbemittel und Vorlagen. Dort entscheidet
///   ausschließlich RLS, wer etwas sieht. Geprüft am 01.09.2026: alle diese
///   Tabellen haben eine SELECT-Policy, die interne Rollen einschließt.
///
/// Die Parameternamen sind gegen die Live-Datenbank geprüft. PostgREST bindet
/// über den Namen, nicht über die Position — ein falscher Name ergibt
/// `PGRST202`. Siehe `docs/API-UNTERNEHMENSBEREICH.md` und
/// `packages/api-types/database.types.ts`.
class AdminRemoteDataSource {
  const AdminRemoteDataSource(this._client);
  final SupabaseClient _client;

  // ── Hilfsmittel ────────────────────────────────────────────────────

  /// Eine `jsonb`-Rückgabe, die ein Objekt ist.
  Map<String, dynamic> _obj(dynamic value) =>
      value is Map ? Map<String, dynamic>.from(value) : <String, dynamic>{};

  /// Eine Rückgabe, die eine Liste von Zeilen ist — egal ob `jsonb`-Array
  /// oder Zeilenmenge einer TABLE-Funktion.
  List<Map<String, dynamic>> _rows(dynamic value) => value is List
      ? value
          .whereType<Map<dynamic, dynamic>>()
          .map((e) => Map<String, dynamic>.from(e))
          .toList(growable: false)
      : const <Map<String, dynamic>>[];

  String _day(DateTime d) => '${d.year.toString().padLeft(4, '0')}-'
      '${d.month.toString().padLeft(2, '0')}-'
      '${d.day.toString().padLeft(2, '0')}';

  // ── Werbenetzwerk: Flächen und Verträge ────────────────────────────

  /// Belegung aller Werbeflächen zum Stichtag.
  ///
  /// Liefert `{stichtag, kennzahlen, je_automat}`. `kennzahlen` enthält
  /// `flaechen`, `vermietet`, `frei`, `werbeumsatz_monat` und
  /// `listenwert_frei`; `je_automat` je Automat dessen Flächen samt
  /// laufendem Vertrag.
  Future<Map<String, dynamic>> advertisingOverview({DateTime? stichtag}) async {
    final res = await _client.rpc(
      'advertising_overview',
      params: {'p_stichtag': _day(stichtag ?? DateTime.now())},
    );
    return _obj(res);
  }

  /// Motiv eines Flächenvertrags freigeben. Ohne Freigabe geht kein Motiv
  /// an den Automaten — dieselbe Regel wie bei den Werbemitteln.
  Future<void> approveMotif({
    required String contractId,
    required String wer,
  }) =>
      _client.rpc(
        'advertising_motif_approve',
        params: {'p_contract': contractId, 'p_wer': wer},
      );

  /// Vertragszustand setzen: `entwurf`, `zur_unterschrift`, `aktiv`,
  /// `beendet`, `gekuendigt`.
  Future<void> setContractStatus({
    required String contractId,
    required String status,
  }) =>
      _client.rpc(
        'advertising_contract_status',
        params: {'p_contract': contractId, 'p_status': status},
      );

  /// Werbefläche anlegen oder ändern. `position` und `zustand` sind
  /// Aufzählungswerte der Datenbank.
  Future<String> saveSpace({
    required String machineId,
    required String position,
    required String bezeichnung,
    int? breiteMm,
    int? hoeheMm,
    num? preisMonat,
    String zustand = 'nutzbar',
    String? bemerkung,
  }) async {
    final res = await _client.rpc(
      'advertising_space_set',
      params: {
        'p_machine': machineId,
        'p_position': position,
        'p_bezeichnung': bezeichnung,
        'p_breite_mm': breiteMm,
        'p_hoehe_mm': hoeheMm,
        'p_preis_monat': preisMonat,
        'p_zustand': zustand,
        'p_bemerkung': bemerkung,
      },
    );
    return res.toString();
  }

  Future<void> removeSpace(String spaceId) =>
      _client.rpc('advertising_space_remove', params: {'p_space': spaceId});

  // ── Werbenetzwerk: Kampagnen und Werbemittel ───────────────────────

  /// Alle Kampagnen. Es gibt dafür keine interne RPC — `my_advertising_
  /// campaigns()` ist mitgliedschaftsbasiert und liefert einem
  /// Gesellschafter nichts. Die SELECT-Policy auf `advertising_campaigns`
  /// lässt interne Rollen jedoch ausdrücklich zu.
  Future<List<Map<String, dynamic>>> campaigns() async {
    final res = await _client
        .from('advertising_campaigns')
        .select('id, name, welt, status, von, bis, budget_gesamt, ziel_url, '
            'bemerkung, business_id, businesses(name)')
        .isFilter('deleted_at', null)
        .order('von', ascending: false);
    return _rows(res);
  }

  Future<Map<String, dynamic>> campaignReport(String campaignId) async {
    final res = await _client.rpc(
      'advertising_campaign_report',
      params: {'p_campaign': campaignId},
    );
    return _obj(res);
  }

  /// Kampagnenzustand setzen: `draft`, `pending_review`, `approved`,
  /// `active`, `paused`, `completed`, `cancelled`.
  Future<void> setCampaignStatus({
    required String campaignId,
    required String status,
  }) =>
      _client.rpc(
        'advertising_campaign_status',
        params: {'p_campaign': campaignId, 'p_status': status},
      );

  Future<List<Map<String, dynamic>>> creatives(String campaignId) async {
    final res = await _client
        .from('advertising_creatives')
        .select('id, kind, status, file_url, review_notiz, created_at')
        .eq('campaign_id', campaignId)
        .isFilter('deleted_at', null)
        .order('created_at', ascending: false);
    return _rows(res);
  }

  /// Werbemittel prüfen: `approved`, `rejected`, `revision_required`,
  /// `active`, `expired`. Kein Motiv wird ohne Freigabe aktiv.
  Future<void> reviewCreative({
    required String creativeId,
    required String status,
    String? notiz,
  }) =>
      _client.rpc(
        'advertising_creative_review',
        params: {
          'p_creative': creativeId,
          'p_status': status,
          'p_notiz': notiz,
        },
      );

  // ── Anfragen (Leads) ───────────────────────────────────────────────

  /// Anfragen aus Werbung, Sponsoring, Partnerschaft, Recruiting, Events.
  /// `status` filtert; `null` liefert alle.
  Future<List<Map<String, dynamic>>> leads({String? status}) async {
    final res = await _client.rpc('leads_list', params: {'p_status': status});
    return _rows(res);
  }

  /// Status setzen: `new`, `qualified`, `contacted`, `meeting`, `offer`,
  /// `negotiation`, `won`, `lost`.
  ///
  /// Ein Statuswechsel erzeugt bewusst KEINEN Verlaufseintrag von selbst —
  /// wer den Status ändert, trägt bei Bedarf auch den Grund ein (siehe
  /// Kommentar an `lead_activities`). Deshalb nimmt die Oberfläche eine
  /// Notiz entgegen.
  Future<void> setLeadStatus({
    required String leadId,
    required String status,
    String? notiz,
  }) =>
      _client.rpc(
        'lead_status_set',
        params: {
          'p_lead': leadId,
          'p_status': status,
          'p_notiz': notiz,
        },
      );

  Future<void> addLeadActivity({
    required String leadId,
    required String text,
  }) =>
      _client.rpc(
        'lead_activity_add',
        params: {'p_lead': leadId, 'p_text': text},
      );

  Future<List<Map<String, dynamic>>> leadActivities(String leadId) async {
    final res = await _client
        .from('lead_activities')
        .select('id, text, created_at')
        .eq('lead_id', leadId)
        .order('created_at', ascending: false);
    return _rows(res);
  }

  /// Anfrage erfassen: `advertising`, `ad_space`, `sponsoring`,
  /// `partnership`, `recruiting`, `event`, `business`.
  Future<String> createLead({
    required String kind,
    required String companyName,
    String? contactName,
    String? email,
    String? phone,
    String? message,
    String? source,
  }) async {
    final res = await _client.rpc(
      'lead_create',
      params: {
        'p_kind': kind,
        'p_company_name': companyName,
        'p_contact_name': contactName,
        'p_email': email,
        'p_phone': phone,
        'p_message': message,
        'p_source': source,
      },
    );
    return res.toString();
  }

  // ── Firmenkunden ───────────────────────────────────────────────────

  /// Alle Firmenkunden. Wie bei den Kampagnen gibt es keine interne RPC;
  /// `my_businesses()` ist mitgliedschaftsbasiert.
  Future<List<Map<String, dynamic>>> businesses() async {
    final res = await _client
        .from('businesses')
        .select('id, name, legal_form, billing_city, billing_email, status, '
            'sevdesk_contact_id, created_at')
        .isFilter('deleted_at', null)
        .order('name');
    return _rows(res);
  }

  Future<Map<String, dynamic>> businessDashboard({
    required String businessId,
    required DateTime von,
    required DateTime bis,
  }) async {
    final res = await _client.rpc(
      'business_dashboard',
      params: {
        'p_business': businessId,
        'p_von': _day(von),
        'p_bis': _day(bis),
      },
    );
    return _obj(res);
  }

  Future<List<Map<String, dynamic>>> businessMembers(String businessId) async {
    final res = await _client
        .from('business_members')
        .select('profile_id, role, status, activated_at, '
            'profiles(first_name, last_name, email)')
        .eq('business_id', businessId);
    return _rows(res);
  }

  Future<List<Map<String, dynamic>>> businessInvitations(
    String businessId,
  ) async {
    final res = await _client
        .from('business_invitations')
        .select('id, email, role, expires_at, accepted_at, revoked_at')
        .eq('business_id', businessId)
        .order('expires_at', ascending: false);
    return _rows(res);
  }

  /// Einladung erzeugen. Der Klartext-Token wird **einmalig** zurückgegeben
  /// und ist danach nicht mehr lesbar — in der Datenbank steht nur der
  /// SHA-256-Abdruck. Er gehört deshalb sofort weitergegeben.
  Future<Map<String, dynamic>> inviteMember({
    required String businessId,
    required String email,
    String role = 'member',
    int tage = 14,
  }) async {
    final res = await _client.rpc(
      'business_invite',
      params: {
        'p_business': businessId,
        'p_email': email,
        'p_role': role,
        'p_tage': tage,
      },
    );
    return _obj(res);
  }

  Future<void> revokeInvitation(String invitationId) => _client.rpc(
        'business_invitation_revoke',
        params: {'p_invitation': invitationId},
      );

  Future<void> setMember({
    required String businessId,
    required String profileId,
    required String role,
    required String status,
  }) =>
      _client.rpc(
        'business_member_set',
        params: {
          'p_business': businessId,
          'p_profile': profileId,
          'p_role': role,
          'p_status': status,
        },
      );

  /// Obergrenze des Arbeitgeberanteils. Kein Guthaben: Es wird nichts
  /// aufgeladen, nur begrenzt. Ohne Zeile trägt der Arbeitgeber 100 %.
  Future<void> setBudget({
    required String businessId,
    String? profileId,
    num? monatslimit,
    num? tageslimit,
    num? zuschussProzent,
    DateTime? gueltigVon,
    DateTime? gueltigBis,
  }) =>
      _client.rpc(
        'business_budget_set',
        params: {
          'p_business': businessId,
          'p_profile': profileId,
          'p_monatslimit': monatslimit,
          'p_tageslimit': tageslimit,
          'p_zuschuss': zuschussProzent,
          'p_gueltig_von': gueltigVon == null ? null : _day(gueltigVon),
          'p_gueltig_bis': gueltigBis == null ? null : _day(gueltigBis),
        },
      );

  Future<List<Map<String, dynamic>>> invoiceRuns(String businessId) async {
    final res = await _client.rpc(
      'business_invoice_runs_list',
      params: {'p_business': businessId},
    );
    return _rows(res);
  }

  /// Rechnungslauf anfordern. Die Rechnung selbst entsteht in sevDesk;
  /// hier wird nur der Auftrag samt eingefrorener Grundlage abgelegt.
  Future<Map<String, dynamic>> requestInvoice({
    required String businessId,
    required int jahr,
    required int monat,
  }) async {
    final res = await _client.rpc(
      'business_invoice_request',
      params: {
        'p_business': businessId,
        'p_jahr': jahr,
        'p_monat': monat,
      },
    );
    return _obj(res);
  }

  Future<void> releaseInvoice(String runId) =>
      _client.rpc('business_invoice_release', params: {'p_run': runId});

  /// Standortliste. Interne Aufrufer sehen alle Standorte samt
  /// Fremdbelegung — genau dafür ist die Zuordnungsmaske da (Audit R-11).
  Future<List<Map<String, dynamic>>> businessLocations(
    String businessId,
  ) async {
    final res = await _client.rpc(
      'business_locations_list',
      params: {'p_business': businessId},
    );
    return _rows(res);
  }

  Future<void> setBusinessLocation({
    required String businessId,
    required String locationId,
    required bool zuordnen,
  }) =>
      _client.rpc(
        'business_location_set',
        params: {
          'p_business': businessId,
          'p_location': locationId,
          'p_zuordnen': zuordnen,
        },
      );

  // ── E-Mail ─────────────────────────────────────────────────────────

  /// Vorlagen. Inhaltsteil (Betreff, Fließtext, Vorschauzeile) liegt in der
  /// Datenbank; Rahmen, Kopf und Fuß bleiben im Code, damit die
  /// Pflichtangaben im Fuß an genau einer Stelle gepflegt werden.
  Future<List<Map<String, dynamic>>> emailTemplates() async {
    final res = await _client
        .from('email_templates')
        .select('key, subject, body_html, body_text, preheader, is_active, '
            'updated_at')
        .order('key');
    return _rows(res);
  }

  Future<void> saveEmailTemplate({
    required String key,
    String? subject,
    String? bodyHtml,
    String? bodyText,
    String? preheader,
    bool isActive = true,
  }) =>
      _client.rpc(
        'email_template_save',
        params: {
          'p_key': key,
          'p_subject': subject,
          'p_body_html': bodyHtml,
          'p_body_text': bodyText,
          'p_preheader': preheader,
          'p_is_active': isActive,
        },
      );

  Future<Map<String, dynamic>> emailLogStats() async {
    final res = await _client.rpc('email_log_stats');
    final rows = _rows(res);
    return rows.isEmpty ? <String, dynamic>{} : rows.first;
  }

  Future<List<Map<String, dynamic>>> emailOutboxStats() async {
    final res = await _client.rpc('email_outbox_stats');
    return _rows(res);
  }

  Future<List<Map<String, dynamic>>> emailLog({
    String? direction,
    String? status,
    String? search,
    int limit = 50,
    int offset = 0,
  }) async {
    final res = await _client.rpc(
      'email_log_list',
      params: {
        'p_direction': direction,
        'p_status': status,
        'p_search': search,
        'p_from': null,
        'p_to': null,
        'p_limit': limit,
        'p_offset': offset,
      },
    );
    return _rows(res);
  }
}
