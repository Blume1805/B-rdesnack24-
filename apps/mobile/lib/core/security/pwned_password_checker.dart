import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:http/http.dart' as http;

/// Prüft Passwörter gegen die HaveIBeenPwned-Datenbank geleakter
/// Passwörter — clientseitig, weil die serverseitige Supabase-Variante
/// dem Pro-Plan vorbehalten ist.
///
/// Datenschutz (k-Anonymity-Verfahren): Das Passwort verlässt das Gerät
/// nie. Gesendet werden nur die ersten 5 Zeichen des SHA-1-Hashes; die
/// API liefert alle (~800) Hash-Suffixe dieses Präfixes zurück und der
/// Abgleich passiert lokal. Der Add-Padding-Header verschleiert
/// zusätzlich, wie viele Treffer ein Präfix hat.
///
/// Fehlverhalten ist bewusst **fail-open**: Ist die API nicht erreichbar
/// (Offline, Firmen-Proxy, CORS-Sonderfall), blockieren wir die
/// Registrierung nicht — der Check ist Zusatzschutz, kein Gatekeeper.
class PwnedPasswordChecker {
  PwnedPasswordChecker({http.Client? client, this.timeout = const Duration(seconds: 4)})
      : _client = client ?? http.Client();

  final http.Client _client;
  final Duration timeout;

  static final Uri _base = Uri.parse('https://api.pwnedpasswords.com/range/');

  /// Liefert die Anzahl bekannter Leaks für [password].
  /// 0 = nicht in der Datenbank; null = Prüfung nicht möglich (fail-open).
  Future<int?> breachCount(String password) async {
    final digest = sha1.convert(utf8.encode(password)).toString().toUpperCase();
    final prefix = digest.substring(0, 5);
    final suffix = digest.substring(5);
    try {
      final res = await _client
          .get(_base.resolve(prefix), headers: {'Add-Padding': 'true'})
          .timeout(timeout);
      if (res.statusCode != 200) return null;
      for (final line in const LineSplitter().convert(res.body)) {
        final sep = line.indexOf(':');
        if (sep < 0) continue;
        if (line.substring(0, sep).toUpperCase() == suffix) {
          // Padding-Zeilen haben Count 0 — die zählen nicht als Treffer.
          final count = int.tryParse(line.substring(sep + 1).trim()) ?? 0;
          return count;
        }
      }
      return 0;
    } catch (_) {
      return null;
    }
  }

  /// Bequemer Bool-Wrapper: true = Passwort ist kompromittiert.
  /// Bei nicht möglicher Prüfung (null) → false (fail-open).
  Future<bool> isBreached(String password) async {
    final count = await breachCount(password);
    return (count ?? 0) > 0;
  }
}
