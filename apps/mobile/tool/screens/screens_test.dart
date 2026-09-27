// Bildschirmfotos der Kundenoberfläche für die Designabnahme (ADR 0008).
//
// Kein Test im Sinne der CI: Die Datei liegt bewusst außerhalb von `test/`,
// damit `flutter test` sie nicht mitläuft. Sie rendert die wichtigsten
// Bildschirme mit Beispieldaten und schreibt PNG-Dateien:
//
//   flutter test tool/screens/screens_test.dart --update-goldens
//
// Ergebnis: `tool/screens/out/*.png`. Die Beispieldaten existieren nur hier;
// sie erreichen weder die App noch die Datenbank.
import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/core/theme/app_theme.dart';
import 'package:boerdesnack24/core/theme/app_tokens.dart';
import 'package:boerdesnack24/features/customer/domain/entities/customer_models.dart';
import 'package:boerdesnack24/features/customer/domain/entities/donations_news.dart';
import 'package:boerdesnack24/features/customer/domain/entities/loyalty_status.dart';
import 'package:boerdesnack24/features/customer/domain/entities/offer.dart';
import 'package:boerdesnack24/features/customer/domain/entities/product_detail.dart';
import 'package:boerdesnack24/features/customer/domain/entities/receipt.dart';
import 'package:boerdesnack24/features/customer/domain/repositories/customer_repository.dart';
import 'package:boerdesnack24/features/customer/presentation/controllers/customer_providers.dart';
import 'package:boerdesnack24/features/customer/presentation/customer_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/donations_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/receipts_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/rewards_screen.dart';
import 'package:boerdesnack24/features/management/domain/entities/machine.dart';
import 'package:boerdesnack24/features/management/presentation/controllers/management_providers.dart';
import 'package:boerdesnack24/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show FontLoader;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:shared_preferences/shared_preferences.dart';

final _now = DateTime(2026, 9, 26, 10);

class _FakeRepo implements CustomerRepository {
  @override
  Future<List<Offer>> offers() async => [
        Offer(
          id: 'o1',
          title: 'Apfelschorle 0,5 l',
          kind: 'weekly',
          description: 'Diese Woche günstiger.',
          validTo: _now.add(const Duration(days: 4)),
          productId: 'p1',
          regularPriceNet: 1.68,
          offerPriceNet: 1.51,
          discountPercent: 10,
        ),
        Offer(
          id: 'o2',
          title: 'Schoko-Riegel',
          kind: 'daily',
          validTo: _now.add(const Duration(hours: 10)),
          productId: 'p2',
          regularPriceNet: 1.12,
          offerPriceNet: 1.01,
          discountPercent: 10,
        ),
      ];

  @override
  Future<List<PersonalOffer>> myPersonalOffers() async => [
        for (final (i, pct) in [5.0, 10.0, 15.0].indexed)
          PersonalOffer(
            id: 'po$i',
            title: ['Eistee Pfirsich', 'Salzbrezeln', 'Kaffee Crema'][i],
            regularPriceNet: 1.50,
            offerPriceNet: 1.50 * (1 - pct / 100),
            discountPercent: pct,
            redemptionCode: '48213$i',
            validFrom: _now,
            validTo: _now.add(const Duration(days: 14)),
            source: PersonalOfferSource.values.first,
          ),
      ];

  @override
  Future<PersonalOffer?> ensurePersonalOffer() async => null;

  @override
  Future<LoyaltyStatus?> myLoyaltyStatus() async => LoyaltyStatus(
        points: 740,
        reachedTiers: const [500],
        nextTier: 1200,
        pointsToNext: 460,
        monthStart: DateTime(2026, 9),
        nextReset: DateTime(2026, 10),
      );

  @override
  Future<Set<String>> myActivatedWeeklyOfferIds() async => {'o1'};

  @override
  Future<List<RankedProduct>> topProducts(
    String category, {
    int limit = 3,
  }) async =>
      [
        for (final (i, n) in ['Apfelschorle', 'Eistee', 'Wasser'].indexed)
          RankedProduct(
            id: 'r$i',
            name: n,
            category: category,
            avgRating: 4.6 - i * 0.3,
            reviewCount: 12 - i * 3,
            listPriceNet: 1.4 + i * 0.2,
            taxRate: 19,
          ),
      ];

