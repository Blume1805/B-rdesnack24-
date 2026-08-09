import 'package:boerdesnack24/core/router/app_router.dart';
import 'package:boerdesnack24/features/legal/presentation/legal_overview_screen.dart';
import 'package:boerdesnack24/features/legal/presentation/legal_screens.dart';
import 'package:boerdesnack24/features/legal/presentation/legal_texts.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Barrierefreiheits-Wächter für die Rechtsseiten.
///
/// Warum eigens für diese Seiten: Sie sind der einzige Ort, an dem jemand
/// nachlesen kann, wie er widerruft, kündigt, Auskunft verlangt oder eine
/// Barriere meldet. Eine Rechtsseite, die sich nicht vorlesen lässt, nimmt
/// genau denen den Zugang, für die die Erklärung geschrieben wurde.
///
/// Die Barrierefreiheitserklärung sagt zu, dass die automatische Prüfung
/// „die Bausteine des Design-Systems und die Rechtstexte" abdeckt. Vor
/// diesem Test stimmte der zweite Teil nicht. Eine Zusage in einem
/// Rechtstext, die kein Test trägt, ist eine Behauptung — und Behauptungen
/// über Barrierefreiheit sind genau die, die man nicht aufstellen sollte.
///
/// Schlägt hier etwas fehl, ist das ein echter Befund. Bitte den Screen
/// reparieren, nicht den Test lockern.
Future<void> pumpLegal(WidgetTester tester, Widget screen) async {
  await tester.pumpWidget(MaterialApp(home: screen));
  await tester.pumpAndSettle();
}

Future<void> expectAccessible(WidgetTester tester) async {
  final handle = tester.ensureSemantics();
  await expectLater(tester, meetsGuideline(androidTapTargetGuideline));
  await expectLater(tester, meetsGuideline(iOSTapTargetGuideline));
  await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
  await expectLater(tester, meetsGuideline(textContrastGuideline));
  handle.dispose();
}

void main() {
  const seiten = <String, Widget>{
    'Übersicht': LegalOverviewScreen(),
    'Impressum': ImprintScreen(),
    'Datenschutzerklärung': PrivacyScreen(),
    'Nutzungsbedingungen': TermsScreen(),
    'Widerrufsbelehrung': WithdrawalScreen(),
    'Zahlungsinformationen': PaymentInfoScreen(),
    'Cookies und Tracking': CookiesScreen(),
    'Barrierefreiheit': AccessibilityScreen(),
  };

  seiten.forEach((name, screen) {
    testWidgets('$name: Kontrast, Tippziele und Beschriftung', (tester) async {
      await pumpLegal(tester, screen);
      await expectAccessible(tester);
    });
  });

  testWidgets('Rechtstexte sind vorlesbarer Text, kein Bild', (tester) async {
    // Screenreader können nur lesen, was als Text im Baum steht. Ein
    // gerendertes Bild mit Gesetzestext wäre für sie stumm.
    await pumpLegal(tester, const AccessibilityScreen());
    expect(find.byType(SelectableText), findsOneWidget);
  });

  test('Jede Rechtsseite hat einen nicht-leeren Text', () {
    // Ein leerer Rechtstext fällt in der Oberfläche nicht auf — die Seite
    // sieht dann nur kurz aus.
    const texte = <String, String>{
      'imprint': LegalTexts.imprint,
      'privacy': LegalTexts.privacy,
      'terms': LegalTexts.terms,
      'withdrawal': LegalTexts.withdrawal,
      'payment': LegalTexts.payment,
      'cookies': LegalTexts.cookies,
      'accessibility': LegalTexts.accessibility,
    };
    texte.forEach((name, text) {
      expect(text.trim().length, greaterThan(200), reason: '$name ist zu kurz');
    });
  });

  test('Pflichtangaben stehen im Impressum', () {
    // Diese vier Angaben sind der Kern von § 5 DDG. Fällt eine beim
    // Umformulieren heraus, fällt es hier auf und nicht bei einer Abmahnung.
    for (final pflicht in [
      'Bördesnack24 GbR',
      'Sülldorfer Str. 3A',
      'boerdesnack24@gmail.com',
      'DE 458804058',
    ]) {
      expect(LegalTexts.imprint, contains(pflicht));
    }
  });

  testWidgets('Der Screen stellt Auszeichnungen fett dar', (tester) async {
    // Prüft die Verdrahtung, nicht den Parser: Wäre `legalSpans` im Screen
    // vergessen worden, blieben alle Tests in legal_rich_text_test.dart
    // trotzdem grün — der Text stünde dann nur mit Sternchen auf dem
    // Bildschirm.
    await pumpLegal(tester, const WithdrawalScreen());
    final feld = tester.widget<SelectableText>(find.byType(SelectableText));
    final teile = <String>[];
    var fett = 0;
    feld.textSpan!.visitChildren((s) {
      if (s is TextSpan) {
        if (s.text != null) teile.add(s.text!);
        if (s.style?.fontWeight == FontWeight.w700) fett++;
      }
      return true;
    });
    expect(fett, greaterThan(0), reason: 'nichts wurde fett gesetzt');
    expect(teile.join(), isNot(contains('**')));
    expect(teile.join(), contains('Widerrufsbelehrung'));
  });

  testWidgets('Die Übersicht verlinkt jeden Rechtstext', (tester) async {
    // Seit die sieben Texte hinter einer Kachel liegen, ist diese Seite der
    // einzige Weg dorthin. Fällt hier ein Eintrag heraus, ist der Text für
    // den Nutzer verschwunden — auffallen würde das sonst niemandem, denn
    // die Seite selbst funktioniert ja weiter.
    await pumpLegal(tester, const LegalOverviewScreen());
    for (final titel in [
      'Impressum',
      'Datenschutzerklärung',
      'Nutzungsbedingungen',
      'Widerrufsbelehrung',
      'Zahlungsinformationen',
      'Cookies und Tracking',
      'Barrierefreiheit',
    ]) {
      expect(find.text(titel), findsOneWidget, reason: '$titel fehlt');
    }
  });

  test('Die Übersicht zeigt auf registrierte Routen, ohne Dubletten', () {
    // Ein Eintrag mit Tippfehler im Pfad sieht in der Liste völlig normal
    // aus und läuft erst beim Antippen ins Leere.
    const registriert = {
      AppRoutes.imprint,
      AppRoutes.privacy,
      AppRoutes.terms,
      AppRoutes.cancellation,
      AppRoutes.withdrawal,
      AppRoutes.paymentInfo,
      AppRoutes.cookies,
      AppRoutes.accessibility,
    };
    final ziele = legalOverviewEntries.map((e) => e.route).toList();
    expect(ziele.toSet().length, ziele.length, reason: 'doppelter Eintrag');
    for (final ziel in ziele) {
      expect(registriert, contains(ziel));
    }
  });

  test('Der Kündigungsweg steht in der Übersicht', () {
    // § 312k Abs. 2 BGB: ständig verfügbar und unmittelbar erreichbar.
    // Vorher war das Formular nur von der Anmeldeseite und aus dem
    // Chat-Assistenten heraus verlinkt — für Angemeldete also nirgends.
    expect(
      legalOverviewEntries.map((e) => e.route),
      contains(AppRoutes.cancellation),
    );
  });

  test('Widerrufsbelehrung enthält Frist, Adressat und Musterformular', () {
    expect(LegalTexts.withdrawal, contains('vierzehn Tagen'));
    expect(LegalTexts.withdrawal, contains('Bördesnack24 GbR'));
    expect(LegalTexts.withdrawal, contains('Muster-Widerrufsformular'));
  });
}
