import 'package:boerdesnack24/core/auth/recovery_link.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('authParameter — die drei Orte, an denen ein Auth-Link steht', () {
    test('echte Abfrage', () {
      expect(
        authParameter(Uri.parse('https://x.invalid/app/?code=abc')),
        containsPair('code', 'abc'),
      );
    });

    test('Abfrage innerhalb der Hash-Route', () {
      // So sieht der Link aus, den unsere E-Mail-Vorlage baut.
      final p = authParameter(
        Uri.parse('https://x.invalid/app/#/passwort-neu?token_hash=t1&type=recovery'),
      );
      expect(p['token_hash'], 't1');
      expect(p['type'], 'recovery');
    });

    test('Parameter direkt im Fragment (implizites Verfahren)', () {
      final p = authParameter(
        Uri.parse('https://x.invalid/app/#access_token=a1&type=recovery'),
      );
      expect(p['access_token'], 'a1');
      expect(p['type'], 'recovery');
    });

    test('gewoehnliche Hash-Route liefert nichts', () {
      expect(authParameter(Uri.parse('https://x.invalid/app/#/profil')), isEmpty);
    });

    test('ein Anker ist keine Parameterliste', () {
      // Ohne diese Unterscheidung wuerde aus "#kapitel-3" ein Schluessel mit
      // leerem Wert, und die Auswertung liefe auf Muell.
      expect(authParameter(Uri.parse('https://x.invalid/app/#kapitel-3')), isEmpty);
    });
  });

  group('erkenneWiederherstellungslink', () {
    test('Einmal-Token mit type=recovery', () {
      final l = erkenneWiederherstellungslink(
        Uri.parse('https://x.invalid/app/#/passwort-neu?token_hash=t1&type=recovery'),
      );
      expect(l?.art, Wiederherstellungsart.einmalToken);
      expect(l?.tokenHash, 't1');
    });

    test('Einmal-Token auch in der echten Abfrage', () {
      final l = erkenneWiederherstellungslink(
        Uri.parse('https://x.invalid/app/?token_hash=t2&type=recovery'),
      );
      expect(l?.tokenHash, 't2');
    });

    test('Gegenprobe: token_hash ohne type=recovery zaehlt NICHT', () {
      // Bestaetigungs- und Einladungsmails tragen ebenfalls einen token_hash.
      // Wuerden sie hier durchgehen, landete ein neu bestaetigtes Konto in
      // der Passwortmaske und bekaeme gesagt, es habe kein Passwort.
      expect(
        erkenneWiederherstellungslink(
          Uri.parse('https://x.invalid/app/?token_hash=t3&type=signup'),
        ),
        isNull,
      );
      expect(
        erkenneWiederherstellungslink(
          Uri.parse('https://x.invalid/app/?token_hash=t4'),
        ),
        isNull,
      );
    });

    test('PKCE-Code wird erkannt, aber ohne Token', () {
      // Der Rueckweg des SDK traegt keinen Typ; ein `code` sagt nur, dass hier
      // ueberhaupt ein Auth-Link geoeffnet wurde.
      final l = erkenneWiederherstellungslink(
        Uri.parse('https://x.invalid/app/?code=c1'),
      );
      expect(l?.art, Wiederherstellungsart.pkceCode);
      expect(l?.tokenHash, isNull);
    });

    test('Einmal-Token hat Vorrang vor einem Code', () {
      final l = erkenneWiederherstellungslink(
        Uri.parse('https://x.invalid/app/?code=c1&token_hash=t5&type=recovery'),
      );
      expect(l?.art, Wiederherstellungsart.einmalToken);
    });

    test('Gegenprobe: ein gewoehnlicher Aufruf ist keine Wiederherstellung', () {
      expect(
        erkenneWiederherstellungslink(
          Uri.parse('https://blume1805.github.io/B-rdesnack24-/#/signin'),
        ),
        isNull,
      );
      expect(
        erkenneWiederherstellungslink(Uri.parse('https://x.invalid/app/')),
        isNull,
      );
    });

    test('leere Werte zaehlen nicht als Link', () {
      expect(
        erkenneWiederherstellungslink(Uri.parse('https://x.invalid/app/?code=')),
        isNull,
      );
      expect(
        erkenneWiederherstellungslink(
          Uri.parse('https://x.invalid/app/?token_hash=&type=recovery'),
        ),
        isNull,
      );
    });
  });

  group('Die Vorlage aus dem Supabase-Dashboard', () {
    // Woertlich die Adresse, die in der E-Mail steht. Aendert jemand die
    // Vorlage oder die Route, faellt es hier auf -- und nicht erst beim
    // Nutzer im Posteingang.
    const ausDerMail = 'https://blume1805.github.io/B-rdesnack24-/#/passwort-neu'
        '?token_hash=pkce_9f2c1a7b3e&type=recovery';

    test('wird als Einmal-Token erkannt', () {
      final l = erkenneWiederherstellungslink(Uri.parse(ausDerMail));
      expect(l?.art, Wiederherstellungsart.einmalToken);
      expect(l?.tokenHash, 'pkce_9f2c1a7b3e');
    });

    test('die Route im Fragment ist die Passwortmaske', () {
      final fragment = Uri.parse(Uri.parse(ausDerMail).fragment);
      expect(fragment.path, '/passwort-neu');
    });

    test('ein fehlender Schraegstrich macht den Link nicht kaputt', () {
      // Haeufigster Tippfehler beim Einpflegen: "#passwort-neu" statt
      // "#/passwort-neu". Das Fragment ist dann keine gueltige Route mehr --
      // der Token muss trotzdem gefunden werden, sonst waere die Mail tot.
      final falsch = ausDerMail.replaceFirst('#/passwort-neu', '#passwort-neu');
      final l = erkenneWiederherstellungslink(Uri.parse(falsch));
      expect(l?.art, Wiederherstellungsart.einmalToken);
      expect(l?.tokenHash, 'pkce_9f2c1a7b3e');
    });
  });
}