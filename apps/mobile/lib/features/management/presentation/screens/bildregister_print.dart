/// Native-Fallback: Der Druck ist heute nur im Web-Build umgesetzt, genau wie
/// beim FIFO-Inventurreport und bei der Anlage PKW-Kosten. Auf iOS und Android
/// passiert hier nichts; die Oberfläche blendet den Knopf deshalb dort aus,
/// statt einen zu zeigen, der nichts tut.
Future<void> printBildregister({
  required Map<String, dynamic> daten,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
}) async {
  // Kein-op.
}

/// Ob der Druck auf dieser Plattform etwas bewirkt.
bool get bildregisterDruckMoeglich => false;
