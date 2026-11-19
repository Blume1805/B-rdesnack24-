import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

// Web-Build. Befund 19.11.2026: In der Home-Bildschirm-App auf dem iPhone
// ignoriert iOS `window.print()`, und ein Fenster mit einer im Speicher
// gebauten Seite (Blob) öffnet sich dort nicht zuverlässig. Ein Download
// kann die Home-Bildschirm-App ab iOS 18.4 sogar auf einem „Öffnen in …"-
// Bildschirm festhalten (WebKit-Fehler 290847). Was dort funktioniert, ist
// das Teilen-Menü des Systems mit einer PDF-Datei: Es bietet „Drucken",
// „In Dateien sichern", Mail und Nachrichten an.

web.File _datei(Uint8List bytes, String dateiname) => web.File(
      [bytes.toJS].toJS,
      dateiname,
      web.FilePropertyBag(type: 'application/pdf'),
    );

bool get pdfTeilenMoeglich {
  try {
    final nav = web.window.navigator;
    if (!(nav as JSObject).has('canShare')) return false;
    return nav.canShare(
      web.ShareData(files: [_datei(Uint8List(0), 'probe.pdf')].toJS),
    );
  } catch (_) {
    return false;
  }
}

bool get alsHomeBildschirmApp {
  try {
    if (web.window.matchMedia('(display-mode: standalone)').matches) {
      return true;
    }
    // Ältere iOS-Versionen melden das nur über navigator.standalone.
    final s = (web.window.navigator as JSObject).getProperty('standalone'.toJS);
    return s.isA<JSBoolean>() && (s as JSBoolean).toDart;
  } catch (_) {
    return false;
  }
}

bool get pdfOeffnenMoeglich => !alsHomeBildschirmApp;

bool get pdfHerunterladenMoeglich => !alsHomeBildschirmApp;

/// Muss direkt im Tipp-Ereignis aufgerufen werden: Safari verlangt für das
/// Teilen-Menü eine frische Nutzeraktion.
Future<void> pdfTeilen(Uint8List bytes, String dateiname, String titel) async {
  final daten = web.ShareData(
    files: [_datei(bytes, dateiname)].toJS,
    title: titel,
  );
  try {
    await web.window.navigator.share(daten).toDart;
  } catch (e) {
    // Schließen des Menüs ohne Auswahl ist kein Fehler.
    if ('$e'.contains('AbortError')) return;
    rethrow;
  }
}

/// Öffnet das PDF im Betrachter des Browsers (neuer Tab); dort gibt es
/// Drucken und Speichern. Wird das Fenster blockiert, wird heruntergeladen.
void pdfOeffnen(Uint8List bytes, String dateiname) {
  final url = web.URL.createObjectURL(_datei(bytes, dateiname));
  final fenster = web.window.open(url, '_blank');
  if (fenster == null) _laden(url, dateiname);
  Future<void>.delayed(const Duration(minutes: 2), () {
    web.URL.revokeObjectURL(url);
  });
}

void pdfHerunterladen(Uint8List bytes, String dateiname) {
  final url = web.URL.createObjectURL(_datei(bytes, dateiname));
  _laden(url, dateiname);
  Future<void>.delayed(const Duration(minutes: 2), () {
    web.URL.revokeObjectURL(url);
  });
}

void _laden(String url, String dateiname) {
  final a = web.HTMLAnchorElement()
    ..href = url
    ..download = dateiname;
  web.document.body?.append(a);
  a.click();
  a.remove();
}
