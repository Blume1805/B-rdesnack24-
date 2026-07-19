// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

/// Löst im Browser einen Datei-Download der CSV-Datei aus. Verwendet UTF-8
/// mit BOM, damit Excel/sevDesk die deutschen Umlaute korrekt einlesen.
Future<void> downloadB2bCsv(String csv) async {
  final bom = String.fromCharCode(0xFEFF);
  final blob = html.Blob([bom + csv], 'text/csv;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final a = html.AnchorElement(href: url)..download = 'b2b_customers.csv';
  a.click();
  html.Url.revokeObjectUrl(url);
}
