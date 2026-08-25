/// Wie eine Buchung dargestellt wird — an einer Stelle, für alle Ansichten.
///
/// Anlass (25.08.2026): Der Auftraggeber hat verlangt, Ausgaben „immer in
/// rot mit einem `-` davor" zu sehen. „Immer" heisst: in der Kontoübersicht,
/// in den Einzelbuchungen und in den Kennzahlen gleich. Solange jede Ansicht
/// ihre eigene Bedingung mitbringt (`isRevenue ? grün : schwarz`), gilt das
/// höchstens bis zur nächsten Änderung an einer der drei Stellen.
library;

/// In welche Richtung läuft das Geld bei dieser Buchung?
enum Geldfluss {
  /// Geld verlässt den Betrieb: Aufwand, Privatentnahme, Erlösminderung.
  hinaus,

  /// Geld kommt herein: Erlös, Privateinlage — und die Erstattung eines
  /// Aufwands.
  herein,

  /// Bestandskonten ohne erkennbare Zahlungsrichtung.
  weder,
}

/// Die Zahlungsrichtung einer Buchung.
///
/// Drei Dinge entscheiden gemeinsam, und keines allein reicht:
///
/// * **Die Kontoklasse** sagt, ob es Aufwand, Erlös oder Kapital ist.
/// * **Das Konto selbst** entscheidet im Privatbereich des SKR 03
///   (1800–1999): Auf den Zehnerstellen 90–99 liegen die Einlagen (1890
///   Privateinlagen, 1990 für Teilhafter), darunter die Entnahmen. Beide
///   tragen `direction = 'liability'`; sie über einen Kamm zu scheren wäre
///   derselbe Fehler wie „Privateinlage als Aufwand", nur andersherum.
/// * **Das Vorzeichen des Betrags** dreht die Richtung um. Ein negativer
///   Aufwand ist keine doppelte Ausgabe, sondern eine Erstattung — gemeldet
///   am 25.08.2026 an zwei Amazon-Belegen über je 22,71 € mit derselben
///   Rechnungsnummer, von denen der zweite eine Rückerstattung war.
Geldfluss geldfluss(String direction, String accountCode, double betrag) {
  final zurueck = betrag < 0;
  Geldfluss dreh(Geldfluss f) {
    if (!zurueck) return f;
    return f == Geldfluss.hinaus ? Geldfluss.herein : Geldfluss.hinaus;
  }

  if (direction == 'expense') return dreh(Geldfluss.hinaus);
  if (direction == 'revenue') return dreh(Geldfluss.herein);

  final n = int.tryParse(accountCode.trim());
  if (n != null && n >= 1800 && n <= 1999) {
    return dreh(n % 100 >= 90 ? Geldfluss.herein : Geldfluss.hinaus);
  }
  // Bestandskonten ohne klare Zahlungsrichtung bekommen kein Vorzeichen —
  // ein geratenes Vorzeichen ist schlimmer als keines.
  return Geldfluss.weder;
}

/// Fliesst bei dieser Buchung Geld ab? Kurzform für Vorzeichen und Farbe.
bool geldFliesstAb(String direction, String accountCode, double betrag) =>
    geldfluss(direction, accountCode, betrag) == Geldfluss.hinaus;

/// Klartext für `finance_bookings.direction`.
String richtungsBezeichnung(String direction) {
  switch (direction) {
    case 'revenue':
      return 'Erlös';
    case 'expense':
      return 'Aufwand';
    case 'liability':
      return 'Privat/Kapital';
    case 'asset':
      return 'Bestand';
    default:
      return direction;
  }
}
