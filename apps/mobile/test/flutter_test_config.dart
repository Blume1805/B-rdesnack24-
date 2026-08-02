import 'dart:async';

import 'package:boerdesnack24/core/theme/app_typography.dart';
import 'package:google_fonts/google_fonts.dart';

/// Wird von `flutter test` automatisch vor JEDEM Test im Baum ausgeführt.
///
/// Ohne diesen Schalter versucht `google_fonts` bei jedem gerenderten Text
/// die Schriftdatei von fonts.gstatic.com nachzuladen. Im Test gibt es
/// keine Netzverbindung: Jeder Versuch wirft eine Exception, die
/// Widget-Tests scheitern lässt, die inhaltlich völlig in Ordnung sind —
/// besonders unangenehm bei Barrierefreiheits- und Golden-Tests, wo man
/// den echten Befund dann im Rauschen sucht.
///
/// Bisher stand die Zeile einzeln in `hero_app_bar_test.dart`. Hier gilt
/// sie für alle Tests, auch für die, die es noch nicht gibt.
/// Zur Laufzeit macht `bootstrap.dart` dasselbe für den Web-Build.
Future<void> testExecutable(FutureOr<void> Function() testMain) async {
  GoogleFonts.config.allowRuntimeFetching = false;
  // Zusätzlich die Typografie auf die System-Sans umstellen. Nur das
  // Abschalten des Nachladens reicht nicht: google_fonts wirft dann, weil
  // die Schriften auch nicht als Asset gebündelt sind.
  AppTypography.useSystemFallback = true;
  await testMain();
}
