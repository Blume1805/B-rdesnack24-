// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

import 'inventory_report_html.dart';

/// Öffnet die FIFO-Inventur als druckbare HTML-Seite (A4 quer) in einem
/// neuen Tab; der Druckdialog erscheint, sobald sie geladen ist. Aufbau und
/// Seitenumbruch: `inventory_report_html.dart`.
Future<void> printInventoryReport({
  required List<Map<String, dynamic>> movements,
  required List<Map<String, dynamic>> lots,
  required List<Map<String, dynamic>> signatures,
  required DateTime from,
  required DateTime to,
  List<Map<String, dynamic>>? approvalDecisions,
}) async {
  final doc = inventoryReportHtml(
    movements: movements,
    lots: lots,
    signatures: signatures,
    from: from,
    to: to,
    approvalDecisions: approvalDecisions,
  );
  final blob = html.Blob([doc], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}
