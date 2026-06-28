import 'package:boerdesnack24/core/utils/validators.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Validators.email', () {
    test('akzeptiert gültige Adresse', () {
      expect(Validators.email('pia@boerdesnack24.de'), isNull);
    });
    test('lehnt leere Eingabe ab', () {
      expect(Validators.email(''), 'required');
    });
    test('lehnt ungültige Adresse ab', () {
      expect(Validators.email('keine-mail'), 'invalid');
    });
  });

  group('Validators.password', () {
    test('akzeptiert ausreichend langes Passwort', () {
      expect(Validators.password('sehrsicher1'), isNull);
    });
    test('lehnt zu kurzes Passwort ab', () {
      expect(Validators.password('kurz'), 'tooShort');
    });
    test('lehnt leeres Passwort ab', () {
      expect(Validators.password(''), 'required');
    });
  });
}
