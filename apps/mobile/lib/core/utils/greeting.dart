/// Tageszeit-abhängige Anrede im Kunden-Header.
///
/// Bewusst als reine Funktion (keine Widget-Abhängigkeit) und mit
/// injizierbarer Uhrzeit — sonst ließen sich die Grenzen nicht prüfen.
abstract final class Greeting {
  /// Grußformel ohne Namen und ohne Satzzeichen.
  ///
  /// Grenzen bewusst so gelegt, dass niemand um 2 Uhr nachts mit
  /// „Guten Abend" begrüßt wird — dafür gibt es das neutrale „Hallo".
  static String forTime([DateTime? now]) {
    final h = (now ?? DateTime.now()).hour;
    if (h >= 5 && h < 11) return 'Guten Morgen';
    if (h >= 11 && h < 18) return 'Guten Tag';
    if (h >= 18 && h < 23) return 'Guten Abend';
    return 'Hallo';
  }
}
