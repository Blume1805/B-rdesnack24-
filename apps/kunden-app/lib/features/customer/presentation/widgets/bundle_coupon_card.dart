import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/core/utils/formatters.dart';
import 'package:bs24_kern/core/widgets/design_system/design_system.dart';
import 'package:bs24_kunden/features/customer/domain/entities/bundle.dart';
import 'package:bs24_kunden/features/customer/presentation/controllers/customer_providers.dart';

/// Kombiangebot als Coupon: die Produktbilder nebeneinander mit einem
/// Pluszeichen dazwischen, darunter der durchgestrichene Einzelpreis und
/// der Bundlepreis.
///
/// Vorgabe Philipp vom 10.09.2026. Der Sinn der Bauform: Der Kunde soll den
/// Unterschied sehen, nicht ausrechnen. Deshalb stehen beide Zahlen
/// nebeneinander und nicht nacheinander, und deshalb ist die Ersparnis noch
/// einmal ausgeschrieben.
///
/// **Kein Rabattversprechen ohne Deckung.** Liegt der Bundlepreis nicht
/// unter der Summe der Einzelpreise, wird der durchgestrichene Preis
/// weggelassen. Ein durchgestrichener Preis, der nicht höher ist als der
/// verlangte, wäre eine irreführende Angabe (§ 5 UWG) — und einen solchen
/// Datensatz kann es geben, sobald jemand die Preise von Hand pflegt.
class BundleCouponCard extends ConsumerWidget {
  const BundleCouponCard({super.key, required this.bundle, this.onTap});

  final Bundle bundle;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final werbung = ref.watch(couponWerbeplatzProvider).valueOrNull;
    return AppCard(
      onTap: onTap,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  bundle.title,
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              if (bundle.isSaving) _ErsparnisChip(bundle: bundle),
            ],
          ),
          if (bundle.description != null &&
              bundle.description!.trim().isNotEmpty) ...[
            const SizedBox(height: 2),
            Text(
              bundle.description!,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
          ],
          const SizedBox(height: AppSpacing.s4),

          // Bild + Bild + Bild …
          _ProduktReihe(items: bundle.items),

          const SizedBox(height: AppSpacing.s4),
          _Preisblock(bundle: bundle),

          const SizedBox(height: AppSpacing.s2),
          Text(
            bundle.validTo == null
                ? 'Gültig bis auf Weiteres'
                : 'Gültig bis ${Formatters.date(bundle.validTo!)}',
            style: AppTypography.body(size: 11, color: AppColors.textMuted),
          ),

          // Gebuchte Werbefläche. Fehlt sie, fehlt sie ganz — kein
          // freigehaltener Kasten, der nach einem Ladefehler aussieht.
          if (werbung != null && werbung.isNotEmpty) ...[
            const Divider(height: AppSpacing.s5),
            _Werbezeile(daten: werbung.first),
          ],
        ],
      ),
    );
  }
}

/// Die gebuchte Werbefläche eines Coupons.
class _Werbezeile extends StatelessWidget {
  const _Werbezeile({required this.daten});

  final Map<String, dynamic> daten;

  @override
  Widget build(BuildContext context) {
    final logo = daten['logo_url'] as String?;
    if (logo == null || logo.isEmpty) return const SizedBox.shrink();
    return Werbeplatz(
      logoUrl: logo,
      werbetreibender: daten['werbetreibender'] as String? ?? '',
      altText: daten['alt_text'] as String?,
      kennzeichnung: daten['kennzeichnung'] as String? ?? 'Anzeige',
    );
  }
}

/// Die Produkte mit Pluszeichen dazwischen. Bricht bei schmalen Geräten
/// um, statt die Kacheln zu stauchen — drei Positionen passen sonst nicht
/// mehr nebeneinander.
class _ProduktReihe extends StatelessWidget {
  const _ProduktReihe({required this.items});

  final List<BundleItem> items;

  @override
  Widget build(BuildContext context) {
    final teile = <Widget>[];
    for (var i = 0; i < items.length; i++) {
      if (i > 0) teile.add(const _Plus());
      teile.add(_ProduktKachel(item: items[i]));
    }
    return Wrap(
      crossAxisAlignment: WrapCrossAlignment.center,
      alignment: WrapAlignment.center,
      spacing: AppSpacing.s2,
      runSpacing: AppSpacing.s2,
      children: teile,
    );
  }
}

class _Plus extends StatelessWidget {
  const _Plus();

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 24,
      height: 84,
      child: Center(
        child: Text(
          '+',
          style: AppTypography.display(
            size: 22,
            weight: FontWeight.w800,
            color: AppColors.brandText,
          ),
        ),
      ),
    );
  }
}

/// Ein Produkt im Bundle: Bild und Name.
///
/// Produktfotos gibt es noch nicht. Statt eines leeren Rahmens steht eine
/// getönte Kachel mit dem Wort „BILD" — dieselbe Behandlung wie überall im
/// Katalog, damit niemand ein fehlendes Bild für einen Ladefehler hält.
class _ProduktKachel extends StatelessWidget {
  const _ProduktKachel({required this.item});

  final BundleItem item;