  @override
  Future<DonationSummary> myDonationSummary() async =>
      const DonationSummary(totalDonated: 1.84, purchaseCount: 23);

  @override
  Future<List<PurchaseDonation>> myDonationsByPurchase() async => [
        for (var i = 0; i < 4; i++)
          PurchaseDonation(
            purchaseId: 'pu$i',
            purchasedAt: _now.subtract(Duration(days: i * 3)),
            totalGross: 2.60,
            totalNet: 2.43,
            donation: 0.12,
            sharePct: 5,
          ),
      ];

  @override
  Future<DonationPoolSummary> donationPoolSummary() async =>
      const DonationPoolSummary(
        myDonated: 1.84,
        totalPool: 128.40,
        mySharePct: 1.43,
        nonAppGross: 0,
      );

  @override
  Future<List<DonationCause>> donationCauses() async => const [
        DonationCause(
          id: 'c1',
          title: 'Jugendfeuerwehr Osterweddingen',
          status: 'active',
          voteCount: 41,
          votedByMe: true,
        ),
        DonationCause(
          id: 'c2',
          title: 'Sportverein Langenweddingen',
          status: 'active',
          voteCount: 29,
          votedByMe: false,
        ),
        DonationCause(
          id: 'c3',
          title: 'Förderverein Grundschule',
          status: 'active',
          voteCount: 17,
          votedByMe: false,
        ),
      ];

  @override
  Future<List<NewsArticle>> listNews({int limit = 20}) async => [];

  @override
  Future<Map<String, dynamic>?> myCustomer() async =>
      {'customer_number': 'K-100231', 'full_name': 'Alex Muster'};

  @override
  Future<List<Recommendation>> myRecommendations() async => [];

  @override
  Future<List<CustomerPrice>> myPrices() async => [];

  @override
  dynamic noSuchMethod(Invocation invocation) => Future<dynamic>.value(null);
}

// ── Kontrastmessung ─────────────────────────────────────────────────────
// Jeder sichtbare Text und jedes Symbol wird gegen den Hintergrund gemessen,
// auf dem es tatsächlich liegt: Die Vorfahren werden nach der nächsten
// Füllfarbe abgesucht, halbtransparente Schichten bis zur deckenden Fläche
// verrechnet. Schwelle nach WCAG 2.1 AA: 4,5:1 für Text, 3:1 für großen Text
// und Symbole.
double _lin(double v) =>
    v <= 0.03928 ? v / 12.92 : math.pow((v + 0.055) / 1.055, 2.4).toDouble();
double _lum(Color c) =>
    0.2126 * _lin(c.r) + 0.7152 * _lin(c.g) + 0.0722 * _lin(c.b);
double _ratio(Color a, Color b) {
  final x = _lum(a), y = _lum(b);
  return (math.max(x, y) + 0.05) / (math.min(x, y) + 0.05);
}

Color _over(Color top, Color base) => Color.from(
      alpha: 1,
      red: top.r * top.a + base.r * (1 - top.a),
      green: top.g * top.a + base.g * (1 - top.a),
      blue: top.b * top.a + base.b * (1 - top.a),
    );

Color? _fill(Widget w) {
  if (w is ColoredBox) return w.color;
  if (w is DecoratedBox) {
    final d = w.decoration;
    if (d is BoxDecoration) {
      if (d.color != null) return d.color;
      final g = d.gradient;
      if (g != null && g.colors.isNotEmpty) {
        // Schlechtester Fall: die hellste Stelle des Verlaufs.
        return g.colors.reduce((a, b) => _lum(a) > _lum(b) ? a : b);
      }
    }
    if (d is ShapeDecoration && d.color != null) return d.color;
  }
  if (w is Material && w.type != MaterialType.transparency) return w.color;
  return null;
}

