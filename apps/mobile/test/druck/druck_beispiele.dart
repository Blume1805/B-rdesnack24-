// Beispieldaten für die Drucklayouts (PKW-Anlage, FIFO-Inventur, Rechnung).
// Werte der PKW-Anlage wie im Bildschirmfoto vom 19.11.2026.

Map<String, dynamic> pkwDaten({int fahrten = 0, int ohneSatz = 0}) => {
      'jahr': 2026,
      'nutzungseinlage': fahrten * 12.34,
      'fahrten_ohne_satz': ohneSatz,
      'fahrzeuge': [
        {
          'id': 'a',
          'kennzeichen': 'BK-AE 2325',
          'gesamtkosten': 3095.10,
          'km_stand_anfang': 29028,
          'km_stand_ende': 40000,
          'km_gefahren': 10972,
          'satz_je_km': 0.2821,
          'kosten': [
            {'kostenart': 'versicherung', 'betrag_brutto': 610.10},
            {'kostenart': 'kfz_steuer', 'betrag_brutto': 109.00},
            {'kostenart': 'leasing', 'betrag_brutto': 2376.00},
          ],
        },
        {
          'id': 'b',
          'kennzeichen': 'BÖ-AE 2325',
          'gesamtkosten': 3432.57,
          'km_stand_anfang': 27299,
          'km_stand_ende': null,
          'km_gefahren': null,
          'satz_je_km': null,
          'kosten': [
            {'kostenart': 'versicherung', 'betrag_brutto': 760.37},
            {'kostenart': 'kfz_steuer', 'betrag_brutto': 103.00},
            {'kostenart': 'leasing', 'betrag_brutto': 2569.20},
          ],
        },
      ],
      'fahrten': [
        for (var i = 0; i < fahrten; i++)
          {
            'fahrt_datum': '2026-${(i % 12 + 1).toString().padLeft(2, '0')}-14',
            'anlass': i.isEven
                ? 'Befüllung Automat Osterweddingen, Einkauf Großhandel'
                : 'Wartung Automat Sülzetal',
            'kilometer': 42 + i,
            'pkw_id': 'a',
            'satz_je_km': 0.2821,
            'betrag': 12.34,
          },
      ],
    };

const pkwUnterschriften = [
  {'full_name': 'Pia Blume', 'role_label': 'Gesellschafterin'},
  {'full_name': 'Philipp Blume', 'role_label': 'Gesellschafter'},
];

List<Map<String, dynamic>> inventurBewegungen({int produkte = 3, int jeProdukt = 6}) => [
      for (var p = 0; p < produkte; p++)
        for (var i = 0; i < jeProdukt; i++)
          {
            'product_id': 'p$p',
            'product_name': ['Snickers 50 g', 'Coca-Cola 0,5 l', 'Haribo Goldbären 200 g',
                'Pringles Original', 'Red Bull 0,25 l', 'Twix 50 g'][p % 6],
            'sku': 'SKU-${1000 + p}',
            'type': ['refill', 'sale', 'sale', 'disposal', 'refill', 'correction'][i % 6],
            'quantity_delta': [24, -5, -7, -1, 12, -1][i % 6],
            'unit_cost': 0.62 + p * 0.1,
            'occurred_at': '2026-0${i % 9 + 1}-1${i % 9}T10:00:00Z',
            'invoice_number': 'RE-2026-${100 + i}',
            'invoice_date': '2026-0${i % 9 + 1}-0${i % 9 + 1}',
            'lot_expiry': '2027-01-31',
            'reason': i % 6 == 3 ? 'MHD überschritten' : '',
          },
    ];

List<Map<String, dynamic>> inventurLots({int produkte = 3}) => [
      for (var p = 0; p < produkte; p++)
        {
          'product_id': 'p$p',
          'remaining_qty': 22,
          'unit_cost': 0.62 + p * 0.1,
          'invoice_number': 'RE-2026-100',
          'invoice_date': '2026-09-01',
          'lot_expiry': '2027-01-31',
          'mhd_days_left': 73,
          'mhd_pct': 0,
          'lot_gross': 13.64 + p,
          'lot_discount': 0,
          'lot_net': 13.64 + p,
        },
    ];
