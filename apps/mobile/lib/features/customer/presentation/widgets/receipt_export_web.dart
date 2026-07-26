import 'dart:convert';
import 'dart:js_interop';

import 'package:web/web.dart' as web;

/// Web: CSV als echten Datei-Download auslösen (Blob → Object-URL →
/// Anchor-Klick). Gibt 'downloaded' zurück.
Future<String> shareCsv(String content, String filename) async {
  // UTF-8-BOM voranstellen, damit Excel Umlaute korrekt liest.
  final bytes = utf8.encode('﻿$content');
  final blobParts = [bytes.toJS].toJS;
  final blob = web.Blob(
    blobParts,
    web.BlobPropertyBag(type: 'text/csv;charset=utf-8'),
  );
  final url = web.URL.createObjectURL(blob);
  final a = web.HTMLAnchorElement()
    ..href = url
    ..download = filename;
  web.document.body?.append(a);
  a.click();
  a.remove();
  web.URL.revokeObjectURL(url);
  return 'downloaded';
}
