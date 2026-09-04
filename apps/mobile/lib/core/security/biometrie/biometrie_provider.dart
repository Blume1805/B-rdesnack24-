import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../di/providers.dart';
import 'biometrie_anmeldung.dart';
import 'biometrie_dienst.dart';
import 'sitzungstresor.dart';

/// Wird in `bootstrap()` überschrieben — dort entsteht die Instanz, weil
/// `Supabase.initialize` sie als Sitzungsablage braucht, lange bevor der
/// erste Widget-Baum steht.
final biometrieSpeicherProvider = Provider<BiometrieSpeicher>(
  (ref) => throw UnimplementedError(
    'biometrieSpeicherProvider muss in bootstrap() überschrieben werden',
  ),
);

final biometrieAnmeldungProvider = Provider<BiometrieAnmeldung>(
  (ref) => throw UnimplementedError(
    'biometrieAnmeldungProvider muss in bootstrap() überschrieben werden',
  ),
);

/// Kann das Gerät überhaupt Biometrie, und ist welche eingerichtet?
final biometrieVerfuegbarProvider = FutureProvider<bool>(
  (ref) => ref.watch(biometrieAnmeldungProvider).dienst.verfuegbar(),
);

/// Face ID, Fingerabdruck oder nichts — ausschließlich für die Beschriftung.
final biometrieArtProvider = FutureProvider<BiometrieArt>(
  (ref) => ref.watch(biometrieAnmeldungProvider).dienst.art(),
);

/// An welches Konto die Freischaltung auf diesem Gerät gebunden ist.
final biometrieBindungProvider = FutureProvider<Kontobindung?>(
  (ref) => ref.watch(biometrieAnmeldungProvider).bindung(),
);

/// Warum das Einschalten nicht ging — als Aufzählung, damit die Oberfläche
/// nicht raten muss.
enum Einschaltfehler { nichtAngemeldet, keineBiometrie, abgebrochen }

class BiometrieController {
  BiometrieController(this._ref);

  final Ref _ref;

  BiometrieAnmeldung get _anmeldung => _ref.read(biometrieAnmeldungProvider);
  BiometrieSpeicher get _speicher => _ref.read(biometrieSpeicherProvider);
  GoTrueClient get _auth => _ref.read(supabaseClientProvider).auth;

  void _neuLaden() {
    _ref.invalidate(biometrieBindungProvider);
  }

  /// Schaltet die biometrische Anmeldung für das gerade angemeldete Konto ein.
  Future<Einschaltfehler?> einschalten() async {
    final sitzung = _auth.currentSession;
    final nutzer = sitzung?.user;
    if (sitzung == null || nutzer == null) {
      return Einschaltfehler.nichtAngemeldet;
    }
    if (!await _anmeldung.dienst.verfuegbar()) {
      return Einschaltfehler.keineBiometrie;
    }

    // Bevorzugt die Zeichenkette, die Supabase selbst abgelegt hat: sie ist
    // exakt das Format, das recoverSession spaeter erwartet. Nur wenn nichts
    // abgelegt ist, wird sie neu gebaut.
    final roh = await _speicher.offeneSitzung() ??
        jsonEncode(sitzung.toJson());

    final ok = await _anmeldung.aktiviere(
      benutzerId: nutzer.id,
      email: nutzer.email ?? '',
      sitzung: roh,
    );
    if (!ok) return Einschaltfehler.abgebrochen;

    await _speicher.zustandNeuLesen();
    // Die offene Kopie verwerfen. Sonst laege die Sitzung weiterhin
    // unverschluesselt daneben und der Gesichtsdialog waere umgehbar.
    await _speicher.offeneSitzungVerwerfen();
    _neuLaden();
    return null;
  }

  /// Schaltet ab und legt die Sitzung wieder offen ab — sonst wäre der Nutzer
  /// beim nächsten Start ohne Vorwarnung abgemeldet.
  Future<void> ausschalten() async {
    final roh = await _anmeldung.entsperreOhnePruefung();
    await _anmeldung.deaktiviere();
    await _speicher.zustandNeuLesen();
    if (roh != null && roh.isNotEmpty) {
      await _speicher.persistSession(roh);
    }
    _neuLaden();
  }

  /// Der eigentliche Anmeldevorgang aus der Anmeldemaske heraus.
  Future<Entsperrfehler?> anmelden() async {
    final ergebnis = await _anmeldung.entsperre();
    if (!ergebnis.geklappt) return ergebnis.fehler;

    final AuthResponse antwort;
    try {
      antwort = await _auth.recoverSession(ergebnis.sitzung!);
    } catch (_) {
      // Abgelaufene oder serverseitig entzogene Sitzung. Die Freischaltung
      // zeigt dann auf nichts mehr und wird abgeraeumt.
      await _anmeldung.deaktiviere();
      await _speicher.zustandNeuLesen();
      _neuLaden();
      return Entsperrfehler.keineSitzung;
    }

    // Gegenprobe gegen das, was der Server zurueckgegeben hat -- nicht gegen
    // das, was im Tresor stand.
    final id = antwort.user?.id ?? antwort.session?.user.id;
    if (id == null || !await _anmeldung.bestaetigeKonto(id)) {
      await _auth.signOut();
      await _speicher.zustandNeuLesen();
      _neuLaden();
      return Entsperrfehler.fremdesKonto;
    }

    await _speicher.zustandNeuLesen();
    _neuLaden();
    return null;
  }

  /// Nach einer Passwortanmeldung: gehört die Freischaltung zu einem anderen
  /// Konto, wird sie gelöscht. Ein Gerät, ein Konto.
  Future<void> pruefeNachAnmeldung() async {
    final id = _auth.currentSession?.user.id;
    if (id == null) return;
    if (await _anmeldung.loeseWennFremd(id)) {
      await _speicher.zustandNeuLesen();
      _neuLaden();
    }
  }
}

final biometrieControllerProvider = Provider<BiometrieController>(
  BiometrieController.new,
);

/// Baut die Ablage für `Supabase.initialize`.
///
/// Im Browser bleibt alles wie bisher: `local_auth` hat keine
/// Web-Implementierung, also gibt es dort keine Biometrie — und ohne
/// Freischaltung verhält sich [BiometrieSpeicher] wie die gewöhnliche
/// Ablage.
({BiometrieSpeicher speicher, BiometrieAnmeldung anmeldung})
    biometrieAufbauen({required LocalStorage offen}) {
  final Tresor tresor =
      kIsWeb ? SpeicherImArbeitsspeicher() : GeraeteTresor();
  final BiometrieDienst dienst =
      kIsWeb ? const KeineBiometrie() : GeraeteBiometrie();
  return (
    speicher: BiometrieSpeicher(offen: offen, tresor: tresor),
    anmeldung: BiometrieAnmeldung(tresor: tresor, dienst: dienst),
  );
}
