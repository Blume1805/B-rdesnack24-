// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

import '../../domain/entities/invoice.dart';
import 'invoice_html.dart';

/// Öffnet ein neues Browser-Fenster mit der Rechnung als HTML und ruft den
/// System-Print-Dialog auf — der Kunde kann so als PDF speichern oder
/// direkt drucken. Aufbau: `invoice_html.dart`.
Future<void> printInvoice(Invoice invoice) async {
  final blob = html.Blob([invoiceHtml(invoice)], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}
