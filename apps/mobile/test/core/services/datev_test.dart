import 'package:boerdesnack24/core/services/datev.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('buildDatevBuchungsstapel', () {
    final rows = [
      DatevRow(
        bookingDate: DateTime(2026, 7, 3),
        taxRate: 7,
        gross: 12.5,
      ),
      DatevRow(
        bookingDate: DateTime(2026, 7, 3),
        taxRate: 19,
        gross: 1234.05,
      ),
    ];

    String build() => buildDatevBuchungsstapel(
          rows: rows,
          from: DateTime(2026, 7, 1),
          to: DateTime(2026, 7, 31),
          createdAt: DateTime(2026, 7, 20, 12, 0, 0),
        );

    test('EXTF-Kopfzeile: Format 700, Buchungsstapel v13, Zeitraum', () {
      final head = build().split('\r\n').first;
      expect(head, startsWith('"EXTF";700;21;"Buchungsstapel";13;'));
      expect(head, contains('20260701;20260731'));
      // WJ-Beginn = 1.1. des Von-Jahres, Sachkontenlänge 4.
      expect(head, contains(';20260101;4;'));
      expect(head, contains('"EUR"'));
    });

    test('je Tag und Steuersatz eine Buchungszeile mit korrekten Konten', () {
      final lines = build().split('\r\n');
      expect(lines.length, 4); // Header + Spalten + 2 Buchungen
      final b7 = lines[2];
      final b19 = lines[3];
      // 7 % -> Kasse 1000 an 8300; 19 % -> 8400.
      expect(b7, contains(';$kDatevKontoKasse;$kDatevKontoErloese7;'));
      expect(b19, contains(';$kDatevKontoKasse;$kDatevKontoErloese19;'));
      // Soll/Haben-Kennzeichen S auf der Kasse.
      expect(b7, contains(';"S";'));
    });

    test('Beträge mit Dezimal-Komma ohne Tausendertrenner', () {
      final lines = build().split('\r\n');
      expect(lines[2], startsWith('12,50;'));
      expect(lines[3], startsWith('1234,05;'));
    });

    test('Belegdatum TTMM und sprechender Buchungstext', () {
      final b7 = build().split('\r\n')[2];
      expect(b7, contains(';0307;'));
      expect(b7, contains('Tageslosung App-Verkaeufe 7 % 03.07.2026'));
    });

    test('Berater-/Mandantennummer: leer -> 0, sonst übernommen', () {
      final without = build().split('\r\n').first;
      expect(without, contains(';0;0;20260101'));
      final with_ = buildDatevBuchungsstapel(
        rows: rows,
        from: DateTime(2026, 7, 1),
        to: DateTime(2026, 7, 31),
        consultantId: '12345',
        clientId: '67890',
        createdAt: DateTime(2026, 7, 20, 12, 0, 0),
      ).split('\r\n').first;
      expect(with_, contains(';12345;67890;20260101'));
    });

    test('datevAmount rundet auf 2 Stellen mit Komma', () {
      expect(datevAmount(0.1), '0,10');
      expect(datevAmount(1234.567), '1234,57');
    });
  });
}
