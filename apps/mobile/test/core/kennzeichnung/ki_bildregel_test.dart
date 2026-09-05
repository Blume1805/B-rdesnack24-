import 'package:boerdesnack24/core/kennzeichnung/ki_bildregel.dart';
import 'package:boerdesnack24/core/widgets/design_system/eu_ki_kennzeichen.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('kiKennzeichenFuerProduktbild', () {
    test('ohne KI-Einsatz kein Kennzeichen', () {
      expect(
        kiKennzeichenFuerProduktbild(
          kiVerwendet: false,
          kiNeuesProdukt: false,
          kiNeueUmgebung: false,
        ),
        isNull,
      );
    });

    test('Freistellen, Zuschneiden, Aufhellen loesen kein Kennzeichen aus', () {
      // Der Fall, um den es geht: KI war beteiligt, aber das Bild zeigt den
      // Gegenstand weiterhin so, wie er ist.
      expect(
        kiKennzeichenFuerProduktbild(
          kiVerwendet: true,
          kiNeuesProdukt: false,
          kiNeueUmgebung: false,
        ),
        isNull,
      );
    });

    test('verändertes Produkt loest das Kennzeichen aus', () {
      expect(
        kiKennzeichenFuerProduktbild(
          kiVerwendet: true,
          kiNeuesProdukt: true,
          kiNeueUmgebung: false,
        ),
        KiHerkunft.teilweiseBearbeitet,
      );
    });

    test('veränderte Umgebung loest das Kennzeichen aus', () {
      expect(
        kiKennzeichenFuerProduktbild(
          kiVerwendet: true,
          kiNeuesProdukt: false,
          kiNeueUmgebung: true,
        ),
        KiHerkunft.teilweiseBearbeitet,
      );
    });

    test(
      'Gegenprobe: ohne kiVerwendet zaehlen die anderen Kennzeichen nicht',
      () {
        // Ein widerspruechlicher Datensatz darf nicht zu einer Kennzeichnung
        // fuehren, die eine KI-Bearbeitung behauptet, die laut Hauptfeld nie
        // stattgefunden hat.
        expect(
          kiKennzeichenFuerProduktbild(
            kiVerwendet: false,
            kiNeuesProdukt: true,
            kiNeueUmgebung: true,
          ),
          isNull,
        );
      },
    );

    test('ein Produktbild gilt nie als vollstaendig erzeugt', () {
      // Vollstaendig erzeugte Motive sind Marketingbilder, keine
      // Produktaufnahmen. Waere das hier moeglich, wuerde ein bearbeitetes
      // Foto faelschlich als reines Erzeugnis ausgewiesen.
      for (final neuesProdukt in [true, false]) {
        for (final neueUmgebung in [true, false]) {
          expect(
            kiKennzeichenFuerProduktbild(
              kiVerwendet: true,
              kiNeuesProdukt: neuesProdukt,
              kiNeueUmgebung: neueUmgebung,
            ),
            isNot(KiHerkunft.vollstaendigErzeugt),
          );
        }
      }
    });
  });
}
