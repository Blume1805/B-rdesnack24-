/// Wie eine Buchung dargestellt wird — an einer Stelle, für alle Ansichten.
///
/// Anlass (25.08.2026): Der Auftraggeber hat verlangt, Ausgaben „immer in
/// rot mit einem `-` davor" zu sehen. „Immer" heisst: in der Kontoübersicht,
/// in den Einzelbuchungen und in den Kennzahlen gleich. Solange jede Ansicht
/// ihre eigene Bedingung mitbringt (`isRevenue ? grün : schwarz`), gilt das
/// höchstens bis zur nächsten Änderung an einer der drei Stellen.
library;

/// Fliesst bei dieser Buchung Geld AB?
///
/// Aufwand ja, Erlös nein — und bei den Privat-/Kapitalkonten des SKR 03
/// (1800–1999) entscheidet das Konto selbst:
///
///   * 1800–1889 / 1900–1989  Privatentnahmen → Geld verlässt den Betrieb
///   * 1890–1899 / 1990–1999  Privateinlagen  → Geld kommt herein
///
/// Beide tragen `direction = 'liability'`. Sie über einen Kamm zu scheren
/// wäre genau der Fehler, der am 25.08.2026 gemeldet wurde, nur andersherum:
/// Eine Einlage mit `-` davor sähe aus wie eine Entnahme.
bool geldFliesstAb(String direction, String accountCode) {
  if (direction == 'expense') return true;
  if (direction == 'revenue') return false;
  final n = int.tryParse(accountCode.trim());
  if (n != null && n >= 1800 && n <= 1999) return n % 100 < 90;
  // Bestandskonten ohne klare Zahlungsrichtung bekommen kein Vorzeichen —
  // ein geratenes Vorzeichen ist schlimmer als keines.
  return false;
}

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
