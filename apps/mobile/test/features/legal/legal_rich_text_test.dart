import 'package:boerdesnack24/features/legal/presentation/legal_rich_text.dart';
import 'package:boerdesnack24/features/legal/presentation/legal_texts.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Wächter für die Fett-Auszeichnung der Rechtstexte.
///
/// Die Auszeichnung ist ein Zeichenmuster im Text — `**so**`. Der Preis
/// dafür: Ein Tippfehler im Muster wird sonst mit ausgeliefert und steht
/// dann als „Sternchen Sternchen" mitten in der Widerrufsbelehrung. Genau
/// das fangen diese Tests ab, und zwar an den echten Texten, nicht an
/// Beispielen.
const _texte = <String, String>{
  'imprint': LegalTexts.imprint,
  'privacy': LegalTexts.privacy,
  'terms': LegalTexts.terms,
  'withdrawal': LegalTexts.withdrawal,
  'payment': LegalTexts.payment,
  'cookies': LegalTexts.cookies,
  'accessibility': LegalTexts.accessibility,
};

void main() {
  group('legalSpans', () {
    test('zeichnet nur den Teil zwischen den Sternchen aus', () {
      final spans = legalSpans('vor **mitte** nach');
      expect(spans.map((s) => s.text), ['vor ', 'mitte', ' nach']);
      expect(spans[0].style, isNull);
      expect(spans[1].style?.fontWeight, FontWeight.w700);
      expect(spans[2].style, isNull);
    });

    test('erbt den Basisstil und ändert nur die Strichstärke', () {
      // Sonst wäre der geprüfte Kontrast für fette Stellen nicht mehr der
      // gemessene — eine Auszeichnung darf die Farbe nicht anfassen.
      const basis = TextStyle(fontSize: 13, color: Color(0xFF101010));
      final spans = legalSpans('**fett**', basis: basis);
      expect(spans.single.style?.fontSize, 13);
      expect(spans.single.style?.color, const Color(0xFF101010));
      expect(spans.single.style?.fontWeight, FontWeight.w700);
    });

    test('ein einzelnes Sternchenpaar bleibt sichtbarer Text', () {
      // Ein Tippfehler soll auffallen, nicht den halben Text fett setzen.
      final spans = legalSpans('offen **ohne Ende');
      expect(spans.single.text, 'offen **ohne Ende');
      expect(spans.single.style, isNull);
    });

    test('die Auszeichnung endet an der Zeilengrenze', () {
      final spans = legalSpans('**erste\nzweite**');
      expect(spans.single.text, '**erste\nzweite**');
    });

    test('setzt den Text unverändert wieder zusammen', () {
      for (final eintrag in _texte.entries) {
        final zusammen = legalSpans(eintrag.value).map((s) => s.text).join();
        expect(
          zusammen,
          legalPlain(eintrag.value),
          reason: '${eintrag.key} geht beim Zerlegen verloren',
        );
      }
    });
  });

  group('Auszeichnung in den Rechtstexten', () {
    test('kein Sternchenpaar bleibt im dargestellten Text stehen', () {
      // Der wichtigste Test hier: Was der Nutzer liest, darf keine
      // Auszeichnungszeichen enthalten.
      //
      // Geprüft wird auf `**`, nicht auf `*`: Das Muster-Widerrufsformular
      // enthält legitime einzelne Sternchen — „(*) Unzutreffendes
      // streichen". Die dürfen bleiben, ein übriggebliebenes Paar nicht.
      for (final eintrag in _texte.entries) {
        final sichtbar = legalSpans(eintrag.value).map((s) => s.text).join();
        expect(
          sichtbar.contains('**'),
          isFalse,
          reason:
              '${eintrag.key} enthält ein nicht geschlossenes Sternchenpaar',
        );
        expect(sichtbar, legalPlain(eintrag.value));
      }
    });

    test('jeder Text hat ausgezeichnete Stellen', () {
      // Fällt die Auszeichnung bei einer Überarbeitung heraus, merkt das
      // sonst niemand — der Text bleibt ja lesbar, nur eben grau in grau.
      for (final eintrag in _texte.entries) {
        final fett = legalSpans(
          eintrag.value,
        ).where((s) => s.style?.fontWeight == FontWeight.w700);
        expect(
          fett.length,
          greaterThanOrEqualTo(4),
          reason: '${eintrag.key} hat kaum Auszeichnungen',
        );
      }
    });

    test('die erste Zeile jedes Textes ist die ausgezeichnete Überschrift', () {
      for (final eintrag in _texte.entries) {
        final erste = eintrag.value.trimLeft().split('\n').first;
        expect(
          erste.startsWith('**') && erste.endsWith('**'),
          isTrue,
          reason: '${eintrag.key} beginnt ohne Überschrift: $erste',
        );
      }
    });
  });
}
