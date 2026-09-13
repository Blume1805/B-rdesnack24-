import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

/// Auf welchem Weg ein Wiederherstellungslink hereinkommt.
///
/// Die Unterscheidung ist nicht akademisch — sie entscheidet darüber, ob der
/// Link browserunabhängig funktioniert:
///
/// * [einmalToken] — die E-Mail trägt `token_hash`. Der Token wird beim
///   Öffnen direkt gegen den Server eingelöst. Es wird **nichts** aus dem
///   Browser gebraucht, in dem die Mail angefordert wurde. Der Link
///   funktioniert deshalb auch im Mail-Programm, im In-App-Browser und auf
///   einem anderen Gerät.
/// * [pkceCode] — die E-Mail trägt `code`. Der Code ist nur einlösbar, wenn im
///   `localStorage` **desselben** Browsers noch der passende „Code Verifier"
///   liegt. Das ist der Weg, den das SDK von sich aus wählt, und genau daran
///   ist es am 04.09.2026 gescheitert (Auth-Log 20:31:42:
///   `400: code challenge does not match previously saved code verifier`,
///   danach `422: invalid flow state, flow state has expired`). Der Verifier
///   wird bei **jeder** neuen Anforderung überschrieben — wer zweimal auf
///   „Passwort vergessen" klickt, macht damit die erste Mail unbrauchbar.
enum Wiederherstellungsart { einmalToken, pkceCode }

/// Was an einem hereinkommenden Auth-Link für die Wiederherstellung zählt.
@immutable
class Wiederherstellungslink {
  const Wiederherstellungslink({required this.art, this.tokenHash});

  final Wiederherstellungsart art;

  /// Nur bei [Wiederherstellungsart.einmalToken] gesetzt.
  final String? tokenHash;

  @override
  bool operator ==(Object other) =>
      other is Wiederherstellungslink &&
      other.art == art &&
      other.tokenHash == tokenHash;

  @override
  int get hashCode => Object.hash(art, tokenHash);

  @override
  String toString() => 'Wiederherstellungslink($art, tokenHash: $tokenHash)';
}

/// Sammelt die Auth-Parameter aus allen drei Stellen, an denen sie stehen
/// können.
///
/// Die App nutzt die Hash-Adressierung (`…/#/route`). Ein Auth-Link kann die
/// Parameter deshalb tragen
/// 1. in der echten Abfrage — `…/?code=abc` (so leitet GoTrue nach `/verify`
///    im PKCE-Verfahren zurück),
/// 2. in der Abfrage der Hash-Route — `…/#/passwort-neu?token_hash=abc&type=recovery`
///    (so bauen wir die Vorlage der E-Mail),
/// 3. direkt im Fragment — `…/#access_token=abc&type=recovery` (das alte
///    implizite Verfahren).
///
/// Ein Aufrufer, der nur einen dieser Fälle liest, funktioniert genau so
/// lange, bis sich am Mailversand etwas ändert.
Map<String, String> authParameter(Uri url) {
  final werte = <String, String>{...url.queryParameters};
  final fragment = url.fragment;
  if (fragment.isEmpty) return werte;

  try {
    final frage = fragment.indexOf('?');
    if (frage >= 0) {
      // Hash-Route mit eigener Abfrage. Bewusst nicht an einem fuehrenden
      // "/" festgemacht: fehlt der in der E-Mail-Vorlage ("#passwort-neu"
      // statt "#/passwort-neu"), waere der Link sonst tot. So greift die
      // Weiche trotzdem und schickt auf die richtige Route.
      werte.addAll(Uri.splitQueryString(fragment.substring(frage + 1)));
    } else if (fragment.contains('=')) {
      // Implizites Verfahren: "#access_token=…&type=recovery". Ohne "=" ist
      // es ein Anker wie "#kapitel-3" und keine Parameterliste --
      // Uri.splitQueryString wuerde daraus einen Schluessel mit leerem Wert
      // machen und die Auswertung mit Muell fuellen.
      werte.addAll(Uri.splitQueryString(fragment));
    }
  } on FormatException {
    // Kein Auth-Link.
  }
  return werte;
}

/// Erkennt an der aufgerufenen Adresse, ob jemand aus einer
/// Wiederherstellungs-E-Mail kommt.
///
/// Gibt `null` zurück, wenn nichts darauf hindeutet. `type=recovery` wird beim
/// Einmal-Token **verlangt**: ein `token_hash` steht auch in Bestätigungs- und
/// Einladungsmails, und die dürfen nicht in der Passwortmaske landen.
Wiederherstellungslink? erkenneWiederherstellungslink(Uri url) {
  final p = authParameter(url);

  final tokenHash = p['token_hash'];
  if (tokenHash != null && tokenHash.isNotEmpty && p['type'] == 'recovery') {
    return Wiederherstellungslink(
      art: Wiederherstellungsart.einmalToken,
      tokenHash: tokenHash,
    );
  }

  // Beim PKCE-Rücksprung trägt die Adresse keinen Typ — das SDK merkt sich den
  // Anlass im Verifier, nicht in der URL. Ein `code` allein sagt also nur:
  // „hier wurde ein Auth-Link geöffnet". Ob es eine Wiederherstellung war,
  // entscheidet erst das Ereignis, das das SDK danach meldet.
  final code = p['code'];
  if (code != null && code.isNotEmpty) {
    return const Wiederherstellungslink(art: Wiederherstellungsart.pkceCode);
  }

  return null;
}

/// Die Adresse, mit der die App gestartet wurde.
///
/// Muss in `bootstrap()` überschrieben werden, und zwar **vor**
/// `Supabase.initialize`: das SDK räumt `code`, `access_token` und `type`
/// unmittelbar nach dem Einlösen aus der Browser-Adresse
/// (`clearAuthUrlParameters`). Wer erst danach nachsieht, findet nichts mehr
/// und kann einen fehlgeschlagenen Link nicht mehr von einem normalen
/// Seitenaufruf unterscheiden.
final startAdresseProvider = Provider<Uri>(
  (ref) => Uri.parse('app://start'),
);
