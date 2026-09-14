import 'dart:io';

import 'package:flutter_test/flutter_test.dart';

/// Schriften duerfen zur Laufzeit nicht nachgeladen werden.
///
/// `google_fonts` holt eine nicht mitgelieferte Schrift beim ersten Start von
/// fonts.gstatic.com und uebermittelt dabei die IP-Adresse des Nutzers an
/// Google in die USA -- vor jedem Einwilligungsdialog. Fuer Webseiten hat das
/// LG Muenchen I am 20.01.2022 (3 O 17493/20) so entschieden; eine App, die
/// es beim Start tut, steht nicht besser da.
///
/// Bis 08.09.2026 war das Nachladen nur im Web abgeschaltet, auf Android und
/// iOS lief es. Dieser Test ist der Riegel dagegen, dass es zurueckkommt --
/// eine Pruefung am Quelltext, weil der Fehler genau darin bestand, dass ein
/// Aufruf an einer Stelle stand, an der niemand mehr hinsah.
void main() {
  test('kein GoogleFonts-Aufruf ausser dem Riegel in bootstrap.dart', () {
    final treffer = <String>[];

    for (final e in Directory('lib').listSync(recursive: true)) {
      if (e is! File || !e.path.endsWith('.dart')) continue;
      final zeilen = e.readAsLinesSync();
      for (var i = 0; i < zeilen.length; i++) {
        final zeile = zeilen[i];
        if (!zeile.contains('GoogleFonts')) continue;
        // Erlaubt ist ausschliesslich das Abschalten selbst.
        if (zeile.contains('GoogleFonts.config.allowRuntimeFetching = false')) {
          continue;
        }
        // Kommentare erklaeren den Sachverhalt und laden nichts nach.
        if (zeile.trimLeft().startsWith('//')) continue;
        treffer.add('${e.path}:${i + 1}: ${zeile.trim()}');
      }
    }

    expect(
      treffer,
      isEmpty,
      reason: 'Schriften werden zur Laufzeit von Google geladen. Entweder die '
          'Dateien mitliefern (SIL OFL 1.1 erlaubt das) oder den Aufruf '
          'entfernen. Gefunden:\n${treffer.join('\n')}',
    );
  });

  test('der Riegel in bootstrap.dart gilt fuer alle Plattformen', () {
    final quelle = File('lib/bootstrap.dart').readAsStringSync();
    expect(
      quelle.contains('GoogleFonts.config.allowRuntimeFetching = false'),
      isTrue,
      reason: 'Der Riegel fehlt.',
    );
    // Gegenprobe: der Riegel darf nicht wieder in einer Bedingung landen.
    // Geprueft wird die Einrueckung -- auf Rumpfebene der Funktion sind es
    // genau zwei Leerzeichen, in jedem if-Block mehr. Das haelt auch dann,
    // wenn der Kommentar daneben das Wort kIsWeb erwaehnt.
    final zeile = File('lib/bootstrap.dart').readAsLinesSync().firstWhere(
          (z) => z.contains('GoogleFonts.config.allowRuntimeFetching = false'),
        );
    final einrueckung = zeile.length - zeile.trimLeft().length;
    expect(
      einrueckung,
      2,
      reason: 'Der Riegel ist eingerueckt, steht also in einem Block '
          '(fruehere Fassung: hinter `if (kIsWeb)`) und wirkt dann nicht '
          'mehr auf allen Plattformen.',
    );
  });
}
