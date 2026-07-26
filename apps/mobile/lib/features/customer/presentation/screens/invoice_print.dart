import '../../domain/entities/invoice.dart';

/// Non-web-Fallback: Print-Aktion ist auf Native aktuell nicht implementiert.
/// In der Web-Demo wird `invoice_print_web.dart` durch conditional import
/// hier ersetzt.
Future<void> printInvoice(Invoice invoice) async {
  // Kein-op: Der User sieht auf Native die Bildschirm-Vorschau; für den
  // PDF-Export werden Print-Frameworks (pdf/printing) zu einem späteren
  // Zeitpunkt eingezogen.
}
