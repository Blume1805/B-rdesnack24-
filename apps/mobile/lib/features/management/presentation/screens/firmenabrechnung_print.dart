/// Native-Fallback: Der Druck ist heute nur im Web-Build umgesetzt, wie beim
/// FIFO-Report, der Anlage PKW-Kosten und dem Bildregister. Auf iOS und
/// Android blendet die Oberfläche den Knopf aus, statt einen zu zeigen, der
/// nichts tut.
Future<void> printFirmenabrechnung({
  required Map<String, dynamic> daten,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
}) async {
  // Kein-op.
}

bool get firmenabrechnungDruckMoeglich => false;
