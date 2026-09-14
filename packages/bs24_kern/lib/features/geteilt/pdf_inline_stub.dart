import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:printing/printing.dart';
import 'package:url_launcher/url_launcher.dart';

/// Fallback für Mobile/Desktop: PDF im systemeigenen Betrachter öffnen.
Future<void> showInlinePdf(
  BuildContext context, {
  required String url,
  required String title,
}) async {
  await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
}

/// Mobile/Desktop: Protokoll-Export über das native Teilen-/Druck-Sheet.
Future<void> sharePdfBytes(Uint8List bytes, String filename) async {
  await Printing.sharePdf(bytes: bytes, filename: filename);
}
