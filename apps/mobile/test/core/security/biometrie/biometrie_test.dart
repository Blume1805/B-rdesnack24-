import 'package:boerdesnack24/core/security/biometrie/biometrie_anmeldung.dart';
import 'package:boerdesnack24/core/security/biometrie/biometrie_dienst.dart';
import 'package:boerdesnack24/core/security/biometrie/sitzungstresor.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Steuerbarer Ersatz für die Biometrie des Geräts. Der Dialog selbst lässt
/// sich in keinem Test auslösen — alles, was ihn umgibt, schon. Und dort
/// sitzen die Fehler, die Konten öffnen.
class FakeBiometrie implements BiometrieDienst {
  FakeBiometrie({
    this.istVerfuegbar = true,
    this.bestehen = true,
    this.typ = BiometrieArt.faceId,
  });

  bool istVerfuegbar;
  bool bestehen;
  BiometrieArt typ;
  int gefragt = 0;

  @override
  Future<bool> verfuegbar() async => istVerfuegbar;

  @override
  Future<BiometrieArt> art() async => typ;

  @override
  Future<bool> pruefe({required String grund}) async {
    gefragt++;
    return bestehen;
  }
}

/// Die gewöhnliche, offene Ablage (im Betrieb: SharedPreferences).
class OffenerSpeicher extends LocalStorage {
  String? wert;

  @override
  Future<void> initialize() async {}

  @override
  Future<bool> hasAccessToken() async => wert != null;

  @override
  Future<String?> accessToken() async => wert;

  @override
  Future<void> persistSession(String s) async => wert = s;

  @override
  Future<void> removePersistedSession() async => wert = null;
}

const _sitzungA = '{"access_token":"aaa","user":{"id":"u-1"}}';
const _sitzungB = '{"access_token":"bbb","user":{"id":"u-2"}}';

