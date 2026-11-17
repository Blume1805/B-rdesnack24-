/// Zustimmung zur Claude-Verbindung (MCP, OAuth 2.1 über Supabase Auth).
///
/// Ablauf: Claude meldet sich bei Supabase an; Supabase leitet Philipp auf
/// `https://app.boerdesnack24.de/oauth/consent?authorization_id=…` um (Site
/// URL + Authorization Path aus Runbook S). Die App läuft mit Hash-Routing,
/// deshalb liest sie diese Kennung beim Start aus der Adresse und merkt sie
/// sich, bis die Anmeldung (mit zweitem Faktor) abgeschlossen ist.
library;

/// Kennung aus der Startadresse, wenn es eine Zustimmungsanfrage ist.
String? zustimmungsKennung(Uri adresse) {
  bool istZustimmung(String pfad) =>
      pfad == '/oauth/consent' || pfad.endsWith('/oauth/consent');
  final id = adresse.queryParameters['authorization_id'];
  if (istZustimmung(adresse.path) && _gueltig(id)) return id;
  // Auch als Hash-Route: …/#/oauth/consent?authorization_id=…
  if (adresse.fragment.isNotEmpty) {
    final f = Uri.tryParse(adresse.fragment);
    final fid = f?.queryParameters['authorization_id'];
    if (f != null && istZustimmung(f.path) && _gueltig(fid)) return fid;
  }
  return null;
}

bool _gueltig(String? id) =>
    id != null && RegExp(r'^[A-Za-z0-9_-]{8,128}$').hasMatch(id);

/// Beim App-Start gemerkte, noch offene Zustimmungsanfrage.
abstract final class AusstehendeZustimmung {
  static String? kennung;
}

/// Angaben einer Zustimmungsanfrage, wie Supabase sie liefert.
class ZustimmungsAnfrage {
  const ZustimmungsAnfrage({
    required this.kennung,
    required this.anwendung,
    required this.ruecksprung,
    required this.umfang,
  });

  final String kennung;
  final String anwendung;
  final String ruecksprung;
  final String umfang;

  static ZustimmungsAnfrage? ausJson(Map<String, dynamic> j) {
    final id = j['authorization_id'];
    if (id is! String) return null;
    final client = j['client'];
    final name =
        client is Map ? (client['name'] ?? client['client_name']) : null;
    return ZustimmungsAnfrage(
      kennung: id,
      anwendung: (name is String && name.trim().isNotEmpty)
          ? name
          : 'Unbekannte Anwendung',
      ruecksprung: (j['redirect_uri'] ?? '').toString(),
      umfang: (j['scope'] ?? '').toString(),
    );
  }
}
