import 'package:boerdesnack24/core/widgets/design_system/copy_pill.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

/// Pattern M11 „Copy-Pill" (motion/MOTION.md): Kopieren, Bestätigung in der
/// Pill, Haptik, Ansage für Bildschirmleser, Rückkehr nach 1,8 s, feste
/// Breite, „Bewegung reduzieren" und Fehlerfall.
void main() {
  late List<MethodCall> platformCalls;
  late List<Object?> announcements;
  var clipboardFails = false;

  setUp(() {
    platformCalls = [];
    announcements = [];
    clipboardFails = false;
    final messenger =
        TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger;
    messenger.setMockMethodCallHandler(SystemChannels.platform, (call) async {
      platformCalls.add(call);
      if (call.method == 'Clipboard.setData' && clipboardFails) {
        throw PlatformException(code: 'denied');
      }
      return null;
    });
    messenger.setMockDecodedMessageHandler<Object?>(
      SystemChannels.accessibility,
      (message) async {
        announcements.add(message);
        return null;
      },
    );
  });

  tearDown(() {
    final messenger =
        TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger;
    messenger.setMockMethodCallHandler(SystemChannels.platform, null);
    messenger.setMockDecodedMessageHandler<Object?>(
      SystemChannels.accessibility,
      null,
    );
  });

  Widget host({bool reduceMotion = false}) => MaterialApp(
        home: MediaQuery(
          data: MediaQueryData(disableAnimations: reduceMotion),
          child: const Scaffold(
            body: Center(
              child: SizedBox(
                width: 320,
                child: CopyPill(
                  value: '482 130',
                  copyText: '482130',
                  semanticLabel: 'Einlöse-Code',
                ),
              ),
            ),
          ),
        ),
      );

  double opacityOf(WidgetTester tester, String label) => tester
      .widget<AnimatedOpacity>(
        find
            .ancestor(
              of: find.text(label),
              matching: find.byType(AnimatedOpacity),
            )
            .first,
      )
      .opacity;

  double scaleOf(WidgetTester tester) => tester
      .widget<Transform>(
        find
            .descendant(
              of: find.byType(CopyPill),
              matching: find.byType(Transform),
            )
            .first,
      )
      .transform
      // x-Skalierung; getMaxScaleOnAxis() schlösse die z-Achse (immer 1) ein.
      .entry(0, 0);

  Iterable<Map<Object?, Object?>> announceEvents() => announcements
      .whereType<Map<Object?, Object?>>()
      .where((e) => e['type'] == 'announce');

  testWidgets('kopiert den Rohwert, bestätigt in der Pill, kehrt zurück',
      (tester) async {
    await tester.pumpWidget(host());
    expect(opacityOf(tester, 'Kopieren'), 1);
    expect(opacityOf(tester, 'Kopiert'), 0);

    await tester.tap(find.byType(FilledButton));
    await tester.pump();

    final setData =
        platformCalls.firstWhere((c) => c.method == 'Clipboard.setData');
    expect((setData.arguments as Map)['text'], '482130');
    expect(
      platformCalls.where(
        (c) =>
            c.method == 'HapticFeedback.vibrate' &&
            c.arguments == 'HapticFeedbackType.lightImpact',
      ),
      hasLength(1),
    );
    expect(opacityOf(tester, 'Kopiert'), 1);
    expect(opacityOf(tester, 'Kopieren'), 0);
    expect(find.byType(SnackBar), findsNothing);
    expect(
      announceEvents().map((e) => (e['data'] as Map)['message']),
      contains('In die Zwischenablage kopiert'),
    );

    // Die Pill startet in Druckgröße (0,96), federt über 1 hinaus und steht
    // danach bei 1.
    expect(scaleOf(tester), closeTo(0.96, 0.0001));
    await tester.pump(const Duration(milliseconds: 110));
    expect(scaleOf(tester), greaterThan(1));
    await tester.pumpAndSettle();
    expect(scaleOf(tester), closeTo(1, 0.0001));

    await tester.pump(const Duration(milliseconds: 1800));
    await tester.pumpAndSettle();
    expect(opacityOf(tester, 'Kopieren'), 1);
    expect(opacityOf(tester, 'Kopiert'), 0);
  });

  testWidgets('die Schaltfläche behält ihre Breite (kein Layout-Sprung)',
      (tester) async {
    await tester.pumpWidget(host());
    final before = tester.getSize(find.byType(FilledButton));
    await tester.tap(find.byType(FilledButton));
    await tester.pumpAndSettle();
    expect(tester.getSize(find.byType(FilledButton)), before);
    await tester.pump(const Duration(milliseconds: 1800));
    await tester.pumpAndSettle();
  });

  testWidgets('„Bewegung reduzieren": Bestätigung sofort, keine Skalierung',
      (tester) async {
    await tester.pumpWidget(host(reduceMotion: true));
    await tester.tap(find.byType(FilledButton));
    await tester.pump();

    expect(opacityOf(tester, 'Kopiert'), 1);
    expect(scaleOf(tester), closeTo(1, 0.0001));
    // Auch ein Frame später keine Skalierung (kein Pop läuft).
    await tester.pump(const Duration(milliseconds: 16));
    expect(scaleOf(tester), closeTo(1, 0.0001));

    await tester.pump(const Duration(milliseconds: 1800));
    expect(opacityOf(tester, 'Kopieren'), 1);
  });

  testWidgets('gesperrte Zwischenablage wird ehrlich gemeldet', (tester) async {
    clipboardFails = true;
    await tester.pumpWidget(host());
    await tester.tap(find.byType(FilledButton));
    await tester.pump();

    expect(opacityOf(tester, 'Fehler'), 1);
    expect(opacityOf(tester, 'Kopiert'), 0);
    expect(
      platformCalls.where((c) => c.method == 'HapticFeedback.vibrate'),
      isEmpty,
    );
    expect(
      announceEvents().map((e) => (e['data'] as Map)['message']),
      contains('Kopieren nicht möglich'),
    );
    await tester.pump(const Duration(milliseconds: 1800));
    await tester.pumpAndSettle();
  });

  testWidgets('Bildschirmleser: Wert mit Bezeichnung, Schaltfläche benannt',
      (tester) async {
    final handle = tester.ensureSemantics();
    await tester.pumpWidget(host());
    expect(find.bySemanticsLabel('Einlöse-Code: 482 130'), findsOneWidget);
    expect(find.bySemanticsLabel('Einlöse-Code kopieren'), findsOneWidget);
    handle.dispose();
  });
}