List<String> _contrast(WidgetTester tester) {
  final out = <String>[];
  for (final e in find.byType(RichText, skipOffstage: true).evaluate()) {
    final w = e.widget as RichText;
    final plain = w.text.toPlainText().trim();
    if (plain.isEmpty) continue;
    final ro = e.renderObject;
    if (ro is! RenderBox || !ro.hasSize || ro.size.isEmpty) continue;
    Color? fg;
    double size = 14;
    var bold = false;
    String? family;
    void take(TextStyle? s) {
      if (s == null) return;
      fg = s.color ?? fg;
      size = s.fontSize ?? size;
      bold = (s.fontWeight?.value ?? 400) >= 700 || bold;
      family = s.fontFamily ?? family;
    }

    take(w.text.style);
    w.text.visitChildren((span) {
      if (span is TextSpan) take(span.style);
      return true;
    });
    if (fg == null) continue;
    final layers = <Color>[];
    var opaque = false;
    e.visitAncestorElements((a) {
      final c = _fill(a.widget);
      if (c != null && c.a > 0.02) {
        layers.add(c);
        if (c.a >= 0.99) {
          opaque = true;
          return false;
        }
      }
      return true;
    });
    var bg = opaque ? layers.removeLast() : AppColors.canvas;
    for (final l in layers.reversed) {
      bg = _over(l, bg);
    }
    final shown = _over(fg!, bg);
    final icon = family == 'MaterialIcons';
    final large = size >= 24 || (size >= 18.66 && bold);
    final need = icon || large ? 3.0 : 4.5;
    final r = _ratio(shown, bg);
    if (r < need) {
      final chain = <String>[];
      e.visitAncestorElements((a) {
        final t = a.widget.runtimeType.toString();
        if (t.startsWith('_') && !chain.contains(t)) chain.add(t);
        return chain.length < 3;
      });
      final label = icon ? 'Symbol' : plain.replaceAll('\n', ' ');
      out.add(
          '${r.toStringAsFixed(2)} < $need  „${label.length > 50 ? label.substring(0, 50) : label}"  '
          'Schrift ${_hex(shown)} auf ${_hex(bg)}  [${chain.join(' < ')}]');
    }
  }
  return out;
}

String _hex(Color c) {
  final parts = [c.r, c.g, c.b];
  return '#${parts.map((v) => (v * 255).round().toRadixString(16).padLeft(2, '0')).join()}';
}

Future<void> _loadFonts() async {
  Future<void> family(String name, List<String> files) async {
    final loader = FontLoader(name);
    for (final f in files) {
      final bytes = File(f).readAsBytesSync();
      loader.addFont(Future.value(ByteData.view(bytes.buffer)));
    }
    await loader.load();
  }

  await family('Bricolage Grotesque', [
    'assets/fonts/BricolageGrotesque-Bold.ttf',
    'assets/fonts/BricolageGrotesque-ExtraBold.ttf',
  ]);
  await family('Hanken Grotesk', [
    'assets/fonts/HankenGrotesk-Regular.ttf',
    'assets/fonts/HankenGrotesk-SemiBold.ttf',
    'assets/fonts/HankenGrotesk-Bold.ttf',
    'assets/fonts/HankenGrotesk-ExtraBold.ttf',
  ]);
  final root = Platform.environment['FLUTTER_ROOT'] ??
      File(Platform.resolvedExecutable).parent.parent.parent.parent.path;
  await family('MaterialIcons', [
    '$root/bin/cache/artifacts/material_fonts/MaterialIcons-Regular.otf',
  ]);
}

