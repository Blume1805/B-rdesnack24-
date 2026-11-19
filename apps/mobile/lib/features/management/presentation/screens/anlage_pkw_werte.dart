import '../../../../core/utils/formatters.dart';

// Werte und Beschriftungen der PKW-Anlage für die PDF-Datei
// (`anlage_pkw_pdf.dart`) und den Bildschirm.

/// Reihenfolge und Beschriftung der Kostenarten.
const pkwKostenarten = <MapEntry<String, String>>[
  MapEntry('tanken', 'Tanken'),
  MapEntry('versicherung', 'Versicherung'),
  MapEntry('kfz_steuer', 'Kfz-Steuer'),
  MapEntry('waesche', 'Autowäsche'),
  MapEntry('reparatur', 'Reparaturen'),
  MapEntry('leasing', 'Leasingraten'),
  MapEntry('abschreibung', 'Abschreibung'),
  MapEntry('sonstiges', 'Sonstiges'),
];

double pkwZahl(dynamic v) {
  if (v == null) return 0;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString()) ?? 0;
}

String pkwEuro(double v) => Formatters.euro(v);

String pkwEuroOderStrich(dynamic v) =>
    v == null ? '—' : Formatters.euro(pkwZahl(v));

String pkwKm(dynamic v) {
  if (v == null) return '—';
  final n = pkwZahl(v);
  final ganz = n == n.roundToDouble();
  // Tausenderpunkt wie bei Beträgen: „29.028 km" statt „29028 km".
  final text =
      ganz ? _tausender(n.round()) : n.toStringAsFixed(1).replaceAll('.', ',');
  return '$text km';
}

String _tausender(int n) {
  final s = n.abs().toString();
  final b = StringBuffer(n < 0 ? '-' : '');
  for (var i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 == 0) b.write('.');
    b.write(s[i]);
  }
  return b.toString();
}

String pkwSatz(dynamic v) {
  if (v == null) return '—';
  // Vier Nachkommastellen, so wie die Datenbank rechnet: Bei dreistelligen
  // Strecken verschiebt schon die dritte Stelle den Betrag um Cent.
  return '${pkwZahl(v).toStringAsFixed(4).replaceAll('.', ',')} €';
}

String pkwDatum(dynamic v) {
  final d = DateTime.tryParse('${v ?? ''}');
  return d == null ? '' : Formatters.date(d);
}

/// Summe einer Kostenart für ein Fahrzeug.
double pkwKosten(Map<String, dynamic> fahrzeug, String art) =>
    (fahrzeug['kosten'] as List? ?? const [])
        .cast<Map<String, dynamic>>()
        .where((k) => k['kostenart'] == art)
        .fold<double>(0, (s, k) => s + pkwZahl(k['betrag_brutto']));

/// Hinterlegte Signatur einer Person aus den Freigabe-Entscheidungen.
String? pkwSignaturUrl(List<Map<String, dynamic>>? decisions, String name) {
  if (decisions == null) return null;
  for (final d in decisions) {
    if ('${d['full_name'] ?? ''}' == name) {
      final url = '${d['signature_url'] ?? ''}';
      if (url.isNotEmpty) return url;
    }
  }
  return null;
}
