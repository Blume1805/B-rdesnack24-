import 'package:boerdesnack24/core/utils/greeting.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  DateTime at(int hour) => DateTime(2026, 7, 29, hour, 30);

  group('Greeting.forTime', () {
    test('morgens', () {
      expect(Greeting.forTime(at(5)), 'Guten Morgen');
      expect(Greeting.forTime(at(8)), 'Guten Morgen');
      expect(Greeting.forTime(at(10)), 'Guten Morgen');
    });

    test('tagsüber', () {
      expect(Greeting.forTime(at(11)), 'Guten Tag');
      expect(Greeting.forTime(at(14)), 'Guten Tag');
      expect(Greeting.forTime(at(17)), 'Guten Tag');
    });

    test('abends', () {
      expect(Greeting.forTime(at(18)), 'Guten Abend');
      expect(Greeting.forTime(at(21)), 'Guten Abend');
      expect(Greeting.forTime(at(22)), 'Guten Abend');
    });

    test('nachts neutral statt „Guten Abend"', () {
      // Um 2 Uhr wäre jede Tageszeit-Formel schief — deshalb „Hallo".
      expect(Greeting.forTime(at(23)), 'Hallo');
      expect(Greeting.forTime(at(0)), 'Hallo');
      expect(Greeting.forTime(at(4)), 'Hallo');
    });

    test('die Grenzen kippen an der vollen Stunde', () {
      expect(Greeting.forTime(DateTime(2026, 7, 29, 4, 59)), 'Hallo');
      expect(Greeting.forTime(DateTime(2026, 7, 29, 5, 0)), 'Guten Morgen');
      expect(Greeting.forTime(DateTime(2026, 7, 29, 10, 59)), 'Guten Morgen');
      expect(Greeting.forTime(DateTime(2026, 7, 29, 11, 0)), 'Guten Tag');
      expect(Greeting.forTime(DateTime(2026, 7, 29, 17, 59)), 'Guten Tag');
      expect(Greeting.forTime(DateTime(2026, 7, 29, 18, 0)), 'Guten Abend');
      expect(Greeting.forTime(DateTime(2026, 7, 29, 22, 59)), 'Guten Abend');
      expect(Greeting.forTime(DateTime(2026, 7, 29, 23, 0)), 'Hallo');
    });

    test('liefert für jede Stunde eine Anrede', () {
      for (var h = 0; h < 24; h++) {
        expect(Greeting.forTime(at(h)), isNotEmpty, reason: 'Stunde $h');
      }
    });
  });
}
