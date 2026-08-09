import 'package:flutter/material.dart';

/// Fett-Auszeichnung in den Rechtstexten.
///
/// Die Texte sind Fliesstext, kein HTML — sie werden in der App angezeigt,
/// über `public.legal_text` an das Web-Frontend gereicht und notfalls
/// ausgedruckt. Für die Hervorhebung von Überschriften und der Stellen,
/// auf die es ankommt (Fristen, Adressen, Widerrufsfolgen), reicht eine
/// einzige Auszeichnung: `**fett**`.
///
/// Bewusst KEINE Markdown-Abhängigkeit. Ein Markdown-Paket brächte
/// Überschriften-Ebenen, Listen, Links und Bilder mit — und damit die
/// Frage, was passiert, wenn in einem Rechtstext zufällig ein `#` oder
/// eine eckige Klammer steht. Eine Regel, die man in zwanzig Zeilen
/// vollständig liest, kann einen Rechtstext nicht überraschend umbauen.
/// Nebenbei: Eine neue Abhängigkeit hätte nach der Regel „Rechtstexte
/// mitziehen" eine datenschutzrechtliche Einordnung gebraucht.
///
/// Die Auszeichnung endet an der Zeilengrenze. Ein `**`, zu dem das
/// schliessende Paar fehlt, bleibt als sichtbarer Text stehen, statt den
/// halben Text fett zu setzen — ein Tippfehler soll auffallen, nicht
/// stillschweigend das Schriftbild verändern.
final RegExp _fett = RegExp(r'\*\*([^*\n]+)\*\*');

/// Zerlegt `text` in Abschnitte; `**…**` wird fett.
///
/// `basis` ist der Stil des umgebenden Fliesstextes; die fetten Teile
/// erben ihn und ändern nur die Strichstärke. So bleiben Schriftgrösse
/// und Farbe — und damit der geprüfte Kontrast — unangetastet.
List<TextSpan> legalSpans(String text, {TextStyle? basis}) {
  final fett = (basis ?? const TextStyle()).copyWith(
    fontWeight: FontWeight.w700,
  );
  final abschnitte = <TextSpan>[];
  var pos = 0;
  for (final treffer in _fett.allMatches(text)) {
    if (treffer.start > pos) {
      abschnitte.add(TextSpan(text: text.substring(pos, treffer.start)));
    }
    abschnitte.add(TextSpan(text: treffer.group(1), style: fett));
    pos = treffer.end;
  }
  if (pos < text.length) {
    abschnitte.add(TextSpan(text: text.substring(pos)));
  }
  return abschnitte;
}

/// Der Text ohne Auszeichnung — für Screenreader-Label und Tests.
///
/// Ein Screenreader liest die Spans ohnehin zusammenhängend vor; hier
/// geht es darum, dass kein `**` in einem `Semantics`-Label landet, wo es
/// als „Sternchen Sternchen" vorgelesen würde.
String legalPlain(String text) =>
    text.replaceAllMapped(_fett, (m) => m.group(1)!);
