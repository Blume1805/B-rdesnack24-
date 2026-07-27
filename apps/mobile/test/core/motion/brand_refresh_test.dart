import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:boerdesnack24/core/motion/brand_refresh.dart';

/// `BrandRefresh` ersetzt Flutters `RefreshIndicator` durch eine eigene
/// Gestenerkennung — deshalb muss die Auslöselogik getestet sein: zu kurzes
/// Ziehen darf nichts laden, ein langer Zug schon. Beide Overscroll-Modelle
/// (Bouncing/Clamping) werden abgedeckt.
void main() {
  Widget harness({
    required Future<void> Function() onRefresh,
    required ScrollPhysics physics,
  }) {
    return MaterialApp(
      home: Scaffold(
        body: BrandRefresh(
          onRefresh: onRefresh,
          child: ListView.builder(
            physics: physics,
            itemCount: 30,
            itemBuilder: (_, i) => SizedBox(height: 60, child: Text('Item $i')),
          ),
        ),
      ),
    );
  }

  for (final entry in <String, ScrollPhysics>{
    'Bouncing (iOS)': const BouncingScrollPhysics(
      parent: AlwaysScrollableScrollPhysics(),
    ),
    'Clamping (Android)': const ClampingScrollPhysics(
      parent: AlwaysScrollableScrollPhysics(),
    ),
  }.entries) {
    testWidgets('${entry.key}: langer Zug löst onRefresh aus', (tester) async {
      var calls = 0;
      await tester.pumpWidget(
        harness(
          physics: entry.value,
          onRefresh: () async => calls++,
        ),
      );

      await tester.fling(find.text('Item 0'), const Offset(0, 300), 800);
      await tester.pumpAndSettle();

      expect(calls, 1);
    });

    testWidgets('${entry.key}: kurzer Zug löst nichts aus', (tester) async {
      var calls = 0;
      await tester.pumpWidget(
        harness(
          physics: entry.value,
          onRefresh: () async => calls++,
        ),
      );

      final gesture = await tester.startGesture(
        tester.getCenter(find.text('Item 1')),
      );
      await gesture.moveBy(const Offset(0, 30));
      await tester.pump();
      await gesture.up();
      await tester.pumpAndSettle();

      expect(calls, 0);
    });
  }

  testWidgets('während des Ladens wird nicht doppelt ausgelöst',
      (tester) async {
    var calls = 0;
    final gate = Completer<void>();
    await tester.pumpWidget(
      harness(
        physics: const BouncingScrollPhysics(
          parent: AlwaysScrollableScrollPhysics(),
        ),
        onRefresh: () async {
          calls++;
          await gate.future;
        },
      ),
    );

    await tester.fling(find.text('Item 0'), const Offset(0, 300), 800);
    await tester.pump();
    await tester.fling(find.text('Item 0'), const Offset(0, 300), 800);
    await tester.pump();

    expect(calls, 1);

    gate.complete();
    await tester.pumpAndSettle();
  });
}
