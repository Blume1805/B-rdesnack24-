import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bs24_kern/core/pricing/pricing.dart';
import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/core/utils/formatters.dart';
import 'package:bs24_kern/core/widgets/design_system/design_system.dart';
import 'package:bs24_kunden/features/customer/presentation/controllers/customer_providers.dart';
import 'package:bs24_kunden/features/customer/presentation/screens/ai_info_screen.dart';

/// Rechnet dem Kunden vor, ob sich das Abo **für ihn** lohnt — und sagt
/// es ihm auch, wenn nicht.
///
/// Das ist die wichtigste Einzelentscheidung des Zielkonzepts vom
/// 10.09.2026. Begründung: Bei 0,99 EUR im Monat ist der Ertrag pro
/// Abschluss so gering, dass ein Fehlverkauf sich nie rechnet. Er kommt
/// als Kündigung zurück, und davor als Verärgerung über eine App, die
/// etwas verkauft hat, das erkennbar nichts brachte.
///
/// **Gerechnet wird ausschließlich mit dem, was der Kunde tatsächlich
/// gekauft hat.** Keine Modellannahme, keine unterstellte Einlösequote
/// für Coupons, keine hochgerechneten Warenkörbe. Der Zeitraum sind die
/// letzten 90 Tage; das ist lang genug, um Ausreißer zu glätten, und
/// kurz genug, um das aktuelle Verhalten abzubilden.
///
/// **Kennzeichnung.** Das Ergebnis ist eine auf den einzelnen Kunden
/// zugeschnittene Aussage, die eine Regel erzeugt — damit fällt sie
/// unter die Kennzeichnungspflicht der Projektregeln. Der Chip trägt
/// bewusst „Automatisch" und nicht „KI": hier rechnet eine Subtraktion
/// auf dem Gerät, kein AI-System i. S. v. Art. 3 EU AI Act. Dieselbe
/// Unterscheidung wie beim regelbasierten Chat-Assistenten.
class AboRechner extends ConsumerWidget {
  const AboRechner({super.key, this.zeitraumTage = 90});

  /// Betrachtungszeitraum in Tagen.
  final int zeitraumTage;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final kaeufe = ref.watch(myPurchasesProvider);

    return kaeufe.when(
      loading: () => const SizedBox.shrink(),
      error: (_, __) => const SizedBox.shrink(),
      data: (liste) {
        final grenze = DateTime.now().subtract(Duration(days: zeitraumTage));
        final imZeitraum =
            liste.where((k) => k.purchasedAt.isAfter(grenze)).toList();

        if (imZeitraum.isEmpty) return const _NochKeineKaeufe();

        final umsatz = imZeitraum.fold<double>(0, (s, k) => s + k.totalGross);
        final ersparnis = umsatz * Pricing.appDiscountRate;

        // Abo-Kosten im selben Zeitraum, damit die beiden Zahlen
        // vergleichbar sind. Das Jahres-Abo ist der günstigere Weg und
        // deshalb der ehrlichere Vergleichsmaßstab.
        final monate = zeitraumTage / 30.0;
        final kostenMonatlich = Pricing.subMonthlyEur * monate;
        final kostenJaehrlich = Pricing.subYearlyEur * (zeitraumTage / 365.0);
        final guenstigereKosten = kostenMonatlich < kostenJaehrlich
            ? kostenMonatlich
            : kostenJaehrlich;

        final lohntSich = ersparnis > guenstigereKosten;

        return AppCard(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const _RechnerKopf(),
              const SizedBox(height: AppSpacing.s2),
              _Zeile(
                'Deine Käufe ($zeitraumTage Tage)',
                Formatters.euro(umsatz),
              ),
              _Zeile(
                'Davon 5 % mit Abo',
                '− ${Formatters.euro(ersparnis)}',
              ),
              const Divider(height: AppSpacing.s5),
              _Zeile(
                'Abo im selben Zeitraum',
                Formatters.euro(guenstigereKosten),
              ),
              const SizedBox(height: AppSpacing.s3),
              _Ergebnis(
                lohntSich: lohntSich,
                differenz: (ersparnis - guenstigereKosten).abs(),
              ),
            ],
          ),
        );
      },
    );
  }
}

/// Kopfzeile des Rechners: Überschrift plus Kennzeichnung.
///
/// Die Kennzeichnung steht neben der Überschrift und nicht unter dem
/// Ergebnis, damit sie vor der Aussage gelesen wird und nicht danach.
class _RechnerKopf extends StatelessWidget {
  const _RechnerKopf();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const Expanded(child: Eyebrow('Deine Rechnung')),
        const SizedBox(width: AppSpacing.s2),
        AiBadge(
          label: 'Automatisch',
          dense: true,
          onTap: () => Navigator.of(context).push(
            MaterialPageRoute(builder: (_) => const AiInfoScreen()),
          ),
        ),
      ],
    );
  }
}

class _Ergebnis extends StatelessWidget {
  const _Ergebnis({required this.lohntSich, required this.differenz});

  final bool lohntSich;
  final double differenz;

  @override
  Widget build(BuildContext context) {
    // Break-even nur mit dem Dauerrabatt: 0,99 / 0,05 = 19,80 EUR im
    // Monat. Der Wert wird berechnet und nicht als Text gepflegt, damit
    // er stimmt, wenn sich Preis oder Rabattsatz ändern.
    const schwelleMonat = Pricing.subMonthlyEur / Pricing.appDiscountRate;

    if (lohntSich) {
      return _Kasten(
        farbe: AppColors.brand,
        titel: 'Für dich lohnt sich das Abo.',
        text: 'Du sparst rund ${Formatters.euro(differenz)} mehr, als das '
            'Abo im selben Zeitraum kostet.',
      );
    }
    return _Kasten(
      farbe: AppColors.textMuted,
      titel: 'Für dich lohnt sich das Abo aktuell noch nicht.',
      text: 'Es kostet ${Formatters.euro(differenz)} mehr, als du damit '
          'sparen würdest. Die Rechnung kippt ab etwa '
          '${Formatters.euro(schwelleMonat)} Einkauf im Monat — wir sagen '
          'dir Bescheid, wenn es so weit ist.',
    );
  }
}

class _NochKeineKaeufe extends StatelessWidget {
  const _NochKeineKaeufe();

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const _RechnerKopf(),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Sobald du das erste Mal gekauft hast, rechnen wir dir hier '
            'aus, ob sich ein Abo für dich lohnt — mit deinen Zahlen, '
            'nicht mit Beispielen.',
            style: AppTypography.body(size: 13),
          ),
        ],
      ),
    );
  }
}

class _Kasten extends StatelessWidget {
  const _Kasten({
    required this.farbe,
    required this.titel,
    required this.text,
  });

  final Color farbe;
  final String titel;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(AppSpacing.s3),
      decoration: BoxDecoration(
        color: AppColors.surfaceAlt,
        border: Border(left: BorderSide(color: farbe, width: 3)),
        borderRadius: const BorderRadius.horizontal(
          right: Radius.circular(AppRadii.md),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            titel,
            style: AppTypography.body(
              size: 13.5,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: 2),
          Text(text, style: AppTypography.body(size: 12.5)),
        ],
      ),
    );
  }
}

class _Zeile extends StatelessWidget {
  const _Zeile(this.label, this.wert);

  final String label;
  final String wert;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(child: Text(label, style: AppTypography.body(size: 13))),
          Text(
            wert,
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}
