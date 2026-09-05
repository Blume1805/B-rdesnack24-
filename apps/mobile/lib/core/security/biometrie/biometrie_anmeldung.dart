import 'dart:convert';

import 'package:supabase_flutter/supabase_flutter.dart';

import 'biometrie_dienst.dart';
import 'sitzungstresor.dart';

/// Warum das Entsperren nicht geklappt hat. Ein `bool` würde hier zu wenig
/// sagen: „Gesicht nicht erkannt" und „der Link gehört zu einem anderen
/// Konto" verlangen völlig verschiedene Antworten an den Nutzer.
enum Entsperrfehler {
  keineFreischaltung,
  biometrieAbgelehnt,
  keineSitzung,
  fremdesKonto,
}

class Entsperrergebnis {
  const Entsperrergebnis.erfolg(this.sitzung) : fehler = null;
  const Entsperrergebnis.fehler(this.fehler) : sitzung = null;

  /// Die gespeicherte Sitzung als JSON — genau die Zeichenkette, die
  /// `GoTrueClient.recoverSession` erwartet.
  final String? sitzung;
  final Entsperrfehler? fehler;

  bool get geklappt => sitzung != null;
}

/// Die biometrische Anmeldung: Regeln, Bindung und Tresor an einem Ort.
///
/// GRUNDSATZ. Die Biometrie ist eine Schranke vor einem Geheimnis, keine
/// Anmeldung beim Server. Bestanden wird sie auf dem Gerät; was sie freigibt,
/// ist die im Tresor liegende Sitzung. Wer das umdreht — „Biometrie bestanden,
/// also ist der Nutzer angemeldet" — baut eine Anmeldung, die man mit einem
/// veränderten Client umgeht.
///
/// EIN GERÄT, EIN KONTO. Es gibt genau eine Freischaltung je Installation.
/// Schaltet jemand für ein zweites Konto frei, ersetzt das die erste; meldet
/// sich jemand mit Passwort in einem anderen Konto an, wird die Freischaltung
/// gelöscht. Andernfalls könnte ein Gesicht ein Konto öffnen, zu dem es nie
/// gehörte — und genau das war die Zusage.
class BiometrieAnmeldung {
  BiometrieAnmeldung({required Tresor tresor, required BiometrieDienst dienst})
      : _tresor = tresor,
        _dienst = dienst;

  static const schluesselSitzung = 'bs24.biometrie.sitzung';
  static const schluesselBindung = 'bs24.biometrie.bindung';

  final Tresor _tresor;
  final BiometrieDienst _dienst;

  BiometrieDienst get dienst => _dienst;

  /// An welches Konto die Freischaltung gebunden ist — oder `null`.
  Future<Kontobindung?> bindung() async =>
      Kontobindung.fromJson(await _tresor.lies(schluesselBindung));

  Future<bool> istAktiv() async => (await bindung()) != null;

  /// Schaltet die biometrische Anmeldung für die laufende Sitzung frei.
  ///
  /// [sitzung] ist die persistierte Sitzung als JSON. Ohne sie gäbe es beim
  /// nächsten Start nichts herauszugeben — eine Freischaltung, die auf ein
  /// leeres Fach zeigt, wäre schlimmer als keine: sie verspricht etwas.
  Future<bool> aktiviere({
    required String benutzerId,
    required String email,
    required String sitzung,
  }) async {
    if (benutzerId.isEmpty || sitzung.isEmpty) return false;
    if (!await _dienst.verfuegbar()) return false;

    final art = await _dienst.art();
    final ok = await _dienst.pruefe(
      grund: '${art.bezeichnung} für die Anmeldung bei Bördesnack24 '
          'einrichten',
    );
    if (!ok) return false;

    // Reihenfolge mit Absicht: erst die alte Bindung weg, dann die neue
    // schreiben. Bricht etwas dazwischen ab, ist gar keine Freischaltung
    // aktiv — nie eine, die auf das falsche Konto zeigt.
    await _tresor.loesche(schluesselBindung);
    await _tresor.schreibe(schluesselSitzung, sitzung);
    await _tresor.schreibe(
      schluesselBindung,
      jsonEncode(Kontobindung(benutzerId: benutzerId, email: email).toJson()),
    );
    return true;
  }

  /// Schaltet ab und räumt auf. Wird auch beim Abmelden und bei der Anmeldung
  /// eines anderen Kontos aufgerufen.
  Future<void> deaktiviere() async {
    await _tresor.loesche(schluesselSitzung);
    await _tresor.loesche(schluesselBindung);
  }

  /// Löscht die Freischaltung, wenn sie zu einem anderen Konto gehört.
  ///
  /// Gibt `true` zurück, wenn dabei etwas gelöscht wurde.
  Future<bool> loeseWennFremd(String benutzerId) async {
    final b = await bindung();
    if (b == null || b.benutzerId == benutzerId) return false;
    await deaktiviere();
    return true;
  }

