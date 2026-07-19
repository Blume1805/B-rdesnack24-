import 'package:boerdesnack24/core/widgets/design_system/design_system.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  setUpAll(() {
    // Keine Font-Downloads im Test — deterministisches Rendering (Golden).
    GoogleFonts.config.allowRuntimeFetching = false;
  });

  testWidgets('zeigt Titel und Actions, ohne Route kein Back-Button',
      (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          appBar: HeroAppBar(
            title: const Text('Testseite'),
            actions: [
              IconButton(
                tooltip: 'Aktion',
                icon: const Icon(Icons.download),
                onPressed: () {},
              ),
            ],
          ),
          body: const SizedBox.shrink(),
        ),
      ),
    );
    expect(find.text('Testseite'), findsOneWidget);
    expect(find.byIcon(Icons.download), findsOneWidget);
    expect(find.byIcon(Icons.arrow_back), findsNothing);
  });

  testWidgets('automatischer Back-Button poppt die Route', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Builder(
          builder: (context) => Scaffold(
            body: Center(
              child: FilledButton(
                onPressed: () => Navigator.of(context).push(
                  MaterialPageRoute<void>(
                    builder: (_) => const Scaffold(
                      appBar: HeroAppBar(title: Text('Unterseite')),
                      body: SizedBox.shrink(),
                    ),
                  ),
                ),
                child: const Text('Öffnen'),
              ),
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Öffnen'));
    await tester.pumpAndSettle();
    expect(find.text('Unterseite'), findsOneWidget);
    expect(find.byIcon(Icons.arrow_back), findsOneWidget);

    await tester.tap(find.byIcon(Icons.arrow_back));
    await tester.pumpAndSettle();
    expect(find.text('Unterseite'), findsNothing);
    expect(find.text('Öffnen'), findsOneWidget);
  });

  testWidgets('Golden: HeroAppBar-Grundzustand', (tester) async {
    tester.view.physicalSize = const Size(430, 932);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          appBar: HeroAppBar(title: Text('Golden-Titel')),
          body: SizedBox.shrink(),
        ),
      ),
    );
    // Das Hero-Bild dekodiert asynchron — ohne Vorladen wäre der Screenshot
    // ein Wettrennen (mal mit, mal ohne Bild) und der Golden flaky.
    final ctx = tester.element(find.byType(HeroAppBar));
    await tester.runAsync(
      () => precacheImage(
        const AssetImage('assets/images/brand_hero_wide.webp'),
        ctx,
      ),
    );
    await tester.pump();
    await expectLater(
      find.byType(HeroAppBar),
      matchesGoldenFile('goldens/hero_app_bar.png'),
    );
  });
}
