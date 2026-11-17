import 'dart:convert';

import 'package:http/http.dart' as http;

import '../domain/zustimmung.dart';

/// Ergebnis einer Abfrage: entweder eine Anfrage zum Bestätigen oder (bei
/// früher schon erteilter Zustimmung) direkt die Rücksprungadresse.
sealed class ZustimmungsStand {
  const ZustimmungsStand();
}

class ZustimmungNoetig extends ZustimmungsStand {
  const ZustimmungNoetig(this.anfrage);
  final ZustimmungsAnfrage anfrage;
}

class BereitsZugestimmt extends ZustimmungsStand {
  const BereitsZugestimmt(this.ruecksprung);
  final String ruecksprung;
}

/// Spricht die OAuth-Endpunkte von Supabase Auth an (wie
/// `supabase.auth.oauth.*` in supabase-js 2.119; im Dart-Paket fehlen sie).
class ZustimmungDienst {
  ZustimmungDienst({
    required this.basisUrl,
    required this.apiKey,
    required this.zugangsToken,
    http.Client? client,
  }) : _http = client ?? http.Client();

  final String basisUrl;
  final String apiKey;
  final String Function() zugangsToken;
  final http.Client _http;

  Map<String, String> get _kopf => {
        'apikey': apiKey,
        'Authorization': 'Bearer ${zugangsToken()}',
        'Content-Type': 'application/json',
        'X-Supabase-Api-Version': '2024-01-01',
      };

  Uri _adresse(String kennung, [String rest = '']) => Uri.parse(
        '$basisUrl/auth/v1/oauth/authorizations/${Uri.encodeComponent(kennung)}$rest',
      );

  Future<ZustimmungsStand> abrufen(String kennung) async {
    final r = await _http.get(_adresse(kennung), headers: _kopf);
    final j = _json(r);
    final anfrage = ZustimmungsAnfrage.ausJson(j);
    if (anfrage != null) return ZustimmungNoetig(anfrage);
    final url = j['redirect_url'];
    if (url is String && url.isNotEmpty) return BereitsZugestimmt(url);
    throw const FormatException('Unerwartete Antwort');
  }

  /// `true` = zustimmen, `false` = ablehnen. Rückgabe: Rücksprungadresse.
  Future<String> entscheiden(String kennung, {required bool zustimmen}) async {
    final r = await _http.post(
      _adresse(kennung, '/consent'),
      headers: _kopf,
      body: jsonEncode({'action': zustimmen ? 'approve' : 'deny'}),
    );
    final url = _json(r)['redirect_url'];
    if (url is String && url.isNotEmpty) return url;
    throw const FormatException('Keine Rücksprungadresse');
  }

  Map<String, dynamic> _json(http.Response r) {
    if (r.statusCode < 200 || r.statusCode >= 300) {
      throw StateError('Anfrage abgelehnt (${r.statusCode})');
    }
    final j = jsonDecode(r.body);
    if (j is Map<String, dynamic>) return j;
    throw const FormatException('Unerwartete Antwort');
  }
}
