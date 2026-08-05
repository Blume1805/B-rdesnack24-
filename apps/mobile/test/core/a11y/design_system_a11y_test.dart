import 'package:boerdesnack24/core/theme/app_tokens.dart';
import 'package:boerdesnack24/core/widgets/design_system/design_system.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Barrierefreiheits-Wächter für die Design-System-Bausteine (BFSG).
///
/// Warum zusätzlich zu `contrast_test.dart`: Der prüft Token-Paare, die
/// jemand von Hand ausgewählt hat. Er kann nicht sehen, ob ein Widget die
/// Farben am Ende anders kombiniert, ob ein Tippziel zu klein geraten ist
/// oder ob ein antippbares Element ohne Beschriftung dasteht. Diese Tests
/// lassen Flutters eigene Prüfregeln über die tatsächlich gerenderten
/// Widgets laufen — damit fällt eine Regression auf, ohne dass jemand
/// daran denken muss.
///
/// Geprüft werden:
///   * [androidTapTargetGuideline] — mindestens 48 x 48 dp
///   * [iOSTapTargetGuideline]     — mindestens 44 x 44 dp
///   * [labeledTapTargetGuideline] — jedes Tippziel hat eine Beschriftung
///   * [textContrastGuideline]     — 4,5:1 für Fließtext (WCAG 1.4.3)
///
/// Schlägt hier etwas fehl, ist das ein echter Befund. Bitte das Widget
/// reparieren, nicht den Test lockern.
Future<void> pumpOnLight(WidgetTester tester, Widget child) async {
  await tester.pumpWidget(
    MaterialApp(
      home: Scaffold(
        backgroundColor: AppColors.surfaceCard,
        body: Center(
          child: Padding(padding: const EdgeInsets.all(16), child: child),
        ),
      ),
    ),
  );
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
  testWidgets('RatingPicker: Tippziele groß genug und beschriftet',
      (tester) async {
    await pumpOnLight(
      tester,
      RatingPicker(value: 3, onChanged: (_) {}),
    );
    await expectAccessible(tester);
  });

  testWidgets('RatingInput: Sterne sind bedienbar und benannt', (tester) async {
    await pumpOnLight(tester, RatingInput(value: 2, onChanged: (_) {}));
    await expectAccessible(tester);
  });

  testWidgets('ModuleTile: Kachel als Ganzes antippbar und benannt',
      (tester) async {
    await pumpOnLight(
      tester,
      SizedBox(
        width: 160,
        child: ModuleTile(
          icon: Icons.storefront_outlined,
          label: 'Automaten',
          onTap: () {},
        ),
      ),
    );
    await expectAccessible(tester);
  });

  testWidgets('StatusBadge: Kontrast in allen Zuständen', (tester) async {
    await pumpOnLight(
      tester,
      // Alle sechs Tonlagen — grün, gelb und blau lagen bei 2,9 / 1,9 /
      // 4,47 und brauchten eigene Textfarben.
      const Wrap(
        spacing: 8,
        runSpacing: 8,
        children: [
          StatusBadge(label: 'Aktiv', tone: StatusTone.positive),
          StatusBadge(label: 'Achtung', tone: StatusTone.warning),
          StatusBadge(label: 'Kritisch', tone: StatusTone.critical),
          StatusBadge(label: 'Hinweis', tone: StatusTone.info),
          StatusBadge(label: 'Marke', tone: StatusTone.brand),
          StatusBadge(label: 'Neutral', tone: StatusTone.neutral),
        ],
      ),
    );
    await expectAccessible(tester);
  });

  testWidgets('PriceRow: durchgestrichener und neuer Preis lesbar',
      (tester) async {
    await pumpOnLight(tester, const PriceRow(regular: 2.30, discounted: 2.19));
    await expectAccessible(tester);
  });

  testWidgets('Eyebrow: Gold auf Weiß nutzt den abgedunkelten Ton',
      (tester) async {
    await pumpOnLight(tester, const Eyebrow('Angebot der Woche'));
    await expectAccessible(tester);
  });

  testWidgets('SectionHeader: Überschrift und Zusatz lesbar', (tester) async {
    await pumpOnLight(
      tester,
      const SectionHeader(eyebrow: 'Immer 5 % sparen', title: 'Deine Vorteile'),
    );
    await expectAccessible(tester);
  });
}
