import 'package:boerdesnack24/core/widgets/design_system/install_hint_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('zeigt nichts, wenn das Gerät die Ablage nicht anbietet',
      (tester) async {
    // Auf der Dart-VM greift der Stub, InstallPrompt.method ist none.
    // Genau dann darf die Karte nichts rendern: Ein Knopf, der nichts
    // bewirkt, ist schlimmer als kein Knopf.
    var dismissed = false;
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: InstallHintCard(onDismiss: () => dismissed = true),
        ),
      ),
    );

    expect(find.text('Bördesnack24 aufs Handy legen'), findsNothing);
    expect(find.text('Auf den Startbildschirm'), findsNothing);
    expect(find.byIcon(Icons.ios_share), findsNothing);
    expect(dismissed, isFalse);
    // Die Karte belegt auch keinen Platz im Layout.
    expect(tester.getSize(find.byType(InstallHintCard)), Size.zero);
  });
}
