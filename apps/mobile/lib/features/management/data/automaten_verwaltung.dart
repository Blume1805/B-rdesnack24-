import 'package:supabase_flutter/supabase_flutter.dart';

// Automaten und Standorte pflegen (Wunsch Philipp 19.11.2026): anlegen,
// umbenennen, Standort ändern, stilllegen, wieder in Betrieb nehmen.
//
// Die Berechtigung prüft die Datenbank (Regeln machines_insert/_update und
// locations_insert/_update: Admin oder Recht `inventory.edit`; Löschen geht
// aus der App gar nicht, Migration 20261119120000). Die App blendet die
// Knöpfe nur zusätzlich aus.
//
// Ein Automat hängt an einem Standort (`locations`). Dessen Adresse wird
// zusätzlich auf den Automaten gespiegelt, weil Liste, Kunden-Finder und
// Belege sie dort lesen.

/// Arten aus `app.machine_type` mit deutscher Beschriftung.
const automatenArten = <String, String>{
  'snack': 'Snackautomat',
  'drink': 'Getränkeautomat',
  'combi': 'Snack & Getränke',
  'cooled': 'Kühlautomat',
};

String automatenArt(String type) => automatenArten[type] ?? type;

/// Ein Standort, wie ihn die Auswahl braucht.
class Standort {
  const Standort({
    required this.id,
    required this.code,
    required this.name,
    this.street,
    this.zip,
    this.city,
    this.accessHours,
  });

  factory Standort.fromJson(Map<String, dynamic> j) => Standort(
        id: j['id'] as String,
        code: j['code'] as String? ?? '',
        name: j['name'] as String? ?? '',
        street: j['street'] as String?,
        zip: j['zip'] as String?,
        city: j['city'] as String?,
        accessHours: j['access_hours'] as String?,
      );

  final String id;
  final String code;
  final String name;
  final String? street;
  final String? zip;
  final String? city;
  final String? accessHours;

  /// „Sülldorfer Str. 3A, 39171 Sülzetal" — leere Teile fallen weg.
  String get adresse => standortAdresse(street, zip, city);
}

String standortAdresse(String? street, String? zip, String? city) {
  final ort = [zip, city]
      .where((t) => t != null && t.trim().isNotEmpty)
      .map((t) => t!.trim())
      .join(' ');
  return [street?.trim() ?? '', ort].where((t) => t.isNotEmpty).join(', ');
}

/// Nächste freie Standort-Kennung „STO-007". Gelöschte Standorte sind für
/// die App unsichtbar, belegen ihre Kennung aber weiter; deshalb versucht
/// [AutomatenVerwaltung.standortSpeichern] bei einem Treffer die nächste.
String naechsteStandortKennung(Iterable<String> vorhandene, {int versatz = 0}) {
  var hoechste = 0;
  for (final k in vorhandene) {
    final m = RegExp(r'^STO-(\d+)$').firstMatch(k.trim());
    if (m != null) {
      final n = int.parse(m.group(1)!);
      if (n > hoechste) hoechste = n;
    }
  }
  return 'STO-${(hoechste + 1 + versatz).toString().padLeft(3, '0')}';
}

/// Vorschlag für die Kennung eines neuen Automaten: „A" und die nächste
/// Nummer nach den vorhandenen „A…"-Kennungen.
String naechsteAutomatenKennung(Iterable<String> vorhandene) {
  var hoechste = 0;
  for (final k in vorhandene) {
    final m = RegExp(r'^A(\d+)$').firstMatch(k.trim().toUpperCase());
    if (m != null) {
      final n = int.parse(m.group(1)!);
      if (n > hoechste) hoechste = n;
    }
  }
  return 'A${hoechste + 1}';
}

/// Die auf den Automaten gespiegelten Standortfelder.
Map<String, dynamic> standortSpiegel(Standort? s) => {
      'location_id': s?.id,
      'location_name': s?.name,
      'street': s?.street,
      'zip': s?.zip,
      'city': s?.city,
      'access_hours': s?.accessHours,
    };

/// Verständliche Meldung für Fehler beim Speichern.
String automatFehlerText(Object e) {
  if (e is PostgrestException) {
    if (e.code == '23505') {
      return 'Diese Kennung ist schon vergeben. Bitte eine andere wählen.';
    }
    if (e.code == '42501') {
      return 'Dafür fehlt dir die Berechtigung „Inventur bearbeiten".';
    }
  }
  return 'Speichern hat nicht geklappt. Bitte erneut versuchen.';
}