void main() {
  late SpeicherImArbeitsspeicher tresor;
  late FakeBiometrie dienst;
  late BiometrieAnmeldung anmeldung;

  setUp(() {
    tresor = SpeicherImArbeitsspeicher();
    dienst = FakeBiometrie();
    anmeldung = BiometrieAnmeldung(tresor: tresor, dienst: dienst);
  });

  Future<bool> aktiviereA() => anmeldung.aktiviere(
        benutzerId: 'u-1',
        email: 'philipp@example.invalid',
        sitzung: _sitzungA,
      );

  group('Einschalten', () {
    test('legt Bindung und Sitzung ab', () async {
      expect(await aktiviereA(), isTrue);
      final b = await anmeldung.bindung();
      expect(b?.benutzerId, 'u-1');
      expect(b?.email, 'philipp@example.invalid');
      expect(tresor.inhalt[BiometrieAnmeldung.schluesselSitzung], _sitzungA);
    });

    test('Gegenprobe: ohne Biometrie am Gerät wird nichts abgelegt', () async {
      dienst.istVerfuegbar = false;
      expect(await aktiviereA(), isFalse);
      expect(tresor.inhalt, isEmpty);
      expect(dienst.gefragt, 0, reason: 'gar nicht erst fragen');
    });

    test('Gegenprobe: abgebrochene Prüfung legt nichts ab', () async {
      dienst.bestehen = false;
      expect(await aktiviereA(), isFalse);
      expect(tresor.inhalt, isEmpty);
      expect(dienst.gefragt, 1);
    });

    test('Gegenprobe: ohne Sitzung keine Freischaltung', () async {
      // Eine Freischaltung, die auf ein leeres Fach zeigt, verspricht etwas,
      // das sie nicht halten kann.
      final ok = await anmeldung.aktiviere(
        benutzerId: 'u-1',
        email: 'a@b.invalid',
        sitzung: '',
      );
      expect(ok, isFalse);
      expect(tresor.inhalt, isEmpty);
    });

    test('ein Gerät, ein Konto: das zweite Konto ersetzt das erste', () async {
      await aktiviereA();
      final ok = await anmeldung.aktiviere(
        benutzerId: 'u-2',
        email: 'pia@example.invalid',
        sitzung: _sitzungB,
      );
      expect(ok, isTrue);
      final b = await anmeldung.bindung();
      expect(b?.benutzerId, 'u-2');
      expect(tresor.inhalt[BiometrieAnmeldung.schluesselSitzung], _sitzungB);
    });
  });

  group('Entsperren', () {
    test('gibt die Sitzung nach bestandener Prüfung heraus', () async {
      await aktiviereA();
      final e = await anmeldung.entsperre();
      expect(e.geklappt, isTrue);
      expect(e.sitzung, _sitzungA);
    });

    test('Gegenprobe: abgelehnte Prüfung gibt NICHTS heraus', () async {
      // Der wichtigste Test des ganzen Features. Wer ihn rot macht, hat die
      // biometrische Anmeldung in eine Attrappe verwandelt.
      await aktiviereA();
      dienst.bestehen = false;
      final e = await anmeldung.entsperre();
      expect(e.geklappt, isFalse);
      expect(e.sitzung, isNull);
      expect(e.fehler, Entsperrfehler.biometrieAbgelehnt);
      expect(
        tresor.inhalt[BiometrieAnmeldung.schluesselSitzung],
        _sitzungA,
        reason: 'die Sitzung bleibt liegen, sie wird nur nicht herausgegeben',
      );
    });

    test('ohne Freischaltung wird gar nicht erst gefragt', () async {
      final e = await anmeldung.entsperre();
      expect(e.fehler, Entsperrfehler.keineFreischaltung);
      expect(dienst.gefragt, 0);
    });

    test('Bindung ohne Sitzung räumt sich selbst ab', () async {
      await aktiviereA();
      await tresor.loesche(BiometrieAnmeldung.schluesselSitzung);
      final e = await anmeldung.entsperre();
      expect(e.fehler, Entsperrfehler.keineSitzung);
      expect(await anmeldung.bindung(), isNull);
    });
  });

  group('Kontobindung — "nur in seinem Account"', () {
    test('bestaetigeKonto nimmt die eigene Kennung an', () async {
      await aktiviereA();
      expect(await anmeldung.bestaetigeKonto('u-1'), isTrue);
    });

    test('bestaetigeKonto weist eine fremde Kennung ab und räumt ab', () async {
      // Die Prüfung gegen das, was der Server zurückgab — nicht gegen das,
      // was im Tresor stand.
      await aktiviereA();
      expect(await anmeldung.bestaetigeKonto('u-fremd'), isFalse);
      expect(await anmeldung.bindung(), isNull);
      expect(tresor.inhalt, isEmpty);
    });

    test('loeseWennFremd lässt das eigene Konto in Ruhe', () async {
      await aktiviereA();
      expect(await anmeldung.loeseWennFremd('u-1'), isFalse);
      expect(await anmeldung.bindung(), isNotNull);
    });

    test('loeseWennFremd löscht bei fremder Anmeldung', () async {
      await aktiviereA();
      expect(await anmeldung.loeseWennFremd('u-2'), isTrue);
      expect(await anmeldung.bindung(), isNull);
    });

    test('ohne Freischaltung ist nichts zu lösen', () async {
      expect(await anmeldung.loeseWennFremd('u-1'), isFalse);
    });
  });

  test('Ausschalten räumt Sitzung und Bindung weg', () async {
    await aktiviereA();
    await anmeldung.deaktiviere();
    expect(tresor.inhalt, isEmpty);
  });

  group('Kontobindung, Serialisierung', () {
    test('hin und zurück', () {
      const b = Kontobindung(benutzerId: 'u-1', email: 'a@b.invalid');
      expect(Kontobindung.fromJson('{"id":"u-1","email":"a@b.invalid"}'), b);
    });

    test('Unsinn ergibt keine Bindung', () {
      expect(Kontobindung.fromJson(null), isNull);
      expect(Kontobindung.fromJson(''), isNull);
      expect(Kontobindung.fromJson('kein json'), isNull);
      expect(Kontobindung.fromJson('{"email":"a@b.invalid"}'), isNull);
      expect(Kontobindung.fromJson('{"id":""}'), isNull);
    });
  });

  group('BiometrieSpeicher — die Sperre vor der Sitzung', () {
    late OffenerSpeicher offen;
    late BiometrieSpeicher speicher;

    setUp(() {
      offen = OffenerSpeicher();
      speicher = BiometrieSpeicher(offen: offen, tresor: tresor);
    });

    test('ohne Freischaltung verhält er sich wie bisher', () async {
      await speicher.initialize();
      await speicher.persistSession(_sitzungA);
      expect(offen.wert, _sitzungA);
      expect(await speicher.accessToken(), _sitzungA);
      expect(await speicher.hasAccessToken(), isTrue);
      expect(tresor.inhalt, isEmpty);
    });

    test('mit Freischaltung gibt er die Sitzung beim Start NICHT heraus',
        () async {
      // Der eigentliche Grund für diese Klasse: ohne sie stellt Supabase die
      // Sitzung beim Start von sich aus wieder her, und der Gesichtsdialog
      // wäre nur Dekoration vor einer bereits offenen Tür.
      await aktiviereA();
      await speicher.initialize();
      expect(speicher.aktiv, isTrue);
      expect(await speicher.accessToken(), isNull);
      expect(await speicher.hasAccessToken(), isFalse);
      expect(
        tresor.inhalt[BiometrieAnmeldung.schluesselSitzung],
        _sitzungA,
        reason: 'sie ist da — sie wird nur nicht herausgegeben',
      );
    });

    test('mit Freischaltung wandert jede Sitzung in den Tresor', () async {
      await aktiviereA();
      await speicher.initialize();
      offen.wert = 'alte offene Kopie';
      await speicher.persistSession(_sitzungB);
      expect(tresor.inhalt[BiometrieAnmeldung.schluesselSitzung], _sitzungB);
      expect(
        offen.wert,
        isNull,
        reason: 'die offene Kopie muss weg, sonst ist die Sperre umgehbar',
      );
    });

    test('Abmelden räumt beide Ablagen und die Bindung weg', () async {
      await aktiviereA();
      await speicher.initialize();
      await speicher.removePersistedSession();
      expect(offen.wert, isNull);
      expect(tresor.inhalt, isEmpty);
      expect(speicher.aktiv, isFalse);
    });

    test('zustandNeuLesen greift eine nachträgliche Freischaltung auf',
        () async {
      await speicher.initialize();
      expect(speicher.aktiv, isFalse);
      await aktiviereA();
      await speicher.zustandNeuLesen();
      expect(speicher.aktiv, isTrue);
    });

    test('offeneSitzungVerwerfen leert nur die offene Ablage', () async {
      await speicher.initialize();
      await speicher.persistSession(_sitzungA);
      await aktiviereA();
      await speicher.zustandNeuLesen();
      await speicher.offeneSitzungVerwerfen();
      expect(offen.wert, isNull);
      expect(tresor.inhalt[BiometrieAnmeldung.schluesselSitzung], _sitzungA);
    });
  });

  test('KeineBiometrie sagt zu allem Nein', () async {
    // Der Web-Fall. Ein "vielleicht" gäbe es hier nicht: ohne Plugin gibt es
    // keine Prüfung, und eine nicht stattgefundene Prüfung darf nie als
    // bestanden gelten.
    const k = KeineBiometrie();
    expect(await k.verfuegbar(), isFalse);
    expect(await k.art(), BiometrieArt.keine);
    expect(await k.pruefe(grund: 'egal'), isFalse);
  });

  test('Beschriftung folgt der Art', () {
    expect(BiometrieArt.faceId.bezeichnung, 'Face ID');
    expect(BiometrieArt.fingerabdruck.bezeichnung, 'Fingerabdruck');
    expect(BiometrieArt.andere.bezeichnung, 'Biometrie');
  });
}