List<Override> _overrides() => [
      customerRepositoryProvider.overrideWithValue(_FakeRepo()),
      myGamificationProvider.overrideWith(
        (ref) async => {
          // Form wie my_gamification_status (Migration 0060): Grund-
          // rabatt und Umsatz oben, Zusatzrabatte je Stufe im Tier.
          'base_discount_pct': 5,
          'lifetime_gross': 212.4,
          'tier': {
            'code': 'bronze',
            'label': 'Bronze',
            'discount_pct': 1,
            'total_discount_pct': 6,
            'progress': 0.18,
            'next_label': 'Silber',
            'next_min_eur': 500,
            'next_discount_pct': 2.5,
          },
          'challenges': [
            {
              'code': 'streak',
              'title': 'Drei Tage in Folge',
              'description': 'Öffne die App an drei Tagen hintereinander.',
              'target': 3,
              'done': 2,
              'reward_text': '50 Punkte',
            },
          ],
          'badges': [
            {'code': 'first', 'label': 'Erster Kauf', 'earned': true},
          ],
        },
      ),
      hasSubscriptionProvider.overrideWith((ref) async => false),
      showInstallHintProvider.overrideWith((ref) async => false),
      myReceiptsProvider.overrideWith(
        (ref) async => [
          for (final (i, l) in ['Apfelschorle 0,5 l', 'Salzbrezeln'].indexed)
            Receipt(
              id: 'b$i',
              purchasedAt: _now.subtract(Duration(days: i)),
              totalGross: 2.60,
              source: 'nayax',
              category: i == 0 ? 'Getränke' : 'Snacks & Süßes',
              itemCount: 1,
              machineName: 'Automat Bahnhof',
              items: [
                ReceiptItem(
                  label: l,
                  quantity: 1,
                  unitPrice: 2.60,
                  lineGross: 2.60,
                  category: i == 0 ? 'Getränke' : 'Snacks & Süßes',
                ),
              ],
            ),
        ],
      ),
      machinesProvider.overrideWith(
        (ref) async => const [
          Machine(
            id: 'm1',
            code: 'OW-01',
            name: 'Automat Bahnhof',
            type: 'snack',
            isCooled: true,
            city: 'Osterweddingen',
          ),
        ],
      ),
    ];

Widget _app(Widget home) => ProviderScope(
      overrides: _overrides(),
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: AppTheme.dark(),
        localizationsDelegates: AppLocalizations.localizationsDelegates,
        supportedLocales: AppLocalizations.supportedLocales,
        locale: const Locale('de'),
        home: home,
      ),
    );

Future<void> _shot(
  WidgetTester tester,
  String name,
  Widget home, {
  double height = 844,
  Future<void> Function(WidgetTester)? before,
}) async {
  tester.view.physicalSize = Size(390 * 2, height * 2);
  tester.view.devicePixelRatio = 2;
  addTearDown(tester.view.reset);
  await tester.pumpWidget(_app(home));
  await tester.pump(const Duration(milliseconds: 50));
  for (var i = 0; i < 20; i++) {
    await tester.pump(const Duration(milliseconds: 100));
  }
  if (before != null) await before(tester);
  final befunde = _contrast(tester);
  File('tool/screens/out/${name}_kontrast.txt')
    ..createSync(recursive: true)
    ..writeAsStringSync(
      befunde.isEmpty ? 'keine Befunde\n' : '${befunde.join('\n')}\n',
    );
  // ignore: avoid_print
  print('$name: ${befunde.length} Kontrastbefunde');
  await expectLater(
    find.byType(MaterialApp),
    matchesGoldenFile('out/$name.png'),
  );
}

void main() {
  setUpAll(() async {
    await initializeDateFormatting('de_DE');
    // ignore: invalid_use_of_visible_for_testing_member
    SharedPreferences.setMockInitialValues({
      'bs24_onboarding_shown_v2': true,
      'install_hint_dismissed_v1': true,
    });
    await _loadFonts();
  });

  testWidgets('01 Start', (t) => _shot(t, '01_start', const CustomerScreen()));
  testWidgets(
    '01b Start lang',
    (t) => _shot(t, '01b_start_lang', const CustomerScreen(), height: 2600),
  );
  testWidgets(
    '02 Meine Spenden',
    (t) => _shot(
      t,
      '02_meine_spenden',
      const CustomerScreen(),
      height: 1400,
      before: (t) async {
        await t.tap(find.text('Meine Spenden'));
        for (var i = 0; i < 10; i++) {
          await t.pump(const Duration(milliseconds: 100));
        }
      },
    ),
  );
  testWidgets(
    '03 Spenden',
    (t) => _shot(t, '03_spenden', const DonationsScreen(), height: 1800),
  );
  testWidgets(
    '04 Prämien',
    (t) => _shot(t, '04_praemien', const RewardsScreen(), height: 1800),
  );
  testWidgets(
    '05 Belege',
    (t) => _shot(t, '05_belege', const ReceiptsScreen(), height: 1400),
  );
  testWidgets(
    '06 Automaten',
    (t) => _shot(
      t,
      '06_automaten',
      const CustomerScreen(),
      before: (t) async {
        await t.tap(find.text('Automaten'));
        for (var i = 0; i < 10; i++) {
          await t.pump(const Duration(milliseconds: 100));
        }
      },
    ),
  );
}
