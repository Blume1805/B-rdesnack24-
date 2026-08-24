// Hält fest, dass der Wortlaut einer fehlgeschlagenen Edge Function bis in
// die Oberfläche durchkommt.
//
// Anlass (24.08.2026): Der sevDesk-Sync scheiterte dreimal. Die Function
// hatte sauber geantwortet — „sevDesk nicht konfiguriert", weil
// SEVDESK_API_TOKEN fehlte. Die App zeigte „Synchronisierung
// fehlgeschlagen." und sonst nichts; der Grund liess sich nur im
// Serverprotokoll finden. Das hat eine Runde gekostet.
import 'package:boerdesnack24/features/finance/data/repositories/finance_repository_impl.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('nimmt den Klartext aus einer JSON-Antwort', () {
    expect(
      funktionsFehlerText({'error': 'sevDesk nicht konfiguriert'}),
      'sevDesk nicht konfiguriert',
    );
  });

  test('nimmt auch eine reine Zeichenkette', () {
    expect(funktionsFehlerText('Forbidden'), 'Forbidden');
  });

  test('schneidet Leerraum weg', () {
    expect(funktionsFehlerText({'error': '  Unauthorized  '}), 'Unauthorized');
  });

  test('liefert null, wenn nichts Brauchbares dabei ist', () {
    // Dann bleibt der Aufrufer bei seiner allgemeinen Meldung — besser als
    // ein leerer Doppelpunkt in der Oberfläche.
    expect(funktionsFehlerText(null), isNull);
    expect(funktionsFehlerText(''), isNull);
    expect(funktionsFehlerText('   '), isNull);
    expect(funktionsFehlerText(const {}), isNull);
    expect(funktionsFehlerText(const {'error': ''}), isNull);
    expect(funktionsFehlerText(const {'error': 42}), isNull);
    expect(funktionsFehlerText(const [1, 2, 3]), isNull);
  });
}
