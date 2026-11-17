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
  liegengebliebenTests();
}

// Befund 17.11.2026: abgebrochene Einrichtung blockierte jede weitere
// (mfa_factor_name_conflict). Liegengebliebene Faktoren werden erkannt,
// bestätigte nicht angefasst; neue Faktoren heißen eindeutig.
Factor _faktor(String id, FactorType typ, FactorStatus status) => Factor(
      id: id,
      friendlyName: null,
      factorType: typ,
      status: status,
      createdAt: DateTime(2026),
      updatedAt: DateTime(2026),
    );

void liegengebliebenTests() {
  test('nur unbestätigte TOTP-Faktoren gelten als liegengeblieben', () {
    final f = [
      _faktor('a', FactorType.totp, FactorStatus.unverified),
      _faktor('b', FactorType.totp, FactorStatus.verified),
      _faktor('c', FactorType.phone, FactorStatus.unverified),
    ];
    expect(liegengebliebeneFaktoren(f), ['a']);
  });

  test('ohne Faktoren nichts zu entfernen', () {
    expect(liegengebliebeneFaktoren(const []), isEmpty);
  });

  test('neue Faktoren heißen je Sekunde verschieden', () {
    final a = neuerFaktorName(DateTime(2026, 11, 17, 20, 30, 1));
    final b = neuerFaktorName(DateTime(2026, 11, 17, 20, 30, 2));
    expect(a, isNot(b));
    expect(a, startsWith('Bördesnack24 '));
  });
}