  /// Fragt die Biometrie ab und gibt bei Erfolg die gespeicherte Sitzung aus.
  Future<Entsperrergebnis> entsperre() async {
    final b = await bindung();
    if (b == null) {
      return const Entsperrergebnis.fehler(Entsperrfehler.keineFreischaltung);
    }

    final art = await _dienst.art();
    final ok = await _dienst.pruefe(
      grund: 'Mit ${art.bezeichnung} bei Bördesnack24 anmelden',
    );
    if (!ok) {
      return const Entsperrergebnis.fehler(Entsperrfehler.biometrieAbgelehnt);
    }

    final sitzung = await _tresor.lies(schluesselSitzung);
    if (sitzung == null || sitzung.isEmpty) {
      // Bindung ohne Sitzung: ein halber Zustand, der nur verwirrt.
      await deaktiviere();
      return const Entsperrergebnis.fehler(Entsperrfehler.keineSitzung);
    }
    return Entsperrergebnis.erfolg(sitzung);
  }

  /// Liest die abgelegte Sitzung **ohne** Biometrie.
  ///
  /// Ausschliesslich fuer das Ausschalten: dort hat der Nutzer bereits eine
  /// offene, angemeldete Sitzung vor sich. Ihn dafuer noch einmal nach dem
  /// Gesicht zu fragen, waere eine Huerde ohne Schutzwirkung. Fuer das
  /// Anmelden ist diese Methode nicht zu verwenden.
  Future<String?> entsperreOhnePruefung() =>
      _tresor.lies(schluesselSitzung);

  /// Gegenprobe **nach** dem Wiederherstellen der Sitzung.
  ///
  /// Die Prüfung davor stützt sich auf das, was im Tresor steht; diese hier
  /// auf das, was der Server tatsächlich zurückgegeben hat. Weichen beide
  /// voneinander ab, wird abgeräumt statt weitergemacht.
  Future<bool> bestaetigeKonto(String benutzerIdAusSitzung) async {
    final b = await bindung();
    if (b == null) return false;
    if (b.benutzerId != benutzerIdAusSitzung) {
      await deaktiviere();
      return false;
    }
    return true;
  }
}

/// Sitzungsablage, die sich danach richtet, ob die biometrische Anmeldung
/// eingeschaltet ist.
///
/// Ist sie **aus**, verhält sich alles wie bisher (SharedPreferences).
///
/// Ist sie **an**, wandert die Sitzung in den Tresor und wird beim Start
/// **nicht** herausgegeben: `accessToken()` liefert `null`, obwohl eine
/// Sitzung existiert. Genau das macht die Anmeldung biometrisch — ohne diese
/// Sperre würde Supabase die Sitzung beim Start von sich aus wiederherstellen,
/// und der Gesichtsdialog wäre nur noch Dekoration vor einer bereits offenen
/// Tür.
class BiometrieSpeicher extends LocalStorage {
  BiometrieSpeicher({required LocalStorage offen, required Tresor tresor})
      : _offen = offen,
        _tresor = tresor;

  final LocalStorage _offen;
  final Tresor _tresor;

  bool _aktiv = false;

  /// Nur für die Anzeige und für Tests.
  bool get aktiv => _aktiv;

  @override
  Future<void> initialize() async {
    await _offen.initialize();
    _aktiv = (await _tresor.lies(BiometrieAnmeldung.schluesselBindung)) != null;
  }

  /// Nach dem Ein- oder Ausschalten neu einlesen.
  Future<void> zustandNeuLesen() async {
    _aktiv = (await _tresor.lies(BiometrieAnmeldung.schluesselBindung)) != null;
  }

  /// Die aktuell offen liegende Sitzung — Grundlage der Freischaltung.
  Future<String?> offeneSitzung() => _offen.accessToken();

  /// Verwirft die offen liegende Kopie nach dem Einschalten.
  Future<void> offeneSitzungVerwerfen() => _offen.removePersistedSession();

  @override
  Future<bool> hasAccessToken() async {
    if (_aktiv) return false;
    return _offen.hasAccessToken();
  }

  @override
  Future<String?> accessToken() async {
    if (_aktiv) return null;
    return _offen.accessToken();
  }

  @override
  Future<void> persistSession(String persistSessionString) async {
    if (_aktiv) {
      await _tresor.schreibe(
        BiometrieAnmeldung.schluesselSitzung,
        persistSessionString,
      );
      // Die offene Kopie muss weg. Bliebe sie liegen, gaebe es die Sitzung
      // weiterhin unverschluesselt -- und die Sperre waere umgangen, ohne
      // dass es jemandem auffaellt.
      await _offen.removePersistedSession();
      return;
    }
    await _offen.persistSession(persistSessionString);
  }

  @override
  Future<void> removePersistedSession() async {
    await _offen.removePersistedSession();
    await _tresor.loesche(BiometrieAnmeldung.schluesselSitzung);
    await _tresor.loesche(BiometrieAnmeldung.schluesselBindung);
    _aktiv = false;
  }
}