  @override
  Widget build(BuildContext context) {
    final bild = item.imageUrl;
    return SizedBox(
      width: 108,
      child: Column(
        children: [
          Container(
            width: 84,
            height: 84,
            decoration: BoxDecoration(
              color: AppColors.surfaceAlt,
              border: Border.all(color: AppColors.borderSubtle),
              borderRadius: BorderRadius.circular(AppRadii.md),
            ),
            clipBehavior: Clip.antiAlias,
            alignment: Alignment.center,
            child: bild == null || bild.isEmpty
                ? Text(
                    'BILD',
                    style: AppTypography.body(
                      size: 10,
                      weight: FontWeight.w800,
                      color: AppColors.textMuted,
                    ).copyWith(letterSpacing: 1),
                  )
                : Image.network(
                    bild,
                    fit: BoxFit.cover,
                    width: 84,
                    height: 84,
                    errorBuilder: (_, __, ___) => Text(
                      'BILD',
                      style: AppTypography.body(
                        size: 10,
                        weight: FontWeight.w800,
                        color: AppColors.textMuted,
                      ),
                    ),
                  ),
          ),
          const SizedBox(height: 6),
          Text(
            item.quantity > 1 ? '${item.quantity} × ${item.name}' : item.name,
            textAlign: TextAlign.center,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: AppTypography.body(
              size: 11,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

/// Die vier Preise: einzeln und im Bundle, jeweils mit und ohne
/// Dauerrabatt.
///
/// Zwei Zeilen statt vier Zahlen nebeneinander. Jede Zeile beantwortet eine
/// Frage vollständig — „was zahle ich" —, statt den Kunden vier Beträge
/// sortieren zu lassen. Die Abo-Zeile steht darunter und nicht darüber,
/// weil die meisten Kunden kein Abo haben; sie sollen ihren eigenen Preis
/// zuerst finden.
///
/// **Alle vier Beträge kommen vom Server.** Der Dauerrabatt wird hier nicht
/// nachgerechnet: `7,10 × 0,95` ergibt je nach Rundungsregel 6,74 oder
/// 6,75, und ein Preis, der sich je nach Plattform um einen Cent
/// unterscheidet, ist keiner.
class _Preisblock extends StatelessWidget {
  const _Preisblock({required this.bundle});

  final Bundle bundle;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _Preiszeile(
          vorher: bundle.regularGross,
          jetzt: bundle.priceGross,
          spart: bundle.isSaving,
          gross: true,
        ),
        if (bundle.hasAboRow) ...[
          const SizedBox(height: AppSpacing.s2),
          Row(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                decoration: BoxDecoration(
                  color: AppColors.brandLight,
                  borderRadius: BorderRadius.circular(AppRadii.sm),
                ),
                child: Text(
                  'Mit Abo',
                  style: AppTypography.body(
                    size: 10,
                    weight: FontWeight.w800,
                    color: AppColors.brandText,
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: _Preiszeile(
                  vorher: bundle.regularGrossAbo,
                  jetzt: bundle.priceGrossAbo,
                  spart: bundle.savingsAbo > 0,
                  gross: false,
                ),
              ),
            ],
          ),
        ],
        if (bundle.isSaving) ...[
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Du sparst ${Formatters.euro(bundle.savings)}',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w800,
              color: AppColors.statusPositive,
            ),
          ),
        ],
      ],
    );
  }
}

/// Eine Preiszeile: durchgestrichener Vorher-Betrag, dann der geltende.
///
/// Der durchgestrichene Betrag entfällt, wenn er nicht höher ist als der
/// geltende. Ein durchgestrichener Preis behauptet eine Ersparnis; gibt es
/// sie nicht, ist die Behauptung falsch (§ 5 UWG).
class _Preiszeile extends StatelessWidget {
  const _Preiszeile({
    required this.vorher,
    required this.jetzt,
    required this.spart,
    required this.gross,
  });

  final double vorher;
  final double jetzt;
  final bool spart;
  final bool gross;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        if (spart) ...[
          Semantics(
            label: 'Einzeln zusammen ${Formatters.euro(vorher)}',
            child: Text(
              Formatters.euro(vorher),
              style: AppTypography.body(
                size: gross ? 15 : 13,
                weight: FontWeight.w600,
                color: AppColors.textMuted,
              ).copyWith(decoration: TextDecoration.lineThrough),
            ),
          ),
          const SizedBox(width: AppSpacing.s3),
        ],
        Text(
          Formatters.euro(jetzt),
          style: gross
              ? AppTypography.display(
                  size: 24,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                )
              : AppTypography.body(
                  size: 16,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
        ),
      ],
    );
  }
}

class _ErsparnisChip extends StatelessWidget {
  const _ErsparnisChip({required this.bundle});

  final Bundle bundle;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: AppColors.brand,
        borderRadius: BorderRadius.circular(AppRadii.pill),
      ),
      child: Text(
        '−${bundle.savingsPercent.toStringAsFixed(0)} %',
        style: AppTypography.body(
          size: 11,
          weight: FontWeight.w800,
          color: AppColors.ink,
        ),
      ),
    );
  }
}
