import 'package:boerdesnack24/core/auth/recovery_state.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

AsyncValue<AuthState> _ereignis(AuthChangeEvent e) =>
    AsyncValue.data(AuthState(e, null));

AsyncValue<AuthState> _fehler(Object f) =>
    AsyncValue.error(f, StackTrace.empty);

Wiederherstellungsweiche _weiche(String adresse) =>
    Wiederherstellungsweiche(startAdresse: Uri.parse(adresse));

void main() {
  group('Start aus der Adresse', () {
    test('Einmal-Token schaltet die Weiche sofort', () {
      // Entscheidend: OHNE ein Ereignis abzuwarten. Kommt die Mail mit einem
      // token_hash, muss die Maske erscheinen, noch bevor irgendetwas
      // eingeloest wurde -- sie loest ihn ja selbst ein.
      final w = _weiche('https://x.invalid/app/#/passwort-neu?token_hash=t1&type=recovery');
      expect(w.aktiv, isTrue);
      expect(w.tokenHash, 't1');
      expect(w.fehler, isNull);
    });

    test('ein PKCE-Code allein schaltet noch nicht', () {
      // Ein `code` kann auch von einer Bestaetigungsmail stammen. Erst das
      // Ergebnis des Einloesens sagt, worum es ging.
      final w = _weiche('https://x.invalid/app/?code=c1');
      expect(w.aktiv, isFalse);
    });

    test('Gegenprobe: gewoehnlicher Aufruf schaltet nie', () {
      final w = _weiche('https://x.invalid/app/#/signin');
      w.verarbeiteAuthZustand(_ereignis(AuthChangeEvent.initialSession));
      w.verarbeiteAuthZustand(_ereignis(AuthChangeEvent.signedIn));
      expect(w.aktiv, isFalse);
      expect(w.fehler, isNull);
    });
  });

  group('Ereignisse des SDK', () {
    test('passwordRecovery schaltet die Weiche', () {
      final w = _weiche('https://x.invalid/app/?code=c1');
      w.verarbeiteAuthZustand(_ereignis(AuthChangeEvent.passwordRecovery));
      expect(w.aktiv, isTrue);
    });

    test('passwordRecovery gilt auch ohne vorherigen Link in der Adresse', () {
      // Deep Link auf iOS/Android: dort steht nichts in Uri.base.
      final w = _weiche('app://start');
      w.verarbeiteAuthZustand(_ereignis(AuthChangeEvent.passwordRecovery));
      expect(w.aktiv, isTrue);
    });

    test('signedIn nach einem Code schaltet NICHT', () {
      // Eine bestaetigte Registrierung darf nicht in der Passwortmaske landen.
      final w = _weiche('https://x.invalid/app/?code=c1');
      w.verarbeiteAuthZustand(_ereignis(AuthChangeEvent.signedIn));
      expect(w.aktiv, isFalse);
    });
  });

  group('Das gescheiterte Einloesen — der Fehler vom 04.09.2026', () {
    test('Fehler nach einem Code fuehrt auf die Maske, nicht ins Nichts', () {
      // Auth-Log 20:31:42: "code challenge does not match previously saved
      // code verifier". Vorher endete genau dieser Fall wortlos auf der
      // Startseite.
      final w = _weiche('https://x.invalid/app/?code=c1');
      w.verarbeiteAuthZustand(
        _fehler(const AuthException('Code verifier could not be found in local storage.')),
      );
      expect(w.aktiv, isTrue);
      expect(w.fehler, 'Code verifier could not be found in local storage.');
    });

    test('Gegenprobe: ein Fehler OHNE Code schaltet nicht', () {
      // Ein abgelaufener Refresh-Token im Alltagsbetrieb darf niemanden in
      // die Passwortmaske werfen.
      final w = _weiche('https://x.invalid/app/#/profil');
      w.verarbeiteAuthZustand(_fehler(const AuthException('token expired')));
      expect(w.aktiv, isFalse);
      expect(w.fehler, isNull);
    });

    test('ein spaeterer Fehler ueberschreibt einen erfolgreichen Start nicht', () {
      final w = _weiche('https://x.invalid/app/?code=c1');
      w.verarbeiteAuthZustand(_ereignis(AuthChangeEvent.passwordRecovery));
      w.verarbeiteAuthZustand(_fehler(const AuthException('irgendwas')));
      expect(w.aktiv, isTrue);
      expect(w.fehler, isNull);
    });
  });

  group('abschliessen', () {
    test('loest die Weiche — sonst gibt es eine Schleife', () {
      // Ohne diesen Aufruf wirft die Umleitung nach dem gesetzten Passwort
      // sofort wieder auf die Maske zurueck.
      final w = _weiche('https://x.invalid/app/?token_hash=t1&type=recovery');
      expect(w.aktiv, isTrue);
      w.abschliessen();
      expect(w.aktiv, isFalse);
      expect(w.tokenHash, isNull);
      expect(w.fehler, isNull);
    });

    test('meldet die Aenderung genau einmal', () {
      final w = _weiche('https://x.invalid/app/?token_hash=t1&type=recovery');
      var n = 0;
      w.addListener(() => n++);
      w.abschliessen();
      w.abschliessen();
      expect(n, 1);
    });
  });

  test('tokenVerbraucht verhindert den zweiten Einloeseversuch', () {
    // Serverseitig endet der zweite Versuch mit "403: One-time token not
    // found" — die Maske soll ihn gar nicht erst unternehmen.
    final w = _weiche('https://x.invalid/app/?token_hash=t1&type=recovery');
    w.tokenVerbraucht();
    expect(w.tokenHash, isNull);
    expect(w.aktiv, isTrue, reason: 'die Maske bleibt zustaendig');
  });

  test('lesbarerFehler nimmt die Meldung, nicht die Klasse', () {
    expect(lesbarerFehler(const AuthException('abgelaufen')), 'abgelaufen');
    expect(lesbarerFehler(null), 'Unbekannter Fehler');
  });
}
