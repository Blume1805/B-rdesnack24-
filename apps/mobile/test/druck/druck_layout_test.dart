// Drucklayouts: Bauregeln für saubere Seitenumbrüche (Befund 19.11.2026:
// In der PKW-Anlage standen auf Seite 2 nur Summe und Unterschriften, und
// eine Überschrift blieb allein am Fuß von Seite 1).
//
// Mit DRUCK_AUSGABE=<Ordner> legt der Test die Seiten zusätzlich als HTML ab,
// damit sie als echtes PDF gerendert und angesehen werden können
// (scripts/druck_pruefen.mjs).
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:boerdesnack24/core/druck/druck_regeln.dart';
import 'package:boerdesnack24/features/customer/domain/entities/invoice.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/invoice_html.dart';
import 'package:boerdesnack24/features/management/presentation/screens/anlage_pkw_html.dart';
import 'package:boerdesnack24/features/management/presentation/screens/inventory_report_html.dart';

import 'druck_beispiele.dart';

final _stichtag = DateTime(2026, 11, 19);

void _ablegen(String name, String html) {
  final ziel = Platform.environment['DRUCK_AUSGABE'];
  if (ziel == null || ziel.isEmpty) return;
  File('$ziel/$name.html')
    ..createSync(recursive: true)
    ..writeAsStringSync(html);
}

String _pkw({int fahrten = 0, bool freigegeben = false, int ohneSatz = 0}) =>
    anlagePkwHtml(
      daten: pkwDaten(fahrten: fahrten, ohneSatz: ohneSatz),
      signatures: pkwUnterschriften,
      firma: 'Bördesnack24 GbR',
      steuernummer: '102/178/01635',
      ustIdNr: 'DE 458804058',
      erstelltAm: _stichtag,
      druckenBeimLaden: false,
      approvalDecisions: freigegeben
          ? const [
              {'full_name': 'Pia Blume', 'signature_url': ''},
              {'full_name': 'Philipp Blume', 'signature_url': ''},
            ]
          : null,
    );

