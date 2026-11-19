import 'dart:typed_data';

import 'package:printing/printing.dart';

// iOS/Android/Desktop-Build: Das System bringt Teilen und Drucken mit
// (Printing). Gegenstück für den Web-Build: `pdf_plattform_web.dart`.

/// Ob das Teilen-Menü eine PDF-Datei annimmt.
bool get pdfTeilenMoeglich => true;

/// Ob die App als Home-Bildschirm-App ohne Browserleiste läuft (nur Web).
bool get alsHomeBildschirmApp => false;

/// Ob eine eigene Ansicht im neuen Fenster sinnvoll ist (nur Web).
bool get pdfOeffnenMoeglich => true;

/// Ob ein Download angeboten wird (nur Web außerhalb der Home-Bildschirm-App).
bool get pdfHerunterladenMoeglich => false;

Future<void> pdfTeilen(Uint8List bytes, String dateiname, String titel) =>
    Printing.sharePdf(bytes: bytes, filename: dateiname);

/// Natives Druckfenster mit Vorschau.
void pdfOeffnen(Uint8List bytes, String dateiname) {
  Printing.layoutPdf(onLayout: (_) async => bytes, name: dateiname);
}

void pdfHerunterladen(Uint8List bytes, String dateiname) {}
