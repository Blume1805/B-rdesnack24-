// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

import 'anlage_pkw_html.dart';

/// Öffnet die „Anlage zur Ermittlung der individuellen PKW-Kosten" als
/// druckbare A4-Seite in einem neuen Tab; der Druckdialog erscheint, sobald
/// sie geladen ist. Aufbau und Seitenumbruch: `anlage_pkw_html.dart`.
bool get anlageDruckMoeglich => true;

Future<void> printAnlagePkw({
  required Map<String, dynamic> daten,
  required List<Map<String, dynamic>> signatures,
  required String firma,
  required String steuernummer,
  required String ustIdNr,
  List<Map<String, dynamic>>? approvalDecisions,
}) async {
  final doc = anlagePkwHtml(
    daten: daten,
    signatures: signatures,
    firma: firma,
    steuernummer: steuernummer,
    ustIdNr: ustIdNr,
    approvalDecisions: approvalDecisions,
  );
  // Über einen Blob und nicht über document.write: der einzige Weg, der im
  // iOS-In-App-Browser zuverlässig eine eigene Seite öffnet.
  final blob = html.Blob([doc], 'text/html');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
}
