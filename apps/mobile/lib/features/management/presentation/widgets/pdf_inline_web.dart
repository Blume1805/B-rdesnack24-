// Web-PDF-Öffnen. WICHTIG (Root Cause des „klein & unvollständig"-Bugs):
// iOS Safari / In-App-WebViews (WKWebView) rendern PDFs NICHT in einem
// <iframe>/<embed> — sie zeigen nur eine statische, verkleinerte Vorschau der
// ERSTEN Seite. Mehrseitige Dokumente (HACCP, Verfahrensdoku) wirken dadurch
// winzig und abgeschnitten. Zuverlässig auf allen Plattformen: das PDF als
// Top-Level-Ressource in einem neuen Tab öffnen — dort greift der native
// PDF-Viewer (alle Seiten, scrollbar, Zoom, Teilen/Speichern).
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

void _openInNewTab(String url) {
  // Neuer Tab innerhalb der Tap-Geste (als Nutzeraktion akzeptiert) — öffnet
  // auf iOS den nativen Vollbild-PDF-Viewer (alle Seiten, scrollbar).
  final opened = web.window.open(url, '_blank');
  if (opened != null) return;

  // Popup blockiert (aggressiver In-App-Browser): im selben Tab öffnen —
  // iOS zeigt das PDF nativ, „Fertig" führt zurück in die App. PDF-Dateien
  // aus Bytes laufen über `core/druck/pdf_ausgabe.dart`.
  web.window.location.href = url;
}
