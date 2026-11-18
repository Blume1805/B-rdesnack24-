/// Native-Fallback: Der Druck ist heute nur im Web-Build umgesetzt, genau wie
/// beim FIFO-Inventurreport. Auf iOS und Android passiert hier nichts; die
/// Oberfläche blendet den Knopf deshalb dort aus, statt einen zu zeigen, der
/// nichts tut.
Future<void> printAnlagePkw({
  required Map<String, dynamic> daten,
  required List<Map<String, dynamic>> signatures,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
  List<Map<String, dynamic>>? approvalDecisions,
}) async {
  // Kein-op.
}

/// Ob der Druck auf dieser Plattform etwas bewirkt.
bool get anlageDruckMoeglich => false;
