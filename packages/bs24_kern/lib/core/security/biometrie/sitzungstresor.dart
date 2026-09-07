import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

/// An welches Konto die biometrische Anmeldung gebunden ist.
///
/// Der Kern der Zusage „nur in seinem Account": ohne diese Bindung wäre eine
/// erfolgreiche Gesichtserkennung nur die Aussage „ein berechtigter Mensch
/// hält das Gerät" — nicht „**dieser** Mensch darf in **dieses** Konto".
@immutable
class Kontobindung {
  const Kontobindung({required this.benutzerId, required this.email});

  final String benutzerId;
  final String email;

  Map<String, dynamic> toJson() => {'id': benutzerId, 'email': email};

  static Kontobindung? fromJson(String? roh) {
    if (roh == null || roh.isEmpty) return null;
    try {
      final m = jsonDecode(roh) as Map<String, dynamic>;
      final id = m['id'] as String?;
      final email = m['email'] as String?;
      if (id == null || id.isEmpty) return null;
      return Kontobindung(benutzerId: id, email: email ?? '');
    } on FormatException {
      return null;
    }
  }

  @override
  bool operator ==(Object other) =>
      other is Kontobindung &&
      other.benutzerId == benutzerId &&
      other.email == email;

  @override
  int get hashCode => Object.hash(benutzerId, email);

  @override
  String toString() => 'Kontobindung($email)';
}

/// Ein Schlüssel-Wert-Speicher, der die Sitzung nicht im Klartext ablegt.
///
/// Als Schnittstelle, damit die Regeln darüber ohne Gerät prüfbar sind.
abstract class Tresor {
  Future<String?> lies(String schluessel);
  Future<void> schreibe(String schluessel, String wert);
  Future<void> loesche(String schluessel);
}

/// Keychain (iOS) beziehungsweise Keystore/EncryptedSharedPreferences
/// (Android).
///
/// Warum nicht die gewöhnlichen SharedPreferences: die liegen auf iOS als
/// unverschlüsselte plist im App-Container und auf Android als XML. Die
/// Sitzung ist ein Anmeldenachweis — sie gehört dorthin, wo das Betriebssystem
/// sie an Gerät und App bindet.
///
/// Ehrlich dazu: der Keychain-Eintrag schützt gegen andere Apps und gegen ein
/// gesperrtes Gerät. Der Biometrie-Dialog ist die Schranke **in** der App. Das
/// ist zusammen deutlich mehr als heute, aber es ist keine Festplatten-
/// verschlüsselung gegen einen entsperrten, kompromittierten Gerätezustand.
class GeraeteTresor implements Tresor {
  GeraeteTresor([FlutterSecureStorage? speicher])
      : _s = speicher ??
            const FlutterSecureStorage(
              iOptions: IOSOptions(
                // Nach dem ersten Entsperren lesbar, aber nie im Backup und
                // nie auf einem anderen Geraet: eine mitgesicherte Sitzung
                // waere ein Konto zum Mitnehmen.
                accessibility: KeychainAccessibility.first_unlock_this_device,
              ),
              aOptions: AndroidOptions(encryptedSharedPreferences: true),
            );

  final FlutterSecureStorage _s;

  @override
  Future<String?> lies(String schluessel) => _s.read(key: schluessel);

  @override
  Future<void> schreibe(String schluessel, String wert) =>
      _s.write(key: schluessel, value: wert);

  @override
  Future<void> loesche(String schluessel) => _s.delete(key: schluessel);
}

/// Für Tests und für den Web-Build.
class SpeicherImArbeitsspeicher implements Tresor {
  final Map<String, String> inhalt = {};

  @override
  Future<String?> lies(String schluessel) async => inhalt[schluessel];

  @override
  Future<void> schreibe(String schluessel, String wert) async =>
      inhalt[schluessel] = wert;

  @override
  Future<void> loesche(String schluessel) async => inhalt.remove(schluessel);
}
