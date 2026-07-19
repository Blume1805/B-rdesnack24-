// Web-only: PDF in Fullscreen-Dialog per <iframe> anzeigen. Umgeht damit
// jeden Popup-Blocker (auch in In-App-Browsern) und behält den App-State.
import 'dart:ui_web' as ui_web;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:web/web.dart' as web;

int _seq = 0;

Future<void> showInlinePdf(
  BuildContext context, {
  required String url,
  required String title,
}) async {
  final id = 'pdf-iframe-${DateTime.now().millisecondsSinceEpoch}-${_seq++}';
  ui_web.platformViewRegistry.registerViewFactory(id, (int _) {
    final iframe = web.HTMLIFrameElement()
      ..src = url
      ..title = title
      ..allowFullscreen = true
      ..style.border = 'none'
      ..style.width = '100%'
      ..style.height = '100%'
      ..style.background = '#ffffff';
    return iframe;
  });
  await Navigator.of(context, rootNavigator: true).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (ctx) => Scaffold(
        backgroundColor: const Color(0xFFF8F5EF),
        appBar: AppBar(
          title: Text(
            title,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontWeight: FontWeight.w800),
          ),
          leading: IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(ctx).pop(),
          ),
          actions: [
            IconButton(
              tooltip: 'In neuem Tab öffnen',
              icon: const Icon(Icons.open_in_new),
              onPressed: () {
                // Absichtlich synchron im Klick-Handler, damit der Aufruf
                // als User-Geste akzeptiert wird.
                web.window.open(url, '_blank');
              },
            ),
          ],
        ),
        body: HtmlElementView(viewType: id),
      ),
    ),
  );
  if (kDebugMode) {
    debugPrint('PDF-Inline-Viewer geschlossen: $url');
  }
}
