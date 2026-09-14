import 'package:bs24_kern/features/geteilt/automaten_providers.dart';
import 'package:bs24_kern/features/geteilt/betriebszustand.dart';
import 'package:bs24_kern/features/geteilt/machine.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// Der Betriebszustand entscheidet, ob die App ein Abo verkauft, eine
/// Kundenkarte anbietet und Bestände zeigt. Er darf im Zweifel nicht in
/// Richtung „live" raten.
void main() {
  const einAutomat = Machine(
    id: 'a1',
    code: 'A1',
    name: 'Bahnhof Osterweddingen',
    type: 'snack',
    isCooled: false,
  );

  /// Container mit einer festen Automatenliste — kein Netzwerk.
  ProviderContainer mit(List<Machine> automaten) => ProviderContainer(
        overrides: [
          machinesProvider.overrideWith((ref) async => automaten),
        ],
      );

  test('ohne Automaten gilt vorStart', () async {
    final c = mit(const []);
    addTearDown(c.dispose);
    await c.read(machinesProvider.future);

    expect(c.read(betriebszustandProvider), Betriebszustand.vorStart);
    expect(c.read(istVorStartProvider), isTrue);
  });

  test('mit mindestens einem Automaten gilt live', () async {
    final c = mit(const [einAutomat]);
    addTearDown(c.dispose);
    await c.read(machinesProvider.future);

    expect(c.read(betriebszustandProvider), Betriebszustand.live);
    expect(c.read(istVorStartProvider), isFalse);
  });

  test('waehrend des Ladens gilt vorStart', () {
    // Vorsichtige Richtung: lieber weniger zeigen, als etwas
    // versprechen, das es nicht gibt. Ohne await ist der Provider noch
    // im Ladezustand.
    final c = mit(const [einAutomat]);
    addTearDown(c.dispose);

    expect(c.read(betriebszustandProvider), Betriebszustand.vorStart);
  });

  test('bei einem Fehler gilt vorStart', () async {
    final c = ProviderContainer(
      overrides: [
        machinesProvider.overrideWith((ref) async => throw Exception('offline')),
      ],
    );
    addTearDown(c.dispose);
    await expectLater(c.read(machinesProvider.future), throwsException);

    expect(c.read(betriebszustandProvider), Betriebszustand.vorStart);
  });
}