void main() {
  setUpAll(() => initializeDateFormatting('de_DE'));

  group('PKW-Anlage', () {
    test('Umbruchregeln sind eingebunden', () {
      final h = _pkw();
      expect(h, contains(druckUmbruchCss));
      expect(h, contains('@page :first'));
    });

    test('Schlussblock hält Ergebnis, Unterschriften und Fuß zusammen', () {
      final h = _pkw();
      final schluss = h.substring(h.indexOf('<div class="schluss">'));
      expect(schluss, contains('Nutzungseinlage 2026'));
      expect(schluss, contains('class="unterschriften"'));
      expect(schluss, contains('Pia Blume'));
      expect(schluss, contains('Philipp Blume'));
      expect(schluss, contains('class="fuss"'));
      // Nach dem Schlussblock folgt nichts mehr, was allein umbrechen könnte.
      expect(schluss, endsWith('</div></td></tr></tbody></table></section></body></html>'));
    });

    test('Jede Überschrift steckt in einem Abschnitt', () {
      final h = _pkw(fahrten: 3);
      final abschnitte = RegExp(r'<section class="abschnitt[^"]*"><h2>')
          .allMatches(h)
          .length;
      expect(abschnitte, RegExp('<h2>').allMatches(h).length);
    });

    test('Schluss nimmt die letzten drei Fahrten und die Summe mit', () {
      for (final n in [0, 1, 2, 3, 12, 40]) {
        final h = _pkw(fahrten: n);
        final ende = h.substring(h.indexOf('<tbody class="ende">'));
        expect('<tr>'.allMatches(ende).length, n < 3 ? (n == 0 ? 1 : n) : 3,
            reason: '$n Fahrten');
        expect(ende, contains('class="schluss-zeile"'));
        if (n > 0) expect(ende, contains('Summe der betrieblichen Fahrten'));
        expect('<tbody class="ende">'.allMatches(h).length, 1);
      }
    });

    test('Kostenarten ohne Betrag stehen im Hinweis, nicht als leere Zeile', () {
      final h = _pkw();
      expect(h, isNot(contains('<td class="l">Tanken</td>')));
      expect(h, contains('Ohne Beträge in 2026: Tanken, Autowäsche, '
          'Reparaturen, Abschreibung, Sonstiges.'));
      expect(h, contains('<td class="l">Versicherung</td>'));
    });

    test('Kilometer mit Tausenderpunkt', () {
      expect(_pkw(), contains('29.028 km'));
    });

    test('Kopfleiste: Zeitraum, Ermittlung, Datum', () {
      final h = _pkw();
      expect(h, contains('01.01.2026 bis 31.12.2026'));
      expect(h, contains('Bruttokosten je gefahrenem Kilometer'));
      expect(h, contains('19.11.2026'));
    });

    test('Beispiele ablegen', () {
      _ablegen('pkw_wie_bildschirmfoto', _pkw());
      _ablegen('pkw_5_fahrten', _pkw(fahrten: 5));
      _ablegen('pkw_12_fahrten_freigegeben', _pkw(fahrten: 12, freigegeben: true));
      _ablegen('pkw_40_fahrten', _pkw(fahrten: 40, ohneSatz: 2));
    });
  });

  group('FIFO-Inventur', () {
    String inventur({int produkte = 3, int jeProdukt = 6, bool freigegeben = false}) =>
        inventoryReportHtml(
          movements: inventurBewegungen(produkte: produkte, jeProdukt: jeProdukt),
          lots: inventurLots(produkte: produkte),
          signatures: pkwUnterschriften,
          from: DateTime(2026, 1, 1),
          to: DateTime(2026, 9, 30),
          erstelltAm: _stichtag,
          druckenBeimLaden: false,
          approvalDecisions: freigegeben
              ? const [
                  {'approver_name': 'Pia Blume', 'decision': 'approved', 'decided_at': '2026-10-02'},
                  {'approver_name': 'Philipp Blume', 'decision': 'approved', 'decided_at': '2026-10-02'},
                ]
              : null,
        );

    test('Umbruchregeln und Rand auf Folgeseiten', () {
      final h = inventur();
      expect(h, contains(druckUmbruchCss));
      expect(h, contains('@page :first { margin-top: 0; }'));
      expect(h, isNot(contains('margin: 0 -10mm')));
    });

    test('Bilanzwert, Freigabe und Unterschriften bilden den Schluss', () {
      final h = inventur(freigegeben: true);
      final schluss = h.substring(h.indexOf('<section class="schluss">'));
      expect(schluss, contains('Bilanzwert der Vorräte'));
      expect(schluss, contains('FREIGEGEBEN'));
      expect(schluss, contains('Freigabe / Unterschriften'));
      expect(schluss, contains('Bewertungsansatz MHD-Abschlag'));
    });

    test('Produkte brechen um, Restlot-Tabelle bleibt mit ihrer Überschrift', () {
      final h = inventur(jeProdukt: 6);
      expect('<section class="product abschnitt lang">'.allMatches(h).length, 3);
      expect(h, contains('<div class="abschnitt"><h3>FIFO-Restlots am Stichtag</h3>'));
      // Produktkopf und erste Teilüberschrift sind eine Kopfgruppe.
      expect(RegExp(r'<div class="kopf"><div class="prod-head">.*?<h3>Bewegungen im Zeitraum</h3></div>')
          .allMatches(h).length, 3);
    });

    test('Beispiele ablegen', () {
      _ablegen('inventur_kurz', inventur());
      _ablegen('inventur_lang_freigegeben', inventur(produkte: 8, jeProdukt: 9, freigegeben: true));
      _ablegen('inventur_grosses_produkt', inventur(produkte: 2, jeProdukt: 40));
    });
  });

  group('Rechnung', () {
    final rechnung = Invoice(
      id: 'r1',
      purchaseId: 'k1',
      invoiceNumber: 'BS24-2026-000123',
      issuedAt: DateTime(2026, 11, 19),
      totalNet7: 4.67,
      totalVat7: 0.33,
      totalNet19: 2.10,
      totalVat19: 0.40,
      totalGross: 7.50,
      paymentMethod: 'card_contactless',
      billingSnapshot: const {
        'company_name': 'Muster & Söhne <GmbH>',
        'full_name': 'Erika Muster',
        'street': 'Hauptstraße 1',
        'zip': '39171',
        'city': 'Sülzetal',
        'issuer': {
          'name': 'Bördesnack24 GbR',
          'street': 'Sülldorfer Str. 3A',
          'zip': '39171',
          'city': 'Sülzetal',
          'tax_number': '102/178/01635',
        },
      },
    );

    test('Umbruchregeln, Schluss und Escaping', () {
      final h = invoiceHtml(rechnung, druckenBeimLaden: false);
      expect(h, contains(druckUmbruchCss));
      expect(h, contains('<section class="schluss">'));
      expect(h, contains('Muster &amp; Söhne &lt;GmbH&gt;'));
      expect(h, isNot(contains('&amp;amp;')));
      expect(h, isNot(contains('margin: 0 -16mm')));
      _ablegen('rechnung', h);
    });
  });
}
