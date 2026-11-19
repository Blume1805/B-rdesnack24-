// PDF-Dateien (PKW-Anlage, FIFO-Inventur, Rechnung): Sie entstehen in der
// App, damit sie sich auf dem iPhone über das Teilen-Menü drucken lassen
// (Befund 19.11.2026: Die Home-Bildschirm-App ignoriert den Druckbefehl
// einer Webseite).
//
// Geprüft wird, dass gültige PDFs entstehen, wie viele Seiten sie haben und
// dass der Schluss nie allein auf einer Seite steht. Mit
// DRUCK_AUSGABE=<Ordner> werden die Dateien zum Ansehen abgelegt.
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:boerdesnack24/core/druck/pdf_hausstil.dart';
import 'package:boerdesnack24/features/customer/domain/entities/invoice.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/invoice_pdf.dart';
import 'package:boerdesnack24/features/management/presentation/screens/anlage_pkw_pdf.dart';
import 'package:boerdesnack24/features/management/presentation/screens/inventory_report_pdf.dart';

import 'druck_beispiele.dart';

final _stichtag = DateTime(2026, 11, 19);

PdfSchriften _schriften() {
  ByteData lesen(String pfad) =>
      ByteData.sublistView(File(pfad).readAsBytesSync());
  return PdfSchriften.ausBytes(
    normal: lesen(PdfSchriften.pfadNormal),
    fett: lesen(PdfSchriften.pfadFett),
    extrafett: lesen(PdfSchriften.pfadExtrafett),
  );
}

void _ablegen(String name, Uint8List pdf) {
  final ziel = Platform.environment['DRUCK_AUSGABE'];
  if (ziel == null || ziel.isEmpty) return;
  File('$ziel/$name.pdf')
    ..createSync(recursive: true)
    ..writeAsBytesSync(pdf);
}

/// Seitenzahl aus dem PDF-Seitenbaum („/Type /Pages … /Count n").
int _seiten(Uint8List pdf) {
  final text = String.fromCharCodes(pdf);
  final m = RegExp(r'/Type\s*/Pages[^>]*?/Count\s+(\d+)').firstMatch(text) ??
      RegExp(r'/Count\s+(\d+)[^>]*?/Type\s*/Pages').firstMatch(text);
  return int.parse(m!.group(1)!);
}

void main() {
  setUpAll(() => initializeDateFormatting('de_DE'));
  final schriften = _schriften();

  Future<Uint8List> pkw({
    int fahrten = 0,
    bool freigegeben = false,
    int ohneSatz = 0,
  }) =>
      anlagePkwPdf(
        daten: pkwDaten(fahrten: fahrten, ohneSatz: ohneSatz),
        signatures: pkwUnterschriften,
        firma: 'Bördesnack24 GbR',
        steuernummer: '102/178/01635',
        ustIdNr: 'DE 458804058',
        schriften: schriften,
        erstelltAm: _stichtag,
        approvalDecisions: freigegeben
            ? const [
                {'full_name': 'Pia Blume', 'signature_url': ''},
                {'full_name': 'Philipp Blume', 'signature_url': ''},
              ]
            : null,
      );

  group('PKW-Anlage als PDF', () {
    test('gültiges PDF, eine Seite ohne Fahrten', () async {
      final pdf = await pkw();
      expect(String.fromCharCodes(pdf.sublist(0, 5)), '%PDF-');
      expect(_seiten(pdf), 1);
      _ablegen('pkw_wie_bildschirmfoto', pdf);
    });

    test('Beispiele mit 5, 12 und 40 Fahrten', () async {
      for (final (name, n, frei, ohne) in [
        ('pkw_5_fahrten', 5, false, 0),
        ('pkw_12_fahrten_freigegeben', 12, true, 0),
        ('pkw_40_fahrten', 40, false, 2),
      ]) {
        final pdf = await pkw(fahrten: n, freigegeben: frei, ohneSatz: ohne);
        expect(_seiten(pdf), greaterThanOrEqualTo(1), reason: name);
        _ablegen(name, pdf);
      }
    });
  });

  group('FIFO-Inventur als PDF', () {
    Future<Uint8List> inventur({
      int produkte = 3,
      int jeProdukt = 6,
      bool freigegeben = false,
    }) =>
        inventoryReportPdf(
          movements:
              inventurBewegungen(produkte: produkte, jeProdukt: jeProdukt),
          lots: inventurLots(produkte: produkte),
          signatures: pkwUnterschriften,
          from: DateTime(2026, 1, 1),
          to: DateTime(2026, 9, 30),
          schriften: schriften,
          erstelltAm: _stichtag,
          approvalDecisions: freigegeben
              ? const [
                  {
                    'approver_name': 'Pia Blume',
                    'decision': 'approved',
                    'decided_at': '2026-10-02',
                  },
                  {
                    'approver_name': 'Philipp Blume',
                    'decision': 'approved',
                    'decided_at': '2026-10-02',
                  },
                ]
              : null,
        );

    test('Beispiele: kurz, lang mit Freigabe, ein großes Produkt', () async {
      final kurz = await inventur();
      expect(String.fromCharCodes(kurz.sublist(0, 5)), '%PDF-');
      _ablegen('inventur_kurz', kurz);
      _ablegen(
        'inventur_lang_freigegeben',
        await inventur(produkte: 8, jeProdukt: 9, freigegeben: true),
      );
      _ablegen(
        'inventur_grosses_produkt',
        await inventur(produkte: 2, jeProdukt: 40),
      );
    });
  });

  test('Rechnung als PDF: eine Seite, Sonderzeichen unverändert', () async {
    final pdf = await invoicePdf(
      Invoice(
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
      ),
      schriften: schriften,
    );
    expect(_seiten(pdf), 1);
    _ablegen('rechnung', pdf);
  });
}
