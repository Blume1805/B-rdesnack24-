import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'automaten_providers.dart';

/// Betriebszustand von Bördesnack24.
///
/// Die App zeigt vor dem ersten Automaten andere Inhalte als danach.
/// Das ist kein Notbehelf, sondern ein eigener Produktzustand: Solange
/// niemand kaufen kann, darf die App weder ein Abo verkaufen noch eine
/// Kundenkarte anbieten, mit der sich nirgends etwas einlösen lässt.
///
/// **Woran der Zustand hängt.** An genau einer Frage: Ist mindestens ein
/// Automat sichtbar? `machinesProvider` liest ausschließlich Automaten
/// ohne `deleted_at` — die vier Seed-Zeilen sind seit der Migration
/// `seeddaten_aus_der_kundenansicht` (10.09.2026) archiviert.
///
/// Damit stellt sich der Zustand von selbst um, sobald der erste echte
/// Automat angelegt wird. Es gibt keinen Schalter, den jemand vergessen
/// könnte, und keine Konfiguration, die von der Wirklichkeit abweichen
/// kann.
enum Betriebszustand {
  /// Kein Automat in Betrieb. Die App erklärt, was entstehen soll.
  vorStart,

  /// Mindestens ein Automat ist da. Die App zeigt echte Daten.
  live,
}

/// Der aktuelle Betriebszustand, abgeleitet aus der Automatenliste.
///
/// Solange die Liste lädt oder ein Fehler auftritt, gilt **vorStart**.
/// Das ist die vorsichtige Richtung: Im Zweifel zeigt die App lieber
/// weniger, als etwas zu versprechen, das es nicht gibt.
final betriebszustandProvider = Provider<Betriebszustand>((ref) {
  return ref.watch(machinesProvider).maybeWhen(
        data: (automaten) =>
            automaten.isEmpty ? Betriebszustand.vorStart : Betriebszustand.live,
        orElse: () => Betriebszustand.vorStart,
      );
});

/// Kurzform für Abfragen in Widgets.
final istVorStartProvider = Provider<bool>(
  (ref) => ref.watch(betriebszustandProvider) == Betriebszustand.vorStart,
);