class AutomatenVerwaltung {
  AutomatenVerwaltung(this._client);

  final SupabaseClient _client;

  String? get _uid => _client.auth.currentUser?.id;

  /// Aktive Standorte (ohne gelöschte), nach Name.
  Future<List<Standort>> standorte() async {
    final rows = await _client
        .from('locations')
        .select('id, code, name, street, zip, city, access_hours')
        .isFilter('deleted_at', null)
        .eq('status', 'active')
        .order('name');
    return (rows as List)
        .cast<Map<String, dynamic>>()
        .map(Standort.fromJson)
        .toList();
  }

  /// Legt einen Standort an ([id] leer) oder ändert ihn. Beim Ändern wird
  /// die Adresse auf alle Automaten an diesem Standort gespiegelt.
  Future<Standort> standortSpeichern({
    String? id,
    required String name,
    String? street,
    String? zip,
    String? city,
    String? accessHours,
  }) async {
    String? leer(String? t) =>
        (t == null || t.trim().isEmpty) ? null : t.trim();
    final felder = {
      'name': name.trim(),
      'street': leer(street),
      'zip': leer(zip),
      'city': leer(city),
      'access_hours': leer(accessHours),
    };
    if (id != null) {
      final row = await _client
          .from('locations')
          .update({...felder, 'updated_by': _uid})
          .eq('id', id)
          .select('id, code, name, street, zip, city, access_hours')
          .single();
      final s = Standort.fromJson(row);
      final spiegel = standortSpiegel(s)..remove('location_id');
      await _client
          .from('machines')
          .update({...spiegel, 'updated_by': _uid})
          .eq('location_id', id)
          .isFilter('deleted_at', null);
      return s;
    }
    final vorhanden = (await _client.from('locations').select('code') as List)
        .map((r) => '${r['code']}')
        .toList();
    for (var versatz = 0; versatz < 20; versatz++) {
      try {
        final row = await _client
            .from('locations')
            .insert({
              ...felder,
              'code': naechsteStandortKennung(vorhanden, versatz: versatz),
              'created_by': _uid,
            })
            .select('id, code, name, street, zip, city, access_hours')
            .single();
        return Standort.fromJson(row);
      } on PostgrestException catch (e) {
        if (e.code != '23505') rethrow;
      }
    }
    throw const PostgrestException(
      message: 'Keine freie Standort-Kennung gefunden',
      code: '23505',
    );
  }

  /// Legt einen Automaten an ([id] leer) oder ändert ihn.
  Future<void> automatSpeichern({
    String? id,
    required String code,
    required String name,
    required String type,
    required bool isCooled,
    required String status,
    Standort? standort,
  }) async {
    final felder = {
      'code': code.trim().toUpperCase(),
      'name': name.trim(),
      'type': type,
      'is_cooled': isCooled,
      'status': status,
      ...standortSpiegel(standort),
    };
    if (id == null) {
      await _client.from('machines').insert({...felder, 'created_by': _uid});
    } else {
      _getroffen(
        await _client
            .from('machines')
            .update({...felder, 'updated_by': _uid})
            .eq('id', id)
            .select('id'),
      );
    }
  }

  /// Eine Änderung, die der Zeilenschutz abweist, trifft stillschweigend
  /// null Zeilen. Das soll in der App als fehlende Berechtigung ankommen,
  /// nicht als Erfolg.
  static void _getroffen(List<dynamic> zeilen) {
    if (zeilen.isEmpty) {
      throw const PostgrestException(
        message: 'Keine Zeile geändert',
        code: '42501',
      );
    }
  }

  /// Stilllegen (`inactive`) oder wieder in Betrieb nehmen (`active`).
  /// Kein Löschen: Bestand, Protokolle und Verkäufe bleiben am Automaten.
  Future<void> statusSetzen(String id, {required bool inBetrieb}) async {
    _getroffen(
      await _client
          .from('machines')
          .update({
            'status': inBetrieb ? 'active' : 'inactive',
            'updated_by': _uid,
          })
          .eq('id', id)
          .select('id'),
    );
  }
}
