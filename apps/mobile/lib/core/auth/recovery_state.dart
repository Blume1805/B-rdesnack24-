import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../di/providers.dart';
import 'recovery_link.dart';

/// Hält fest, dass gerade eine Passwort-Wiederherstellung läuft.
///
/// WARUM EIN EIGENER ZUSTAND UND NICHT NUR EIN EREIGNIS. Der erste Versuch am
/// 04.09.2026 hing allein am Ereignis `AuthChangeEvent.passwordRecovery`. Das
/// funktioniert nur, wenn das SDK den Link erfolgreich einlöst. Scheitert das
/// Einlösen — und genau das ist laut Auth-Log passiert —, kommt nie ein
/// Ereignis, die Weiche schaltet nie um, und der Nutzer landet wortlos auf der
/// Startseite: keine Maske, kein Fehler, kein Hinweis.
///
/// Deshalb wird der Zustand aus drei Quellen gespeist:
/// 1. der aufgerufenen Adresse (Einmal-Token in der E-Mail),
/// 2. dem Ereignis des SDK (PKCE-Code erfolgreich eingelöst),
/// 3. dem Fehler des SDK (PKCE-Code gescheitert) — dann führt der Weg ebenfalls
///    auf die Maske, aber mit Klartext statt mit Schweigen.
///
/// Die Klasse kennt weder Riverpod noch Supabase; der Provider unten füttert
/// sie. So ist sie ohne laufende Infrastruktur prüfbar.
class Wiederherstellungsweiche extends ChangeNotifier {
  Wiederherstellungsweiche({required Uri startAdresse}) {
    final link = erkenneWiederherstellungslink(startAdresse);
    _tokenHash = link?.tokenHash;
    _ausPkceLink = link?.art == Wiederherstellungsart.pkceCode;
    _aktiv = link?.art == Wiederherstellungsart.einmalToken;
  }

  bool _aktiv = false;
  bool _ausPkceLink = false;
  String? _tokenHash;
  String? _fehler;

  /// Wahr zwischen dem Klick auf den Link und dem gesetzten Passwort.
  bool get aktiv => _aktiv;

  /// Einmal-Token aus der E-Mail, sofern die Vorlage ihn mitschickt.
  String? get tokenHash => _tokenHash;

  /// Klartext, warum das Einlösen des Links gescheitert ist — oder `null`.
  String? get fehler => _fehler;

  /// Nimmt jede Meldung des Auth-Stroms entgegen.
  void verarbeiteAuthZustand(AsyncValue<AuthState> zustand) {
    final vorher = (_aktiv, _fehler);

    final ereignis = zustand.valueOrNull?.event;
    if (ereignis == AuthChangeEvent.passwordRecovery) {
      _aktiv = true;
      _fehler = null;
    } else if (_ausPkceLink && zustand.hasError && !_aktiv) {
      // Der Code aus der E-Mail ließ sich nicht einlösen. Ohne diesen Zweig
      // fiele der Nutzer stumm durch auf die Anmeldeseite.
      _aktiv = true;
      _fehler = lesbarerFehler(zustand.error);
    }

    if (vorher != (_aktiv, _fehler)) notifyListeners();
  }

  /// Nach dem erfolgreich gesetzten Passwort — oder wenn der Nutzer die Maske
  /// bewusst verlässt, um einen neuen Link anzufordern.
  ///
  /// Ohne diesen Aufruf bliebe die Weiche gestellt und würde jeden Sprung auf
  /// die Startseite sofort wieder auf die Maske zurückwerfen: eine Schleife,
  /// aus der niemand herauskommt.
  void abschliessen() {
    if (!_aktiv && _fehler == null && _tokenHash == null) return;
    _aktiv = false;
    _fehler = null;
    _tokenHash = null;
    _ausPkceLink = false;
    notifyListeners();
  }

  /// Der Token ist nach dem ersten Einlösen verbraucht; ein zweiter Versuch
  /// scheitert serverseitig mit `403: One-time token not found`. Deshalb wird
  /// er weggeworfen, sobald er benutzt wurde.
  void tokenVerbraucht() => _tokenHash = null;

  /// Das Einlösen auf der Maske ist gescheitert.
  void fehlerMerken(String text) {
    if (_fehler == text) return;
    _fehler = text;
    notifyListeners();
  }
}

/// Übersetzt eine Ausnahme in etwas, das man einem Menschen zeigen kann.
String lesbarerFehler(Object? fehler) {
  if (fehler is AuthException) return fehler.message;
  return fehler?.toString() ?? 'Unbekannter Fehler';
}

final wiederherstellungProvider = Provider<Wiederherstellungsweiche>((ref) {
  final weiche = Wiederherstellungsweiche(
    startAdresse: ref.watch(startAdresseProvider),
  );
  ref.listen<AsyncValue<AuthState>>(
    authStateChangesProvider,
    (_, next) => weiche.verarbeiteAuthZustand(next),
    fireImmediately: true,
  );
  ref.onDispose(weiche.dispose);
  return weiche;
});
