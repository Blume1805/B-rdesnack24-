// Web-PDF-Öffnen. WICHTIG (Root Cause des „klein & unvollständig"-Bugs):
// iOS Safari / In-App-WebViews (WKWebView) rendern PDFs NICHT in einem
// <iframe>/<embed> — sie zeigen nur eine statische, verkleinerte Vorschau der
// ERSTEN Seite. Mehrseitige Dokumente (HACCP, Verfahrensdoku) wirken dadurch
// winzig und abgeschnitten. Zuverlässig auf allen Plattformen: das PDF als
// Top-Level-Ressource in einem neuen Tab öffnen — dort greift der native
// PDF-Viewer (alle Seiten, scrollbar, Zoom, Teilen/Speichern).
import 'dart:js_interop';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:web/web.dart' as web;

// Öffnet den (bereits signierten) Dokument-Link im nativen PDF-Viewer.
// Der Klick auf ein <a target="_blank"> innerhalb der Tap-Geste gilt als
// Nutzeraktion und wird nicht vom Popup-Blocker abgefangen.
Future<void> showInlinePdf(
  BuildContext context, {
  required String url,
  required String title,
}) async {
  _openInNewTab(url);
}

// Öffnet aus rohen PDF-Bytes (z. B. Protokoll-Export) den nativen Viewer.
// Bytes -> Blob -> Object-URL -> neuer Tab. Ersetzt Printing.sharePdf, das
// in iOS-Web/In-App-Browsern unzuverlässig ist.
Future<void> sharePdfBytes(Uint8List bytes, String filename) async {
  final blobParts = [bytes.toJS].toJS;
  final blob = web.Blob(
    blobParts,
    web.BlobPropertyBag(type: 'application/pdf'),
  );
  final objectUrl = web.URL.createObjectURL(blob);
  _openInNewTab(objectUrl, download: filename);
  // Object-URL nach kurzer Zeit freigeben (Tab hat die Ressource dann geladen).
  Future<void>.delayed(const Duration(minutes: 1), () {
    web.URL.revokeObjectURL(objectUrl);
  });
}

void _openInNewTab(String url, {String? download}) {
  // Neuer Tab innerhalb der Tap-Geste (als Nutzeraktion akzeptiert) — öffnet
  // auf iOS den nativen Vollbild-PDF-Viewer (alle Seiten, scrollbar).
  final opened = web.window.open(url, '_blank');
  if (opened != null) return;

  // Popup blockiert (aggressiver In-App-Browser). Garantiert sichtbar machen:
  if (download != null) {
    // Bytes-Export: als echten Download auslösen.
    final a = web.HTMLAnchorElement()
      ..href = url
      ..download = download;
    web.document.body?.append(a);
    a.click();
    a.remove();
  } else {
    // Dokument: im selben Tab öffnen — iOS zeigt das PDF nativ, „Fertig"
    // führt zurück in die App.
    web.window.location.href = url;
  }
}
