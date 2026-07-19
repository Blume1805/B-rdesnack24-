import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

/// Fallback für Mobile/Desktop: PDF im systemeigenen Betrachter öffnen.
Future<void> showInlinePdf(
  BuildContext context, {
  required String url,
  required String title,
}) async {
  await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
}
