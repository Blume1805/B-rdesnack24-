import 'package:boerdesnack24/features/auth/domain/services/zweiter_faktor.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() {
  const aal1 = AuthenticatorAssuranceLevels.aal1;
  const aal2 = AuthenticatorAssuranceLevels.aal2;

  group('brauchtZweitenFaktor', () {
    test('Faktor eingerichtet, nur Passwort: Code abfragen', () {
      expect(brauchtZweitenFaktor(aktuelle: aal1, naechste: aal2), isTrue);
    });
    test('Faktor bestätigt: weiter', () {
      expect(brauchtZweitenFaktor(aktuelle: aal2, naechste: aal2), isFalse);
    });
    test('kein Faktor eingerichtet (Kunden): weiter', () {
      expect(brauchtZweitenFaktor(aktuelle: aal1, naechste: aal1), isFalse);
    });
    test('keine Sitzung: weiter (der Anmelde-Schutz greift vorher)', () {
      expect(brauchtZweitenFaktor(aktuelle: null, naechste: null), isFalse);
    });
  });
}
