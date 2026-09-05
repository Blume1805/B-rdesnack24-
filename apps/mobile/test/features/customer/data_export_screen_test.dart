import 'package:boerdesnack24/features/customer/presentation/screens/data_export_screen.dart';
import 'package:flutter_test/flutter_test.dart';

/// Die Auskunft nach Art. 15 DSGVO. Geprüft wird die Übersetzung der
/// Rohantwort in die Liste, die der Kunde sieht — und die Fehlerdeutung.
void main() {
  group('bereicheAusAuskunft', () {
    test('Kopfangaben erscheinen nicht als Datenbereich', () {
      // `erzeugt_am` und `hinweis` beschreiben die Auskunft, sie sind kein
      // gespeichertes Datum über die Person.
      final b = bereicheAusAuskunft({
        'erzeugt_am': '2026-09-02T06:00:00Z',
        'hinweis': 'Auskunft nach Art. 15 DSGVO.',
        'kaeufe': [1, 2, 3],
      });
      expect(b.map((e) => e.titel), isNot(contains('erzeugt_am')));
      expect(b.map((e) => e.titel), isNot(contains('hinweis')));
      expect(b, hasLength(1));
    });

    test('Listen werden gezählt, leere ehrlich benannt', () {
      final b = bereicheAusAuskunft({
        'kaeufe': [1, 2, 3],
        'rechnungen': <dynamic>[],
      });
      final kaeufe = b.firstWhere((e) => e.titel == 'Käufe');
      final rechnungen = b.firstWhere((e) => e.titel == 'Rechnungen');
      expect(kaeufe.beschreibung, '3 Einträge');
      expect(kaeufe.leer, isFalse);
      expect(rechnungen.beschreibung, 'nichts gespeichert');
      expect(rechnungen.leer, isTrue);
    });

    test('„nichts gespeichert" wird nie zu „0 Einträge" verkürzt', () {
      // Eine 0 liest sich wie ein Messwert. „nichts gespeichert" sagt, was
      // gemeint ist — gerade in einem Auskunftsdokument.
      final b = bereicheAusAuskunft({'bewertungen': <dynamic>[]});
      expect(b.single.beschreibung, isNot(contains('0')));
    });

    test('Wahrheitswerte werden zu ja/nein', () {
      final b = bereicheAusAuskunft({
        'abmeldetoken_besteht': true,
      });
      expect(b.single.titel, 'Abmeldelink hinterlegt');
      expect(b.single.beschreibung, 'ja');
    });

    test('fehlender Wert heißt „nichts gespeichert"', () {
      final b = bereicheAusAuskunft({'kundenkarte': null});
      expect(b.single.beschreibung, 'nichts gespeichert');
      expect(b.single.leer, isTrue);
    });

    test('ein Objekt gilt als vorhanden', () {
      final b = bereicheAusAuskunft({
        'profil': {'id': 'x', 'full_name': 'Test'},
      });
      expect(b.single.titel, 'Profil');
      expect(b.single.beschreibung, 'vorhanden');
    });

    test('unbekannte Bereiche verschwinden nicht, sie erscheinen roh', () {
      // Der gefährliche Fall: Die Datenbank bekommt einen neuen Bereich, die
      // App kennt ihn nicht. Er darf NICHT stillschweigend fehlen — sonst
      // wäre die Auskunft unvollständig, ohne dass es jemand merkt.
      final b = bereicheAusAuskunft({
        'ein_ganz_neuer_bereich': [1, 2],
      });
      expect(b, hasLength(1));
      expect(b.single.titel, 'ein_ganz_neuer_bereich');
      expect(b.single.beschreibung, '2 Einträge');
    });

    test('alle 38 Bereiche der Datenbankfassung werden übersetzt', () {
      // Gegenprobe zur Migration: Was export_my_data() liefert, muss hier
      // einen deutschen Namen bekommen — sonst steht dem Kunden ein
      // Spaltenname aus der Datenbank gegenüber.
      const schluessel = [
        'profil', 'kundendaten', 'einwilligungen', 'einwilligungsverlauf',
        'versandte_nachrichten', 'benachrichtigungen', 'gelesene_hinweise',
        'kontaktnachrichten', 'kaeufe', 'rechnungen', 'zahlungen',
        'reklamationen', 'individuelle_preise', 'abo_verlauf', 'store_abo',
        'kuendigungen', 'persoenliche_angebote', 'aktivierte_angebote',
        'bonusstufen', 'challenge_gutschriften', 'anmeldetage',
        'empfehlungen_fuer_mich', 'bewertungen', 'spendenstimmen',
        'werbeklicks', 'mein_empfehlungscode', 'empfehlungen_von_mir',
        'empfehlung_die_mich_warb', 'empfehlungspraemien',
        'firmenmitgliedschaften', 'geraete', 'kundenkarte',
        'abmeldetoken_besteht', 'loeschantraege', 'ifsg_belehrungen',
        'schulungen',
      ];
      final roh = <String, dynamic>{for (final k in schluessel) k: <dynamic>[]};
      final b = bereicheAusAuskunft(roh);
      final unuebersetzt =
          b.where((e) => e.titel == e.titel.toLowerCase() && e.titel.contains('_'));
      expect(
        unuebersetzt.map((e) => e.titel),
        isEmpty,
        reason: 'Diese Bereiche haben keinen deutschen Namen',
      );
      expect(b, hasLength(schluessel.length));
    });
  });

  group('auskunftFehlertext', () {
    test('fehlende Anmeldung wird erklärt, ohne Code', () {
      final t = auskunftFehlertext(
        Exception('PostgrestException(code: 42501, message: not signed in)'),
      );
      expect(t, contains('angemeldet'));
      expect(t.contains('42501'), isFalse);
    });

    test('unbekannter Fehler beruhigt statt zu beunruhigen', () {
      final t = auskunftFehlertext(Exception('SocketException'));
      expect(t, contains('nicht berührt'));
      expect(t.contains('SocketException'), isFalse);
    });
  });
}
