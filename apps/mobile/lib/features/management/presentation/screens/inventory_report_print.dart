/// Native-Fallback: Print-Aktion (noch) nicht implementiert. Im Web wird
/// die Datei durch inventory_report_print_web.dart ersetzt.
Future<void> printInventoryReport({
  required List<Map<String, dynamic>> movements,
  required List<Map<String, dynamic>> lots,
  required List<Map<String, dynamic>> signatures,
  required DateTime from,
  required DateTime to,
  List<Map<String, dynamic>>? approvalDecisions,
}) async {
  // Kein-op.
}
