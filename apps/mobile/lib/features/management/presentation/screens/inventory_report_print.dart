/// Native-Fallback: Print-Aktion (noch) nicht implementiert. Im Web wird
/// die Datei durch inventory_report_print_web.dart ersetzt.
Future<void> printInventoryReport({
  required List<Map<String, dynamic>> rows,
  required List<Map<String, dynamic>> summary,
  required DateTime from,
  required DateTime to,
}) async {
  // Kein-op.
}
